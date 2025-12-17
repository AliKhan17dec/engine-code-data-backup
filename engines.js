const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const { pageData } = require("./src/app/data/AllBrandsData/porsche.ts");

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
//     await client.query(`
//   CREATE TABLE IF NOT EXISTS engines (
//     id SERIAL PRIMARY KEY,
//     brand TEXT NOT NULL,
//     engine_code TEXT NOT NULL,
//     data JSONB NOT NULL,
//     created_at TIMESTAMPTZ DEFAULT NOW()
//   );

//   CREATE UNIQUE INDEX IF NOT EXISTS uq_engines_brand_engine_code 
//     ON engines (brand, engine_code);

//   CREATE INDEX IF NOT EXISTS idx_engine_data_gin ON engines USING GIN (data);
// `);

    let count = 0;

    //  Begin transaction
    // await client.query("BEGIN");

    for (const [brandKey, brandData] of Object.entries(pageData)) {
      // Extract researchResources at brand level
      const { researchResources, heroImage, engines } = brandData;

      for (const [engineCode, engineData] of Object.entries(engines)) {
        // Combine engineData with researchResources
        if (!engineData) {
          console.warn(`⚠️ Missing data for engine: ${brandKey}/${engineCode}`);
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
//         await client.query(
//           `
//   INSERT INTO engines (brand, engine_code, data)
//   VALUES ($1, $2, $3)
//   ON CONFLICT (brand, engine_code) DO UPDATE
//   SET data = EXCLUDED.data, created_at = NOW()
// `,
        //   [brandKey, engineCode, JSON.stringify(cleanData)],
        // );

        count++;
        if (count % 100 === 0) console.log(`Inserted ${count} engines...`);
      }
    }
    // Commit transaction
    // await client.query("COMMIT");
    console.log(`✅ Successfully inserted ${count} engine records.`);
  } catch (err) {
    // try {
      // await client.query("ROLLBACK");
    // } catch (rollbackErr) {
      // console.error("Rollback failed:", rollbackErr);
    // }
    console.error("❌ Error during ingestion:", err);

    throw err;
  } finally {
    await client.end();
  }
}

// Run it
main().catch(console.error);
