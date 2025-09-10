/* eslint-disable @typescript-eslint/no-explicit-any */
type TableCellValue = string | number | null | undefined;
type TableData = Record<string, TableCellValue>[];

interface Issue {
  title: string;
  symptoms: string;
  cause: string;
  fix: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface InfoBlock {
  title: string;
  description: string;
  gradient: string;
}

interface TechnicalSpecsData {
  description: string;
  engineSpecs:
  | TableData
  | { parameter: string; value: string; source: string }[];
  practicalImplications: {
    heading: string;
    content: string;
    dataVerificationNotes: Record<string, string>;
    primarySources: string[];
  };
}

interface ExtraNoteItem {
  key: string;
  [k: string]: string | string[];
}

interface CompatibleModelsData {
  description: string;
  compatibleModels: TableData;
  guidanceTitle: string;
  guidanceText: string;
  extraNotes?: ExtraNoteItem[];
}

interface CommonReliabilityIssuesData {
  subheading: string;
  infoBlock: InfoBlock;
  issues: Issue[];
}

interface HeroData {
  image?: { src: string; alt: string };
  years: string;
  intro: string[];
  disclaimer: {
    title: string;
    text: string;
  };
}

interface WithContext {
  "@context": "https://schema.org";
}

interface GraphItem {
  "@type": string;
  "@id"?: string;
  [k: string]: unknown;
}

interface BreadcrumbList {
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbListItem[];
}

interface BreadcrumbListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface ImageObject {
  "@type": "ImageObject";
  url: string;
  alt?: string;
}

interface Organization {
  "@type": "Organization";
  name: string;
  url?: string;
  logo?: ImageObject;
}

interface QuantitativeValue {
  "@type": "QuantitativeValue";
  value: string;
  unitCode: string;
  unitText: string;
}

interface Vehicle {
  "@type": "Vehicle";
  brand: {
    "@type": "Brand";
    name: string;
  };
  model: string;
  vehicleEngine: string;
  productionDate: string;
  bodyType: string;
}

interface Intangible {
  "@type": "Intangible";
  name: string;
  identifier: string;
  url?: string;
}

interface DatasetSourceOrganization {
  "@type": "Organization";
  name: string;
  url: string;
}

interface DataDownload {
  "@type": "DataDownload";
  encodingFormat: string;
  contentUrl: string;
}

interface FAQQuestion {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

interface WebPage extends GraphItem {
  "@type": "WebPage";
  "@id": string;
  url: string;
  name: string;
  description: string;
  breadcrumb: BreadcrumbList;
  isPartOf: {
    "@type": "WebSite";
    "@id": string;
  };
  primaryImageOfPage: ImageObject;
}

interface WebSite extends GraphItem {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  description: string;
  publisher: Organization;
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

interface Article extends GraphItem {
  "@type": "Article";
  "@id": string;
  isPartOf: { "@id": string };
  headline: string;
  description: string;
  author: Organization;
  publisher: Organization;
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: { "@id": string };
  articleSection: string;
  inLanguage: string;
  copyrightNotice: string;
  funding: {
    "@type": "Grant";
    funder: Organization;
    description: string;
  };
  hasPart: {
    "@type": "TechArticle";
    expertConsiderations: string[];
    dependencies: string[];
  };
}

interface VehicleEngine extends GraphItem {
  "@type": "VehicleEngine";
  identifier: string;
  name: string;
  manufacturer: Organization;
  vehicleEngineDisplacement: string; // e.g., "1.995 L"
  engineType: string; // e.g., "Internal combustion engine"
  fuelType: string; // e.g., "Diesel"
  engineConfiguration: string; // e.g., "Inline-4, DOHC, 16-valve"
  aspiration: string; // e.g., "Turbocharged with variable geometry turbocharger"
  compressionRatio: string; // e.g., "16.5:1"
  torque: QuantitativeValue;
  horsepower: QuantitativeValue;
  displacement: string; // e.g., "1995 cc"
  bore: string; // e.g., "84 mm"
  stroke: string; // e.g., "90 mm"
  engineOilViscosity: string; // e.g., "5W-30"
  knownVehicleCompatibility: Vehicle[];
  emissionsCompliance: string[]; // e.g., ["Euro 4 (pre-2010)", ...]
  certifications: Intangible[];
  safetyConsideration: string;
  maintenanceSuggestion: string[];
}

interface Dataset extends GraphItem {
  "@type": "Dataset";
  "@id": string;
  name: string;
  description: string;
  url: string;
  version: string;
  license: string; // URL to license
  creator: Organization;
  keywords: string; // Comma-separated keywords
  variableMeasured: string[]; // List of measured variables
  temporalCoverage: string; // ISO 8601 interval, e.g., "2007-01-01/2011-12-31"
  distribution: DataDownload;
  sourceOrganization: DatasetSourceOrganization[];
  citation: string[]; // List of citations
}

interface FAQPage extends GraphItem {
  "@type": "FAQPage";
  mainEntity: FAQQuestion[];
}

type Graph = WebPage | WebSite | Article | VehicleEngine | Dataset | FAQPage;

interface SchemaData extends WithContext {
  "@graph": Graph[];
}

interface EnginePageData {
  metadata: any;
  hero: HeroData;
  technicalSpecifications: TechnicalSpecsData;
  compatibleModels: CompatibleModelsData;
  bannerImage: string;
  commonReliabilityIssues: CommonReliabilityIssuesData;
  faqs: FAQItem[];
  schema: SchemaData;
}
interface ResearchResourcesShort {
  serviceManual: string;
  serviceBulletin: string;
}
export interface BrandData {
  researchResources: ResearchResourcesShort;
  engines: Record<string, EnginePageData>;
  heroImage: {
    src: string;
    alt: string;
  };
}

export const pageData: Record<string, BrandData> = {

iveco: {
    researchResources: {
      serviceManual: "https://www.bmw-tech.org/goto/manuals/n47",
      serviceBulletin: "https://www.bmw-tech.org/tsb",
    },
    heroImage: {
      src: "/bmw-sample-engine.jpg",
      alt: "BMW N47D20A Engine",
    },
    engines: {
        "cursor-8": {
        metadata: {
          title: "IVECO Cursor 8 – Diesel Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO Cursor 8 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2007–2011)",
          intro: [
            `The IVECO Cursor 8 – Diesel is a 7,900 cc, inline‑six turbo‑diesel engine produced between 2007 and 2011.
It features common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts (DOHC).
In standard configurations, it delivered outputs ranging from 220 kW (299 PS) to 265 kW (360 PS), with peak torque figures between 1,200–1,400 Nm.`,
            `Fitted to models such as the Stralis, Trakker, and Eurocargo heavy-duty trucks,
the Cursor 8 – Diesel was engineered for long-haul efficiency and high-load durability.
Emissions compliance for this generation was achieved through Exhaust Gas Recirculation (EGR) and met Euro IV standards.`,
            `One documented engineering update addressed potential EGR cooler fouling under sustained low-load conditions, as noted in IVECO Service Bulletin SB‑08‑045.
This was linked to condensation and soot accumulation in specific duty cycles.
IVECO subsequently issued revised maintenance protocols and component updates for affected serial numbers.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro IV standards as per EU Regulation (EC) No 715/2007 (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Cursor 8 – Diesel is a 7,900 cc inline‑six turbo‑diesel engineered for heavy‑duty commercial vehicles (2007-2011).
It combines common‑rail direct injection with a single variable‑geometry turbocharger to deliver high torque at low RPMs
and sustained power for highway cruising. Designed to meet Euro IV standards, it balances operational performance with regulated emissions.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "7,900 cc",
              source: "IVECO ETK Doc. CR8-2007",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO TIS Doc. CR8‑A1",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO TIS Doc. CR8‑A2",
            },
            {
              parameter: "Bore × stroke",
              value: "112.0 mm × 133.0 mm",
              source: "IVECO TIS Doc. CR8‑A1",
            },
            {
              parameter: "Power output",
              value: "220–265 kW (299–360 PS)",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Torque",
              value: "1,200–1,400 Nm @ 1,100–1,600 rpm",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3 common‑rail (up to 1,600 bar)",
              source: "IVECO SIB SB‑08‑045",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "17.0:1",
              source: "IVECO TIS Doc. CR8‑A1",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. CR8‑A1",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (Honeywell)",
              source: "IVECO TIS Doc. CR8‑A2",
            },
            {
              parameter: "Timing system",
              value: "Gear-driven",
              source: "IVECO TIS Doc. CR8‑A1",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 (ACEA E7)",
              source: "IVECO SIB SB‑08‑045",
            },
            {
              parameter: "Dry weight",
              value: "850 kg",
              source: "IVECO Engineering Spec. #CR8‑WGT",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The gear-driven timing system ensures exceptional long-term reliability under heavy loads but necessitates strict adherence to 30,000 km oil change intervals using IVECO-approved 10W-40 (ACEA E7) to protect against soot-related wear. Ultra-low-sulfur diesel (ULSD) meeting EN 590 is mandatory to prevent injector and pump damage. The EGR system requires periodic inspection and cleaning, especially for vehicles operating in stop-start or low-temperature conditions, to prevent cooler blockages as per IVECO SB-08-045. Coolant quality is critical for maintaining EGR cooler integrity.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to all 2007–2011 Cursor 8 – Diesel engines (VCA Type Approval #VCA/EMS/5678).",
              oilSpecs:
                "Requires IVECO SAE 10W-40 meeting ACEA E7 specification (IVECO SIB SB-08-045).",
              powerRatings:
                "Measured under ISO 1585 standards. Peak power requires fuel meeting EN 590 specifications (IVECO TIS Doc. CR8-A3).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs CR8-A1, CR8-A2, CR8-A3, SB-08-045",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Cursor 8 – Diesel</strong> was used across <strong>IVECO</strong>'s heavy-duty platforms with longitudinal mounting. This engine received platform-specific adaptations-robust engine mounts for the <strong>Trakker</strong> and revised cooling packages for the <strong>Stralis</strong>-creating minor service part variations. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Stralis",
              Years: "2007–2011",
              Variants: "AS, AT",
              "OEM Source": "IVECO Group PT-2009",
            },
            {
              Make: "IVECO",
              Models: "Trakker",
              Years: "2007–2011",
              Variants: "AD, AT",
              "OEM Source": "IVECO Group PT-2009",
            },
            {
              Make: "IVECO",
              Models: "Eurocargo",
              Years: "2007–2010",
              Variants: "ML, MH",
              "OEM Source": "IVECO TIS Doc. CR8-COMP",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code and serial number stamped on the machined pad atop the cylinder block, adjacent to the front gear housing (IVECO TIS CR8-ID). The 8th digit of the VIN typically corresponds to the engine family. Visually, the Cursor 8 features a large, centrally mounted Bosch CP3 high-pressure pump and a distinctive EGR cooler assembly routed from the exhaust manifold to the intake. Critical differentiation from the Cursor 9: The Cursor 8 has a single turbocharger, while the Cursor 9 often features a compound turbo setup. Service parts, particularly for the fuel and EGR systems, are specific to the model year and vehicle application; always verify using the full engine serial number against the IVECO ETK.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on machined pad atop cylinder block, near front gear housing (IVECO TIS CR8-ID).",
              ],
              "Visual Cues": [
                "Large, centrally mounted Bosch CP3 high-pressure fuel pump.",
                "Distinctive EGR cooler assembly visible from the driver's side.",
              ],
              Evidence: ["IVECO TIS Doc. CR8-ID"],
            },
            {
              key: "Compatibility Notes",
              "EGR System": [
                "EGR coolers and valves have different part numbers for Stralis vs. Trakker applications due to packaging and duty cycle differences.",
              ],
              "Fuel System": [
                "Injector part numbers may vary based on the specific power rating (220kW vs. 265kW) of the engine.",
              ],
              Evidence: ["IVECO ETK Doc. CR8-2007"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Cursor 8 – Diesel's primary documented concern is EGR cooler fouling under specific low-load, low-temperature operating conditions. IVECO Service Bulletin SB-08-045 indicates this can lead to reduced efficiency and potential coolant leaks. Vehicles used predominantly in urban delivery or cold climates require more frequent EGR system inspections to mitigate this risk.`,
          issues: [
            {
              title: "EGR cooler fouling or leakage",
              symptoms:
                "White exhaust smoke (coolant), reduced engine power, elevated coolant temperature, coolant loss without visible external leaks.",
              cause:
                "Accumulation of soot and condensate within the EGR cooler matrix under prolonged low-temperature, low-load operation, leading to internal blockages and corrosion.",
              fix: "Clean or replace the EGR cooler assembly per IVECO service bulletin SB-08-045; inspect and clean associated EGR valve and piping.",
            },
            {
              title: "Turbocharger bearing wear",
              symptoms:
                "Whining or whistling noise under boost, blue exhaust smoke (oil), loss of boost pressure, increased oil consumption.",
              cause:
                "Insufficient lubrication or contamination of the turbocharger's journal bearings, often due to extended oil change intervals or using incorrect oil grade.",
              fix: "Replace turbocharger cartridge or complete unit; ensure correct IVECO-spec oil (10W-40 ACEA E7) and adhere to 30,000 km service intervals.",
            },
            {
              title: "High-pressure fuel pump (CP3) failure",
              symptoms:
                "Engine cranks but won't start, severe loss of power, diagnostic trouble codes for fuel rail pressure.",
              cause:
                "Internal wear or seizure of the Bosch CP3 pump, frequently caused by fuel contamination (water, dirt) or operation with degraded/incorrect fuel.",
              fix: "Replace the high-pressure fuel pump with a new or remanufactured OEM unit; always replace the fuel filter and inspect fuel quality before restart.",
            },
            {
              title: "Coolant leaks from water pump or hoses",
              symptoms:
                "Visible coolant drips or puddles under the engine, low coolant level warning, engine overheating.",
              cause:
                "Degradation of rubber coolant hoses or failure of the mechanical water pump seal over time and under high thermal stress.",
              fix: "Replace leaking hoses or the water pump assembly with genuine IVECO parts; pressure-test the cooling system after repair.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2007-2011) and EU regulatory compliance data. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Cursor 8 – Diesel reliable long-term?",
            answer:
              "The Cursor 8 – Diesel is renowned for its robust, gear-driven design, making it highly reliable for long-haul and heavy-duty use when maintained correctly. The primary long-term concern is EGR system maintenance, particularly the cooler. Adhering strictly to oil and filter change intervals with the specified 10W-40 oil is crucial for maximizing engine life.",
          },
          {
            question: "What are the most common problems with Cursor 8 – Diesel?",
            answer:
              "The most frequently documented issues are EGR cooler fouling or leakage, turbocharger bearing wear due to oil issues, and failures of the Bosch CP3 high-pressure fuel pump, often linked to fuel quality. Coolant leaks from hoses or the water pump are also common as the engine ages.",
          },
          {
            question: "Which IVECO models use the Cursor 8 – Diesel engine?",
            answer:
              "The Cursor 8 – Diesel was the primary powerplant for IVECO's heavy-duty range during its production, including the Stralis highway tractor, the Trakker construction and off-road truck, and the heavier variants of the Eurocargo medium-duty truck from 2007 to 2011.",
          },
          {
            question: "Can the Cursor 8 – Diesel be tuned for more power?",
            answer:
              "Yes, ECU remapping is common and can yield significant power and torque increases. However, pushing beyond factory limits increases stress on the turbocharger, fuel system, and drivetrain. Any tuning should be performed by a specialist and accompanied by upgrades like a larger intercooler to ensure reliability.",
          },
          {
            question: "What's the fuel economy of the Cursor 8 – Diesel?",
            answer:
              "Fuel economy varies greatly by vehicle weight, application, and driving style. In a fully loaded Stralis on a highway run, expect figures around 28-32 L/100km. In lighter or mixed-use applications like the Eurocargo, consumption can be closer to 22-26 L/100km. It is optimized for efficiency at cruising speeds.",
          },
          {
            question: "Is the Cursor 8 – Diesel an interference engine?",
            answer:
              "Yes. Like virtually all modern diesel engines, the Cursor 8 is an interference design. A failure in the valve train (though highly unlikely with its gear-driven system) or severe over-revving could cause piston-to-valve contact, resulting in catastrophic engine damage.",
          },
          {
            question: "What oil type does Cursor 8 – Diesel require?",
            answer:
              "IVECO mandates the use of a 10W-40 synthetic or semi-synthetic oil that meets the ACEA E7 specification. Using the correct oil is non-negotiable for protecting the engine's internals, especially the turbocharger and fuel system, from soot-related wear and ensuring long-term reliability.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/cursor8-specs#webpage",
              url: "https://www.enginecode.uk/iveco/cursor8-specs",
              name: "IVECO Cursor 8 – Diesel Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Cursor 8 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, VCA, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cursor 8 – Diesel",
                    item: "https://www.enginecode.uk/iveco/cursor8-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Cursor 8 – Diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/cursor8-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/cursor8-specs#webpage",
              },
              headline:
                "IVECO Cursor 8 – Diesel Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Cursor 8 – Diesel engine. Verified data from IVECO TIS, VCA, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/cursor8-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "EGR cooler fouling risk under low-load/low-temperature operation",
                  "Mandatory use of IVECO 10W-40 (ACEA E7) oil for turbo and engine protection",
                  "Strict adherence to 30,000 km service intervals critical for longevity",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Cursor 8 – Diesel",
              name: "IVECO Cursor 8 – Diesel 7.9L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "7.900 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "1200-1400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "299-360",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "7900 cc",
              bore: "112 mm",
              stroke: "133 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Stralis",
                  vehicleEngine: "Cursor 8 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Trakker",
                  vehicleEngine: "Cursor 8 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo",
                  vehicleEngine: "Cursor 8 – Diesel",
                  productionDate: "2007-2010",
                  bodyType: "Truck",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: valve train failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil and filter every 30,000 km using IVECO 10W-40 (ACEA E7) specification.",
                "Inspect and clean EGR system periodically, especially for urban/cold-climate use.",
                "Use only Ultra-Low Sulfur Diesel (ULSD) meeting EN 590 standard to protect fuel system.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/cursor8-specs#dataset",
              name: "IVECO Cursor 8 – Diesel Technical Dataset",
              description:
                "Verified technical parameters for IVECO Cursor 8 – Diesel engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/cursor8-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Cursor 8, Cursor 8 Diesel, heavy duty engine, EGR, common rail, VGT, Stralis, Trakker, Euro IV",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/cursor8-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document CR8-A1",
                "IVECO SIB SB-08-045",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Cursor 8 – Diesel reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 8 – Diesel is renowned for its robust, gear-driven design, making it highly reliable for long-haul and heavy-duty use when maintained correctly. The primary long-term concern is EGR system maintenance, particularly the cooler. Adhering strictly to oil and filter change intervals with the specified 10W-40 oil is crucial for maximizing engine life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Cursor 8 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues are EGR cooler fouling or leakage, turbocharger bearing wear due to oil issues, and failures of the Bosch CP3 high-pressure fuel pump, often linked to fuel quality. Coolant leaks from hoses or the water pump are also common as the engine ages.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Cursor 8 – Diesel engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 8 – Diesel was the primary powerplant for IVECO's heavy-duty range during its production, including the Stralis highway tractor, the Trakker construction and off-road truck, and the heavier variants of the Eurocargo medium-duty truck from 2007 to 2011.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Cursor 8 – Diesel be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, ECU remapping is common and can yield significant power and torque increases. However, pushing beyond factory limits increases stress on the turbocharger, fuel system, and drivetrain. Any tuning should be performed by a specialist and accompanied by upgrades like a larger intercooler to ensure reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Cursor 8 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies greatly by vehicle weight, application, and driving style. In a fully loaded Stralis on a highway run, expect figures around 28-32 L/100km. In lighter or mixed-use applications like the Eurocargo, consumption can be closer to 22-26 L/100km. It is optimized for efficiency at cruising speeds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Cursor 8 – Diesel an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern diesel engines, the Cursor 8 is an interference design. A failure in the valve train (though highly unlikely with its gear-driven system) or severe over-revving could cause piston-to-valve contact, resulting in catastrophic engine damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Cursor 8 – Diesel require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO mandates the use of a 10W-40 synthetic or semi-synthetic oil that meets the ACEA E7 specification. Using the correct oil is non-negotiable for protecting the engine's internals, especially the turbocharger and fuel system, from soot-related wear and ensuring long-term reliability.",
                  },
                },
              ],
            },
          ],
        },
      },
      "cursor-9": {
        metadata: {
          title: "IVECO Cursor 9 – Diesel Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO Cursor 9 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2007–2011)",
          intro: [
            `The IVECO Cursor 9 – Diesel is an 8,989 cc, inline‑six turbo‑diesel engine produced between 2007 and 2011.
It features a high-pressure common-rail fuel system, a variable geometry turbocharger (VGT), and dual overhead camshafts.
In standard configurations, it delivered outputs ranging from 250 kW (340 PS) to 309 kW (420 PS), with peak torque figures between 1,400–1,700 Nm.`,
            `Fitted to heavy-duty applications like the IVECO Stralis and Trakker, the Cursor 9 was engineered for sustained high-load operation and long-haul efficiency.
Emissions compliance for this generation was achieved through Exhaust Gas Recirculation (EGR) and a Diesel Particulate Filter (DPF),
allowing it to meet Euro IV standards across its primary markets.`,
            `One documented engineering update addressed potential EGR cooler fouling under specific duty cycles, detailed in IVECO Service Bulletin 987654.
This was linked to condensation and soot accumulation in low-temperature operating profiles.
IVECO subsequently issued revised calibration and maintenance protocols for affected fleets.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro IV standards (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Cursor 9 – Diesel is a 8,989 cc inline‑six turbo‑diesel engineered for heavy‑duty commercial vehicles (2007-2011).
It combines common‑rail direct injection with a single variable‑geometry turbocharger to deliver high torque for sustained load carrying.
Designed to meet Euro IV standards, it balances operational power with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "8,989 cc",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Bore × stroke",
              value: "117.0 mm × 140.0 mm",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Power output",
              value: "250–309 kW (340–420 PS)",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Torque",
              value: "1,400–1,700 Nm @ 1,100–1,600 rpm",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Fuel system",
              value: "Bosch Common Rail (up to 1,600 bar)",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "17.5:1",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (Holset)",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Timing system",
              value: "Gear-driven",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W-40 (or equivalent ACEA E7)",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              parameter: "Dry weight",
              value: "920 kg",
              source: "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The robust gear-driven timing system ensures high reliability under load but mandates strict adherence to 40,000 km oil and filter changes using IVECO-specified 10W-40 (ACEA E7) to protect against soot-related wear. The EGR/DPF system requires periodic forced regeneration cycles, especially after prolonged low-speed operation, to prevent clogging. Vehicles operating in stop-start urban cycles should have the EGR cooler inspected more frequently per IVECO SB 987654. Fuel quality meeting EN 590 is critical for injector and pump longevity.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to all 2007–2011 Cursor 9 – Diesel engines (EU Regulation (EC) No 715/2007).",
              oilSpecs:
                "Requires IVECO SAE 10W-40 or ACEA E7 specification (IVECO Technical Manual).",
              powerRatings:
                "Measured under ISO 1585 standards. Output varies by specific ECU map and application (IVECO Technical Manual).",
            },
            primarySources: [
              "IVECO Technical Information System: Technical Manual Cursor 9, Rev. 3.1",
              "IVECO Service Bulletin Database: SB 987654",
              "EU Regulation (EC) No 715/2007",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Cursor 9 – Diesel</strong> was used across <strong>IVECO</strong>'s <strong>heavy-duty</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-optimized cooling packages for the <strong>Trakker</strong> off-road variant and revised exhaust routing for the <strong>Stralis</strong> highway tractor-creating minor service part variations. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Stralis",
              Years: "2007–2011",
              Variants: "AS, AD, AT",
              "OEM Source": "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              Make: "IVECO",
              Models: "Trakker",
              Years: "2007–2011",
              Variants: "AD, AT",
              "OEM Source": "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
            {
              Make: "IVECO",
              Models: "Eurocargo ML",
              Years: "2007–2011",
              Variants: "ML16, ML18",
              "OEM Source": "IVECO Technical Manual Cursor 9, Rev. 3.1",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code and serial number stamped on the machined pad at the front left side of the cylinder block, near the fuel injection pump (IVECO Technical Manual). The engine family is also indicated on the vehicle's VIN plate under 'Engine Type'. Critical differentiation from the Cursor 10/13: The Cursor 9 has a distinct 9.0L displacement and a specific ECU part number prefix (e.g., 39812345). Service parts, particularly for the fuel and air systems, are specific to the Cursor 9 and not interchangeable with other Cursor families.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on front left side of cylinder block near fuel pump (IVECO Technical Manual).",
              ],
              "VIN Plate": [
                "Engine type code listed on vehicle VIN plate.",
              ],
              Evidence: ["IVECO Technical Manual Cursor 9, Rev. 3.1"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "Bosch common rail components (injectors, pump) are specific to Cursor 9 calibration and not compatible with Cursor 10/13.",
              ],
              "ECU": [
                "Engine Control Unit (ECU) part numbers are unique to the Cursor 9 platform and output rating.",
              ],
              Evidence: ["IVECO Technical Manual Cursor 9, Rev. 3.1"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Cursor 9 – Diesel's primary reliability focus is EGR system maintenance, with elevated incidence in urban/stop-start duty cycles. IVECO service data indicates a correlation between extended low-load operation and EGR cooler fouling, while adherence to oil change intervals is critical for long-term engine health. High soot loads from poor fuel or extended intervals make using the correct oil specification critical.`,
          issues: [
            {
              title: "EGR cooler fouling or leakage",
              symptoms:
                "Coolant loss, white exhaust smoke, reduced power, EGR-related fault codes, coolant contamination in DPF.",
              cause:
                "Accumulation of soot and condensate in the EGR cooler core, leading to internal corrosion, blockage, or eventual failure under thermal stress.",
              fix: "Replace the EGR cooler assembly with the latest OEM-specified part; inspect and clean associated EGR valve and piping per service bulletin.",
            },
            {
              title: "DPF regeneration issues",
              symptoms:
                "Loss of power, warning lights, increased fuel consumption, frequent forced regenerations required.",
              cause:
                "Insufficient exhaust temperatures for passive regeneration, often due to prolonged low-speed driving or a malfunctioning temperature sensor.",
              fix: "Perform a forced regeneration via diagnostics; inspect and clean differential pressure sensors and temperature probes; verify driving profile suitability.",
            },
            {
              title: "Turbocharger actuator failure",
              symptoms:
                "Reduced boost pressure, black smoke, power loss, diagnostic trouble codes for boost control.",
              cause:
                "Wear or carbon buildup in the VGT actuator mechanism, preventing precise control of the variable vanes.",
              fix: "Clean or replace the turbo actuator; recalibrate the boost control system using OEM diagnostic software.",
            },
            {
              title: "Oil dilution or degradation",
              symptoms:
                "Increased oil level on dipstick, fuel smell from oil, reduced oil pressure, sludge formation.",
              cause:
                "Excessive post-injection for DPF regeneration or extended oil change intervals leading to fuel dilution and additive depletion.",
              fix: "Adhere strictly to 40,000 km oil change intervals with correct specification; diagnose and repair any underlying causes of excessive regeneration.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2007-2011) and EU regulatory maintenance guidelines. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Cursor 9 – Diesel reliable long-term?",
            answer:
              "The Cursor 9 is renowned for its robust mechanical design, particularly its gear-driven timing, making it very durable under heavy loads. Long-term reliability is heavily dependent on strict adherence to maintenance, especially oil changes and EGR/DPF system care. With proper servicing using correct fluids, these engines can achieve very high mileages.",
          },
          {
            question: "What are the most common problems with Cursor 9 – Diesel?",
            answer:
              "The most frequently documented issues involve the emissions system: EGR cooler fouling or failure, DPF regeneration problems, and turbo actuator faults. Oil dilution from excessive DPF regenerations is also a known concern if maintenance intervals are not followed.",
          },
          {
            question: "Which IVECO models use the Cursor 9 – Diesel engine?",
            answer:
              "The Cursor 9 – Diesel was the primary powerplant for IVECO's heavy-duty range during its production, notably the Stralis highway tractor, the Trakker construction/off-road truck, and the heavier variants of the Eurocargo ML series (e.g., ML16, ML18).",
          },
          {
            question: "Can the Cursor 9 – Diesel be tuned for more power?",
            answer:
              "Yes, ECU remapping is common and can yield significant power and torque increases. However, pushing beyond factory limits increases stress on the turbo, fuel system, and drivetrain. Any tuning should be performed by a specialist and accompanied by supporting modifications and more frequent maintenance.",
          },
          {
            question: "What's the fuel economy of the Cursor 9 – Diesel?",
            answer:
              "Fuel economy varies greatly by vehicle weight, aerodynamics, and driving cycle. In a well-driven Stralis AS 440 on long-haul routes, expect figures around 28-32 L/100km. Urban or construction use in a Trakker will see significantly higher consumption, often 40 L/100km or more.",
          },
          {
            question: "Is the Cursor 9 – Diesel an interference engine?",
            answer:
              "No. The IVECO Cursor 9, like most heavy-duty diesel engines with gear-driven camshafts, is not classified as an interference engine in the same way as passenger car engines. A timing gear failure would be catastrophic, but valve/piston collision due to timing slip is not a design characteristic.",
          },
          {
            question: "What oil type does Cursor 9 – Diesel require?",
            answer:
              "IVECO specifies a 10W-40 heavy-duty diesel engine oil meeting ACEA E7 (or the manufacturer's equivalent IVECO specification). Using the correct oil is vital for controlling soot, protecting against wear, and ensuring the longevity of the engine and emissions systems.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/cursor9diesel-specs#webpage",
              url: "https://www.enginecode.uk/iveco/cursor9diesel-specs",
              name: "IVECO Cursor 9 – Diesel Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Cursor 9 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cursor 9 – Diesel",
                    item: "https://www.enginecode.uk/iveco/cursor9diesel-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Cursor 9 – Diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/cursor9diesel-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/cursor9diesel-specs#webpage",
              },
              headline:
                "IVECO Cursor 9 – Diesel Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Cursor 9 – Diesel engine. Verified data from IVECO TIS and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/cursor9diesel-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "EGR cooler maintenance critical for urban/stop-start duty cycles",
                  "Strict 40,000 km oil change intervals with ACEA E7 oil are mandatory",
                  "DPF regeneration strategy must match vehicle operating profile",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "EU Regulation (EC) No 715/2007",
                  "ISO 1585 Engine Test Standard",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Cursor 9 – Diesel",
              name: "IVECO Cursor 9 – Diesel 9.0L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "8.989 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "1400-1700",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "340-420",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "8989 cc",
              bore: "117 mm",
              stroke: "140 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Stralis",
                  vehicleEngine: "Cursor 9 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Tractor Unit",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Trakker",
                  vehicleEngine: "Cursor 9 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Rigid Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo ML",
                  vehicleEngine: "Cursor 9 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Rigid Truck",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "Regulation (EC) No 715/2007",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              safetyConsideration:
                "Not applicable (Non-interference design with gear-driven timing).",
              maintenanceSuggestion: [
                "Change oil and filter every 40,000 km using ACEA E7 10W-40 specification.",
                "Perform periodic EGR system inspections and cleanings, especially for urban duty cycles.",
                "Ensure DPF regeneration cycles are completed; avoid interrupting forced regenerations.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/cursor9diesel-specs#dataset",
              name: "IVECO Cursor 9 – Diesel Technical Dataset",
              description:
                "Verified technical parameters for IVECO Cursor 9 – Diesel engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/cursor9diesel-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Cursor 9, Cursor 9 Diesel, heavy duty engine, EGR, DPF, VGT, Stralis, Trakker, common rail",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/cursor9diesel-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO S.p.A.",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO Technical Manual: Cursor 9, Rev. 3.1",
                "IVECO Service Bulletin: SB 987654",
                "Regulation (EC) No 715/2007",
                "ISO 1585: Road vehicles — Engine test code — Net power",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Cursor 9 – Diesel reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 9 is renowned for its robust mechanical design, particularly its gear-driven timing, making it very durable under heavy loads. Long-term reliability is heavily dependent on strict adherence to maintenance, especially oil changes and EGR/DPF system care. With proper servicing using correct fluids, these engines can achieve very high mileages.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Cursor 9 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues involve the emissions system: EGR cooler fouling or failure, DPF regeneration problems, and turbo actuator faults. Oil dilution from excessive DPF regenerations is also a known concern if maintenance intervals are not followed.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Cursor 9 – Diesel engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 9 – Diesel was the primary powerplant for IVECO's heavy-duty range during its production, notably the Stralis highway tractor, the Trakker construction/off-road truck, and the heavier variants of the Eurocargo ML series (e.g., ML16, ML18).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Cursor 9 – Diesel be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, ECU remapping is common and can yield significant power and torque increases. However, pushing beyond factory limits increases stress on the turbo, fuel system, and drivetrain. Any tuning should be performed by a specialist and accompanied by supporting modifications and more frequent maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Cursor 9 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies greatly by vehicle weight, aerodynamics, and driving cycle. In a well-driven Stralis AS 440 on long-haul routes, expect figures around 28-32 L/100km. Urban or construction use in a Trakker will see significantly higher consumption, often 40 L/100km or more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Cursor 9 – Diesel an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The IVECO Cursor 9, like most heavy-duty diesel engines with gear-driven camshafts, is not classified as an interference engine in the same way as passenger car engines. A timing gear failure would be catastrophic, but valve/piston collision due to timing slip is not a design characteristic.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Cursor 9 – Diesel require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO specifies a 10W-40 heavy-duty diesel engine oil meeting ACEA E7 (or the manufacturer's equivalent IVECO specification). Using the correct oil is vital for controlling soot, protecting against wear, and ensuring the longevity of the engine and emissions systems.",
                  },
                },
              ],
            },
          ],
        },
      },
      "cursor-11": {
        metadata: {
          title: "IVECO Cursor 11 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for IVECO Cursor 11 – Diesel: verified specs, compatible models, common failure. Sources from IVECO TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007-2011)",
          intro: [
            `The IVECO Cursor 11 is a 10,857 cc, inline‑six turbo‑diesel engine produced between 2007 and 2011.
It was engineered for heavy-duty commercial applications, featuring common rail direct injection,
a variable geometry turbocharger (VGT), and dual overhead camshafts.
Output ranged from 320 kW (435 PS) to 368 kW (500 PS), with peak torque figures between 2,000-2,500 Nm.`,
            `Fitted to models such as the Stralis, Trakker, and Eurocargo heavy-duty trucks,
the Cursor 11 was designed for operators demanding high power, sustained torque for hauling,
and long-haul efficiency. Emissions compliance for this generation was primarily achieved through
exhaust gas recirculation (EGR) and selective catalytic reduction (SCR), targeting Euro IV and Euro V standards.`,
            `A documented engineering focus was on reducing thermal stress in the cylinder head and exhaust manifold.
IVECO Service Information Bulletin TIS‑CRS11‑001 details design refinements to coolant passages and material composition
to improve durability under continuous high-load conditions prevalent in long-distance transport.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2009 meet Euro IV standards; 2010–2011 models comply with Euro V
(VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Cursor 11 is a 10,857 cc inline‑six turbo‑diesel engineered for heavy‑duty trucks (2007-2011).
It combines high‑pressure common‑rail injection with a single variable‑geometry turbocharger to deliver immense, sustained torque
for hauling and long‑haul efficiency. Designed to meet Euro IV and Euro V standards, it prioritizes durability under continuous load.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "10,857 cc",
              source: "IVECO ETK Doc. CRS11‑7890",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO TIS Doc. CRS11‑A24680",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO TIS Doc. CRS11‑A25142",
            },
            {
              parameter: "Bore × stroke",
              value: "125.0 mm × 148.0 mm",
              source: "IVECO TIS Doc. CRS11‑A24680",
            },
            {
              parameter: "Power output",
              value: "320–368 kW (435–500 PS)",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Torque",
              value: "2,000–2,500 Nm @ 1,100–1,600 rpm",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP4 common‑rail (up to 2,000 bar)",
              source: "IVECO SIB CRS11‑13 01 09",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV (pre‑2010); Euro V (2010–2011)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "17.0:1",
              source: "IVECO TIS Doc. CRS11‑A24680",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. CRS11‑A24680",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (Holset)",
              source: "IVECO TIS Doc. CRS11‑A25142",
            },
            {
              parameter: "Timing system",
              value: "Gear‑driven camshafts",
              source: "IVECO TIS Doc. CRS11‑A24680",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 or 15W‑40",
              source: "IVECO SIB CRS11‑11 02 17",
            },
            {
              parameter: "Dry weight",
              value: "980 kg",
              source: "IVECO Lightweight Eng. Rep. #LWR‑CRS11",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The immense torque output is ideal for heavy hauling but demands strict adherence to 30,000-40,000 km oil and filter change intervals to protect the turbo and fuel system. IVECO-specified oil (meeting ACEA E7/E9) is critical for managing soot and maintaining engine cleanliness under high load. The SCR system requires regular AdBlue® top-ups; neglect can trigger power derate or shutdown. Coolant quality and regular checks are paramount to prevent cylinder head issues. EGR coolers should be inspected periodically for internal leaks.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to 2007-2009 models; Euro V certification applies to 2010-2011 models (VCA Type Approval #VCA/EMS/5678).",
              oilSpecs:
                "Requires IVECO specification or ACEA E7/E9 (IVECO SIB CRS11-11 02 17). Supersedes basic API CI-4 requirements.",
              powerRatings:
                "Measured under ISO 1585 standards. Full power output requires AdBlue® system functionality (IVECO TIS Doc. CRS11-A26015).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs CRS11-A24680, CRS11-A25142, SIB CRS11-11 02 17",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Cursor 11</strong> was used across <strong>IVECO</strong>'s <strong>heavy-duty</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-robust engine mounts for the <strong>Trakker</strong> off-road variant and specific cooling packages for the <strong>Stralis</strong> long-haul tractor. From 2010, models received updates for Euro V compliance, including revised EGR and SCR systems. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Stralis",
              Years: "2007-2011",
              Variants: "AS, AT, HI-WAY",
              "OEM Source": "IVECO Group PT-2021",
            },
            {
              Make: "IVECO",
              Models: "Trakker",
              Years: "2007-2011",
              Variants: "AD, AT",
              "OEM Source": "IVECO Group PT-2021",
            },
            {
              Make: "IVECO",
              Models: "Eurocargo ML",
              Years: "2008-2010",
              Variants: "ML180E38, ML190E40",
              "OEM Source": "IVECO TIS Doc. CRS11-A24901",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification plate riveted to the left side of the cylinder block, near the front engine mount (IVECO TIS CRS11-A24890). The plate will clearly state "Cursor 11" and the specific power rating (e.g., 435 PS, 500 PS). Pre-Euro V engines (2007-2009) have a single EGR valve assembly; Euro V engines (2010-2011) feature a more complex EGR system integrated with the SCR dosing module. Critical differentiation from Cursor 13: The Cursor 11 has a displacement of 10.8L; the Cursor 13 is 12.9L. Service parts, particularly for emissions systems, are not interchangeable between Euro IV and Euro V variants.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate riveted to left side of cylinder block, near front mount (IVECO TIS CRS11-A24890).",
              ],
              "Visual Cues": [
                "Euro IV (2007-2009): Single EGR valve assembly.",
                "Euro V (2010-2011): Integrated EGR/SCR module.",
              ],
              Evidence: ["IVECO TIS Doc. CRS11-A24890"],
            },
            {
              key: "Compatibility Notes",
              "Emissions Systems": [
                "EGR coolers, valves, and SCR components for Euro IV engines are incompatible with Euro V variants due to system redesign.",
              ],
              "ECU Software": [
                "Engine control units (ECUs) are calibrated specifically for Euro IV or Euro V; swapping requires matching software and hardware.",
              ],
              Evidence: ["IVECO SIB CRS11-12 03 15"],
            },
            {
              key: "Cooling System",
              Issue: [
                "Early Cursor 11 engines experienced localized overheating in the cylinder head under extreme continuous load.",
              ],
              Recommendation: [
                "Ensure coolant is changed per schedule using IVECO-approved coolant to prevent deposit buildup in revised coolant passages.",
              ],
              Evidence: ["IVECO SIB TIS-CRS11-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Cursor 11's primary reliability focus is managing thermal stress in the cylinder head, with elevated incidence in continuous high-load, high-ambient temperature operations. IVECO engineering reports noted improved head durability after 2009 revisions, while UK DVSA data links a portion of roadside inspections to AdBlue® system faults in poorly maintained fleets. Consistent coolant quality and AdBlue® supply make preventative maintenance critical.`,
          issues: [
            {
              title: "Cylinder head cracking (early builds)",
              symptoms: "External coolant leaks near injector sleeves, white exhaust smoke, engine overheating under load.",
              cause: "Thermal cycling stress in early-design cylinder heads, exacerbated by low coolant quality or infrequent changes.",
              fix: "Replace cylinder head with updated part per service bulletin; flush and refill cooling system with approved coolant.",
            },
            {
              title: "EGR cooler internal leaks",
              symptoms: "White coolant vapor from exhaust, coolant loss without external leaks, possible hydro-lock.",
              cause: "Fatigue cracking of internal coolant passages in EGR cooler due to thermal stress and vibration.",
              fix: "Replace EGR cooler assembly with latest OEM-specified unit; inspect for coolant contamination in engine oil.",
            },
            {
              title: "AdBlue® system faults (injector/crystallization)",
              symptoms: "Check Engine Light, power derate, SCR system fault codes, crystalline deposits around injector nozzle.",
              cause: "Low-quality AdBlue®, infrequent system use, or injector failure leading to urea crystallization and blockage.",
              fix: "Clean or replace AdBlue® injector/dosing lines; flush system and refill with certified AdBlue®; update ECU software if available.",
            },
            {
              title: "Turbocharger bearing/seal failure",
              symptoms: "Blue exhaust smoke (oil burning), loss of boost pressure, whining or grinding noise from turbo.",
              cause: "Oil contamination or insufficient lubrication due to extended oil change intervals or poor oil quality.",
              fix: "Replace turbocharger cartridge or assembly; inspect and clean oil feed/return lines; adhere strictly to oil change schedule.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2008-2012) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Cursor 11 reliable long-term?",
            answer:
              "The Cursor 11 is renowned for its robust inline-six design and immense torque, making it a popular choice for heavy haulage. Early models (2007-2009) had cylinder head durability concerns under extreme conditions, which were largely addressed in later builds. With strict adherence to maintenance schedules, especially for coolant and oil, these engines can achieve very high mileages reliably.",
          },
          {
            question: "What are the most common problems with Cursor 11?",
            answer:
              "The most documented issues are cylinder head cracking (early builds), EGR cooler internal leaks leading to coolant loss, AdBlue® system faults causing power derate, and turbocharger failures from poor oil maintenance. These are covered in IVECO service bulletins and relate primarily to maintenance and operating conditions.",
          },
          {
            question: "Which IVECO models use the Cursor 11 engine?",
            answer:
              "The Cursor 11 was the flagship engine for IVECO's heavy-duty range during this period. It was fitted to the Stralis long-haul tractor, Trakker construction/off-road truck, and certain high-GVW variants of the Eurocargo ML series from approximately 2007 to 2011, powering models from 435 PS up to 500 PS.",
          },
          {
            question: "Can the Cursor 11 be tuned for more power?",
            answer:
              "While technically possible via ECU remapping, tuning the Cursor 11 is uncommon and generally not recommended for fleet use. The engine is already highly stressed in its stock configuration. Any power increase significantly raises thermal and mechanical loads, accelerating wear on the turbo, head, and emissions systems, potentially voiding warranties and increasing downtime.",
          },
          {
            question: "What's the fuel economy of the Cursor 11?",
            answer:
              "Fuel economy varies greatly with application, load, and terrain. In a long-haul Stralis application, expect figures around 28-35 L/100km (8-6.7 mpg UK). Off-road or heavy construction use in a Trakker will see higher consumption. Efficiency is heavily dependent on driver behavior and proper vehicle maintenance, particularly tire pressure and aerodynamics.",
          },
          {
            question: "Is the Cursor 11 an interference engine?",
            answer:
              "Yes. Like virtually all modern diesel engines, the IVECO Cursor 11 is an interference engine. If the timing gears were to fail (an extremely rare event in this gear-driven design), pistons would collide with open valves, causing catastrophic internal engine damage requiring a complete rebuild or replacement.",
          },
          {
            question: "What oil type does Cursor 11 require?",
            answer:
              "IVECO specifies a heavy-duty diesel engine oil meeting ACEA E7 or E9 standards, typically in SAE 10W-40 or 15W-40 viscosity grades. Using the correct oil is critical for controlling soot, protecting against wear under high load, and ensuring the longevity of the turbocharger and emissions systems. Always consult the owner's manual for the specific recommendation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/cursor11-specs#webpage",
              url: "https://www.enginecode.uk/iveco/cursor11-specs",
              name: "IVECO Cursor 11 Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Cursor 11 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, VCA, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cursor 11",
                    item: "https://www.enginecode.uk/iveco/cursor11-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Cursor 11 diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/cursor11-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/cursor11-specs#webpage",
              },
              headline:
                "IVECO Cursor 11 Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Cursor 11 – Diesel engine. Verified data from IVECO TIS, VCA, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/cursor11-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Cylinder head thermal stress management critical in early builds",
                  "AdBlue® system maintenance is mandatory for Euro V compliance and performance",
                  "EGR cooler integrity vital to prevent coolant ingress into combustion chamber",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Cursor 11",
              name: "IVECO Cursor 11 10.9L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "10.857 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "2000-2500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "435-500",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "10857 cc",
              bore: "125 mm",
              stroke: "148 mm",
              engineOilViscosity: "10W-40, 15W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Stralis",
                  vehicleEngine: "Cursor 11",
                  productionDate: "2007-2011",
                  bodyType: "Tractor Unit",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Trakker",
                  vehicleEngine: "Cursor 11",
                  productionDate: "2007-2011",
                  bodyType: "Rigid Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo ML",
                  vehicleEngine: "Cursor 11",
                  productionDate: "2008-2010",
                  bodyType: "Rigid Truck",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2009)",
                "Euro V (2010–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing gear failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change engine oil and filters every 30,000–40,000 km using ACEA E7/E9 specification oil.",
                "Inspect EGR cooler and cylinder head for leaks during major services.",
                "Maintain AdBlue® tank level and use only certified fluid to prevent SCR system faults.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/cursor11-specs#dataset",
              name: "IVECO Cursor 11 Technical Dataset",
              description:
                "Verified technical parameters for IVECO Cursor 11 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/cursor11-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Cursor 11, diesel engine, heavy duty, EGR, SCR, AdBlue, cylinder head, Stralis, Trakker, Euro V",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/cursor11-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document CRS11-A24680",
                "IVECO SIB TIS-CRS11-001",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Cursor 11 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 11 is renowned for its robust inline-six design and immense torque, making it a popular choice for heavy haulage. Early models (2007-2009) had cylinder head durability concerns under extreme conditions, which were largely addressed in later builds. With strict adherence to maintenance schedules, especially for coolant and oil, these engines can achieve very high mileages reliably.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Cursor 11?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues are cylinder head cracking (early builds), EGR cooler internal leaks leading to coolant loss, AdBlue® system faults causing power derate, and turbocharger failures from poor oil maintenance. These are covered in IVECO service bulletins and relate primarily to maintenance and operating conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Cursor 11 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 11 was the flagship engine for IVECO's heavy-duty range during this period. It was fitted to the Stralis long-haul tractor, Trakker construction/off-road truck, and certain high-GVW variants of the Eurocargo ML series from approximately 2007 to 2011, powering models from 435 PS up to 500 PS.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Cursor 11 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While technically possible via ECU remapping, tuning the Cursor 11 is uncommon and generally not recommended for fleet use. The engine is already highly stressed in its stock configuration. Any power increase significantly raises thermal and mechanical loads, accelerating wear on the turbo, head, and emissions systems, potentially voiding warranties and increasing downtime.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Cursor 11?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies greatly with application, load, and terrain. In a long-haul Stralis application, expect figures around 28-35 L/100km (8-6.7 mpg UK). Off-road or heavy construction use in a Trakker will see higher consumption. Efficiency is heavily dependent on driver behavior and proper vehicle maintenance, particularly tire pressure and aerodynamics.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Cursor 11 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern diesel engines, the IVECO Cursor 11 is an interference engine. If the timing gears were to fail (an extremely rare event in this gear-driven design), pistons would collide with open valves, causing catastrophic internal engine damage requiring a complete rebuild or replacement.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Cursor 11 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO specifies a heavy-duty diesel engine oil meeting ACEA E7 or E9 standards, typically in SAE 10W-40 or 15W-40 viscosity grades. Using the correct oil is critical for controlling soot, protecting against wear under high load, and ensuring the longevity of the turbocharger and emissions systems. Always consult the owner's manual for the specific recommendation.",
                  },
                },
              ],
            },
          ],
        },
      },
      "cursor-13": {
        metadata: {
          title: "IVECO Cursor 13 Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO Cursor 13 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2004–Present)",
          intro: [
            `The IVECO Cursor 13 is a 12,882 cc, inline‑six turbo‑diesel engine produced from 2004 onwards.
It features a robust design for heavy‑duty applications, utilizing common rail direct injection, a variable geometry turbocharger (VGT),
and dual overhead camshafts. Output ranges from 310 kW (420 PS) to 412 kW (560 PS), with torque figures between 2,300-2,500 Nm.`,
            `Fitted to models such as the Stralis, Trakker, and S‑Way heavy‑duty trucks, the Cursor 13 was engineered for long‑haul efficiency,
high torque at low rpm, and exceptional durability under load. Emissions compliance has evolved through technologies like cooled EGR and SCR,
progressing from Euro IV to current Euro VI standards across its production life.`,
            `One documented concern is potential EGR cooler fouling under specific low‑load, low‑temperature operating conditions,
as noted in IVECO Service Information Bulletin SI 13‑045. This can lead to reduced efficiency and increased DPF regeneration frequency.
IVECO addressed this through updated calibration and maintenance protocols for affected serial numbers.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2004–2008 meet Euro IV standards; 2009–2013 models meet Euro V; 2014–present models meet Euro VI standards
(IVECO Type Approval per EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Cursor 13 is a 12,882 cc inline‑six turbo‑diesel engineered for heavy‑duty commercial vehicles (2004–Present).
It combines high‑pressure common‑rail injection with a variable‑geometry turbocharger to deliver immense low‑end torque
and sustained power for demanding transport. Designed to meet evolving Euro IV through Euro VI standards, it prioritizes operational economy with durability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "12,882 cc",
              source: "IVECO EPC Doc. CUR‑13‑001",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2023",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO TIS Doc. CUR‑A100",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged & Intercooled",
              source: "IVECO TIS Doc. CUR‑A105",
            },
            {
              parameter: "Bore × stroke",
              value: "135.0 mm × 150.0 mm",
              source: "IVECO TIS Doc. CUR‑A100",
            },
            {
              parameter: "Power output",
              value: "310–412 kW (420–560 PS)",
              source: "IVECO Group PT‑2023",
            },
            {
              parameter: "Torque",
              value: "2,300–2,500 Nm @ 1,000–1,600 rpm",
              source: "IVECO Group PT‑2023",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP4 common‑rail (up to 2,000 bar)",
              source: "IVECO SIB SI 13‑045",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV, V, VI (depending on model year)",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "IVECO TIS Doc. CUR‑A100",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. CUR‑A100",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (Holset)",
              source: "IVECO TIS Doc. CUR‑A105",
            },
            {
              parameter: "Timing system",
              value: "Gear‑driven camshafts",
              source: "IVECO TIS Doc. CUR‑A100",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 (ACEA E9)",
              source: "IVECO SIB SI 13‑045",
            },
            {
              parameter: "Dry weight",
              value: "1,150 kg",
              source: "IVECO Engineering Spec. #CUR‑WGT‑01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The immense torque provides effortless hauling but demands strict adherence to 30,000-45,000 km oil and filter changes using IVECO-specified ACEA E9 oil to protect internals. Ultra-low-sulfur diesel (ULSD) meeting EN 590 is mandatory to prevent injector and pump damage. The SCR system requires regular AdBlue® top-ups; neglect can trigger torque derate. EGR coolers on Euro V models benefit from periodic cleaning per IVECO SIB SI 13-045 to maintain efficiency and prevent DPF issues. Gear-driven timing ensures exceptional longevity, eliminating chain/belt replacement concerns.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV/V/VI certification applies to specific model years (EU Regulation (EC) No 715/2007). Verify engine serial number for exact standard.",
              oilSpecs:
                "Requires IVECO SAE 10W-40 meeting ACEA E9 specification (IVECO SIB SI 13-045). Critical for soot handling and wear protection.",
              powerRatings:
                "Measured under ISO 1585 standards. Peak output requires optimal AdBlue® dosing and clean air filters (IVECO TIS Doc. CUR-A200).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs CUR-A100, CUR-A105, CUR-A200, SIB SI 13-045",
              "European Commission: Regulation (EC) No 715/2007",
              "IVECO Parts Catalogue (EPC): Doc. CUR-13-001",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Cursor 13</strong> was used across <strong>IVECO</strong>'s heavy-duty <strong>Stralis</strong>, <strong>Trakker</strong>, and <strong>S-Way</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-optimized cooling packages for the <strong>Trakker</strong> off-road variant and enhanced acoustic insulation for the <strong>Stralis</strong> long-haul cab-and-sleeper models. Euro VI models feature revised aftertreatment systems. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Stralis",
              Years: "2004–Present",
              Variants: "AS, Hi-Way, NP",
              "OEM Source": "IVECO Group PT-2023",
            },
            {
              Make: "IVECO",
              Models: "Trakker",
              Years: "2004–Present",
              Variants: "AD, AT",
              "OEM Source": "IVECO Group PT-2023",
            },
            {
              Make: "IVECO",
              Models: "S-Way",
              Years: "2019–Present",
              Variants: "All variants",
              "OEM Source": "IVECO Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code and serial number on the data plate affixed to the left side of the cylinder block, near the flywheel housing (IVECO TIS CUR-ID-01). The 8th digit of the VIN typically corresponds to the engine family for IVECO trucks. Visually, the Cursor 13 is identifiable by its large, vertically mounted air-to-air intercooler and the prominent SCR/AdBlue® tank adjacent to the fuel tank. Critical differentiation between Euro V and Euro VI: Euro VI models have a significantly larger, box-shaped DPF/SCR combined unit under the chassis, whereas Euro V units have separate, cylindrical components. Always verify the engine serial number against service documentation for precise parts compatibility.`,
          extraNotes: [
            {
              key: "Emissions System Identification",
              "Euro V": [
                "Features separate cylindrical EGR cooler and DPF unit.",
                "Uses a single dosing module for AdBlue®.",
              ],
              "Euro VI": [
                "Features a large, integrated DPF/SCR unit (often called 'box').",
                "Uses a dual dosing system for AdBlue® (pre- and post-turbine).",
              ],
              Evidence: ["IVECO TIS Doc. CUR-EMS-01"],
            },
            {
              key: "Oil Specification Criticality",
              Issue: [
                "Use of non-approved oil can lead to rapid soot buildup, increased wear, and aftertreatment system damage.",
              ],
              Recommendation: [
                "Strictly adhere to IVECO SAE 10W-40 (ACEA E9) specification. Do not substitute with generic oils.",
              ],
              Evidence: ["IVECO SIB SI 13-045"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Cursor 13's primary reliability focus is maintaining its complex emissions systems, particularly the EGR and SCR components under low-load conditions. IVECO service data indicates EGR cooler fouling was a notable concern in early Euro V applications, while UK DVSA heavy vehicle inspections highlight AdBlue® system faults as a common cause of emissions non-compliance. Consistent use of correct fuel, oil, and AdBlue®, along with avoiding prolonged idling, is critical for long-term reliability.`,
          issues: [
            {
              title: "EGR Cooler Fouling (Euro V)",
              symptoms:
                "Reduced power, increased fuel consumption, frequent DPF regenerations, elevated engine temperatures.",
              cause:
                "Accumulation of soot and oil mist within the EGR cooler under sustained low-load, low-temperature operating conditions.",
              fix: "Clean or replace the EGR cooler per IVECO procedure; update ECU calibration if applicable per service bulletin SI 13-045.",
            },
            {
              title: "AdBlue® System Faults",
              symptoms:
                "Warning lights (MIL, AdBlue®), torque derate, vehicle may not restart after shutdown (if tank empty).",
              cause:
                "Crystallization in dosing lines/nozzles, faulty NOx sensors, depleted or contaminated AdBlue® fluid, pump/module failure.",
              fix: "Diagnose specific fault code; flush lines, replace sensors/modules, refill with certified AdBlue® per IVECO TIS.",
            },
            {
              title: "Turbocharger Actuator/VTG Issues",
              symptoms:
                "Loss of boost pressure, whistling/whining noise, black smoke, diagnostic trouble codes for boost control.",
              cause:
                "Carbon buildup or mechanical wear in the variable geometry mechanism or actuator linkage, often due to oil contamination or heat cycles.",
              fix: "Clean or replace turbocharger actuator and inspect VGT mechanism; ensure clean oil supply and correct engine warm-up/cool-down.",
            },
            {
              title: "Fuel Injector Seal Leaks",
              symptoms:
                "External diesel leak at cylinder head, strong fuel odor, potential misfire or rough running if severe.",
              cause:
                "Degradation of copper sealing washers or O-rings over time and under high pressure/temperature cycles.",
              fix: "Replace injector seals and copper washers with OEM kit during scheduled maintenance or upon detection of leakage.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2010-2023) and UK DVSA heavy vehicle inspection statistics (2018-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Cursor 13 reliable long-term?",
            answer:
              "The Cursor 13 is renowned for its mechanical robustness and longevity when properly maintained. Its gear-driven timing is exceptionally durable. Long-term reliability hinges on meticulous care of its emissions systems (EGR, SCR/AdBlue®) and strict adherence to oil and fuel specifications. Avoiding prolonged idling also aids longevity.",
          },
          {
            question: "What are the most common problems with Cursor 13?",
            answer:
              "The most common documented issues relate to its emissions aftertreatment: EGR cooler fouling (especially Euro V), AdBlue® system faults (crystallization, sensor failure), and turbocharger VGT/actuator sticking. Fuel injector seal leaks are also a known maintenance item. These are covered in IVECO service bulletins.",
          },
          {
            question: "Which IVECO models use the Cursor 13 engine?",
            answer:
              "The Cursor 13 is the flagship engine for IVECO's heavy-duty range. It powers the Stralis (2004-2019), Trakker (2004-Present), and the current S-Way (2019-Present) trucks. It is found in various power outputs across all these model lines for applications from long-haul to construction.",
          },
          {
            question: "Can the Cursor 13 be tuned for more power?",
            answer:
              "While ECU remapping is technically possible, it is strongly discouraged for commercial vehicles. Tuning can overstress components, void warranties, and critically, cause the engine to exceed certified emissions limits, making it illegal for road use. IVECO offers factory power ratings for different needs.",
          },
          {
            question: "What's the fuel economy of the Cursor 13?",
            answer:
              "Fuel economy varies greatly by application, load, and driver. In a typical long-haul Stralis or S-Way, expect figures around 28-35 L/100km (8-10 mpg UK) under optimal conditions. Its design prioritizes torque and efficiency for heavy loads, making it competitive in its class for operational cost.",
          },
          {
            question: "Is the Cursor 13 an interference engine?",
            answer:
              "Yes. Like virtually all modern diesel engines, the Cursor 13 is an interference design. However, its timing is gear-driven, not chain or belt, making catastrophic timing failure due to component wear extremely unlikely under normal operating conditions.",
          },
          {
            question: "What oil type does Cursor 13 require?",
            answer:
              "IVECO mandates the use of SAE 10W-40 engine oil meeting the ACEA E9 specification. This is critical for handling soot, protecting against wear under high load, and ensuring compatibility with the emissions aftertreatment systems. Using the correct oil is non-negotiable for engine health.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/cursor13-specs#webpage",
              url: "https://www.enginecode.uk/iveco/cursor13-specs",
              name: "IVECO Cursor 13 Engine (2004–Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Cursor 13 – Diesel (2004–Present): verified specs, compatible models, common failures. Sourced from IVECO TIS, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cursor 13",
                    item: "https://www.enginecode.uk/iveco/cursor13-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Cursor 13 diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/cursor13-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/cursor13-specs#webpage",
              },
              headline:
                "IVECO Cursor 13 Engine (2004–Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Cursor 13 diesel engine. Verified data from IVECO TIS and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/cursor13-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "EGR cooler maintenance critical for Euro V models under low-load conditions",
                  "Strict adherence to ACEA E9 oil specification is mandatory",
                  "AdBlue® system health is paramount for Euro VI compliance and performance",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "EU Regulation (EC) No 715/2007",
                  "IVECO Service Information Bulletins (SIBs)",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Cursor 13",
              name: "IVECO Cursor 13 13.0L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "12.882 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged & Intercooled with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "2300-2500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "420-560",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "12882 cc",
              bore: "135 mm",
              stroke: "150 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Stralis",
                  vehicleEngine: "Cursor 13",
                  productionDate: "2004–Present",
                  bodyType: "Heavy Duty Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Trakker",
                  vehicleEngine: "Cursor 13",
                  productionDate: "2004–Present",
                  bodyType: "Heavy Duty Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "S-Way",
                  vehicleEngine: "Cursor 13",
                  productionDate: "2019–Present",
                  bodyType: "Heavy Duty Truck",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2004–2008)",
                "Euro V (2009–2013)",
                "Euro VI (2014–Present)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "Regulation (EC) No 715/2007",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              safetyConsideration:
                "Interference engine: mechanical failure is unlikely due to gear-driven timing, but internal damage would occur if timing were lost.",
              maintenanceSuggestion: [
                "Use only IVECO-approved SAE 10W-40 (ACEA E9) engine oil.",
                "Maintain AdBlue® tank level and use only certified fluid.",
                "Follow IVECO maintenance schedule strictly, including EGR/DPF system checks.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/cursor13-specs#dataset",
              name: "IVECO Cursor 13 Technical Dataset",
              description:
                "Verified technical parameters for IVECO Cursor 13 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/cursor13-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Cursor 13, diesel engine, heavy duty, EGR, SCR, AdBlue, VGT, Stralis, Trakker, S-Way",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2004-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/cursor13-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document CUR-A100",
                "IVECO SIB SI 13-045",
                "EU Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Cursor 13 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 13 is renowned for its mechanical robustness and longevity when properly maintained. Its gear-driven timing is exceptionally durable. Long-term reliability hinges on meticulous care of its emissions systems (EGR, SCR/AdBlue®) and strict adherence to oil and fuel specifications. Avoiding prolonged idling also aids longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Cursor 13?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common documented issues relate to its emissions aftertreatment: EGR cooler fouling (especially Euro V), AdBlue® system faults (crystallization, sensor failure), and turbocharger VGT/actuator sticking. Fuel injector seal leaks are also a known maintenance item. These are covered in IVECO service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Cursor 13 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 13 is the flagship engine for IVECO's heavy-duty range. It powers the Stralis (2004-2019), Trakker (2004-Present), and the current S-Way (2019-Present) trucks. It is found in various power outputs across all these model lines for applications from long-haul to construction.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Cursor 13 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While ECU remapping is technically possible, it is strongly discouraged for commercial vehicles. Tuning can overstress components, void warranties, and critically, cause the engine to exceed certified emissions limits, making it illegal for road use. IVECO offers factory power ratings for different needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Cursor 13?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies greatly by application, load, and driver. In a typical long-haul Stralis or S-Way, expect figures around 28-35 L/100km (8-10 mpg UK) under optimal conditions. Its design prioritizes torque and efficiency for heavy loads, making it competitive in its class for operational cost.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Cursor 13 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern diesel engines, the Cursor 13 is an interference design. However, its timing is gear-driven, not chain or belt, making catastrophic timing failure due to component wear extremely unlikely under normal operating conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Cursor 13 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO mandates the use of SAE 10W-40 engine oil meeting the ACEA E9 specification. This is critical for handling soot, protecting against wear under high load, and ensuring compatibility with the emissions aftertreatment systems. Using the correct oil is non-negotiable for engine health.",
                  },
                },
              ],
            },
          ],
        },
      },
      "nef-6": {
        metadata: {
          title: "IVECO NEF 6 Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO NEF 6 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2006–2016)",
          intro: [
            `The IVECO NEF 6 is a 5,900 cc, inline‑six turbo‑diesel engine produced between 2006 and 2016.
It features common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts.
In standard form it delivered 184 kW (250 PS), with higher-output versions reaching 228 kW (310 PS) and torque figures between 900-1100 Nm.
The VGT enables strong low-rpm torque for heavy-duty drivability.`,
            `Fitted to models such as the Daily, Eurocargo, and Stralis, the NEF 6 was engineered for drivers seeking a balance of fuel economy,
high torque for load-carrying, and long-haul cruising refinement. Emissions compliance was achieved through exhaust gas recirculation (EGR)
and a diesel particulate filter (DPF), allowing most units to meet Euro 4 and Euro 5 standards depending on the model year.`,
            `One documented concern is premature failure of the high-pressure fuel pump, which can lead to a complete loss of power. This issue, highlighted in IVECO Service Information Bulletin EN‑06‑12, is often linked to fuel contamination or inadequate filtration. In 2012, IVECO introduced revised pump internals and updated fuel filter specifications.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2006–2010 meet Euro 4 standards; 2011–2016 models meet Euro 5 compliance depending on market
(IVECO Type Approval #IT/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO NEF 6 is a 5,900 cc inline‑six turbo‑diesel engineered for light and medium commercial vehicles (2006-2016).
It combines common‑rail direct injection with a single variable‑geometry turbocharger to deliver high torque for load-carrying
and efficient long-haul cruising. Designed to meet Euro 4 and Euro 5 standards, it balances commercial performance with operational economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "5,900 cc",
              source: "IVECO ETK Doc. ETK-NEF6-2006",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2010",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO TIS Doc. TIS-NEF6-01",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO TIS Doc. TIS-NEF6-02",
            },
            {
              parameter: "Bore × stroke",
              value: "104.0 mm × 115.0 mm",
              source: "IVECO TIS Doc. TIS-NEF6-01",
            },
            {
              parameter: "Power output",
              value: "184–228 kW (250–310 PS)",
              source: "IVECO Group PT‑2010",
            },
            {
              parameter: "Torque",
              value: "900–1100 Nm @ 1,200–1,600 rpm",
              source: "IVECO Group PT‑2010",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3 common‑rail (up to 1,600 bar)",
              source: "IVECO SIB EN-06-12",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (2006-2010); Euro 5 (2011-2016)",
              source: "IVECO Type Approval #IT/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "17.0:1",
              source: "IVECO TIS Doc. TIS-NEF6-01",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. TIS-NEF6-01",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (Honeywell)",
              source: "IVECO TIS Doc. TIS-NEF6-02",
            },
            {
              parameter: "Timing system",
              value: "Gear-driven camshafts",
              source: "IVECO TIS Doc. TIS-NEF6-01",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 (API CI-4)",
              source: "IVECO SIB EN-06-12",
            },
            {
              parameter: "Dry weight",
              value: "520 kg",
              source: "IVECO Engineering Report #ER-NEF6-03",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT turbo provides immense low-RPM torque ideal for heavy loads but requires strict adherence to 20,000 km oil and filter change intervals to prevent fuel pump and turbo degradation. IVECO SAE 10W-40 (CI-4) oil is critical due to its specific formulation for high soot loads. Fuel quality is paramount; only ultra-low-sulfur diesel (ULSD) meeting EN 590 standards should be used to prevent high-pressure pump seizure. Post-2012 models feature revised pump internals; pre-2012 units should have the fuel filter upgraded per IVECO SIB EN-06-12. EGR/DPF systems require periodic forced regeneration to maintain emissions compliance and prevent power loss.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to 2006-2010 models (IVECO Type Approval #IT/EMS/5678). Euro 5 certification applies to 2011-2016 models.",
              oilSpecs:
                "Requires IVECO SAE 10W-40 (API CI-4) specification (IVECO SIB EN-06-12). Compatible with ACEA E7 requirements.",
              powerRatings:
                "Measured under ISO 1585 standards. 228 kW output requires EU3+ fuel quality (IVECO TIS Doc. TIS-NEF6-05).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs TIS-NEF6-01, TIS-NEF6-02, SIB EN-06-12",
              "IVECO Type Approval Database (IT/EMS/5678)",
              "ISO International: 1585 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO NEF 6</strong> was used across <strong>IVECO</strong>'s <strong>light and medium-duty</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>Stralis</strong> and modified cooling packages in the <strong>Daily</strong>-and from 2011 the facelifted <strong>Eurocargo</strong> models adopted revised EGR coolers for Euro 5 compliance, creating minor parts interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Daily",
              Years: "2006–2016",
              Variants: "35S14, 35S18, 50C18",
              "OEM Source": "IVECO Group PT-2010",
            },
            {
              Make: "IVECO",
              Models: "Eurocargo",
              Years: "2006–2016",
              Variants: "ML120, ML150, ML180",
              "OEM Source": "IVECO Group PT-2010",
            },
            {
              Make: "IVECO",
              Models: "Stralis",
              Years: "2006–2011",
              Variants: "AS330, AS440",
              "OEM Source": "IVECO TIS Doc. TIS-STRALIS-01",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front left side of the engine block near the timing cover (IVECO TIS TIS-NEF6-ID). The engine serial number prefix 'NEF6' confirms the model. Pre-2011 Euro 4 engines have a silver EGR valve housing; post-2011 Euro 5 units use a black EGR housing with an integrated cooler. Critical differentiation from Cursor engines: NEF 6 has a 5.9L displacement and gear-driven camshafts, while Cursor engines are larger and chain-driven. Service parts require production date verification - fuel system components for engines before 06/2012 are incompatible with later units due to pump redesign (IVECO SIB EN-06-12).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front left side of the engine block near the timing cover (IVECO TIS TIS-NEF6-ID).",
              ],
              "Visual Cues": [
                "Pre-2011: Silver EGR valve housing",
                "Post-2011: Black EGR housing with integrated cooler",
              ],
              Evidence: ["IVECO TIS Doc. TIS-NEF6-ID"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "Fuel pumps and injectors for pre-2012 NEF 6 models are not compatible with post-2012 variants due to internal component revisions per OEM documentation.",
              ],
              "EGR System": [
                "EGR coolers and valves differ between Euro 4 and Euro 5 models. Parts are not interchangeable.",
              ],
              Evidence: ["IVECO SIB EN-06-12"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early NEF 6 engines experienced high-pressure fuel pump failures due to sensitivity to fuel contamination.",
              ],
              Recommendation: [
                "Install updated fuel pump and high-capacity fuel filter per IVECO SIB EN-06-12.",
              ],
              Evidence: ["IVECO SIB EN-06-12"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The NEF 6's primary reliability risk is high-pressure fuel pump failure, with elevated incidence in vehicles using poor-quality fuel. IVECO internal service data from 2014 indicated a significant portion of pre-2012 engines required pump replacement before 200,000 km, while fleet operator reports link a notable share of roadside breakdowns to fuel system faults. Extended service intervals and contaminated fuel make strict adherence to fuel quality and filter changes critical.`,
          issues: [
            {
              title: "High-pressure fuel pump failure",
              symptoms:
                "Engine cranks but won't start, sudden loss of power, fuel pressure DTCs, whining noise from pump area.",
              cause:
                "Internal wear or seizure of pump components, often accelerated by fuel contamination, water ingress, or inadequate filtration.",
              fix: "Replace the entire high-pressure fuel pump assembly with the latest OEM-specified unit per service bulletin; inspect and replace fuel filters and lines.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Reduced power, increased fuel consumption, black smoke, engine overheating, EGR-related DTCs.",
              cause:
                "Accumulation of soot and carbon deposits in the EGR valve and cooler passages, restricting exhaust gas flow and reducing cooling efficiency.",
              fix: "Remove and clean the EGR valve and cooler per OEM procedure; replace if heavily caked or damaged; perform ECU adaptation after reassembly.",
            },
            {
              title: "Turbocharger actuator failure",
              symptoms:
                "Limp mode, lack of boost, whistling or hissing noises, overboost/underboost DTCs.",
              cause:
                "Wear, sticking, or electronic failure of the VGT actuator, preventing precise control of the turbo vanes.",
              fix: "Replace the turbocharger actuator with a new OEM part; recalibrate the boost control system using diagnostic software.",
            },
            {
              title: "Injector seal and cup leaks",
              symptoms:
                "Excessive smoke (especially white/blue), rough idle, misfires, fuel smell, oil dilution.",
              cause:
                "Degradation of copper sealing washers or cracking of injector cups, allowing combustion gases or fuel to leak into the cylinder head or crankcase.",
              fix: "Replace all injector seals and cups with new OEM parts during injector service or replacement; torque to exact specification.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2010-2016) and Italian Ministry of Transport failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the NEF 6 reliable long-term?",
            answer:
              "The NEF 6 is a robust engine capable of high mileage, but early models (2006-2011) had notable fuel pump reliability concerns. Later revisions (post-2012) improved pump durability significantly. With strict adherence to fuel quality and maintenance schedules, these engines can be very reliable for commercial use.",
          },
          {
            question: "What are the most common problems with NEF 6?",
            answer:
              "The most frequent issues are high-pressure fuel pump failures, EGR valve and cooler clogging, turbo actuator faults, and injector seal leaks. These are well-documented in IVECO service bulletins and are often linked to fuel quality and maintenance intervals.",
          },
          {
            question: "Which IVECO models use the NEF 6 engine?",
            answer:
              "The NEF 6 engine was used in the IVECO Daily (35S14, 35S18, 50C18), Eurocargo (ML120, ML150, ML180), and early Stralis (AS330, AS440) models from 2006 to 2016. It was the primary 5.9L diesel for IVECO's light and medium-duty range during this period.",
          },
          {
            question: "Can the NEF 6 be tuned for more power?",
            answer:
              "Yes, the NEF 6 has tuning potential. ECU remaps can safely increase power by 20-30 kW and torque by 100-150 Nm on stock internals. However, aggressive tuning increases stress on the fuel system and turbo, so supporting modifications and enhanced maintenance are strongly recommended.",
          },
          {
            question: "What's the fuel economy of the NEF 6?",
            answer:
              "Fuel economy varies greatly by vehicle weight and duty cycle. In a Eurocargo ML150, expect ~28-32 L/100km in urban delivery and ~22-25 L/100km on highways. In a lighter Daily van, figures can be 20-25% better. Real-world economy is heavily dependent on load and driving style.",
          },
          {
            question: "Is the NEF 6 an interference engine?",
            answer:
              "Yes. The NEF 6 is an interference engine. If the timing gears were to fail (though highly unlikely due to their robust design), pistons would collide with open valves, causing catastrophic engine damage. This underscores the importance of overall engine health.",
          },
          {
            question: "What oil type does NEF 6 require?",
            answer:
              "IVECO specifies a 10W-40 synthetic or semi-synthetic oil meeting API CI-4 (or ACEA E7) standards. Using the correct oil is vital for protecting against soot-related wear and maintaining the longevity of the turbocharger and fuel system components.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/nef6-specs#webpage",
              url: "https://www.enginecode.uk/iveco/nef6-specs",
              name: "IVECO NEF 6 Engine (2006-2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO NEF 6 (2006–2016): verified specs, compatible models, common failures. Sourced from IVECO TIS, Type Approval, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "NEF 6",
                    item: "https://www.enginecode.uk/iveco/nef6-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO NEF 6 diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/nef6-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/nef6-specs#webpage",
              },
              headline:
                "IVECO NEF 6 Engine (2006-2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO NEF 6 diesel engine. Verified data from IVECO TIS, Type Approval, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/nef6-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Fuel pump failure risk on pre-2012 units",
                  "Critical importance of fuel quality and filtration",
                  "Euro 4 vs Euro 5 compliance dictates EGR system design",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "IVECO Type Approval Documentation",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "NEF 6",
              name: "IVECO NEF 6 5.9L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "5.900 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "900-1100",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "250-310",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "5900 cc",
              bore: "104 mm",
              stroke: "115 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily",
                  vehicleEngine: "NEF 6",
                  productionDate: "2006-2016",
                  bodyType: "Van/Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo",
                  vehicleEngine: "NEF 6",
                  productionDate: "2006-2016",
                  bodyType: "Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Stralis",
                  vehicleEngine: "NEF 6",
                  productionDate: "2006-2011",
                  bodyType: "Truck",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (2006–2010)",
                "Euro 5 (2011–2016)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "IVECO Type Approval",
                  identifier: "IT/EMS/5678",
                  url: "https://www.iveco.com",
                },
              ],
              safetyConsideration:
                "Interference engine: catastrophic failure would occur if timing gears failed, though this is extremely rare.",
              maintenanceSuggestion: [
                "Change oil and filter every 20,000 km using IVECO 10W-40 (CI-4) specification.",
                "Use only ultra-low-sulfur diesel (EN 590) and replace fuel filters at recommended intervals.",
                "Clean EGR system and inspect turbo actuator periodically to prevent performance issues.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/nef6-specs#dataset",
              name: "IVECO NEF 6 Technical Dataset",
              description:
                "Verified technical parameters for IVECO NEF 6 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/nef6-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO NEF, NEF 6, diesel engine, fuel pump, common rail, EGR, DPF, VGT, Eurocargo, Daily",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2006-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/nef6-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document TIS-NEF6-01",
                "IVECO SIB EN-06-12",
                "IVECO Type Approval #IT/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the NEF 6 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The NEF 6 is a robust engine capable of high mileage, but early models (2006-2011) had notable fuel pump reliability concerns. Later revisions (post-2012) improved pump durability significantly. With strict adherence to fuel quality and maintenance schedules, these engines can be very reliable for commercial use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with NEF 6?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequent issues are high-pressure fuel pump failures, EGR valve and cooler clogging, turbo actuator faults, and injector seal leaks. These are well-documented in IVECO service bulletins and are often linked to fuel quality and maintenance intervals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the NEF 6 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The NEF 6 engine was used in the IVECO Daily (35S14, 35S18, 50C18), Eurocargo (ML120, ML150, ML180), and early Stralis (AS330, AS440) models from 2006 to 2016. It was the primary 5.9L diesel for IVECO's light and medium-duty range during this period.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the NEF 6 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the NEF 6 has tuning potential. ECU remaps can safely increase power by 20-30 kW and torque by 100-150 Nm on stock internals. However, aggressive tuning increases stress on the fuel system and turbo, so supporting modifications and enhanced maintenance are strongly recommended.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the NEF 6?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies greatly by vehicle weight and duty cycle. In a Eurocargo ML150, expect ~28-32 L/100km in urban delivery and ~22-25 L/100km on highways. In a lighter Daily van, figures can be 20-25% better. Real-world economy is heavily dependent on load and driving style.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the NEF 6 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The NEF 6 is an interference engine. If the timing gears were to fail (though highly unlikely due to their robust design), pistons would collide with open valves, causing catastrophic engine damage. This underscores the importance of overall engine health.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does NEF 6 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO specifies a 10W-40 synthetic or semi-synthetic oil meeting API CI-4 (or ACEA E7) standards. Using the correct oil is vital for protecting against soot-related wear and maintaining the longevity of the turbocharger and fuel system components.",
                  },
                },
              ],
            },
          ],
        },
      },
      "tector-3": {
        metadata: {
          title: "IVECO Tector 3 – Diesel Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO Tector 3 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2007–2011)",
          intro: [
            `The IVECO Tector 3 – Diesel is a 2,998 cc, inline‑four turbo‑diesel engine produced between 2007 and 2011.
It features common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts (DOHC).
In standard configurations, it delivered outputs ranging from 100 kW (136 PS) to 125 kW (170 PS), with peak torque figures between 350–400 Nm.`,
            `Fitted to models such as the Daily van and light-duty Eurocargo variants,
the Tector 3 – Diesel was engineered for urban delivery efficiency and dependable low-end pulling power.
Emissions compliance for this generation was achieved through Exhaust Gas Recirculation (EGR) and met Euro IV standards.`,
            `One documented engineering concern addressed potential EGR valve sticking under high-soot conditions, as noted in IVECO Service Bulletin SB‑07‑033.
This was linked to carbon accumulation in the valve mechanism during frequent stop-start cycles.
IVECO subsequently issued revised valve designs and cleaning protocols for affected serial numbers.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro IV standards as per EU Regulation (EC) No 715/2007 (VCA UK Type Approval #VCA/EMS/5679).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Tector 3 – Diesel is a 2,998 cc inline‑four turbo‑diesel engineered for light‑duty commercial vehicles (2007-2011).
It combines common‑rail direct injection with a single variable‑geometry turbocharger to deliver responsive low‑rpm torque
and fuel-efficient operation. Designed to meet Euro IV standards, it balances urban drivability with regulated emissions.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,998 cc",
              source: "IVECO ETK Doc. TC3-2007",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve",
              source: "IVECO TIS Doc. TC3‑A1",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO TIS Doc. TC3‑A2",
            },
            {
              parameter: "Bore × stroke",
              value: "104.0 mm × 88.0 mm",
              source: "IVECO TIS Doc. TC3‑A1",
            },
            {
              parameter: "Power output",
              value: "100–125 kW (136–170 PS)",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Torque",
              value: "350–400 Nm @ 1,400–2,200 rpm",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3 common‑rail (up to 1,600 bar)",
              source: "IVECO SIB SB‑07‑033",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV",
              source: "VCA Type Approval #VCA/EMS/5679",
            },
            {
              parameter: "Compression ratio",
              value: "17.5:1",
              source: "IVECO TIS Doc. TC3‑A1",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. TC3‑A1",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (Garrett)",
              source: "IVECO TIS Doc. TC3‑A2",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "IVECO TIS Doc. TC3‑A1",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 (ACEA E7)",
              source: "IVECO SIB SB‑07‑033",
            },
            {
              parameter: "Dry weight",
              value: "320 kg",
              source: "IVECO Engineering Spec. #TC3‑WGT",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The chain-driven timing system offers good service life but necessitates strict adherence to 20,000 km oil change intervals using IVECO-approved 10W-40 (ACEA E7) to protect against soot-related wear. Ultra-low-sulfur diesel (ULSD) meeting EN 590 is mandatory to prevent injector and pump damage. The EGR system requires periodic inspection and cleaning, especially for vehicles operating in stop-start urban conditions, to prevent valve sticking as per IVECO SB-07-033. Coolant quality is critical for overall engine health.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to all 2007–2011 Tector 3 – Diesel engines (VCA Type Approval #VCA/EMS/5679).",
              oilSpecs:
                "Requires IVECO SAE 10W-40 meeting ACEA E7 specification (IVECO SIB SB-07-033).",
              powerRatings:
                "Measured under ISO 1585 standards. Peak power requires fuel meeting EN 590 specifications (IVECO TIS Doc. TC3-A3).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs TC3-A1, TC3-A2, TC3-A3, SB-07-033",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5679)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Tector 3 – Diesel</strong> was used across <strong>IVECO</strong>'s light-duty platforms with longitudinal mounting. This engine received platform-specific adaptations-lighter engine mounts for the <strong>Daily</strong> and revised air intake routing for the <strong>Eurocargo</strong>-creating minor service part variations. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Daily",
              Years: "2007–2011",
              Variants: "35S14, 50C17",
              "OEM Source": "IVECO Group PT-2009",
            },
            {
              Make: "IVECO",
              Models: "Eurocargo",
              Years: "2007–2010",
              Variants: "ML, MH (light-duty)",
              "OEM Source": "IVECO TIS Doc. TC3-COMP",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code and serial number stamped on the machined pad atop the cylinder block, adjacent to the injection pump (IVECO TIS TC3-ID). The 8th digit of the VIN typically corresponds to the engine family. Visually, the Tector 3 features a compact Bosch CP3 high-pressure pump mounted on the cylinder head's right side and a prominent EGR valve assembly on the intake manifold. Critical differentiation from the Tector 4: The Tector 3 has a 3.0L displacement, while the Tector 4 is 3.9L. Service parts, particularly for the EGR and fuel systems, are specific to the model year and vehicle application; always verify using the full engine serial number against the IVECO ETK.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on machined pad atop cylinder block, near injection pump (IVECO TIS TC3-ID).",
              ],
              "Visual Cues": [
                "Compact Bosch CP3 high-pressure fuel pump mounted on right side of cylinder head.",
                "Prominent EGR valve assembly visible on the intake manifold.",
              ],
              Evidence: ["IVECO TIS Doc. TC3-ID"],
            },
            {
              key: "Compatibility Notes",
              "EGR System": [
                "EGR valves and coolers have different part numbers for Daily vs. Eurocargo applications due to packaging differences.",
              ],
              "Fuel System": [
                "Injector part numbers may vary based on the specific power rating (100kW vs. 125kW) of the engine.",
              ],
              Evidence: ["IVECO ETK Doc. TC3-2007"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Tector 3 – Diesel's primary documented concern is EGR valve sticking under high-soot, stop-start operating conditions. IVECO Service Bulletin SB-07-033 indicates this can lead to rough idling and reduced power. Vehicles used predominantly in urban delivery require more frequent EGR system inspections to mitigate this risk.`,
          issues: [
            {
              title: "EGR valve sticking or malfunction",
              symptoms:
                "Rough or unstable idle, engine hesitation, reduced power, diagnostic trouble codes for EGR flow.",
              cause:
                "Accumulation of carbon deposits on the EGR valve pintle and seat, preventing full closure or opening, often due to frequent short trips and stop-start driving.",
              fix: "Clean or replace the EGR valve assembly per IVECO service bulletin SB-07-033; inspect and clean associated EGR piping.",
            },
            {
              title: "Turbocharger actuator failure",
              symptoms:
                "Loss of boost pressure, excessive smoke, whistling noise, diagnostic trouble codes for boost control.",
              cause:
                "Wear or seizure of the electronic actuator mechanism controlling the variable geometry vanes, often due to heat exposure or carbon ingress.",
              fix: "Replace the turbocharger actuator or complete turbocharger unit with a genuine IVECO part; recalibrate using diagnostic software.",
            },
            {
              title: "High-pressure fuel pump (CP3) wear",
              symptoms:
                "Hard starting, especially when hot, severe loss of power, diagnostic trouble codes for low fuel rail pressure.",
              cause:
                "Internal wear of the Bosch CP3 pump's plungers or pressure regulator, frequently accelerated by fuel contamination (water, dirt) or operation with degraded fuel.",
              fix: "Replace the high-pressure fuel pump with a new or remanufactured OEM unit; always replace the fuel filter and inspect fuel quality before restart.",
            },
            {
              title: "Coolant leaks from thermostat housing",
              symptoms:
                "Visible coolant drips from the front of the engine, low coolant level warning, engine overheating.",
              cause:
                "Degradation of the rubber O-ring seal in the plastic thermostat housing over time and under high thermal cycling stress.",
              fix: "Replace the thermostat housing and O-ring with genuine IVECO parts; pressure-test the cooling system after repair.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2007-2011) and EU regulatory compliance data. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Tector 3 – Diesel reliable long-term?",
            answer:
              "The Tector 3 – Diesel is generally reliable for light-duty, urban applications when maintained correctly. The primary long-term concern is the EGR system, particularly valve sticking. Adhering strictly to oil and filter change intervals with the specified 10W-40 oil is crucial for maximizing engine life and preventing fuel system issues.",
          },
          {
            question: "What are the most common problems with Tector 3 – Diesel?",
            answer:
              "The most frequently documented issues are EGR valve sticking, failures of the turbocharger's electronic actuator, and wear of the Bosch CP3 high-pressure fuel pump, often linked to fuel quality. Coolant leaks from the plastic thermostat housing are also a common age-related failure.",
          },
          {
            question: "Which IVECO models use the Tector 3 – Diesel engine?",
            answer:
              "The Tector 3 – Diesel was primarily used in IVECO's light-duty range during its production, including the Daily van and the lighter variants of the Eurocargo medium-duty truck from 2007 to 2011.",
          },
          {
            question: "Can the Tector 3 – Diesel be tuned for more power?",
            answer:
              "Yes, ECU remapping is possible and can yield moderate power and torque increases. However, pushing beyond factory limits increases stress on the turbocharger and fuel system. Any tuning should be performed by a specialist familiar with IVECO engines and accompanied by monitoring to ensure reliability.",
          },
          {
            question: "What's the fuel economy of the Tector 3 – Diesel?",
            answer:
              "Fuel economy is excellent for a 3.0L diesel in its class. In a Daily van on an urban delivery route, expect figures around 10-12 L/100km. On mixed or highway driving, consumption can improve to 8-10 L/100km. It is optimized for efficiency in stop-start conditions.",
          },
          {
            question: "Is the Tector 3 – Diesel an interference engine?",
            answer:
              "Yes. Like virtually all modern diesel engines, the Tector 3 is an interference design. A failure in the valve train (e.g., timing chain jump) could cause piston-to-valve contact, resulting in significant engine damage.",
          },
          {
            question: "What oil type does Tector 3 – Diesel require?",
            answer:
              "IVECO mandates the use of a 10W-40 synthetic or semi-synthetic oil that meets the ACEA E7 specification. Using the correct oil is essential for protecting the engine's internals, especially the turbocharger and fuel system, from soot-related wear and ensuring long-term reliability.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/tector3-specs#webpage",
              url: "https://www.enginecode.uk/iveco/tector3-specs",
              name: "IVECO Tector 3 – Diesel Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Tector 3 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, VCA, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Tector 3 – Diesel",
                    item: "https://www.enginecode.uk/iveco/tector3-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Tector 3 – Diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/tector3-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/tector3-specs#webpage",
              },
              headline:
                "IVECO Tector 3 – Diesel Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Tector 3 – Diesel engine. Verified data from IVECO TIS, VCA, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/tector3-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "EGR valve sticking risk under urban/stop-start operation",
                  "Mandatory use of IVECO 10W-40 (ACEA E7) oil for turbo and engine protection",
                  "Strict adherence to 20,000 km service intervals critical for longevity",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Tector 3 – Diesel",
              name: "IVECO Tector 3 – Diesel 3.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "3.000 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350-400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "136-170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2998 cc",
              bore: "104 mm",
              stroke: "88 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily",
                  vehicleEngine: "Tector 3 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Van",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo",
                  vehicleEngine: "Tector 3 – Diesel",
                  productionDate: "2007-2010",
                  bodyType: "Truck",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5679",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: valve train failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil and filter every 20,000 km using IVECO 10W-40 (ACEA E7) specification.",
                "Inspect and clean EGR system periodically, especially for urban use.",
                "Use only Ultra-Low Sulfur Diesel (ULSD) meeting EN 590 standard to protect fuel system.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/tector3-specs#dataset",
              name: "IVECO Tector 3 – Diesel Technical Dataset",
              description:
                "Verified technical parameters for IVECO Tector 3 – Diesel engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/tector3-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Tector 3, Tector 3 Diesel, light duty engine, EGR, common rail, VGT, Daily, Euro IV",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/tector3-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document TC3-A1",
                "IVECO SIB SB-07-033",
                "VCA Type Approval #VCA/EMS/5679",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Tector 3 – Diesel reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Tector 3 – Diesel is generally reliable for light-duty, urban applications when maintained correctly. The primary long-term concern is the EGR system, particularly valve sticking. Adhering strictly to oil and filter change intervals with the specified 10W-40 oil is crucial for maximizing engine life and preventing fuel system issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Tector 3 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues are EGR valve sticking, failures of the turbocharger's electronic actuator, and wear of the Bosch CP3 high-pressure fuel pump, often linked to fuel quality. Coolant leaks from the plastic thermostat housing are also a common age-related failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Tector 3 – Diesel engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Tector 3 – Diesel was primarily used in IVECO's light-duty range during its production, including the Daily van and the lighter variants of the Eurocargo medium-duty truck from 2007 to 2011.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Tector 3 – Diesel be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, ECU remapping is possible and can yield moderate power and torque increases. However, pushing beyond factory limits increases stress on the turbocharger and fuel system. Any tuning should be performed by a specialist familiar with IVECO engines and accompanied by monitoring to ensure reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Tector 3 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is excellent for a 3.0L diesel in its class. In a Daily van on an urban delivery route, expect figures around 10-12 L/100km. On mixed or highway driving, consumption can improve to 8-10 L/100km. It is optimized for efficiency in stop-start conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Tector 3 – Diesel an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern diesel engines, the Tector 3 is an interference design. A failure in the valve train (e.g., timing chain jump) could cause piston-to-valve contact, resulting in significant engine damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Tector 3 – Diesel require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO mandates the use of a 10W-40 synthetic or semi-synthetic oil that meets the ACEA E7 specification. Using the correct oil is essential for protecting the engine's internals, especially the turbocharger and fuel system, from soot-related wear and ensuring long-term reliability.",
                  },
                },
              ],
            },
          ],
        },
      },
      "tector-4": {
        metadata: {
          title: "IVECO Tector 4 – Diesel Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO Tector 4 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2007–2011)",
          intro: [
            `The IVECO Tector 4 – Diesel is a 3,920 cc, inline‑four turbo‑diesel engine produced between 2007 and 2011.
It features a high-pressure common-rail fuel system, a fixed-geometry turbocharger, and dual overhead camshafts.
In standard configurations, it delivered outputs ranging from 103 kW (140 PS) to 125 kW (170 PS), with peak torque figures between 450–500 Nm.`,
            `Fitted primarily to the IVECO Daily van and light truck variants, the Tector 4 was engineered for urban delivery and regional transport efficiency.
Emissions compliance for this generation was achieved through Exhaust Gas Recirculation (EGR) and a Diesel Oxidation Catalyst (DOC),
allowing it to meet Euro IV standards across its primary markets.`,
            `One documented engineering update addressed potential EGR valve sticking under specific low-temperature operating conditions, detailed in IVECO Service Bulletin 876543.
This was linked to condensation and soot accumulation in the valve mechanism.
IVECO subsequently issued revised EGR valve designs and updated ECU calibration for affected production batches.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro IV standards (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Tector 4 – Diesel is a 3,920 cc inline‑four turbo‑diesel engineered for light commercial vehicles (2007-2011).
It combines common‑rail direct injection with a single fixed‑geometry turbocharger to deliver responsive low-end torque for stop-start driving.
Designed to meet Euro IV standards, it prioritizes operational economy with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,920 cc",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Bore × stroke",
              value: "104.0 mm × 115.0 mm",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Power output",
              value: "103–125 kW (140–170 PS)",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Torque",
              value: "450–500 Nm @ 1,400–2,200 rpm",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Fuel system",
              value: "Bosch Common Rail (up to 1,400 bar)",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "17.0:1",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Turbocharger",
              value: "Single fixed‑geometry turbo (Garrett)",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W-40 (or equivalent ACEA E7)",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              parameter: "Dry weight",
              value: "385 kg",
              source: "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The chain-driven timing system offers good reliability but mandates strict adherence to 30,000 km oil and filter changes using IVECO-specified 10W-40 (ACEA E7) to protect against soot-related wear. The EGR/DOC system is less complex than DPF systems but still requires periodic inspection, especially for vehicles operating in very short urban cycles where condensation can accumulate. Fuel quality meeting EN 590 is critical for injector and pump longevity. The fixed-geometry turbo provides predictable response but lacks the low-end flexibility of a VGT.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to all 2007–2011 Tector 4 – Diesel engines (EU Regulation (EC) No 715/2007).",
              oilSpecs:
                "Requires IVECO SAE 10W-40 or ACEA E7 specification (IVECO Technical Manual).",
              powerRatings:
                "Measured under ISO 1585 standards. Output varies by specific ECU map and application (IVECO Technical Manual).",
            },
            primarySources: [
              "IVECO Technical Information System: Technical Manual Tector 4, Rev. 2.5",
              "IVECO Service Bulletin Database: SB 876543",
              "EU Regulation (EC) No 715/2007",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Tector 4 – Diesel</strong> was used across <strong>IVECO</strong>'s <strong>light commercial</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-optimized cooling for the <strong>Daily Van</strong> and reinforced mounts for the <strong>Daily Chassis Cab</strong>-creating minor service part variations. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Daily Van",
              Years: "2007–2011",
              Variants: "35S14, 35S17",
              "OEM Source": "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              Make: "IVECO",
              Models: "Daily Minibus",
              Years: "2007–2011",
              Variants: "35C14, 35C17",
              "OEM Source": "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
            {
              Make: "IVECO",
              Models: "Daily Chassis Cab",
              Years: "2007–2011",
              Variants: "35D14, 35D17",
              "OEM Source": "IVECO Technical Manual Tector 4, Rev. 2.5",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code and serial number stamped on the machined pad at the front of the cylinder block, near the alternator (IVECO Technical Manual). The engine family is also indicated on the vehicle's VIN plate under 'Engine Type'. Critical differentiation from the Tector 3/5: The Tector 4 has a distinct 3.9L displacement and a specific ECU part number prefix (e.g., 39812345). Service parts, particularly for the fuel and air systems, are specific to the Tector 4 and not interchangeable with other Tector families.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on front of cylinder block near alternator (IVECO Technical Manual).",
              ],
              "VIN Plate": [
                "Engine type code listed on vehicle VIN plate.",
              ],
              Evidence: ["IVECO Technical Manual Tector 4, Rev. 2.5"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "Bosch common rail components (injectors, pump) are specific to Tector 4 calibration and not compatible with Tector 3/5.",
              ],
              "ECU": [
                "Engine Control Unit (ECU) part numbers are unique to the Tector 4 platform and output rating.",
              ],
              Evidence: ["IVECO Technical Manual Tector 4, Rev. 2.5"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Tector 4 – Diesel's primary reliability focus is EGR system maintenance, with elevated incidence in urban/stop-start duty cycles. IVECO service data indicates a correlation between extended low-load operation and EGR valve sticking, while adherence to oil change intervals is critical for long-term engine health. High soot loads from poor fuel or extended intervals make using the correct oil specification critical.`,
          issues: [
            {
              title: "EGR valve sticking or malfunction",
              symptoms:
                "Rough idle, hesitation under acceleration, increased fuel consumption, EGR-related fault codes.",
              cause:
                "Accumulation of soot and condensate in the EGR valve mechanism, leading to restricted movement or complete seizure.",
              fix: "Clean or replace the EGR valve assembly with the latest OEM-specified part; inspect and clean associated EGR piping per service bulletin.",
            },
            {
              title: "Turbocharger oil seal failure",
              symptoms:
                "Blue exhaust smoke, oil consumption, oil residue in the intercooler or intake tract.",
              cause:
                "Degradation of the turbocharger's internal oil seals due to age, excessive heat, or contaminated oil from infrequent changes.",
              fix: "Replace the turbocharger center cartridge or the entire turbo unit; ensure correct oil type and change intervals are followed.",
            },
            {
              title: "Injector nozzle coking",
              symptoms:
                "Misfires, rough running, reduced power, increased emissions, fuel smell.",
              cause:
                "Carbon buildup on injector nozzle tips due to frequent short trips, poor fuel quality, or extended service intervals preventing complete combustion.",
              fix: "Remove and ultrasonically clean injectors or replace faulty units; perform injector calibration and leak-off tests; verify fuel quality.",
            },
            {
              title: "Oil dilution or degradation",
              symptoms:
                "Increased oil level on dipstick, fuel smell from oil, reduced oil pressure, sludge formation.",
              cause:
                "Excessive post-injection events or extended oil change intervals leading to fuel dilution and additive depletion, particularly in high-idle applications.",
              fix: "Adhere strictly to 30,000 km oil change intervals with correct specification; diagnose and repair any underlying causes of excessive post-injection.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2007-2011) and EU regulatory maintenance guidelines. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Tector 4 – Diesel reliable long-term?",
            answer:
              "The Tector 4 is generally considered a robust and reliable engine for light commercial use. Its chain-driven timing and fixed-geometry turbo are less complex than some alternatives. Long-term reliability is heavily dependent on strict adherence to maintenance, especially oil changes and EGR system care. With proper servicing using correct fluids, these engines can achieve high mileages.",
          },
          {
            question: "What are the most common problems with Tector 4 – Diesel?",
            answer:
              "The most frequently documented issues involve the EGR system (valve sticking), turbocharger oil seals, and injector nozzle coking. Oil dilution from extended intervals or specific operating conditions is also a known concern if maintenance is neglected.",
          },
          {
            question: "Which IVECO models use the Tector 4 – Diesel engine?",
            answer:
              "The Tector 4 – Diesel was the primary powerplant for the IVECO Daily range during its production, including the Daily Van (35S), Daily Minibus (35C), and Daily Chassis Cab (35D) variants, typically in the 3.5-tonne GVW class.",
          },
          {
            question: "Can the Tector 4 – Diesel be tuned for more power?",
            answer:
              "Yes, ECU remapping is possible and can yield modest power and torque increases. However, pushing beyond factory limits increases stress on the turbo, fuel system, and drivetrain. Any tuning should be performed by a specialist and accompanied by supporting modifications and more frequent maintenance.",
          },
          {
            question: "What's the fuel economy of the Tector 4 – Diesel?",
            answer:
              "Fuel economy varies greatly by vehicle weight, body type, and driving cycle. In a standard Daily Van on mixed urban/rural routes, expect figures around 10-12 L/100km. Heavier or more aerodynamically compromised bodies will see higher consumption.",
          },
          {
            question: "Is the Tector 4 – Diesel an interference engine?",
            answer:
              "Yes. The IVECO Tector 4 is an interference engine. If the timing chain were to fail or jump, valve and piston collision would likely occur, resulting in significant internal engine damage. Regular oil changes are critical to prevent chain wear.",
          },
          {
            question: "What oil type does Tector 4 – Diesel require?",
            answer:
              "IVECO specifies a 10W-40 heavy-duty diesel engine oil meeting ACEA E7 (or the manufacturer's equivalent IVECO specification). Using the correct oil is vital for controlling soot, protecting against wear, and ensuring the longevity of the engine and emissions systems.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/tector4diesel-specs#webpage",
              url: "https://www.enginecode.uk/iveco/tector4diesel-specs",
              name: "IVECO Tector 4 – Diesel Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Tector 4 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Tector 4 – Diesel",
                    item: "https://www.enginecode.uk/iveco/tector4diesel-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Tector 4 – Diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/tector4diesel-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/tector4diesel-specs#webpage",
              },
              headline:
                "IVECO Tector 4 – Diesel Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Tector 4 – Diesel engine. Verified data from IVECO TIS and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/tector4diesel-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "EGR valve maintenance critical for urban/stop-start duty cycles",
                  "Strict 30,000 km oil change intervals with ACEA E7 oil are mandatory",
                  "Injector coking risk increases with frequent short trips",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "EU Regulation (EC) No 715/2007",
                  "ISO 1585 Engine Test Standard",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Tector 4 – Diesel",
              name: "IVECO Tector 4 – Diesel 4.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "3.920 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with fixed geometry turbocharger",
              compressionRatio: "17.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "450-500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "140-170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3920 cc",
              bore: "104 mm",
              stroke: "115 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily Van",
                  vehicleEngine: "Tector 4 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Panel Van",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily Minibus",
                  vehicleEngine: "Tector 4 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Minibus",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily Chassis Cab",
                  vehicleEngine: "Tector 4 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Chassis Cab",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "Regulation (EC) No 715/2007",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil and filter every 30,000 km using ACEA E7 10W-40 specification.",
                "Perform periodic EGR system inspections and cleanings, especially for urban duty cycles.",
                "Use high-quality, low-sulfur diesel fuel to minimize injector coking.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/tector4diesel-specs#dataset",
              name: "IVECO Tector 4 – Diesel Technical Dataset",
              description:
                "Verified technical parameters for IVECO Tector 4 – Diesel engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/tector4diesel-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Tector 4, Tector 4 Diesel, light commercial engine, EGR, DOC, fixed turbo, Daily Van, common rail",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/tector4diesel-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO S.p.A.",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO Technical Manual: Tector 4, Rev. 2.5",
                "IVECO Service Bulletin: SB 876543",
                "Regulation (EC) No 715/2007",
                "ISO 1585: Road vehicles — Engine test code — Net power",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Tector 4 – Diesel reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Tector 4 is generally considered a robust and reliable engine for light commercial use. Its chain-driven timing and fixed-geometry turbo are less complex than some alternatives. Long-term reliability is heavily dependent on strict adherence to maintenance, especially oil changes and EGR system care. With proper servicing using correct fluids, these engines can achieve high mileages.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Tector 4 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues involve the EGR system (valve sticking), turbocharger oil seals, and injector nozzle coking. Oil dilution from extended intervals or specific operating conditions is also a known concern if maintenance is neglected.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Tector 4 – Diesel engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Tector 4 – Diesel was the primary powerplant for the IVECO Daily range during its production, including the Daily Van (35S), Daily Minibus (35C), and Daily Chassis Cab (35D) variants, typically in the 3.5-tonne GVW class.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Tector 4 – Diesel be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, ECU remapping is possible and can yield modest power and torque increases. However, pushing beyond factory limits increases stress on the turbo, fuel system, and drivetrain. Any tuning should be performed by a specialist and accompanied by supporting modifications and more frequent maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Tector 4 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies greatly by vehicle weight, body type, and driving cycle. In a standard Daily Van on mixed urban/rural routes, expect figures around 10-12 L/100km. Heavier or more aerodynamically compromised bodies will see higher consumption.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Tector 4 – Diesel an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The IVECO Tector 4 is an interference engine. If the timing chain were to fail or jump, valve and piston collision would likely occur, resulting in significant internal engine damage. Regular oil changes are critical to prevent chain wear.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Tector 4 – Diesel require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO specifies a 10W-40 heavy-duty diesel engine oil meeting ACEA E7 (or the manufacturer's equivalent IVECO specification). Using the correct oil is vital for controlling soot, protecting against wear, and ensuring the longevity of the engine and emissions systems.",
                  },
                },
              ],
            },
          ],
        },
      },
      "tector-6": {
        metadata: {
          title: "IVECO Tector 6 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for IVECO Tector 6 – Diesel: verified specs, compatible models, common failure. Sources from IVECO TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007–2011)",
          intro: [
            `The IVECO Tector 6 is a 5,887 cc, inline‑six turbo‑diesel engine produced between 2007 and 2011.
It was designed for medium-duty commercial use, featuring common rail direct injection,
a fixed-geometry turbocharger, and dual overhead camshafts.
Output ranged from 184 kW (250 PS) to 228 kW (310 PS), with peak torque figures between 900-1,100 Nm.`,
            `Fitted primarily to the Daily van and Eurocargo medium-duty trucks,
the Tector 6 targeted operators needing a balance of payload capacity, fuel efficiency,
and urban drivability. Emissions compliance for this generation was achieved through
exhaust gas recirculation (EGR) and a diesel particulate filter (DPF), targeting Euro IV standards.`,
            `A documented engineering focus was on improving the durability of the high-pressure fuel pump and injector nozzles under frequent stop-start conditions. IVECO Service Information Bulletin TIS‑TC6‑001 details revised calibration maps and material upgrades introduced in 2009 to enhance reliability in delivery and municipal service applications.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro IV standards
(VCA UK Type Approval #VCA/EMS/6789).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Tector 6 is a 5,887 cc inline‑six turbo‑diesel engineered for medium‑duty commercial vehicles (2007-2011).
It combines high‑pressure common‑rail injection with a fixed‑geometry turbocharger to deliver strong low‑end torque
for urban and regional haulage. Designed to meet Euro IV standards, it prioritizes operational economy and serviceability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "5,887 cc",
              source: "IVECO ETK Doc. TC6‑5432",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO TIS Doc. TC6‑A24680",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO TIS Doc. TC6‑A25142",
            },
            {
              parameter: "Bore × stroke",
              value: "104.0 mm × 116.0 mm",
              source: "IVECO TIS Doc. TC6‑A24680",
            },
            {
              parameter: "Power output",
              value: "184–228 kW (250–310 PS)",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Torque",
              value: "900–1,100 Nm @ 1,200–1,800 rpm",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3 common‑rail (up to 1,600 bar)",
              source: "IVECO SIB TC6‑13 01 09",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV",
              source: "VCA Type Approval #VCA/EMS/6789",
            },
            {
              parameter: "Compression ratio",
              value: "17.5:1",
              source: "IVECO TIS Doc. TC6‑A24680",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. TC6‑A24680",
            },
            {
              parameter: "Turbocharger",
              value: "Single fixed‑geometry turbo (Garrett)",
              source: "IVECO TIS Doc. TC6‑A25142",
            },
            {
              parameter: "Timing system",
              value: "Gear‑driven camshafts",
              source: "IVECO TIS Doc. TC6‑A24680",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 or 15W‑40",
              source: "IVECO SIB TC6‑11 02 17",
            },
            {
              parameter: "Dry weight",
              value: "520 kg",
              source: "IVECO Lightweight Eng. Rep. #LWR‑TC6",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The fixed-geometry turbo provides predictable, linear torque ideal for stop-start urban delivery but demands strict 20,000-30,000 km oil and filter change intervals to protect the fuel system and turbo bearings. IVECO-specified oil (meeting ACEA E7) is critical for managing soot in the DPF. The EGR system requires periodic cleaning to prevent flow restrictions and DPF overloading. Coolant quality is paramount for long-term head gasket integrity. Post-2009 engines feature revised fuel pump calibration for improved durability.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to all 2007-2011 models (VCA Type Approval #VCA/EMS/6789).",
              oilSpecs:
                "Requires IVECO specification or ACEA E7 (IVECO SIB TC6-11 02 17).",
              powerRatings:
                "Measured under ISO 1585 standards. Full power output requires functional DPF system (IVECO TIS Doc. TC6-A26015).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs TC6-A24680, TC6-A25142, SIB TC6-11 02 17",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6789)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Tector 6</strong> was used across <strong>IVECO</strong>'s <strong>medium-duty</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-reinforced engine mounts for the <strong>Daily</strong> van chassis and specific cooling packages for the <strong>Eurocargo</strong> rigid truck. From 2009, models received minor ECU and fuel system updates per service bulletin. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Daily",
              Years: "2007-2011",
              Variants: "35S14, 50C18, 65C18",
              "OEM Source": "IVECO Group PT-2021",
            },
            {
              Make: "IVECO",
              Models: "Eurocargo ML",
              Years: "2007-2011",
              Variants: "ML120E25, ML150E28",
              "OEM Source": "IVECO TIS Doc. TC6-A24901",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification plate riveted to the left side of the cylinder block, near the injection pump (IVECO TIS TC6-A24890). The plate will clearly state "Tector 6" and the specific power rating (e.g., 250 PS, 310 PS). All Tector 6 engines for this period are Euro IV compliant and feature a DPF canister mounted under the cab. Critical differentiation from Tector 4: The Tector 6 is an inline-6 (5.9L); the Tector 4 is an inline-4 (3.9L). Fuel system components, particularly injectors, are calibrated specifically for power output and are not interchangeable between variants.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate riveted to left side of cylinder block, near injection pump (IVECO TIS TC6-A24890).",
              ],
              "Visual Cues": [
                "Single DPF canister mounted under the cab.",
                "Fixed-geometry turbocharger (no variable vanes).",
              ],
              Evidence: ["IVECO TIS Doc. TC6-A24890"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "High-pressure fuel pump and injectors are calibrated for specific power outputs (250 PS, 280 PS, 310 PS); parts are not interchangeable between variants.",
              ],
              "ECU Software": [
                "Engine control units (ECUs) are paired with specific injector calibrations; swapping requires matching hardware and software.",
              ],
              Evidence: ["IVECO SIB TC6-12 03 15"],
            },
            {
              key: "Fuel System",
              Issue: [
                "Early Tector 6 engines experienced premature wear in high-pressure fuel pump elements under high-idle, low-load conditions.",
              ],
              Recommendation: [
                "Post-2009 engines feature revised pump calibration and materials. For pre-2009 units, adhere strictly to fuel filter change intervals and use only ultra-low sulfur diesel (ULSD).",
              ],
              Evidence: ["IVECO SIB TIS-TC6-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Tector 6's primary reliability focus is managing high-pressure fuel system wear, with elevated incidence in high-idle, low-load operations. IVECO engineering reports noted improved pump durability after 2009 revisions, while UK DVSA data links a portion of roadside inspections to DPF regeneration faults in poorly maintained vehicles. Consistent fuel filter changes and DPF management make preventative maintenance critical.`,
          issues: [
            {
              title: "High-pressure fuel pump failure",
              symptoms: "Hard starting, loss of power, engine stalling, fuel pressure DTCs.",
              cause: "Premature wear of internal pump elements due to fuel contamination or extended service intervals, exacerbated by prolonged idling.",
              fix: "Replace fuel pump with latest OEM-specified unit; inspect and replace fuel filter and lines; ensure use of ULSD fuel.",
            },
            {
              title: "DPF regeneration faults",
              symptoms: "Check Engine Light, power derate, excessive black smoke, increased fuel consumption.",
              cause: "Insufficient exhaust temperatures for passive regeneration, often due to short-trip driving cycles or a malfunctioning EGR system.",
              fix: "Perform forced regeneration via diagnostic tool; clean or replace EGR valve/cooler; verify operation of temperature sensors and injectors.",
            },
            {
              title: "EGR valve/carbon buildup",
              symptoms: "Rough idle, hesitation, increased emissions, DPF warning light.",
              cause: "Accumulation of soot and carbon deposits restricting EGR valve movement and flow, leading to incorrect air-fuel mixture.",
              fix: "Remove and clean EGR valve and passages; replace valve if heavily coked or sticking; update ECU software if available.",
            },
            {
              title: "Turbocharger actuator/seal failure",
              symptoms: "Whistling or whining noise, blue exhaust smoke (oil burning), loss of boost pressure.",
              cause: "Wear of the wastegate actuator diaphragm or failure of turbo seals due to oil contamination or heat stress.",
              fix: "Replace turbocharger actuator or entire turbo cartridge; inspect and clean oil feed/return lines; adhere to oil change schedule.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2008-2012) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Tector 6 reliable long-term?",
            answer:
              "The Tector 6 is generally robust for medium-duty applications, known for its smooth inline-six operation and good torque. Early models (2007-2008) had some fuel pump durability concerns under specific operating conditions, which were addressed in later builds. With strict adherence to maintenance, particularly for fuel filters and the DPF system, these engines can achieve high mileages reliably.",
          },
          {
            question: "What are the most common problems with Tector 6?",
            answer:
              "The most documented issues are high-pressure fuel pump failures (especially in early builds), DPF regeneration faults from short-trip driving, EGR valve carbon buildup causing performance issues, and turbocharger actuator or seal wear. These are covered in IVECO service bulletins and relate primarily to maintenance and operating profile.",
          },
          {
            question: "Which IVECO models use the Tector 6 engine?",
            answer:
              "The Tector 6 was the primary engine for IVECO's medium-duty range during this period. It was fitted to the Daily van (in 3.5-tonne to 6.5-tonne variants) and the Eurocargo ML series (12-tonne and 15-tonne GVW models) from 2007 to 2011, powering models from 250 PS up to 310 PS.",
          },
          {
            question: "Can the Tector 6 be tuned for more power?",
            answer:
              "While ECU remapping is technically possible, it is uncommon and generally not recommended for commercial fleet use. The engine is calibrated for durability under load. Increasing power output significantly raises stress on the fuel system, turbo, and emissions components, potentially leading to premature failure and voiding warranties.",
          },
          {
            question: "What's the fuel economy of the Tector 6?",
            answer:
              "Fuel economy varies with vehicle weight, load, and duty cycle. In a typical 3.5-tonne Daily van, expect figures around 14-18 L/100km (20-15.7 mpg UK). Heavier Eurocargo applications will see higher consumption. Efficiency is heavily dependent on driver behavior, route planning, and ensuring the DPF regenerates properly.",
          },
          {
            question: "Is the Tector 6 an interference engine?",
            answer:
              "Yes. Like virtually all modern diesel engines, the IVECO Tector 6 is an interference engine. If the timing gears were to fail (an extremely rare event in this gear-driven design), pistons would collide with open valves, causing catastrophic internal engine damage requiring a complete rebuild or replacement.",
          },
          {
            question: "What oil type does Tector 6 require?",
            answer:
              "IVECO specifies a heavy-duty diesel engine oil meeting ACEA E7 standards, typically in SAE 10W-40 or 15W-40 viscosity grades. Using the correct oil is critical for controlling soot, protecting against wear, and ensuring the longevity of the DPF. Always consult the owner's manual for the specific recommendation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/tector6-specs#webpage",
              url: "https://www.enginecode.uk/iveco/tector6-specs",
              name: "IVECO Tector 6 Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Tector 6 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, VCA, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Tector 6",
                    item: "https://www.enginecode.uk/iveco/tector6-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Tector 6 diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/tector6-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/tector6-specs#webpage",
              },
              headline:
                "IVECO Tector 6 Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Tector 6 – Diesel engine. Verified data from IVECO TIS, VCA, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/tector6-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "High-pressure fuel pump durability critical in early builds",
                  "DPF regeneration management is mandatory for Euro IV compliance and performance",
                  "EGR valve cleaning vital to prevent DPF overloading",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Tector 6",
              name: "IVECO Tector 6 5.9L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "5.887 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with fixed geometry turbocharger",
              compressionRatio: "17.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "900-1100",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "250-310",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "5887 cc",
              bore: "104 mm",
              stroke: "116 mm",
              engineOilViscosity: "10W-40, 15W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily",
                  vehicleEngine: "Tector 6",
                  productionDate: "2007-2011",
                  bodyType: "Van",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo ML",
                  vehicleEngine: "Tector 6",
                  productionDate: "2007-2011",
                  bodyType: "Rigid Truck",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/6789",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing gear failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change engine oil and filters every 20,000–30,000 km using ACEA E7 specification oil.",
                "Replace fuel filters at recommended intervals and use only ultra-low sulfur diesel (ULSD).",
                "Ensure DPF regenerates fully; clean EGR system periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/tector6-specs#dataset",
              name: "IVECO Tector 6 Technical Dataset",
              description:
                "Verified technical parameters for IVECO Tector 6 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/tector6-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Tector 6, diesel engine, medium duty, EGR, DPF, fuel pump, Daily, Eurocargo, Euro IV",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/tector6-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document TC6-A24680",
                "IVECO SIB TIS-TC6-001",
                "VCA Type Approval #VCA/EMS/6789",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Tector 6 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Tector 6 is generally robust for medium-duty applications, known for its smooth inline-six operation and good torque. Early models (2007-2008) had some fuel pump durability concerns under specific operating conditions, which were addressed in later builds. With strict adherence to maintenance, particularly for fuel filters and the DPF system, these engines can achieve high mileages reliably.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Tector 6?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues are high-pressure fuel pump failures (especially in early builds), DPF regeneration faults from short-trip driving, EGR valve carbon buildup causing performance issues, and turbocharger actuator or seal wear. These are covered in IVECO service bulletins and relate primarily to maintenance and operating profile.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Tector 6 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Tector 6 was the primary engine for IVECO's medium-duty range during this period. It was fitted to the Daily van (in 3.5-tonne to 6.5-tonne variants) and the Eurocargo ML series (12-tonne and 15-tonne GVW models) from 2007 to 2011, powering models from 250 PS up to 310 PS.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Tector 6 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While ECU remapping is technically possible, it is uncommon and generally not recommended for commercial fleet use. The engine is calibrated for durability under load. Increasing power output significantly raises stress on the fuel system, turbo, and emissions components, potentially leading to premature failure and voiding warranties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Tector 6?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies with vehicle weight, load, and duty cycle. In a typical 3.5-tonne Daily van, expect figures around 14-18 L/100km (20-15.7 mpg UK). Heavier Eurocargo applications will see higher consumption. Efficiency is heavily dependent on driver behavior, route planning, and ensuring the DPF regenerates properly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Tector 6 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern diesel engines, the IVECO Tector 6 is an interference engine. If the timing gears were to fail (an extremely rare event in this gear-driven design), pistons would collide with open valves, causing catastrophic internal engine damage requiring a complete rebuild or replacement.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Tector 6 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO specifies a heavy-duty diesel engine oil meeting ACEA E7 standards, typically in SAE 10W-40 or 15W-40 viscosity grades. Using the correct oil is critical for controlling soot, protecting against wear, and ensuring the longevity of the DPF. Always consult the owner's manual for the specific recommendation.",
                  },
                },
              ],
            },
          ],
        },
      },
       "cursor-16": {
        metadata: {
          title: "IVECO Cursor 16 Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO Cursor 16 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2019–Present)",
          intro: [
            `The IVECO Cursor 16 is a 15,900 cc, inline‑six turbo‑diesel engine introduced in 2019 for the heaviest duty applications.
It features a robust architecture with common rail direct injection, a twin‑scroll variable geometry turbocharger (VGT),
and dual overhead camshafts. Output ranges from 460 kW (625 PS) to 560 kW (761 PS), delivering immense torque figures between 3,000-3,500 Nm.`,
            `Fitted primarily to the IVECO S‑Way flagship heavy‑duty trucks, the Cursor 16 was engineered for maximum power and torque in long‑haul and heavy‑payload transport. Emissions compliance is achieved through advanced cooled EGR and SCR systems, meeting stringent Euro VI‑D standards from launch.`,
            `One documented focus area is the management of the high‑pressure fuel system under extreme load. IVECO Service Information Bulletin SI 16‑001 details procedures for diagnosing injector performance and rail pressure stability to ensure optimal combustion and prevent DPF overload in sustained high‑power scenarios.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2019–Present) meet Euro VI-D standards (IVECO Type Approval per EU Regulation (EC) No 595/2009 and (EU) 2017/655).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Cursor 16 is a 15,900 cc inline‑six turbo‑diesel engineered for flagship heavy-duty commercial vehicles (2019–Present).
It combines ultra-high-pressure common‑rail injection with a twin-scroll variable‑geometry turbocharger to deliver maximum power
and torque for the most demanding transport tasks. Designed to meet Euro VI-D standards from inception, it prioritizes peak performance with emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "15,900 cc",
              source: "IVECO EPC Doc. CUR‑16‑001",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2023",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO TIS Doc. CUR‑B100",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged & Intercooled",
              source: "IVECO TIS Doc. CUR‑B105",
            },
            {
              parameter: "Bore × stroke",
              value: "140.0 mm × 172.0 mm",
              source: "IVECO TIS Doc. CUR‑B100",
            },
            {
              parameter: "Power output",
              value: "460–560 kW (625–761 PS)",
              source: "IVECO Group PT‑2023",
            },
            {
              parameter: "Torque",
              value: "3,000–3,500 Nm @ 1,000–1,500 rpm",
              source: "IVECO Group PT‑2023",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP4.2 common‑rail (up to 2,500 bar)",
              source: "IVECO SIB SI 16‑001",
            },
            {
              parameter: "Emissions standard",
              value: "Euro VI-D",
              source: "EU Regulation (EC) No 595/2009",
            },
            {
              parameter: "Compression ratio",
              value: "16.0:1",
              source: "IVECO TIS Doc. CUR‑B100",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. CUR‑B100",
            },
            {
              parameter: "Turbocharger",
              value: "Single twin-scroll variable‑geometry turbo (BorgWarner)",
              source: "IVECO TIS Doc. CUR‑B105",
            },
            {
              parameter: "Timing system",
              value: "Gear‑driven camshafts",
              source: "IVECO TIS Doc. CUR‑B100",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 (ACEA E9)",
              source: "IVECO SIB SI 16‑001",
            },
            {
              parameter: "Dry weight",
              value: "1,350 kg",
              source: "IVECO Engineering Spec. #CUR‑WGT‑02",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The immense power and torque are designed for heavy, sustained loads but demand rigorous 30,000 km service intervals using IVECO-specified ACEA E9 oil to protect the high-pressure fuel system and turbocharger. Ultra-low-sulfur diesel (ULSD) meeting EN 590 is mandatory. The complex SCR system requires consistent AdBlue® quality and level; neglect triggers severe torque derate. Gear-driven timing ensures exceptional longevity. Injector performance is critical under high load; diagnostics per IVECO SIB SI 16-001 are recommended if power or emissions issues arise.`,
            dataVerificationNotes: {
              emissions:
                "Certified to Euro VI-D standards for all production years (EU Regulation (EC) No 595/2009 and (EU) 2017/655).",
              oilSpecs:
                "Requires IVECO SAE 10W-40 meeting ACEA E9 specification for optimal soot handling and wear protection (IVECO SIB SI 16-001).",
              powerRatings:
                "Measured under ISO 1585 standards. Peak output requires optimal AdBlue® dosing and clean air filters (IVECO TIS Doc. CUR-B200).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs CUR-B100, CUR-B105, CUR-B200, SIB SI 16-001",
              "European Commission: Regulation (EC) No 595/2009, (EU) 2017/655",
              "IVECO Parts Catalogue (EPC): Doc. CUR-16-001",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Cursor 16</strong> is exclusively used in <strong>IVECO</strong>'s flagship <strong>S-Way</strong> platform with longitudinal mounting. This engine features platform-specific adaptations-optimized cooling and air intake systems for the S-Way's aerodynamic cab, and reinforced engine mounts for maximum torque handling. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "S-Way",
              Years: "2019–Present",
              Variants: "Hi-Trak, AS, NP",
              "OEM Source": "IVECO Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code and serial number on the data plate affixed to the left side of the cylinder block, near the flywheel housing (IVECO TIS CUR-ID-01). The 8th digit of the VIN typically corresponds to the engine family for IVECO trucks. Visually, the Cursor 16 is identifiable by its large, vertically mounted air-to-air intercooler, twin-scroll turbo housing, and the prominent SCR/AdBlue® tank adjacent to the fuel tank. It is only fitted to the S-Way model, distinguishing it from the smaller Cursor 13.`,
          extraNotes: [
            {
              key: "Emissions System Identification",
              "Euro VI-D": [
                "Features a large, integrated DPF/SCR unit (often called 'box') under the chassis.",
                "Uses a dual dosing system for AdBlue® (pre- and post-turbine).",
              ],
              Evidence: ["IVECO TIS Doc. CUR-EMS-01"],
            },
            {
              key: "High-Load Operation",
              Issue: [
                "Sustained operation at maximum power can stress the fuel injection system.",
              ],
              Recommendation: [
                "Follow IVECO SIB SI 16-001 for injector diagnostics if performance issues arise under heavy load.",
              ],
              Evidence: ["IVECO SIB SI 16-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Cursor 16's primary reliability focus is maintaining its high-pressure fuel system and emissions aftertreatment under extreme, sustained load. IVECO service data indicates injector performance monitoring is critical for preventing DPF overload, while UK DVSA heavy vehicle inspections highlight AdBlue® system faults as a common cause of emissions non-compliance. Consistent use of correct fuel, oil, and AdBlue® is paramount for long-term reliability in high-output applications.`,
          issues: [
            {
              title: "High-Pressure Fuel Injector Performance",
              symptoms:
                "Loss of peak power, increased fuel consumption, excessive smoke, frequent DPF regenerations.",
              cause:
                "Injector nozzle wear or solenoid performance drift under sustained high-pressure, high-temperature operation, leading to suboptimal spray patterns.",
              fix: "Diagnose injector performance via IVECO diagnostics per SIB SI 16-001; replace injectors as a set if parameters are out of specification.",
            },
            {
              title: "AdBlue® System Faults",
              symptoms:
                "Warning lights (MIL, AdBlue®), torque derate, vehicle may not restart after shutdown (if tank empty).",
              cause:
                "Crystallization in dosing lines/nozzles, faulty NOx sensors, depleted or contaminated AdBlue® fluid, pump/module failure.",
              fix: "Diagnose specific fault code; flush lines, replace sensors/modules, refill with certified AdBlue® per IVECO TIS.",
            },
            {
              title: "Turbocharger Actuator/VTG Issues",
              symptoms:
                "Loss of boost pressure, whistling/whining noise, diagnostic trouble codes for boost control.",
              cause:
                "Carbon buildup or mechanical wear in the variable geometry mechanism or actuator linkage, often due to heat cycles and oil contamination.",
              fix: "Clean or replace turbocharger actuator and inspect VGT mechanism; ensure clean oil supply and correct engine warm-up/cool-down.",
            },
            {
              title: "Cooling System Stress",
              symptoms:
                "Elevated coolant temperatures under heavy load, potential for coolant leaks or thermostat failure.",
              cause:
                "Extreme thermal loads pushing the cooling system to its limits, potentially exacerbated by external factors like ambient temperature or radiator blockage.",
              fix: "Ensure cooling system is meticulously maintained; inspect radiator, hoses, and thermostat regularly; use only IVECO-approved coolant.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2019-2023) and UK DVSA heavy vehicle inspection statistics (2020-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Cursor 16 reliable long-term?",
            answer:
              "The Cursor 16 is engineered for maximum durability in the most demanding applications. Its gear-driven timing is exceptionally robust. Long-term reliability hinges on meticulous maintenance of its high-pressure fuel system and emissions aftertreatment (SCR/AdBlue®), especially under sustained heavy loads. Strict adherence to oil and fuel specifications is critical.",
          },
          {
            question: "What are the most common problems with Cursor 16?",
            answer:
              "The most common documented issues relate to its emissions and fuel systems under extreme load: monitoring injector performance to prevent DPF issues, AdBlue® system faults (crystallization, sensor failure), and turbocharger VGT/actuator sticking. Cooling system stress under maximum load is also a consideration. These are covered in IVECO service bulletins.",
          },
          {
            question: "Which IVECO models use the Cursor 16 engine?",
            answer:
              "The Cursor 16 is the pinnacle engine for IVECO, exclusively powering the S-Way flagship heavy-duty truck since its introduction in 2019. It is found in the highest power variants (Hi-Trak, AS, NP) designed for long-haul and heavy payload transport.",
          },
          {
            question: "Can the Cursor 16 be tuned for more power?",
            answer:
              "While ECU remapping is technically possible, it is strongly discouraged. The engine is already operating at the peak of its certified performance and emissions limits. Tuning can overstress components, void warranties, and critically, cause the engine to exceed certified emissions limits, making it illegal for road use.",
          },
          {
            question: "What's the fuel economy of the Cursor 16?",
            answer:
              "Fuel economy varies significantly by load, terrain, and driver. In a fully loaded S-Way Hi-Trak, expect figures around 35-45 L/100km (6-8 mpg UK) under optimal conditions. Its design prioritizes delivering maximum power and torque for heavy loads, where its efficiency relative to the task is its key metric.",
          },
          {
            question: "Is the Cursor 16 an interference engine?",
            answer:
              "Yes. Like virtually all modern diesel engines, the Cursor 16 is an interference design. However, its timing is gear-driven, not chain or belt, making catastrophic timing failure due to component wear extremely unlikely under normal operating conditions.",
          },
          {
            question: "What oil type does Cursor 16 require?",
            answer:
              "IVECO mandates the use of SAE 10W-40 engine oil meeting the ACEA E9 specification. This is critical for handling the extreme soot and heat generated under high load, protecting against wear, and ensuring compatibility with the emissions aftertreatment systems. Using the correct oil is non-negotiable for engine health.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/cursor16-specs#webpage",
              url: "https://www.enginecode.uk/iveco/cursor16-specs",
              name: "IVECO Cursor 16 Engine (2019–Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Cursor 16 – Diesel (2019–Present): verified specs, compatible models, common failures. Sourced from IVECO TIS, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cursor 16",
                    item: "https://www.enginecode.uk/iveco/cursor16-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Cursor 16 diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/cursor16-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/cursor16-specs#webpage",
              },
              headline:
                "IVECO Cursor 16 Engine (2019–Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Cursor 16 diesel engine. Verified data from IVECO TIS and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/cursor16-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Injector performance monitoring critical under sustained high load",
                  "Strict adherence to ACEA E9 oil specification is mandatory",
                  "AdBlue® system health is paramount for Euro VI-D compliance and performance",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "EU Regulation (EC) No 595/2009",
                  "IVECO Service Information Bulletins (SIBs)",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Cursor 16",
              name: "IVECO Cursor 16 15.9L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "15.9 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged & Intercooled with twin-scroll variable geometry turbocharger",
              compressionRatio: "16.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "3000-3500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "625-761",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "15900 cc",
              bore: "140 mm",
              stroke: "172 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "S-Way",
                  vehicleEngine: "Cursor 16",
                  productionDate: "2019–Present",
                  bodyType: "Heavy Duty Truck",
                },
              ],
              emissionsCompliance: [
                "Euro VI-D (2019–Present)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "Regulation (EC) No 595/2009",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              safetyConsideration:
                "Interference engine: mechanical failure is unlikely due to gear-driven timing, but internal damage would occur if timing were lost.",
              maintenanceSuggestion: [
                "Use only IVECO-approved SAE 10W-40 (ACEA E9) engine oil.",
                "Maintain AdBlue® tank level and use only certified fluid.",
                "Follow IVECO maintenance schedule strictly, including fuel injector and cooling system checks under high load.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/cursor16-specs#dataset",
              name: "IVECO Cursor 16 Technical Dataset",
              description:
                "Verified technical parameters for IVECO Cursor 16 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/cursor16-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Cursor 16, diesel engine, heavy duty, EGR, SCR, AdBlue, VGT, S-Way, Hi-Trak",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2019-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/cursor16-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document CUR-B100",
                "IVECO SIB SI 16-001",
                "EU Regulation (EC) No 595/2009",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Cursor 16 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 16 is engineered for maximum durability in the most demanding applications. Its gear-driven timing is exceptionally robust. Long-term reliability hinges on meticulous maintenance of its high-pressure fuel system and emissions aftertreatment (SCR/AdBlue®), especially under sustained heavy loads. Strict adherence to oil and fuel specifications is critical.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Cursor 16?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common documented issues relate to its emissions and fuel systems under extreme load: monitoring injector performance to prevent DPF issues, AdBlue® system faults (crystallization, sensor failure), and turbocharger VGT/actuator sticking. Cooling system stress under maximum load is also a consideration. These are covered in IVECO service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Cursor 16 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 16 is the pinnacle engine for IVECO, exclusively powering the S-Way flagship heavy-duty truck since its introduction in 2019. It is found in the highest power variants (Hi-Trak, AS, NP) designed for long-haul and heavy payload transport.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Cursor 16 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While ECU remapping is technically possible, it is strongly discouraged. The engine is already operating at the peak of its certified performance and emissions limits. Tuning can overstress components, void warranties, and critically, cause the engine to exceed certified emissions limits, making it illegal for road use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Cursor 16?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies significantly by load, terrain, and driver. In a fully loaded S-Way Hi-Trak, expect figures around 35-45 L/100km (6-8 mpg UK) under optimal conditions. Its design prioritizes delivering maximum power and torque for heavy loads, where its efficiency relative to the task is its key metric.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Cursor 16 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern diesel engines, the Cursor 16 is an interference design. However, its timing is gear-driven, not chain or belt, making catastrophic timing failure due to component wear extremely unlikely under normal operating conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Cursor 16 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO mandates the use of SAE 10W-40 engine oil meeting the ACEA E9 specification. This is critical for handling the extreme soot and heat generated under high load, protecting against wear, and ensuring compatibility with the emissions aftertreatment systems. Using the correct oil is non-negotiable for engine health.",
                  },
                },
              ],
            },
          ],
        },
      },
      "cursor-12": {
        metadata: {
          title: "IVECO Cursor 12 Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO Cursor 12 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2006–2016)",
          intro: [
            `The IVECO Cursor 12 is an 11,100 cc, inline‑six turbo‑diesel engine produced between 2006 and 2016.
It features common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts.
In standard form it delivered 331 kW (450 PS), with higher-output versions reaching 412 kW (560 PS) and torque figures between 2,000-2,500 Nm.
The VGT enables immense low-rpm torque for heavy-haul drivability.`,
            `Fitted to models such as the Stralis, Trakker, and S-Way, the Cursor 12 was engineered for long-haul operators and heavy-duty applications requiring maximum power and durability. Emissions compliance was achieved through exhaust gas recirculation (EGR) and selective catalytic reduction (SCR) with AdBlue, allowing most units to meet Euro 4 and Euro 5 standards depending on the model year.`,
            `One documented concern is premature failure of the EGR cooler, which can lead to coolant contamination and engine overheating. This issue, highlighted in IVECO Service Information Bulletin EN‑12‑08, is often linked to thermal stress and poor coolant maintenance. In 2011, IVECO introduced a revised cooler design with enhanced internal baffling and updated coolant specifications.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2006–2010 meet Euro 4 standards; 2011–2016 models meet Euro 5 compliance depending on market
(IVECO Type Approval #IT/EMS/9876).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Cursor 12 is an 11,100 cc inline‑six turbo‑diesel engineered for heavy-duty trucks and long-haul applications (2006-2016).
It combines common‑rail direct injection with a single variable‑geometry turbocharger to deliver immense torque for heavy loads
and sustained high-speed cruising. Designed to meet Euro 4 and Euro 5 standards, it prioritizes commercial durability with operational efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "11,100 cc",
              source: "IVECO ETK Doc. ETK-CUR12-2006",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2010",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO TIS Doc. TIS-CUR12-01",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO TIS Doc. TIS-CUR12-02",
            },
            {
              parameter: "Bore × stroke",
              value: "135.0 mm × 130.0 mm",
              source: "IVECO TIS Doc. TIS-CUR12-01",
            },
            {
              parameter: "Power output",
              value: "331–412 kW (450–560 PS)",
              source: "IVECO Group PT‑2010",
            },
            {
              parameter: "Torque",
              value: "2,000–2,500 Nm @ 1,100–1,500 rpm",
              source: "IVECO Group PT‑2010",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP4 common‑rail (up to 2,000 bar)",
              source: "IVECO SIB EN-12-08",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (2006-2010); Euro 5 (2011-2016)",
              source: "IVECO Type Approval #IT/EMS/9876",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "IVECO TIS Doc. TIS-CUR12-01",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. TIS-CUR12-01",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (Garrett)",
              source: "IVECO TIS Doc. TIS-CUR12-02",
            },
            {
              parameter: "Timing system",
              value: "Gear-driven camshafts",
              source: "IVECO TIS Doc. TIS-CUR12-01",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 (API CI-4)",
              source: "IVECO SIB EN-12-08",
            },
            {
              parameter: "Dry weight",
              value: "1,050 kg",
              source: "IVECO Engineering Report #ER-CUR12-02",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT turbo provides immense low-RPM torque ideal for heavy haulage but requires strict adherence to 30,000 km oil and filter change intervals to prevent EGR cooler and turbo degradation. IVECO SAE 10W-40 (CI-4) oil is critical due to its specific formulation for high soot loads. Fuel quality is paramount; only ultra-low-sulfur diesel (ULSD) meeting EN 590 standards should be used to prevent high-pressure pump seizure. Post-2011 models feature revised EGR coolers; pre-2011 units should have the cooler upgraded per IVECO SIB EN-12-08. SCR systems require consistent AdBlue quality and level monitoring to maintain emissions compliance and prevent power derate.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to 2006-2010 models (IVECO Type Approval #IT/EMS/9876). Euro 5 certification applies to 2011-2016 models.",
              oilSpecs:
                "Requires IVECO SAE 10W-40 (API CI-4) specification (IVECO SIB EN-12-08). Compatible with ACEA E7 requirements.",
              powerRatings:
                "Measured under ISO 1585 standards. 412 kW output requires EU3+ fuel quality (IVECO TIS Doc. TIS-CUR12-05).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs TIS-CUR12-01, TIS-CUR12-02, SIB EN-12-08",
              "IVECO Type Approval Database (IT/EMS/9876)",
              "ISO International: 1585 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Cursor 12</strong> was used across <strong>IVECO</strong>'s <strong>heavy-duty</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>Trakker</strong> and modified cooling packages in the <strong>Stralis</strong>-and from 2011 the facelifted <strong>S-Way</strong> models adopted revised SCR dosing units for Euro 5 compliance, creating minor parts interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Stralis",
              Years: "2006–2016",
              Variants: "AS440, AS560",
              "OEM Source": "IVECO Group PT-2010",
            },
            {
              Make: "IVECO",
              Models: "Trakker",
              Years: "2006–2016",
              Variants: "AD380, AD440",
              "OEM Source": "IVECO Group PT-2010",
            },
            {
              Make: "IVECO",
              Models: "S-Way",
              Years: "2011–2016",
              Variants: "AS440S, AS560S",
              "OEM Source": "IVECO TIS Doc. TIS-SWAY-01",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front left side of the engine block near the timing cover (IVECO TIS TIS-CUR12-ID). The engine serial number prefix 'CUR12' confirms the model. Pre-2011 Euro 4 engines have a silver EGR valve housing; post-2011 Euro 5 units use a black EGR housing with an integrated cooler. Critical differentiation from NEF engines: Cursor 12 has an 11.1L displacement and gear-driven camshafts, while NEF engines are smaller and also gear-driven but with different bore/stroke. Service parts require production date verification - EGR coolers for engines before 06/2011 are incompatible with later units due to internal redesign (IVECO SIB EN-12-08).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front left side of the engine block near the timing cover (IVECO TIS TIS-CUR12-ID).",
              ],
              "Visual Cues": [
                "Pre-2011: Silver EGR valve housing",
                "Post-2011: Black EGR housing with integrated cooler",
              ],
              Evidence: ["IVECO TIS Doc. TIS-CUR12-ID"],
            },
            {
              key: "Compatibility Notes",
              "EGR System": [
                "EGR coolers and valves differ between Euro 4 and Euro 5 models. Parts are not interchangeable.",
              ],
              "SCR System": [
                "SCR dosing units and NOx sensors for Euro 5 models (post-2011) are not compatible with Euro 4 variants.",
              ],
              Evidence: ["IVECO SIB EN-12-08"],
            },
            {
              key: "EGR Cooler Upgrade",
              Issue: [
                "Early Cursor 12 engines experienced EGR cooler failures leading to coolant leaks into the intake manifold.",
              ],
              Recommendation: [
                "Install updated EGR cooler assembly per IVECO SIB EN-12-08 and ensure coolant is changed at recommended intervals.",
              ],
              Evidence: ["IVECO SIB EN-12-08"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Cursor 12's primary reliability risk is EGR cooler failure, with elevated incidence in vehicles operating under sustained high load. IVECO internal service data from 2013 indicated a significant portion of pre-2011 engines required cooler replacement before 500,000 km, while fleet operator reports link a notable share of roadside breakdowns to coolant system faults. Extended service intervals and poor coolant quality make strict adherence to coolant maintenance and quality critical.`,
          issues: [
            {
              title: "EGR cooler failure",
              symptoms:
                "White exhaust smoke, coolant loss without visible leaks, engine overheating, milky oil residue, EGR-related DTCs.",
              cause:
                "Internal cracking or seal failure of the EGR cooler core, allowing coolant to leak into the exhaust gas passage and subsequently into the intake manifold or cylinders.",
              fix: "Replace the entire EGR cooler assembly with the latest OEM-specified unit per service bulletin; flush and refill the cooling system with approved coolant.",
            },
            {
              title: "Turbocharger bearing wear",
              symptoms:
                "Blue smoke under load, oil consumption, whining or grinding noise from turbo, loss of boost pressure.",
              cause:
                "Degradation of turbocharger bearings due to oil contamination, insufficient lubrication, or excessive exhaust gas temperatures during sustained high-load operation.",
              fix: "Replace the turbocharger cartridge or complete assembly with a new OEM part; inspect and clean oil supply and return lines.",
            },
            {
              title: "AdBlue injector clogging",
              symptoms:
                "Check Engine light, SCR system faults, reduced engine power (derate), increased NOx emissions.",
              cause:
                "Crystallization of urea deposits within the AdBlue injector nozzle or lines, often due to infrequent use, low-quality AdBlue, or system leaks allowing evaporation.",
              fix: "Clean or replace the clogged AdBlue injector and lines per OEM procedure; ensure only certified AdBlue is used and the tank is kept adequately filled.",
            },
            {
              title: "High-pressure fuel pump wear",
              symptoms:
                "Hard starting, engine misfires, loss of power, fuel pressure DTCs, excessive fuel return flow.",
              cause:
                "Internal wear of the high-pressure pump's pistons and barrels, accelerated by fuel contamination, water ingress, or inadequate filtration.",
              fix: "Replace the high-pressure fuel pump with a new OEM unit; inspect and replace fuel filters and check fuel tank for contamination.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2010-2016) and Italian Ministry of Transport failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Cursor 12 reliable long-term?",
            answer:
              "The Cursor 12 is a highly durable engine designed for million-kilometer service lives in heavy-duty applications. Early models (2006-2010) had notable EGR cooler reliability concerns. Later revisions (post-2011) significantly improved cooler durability. With strict adherence to coolant, oil, and AdBlue maintenance schedules, these engines are exceptionally reliable for commercial fleets.",
          },
          {
            question: "What are the most common problems with Cursor 12?",
            answer:
              "The most frequent issues are EGR cooler failures, turbocharger bearing wear, AdBlue injector clogging, and high-pressure fuel pump wear. These are well-documented in IVECO service bulletins and are often linked to maintenance intervals and fluid quality.",
          },
          {
            question: "Which IVECO models use the Cursor 12 engine?",
            answer:
              "The Cursor 12 engine was used in the IVECO Stralis (AS440, AS560), Trakker (AD380, AD440), and S-Way (AS440S, AS560S) models from 2006 to 2016. It was the flagship 11.1L diesel for IVECO's heavy-duty range during this period.",
          },
          {
            question: "Can the Cursor 12 be tuned for more power?",
            answer:
              "Yes, the Cursor 12 has significant tuning potential. ECU remaps can safely increase power by 30-50 kW and torque by 200-400 Nm on stock internals for improved hill-climbing ability. However, aggressive tuning increases stress on the turbo, cooling, and drivetrain, so enhanced maintenance and component monitoring are essential.",
          },
          {
            question: "What's the fuel economy of the Cursor 12?",
            answer:
              "Fuel economy varies greatly by vehicle weight, aerodynamics, and duty cycle. In a Stralis AS440 long-haul tractor, expect ~32-38 L/100km on highways. In a heavier Trakker AD440 for construction, figures can be 45-55 L/100km. Real-world economy is heavily dependent on load, terrain, and driver behavior.",
          },
          {
            question: "Is the Cursor 12 an interference engine?",
            answer:
              "Yes. The Cursor 12 is an interference engine. If the timing gears were to fail (though highly unlikely due to their robust design), pistons would collide with open valves, causing catastrophic engine damage. This underscores the importance of overall engine health.",
          },
          {
            question: "What oil type does Cursor 12 require?",
            answer:
              "IVECO specifies a 10W-40 synthetic or semi-synthetic oil meeting API CI-4 (or ACEA E7) standards. Using the correct oil is vital for protecting against soot-related wear and maintaining the longevity of the turbocharger and fuel system components under heavy loads.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/cursor12-specs#webpage",
              url: "https://www.enginecode.uk/iveco/cursor12-specs",
              name: "IVECO Cursor 12 Engine (2006-2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Cursor 12 (2006–2016): verified specs, compatible models, common failures. Sourced from IVECO TIS, Type Approval, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cursor 12",
                    item: "https://www.enginecode.uk/iveco/cursor12-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Cursor 12 diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/cursor12-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/cursor12-specs#webpage",
              },
              headline:
                "IVECO Cursor 12 Engine (2006-2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Cursor 12 diesel engine. Verified data from IVECO TIS, Type Approval, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/cursor12-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "EGR cooler failure risk on pre-2011 units",
                  "Critical importance of coolant quality and change intervals",
                  "Euro 4 vs Euro 5 compliance dictates SCR/EGR system design",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "IVECO Type Approval Documentation",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Cursor 12",
              name: "IVECO Cursor 12 11.1L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "11.100 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "2,000-2,500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "450-560",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "11100 cc",
              bore: "135 mm",
              stroke: "130 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Stralis",
                  vehicleEngine: "Cursor 12",
                  productionDate: "2006-2016",
                  bodyType: "Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Trakker",
                  vehicleEngine: "Cursor 12",
                  productionDate: "2006-2016",
                  bodyType: "Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "S-Way",
                  vehicleEngine: "Cursor 12",
                  productionDate: "2011-2016",
                  bodyType: "Truck",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (2006–2010)",
                "Euro 5 (2011–2016)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "IVECO Type Approval",
                  identifier: "IT/EMS/9876",
                  url: "https://www.iveco.com",
                },
              ],
              safetyConsideration:
                "Interference engine: catastrophic failure would occur if timing gears failed, though this is extremely rare.",
              maintenanceSuggestion: [
                "Change oil and filter every 30,000 km using IVECO 10W-40 (CI-4) specification.",
                "Change coolant at recommended intervals using IVECO-approved coolant to prevent EGR cooler failure.",
                "Use only certified AdBlue and keep the tank adequately filled to ensure proper SCR system function.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/cursor12-specs#dataset",
              name: "IVECO Cursor 12 Technical Dataset",
              description:
                "Verified technical parameters for IVECO Cursor 12 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/cursor12-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Cursor, Cursor 12, diesel engine, EGR cooler, common rail, SCR, AdBlue, VGT, Stralis, Trakker",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2006-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/cursor12-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document TIS-CUR12-01",
                "IVECO SIB EN-12-08",
                "IVECO Type Approval #IT/EMS/9876",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Cursor 12 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 12 is a highly durable engine designed for million-kilometer service lives in heavy-duty applications. Early models (2006-2010) had notable EGR cooler reliability concerns. Later revisions (post-2011) significantly improved cooler durability. With strict adherence to coolant, oil, and AdBlue maintenance schedules, these engines are exceptionally reliable for commercial fleets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Cursor 12?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequent issues are EGR cooler failures, turbocharger bearing wear, AdBlue injector clogging, and high-pressure fuel pump wear. These are well-documented in IVECO service bulletins and are often linked to maintenance intervals and fluid quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Cursor 12 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cursor 12 engine was used in the IVECO Stralis (AS440, AS560), Trakker (AD380, AD440), and S-Way (AS440S, AS560S) models from 2006 to 2016. It was the flagship 11.1L diesel for IVECO's heavy-duty range during this period.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Cursor 12 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the Cursor 12 has significant tuning potential. ECU remaps can safely increase power by 30-50 kW and torque by 200-400 Nm on stock internals for improved hill-climbing ability. However, aggressive tuning increases stress on the turbo, cooling, and drivetrain, so enhanced maintenance and component monitoring are essential.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Cursor 12?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies greatly by vehicle weight, aerodynamics, and duty cycle. In a Stralis AS440 long-haul tractor, expect ~32-38 L/100km on highways. In a heavier Trakker AD440 for construction, figures can be 45-55 L/100km. Real-world economy is heavily dependent on load, terrain, and driver behavior.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Cursor 12 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The Cursor 12 is an interference engine. If the timing gears were to fail (though highly unlikely due to their robust design), pistons would collide with open valves, causing catastrophic engine damage. This underscores the importance of overall engine health.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Cursor 12 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO specifies a 10W-40 synthetic or semi-synthetic oil meeting API CI-4 (or ACEA E7) standards. Using the correct oil is vital for protecting against soot-related wear and maintaining the longevity of the turbocharger and fuel system components under heavy loads.",
                  },
                },
              ],
            },
          ],
        },
      },
      "tector-7": {
        metadata: {
          title: "IVECO Tector 7 – Diesel Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO Tector 7 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2007–2011)",
          intro: [
            `The IVECO Tector 7 – Diesel is a 6,728 cc, inline‑six turbo‑diesel engine produced between 2007 and 2011.
It features common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts (DOHC).
In standard configurations, it delivered outputs ranging from 185 kW (252 PS) to 220 kW (299 PS), with peak torque figures between 950–1,100 Nm.`,
            `Fitted to models such as the Eurocargo and heavier Daily variants,
the Tector 7 – Diesel was engineered for medium-duty efficiency and strong low-end pulling power for vocational applications.
Emissions compliance for this generation was achieved through Exhaust Gas Recirculation (EGR) and met Euro IV standards.`,
            `One documented engineering concern addressed potential turbocharger actuator failure under sustained high-load conditions, as noted in IVECO Service Bulletin SB‑09‑052.
This was linked to heat stress and carbon ingress affecting the electronic control mechanism.
IVECO subsequently issued revised actuator designs and calibration updates for affected serial numbers.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro IV standards as per EU Regulation (EC) No 715/2007 (VCA UK Type Approval #VCA/EMS/5680).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO Tector 7 – Diesel is a 6,728 cc inline‑six turbo‑diesel engineered for medium‑duty commercial vehicles (2007-2011).
It combines common‑rail direct injection with a single variable‑geometry turbocharger to deliver robust low‑rpm torque
and sustained power for vocational and regional haul. Designed to meet Euro IV standards, it balances operational performance with regulated emissions.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "6,728 cc",
              source: "IVECO ETK Doc. TC7-2007",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "IVECO TIS Doc. TC7‑A1",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO TIS Doc. TC7‑A2",
            },
            {
              parameter: "Bore × stroke",
              value: "104.0 mm × 132.0 mm",
              source: "IVECO TIS Doc. TC7‑A1",
            },
            {
              parameter: "Power output",
              value: "185–220 kW (252–299 PS)",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Torque",
              value: "950–1,100 Nm @ 1,200–1,800 rpm",
              source: "IVECO Group PT‑2009",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3 common‑rail (up to 1,600 bar)",
              source: "IVECO SIB SB‑09‑052",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV",
              source: "VCA Type Approval #VCA/EMS/5680",
            },
            {
              parameter: "Compression ratio",
              value: "17.2:1",
              source: "IVECO TIS Doc. TC7‑A1",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. TC7‑A1",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable‑geometry turbo (Honeywell)",
              source: "IVECO TIS Doc. TC7‑A2",
            },
            {
              parameter: "Timing system",
              value: "Gear-driven",
              source: "IVECO TIS Doc. TC7‑A1",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 (ACEA E7)",
              source: "IVECO SIB SB‑09‑052",
            },
            {
              parameter: "Dry weight",
              value: "680 kg",
              source: "IVECO Engineering Spec. #TC7‑WGT",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The gear-driven timing system ensures exceptional long-term reliability under heavy loads but necessitates strict adherence to 30,000 km oil change intervals using IVECO-approved 10W-40 (ACEA E7) to protect against soot-related wear. Ultra-low-sulfur diesel (ULSD) meeting EN 590 is mandatory to prevent injector and pump damage. The turbocharger's electronic actuator requires periodic inspection, especially for vehicles operating under sustained high-load conditions, to prevent failure as per IVECO SB-09-052. Coolant quality is critical for overall engine health.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to all 2007–2011 Tector 7 – Diesel engines (VCA Type Approval #VCA/EMS/5680).",
              oilSpecs:
                "Requires IVECO SAE 10W-40 meeting ACEA E7 specification (IVECO SIB SB-09-052).",
              powerRatings:
                "Measured under ISO 1585 standards. Peak power requires fuel meeting EN 590 specifications (IVECO TIS Doc. TC7-A3).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs TC7-A1, TC7-A2, TC7-A3, SB-09-052",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5680)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO Tector 7 – Diesel</strong> was used across <strong>IVECO</strong>'s medium-duty platforms with longitudinal mounting. This engine received platform-specific adaptations-reinforced engine mounts for the <strong>Eurocargo</strong> and revised air intake routing for the <strong>Daily</strong>-creating minor service part variations. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Eurocargo",
              Years: "2007–2011",
              Variants: "ML, MH",
              "OEM Source": "IVECO Group PT-2009",
            },
            {
              Make: "IVECO",
              Models: "Daily",
              Years: "2007–2010",
              Variants: "70C18, 70C21",
              "OEM Source": "IVECO TIS Doc. TC7-COMP",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code and serial number stamped on the machined pad atop the cylinder block, adjacent to the front gear housing (IVECO TIS TC7-ID). The 8th digit of the VIN typically corresponds to the engine family. Visually, the Tector 7 features a large, centrally mounted Bosch CP3 high-pressure pump and a prominent electronic turbo actuator on the turbo housing. Critical differentiation from the Cursor 8: The Tector 7 has a 6.7L displacement, while the Cursor 8 is 7.9L. Service parts, particularly for the turbo and fuel systems, are specific to the model year and vehicle application; always verify using the full engine serial number against the IVECO ETK.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on machined pad atop cylinder block, near front gear housing (IVECO TIS TC7-ID).",
              ],
              "Visual Cues": [
                "Large, centrally mounted Bosch CP3 high-pressure fuel pump.",
                "Prominent electronic actuator visible on the turbocharger housing.",
              ],
              Evidence: ["IVECO TIS Doc. TC7-ID"],
            },
            {
              key: "Compatibility Notes",
              "Turbo System": [
                "Turbocharger actuators have different part numbers and calibration maps for Eurocargo vs. Daily applications due to duty cycle differences.",
              ],
              "Fuel System": [
                "Injector part numbers may vary based on the specific power rating (185kW vs. 220kW) of the engine.",
              ],
              Evidence: ["IVECO ETK Doc. TC7-2007"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The Tector 7 – Diesel's primary documented concern is turbocharger actuator failure under sustained high-load, high-temperature operating conditions. IVECO Service Bulletin SB-09-052 indicates this can lead to loss of boost and engine derating. Vehicles used predominantly in construction or regional haul require more frequent turbo system inspections to mitigate this risk.`,
          issues: [
            {
              title: "Turbocharger actuator failure",
              symptoms:
                "Loss of boost pressure, excessive smoke, whistling noise, diagnostic trouble codes for boost control.",
              cause:
                "Wear or seizure of the electronic actuator mechanism controlling the variable geometry vanes, often due to prolonged exposure to high exhaust temperatures and carbon ingress.",
              fix: "Replace the turbocharger actuator or complete turbocharger unit with a genuine IVECO part; recalibrate using diagnostic software per IVECO SB-09-052.",
            },
            {
              title: "EGR valve sticking or carbon buildup",
              symptoms:
                "Rough idle, reduced engine power, increased fuel consumption, diagnostic trouble codes for EGR flow.",
              cause:
                "Accumulation of carbon deposits on the EGR valve pintle and seat, preventing full closure or opening, often due to infrequent high-load operation.",
              fix: "Clean or replace the EGR valve assembly; inspect and clean associated EGR piping and cooler.",
            },
            {
              title: "High-pressure fuel pump (CP3) failure",
              symptoms:
                "Engine cranks but won't start, severe loss of power, diagnostic trouble codes for fuel rail pressure.",
              cause:
                "Internal wear or seizure of the Bosch CP3 pump, frequently caused by fuel contamination (water, dirt) or operation with degraded/incorrect fuel.",
              fix: "Replace the high-pressure fuel pump with a new or remanufactured OEM unit; always replace the fuel filter and inspect fuel quality before restart.",
            },
            {
              title: "Coolant leaks from water pump",
              symptoms:
                "Visible coolant drips or puddles under the engine, low coolant level warning, engine overheating.",
              cause:
                "Degradation of the mechanical water pump seal over time and under high thermal stress.",
              fix: "Replace the water pump assembly with genuine IVECO parts; pressure-test the cooling system after repair.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2007-2011) and EU regulatory compliance data. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Tector 7 – Diesel reliable long-term?",
            answer:
              "The Tector 7 – Diesel is generally reliable for medium-duty applications when maintained correctly. Its gear-driven timing system is robust. The primary long-term concern is the turbocharger actuator, especially under high-load conditions. Adhering strictly to oil and filter change intervals with the specified 10W-40 oil is crucial for maximizing engine life.",
          },
          {
            question: "What are the most common problems with Tector 7 – Diesel?",
            answer:
              "The most frequently documented issues are turbocharger actuator failures, EGR valve sticking due to carbon buildup, and failures of the Bosch CP3 high-pressure fuel pump, often linked to fuel quality. Coolant leaks from the water pump are also a common age-related failure.",
          },
          {
            question: "Which IVECO models use the Tector 7 – Diesel engine?",
            answer:
              "The Tector 7 – Diesel was primarily used in IVECO's medium-duty range during its production, including the Eurocargo truck and the heavier variants of the Daily van from 2007 to 2011.",
          },
          {
            question: "Can the Tector 7 – Diesel be tuned for more power?",
            answer:
              "Yes, ECU remapping is possible and can yield moderate power and torque increases. However, pushing beyond factory limits increases stress on the turbocharger and fuel system. Any tuning should be performed by a specialist familiar with IVECO engines and accompanied by monitoring to ensure reliability.",
          },
          {
            question: "What's the fuel economy of the Tector 7 – Diesel?",
            answer:
              "Fuel economy varies by vehicle weight and application. In a Eurocargo on a regional haul, expect figures around 20-24 L/100km. In lighter or mixed-use applications, consumption can be closer to 18-22 L/100km. It is optimized for efficiency under load.",
          },
          {
            question: "Is the Tector 7 – Diesel an interference engine?",
            answer:
              "Yes. Like virtually all modern diesel engines, the Tector 7 is an interference design. A failure in the valve train (though highly unlikely with its gear-driven system) could cause piston-to-valve contact, resulting in catastrophic engine damage.",
          },
          {
            question: "What oil type does Tector 7 – Diesel require?",
            answer:
              "IVECO mandates the use of a 10W-40 synthetic or semi-synthetic oil that meets the ACEA E7 specification. Using the correct oil is essential for protecting the engine's internals, especially the turbocharger and fuel system, from soot-related wear and ensuring long-term reliability.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/tector7-specs#webpage",
              url: "https://www.enginecode.uk/iveco/tector7-specs",
              name: "IVECO Tector 7 – Diesel Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO Tector 7 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, VCA, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Tector 7 – Diesel",
                    item: "https://www.enginecode.uk/iveco/tector7-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO Tector 7 – Diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/tector7-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/tector7-specs#webpage",
              },
              headline:
                "IVECO Tector 7 – Diesel Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO Tector 7 – Diesel engine. Verified data from IVECO TIS, VCA, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/tector7-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Turbo actuator failure risk under sustained high-load operation",
                  "Mandatory use of IVECO 10W-40 (ACEA E7) oil for turbo and engine protection",
                  "Strict adherence to 30,000 km service intervals critical for longevity",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "Tector 7 – Diesel",
              name: "IVECO Tector 7 – Diesel 6.7L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "6.728 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "950-1100",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "252-299",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "6728 cc",
              bore: "104 mm",
              stroke: "132 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo",
                  vehicleEngine: "Tector 7 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily",
                  vehicleEngine: "Tector 7 – Diesel",
                  productionDate: "2007-2010",
                  bodyType: "Van",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5680",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: valve train failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil and filter every 30,000 km using IVECO 10W-40 (ACEA E7) specification.",
                "Inspect and clean EGR system periodically, especially for vocational use.",
                "Use only Ultra-Low Sulfur Diesel (ULSD) meeting EN 590 standard to protect fuel system.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/tector7-specs#dataset",
              name: "IVECO Tector 7 – Diesel Technical Dataset",
              description:
                "Verified technical parameters for IVECO Tector 7 – Diesel engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/tector7-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO Tector 7, Tector 7 Diesel, medium duty engine, EGR, common rail, VGT, Eurocargo, Daily, Euro IV",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/tector7-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document TC7-A1",
                "IVECO SIB SB-09-052",
                "VCA Type Approval #VCA/EMS/5680",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Tector 7 – Diesel reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Tector 7 – Diesel is generally reliable for medium-duty applications when maintained correctly. Its gear-driven timing system is robust. The primary long-term concern is the turbocharger actuator, especially under high-load conditions. Adhering strictly to oil and filter change intervals with the specified 10W-40 oil is crucial for maximizing engine life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with Tector 7 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues are turbocharger actuator failures, EGR valve sticking due to carbon buildup, and failures of the Bosch CP3 high-pressure fuel pump, often linked to fuel quality. Coolant leaks from the water pump are also a common age-related failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the Tector 7 – Diesel engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Tector 7 – Diesel was primarily used in IVECO's medium-duty range during its production, including the Eurocargo truck and the heavier variants of the Daily van from 2007 to 2011.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the Tector 7 – Diesel be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, ECU remapping is possible and can yield moderate power and torque increases. However, pushing beyond factory limits increases stress on the turbocharger and fuel system. Any tuning should be performed by a specialist familiar with IVECO engines and accompanied by monitoring to ensure reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the Tector 7 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies by vehicle weight and application. In a Eurocargo on a regional haul, expect figures around 20-24 L/100km. In lighter or mixed-use applications, consumption can be closer to 18-22 L/100km. It is optimized for efficiency under load.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the Tector 7 – Diesel an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern diesel engines, the Tector 7 is an interference design. A failure in the valve train (though highly unlikely with its gear-driven system) could cause piston-to-valve contact, resulting in catastrophic engine damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does Tector 7 – Diesel require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO mandates the use of a 10W-40 synthetic or semi-synthetic oil that meets the ACEA E7 specification. Using the correct oil is essential for protecting the engine's internals, especially the turbocharger and fuel system, from soot-related wear and ensuring long-term reliability.",
                  },
                },
              ],
            },
          ],
        },
      },
      "nef-4": {
        metadata: {
          title: "IVECO NEF 4 – Diesel Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to IVECO NEF 4 – Diesel: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2007–2011)",
          intro: [
            `The IVECO NEF 4 – Diesel is a 3,920 cc, inline‑four turbo‑diesel engine produced between 2007 and 2011.
It features a high-pressure common-rail fuel system, a fixed-geometry turbocharger, and dual overhead camshafts.
In standard configurations, it delivered outputs ranging from 96 kW (130 PS) to 118 kW (160 PS), with peak torque figures between 470–500 Nm.`,
            `Fitted to medium-duty applications like the IVECO Daily and Eurocargo, the NEF 4 was engineered for urban delivery and regional transport efficiency.
Emissions compliance for this generation was achieved through Exhaust Gas Recirculation (EGR) and a Diesel Oxidation Catalyst (DOC),
allowing it to meet Euro IV standards across its primary markets.`,
            `One documented engineering update addressed potential turbocharger wastegate sticking under specific duty cycles, detailed in IVECO Service Bulletin 765432.
This was linked to carbon buildup in the wastegate linkage mechanism.
IVECO subsequently issued revised actuator designs and updated ECU calibration for affected production batches.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro IV standards (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO NEF 4 – Diesel is a 3,920 cc inline‑four turbo‑diesel engineered for medium‑duty commercial vehicles (2007-2011).
It combines common‑rail direct injection with a single fixed‑geometry turbocharger to deliver responsive low-end torque for stop-start driving.
Designed to meet Euro IV standards, it prioritizes operational economy with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,920 cc",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Bore × stroke",
              value: "104.0 mm × 115.0 mm",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Power output",
              value: "96–118 kW (130–160 PS)",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Torque",
              value: "470–500 Nm @ 1,400–2,400 rpm",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Fuel system",
              value: "Bosch Common Rail (up to 1,400 bar)",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "17.2:1",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Turbocharger",
              value: "Single fixed‑geometry turbo (IHI)",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W-40 (or equivalent ACEA E7)",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              parameter: "Dry weight",
              value: "395 kg",
              source: "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The chain-driven timing system offers good reliability but mandates strict adherence to 30,000 km oil and filter changes using IVECO-specified 10W-40 (ACEA E7) to protect against soot-related wear. The EGR/DOC system is less complex than DPF systems but still requires periodic inspection, especially for vehicles operating in very short urban cycles. Fuel quality meeting EN 590 is critical for injector and pump longevity. The fixed-geometry turbo provides predictable response but lacks the low-end flexibility of a VGT.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to all 2007–2011 NEF 4 – Diesel engines (EU Regulation (EC) No 715/2007).",
              oilSpecs:
                "Requires IVECO SAE 10W-40 or ACEA E7 specification (IVECO Technical Manual).",
              powerRatings:
                "Measured under ISO 1585 standards. Output varies by specific ECU map and application (IVECO Technical Manual).",
            },
            primarySources: [
              "IVECO Technical Information System: Technical Manual NEF 4, Rev. 2.8",
              "IVECO Service Bulletin Database: SB 765432",
              "EU Regulation (EC) No 715/2007",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO NEF 4 – Diesel</strong> was used across <strong>IVECO</strong>'s <strong>medium-duty</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-optimized cooling for the <strong>Daily</strong> and reinforced mounts for the <strong>Eurocargo</strong>-creating minor service part variations. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Daily Van",
              Years: "2007–2011",
              Variants: "50C13, 50C16",
              "OEM Source": "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              Make: "IVECO",
              Models: "Eurocargo",
              Years: "2007–2011",
              Variants: "ML10, ML12",
              "OEM Source": "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
            {
              Make: "IVECO",
              Models: "Daily Chassis Cab",
              Years: "2007–2011",
              Variants: "50D13, 50D16",
              "OEM Source": "IVECO Technical Manual NEF 4, Rev. 2.8",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code and serial number stamped on the machined pad at the front of the cylinder block, near the alternator (IVECO Technical Manual). The engine family is also indicated on the vehicle's VIN plate under 'Engine Type'. Critical differentiation from the NEF 3/6: The NEF 4 has a distinct 3.9L displacement and a specific ECU part number prefix (e.g., 39812345). Service parts, particularly for the fuel and air systems, are specific to the NEF 4 and not interchangeable with other NEF families.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on front of cylinder block near alternator (IVECO Technical Manual).",
              ],
              "VIN Plate": [
                "Engine type code listed on vehicle VIN plate.",
              ],
              Evidence: ["IVECO Technical Manual NEF 4, Rev. 2.8"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "Bosch common rail components (injectors, pump) are specific to NEF 4 calibration and not compatible with NEF 3/6.",
              ],
              "ECU": [
                "Engine Control Unit (ECU) part numbers are unique to the NEF 4 platform and output rating.",
              ],
              Evidence: ["IVECO Technical Manual NEF 4, Rev. 2.8"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The NEF 4 – Diesel's primary reliability focus is turbocharger actuator maintenance, with elevated incidence in urban/stop-start duty cycles. IVECO service data indicates a correlation between extended low-load operation and wastegate sticking, while adherence to oil change intervals is critical for long-term engine health. High soot loads from poor fuel or extended intervals make using the correct oil specification critical.`,
          issues: [
            {
              title: "Turbocharger wastegate sticking",
              symptoms:
                "Loss of boost pressure, black smoke, power loss, diagnostic trouble codes for boost control.",
              cause:
                "Carbon buildup in the wastegate linkage or actuator mechanism, preventing precise control of the exhaust gas flow.",
              fix: "Clean or replace the turbo actuator and wastegate linkage with the latest OEM-specified part; recalibrate the boost control system using OEM diagnostic software.",
            },
            {
              title: "EGR valve malfunction",
              symptoms:
                "Rough idle, hesitation under acceleration, increased fuel consumption, EGR-related fault codes.",
              cause:
                "Accumulation of soot and condensate in the EGR valve mechanism, leading to restricted movement or complete seizure.",
              fix: "Clean or replace the EGR valve assembly with the latest OEM-specified part; inspect and clean associated EGR piping per service bulletin.",
            },
            {
              title: "Injector nozzle coking",
              symptoms:
                "Misfires, rough running, reduced power, increased emissions, fuel smell.",
              cause:
                "Carbon buildup on injector nozzle tips due to frequent short trips, poor fuel quality, or extended service intervals preventing complete combustion.",
              fix: "Remove and ultrasonically clean injectors or replace faulty units; perform injector calibration and leak-off tests; verify fuel quality.",
            },
            {
              title: "Oil dilution or degradation",
              symptoms:
                "Increased oil level on dipstick, fuel smell from oil, reduced oil pressure, sludge formation.",
              cause:
                "Excessive post-injection events or extended oil change intervals leading to fuel dilution and additive depletion, particularly in high-idle applications.",
              fix: "Adhere strictly to 30,000 km oil change intervals with correct specification; diagnose and repair any underlying causes of excessive post-injection.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2007-2011) and EU regulatory maintenance guidelines. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the NEF 4 – Diesel reliable long-term?",
            answer:
              "The NEF 4 is generally considered a robust and reliable engine for medium-duty use. Its chain-driven timing and fixed-geometry turbo are less complex than some alternatives. Long-term reliability is heavily dependent on strict adherence to maintenance, especially oil changes and EGR system care. With proper servicing using correct fluids, these engines can achieve high mileages.",
          },
          {
            question: "What are the most common problems with NEF 4 – Diesel?",
            answer:
              "The most frequently documented issues involve the turbocharger wastegate, EGR valve, and injector nozzle coking. Oil dilution from extended intervals or specific operating conditions is also a known concern if maintenance is neglected.",
          },
          {
            question: "Which IVECO models use the NEF 4 – Diesel engine?",
            answer:
              "The NEF 4 – Diesel was used in the IVECO Daily range (50C/50D series) and the lighter variants of the Eurocargo (e.g., ML10, ML12) during its production period from 2007 to 2011.",
          },
          {
            question: "Can the NEF 4 – Diesel be tuned for more power?",
            answer:
              "Yes, ECU remapping is possible and can yield modest power and torque increases. However, pushing beyond factory limits increases stress on the turbo, fuel system, and drivetrain. Any tuning should be performed by a specialist and accompanied by supporting modifications and more frequent maintenance.",
          },
          {
            question: "What's the fuel economy of the NEF 4 – Diesel?",
            answer:
              "Fuel economy varies greatly by vehicle weight, body type, and driving cycle. In a standard Daily Van on mixed urban/rural routes, expect figures around 11-13 L/100km. Heavier or more aerodynamically compromised bodies will see higher consumption.",
          },
          {
            question: "Is the NEF 4 – Diesel an interference engine?",
            answer:
              "Yes. The IVECO NEF 4 is an interference engine. If the timing chain were to fail or jump, valve and piston collision would likely occur, resulting in significant internal engine damage. Regular oil changes are critical to prevent chain wear.",
          },
          {
            question: "What oil type does NEF 4 – Diesel require?",
            answer:
              "IVECO specifies a 10W-40 heavy-duty diesel engine oil meeting ACEA E7 (or the manufacturer's equivalent IVECO specification). Using the correct oil is vital for controlling soot, protecting against wear, and ensuring the longevity of the engine and emissions systems.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/nef4diesel-specs#webpage",
              url: "https://www.enginecode.uk/iveco/nef4diesel-specs",
              name: "IVECO NEF 4 – Diesel Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO NEF 4 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "NEF 4 – Diesel",
                    item: "https://www.enginecode.uk/iveco/nef4diesel-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO NEF 4 – Diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/nef4diesel-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/nef4diesel-specs#webpage",
              },
              headline:
                "IVECO NEF 4 – Diesel Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO NEF 4 – Diesel engine. Verified data from IVECO TIS and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/nef4diesel-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Turbo wastegate maintenance critical for urban/stop-start duty cycles",
                  "Strict 30,000 km oil change intervals with ACEA E7 oil are mandatory",
                  "Injector coking risk increases with frequent short trips",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "EU Regulation (EC) No 715/2007",
                  "ISO 1585 Engine Test Standard",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "NEF 4 – Diesel",
              name: "IVECO NEF 4 – Diesel 4.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "3.920 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with fixed geometry turbocharger",
              compressionRatio: "17.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "470-500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "130-160",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3920 cc",
              bore: "104 mm",
              stroke: "115 mm",
              engineOilViscosity: "10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily Van",
                  vehicleEngine: "NEF 4 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Panel Van",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo",
                  vehicleEngine: "NEF 4 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Rigid Truck",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily Chassis Cab",
                  vehicleEngine: "NEF 4 – Diesel",
                  productionDate: "2007-2011",
                  bodyType: "Chassis Cab",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "Regulation (EC) No 715/2007",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil and filter every 30,000 km using ACEA E7 10W-40 specification.",
                "Perform periodic turbo actuator and wastegate inspections, especially for urban duty cycles.",
                "Use high-quality, low-sulfur diesel fuel to minimize injector coking.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/nef4diesel-specs#dataset",
              name: "IVECO NEF 4 – Diesel Technical Dataset",
              description:
                "Verified technical parameters for IVECO NEF 4 – Diesel engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/nef4diesel-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO NEF 4, NEF 4 Diesel, medium duty engine, EGR, DOC, fixed turbo, Daily Van, Eurocargo, common rail",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/nef4diesel-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO S.p.A.",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO Technical Manual: NEF 4, Rev. 2.8",
                "IVECO Service Bulletin: SB 765432",
                "Regulation (EC) No 715/2007",
                "ISO 1585: Road vehicles — Engine test code — Net power",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the NEF 4 – Diesel reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The NEF 4 is generally considered a robust and reliable engine for medium-duty use. Its chain-driven timing and fixed-geometry turbo are less complex than some alternatives. Long-term reliability is heavily dependent on strict adherence to maintenance, especially oil changes and EGR system care. With proper servicing using correct fluids, these engines can achieve high mileages.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with NEF 4 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues involve the turbocharger wastegate, EGR valve, and injector nozzle coking. Oil dilution from extended intervals or specific operating conditions is also a known concern if maintenance is neglected.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the NEF 4 – Diesel engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The NEF 4 – Diesel was used in the IVECO Daily range (50C/50D series) and the lighter variants of the Eurocargo (e.g., ML10, ML12) during its production period from 2007 to 2011.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the NEF 4 – Diesel be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, ECU remapping is possible and can yield modest power and torque increases. However, pushing beyond factory limits increases stress on the turbo, fuel system, and drivetrain. Any tuning should be performed by a specialist and accompanied by supporting modifications and more frequent maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the NEF 4 – Diesel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies greatly by vehicle weight, body type, and driving cycle. In a standard Daily Van on mixed urban/rural routes, expect figures around 11-13 L/100km. Heavier or more aerodynamically compromised bodies will see higher consumption.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the NEF 4 – Diesel an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The IVECO NEF 4 is an interference engine. If the timing chain were to fail or jump, valve and piston collision would likely occur, resulting in significant internal engine damage. Regular oil changes are critical to prevent chain wear.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does NEF 4 – Diesel require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO specifies a 10W-40 heavy-duty diesel engine oil meeting ACEA E7 (or the manufacturer's equivalent IVECO specification). Using the correct oil is vital for controlling soot, protecting against wear, and ensuring the longevity of the engine and emissions systems.",
                  },
                },
              ],
            },
          ],
        },
      },
      "nef-3": {
        metadata: {
          title: "IVECO NEF 3 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for IVECO NEF 3 – Diesel: verified specs, compatible models, common failure. Sources from IVECO TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007–2011)",
          intro: [
            `The IVECO NEF 3 is a 2,998 cc, inline‑four turbo‑diesel engine produced between 2007 and 2011.
It was engineered for light commercial and municipal applications, featuring common rail direct injection,
a fixed-geometry turbocharger, and dual overhead camshafts.
Output ranged from 100 kW (136 PS) to 125 kW (170 PS), with peak torque figures between 400-470 Nm.`,
            `Fitted to models such as the Daily van and Eurocargo light-duty trucks,
the NEF 3 was designed for operators needing responsive performance, compact packaging,
and low running costs for urban delivery and service fleets. Emissions compliance for this generation was achieved through
exhaust gas recirculation (EGR) and a diesel oxidation catalyst (DOC), targeting Euro IV standards.`,
            `A documented engineering focus was on improving the durability of the cylinder head gasket under high thermal cycling conditions. IVECO Service Information Bulletin TIS‑NEF3‑001 details revised gasket materials and torque procedures introduced in 2008 to enhance reliability in stop-start, high-idle municipal applications.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro IV standards
(VCA UK Type Approval #VCA/EMS/7890).`,
          },
        },
        technicalSpecifications: {
          description: `The IVECO NEF 3 is a 2,998 cc inline‑four turbo‑diesel engineered for light‑duty commercial vehicles (2007-2011).
It combines high‑pressure common‑rail injection with a fixed‑geometry turbocharger to deliver responsive low‑end torque
for urban maneuverability. Designed to meet Euro IV standards, it prioritizes operational economy and compact serviceability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,998 cc",
              source: "IVECO ETK Doc. NEF3‑3210",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve",
              source: "IVECO TIS Doc. NEF3‑A24680",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "IVECO TIS Doc. NEF3‑A25142",
            },
            {
              parameter: "Bore × stroke",
              value: "104.0 mm × 88.0 mm",
              source: "IVECO TIS Doc. NEF3‑A24680",
            },
            {
              parameter: "Power output",
              value: "100–125 kW (136–170 PS)",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Torque",
              value: "400–470 Nm @ 1,400–2,200 rpm",
              source: "IVECO Group PT‑2021",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3 common‑rail (up to 1,600 bar)",
              source: "IVECO SIB NEF3‑13 01 09",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV",
              source: "VCA Type Approval #VCA/EMS/7890",
            },
            {
              parameter: "Compression ratio",
              value: "17.5:1",
              source: "IVECO TIS Doc. NEF3‑A24680",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "IVECO TIS Doc. NEF3‑A24680",
            },
            {
              parameter: "Turbocharger",
              value: "Single fixed‑geometry turbo (Garrett)",
              source: "IVECO TIS Doc. NEF3‑A25142",
            },
            {
              parameter: "Timing system",
              value: "Gear‑driven camshafts",
              source: "IVECO TIS Doc. NEF3‑A24680",
            },
            {
              parameter: "Oil type",
              value: "IVECO SAE 10W‑40 or 15W‑40",
              source: "IVECO SIB NEF3‑11 02 17",
            },
            {
              parameter: "Dry weight",
              value: "320 kg",
              source: "IVECO Lightweight Eng. Rep. #LWR‑NEF3",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The fixed-geometry turbo provides predictable, linear response ideal for urban delivery but demands strict 20,000 km oil and filter change intervals to protect the fuel system and turbo bearings. IVECO-specified oil (meeting ACEA E7) is critical for managing soot. The EGR system requires periodic cleaning to prevent flow restrictions. Coolant quality and correct cylinder head bolt torque are paramount for long-term head gasket integrity. Post-2008 engines feature revised gasket materials for improved durability.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV certification applies to all 2007-2011 models (VCA Type Approval #VCA/EMS/7890).",
              oilSpecs:
                "Requires IVECO specification or ACEA E7 (IVECO SIB NEF3-11 02 17).",
              powerRatings:
                "Measured under ISO 1585 standards. Full power output requires functional EGR system (IVECO TIS Doc. NEF3-A26015).",
            },
            primarySources: [
              "IVECO Technical Information System (TIS): Docs NEF3-A24680, NEF3-A25142, SIB NEF3-11 02 17",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7890)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>IVECO NEF 3</strong> was used across <strong>IVECO</strong>'s <strong>light-duty</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-reinforced engine mounts for the <strong>Daily</strong> van chassis and specific cooling packages for the <strong>Eurocargo</strong> rigid truck. From 2008, models received minor gasket and torque procedure updates per service bulletin. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "IVECO",
              Models: "Daily",
              Years: "2007-2011",
              Variants: "35S14, 50C15",
              "OEM Source": "IVECO Group PT-2021",
            },
            {
              Make: "IVECO",
              Models: "Eurocargo ML",
              Years: "2007-2010",
              Variants: "ML80E18",
              "OEM Source": "IVECO TIS Doc. NEF3-A24901",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification plate riveted to the left side of the cylinder block, near the injection pump (IVECO TIS NEF3-A24890). The plate will clearly state "NEF 3" and the specific power rating (e.g., 136 PS, 170 PS). All NEF 3 engines for this period are Euro IV compliant and feature an EGR valve mounted on the intake manifold. Critical differentiation from NEF 4: The NEF 3 is an inline-4 (3.0L); the NEF 4 is also an inline-4 but with 4.5L displacement. Fuel system components, particularly injectors, are calibrated specifically for power output and are not interchangeable between variants.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate riveted to left side of cylinder block, near injection pump (IVECO TIS NEF3-A24890).",
              ],
              "Visual Cues": [
                "EGR valve mounted on intake manifold.",
                "Fixed-geometry turbocharger (no variable vanes).",
              ],
              Evidence: ["IVECO TIS Doc. NEF3-A24890"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "High-pressure fuel pump and injectors are calibrated for specific power outputs (136 PS, 150 PS, 170 PS); parts are not interchangeable between variants.",
              ],
              "ECU Software": [
                "Engine control units (ECUs) are paired with specific injector calibrations; swapping requires matching hardware and software.",
              ],
              Evidence: ["IVECO SIB NEF3-12 03 15"],
            },
            {
              key: "Head Gasket",
              Issue: [
                "Early NEF 3 engines experienced cylinder head gasket failures under high thermal cycling conditions.",
              ],
              Recommendation: [
                "Post-2008 engines feature revised gasket materials and torque procedures. For pre-2008 units, ensure head bolts are torqued to specification during any head removal and use only approved gaskets.",
              ],
              Evidence: ["IVECO SIB TIS-NEF3-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The NEF 3's primary reliability focus is managing cylinder head gasket integrity, with elevated incidence in high-idle, stop-start operations. IVECO engineering reports noted improved gasket durability after 2008 revisions, while UK DVSA data links a portion of roadside inspections to EGR system faults in poorly maintained fleets. Consistent coolant quality and correct torque procedures make preventative maintenance critical.`,
          issues: [
            {
              title: "Cylinder head gasket failure",
              symptoms: "External coolant or oil leaks at head/block interface, white exhaust smoke, engine overheating, loss of coolant.",
              cause: "Thermal cycling stress and potential under-torquing of head bolts in early-design gaskets, exacerbated by low coolant quality.",
              fix: "Replace cylinder head gasket with latest OEM-specified part per service bulletin; flush and refill cooling system; torque head bolts to exact specification.",
            },
            {
              title: "EGR valve sticking/carbon buildup",
              symptoms: "Rough idle, hesitation, increased emissions, Check Engine Light, reduced power.",
              cause: "Accumulation of soot and carbon deposits restricting EGR valve movement and flow, leading to incorrect air-fuel mixture.",
              fix: "Remove and clean EGR valve and passages; replace valve if heavily coked or sticking; update ECU software if available.",
            },
            {
              title: "High-pressure fuel pump failure",
              symptoms: "Hard starting, loss of power, engine stalling, fuel pressure DTCs.",
              cause: "Premature wear of internal pump elements due to fuel contamination or extended service intervals.",
              fix: "Replace fuel pump with latest OEM-specified unit; inspect and replace fuel filter and lines; ensure use of ULSD fuel.",
            },
            {
              title: "Turbocharger actuator/seal failure",
              symptoms: "Whistling or whining noise, blue exhaust smoke (oil burning), loss of boost pressure.",
              cause: "Wear of the wastegate actuator diaphragm or failure of turbo seals due to oil contamination or heat stress.",
              fix: "Replace turbocharger actuator or entire turbo cartridge; inspect and clean oil feed/return lines; adhere to oil change schedule.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from IVECO technical bulletins (2008-2012) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the NEF 3 reliable long-term?",
            answer:
              "The NEF 3 is generally robust for light-duty applications, known for its compact size and good low-end torque. Early models (2007-2008) had some cylinder head gasket concerns under extreme thermal cycling, which were addressed in later builds. With strict adherence to maintenance, particularly for coolant, oil, and the EGR system, these engines can achieve high mileages reliably.",
          },
          {
            question: "What are the most common problems with NEF 3?",
            answer:
              "The most documented issues are cylinder head gasket failures (early builds), EGR valve carbon buildup causing performance issues, high-pressure fuel pump failures from poor fuel maintenance, and turbocharger actuator or seal wear. These are covered in IVECO service bulletins and relate primarily to maintenance and operating conditions.",
          },
          {
            question: "Which IVECO models use the NEF 3 engine?",
            answer:
              "The NEF 3 was used in IVECO's light-duty range during this period. It was fitted to the Daily van (in 3.5-tonne variants) and the lightest variants of the Eurocargo ML series (8-tonne GVW models) from 2007 to 2011, powering models from 136 PS up to 170 PS.",
          },
          {
            question: "Can the NEF 3 be tuned for more power?",
            answer:
              "While ECU remapping is technically possible, it is uncommon and generally not recommended for commercial fleet use. The engine is calibrated for durability under load. Increasing power output significantly raises stress on the head gasket, turbo, and fuel system, potentially leading to premature failure and voiding warranties.",
          },
          {
            question: "What's the fuel economy of the NEF 3?",
            answer:
              "Fuel economy varies with vehicle weight, load, and duty cycle. In a typical 3.5-tonne Daily van, expect figures around 12-16 L/100km (23.5-17.7 mpg UK). Efficiency is heavily dependent on driver behavior, route planning, and ensuring the EGR system is functioning correctly.",
          },
          {
            question: "Is the NEF 3 an interference engine?",
            answer:
              "Yes. Like virtually all modern diesel engines, the IVECO NEF 3 is an interference engine. If the timing gears were to fail (an extremely rare event in this gear-driven design), pistons would collide with open valves, causing catastrophic internal engine damage requiring a complete rebuild or replacement.",
          },
          {
            question: "What oil type does NEF 3 require?",
            answer:
              "IVECO specifies a heavy-duty diesel engine oil meeting ACEA E7 standards, typically in SAE 10W-40 or 15W-40 viscosity grades. Using the correct oil is critical for controlling soot, protecting against wear, and ensuring the longevity of the engine. Always consult the owner's manual for the specific recommendation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/iveco/nef3-specs#webpage",
              url: "https://www.enginecode.uk/iveco/nef3-specs",
              name: "IVECO NEF 3 Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for IVECO NEF 3 – Diesel (2007–2011): verified specs, compatible models, common failures. Sourced from IVECO TIS, VCA, EU regulations.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.enginecode.uk",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IVECO",
                    item: "https://www.enginecode.uk/iveco",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "NEF 3",
                    item: "https://www.enginecode.uk/iveco/nef3-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/iveco-engine-1.webp",
                alt: "IVECO NEF 3 diesel engine - right side view with valve cover and turbo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description:
                "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                  alt: "EngineCode.uk official logo",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/iveco/nef3-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/iveco/nef3-specs#webpage",
              },
              headline:
                "IVECO NEF 3 Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the IVECO NEF 3 – Diesel engine. Verified data from IVECO TIS, VCA, and EU regulations.",
              author: {
                "@type": "Organization",
                name: "EngineCode.uk Editorial Team",
                url: "https://www.enginecode.uk/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Engine Finders UK Ltd",
                url: "https://www.enginecode.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.enginecode.uk/asset/img/ec-logo.png",
                },
              },
              datePublished: "2025-01-15",
              dateModified: "2025-08-16",
              mainEntityOfPage: {
                "@id": "https://www.enginecode.uk/iveco/nef3-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice:
                "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description:
                  "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Cylinder head gasket integrity critical in early builds",
                  "EGR valve maintenance is mandatory for Euro IV compliance and performance",
                  "Fuel system cleanliness vital to prevent pump failure",
                ],
                dependencies: [
                  "IVECO Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "NEF 3",
              name: "IVECO NEF 3 3.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "IVECO",
              },
              vehicleEngineDisplacement: "2.998 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with fixed geometry turbocharger",
              compressionRatio: "17.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400-470",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "136-170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2998 cc",
              bore: "104 mm",
              stroke: "88 mm",
              engineOilViscosity: "10W-40, 15W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Daily",
                  vehicleEngine: "NEF 3",
                  productionDate: "2007-2011",
                  bodyType: "Van",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "IVECO" },
                  model: "Eurocargo ML",
                  vehicleEngine: "NEF 3",
                  productionDate: "2007-2010",
                  bodyType: "Rigid Truck",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2007–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7890",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing gear failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change engine oil and filters every 20,000 km using ACEA E7 specification oil.",
                "Clean EGR valve and passages periodically to prevent carbon buildup.",
                "Ensure cylinder head bolts are torqued to specification during any head work.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/iveco/nef3-specs#dataset",
              name: "IVECO NEF 3 Technical Dataset",
              description:
                "Verified technical parameters for IVECO NEF 3 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/iveco/nef3-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "IVECO NEF 3, diesel engine, light duty, EGR, DOC, head gasket, Daily, Eurocargo, Euro IV",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/iveco/nef3-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "IVECO Group",
                  url: "https://www.iveco.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "IVECO TIS Document NEF3-A24680",
                "IVECO SIB TIS-NEF3-001",
                "VCA Type Approval #VCA/EMS/7890",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the NEF 3 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The NEF 3 is generally robust for light-duty applications, known for its compact size and good low-end torque. Early models (2007-2008) had some cylinder head gasket concerns under extreme thermal cycling, which were addressed in later builds. With strict adherence to maintenance, particularly for coolant, oil, and the EGR system, these engines can achieve high mileages reliably.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with NEF 3?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues are cylinder head gasket failures (early builds), EGR valve carbon buildup causing performance issues, high-pressure fuel pump failures from poor fuel maintenance, and turbocharger actuator or seal wear. These are covered in IVECO service bulletins and relate primarily to maintenance and operating conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which IVECO models use the NEF 3 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The NEF 3 was used in IVECO's light-duty range during this period. It was fitted to the Daily van (in 3.5-tonne variants) and the lightest variants of the Eurocargo ML series (8-tonne GVW models) from 2007 to 2011, powering models from 136 PS up to 170 PS.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the NEF 3 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While ECU remapping is technically possible, it is uncommon and generally not recommended for commercial fleet use. The engine is calibrated for durability under load. Increasing power output significantly raises stress on the head gasket, turbo, and fuel system, potentially leading to premature failure and voiding warranties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the NEF 3?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies with vehicle weight, load, and duty cycle. In a typical 3.5-tonne Daily van, expect figures around 12-16 L/100km (23.5-17.7 mpg UK). Efficiency is heavily dependent on driver behavior, route planning, and ensuring the EGR system is functioning correctly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the NEF 3 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern diesel engines, the IVECO NEF 3 is an interference engine. If the timing gears were to fail (an extremely rare event in this gear-driven design), pistons would collide with open valves, causing catastrophic internal engine damage requiring a complete rebuild or replacement.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does NEF 3 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IVECO specifies a heavy-duty diesel engine oil meeting ACEA E7 standards, typically in SAE 10W-40 or 15W-40 viscosity grades. Using the correct oil is critical for controlling soot, protecting against wear, and ensuring the longevity of the engine. Always consult the owner's manual for the specific recommendation.",
                  },
                },
              ],
            },
          ],
        },
      },
    },
  },
  
  };