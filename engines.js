const { Client } = require("pg");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

function sanitizeForJSON(obj) {
  if (obj === null || obj === undefined) return null;

  if (typeof obj === "function") return "[function]";
  if (typeof obj === "symbol") return obj.toString();

  if (typeof obj === "object") {
    if (obj instanceof Date) return obj.toISOString();
    if (Array.isArray(obj)) {
      return obj.map(sanitizeForJSON);
    }

    const cleaned = {};
    for (const [k, v] of Object.entries(obj)) {
      // Skip React-specific or unserializable keys
      if (k === "icon" && typeof v === "object" && !Array.isArray(v)) continue;
      if (k === "children") continue;
      cleaned[k] = sanitizeForJSON(v);
    }
    return cleaned;
  }

  return obj;
}

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL");

    // Ensure table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS engines (
        id SERIAL PRIMARY KEY,
        brand TEXT NOT NULL,
        engine_code TEXT NOT NULL,
        data JSONB NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(brand, engine_code)
      );
    
      CREATE INDEX IF NOT EXISTS idx_engine_data_gin ON engines USING GIN (data);
    `);

    let count = 0;
    const dataDir = path.join(__dirname, "src/app/data/AllBrandsData");
    const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".ts"));

    console.log(`Found ${files.length} files to process.`);

    for (const file of files) {
      console.log(`Processing ${file}...`);
      const filePath = path.join(dataDir, file);
      let pageData;

      try {
        // Dynamic require
        const mod = require(filePath);
        pageData = mod.pageData;
      } catch (reqErr) {
        console.error(`Failed to load ${file}:`, reqErr);
        continue;
      }

      if (!pageData) {
        console.warn(`No pageData exported in ${file}`);
        continue;
      }

      for (const [brandKey, brandData] of Object.entries(pageData)) {
        // Extract researchResources at brand level
        const { researchResources, heroImage, engines } = brandData;

        // Skip if engines is missing or not iterable
        if (!engines) {
          console.warn(`No engines found for brand ${brandKey} in ${file}`);
          continue;
        }

        for (const [engineCode, engineData] of Object.entries(engines)) {
          // Combine engineData with researchResources
          if (!engineData) {
            console.warn(`! Missing data for engine: ${brandKey}/${engineCode}`);
            continue;
          }
          engineData.hero = engineData.hero || {};
          engineData.hero.image = engineData?.hero?.image ?? heroImage;
          const enrichedData = {
            ...engineData,
            researchResources, // Add researchResources to every engine
          };

          const cleanData = sanitizeForJSON(enrichedData);
          await client.query(
            `
            INSERT INTO engines (brand, engine_code, data)
            VALUES ($1, $2, $3)
            ON CONFLICT (brand, engine_code) DO UPDATE
            SET data = EXCLUDED.data, created_at = NOW()
          `,
            [brandKey, engineCode, JSON.stringify(cleanData)],
          );

          count++;
          if (count % 100 === 0) console.log(`Inserted ${count} engines...`);
        }
      }
    }

    console.log(`✅ Successfully inserted ${count} engine records.`);
  } catch (err) {
    console.error("❌ Error during ingestion:", err);
    throw err;
  } finally {
    await client.end();
  }
}

// Run it
main().catch(console.error);