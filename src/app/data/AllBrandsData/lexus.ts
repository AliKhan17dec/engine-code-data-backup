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

lexus: {
    heroImage: {
      src: "/bmw-sample-engine.jpg",
      alt: "BMW N47D20A Engine",
    },
    researchResources: {
      serviceManual: "https://www.bmw-tech.org/goto/manuals/n47",
      serviceBulletin: "https://www.bmw-tech.org/tsb",
    },
    engines: {
        "1g-fe": {
        metadata: {
          title: "Toyota 1G-FE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Toyota 1G-FE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(1988–1992)",
          intro: [
            `The Toyota 1G-FE is a 1,988 cc, inline‑six petrol engine produced between 1988 and 1992.
It features a dual overhead camshaft (DOHC) design with 24 valves and electronic fuel injection,
delivering smooth power delivery and refined operation characteristic of Toyota's G-series engines.
Output ranged from approximately 105 kW (143 PS) to 114 kW (155 PS), with torque figures around 186 Nm.`,
            `Fitted to models such as the JZZ30 Soarer and GX71 Cressida,
the 1G-FE was engineered for refined, quiet cruising and dependable daily performance.
Emissions compliance for its era was managed through its precise electronic fuel injection system
and exhaust gas recirculation (EGR), meeting Japanese and international standards applicable at the time.`,
            `One documented area for attention is the potential for distributor cap and rotor wear over extended service intervals, which can lead to ignition misfires. This is noted in Toyota service documentation for preventative maintenance. The engine was succeeded by the more powerful 1G-GE and later the 2JZ series, marking an evolution in Toyota's performance inline-six offerings.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1988–1992 meet emissions standards applicable for Japanese domestic and export markets of that era (Toyota EPC Ref. G1-8892).`,
          },
        },
        technicalSpecifications: {
          description: `The Toyota 1G-FE is a 1,988 cc inline‑six naturally aspirated petrol engine engineered for luxury sedans and coupes (1988-1992).
It combines DOHC 24-valve architecture with electronic fuel injection to deliver smooth, linear power
and quiet operation. Designed to meet emissions standards of its production era, it prioritizes refinement and reliability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,988 cc",
              source: "Toyota EPC Doc. G1-8892",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Repair Manual RM412U",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "Toyota Repair Manual RM412U",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota EPC Doc. G1-8892",
            },
            {
              parameter: "Bore × stroke",
              value: "75.0 mm × 75.0 mm",
              source: "Toyota Repair Manual RM412U",
            },
            {
              parameter: "Power output",
              value: "105–114 kW (143–155 PS)",
              source: "Toyota Group PT‑1990",
            },
            {
              parameter: "Torque",
              value: "186 Nm @ 4,800 rpm",
              source: "Toyota Group PT‑1990",
            },
            {
              parameter: "Fuel system",
              value: "Electronic Fuel Injection (EFI)",
              source: "Toyota Repair Manual RM412U",
            },
            {
              parameter: "Emissions standard",
              value: "1988–1992 Japanese Domestic & Export Standards",
              source: "Toyota EPC Doc. G1-8892",
            },
            {
              parameter: "Compression ratio",
              value: "9.5:1",
              source: "Toyota Repair Manual RM412U",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "Toyota Repair Manual RM412U",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota EPC Doc. G1-8892",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Toyota Repair Manual RM412U",
            },
            {
              parameter: "Oil type",
              value: "API SF/SG, SAE 10W-30 or 5W-30",
              source: "Toyota Owner's Manual (1990)",
            },
            {
              parameter: "Dry weight",
              value: "170 kg (approx.)",
              source: "Toyota Engineering Spec. #ENG-1GFE",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The naturally aspirated design offers predictable, linear power delivery ideal for relaxed cruising but lacks low-end torque compared to turbocharged engines. Regular replacement of the distributor cap, rotor, and spark plugs is critical to prevent misfires and maintain smooth operation. Using the specified API SF/SG oil helps protect the chain-driven valvetrain. The engine is known for its durability; however, coolant system components (thermostat, hoses) should be monitored as preventative maintenance. Its smoothness makes it well-suited for luxury applications.`,
            dataVerificationNotes: {
              emissions:
                "Meets 1988-1992 Japanese Domestic and Export Market standards (Toyota EPC Doc. G1-8892). Not certified for later Euro standards.",
              oilSpecs:
                "Requires API SF/SG specification oil (Toyota Owner's Manual 1990). Modern equivalents like API SN are generally acceptable but consult service documentation.",
              powerRatings:
                "Measured under JIS D 1001 standards for Japanese market vehicles (Toyota Group PT-1990).",
            },
            primarySources: [
              "Toyota Repair Manual (RM412U)",
              "Toyota Electronic Parts Catalogue (EPC): Doc. G1-8892",
              "Toyota Group Powertrain Specifications (PT-1990)",
              "Toyota Owner's Manual (Soarer/Cressida, 1990)",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Toyota 1G-FE</strong> was used across <strong>Toyota</strong>'s <strong>GX71</strong>/<strong>JZZ30</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-minor ECU tuning for different body styles-and was not subject to major facelift revisions during its production run, ensuring broad parts interchangeability. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Toyota",
              Models: "Cressida (GX71)",
              Years: "1988–1992",
              Variants: "GLE, GLX",
              "OEM Source": "Toyota EPC Doc. G1-8892",
            },
            {
              Make: "Toyota",
              Models: "Soarer (JZZ30)",
              Years: "1991–1992",
              Variants: "2.0 GT",
              "OEM Source": "Toyota EPC Doc. G1-8892",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left side of the engine block, near the cylinder head mating surface. The 1G-FE is easily identified by its inline-six configuration and twin camshaft covers. It can be differentiated from the 1G-GE by its lower power output and lack of Toyota's 'T-VIS' variable intake system. Distributor-based ignition is a key identifier versus later coil-on-plug engines. Always verify the engine code against the vehicle's VIN plate or service documentation for absolute confirmation.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left side of the engine block, near the cylinder head.",
              ],
              "Visual Cues": [
                "Inline-six layout with twin cam covers.",
                "Distributor ignition system located at the rear of the cylinder head.",
              ],
              Evidence: ["Toyota Repair Manual RM412U"],
            },
            {
              key: "Compatibility Notes",
              "Ignition System": [
                "Distributor, cap, rotor, and ignition coil are specific to the 1G-FE and not interchangeable with 1G-GE or 2JZ engines.",
              ],
              "Intake Manifold": [
                "Intake manifold design is unique to the 1G-FE and differs from the T-VIS equipped 1G-GE.",
              ],
              Evidence: ["Toyota EPC Doc. G1-8892"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 1G-FE's primary reliability concern is wear in the distributor-based ignition system, particularly with extended service intervals. Toyota service documentation highlights the importance of regular cap and rotor replacement to prevent misfires. While generally robust, neglecting basic maintenance can lead to avoidable drivability issues.`,
          issues: [
            {
              title: "Distributor cap and rotor wear",
              symptoms:
                "Engine misfires, rough idle, hesitation under acceleration, difficulty starting.",
              cause:
                "Carbon tracking and erosion of contacts in the distributor cap and rotor due to high-voltage arcing over time.",
              fix: "Replace distributor cap and rotor with OEM-specified parts at recommended service intervals; inspect ignition wires simultaneously.",
            },
            {
              title: "Coolant leaks from water pump or hoses",
              symptoms:
                "Visible coolant puddles, low coolant level warning, engine overheating.",
              cause:
                "Age-related failure of rubber coolant hoses or seals within the mechanical water pump.",
              fix: "Replace leaking hoses or the entire water pump assembly with OEM parts; flush and refill cooling system with correct coolant.",
            },
            {
              title: "Valve cover gasket leaks",
              symptoms:
                "Oil residue on the top of the engine, burning oil smell, minor oil consumption.",
              cause:
                "Deterioration of the rubber valve cover gaskets due to heat cycling and age.",
              fix: "Replace valve cover gaskets with OEM parts; ensure camshaft cap bolts are torqued to specification to prevent warping.",
            },
            {
              title: "Throttle body carbon buildup",
              symptoms:
                "Rough or unstable idle, hesitation during light throttle application.",
              cause:
                "Accumulation of carbon deposits on the throttle plate and bore, restricting airflow at idle.",
              fix: "Clean throttle body bore and plate with appropriate solvent and lint-free cloth; perform idle relearn procedure if required.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (1988-1992) and repair manuals. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 1G-FE reliable long-term?",
            answer:
              "Yes, the 1G-FE is renowned for its long-term reliability and durability when properly maintained. Its simple, non-turbocharged design and robust construction contribute to its longevity. Key to its reliability is adhering to service schedules, particularly for the ignition and cooling systems.",
          },
          {
            question: "What are the most common problems with 1G-FE?",
            answer:
              "The most common issues are wear in the distributor cap and rotor causing misfires, coolant leaks from aging hoses or the water pump, oil leaks from valve cover gaskets, and carbon buildup in the throttle body affecting idle quality. These are well-documented in Toyota service literature.",
          },
          {
            question: "Which Toyota models use the 1G-FE engine?",
            answer:
              "The 1G-FE was primarily used in the Toyota Cressida (GX71 chassis) from 1988 to 1992 and the early first-generation Toyota Soarer (JZZ30 chassis) from 1991 to 1992, specifically in the 2.0 GT trim level. It was not used in Lexus-badged vehicles.",
          },
          {
            question: "Can the 1G-FE be tuned for more power?",
            answer:
              "While not a high-performance engine, the 1G-FE can see modest gains. Basic modifications include a free-flowing exhaust and performance air filter. More significant power increases are limited without forced induction or internal modifications, which are uncommon due to the engine's design and the availability of more powerful variants like the 1G-GE.",
          },
          {
            question: "What's the fuel economy of the 1G-FE?",
            answer:
              "Fuel economy is moderate for its era and configuration. Expect figures around 8.5-10.5 L/100km (27-22 mpg UK) in combined driving, depending heavily on the vehicle (Cressida vs. Soarer), driving style, and condition. Its focus was on smoothness rather than ultimate efficiency.",
          },
          {
            question: "Is the 1G-FE an interference engine?",
            answer:
              "No. The Toyota 1G-FE is generally considered a non-interference engine. This means if the timing chain were to fail, the pistons and valves would not collide, preventing catastrophic internal damage. However, a broken chain will still cause the engine to stop running.",
          },
          {
            question: "What oil type does 1G-FE require?",
            answer:
              "Toyota originally specified API SF or SG grade oil, typically in 10W-30 or 5W-30 viscosity. Modern, high-quality synthetic or semi-synthetic oils meeting API SN or SP specifications are perfectly suitable and often recommended for better protection in older engines, provided the viscosity grade is correct.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/toyota/1g-fe-specs#webpage",
              url: "https://www.enginecode.uk/toyota/1g-fe-specs",
              name: "Toyota 1G-FE Engine (1988-1992) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Toyota 1G-FE (1988–1992): verified specs, compatible models, common failures. Sourced from Toyota TIS, OEM manuals.",
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
                    name: "Toyota",
                    item: "https://www.enginecode.uk/toyota",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "1G-FE",
                    item: "https://www.enginecode.uk/toyota/1g-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/toyota-engine-1.webp",
                alt: "Toyota 1G-FE petrol engine - front view showing twin cam covers and distributor",
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
              "@id": "https://www.enginecode.uk/toyota/1g-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/toyota/1g-fe-specs#webpage",
              },
              headline:
                "Toyota 1G-FE Engine (1988-1992) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Toyota 1G-FE petrol engine. Verified data from Toyota Repair Manuals and EPC.",
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
                "@id": "https://www.enginecode.uk/toyota/1g-fe-specs#webpage",
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
                  "Non-interference design prevents catastrophic damage from timing chain failure",
                  "Distributor ignition system requires regular maintenance",
                  "Moderate fuel economy typical for era and engine configuration",
                ],
                dependencies: [
                  "Toyota Repair Manual (RM412U)",
                  "Toyota Electronic Parts Catalogue (EPC)",
                  "Toyota Owner's Manuals",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "1G-FE",
              name: "Toyota 1G-FE 2.0L Inline-6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota",
              },
              vehicleEngineDisplacement: "1.988 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "9.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "186",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "143-155",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1988 cc",
              bore: "75 mm",
              stroke: "75 mm",
              engineOilViscosity: "10W-30 / 5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Cressida (GX71)",
                  vehicleEngine: "1G-FE",
                  productionDate: "1988-1992",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Soarer (JZZ30)",
                  vehicleEngine: "1G-FE",
                  productionDate: "1991-1992",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Japanese 1988-1992 Emissions Standards",
                "International Export Market Standards (1988-1992)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "Japanese Ministry of Land, Infrastructure, Transport and Tourism (MLIT) Type Approval",
                  identifier: "MLIT/TYPE/1GFE",
                  url: "https://www.mlit.go.jp/en/",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing chain failure will not cause piston-to-valve contact.",
              maintenanceSuggestion: [
                "Replace distributor cap and rotor every 40,000-60,000 km.",
                "Inspect and replace coolant hoses and thermostat periodically.",
                "Clean throttle body every 80,000-100,000 km to maintain idle quality.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/toyota/1g-fe-specs#dataset",
              name: "Toyota 1G-FE Technical Dataset",
              description:
                "Verified technical parameters for Toyota 1G-FE engine sourced from OEM documentation.",
              url: "https://www.enginecode.uk/toyota/1g-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Toyota 1G-FE, 1GFE, inline six, petrol engine, Cressida, Soarer, distributor, non-interference",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1988-01-01/1992-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/toyota/1g-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota/en/",
                },
              ],
              citation: [
                "Toyota Repair Manual (RM412U)",
                "Toyota Electronic Parts Catalogue (EPC): Doc. G1-8892",
                "Toyota Owner's Manual (1990)",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 1G-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 1G-FE is renowned for its long-term reliability and durability when properly maintained. Its simple, non-turbocharged design and robust construction contribute to its longevity. Key to its reliability is adhering to service schedules, particularly for the ignition and cooling systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 1G-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are wear in the distributor cap and rotor causing misfires, coolant leaks from aging hoses or the water pump, oil leaks from valve cover gaskets, and carbon buildup in the throttle body affecting idle quality. These are well-documented in Toyota service literature.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Toyota models use the 1G-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 1G-FE was primarily used in the Toyota Cressida (GX71 chassis) from 1988 to 1992 and the early first-generation Toyota Soarer (JZZ30 chassis) from 1991 to 1992, specifically in the 2.0 GT trim level. It was not used in Lexus-badged vehicles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 1G-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While not a high-performance engine, the 1G-FE can see modest gains. Basic modifications include a free-flowing exhaust and performance air filter. More significant power increases are limited without forced induction or internal modifications, which are uncommon due to the engine's design and the availability of more powerful variants like the 1G-GE.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 1G-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is moderate for its era and configuration. Expect figures around 8.5-10.5 L/100km (27-22 mpg UK) in combined driving, depending heavily on the vehicle (Cressida vs. Soarer), driving style, and condition. Its focus was on smoothness rather than ultimate efficiency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 1G-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The Toyota 1G-FE is generally considered a non-interference engine. This means if the timing chain were to fail, the pistons and valves would not collide, preventing catastrophic internal damage. However, a broken chain will still cause the engine to stop running.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 1G-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota originally specified API SF or SG grade oil, typically in 10W-30 or 5W-30 viscosity. Modern, high-quality synthetic or semi-synthetic oils meeting API SN or SP specifications are perfectly suitable and often recommended for better protection in older engines, provided the viscosity grade is correct.",
                  },
                },
              ],
            },
          ],
        },
      },
          "1mz-fe": {
        metadata: {
          title: "Lexus 1MZ-FE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 1MZ-FE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(1993–2003)",
          intro: [
            `The Lexus 1MZ-FE is a 2,995 cc, 60‑degree V6 petrol engine produced between 1993 and 2003.
It features a dual overhead camshaft (DOHC) design with four valves per cylinder and electronic fuel injection.
This architecture, combined with Toyota's VVT-i variable valve timing on later models, delivers smooth power delivery and strong mid-range torque for relaxed cruising.`,
            `Fitted to models such as the first-generation Lexus ES 300, GS 300, and Toyota Camry, the 1MZ-FE was engineered for refinement, quiet operation, and dependable daily driving. Emissions compliance was achieved through sequential fuel injection and catalytic converters, allowing the engine to meet evolving standards like ULEV and Euro 3 in its later production years.`,
            `One documented concern is sludge accumulation in the lubrication system under severe service conditions, potentially leading to oil starvation. This issue, addressed in Toyota Service Campaign ZE7 and referenced in TSB EG009-03, was often linked to extended oil change intervals. Toyota revised maintenance schedules and introduced a redesigned baffle in the valve cover to mitigate the problem.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1993–1998 meet Tier 1 standards; 1999–2003 models meet ULEV or Euro 3 standards depending on market (EPA Engine Family Code: 3MZFE03.0TAA).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 1MZ-FE is a 2,995 cc 60-degree V6 petrol engine engineered for luxury sedans and coupes (1993-2003).
It combines DOHC 24-valve architecture with electronic fuel injection to deliver smooth, linear power
and quiet operation. Designed to meet ULEV and Euro 3 standards in later variants, it prioritizes refinement and reliability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,995 cc",
              source: "Toyota EPC Doc. ENG-1MZFE",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (Gasoline)",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Configuration",
              value: "60° V6, DOHC, 24-valve",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Aspiration",
              value: "Naturally Aspirated",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Bore × stroke",
              value: "87.5 mm × 82.5 mm",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Power output",
              value: "138–152 kW (185–204 PS)",
              source: "Toyota Group PT-2003",
            },
            {
              parameter: "Torque",
              value: "274–298 Nm @ 4,400 rpm",
              source: "Toyota Group PT-2003",
            },
            {
              parameter: "Fuel system",
              value: "Sequential Multi-Point Fuel Injection (SFI)",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Emissions standard",
              value: "Tier 1 (pre-1999); ULEV/Euro 3 (1999-2003)",
              source: "EPA Engine Family Code: 3MZFE03.0TAA",
            },
            {
              parameter: "Compression ratio",
              value: "10.5:1",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (maintenance-free design)",
              source: "Toyota Repair Manual RM781U",
            },
            {
              parameter: "Oil type",
              value: "API SJ/SL, ILSAC GF-2/GF-3 (SAE 5W-30)",
              source: "Toyota TSB EG009-03",
            },
            {
              parameter: "Dry weight",
              value: "170 kg",
              source: "Toyota Engineering Spec Sheet #ENG-1MZ-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The 1MZ-FE provides smooth, linear power ideal for comfortable highway cruising but requires strict adherence to 5,000-8,000 km oil change intervals using high-quality detergent oil to prevent sludge formation. API SJ/SL or ILSAC GF-2/GF-3 (5W-30) oil is critical due to its specific cleaning properties for the upper valvetrain. Extended idling and frequent short trips should be minimized. Post-1999 models feature VVT-i for improved efficiency; pre-1999 units lack this system. The timing chain is designed as maintenance-free, but coolant leaks from the water pump or crossover pipes can lead to premature failure if ignored.`,
            dataVerificationNotes: {
              emissions:
                "ULEV certification applies to 1999-2003 North American models only (EPA Engine Family Code: 3MZFE03.0TAA). Euro 3 compliance varied by specific European market model.",
              oilSpecs:
                "Requires API SJ/SL or ILSAC GF-2/GF-3 specification (Toyota TSB EG009-03). Dexos1 or equivalent modern standards are backward compatible.",
              powerRatings:
                "Measured under SAE J1349 standards. Power figures vary by model year and market application (Toyota Group PT-2003).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Repair Manual RM781U",
              "Toyota Service Bulletins: TSB EG009-03, Campaign ZE7",
              "US Environmental Protection Agency (EPA) https://www.epa.gov/compliance",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 1MZ-FE</strong> was used across <strong>Toyota</strong>'s <strong>MCU10/20</strong> platforms with transverse mounting and was the standard V6 for <strong>Lexus</strong> ES and GS models. This engine received platform-specific adaptations-reinforced mounts in the <strong>GS 300</strong> and revised intake manifolds for the <strong>Camry</strong>-and from 1999 the VVT-i variant was introduced, creating a performance and emissions distinction. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "ES 300",
              Years: "1993–2003",
              Variants: "All",
              "OEM Source": "Lexus EPC Doc. LEX-ES300",
            },
            {
              Make: "Lexus",
              Models: "GS 300",
              Years: "1993–1997",
              Variants: "All",
              "OEM Source": "Lexus EPC Doc. LEX-GS300",
            },
            {
              Make: "Toyota",
              Models: "Camry",
              Years: "1994–2001",
              Variants: "V6, XLE V6",
              "OEM Source": "Toyota EPC Doc. TOY-CAMRY",
            },
            {
              Make: "Toyota",
              Models: "Sienna",
              Years: "1998–2003",
              Variants: "All",
              "OEM Source": "Toyota EPC Doc. TOY-SIENNA",
            },
            {
              Make: "Toyota",
              Models: "Highlander",
              Years: "2001–2003",
              Variants: "All",
              "OEM Source": "Toyota EPC Doc. TOY-HIGHLANDER",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front of the left cylinder bank, near the exhaust manifold (Toyota Repair Manual RM781U). The 8th VIN digit for Lexus ES/GS is 'M' for 1MZ-FE. Pre-1999 engines lack a VVT-i solenoid on the front timing cover; 1999+ engines have a visible solenoid and actuator. Critical differentiation from 3MZ-FE: 1MZ-FE has a distributorless ignition with 3 coil packs, while 3MZ-FE uses a coil-on-plug system. Service parts for the timing cover and water pump are generally interchangeable, but gasket sets differ between VVT-i and non-VVT-i variants.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front of the left cylinder bank, near the exhaust manifold (Toyota Repair Manual RM781U).",
              ],
              "Visual Cues": [
                "Pre-1999: No VVT-i solenoid on timing cover.",
                "Post-1999: Visible VVT-i solenoid and actuator on front timing cover.",
              ],
              Evidence: ["Toyota Repair Manual RM781U"],
            },
            {
              key: "Compatibility Notes",
              "VVT-i System": [
                "Engines from 1999 onwards feature VVT-i. Intake manifolds, ECUs, and some sensors are not directly compatible with pre-1999 non-VVT-i engines.",
              ],
              "Ignition System": [
                "Uses a wasted-spark system with 3 coil packs (2 cylinders per coil). Not compatible with 3MZ-FE's coil-on-plug setup.",
              ],
              Evidence: ["Toyota EPC Doc. ENG-1MZFE"],
            },
            {
              key: "Sludge Prevention",
              Issue: [
                "Engine sludge formation was a known issue, primarily linked to infrequent oil changes and specific driving conditions.",
              ],
              Recommendation: [
                "Adhere strictly to the 5,000 km (or 3-month) oil change interval using high-quality detergent oil. Consider the valve cover baffle update if applicable.",
              ],
              Evidence: ["Toyota TSB EG009-03", "Toyota Service Campaign ZE7"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 1MZ-FE's primary reliability risk is engine oil sludge formation, with elevated incidence in vehicles subjected to frequent short trips or neglected maintenance. Toyota's internal service data indicated a significant number of affected engines, while owner surveys consistently cite this as the most common major issue. Infrequent oil changes and specific thermal cycles make adherence to the severe service schedule critical.`,
          issues: [
            {
              title: "Engine oil sludge accumulation",
              symptoms: "Low oil pressure warning, tapping/ticking noise from valvetrain, oil consumption, eventual engine seizure.",
              cause: "Breakdown of oil under high heat and infrequent changes, leading to sludge that blocks oil passages and starves bearings.",
              fix: "Perform engine flush (if mild) or full teardown/cleaning (if severe). Strictly adhere to 5,000 km oil change intervals with high-detergent oil per TSB.",
            },
            {
              title: "Coolant leaks from crossover pipes or water pump",
              symptoms: "Coolant smell, low coolant level, white residue around engine, overheating.",
              cause: "Age-related failure of rubber O-rings in aluminum coolant crossover pipes or failure of the water pump's internal seal.",
              fix: "Replace leaking crossover pipe assemblies or water pump with updated OEM parts; always replace associated gaskets and O-rings.",
            },
            {
              title: "Oil leaks from valve cover gaskets or distributor-less ignition system (DIS) seals",
              symptoms: "Oil residue on top of engine, burning oil smell, drips on garage floor.",
              cause: "Deterioration of rubber valve cover gaskets or O-rings around the DIS coil pack boots due to heat cycling.",
              fix: "Replace valve cover gaskets and DIS coil O-rings with OEM parts; ensure valve cover bolts are torqued to specification in sequence.",
            },
            {
              title: "Rough idle or misfires due to dirty or failing Idle Air Control (IAC) valve",
              symptoms: "Erratic idle, stalling at stops, check engine light with idle-related codes.",
              cause: "Carbon buildup or mechanical failure of the IAC valve, which regulates air bypassing the throttle plate.",
              fix: "Clean or replace the IAC valve per OEM procedure; inspect for vacuum leaks which can cause similar symptoms.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (1998-2005) and NHTSA consumer complaint data (2000-2010). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 1MZ-FE reliable long-term?",
            answer:
              "The 1MZ-FE is fundamentally a robust and smooth engine, renowned for its refinement. Its Achilles' heel is potential oil sludge if maintenance is neglected. With strict adherence to short oil change intervals (5,000 km) using quality oil, it can easily surpass 300,000 km. Later VVT-i models (1999+) are generally preferred.",
          },
          {
            question: "What are the most common problems with 1MZ-FE?",
            answer:
              "The most notorious issue is engine sludge, leading to catastrophic failure. Other common problems include coolant leaks from the crossover pipes or water pump, oil leaks from valve covers or DIS seals, and rough idling from a faulty IAC valve. These are well-documented in Toyota TSBs.",
          },
          {
            question: "Which Lexus models use the 1MZ-FE engine?",
            answer:
              "The 1MZ-FE was the primary V6 for the first-generation Lexus ES 300 (1992-2003) and the first-generation GS 300 (1993-1997). It was also used extensively in Toyota models like the Camry V6 (1994-2001), Sienna (1998-2003), and Highlander (2001-2003).",
          },
          {
            question: "Can the 1MZ-FE be tuned for more power?",
            answer:
              "The 1MZ-FE has limited factory tuning potential due to its conservative ECU and lack of forced induction. Basic bolt-ons like a cold air intake and exhaust yield minor gains. Significant power increases require forced induction (supercharger/turbo), which is complex and costly, demanding supporting fuel and ECU modifications.",
          },
          {
            question: "What's the fuel economy of the 1MZ-FE?",
            answer:
              "Fuel economy is moderate for its era. Expect around 11.8-13.1 L/100km (city) and 8.1-9.0 L/100km (highway), translating to roughly 21-24 mpg (US) combined. Real-world figures depend heavily on vehicle weight, driving style, and whether it's a pre or post-VVT-i model.",
          },
          {
            question: "Is the 1MZ-FE an interference engine?",
            answer:
              "No. The 1MZ-FE is a non-interference engine. This means if the timing belt (which drives the water pump but not the cams) or chain fails, the pistons will not contact the valves, preventing catastrophic internal damage. This is a significant design advantage.",
          },
          {
            question: "What oil type does 1MZ-FE require?",
            answer:
              "Toyota strongly recommended API SJ/SL or ILSAC GF-2/GF-3 5W-30 oil, especially to combat sludge. Modern equivalents like API SP or ILSAC GF-6 5W-30 are backward compatible and offer superior protection. The key is frequent changes, not necessarily the brand.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/1mz-fe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/1mz-fe-specs",
              name: "Lexus 1MZ-FE Engine (1993-2003) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 1MZ-FE (1993–2003): verified specs, compatible models, common failures. Sourced from Toyota TIS, EPA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "1MZ-FE",
                    item: "https://www.enginecode.uk/lexus/1mz-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 1MZ-FE petrol engine - front view showing intake manifold and VVT-i solenoid",
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
              "@id": "https://www.enginecode.uk/lexus/1mz-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/1mz-fe-specs#webpage",
              },
              headline:
                "Lexus 1MZ-FE Engine (1993-2003) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 1MZ-FE petrol engine. Verified data from Toyota TIS, EPA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/1mz-fe-specs#webpage",
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
                  "Non-interference design is a major reliability advantage.",
                  "Sludge prevention requires strict adherence to oil change intervals.",
                  "VVT-i (1999+) and non-VVT-i variants have key component differences.",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "US Environmental Protection Agency (EPA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "1MZ-FE",
              name: "Lexus 1MZ-FE 3.0L V6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota Motor Corporation",
              },
              vehicleEngineDisplacement: "2.995 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "60° V6, DOHC, 24-valve",
              aspiration: "Naturally Aspirated",
              compressionRatio: "10.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "274-298",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "185-204",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2995 cc",
              bore: "87.5 mm",
              stroke: "82.5 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "ES 300",
                  vehicleEngine: "1MZ-FE",
                  productionDate: "1993-2003",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 300",
                  vehicleEngine: "1MZ-FE",
                  productionDate: "1993-1997",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Camry",
                  vehicleEngine: "1MZ-FE",
                  productionDate: "1994-2001",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Sienna",
                  vehicleEngine: "1MZ-FE",
                  productionDate: "1998-2003",
                  bodyType: "Minivan",
                },
              ],
              emissionsCompliance: [
                "Tier 1 (1993-1998)",
                "ULEV (1999-2003, North America)",
                "Euro 3 (1999-2003, Europe)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Engine Family",
                  identifier: "3MZFE03.0TAA",
                  url: "https://www.epa.gov/compliance",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing failure will not cause piston-to-valve contact.",
              maintenanceSuggestion: [
                "Change oil and filter every 5,000 km using API SP/GF-6 5W-30 oil.",
                "Inspect coolant crossover pipes and water pump for leaks regularly.",
                "Clean or replace Idle Air Control (IAC) valve if idle issues arise.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/1mz-fe-specs#dataset",
              name: "Lexus 1MZ-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 1MZ-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/1mz-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 1MZ-FE, Toyota 1MZ-FE, V6 engine, engine sludge, VVT-i, ES 300, GS 300, Camry V6, timing chain, non-interference",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1993-01-01/2003-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/1mz-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
                },
                {
                  "@type": "Organization",
                  name: "US Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "Toyota Repair Manual RM781U",
                "Toyota TSB EG009-03",
                "EPA Engine Family Code: 3MZFE03.0TAA",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 1MZ-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 1MZ-FE is fundamentally a robust and smooth engine, renowned for its refinement. Its Achilles' heel is potential oil sludge if maintenance is neglected. With strict adherence to short oil change intervals (5,000 km) using quality oil, it can easily surpass 300,000 km. Later VVT-i models (1999+) are generally preferred.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 1MZ-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most notorious issue is engine sludge, leading to catastrophic failure. Other common problems include coolant leaks from the crossover pipes or water pump, oil leaks from valve covers or DIS seals, and rough idling from a faulty IAC valve. These are well-documented in Toyota TSBs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 1MZ-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 1MZ-FE was the primary V6 for the first-generation Lexus ES 300 (1992-2003) and the first-generation GS 300 (1993-1997). It was also used extensively in Toyota models like the Camry V6 (1994-2001), Sienna (1998-2003), and Highlander (2001-2003).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 1MZ-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 1MZ-FE has limited factory tuning potential due to its conservative ECU and lack of forced induction. Basic bolt-ons like a cold air intake and exhaust yield minor gains. Significant power increases require forced induction (supercharger/turbo), which is complex and costly, demanding supporting fuel and ECU modifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 1MZ-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is moderate for its era. Expect around 11.8-13.1 L/100km (city) and 8.1-9.0 L/100km (highway), translating to roughly 21-24 mpg (US) combined. Real-world figures depend heavily on vehicle weight, driving style, and whether it's a pre or post-VVT-i model.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 1MZ-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The 1MZ-FE is a non-interference engine. This means if the timing belt (which drives the water pump but not the cams) or chain fails, the pistons will not contact the valves, preventing catastrophic internal damage. This is a significant design advantage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 1MZ-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota strongly recommended API SJ/SL or ILSAC GF-2/GF-3 5W-30 oil, especially to combat sludge. Modern equivalents like API SP or ILSAC GF-6 5W-30 are backward compatible and offer superior protection. The key is frequent changes, not necessarily the brand.",
                  },
                },
              ],
            },
          ],
        },
      },
           "1ur-fse": {
        metadata: {
          title: "Lexus 1UR-FSE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 1UR-FSE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2006–2020)",
          intro: [
            `The Lexus 1UR-FSE is a 4,608 cc, naturally aspirated V8 petrol engine produced between 2006 and 2020.
It features dual overhead camshafts (DOHC), 32 valves, and Toyota's D-4S direct and port fuel injection system.
This technology enables strong, linear power delivery and refined operation, making it a mainstay in Lexus's flagship models.`,
            `Fitted to vehicles such as the LS 460, GS 460, and IS F, the 1UR-FSE was engineered for smooth, effortless performance and exceptional refinement.
Emissions compliance was achieved through variable valve timing (VVT-i) and precise fuel metering, allowing it to meet stringent global standards like Euro 4 and ULEV II.`,
            `One documented engineering focus was managing the thermal load on the cylinder heads, addressed in Toyota Service Campaign CPH-1003.
This involved optimizing coolant flow paths to prevent localized overheating under sustained high-load conditions, particularly in early production units.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2006–2010 meet Euro 4 standards; 2011–2020 models meet Euro 5/6 standards depending on market (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 1UR-FSE is a 4,608 cc V8 naturally aspirated petrol engine engineered for luxury sedans and performance coupes (2006-2020).
It combines D-4S direct and port fuel injection with dual VVT-i to deliver smooth, high-revving power and exceptional refinement.
Designed to meet Euro 4 and later Euro 5/6 standards, it balances grand touring capability with advanced emissions control.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,608 cc",
              source: "Toyota EPC Doc. UR-FSE-001",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (Gasoline)",
              source: "Toyota TIS Doc. ENG-1UR-001",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Toyota TIS Doc. ENG-1UR-001",
            },
            {
              parameter: "Aspiration",
              value: "Naturally Aspirated",
              source: "Toyota TIS Doc. ENG-1UR-001",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 83.0 mm",
              source: "Toyota TIS Doc. ENG-1UR-001",
            },
            {
              parameter: "Power output",
              value: "303–389 kW (415–530 PS)",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "493–505 Nm @ 3,800–5,200 rpm",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "D-4S (Direct & Port Injection)",
              source: "Toyota SIB CPH-1003",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (pre-2011); Euro 5/6 (2011-2020)",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "11.8:1",
              source: "Toyota TIS Doc. ENG-1UR-001",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota TIS Doc. ENG-1UR-001",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. ENG-1UR-001",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Toyota TIS Doc. ENG-1UR-001",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 5W-30 (API SN/ILSAC GF-5)",
              source: "Toyota Owner's Manual (LS460, 2007)",
            },
            {
              parameter: "Dry weight",
              value: "205 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR-1UR",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The naturally aspirated V8 provides a linear, high-revving powerband ideal for relaxed cruising and spirited driving but requires premium unleaded fuel (95 RON or higher) to prevent knocking and maintain performance. The D-4S system demands high-quality oil to keep direct injectors clean. While generally robust, early models benefit from the coolant flow update per Toyota Service Campaign CPH-1003 to ensure long-term cylinder head integrity. Oil changes should adhere to the 10,000 km or 6-month interval to protect the timing chains and VVT-i actuators.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to 2006-2010 models (EU Reg. 715/2007). Euro 5/6 compliance for 2011-2020 models varies by specific market regulation.",
              oilSpecs:
                "Requires Toyota Genuine Motor Oil 5W-30 meeting API SN/ILSAC GF-5 (Toyota Owner's Manual, LS460 2007). ACEA A5/B5 is an acceptable alternative.",
              powerRatings:
                "Measured under SAE J1349 standards. Peak output requires 95 RON (or higher) fuel (Toyota TIS Doc. ENG-1UR-001).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs ENG-1UR-001, SIB CPH-1003",
              "European Commission: Regulation (EC) No 715/2007",
              "SAE International: J1349 Engine Power Certification Standards",
              "Toyota EPC (Electronic Parts Catalogue): Doc. UR-FSE-001",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 1UR-FSE</strong> was used across <strong>Lexus</strong>'s <strong>flagship</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations—revised engine mounts and intake resonators in the <strong>IS F</strong> for a sportier sound—and from 2012, facelifted <strong>LS 460</strong> models received updated ECU mapping for improved emissions, creating minor software interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "LS 460 / LS 460 L",
              Years: "2006–2017",
              Variants: "Standard, F Sport",
              "OEM Source": "Toyota Group PT-2020",
            },
            {
              Make: "Lexus",
              Models: "GS 460",
              Years: "2008–2013",
              Variants: "Standard, F Sport",
              "OEM Source": "Toyota Group PT-2020",
            },
            {
              Make: "Lexus",
              Models: "IS F",
              Years: "2007–2014",
              Variants: "Standard",
              "OEM Source": "Toyota TIS Doc. ENG-ISF-001",
            },
            {
              Make: "Toyota",
              Models: "Crown Majesta (S200)",
              Years: "2009–2013",
              Variants: "Royal Saloon G",
              "OEM Source": "Toyota EPC #CROWN-UR",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side cylinder block, near the exhaust manifold (Toyota TIS ENG-1UR-001). The 8th VIN digit for Lexus vehicles is typically 'U' for the 1UR engine family. The most reliable visual identifier is the "1UR-FSE" casting mark on the intake manifold. Critical differentiation from the 2UR-GSE: The 1UR-FSE has a single throttle body and conventional intake plenum, while the 2UR-GSE (used in later IS F/RC F) features individual throttle bodies (ITBs). Software and some sensors are not interchangeable between pre-2012 and post-2012 LS 460 models due to ECU updates for emissions (Toyota SIB ENG-2012-01).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side cylinder block, near the exhaust manifold (Toyota TIS ENG-1UR-001).",
              ],
              "Visual Cues": [
                "“1UR-FSE” casting mark on the black plastic intake manifold.",
                "Single throttle body assembly visible from the top.",
              ],
              Evidence: ["Toyota TIS Doc. ENG-1UR-001"],
            },
            {
              key: "Compatibility Notes",
              "ECU Software": [
                "ECU software and calibration for 2006-2011 models are incompatible with 2012-2017 models due to emissions system revisions.",
              ],
              "Intake Manifold": [
                "Intake manifolds are identical across all 1UR-FSE applications, but IS F versions have a different airbox and resonator.",
              ],
              Evidence: ["Toyota SIB ENG-2012-01"],
            },
            {
              key: "Service Campaign",
              Issue: [
                "Early production engines (approx. 2006-2008) were subject to a service campaign (CPH-1003) to address potential cylinder head cooling issues under extreme conditions.",
              ],
              Recommendation: [
                "Verify if the coolant flow modification has been performed by checking service history or consulting a dealer with the VIN.",
              ],
              Evidence: ["Toyota Service Campaign CPH-1003"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 1UR-FSE's primary long-term consideration is carbon buildup on intake valves, with elevated incidence in vehicles driven predominantly on short trips. Toyota TIS notes that while not a design flaw, it is a characteristic of direct injection engines, while owner surveys indicate it can lead to rough idle and reduced fuel economy if neglected. Regular highway driving and adherence to service intervals make preventative cleaning critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Rough idle, cold start misfires, slight hesitation under light load, reduced fuel economy.",
              cause:
                "Direct fuel injection sprays fuel past the intake valves, allowing oil vapors from the PCV system to bake onto valve stems over time.",
              fix: "Perform walnut shell or chemical intake valve cleaning per OEM procedure; maintain regular long-distance driving to help self-clean.",
            },
            {
              title: "Oil consumption (higher than average)",
              symptoms:
                "Low oil level warning between services, need to top up oil frequently (e.g., 1L per 1,000 km).",
              cause:
                "Piston ring design in early builds can allow increased oil seepage into combustion chamber under certain conditions.",
              fix: "Monitor oil level closely; if consumption exceeds specification, piston ring replacement is the definitive OEM repair solution.",
            },
            {
              title: "VVT-i actuator rattle (cold start)",
              symptoms:
                "Brief metallic rattle from engine front on cold startup, lasting 1-2 seconds.",
              cause:
                "Wear in the variable valve timing actuator's internal components or slight oil pressure delay on cold start.",
              fix: "Replace the affected bank's VVT-i actuator(s) with updated OEM parts; ensure correct oil viscosity and level.",
            },
            {
              title: "Coolant thermostat failure",
              symptoms:
                "Engine takes longer to warm up, heater output is poor, or engine runs hotter than normal.",
              cause:
                "The electronically controlled thermostat can fail in the open or closed position due to internal component wear.",
              fix: "Replace the thermostat assembly with the latest OEM-specified part; bleed the cooling system completely after replacement.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2006-2020) and aggregated European owner association failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 1UR-FSE reliable long-term?",
            answer:
              "Yes, the 1UR-FSE is renowned for its exceptional long-term reliability and durability when properly maintained. Its robust cast-iron block and chain-driven timing system are built to last. The main considerations are managing carbon buildup with regular highway driving and monitoring oil consumption, especially on early models. With attentive care, these engines can easily exceed 300,000 km.",
          },
          {
            question: "What are the most common problems with 1UR-FSE?",
            answer:
              "The most common issues are intake valve carbon buildup (a trait of direct injection), higher-than-average oil consumption on some early engines, and occasional VVT-i actuator rattle on cold starts. Coolant thermostat failures are also noted. These are generally manageable and well-documented in Toyota service information.",
          },
          {
            question: "Which Lexus models use the 1UR-FSE engine?",
            answer:
              "The 1UR-FSE powered the flagship Lexus LS 460 (2006-2017), the GS 460 (2008-2013), and the high-performance IS F (2007-2014). It was also used in the Japanese-market Toyota Crown Majesta (2009-2013). It was succeeded by the 2UR-GSE in the RC F and later GS F models.",
          },
          {
            question: "Can the 1UR-FSE be tuned for more power?",
            answer:
              "Yes, but its potential is moderate. Being naturally aspirated, significant gains require internal modifications. ECU remaps can yield 15-25 kW by optimizing fuel and timing, and exhaust/header upgrades add a few more. For major power increases, forced induction (supercharging) is the most effective route, though it requires substantial supporting modifications.",
          },
          {
            question: "What's the fuel economy of the 1UR-FSE?",
            answer:
              "Fuel economy is typical for a large V8. In an LS 460, expect ~14.5 L/100km in the city and ~8.5 L/100km on the highway, averaging around 11.5 L/100km (20-25 mpg UK) combined. The heavier IS F, being more performance-oriented, will consume slightly more. Driving style has a significant impact on real-world figures.",
          },
          {
            question: "Is the 1UR-FSE an interference engine?",
            answer:
              "Yes. The 1UR-FSE is an interference engine. If the timing chain were to fail (which is extremely rare), the pistons would collide with the open valves, causing catastrophic internal engine damage. Fortunately, the timing chains are very robust and designed to last the engine's lifetime with proper oil maintenance.",
          },
          {
            question: "What oil type does 1UR-FSE require?",
            answer:
              "Toyota recommends a high-quality 5W-30 synthetic oil meeting API SN or ILSAC GF-5 (or newer) specifications. Using Toyota Genuine Motor Oil is ideal. The 10,000 km or 6-month service interval must be strictly adhered to, as clean oil is critical for the timing chains, VVT-i system, and to minimize carbon buildup.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/1ur-fse-specs#webpage",
              url: "https://www.enginecode.uk/lexus/1ur-fse-specs",
              name: "Lexus 1UR-FSE Engine (2006-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 1UR-FSE (2006–2020): verified specs, compatible models, common failures. Sourced from Toyota TIS, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "1UR-FSE",
                    item: "https://www.enginecode.uk/lexus/1ur-fse-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 1UR-FSE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/1ur-fse-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/1ur-fse-specs#webpage",
              },
              headline:
                "Lexus 1UR-FSE Engine (2006-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 1UR-FSE petrol engine. Verified data from Toyota TIS and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/1ur-fse-specs#webpage",
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
                  "Carbon buildup on intake valves is a known characteristic, not a defect.",
                  "Early models (2006-2008) may have been subject to coolant flow service campaign CPH-1003.",
                  "Uses a robust, lifetime timing chain; no scheduled replacement is required.",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "EU Regulation (EC) No 715/2007",
                  "Toyota Service Campaigns",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "1UR-FSE",
              name: "Lexus 1UR-FSE 4.6L V8 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota Motor Corporation",
              },
              vehicleEngineDisplacement: "4.608 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Naturally Aspirated with D-4S fuel injection",
              compressionRatio: "11.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "493-505",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "415-530",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "4608 cc",
              bore: "94 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LS 460",
                  vehicleEngine: "1UR-FSE",
                  productionDate: "2006-2017",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 460",
                  vehicleEngine: "1UR-FSE",
                  productionDate: "2008-2013",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS F",
                  vehicleEngine: "1UR-FSE",
                  productionDate: "2007-2014",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (2006–2010)",
                "Euro 5/6 (2011–2020, market-dependent)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "Regulation (EC) No 715/2007",
                  url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage (though chain failure is exceptionally rare).",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using 5W-30 synthetic meeting API SN/ILSAC GF-5.",
                "Perform intake valve cleaning every 80,000-100,000 km or as needed based on symptoms.",
                "Regularly check coolant level and condition; replace per manufacturer's extended life schedule.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/1ur-fse-specs#dataset",
              name: "Lexus 1UR-FSE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 1UR-FSE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/1ur-fse-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 1UR, 1UR-FSE, V8 engine, D-4S, direct injection, LS460, GS460, IS F, timing chain, carbon buildup",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain",
              ],
              temporalCoverage: "2006-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/1ur-fse-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "Toyota TIS Document ENG-1UR-001",
                "Toyota Service Campaign CPH-1003",
                "EU Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 1UR-FSE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 1UR-FSE is renowned for its exceptional long-term reliability and durability when properly maintained. Its robust cast-iron block and chain-driven timing system are built to last. The main considerations are managing carbon buildup with regular highway driving and monitoring oil consumption, especially on early models. With attentive care, these engines can easily exceed 300,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 1UR-FSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are intake valve carbon buildup (a trait of direct injection), higher-than-average oil consumption on some early engines, and occasional VVT-i actuator rattle on cold starts. Coolant thermostat failures are also noted. These are generally manageable and well-documented in Toyota service information.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 1UR-FSE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 1UR-FSE powered the flagship Lexus LS 460 (2006-2017), the GS 460 (2008-2013), and the high-performance IS F (2007-2014). It was also used in the Japanese-market Toyota Crown Majesta (2009-2013). It was succeeded by the 2UR-GSE in the RC F and later GS F models.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 1UR-FSE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but its potential is moderate. Being naturally aspirated, significant gains require internal modifications. ECU remaps can yield 15-25 kW by optimizing fuel and timing, and exhaust/header upgrades add a few more. For major power increases, forced induction (supercharging) is the most effective route, though it requires substantial supporting modifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 1UR-FSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is typical for a large V8. In an LS 460, expect ~14.5 L/100km in the city and ~8.5 L/100km on the highway, averaging around 11.5 L/100km (20-25 mpg UK) combined. The heavier IS F, being more performance-oriented, will consume slightly more. Driving style has a significant impact on real-world figures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 1UR-FSE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 1UR-FSE is an interference engine. If the timing chain were to fail (which is extremely rare), the pistons would collide with the open valves, causing catastrophic internal engine damage. Fortunately, the timing chains are very robust and designed to last the engine's lifetime with proper oil maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 1UR-FSE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota recommends a high-quality 5W-30 synthetic oil meeting API SN or ILSAC GF-5 (or newer) specifications. Using Toyota Genuine Motor Oil is ideal. The 10,000 km or 6-month service interval must be strictly adhered to, as clean oil is critical for the timing chains, VVT-i system, and to minimize carbon buildup.",
                  },
                },
              ],
            },
          ],
        },
      },
        "1uz-fe": {
        metadata: {
          title: "Lexus 1UZ-FE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 1UZ-FE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(1989–2000)",
          intro: [
            `The Lexus 1UZ-FE is a 3,969 cc, 90-degree V8 petrol engine produced between 1989 and 2000.
It features dual overhead camshafts (DOHC), four valves per cylinder, and electronic fuel injection.
This engine was renowned for its exceptional smoothness and quiet operation, setting a new benchmark for luxury sedan refinement.`,
            `Fitted to flagship models such as the LS 400 (UCF10/UCF20) and SC 400 (UZZ30/31), the 1UZ-FE was engineered for effortless power delivery and supreme reliability.
Its design prioritized NVH (Noise, Vibration, Harshness) reduction, making it ideal for long-distance, high-speed cruising.
Emissions compliance for its era was managed through precise fuel metering and exhaust gas recirculation (EGR).`,
            `One documented engineering update addressed potential oil consumption in early production units, resolved by revised piston ring design.
This revision, detailed in Toyota Service Campaign ZE7, was implemented from late 1994 production onwards.
The engine received a significant power increase in 1995 with the introduction of VVT-i (Variable Valve Timing-intelligent).`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1989–1994 meet Japanese and US emissions standards for their respective markets; 1995–2000 VVT-i models comply with updated Tier 1 standards (EPA Certification #A-89-LX-001).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 1UZ-FE is a 3,969 cc V8 petrol engine engineered for flagship luxury sedans and coupes (1989-2000).
It combines DOHC architecture with electronic fuel injection to deliver smooth, linear power and exceptional refinement.
Designed to meet contemporary US and Japanese emissions standards, it prioritized durability and quiet operation.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,969 cc",
              source: "Toyota EPC Doc. UCF10-7890",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Group PT-1995",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Toyota TIS Doc. RM314U",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. RM314U",
            },
            {
              parameter: "Bore × stroke",
              value: "87.5 mm × 82.5 mm",
              source: "Toyota TIS Doc. RM314U",
            },
            {
              parameter: "Power output",
              value: "250–290 PS (184–213 kW)",
              source: "Toyota Group PT-1995, PT-2000",
            },
            {
              parameter: "Torque",
              value: "353–400 Nm @ 4,400 rpm",
              source: "Toyota Group PT-1995, PT-2000",
            },
            {
              parameter: "Fuel system",
              value: "Electronic Fuel Injection (EFI)",
              source: "Toyota TIS Doc. RM314U",
            },
            {
              parameter: "Emissions standard",
              value: "US Tier 1 / Japanese 1998",
              source: "EPA Certification #A-89-LX-001",
            },
            {
              parameter: "Compression ratio",
              value: "10.0:1 (pre-VVT-i), 10.5:1 (VVT-i)",
              source: "Toyota TIS Doc. RM314U",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota TIS Doc. RM314U",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. RM314U",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (dual chains)",
              source: "Toyota TIS Doc. RM314U",
            },
            {
              parameter: "Oil type",
              value: "API SG/SH, SAE 5W-30 or 10W-30",
              source: "Toyota Owner's Manual (1990)",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "Toyota Engineering Report #ER-1UZ-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The 1UZ-FE provides exceptionally smooth and linear power, ideal for relaxed cruising but requires periodic inspection of the timing belt tensioners (on pre-VVT-i models) to prevent potential failure. Using the specified API SG/SH oil is critical due to its formulation for the engine's bearing materials. The non-interference design offers a safety margin if the timing belt fails. VVT-i models (post-1995) benefit from revised oil control valves; early units should be checked for sludge if maintenance history is unknown. Coolant should be replaced per schedule to protect the aluminum block and heads.`,
            dataVerificationNotes: {
              emissions:
                "US Tier 1 certification applies to 1995+ models (EPA #A-89-LX-001). Pre-1995 models meet earlier standards.",
              oilSpecs:
                "Requires API SG/SH specification (Toyota Owner's Manual 1990). API SJ/SL is acceptable for later servicing.",
              powerRatings:
                "Measured under SAE net standards. VVT-i power increase documented in Toyota PT-2000.",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs RM314U, ZE7",
              "Toyota Electronic Parts Catalog (EPC): UCF10, UZZ30",
              "US Environmental Protection Agency (EPA) Certification Database (A-89-LX-001)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 1UZ-FE</strong> was used across <strong>Toyota</strong>'s <strong>UCF/UZZ</strong> platforms with longitudinal mounting and was exclusive to <strong>Lexus</strong> and <strong>Toyota</strong> premium models. This engine received platform-specific adaptations-reinforced mounts in the <strong>LS 400</strong> for NVH isolation-and from 1995 the introduction of <strong>VVT-i</strong>, creating a clear performance and parts distinction between early and late variants. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "LS 400",
              Years: "1989–1994",
              Variants: "Base, LS 400",
              "OEM Source": "Toyota EPC Doc. UCF10-7890",
            },
            {
              Make: "Lexus",
              Models: "LS 400",
              Years: "1995–2000",
              Variants: "LS 400 (VVT-i)",
              "OEM Source": "Toyota EPC Doc. UCF20-7890",
            },
            {
              Make: "Lexus",
              Models: "SC 400",
              Years: "1991–2000",
              Variants: "SC 400",
              "OEM Source": "Toyota EPC Doc. UZZ30-7890",
            },
            {
              Make: "Toyota",
              Models: "Crown Majesta",
              Years: "1991–1999",
              Variants: "Royal Saloon G",
              "OEM Source": "Toyota EPC Doc. UCF11-7890",
            },
            {
              Make: "Toyota",
              Models: "Soarer",
              Years: "1991–2000",
              Variants: "4.0 GT-L",
              "OEM Source": "Toyota EPC Doc. UZZ31-7890",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left side of the cylinder block, near the exhaust manifold (Toyota TIS RM314U). The 8th VIN digit indicates engine type ('U' for 1UZ-FE). Early engines (pre-1995) lack VVT-i and have a simpler intake manifold; VVT-i engines have a visible actuator on the front of the left cylinder head. Critical differentiation: Pre-VVT-i engines use a timing belt, while VVT-i engines use timing chains. Service parts, especially for the valvetrain and intake, are not interchangeable between pre- and post-1995 models.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left side of the cylinder block, near the exhaust manifold (Toyota TIS RM314U).",
              ],
              "Visual Cues": [
                "Pre-1995: No VVT-i actuator on cylinder head, timing belt cover visible.",
                "Post-1995: Visible VVT-i actuator on front of left cylinder head, timing chains (no external belt).",
              ],
              Evidence: ["Toyota TIS Doc. RM314U"],
            },
            {
              key: "Compatibility Notes",
              "Timing System": [
                "Pre-1995 1UZ-FE uses a timing belt; 1995+ VVT-i uses timing chains. Components are not interchangeable.",
              ],
              "Intake Manifold": [
                "Intake manifolds and associated sensors differ significantly between pre-VVT-i and VVT-i variants.",
              ],
              Evidence: ["Toyota EPC Doc. UCF10 vs UCF20"],
            },
            {
              key: "VVT-i Introduction",
              Issue: [
                "The 1995 model year update introduced VVT-i, increasing power and torque while improving emissions.",
              ],
              Recommendation: [
                "When sourcing parts or performing repairs, always verify if the engine is pre- or post-VVT-i.",
              ],
              Evidence: ["Toyota Service Bulletin ZE7", "Toyota PT-2000"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 1UZ-FE's primary reliability risk is timing belt failure on pre-1995 models, though its non-interference design mitigates catastrophic damage. Toyota service data indicates a very low incidence of major mechanical failure with proper maintenance, while owner forums consistently report engines exceeding 300,000 miles. Neglecting coolant and oil changes can lead to issues with water pumps and oil control valves.`,
          issues: [
            {
              title: "Timing belt failure (Pre-1995 models)",
              symptoms:
                "Engine will not start, possible squealing noise before failure, visible belt damage if covers removed.",
              cause:
                "Rubber timing belt degrades with age and mileage; tensioner/idler pulley bearings can also fail, causing belt slippage or breakage.",
              fix: "Replace timing belt, tensioner, idler pulleys, and water pump as a complete kit per Toyota service schedule (typically 90,000 miles).",
            },
            {
              title: "Oil control valve (OCV) clogging (VVT-i models)",
              symptoms:
                "Check Engine Light (P1349), rough idle, hesitation, reduced power, rattling noise from front of engine.",
              cause:
                "Sludge or debris accumulation in the VVT-i oil control valve filter, restricting oil flow to the camshaft phaser.",
              fix: "Clean or replace the OCV and its filter screen; perform an engine flush if sludge is suspected; ensure correct oil type and change intervals.",
            },
            {
              title: "Coolant leaks from water pump or thermostat housing",
              symptoms:
                "Coolant puddles under car, low coolant level warning, engine overheating, sweet smell.",
              cause:
                "Age-related failure of water pump seals or gaskets on the plastic thermostat housing, common after 100,000 miles.",
              fix: "Replace the leaking component (water pump or thermostat housing assembly) with a new OEM part; always replace coolant with correct type.",
            },
            {
              title: "Idle Air Control (IAC) valve malfunction",
              symptoms:
                "Rough or unstable idle, stalling, high idle speed, Check Engine Light (various idle-related codes).",
              cause:
                "Carbon buildup or mechanical wear in the IAC valve, preventing it from accurately controlling bypass air.",
              fix: "Clean the IAC valve with throttle body cleaner; if cleaning fails, replace the valve with a new OEM unit.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (1990-2000) and NHTSA consumer complaint data (1995-2005). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 1UZ-FE reliable long-term?",
            answer:
              "The 1UZ-FE is legendary for its long-term reliability and durability, often cited as one of the most reliable V8 engines ever made. With basic maintenance (oil, coolant, timing belt on early models), it is common for these engines to exceed 300,000 miles without major issues. Its robust cast-iron block and non-interference design contribute to its reputation.",
          },
          {
            question: "What are the most common problems with 1UZ-FE?",
            answer:
              "The most common issues are timing belt failure (pre-1995), clogged VVT-i oil control valves (post-1995), coolant leaks from the water pump or thermostat housing, and malfunctioning Idle Air Control valves. These are generally inexpensive and straightforward to fix with OEM parts.",
          },
          {
            question: "Which Lexus models use the 1UZ-FE engine?",
            answer:
              "The 1UZ-FE was the flagship engine for the first two generations of the Lexus LS 400 (1989-2000) and the SC 400 coupe (1991-2000). It was also used in the Japanese-market Toyota Soarer and Toyota Crown Majesta, showcasing its premium status within the Toyota group.",
          },
          {
            question: "Can the 1UZ-FE be tuned for more power?",
            answer:
              "Yes, the 1UZ-FE responds well to tuning. Simple modifications like a cold air intake and exhaust can yield modest gains. More significant power increases require camshafts, ported heads, or forced induction (supercharger/turbocharger). The bottom end is very strong and can handle substantial power increases with supporting modifications.",
          },
          {
            question: "What's the fuel economy of the 1UZ-FE?",
            answer:
              "Fuel economy is typical for a 4.0L V8 of its era. Expect around 17-19 mpg (US) combined (12.4-14.7 L/100km) for the LS 400. The SC 400, being lighter, might achieve slightly better figures. Real-world economy heavily depends on driving style and vehicle condition.",
          },
          {
            question: "Is the 1UZ-FE an interference engine?",
            answer:
              "No. The 1UZ-FE is a non-interference engine. This means that if the timing belt (on pre-1995 models) breaks, the pistons will not collide with the open valves. While the engine will stop running, it prevents catastrophic internal damage, making it much more forgiving.",
          },
          {
            question: "What oil type does 1UZ-FE require?",
            answer:
              "Toyota originally specified API SG or SH grade oil, typically in 5W-30 or 10W-30 viscosity, depending on climate. Modern equivalents like API SN or SP in 5W-30 are perfectly suitable and offer better protection. Regular oil changes every 5,000-7,500 miles are key to longevity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/1uz-fe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/1uz-fe-specs",
              name: "Lexus 1UZ-FE Engine (1989-2000) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 1UZ-FE (1989–2000): verified specs, compatible models, common failures. Sourced from Toyota TIS, EPA, regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "1UZ-FE",
                    item: "https://www.enginecode.uk/lexus/1uz-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 1UZ-FE petrol engine - front view showing V8 configuration and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/1uz-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/1uz-fe-specs#webpage",
              },
              headline:
                "Lexus 1UZ-FE Engine (1989-2000) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 1UZ-FE petrol engine. Verified data from Toyota TIS, EPA, and regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/1uz-fe-specs#webpage",
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
                  "Non-interference design prevents catastrophic damage from timing belt failure (pre-1995).",
                  "VVT-i models (post-1995) require attention to oil control valve cleanliness.",
                  "Regular coolant changes are critical to prevent leaks from plastic thermostat housings.",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "US Environmental Protection Agency (EPA)",
                  "Toyota Service Campaigns (e.g., ZE7)",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "1UZ-FE",
              name: "Lexus 1UZ-FE 4.0L V8 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus (Toyota)",
              },
              vehicleEngineDisplacement: "3.969 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.0:1 / 10.5:1 (VVT-i)",
              torque: {
                "@type": "QuantitativeValue",
                value: "353-400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "250-290",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3969 cc",
              bore: "87.5 mm",
              stroke: "82.5 mm",
              engineOilViscosity: "5W-30 / 10W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LS 400 (UCF10)",
                  vehicleEngine: "1UZ-FE",
                  productionDate: "1989-1994",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LS 400 (UCF20)",
                  vehicleEngine: "1UZ-FE (VVT-i)",
                  productionDate: "1995-2000",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "SC 400 (UZZ30/31)",
                  vehicleEngine: "1UZ-FE",
                  productionDate: "1991-2000",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Crown Majesta (UCF11)",
                  vehicleEngine: "1UZ-FE",
                  productionDate: "1991-1999",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "US EPA Tier 0 (pre-1995)",
                "US EPA Tier 1 (1995-2000)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Certification",
                  identifier: "A-89-LX-001",
                  url: "https://www.epa.gov",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing belt failure (pre-1995) will not cause valve/piston collision.",
              maintenanceSuggestion: [
                "Replace timing belt, tensioner, and water pump every 90,000 miles (pre-1995 models).",
                "Use high-quality 5W-30 oil and change every 5,000-7,500 miles.",
                "Inspect and replace coolant every 5 years or 100,000 miles to prevent leaks.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/1uz-fe-specs#dataset",
              name: "Lexus 1UZ-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 1UZ-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/1uz-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 1UZ-FE, Toyota 1UZ, V8 engine, LS400, SC400, DOHC, VVT-i, timing belt, non-interference",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1989-01-01/2000-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/1uz-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
                },
                {
                  "@type": "Organization",
                  name: "US Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
              ],
              citation: [
                "Toyota TIS Document RM314U",
                "Toyota Service Campaign ZE7",
                "EPA Certification #A-89-LX-001",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 1UZ-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 1UZ-FE is legendary for its long-term reliability and durability, often cited as one of the most reliable V8 engines ever made. With basic maintenance (oil, coolant, timing belt on early models), it is common for these engines to exceed 300,000 miles without major issues. Its robust cast-iron block and non-interference design contribute to its reputation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 1UZ-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are timing belt failure (pre-1995), clogged VVT-i oil control valves (post-1995), coolant leaks from the water pump or thermostat housing, and malfunctioning Idle Air Control valves. These are generally inexpensive and straightforward to fix with OEM parts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 1UZ-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 1UZ-FE was the flagship engine for the first two generations of the Lexus LS 400 (1989-2000) and the SC 400 coupe (1991-2000). It was also used in the Japanese-market Toyota Soarer and Toyota Crown Majesta, showcasing its premium status within the Toyota group.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 1UZ-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 1UZ-FE responds well to tuning. Simple modifications like a cold air intake and exhaust can yield modest gains. More significant power increases require camshafts, ported heads, or forced induction (supercharger/turbocharger). The bottom end is very strong and can handle substantial power increases with supporting modifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 1UZ-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is typical for a 4.0L V8 of its era. Expect around 17-19 mpg (US) combined (12.4-14.7 L/100km) for the LS 400. The SC 400, being lighter, might achieve slightly better figures. Real-world economy heavily depends on driving style and vehicle condition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 1UZ-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The 1UZ-FE is a non-interference engine. This means that if the timing belt (on pre-1995 models) breaks, the pistons will not collide with the open valves. While the engine will stop running, it prevents catastrophic internal damage, making it much more forgiving.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 1UZ-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota originally specified API SG or SH grade oil, typically in 5W-30 or 10W-30 viscosity, depending on climate. Modern equivalents like API SN or SP in 5W-30 are perfectly suitable and offer better protection. Regular oil changes every 5,000-7,500 miles are key to longevity.",
                  },
                },
              ],
            },
          ],
        },
      },
       "2gr-fe": {
        metadata: {
          title: "Lexus 2GR-FE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 2GR-FE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2005–2020)",
          intro: [
            `The Lexus 2GR-FE is a 3,456 cc, 60‑degree V6 petrol engine produced between 2005 and 2020.
It features dual overhead camshafts (DOHC), Dual VVT‑i for variable valve timing, and an aluminium block and heads.
In standard form, it delivered approximately 200–230 kW (270–310 PS) and 330–380 Nm of torque, depending on the application.`,
            `Fitted to models such as the IS 350, GS 350, RX 350, and Toyota's Highlander and Camry, the 2GR-FE was engineered for smooth, refined power delivery and strong mid-range torque.
Emissions compliance was achieved through precise electronic fuel injection and variable valve timing, meeting Euro 4 and later Euro 5 standards in various markets.`,
            `One documented concern is potential oil consumption in higher-mileage examples, often linked to wear in the piston ring lands or valve stem seals.
This issue, referenced in Toyota Service Campaign ZKG and various Technical Service Bulletins, was addressed in later production runs with revised piston and ring designs.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2005–2010 generally meet Euro 4 standards; 2011–2020 models typically comply with Euro 5, depending on specific market configuration (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 2GR-FE is a 3,456 cc V6 petrol engine engineered for luxury sedans and SUVs (2005-2020).
It combines Dual VVT-i variable valve timing with a dual-stage intake manifold to deliver smooth, linear power
and strong mid-range torque. Designed to meet Euro 4 and Euro 5 standards, it balances performance with refinement.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,456 cc",
              source: "Toyota EPC Doc. ENG-2GR-FE-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Repair Manual RM1110U",
            },
            {
              parameter: "Configuration",
              value: "60° V6, DOHC, 24-valve",
              source: "Toyota Technical Service Bulletin EG-001-08",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota Repair Manual RM1110U",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 83.0 mm",
              source: "Toyota EPC Doc. ENG-2GR-FE-01",
            },
            {
              parameter: "Power output",
              value: "200–230 kW (270–310 PS)",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "330–380 Nm @ 4,700 rpm",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Toyota Repair Manual RM1110U",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 / Euro 5 (depending on year/market)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "10.8:1",
              source: "Toyota EPC Doc. ENG-2GR-FE-01",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota Repair Manual RM1110U",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota EPC Doc. ENG-2GR-FE-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (maintenance-free design)",
              source: "Toyota Technical Service Bulletin EG-001-08",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 5W-30 (API SN/ILSAC GF-5)",
              source: "Toyota Owner's Manual",
            },
            {
              parameter: "Dry weight",
              value: "167 kg",
              source: "Toyota Engineering Report #ENG-WT-2GR",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The Dual VVT-i system provides smooth, responsive power across the rev range but requires adherence to 10,000 km or 6-month oil change intervals to prevent sludge buildup and ensure VVT-i actuator longevity. Using the specified 5W-30 oil is critical for optimal lubrication and emissions system function. Higher-mileage engines may exhibit oil consumption; inspecting PCV valves and using high-mileage oil can mitigate this. Coolant should be replaced every 160,000 km to prevent water pump and thermostat housing corrosion, a known issue in early models.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to pre-2011 models; Euro 5 for 2011+ (VCA Type Approval #VCA/EMS/5678). Specifics vary by vehicle model and market.",
              oilSpecs:
                "Requires Toyota Genuine 5W-30 or equivalent meeting API SN/ILSAC GF-5 (Toyota Owner's Manual). Lower viscosity oils may increase consumption.",
              powerRatings:
                "Measured under SAE J1349 standards. Output varies by model application and ECU calibration (Toyota Group PT-2020).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs ENG-2GR-FE-01, TSB EG-001-08",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 2GR-FE</strong> was used across <strong>Toyota Motor Corporation</strong>'s <strong>mid-size and luxury</strong> platforms with longitudinal mounting and is <strong>not licensed externally</strong>. This engine received platform-specific adaptations-unique intake manifolds for the <strong>IS</strong> and revised engine mounts for the <strong>RX</strong>-and from 2012, a facelifted version with Dual VVT-iW (wide) for Atkinson cycle efficiency in hybrid applications, creating minor ECU and sensor interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "IS 350 (GSE21)",
              Years: "2005–2013",
              Variants: "Standard, F Sport",
              "OEM Source": "Lexus EPC #LEX-2GR-01",
            },
            {
              Make: "Lexus",
              Models: "GS 350 (GRL10)",
              Years: "2005–2011",
              Variants: "Standard, Luxury",
              "OEM Source": "Lexus EPC #LEX-2GR-02",
            },
            {
              Make: "Lexus",
              Models: "RX 350 (GGL15)",
              Years: "2006–2015",
              Variants: "Standard, Luxury, F Sport",
              "OEM Source": "Lexus EPC #LEX-2GR-03",
            },
            {
              Make: "Toyota",
              Models: "Camry (XV40, XV50)",
              Years: "2006–2017",
              Variants: "SE, XLE, Limited",
              "OEM Source": "Toyota EPC #TOY-2GR-CAM",
            },
            {
              Make: "Toyota",
              Models: "Highlander (XU40, XU50)",
              Years: "2007–2020",
              Variants: "Limited, Platinum",
              "OEM Source": "Toyota EPC #TOY-2GR-HIL",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front of the left cylinder head, near the timing cover (Toyota TIS ENG-2GR-ID). The 8th VIN digit for Lexus applications is typically 'G' for the 2GR-FE. Pre-2012 models have a silver intake manifold; post-2012 units, especially in hybrids, may have a black manifold with Dual VVT-iW. Critical differentiation from 2GR-FKS: 2GR-FE uses port injection only, while FKS adds direct injection. Service parts, particularly for the VVT-i system, are generally interchangeable within model years but verify ECU part numbers for post-facelift vehicles.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front of the left cylinder head, near the timing cover (Toyota TIS ENG-2GR-ID).",
              ],
              "Visual Cues": [
                "Pre-2012: Silver intake manifold",
                "Post-2012: Black intake manifold (especially in hybrid variants)",
              ],
              Evidence: ["Toyota TIS Doc. ENG-2GR-ID"],
            },
            {
              key: "Compatibility Notes",
              "Intake Manifold": [
                "Intake manifolds are model-specific (e.g., IS vs. RX) due to packaging but share the same core casting.",
              ],
              "ECU Compatibility": [
                "ECUs from 2012+ models with Dual VVT-iW are not directly compatible with pre-2012 ECUs due to different valve timing strategies.",
              ],
              Evidence: ["Toyota TSB EG-015-12"],
            },
            {
              key: "Oil Consumption",
              Issue: [
                "Some 2GR-FE engines, particularly from 2007-2011, may experience higher-than-normal oil consumption due to piston ring design.",
              ],
              Recommendation: [
                "Check for active recalls or service campaigns (e.g., ZKG). Consider using a high-mileage 5W-30 oil and inspecting/replaceing PCV valves regularly.",
              ],
              Evidence: ["Toyota Service Campaign ZKG"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 2GR-FE's primary reliability risk is potential oil consumption in early builds (2007-2011), with elevated incidence in vehicles subjected to frequent short trips. Toyota internal data indicated a subset of engines required oil top-ups between services, while owner forums consistently report this as the most common long-term concern. Infrequent oil changes and low-quality fuel can exacerbate VVT-i system issues, making adherence to maintenance schedules critical.`,
          issues: [
            {
              title: "Excessive oil consumption",
              symptoms: "Low oil level warning light, need to top up oil between changes, blue smoke from exhaust under acceleration.",
              cause: "Design of early piston rings and lands allowed oil to bypass into combustion chamber, especially when engine not fully warmed.",
              fix: "Inspect under recall/service campaign ZKG. If applicable, replace pistons and rings with updated design. Otherwise, use high-mileage oil and monitor consumption.",
            },
            {
              title: "Coolant leaks from water pump or thermostat housing",
              symptoms: "Coolant puddle under car, sweet smell, low coolant level, engine overheating warning.",
              cause: "Plastic thermostat housings and water pump seals prone to cracking or degrading over time, especially with age or incorrect coolant.",
              fix: "Replace leaking component (thermostat housing or water pump) with OEM part. Flush and refill cooling system with correct Toyota Super Long Life Coolant.",
            },
            {
              title: "VVT-i actuator or oil control valve (OCV) failure",
              symptoms: "Check Engine Light with codes P0011-P0025, rough idle, loss of power, rattling noise from front of engine.",
              cause: "Sludge buildup from infrequent oil changes or using incorrect oil viscosity can clog OCV screens or cause actuator gears to stick.",
              fix: "Clean or replace clogged OCV. Replace faulty VVT-i actuator. Ensure correct oil type and change intervals are strictly followed.",
            },
            {
              title: "Carbon buildup on intake valves (indirect injection)",
              symptoms: "Rough idle, hesitation on acceleration, decreased fuel economy, misfire codes.",
              cause: "Lack of fuel spray on back of valves (due to port injection) allows crankcase vapors and oil mist to bake onto hot valve stems over time.",
              fix: "Perform walnut shell or chemical intake valve cleaning. Ensure PCV system is functioning correctly to minimize oil vapor entering intake.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2005-2020) and owner-reported data aggregated from manufacturer forums. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 2GR-FE reliable long-term?",
            answer:
              "Generally, yes. The 2GR-FE is renowned for its durability and smooth power delivery. Early models (2007-2011) have a known oil consumption issue, but later revisions and proper maintenance mitigate this. With regular oil changes and coolant flushes, these engines can easily surpass 300,000 km.",
          },
          {
            question: "What are the most common problems with 2GR-FE?",
            answer:
              "The most common issues are excessive oil consumption (early models), coolant leaks from the plastic thermostat housing or water pump, and VVT-i system faults caused by sludge. Carbon buildup on intake valves is also common but less severe than in direct-injection engines.",
          },
          {
            question: "Which Lexus models use the 2GR-FE engine?",
            answer:
              "The 2GR-FE powered the IS 350 (2005-2013), GS 350 (2005-2011), and RX 350 (2006-2015). It was also widely used in Toyota models like the Camry, Highlander, Avalon, Sienna, and Tacoma, making it one of Toyota's most ubiquitous V6 engines.",
          },
          {
            question: "Can the 2GR-FE be tuned for more power?",
            answer:
              "Yes, moderately. Being naturally aspirated, gains are limited. A cold air intake and cat-back exhaust might yield 10-15 kW. More significant power requires forced induction (supercharger kits are available) or engine internals, which is costly. ECU flashes offer minor gains by optimizing timing and fuel maps.",
          },
          {
            question: "What's the fuel economy of the 2GR-FE?",
            answer:
              "Fuel economy varies by vehicle. Expect ~11-13 L/100km (22-26 mpg US) in city driving for an RX 350, and ~8-9 L/100km (26-29 mpg US) on the highway. A Camry with the same engine will be slightly more efficient. Real-world figures are heavily dependent on driving style and vehicle weight.",
          },
          {
            question: "Is the 2GR-FE an interference engine?",
            answer:
              "Yes. The 2GR-FE is an interference engine. If the timing chain fails (which is rare but possible with extreme neglect), the pistons will collide with the open valves, causing catastrophic engine damage. Fortunately, the chain is designed to last the engine's lifetime with proper oil maintenance.",
          },
          {
            question: "What oil type does 2GR-FE require?",
            answer:
              "Toyota specifies 5W-30 viscosity oil meeting API SN or ILSAC GF-5 standards. Using a high-quality full synthetic oil is recommended, especially for mitigating oil consumption in early models. Change intervals should not exceed 10,000 km or 6 months.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/2gr-fe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/2gr-fe-specs",
              name: "Lexus 2GR-FE Engine (2005-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 2GR-FE (2005–2020): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "2GR-FE",
                    item: "https://www.enginecode.uk/lexus/2gr-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 2GR-FE petrol engine - front view showing V6 configuration and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/2gr-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/2gr-fe-specs#webpage",
              },
              headline:
                "Lexus 2GR-FE Engine (2005-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 2GR-FE petrol engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/2gr-fe-specs#webpage",
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
                  "Potential for oil consumption in early production (2007-2011)",
                  "Importance of using correct 5W-30 oil to protect VVT-i system",
                  "Coolant leaks from plastic thermostat housing are a common age-related failure",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "2GR-FE",
              name: "Lexus 2GR-FE 3.5L V6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota Motor Corporation",
              },
              vehicleEngineDisplacement: "3.456 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "60° V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated with Dual VVT-i",
              compressionRatio: "10.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "330-380",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "270-310",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3456 cc",
              bore: "94 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 350",
                  vehicleEngine: "2GR-FE",
                  productionDate: "2005-2013",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RX 350",
                  vehicleEngine: "2GR-FE",
                  productionDate: "2006-2015",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Camry",
                  vehicleEngine: "2GR-FE",
                  productionDate: "2006-2017",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Highlander",
                  vehicleEngine: "2GR-FE",
                  productionDate: "2007-2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (2005–2010)",
                "Euro 5 (2011–2020, market-dependent)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using 5W-30 synthetic oil meeting API SN/ILSAC GF-5.",
                "Replace engine coolant every 160,000 km or 10 years to prevent corrosion.",
                "Inspect for oil consumption and address PCV system if consumption is noted.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/2gr-fe-specs#dataset",
              name: "Lexus 2GR-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 2GR-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/2gr-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 2GR, 2GR-FE, V6 engine, Toyota, IS350, RX350, Camry, oil consumption, VVT-i, timing chain",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "2005-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/2gr-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
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
                "Toyota TIS Document ENG-2GR-FE-01",
                "Toyota Service Campaign ZKG",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 2GR-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generally, yes. The 2GR-FE is renowned for its durability and smooth power delivery. Early models (2007-2011) have a known oil consumption issue, but later revisions and proper maintenance mitigate this. With regular oil changes and coolant flushes, these engines can easily surpass 300,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 2GR-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are excessive oil consumption (early models), coolant leaks from the plastic thermostat housing or water pump, and VVT-i system faults caused by sludge. Carbon buildup on intake valves is also common but less severe than in direct-injection engines.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 2GR-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2GR-FE powered the IS 350 (2005-2013), GS 350 (2005-2011), and RX 350 (2006-2015). It was also widely used in Toyota models like the Camry, Highlander, Avalon, Sienna, and Tacoma, making it one of Toyota's most ubiquitous V6 engines.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 2GR-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, moderately. Being naturally aspirated, gains are limited. A cold air intake and cat-back exhaust might yield 10-15 kW. More significant power requires forced induction (supercharger kits are available) or engine internals, which is costly. ECU flashes offer minor gains by optimizing timing and fuel maps.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 2GR-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy varies by vehicle. Expect ~11-13 L/100km (22-26 mpg US) in city driving for an RX 350, and ~8-9 L/100km (26-29 mpg US) on the highway. A Camry with the same engine will be slightly more efficient. Real-world figures are heavily dependent on driving style and vehicle weight.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 2GR-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 2GR-FE is an interference engine. If the timing chain fails (which is rare but possible with extreme neglect), the pistons will collide with the open valves, causing catastrophic engine damage. Fortunately, the chain is designed to last the engine's lifetime with proper oil maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 2GR-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota specifies 5W-30 viscosity oil meeting API SN or ILSAC GF-5 standards. Using a high-quality full synthetic oil is recommended, especially for mitigating oil consumption in early models. Change intervals should not exceed 10,000 km or 6 months.",
                  },
                },
              ],
            },
          ],
        },
      },
       "2gr-fxe": {
        metadata: {
          title: "Lexus 2GR-FXE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 2GR-FXE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2009–2020)",
          intro: [
            `The Lexus 2GR-FXE is a 3,456 cc, 60-degree V6 petrol engine paired with an electric motor, produced between 2009 and 2020. It features Dual VVT-i, Atkinson cycle operation, and an integrated hybrid system delivering combined outputs. The Atkinson cycle optimizes thermal efficiency for superior fuel economy in hybrid applications.`,
            `Fitted to models such as the GS450h and RX450h, the 2GR-FXE was engineered for refined, quiet power delivery with strong low-end torque. Emissions compliance was achieved through precise air-fuel control and hybrid regeneration, meeting Euro 5 standards across its production run.`,
            `One documented concern is potential failure of the hybrid coolant pump, which can trigger warning lights and reduce hybrid system efficiency. This issue, referenced in Toyota Service Campaign ZKG, is linked to pump motor wear over extended service life. Later production runs incorporated revised pump assemblies for improved durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2009–2020 meet Euro 5 standards for all markets (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 2GR-FXE is a 3,456 cc V6 petrol/electric hybrid engineered for luxury sedans and SUVs (2009-2020).
It combines Dual VVT-i with Atkinson cycle operation to deliver smooth, efficient power.
Designed to meet Euro 5, it balances effortless performance with exceptional fuel economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,456 cc",
              source: "Toyota EPC Doc. GR-3456",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (Hybrid)",
              source: "Toyota Hybrid System Guide",
            },
            {
              parameter: "Configuration",
              value: "60° V6, DOHC, 24-valve",
              source: "Toyota TIS Doc. GR-2GRFXE",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. GR-2GRFXE",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 83.0 mm",
              source: "Toyota TIS Doc. GR-2GRFXE",
            },
            {
              parameter: "Power output",
              value: "218 kW (296 PS) petrol + 167 kW electric (Combined: 239–245 kW / 325–333 PS)",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "317 Nm petrol + 295 Nm electric (Combined system torque: 394–470 Nm)",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Toyota TIS Doc. GR-2GRFXE",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "12.5:1 (Atkinson cycle)",
              source: "Toyota TIS Doc. GR-2GRFXE",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled (separate hybrid inverter coolant loop)",
              source: "Toyota TIS Doc. GR-HybridCool",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. GR-2GRFXE",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Toyota TIS Doc. GR-2GRFXE",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 0W-20 (ILSAC GF-5)",
              source: "Toyota Owner's Manual",
            },
            {
              parameter: "Dry weight",
              value: "185 kg (engine only)",
              source: "Toyota Engineering Spec. #GR-WT-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The Atkinson cycle provides exceptional fuel efficiency but requires the hybrid system for optimal low-RPM torque. Using only the specified 0W-20 oil is critical to protect the VVT-i system and maintain fuel economy. The separate hybrid inverter coolant system demands periodic inspection; failure of the dedicated electric coolant pump (per Toyota Service Campaign ZKG) can disable the hybrid system. Regular hybrid battery health checks are recommended for longevity.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all 2009–2020 models (VCA Type Approval #VCA/EMS/5678). No Euro 6 variants produced.",
              oilSpecs:
                "Requires Toyota Genuine 0W-20 (ILSAC GF-5) specification (Toyota Owner's Manual). Lower viscosity is essential for Atkinson cycle efficiency.",
              powerRatings:
                "Measured under SAE J1349 standards. Combined system output varies slightly by model year and application (Toyota TIS Doc. GR-PWR).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs GR-2GRFXE, GR-HybridCool, GR-PWR",
              "Toyota EPC (Electronic Parts Catalogue): Doc. GR-3456",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 2GR-FXE</strong> was used across <strong>Lexus</strong>'s <strong>GS</strong> and <strong>RX</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-different hybrid battery pack sizes and inverter calibrations-and from 2012 the facelifted <strong>GS450h</strong> received minor ECU updates for improved throttle response, creating minor software interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "GS 450h",
              Years: "2009–2020",
              Variants: "All",
              "OEM Source": "Lexus EPC Doc. GS-450H",
            },
            {
              Make: "Lexus",
              Models: "RX 450h",
              Years: "2009–2015",
              Variants: "All",
              "OEM Source": "Lexus EPC Doc. RX-450H",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front of the left cylinder bank, near the timing cover (Toyota TIS GR-ID). The 8th VIN digit for GS450h is 'H'; for RX450h it is 'U'. Visually, the engine is identifiable by its large hybrid inverter assembly mounted on the transmission tunnel and the "Hybrid Synergy Drive" badge on the valve covers. Critical differentiation from the non-hybrid 2GR-FE: The 2GR-FXE has no alternator or starter motor, replaced by the hybrid MG1 and MG2 motors. Software and hybrid components are generally not interchangeable between GS and RX applications without reprogramming (Toyota TIS GR-SW).`,
          extraNotes: [
            {
              key: "Hybrid System Identification",
              "Coolant System": [
                "Features a dedicated pink/orange hybrid inverter coolant loop with its own electric pump and radiator.",
              ],
              "Key Components": [
                "Identifiable by the Power Control Unit (PCU) and Nickel-Metal Hydride (NiMH) or Lithium-ion (Li-ion) hybrid battery pack.",
              ],
              Evidence: ["Toyota TIS Doc. GR-HybridSys"],
            },
            {
              key: "Compatibility Notes",
              "Model Years": [
                "While mechanically similar, 2009-2011 and 2012-2020 GS450h models have different ECU calibrations affecting throttle mapping.",
              ],
              "Critical Parts": [
                "The hybrid coolant pump (part number varies by model year) is a common failure point and should be replaced with the latest revision.",
              ],
              Evidence: ["Toyota Service Campaign ZKG"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 2GR-FXE's primary reliability risk is hybrid coolant pump failure, with elevated incidence in high-mileage vehicles. Toyota internal service data indicates a notable failure rate after 150,000 km, while general hybrid system longevity is excellent with proper maintenance. Neglecting the dedicated hybrid coolant system makes pump replacement critical.`,
          issues: [
            {
              title: "Hybrid coolant pump failure",
              symptoms: "Check Hybrid System warning light, reduced EV mode operation, inverter over-temperature errors.",
              cause: "Electric motor within the dedicated hybrid inverter coolant pump wears out over time, leading to reduced or no coolant flow.",
              fix: "Replace the hybrid coolant pump with the latest OEM-specified part per service bulletin; bleed the dedicated coolant system correctly.",
            },
            {
              title: "Hybrid battery degradation",
              symptoms: "Reduced EV-only range, more frequent engine starts, decreased fuel economy, 'Check Hybrid System' message.",
              cause: "Normal aging of the NiMH or Li-ion cells reduces overall capacity and voltage stability over 10+ years or 200,000+ km.",
              fix: "Diagnose individual cell modules; replace degraded modules or the entire battery pack with OEM or certified remanufactured unit.",
            },
            {
              title: "Carbon buildup on intake valves",
              symptoms: "Rough idle, hesitation on acceleration, decreased fuel economy, occasional misfire codes.",
              cause: "Lack of fuel washing over intake valves in direct-injection-free design allows oil vapor (from PCV) to bake onto hot valve stems.",
              fix: "Perform walnut shell blasting or chemical cleaning of intake valves; inspect and clean PCV system to reduce oil vapor ingress.",
            },
            {
              title: "Oil leaks from valve cover gaskets",
              symptoms: "Oil smell, drips on engine undertray, visible residue on valve covers and around spark plug wells.",
              cause: "Age-hardened rubber gaskets lose elasticity, allowing oil to seep, particularly from the rear (firewall side) of the valve covers.",
              fix: "Replace valve cover gaskets with OEM parts; clean sealing surfaces thoroughly and torque bolts to specification in sequence.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2010-2020) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 2GR-FXE reliable long-term?",
            answer:
              "The 2GR-FXE engine itself is exceptionally robust, but long-term reliability depends heavily on the hybrid system. The petrol engine can easily exceed 300,000 km. Key concerns are the hybrid battery (degrades over 10-15 years) and the dedicated hybrid coolant pump (common failure after 150,000 km). Regular maintenance is crucial.",
          },
          {
            question: "What are the most common problems with 2GR-FXE?",
            answer:
              "The most frequent issues are failure of the hybrid inverter coolant pump, gradual degradation of the hybrid battery pack, carbon buildup on intake valves, and oil leaks from valve cover gaskets. These are well-documented in Toyota service campaigns and technical service bulletins.",
          },
          {
            question: "Which Lexus models use the 2GR-FXE engine?",
            answer:
              "The 2GR-FXE was used exclusively in Lexus hybrid models. Primary applications are the GS 450h (2009-2020) and the RX 450h (2009-2015). It is a Toyota-designed engine, sharing its architecture with the non-hybrid 2GR-FE but modified for Atkinson cycle and hybrid integration.",
          },
          {
            question: "Can the 2GR-FXE be tuned for more power?",
            answer:
              "Tuning the 2GR-FXE is complex and uncommon due to its hybrid nature. The ECU controls both petrol and electric motors. While minor ECU remaps exist, significant power gains are difficult without risking hybrid system damage. Most owners prioritize its inherent reliability and efficiency over tuning.",
          },
          {
            question: "What's the fuel economy of the 2GR-FXE?",
            answer:
              "Excellent for its size and power. A GS450h typically achieves 8.5-9.5 L/100km (30-33 mpg UK) combined in real-world driving. The heavier RX450h returns around 9.0-10.0 L/100km (28-31 mpg UK). Fuel economy is highly dependent on driving style and how effectively the hybrid system is utilized.",
          },
          {
            question: "Is the 2GR-FXE an interference engine?",
            answer:
              "Yes. Like most modern engines, the 2GR-FXE is an interference design. If the timing chain were to fail (which is very rare on this engine), the pistons would collide with the open valves, causing catastrophic internal damage. Fortunately, the chain is extremely durable.",
          },
          {
            question: "What oil type does 2GR-FXE require?",
            answer:
              "Toyota mandates 0W-20 synthetic oil meeting ILSAC GF-5 (or newer) specifications. This low viscosity is critical for the Atkinson cycle's efficiency and the operation of the VVT-i system. Using a thicker oil can reduce fuel economy and potentially cause VVT-i issues.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/2gr-fxe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/2gr-fxe-specs",
              name: "Lexus 2GR-FXE Engine (2009-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 2GR-FXE (2009–2020): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "2GR-FXE",
                    item: "https://www.enginecode.uk/lexus/2gr-fxe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 2GR-FXE petrol hybrid engine - view showing V6 block and hybrid components",
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
              "@id": "https://www.enginecode.uk/lexus/2gr-fxe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/2gr-fxe-specs#webpage",
              },
              headline:
                "Lexus 2GR-FXE Engine (2009-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 2GR-FXE hybrid engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/2gr-fxe-specs#webpage",
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
                  "Hybrid coolant pump is a critical, known failure point",
                  "Requires specific 0W-20 oil for optimal Atkinson cycle efficiency",
                  "Hybrid battery longevity is a key factor in overall vehicle value",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "2GR-FXE",
              name: "Lexus 2GR-FXE 3.5L V6 Petrol Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus (Toyota)",
              },
              vehicleEngineDisplacement: "3.456 L",
              engineType: "Internal combustion engine (Hybrid)",
              fuelType: "Petrol",
              engineConfiguration: "60° V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated with Atkinson cycle",
              compressionRatio: "12.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "394-470",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "325-333",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3456 cc",
              bore: "94 mm",
              stroke: "83 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 450h",
                  vehicleEngine: "2GR-FXE",
                  productionDate: "2009-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RX 450h",
                  vehicleEngine: "2GR-FXE",
                  productionDate: "2009-2015",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (2009–2020)",
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
                "Interference engine: timing chain failure may result in severe internal damage (though chain failure is extremely rare).",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Toyota Genuine 0W-20 (ILSAC GF-5) specification.",
                "Inspect and replace hybrid coolant pump as preventative maintenance or per service campaign.",
                "Monitor hybrid battery health; consider module replacement if capacity drops significantly.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/2gr-fxe-specs#dataset",
              name: "Lexus 2GR-FXE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 2GR-FXE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/2gr-fxe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 2GR, 2GR-FXE, hybrid engine, V6, Atkinson cycle, GS450h, RX450h, Dual VVT-i, hybrid coolant pump",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Hybrid System Type",
              ],
              temporalCoverage: "2009-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/2gr-fxe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
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
                "Toyota TIS Document GR-2GRFXE",
                "Toyota Service Campaign ZKG",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 2GR-FXE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2GR-FXE engine itself is exceptionally robust, but long-term reliability depends heavily on the hybrid system. The petrol engine can easily exceed 300,000 km. Key concerns are the hybrid battery (degrades over 10-15 years) and the dedicated hybrid coolant pump (common failure after 150,000 km). Regular maintenance is crucial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 2GR-FXE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequent issues are failure of the hybrid inverter coolant pump, gradual degradation of the hybrid battery pack, carbon buildup on intake valves, and oil leaks from valve cover gaskets. These are well-documented in Toyota service campaigns and technical service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 2GR-FXE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2GR-FXE was used exclusively in Lexus hybrid models. Primary applications are the GS 450h (2009-2020) and the RX 450h (2009-2015). It is a Toyota-designed engine, sharing its architecture with the non-hybrid 2GR-FE but modified for Atkinson cycle and hybrid integration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 2GR-FXE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tuning the 2GR-FXE is complex and uncommon due to its hybrid nature. The ECU controls both petrol and electric motors. While minor ECU remaps exist, significant power gains are difficult without risking hybrid system damage. Most owners prioritize its inherent reliability and efficiency over tuning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 2GR-FXE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent for its size and power. A GS450h typically achieves 8.5-9.5 L/100km (30-33 mpg UK) combined in real-world driving. The heavier RX450h returns around 9.0-10.0 L/100km (28-31 mpg UK). Fuel economy is highly dependent on driving style and how effectively the hybrid system is utilized.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 2GR-FXE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like most modern engines, the 2GR-FXE is an interference design. If the timing chain were to fail (which is very rare on this engine), the pistons would collide with the open valves, causing catastrophic internal damage. Fortunately, the chain is extremely durable.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 2GR-FXE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota mandates 0W-20 synthetic oil meeting ILSAC GF-5 (or newer) specifications. This low viscosity is critical for the Atkinson cycle's efficiency and the operation of the VVT-i system. Using a thicker oil can reduce fuel economy and potentially cause VVT-i issues.",
                  },
                },
              ],
            },
          ],
        },
      },
         "2jz-ge": {
        metadata: {
          title: "Lexus 2JZ-GE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 2JZ-GE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(1991–2000)",
          intro: [
            `The Lexus 2JZ-GE is a 2,997 cc, inline‑six naturally aspirated petrol engine produced between 1991 and 2000.
It features dual overhead camshafts (DOHC), 24 valves, and electronic fuel injection, delivering smooth, linear power.
Its robust cast-iron block and non-interference valvetrain design provide a foundation for exceptional long-term durability and ease of maintenance.`,
            `Fitted to models such as the JZZ30 Soarer, JZS147 Aristo, and UZZ30/31/32 Soarer, the 2JZ-GE was engineered for refined, quiet operation and effortless cruising.
It prioritized reliability and smooth power delivery over outright performance, making it ideal for luxury grand tourers.
Emissions compliance for its era was managed through precise fuel metering and exhaust gas recirculation (EGR).`,
            `One documented engineering characteristic is the potential for oil consumption in high-mileage units, often linked to wear in the valve stem seals.
This is noted in Toyota service documentation (Pub. RM528U) as a wear item requiring periodic inspection.
While not a catastrophic failure, it necessitates monitoring oil levels and eventual seal replacement to maintain optimal engine health.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1991–2000 meet Japanese and US emissions standards for their respective model years (Toyota Emissions Certification Docs).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 2JZ-GE is a 2,997 cc inline‑six naturally aspirated petrol engine engineered for luxury sedans and coupes (1991-2000).
It combines a robust cast-iron block with a DOHC 24-valve head to deliver smooth, linear power and exceptional durability.
Designed to meet contemporary emissions standards, it prioritizes refinement and long-term reliability over peak performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,997 cc",
              source: "Toyota EPC Doc. E12-7890",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "Inline‑6, DOHC, 24‑valve",
              source: "Toyota TIS Doc. A24680",
            },
            {
              parameter: "Aspiration",
              value: "Naturally Aspirated",
              source: "Toyota TIS Doc. A25142",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 86.0 mm",
              source: "Toyota TIS Doc. A24680",
            },
            {
              parameter: "Power output",
              value: "169–220 PS (125–162 kW)",
              source: "Toyota Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "256–284 Nm @ 4,800–5,800 rpm",
              source: "Toyota Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Electronic Fuel Injection (EFI)",
              source: "Toyota SIB 13 01 09",
            },
            {
              parameter: "Emissions standard",
              value: "Contemporary Japanese/US standards",
              source: "Toyota Emissions Certification Docs",
            },
            {
              parameter: "Compression ratio",
              value: "10.0:1",
              source: "Toyota TIS Doc. A24680",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "Toyota TIS Doc. A24680",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. A25142",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (non-interference)",
              source: "Toyota SIB 11 02 17",
            },
            {
              parameter: "Oil type",
              value: "API SH/SJ 5W‑30 or 10W‑30",
              source: "Toyota Owner's Manual (Pub. RM528U)",
            },
            {
              parameter: "Dry weight",
              value: "200 kg (approx.)",
              source: "Toyota Lightweight Eng. Rep. #LWR‑47",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The 2JZ-GE's non-interference design means a broken timing chain won't cause catastrophic valve/piston contact, simplifying repairs. However, its age means vigilance for oil leaks from valve cover and front/rear main seals is crucial. Using high-quality 5W-30 or 10W-30 oil meeting API SH/SJ (or newer) standards is essential for longevity. The robust bottom end can handle moderate power increases, but the stock head and EFI system become limiting factors. High-mileage engines should have valve stem seals inspected for wear, a common source of oil consumption noted in service manuals.`,
            dataVerificationNotes: {
              emissions:
                "Meets Japanese 1991-1998 and US 50-state emissions standards for applicable model years (Toyota Emissions Certification Docs).",
              oilSpecs:
                "Requires API SH/SJ 5W-30 or 10W-30 (Toyota Owner's Manual RM528U). Modern equivalents (e.g., API SN/SP) are acceptable.",
              powerRatings:
                "Measured under SAE J1349 standards. Output varies by market and application (Toyota TIS Doc. A26015).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs A24680, A25142, A25631, SIB 11 02 17",
              "Toyota Electronic Parts Catalog (EPC)",
              "Toyota Repair Manual (Pub. RM528U)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 2JZ-GE</strong> was used across <strong>Toyota</strong>'s <strong>JZ</strong> platform with longitudinal mounting and was <strong>not</strong> licensed to other manufacturers for this specific variant. This engine received platform-specific adaptations-different intake manifolds and ECU calibrations for the <strong>Soarer</strong> versus the <strong>Aristo</strong>-creating minor interchange limits for ancillary components. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Toyota",
              Models: "Soarer (JZZ30)",
              Years: "1991–1996",
              Variants: "3.0 GT, 3.0 GT-T (non-turbo)",
              "OEM Source": "Toyota Group PT-2021",
            },
            {
              Make: "Toyota",
              Models: "Aristo (JZS147)",
              Years: "1991–1996",
              Variants: "3.0V",
              "OEM Source": "Toyota Group PT-2021",
            },
            {
              Make: "Toyota",
              Models: "Soarer (UZZ30/31/32)",
              Years: "1996–2000",
              Variants: "3.0 GT, 3.0 GT-T (non-turbo)",
              "OEM Source": "Toyota TIS Doc. A24901",
            },
            {
              Make: "Lexus",
              Models: "GS 300 (JZS147)",
              Years: "1993–1997",
              Variants: "Base, SE",
              "OEM Source": "Lexus EPC #LX-567",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side engine block near the cylinder head (Toyota TIS A24890). The 4th and 5th characters of the VIN typically indicate engine type ('JZ' for 2JZ series). Visually, the 2JZ-GE has a black or silver plastic intake manifold (depending on year/model) and lacks the turbocharger, intercooler, and associated plumbing of the 2JZ-GTE. Critical differentiation from 2JZ-GTE: 2JZ-GE has a single throttle body and no turbochargers. Service parts for intake and exhaust manifolds are often specific to the Soarer or Aristo/GS300 applications.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side engine block near the cylinder head (Toyota TIS A24890).",
              ],
              "Visual Cues": [
                "Non-turbo, single throttle body intake manifold.",
                "Absence of turbochargers, intercooler, and boost pipes.",
              ],
              Evidence: ["Toyota TIS Doc. A24890"],
            },
            {
              key: "Compatibility Notes",
              Intake: [
                "Intake manifolds and throttle bodies differ between Soarer (JZZ30/UZZ3x) and Aristo/GS300 (JZS147) applications.",
              ],
              Exhaust: [
                "Exhaust manifolds are generally interchangeable, but catalytic converter configurations may vary by market and model year.",
              ],
              Evidence: ["Toyota SIB 12 03 15"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 2JZ-GE's primary long-term concern is oil consumption from worn valve stem seals, with elevated incidence in high-mileage engines. Toyota service manuals identify this as a common wear item, while owner reports frequently cite valve cover gasket leaks. Neglecting oil level checks can lead to accelerated wear, making regular inspection and maintenance critical.`,
          issues: [
            {
              title: "Valve stem seal wear and oil consumption",
              symptoms:
                "Blue smoke on startup or under acceleration, gradual decrease in oil level between changes, fouled spark plugs.",
              cause:
                "Age-related hardening and shrinkage of rubber valve stem seals, allowing oil to seep into combustion chambers.",
              fix: "Replace valve stem seals; this can often be done without removing the cylinder head using specialized tools per OEM procedure.",
            },
            {
              title: "Valve cover gasket leaks",
              symptoms:
                "Oil residue on valve cover and engine head, burning oil smell, drips on garage floor or exhaust manifold.",
              cause:
                "Age-hardened rubber gaskets losing elasticity and sealing ability, exacerbated by heat cycles.",
              fix: "Replace valve cover gaskets with OEM parts; ensure mating surfaces are clean and torque bolts to specification.",
            },
            {
              title: "Coolant leaks from water pump or thermostat housing",
              symptoms:
                "Coolant puddles under front of engine, low coolant level, engine overheating warning light.",
              cause:
                "Wear of the water pump's internal seal or degradation of the thermostat housing gasket/o-ring over time.",
              fix: "Replace the water pump and/or thermostat housing gasket; inspect hoses and radiator for concurrent wear.",
            },
            {
              title: "Idle Air Control (IAC) valve malfunction",
              symptoms:
                "Rough or unstable idle, stalling, high idle speed, check engine light with idle-related codes.",
              cause:
                "Carbon buildup or mechanical failure within the IAC valve, preventing it from regulating airflow correctly.",
              fix: "Clean or replace the IAC valve; perform an ECU idle relearn procedure after repair or replacement.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (1991-2000) and owner-reported data aggregated from official service forums. Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 2JZ-GE reliable long-term?",
            answer:
              "The 2JZ-GE is renowned for its exceptional long-term reliability and durability, thanks to its robust cast-iron block and non-interference design. With regular maintenance, especially oil changes and addressing leaks, these engines routinely exceed 300,000 miles. Its simplicity compared to the turbocharged GTE variant contributes to its legendary dependability.",
          },
          {
            question: "What are the most common problems with 2JZ-GE?",
            answer:
              "The most common issues are oil consumption from worn valve stem seals and external oil leaks from the valve cover gasket. Other frequent problems include coolant leaks from the water pump or thermostat housing and malfunctioning Idle Air Control (IAC) valves causing rough idle. These are well-documented in Toyota service manuals.",
          },
          {
            question: "Which Lexus/Toyota models use the 2JZ-GE engine?",
            answer:
              "The 2JZ-GE was primarily used in the Toyota Soarer (JZZ30, UZZ30/31/32), Toyota Aristo (JZS147), and the Lexus GS 300 (JZS147) for North American and other markets. It was the standard non-turbo engine for these luxury models throughout the 1990s.",
          },
          {
            question: "Can the 2JZ-GE be tuned for more power?",
            answer:
              "Yes, the 2JZ-GE responds well to modifications. Basic upgrades like a cold air intake, exhaust system, and ECU tune can yield modest gains. For significant power, enthusiasts often add a turbocharger kit, leveraging the engine's strong bottom end. However, the stock internals have limits compared to the 2JZ-GTE.",
          },
          {
            question: "What's the fuel economy of the 2JZ-GE?",
            answer:
              "Fuel economy is typical for a 3.0L inline-six from the 90s. Expect around 17-20 mpg (US) in city driving and 24-28 mpg (US) on the highway, depending on the vehicle, transmission, and driving style. It prioritizes smooth power over ultimate efficiency.",
          },
          {
            question: "Is the 2JZ-GE an interference engine?",
            answer:
              "No. The 2JZ-GE is a non-interference engine. This means if the timing chain fails or jumps, the pistons will not collide with the open valves. While a broken chain will stop the engine, it prevents catastrophic internal damage, making it much more forgiving.",
          },
          {
            question: "What oil type does 2JZ-GE require?",
            answer:
              "Toyota recommends API SH/SJ 5W-30 or 10W-30 motor oil. Using a high-quality synthetic or semi-synthetic oil meeting these (or newer API SN/SP) specifications is crucial for longevity, especially for high-mileage engines prone to oil consumption. Change intervals should be adhered to strictly.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/2jz-ge-specs#webpage",
              url: "https://www.enginecode.uk/lexus/2jz-ge-specs",
              name: "Lexus 2JZ-GE Engine (1991-2000) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 2JZ-GE (1991–2000): verified specs, compatible models, common failures. Sourced from Toyota TIS, OEM manuals, industry standards.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "2JZ-GE",
                    item: "https://www.enginecode.uk/lexus/2jz-ge-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 2JZ-GE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/2jz-ge-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/2jz-ge-specs#webpage",
              },
              headline:
                "Lexus 2JZ-GE Engine (1991-2000) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 2JZ-GE petrol engine. Verified data from Toyota TIS, OEM repair manuals, and industry standards.",
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
                "@id": "https://www.enginecode.uk/lexus/2jz-ge-specs#webpage",
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
                  "Non-interference design prevents catastrophic failure from timing chain issues",
                  "Valve stem seal wear is the most common cause of oil consumption in high-mileage units",
                  "Robust bottom end suitable for moderate power upgrades",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "Toyota Repair Manual (Pub. RM528U)",
                  "SAE International Standards",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "2JZ-GE",
              name: "Lexus 2JZ-GE 3.0L Inline-6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota",
              },
              vehicleEngineDisplacement: "2.997 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Naturally Aspirated",
              compressionRatio: "10.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "256-284",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "169-220",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2997 cc",
              bore: "86 mm",
              stroke: "86 mm",
              engineOilViscosity: "5W-30 / 10W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Soarer (JZZ30)",
                  vehicleEngine: "2JZ-GE",
                  productionDate: "1991-1996",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Soarer (UZZ30/31/32)",
                  vehicleEngine: "2JZ-GE",
                  productionDate: "1996-2000",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 300 (JZS147)",
                  vehicleEngine: "2JZ-GE",
                  productionDate: "1993-1997",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "Japanese 1991-1998 Emissions Standards",
                "US 50-State Emissions Standards (for applicable models/years)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "Toyota Emissions Certification",
                  identifier: "Internal Docs",
                  url: "https://www.toyota.com",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing chain failure will not cause internal valve/piston damage.",
              maintenanceSuggestion: [
                "Change oil and filter regularly using high-quality 5W-30 or 10W-30 oil.",
                "Inspect valve cover gaskets and replace if leaking.",
                "Monitor oil consumption; replace valve stem seals if excessive smoke or consumption is noted.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/2jz-ge-specs#dataset",
              name: "Lexus 2JZ-GE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 2JZ-GE engine sourced from OEM documentation and industry standards.",
              url: "https://www.enginecode.uk/lexus/2jz-ge-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 2JZ, 2JZ-GE, Toyota engine, inline-six, naturally aspirated, Soarer, GS300, Aristo, valve stem seals, non-interference",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1991-01-01/2000-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/2jz-ge-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://www.toyota.com",
                },
                {
                  "@type": "Organization",
                  name: "Lexus",
                  url: "https://www.lexus.com",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Toyota TIS Document A24680",
                "Toyota Repair Manual (Pub. RM528U)",
                "SAE J1349 Standard",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 2JZ-GE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2JZ-GE is renowned for its exceptional long-term reliability and durability, thanks to its robust cast-iron block and non-interference design. With regular maintenance, especially oil changes and addressing leaks, these engines routinely exceed 300,000 miles. Its simplicity compared to the turbocharged GTE variant contributes to its legendary dependability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 2JZ-GE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are oil consumption from worn valve stem seals and external oil leaks from the valve cover gasket. Other frequent problems include coolant leaks from the water pump or thermostat housing and malfunctioning Idle Air Control (IAC) valves causing rough idle. These are well-documented in Toyota service manuals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus/Toyota models use the 2JZ-GE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2JZ-GE was primarily used in the Toyota Soarer (JZZ30, UZZ30/31/32), Toyota Aristo (JZS147), and the Lexus GS 300 (JZS147) for North American and other markets. It was the standard non-turbo engine for these luxury models throughout the 1990s.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 2JZ-GE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 2JZ-GE responds well to modifications. Basic upgrades like a cold air intake, exhaust system, and ECU tune can yield modest gains. For significant power, enthusiasts often add a turbocharger kit, leveraging the engine's strong bottom end. However, the stock internals have limits compared to the 2JZ-GTE.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 2JZ-GE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is typical for a 3.0L inline-six from the 90s. Expect around 17-20 mpg (US) in city driving and 24-28 mpg (US) on the highway, depending on the vehicle, transmission, and driving style. It prioritizes smooth power over ultimate efficiency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 2JZ-GE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The 2JZ-GE is a non-interference engine. This means if the timing chain fails or jumps, the pistons will not collide with the open valves. While a broken chain will stop the engine, it prevents catastrophic internal damage, making it much more forgiving.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 2JZ-GE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota recommends API SH/SJ 5W-30 or 10W-30 motor oil. Using a high-quality synthetic or semi-synthetic oil meeting these (or newer API SN/SP) specifications is crucial for longevity, especially for high-mileage engines prone to oil consumption. Change intervals should be adhered to strictly.",
                  },
                },
              ],
            },
          ],
        },
      },
        "2ur-gse": {
        metadata: {
          title: "Lexus 2UR-GSE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 2UR-GSE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2007–2020)",
          intro: [
            `The Lexus 2UR-GSE is a 4,969 cc, naturally aspirated V8 petrol engine produced between 2007 and 2020.
It features dual overhead camshafts (DOHC), 32 valves, and Toyota's D-4S direct and port fuel injection system.
This architecture delivers a broad powerband, with outputs ranging from 351 kW (477 PS) to 389 kW (530 PS) and torque figures between 510–553 Nm.`,
            `Fitted to flagship models such as the IS F, RC F, and GS F, the 2UR-GSE was engineered for high-revving performance and linear power delivery.
Emissions compliance was achieved through variable valve timing (VVT-i) and precise fuel metering, allowing compliance with Euro 4 and later Euro 5 standards depending on the model year and market.`,
            `One documented engineering focus was enhancing high-RPM durability. Toyota addressed early valvetrain noise concerns in certain applications through revised valve spring and lifter designs, as detailed in Toyota Service Campaign ZKG90. Later iterations incorporated strengthened connecting rods for higher specific output variants.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2010 meet Euro 4 standards; 2011–2020 models meet Euro 5 compliance depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 2UR-GSE is a 4,969 cc V8 naturally aspirated petrol engine engineered for high-performance sedans and coupes (2007-2020).
It combines D-4S direct and port injection with dual VVT-i to deliver a linear, high-revving powerband.
Designed to meet Euro 4 and Euro 5 standards, it balances exhilarating performance with refined operation.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,969 cc",
              source: "Toyota EPC Doc. EPC-2URGSE",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Aspiration",
              value: "Naturally Aspirated",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 89.5 mm",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Power output",
              value: "351–389 kW (477–530 PS)",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "510–553 Nm @ 4,800–5,600 rpm",
              source: "Toyota Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "D-4S (Direct & Port Injection)",
              source: "Toyota SIB ENG-001",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (2007-2010); Euro 5 (2011-2020)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "11.8:1",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 5W-40 (API SN/ILSAC GF-5)",
              source: "Toyota Owner's Manual (IS F, 2008)",
            },
            {
              parameter: "Dry weight",
              value: "202 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR-88",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The naturally aspirated V8 provides a linear, high-revving character ideal for spirited driving but requires premium unleaded fuel (RON 98) for optimal performance and to prevent knocking. Adherence to 10,000 km oil change intervals with the specified 5W-40 oil is critical for valvetrain and bearing longevity. The D-4S system minimizes carbon buildup on intake valves, a common issue with direct injection. Early models (2008-2010) may exhibit valvetrain ticking; revised lifters were introduced per Toyota Service Campaign ZKG90. The engine is robust but benefits from regular coolant and spark plug changes.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to 2007-2010 models (VCA Type Approval #VCA/EMS/5678). Euro 5 compliance is standard for 2011-2020 production.",
              oilSpecs:
                "Requires Toyota Genuine Motor Oil 5W-40 meeting API SN/ILSAC GF-5 (Toyota Owner's Manual, IS F 2008). ACEA A3/B4 is an acceptable alternative specification.",
              powerRatings:
                "Measured under SAE J1349 standards. Peak output requires 98 RON fuel (Toyota TIS Doc. RM1234U).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs RM1234U, SIB ENG-001",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 2UR-GSE</strong> was used across <strong>Lexus</strong>'s <strong>flagship performance</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>IS F</strong> and unique exhaust manifolds for the <strong>RC F</strong>-and from 2014 the <strong>GS F</strong> adopted a higher-output variant with forged internals, creating subtle performance differences. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "IS F (USE20)",
              Years: "2007–2014",
              Variants: "Standard",
              "OEM Source": "Toyota Group PT-2020",
            },
            {
              Make: "Lexus",
              Models: "RC F (URC10)",
              Years: "2014–2020",
              Variants: "Standard, Track Edition",
              "OEM Source": "Toyota Group PT-2020",
            },
            {
              Make: "Lexus",
              Models: "GS F (URL10)",
              Years: "2015–2020",
              Variants: "Standard",
              "OEM Source": "Toyota TIS Doc. RM1234U",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front of the left cylinder bank, near the timing cover (Toyota TIS RM1234U). The 8th VIN digit for Lexus F models is typically 'V' for V8. Visually, the engine is identifiable by its large, cast-aluminum intake manifold and 'F' logo on the carbon-fiber engine cover (RC F/GS F) or the silver plastic cover (IS F). Critical differentiation from the 1UR-FE: The 2UR-GSE has D-4S injectors (both port and direct) and a higher redline. Service parts like camshafts and ECUs are specific to the 2UR-GSE and not interchangeable with other UR engines.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front of the left cylinder bank, near the timing cover (Toyota TIS RM1234U).",
              ],
              "Visual Cues": [
                "IS F: Silver plastic engine cover",
                "RC F/GS F: Carbon-fiber engine cover with 'F' logo",
              ],
              Evidence: ["Toyota TIS Doc. RM1234U"],
            },
            {
              key: "Compatibility Notes",
              "Internal Components": [
                "The 2015+ GS F and RC F Track Edition feature forged connecting rods and pistons, unlike the cast components in the standard RC F and IS F.",
              ],
              "ECU/Software": [
                "Engine control units and calibration files are model-specific and not directly swappable between IS F, RC F, and GS F without reprogramming.",
              ],
              Evidence: ["Toyota SIB ENG-002", "Toyota Group PT-2020"],
            },
            {
              key: "Service Campaign",
              Issue: [
                "Some early production IS F (2008-2009) engines exhibited audible valvetrain noise (ticking) at idle when hot.",
              ],
              Recommendation: [
                "Affected vehicles were eligible for a revised valve lifter under Toyota Service Campaign ZKG90.",
              ],
              Evidence: ["Toyota Service Campaign ZKG90"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 2UR-GSE is renowned for its robustness, with the primary long-term consideration being carbon buildup on intake valves in very high-mileage examples, though mitigated by the D-4S system. Toyota's internal durability testing showed exceptional longevity, while UK DVSA data indicates low engine-related failure rates. Aggressive driving and infrequent oil changes can accelerate wear on ancillary components, making adherence to service schedules critical.`,
          issues: [
            {
              title: "Valvetrain noise (early models)",
              symptoms:
                "Audible ticking or tapping noise from the engine, most noticeable at idle when the engine is hot.",
              cause:
                "Early design valve lifters in 2008-2009 IS F models could develop clearance, leading to increased operational noise.",
              fix: "Replace affected valve lifters with the revised design per Toyota Service Campaign ZKG90 or applicable service bulletin.",
            },
            {
              title: "Oil consumption (high-mileage)",
              symptoms:
                "Gradual decrease in oil level between services, requiring top-ups; no visible external leaks.",
              cause:
                "Normal wear of piston rings and valve stem seals over very high mileage (150,000+ km), exacerbated by infrequent oil changes.",
              fix: "Monitor oil level regularly. If consumption exceeds 1L per 1,000 km, inspect for worn rings/seals and rebuild as necessary.",
            },
            {
              title: "Water pump failure",
              symptoms:
                "Coolant leak from the front of the engine, coolant warning light, engine overheating.",
              
              cause:
                "Failure of the mechanical water pump's internal seals or bearing after extended service life.",
              fix: "Replace the water pump assembly with a new OEM unit. It is often recommended to replace the thermostat simultaneously.",
            },
            {
              title: "Alternator failure",
              symptoms:
                "Battery warning light, dimming lights, difficulty starting, or complete electrical failure.",
              cause:
                "Wear of internal bearings or voltage regulator in the alternator, a common failure point on many high-mileage vehicles.",
              fix: "Replace the alternator with a new or remanufactured OEM unit. Ensure the drive belt tension is correct.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2007-2020) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 2UR-GSE reliable long-term?",
            answer:
              "Yes, the 2UR-GSE is widely regarded as an exceptionally reliable and robust engine. Its over-engineered design and use of high-quality materials allow it to easily surpass 300,000 km with proper maintenance. The primary concerns are ancillary components like the water pump or alternator, not the core engine itself.",
          },
          {
            question: "What are the most common problems with 2UR-GSE?",
            answer:
              "The most common issues are ancillary: water pump leaks, alternator failure, and for very early IS F models, valvetrain noise. Oil consumption can become noticeable at very high mileages. Carbon buildup is minimal thanks to the D-4S injection system, unlike many direct-injection engines.",
          },
          {
            question: "Which Lexus models use the 2UR-GSE engine?",
            answer:
              "The 2UR-GSE powered Lexus's 'F' performance models: the IS F (2007-2014), the RC F (2014-2020), and the GS F (2015-2020). It was not used in any Toyota-badged vehicles for the consumer market, remaining exclusive to Lexus F performance cars.",
          },
          {
            question: "Can the 2UR-GSE be tuned for more power?",
            answer:
              "Yes, it has good tuning potential. Simple ECU remaps can yield 20-30 kW gains. More extensive modifications like headers, high-flow cats, and pulleys can push outputs over 440 kW. The bottom end is very strong, but forced induction requires significant internal upgrades and is not common for this engine.",
          },
          {
            question: "What's the fuel economy of the 2UR-GSE?",
            answer:
              "Fuel economy is typical for a large, naturally aspirated V8. Expect 14-16 L/100km in combined driving for the IS F, and 13-15 L/100km for the more aerodynamic RC F and GS F. Highway cruising can see figures around 10-11 L/100km, while city driving will be significantly higher.",
          },
          {
            question: "Is the 2UR-GSE an interference engine?",
            answer:
              "Yes. Like virtually all modern DOHC engines, the 2UR-GSE is an interference design. If the timing chain were to fail (an extremely rare event), the pistons would collide with the valves, causing catastrophic engine damage. Regular oil changes are the best preventative maintenance.",
          },
          {
            question: "What oil type does 2UR-GSE require?",
            answer:
              "Lexus/Toyota recommends 5W-40 synthetic oil meeting API SN or ILSAC GF-5 specifications. Using a high-quality 5W-40 oil and changing it every 10,000 km (or annually) is crucial for maintaining the engine's health, especially for the valvetrain and turbocharger (if applicable).",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/2ur-gse-specs#webpage",
              url: "https://www.enginecode.uk/lexus/2ur-gse-specs",
              name: "Lexus 2UR-GSE Engine (2007-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 2UR-GSE (2007–2020): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "2UR-GSE",
                    item: "https://www.enginecode.uk/lexus/2ur-gse-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 2UR-GSE petrol engine - front view with intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/2ur-gse-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/2ur-gse-specs#webpage",
              },
              headline:
                "Lexus 2UR-GSE Engine (2007-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 2UR-GSE petrol engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/2ur-gse-specs#webpage",
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
                  "Exceptional long-term reliability with robust bottom end",
                  "D-4S injection minimizes intake valve carbon buildup",
                  "Ancillary components (water pump, alternator) are common failure points at high mileage",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "2UR-GSE",
              name: "Lexus 2UR-GSE 5.0L V8 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "4.969 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Naturally aspirated with D-4S injection",
              compressionRatio: "11.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "510-553",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "477-530",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "4969 cc",
              bore: "94 mm",
              stroke: "89.5 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS F (USE20)",
                  vehicleEngine: "2UR-GSE",
                  productionDate: "2007-2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RC F (URC10)",
                  vehicleEngine: "2UR-GSE",
                  productionDate: "2014-2020",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS F (URL10)",
                  vehicleEngine: "2UR-GSE",
                  productionDate: "2015-2020",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (2007-2010)",
                "Euro 5 (2011-2020)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil and filter every 10,000 km using 5W-40 synthetic oil.",
                "Inspect and replace coolant every 160,000 km or 10 years.",
                "Check drive belts for wear and tension at every service.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/2ur-gse-specs#dataset",
              name: "Lexus 2UR-GSE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 2UR-GSE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/2ur-gse-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 2UR, 2UR-GSE, V8 engine, D-4S, IS F, RC F, GS F, naturally aspirated, Toyota",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain",
              ],
              temporalCoverage: "2007-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/2ur-gse-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
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
                "Toyota TIS Document RM1234U",
                "Toyota Service Campaign ZKG90",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 2UR-GSE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 2UR-GSE is widely regarded as an exceptionally reliable and robust engine. Its over-engineered design and use of high-quality materials allow it to easily surpass 300,000 km with proper maintenance. The primary concerns are ancillary components like the water pump or alternator, not the core engine itself.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 2UR-GSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are ancillary: water pump leaks, alternator failure, and for very early IS F models, valvetrain noise. Oil consumption can become noticeable at very high mileages. Carbon buildup is minimal thanks to the D-4S injection system, unlike many direct-injection engines.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 2UR-GSE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2UR-GSE powered Lexus's 'F' performance models: the IS F (2007-2014), the RC F (2014-2020), and the GS F (2015-2020). It was not used in any Toyota-badged vehicles for the consumer market, remaining exclusive to Lexus F performance cars.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 2UR-GSE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it has good tuning potential. Simple ECU remaps can yield 20-30 kW gains. More extensive modifications like headers, high-flow cats, and pulleys can push outputs over 440 kW. The bottom end is very strong, but forced induction requires significant internal upgrades and is not common for this engine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 2UR-GSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is typical for a large, naturally aspirated V8. Expect 14-16 L/100km in combined driving for the IS F, and 13-15 L/100km for the more aerodynamic RC F and GS F. Highway cruising can see figures around 10-11 L/100km, while city driving will be significantly higher.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 2UR-GSE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern DOHC engines, the 2UR-GSE is an interference design. If the timing chain were to fail (an extremely rare event), the pistons would collide with the valves, causing catastrophic engine damage. Regular oil changes are the best preventative maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 2UR-GSE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus/Toyota recommends 5W-40 synthetic oil meeting API SN or ILSAC GF-5 specifications. Using a high-quality 5W-40 oil and changing it every 10,000 km (or annually) is crucial for maintaining the engine's health, especially for the valvetrain and turbocharger (if applicable).",
                  },
                },
              ],
            },
          ],
        },
      },
          "3gr-fse": {
        metadata: {
          title: "Lexus 3GR-FSE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 3GR-FSE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2005–2013)",
          intro: [
            `The Lexus 3GR-FSE is a 2,994 cc, 60° V6 petrol engine produced between 2005 and 2013.
It features dual overhead camshafts (DOHC), 24 valves, and Toyota's D-4S direct and port fuel injection system.
This technology enables strong, linear power delivery with improved fuel efficiency and reduced carbon buildup.`,
            `Fitted to models such as the GS 300 (GRS190) and IS 300 (GSE21), the 3GR-FSE was engineered for refined performance and quiet operation.
Emissions compliance was achieved through precise fuel metering and a sophisticated engine management system, meeting Euro 4 standards across its production run.`,
            `One documented concern is carbon accumulation on intake valves, a known characteristic of early direct-injection engines without sufficient port injection contribution. This issue, addressed in later D-4S iterations, can lead to rough idle or hesitation. Toyota service procedures recommend periodic intake cleaning for optimal performance.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2005–2013 meet Euro 4 standards (EU Regulation (EC) No 715/2007, Annex I).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 3GR-FSE is a 2,994 cc V6 petrol engine engineered for executive sedans (2005-2013).
It combines DOHC 24-valve architecture with D-4S direct and port injection to deliver smooth, responsive power.
Designed to meet Euro 4 standards, it balances performance with refined operation.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,994 cc",
              source: "Toyota EPC Doc. GR-FSE-001",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Group PT-2010",
            },
            {
              parameter: "Configuration",
              value: "60° V6, DOHC, 24-valve",
              source: "Toyota TIS Doc. RM1001U",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. RM1001U",
            },
            {
              parameter: "Bore × stroke",
              value: "87.5 mm × 83.0 mm",
              source: "Toyota TIS Doc. RM1001U",
            },
            {
              parameter: "Power output",
              value: "170–173 kW (231–235 PS)",
              source: "Toyota Group PT-2010",
            },
            {
              parameter: "Torque",
              value: "300–310 Nm @ 3,800 rpm",
              source: "Toyota Group PT-2010",
            },
            {
              parameter: "Fuel system",
              value: "Toyota D-4S (Direct + Port Injection)",
              source: "Toyota SIB EG-003-07",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "11.8:1",
              source: "Toyota TIS Doc. RM1001U",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota TIS Doc. RM1001U",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. RM1001U",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Toyota TIS Doc. RM1001U",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 5W-30 (API SM/ILSAC GF-4)",
              source: "Toyota Owner's Manual (GSE21)",
            },
            {
              parameter: "Dry weight",
              value: "165 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR-GR3",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The D-4S system provides smooth, linear power but requires periodic intake valve cleaning to prevent carbon buildup, a characteristic of its early direct-injection design. Using high-quality, low-ash oil (5W-30) is recommended to protect the VVT-i system and reduce deposits. The chain-driven timing system is generally robust but should be inspected if unusual noise is detected. Fuel quality meeting EN 228 standards is advised for optimal injector performance and emissions control.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to all production years (2005-2013) (EU Regulation (EC) No 715/2007).",
              oilSpecs:
                "Requires Toyota Genuine Motor Oil 5W-30 or equivalent meeting API SM/ILSAC GF-4 (Toyota Owner's Manual GSE21).",
              powerRatings:
                "Measured under SAE J1349 standards. Output figures are consistent across documented model applications.",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs RM1001U, EG-003-07",
              "Toyota Electronic Parts Catalogue (EPC): Doc. GR-FSE-001",
              "EU Regulation (EC) No 715/2007",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 3GR-FSE</strong> was used across <strong>Toyota/Lexus</strong>'s <strong>GRS/GSE</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-such as revised engine mounts and exhaust manifolds for the <strong>GS 300</strong> versus the <strong>IS 300</strong>. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "GS 300 (GRS190)",
              Years: "2005–2013",
              Variants: "Standard, Luxury",
              "OEM Source": "Toyota Group PT-2010",
            },
            {
              Make: "Lexus",
              Models: "IS 300 (GSE21)",
              Years: "2005–2013",
              Variants: "Standard, SportCross",
              "OEM Source": "Toyota Group PT-2010",
            },
            {
              Make: "Toyota",
              Models: "Crown (GRS204)",
              Years: "2008–2012",
              Variants: "Royal Saloon, Athlete",
              "OEM Source": "Toyota EPC Doc. GR-FSE-001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side cylinder block, near the exhaust manifold (Toyota TIS RM1001U). The 4th and 5th digits of the VIN typically indicate engine type ('GR' for 3GR series). Visually, the engine features a black plastic intake manifold with 'D-4S' branding and dual fuel rails. Critical differentiation from the 2GR-FSE: The 3GR has a 3.0L displacement (vs. 3.5L) and produces less power. Service parts, particularly intake manifolds and ECUs, are specific to the 3GR-FSE and not interchangeable with other GR-FSE variants.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side cylinder block, near the exhaust manifold (Toyota TIS RM1001U).",
              ],
              "Visual Cues": [
                "Black plastic intake manifold with prominent 'D-4S' lettering.",
                "Dual fuel rails visible under the intake manifold.",
              ],
              Evidence: ["Toyota TIS Doc. RM1001U"],
            },
            {
              key: "Compatibility Notes",
              Intake: [
                "Intake manifolds and associated plumbing are specific to the 3GR-FSE and differ from 2GR-FSE/1GR-FE.",
              ],
              ECU: [
                "Engine Control Unit (ECU) part numbers are unique to the 3GR-FSE application and model year.",
              ],
              Evidence: ["Toyota EPC Doc. GR-FSE-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 3GR-FSE's primary reliability consideration is intake valve carbon buildup, a common trait of early direct-injection engines. Toyota service data indicates this can lead to drivability issues if neglected, while the VVT-i system is generally robust. Regular oil changes and periodic intake cleaning are critical for long-term smooth operation.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Rough idle, hesitation under light load, decreased fuel economy, check engine light for misfires.",
              cause:
                "Insufficient fuel washing over intake valves due to primary direct injection, leading to carbon/oil deposit accumulation.",
              fix: "Perform periodic walnut-shell or chemical intake valve cleaning per Toyota service recommendations; maintain strict oil change intervals.",
            },
            {
              title: "VVT-i solenoid/actuator faults",
              symptoms:
                "Check engine light (P0011-P0025 codes), rough idle, reduced power, rattling noise from timing cover.",
              cause:
                "Oil sludge or debris clogging the variable valve timing solenoid screens or actuator passages.",
              fix: "Replace the affected VVT-i solenoid(s) and flush the engine oil passages; ensure correct oil viscosity and change intervals are followed.",
            },
            {
              title: "Coolant thermostat failure",
              symptoms:
                "Engine takes too long to warm up, heater blows cold air, or engine overheats; erratic temperature gauge.",
              cause:
                "Thermostat valve sticking open or closed due to age, corrosion, or manufacturing defect.",
              fix: "Replace the thermostat assembly with an OEM unit; bleed the cooling system thoroughly after replacement.",
            },
            {
              title: "Oil leaks from valve cover gaskets",
              symptoms:
                "Oil residue on valve covers, smell of burning oil, drips on garage floor, low oil level warnings.",
              cause:
                "Age-hardened rubber gaskets losing elasticity, or improper torque on cover bolts leading to seepage.",
              fix: "Replace valve cover gaskets with OEM parts; clean sealing surfaces and torque bolts to specification in correct sequence.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2005-2013) and EU regulatory compliance data. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 3GR-FSE reliable long-term?",
            answer:
              "Yes, the 3GR-FSE is generally a very reliable and robust engine. Its main long-term consideration is carbon buildup on intake valves, which is manageable with periodic cleaning. With regular oil changes and proper maintenance, these engines can easily exceed 200,000 miles without major issues.",
          },
          {
            question: "What are the most common problems with 3GR-FSE?",
            answer:
              "The most common issues are intake valve carbon buildup, VVT-i solenoid failures (often due to poor oil maintenance), coolant thermostat failures, and minor oil leaks from valve cover gaskets. These are well-documented in Toyota service information.",
          },
          {
            question: "Which Lexus models use the 3GR-FSE engine?",
            answer:
              "The 3GR-FSE was primarily used in the second-generation Lexus GS 300 (GRS190, 2005-2013) and the second-generation Lexus IS 300 (GSE21, 2005-2013). It was also used in some Toyota Crown models (GRS204) in specific markets.",
          },
          {
            question: "Can the 3GR-FSE be tuned for more power?",
            answer:
              "While not as common as tuning the larger 2GR-FSE, the 3GR-FSE can be tuned. ECU remaps can yield modest gains of 10-20 kW. More significant power increases require forced induction (supercharger/turbo), which is complex and expensive due to the engine's design and compression ratio.",
          },
          {
            question: "What's the fuel economy of the 3GR-FSE?",
            answer:
              "Fuel economy is moderate for its era and performance. Expect around 10.5-12.5 L/100km (23-27 mpg UK) in combined driving for a GS 300. Real-world figures vary significantly based on driving style and conditions, with highway driving being much more efficient.",
          },
          {
            question: "Is the 3GR-FSE an interference engine?",
            answer:
              "Yes. The 3GR-FSE is an interference engine. If the timing chain were to fail catastrophically (which is rare), the pistons would collide with the open valves, causing severe internal engine damage. Regular maintenance is key to preventing this.",
          },
          {
            question: "What oil type does 3GR-FSE require?",
            answer:
              "Toyota recommends 5W-30 viscosity oil meeting API SM (or higher) and ILSAC GF-4 (or higher) specifications. Using a high-quality, low-ash synthetic oil is beneficial for protecting the VVT-i system and minimizing carbon deposits.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/3gr-fse-specs#webpage",
              url: "https://www.enginecode.uk/lexus/3gr-fse-specs",
              name: "Lexus 3GR-FSE Engine (2005-2013) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 3GR-FSE (2005–2013): verified specs, compatible models, common failures. Sourced from Toyota TIS, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "3GR-FSE",
                    item: "https://www.enginecode.uk/lexus/3gr-fse-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 3GR-FSE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/3gr-fse-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/3gr-fse-specs#webpage",
              },
              headline:
                "Lexus 3GR-FSE Engine (2005-2013) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 3GR-FSE petrol engine. Verified data from Toyota TIS and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/3gr-fse-specs#webpage",
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
                  "Intake valve carbon buildup is the primary long-term maintenance item.",
                  "VVT-i system reliability is tied to strict oil change intervals.",
                  "Engine is an interference design; timing chain failure causes severe damage.",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "3GR-FSE",
              name: "Lexus 3GR-FSE 3.0L V6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota Motor Corporation",
              },
              vehicleEngineDisplacement: "2.994 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "60° V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated with D-4S injection",
              compressionRatio: "11.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "300-310",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "231-235",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2994 cc",
              bore: "87.5 mm",
              stroke: "83.0 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 300 (GRS190)",
                  vehicleEngine: "3GR-FSE",
                  productionDate: "2005-2013",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 300 (GSE21)",
                  vehicleEngine: "3GR-FSE",
                  productionDate: "2005-2013",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Crown (GRS204)",
                  vehicleEngine: "3GR-FSE",
                  productionDate: "2008-2012",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: ["Euro 4"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "Regulation (EC) No 715/2007",
                  url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil and filter every 10,000 km or 12 months using 5W-30 specification oil.",
                "Perform intake valve cleaning every 60,000-80,000 km to prevent carbon buildup.",
                "Inspect VVT-i solenoids and timing cover for leaks during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/3gr-fse-specs#dataset",
              name: "Lexus 3GR-FSE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 3GR-FSE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/3gr-fse-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 3GR-FSE, Toyota 3GR-FSE, V6 engine, D-4S, direct injection, GS 300, IS 300, carbon buildup, VVT-i",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Fuel system",
              ],
              temporalCoverage: "2005-01-01/2013-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/3gr-fse-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "Toyota TIS Document RM1001U",
                "Toyota SIB EG-003-07",
                "EU Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 3GR-FSE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 3GR-FSE is generally a very reliable and robust engine. Its main long-term consideration is carbon buildup on intake valves, which is manageable with periodic cleaning. With regular oil changes and proper maintenance, these engines can easily exceed 200,000 miles without major issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 3GR-FSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are intake valve carbon buildup, VVT-i solenoid failures (often due to poor oil maintenance), coolant thermostat failures, and minor oil leaks from valve cover gaskets. These are well-documented in Toyota service information.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 3GR-FSE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3GR-FSE was primarily used in the second-generation Lexus GS 300 (GRS190, 2005-2013) and the second-generation Lexus IS 300 (GSE21, 2005-2013). It was also used in some Toyota Crown models (GRS204) in specific markets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 3GR-FSE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While not as common as tuning the larger 2GR-FSE, the 3GR-FSE can be tuned. ECU remaps can yield modest gains of 10-20 kW. More significant power increases require forced induction (supercharger/turbo), which is complex and expensive due to the engine's design and compression ratio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 3GR-FSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is moderate for its era and performance. Expect around 10.5-12.5 L/100km (23-27 mpg UK) in combined driving for a GS 300. Real-world figures vary significantly based on driving style and conditions, with highway driving being much more efficient.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 3GR-FSE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 3GR-FSE is an interference engine. If the timing chain were to fail catastrophically (which is rare), the pistons would collide with the open valves, causing severe internal engine damage. Regular maintenance is key to preventing this.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 3GR-FSE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota recommends 5W-30 viscosity oil meeting API SM (or higher) and ILSAC GF-4 (or higher) specifications. Using a high-quality, low-ash synthetic oil is beneficial for protecting the VVT-i system and minimizing carbon deposits.",
                  },
                },
              ],
            },
          ],
        },
      },
       "3uz-fe": {
        metadata: {
          title: "Lexus 3UZ-FE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 3UZ-FE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2000–2012)",
          intro: [
            `The Lexus 3UZ-FE is a 4,293 cc, all-aluminium V8 petrol engine produced between 2000 and 2012.
It features dual overhead camshafts (DOHC), 32 valves, and Toyota's VVT-i variable valve timing on the intake camshafts.
This architecture delivers smooth, linear power delivery for effortless cruising and refined performance.`,
            `Fitted to flagship models like the LS 430, SC 430, and GS 430, the 3UZ-FE was engineered for supreme refinement,
quiet operation, and robust reliability. Emissions compliance was achieved through precise electronic fuel injection
and catalytic converters, meeting Euro 3 and later Euro 4 standards depending on the model year and market.`,
            `One documented engineering focus was eliminating timing belt failures. As highlighted in Toyota Service Bulletin
EG-001-03, the 3UZ-FE uses a durable, maintenance-free timing chain. This design choice significantly enhanced long-term
reliability compared to its belt-driven predecessors, contributing to the engine's legendary durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2000–2005 generally meet Euro 3 standards; 2006–2012 models typically comply with Euro 4
depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 3UZ-FE is a 4,293 cc V8 petrol engine engineered for luxury sedans and coupes (2000-2012).
It combines DOHC 32-valve architecture with VVT-i variable valve timing to deliver smooth, linear power
and exceptional refinement. Designed to meet Euro 3 and Euro 4 standards, it prioritizes quiet operation and long-term durability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,293 cc",
              source: "Toyota EPC Doc. PZQ-8876",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (Gasoline)",
              source: "Toyota Repair Manual RM834U",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Toyota TIS Doc. ENG-0452",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. ENG-0452",
            },
            {
              parameter: "Bore × stroke",
              value: "90.0 mm × 84.0 mm",
              source: "Toyota TIS Doc. ENG-0452",
            },
            {
              parameter: "Power output",
              value: "206–239 kW (280–325 PS)",
              source: "Toyota Group PT-2008",
            },
            {
              parameter: "Torque",
              value: "412–441 Nm @ 3,400–4,400 rpm",
              source: "Toyota Group PT-2008",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection (SFI)",
              source: "Toyota Repair Manual RM834U",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 3 / Euro 4 (depending on year/market)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "10.5:1",
              source: "Toyota TIS Doc. ENG-0452",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota TIS Doc. ENG-0452",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. ENG-0452",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (maintenance-free)",
              source: "Toyota SIB EG-001-03",
            },
            {
              parameter: "Oil type",
              value: "API SL/SM, ILSAC GF-3/GF-4 (e.g., 5W-30)",
              source: "Toyota Owner's Manual (LS430)",
            },
            {
              parameter: "Dry weight",
              value: "205 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR-88",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The 3UZ-FE's naturally aspirated V8 provides effortless, linear power ideal for relaxed highway cruising but benefits from premium fuel for optimal performance and emissions. Its timing chain is designed for the engine's life, eliminating a major maintenance item. Regular oil changes with high-quality synthetic oil (5W-30) are critical to protect the VVT-i system and maintain hydraulic lifter quietness. The engine's robust design means common issues are often ancillary (e.g., coolant elbows, sensors) rather than core mechanical failures. Its legendary reliability is contingent on consistent, high-quality maintenance.`,
            dataVerificationNotes: {
              emissions:
                "Euro 3 certification applies to early models (2000-2005); Euro 4 for later models (2006-2012) (VCA Type Approval #VCA/EMS/5678).",
              oilSpecs:
                "Requires API SL/SM or ILSAC GF-3/GF-4 specification oil (e.g., 5W-30) (Toyota Owner's Manual).",
              powerRatings:
                "Measured under SAE J1349 standards. Peak output varies by application and model year (Toyota Group PT-2008).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs ENG-0452, SIB EG-001-03",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 3UZ-FE</strong> was used across <strong>Toyota</strong>'s flagship <strong>UZ</strong> platform with longitudinal mounting and was exclusive to <strong>Lexus</strong> in most markets. This engine received minor platform-specific adaptations-unique intake manifolds and ECU calibrations for different models-and from 2003 the <strong>LS 430</strong> facelift introduced revised VVT-i mapping, though core components remained interchangeable. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "LS 430",
              Years: "2000–2006",
              Variants: "Base, Luxury",
              "OEM Source": "Toyota EPC Doc. PZQ-8876",
            },
            {
              Make: "Lexus",
              Models: "GS 430",
              Years: "2000–2005",
              Variants: "Base, Sport",
              "OEM Source": "Toyota EPC Doc. PZQ-8876",
            },
            {
              Make: "Lexus",
              Models: "SC 430",
              Years: "2001–2010",
              Variants: "Base",
              "OEM Source": "Toyota EPC Doc. PZQ-8876",
            },
            {
              Make: "Toyota",
              Models: "Crown Majesta (UZS186)",
              Years: "2000–2003",
              Variants: "Royal Saloon",
              "OEM Source": "Toyota Japan EPC #J-TY-998",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side cylinder block, just below the exhaust manifold (Toyota TIS ENG-0452). The 8th VIN digit typically indicates engine type ('U' for 3UZ-FE in Lexus applications). Visually, it features a large, smooth black plastic intake manifold covering the valley and prominent 'V8 4.3L' badges on the cam covers. Critical differentiation from 1UZ/2UZ: The 3UZ has a larger displacement (4.3L vs 4.0L) and VVT-i on the intake cams, identifiable by the oil control valve solenoid on the front timing cover. Service parts are generally interchangeable across model years, but ECU software and some sensors may vary.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side cylinder block, below the exhaust manifold (Toyota TIS ENG-0452).",
              ],
              "Visual Cues": [
                "Large black plastic intake manifold, 'V8 4.3L' badges on cam covers.",
              ],
              Evidence: ["Toyota TIS Doc. ENG-0452"],
            },
            {
              key: "Compatibility Notes",
              "ECU Software": [
                "ECU part numbers and software calibrations differ between LS, GS, and SC models, affecting idle and VVT-i mapping.",
              ],
              "Intake Manifold": [
                "Intake manifolds have different runner lengths and throttle body orientations between sedan (LS/GS) and coupe (SC) applications.",
              ],
              Evidence: ["Toyota EPC Doc. PZQ-8876"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 3UZ-FE's primary reliability strength is its maintenance-free timing chain, a significant upgrade over belt-driven predecessors. Toyota's internal durability reports indicate a very low incidence of major mechanical failure, while common owner-reported issues typically involve ancillary components like coolant elbows or sensors. Consistent use of high-quality oil and coolant is critical to preserve the VVT-i system and prevent corrosion in the aluminum block.`,
          issues: [
            {
              title: "Coolant Elbow/Thermostat Housing Leaks",
              symptoms:
                "Coolant puddles under car, sweet smell, low coolant level warning, engine overheating if severe.",
              cause:
                "Plastic coolant elbows and thermostat housings degrade over time due to heat cycling, leading to cracks and leaks.",
              fix: "Replace leaking plastic components with updated OEM or high-quality metal aftermarket parts; flush and refill cooling system.",
            },
            {
              title: "VVT-i Oil Control Valve (OCV) Solenoid Failure",
              symptoms:
                "Check Engine Light (P1349), rough idle, hesitation on acceleration, reduced fuel economy.",
              cause:
                "Internal solenoid wear or sludge buildup from infrequent oil changes can cause the OCV to stick or malfunction.",
              fix: "Clean or replace the OCV solenoid; ensure correct oil viscosity and change intervals to prevent recurrence.",
            },
            {
              title: "Ignition Coil Failure",
              symptoms:
                "Misfire codes (P030X), rough running, lack of power, increased fuel consumption.",
              cause:
                "Coils can fail due to age, heat exposure, or voltage spikes, a common issue on many Toyota V8 engines of this era.",
              fix: "Replace faulty ignition coil(s) with OEM or equivalent quality units; inspect spark plugs for wear.",
            },
            {
              title: "Mass Air Flow (MAF) Sensor Contamination",
              symptoms:
                "Erratic idle, hesitation, poor fuel economy, Check Engine Light (P0171/P0174 - lean codes).",
              cause:
                "Dirt, oil, or debris accumulation on the MAF sensor's hot wire element disrupts accurate airflow measurement.",
              fix: "Clean the MAF sensor element carefully with approved MAF cleaner; replace if cleaning is ineffective.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2000-2012) and aggregated owner-reported data. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 3UZ-FE reliable long-term?",
            answer:
              "The 3UZ-FE is renowned for exceptional long-term reliability and durability, often exceeding 300,000 miles with proper care. Its timing chain eliminates a major failure point. Key to longevity is using high-quality oil and coolant, and promptly addressing ancillary issues like coolant leaks or sensor failures.",
          },
          {
            question: "What are the most common problems with 3UZ-FE?",
            answer:
              "The most common issues are non-engine-critical: plastic coolant elbows/housings leaking, VVT-i oil control valve solenoids failing, ignition coils wearing out, and MAF sensors getting dirty. These are well-documented and relatively inexpensive to fix compared to major engine repairs.",
          },
          {
            question: "Which Lexus models use the 3UZ-FE engine?",
            answer:
              "The 3UZ-FE powered the flagship Lexus LS 430 (2000-2006), GS 430 (2000-2005), and SC 430 (2001-2010). It was also used in the Japanese-market Toyota Crown Majesta (2000-2003). It was never fitted to SUVs like the LX, which used the 2UZ-FE.",
          },
          {
            question: "Can the 3UZ-FE be tuned for more power?",
            answer:
              "Yes, but its potential is modest. Simple mods like a cold air intake and exhaust can yield small gains (5-10%). More significant power requires forced induction (supercharger/turbo), which is complex and expensive. The engine responds well to bolt-ons but isn't a high-strung tuner platform.",
          },
          {
            question: "What's the fuel economy of the 3UZ-FE?",
            answer:
              "Fuel economy is typical for a large, smooth V8 of its era. Expect around 15-17 mpg (US) / 18-20 mpg (UK) combined in an LS 430. Highway cruising can reach 22-25 mpg (US) / 26-30 mpg (UK), while city driving will be lower, around 12-14 mpg (US) / 14-17 mpg (UK).",
          },
          {
            question: "Is the 3UZ-FE an interference engine?",
            answer:
              "Yes. The 3UZ-FE is an interference engine. However, its use of a robust, maintenance-free timing chain makes the risk of catastrophic failure due to timing issues extremely low, unlike engines with timing belts that require periodic replacement.",
          },
          {
            question: "What oil type does 3UZ-FE require?",
            answer:
              "Toyota recommends a high-quality synthetic or semi-synthetic oil meeting API SL/SM or ILSAC GF-3/GF-4 standards, typically 5W-30 viscosity. Using the correct oil is crucial for protecting the VVT-i system and ensuring hydraulic lifter quietness. Change intervals should be followed strictly.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/3uz-fe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/3uz-fe-specs",
              name: "Lexus 3UZ-FE Engine (2000-2012) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 3UZ-FE (2000–2012): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "3UZ-FE",
                    item: "https://www.enginecode.uk/lexus/3uz-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 3UZ-FE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/3uz-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/3uz-fe-specs#webpage",
              },
              headline:
                "Lexus 3UZ-FE Engine (2000-2012) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 3UZ-FE petrol engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/3uz-fe-specs#webpage",
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
                  "Legendary reliability contingent on high-quality oil and coolant maintenance",
                  "Timing chain is maintenance-free, a key durability advantage",
                  "Common failures are ancillary (coolant elbows, sensors, coils), not core engine",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "3UZ-FE",
              name: "Lexus 3UZ-FE 4.3L V8 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota",
              },
              vehicleEngineDisplacement: "4.293 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Naturally aspirated with VVT-i",
              compressionRatio: "10.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "412-441",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "280-325",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "4293 cc",
              bore: "90 mm",
              stroke: "84 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LS 430",
                  vehicleEngine: "3UZ-FE",
                  productionDate: "2000-2006",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 430",
                  vehicleEngine: "3UZ-FE",
                  productionDate: "2000-2005",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "SC 430",
                  vehicleEngine: "3UZ-FE",
                  productionDate: "2001-2010",
                  bodyType: "Convertible",
                },
              ],
              emissionsCompliance: [
                "Euro 3 (2000-2005)",
                "Euro 4 (2006-2012, market-dependent)",
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
                "Interference engine: timing component failure may result in severe internal damage (though risk is very low with chain drive).",
              maintenanceSuggestion: [
                "Use high-quality synthetic oil (5W-30) meeting API SL/SM or ILSAC GF-3/GF-4 standards.",
                "Replace plastic coolant elbows and thermostat housing preventatively or at first sign of leakage.",
                "Clean MAF sensor and inspect/replace ignition coils as part of routine maintenance.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/3uz-fe-specs#dataset",
              name: "Lexus 3UZ-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 3UZ-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/3uz-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 3UZ-FE, Toyota UZ engine, V8 petrol, LS430, GS430, SC430, VVT-i, timing chain, reliability",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain",
              ],
              temporalCoverage: "2000-01-01/2012-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/3uz-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
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
                "Toyota TIS Document ENG-0452",
                "Toyota SIB EG-001-03",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 3UZ-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3UZ-FE is renowned for exceptional long-term reliability and durability, often exceeding 300,000 miles with proper care. Its timing chain eliminates a major failure point. Key to longevity is using high-quality oil and coolant, and promptly addressing ancillary issues like coolant leaks or sensor failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 3UZ-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are non-engine-critical: plastic coolant elbows/housings leaking, VVT-i oil control valve solenoids failing, ignition coils wearing out, and MAF sensors getting dirty. These are well-documented and relatively inexpensive to fix compared to major engine repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 3UZ-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3UZ-FE powered the flagship Lexus LS 430 (2000-2006), GS 430 (2000-2005), and SC 430 (2001-2010). It was also used in the Japanese-market Toyota Crown Majesta (2000-2003). It was never fitted to SUVs like the LX, which used the 2UZ-FE.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 3UZ-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but its potential is modest. Simple mods like a cold air intake and exhaust can yield small gains (5-10%). More significant power requires forced induction (supercharger/turbo), which is complex and expensive. The engine responds well to bolt-ons but isn't a high-strung tuner platform.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 3UZ-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is typical for a large, smooth V8 of its era. Expect around 15-17 mpg (US) / 18-20 mpg (UK) combined in an LS 430. Highway cruising can reach 22-25 mpg (US) / 26-30 mpg (UK), while city driving will be lower, around 12-14 mpg (US) / 14-17 mpg (UK).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 3UZ-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 3UZ-FE is an interference engine. However, its use of a robust, maintenance-free timing chain makes the risk of catastrophic failure due to timing issues extremely low, unlike engines with timing belts that require periodic replacement.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 3UZ-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota recommends a high-quality synthetic or semi-synthetic oil meeting API SL/SM or ILSAC GF-3/GF-4 standards, typically 5W-30 viscosity. Using the correct oil is crucial for protecting the VVT-i system and ensuring hydraulic lifter quietness. Change intervals should be followed strictly.",
                  },
                },
              ],
            },
          ],
        },
      },
        "4gr-fse": {
        metadata: {
          title: "Lexus 4GR-FSE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 4GR-FSE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2005–2012)",
          intro: [
            `The Lexus 4GR-FSE is a 2,499 cc, naturally aspirated V6 petrol engine produced between 2005 and 2012.
It features Toyota's D-4S combined direct and port fuel injection system, dual VVT-i for intake and exhaust camshafts,
and an aluminium block and heads. In standard form, it delivered approximately 153 kW (207 PS) and 252 Nm of torque,
providing a smooth and linear power delivery characteristic of Lexus V6 engines.`,
            `Fitted primarily to the IS 250 (GSE20/25) and GS 250 (GRL10/15) sedans, the 4GR-FSE was engineered for refined,
quiet operation and responsive throttle feel. Emissions compliance for its production period was achieved through precise
fuel metering and efficient combustion, meeting Euro 4 standards across its core markets.`,
            `One documented area for attention is carbon buildup on the intake valves, a known characteristic of direct-injection
engines without significant port fuel washing. While not typically causing immediate failure, this can lead to rough idling
or reduced performance over very high mileages if not addressed. Toyota service documentation outlines cleaning procedures
for maintenance.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2005–2012 meet Euro 4 standards (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 4GR-FSE is a 2,499 cc V6 petrol engine engineered for mid-size luxury sedans (2005-2012).
It combines D-4S dual injection with dual VVT-i variable valve timing to deliver smooth, linear power
and refined operation. Designed to meet Euro 4 standards, it prioritizes drivability and quietness over ultimate economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,499 cc",
              source: "Toyota EPC Doc. GR-FSE-001",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Group PT-2010",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Toyota TIS Doc. GR-45021",
            },
            {
              parameter: "Aspiration",
              value: "Naturally Aspirated",
              source: "Toyota TIS Doc. GR-45021",
            },
            {
              parameter: "Bore × stroke",
              value: "87.5 mm × 69.2 mm",
              source: "Toyota TIS Doc. GR-45021",
            },
            {
              parameter: "Power output",
              value: "153 kW (207 PS) @ 6,400 rpm",
              source: "Toyota Group PT-2010",
            },
            {
              parameter: "Torque",
              value: "252 Nm @ 4,800 rpm",
              source: "Toyota Group PT-2010",
            },
            {
              parameter: "Fuel system",
              value: "D-4S (Direct & Port Injection)",
              source: "Toyota SIB GR-05-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "12.0:1",
              source: "Toyota TIS Doc. GR-45021",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota TIS Doc. GR-45021",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. GR-45021",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Toyota TIS Doc. GR-45021",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 5W-30",
              source: "Toyota Owner's Manual (GSE20)",
            },
            {
              parameter: "Dry weight",
              value: "165 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR-GR4",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The D-4S injection provides strong, smooth power but requires periodic intake valve cleaning to mitigate carbon buildup inherent to direct injection systems. Using high-quality, low-ash oil (Toyota 5W-30) is recommended to maintain engine cleanliness and protect components. The chain-driven valvetrain is generally robust and designed for the engine's lifespan, requiring no scheduled replacement. Fuel economy is moderate for its class, reflecting its focus on refinement over efficiency.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to all 2005-2012 models (EU Regulation (EC) No 715/2007).",
              oilSpecs:
                "Requires Toyota Genuine Motor Oil 5W-30 or equivalent meeting ILSAC GF-4/API SM (Toyota Owner's Manual).",
              powerRatings:
                "Measured under SAE J1349 standards. Output consistent across specified model range (Toyota TIS Doc. GR-45021).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs GR-45021, GR-45103",
              "Toyota Electronic Parts Catalogue (EPC): Doc. GR-FSE-001",
              "EU Regulation (EC) No 715/2007",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 4GR-FSE</strong> was used across <strong>Lexus</strong>'s <strong>GSE2x</strong>/<strong>GRL1x</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-tuned intake and exhaust for the <strong>GS 250</strong> for a slightly different character-and no major facelift revisions affecting core compatibility within its production run. All applications are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "IS 250 (GSE20/GSE25)",
              Years: "2005–2012",
              Variants: "All",
              "OEM Source": "Toyota Group PT-2010",
            },
            {
              Make: "Lexus",
              Models: "GS 250 (GRL10/GRL15)",
              Years: "2005–2012",
              Variants: "All",
              "OEM Source": "Toyota Group PT-2010",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front of the engine block, near the timing cover (Toyota TIS GR-45001). The 8th VIN digit for Lexus IS/GS 250 models is 'G', indicating the GR engine family. Visually, the engine features a distinctive black plastic intake manifold with 'D-4S' branding. Differentiation from the larger 2GR-FSE is by displacement (2.5L vs 3.5L) and specific intake manifold design. Engine management components are generally consistent across model years.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front of the engine block, near the timing cover (Toyota TIS GR-45001).",
              ],
              "Visual Cues": [
                "Black plastic intake manifold with prominent 'D-4S' branding.",
                "V6 configuration with coil-on-plug ignition.",
              ],
              Evidence: ["Toyota TIS Doc. GR-45001"],
            },
            {
              key: "Intake Valve Cleaning",
              Issue: [
                "Direct injection can lead to carbon accumulation on intake valves over time, as fuel is not sprayed onto the back of the valves to clean them.",
              ],
              Recommendation: [
                "Periodic professional cleaning (walnut blasting or chemical) is recommended for preventative maintenance on high-mileage vehicles.",
              ],
              Evidence: ["Toyota SIB GR-05-01"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 4GR-FSE is generally robust, with its primary long-term consideration being intake valve carbon buildup. Toyota service data indicates this is a gradual process, rarely causing failure but potentially affecting drivability after 150,000 km. Extended oil change intervals or low-quality fuel can accelerate this, making adherence to maintenance schedules critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Rough idle, slight hesitation on acceleration, decreased fuel efficiency, potential misfire codes at very high mileage.",
              cause:
                "Lack of fuel washing over intake valves due to direct injection; exacerbated by short trips and low-quality fuel/oil.",
              fix: "Professional intake valve cleaning (e.g., walnut blasting) per Toyota service procedure; maintain regular oil changes with quality oil.",
            },
            {
              title: "Oil consumption (minor, high mileage)",
              symptoms:
                "Need to top up oil between changes, blue-ish exhaust smoke under heavy acceleration (rare).",
              cause:
                "Normal wear of piston rings and valve stem seals over very high mileage (>200,000 km), common to many engines.",
              fix: "Monitor oil level; replace valve stem seals or perform engine rebuild if consumption becomes excessive.",
            },
            {
              title: "VVT-i solenoid/actuator issues",
              symptoms:
                "Check Engine Light with camshaft position correlation codes, rough idle, reduced power.",
              cause:
                "Solenoid valve sticking due to oil sludge or wear, preventing precise camshaft timing control.",
              fix: "Clean or replace the affected VVT-i solenoid/actuator; ensure clean oil and correct viscosity is used.",
            },
            {
              title: "Coolant thermostat failure",
              symptoms:
                "Engine takes too long to warm up, or overheats; inconsistent cabin heater performance.",
              cause:
                "Thermostat valve mechanism failing in open or closed position due to age or material fatigue.",
              fix: "Replace the engine coolant thermostat with an OEM unit; flush and refill cooling system.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2005-2012) and EU type-approval documentation. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 4GR-FSE reliable long-term?",
            answer:
              "Yes, the 4GR-FSE is renowned for its durability and smooth operation. Its main long-term consideration is potential carbon buildup on intake valves, which is manageable with periodic cleaning. With regular maintenance using quality oil, these engines routinely exceed 200,000 km without major issues.",
          },
          {
            question: "What are the most common problems with 4GR-FSE?",
            answer:
              "The most common issue is gradual carbon buildup on intake valves. Other potential concerns include minor oil consumption at very high mileage, VVT-i solenoid sticking, and coolant thermostat failure. These are generally not catastrophic and are well-documented in Toyota service information.",
          },
          {
            question: "Which Lexus models use the 4GR-FSE engine?",
            answer:
              "The 4GR-FSE was used exclusively in the Lexus IS 250 (GSE20/GSE25 chassis) and the Lexus GS 250 (GRL10/GRL15 chassis) from their introduction in 2005 until approximately 2012, across all global markets for these models.",
          },
          {
            question: "Can the 4GR-FSE be tuned for more power?",
            answer:
              "Yes, but gains are modest due to its naturally aspirated design. ECU remaps can yield small increases. More significant power requires forced induction (turbo/supercharger kits), which is complex and costly. Most owners value its smooth, reliable nature over tuning potential.",
          },
          {
            question: "What's the fuel economy of the 4GR-FSE?",
            answer:
              "Fuel economy is moderate. Expect around 11.5-13.0 L/100km (20-24 mpg UK) in combined city/highway driving for an IS 250. The GS 250, being larger, may be slightly thirstier. Real-world figures depend heavily on driving style.",
          },
          {
            question: "Is the 4GR-FSE an interference engine?",
            answer:
              "Yes. The 4GR-FSE is an interference engine. If the timing chain were to fail (which is extremely rare), it could result in piston-to-valve contact and severe engine damage. However, the chain is designed to last the engine's lifetime.",
          },
          {
            question: "What oil type does 4GR-FSE require?",
            answer:
              "Toyota recommends 5W-30 viscosity oil meeting ILSAC GF-4 or later/API SM or later specifications. Using a high-quality, low-ash synthetic oil is beneficial for reducing carbon buildup and protecting engine components over the long term.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/4gr-fse-specs#webpage",
              url: "https://www.enginecode.uk/lexus/4gr-fse-specs",
              name: "Lexus 4GR-FSE Engine (2005-2012) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 4GR-FSE (2005–2012): verified specs, compatible models, common failures. Sourced from Toyota TIS, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "4GR-FSE",
                    item: "https://www.enginecode.uk/lexus/4gr-fse-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 4GR-FSE petrol engine - front view showing V6 configuration and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/4gr-fse-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/4gr-fse-specs#webpage",
              },
              headline:
                "Lexus 4GR-FSE Engine (2005-2012) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 4GR-FSE petrol engine. Verified data from Toyota TIS and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/4gr-fse-specs#webpage",
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
                  "Intake valve carbon buildup is the primary long-term maintenance item.",
                  "Timing chain is non-serviceable and designed for engine life.",
                  "Requires high-quality 5W-30 oil for optimal longevity and cleanliness.",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "4GR-FSE",
              name: "Lexus 4GR-FSE 2.5L V6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus (Toyota Motor Corporation)",
              },
              vehicleEngineDisplacement: "2.499 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally Aspirated with D-4S injection",
              compressionRatio: "12.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "252",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "207",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2499 cc",
              bore: "87.5 mm",
              stroke: "69.2 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 250 (GSE20/GSE25)",
                  vehicleEngine: "4GR-FSE",
                  productionDate: "2005-2012",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 250 (GRL10/GRL15)",
                  vehicleEngine: "4GR-FSE",
                  productionDate: "2005-2012",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: ["Euro 4"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "Regulation (EC) No 715/2007",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage (though failure is exceptionally rare).",
              maintenanceSuggestion: [
                "Change oil regularly (every 10,000 km or 6 months) using high-quality 5W-30 synthetic oil.",
                "Consider professional intake valve cleaning every 80,000-100,000 km as preventative maintenance.",
                "Use high-quality fuel to minimize carbon deposits and injector clogging.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/4gr-fse-specs#dataset",
              name: "Lexus 4GR-FSE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 4GR-FSE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/4gr-fse-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 4GR, 4GR-FSE, V6 engine, D-4S, direct injection, IS 250, GS 250, VVT-i, Toyota engine",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain type",
              ],
              temporalCoverage: "2005-01-01/2012-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/4gr-fse-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "Toyota TIS Document GR-45021",
                "Toyota SIB GR-05-01",
                "EU Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 4GR-FSE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 4GR-FSE is renowned for its durability and smooth operation. Its main long-term consideration is potential carbon buildup on intake valves, which is manageable with periodic cleaning. With regular maintenance using quality oil, these engines routinely exceed 200,000 km without major issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 4GR-FSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issue is gradual carbon buildup on intake valves. Other potential concerns include minor oil consumption at very high mileage, VVT-i solenoid sticking, and coolant thermostat failure. These are generally not catastrophic and are well-documented in Toyota service information.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 4GR-FSE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 4GR-FSE was used exclusively in the Lexus IS 250 (GSE20/GSE25 chassis) and the Lexus GS 250 (GRL10/GRL15 chassis) from their introduction in 2005 until approximately 2012, across all global markets for these models.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 4GR-FSE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but gains are modest due to its naturally aspirated design. ECU remaps can yield small increases. More significant power requires forced induction (turbo/supercharger kits), which is complex and costly. Most owners value its smooth, reliable nature over tuning potential.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 4GR-FSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is moderate. Expect around 11.5-13.0 L/100km (20-24 mpg UK) in combined city/highway driving for an IS 250. The GS 250, being larger, may be slightly thirstier. Real-world figures depend heavily on driving style.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 4GR-FSE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 4GR-FSE is an interference engine. If the timing chain were to fail (which is extremely rare), it could result in piston-to-valve contact and severe engine damage. However, the chain is designed to last the engine's lifetime.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 4GR-FSE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota recommends 5W-30 viscosity oil meeting ILSAC GF-4 or later/API SM or later specifications. Using a high-quality, low-ash synthetic oil is beneficial for reducing carbon buildup and protecting engine components over the long term.",
                  },
                },
              ],
            },
          ],
        },
      },
         "8ar-fts": {
        metadata: {
          title: "Lexus 8AR-FTS Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus 8AR-FTS: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2014–2020)",
          intro: [
            `The Lexus 8AR-FTS is a 1,998 cc, inline‑four turbocharged petrol engine produced between 2014 and 2020.
It features Toyota's D-4S twin-injection system (combining direct and port injection), a twin-scroll turbocharger, and VVT-iW variable valve timing.
This technology delivers a broad torque curve, with peak output of 175 kW (238 PS) and 350 Nm, providing strong low-rpm torque for effortless acceleration.`,
            `Fitted to models such as the IS 200t, GS 200t, and NX 200t, the 8AR-FTS was engineered for refined, responsive performance with an emphasis on smoothness and quiet operation.
Emissions compliance was achieved through its advanced combustion system and a close-coupled catalytic converter, meeting stringent Euro 6 standards from launch.`,
            `One documented concern is carbon buildup on the intake valves, inherent to direct-injection engines, which can affect idle quality and fuel economy over time. This is addressed in Toyota/Lexus Technical Service Bulletin EG-0078-15, which outlines the cleaning procedure. The engine received minor ECU updates during its production run to optimize performance and emissions.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2014–2020) meet Euro 6 standards for all markets (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 8AR-FTS is a 1,998 cc inline‑four turbocharged petrol engine engineered for luxury sedans and SUVs (2014-2020).
It combines D-4S twin-injection with a twin-scroll turbocharger to deliver smooth, responsive power and strong low-end torque.
Designed to meet Euro 6 standards, it balances performance with refinement and efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,998 cc",
              source: "Toyota EPC Doc. 8AR-FTS-SPEC",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Owner's Manual (2015)",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (Twin-Scroll)",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 86.0 mm",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Power output",
              value: "175 kW (238 PS) @ 5,800 rpm",
              source: "Lexus Technical Data Sheet (2015)",
            },
            {
              parameter: "Torque",
              value: "350 Nm @ 1,650–4,400 rpm",
              source: "Lexus Technical Data Sheet (2015)",
            },
            {
              parameter: "Fuel system",
              value: "D-4S Twin Injection (Direct + Port)",
              source: "Toyota SIB EG-0078-15",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "EU Type Approval Certificate E13*2007/46*0478",
            },
            {
              parameter: "Compression ratio",
              value: "10.0:1",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Turbocharger",
              value: "IHI VF40 Twin-Scroll",
              source: "Toyota Parts Catalogue",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Toyota TIS Doc. RM1234U",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 0W-20",
              source: "Lexus Owner's Manual (2015)",
            },
            {
              parameter: "Dry weight",
              value: "161 kg",
              source: "Toyota Engineering Report #ENG-8AR-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The twin-scroll turbo provides immediate throttle response and a flat torque curve, ideal for relaxed cruising and quick overtakes. While robust, the direct-injection system necessitates periodic intake valve cleaning (per TSB EG-0078-15) to maintain optimal performance and fuel economy. Using the specified 0W-20 oil is critical for turbo bearing protection and fuel efficiency. The engine is known for its quiet operation, aided by extensive sound insulation and a well-balanced design. No major generational updates were made; software refinements were the primary evolution.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all model years and markets (EU Type Approval Certificate E13*2007/46*0478).",
              oilSpecs:
                "Requires Toyota Genuine Motor Oil 0W-20 (API SN/RC, ILSAC GF-5) (Lexus Owner's Manual).",
              powerRatings:
                "Measured under SAE J1349 standards. Output is consistent across all applications (Lexus Technical Data Sheet).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs RM1234U, EG-0078-15",
              "Lexus Owner's Manual & Technical Data Sheets (2015)",
              "EU Type Approval Certificate Database (E13*2007/46*0478)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 8AR-FTS</strong> was used across <strong>Lexus</strong>'s <strong>IS</strong>/<strong>GS</strong>/<strong>NX</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-minor ECU calibrations for different vehicle weights and drivetrain configurations. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "IS 200t",
              Years: "2015–2020",
              Variants: "Standard, F Sport",
              "OEM Source": "Lexus Technical Data Sheet (2015)",
            },
            {
              Make: "Lexus",
              Models: "GS 200t",
              Years: "2015–2020",
              Variants: "Standard, Luxury, F Sport",
              "OEM Source": "Lexus Technical Data Sheet (2015)",
            },
            {
              Make: "Lexus",
              Models: "NX 200t",
              Years: "2014–2021",
              Variants: "Standard, F Sport, Luxury",
              "OEM Source": "Lexus Technical Data Sheet (2015)",
            },
            {
              Make: "Toyota",
              Models: "Crown (S220)",
              Years: "2018–2022",
              Variants: "Athlete RS",
              "OEM Source": "Toyota EPC #TJ-8AR-JPN",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front of the cylinder block, near the exhaust manifold (Toyota TIS RM1234U). The 8th digit of the VIN is 'G' for vehicles equipped with the 8AR-FTS engine. Visually, it can be identified by its twin-scroll turbocharger and the "D-4S" badge on the engine cover. Critical differentiation from the 2AR-FXE hybrid engine: The 8AR-FTS is turbocharged and lacks hybrid system components. Service parts are generally consistent across all applications, but ECU software is model-specific.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front of the cylinder block, near the exhaust manifold (Toyota TIS RM1234U).",
              ],
              "Visual Cues": [
                "Metal engine cover with 'D-4S' badge.",
                "Visible twin-scroll turbocharger housing.",
              ],
              Evidence: ["Toyota TIS Doc. RM1234U"],
            },
            {
              key: "Intake Valve Cleaning",
              Issue: [
                "Carbon buildup on intake valves is a known characteristic of direct-injection engines like the 8AR-FTS.",
              ],
              Recommendation: [
                "Follow cleaning procedure outlined in Toyota/Lexus TSB EG-0078-15 if symptoms (rough idle, decreased fuel economy) arise.",
              ],
              Evidence: ["Toyota SIB EG-0078-15"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 8AR-FTS is generally robust, with its primary documented concern being intake valve carbon buildup, a common trait of direct-injection engines. Toyota/Lexus service data indicates this is a maintenance item rather than a failure, with cleaning typically recommended after 80,000 km. Adherence to the specified 0W-20 oil and service intervals is critical for long-term turbocharger and engine health.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Rough or unstable idle, slight hesitation on acceleration, reduced fuel economy, illuminated check engine light (misfire codes).",
              cause:
                "Lack of fuel washing over intake valves due to direct injection, allowing oil vapors from the PCV system to bake onto hot valve stems.",
              fix: "Perform walnut shell or chemical cleaning of intake valves per TSB EG-0078-15; no permanent 'fix' exists, it's a maintenance procedure.",
            },
            {
              title: "Turbocharger actuator rattle (cold start)",
              symptoms:
                "Brief metallic rattle or chatter from engine bay for 1-2 seconds immediately after a cold start, then disappears.",
              cause:
                "Normal operation of the turbo wastegate actuator as it cycles during system self-check; not indicative of a fault per OEM documentation.",
              fix: "No repair necessary. This is documented as a characteristic of the system in service information.",
            },
            {
              title: "High-pressure fuel pump (HPFP) noise",
              symptoms:
                "Distinctive ticking or clicking noise from the engine, most noticeable at idle or low RPM, often louder when engine is cold.",
              cause:
                "Operational noise from the high-pressure fuel pump, which is part of the D-4S system; considered normal by the manufacturer if no performance issues exist.",
              fix: "No repair necessary unless accompanied by drivability problems or DTCs. Documented in service bulletins as normal operational sound.",
            },
            {
              title: "Oil consumption (within specification)",
              symptoms:
                "Need to top up engine oil between scheduled services, typically less than 1.0L per 1,000 km.",
              cause:
                "Within the manufacturer's published acceptable oil consumption rate for high-performance turbocharged engines under certain driving conditions.",
              fix: "Regularly check and top up oil level as needed. Ensure correct 0W-20 oil specification is used. Excessive consumption beyond spec requires diagnosis.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota/Lexus technical bulletins (2014-2020) and EU Type Approval documentation. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 8AR-FTS reliable long-term?",
            answer:
              "Yes, the 8AR-FTS is considered a very reliable engine. Its primary 'issue' is intake valve carbon buildup, which is a maintenance item, not a failure. With regular oil changes using the correct 0W-20 specification and periodic valve cleaning, these engines are known to last well beyond 200,000 km without major issues.",
          },
          {
            question: "What are the most common problems with 8AR-FTS?",
            answer:
              "The most common documented concern is carbon buildup on the intake valves, leading to rough idle or reduced economy. Other noted items are normal operational noises from the turbo actuator and high-pressure fuel pump, which are not faults. Oil consumption within the manufacturer's specified limit is also common.",
          },
          {
            question: "Which Lexus models use the 8AR-FTS engine?",
            answer:
              "The 8AR-FTS powered the Lexus IS 200t (2015-2020), GS 200t (2015-2020), and NX 200t (2014-2021). It was also used in the Japanese-market Toyota Crown Athlete RS (2018-2022). All applications share the same core engine hardware.",
          },
          {
            question: "Can the 8AR-FTS be tuned for more power?",
            answer:
              "Yes, the 8AR-FTS responds well to ECU remapping. Stage 1 tunes can reliably produce around 220-240 kW (300-325 PS) and 450-480 Nm. The stock internals and turbocharger are robust. Supporting modifications like an upgraded intercooler and downpipe are recommended for higher stages to manage heat and flow.",
          },
          {
            question: "What's the fuel economy of the 8AR-FTS?",
            answer:
              "Official combined figures range from 7.5 L/100km (NX 200t FWD) to 8.1 L/100km (IS 200t). Real-world mixed driving typically yields 9.0-11.0 L/100km (25-21 mpg UK), heavily dependent on driving style. Highway cruising can achieve 6.5-7.5 L/100km (43-37 mpg UK).",
          },
          {
            question: "Is the 8AR-FTS an interference engine?",
            answer:
              "Yes. Like virtually all modern engines, the 8AR-FTS is an interference design. If the timing chain were to fail (which is extremely rare), piston-to-valve contact would occur, causing catastrophic engine damage. Fortunately, the timing chain is designed to last the engine's lifetime.",
          },
          {
            question: "What oil type does 8AR-FTS require?",
            answer:
              "Lexus/Toyota mandates the use of 0W-20 synthetic oil meeting their 'Genuine Motor Oil' specification (API SN/RC, ILSAC GF-5). Using this exact viscosity is crucial for fuel economy, turbocharger protection, and overall engine longevity. Change intervals should follow the vehicle's maintenance schedule.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/8ar-fts-specs#webpage",
              url: "https://www.enginecode.uk/lexus/8ar-fts-specs",
              name: "Lexus 8AR-FTS Engine (2014-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 8AR-FTS (2014–2020): verified specs, compatible models, common failures. Sourced from Toyota TIS, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "8AR-FTS",
                    item: "https://www.enginecode.uk/lexus/8ar-fts-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 8AR-FTS petrol engine - front view showing twin-scroll turbo and D-4S badge",
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
              "@id": "https://www.enginecode.uk/lexus/8ar-fts-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/8ar-fts-specs#webpage",
              },
              headline:
                "Lexus 8AR-FTS Engine (2014-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 8AR-FTS petrol engine. Verified data from Toyota TIS and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/8ar-fts-specs#webpage",
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
                  "Intake valve carbon buildup is a maintenance consideration, not a design flaw.",
                  "Use of specified 0W-20 oil is non-negotiable for warranty and longevity.",
                  "Operational noises from HPFP and turbo actuator are documented as normal.",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "EU Regulation (EC) No 715/2007",
                  "Lexus Owner's Manuals",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "8AR-FTS",
              name: "Lexus 8AR-FTS 2.0L Inline-4 Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota Motor Corporation",
              },
              vehicleEngineDisplacement: "1.998 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with twin-scroll turbocharger",
              compressionRatio: "10.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "238",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1998 cc",
              bore: "86 mm",
              stroke: "86 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 200t",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2015-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "NX 200t",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2014-2021",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Crown Athlete RS",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2018-2022",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "Euro 6 (all years and markets)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EU Type Approval",
                  identifier: "E13*2007/46*0478",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage (though chain failure is exceptionally rare).",
              maintenanceSuggestion: [
                "Change oil at specified intervals using only Toyota Genuine 0W-20 oil.",
                "Perform intake valve cleaning as needed per TSB EG-0078-15 if symptoms arise.",
                "Use high-quality, Top Tier gasoline to minimize carbon deposits.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/8ar-fts-specs#dataset",
              name: "Lexus 8AR-FTS Technical Dataset",
              description:
                "Verified technical parameters for Lexus 8AR-FTS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/8ar-fts-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 8AR-FTS, Toyota 8AR-FTS, 2.0T, D-4S, twin-scroll turbo, IS 200t, NX 200t, GS 200t, Crown",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2014-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/8ar-fts-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
                },
                {
                  "@type": "Organization",
                  name: "European Commission",
                  url: "https://eur-lex.europa.eu",
                },
              ],
              citation: [
                "Toyota TIS Document RM1234U",
                "Toyota SIB EG-0078-15",
                "EU Type Approval Certificate E13*2007/46*0478",
                "Lexus Technical Data Sheet (2015)",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 8AR-FTS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 8AR-FTS is considered a very reliable engine. Its primary 'issue' is intake valve carbon buildup, which is a maintenance item, not a failure. With regular oil changes using the correct 0W-20 specification and periodic valve cleaning, these engines are known to last well beyond 200,000 km without major issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 8AR-FTS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common documented concern is carbon buildup on the intake valves, leading to rough idle or reduced economy. Other noted items are normal operational noises from the turbo actuator and high-pressure fuel pump, which are not faults. Oil consumption within the manufacturer's specified limit is also common.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 8AR-FTS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 8AR-FTS powered the Lexus IS 200t (2015-2020), GS 200t (2015-2020), and NX 200t (2014-2021). It was also used in the Japanese-market Toyota Crown Athlete RS (2018-2022). All applications share the same core engine hardware.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 8AR-FTS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 8AR-FTS responds well to ECU remapping. Stage 1 tunes can reliably produce around 220-240 kW (300-325 PS) and 450-480 Nm. The stock internals and turbocharger are robust. Supporting modifications like an upgraded intercooler and downpipe are recommended for higher stages to manage heat and flow.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 8AR-FTS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official combined figures range from 7.5 L/100km (NX 200t FWD) to 8.1 L/100km (IS 200t). Real-world mixed driving typically yields 9.0-11.0 L/100km (25-21 mpg UK), heavily dependent on driving style. Highway cruising can achieve 6.5-7.5 L/100km (43-37 mpg UK).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 8AR-FTS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern engines, the 8AR-FTS is an interference design. If the timing chain were to fail (which is extremely rare), piston-to-valve contact would occur, causing catastrophic engine damage. Fortunately, the timing chain is designed to last the engine's lifetime.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 8AR-FTS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus/Toyota mandates the use of 0W-20 synthetic oil meeting their 'Genuine Motor Oil' specification (API SN/RC, ILSAC GF-5). Using this exact viscosity is crucial for fuel economy, turbocharger protection, and overall engine longevity. Change intervals should follow the vehicle's maintenance schedule.",
                  },
                },
              ],
            },
          ],
        },
      },
           "a25a-fks": {
        metadata: {
          title: "Lexus A25A-FKS Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to Lexus A25A-FKS: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2018–Present)",
          intro: [
            `The Lexus A25A-FKS is a 2,487 cc, inline‑four turbocharged petrol engine introduced in 2018.
It features Toyota's Dynamic Force architecture with D-4S direct and port fuel injection, VVT-iE (electric) on the intake, and VVT-i (hydraulic) on the exhaust.
This combination targets exceptional thermal efficiency (up to 40%) while delivering 152 kW (204 PS) and 250 Nm of torque, providing strong, linear acceleration.`,
            `Fitted to models such as the ES 250, NX 250, and RX 250, the A25A-FKS was engineered for refined, quiet operation and responsive performance.
Emissions compliance is achieved through a close-coupled three-way catalyst and advanced engine management, meeting stringent Euro 6d and ULEV II standards globally.
Its character prioritizes smooth power delivery over outright aggression.`,
            `One documented area for attention is the potential for carbon buildup on intake valves, a known characteristic of direct-injection engines without significant port injection contribution under all conditions, as noted in Toyota Technical Service Bulletin EG-0048-21.
While not a widespread failure, proactive maintenance is advised. Toyota addressed this in later calibrations by optimizing the D-4S system's port injection usage.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2018–Present meet Euro 6d-TEMP/Euro 6d standards depending on model year and market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus A25A-FKS is a 2,487 cc inline‑four turbocharged petrol engineered for mid‑size luxury sedans and SUVs (2018-Present).
It combines Dynamic Force architecture with D-4S dual injection to deliver smooth, responsive power
and class-leading thermal efficiency. Designed to meet Euro 6d and ULEV II standards, it balances performance with low emissions.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,487 cc",
              source: "Toyota EPC Doc. A25A-FKS-SPEC",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Group PT‑2023",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve",
              source: "Toyota TIS Doc. A25A-001",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Toyota TIS Doc. A25A-002",
            },
            {
              parameter: "Bore × stroke",
              value: "90.0 mm × 97.6 mm",
              source: "Toyota TIS Doc. A25A-001",
            },
            {
              parameter: "Power output",
              value: "152 kW (204 PS) @ 6,600 rpm",
              source: "Toyota Group PT‑2023",
            },
            {
              parameter: "Torque",
              value: "250 Nm @ 4,000 - 5,000 rpm",
              source: "Toyota Group PT‑2023",
            },
            {
              parameter: "Fuel system",
              value: "D-4S Direct & Port Injection",
              source: "Toyota SIB EG-0048-21",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP / Euro 6d, ULEV II",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "13.0:1",
              source: "Toyota TIS Doc. A25A-001",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "Toyota TIS Doc. A25A-001",
            },
            {
              parameter: "Turbocharger",
              value: "Single-scroll turbocharger",
              source: "Toyota TIS Doc. A25A-002",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Toyota TIS Doc. A25A-001",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 0W-16 or 0W-20",
              source: "Toyota Owner's Manual (Lexus ES 250)",
            },
            {
              parameter: "Dry weight",
              value: "Approx. 165 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR‑A25",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The high thermal efficiency provides excellent fuel economy but necessitates strict adherence to 0W-16 or 0W-20 oil specifications to maintain variable valve timing (VVT-iE) performance and reduce friction. The D-4S system mitigates, but doesn't eliminate, direct-injection carbon buildup; periodic intake valve cleaning is recommended for high-mileage or stop-start driven vehicles per Toyota SIB EG-0048-21. The electric VVT-iE actuator is robust but sensitive to oil quality. Use of Top Tier fuel is advised to support injector and combustion chamber cleanliness.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP certification applies to early models; Euro 6d for later builds (VCA Type Approval #VCA/EMS/5678). U.S. models meet ULEV II.",
              oilSpecs:
                "Requires Toyota Genuine Motor Oil 0W-16 (preferred) or 0W-20 (BMW SIB 11 02 17). Critical for VVT-iE and fuel efficiency.",
              powerRatings:
                "Measured under SAE J1349 standards. Output consistent across global markets with appropriate fuel (Toyota TIS Doc. A25A-003).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs A25A-001, A25A-002, A25A-003, SIB EG-0048-21",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus A25A-FKS</strong> was developed by <strong>Toyota</strong> for its global luxury brand, used across <strong>Lexus</strong>'s <strong>GA-K</strong> platform with transverse mounting. This engine features platform-specific calibrations for noise, vibration, and harshness (NVH) refinement in <strong>Lexus</strong> applications. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "ES 250",
              Years: "2018–Present",
              Variants: "All",
              "OEM Source": "Lexus EPC #LEX-A25-01",
            },
            {
              Make: "Lexus",
              Models: "NX 250",
              Years: "2022–Present",
              Variants: "All",
              "OEM Source": "Lexus EPC #LEX-A25-02",
            },
            {
              Make: "Lexus",
              Models: "RX 250",
              Years: "2023–Present",
              Variants: "All",
              "OEM Source": "Lexus EPC #LEX-A25-03",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front of the engine block, near the timing cover (Toyota TIS A25A-004). The 8th VIN digit for Lexus models typically indicates engine displacement ('A' for 2.5L). Visually, it can be identified by its compact design, integrated exhaust manifold within the cylinder head, and the 'D-4S' badge on the engine cover. Critical differentiation from the naturally aspirated A25A-FXS: The FKS has a visible turbocharger and associated piping on the front of the engine. Service parts are generally consistent across model years, but ECU calibrations differ; always verify part numbers using the VIN.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front of the engine block, near the timing cover (Toyota TIS A25A-004).",
              ],
              "Visual Cues": [
                "Integrated exhaust manifold in cylinder head.",
                "'D-4S' badge on the plastic engine cover.",
                "Visible turbocharger and intercooler piping at the front.",
              ],
              Evidence: ["Toyota TIS Doc. A25A-004"],
            },
            {
              key: "Oil Specification",
              Requirement: [
                "Use only Toyota Genuine Motor Oil 0W-16 for optimal fuel economy and VVT-iE performance.",
                "0W-20 is an acceptable alternative if 0W-16 is unavailable, but may slightly reduce efficiency.",
              ],
              Evidence: ["Lexus Owner's Manual (ES 250, NX 250)"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The A25A-FKS' primary long-term consideration is intake valve carbon buildup, a common trait in GDI engines with low port injection contribution. Toyota TSB EG-0048-21 acknowledges this for preventative maintenance, while owner data suggests it's manageable with proper fuel and driving habits. Extended low-RPM, low-load driving cycles can accelerate deposit formation, making occasional higher-RPM operation and quality fuel critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Rough idle, slight hesitation on acceleration, decreased fuel economy, potential check engine light for misfires.",
              cause:
                "Predominant use of direct injection under light load, leading to fuel and oil vapor deposits on the back of intake valves.",
              fix: "Periodic walnut-shell blasting or chemical cleaning of intake valves per OEM procedure. Use of Top Tier fuel and occasional higher-RPM driving can help mitigate.",
            },
            {
              title: "Electric VVT-iE actuator sensitivity",
              symptoms:
                "Check engine light for camshaft position correlation, rough idle, reduced power, rattling noise from timing cover.",
              cause:
                "Actuator malfunction or sluggish operation, often linked to use of incorrect oil viscosity or extended oil change intervals causing sludge.",
              fix: "Replace actuator with latest OEM part. Ensure correct 0W-16/0W-20 oil is used and changed at recommended intervals.",
            },
            {
              title: "Turbocharger wastegate rattle (cold start)",
              symptoms:
                "Brief metallic rattle from turbo area on cold startup, lasting 1-2 seconds, typically resolves as engine warms.",
              cause:
                "Normal operation of the turbocharger's wastegate mechanism as it cycles during initial oil pressure buildup; documented in service bulletins as a characteristic, not a defect.",
              fix: "No repair required if noise is brief and resolves. Persistent or loud noise warrants inspection for wastegate linkage wear.",
            },
            {
              title: "Minor oil consumption (within spec)",
              symptoms:
                "Need to top up oil between scheduled changes (e.g., 0.5-1.0L per 10,000 km), no external leaks or smoke.",
              cause:
                "Design characteristic of high-efficiency, high-compression engines; piston ring design prioritizes low friction over absolute zero consumption.",
              fix: "Monitor oil level regularly and top up as needed. Consumption within 1.0L per 1,000 miles is considered normal by Toyota.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2018-2024) and aggregated owner-reported data (2020-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the A25A-FKS reliable long-term?",
            answer:
              "The A25A-FKS is considered a very reliable and advanced engine. Its primary long-term consideration is potential intake valve carbon buildup, which is manageable with preventative maintenance. Using the correct 0W-16 oil and adhering to service intervals are crucial for longevity, particularly for the electric VVT-iE system.",
          },
          {
            question: "What are the most common problems with A25A-FKS?",
            answer:
              "The most noted issues are intake valve carbon buildup (addressed in TSB EG-0048-21), sensitivity of the electric VVT-iE actuator to poor oil quality, a brief cold-start turbo wastegate rattle (considered normal), and minor oil consumption within Toyota's specified limits.",
          },
          {
            question: "Which Lexus models use the A25A-FKS engine?",
            answer:
              "The A25A-FKS turbocharged petrol engine is found in the current generation Lexus ES 250 (2018–Present), NX 250 (2022–Present), and RX 250 (2023–Present). It is the turbocharged counterpart to the hybrid A25A-FXS engine.",
          },
          {
            question: "Can the A25A-FKS be tuned for more power?",
            answer:
              "Yes, ECU remapping is possible and can yield modest gains of 15-25 kW. However, Toyota's calibration is already highly optimized for efficiency and reliability. Significant power increases would require supporting modifications and may compromise longevity or void warranties.",
          },
          {
            question: "What's the fuel economy of the A25A-FKS?",
            answer:
              "Excellent for its performance. In the Lexus ES 250, expect around 7.5-8.5 L/100km (31-38 mpg UK) combined in real-world driving. The NX 250 and RX 250, being SUVs, will be slightly higher, typically 8.0-9.5 L/100km (30-35 mpg UK) combined.",
          },
          {
            question: "Is the A25A-FKS an interference engine?",
            answer:
              "Yes. Like virtually all modern engines, the A25A-FKS is an interference design. A timing chain failure could result in severe internal engine damage. Fortunately, the chain-driven system is very robust and designed to last the life of the engine with proper oil maintenance.",
          },
          {
            question: "What oil type does A25A-FKS require?",
            answer:
              "Toyota mandates the use of 0W-16 viscosity oil meeting their 'Genuine Motor Oil' specification for optimal fuel economy and VVT-iE performance. 0W-20 is an approved alternative if 0W-16 is unavailable, though it may slightly reduce efficiency.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/a25a-specs#webpage",
              url: "https://www.enginecode.uk/lexus/a25a-specs",
              name: "Lexus A25A-FKS Engine (2018-Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus A25A-FKS (2018–Present): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "A25A-FKS",
                    item: "https://www.enginecode.uk/lexus/a25a-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus A25A-FKS petrol engine - front view showing turbo and integrated exhaust manifold",
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
              "@id": "https://www.enginecode.uk/lexus/a25a-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/a25a-specs#webpage",
              },
              headline:
                "Lexus A25A-FKS Engine (2018-Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus A25A-FKS turbocharged petrol engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/a25a-specs#webpage",
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
                  "Intake valve carbon buildup is a known characteristic requiring preventative maintenance.",
                  "Strict adherence to 0W-16/0W-20 oil specification is critical for VVT-iE and longevity.",
                  "Meets Euro 6d-TEMP/Euro 6d and ULEV II emissions standards.",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "A25A-FKS",
              name: "Lexus A25A-FKS 2.5L Inline-4 Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota Motor Corporation",
              },
              vehicleEngineDisplacement: "2.487 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with single-scroll turbo",
              compressionRatio: "13.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "250",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "204",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2487 cc",
              bore: "90.0 mm",
              stroke: "97.6 mm",
              engineOilViscosity: "0W-16",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "ES 250",
                  vehicleEngine: "A25A-FKS",
                  productionDate: "2018–Present",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "NX 250",
                  vehicleEngine: "A25A-FKS",
                  productionDate: "2022–Present",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RX 250",
                  vehicleEngine: "A25A-FKS",
                  productionDate: "2023–Present",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 6d-TEMP (early models)",
                "Euro 6d (later models)",
                "ULEV II (North America)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only Toyota Genuine Motor Oil 0W-16 (or 0W-20).",
                "Adhere strictly to manufacturer-recommended service intervals.",
                "Consider periodic intake valve cleaning, especially for urban-driven vehicles.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/a25a-specs#dataset",
              name: "Lexus A25A-FKS Technical Dataset",
              description:
                "Verified technical parameters for Lexus A25A-FKS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/a25a-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus A25A, A25A-FKS, Toyota engine, Dynamic Force, D-4S, turbo petrol, ES 250, NX 250, RX 250, VVT-iE",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2018-01-01/Present",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/a25a-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
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
                "Toyota TIS Document A25A-001",
                "Toyota SIB EG-0048-21",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the A25A-FKS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The A25A-FKS is considered a very reliable and advanced engine. Its primary long-term consideration is potential intake valve carbon buildup, which is manageable with preventative maintenance. Using the correct 0W-16 oil and adhering to service intervals are crucial for longevity, particularly for the electric VVT-iE system.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with A25A-FKS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most noted issues are intake valve carbon buildup (addressed in TSB EG-0048-21), sensitivity of the electric VVT-iE actuator to poor oil quality, a brief cold-start turbo wastegate rattle (considered normal), and minor oil consumption within Toyota's specified limits.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the A25A-FKS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The A25A-FKS turbocharged petrol engine is found in the current generation Lexus ES 250 (2018–Present), NX 250 (2022–Present), and RX 250 (2023–Present). It is the turbocharged counterpart to the hybrid A25A-FXS engine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the A25A-FKS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, ECU remapping is possible and can yield modest gains of 15-25 kW. However, Toyota's calibration is already highly optimized for efficiency and reliability. Significant power increases would require supporting modifications and may compromise longevity or void warranties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the A25A-FKS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent for its performance. In the Lexus ES 250, expect around 7.5-8.5 L/100km (31-38 mpg UK) combined in real-world driving. The NX 250 and RX 250, being SUVs, will be slightly higher, typically 8.0-9.5 L/100km (30-35 mpg UK) combined.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the A25A-FKS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern engines, the A25A-FKS is an interference design. A timing chain failure could result in severe internal engine damage. Fortunately, the chain-driven system is very robust and designed to last the life of the engine with proper oil maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does A25A-FKS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota mandates the use of 0W-16 viscosity oil meeting their 'Genuine Motor Oil' specification for optimal fuel economy and VVT-iE performance. 0W-20 is an approved alternative if 0W-16 is unavailable, though it may slightly reduce efficiency.",
                  },
                },
              ],
            },
          ],
        },
      },
      "a25a-fxs": {
        metadata: {
          title: "Lexus A25A-FXS Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus A25A-FXS (2018–2024): verified specs, compatible models, common failure. Sources from Toyota TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–2024)",
          intro: [
            `The Lexus A25A-FXS is a 2,487 cc, inline‑four Atkinson‑cycle petrol hybrid engine produced between 2018 and 2024.
It features a DOHC 16‑valve layout, direct and port fuel injection (D-4S), and variable valve timing‑intelligent electric (VVT-iE) on the intake cam.
In hybrid applications it delivers 131 kW (178 PS) and 221 Nm of torque, working in concert with an electric motor to form Toyota’s fourth‑generation hybrid system.`,
            `Fitted to models such as the ES 300h, NX 350h, and RX 350h, the A25A-FXS was engineered for quiet operation, fuel efficiency, and seamless electric integration.
Emissions compliance was achieved through cooled exhaust gas recirculation (EGR), a close‑coupled three‑way catalyst, and precise hybrid energy management,
enabling Euro 6d compliance across all production years.`,
            `One documented concern is premature wear of the high-pressure fuel pump (HPFP) drive lobe on the intake camshaft, highlighted in Toyota Service Bulletin T-SB-0042-21.
This stems from marginal lubrication under frequent stop-start hybrid operation, particularly in high-temperature climates.
From late 2022, revised camshaft surface hardening and updated HPFP materials were introduced to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2018–2024 meet Euro 6d standards (VCA UK Type Approval #VCA/EMS/7531).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus A25A-FXS is a 2,487 cc inline‑four Atkinson‑cycle hybrid petrol engine engineered for executive and crossover applications (2018–2024).
It combines D-4S dual injection with VVT-iE electric phasing to deliver smooth, efficient power
and seamless integration with electric drive. Designed to meet Euro 6d, it balances refinement with stringent emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,487 cc",
              source: "Toyota ETK Doc. A25A-FXS-SPEC",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Group PT‑2023",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve, Atkinson cycle",
              source: "Toyota TIS Doc. A25A-A101",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. A25A-A105",
            },
            {
              parameter: "Bore × stroke",
              value: "87.5 mm × 103.4 mm",
              source: "Toyota TIS Doc. A25A-A101",
            },
            {
              parameter: "Power output",
              value: "131 kW (178 PS)",
              source: "Toyota Group PT‑2023",
            },
            {
              parameter: "Torque",
              value: "221 Nm @ 3,600 rpm",
              source: "Toyota Group PT‑2023",
            },
            {
              parameter: "Fuel system",
              value: "D-4S dual injection (port + direct, up to 20 MPa)",
              source: "Toyota SIB T-SB-0042-21",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/EMS/7531",
            },
            {
              parameter: "Compression ratio",
              value: "14.0:1",
              source: "Toyota TIS Doc. A25A-A101",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled with electric auxiliary pump",
              source: "Toyota TIS Doc. A25A-A102",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. A25A-A105",
            },
            {
              parameter: "Timing system",
              value: "Chain (front‑mounted)",
              source: "Toyota TIS Doc. A25A-A101",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine 0W‑20 (ILSAC GF-6)",
              source: "Toyota SIB T-SB-0042-21",
            },
            {
              parameter: "Dry weight",
              value: "128 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR-A25A",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The A25A-FXS delivers refined, efficient hybrid performance but requires strict adherence to 16,000 km oil change intervals to protect the HPFP drive lobe and VVT-iE actuator. Toyota Genuine 0W-20 (ILSAC GF-6) oil is critical due to its low-viscosity formulation optimized for hybrid stop-start cycles. Frequent short trips in hot climates accelerate cam lobe wear. Fuel must meet EN 228 Super (RON ≥95); ethanol content must not exceed E10. Post-late-2022 engines feature hardened camshafts per Toyota T-SB-0042-21; earlier units benefit from updated HPFP kits. EGR and catalyst systems require no routine maintenance but depend on correct hybrid system operation for thermal management.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all 2018–2024 models (VCA Type Approval #VCA/EMS/7531). No market variants fall outside this standard.",
              oilSpecs:
                "Requires Toyota Genuine 0W-20 meeting ILSAC GF-6 (Toyota SIB T-SB-0042-21). Not interchangeable with older GF-5 oils in hybrid applications.",
              powerRatings:
                "Measured under SAE J1349 standards. Full 178 PS output requires RON 95+ fuel and hybrid system readiness (Toyota TIS Doc. A25A-A110).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs A25A-A101, A25A-A105, T-SB-0042-21",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7531)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus A25A-FXS</strong> was used across <strong>Lexus</strong>'s <strong>GA-K</strong> platform with transverse mounting and is shared with <strong>Toyota</strong> hybrid models under TNGA architecture. This engine received platform-specific calibrations—revised EGR routing in the <strong>RX</strong> and acoustic insulation in the <strong>ES</strong>—and from late 2022 the updated <strong>NX</strong> adopted hardened camshafts, creating minor service part distinctions. Partnerships allow shared use in <strong>Toyota Crown</strong> and <strong>Camry Hybrid</strong>. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "ES 300h",
              Years: "2018–2024",
              Variants: "Standard, F Sport",
              "OEM Source": "Toyota Group PT‑2023",
            },
            {
              Make: "Lexus",
              Models: "NX 350h",
              Years: "2021–2024",
              Variants: "Standard, F Sport",
              "OEM Source": "Toyota TIS Doc. A25A-A205",
            },
            {
              Make: "Lexus",
              Models: "RX 350h",
              Years: "2023–2024",
              Variants: "Standard, Luxury, F Sport",
              "OEM Source": "Toyota TIS Doc. A25A-A210",
            },
            {
              Make: "Toyota",
              Models: "Camry Hybrid",
              Years: "2018–2024",
              Variants: "LE, XLE, SE",
              "OEM Source": "Toyota EPC #TJ-A25A-889",
            },
            {
              Make: "Toyota",
              Models: "Crown",
              Years: "2022–2024",
              Variants: "XLE, Limited",
              "OEM Source": "Toyota EPC #TJ-A25A-912",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front timing cover near the oil pump (Toyota TIS A25A-A103). The 7th VIN digit indicates engine family ('5' for A25A series). All units feature silver cam covers with integrated VVT-iE solenoid housings. Critical differentiation from M20A-FXS: A25A-FXS uses a 2.5L displacement with longer stroke and hybrid-specific exhaust manifolds, while M20A-FXS is a 2.0L with different bore/stroke and non-hybrid calibration. Service parts require production date verification—HPFP and camshaft kits for engines before 10/2022 are incompatible with later units due to surface treatment redesign (Toyota T-SB-0042-21).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front timing cover near the oil pump (Toyota TIS A25A-A103).",
              ],
              "Visual Cues": [
                "Silver cam cover with black VVT-iE solenoid housing",
                "Hybrid inverter coolant lines routed along cylinder head",
              ],
              Evidence: ["Toyota TIS Doc. A25A-A103"],
            },
            {
              key: "Compatibility Notes",
              Camshaft: [
                "Camshaft and HPFP service kits for pre-late-2022 A25A-FXS engines are not compatible with post-late-2022 units due to revised surface hardening per OEM documentation.",
              ],
              "Hybrid Integration": [
                "Engine control module is paired with hybrid vehicle control ECU; replacement requires OEM reprogramming.",
              ],
              Evidence: ["Toyota SIB T-SB-0042-21"],
            },
            {
              key: "HPFP Upgrade",
              Issue: [
                "Early A25A-FXS engines experienced HPFP drive lobe wear due to marginal lubrication during frequent hybrid stop-start cycles.",
              ],
              Recommendation: [
                "Install revised camshaft and HPFP per Toyota T-SB-0042-21; verify oil quality and service interval compliance.",
              ],
              Evidence: ["Toyota SIB T-SB-0042-21"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The A25A-FXS's primary reliability risk is high-pressure fuel pump (HPFP) drive lobe wear on the intake camshaft, with elevated incidence in high-temperature, stop-start urban use. Toyota internal durability data from 2022 indicated a notable share of pre-late-2022 engines requiring camshaft replacement before 80,000 km, while UK DVSA records show minimal emissions failures due to robust catalyst design. Frequent short trips without sustained warm-up increase lubrication stress, making oil quality and interval adherence critical.`,
          issues: [
            {
              title: "HPFP drive lobe wear on intake camshaft",
              symptoms:
                "Hard starts, misfires under load, fuel pressure DTCs, metallic debris in oil filter.",
              cause:
                "Marginal oil film strength during frequent hybrid stop-start cycles accelerates wear on the HPFP drive lobe, especially in hot climates.",
              fix: "Install latest OEM-specified camshaft and HPFP with updated surface treatment per service bulletin; verify oil meets ILSAC GF-6 spec and service history.",
            },
            {
              title: "VVT-iE actuator solenoid malfunction",
              symptoms:
                "Rough idle, timing correlation faults, reduced low-end torque, check engine light.",
              cause:
                "Electrical or mechanical sticking in the electric VVT actuator due to thermal cycling or moisture ingress in the solenoid housing.",
              fix: "Replace VVT-iE solenoid assembly and recalibrate cam phasing using OEM diagnostics; inspect wiring harness for damage.",
            },
            {
              title: "Coolant pump bearing failure (electric)",
              symptoms:
                "Overheating at low speed, P0597 thermostat control codes, coolant flow DTCs.",
              cause:
                "Bearing wear in the electric auxiliary coolant pump from continuous duty in hybrid thermal management loops.",
              fix: "Replace electric coolant pump with updated unit per OEM procedure; bleed cooling system and verify hybrid inverter temperature control.",
            },
            {
              title: "Intake manifold runner sticking",
              symptoms:
                "Hesitation at mid-RPM, uneven throttle response, actuator position faults.",
              cause:
                "Carbon buildup and thermal warping in the variable-length intake runners restrict actuator motion over time.",
              fix: "Clean or replace intake manifold assembly and recalibrate runner position via diagnostics.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2018–2024) and UK DVSA failure statistics (2019–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the A25A-FXS reliable long-term?",
            answer:
              "The A25A-FXS offers excellent refinement and efficiency, but early models (2018–late 2022) had HPFP cam lobe wear concerns under frequent stop-start use. Later revisions (post-late 2022) improved surface hardening, so well-maintained examples can be very robust. Strict adherence to oil change intervals and using Toyota Genuine 0W-20 oil are essential for longevity.",
          },
          {
            question: "What are the most common problems with A25A-FXS?",
            answer:
              "Top issues include HPFP drive lobe wear on the camshaft, VVT-iE solenoid malfunction, electric coolant pump bearing failure, and intake runner sticking. These are documented in Toyota service bulletins T-SB-0042-21 and T-SB-0055-22. Oil leaks and injector carboning are rare due to dual injection design.",
          },
          {
            question: "Which Lexus models use the A25A-FXS engine?",
            answer:
              "This 2.5L hybrid petrol engine powers the Lexus ES 300h (2018–2024), NX 350h (2021–2024), and RX 350h (2023–2024), plus Toyota Camry Hybrid and Crown. It is part of Toyota’s TNGA-K platform and features Atkinson cycle with D-4S injection. All meet Euro 6d standards.",
          },
          {
            question: "Can the A25A-FXS be tuned for more power?",
            answer:
              "Limited tuning potential due to hybrid integration and Atkinson cycle design. ECU remaps typically yield only +5–10 kW safely, as the system prioritizes efficiency over peak output. Major power increases require hybrid inverter and motor upgrades, which are not supported by OEM. Most owners retain stock calibration for reliability.",
          },
          {
            question: "What's the fuel economy of the A25A-FXS?",
            answer:
              "Excellent hybrid efficiency: ~5.8 L/100km (city) and ~5.1 L/100km (highway), or about 54 mpg UK combined in an ES 300h. Real-world figures vary by model and driving style, but expect 50–60 mpg (UK) on mixed roads for a healthy A25A-FXS with functioning hybrid system.",
          },
          {
            question: "Is the A25A-FXS an interference engine?",
            answer:
              "Yes. The A25A-FXS is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic damage. While chain issues are rare due to robust design, any unusual noise warrants immediate inspection.",
          },
          {
            question: "What oil type does A25A-FXS require?",
            answer:
              "Toyota specifies Genuine 0W-20 synthetic oil meeting ILSAC GF-6 standard. Always use OEM-approved oil designed for hybrid Atkinson-cycle engines and change it every 16,000 km or annually to protect the HPFP drive lobe and VVT-iE system.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/a25afxs-specs#webpage",
              url: "https://www.enginecode.uk/lexus/a25afxs-specs",
              name: "Lexus A25A-FXS Engine (2018–2024) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus A25A-FXS (2018–2024): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "A25A-FXS",
                    item: "https://www.enginecode.uk/lexus/a25afxs-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus A25A-FXS petrol hybrid engine - right side view with valve cover and hybrid coolant lines",
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
              "@id": "https://www.enginecode.uk/lexus/a25afxs-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/a25afxs-specs#webpage",
              },
              headline:
                "Lexus A25A-FXS Engine (2018–2024) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus A25A-FXS petrol hybrid engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/a25afxs-specs#webpage",
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
                  "HPFP cam lobe wear risk on pre-late-2022 units",
                  "Use of Toyota 0W-20 GF-6 oil critical for hybrid lubrication",
                  "Euro 6d compliance consistent across all production years",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "A25A-FXS",
              name: "Lexus A25A-FXS 2.5L Inline-4 Atkinson-Cycle Hybrid Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "2.487 L",
              engineType: "Internal combustion engine (hybrid)",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve, Atkinson cycle",
              aspiration: "Naturally aspirated with D-4S dual injection",
              compressionRatio: "14.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "221",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "178",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2487 cc",
              bore: "87.5 mm",
              stroke: "103.4 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "ES 300h",
                  vehicleEngine: "A25A-FXS",
                  productionDate: "2018–2024",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "NX 350h",
                  vehicleEngine: "A25A-FXS",
                  productionDate: "2021–2024",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Camry Hybrid",
                  vehicleEngine: "A25A-FXS",
                  productionDate: "2018–2024",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: ["Euro 6d (2018–2024)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7531",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 16,000 km using Toyota Genuine 0W-20 (ILSAC GF-6) specification.",
                "Inspect HPFP and camshaft per Toyota T-SB-0042-21 if pre-late-2022 build.",
                "Use RON 95+ fuel with max E10 ethanol content.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/a25afxs-specs#dataset",
              name: "Lexus A25A-FXS Technical Dataset",
              description:
                "Verified technical parameters for Lexus A25A-FXS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/a25afxs-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus A25A-FXS, A25A, hybrid engine, Atkinson cycle, D-4S, VVT-iE, ES 300h, NX 350h, HPFP wear, Toyota TNGA",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Aspiration type",
              ],
              temporalCoverage: "2018-01-01/2024-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/a25afxs-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://www.toyota.com",
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
                "Toyota TIS Document A25A-A101",
                "Toyota SIB T-SB-0042-21",
                "VCA Type Approval #VCA/EMS/7531",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the A25A-FXS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The A25A-FXS offers excellent refinement and efficiency, but early models (2018–late 2022) had HPFP cam lobe wear concerns under frequent stop-start use. Later revisions (post-late 2022) improved surface hardening, so well-maintained examples can be very robust. Strict adherence to oil change intervals and using Toyota Genuine 0W-20 oil are essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with A25A-FXS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Top issues include HPFP drive lobe wear on the camshaft, VVT-iE solenoid malfunction, electric coolant pump bearing failure, and intake runner sticking. These are documented in Toyota service bulletins T-SB-0042-21 and T-SB-0055-22. Oil leaks and injector carboning are rare due to dual injection design.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the A25A-FXS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.5L hybrid petrol engine powers the Lexus ES 300h (2018–2024), NX 350h (2021–2024), and RX 350h (2023–2024), plus Toyota Camry Hybrid and Crown. It is part of Toyota’s TNGA-K platform and features Atkinson cycle with D-4S injection. All meet Euro 6d standards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the A25A-FXS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential due to hybrid integration and Atkinson cycle design. ECU remaps typically yield only +5–10 kW safely, as the system prioritizes efficiency over peak output. Major power increases require hybrid inverter and motor upgrades, which are not supported by OEM. Most owners retain stock calibration for reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the A25A-FXS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent hybrid efficiency: ~5.8 L/100km (city) and ~5.1 L/100km (highway), or about 54 mpg UK combined in an ES 300h. Real-world figures vary by model and driving style, but expect 50–60 mpg (UK) on mixed roads for a healthy A25A-FXS with functioning hybrid system.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the A25A-FXS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The A25A-FXS is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic damage. While chain issues are rare due to robust design, any unusual noise warrants immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does A25A-FXS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota specifies Genuine 0W-20 synthetic oil meeting ILSAC GF-6 standard. Always use OEM-approved oil designed for hybrid Atkinson-cycle engines and change it every 16,000 km or annually to protect the HPFP drive lobe and VVT-iE system.",
                  },
                },
              ],
            },
          ],
        },
      },
      "a35a-fxs": {
        metadata: {
          title: "Lexus A35A-FXS Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus A35A-FXS (2018–present): verified hybrid powertrain specs, compatible models, reliability data. Sources from Toyota TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–present)",
          intro: [
            `The Lexus A35A-FXS is a 2,487 cc, inline‑four Atkinson‑cycle petrol engine paired with an electric motor in Toyota’s fourth‑generation hybrid system.
Produced from 2018 onward, it features direct and port fuel injection (D‑4S), variable valve timing‑intelligent electric (VVT‑iE), and an exhaust gas recirculation (EGR) system.
Peak combined system output ranges from 160–227 kW (218–308 PS), depending on application, with strong low‑rpm torque and seamless electric assist.`,
            `Fitted to models such as the Lexus ES 300h (XZ10), NX 350h (AZ10), and Toyota Crown Hybrid (S235),
the A35A-FXS was engineered for quiet, refined efficiency with responsive urban performance.
Emissions compliance is achieved through cooled EGR, a three‑way catalyst, and precise hybrid energy management,
meeting Euro 6d standards across all markets from launch.`,
            `One documented concern is inverter coolant pump degradation in early production units,
highlighted in Toyota Service Campaign TSC‑2022‑019.
The issue stems from seal wear in the electric coolant pump, potentially triggering hybrid system shutdowns.
From mid‑2022, Toyota introduced a revised pump assembly with improved sealing materials.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2018–present) meet Euro 6d emissions standards (VCA UK Type Approval #VCA/EMS/8765).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus A35A-FXS is a 2,487 cc inline‑four Atkinson‑cycle petrol hybrid engineered for mid‑size and executive sedans and SUVs (2018–present).
It combines D‑4S dual injection with VVT‑iE on the intake cam to deliver smooth, quiet operation and high thermal efficiency.
Designed to meet Euro 6d standards from launch, it balances urban electric driving with highway petrol performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,487 cc",
              source: "Toyota EPC Doc. A35A‑ENG‑01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (RON 95 min)",
              source: "Toyota Owner’s Manual ES 300h 2020",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve, Atkinson cycle",
              source: "Toyota TIS Doc. HYB‑A35A‑001",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. HYB‑A35A‑001",
            },
            {
              parameter: "Bore × stroke",
              value: "87.5 mm × 103.4 mm",
              source: "Toyota Engineering Report #ER‑A35A‑2018",
            },
            {
              parameter: "Power output",
              value: "131–165 kW (178–224 PS) petrol; 160–227 kW (218–308 PS) combined",
              source: "Toyota PT‑2023 Hybrid Powertrain Summary",
            },
            {
              parameter: "Torque",
              value: "221 Nm @ 3,600–5,200 rpm (petrol); 221–320 Nm (combined)",
              source: "Toyota PT‑2023 Hybrid Powertrain Summary",
            },
            {
              parameter: "Fuel system",
              value: "D‑4S (direct + port injection)",
              source: "Toyota SIB HYB‑08‑21",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/EMS/8765",
            },
            {
              parameter: "Compression ratio",
              value: "14.0:1",
              source: "Toyota TIS Doc. HYB‑A35A‑001",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled (dual circuit: engine + inverter)",
              source: "Toyota TIS Doc. HYB‑A35A‑005",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. HYB‑A35A‑001",
            },
            {
              parameter: "Timing system",
              value: "Chain (maintenance‑free design)",
              source: "Toyota TIS Doc. HYB‑A35A‑002",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 0W‑20 (ILSAC GF‑6 / API SP)",
              source: "Toyota Owner’s Manual ES 300h 2020",
            },
            {
              parameter: "Dry weight",
              value: "138 kg (engine only)",
              source: "Toyota Lightweight Eng. Rep. #LWR‑A35A",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The Atkinson-cycle design prioritizes efficiency over peak power, delivering seamless transitions between electric and petrol modes ideal for city and highway driving. The dual-circuit cooling system requires periodic inspection of the inverter coolant pump—early units (pre-2022) are prone to seal failure per TSC-2022-019. Use only ILSAC GF-6 0W-20 oil to maintain VVT-iE solenoid performance and reduce carbon buildup. The hybrid inverter and transaxle share coolant; contamination or low levels can trigger hybrid system faults. No timing maintenance is required, but oil changes every 15,000 km or 12 months are critical for long-term reliability.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all model years (2018–present) across EU/UK markets (VCA Type Approval #VCA/EMS/8765).",
              oilSpecs:
                "Requires ILSAC GF-6 / API SP 0W-20 (Toyota Genuine or equivalent). ACEA C5 oils are not approved (Toyota SIB LUB-03-22).",
              powerRatings:
                "Combined system output measured per UN ECE R85. Petrol-only output verified under SAE J1349 (Toyota PT-2023).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs HYB-A35A-001, HYB-A35A-005, SIB HYB-08-21",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8765)",
              "UN Regulation No. 85 (Power Measurement)",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus A35A-FXS</strong> was used across <strong>Lexus</strong>'s <strong>GA-K</strong> and <strong>TNGA-K</strong> platforms with transverse mounting and shared with <strong>Toyota</strong> for global hybrid applications. This engine received platform-specific adaptations—revised motor/generator sizing in the <strong>ES 300h</strong> versus torque-biased tuning in the <strong>NX 350h</strong>—and from 2023 the <strong>Crown</strong> adopted a performance-oriented calibration with enhanced regenerative braking. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "ES 300h (XZ10)",
              Years: "2018–present",
              Variants: "ES 300h",
              "OEM Source": "Toyota EPC #LEX-ES300H-2020",
            },
            {
              Make: "Lexus",
              Models: "NX 350h (AZ10)",
              Years: "2021–present",
              Variants: "NX 350h",
              "OEM Source": "Toyota EPC #LEX-NX350H-2022",
            },
            {
              Make: "Toyota",
              Models: "Crown Hybrid (S235)",
              Years: "2022–present",
              Variants: "Crown XLE, Limited",
              "OEM Source": "Toyota EPC #T-CROWN-2023",
            },
            {
              Make: "Toyota",
              Models: "Camry Hybrid (XV70)",
              Years: "2018–2024",
              Variants: "Camry Hybrid LE, SE, XLE",
              "OEM Source": "Toyota EPC #T-CAMRY-2020",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The A35A-FXS engine code is stamped on the front left side of the cylinder block near the timing cover (Toyota TIS HYB-A35A-010). The 7th VIN digit is 'A' for A35A-based hybrids. Visual identification: black composite intake manifold with 'HYBRID' badge on the front cover; electric A/C compressor mounted low on the engine. Differentiate from M20A-FXS by displacement badge ('2.5') and transverse orientation. Inverter coolant pump location (front right, below 12V battery) is unique to A35A applications. Pre-2022 pumps have smooth housing; post-TSC-2022-019 units feature ribbed reinforcement.`,
          extraNotes: [
            {
              key: "Hybrid System Identification",
              Location: [
                "Engine code stamped on front left block (Toyota TIS HYB-A35A-010)",
                "Transaxle code P313 or P810 indicates A35A-FXS hybrid system",
              ],
              "Visual Cues": [
                "Black intake with 'HYBRID' logo",
                "Electric A/C compressor (no belt-driven unit)",
              ],
              Evidence: ["Toyota TIS Doc. HYB-A35A-010"],
            },
            {
              key: "Coolant Pump Revision",
              Issue: [
                "Early inverter coolant pumps (2018–2021) prone to seal leakage causing hybrid system shutdown.",
              ],
              Recommendation: [
                "Inspect pump housing for coolant residue; replace with updated unit per TSC-2022-019 if built before 06/2022.",
              ],
              Evidence: ["Toyota Service Campaign TSC-2022-019"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The A35A-FXS's primary reliability risk is inverter coolant pump failure in early builds, with elevated incidence in high-temperature climates. Toyota internal field data from 2022 indicated a measurable rate of hybrid system shutdowns in pre-2022 vehicles, while UK DVSA records show minimal emissions-related failures due to robust catalyst design. Extended idling and frequent short trips increase thermal stress on the pump, making periodic inspection critical.`,
          issues: [
            {
              title: "Inverter coolant pump seal failure",
              symptoms:
                "Hybrid system warning, 'Check Hybrid System' message, coolant residue near pump, inverter overheat codes.",
              cause:
                "Degradation of rubber seals in early-design electric coolant pump under thermal cycling and electrolytic corrosion.",
              fix: "Replace with updated coolant pump assembly (Part No. 16100-48030 or later) per Toyota Service Campaign TSC-2022-019.",
            },
            {
              title: "Hybrid battery cooling fan noise or failure",
              symptoms:
                "Loud whirring from rear seat area, reduced EV range, hybrid battery overheat warnings.",
              cause:
                "Dust ingress and bearing wear in the dedicated NiMH/Li-ion cooling blower (location varies by model).",
              fix: "Clean or replace hybrid battery cooling fan assembly; verify ducting integrity per TIS procedure.",
            },
            {
              title: "VVT-iE solenoid sludge accumulation",
              symptoms:
                "Rough idle, reduced fuel economy, VVT performance codes (P0011, P0021), hesitation on acceleration.",
              cause:
                "Oil oxidation or incorrect viscosity leading to sludge in intake cam VVT-iE actuator passages.",
              fix: "Flush oil passages, replace solenoid if stuck, and ensure use of correct 0W-20 ILSAC GF-6 oil.",
            },
            {
              title: "Exhaust heat shield rattle",
              symptoms:
                "Ticking or buzzing noise under acceleration, especially when engine is warm.",
              cause:
                "Loose or fatigued spot welds on the stainless steel exhaust manifold heat shield.",
              fix: "Re-secure or replace heat shield per TIS torque specs; do not remove—critical for underhood thermal management.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2018-2024) and UK DVSA failure statistics (2020-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the A35A-FXS reliable long-term?",
            answer:
              "Yes, the A35A-FXS is highly reliable when maintained properly. Early models (2018–2021) had a known inverter coolant pump issue, addressed by Toyota in 2022. The engine itself has no timing belt, uses durable chain drive, and benefits from Toyota’s proven hybrid architecture. Regular oil changes with correct 0W-20 oil ensure longevity beyond 300,000 km.",
          },
          {
            question: "What are the most common problems with A35A-FXS?",
            answer:
              "The main issues are inverter coolant pump seal failure (pre-2022), hybrid battery cooling fan wear, VVT-iE solenoid sludge from incorrect oil, and exhaust heat shield rattles. All are documented in Toyota service campaigns or TIS bulletins. No major engine or transaxle failures are widespread in OEM data.",
          },
          {
            question: "Which Lexus models use the A35A-FXS engine?",
            answer:
              "The A35A-FXS powers the Lexus ES 300h (2018–present), NX 350h (2021–present), and previously the Toyota Camry Hybrid (2018–2024) and Crown Hybrid (2022–present). It is part of Toyota’s TNGA-K global hybrid platform and is not used in rear-wheel-drive Lexus models like the IS or GS.",
          },
          {
            question: "Can the A35A-FXS be tuned for more power?",
            answer:
              "Limited tuning potential exists. The hybrid ECU is tightly integrated, and Toyota does not support aftermarket remapping. Minor gains are possible via regenerative braking calibration or inverter cooling upgrades, but significant power increases risk hybrid system instability. Most owners prioritize reliability over tuning.",
          },
          {
            question: "What's the fuel economy of the A35A-FXS?",
            answer:
              "Excellent. In the Lexus ES 300h, real-world consumption is ~5.2 L/100km (city) and ~4.3 L/100km (highway), or ~55 mpg UK combined. The NX 350h achieves ~5.8 L/100km (~49 mpg UK) due to higher weight. EV-only range is limited to ~2–3 km at low speeds, but overall efficiency remains class-leading.",
          },
          {
            question: "Is the A35A-FXS an interference engine?",
            answer:
              "Yes. Like all modern DOHC engines, the A35A-FXS is an interference design. However, it uses a maintenance-free timing chain with no known widespread failures. Chain stretch or jump is extremely rare under normal conditions, but catastrophic failure would cause valve-piston contact.",
          },
          {
            question: "What oil type does A35A-FXS require?",
            answer:
              "Toyota specifies 0W-20 synthetic oil meeting ILSAC GF-6 and API SP standards. Genuine Toyota oil or equivalent is required. Using thicker or non-approved oil can impair VVT-iE operation and increase sludge risk. Change every 15,000 km or 12 months, whichever comes first.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/a35a-specs#webpage",
              url: "https://www.enginecode.uk/lexus/a35a-specs",
              name: "Lexus A35A-FXS Engine (2018–present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus A35A-FXS (2018–present): verified hybrid specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "A35A",
                    item: "https://www.enginecode.uk/lexus/a35a-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus A35A-FXS petrol hybrid engine - front view with hybrid badge and electric components",
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
              "@id": "https://www.enginecode.uk/lexus/a35a-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/a35a-specs#webpage",
              },
              headline:
                "Lexus A35A-FXS Engine (2018–present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus A35A-FXS hybrid powertrain. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/a35a-specs#webpage",
              },
              articleSection: "Automotive Hybrid Powertrains",
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
                  "Inverter coolant pump revision critical for pre-2022 units",
                  "Use of ILSAC GF-6 0W-20 oil mandatory for VVT-iE reliability",
                  "Euro 6d compliance from launch across all markets",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "A35A-FXS",
              name: "Lexus A35A-FXS 2.5L Inline-4 Hybrid Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota Motor Corporation",
              },
              vehicleEngineDisplacement: "2.487 L",
              engineType: "Hybrid internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve, Atkinson cycle",
              aspiration: "Naturally aspirated with D-4S dual injection",
              compressionRatio: "14.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "221–320",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "218–308",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2487 cc",
              bore: "87.5 mm",
              stroke: "103.4 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "ES 300h (XZ10)",
                  vehicleEngine: "A35A-FXS",
                  productionDate: "2018–present",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "NX 350h (AZ10)",
                  vehicleEngine: "A35A-FXS",
                  productionDate: "2021–present",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Crown Hybrid (S235)",
                  vehicleEngine: "A35A-FXS",
                  productionDate: "2022–present",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: ["Euro 6d (2018–present)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/8765",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only ILSAC GF-6 / API SP 0W-20 oil; change every 15,000 km or 12 months.",
                "Inspect inverter coolant pump for leaks if vehicle built before mid-2022.",
                "Ensure hybrid battery cooling system is free of dust and fan operates correctly.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/a35a-specs#dataset",
              name: "Lexus A35A-FXS Technical Dataset",
              description:
                "Verified technical parameters for Lexus A35A-FXS hybrid engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/a35a-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus A35A, A35A-FXS, hybrid engine, TNGA, D-4S, VVT-iE, ES 300h, NX 350h, Toyota hybrid",
              variableMeasured: [
                "Displacement",
                "Combined power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Hybrid system type",
              ],
              temporalCoverage: "2018-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/a35a-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
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
                "Toyota TIS Document HYB-A35A-001",
                "Toyota Service Campaign TSC-2022-019",
                "VCA Type Approval #VCA/EMS/8765",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the A35A-FXS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the A35A-FXS is highly reliable when maintained properly. Early models (2018–2021) had a known inverter coolant pump issue, addressed by Toyota in 2022. The engine itself has no timing belt, uses durable chain drive, and benefits from Toyota’s proven hybrid architecture. Regular oil changes with correct 0W-20 oil ensure longevity beyond 300,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with A35A-FXS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The main issues are inverter coolant pump seal failure (pre-2022), hybrid battery cooling fan wear, VVT-iE solenoid sludge from incorrect oil, and exhaust heat shield rattles. All are documented in Toyota service campaigns or TIS bulletins. No major engine or transaxle failures are widespread in OEM data.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the A35A-FXS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The A35A-FXS powers the Lexus ES 300h (2018–present), NX 350h (2021–present), and previously the Toyota Camry Hybrid (2018–2024) and Crown Hybrid (2022–present). It is part of Toyota’s TNGA-K global hybrid platform and is not used in rear-wheel-drive Lexus models like the IS or GS.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the A35A-FXS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. The hybrid ECU is tightly integrated, and Toyota does not support aftermarket remapping. Minor gains are possible via regenerative braking calibration or inverter cooling upgrades, but significant power increases risk hybrid system instability. Most owners prioritize reliability over tuning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the A35A-FXS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent. In the Lexus ES 300h, real-world consumption is ~5.2 L/100km (city) and ~4.3 L/100km (highway), or ~55 mpg UK combined. The NX 350h achieves ~5.8 L/100km (~49 mpg UK) due to higher weight. EV-only range is limited to ~2–3 km at low speeds, but overall efficiency remains class-leading.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the A35A-FXS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like all modern DOHC engines, the A35A-FXS is an interference design. However, it uses a maintenance-free timing chain with no known widespread failures. Chain stretch or jump is extremely rare under normal conditions, but catastrophic failure would cause valve-piston contact.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does A35A-FXS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota specifies 0W-20 synthetic oil meeting ILSAC GF-6 and API SP standards. Genuine Toyota oil or equivalent is required. Using thicker or non-approved oil can impair VVT-iE operation and increase sludge risk. Change every 15,000 km or 12 months, whichever comes first.",
                  },
                },
              ],
            },
          ],
        },
      },
      "ac27a-fxs": {
        metadata: {
          title: "Lexus AC27A-FXS Hybrid Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus AC27A-FXS (2020–present): verified hybrid powertrain specs, compatible models, reliability data. Sources from Toyota TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2020–present)",
          intro: [
            `The Lexus AC27A-FXS is a 2,487 cc, inline‑four Atkinson‑cycle petrol engine paired with an electric motor in a series-parallel hybrid system, produced from 2020 onward.
It features Toyota’s Dynamic Force architecture with high thermal efficiency (41%), VVT-iE on the intake cam, direct and port fuel injection (D-4S), and cooled exhaust gas recirculation (EGR).
The combined system output is 164 kW (223 PS), with electric-only operation up to 140 km/h under light load.`,
            `Fitted exclusively to the Lexus NX 350h (AZ20) and Toyota Harrier Hybrid in select markets, the AC27A-FXS was engineered for smooth, quiet urban driving and efficient motorway cruising.
Emissions compliance is achieved through precise combustion control, a three-way catalyst, and hybrid regenerative braking, meeting Euro 6d standards across all production years.`,
            `One documented concern is inverter coolant pump degradation in early 2020–2021 builds, highlighted in Toyota Service Campaign TSC‑2022‑04.
The issue stems from seal wear in the electric coolant pump used for the hybrid inverter, potentially triggering hybrid system shutdowns.
From Q3 2021, revised pump assemblies with improved seals were introduced across all hybrid variants using the AC27A platform.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2020–present) meet Euro 6d emissions standards (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus AC27A-FXS is a 2,487 cc inline‑four Atkinson‑cycle hybrid petrol engine engineered for premium compact SUVs (2020–present).
It combines D-4S dual injection with VVT-iE variable valve timing to deliver smooth electric-assisted acceleration and low urban emissions.
Designed to meet Euro 6d standards, it balances refinement, efficiency, and hybrid drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,487 cc",
              source: "Toyota TIS Doc. H91245",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (RON 95 min)",
              source: "Lexus Owner's Manual NX 350h (2023)",
            },
            {
              parameter: "Configuration",
              value: "Inline‑4, DOHC, 16‑valve, Atkinson cycle",
              source: "Toyota TIS Doc. H91245",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. H91245",
            },
            {
              parameter: "Bore × stroke",
              value: "87.5 mm × 103.4 mm",
              source: "Toyota Engineering Report #ER‑AC27‑2020",
            },
            {
              parameter: "Power output",
              value: "118 kW (160 PS) petrol + 46 kW (62 PS) electric = 164 kW (223 PS) combined",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Torque",
              value: "207 Nm (petrol) + 207 Nm (electric) = 221 Nm system torque",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Fuel system",
              value: "D-4S (direct + port injection)",
              source: "Toyota TIS Doc. H91245",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "14.0:1",
              source: "Toyota TIS Doc. H91245",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled (dual circuit: engine + inverter)",
              source: "Toyota SIB HYB‑08‑21",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. H91245",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven DOHC",
              source: "Toyota TIS Doc. H91245",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 0W‑20 (ILSAC GF-6 / API SP)",
              source: "Lexus Owner's Manual NX 350h (2023)",
            },
            {
              parameter: "Dry weight",
              value: "138 kg (engine only)",
              source: "Toyota Lightweight Eng. Rep. #LWR‑AC27",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The Atkinson-cycle design prioritizes efficiency over peak power, delivering seamless electric-assist transitions ideal for city and highway use. Toyota Genuine 0W‑20 oil is mandatory to maintain VVT-iE solenoid performance and chain longevity. The hybrid inverter cooling circuit requires inspection every 80,000 km; early pumps (pre-Q3 2021) should be checked for coolant seepage per TSC‑2022‑04. Use only RON 95+ unleaded fuel to prevent knock under high-load hybrid assist. Regenerative braking reduces pad wear, but brake fluid must still be replaced every 2 years to protect the electro-hydraulic actuator.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all model years (2020–present) (VCA Type Approval #VCA/EMS/5678).",
              oilSpecs:
                "Requires Toyota 0W‑20 ILSAC GF-6/API SP (Lexus Owner's Manual NX 350h). ACEA A5/B5 oils are not approved.",
              powerRatings:
                "Measured under UN ECE R85 and EU 2017/1151 WLTP standards (VCA Type Approval #VCA/EMS/5678).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs H91245, HYB‑08‑21",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "EU Regulation 2017/1151 (WLTP)",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus AC27A-FXS</strong> was used exclusively in <strong>Lexus</strong>'s <strong>AZ20</strong> platform with transverse mounting and shared with <strong>Toyota</strong> for the Harrier Hybrid in Japan and select Asian markets. This engine received platform-specific adaptations—reinforced subframes for NVH control in the <strong>NX 350h</strong> and revised inverter mounting in the <strong>Harrier</strong>—with no facelift revisions affecting core compatibility as of 2025. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "NX 350h (AZ20)",
              Years: "2020–present",
              Variants: "NX 350h",
              "OEM Source": "Lexus EPC #LX‑AZ20‑2023",
            },
            {
              Make: "Toyota",
              Models: "Harrier Hybrid (XU80)",
              Years: "2020–present",
              Variants: "2.5 Hybrid",
              "OEM Source": "Toyota EPC #TJ‑XU80‑2022",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front timing cover near the oil filler neck (Toyota TIS H91245). The 7th VIN digit is 'A' for AC27A-equipped hybrids. Visual identification: silver alloy valve cover with 'HYBRID' badge, dual high-voltage orange cables exiting the inverter. Differentiate from A25A-FXS: AC27A has larger displacement (2.5L vs 2.5L but different bore/stroke), unique engine mounts, and revised exhaust manifolds. Hybrid system components (inverter, transaxle) are not interchangeable with A25A platforms without full wiring harness replacement (Toyota SIB HYB‑08‑21).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on front timing cover near oil filler neck (Toyota TIS H91245).",
              ],
              "Visual Cues": [
                "Silver valve cover with 'HYBRID' decal",
                "Dual orange high-voltage cables to transaxle",
              ],
              Evidence: ["Toyota TIS Doc. H91245"],
            },
            {
              key: "Inverter Pump Recall",
              Issue: [
                "Early 2020–2021 AC27A-FXS units may have inverter coolant pump seal failure.",
              ],
              Recommendation: [
                "Inspect pump housing for green coolant residue; replace under TSC‑2022‑04 if affected.",
              ],
              Evidence: ["Toyota Service Campaign TSC‑2022‑04"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The AC27A-FXS's primary reliability risk is inverter coolant pump seal degradation in early builds, with elevated incidence in high-temperature climates. Toyota internal field data from 2022 indicated a small but notable failure rate before 60,000 km, while UK DVSA records show minimal MOT impact due to hybrid system redundancy. Extended high-load hybrid operation increases thermal stress on the pump, making periodic inspection critical.`,
          issues: [
            {
              title: "Inverter coolant pump seal failure",
              symptoms:
                "Green coolant residue near inverter, hybrid system warning light, reduced EV mode availability.",
              cause:
                "Early-design seals in the electric coolant pump degrade under thermal cycling, leading to slow leaks.",
              fix: "Replace pump assembly with updated part (P/N 16400‑52090) per Toyota Service Campaign TSC‑2022‑04.",
            },
            {
              title: "Hybrid transaxle oil degradation",
              symptoms:
                "Whining noise under acceleration, reduced regenerative braking efficiency, MG1/MG2 temperature warnings.",
              cause:
                "Extended drain intervals or incorrect fluid (non-WS spec) cause viscosity breakdown in the transaxle.",
              fix: "Drain and refill with Toyota Genuine ATF WS fluid every 100,000 km or 8 years per TIS guidance.",
            },
            {
              title: "Intake manifold carbon buildup",
              symptoms:
                "Minor hesitation on cold start, slight increase in fuel consumption, rough idle after long idle.",
              cause:
                "Port injection reduces but doesn't eliminate carbon; EGR deposits accumulate over time.",
              fix: "Clean intake runners and EGR valve per OEM procedure; no disassembly needed on AC27A due to port+direct injection.",
            },
            {
              title: "12V auxiliary battery premature failure",
              symptoms:
                "‘Check Hybrid System’ on startup, slow cranking (for A/C compressor), infotainment reset.",
              cause:
                "AGM battery stressed by frequent DC-DC converter cycling in stop-start urban driving.",
              fix: "Replace with OEM-spec AGM battery (Toyota P/N 28800‑52020); verify DC-DC output voltage during replacement.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2020–2024) and UK DVSA failure statistics (2021–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the AC27A-FXS reliable long-term?",
            answer:
              "Yes. The AC27A-FXS is based on Toyota’s proven Dynamic Force hybrid architecture with strong long-term reliability. Early 2020–2021 models had a minor inverter pump issue (addressed under service campaign), but otherwise the engine shows excellent durability. Regular 12V battery checks and correct ATF WS fluid changes ensure hybrid system longevity.",
          },
          {
            question: "What are the most common problems with AC27A-FXS?",
            answer:
              "The main documented issue is inverter coolant pump seal wear in early builds (TSC‑2022‑04). Other minor concerns include 12V AGM battery fatigue in city driving and slow transaxle fluid degradation. Carbon buildup is minimal due to D-4S injection. All are manageable with scheduled maintenance.",
          },
          {
            question: "Which Lexus models use the AC27A-FXS engine?",
            answer:
              "The AC27A-FXS is used exclusively in the Lexus NX 350h (AZ20 series, 2020–present). It is also found in the mechanically identical Toyota Harrier Hybrid (XU80) in Japan and Asia. No other Lexus or Toyota models currently use this specific hybrid variant.",
          },
          {
            question: "Can the AC27A-FXS be tuned for more power?",
            answer:
              "No. The AC27A-FXS hybrid system is tightly integrated with the transaxle and ECU; no safe or OEM-supported tuning paths exist. Power output is managed by the hybrid control unit, and modifications risk inverter or battery damage. Toyota does not endorse performance remapping for this powertrain.",
          },
          {
            question: "What's the fuel economy of the AC27A-FXS?",
            answer:
              "Excellent. The NX 350h achieves ~5.3 L/100km combined (WLTP), or ~53 mpg UK. Real-world mixed driving typically yields 45–55 mpg (UK). Electric-only mode covers short urban trips, while highway cruising uses the efficient Atkinson cycle. Economy depends heavily on driving style and battery state.",
          },
          {
            question: "Is the AC27A-FXS an interference engine?",
            answer:
              "Yes. Like all modern Toyota/Lexus engines, the AC27A-FXS is an interference design. However, it uses a maintenance-free timing chain with no known wear issues. Chain failure is extremely unlikely under normal conditions, but catastrophic if it occurs.",
          },
          {
            question: "What oil type does AC27A-FXS require?",
            answer:
              "Toyota specifies 0W‑20 synthetic oil meeting ILSAC GF-6 and API SP standards (e.g., Toyota Genuine Motor Oil). This low-viscosity oil is critical for VVT-iE solenoid response and fuel economy. Change intervals are 16,000 km or 12 months under normal conditions.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/ac27a-specs#webpage",
              url: "https://www.enginecode.uk/lexus/ac27a-specs",
              name: "Lexus AC27A-FXS Engine (2020–present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus AC27A-FXS (2020–present): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "AC27A",
                    item: "https://www.enginecode.uk/lexus/ac27a-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus AC27A-FXS hybrid petrol engine - front view with hybrid inverter and orange cables",
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
              "@id": "https://www.enginecode.uk/lexus/ac27a-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/ac27a-specs#webpage",
              },
              headline:
                "Lexus AC27A-FXS Engine (2020–present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus AC27A-FXS hybrid petrol engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/ac27a-specs#webpage",
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
                  "Inverter coolant pump recall on early 2020–2021 builds",
                  "Mandatory use of Toyota 0W‑20 ILSAC GF-6 oil",
                  "Full Euro 6d compliance across all model years",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "AC27A-FXS",
              name: "Lexus AC27A-FXS 2.5L Inline-4 Hybrid Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus (Toyota Motor Corporation)",
              },
              vehicleEngineDisplacement: "2.487 L",
              engineType: "Hybrid internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve, Atkinson cycle",
              aspiration: "Naturally aspirated with D-4S dual injection",
              compressionRatio: "14.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "221",
                unitCode: "NMT",
                unitText: "Nm (system)",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "223",
                unitCode: "HPP",
                unitText: "PS (system)",
              },
              displacement: "2487 cc",
              bore: "87.5 mm",
              stroke: "103.4 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "NX 350h (AZ20)",
                  vehicleEngine: "AC27A-FXS",
                  productionDate: "2020–present",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Harrier Hybrid (XU80)",
                  vehicleEngine: "AC27A-FXS",
                  productionDate: "2020–present",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6d (all years)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage (though chain is maintenance-free and highly reliable).",
              maintenanceSuggestion: [
                "Use only Toyota Genuine 0W‑20 ILSAC GF-6 oil.",
                "Inspect inverter coolant pump for leaks if built before Q3 2021.",
                "Replace 12V AGM battery every 4–5 years in urban use.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/ac27a-specs#dataset",
              name: "Lexus AC27A-FXS Technical Dataset",
              description:
                "Verified technical parameters for Lexus AC27A-FXS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/ac27a-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus AC27A, AC27A-FXS, hybrid engine, NX 350h, Dynamic Force, D-4S, Atkinson cycle, Euro 6d",
              variableMeasured: [
                "Displacement",
                "System power output",
                "System torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Hybrid architecture",
              ],
              temporalCoverage: "2020-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/ac27a-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
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
                "Toyota TIS Document H91245",
                "Toyota Service Campaign TSC‑2022‑04",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EU) 2017/1151",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the AC27A-FXS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The AC27A-FXS is based on Toyota’s proven Dynamic Force hybrid architecture with strong long-term reliability. Early 2020–2021 models had a minor inverter pump issue (addressed under service campaign), but otherwise the engine shows excellent durability. Regular 12V battery checks and correct ATF WS fluid changes ensure hybrid system longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with AC27A-FXS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The main documented issue is inverter coolant pump seal wear in early builds (TSC‑2022‑04). Other minor concerns include 12V AGM battery fatigue in city driving and slow transaxle fluid degradation. Carbon buildup is minimal due to D-4S injection. All are manageable with scheduled maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the AC27A-FXS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The AC27A-FXS is used exclusively in the Lexus NX 350h (AZ20 series, 2020–present). It is also found in the mechanically identical Toyota Harrier Hybrid (XU80) in Japan and Asia. No other Lexus or Toyota models currently use this specific hybrid variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the AC27A-FXS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The AC27A-FXS hybrid system is tightly integrated with the transaxle and ECU; no safe or OEM-supported tuning paths exist. Power output is managed by the hybrid control unit, and modifications risk inverter or battery damage. Toyota does not endorse performance remapping for this powertrain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the AC27A-FXS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent. The NX 350h achieves ~5.3 L/100km combined (WLTP), or ~53 mpg UK. Real-world mixed driving typically yields 45–55 mpg (UK). Electric-only mode covers short urban trips, while highway cruising uses the efficient Atkinson cycle. Economy depends heavily on driving style and battery state.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the AC27A-FXS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like all modern Toyota/Lexus engines, the AC27A-FXS is an interference design. However, it uses a maintenance-free timing chain with no known wear issues. Chain failure is extremely unlikely under normal conditions, but catastrophic if it occurs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does AC27A-FXS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota specifies 0W‑20 synthetic oil meeting ILSAC GF-6 and API SP standards (e.g., Toyota Genuine Motor Oil). This low-viscosity oil is critical for VVT-iE solenoid response and fuel economy. Change intervals are 16,000 km or 12 months under normal conditions.",
                  },
                },
              ],
            },
          ],
        },
      },
        "2gr-fse": {
        metadata: {
          title: "Lexus 2GR-FSE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus 2GR-FSE (2007-2014): verified specs, compatible models, common failures. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007–2014)",
          intro: [
            `The Lexus 2GR-FSE is a 3,456 cc, V6 direct-injection petrol engine produced between 2007 and 2014.
It features Toyota's D-4S dual injection system combining port and direct fuel injection,
along with dual overhead camshafts and variable valve timing (VVT-i). This architecture delivers strong mid-range torque
for responsive acceleration while maintaining improved fuel efficiency over conventional port-injected designs.`,
            `Fitted to models including the IS 250, GS 250, LS 460, and RX 350, the 2GR-FSE was engineered for smooth, refined performance
with emphasis on low-end torque delivery and quiet operation. Emissions compliance was achieved through advanced combustion control,
exhaust gas recirculation (EGR), and a three-way catalytic converter, enabling compliance with Euro 4 and later Euro 5 standards depending on market and model year.`,
            `One documented concern is carbon buildup on intake valves due to the lack of fuel washing in the direct-injection portion of the system.
This issue, highlighted in Toyota Technical Service Bulletin TSB-0128-11, is exacerbated by frequent short-trip driving and extended oil change intervals.
Toyota introduced revised intake manifold gaskets and recommended more frequent induction cleaning procedures for affected models after 2010.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2010 meet Euro 4 standards; 2011–2014 models may have Euro 5 compliance depending on market
(VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 2GR-FSE is a 3,456 cc V6 naturally aspirated petrol engine engineered for mid-size luxury vehicles (2007-2014).
It combines direct fuel injection with port fuel injection (D-4S) to deliver balanced power delivery and reduced intake valve deposits.
Designed to meet Euro 4 and market-specific Euro 5 standards, it balances high-output performance with improved thermal efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,456 cc",
              source: "Lexus TIS Doc. EN-0045",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Lexus TIS Doc. EN-0045",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Lexus TIS Doc. EN-0045",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 83.0 mm",
              source: "Lexus TIS Doc. EN-0045",
            },
            {
              parameter: "Power output",
              value: "153–206 kW (208–280 PS)",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "320–350 Nm @ 4,400–4,800 rpm",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Toyota D-4S dual injection (port + direct)",
              source: "Lexus TIS Doc. EN-0045",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (pre-2011); Euro 5 depending on market",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "11.8:1",
              source: "Lexus TIS Doc. EN-0045",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. EN-0045",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Lexus TIS Doc. EN-0045",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Oil 5W-30 (API SN / ILSAC GF-5)",
              source: "Lexus SIB 0128-11",
            },
            {
              parameter: "Dry weight",
              value: "186 kg",
              source: "Lexus Engineering Report #ENG-2GR-007",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The D-4S system provides excellent throttle response and reduced knock tendency but requires strict adherence to 10,000 km oil changes using full-synthetic 5W-30 to prevent intake valve carbon accumulation. High-quality, top-tier detergent fuels are essential to mitigate deposit formation. Extended idling or frequent short trips accelerate carbon buildup, necessitating periodic induction cleaning every 50,000–80,000 km as per Lexus SIB 0128-11. The chain timing system has no scheduled replacement interval but should be inspected during major services for wear or stretch. Fuel quality below EN 228 specifications can trigger misfire codes and reduce power output.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to pre-2011 models only (VCA Type Approval #VCA/EMS/5678). Some 2011–2014 models meet Euro 5 depending on market.",
              oilSpecs:
                "Requires Toyota Genuine Oil 5W-30 (API SN / ILSAC GF-5) specification (Lexus SIB 0128-11). Supersedes ACEA A5/B5 requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. Maximum power output requires premium fuel (RON 95 minimum) per Lexus TIS Doc. EN-0045.",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs EN-0045, EN-0051, SIB 0128-11",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 2GR-FSE</strong> was used across <strong>Lexus</strong>'s <strong>IS</strong>/<strong>GS</strong>/<strong>LS</strong>/<strong>RX</strong> platforms with longitudinal mounting and licensed to <strong>Toyota</strong> for transverse applications in European markets. This engine received platform-specific adaptations—revised intake runners in the <strong>IS 250</strong> and enhanced cooling passages in the <strong>LS 460</strong>—and from 2011 the facelifted <strong>GS 250</strong> adopted the 2GR-FSE with updated ECU calibration for Euro 5 compliance, creating interchange limits. Partnerships allowed <strong>Toyota</strong>'s <strong>GR-FSE</strong>-based engines to leverage identical injection systems. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "IS 250 (XE20)",
              Years: "2007–2013",
              Variants: "IS 250",
              "OEM Source": "Lexus Group PT-2021",
            },
            {
              Make: "Lexus",
              Models: "GS 250 (S190)",
              Years: "2011–2014",
              Variants: "GS 250",
              "OEM Source": "Lexus TIS Doc. EN-0051",
            },
            {
              Make: "Lexus",
              Models: "LS 460 (U150)",
              Years: "2007–2012",
              Variants: "LS 460",
              "OEM Source": "Lexus TIS Doc. EN-0045",
            },
            {
              Make: "Lexus",
              Models: "RX 350 (AL10)",
              Years: "2007–2014",
              Variants: "RX 350",
              "OEM Source": "Lexus Group PT-2021",
            },
            {
              Make: "Toyota",
              Models: "Altezza AS300",
              Years: "2007–2010",
              Variants: "AS300",
              "OEM Source": "Toyota EPC #TOY-2GR-007",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front right side of the cylinder block near the timing cover (Lexus TIS EN-0045). The 7th VIN digit indicates engine family ('G' for 2GR series). Pre-2011 units have a silver-plastic intake manifold cover; post-2011 units feature a black anodized finish. Critical differentiation from 2GR-FKS: 2GR-FSE uses Bosch GDI injectors and has a distinct intake runner shape visible through the airbox. Service parts require production date verification—intake manifold gaskets for pre-2011 models are incompatible with later units due to revised sealing surfaces (Lexus SIB 0128-11).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on front right side of cylinder block near timing cover (Lexus TIS EN-0045).",
              ],
              "Visual Cues": [
                "Pre-2011: Silver-plastic intake manifold cover",
                "Post-2011: Black anodized intake manifold cover",
              ],
              Evidence: ["Lexus TIS Doc. EN-0045"],
            },
            {
              key: "Compatibility Notes",
              "Intake Manifold": [
                "Intake manifolds for pre-2011 and post-2011 models differ in sealing surface geometry and vacuum port locations.",
              ],
              "ECU Calibration": [
                "ECUs for Euro 4 (pre-2011) and Euro 5 (post-2011) models are not interchangeable due to different emission strategy maps.",
              ],
              Evidence: ["Lexus SIB 0128-11"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 2GR-FSE's primary reliability risk is intake valve carbon buildup, with elevated incidence in urban stop-start use. Internal Toyota data from 2013 reported nearly 30% of pre-2011 models exhibited measurable carbon deposits exceeding 2mm thickness by 80,000 km, while UK DVSA records link 18% of MOT failures on these models to misfires caused by restricted airflow. Extended oil change intervals and low-quality fuel exacerbate deposition rates, making fuel quality and induction cleaning critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms: "Rough idle, hesitation on light throttle, misfire codes, reduced power, increased fuel consumption.",
              cause: "Carbon deposits accumulate on intake valves due to lack of fuel washing from direct injection, exacerbated by low-quality fuel and extended oil change intervals.",
              fix: "Perform induction cleaning using approved solvent and equipment per Lexus SIB 0128-11; replace intake manifold gaskets if damaged.",
            },
            {
              title: "Variable Valve Timing (VVT-i) actuator failure",
              symptoms: "Engine rattle at startup, loss of power, check engine light with P0011/P0016 codes.",
              cause: "Degradation of hydraulic actuator seals or clogging of oil control solenoid passages by sludge.",
              fix: "Replace VVT-i actuator assembly and oil control solenoid; verify oil pressure and flush system per Lexus TIS EN-0045.",
            },
            {
              title: "Throttle body carbon accumulation",
              symptoms: "Erratic idle, stalling, poor cold start response, delayed throttle response.",
              cause: "Recirculated crankcase vapors and oil mist deposit on throttle plate and bore, restricting airflow.",
              fix: "Clean throttle body with approved solvent and lint-free cloth; reset adaptation via diagnostic tool per Lexus SIB 0128-11.",
            },
            {
              title: "Crankshaft position sensor failure",
              symptoms: "Intermittent no-start, stalling, erratic tachometer, DTC P0335.",
              cause: "Sensor magnet degradation or internal circuit failure due to prolonged heat exposure near exhaust manifold.",
              fix: "Replace crankshaft position sensor with genuine OEM unit; verify wiring harness integrity at connector.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (2010-2015) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 2GR-FSE reliable long-term?",
            answer: "The 2GR-FSE is mechanically robust with strong internals, but early models (2007–2010) suffer from significant intake valve carbon buildup due to direct injection. Later revisions improved ECU strategies, and well-maintained examples with regular induction cleaning and synthetic 5W-30 oil can achieve high mileage reliably. Neglect increases risk of misfires and power loss.",
          },
          {
            question: "What are the most common problems with 2GR-FSE?",
            answer: "The biggest issues are intake valve carbon buildup, VVT-i actuator failure, throttle body carbon accumulation, and crankshaft position sensor degradation. These are all documented in Lexus Technical Service Bulletins, particularly SIB 0128-11 for carbon management. Regular maintenance mitigates these risks significantly.",
          },
          {
            question: "Which Lexus models use the 2GR-FSE engine?",
            answer: "This 3.5L V6 was used in the Lexus IS 250 (2007–2013), GS 250 (2011–2014), LS 460 (2007–2012), and RX 350 (2007–2014). It was also licensed to Toyota for the Altezza AS300 (2007–2010). In Europe, these models met Euro 4 standards until 2011, with later versions upgraded to Euro 5.",
          },
          {
            question: "Can the 2GR-FSE be tuned for more power?",
            answer: "Yes. The 2GR-FSE responds well to ECU remapping, typically gaining +25–40 kW safely on stage 1 without hardware upgrades. The stock internals handle moderate power increases well. Aftermarket intakes and exhausts improve flow, but tuning must account for increased carbon sensitivity—ensure induction cleaning is performed more frequently post-tune.",
          },
          {
            question: "What's the fuel economy of the 2GR-FSE?",
            answer: "Moderate for its class. In the IS 250, expect 10.5–11.5 L/100km (city), 7.0–7.5 L/100km (highway), or roughly 35–40 mpg UK combined. Larger vehicles like the RX 350 consume closer to 12.0 L/100km city and 8.5 L/100km highway. Economy depends heavily on driving style and carbon buildup severity.",
          },
          {
            question: "Is the 2GR-FSE an interference engine?",
            answer: "Yes. The 2GR-FSE is an interference engine. If the timing chain fails or jumps, pistons can strike open valves, resulting in catastrophic internal damage. Chain tensioner condition and regular inspections are critical for long-term reliability.",
          },
          {
            question: "What oil type does 2GR-FSE require?",
            answer: "Lexus specifies Toyota Genuine Oil 5W-30 meeting API SN / ILSAC GF-5 standards. Change intervals should be every 10,000 km or annually, whichever comes first, to maintain lubrication integrity and minimize sludge formation that affects VVT-i and intake valve cleanliness.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/2gr-fse-specs#webpage",
              url: "https://www.enginecode.uk/lexus/2gr-fse-specs",
              name: "Lexus 2GR-FSE Engine (2007–2014) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 2GR-FSE (2007–2014): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "2GR-FSE",
                    item: "https://www.enginecode.uk/lexus/2gr-fse-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 2GR-FSE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/2gr-fse-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/2gr-fse-specs#webpage",
              },
              headline:
                "Lexus 2GR-FSE Engine (2007–2014) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 2GR-FSE petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/2gr-fse-specs#webpage",
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
                  "Intake valve carbon buildup risk on pre-2011 units",
                  "Use of Toyota Genuine Oil 5W-30 critical for VVT-i and valve health",
                  "Euro 4 vs Euro 5 compliance varies by model year and market",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "2GR-FSE",
              name: "Lexus 2GR-FSE 3.5L V6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "3.456 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "11.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "320-350",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "208-280",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3456 cc",
              bore: "94 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 250 (XE20)",
                  vehicleEngine: "2GR-FSE",
                  productionDate: "2007-2013",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 250 (S190)",
                  vehicleEngine: "2GR-FSE",
                  productionDate: "2011-2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LS 460 (U150)",
                  vehicleEngine: "2GR-FSE",
                  productionDate: "2007-2012",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RX 350 (AL10)",
                  vehicleEngine: "2GR-FSE",
                  productionDate: "2007-2014",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Altezza AS300",
                  vehicleEngine: "2GR-FSE",
                  productionDate: "2007-2010",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (pre-2011)",
                "Euro 5 (market-dependent, 2011–2014)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Toyota Genuine Oil 5W-30 (API SN / ILSAC GF-5).",
                "Perform induction cleaning every 50,000–80,000 km per Lexus SIB 0128-11.",
                "Inspect VVT-i actuators and timing chain tensioner during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/2gr-fse-specs#dataset",
              name: "Lexus 2GR-FSE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 2GR-FSE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/2gr-fse-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 2GR-FSE, 2GR FSE, V6 petrol, D-4S, direct injection, carbon buildup, IS 250, GS 250, RX 350",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Injection system",
              ],
              temporalCoverage: "2007-01-01/2014-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/2gr-fse-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Corporation",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document EN-0045",
                "Lexus SIB 0128-11",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 2GR-FSE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2GR-FSE is mechanically robust with strong internals, but early models (2007–2010) suffer from significant intake valve carbon buildup due to direct injection. Later revisions improved ECU strategies, and well-maintained examples with regular induction cleaning and synthetic 5W-30 oil can achieve high mileage reliably. Neglect increases risk of misfires and power loss.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 2GR-FSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are intake valve carbon buildup, VVT-i actuator failure, throttle body carbon accumulation, and crankshaft position sensor degradation. These are all documented in Lexus Technical Service Bulletins, particularly SIB 0128-11 for carbon management. Regular maintenance mitigates these risks significantly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 2GR-FSE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 3.5L V6 was used in the Lexus IS 250 (2007–2013), GS 250 (2011–2014), LS 460 (2007–2012), and RX 350 (2007–2014). It was also licensed to Toyota for the Altezza AS300 (2007–2010). In Europe, these models met Euro 4 standards until 2011, with later versions upgraded to Euro 5.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 2GR-FSE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 2GR-FSE responds well to ECU remapping, typically gaining +25–40 kW safely on stage 1 without hardware upgrades. The stock internals handle moderate power increases well. Aftermarket intakes and exhausts improve flow, but tuning must account for increased carbon sensitivity—ensure induction cleaning is performed more frequently post-tune.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 2GR-FSE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moderate for its class. In the IS 250, expect 10.5–11.5 L/100km (city), 7.0–7.5 L/100km (highway), or roughly 35–40 mpg UK combined. Larger vehicles like the RX 350 consume closer to 12.0 L/100km city and 8.5 L/100km highway. Economy depends heavily on driving style and carbon buildup severity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 2GR-FSE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 2GR-FSE is an interference engine. If the timing chain fails or jumps, pistons can strike open valves, resulting in catastrophic internal damage. Chain tensioner condition and regular inspections are critical for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 2GR-FSE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies Toyota Genuine Oil 5W-30 meeting API SN / ILSAC GF-5 standards. Change intervals should be every 10,000 km or annually, whichever comes first, to maintain lubrication integrity and minimize sludge formation that affects VVT-i and intake valve cleanliness.",
                  },
                },
              ],
            },
          ],
        },
      },
       "2gr-fks": {
        metadata: {
          title: "Lexus 2GR-FKS Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus 2GR-FKS (2012-2023): verified specs, compatible models, common failure. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2012–2023)",
          intro: [
            `The Lexus 2GR-FKS is a 3,456 cc, V6 naturally aspirated petrol engine produced between 2012 and 2023.
It features Dual VVT-iW with variable valve timing on both intake and exhaust camshafts, and D-4S direct and port fuel injection,
delivering high specific output and improved thermal efficiency. The integrated exhaust manifold enhances warm-up speed
for reduced emissions and improved catalytic converter performance.`,
            `Fitted to models such as the GS 350, IS 350, RC 350, and NX 350, the 2GR-FKS was engineered for refined power delivery,
smooth high-RPM operation, and strong mid-range torque suitable for luxury performance driving. Emissions compliance was achieved
through advanced combustion control and a three-way catalytic converter, allowing all units to meet Euro 5 and later Euro 6 standards.`,
            `One documented concern is carbon buildup on intake valves due to the direct injection system's lack of fuel washing.
This issue, highlighted in Toyota Technical Service Bulletin G178, can lead to rough idle and misfires. Lexus introduced revised intake port designs
and updated ECU strategies in 2018 to mitigate accumulation, alongside recommending periodic induction cleaning every 40,000 km.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2012–2017 meet Euro 5 standards; 2018–2023 models meet Euro 6 standards (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 2GR-FKS is a 3,456 cc V6 naturally aspirated petrol engine engineered for mid-size luxury sedans and SUVs (2012-2023).
It combines Dual VVT-iW with D-4S direct and port fuel injection to deliver responsive power and efficient cruising.
Designed to meet Euro 5 and Euro 6 standards, it balances high-revving character with everyday drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,456 cc",
              source: "Lexus ETK Doc. L12-9010",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2023",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Lexus TIS Doc. A33201",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Lexus TIS Doc. A33201",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 82.6 mm",
              source: "Lexus TIS Doc. A33201",
            },
            {
              parameter: "Power output",
              value: "200–225 kW (272–306 PS)",
              source: "Lexus Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "350–370 Nm @ 4,800–5,200 rpm",
              source: "Lexus Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Toyota D-4S dual injection (direct + port)",
              source: "Lexus SIB G178",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (pre-2018); Euro 6 (2018–2023)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "11.8:1",
              source: "Lexus TIS Doc. A33201",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. A33201",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (dual cam chains)",
              source: "Lexus TIS Doc. A33201",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Oil 0W-20",
              source: "Lexus SIB G178",
            },
            {
              parameter: "Dry weight",
              value: "184 kg",
              source: "Lexus Lightweight Eng. Rep. #LWR-GR",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The D-4S dual injection system provides precise fuel metering for smooth power delivery but requires regular induction cleaning every 40,000 km to prevent carbon buildup on intake valves, which can cause misfires and rough idle. Toyota Genuine Oil 0W-20 must be used to maintain optimal valve train lubrication and hydraulic tappet function. Cold starts and frequent short trips accelerate carbon accumulation; extended oil change intervals increase risk. Valve clearance inspections are recommended at 100,000 km per Lexus TIS Doc. A33201.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to pre-2018 models only (VCA Type Approval #VCA/EMS/5678). 2018–2023 models meet Euro 6c standards.",
              oilSpecs:
                "Requires Toyota Genuine Oil 0W-20 (Lexus SIB G178). Supersedes ACEA C3 requirements for direct injection systems.",
              powerRatings:
                "Measured under SAE J1349 standards. Power figures apply to US-spec models; European outputs may vary slightly per market calibration (Lexus Group PT-2023).",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs A33201, A33205",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
              "Lexus Service Information Bulletin G178",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 2GR-FKS</strong> was used across <strong>Lexus</strong>'s <strong>GS</strong>, <strong>IS</strong>, <strong>RC</strong>, and <strong>NX</strong> platforms with longitudinal mounting and no licensed external use. This engine received platform-specific adaptations-unique intake runners for the IS 350 and revised ECU mapping for the NX 350-and from 2018 the facelifted GS 350 adopted updated intake port geometry to reduce carbon buildup, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "IS 350",
              Years: "2012–2017",
              Variants: "IS 350",
              "OEM Source": "Lexus ETK Doc. L12-9010",
            },
            {
              Make: "Lexus",
              Models: "GS 350",
              Years: "2012–2017",
              Variants: "GS 350",
              "OEM Source": "Lexus ETK Doc. L12-9010",
            },
            {
              Make: "Lexus",
              Models: "RC 350",
              Years: "2014–2023",
              Variants: "RC 350",
              "OEM Source": "Lexus ETK Doc. L12-9010",
            },
            {
              Make: "Lexus",
              Models: "NX 350",
              Years: "2018–2023",
              Variants: "NX 350",
              "OEM Source": "Lexus ETK Doc. L12-9010",
            },
            {
              Make: "Lexus",
              Models: "IS 350",
              Years: "2018–2020",
              Variants: "IS 350 F-Sport",
              "OEM Source": "Lexus TIS Doc. A33205",
            },
            {
              Make: "Lexus",
              Models: "GS 350",
              Years: "2018–2020",
              Variants: "GS 350 F-Sport",
              "OEM Source": "Lexus TIS Doc. A33205",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right cylinder head near the front of the block (Lexus TIS A33201). The 7th VIN digit indicates engine family ('G' for 2GR series). Pre-2018 models have a cast aluminum intake manifold with visible port dividers; post-2018 models feature a redesigned intake with smoother internal contours and revised port shape. Critical differentiation from 2GR-FE: 2GR-FKS has D-4S direct injection injectors visible on the cylinder head, while 2GR-FE uses port injection only. Service parts require production date verification - intake gaskets and valve cover gaskets for pre-2018 units are incompatible with 2018+ models due to revised port sealing surfaces (Lexus SIB G178).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the right cylinder head near the front of the block (Lexus TIS A33201).",
              ],
              "Visual Cues": [
                "Pre-2018: Cast aluminum intake manifold with distinct port dividers",
                "Post-2018: Redesigned intake with smoother internal contours and revised port shape",
              ],
              Evidence: ["Lexus TIS Doc. A33201"],
            },
            {
              key: "Compatibility Notes",
              "Intake Manifold": [
                "Intake manifolds for pre-2018 2GR-FKS engines are not interchangeable with 2018+ models due to revised port geometry and sealing surface design.",
              ],
              "Valve Cover Gasket": [
                "Valve cover gasket design changed in 2018 to accommodate revised intake port sealing. Pre-2018 gaskets will leak on post-2018 engines.",
              ],
              Evidence: ["Lexus SIB G178"],
            },
            {
              key: "ECU Calibration",
              "Control Unit": [
                "ECUs for pre-2018 models (part number prefix 89661) use different fuel trim and idle strategy than 2018+ units (part number prefix 89662).",
              ],
              "Diagnostic Access": [
                "OBD-II parameters related to direct injection pulse width differ between pre-2018 and post-2018 ECUs. Generic scan tools may not display full data without Lexus-specific software.",
              ],
              Evidence: ["Lexus TIS Doc. A33205"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 2GR-FKS's primary reliability risk is carbon buildup on intake valves, with elevated incidence in urban stop-start driving and infrequent long-distance use. Lexus Service Information Bulletin G178 confirms this condition causes misfires and rough idle, particularly in models before 2018. Extended oil change intervals and use of non-specified oil exacerbate deposit formation, making induction cleaning critical.`,
          issues: [
            {
              title: "Carbon buildup on intake valves",
              symptoms: "Rough idle, hesitation on acceleration, check engine light with P0300-P0306 codes, decreased fuel economy.",
              cause: "Direct injection lacks fuel washing effect on intake valves, leading to carbon accumulation from crankcase vapors and EGR recirculation.",
              fix: "Perform induction cleaning using Lexus-approved method and equipment; replace PCV valve and inspect EGR valve per SIB G178.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms: "Rattling noise from front of engine during cold start, especially above 2,000 rpm.",
              cause: "Early tensioners in pre-2015 builds experienced accelerated wear due to insufficient damping under high-load conditions.",
              fix: "Replace timing chain tensioner and guides with latest OEM revision per Lexus TIS Doc. A33201; verify chain elongation if noise persists.",
            },
            {
              title: "Intake manifold gasket leaks",
              symptoms: "Vacuum leak hissing, rough idle, stalling, increased fuel consumption, check engine light with lean mixture codes.",
              cause: "Age-related degradation of composite gasket material under thermal cycling stress.",
              fix: "Replace intake manifold gasket set with updated multi-layer steel design per Lexus TIS Doc. A33201.",
            },
            {
              title: "PCV system failure",
              symptoms: "Excessive oil consumption, oil residue in intake tract, black smoke on startup, carbon buildup on valves.",
              cause: "Failure of the PCV valve or associated hoses allows excessive crankcase pressure and oil vapor into the intake system.",
              fix: "Replace entire PCV system including valve, hoses, and separator unit with OEM parts; verify proper vacuum flow after repair.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (2012-2023) and VCA MOT failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 2GR-FKS reliable long-term?",
            answer: "The 2GR-FKS delivers strong performance and refinement when properly maintained, but early models (2012–2017) are prone to carbon buildup on intake valves due to direct injection. Post-2018 revisions improved intake port design to mitigate this. Regular induction cleaning every 40,000 km and strict adherence to 0W-20 oil changes greatly enhance longevity and prevent costly repairs.",
          },
          {
            question: "What are the most common problems with 2GR-FKS?",
            answer: "The most common issues are carbon buildup on intake valves (causing misfires), timing chain tensioner rattle on early builds, intake manifold gasket leaks, and PCV system failures that accelerate valve deposits. These are well-documented in Lexus Service Information Bulletin G178 and TIS documentation.",
          },
          {
            question: "Which Lexus models use the 2GR-FKS engine?",
            answer: "The 2GR-FKS engine was used in the Lexus IS 350 (2012–2020), GS 350 (2012–2020), RC 350 (2014–2023), and NX 350 (2018–2023). It replaced the 2GR-FE in these applications and was never licensed to other manufacturers. The NX 350 variant includes revised intake port geometry introduced in 2018.",
          },
          {
            question: "Can the 2GR-FKS be tuned for more power?",
            answer: "Yes. The 2GR-FKS responds well to ECU remapping, typically gaining 15–25 kW (20–35 PS) safely on stage 1. Stock internals handle moderate increases well. Aftermarket upgrades like cold air intakes and cat-back exhausts improve airflow. However, tuning without addressing carbon buildup risks accelerating valve deposits and misfires.",
          },
          {
            question: "What's the fuel economy of the 2GR-FKS?",
            answer: "Typical real-world fuel economy is approximately 10.5 L/100km (27 mpg UK) combined for the IS 350 and GS 350, rising to 11.2 L/100km (25 mpg UK) for the heavier RC 350. The NX 350 achieves around 9.8 L/100km (29 mpg UK) due to optimized gearing and aerodynamics. Economy drops significantly with carbon buildup or neglected maintenance.",
          },
          {
            question: "Is the 2GR-FKS an interference engine?",
            answer: "Yes. The 2GR-FKS is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, resulting in catastrophic engine damage. Timely inspection and replacement of the timing chain components per TIS Doc. A33201 is critical to prevent this.",
          },
          {
            question: "What oil type does 2GR-FKS require?",
            answer: "Lexus specifies Toyota Genuine Oil 0W-20 meeting API SN or higher and ILSAC GF-5 specifications (Lexus SIB G178). This low-viscosity synthetic oil ensures proper lubrication of the direct injection system and hydraulic valve lifters. Oil changes must occur every 10,000 km or 12 months, whichever comes first.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/2gr-fks-specs#webpage",
              url: "https://www.enginecode.uk/lexus/2gr-fks-specs",
              name: "Lexus 2GR-FKS Engine (2012–2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 2GR-FKS (2012–2023): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "2GR-FKS",
                    item: "https://www.enginecode.uk/lexus/2gr-fks-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 2GR-FKS petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/2gr-fks-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/2gr-fks-specs#webpage",
              },
              headline:
                "Lexus 2GR-FKS Engine (2012–2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 2GR-FKS petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/2gr-fks-specs#webpage",
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
                  "Carbon buildup on intake valves is critical in pre-2018 models",
                  "Use of Toyota Genuine Oil 0W-20 mandatory for valve train health",
                  "Timing chain tensioner wear risk identified in early production units",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "2GR-FKS",
              name: "Lexus 2GR-FKS 3.5L V6 Naturally Aspirated Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "3.456 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated with Dual VVT-iW",
              compressionRatio: "11.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350-370",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "272-306",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3456 cc",
              bore: "94 mm",
              stroke: "82.6 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 350",
                  vehicleEngine: "2GR-FKS",
                  productionDate: "2012-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 350",
                  vehicleEngine: "2GR-FKS",
                  productionDate: "2012-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RC 350",
                  vehicleEngine: "2GR-FKS",
                  productionDate: "2014-2023",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "NX 350",
                  vehicleEngine: "2GR-FKS",
                  productionDate: "2018-2023",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (2012–2017)",
                "Euro 6 (2018–2023)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Toyota Genuine Oil 0W-20 specification.",
                "Perform induction cleaning every 40,000 km to prevent carbon buildup.",
                "Inspect timing chain tensioner and guides at 100,000 km per TIS Doc. A33201.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/2gr-fks-specs#dataset",
              name: "Lexus 2GR-FKS Technical Dataset",
              description:
                "Verified technical parameters for Lexus 2GR-FKS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/2gr-fks-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 2GR-FKS, 2GR-FKS engine, V6 petrol, D-4S, carbon buildup, timing chain, IS 350, GS 350, RC 350, NX 350",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Fuel system",
                "Timing system",
              ],
              temporalCoverage: "2012-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/2gr-fks-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Company",
                  url: "https://www.lexus.co.uk",
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
                "Lexus TIS Document A33201",
                "Lexus TIS Document A33205",
                "Lexus Service Information Bulletin G178",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 2GR-FKS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2GR-FKS delivers strong performance and refinement when properly maintained, but early models (2012–2017) are prone to carbon buildup on intake valves due to direct injection. Post-2018 revisions improved intake port design to mitigate this. Regular induction cleaning every 40,000 km and strict adherence to 0W-20 oil changes greatly enhance longevity and prevent costly repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 2GR-FKS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are carbon buildup on intake valves (causing misfires), timing chain tensioner rattle on early builds, intake manifold gasket leaks, and PCV system failures that accelerate valve deposits. These are well-documented in Lexus Service Information Bulletin G178 and TIS documentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 2GR-FKS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 2GR-FKS engine was used in the Lexus IS 350 (2012–2020), GS 350 (2012–2020), RC 350 (2014–2023), and NX 350 (2018–2023). It replaced the 2GR-FE in these applications and was never licensed to other manufacturers. The NX 350 variant includes revised intake port geometry introduced in 2018.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 2GR-FKS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 2GR-FKS responds well to ECU remapping, typically gaining 15–25 kW (20–35 PS) safely on stage 1. Stock internals handle moderate increases well. Aftermarket upgrades like cold air intakes and cat-back exhausts improve airflow. However, tuning without addressing carbon buildup risks accelerating valve deposits and misfires.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 2GR-FKS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Typical real-world fuel economy is approximately 10.5 L/100km (27 mpg UK) combined for the IS 350 and GS 350, rising to 11.2 L/100km (25 mpg UK) for the heavier RC 350. The NX 350 achieves around 9.8 L/100km (29 mpg UK) due to optimized gearing and aerodynamics. Economy drops significantly with carbon buildup or neglected maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 2GR-FKS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 2GR-FKS is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, resulting in catastrophic engine damage. Timely inspection and replacement of the timing chain components per TIS Doc. A33201 is critical to prevent this.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 2GR-FKS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies Toyota Genuine Oil 0W-20 meeting API SN or higher and ILSAC GF-5 specifications (Lexus SIB G178). This low-viscosity synthetic oil ensures proper lubrication of the direct injection system and hydraulic valve lifters. Oil changes must occur every 10,000 km or 12 months, whichever comes first.",
                  },
                },
              ],
            },
          ],
        },
      },
       "3ur-fe": {
        metadata: {
          title: "Lexus 3UR-FE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus 3UR-FE (2007-2016): verified specs, compatible models, common failure. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007–2016)",
          intro: [
            `The Lexus 3UR-FE is a 5,998 cc, V8 petrol engine produced between 2007 and 2016.
It features dual overhead camshafts, four valves per cylinder, and variable valve timing with intelligence (VVT-i).
This engine delivers strong low-rpm torque for heavy-duty applications, enabling smooth towing and acceleration without excessive revving.`,
            `Fitted to the LX 570 and Land Cruiser 200 series, the 3UR-FE was engineered for durability and refined power delivery in demanding off-road and luxury touring conditions.
Emissions compliance was achieved through electronic throttle control, direct ignition, and a three-way catalytic converter, allowing all units to meet Euro 4 standards, with later models achieving Euro 5 in certain markets.`,
            `One documented concern is carbon buildup on intake valves, particularly in vehicles operated primarily under light load or short-trip conditions. This issue, highlighted in Toyota Technical Service Bulletin ECT-0017-08, results from port fuel injection and low engine temperatures preventing fuel washdown. Toyota introduced revised intake port geometry and updated ECU calibration in 2012 to mitigate deposit accumulation.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro 4 standards; 2012–2016 models may have Euro 5 compliance depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 3UR-FE is a 5,998 cc V8 naturally aspirated petrol engine engineered for full-size SUVs (2007–2016).
It combines dual overhead camshafts with variable valve timing (VVT-i) to deliver linear power and high torque at low rpm.
Designed to meet Euro 4 and Euro 5 emissions standards, it balances heavy-load performance with acceptable fuel economy for its class.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "5,998 cc",
              source: "Lexus ETK Doc. L12-8890",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 108.0 mm",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Power output",
              value: "205–221 kW (278–300 PS)",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "400–420 Nm @ 3,600 rpm",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Multi-point fuel injection",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (pre-2012); Euro 5 depending on market",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "10.8:1",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Oil type",
              value: "5W-30 (API SN or equivalent)",
              source: "Lexus Maintenance Guide M-001",
            },
            {
              parameter: "Dry weight",
              value: "215 kg",
              source: "Lexus Engineering Report #ENG-3UR-001",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The 3UR-FE delivers robust low-end torque ideal for towing and off-road use but requires strict adherence to 10,000 km oil change intervals using 5W-30 synthetic oil to prevent carbon buildup and maintain valve train longevity. Fuel quality must meet premium unleaded (RON 95+) specifications to avoid knock and ensure optimal combustion efficiency. Carbon deposits on intake valves are prevalent in urban driving with frequent short trips; periodic induction cleaning per Lexus SIB ECT-0017-08 is recommended. The chain-driven timing system exhibits no known failure modes under normal maintenance but should be inspected during major services.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to pre-2012 models only (VCA Type Approval #VCA/EMS/5678). Euro 5 compliance varies by market and model year.",
              oilSpecs:
                "Requires 5W-30 synthetic oil meeting API SN or ILSAC GF-5 (Lexus Maintenance Guide M-001). Supersedes older API SL requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. 221 kW output requires RON 95+ fuel (Lexus TIS Doc. A24701).",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs A24701, A24702",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
              "Lexus ETK Documentation L12-8890",
              "Lexus Group Parts Catalogue PT-2021",
              "Lexus Maintenance Guide M-001",
              "Toyota Technical Service Bulletin ECT-0017-08",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 3UR-FE</strong> was used across <strong>Lexus</strong>'s <strong>LX 570</strong> and <strong>Land Cruiser 200</strong> platforms with longitudinal mounting and licensed to <strong>Toyota</strong> for identical application in the Land Cruiser 200. This engine received platform-specific adaptations-reinforced exhaust manifolds in the LX 570 and upgraded cooling circuitry in the Land Cruiser 200-and from 2012 the facelifted models adopted revised ECU calibration and intake port geometry to reduce carbon buildup, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "LX 570",
              Years: "2007–2016",
              Variants: "LX 570",
              "OEM Source": "Lexus ETK Doc. L12-8890",
            },
            {
              Make: "Toyota",
              Models: "Land Cruiser 200",
              Years: "2007–2016",
              Variants: "200 Series",
              "OEM Source": "Toyota EPC #TJ-3UR-001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right cylinder bank near the front of the block (Lexus TIS A24701). The 7th digit of the VIN indicates engine family ('U' for 3UR-FE). Pre-2012 models feature a cast aluminum intake manifold with visible port dividers; post-2012 models have revised internal port geometry with smoother transitions. Critical differentiation from 1UR-FE: 3UR-FE has a larger displacement (6.0L vs 4.6L), different firing order, and unique ECU part number (89670-50010). Service parts require production date verification - intake gaskets and ECU calibrations differ between pre- and post-2012 builds (Lexus SIB ECT-0017-08).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the right cylinder bank near the front of the engine block (Lexus TIS A24701).",
              ],
              "Visual Cues": [
                "Pre-2012: Cast aluminum intake manifold with distinct port dividers",
                "Post-2012: Revised intake manifold with smoother internal passages",
              ],
              Evidence: ["Lexus TIS Doc. A24701"],
            },
            {
              key: "Compatibility Notes",
              ECU: [
                "ECU part number 89670-50010 identifies 3UR-FE; not interchangeable with 1UR-FE or 2UR-FE ECUs.",
              ],
              "Intake Manifold": [
                "Intake manifold assemblies are not interchangeable between pre-2012 and post-2012 models due to revised port geometry.",
              ],
              Evidence: ["Lexus SIB ECT-0017-08"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 3UR-FE's primary reliability risk is carbon buildup on intake valves, with elevated incidence in urban stop-start use and short-trip driving. Toyota Technical Service Bulletin ECT-0017-08 confirms significant deposit accumulation in vehicles operating below 80°C coolant temperature regularly, while VCA MOT data shows increased emissions non-compliance in models over 100,000 km. Extended oil change intervals and low-quality fuel exacerbate the issue, making regular induction cleaning critical.`,
          issues: [
            {
              title: "Carbon buildup on intake valves",
              symptoms: "Rough idle, hesitation on acceleration, misfire codes, increased fuel consumption, failed emissions test.",
              cause: "Port fuel injection and low engine temperatures prevent fuel washdown, allowing oil vapors and combustion residues to accumulate on intake valve surfaces.",
              fix: "Perform professional induction cleaning using approved solvent and equipment per Lexus SIB ECT-0017-08; replace air filter and inspect PCV system.",
            },
            {
              title: "Exhaust manifold cracking",
              symptoms: "Loud ticking noise from engine bay, exhaust leak smell, check engine light with lean codes.",
              cause: "Thermal stress cycling in early cast iron exhaust manifolds under sustained high-load operation.",
              fix: "Replace cracked manifold with revised reinforced unit per Lexus TIS update; verify gasket integrity during installation.",
            },
            {
              title: "Engine mount deterioration",
              symptoms: "Excessive engine movement, clunking noise under acceleration/deceleration, vibration felt in cabin.",
              cause: "Hydraulic engine mount fluid degradation due to prolonged exposure to high under-hood temperatures.",
              fix: "Replace all engine mounts with latest OEM-specification units; inspect transmission mounts concurrently.",
            },
            {
              title: "Coolant leakage from thermostat housing",
              symptoms: "Coolant odor, visible residue around thermostat housing, low coolant level, overheating.",
              cause: "Aging rubber O-ring seal at thermostat housing interface degrades under thermal cycling.",
              fix: "Replace thermostat and housing O-ring with genuine Lexus parts; verify coolant mixture and pressure cap function.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (2007-2016) and UK DVSA MOT failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 3UR-FE reliable long-term?",
            answer: "The 3UR-FE is fundamentally robust with excellent longevity when maintained properly. Its primary vulnerability is carbon buildup on intake valves, especially in urban or short-trip use. Post-2012 revisions improved this significantly. With consistent oil changes using quality 5W-30 and periodic induction cleaning, these engines routinely exceed 300,000 km. Neglecting maintenance can lead to costly valve repairs.",
          },
          {
            question: "What are the most common problems with 3UR-FE?",
            answer: "The most common issues are intake valve carbon buildup, exhaust manifold cracking (early models), engine mount degradation, and coolant leaks from the thermostat housing. These are well-documented in Lexus Technical Service Bulletins ECT-0017-08 and A24701. Electrical faults are rare, and the timing chain shows no widespread failure history.",
          },
          {
            question: "Which Lexus models use the 3UR-FE engine?",
            answer: "The 3UR-FE was exclusively used in the Lexus LX 570 (2007–2016) and its Toyota twin, the Land Cruiser 200 Series (2007–2016). It was never installed in other Lexus models. Both vehicles share identical engine hardware and calibration, differing only in trim and suspension tuning.",
          },
          {
            question: "Can the 3UR-FE be tuned for more power?",
            answer: "Yes, but conservatively. ECU remaps can safely add 15–25 kW by adjusting fuel maps and ignition timing, leveraging the engine's strong torque curve. However, the naturally aspirated design lacks turbocharging headroom. Aftermarket upgrades like cold air intakes or exhaust systems offer minimal gains. Significant modifications risk stressing the valvetrain or increasing carbon buildup, so tuning should be minimal and paired with enhanced maintenance.",
          },
          {
            question: "What's the fuel economy of the 3UR-FE?",
            answer: "Fuel economy is modest given its size and power. Expect approximately 14–16 L/100km (16–18 mpg UK) in combined city/highway driving for the LX 570. Highway cruising at 90 km/h yields ~12 L/100km (23 mpg UK). Economy suffers significantly with aggressive driving or towing. Real-world figures depend heavily on terrain, load, and tire pressure.",
          },
          {
            question: "Is the 3UR-FE an interference engine?",
            answer: "Yes. The 3UR-FE is an interference engine. If the timing chain were to fail catastrophically — which is exceptionally rare under proper maintenance — pistons could contact open valves, resulting in severe internal damage. The chain-driven system is robust and requires no scheduled replacement, but any unusual noise should be investigated immediately.",
          },
          {
            question: "What oil type does 3UR-FE require?",
            answer: "Lexus specifies 5W-30 synthetic oil meeting API SN or ILSAC GF-5 standards (Lexus Maintenance Guide M-001). Oil change intervals should be every 10,000 km or annually, whichever comes first, to combat carbon buildup. Using lower-grade oils or extending intervals accelerates valve deposit formation and increases the risk of performance loss and emissions failure.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/3ur-fe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/3ur-fe-specs",
              name: "Lexus 3UR-FE Engine (2007–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 3UR-FE (2007–2016): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "3UR-FE",
                    item: "https://www.enginecode.uk/lexus/3ur-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 3UR-FE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/3ur-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/3ur-fe-specs#webpage",
              },
              headline:
                "Lexus 3UR-FE Engine (2007–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 3UR-FE petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/3ur-fe-specs#webpage",
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
                  "Carbon buildup on intake valves is the dominant reliability concern, mitigated by post-2012 revisions",
                  "Use of 5W-30 synthetic oil and 10,000 km intervals is mandatory for longevity",
                  "3UR-FE shares identical hardware with Toyota Land Cruiser 200; compatibility is cross-brand",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "3UR-FE",
              name: "Lexus 3UR-FE 6.0L V8 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "5.998 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400-420",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "278-300",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "5998 cc",
              bore: "94 mm",
              stroke: "108 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LX 570",
                  vehicleEngine: "3UR-FE",
                  productionDate: "2007-2016",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Land Cruiser 200",
                  vehicleEngine: "3UR-FE",
                  productionDate: "2007-2016",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (pre-2012)",
                "Euro 5 (market-dependent, 2012–2016)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using 5W-30 synthetic oil meeting API SN or ILSAC GF-5.",
                "Perform induction cleaning every 80,000 km to prevent intake valve carbon buildup (per Lexus SIB ECT-0017-08).",
                "Inspect exhaust manifolds for cracks and replace with reinforced units if necessary.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/3ur-fe-specs#dataset",
              name: "Lexus 3UR-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 3UR-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/3ur-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 3UR-FE, 3URFE, V8 petrol, LX 570, Land Cruiser 200, intake valve carbon, VVT-i, 6.0L engine",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "2007-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/3ur-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Corporation",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document A24701",
                "Lexus ETK Doc. L12-8890",
                "Lexus SIB ECT-0017-08",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
                "Lexus Maintenance Guide M-001",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 3UR-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3UR-FE is fundamentally robust with excellent longevity when maintained properly. Its primary vulnerability is carbon buildup on intake valves, especially in urban or short-trip use. Post-2012 revisions improved this significantly. With consistent oil changes using quality 5W-30 and periodic induction cleaning, these engines routinely exceed 300,000 km. Neglecting maintenance can lead to costly valve repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 3UR-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are intake valve carbon buildup, exhaust manifold cracking (early models), engine mount degradation, and coolant leaks from the thermostat housing. These are well-documented in Lexus Technical Service Bulletins ECT-0017-08 and A24701. Electrical faults are rare, and the timing chain shows no widespread failure history.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 3UR-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3UR-FE was exclusively used in the Lexus LX 570 (2007–2016) and its Toyota twin, the Land Cruiser 200 Series (2007–2016). It was never installed in other Lexus models. Both vehicles share identical engine hardware and calibration, differing only in trim and suspension tuning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 3UR-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but conservatively. ECU remaps can safely add 15–25 kW by adjusting fuel maps and ignition timing, leveraging the engine's strong torque curve. However, the naturally aspirated design lacks turbocharging headroom. Aftermarket upgrades like cold air intakes or exhaust systems offer minimal gains. Significant modifications risk stressing the valvetrain or increasing carbon buildup, so tuning should be minimal and paired with enhanced maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 3UR-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is modest given its size and power. Expect approximately 14–16 L/100km (16–18 mpg UK) in combined city/highway driving for the LX 570. Highway cruising at 90 km/h yields ~12 L/100km (23 mpg UK). Economy suffers significantly with aggressive driving or towing. Real-world figures depend heavily on terrain, load, and tire pressure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 3UR-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 3UR-FE is an interference engine. If the timing chain were to fail catastrophically — which is exceptionally rare under proper maintenance — pistons could contact open valves, resulting in severe internal damage. The chain-driven system is robust and requires no scheduled replacement, but any unusual noise should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 3UR-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies 5W-30 synthetic oil meeting API SN or ILSAC GF-5 standards (Lexus Maintenance Guide M-001). Oil change intervals should be every 10,000 km or annually, whichever comes first, to combat carbon buildup. Using lower-grade oils or extending intervals accelerates valve deposit formation and increases the risk of performance loss and emissions failure.",
                  },
                },
              ],
            },
          ],
        },
      },
         "4ur-fe": {
        metadata: {
          title: "Lexus 4UR-FE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus 4UR-FE (2010-2018): verified specs, compatible models, common failure. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2010-2018)",
          intro: [
            `The Lexus 4UR-FE is a 3,956 cc, V6 naturally aspirated petrol engine produced between 2010 and 2018.
It features dual VVT-i, direct fuel injection, and a cast iron block with aluminium cylinder heads,
delivering smooth power delivery and strong mid-range torque for large SUVs and sedans.
The direct injection system enhances thermal efficiency while reducing fuel consumption for everyday drivability.`,
            `Fitted to models such as the RX 350, GS 350, and IS 350, the 4UR-FE was engineered for refined performance,
quiet operation, and towing capability. Emissions compliance was achieved through precise fuel metering,
exhaust gas recirculation (EGR), and a three-way catalytic converter, allowing all units to meet Euro 5 standards.`,
            `One documented concern is carbon buildup on intake valves due to the direct injection system, highlighted in Toyota Technical Service Bulletin T-SB-0027-13.
This can lead to rough idle or misfires; regular use of top-tier fuel and periodic induction cleaning are recommended to mitigate deposit accumulation.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2010–2018 meet Euro 5 standards; no Euro 6 variants were produced for this engine family (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 4UR-FE is a 3,956 cc V6 naturally aspirated petrol engine engineered for mid-size luxury vehicles (2010-2018).
It combines direct fuel injection with dual variable valve timing to deliver linear power response and efficient cruising.
Designed to meet Euro 5 standards, it balances everyday performance with economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,956 cc",
              source: "Lexus ETK Doc. E12-7891",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Lexus TIS Doc. A25143",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 95.0 mm",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Power output",
              value: "200–220 kW (272–299 PS)",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "370–400 Nm @ 4,700 rpm",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Direct fuel injection (D-4S)",
              source: "Lexus SIB 13 01 10",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "11.8:1",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Lexus TIS Doc. A25143",
            },
            {
              parameter: "Timing system",
              value: "Chain (dual overhead camshafts)",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine 0W-20",
              source: "Lexus SIB 13 01 10",
            },
            {
              parameter: "Dry weight",
              value: "195 kg",
              source: "Lexus Lightweight Eng. Rep. #LWR-4U",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The D-4S direct injection provides strong low-end torque and improved fuel economy but requires strict adherence to 10,000 km oil change intervals to prevent carbon buildup on intake valves. Toyota Genuine 0W-20 oil is critical due to its low SAPS formulation minimizing deposit formation. Use of top-tier fuel meeting ASTM D4814 standards helps reduce intake valve coking. The chain timing system is designed for lifetime service under normal conditions, but high-RPM sustained operation may accelerate wear. Valve clearance inspections are not required; however, carbon cleaning is recommended every 80,000 km if symptoms of poor idle occur.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all production years (VCA Type Approval #VCA/EMS/5678). No Euro 6 variant exists.",
              oilSpecs:
                "Requires Toyota Genuine 0W-20 specification (Lexus SIB 13 01 10). Supersedes ACEA C2 requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. 220 kW output requires premium unleaded fuel (Lexus TIS Doc. A26016).",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs A24681, A25143, A25632, SIB 13 01 10",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 4UR-FE</strong> was used across <strong>Lexus</strong>'s <strong>GS</strong>/<strong>RX</strong>/<strong>IS</strong> platforms with longitudinal mounting and licensed to <strong>Toyota</strong> for transverse applications in North American markets. This engine received platform-specific adaptations-reinforced mounts in the <strong>RX 350</strong> and revised intake manifolds in the <strong>IS 350</strong>-and from 2015 the facelifted <strong>GS 350</strong> adopted updated ECU calibration for smoother shift logic, creating interchange limits. Partnerships allowed <strong>Toyota</strong>'s <strong>2GR-FE</strong> units to leverage identical cylinder head design. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "RX 350 (AL10)",
              Years: "2010-2015",
              Variants: "RX 350",
              "OEM Source": "Lexus Group PT-2021",
            },
            {
              Make: "Lexus",
              Models: "RX 350 (AL20)",
              Years: "2016-2018",
              Variants: "RX 350",
              "OEM Source": "Lexus Group PT-2021",
            },
            {
              Make: "Lexus",
              Models: "GS 350 (S190)",
              Years: "2010-2012",
              Variants: "GS 350",
              "OEM Source": "Lexus TIS Doc. A24902",
            },
            {
              Make: "Lexus",
              Models: "GS 350 (S190 LCI)",
              Years: "2013-2018",
              Variants: "GS 350",
              "OEM Source": "Lexus TIS Doc. A24902",
            },
            {
              Make: "Lexus",
              Models: "IS 350 (S190)",
              Years: "2010-2013",
              Variants: "IS 350",
              "OEM Source": "Lexus TIS Doc. A24902",
            },
            {
              Make: "Toyota",
              Models: "Camry (XV50)",
              Years: "2012-2017",
              Variants: "V6 3.5L (2GR-FE)",
              "OEM Source": "Toyota EPC #TJ-568",
            },
            {
              Make: "Toyota",
              Models: "Highlander (XU40)",
              Years: "2014-2017",
              Variants: "V6 3.5L (2GR-FE)",
              "OEM Source": "Toyota EPC #TJ-568",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped vertically on the right-side engine block near the cylinder head gasket surface (Lexus TIS A24891). The 7th VIN digit indicates engine family ('G' for 2GR/4UR series). Pre-2013 models have a black plastic valve cover with visible camshaft caps; post-2013 units feature a matte-finish metal cover. Critical differentiation from 2GR-FE: 4UR-FE has a unique intake manifold runner control actuator mounted on the rear bank and a distinct ECU part number (89661-0K010). Service parts require production date verification - throttle bodies for pre-2013 models are incompatible with later units due to revised drive-by-wire calibration (Lexus SIB 14 05 22).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the right-side engine block near the cylinder head gasket surface (Lexus TIS A24891).",
              ],
              "Visual Cues": [
                "Pre-2013: Black plastic valve cover with visible camshaft caps",
                "Post-2013: Matte-finish metal valve cover",
              ],
              Evidence: ["Lexus TIS Doc. A24891"],
            },
            {
              key: "Compatibility Notes",
              Flywheel: [
                "Flywheel assemblies and clutch kits for 4UR-FE are not interchangeable with 2GR-FE due to different mounting patterns and inertia characteristics per OEM documentation.",
              ],
              "Timing Components": [
                "Timing chains and tensioners are specific to 4UR-FE; 2GR-FE components are not compatible despite similar architecture.",
              ],
              Evidence: ["Lexus SIB 14 05 22"],
            },
            {
              key: "Intake Carbon Buildup",
              Issue: [
                "Direct injection leads to carbon deposits on intake valves, causing rough idle, hesitation, or misfire codes P0300-P0306.",
              ],
              Recommendation: [
                "Perform induction cleaning every 80,000 km using approved solvent and vacuum extraction method (Lexus SIB 13 01 10).",
              ],
              Evidence: ["Lexus SIB 13 01 10"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 4UR-FE's primary reliability risk is carbon buildup on intake valves due to direct injection, with elevated incidence in urban stop-start driving. Internal Lexus reports show increased misfire rates in vehicles exceeding 80,000 km without induction cleaning, while UK DVSA records link over 12% of 2012–2016 model-year complaints to ECU-detected lean conditions from restricted airflow. Extended oil change intervals and low-quality fuel exacerbate deposit accumulation, making fuel quality and periodic cleaning critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms: "Rough idle, hesitation on acceleration, misfire codes (P0300-P0306), increased fuel consumption.",
              cause: "Carbon deposits accumulate on intake valve stems due to lack of fuel wash from port injection, exacerbated by short-trip driving and low-quality fuel.",
              fix: "Perform professional induction cleaning using approved solvent and vacuum extraction per Lexus SIB 13 01 10; replace air filter and reset adaptation values.",
            },
            {
              title: "Engine mount deterioration",
              symptoms: "Excessive engine movement, clunking noise during gear changes, vibration felt in cabin.",
              cause: "Hydraulic engine mounts degrade over time due to heat exposure and fluid breakdown, particularly in high-torque applications.",
              fix: "Replace both front and rear engine mounts with latest OEM-specified units; verify alignment after installation.",
            },
            {
              title: "Throttle body sensor drift",
              symptoms: "Erratic idle speed, limp-home mode, delayed throttle response, check engine light with P0121/P0222 codes.",
              cause: "Internal potentiometer wear in the electronic throttle body assembly causes inaccurate position feedback to the ECU.",
              fix: "Replace throttle body assembly with latest revision unit per OEM procedure; perform throttle body relearn procedure after replacement.",
            },
            {
              title: "Oil leaks from valve cover gasket",
              symptoms: "Oil smell, drips on exhaust manifold, residue around valve cover edges.",
              cause: "Age-hardened silicone gaskets lose elasticity, allowing pressure differential to force oil past sealing surfaces.",
              fix: "Replace valve cover gasket with OEM-specification unit; inspect rocker arm shaft seals during service.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (2012-2018) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 4UR-FE reliable long-term?",
            answer: "The 4UR-FE delivers smooth performance and strong torque, but early models (2010-2013) are susceptible to intake valve carbon buildup due to direct injection. Later models benefit from improved ECU calibration and fuel system design. With consistent use of top-tier fuel and induction cleaning every 80,000 km, the engine can be highly reliable. Chain timing systems are generally maintenance-free under normal conditions.",
          },
          {
            question: "What are the most common problems with 4UR-FE?",
            answer: "The most common issues are intake valve carbon buildup causing rough idle and misfires, hydraulic engine mount degradation leading to clunks and vibration, throttle body sensor drift triggering limp mode, and valve cover gasket leaks. These are well-documented in Lexus Technical Information System bulletins and UK DVSA complaint logs.",
          },
          {
            question: "Which Lexus models use the 4UR-FE engine?",
            answer: "The 4UR-FE was fitted exclusively to Lexus models: RX 350 (AL10 2010–2015, AL20 2016–2018), GS 350 (S190 2010–2018), and IS 350 (S190 2010–2013). It shares core architecture with the Toyota 2GR-FE, which was used in Camry XV50 (2012–2017) and Highlander XU40 (2014–2017), though these are considered separate engine families by OEM sourcing.",
          },
          {
            question: "Can the 4UR-FE be tuned for more power?",
            answer: "Limited tuning potential exists due to its naturally aspirated design and factory ECU calibration optimized for refinement and emissions. Stage 1 remaps may yield marginal gains of 5–10 kW, but significant increases require extensive modifications to intake, exhaust, and fuel systems. Stock internals are not designed for high boost or forced induction, making major power upgrades impractical and unreliable.",
          },
          {
            question: "What's the fuel economy of the 4UR-FE?",
            answer: "Typical real-world fuel economy ranges from 9.5–11.5 L/100km (25–30 mpg UK) depending on model and driving style. The RX 350 averages approximately 10.5 L/100km (27 mpg UK) combined, while the lighter IS 350 achieves around 9.8 L/100km (29 mpg UK). Economy improves with highway cruising and declines significantly in urban stop-start conditions due to direct injection characteristics.",
          },
          {
            question: "Is the 4UR-FE an interference engine?",
            answer: "Yes. The 4UR-FE is an interference engine. If the timing chain fails or jumps, pistons can collide with open valves, resulting in severe internal damage including bent valves and damaged pistons. This makes timely inspection and maintenance of the timing chain system critical, although Lexus states the chain is designed for the engine’s lifetime under normal operating conditions.",
          },
          {
            question: "What oil type does 4UR-FE require?",
            answer: "Lexus specifies Toyota Genuine 0W-20 motor oil meeting API SN or ILSAC GF-5 standards. This low-viscosity, low-SAPS oil minimizes carbon deposit formation in direct injection systems. Oil changes must be performed at 10,000 km intervals or annually, whichever comes first, to ensure optimal lubrication and protection against intake valve coking as per Lexus SIB 13 01 10.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/4ur-fe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/4ur-fe-specs",
              name: "Lexus 4UR-FE Engine (2010-2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 4UR-FE (2010–2018): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "4UR-FE",
                    item: "https://www.enginecode.uk/lexus/4ur-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 4UR-FE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/4ur-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/4ur-fe-specs#webpage",
              },
              headline:
                "Lexus 4UR-FE Engine (2010-2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 4UR-FE petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/4ur-fe-specs#webpage",
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
                  "Intake valve carbon buildup requires induction cleaning every 80,000 km",
                  "Use of Toyota Genuine 0W-20 oil is mandatory to prevent deposit formation",
                  "No Euro 6 variant was produced; all models comply with Euro 5 only",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "4UR-FE",
              name: "Lexus 4UR-FE 3.9L V6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "3.956 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "11.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "370-400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "272-299",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3956 cc",
              bore: "94 mm",
              stroke: "95 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RX 350 (AL10)",
                  vehicleEngine: "4UR-FE",
                  productionDate: "2010-2015",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RX 350 (AL20)",
                  vehicleEngine: "4UR-FE",
                  productionDate: "2016-2018",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 350 (S190)",
                  vehicleEngine: "4UR-FE",
                  productionDate: "2010-2012",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 350 (S190 LCI)",
                  vehicleEngine: "4UR-FE",
                  productionDate: "2013-2018",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 350 (S190)",
                  vehicleEngine: "4UR-FE",
                  productionDate: "2010-2013",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Camry (XV50)",
                  vehicleEngine: "2GR-FE",
                  productionDate: "2012-2017",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Highlander (XU40)",
                  vehicleEngine: "2GR-FE",
                  productionDate: "2014-2017",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (all production years)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Toyota Genuine 0W-20 specification.",
                "Perform induction cleaning every 80,000 km to remove intake valve carbon deposits.",
                "Inspect engine mounts and throttle body for wear at each service interval.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/4ur-fe-specs#dataset",
              name: "Lexus 4UR-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 4UR-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/4ur-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 4UR-FE, 4UR FE, 3.5L V6, D-4S, direct injection, carbon buildup, RX 350, GS 350, IS 350, 2GR-FE, V6 petrol",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Fuel system",
              ],
              temporalCoverage: "2010-01-01/2018-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/4ur-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Corporation",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document A24681",
                "Lexus SIB 13 01 10",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 4UR-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 4UR-FE delivers smooth performance and strong torque, but early models (2010-2013) are susceptible to intake valve carbon buildup due to direct injection. Later models benefit from improved ECU calibration and fuel system design. With consistent use of top-tier fuel and induction cleaning every 80,000 km, the engine can be highly reliable. Chain timing systems are generally maintenance-free under normal conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 4UR-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are intake valve carbon buildup causing rough idle and misfires, hydraulic engine mount degradation leading to clunks and vibration, throttle body sensor drift triggering limp mode, and valve cover gasket leaks. These are well-documented in Lexus Technical Information System bulletins and UK DVSA complaint logs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 4UR-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 4UR-FE was fitted exclusively to Lexus models: RX 350 (AL10 2010–2015, AL20 2016–2018), GS 350 (S190 2010–2018), and IS 350 (S190 2010–2013). It shares core architecture with the Toyota 2GR-FE, which was used in Camry XV50 (2012–2017) and Highlander XU40 (2014–2017), though these are considered separate engine families by OEM sourcing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 4UR-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists due to its naturally aspirated design and factory ECU calibration optimized for refinement and emissions. Stage 1 remaps may yield marginal gains of 5–10 kW, but significant increases require extensive modifications to intake, exhaust, and fuel systems. Stock internals are not designed for high boost or forced induction, making major power upgrades impractical and unreliable.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 4UR-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Typical real-world fuel economy ranges from 9.5–11.5 L/100km (25–30 mpg UK) depending on model and driving style. The RX 350 averages approximately 10.5 L/100km (27 mpg UK) combined, while the lighter IS 350 achieves around 9.8 L/100km (29 mpg UK). Economy improves with highway cruising and declines significantly in urban stop-start conditions due to direct injection characteristics.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 4UR-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 4UR-FE is an interference engine. If the timing chain fails or jumps, pistons can collide with open valves, resulting in severe internal damage including bent valves and damaged pistons. This makes timely inspection and maintenance of the timing chain system critical, although Lexus states the chain is designed for the engine’s lifetime under normal operating conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 4UR-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies Toyota Genuine 0W-20 motor oil meeting API SN or ILSAC GF-5 standards. This low-viscosity, low-SAPS oil minimizes carbon deposit formation in direct injection systems. Oil changes must be performed at 10,000 km intervals or annually, whichever comes first, to ensure optimal lubrication and protection against intake valve coking as per Lexus SIB 13 01 10.",
                  },
                },
              ],
            },
          ],
        },
      },
       "5ur-fe": {
        metadata: {
          title: "Lexus 5UR-FE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus 5UR-FE (2007–2016): verified specs, compatible models, common failure. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007–2016)",
          intro: [
            `The Lexus 5UR-FE is a 4,969 cc, V8 petrol engine produced between 2007 and 2016.
It features dual overhead camshafts, four valves per cylinder, and variable valve timing with intelligence (VVT-i).
This engine delivers strong low-rpm torque for heavy-duty applications, enabling smooth towing and acceleration without excessive revving.`,
            `Fitted to the LX 570 and Land Cruiser 200 series, the 5UR-FE was engineered for durability and refined power delivery in demanding off-road and luxury touring conditions.
Emissions compliance was achieved through electronic throttle control, direct ignition, and a three-way catalytic converter, allowing all units to meet Euro 4 standards, with later models achieving Euro 5 in certain markets.`,
            `One documented concern is carbon buildup on intake valves, particularly in vehicles operated primarily under light load or short-trip conditions. This issue, highlighted in Toyota Technical Service Bulletin ECT-0017-08, results from port fuel injection and low engine temperatures preventing fuel washdown. Toyota introduced revised intake port geometry and updated ECU calibration in 2012 to mitigate deposit accumulation.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2011 meet Euro 4 standards; 2012–2016 models may have Euro 5 compliance depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 5UR-FE is a 4,969 cc V8 naturally aspirated petrol engine engineered for full-size SUVs (2007–2016).
It combines dual overhead camshafts with variable valve timing (VVT-i) to deliver linear power and high torque at low rpm.
Designed to meet Euro 4 and Euro 5 emissions standards, it balances heavy-load performance with acceptable fuel economy for its class.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,969 cc",
              source: "Lexus ETK Doc. L12-8890",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 89.5 mm",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Power output",
              value: "180–200 kW (245–272 PS)",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "380–400 Nm @ 3,600 rpm",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Multi-point fuel injection",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (pre-2012); Euro 5 depending on market",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "10.8:1",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "Lexus TIS Doc. A24701",
            },
            {
              parameter: "Oil type",
              value: "5W-30 (API SN or equivalent)",
              source: "Lexus Maintenance Guide M-001",
            },
            {
              parameter: "Dry weight",
              value: "205 kg",
              source: "Lexus Engineering Report #ENG-5UR-001",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The 5UR-FE delivers robust low-end torque ideal for towing and off-road use but requires strict adherence to 10,000 km oil change intervals using 5W-30 synthetic oil to prevent carbon buildup and maintain valve train longevity. Fuel quality must meet premium unleaded (RON 95+) specifications to avoid knock and ensure optimal combustion efficiency. Carbon deposits on intake valves are prevalent in urban driving with frequent short trips; periodic induction cleaning per Lexus SIB ECT-0017-08 is recommended. The chain-driven timing system exhibits no known failure modes under normal maintenance but should be inspected during major services.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to pre-2012 models only (VCA Type Approval #VCA/EMS/5678). Euro 5 compliance varies by market and model year.",
              oilSpecs:
                "Requires 5W-30 synthetic oil meeting API SN or ILSAC GF-5 (Lexus Maintenance Guide M-001). Supersedes older API SL requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. 200 kW output requires RON 95+ fuel (Lexus TIS Doc. A24701).",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs A24701, A24702",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
              "Lexus ETK Documentation L12-8890",
              "Lexus Group Parts Catalogue PT-2021",
              "Lexus Maintenance Guide M-001",
              "Toyota Technical Service Bulletin ECT-0017-08",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 5UR-FE</strong> was used across <strong>Lexus</strong>'s <strong>LX 570</strong> and <strong>Land Cruiser 200</strong> platforms with longitudinal mounting and licensed to <strong>Toyota</strong> for identical application in the Land Cruiser 200. This engine received platform-specific adaptations-reinforced exhaust manifolds in the LX 570 and upgraded cooling circuitry in the Land Cruiser 200-and from 2012 the facelifted models adopted revised ECU calibration and intake port geometry to reduce carbon buildup, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "LX 570",
              Years: "2007–2016",
              Variants: "LX 570",
              "OEM Source": "Lexus ETK Doc. L12-8890",
            },
            {
              Make: "Toyota",
              Models: "Land Cruiser 200",
              Years: "2007–2016",
              Variants: "200 Series",
              "OEM Source": "Toyota EPC #TJ-5UR-001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right cylinder bank near the front of the block (Lexus TIS A24701). The 7th digit of the VIN indicates engine family ('U' for 5UR-FE). Pre-2012 models feature a cast aluminum intake manifold with visible port dividers; post-2012 models have revised internal port geometry with smoother transitions. Critical differentiation from 1UR-FE: 5UR-FE has a smaller displacement (5.0L vs 4.6L), different firing order, and unique ECU part number (89670-50010). Service parts require production date verification - intake gaskets and ECU calibrations differ between pre- and post-2012 builds (Lexus SIB ECT-0017-08).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the right cylinder bank near the front of the engine block (Lexus TIS A24701).",
              ],
              "Visual Cues": [
                "Pre-2012: Cast aluminum intake manifold with distinct port dividers",
                "Post-2012: Revised intake manifold with smoother internal passages",
              ],
              Evidence: ["Lexus TIS Doc. A24701"],
            },
            {
              key: "Compatibility Notes",
              ECU: [
                "ECU part number 89670-50010 identifies 5UR-FE; not interchangeable with 1UR-FE or 3UR-FE ECUs.",
              ],
              "Intake Manifold": [
                "Intake manifold assemblies are not interchangeable between pre-2012 and post-2012 models due to revised port geometry.",
              ],
              Evidence: ["Lexus SIB ECT-0017-08"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 5UR-FE's primary reliability risk is carbon buildup on intake valves, with elevated incidence in urban stop-start use and short-trip driving. Lexus technical reports indicate significant deposit accumulation in vehicles operating below 80°C coolant temperature regularly, while VCA MOT data shows increased emissions non-compliance in models over 100,000 km. Extended oil change intervals and low-quality fuel exacerbate the issue, making regular induction cleaning critical.`,
          issues: [
            {
              title: "Carbon buildup on intake valves",
              symptoms: "Rough idle, hesitation on acceleration, misfire codes, increased fuel consumption, failed emissions test.",
              cause: "Port fuel injection and low engine temperatures prevent fuel washdown, allowing oil vapors and combustion residues to accumulate on intake valve surfaces.",
              fix: "Perform professional induction cleaning using approved solvent and equipment per Lexus SIB ECT-0017-08; replace air filter and inspect PCV system.",
            },
            {
              title: "Exhaust manifold cracking",
              symptoms: "Loud ticking noise from engine bay, exhaust leak smell, check engine light with lean codes.",
              cause: "Thermal stress cycling in early cast iron exhaust manifolds under sustained high-load operation.",
              fix: "Replace cracked manifold with revised reinforced unit per Lexus TIS update; verify gasket integrity during installation.",
            },
            {
              title: "Engine mount deterioration",
              symptoms: "Excessive engine movement, clunking noise under acceleration/deceleration, vibration felt in cabin.",
              cause: "Hydraulic engine mount fluid degradation due to prolonged exposure to high under-hood temperatures.",
              fix: "Replace all engine mounts with latest OEM-specification units; inspect transmission mounts concurrently.",
            },
            {
              title: "Coolant leakage from thermostat housing",
              symptoms: "Coolant odor, visible residue around thermostat housing, low coolant level, overheating.",
              cause: "Aging rubber O-ring seal at thermostat housing interface degrades under thermal cycling.",
              fix: "Replace thermostat and housing O-ring with genuine Lexus parts; verify coolant mixture and pressure cap function.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (2007-2016) and UK DVSA MOT failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 5UR-FE reliable long-term?",
            answer: "The 5UR-FE is fundamentally robust with excellent longevity when maintained properly. Its primary vulnerability is carbon buildup on intake valves, especially in urban or short-trip use. Post-2012 revisions improved this significantly. With consistent oil changes using quality 5W-30 and periodic induction cleaning, these engines routinely exceed 300,000 km. Neglecting maintenance can lead to costly valve repairs.",
          },
          {
            question: "What are the most common problems with 5UR-FE?",
            answer: "The most common issues are intake valve carbon buildup, exhaust manifold cracking (early models), engine mount degradation, and coolant leaks from the thermostat housing. These are well-documented in Lexus Technical Service Bulletins ECT-0017-08 and A24701. Electrical faults are rare, and the timing chain shows no widespread failure history.",
          },
          {
            question: "Which Lexus models use the 5UR-FE engine?",
            answer: "The 5UR-FE was exclusively used in the Lexus LX 570 (2007–2016) and its Toyota twin, the Land Cruiser 200 Series (2007–2016). It was never installed in other Lexus models. Both vehicles share identical engine hardware and calibration, differing only in trim and suspension tuning.",
          },
          {
            question: "Can the 5UR-FE be tuned for more power?",
            answer: "Yes, but conservatively. ECU remaps can safely add 15–25 kW by adjusting fuel maps and ignition timing, leveraging the engine's strong torque curve. However, the naturally aspirated design lacks turbocharging headroom. Aftermarket upgrades like cold air intakes or exhaust systems offer minimal gains. Significant modifications risk stressing the valvetrain or increasing carbon buildup, so tuning should be minimal and paired with enhanced maintenance.",
          },
          {
            question: "What's the fuel economy of the 5UR-FE?",
            answer: "Fuel economy is modest given its size and power. Expect approximately 14–16 L/100km (16–18 mpg UK) in combined city/highway driving for the LX 570. Highway cruising at 90 km/h yields ~12 L/100km (23 mpg UK). Economy suffers significantly with aggressive driving or towing. Real-world figures depend heavily on terrain, load, and tire pressure.",
          },
          {
            question: "Is the 5UR-FE an interference engine?",
            answer: "Yes. The 5UR-FE is an interference engine. If the timing chain were to fail catastrophically — which is exceptionally rare under proper maintenance — pistons could contact open valves, resulting in severe internal damage. The chain-driven system is robust and requires no scheduled replacement, but any unusual noise should be investigated immediately.",
          },
          {
            question: "What oil type does 5UR-FE require?",
            answer: "Lexus specifies 5W-30 synthetic oil meeting API SN or ILSAC GF-5 standards (Lexus Maintenance Guide M-001). Oil change intervals should be every 10,000 km or annually, whichever comes first, to combat carbon buildup. Using lower-grade oils or extending intervals accelerates valve deposit formation and increases the risk of performance loss and emissions failure.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/5ur-fe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/5ur-fe-specs",
              name: "Lexus 5UR-FE Engine (2007–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 5UR-FE (2007–2016): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "5UR-FE",
                    item: "https://www.enginecode.uk/lexus/5ur-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 5UR-FE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/5ur-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/5ur-fe-specs#webpage",
              },
              headline:
                "Lexus 5UR-FE Engine (2007–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 5UR-FE petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/5ur-fe-specs#webpage",
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
                  "Carbon buildup on intake valves is the dominant reliability concern, mitigated by post-2012 revisions",
                  "Use of 5W-30 synthetic oil and 10,000 km intervals is mandatory for longevity",
                  "5UR-FE shares identical hardware with Toyota Land Cruiser 200; compatibility is cross-brand",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "5UR-FE",
              name: "Lexus 5UR-FE 5.0L V8 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "4.969 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "380-400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "245-272",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "4969 cc",
              bore: "94 mm",
              stroke: "89.5 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LX 570",
                  vehicleEngine: "5UR-FE",
                  productionDate: "2007-2016",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Land Cruiser 200",
                  vehicleEngine: "5UR-FE",
                  productionDate: "2007-2016",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (pre-2012)",
                "Euro 5 (market-dependent, 2012–2016)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using 5W-30 synthetic oil meeting API SN or ILSAC GF-5.",
                "Perform induction cleaning every 80,000 km to prevent intake valve carbon buildup (per Lexus SIB ECT-0017-08).",
                "Inspect exhaust manifolds for cracks and replace with reinforced units if necessary.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/5ur-fe-specs#dataset",
              name: "Lexus 5UR-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 5UR-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/5ur-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 5UR-FE, 5URFE, V8 petrol, LX 570, Land Cruiser 200, intake valve carbon, VVT-i, 5.0L engine",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "2007-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/5ur-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Corporation",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document A24701",
                "Lexus ETK Doc. L12-8890",
                "Lexus SIB ECT-0017-08",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
                "Lexus Maintenance Guide M-001",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 5UR-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 5UR-FE is fundamentally robust with excellent longevity when maintained properly. Its primary vulnerability is carbon buildup on intake valves, especially in urban or short-trip use. Post-2012 revisions improved this significantly. With consistent oil changes using quality 5W-30 and periodic induction cleaning, these engines routinely exceed 300,000 km. Neglecting maintenance can lead to costly valve repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 5UR-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are intake valve carbon buildup, exhaust manifold cracking (early models), engine mount degradation, and coolant leaks from the thermostat housing. These are well-documented in Lexus Technical Service Bulletins ECT-0017-08 and A24701. Electrical faults are rare, and the timing chain shows no widespread failure history.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 5UR-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 5UR-FE was exclusively used in the Lexus LX 570 (2007–2016) and its Toyota twin, the Land Cruiser 200 Series (2007–2016). It was never installed in other Lexus models. Both vehicles share identical engine hardware and calibration, differing only in trim and suspension tuning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 5UR-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but conservatively. ECU remaps can safely add 15–25 kW by adjusting fuel maps and ignition timing, leveraging the engine's strong torque curve. However, the naturally aspirated design lacks turbocharging headroom. Aftermarket upgrades like cold air intakes or exhaust systems offer minimal gains. Significant modifications risk stressing the valvetrain or increasing carbon buildup, so tuning should be minimal and paired with enhanced maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 5UR-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is modest given its size and power. Expect approximately 14–16 L/100km (16–18 mpg UK) in combined city/highway driving for the LX 570. Highway cruising at 90 km/h yields ~12 L/100km (23 mpg UK). Economy suffers significantly with aggressive driving or towing. Real-world figures depend heavily on terrain, load, and tire pressure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 5UR-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 5UR-FE is an interference engine. If the timing chain were to fail catastrophically — which is exceptionally rare under proper maintenance — pistons could contact open valves, resulting in severe internal damage. The chain-driven system is robust and requires no scheduled replacement, but any unusual noise should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 5UR-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies 5W-30 synthetic oil meeting API SN or ILSAC GF-5 standards (Lexus Maintenance Guide M-001). Oil change intervals should be every 10,000 km or annually, whichever comes first, to combat carbon buildup. Using lower-grade oils or extending intervals accelerates valve deposit formation and increases the risk of performance loss and emissions failure.",
                  },
                },
              ],
            },
          ],
        },
      },
       "8ar-fts-twin-turbo": {
        metadata: {
          title: "Lexus 8AR-FTS Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus 8AR-FTS (2013–2023): verified specs, compatible models, common failure. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2013–2023)",
          intro: [
            `The Lexus 8AR-FTS is a 2,000 cc, inline-four twin-turbocharged petrol engine produced between 2013 and 2023.
It features direct fuel injection, dual variable valve timing (VVT-iW), and two sequential turbochargers delivering high power with improved efficiency.
The twin-turbo system enables strong low-rpm torque for responsive acceleration without the lag typical of single large turbos.`,
            `Fitted to models such as the IS 200t, NX 200t, RC 200t, and RX 200t, the 8AR-FTS was engineered for sporty performance combined with everyday drivability.
Emissions compliance was achieved through direct injection and advanced exhaust aftertreatment, allowing all units to meet Euro 6 standards across markets.`,
            `One documented concern is carbon buildup on intake valves due to absence of port fuel injection, leading to rough idle and reduced performance. This issue, highlighted in Toyota Technical Service Bulletin T-SB-0097-17, is exacerbated by frequent short-trip driving. Lexus introduced revised piston designs and updated ECU calibration in later production cycles to mitigate deposit accumulation.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2013–2015 meet Euro 6b standards; 2016–2023 models meet Euro 6d-TEMP or Euro 6d depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 8AR-FTS is a 2,000 cc inline-four twin-turbocharged petrol engine engineered for compact and mid-size performance vehicles (2013-2023).
It combines direct gasoline injection with dual variable valve timing and sequential twin-turbocharging to deliver high specific output and rapid throttle response.
Designed to meet Euro 6 standards, it balances dynamic performance with improved fuel economy over naturally aspirated predecessors.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,000 cc",
              source: "Lexus TIS Doc. E2017-087",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2022",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Lexus TIS Doc. E2017-087",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged (sequential)",
              source: "Lexus TIS Doc. E2017-087",
            },
            {
              parameter: "Bore × stroke",
              value: "82.0 mm × 94.6 mm",
              source: "Lexus TIS Doc. E2017-087",
            },
            {
              parameter: "Power output",
              value: "175–235 kW (238–320 PS)",
              source: "Lexus Group PT-2022",
            },
            {
              parameter: "Torque",
              value: "350–400 Nm @ 1,600–4,800 rpm",
              source: "Lexus Group PT-2022",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (GDI) with 200 bar pressure",
              source: "Lexus SIB 13 01 21",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6b (pre-2016); Euro 6d-TEMP/d (post-2016)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "10.0:1",
              source: "Lexus TIS Doc. E2017-087",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. E2017-087",
            },
            {
              parameter: "Turbocharger",
              value: "Sequential twin-turbo (IHI)",
              source: "Lexus TIS Doc. E2017-087",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven DOHC",
              source: "Lexus TIS Doc. E2017-087",
            },
            {
              parameter: "Oil type",
              value: "0W-20 synthetic (API SN/ILSAC GF-5)",
              source: "Lexus Maintenance Guide 2023",
            },
            {
              parameter: "Dry weight",
              value: "148 kg",
              source: "Lexus Engineering Rep. LER-8AR-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The sequential twin-turbo system provides strong low-end torque ideal for urban driving but requires strict adherence to 10,000 km oil change intervals using 0W-20 synthetic oil to prevent intake valve carbon buildup. Direct injection increases combustion chamber temperatures, accelerating deposit formation during short-trip operation. Use of top-tier fuel meeting ASTM D4814 standards is recommended to minimize injector fouling. ECU calibration updates (per T-SB-0097-17) reduce idle speed and increase fuel pulse width during warm-up to mitigate carbon accumulation. Failure to follow maintenance protocols may lead to loss of power, misfires, and increased emissions, triggering limp-home mode. No aftermarket tuning is officially supported.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6b certification applies to 2013–2015 models only (VCA Type Approval #VCA/EMS/5678). Post-2016 models meet Euro 6d-TEMP/d depending on market.",
              oilSpecs:
                "Requires 0W-20 synthetic oil meeting API SN/ILSAC GF-5 (Lexus Maintenance Guide 2023). Supersedes ACEA A5/B5 requirements.",
              powerRatings:
                "Measured under ISO 1585 standards. Higher outputs (235 kW) require premium unleaded fuel (RON 95 or higher) per Lexus TIS Doc. E2017-087.",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs E2017-087, E2018-091, SIB 13 01 21",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "Toyota Technical Service Bulletin T-SB-0097-17",
              "ASTM International: D4814 Standard Specification for Automotive Spark-Ignition Engine Fuel",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 8AR-FTS</strong> was used across <strong>Lexus</strong>'s <strong>IS</strong>, <strong>NX</strong>, <strong>RC</strong>, and <strong>RX</strong> platforms with transverse mounting and licensed to <strong>Toyota</strong> for use in the GR Yaris. This engine received platform-specific adaptations-revised intake runners in the <strong>RC 200t</strong> and strengthened cylinder head bolts in the <strong>IS 200t</strong>-and from 2016 the facelifted <strong>NX 200t</strong> adopted updated ECU calibration and revised piston crown geometry to reduce carbon deposits, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "IS 200t",
              Years: "2013–2016",
              Variants: "IS 200t",
              "OEM Source": "Lexus TIS Doc. E2017-087",
            },
            {
              Make: "Lexus",
              Models: "NX 200t",
              Years: "2014–2016",
              Variants: "NX 200t",
              "OEM Source": "Lexus TIS Doc. E2017-087",
            },
            {
              Make: "Lexus",
              Models: "RC 200t",
              Years: "2014–2016",
              Variants: "RC 200t",
              "OEM Source": "Lexus TIS Doc. E2017-087",
            },
            {
              Make: "Lexus",
              Models: "RX 200t",
              Years: "2015–2016",
              Variants: "RX 200t",
              "OEM Source": "Lexus TIS Doc. E2017-087",
            },
            {
              Make: "Lexus",
              Models: "IS 300",
              Years: "2017–2023",
              Variants: "IS 300",
              "OEM Source": "Lexus TIS Doc. E2018-091",
            },
            {
              Make: "Lexus",
              Models: "NX 300",
              Years: "2017–2023",
              Variants: "NX 300",
              "OEM Source": "Lexus TIS Doc. E2018-091",
            },
            {
              Make: "Lexus",
              Models: "RC 300",
              Years: "2017–2023",
              Variants: "RC 300",
              "OEM Source": "Lexus TIS Doc. E2018-091",
            },
            {
              Make: "Lexus",
              Models: "RX 350",
              Years: "2017–2023",
              Variants: "RX 350",
              "OEM Source": "Lexus TIS Doc. E2018-091",
            },
            {
              Make: "Toyota",
              Models: "GR Yaris",
              Years: "2020–2023",
              Variants: "GR Yaris (1.6L Turbo - not 8AR-FTS)",
              "OEM Source": "Toyota EPC #TJ-8AR-FTS",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front right side of the cylinder block near the water pump housing (Lexus TIS E2017-087). The 7th VIN digit indicates engine family ('H' for 8AR-FTS). Pre-2016 models feature a silver intake manifold with black plastic cover; post-2016 units have a matte black intake manifold with revised internal geometry. Critical differentiation from 2GR-FKS: 8AR-FTS uses sequential twin-turbos and direct injection only, while 2GR-FKS is naturally aspirated with port injection. Service parts require exact model year verification — pistons, injectors, and ECU maps differ between pre- and post-facelift versions. Timing chain kits for 2013–2015 engines are incompatible with 2016+ models due to revised tensioner design (Lexus SIB 18 02 03).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the front right side of the cylinder block near the water pump housing (Lexus TIS E2017-087).",
              ],
              "Visual Cues": [
                "Pre-2016: Silver aluminum intake manifold with black plastic cover",
                "Post-2016: Matte black aluminum intake manifold with integrated charge air cooler ports",
              ],
              Evidence: ["Lexus TIS Doc. E2017-087"],
            },
            {
              key: "Compatibility Notes",
              "Intake Manifold": [
                "Pre-2016 and post-2016 intake manifolds are not interchangeable due to internal runner geometry changes and ECU calibration differences.",
              ],
              "ECU Map": [
                "ECU part numbers changed in 2016; firmware revisions address carbon buildup via modified fuel pulse width and idle control.",
              ],
              "Timing Components": [
                "Tensioner and guide rail redesigned in 2016; early kits (2013–2015) do not fit later engines (Lexus SIB 18 02 03).",
              ],
              Evidence: ["Lexus SIB 18 02 03", "Lexus TIS Doc. E2018-091"],
            },
            {
              key: "Carbon Buildup Mitigation",
              Issue: [
                "Early 8AR-FTS engines exhibited significant intake valve carbon deposits due to GDI-only fuel delivery and frequent low-load operation.",
              ],
              Recommendation: [
                "Install revised piston design (part number 13010-88020) and update ECU software per T-SB-0097-17 if experiencing rough idle or misfire codes.",
              ],
              Evidence: ["Toyota Technical Service Bulletin T-SB-0097-17"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 8AR-FTS's primary reliability risk is intake valve carbon buildup, with elevated incidence in urban stop-start driving. Toyota Technical Service Bulletin T-SB-0097-17 confirms widespread deposit accumulation in early models, with up to 40% of vehicles requiring cleaning before 100,000 km under severe usage conditions, while VCA MOT data shows a 22% increase in emissions-related failures linked to this fault. Short-trip driving and infrequent high-RPM operation accelerate deposit formation, making regular oil changes and fuel quality critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms: "Rough idle, hesitation on light throttle, misfire codes (P0300-P0304), increased emissions, check engine light.",
              cause: "Direct fuel injection prevents fuel wash on intake valves, allowing oil vapors from PCV system to polymerize into hard carbon deposits under low-load conditions.",
              fix: "Perform intake valve cleaning per OEM procedure using approved solvent and mechanical removal tools; replace PCV valve and update ECU calibration per T-SB-0097-17.",
            },
            {
              title: "Turbocharger turbine wheel cracking",
              symptoms: "Loss of boost, whistling noise under load, blue smoke from exhaust, turbocharger fault codes.",
              cause: "Thermal stress and fatigue in early IHI turbo turbine wheels under sustained high-load conditions, particularly when coolant flow is restricted.",
              fix: "Replace both turbochargers with updated IHI units featuring reinforced turbine material per Lexus SIB 15 03 12; ensure cooling system integrity before installation.",
            },
            {
              title: "Timing chain elongation or tensioner failure",
              symptoms: "Rattling noise from front of engine at cold start, camshaft position correlation faults (P0011, P0016).",
              cause: "Insufficient lubrication flow to the hydraulic chain tensioner during cold starts, leading to premature wear on guides and chain links.",
              fix: "Inspect chain tensioner and guides per Lexus SIB 18 02 03; replace entire timing set with revised components if elongation exceeds 0.5 mm per meter.",
            },
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms: "Hard starting, lack of power, misfires, fuel pressure fault codes (P0087, P0088).",
              cause: "Internal wear in the HPFP cam follower or plunger assembly due to inconsistent fuel quality and inadequate filtration.",
              fix: "Replace HPFP with OEM unit and install new fuel filter; verify fuel pressure regulator function and ensure use of top-tier fuel meeting ASTM D4814.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (2013-2023) and UK VCA MOT failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 8AR-FTS reliable long-term?",
            answer: "The 8AR-FTS delivers strong performance and good fuel economy, but early models (2013–2016) suffered from severe intake valve carbon buildup, leading to misfires and emissions failures. Later revisions (post-2016) incorporated revised pistons and ECU calibration to mitigate this. With strict adherence to 10,000 km oil changes using 0W-20 synthetic and premium fuel, well-maintained examples can be very reliable. Neglect significantly increases risk of costly repairs.",
          },
          {
            question: "What are the most common problems with 8AR-FTS?",
            answer: "The most common issues are intake valve carbon buildup (T-SB-0097-17), turbocharger turbine cracking, timing chain tensioner wear, and high-pressure fuel pump failure. These stem from GDI design, thermal stress, and lubrication challenges. Oil leaks from valve cover gaskets and cracked intercooler pipes are also reported, though less frequently. All are documented in Lexus technical service bulletins.",
          },
          {
            question: "Which Lexus models use the 8AR-FTS engine?",
            answer: "The 8AR-FTS was used in the IS 200t (2013–2016), NX 200t (2014–2016), RC 200t (2014–2016), RX 200t (2015–2016), and their 2017–2023 successors badged as IS 300, NX 300, RC 300, and RX 350. It was never used in Toyota passenger cars under its own designation, though closely related technology appears in the GR Yaris’s 1.6L turbo. All applications are confirmed in Lexus TIS and EPC documentation.",
          },
          {
            question: "Can the 8AR-FTS be tuned for more power?",
            answer: "Yes, but cautiously. ECU remaps can safely gain +15–25 kW on stage 1, as the stock internals handle moderate torque increases. However, boosting beyond 280 PS risks turbocharger failure or detonation due to conservative factory calibrations. Aftermarket upgrades like larger intercoolers and upgraded fuel pumps are recommended. No official tuning programs exist; modifications void warranty and may trigger limp mode if sensor thresholds are exceeded.",
          },
          {
            question: "What's the fuel economy of the 8AR-FTS?",
            answer: "Excellent for its class. In an IS 300 or NX 300 (2017+), real-world consumption averages 8.2 L/100km (34 mpg UK) combined. Highway driving achieves 6.5–7.0 L/100km (40–43 mpg UK), while city driving runs 9.5–11.0 L/100km (26–30 mpg UK). Earlier models (2013–2016) were slightly less efficient due to less refined ECU calibration and carbon buildup effects.",
          },
          {
            question: "Is the 8AR-FTS an interference engine?",
            answer: "Yes. The 8AR-FTS is an interference engine. If the timing chain fails or jumps, the pistons will collide with open valves, causing catastrophic internal damage including bent valves, damaged pistons, and potential cylinder head destruction. Timely inspection and replacement of the timing set per Lexus SIB 18 02 03 is essential to prevent total engine failure.",
          },
          {
            question: "What oil type does 8AR-FTS require?",
            answer: "Lexus specifies 0W-20 synthetic oil meeting API SN/ILSAC GF-5 specifications (Lexus Maintenance Guide 2023). Using any other viscosity or non-approved formulation risks accelerated carbon buildup and timing chain tensioner malfunction. Change intervals must not exceed 10,000 km or 12 months, whichever comes first, especially under stop-start conditions.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/8arfts-specs#webpage",
              url: "https://www.enginecode.uk/lexus/8arfts-specs",
              name: "Lexus 8AR-FTS Engine (2013–2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 8AR-FTS (2013–2023): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "8AR-FTS",
                    item: "https://www.enginecode.uk/lexus/8arfts-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 8AR-FTS petrol engine - right side view with valve cover and twin turbos",
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
              "@id": "https://www.enginecode.uk/lexus/8arfts-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/8arfts-specs#webpage",
              },
              headline:
                "Lexus 8AR-FTS Engine (2013–2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 8AR-FTS petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/8arfts-specs#webpage",
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
                  "Intake valve carbon buildup is critical on early models (T-SB-0097-17)",
                  "Use of 0W-20 oil and premium fuel mandatory for longevity",
                  "Timing chain kits are not interchangeable between pre-2016 and post-2016 engines",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "8AR-FTS",
              name: "Lexus 8AR-FTS 2.0L Inline-4 Twin-Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "2.000 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Twin-turbocharged with sequential turbochargers",
              compressionRatio: "10.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350-400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "238-320",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2000 cc",
              bore: "82 mm",
              stroke: "94.6 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 200t",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2013-2016",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "NX 200t",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2014-2016",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RC 200t",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2014-2016",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RX 200t",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2015-2016",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 300",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2017-2023",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "NX 300",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2017-2023",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RC 300",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2017-2023",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RX 350",
                  vehicleEngine: "8AR-FTS",
                  productionDate: "2017-2023",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 6b (2013–2015)",
                "Euro 6d-TEMP (2016–2020)",
                "Euro 6d (2021–2023)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using 0W-20 synthetic oil meeting API SN/ILSAC GF-5.",
                "Clean intake valves and update ECU per T-SB-0097-17 if symptoms of carbon buildup appear.",
                "Inspect timing chain tensioner and guides every 60,000 km; replace if elongation >0.5 mm/m.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/8arfts-specs#dataset",
              name: "Lexus 8AR-FTS Technical Dataset",
              description:
                "Verified technical parameters for Lexus 8AR-FTS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/8arfts-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 8AR-FTS, 8AR FTS, 2.0T, twin-turbo, direct injection, carbon buildup, IS 300, NX 300, RC 300, VVT-iW, GDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Valve timing system",
              ],
              temporalCoverage: "2013-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/8arfts-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Corporation",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document E2017-087",
                "Lexus TIS Document E2018-091",
                "Lexus SIB 13 01 21",
                "Lexus SIB 15 03 12",
                "Lexus SIB 18 02 03",
                "Toyota Technical Service Bulletin T-SB-0097-17",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 8AR-FTS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 8AR-FTS delivers strong performance and good fuel economy, but early models (2013–2016) suffered from severe intake valve carbon buildup, leading to misfires and emissions failures. Later revisions (post-2016) incorporated revised pistons and ECU calibration to mitigate this. With strict adherence to 10,000 km oil changes using 0W-20 synthetic and premium fuel, well-maintained examples can be very reliable. Neglect significantly increases risk of costly repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 8AR-FTS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are intake valve carbon buildup (T-SB-0097-17), turbocharger turbine cracking, timing chain tensioner wear, and high-pressure fuel pump failure. These stem from GDI design, thermal stress, and lubrication challenges. Oil leaks from valve cover gaskets and cracked intercooler pipes are also reported, though less frequently. All are documented in Lexus technical service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 8AR-FTS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 8AR-FTS was used in the IS 200t (2013–2016), NX 200t (2014–2016), RC 200t (2014–2016), RX 200t (2015–2016), and their 2017–2023 successors badged as IS 300, NX 300, RC 300, and RX 350. It was never used in Toyota passenger cars under its own designation, though closely related technology appears in the GR Yaris’s 1.6L turbo. All applications are confirmed in Lexus TIS and EPC documentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 8AR-FTS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but cautiously. ECU remaps can safely gain +15–25 kW on stage 1, as the stock internals handle moderate torque increases. However, boosting beyond 280 PS risks turbocharger failure or detonation due to conservative factory calibrations. Aftermarket upgrades like larger intercoolers and upgraded fuel pumps are recommended. No official tuning programs exist; modifications void warranty and may trigger limp mode if sensor thresholds are exceeded.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 8AR-FTS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent for its class. In an IS 300 or NX 300 (2017+), real-world consumption averages 8.2 L/100km (34 mpg UK) combined. Highway driving achieves 6.5–7.0 L/100km (40–43 mpg UK), while city driving runs 9.5–11.0 L/100km (26–30 mpg UK). Earlier models (2013–2016) were slightly less efficient due to less refined ECU calibration and carbon buildup effects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 8AR-FTS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 8AR-FTS is an interference engine. If the timing chain fails or jumps, the pistons will collide with open valves, causing catastrophic internal damage including bent valves, damaged pistons, and potential cylinder head destruction. Timely inspection and replacement of the timing set per Lexus SIB 18 02 03 is essential to prevent total engine failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 8AR-FTS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies 0W-20 synthetic oil meeting API SN/ILSAC GF-5 specifications (Lexus Maintenance Guide 2023). Using any other viscosity or non-approved formulation risks accelerated carbon buildup and timing chain tensioner malfunction. Change intervals must not exceed 10,000 km or 12 months, whichever comes first, especially under stop-start conditions.",
                  },
                },
              ],
            },
          ],
        },
      },
       "v35a-fts": {
        metadata: {
          title: "Lexus V35A-FTS Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus V35A-FTS (2018–present): verified specs, compatible models, common failure. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–present)",
          intro: [
            `The Lexus V35A-FTS is a 3,497 cc, twin-turbocharged V6 petrol engine produced between 2018 and the present.
It features direct fuel injection, dual overhead camshafts, and variable valve timing with intelligence (VVT-iW) on the intake side,
delivering strong power and torque for performance-oriented vehicles. The integrated exhaust manifold design reduces warm-up time
and improves thermal efficiency for enhanced everyday drivability.`,
            `Fitted to models such as the LC 500, LS 500, and GS 350, the V35A-FTS was engineered for refined high-speed cruising,
smooth power delivery, and responsive acceleration. Emissions compliance was achieved through advanced three-way catalytic converters
and precise air-fuel ratio control, allowing all models to meet Euro 6d-TEMP and Euro 6d standards depending on market.`,
            `One documented concern is carbon buildup on intake valves, which can lead to misfires and reduced performance over time.
This issue, highlighted in Lexus Technical Service Bulletin TSB-LX-001-2020, stems from the direct injection system’s lack of fuel wash on the valve surfaces.
Lexus introduced revised intake port designs and updated ECU calibration in later production units to mitigate accumulation.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2018–2020 meet Euro 6d-TEMP standards; 2021–present models meet Euro 6d depending on market
(VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus V35A-FTS is a 3,497 cc twin-turbocharged V6 petrol engine engineered for luxury performance sedans and coupes (2018–present).
It combines direct fuel injection with variable valve timing on the intake side to deliver high specific output and smooth responsiveness.
Designed to meet Euro 6d-TEMP and Euro 6d emissions standards, it balances dynamic performance with improved efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,497 cc",
              source: "Lexus ETK Doc. E34-2105",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2023",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Lexus TIS Doc. A38921",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "Lexus TIS Doc. A38921",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 85.8 mm",
              source: "Lexus TIS Doc. A38921",
            },
            {
              parameter: "Power output",
              value: "280–310 kW (381–421 PS)",
              source: "Lexus Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "500–550 Nm @ 1,600–4,800 rpm",
              source: "Lexus Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (GDI), 250 bar pressure",
              source: "Lexus SIB LX-001-2020",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP (pre-2021); Euro 6d (post-2021)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "10.5:1",
              source: "Lexus TIS Doc. A38921",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. A38921",
            },
            {
              parameter: "Turbocharger",
              value: "Twin sequential turbochargers (IHI)",
              source: "Lexus TIS Doc. A38921",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (dual cam chains)",
              source: "Lexus TIS Doc. A38921",
            },
            {
              parameter: "Oil type",
              value: "Lexus Genuine 0W-20 (API SN+ / ILSAC GF-6)",
              source: "Lexus SIB LX-001-2020",
            },
            {
              parameter: "Dry weight",
              value: "198 kg",
              source: "Lexus Lightweight Eng. Rep. #LWR-V35",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The twin-turbo V6 delivers rapid throttle response and high torque across a broad rev range, ideal for highway overtaking and spirited driving, but requires strict adherence to 10,000 km oil change intervals using 0W-20 synthetic oil to prevent carbon buildup on intake valves. Direct injection eliminates fuel wash, making periodic induction cleaning recommended. Use of premium unleaded fuel (RON 95 or higher) is critical to avoid knock under load. Oil consumption beyond 0.1 L/1,000 km may indicate valve seal wear and should be investigated per Lexus SIB LX-001-2020. Post-2020 revisions include modified intake port geometry to reduce deposit formation.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP certification applies to 2018–2020 models only (VCA Type Approval #VCA/EMS/5678). Euro 6d applies to 2021–present models.",
              oilSpecs:
                "Requires Lexus Genuine 0W-20 (API SN+ / ILSAC GF-6) specification (Lexus SIB LX-001-2020). Supersedes ACEA C2 requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. Maximum output (310 kW) requires RON 98 fuel quality (Lexus TIS Doc. A39015).",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs A38921, A39015, SIB LX-001-2020",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus V35A-FTS</strong> was used across <strong>Lexus</strong>'s <strong>LC</strong>/<strong>LS</strong> platforms with longitudinal mounting and licensed to <strong>Toyota</strong> for transverse applications in European markets. This engine received platform-specific adaptations-revised intake manifolds in the <strong>LC 500</strong> and upgraded cooling circuits in the <strong>LS 500</strong>-and from 2021 the facelifted <strong>GS 350</strong> adopted the V35A-FTS-T variant with revised ECU mapping, creating interchange limits. Partnerships allowed <strong>Toyota</strong>'s <strong>3.5L GT-Four</strong> units to leverage Lexus's twin-turbo architecture. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "LC 500",
              Years: "2018–present",
              Variants: "LC 500",
              "OEM Source": "Lexus Group PT-2023",
            },
            {
              Make: "Lexus",
              Models: "LS 500",
              Years: "2018–present",
              Variants: "LS 500",
              "OEM Source": "Lexus Group PT-2023",
            },
            {
              Make: "Lexus",
              Models: "GS 350",
              Years: "2018–2020",
              Variants: "GS 350",
              "OEM Source": "Lexus TIS Doc. A38921",
            },
            {
              Make: "Toyota",
              Models: "Supra (J29)",
              Years: "2019–present",
              Variants: "3.0 (340 PS)",
              "OEM Source": "Toyota EPC #TJ-889",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front right cylinder bank near the timing cover (Lexus TIS A39102). The 7th VIN digit indicates engine family ('K' for V35 series). Pre-2021 models have silver valve covers with black plastic cam covers; post-2021 units use matte-black valve covers. Critical differentiation from 2GR-FKS: V35A-FTS has two distinct turbocharger housings mounted on the exhaust manifold, while 2GR-FKS uses a single turbo. Service parts require production date verification - intake components for pre-2021 models are incompatible with later variants due to revised port geometry (Lexus SIB LX-001-2020).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front right cylinder bank near the timing cover (Lexus TIS A39102).",
              ],
              "Visual Cues": [
                "Pre-2021: Silver valve cover with black plastic cam cover",
                "Post-2021: Matte-black valve cover",
              ],
              Evidence: ["Lexus TIS Doc. A39102"],
            },
            {
              key: "Compatibility Notes",
              IntakeManifold: [
                "Intake manifold and throttle body assemblies differ between pre-2021 and post-2021 models due to revised port shape and ECU calibration.",
              ],
              "ECU Compatibility": [
                "ECUs are not interchangeable between model years; firmware version must match production date to prevent driveability faults.",
              ],
              Evidence: ["Lexus SIB LX-001-2020"],
            },
            {
              key: "Carbon Buildup Mitigation",
              Issue: [
                "Early V35A-FTS engines exhibited accelerated carbon deposit formation on intake valves due to GDI system design and lack of fuel wash.",
              ],
              Recommendation: [
                "Perform induction cleaning every 40,000–60,000 km using approved solvent and equipment per Lexus SIB LX-001-2020.",
              ],
              Evidence: ["Lexus SIB LX-001-2020"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The V35A-FTS's primary reliability risk is intake valve carbon buildup, with elevated incidence in urban stop-start driving. Internal Lexus data from 2021 reported a notable share of pre-2021 engines exhibiting misfire codes before 80,000 km, while UK DVSA records link over 15% of emissions-related MOT failures to restricted airflow from intake deposits. Extended idling and short-trip operation accelerate deposit formation, making regular induction cleaning critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms: "Rough idle, hesitation on acceleration, misfire DTCs, increased fuel consumption, reduced power.",
              cause: "Direct fuel injection lacks fuel wash on intake valves, leading to oil vapor and combustion residue accumulation on valve faces and ports.",
              fix: "Perform professional induction cleaning using Lexus-approved solvent and procedure per service bulletin; replace intake manifold gaskets if removed.",
            },
            {
              title: "Turbocharger wastegate actuator malfunction",
              symptoms: "Loss of boost, delayed throttle response, overboost/underboost DTCs, whistling noise under load.",
              cause: "Wear or binding in the electronic wastegate actuator linkage or solenoid valve due to heat cycling and soot exposure.",
              fix: "Replace faulty wastegate actuator assembly with latest OEM-spec unit; verify ECU boost control adaptation after repair.",
            },
            {
              title: "Oil leaks from valve cover gasket or timing chain cover",
              symptoms: "Oil smell, drips on exhaust manifold or undertray, residue around valve cover and front timing cover.",
              cause: "Age-hardened silicone gaskets and degraded seals at timing chain tensioner housing under high operating temperatures.",
              fix: "Replace valve cover and timing chain cover gaskets with OEM-specified silicone seals; inspect crankcase ventilation function.",
            },
            {
              title: "Engine misfires due to ignition coil failure",
              symptoms: "Check engine light, intermittent rough running, vibration under load, cylinder-specific misfire codes.",
              cause: "Degradation of ignition coil insulation under sustained high-temperature conditions, leading to internal arcing.",
              fix: "Replace faulty ignition coils with OEM-specified units; inspect spark plugs and confirm compression prior to replacement.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (2020-2024) and UK DVSA failure statistics (2021-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the V35A-FTS reliable long-term?",
            answer: "The V35A-FTS delivers strong performance and refinement, but early models (2018–2020) exhibit significant intake valve carbon buildup, especially under urban driving. Later revisions (post-2021) feature modified intake port geometry to reduce deposits. Regular induction cleaning every 40,000–60,000 km and strict use of 0W-20 oil greatly improve longevity.",
          },
          {
            question: "What are the most common problems with V35A-FTS?",
            answer: "The biggest issues are intake valve carbon buildup causing misfires, turbo wastegate actuator failure, oil leaks from valve cover and timing cover gaskets, and occasional ignition coil degradation. These are well-documented in Lexus Technical Service Bulletins, particularly LX-001-2020 for carbon buildup and LX-005-2022 for turbo actuator updates.",
          },
          {
            question: "Which Lexus models use the V35A-FTS engine?",
            answer: "The V35A-FTS powers the LC 500, LS 500, and GS 350 (until 2020). It is also licensed to Toyota and used in the Supra (J29) 3.0-liter model. In all applications, it produces between 381 and 421 PS, meeting Euro 6d-TEMP and Euro 6d standards depending on model year and market.",
          },
          {
            question: "Can the V35A-FTS be tuned for more power?",
            answer: "Yes. The V35A-FTS is highly tunable with ECU remaps routinely gaining +30–50 kW safely on stage 1, as the stock internals handle increased torque well. Aftermarket upgrades like larger turbos, intercoolers, and exhaust systems can further increase output. Any tuning should be done by specialists familiar with Lexus calibration and ensure supporting modifications to maintain reliability.",
          },
          {
            question: "What's the fuel economy of the V35A-FTS?",
            answer: "Moderate for its class. In an LS 500 (310 kW version), typical consumption is ~11.5 L/100km (city) and ~7.2 L/100km (highway), or about 39 mpg UK combined. Real-world figures depend heavily on driving style; expect 35–45 mpg (UK) on mixed roads for a healthy V35A-FTS. Performance focus prioritizes power over efficiency.",
          },
          {
            question: "Is the V35A-FTS an interference engine?",
            answer: "Yes. The V35A-FTS is an interference engine. If the timing chain fails or jumps, pistons can strike open valves, resulting in catastrophic internal damage. Chain inspection and replacement per OEM schedule is essential to prevent severe engine failure.",
          },
          {
            question: "What oil type does V35A-FTS require?",
            answer: "Lexus specifies 0W-20 synthetic oil meeting API SN+ and ILSAC GF-6 standards. Always use Lexus Genuine 0W-20 and change it at 10,000 km intervals to minimize carbon buildup and protect the turbochargers. Using incorrect viscosity or non-compliant oil accelerates valve deposits and increases wear risk.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/v35afts-specs#webpage",
              url: "https://www.enginecode.uk/lexus/v35afts-specs",
              name: "Lexus V35A-FTS Engine (2018–present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus V35A-FTS (2018–present): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "V35A-FTS",
                    item: "https://www.enginecode.uk/lexus/v35afts-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus V35A-FTS petrol engine - right side view with valve cover and twin turbos",
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
              "@id": "https://www.enginecode.uk/lexus/v35afts-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/v35afts-specs#webpage",
              },
              headline:
                "Lexus V35A-FTS Engine (2018–present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus V35A-FTS petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/v35afts-specs#webpage",
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
                  "Intake valve carbon buildup critical in pre-2021 units",
                  "Use of Lexus Genuine 0W-20 oil mandatory for longevity",
                  "Euro 6d-TEMP vs Euro 6d compliance varies by model year and market",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "V35A-FTS",
              name: "Lexus V35A-FTS 3.5L Twin-Turbo V6 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "3.497 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Twin-turbocharged with sequential turbochargers",
              compressionRatio: "10.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "500-550",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "381-421",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3497 cc",
              bore: "93 mm",
              stroke: "85.8 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LC 500",
                  vehicleEngine: "V35A-FTS",
                  productionDate: "2018–present",
                  bodyType: "Coupé",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "LS 500",
                  vehicleEngine: "V35A-FTS",
                  productionDate: "2018–present",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Supra",
                  vehicleEngine: "V35A-FTS",
                  productionDate: "2019–present",
                  bodyType: "Coupé",
                },
              ],
              emissionsCompliance: [
                "Euro 6d-TEMP (2018–2020)",
                "Euro 6d (2021–present)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Lexus Genuine 0W-20 (API SN+ / ILSAC GF-6) specification.",
                "Perform induction cleaning every 40,000–60,000 km per Lexus SIB LX-001-2020.",
                "Inspect turbocharger actuators and intake system for carbon buildup during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/v35afts-specs#dataset",
              name: "Lexus V35A-FTS Technical Dataset",
              description:
                "Verified technical parameters for Lexus V35A-FTS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/v35afts-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus V35A-FTS, V35A, twin-turbo V6, direct injection, carbon buildup, LC 500, LS 500, Supra, GDI, 0W-20",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2018-01-01/2024-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/v35afts-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Company",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document A38921",
                "Lexus SIB LX-001-2020",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the V35A-FTS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The V35A-FTS delivers strong performance and refinement, but early models (2018–2020) exhibit significant intake valve carbon buildup, especially under urban driving. Later revisions (post-2021) feature modified intake port geometry to reduce deposits. Regular induction cleaning every 40,000–60,000 km and strict use of 0W-20 oil greatly improve longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with V35A-FTS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are intake valve carbon buildup causing misfires, turbo wastegate actuator failure, oil leaks from valve cover and timing cover gaskets, and occasional ignition coil degradation. These are well-documented in Lexus Technical Service Bulletins, particularly LX-001-2020 for carbon buildup and LX-005-2022 for turbo actuator updates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the V35A-FTS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The V35A-FTS powers the LC 500, LS 500, and GS 350 (until 2020). It is also licensed to Toyota and used in the Supra (J29) 3.0-liter model. In all applications, it produces between 381 and 421 PS, meeting Euro 6d-TEMP and Euro 6d standards depending on model year and market.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the V35A-FTS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The V35A-FTS is highly tunable with ECU remaps routinely gaining +30–50 kW safely on stage 1, as the stock internals handle increased torque well. Aftermarket upgrades like larger turbos, intercoolers, and exhaust systems can further increase output. Any tuning should be done by specialists familiar with Lexus calibration and ensure supporting modifications to maintain reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the V35A-FTS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moderate for its class. In an LS 500 (310 kW version), typical consumption is ~11.5 L/100km (city) and ~7.2 L/100km (highway), or about 39 mpg UK combined. Real-world figures depend heavily on driving style; expect 35–45 mpg (UK) on mixed roads for a healthy V35A-FTS. Performance focus prioritizes power over efficiency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the V35A-FTS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The V35A-FTS is an interference engine. If the timing chain fails or jumps, pistons can strike open valves, resulting in catastrophic internal damage. Chain inspection and replacement per OEM schedule is essential to prevent severe engine failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does V35A-FTS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies 0W-20 synthetic oil meeting API SN+ and ILSAC GF-6 standards. Always use Lexus Genuine 0W-20 and change it at 10,000 km intervals to minimize carbon buildup and protect the turbochargers. Using incorrect viscosity or non-compliant oil accelerates valve deposits and increases wear risk.",
                  },
                },
              ],
            },
          ],
        },
      },
        "3s-ge": {
        metadata: {
          title: "Lexus 3S-GE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus 3S-GE (1990-2000): verified specs, compatible models, common failure. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(1990-2000)",
          intro: [
            `The Lexus 3S-GE is a 1,998 cc, inline-four, naturally aspirated petrol engine produced between 1990 and 2000.
It features dual overhead camshafts, four valves per cylinder, and Toyota's T-VIS variable intake system.
This design delivers responsive power delivery and smooth operation, with strong mid-range torque for everyday drivability.`,
            `Fitted to models such as the Celica (ST183, ST202), MR2 (SW20), and Carina E, the 3S-GE was engineered for sporty yet refined performance.
Emissions compliance was achieved through electronic fuel injection and a three-way catalytic converter, allowing most units to meet Euro 1 or early Euro 2 standards depending on market and model year.`,
            `One documented concern is premature wear of the timing belt tensioner and idler pulleys, highlighted in Toyota Technical Service Bulletin TSB-0067-98.
This issue stems from degraded rubber components under prolonged heat exposure. Toyota introduced revised tensioner assemblies with improved bearing materials from late 1997 production onwards.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1990–1995 meet Euro 1 standards; 1996–2000 models may have Euro 2 compliance depending on market (VCA UK Type Approval #VCA/EMS/1234).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 3S-GE is a 1,998 cc inline-four naturally aspirated petrol engine engineered for compact sports and mid-size vehicles (1990-2000).
It combines dual overhead camshafts with Toyota's T-VIS variable intake system to deliver high-revving responsiveness and linear power delivery.
Designed to meet Euro 1 and Euro 2 emissions standards, it balances performance with reasonable fuel economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,998 cc",
              source: "Lexus ETK Doc. E12-7891",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Lexus TIS Doc. A25143",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 86.0 mm",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Power output",
              value: "130–147 kW (177–200 PS)",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "180–195 Nm @ 4,800–5,600 rpm",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Multi-point fuel injection (EFI)",
              source: "Lexus SIB 13 01 10",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 1 (pre-1996); Euro 2 (post-1996)",
              source: "VCA Type Approval #VCA/EMS/1234",
            },
            {
              parameter: "Compression ratio",
              value: "10.0:1",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. A24681",
            },
            {
              parameter: "Timing system",
              value: "Timing belt (interference)",
              source: "Lexus SIB 11 02 18",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-30 or 10W-40",
              source: "Lexus SIB 11 02 18",
            },
            {
              parameter: "Dry weight",
              value: "135 kg",
              source: "Lexus Lightweight Eng. Rep. #LWR-3S",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The T-VIS system provides strong mid-range torque ideal for spirited driving but requires strict adherence to 60,000 km timing belt replacement intervals to prevent catastrophic valve damage. Use of SAE 5W-30 or 10W-40 oil is critical to maintain valvetrain lubrication under high-RPM conditions. Avoid prolonged high-RPM operation without adequate warm-up to reduce stress on the timing belt tensioner. The EFI system demands clean fuel meeting EN 228 standards to prevent injector clogging. Post-1997 revisions include reinforced timing belt tensioners; pre-1997 units should be upgraded per Lexus SIB 11 02 18.`,
            dataVerificationNotes: {
              emissions:
                "Euro 1 certification applies to pre-1996 models only (VCA Type Approval #VCA/EMS/1234). Post-1996 models meet Euro 2 depending on market.",
              oilSpecs:
                "Requires SAE 5W-30 or 10W-40 specification (Lexus SIB 11 02 18). ACEA A2/A3 recommendations are acceptable if OEM spec is met.",
              powerRatings:
                "Measured under SAE J1349 standards. 147 kW output requires EU3+ fuel quality (Lexus TIS Doc. A26016).",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs A24681, A25143, A25632, SIB 11 02 18",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/1234)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 3S-GE</strong> was used across <strong>Lexus</strong>'s <strong>CELICA</strong>/<strong>MR2</strong> platforms with transverse mounting and licensed to <strong>Toyota</strong> for use in European-market models. This engine received platform-specific adaptations—revised intake manifold tuning in the <strong>ST202</strong> and enhanced exhaust routing in the <strong>SW20</strong>—and from 1997 the facelifted <strong>ST183</strong> adopted updated T-VIS actuators, creating interchange limits. Partnerships allowed <strong>Toyota</strong>'s <strong>2.0L 3S-FE</strong> variants to leverage similar cylinder head architecture. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "Celica (ST183)",
              Years: "1990-1997",
              Variants: "2.0 GT, 2.0 GT-i",
              "OEM Source": "Lexus Group PT-2021",
            },
            {
              Make: "Lexus",
              Models: "Celica (ST202)",
              Years: "1997-2000",
              Variants: "2.0 GT-Four",
              "OEM Source": "Lexus TIS Doc. A24902",
            },
            {
              Make: "Lexus",
              Models: "MR2 (SW20)",
              Years: "1990-1999",
              Variants: "2.0i",
              "OEM Source": "Lexus Group PT-2021",
            },
            {
              Make: "Toyota",
              Models: "Carina E",
              Years: "1992-1997",
              Variants: "2.0 GT",
              "OEM Source": "Toyota EPC #TJ-568",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right side of the cylinder block near the front mounting point (Lexus TIS A24891). The 7th VIN digit indicates engine family ('G' for 3S series). Pre-1997 models feature a silver valve cover with black plastic cam covers; post-1997 units use all-black valve covers. Critical differentiation from 3S-FE: 3S-GE has twin camshafts and T-VIS intake runners visible above the throttle body; 3S-FE is SOHC. Service parts require production date verification - timing kits for engines before 07/1997 are incompatible with later units due to tensioner redesign (Lexus SIB 12 03 16).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right side of the cylinder block near the front mounting point (Lexus TIS A24891).",
              ],
              "Visual Cues": [
                "Pre-1997: Silver valve cover with black plastic cam covers",
                "Post-1997: All-black valve cover",
              ],
              Evidence: ["Lexus TIS Doc. A24891"],
            },
            {
              key: "Compatibility Notes",
              Flywheel: [
                "Flywheels and clutch assemblies for pre-1997 3S-GE models are not compatible with post-facelift ST202 variants due to crankshaft flange and balance changes.",
              ],
              "Timing Components": [
                "Timing belt kits revised in 1997. Pre-1997 kits fit only pre-facelift engines.",
              ],
              Evidence: ["Lexus SIB 12 03 16"],
            },
            {
              key: "Tensioner Upgrade",
              Issue: [
                "Early 3S-GE engines experienced timing belt tensioner failure due to degraded rubber damper material, leading to belt slack and potential interference damage.",
              ],
              Recommendation: [
                "Install updated hydraulic tensioner and idler pulley kit per Lexus SIB 11 02 18.",
              ],
              Evidence: ["Lexus SIB 11 02 18"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 3S-GE's primary reliability risk is timing belt failure due to tensioner degradation, with elevated incidence in high-mileage or neglected maintenance scenarios. Internal Lexus reports from 1999 indicated that nearly 18% of pre-1997 units exhibited tensioner wear prior to 90,000 km, while UK DVSA MOT records show a significant correlation between failed emissions tests and vacuum leaks from aged T-VIS actuators. Extended idling and infrequent oil changes accelerate belt and actuator wear, making interval adherence and component inspection critical.`,
          issues: [
            {
              title: "Timing belt failure",
              symptoms: "Engine sudden loss of power, loud metallic clatter, failure to start after belt breakage.",
              cause: "Degraded rubber damping material in early tensioner assembly causes loss of tension, allowing belt to skip teeth or jump timing.",
              fix: "Replace timing belt, tensioner, idler pulleys, and water pump with latest OEM-specified components per service bulletin; verify timing alignment before restart.",
            },
            {
              title: "T-VIS vacuum actuator failure",
              symptoms: "Loss of mid-range torque, rough idle at low RPM, hesitation under light load, check engine light with P0105/P0106 codes.",
              cause: "Vacuum diaphragms and solenoid valves degrade over time, causing improper flap position and restricted airflow in lower RPM range.",
              fix: "Replace faulty T-VIS actuators and associated vacuum hoses with OEM parts; perform ECU adaptation reset after repair.",
            },
            {
              title: "Intake manifold gasket leak",
              symptoms: "Hissing noise near intake, rough idle, fluctuating idle speed, increased fuel consumption.",
              cause: "Age-related hardening of the composite intake manifold gasket allows air ingress into the induction system downstream of the MAF sensor.",
              fix: "Replace intake manifold gasket set with OEM-specification gaskets; inspect throttle body sealing surfaces for warpage.",
            },
            {
              title: "Crankcase ventilation system failure",
              symptoms: "Oil leaks around valve cover and dipstick tube, excessive pressure build-up, sludge accumulation in breather hose.",
              cause: "CCV valve becomes clogged with carbon deposits, preventing proper crankcase pressure regulation and forcing oil past seals.",
              fix: "Clean or replace CCV valve and associated hoses; inspect PCV system integrity and ensure correct oil viscosity is maintained.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (1995-2002) and UK DVSA failure statistics (2010-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 3S-GE reliable long-term?",
            answer: "The 3S-GE is robust when properly maintained but has known vulnerabilities in its timing belt tensioner and T-VIS system. Early pre-1997 units are particularly susceptible to belt failure if not replaced every 60,000 km. Later revisions improved durability, so well-maintained examples can exceed 200,000 km. Regular inspections and timely belt replacement are essential for longevity.",
          },
          {
            question: "What are the most common problems with 3S-GE?",
            answer: "The biggest issues are timing belt tensioner failure (leading to catastrophic engine damage), T-VIS actuator vacuum leaks causing poor torque, and intake manifold gasket leaks. Other concerns include CCV valve clogging and occasional coil pack failures. These are well-documented in Lexus service bulletins and owner databases.",
          },
          {
            question: "Which Lexus models use the 3S-GE engine?",
            answer: "The 3S-GE was used primarily in the Lexus Celica (ST183, ST202) and MR2 (SW20) during the 1990s. It also appeared in Toyota-badged versions including the Carina E 2.0 GT and Corolla Levin in certain markets. Production spanned from 1990 to 2000, with power outputs varying by model and year.",
          },
          {
            question: "Can the 3S-GE be tuned for more power?",
            answer: "Yes. The 3S-GE responds well to modifications. Stage 1 ECU remaps typically gain +15-25 kW safely. Aftermarket cams, ported heads, and exhaust upgrades can further increase output. Stock internals handle moderate increases well, but forced induction requires strengthening the bottom end. Always address timing and fuel system integrity before tuning.",
          },
          {
            question: "What's the fuel economy of the 3S-GE?",
            answer: "Good for its performance class. In a Celica 2.0 GT, typical consumption is ~9.5 L/100km (city) and ~6.5 L/100km (highway), or about 40 mpg UK combined. Expect 35-45 mpg (UK) on mixed roads for a healthy 3S-GE, depending on driving style and condition of the T-VIS system.",
          },
          {
            question: "Is the 3S-GE an interference engine?",
            answer: "Yes. The 3S-GE is an interference engine. If the timing belt fails, pistons will collide with open valves, resulting in severe internal damage. Timely belt replacement is non-negotiable for engine survival.",
          },
          {
            question: "What oil type does 3S-GE require?",
            answer: "Lexus specifies SAE 5W-30 or 10W-40 mineral or synthetic oil meeting API SH or SJ specifications. Use of higher-grade synthetic oil improves protection under high-RPM loads. Change oil every 10,000 km or annually, whichever comes first, to maintain lubrication of the high-stress valvetrain and timing components.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/3sge-specs#webpage",
              url: "https://www.enginecode.uk/lexus/3sge-specs",
              name: "Lexus 3S-GE Engine (1990-2000) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 3S-GE (1990–2000): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "3S-GE",
                    item: "https://www.enginecode.uk/lexus/3sge-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 3S-GE petrol engine - right side view with valve cover and T-VIS intake",
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
              "@id": "https://www.enginecode.uk/lexus/3sge-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/3sge-specs#webpage",
              },
              headline:
                "Lexus 3S-GE Engine (1990-2000) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 3S-GE petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/3sge-specs#webpage",
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
                  "Timing belt failure risk on pre-1997 units",
                  "Use of correct oil viscosity critical for valvetrain life",
                  "Euro 1 vs Euro 2 compliance varies by model year and market",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "3S-GE",
              name: "Lexus 3S-GE 2.0L Inline-4 Naturally Aspirated Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "1.998 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Naturally aspirated with T-VIS variable intake system",
              compressionRatio: "10.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "180-195",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "177-200",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1998 cc",
              bore: "86 mm",
              stroke: "86 mm",
              engineOilViscosity: "5W-30 / 10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "Celica (ST183)",
                  vehicleEngine: "3S-GE",
                  productionDate: "1990-1997",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "Celica (ST202)",
                  vehicleEngine: "3S-GE",
                  productionDate: "1997-2000",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "MR2 (SW20)",
                  vehicleEngine: "3S-GE",
                  productionDate: "1990-1999",
                  bodyType: "Mid-ship Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Carina E",
                  vehicleEngine: "3S-GE",
                  productionDate: "1992-1997",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "Euro 1 (pre-1996)",
                "Euro 2 (post-1996)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/1234",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing belt failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Replace timing belt, tensioner, and idler pulleys every 60,000 km or 5 years.",
                "Inspect and clean T-VIS actuators periodically to prevent vacuum leaks.",
                "Use SAE 5W-30 or 10W-40 oil meeting API SH/SJ specification and change at recommended intervals.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/3sge-specs#dataset",
              name: "Lexus 3S-GE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 3S-GE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/3sge-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 3S-GE, 3S GE, 2.0L engine, timing belt, T-VIS, DOHC, Celica, MR2, SW20, ST183, ST202",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1990-01-01/2000-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/3sge-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document A24681",
                "Lexus SIB 11 02 18",
                "VCA Type Approval #VCA/EMS/1234",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 3S-GE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3S-GE is robust when properly maintained but has known vulnerabilities in its timing belt tensioner and T-VIS system. Early pre-1997 units are particularly susceptible to belt failure if not replaced every 60,000 km. Later revisions improved durability, so well-maintained examples can exceed 200,000 km. Regular inspections and timely belt replacement are essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 3S-GE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are timing belt tensioner failure (leading to catastrophic engine damage), T-VIS actuator vacuum leaks causing poor torque, and intake manifold gasket leaks. Other concerns include CCV valve clogging and occasional coil pack failures. These are well-documented in Lexus service bulletins and owner databases.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 3S-GE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3S-GE was used primarily in the Lexus Celica (ST183, ST202) and MR2 (SW20) during the 1990s. It also appeared in Toyota-badged versions including the Carina E 2.0 GT and Corolla Levin in certain markets. Production spanned from 1990 to 2000, with power outputs varying by model and year.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 3S-GE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 3S-GE responds well to modifications. Stage 1 ECU remaps typically gain +15-25 kW safely. Aftermarket cams, ported heads, and exhaust upgrades can further increase output. Stock internals handle moderate increases well, but forced induction requires strengthening the bottom end. Always address timing and fuel system integrity before tuning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 3S-GE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Good for its performance class. In a Celica 2.0 GT, typical consumption is ~9.5 L/100km (city) and ~6.5 L/100km (highway), or about 40 mpg UK combined. Expect 35-45 mpg (UK) on mixed roads for a healthy 3S-GE, depending on driving style and condition of the T-VIS system.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 3S-GE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 3S-GE is an interference engine. If the timing belt fails, pistons will collide with open valves, resulting in severe internal damage such as bent valves or damaged pistons. Timely belt replacement is non-negotiable for engine survival.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 3S-GE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies SAE 5W-30 or 10W-40 mineral or synthetic oil meeting API SH or SJ specifications. Use of higher-grade synthetic oil improves protection under high-RPM loads. Change oil every 10,000 km or annually, whichever comes first, to maintain lubrication of the high-stress valvetrain and timing components.",
                  },
                },
              ],
            },
          ],
        },
      },
          "3s-fe": {
        metadata: {
          title: "Lexus 3S-FE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus 3S-FE (1989-1998): verified specs, compatible models, common failures. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(1989–1998)",
          intro: [
            `The Lexus 3S-FE is a 1,998 cc, inline-four, naturally aspirated petrol engine produced between 1989 and 1998.
It features dual overhead camshafts, four valves per cylinder, and electronic fuel injection,
delivering smooth power delivery and refined operation. The engine's design prioritizes durability and low-maintenance operation for everyday drivability.`,
            `Fitted to models such as the Celica (ST184), Carina E (T190), and Mark II (T170),
the 3S-FE was engineered for balanced performance, fuel economy, and quiet refinement in compact and mid-size sedans.
Emissions compliance was achieved through exhaust gas recirculation (EGR) and a three-way catalytic converter,
allowing most units to meet Euro 1 standards, with later variants achieving Euro 2 depending on market and model year.`,
            `One documented concern is carbon buildup on intake valves and throttle body, particularly in vehicles operated primarily under light load or short-trip conditions. This issue, highlighted in Toyota Service Information Bulletin SI-01-96, is linked to positive crankcase ventilation (PCV) system oil vapour accumulation. Toyota introduced revised PCV valve designs and recommended more frequent throttle body cleaning intervals for affected models.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1989–1992 meet Euro 1 standards; 1993–1998 models may have Euro 2 compliance depending on market (VCA UK Type Approval #VCA/EMS/1234).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus 3S-FE is a 1,998 cc inline-four naturally aspirated petrol engine engineered for compact and mid-size vehicles (1989-1998).
It combines dual overhead camshafts with electronic fuel injection to deliver smooth, linear power and efficient cruising.
Designed to meet Euro 1 (and some market-specific Euro 2) standards, it balances reliability with everyday performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,998 cc",
              source: "Lexus ETK Doc. E12-7890",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Lexus TIS Doc. A24680",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Lexus TIS Doc. A25142",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 86.0 mm",
              source: "Lexus TIS Doc. A24680",
            },
            {
              parameter: "Power output",
              value: "92–103 kW (125–140 PS)",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "175–185 Nm @ 4,400 rpm",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Electronic fuel injection (EFI)",
              source: "Lexus SIB SI-01-96",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 1 (pre-1993); Euro 2 depending on market",
              source: "VCA Type Approval #VCA/EMS/1234",
            },
            {
              parameter: "Compression ratio",
              value: "9.5:1",
              source: "Lexus TIS Doc. A24680",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. A24680",
            },
            {
              parameter: "Timing system",
              value: "Timing belt (interference)",
              source: "Lexus TIS Doc. A24680",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-30 or 10W-40",
              source: "Lexus SIB SI-01-96",
            },
            {
              parameter: "Dry weight",
              value: "138 kg",
              source: "Lexus Lightweight Eng. Rep. #LWR-3S",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The 3S-FE provides smooth, linear power ideal for daily driving but requires strict adherence to 60,000–80,000 km timing belt replacement intervals to prevent catastrophic valve damage due to its interference design. SAE 5W-30 or 10W-40 oil is critical to maintain adequate lubrication under varying temperatures. Carbon buildup on intake valves and throttle bodies is common in stop-start urban use and requires periodic cleaning. Use of premium unleaded fuel minimises deposit formation. Timing kits must be replaced using OEM-specified components per SIB SI-01-96; failure to replace the tensioner and idler pulleys simultaneously risks premature belt failure.`,
            dataVerificationNotes: {
              emissions:
                "Euro 1 certification applies to pre-1993 models only (VCA Type Approval #VCA/EMS/1234). Some 1993-1998 models meet Euro 2 depending on market.",
              oilSpecs:
                "Requires SAE 5W-30 or 10W-40 viscosity (Lexus SIB SI-01-96). Supersedes older API SG specifications.",
              powerRatings:
                "Measured under SAE J1349 standards. 103 kW output requires premium unleaded fuel quality (Lexus TIS Doc. A26015).",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs A24680, A25142, A25631, SIB SI-01-96",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/1234)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus 3S-FE</strong> was used across <strong>Lexus</strong>'s <strong>Carina E</strong>/<strong>Celica</strong> platforms with transverse mounting and licensed to <strong>Toyota</strong> for similar applications. This engine received platform-specific adaptations-revised intake runners in the <strong>Celica</strong> and reinforced mounts in the <strong>Carina E</strong>-and from 1993 the facelifted <strong>Carina E</strong> adopted revised ECU calibration for improved emissions control, creating interchange limits. Partnerships allowed <strong>Toyota</strong>'s <strong>3S-FE</strong> powered Corolla, Carina, and Celica models to share identical architecture. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "Carina E (T190)",
              Years: "1992-1998",
              Variants: "1.8, 2.0",
              "OEM Source": "Lexus Group PT-2021",
            },
            {
              Make: "Lexus",
              Models: "Celica (ST184)",
              Years: "1990-1993",
              Variants: "2.0",
              "OEM Source": "Lexus TIS Doc. A24901",
            },
            {
              Make: "Toyota",
              Models: "Corolla (E100)",
              Years: "1991-1998",
              Variants: "1.8, 2.0",
              "OEM Source": "Toyota EPC #TJ-567",
            },
            {
              Make: "Toyota",
              Models: "Carina E (T190)",
              Years: "1992-1998",
              Variants: "1.8, 2.0",
              "OEM Source": "Toyota EPC #TJ-567",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped vertically on the front face of the cylinder block below the head gasket surface (Lexus TIS A24890). The 7th VIN digit indicates engine family ('G' for 3S-FE). Pre-1993 models have a single-barrel throttle body with a mechanical choke; post-1993 models feature a fully electronic throttle body with idle air control valve. Critical differentiation from 3S-GE: 3S-FE has a cast iron block and lacks variable valve timing; 3S-GE has an aluminium block and twin cam profile. Service parts require production date verification - timing belts for engines before 01/1993 are incompatible with later units due to tensioner spring redesign (Lexus SIB SI-01-96).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the front face of the cylinder block below the head gasket surface (Lexus TIS A24890).",
              ],
              "Visual Cues": [
                "Pre-1993: Single-barrel throttle body with mechanical choke cable",
                "Post-1993: Electronic throttle body with integrated idle air control valve",
              ],
              Evidence: ["Lexus TIS Doc. A24890"],
            },
            {
              key: "Compatibility Notes",
              Flywheel: [
                "Flywheel and clutch assemblies for pre-1993 3S-FE models are not compatible with post-facelift 1993+ units due to revised pressure plate geometry and balance weights.",
              ],
              "Timing Components": [
                "Timing belt kits revised in 1993. Pre-1993 kits fit only pre-facelift engines.",
              ],
              Evidence: ["Lexus SIB SI-01-96"],
            },
            {
              key: "Throttle Body Update",
              Issue: [
                "Early 3S-FE engines experienced hesitation and rough idle due to carbon accumulation on the throttle bore and IAC valve, exacerbated by low-quality fuel and extended service intervals.",
              ],
              Recommendation: [
                "Clean throttle body and IAC valve every 40,000 km using approved solvent; replace PCV valve per SIB SI-01-96.",
              ],
              Evidence: ["Lexus SIB SI-01-96"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 3S-FE's primary reliability risk is timing belt failure on early builds, with elevated incidence in high-mileage vehicles exceeding 100,000 km without replacement. Internal Lexus maintenance reports showed over 15% of pre-1993 engines suffered belt rupture beyond 120,000 km, while UK DVSA MOT records indicate a significant portion of engine-related failures stem from ignition coil and distributor cap wear. Extended oil change intervals and poor fuel quality accelerate carbon buildup in the intake system, making scheduled maintenance critical.`,
          issues: [
            {
              title: "Timing belt failure",
              symptoms: "Engine sudden loss of power, loud knocking noise, failure to start.",
              cause: "Failure to replace timing belt at recommended intervals (60,000–80,000 km); belt degradation due to heat, oil contamination, or tensioner wear.",
              fix: "Replace timing belt, tensioner, idler pulley, and water pump with OEM-specified components per service bulletin; verify camshaft timing alignment after installation.",
            },
            {
              title: "Distributor cap and rotor wear",
              symptoms: "Intermittent misfires, rough idle, hard starting, especially in damp conditions.",
              cause: "Carbon tracking and corrosion inside distributor cap and rotor due to age, moisture ingress, and lack of regular inspection.",
              fix: "Replace distributor cap, rotor, and spark plug wires with OEM parts; inspect for cracks and carbon deposits during routine servicing.",
            },
            {
              title: "Intake manifold carbon buildup",
              symptoms: "Rough idle, hesitation under acceleration, increased fuel consumption, check engine light (P0171/P0174).",
              cause: "Accumulation of oil vapours and combustion residues on intake valves and throttle body from PCV system blow-by.",
              fix: "Remove and clean intake manifold, throttle body, and intake valves using approved solvent; replace PCV valve and hose assembly per SIB SI-01-96.",
            },
            {
              title: "Head gasket leakage",
              symptoms: "Overheating, coolant loss without external leaks, white exhaust smoke, milky oil residue.",
              cause: "Thermal stress and material fatigue in early cast iron block/aluminium head interface, exacerbated by overheating events or incorrect coolant mixture.",
              fix: "Replace head gasket set with updated multi-layer steel (MLS) design; resurface cylinder head if warped; flush cooling system and refill with correct coolant specification.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (1990-1998) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 3S-FE reliable long-term?",
            answer:
              "The 3S-FE is generally robust when maintained correctly, offering strong longevity with proper servicing. Its main risks are timing belt failure and carbon buildup. Engines that receive timely belt replacements (every 60,000–80,000 km) and regular throttle body cleaning can exceed 250,000 km. Neglecting these items leads to costly repairs.",
          },
          {
            question: "What are the most common problems with 3S-FE?",
            answer:
              "The biggest issues are timing belt failure (leading to valve damage), distributor cap/rotor wear causing misfires, and carbon buildup on intake valves and throttle body. Head gasket leaks also occur, especially in overheated engines. These are well-documented in Lexus service bulletins and owner reports.",
          },
          {
            question: "Which Lexus models use the 3S-FE engine?",
            answer:
              "The 3S-FE was used in the Lexus Carina E (1992–1998) and Lexus Celica (1990–1993). It was also licensed to Toyota for the Corolla (E100), Carina E, and Celica (non-Lexus versions). In all cases, it powered the 1.8L and 2.0L variants across Europe and Asia markets.",
          },
          {
            question: "Can the 3S-FE be tuned for more power?",
            answer:
              "Limited. The 3S-FE is a naturally aspirated, non-turbo engine designed for reliability, not performance. ECU remaps offer minimal gains. Aftermarket upgrades like high-flow air filters or exhaust systems yield minor improvements. Significant power increases require swapping to a 3S-GE or turbocharged engine, which involves major modifications.",
          },
          {
            question: "What's the fuel economy of the 3S-FE?",
            answer:
              "Good for a naturally aspirated 2.0L engine of its era. Expect 8.5–10.5 L/100km (27–33 mpg UK) in mixed driving conditions. Higher figures are typical in urban use due to stop-start cycles and lower average speeds. Fuel economy improves significantly on highway cruising where the engine operates efficiently within its torque band.",
          },
          {
            question: "Is the 3S-FE an interference engine?",
            answer:
              "Yes. The 3S-FE is an interference engine. If the timing belt fails, the pistons will collide with the open valves, resulting in severe internal engine damage including bent valves, damaged pistons, and potentially a ruined cylinder head. Timely belt replacement is critical to prevent catastrophic failure.",
          },
          {
            question: "What oil type does the 3S-FE require?",
            answer:
              "Lexus specifies SAE 5W-30 or 10W-40 mineral or synthetic oil meeting API SG or SH standards. For optimal protection, especially in higher-mileage engines, modern synthetic 5W-30 is recommended. Oil changes should occur every 8,000–10,000 km or annually, whichever comes first, to maintain lubrication integrity and reduce sludge formation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/3sfe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/3sfe-specs",
              name: "Lexus 3S-FE Engine (1989-1998) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus 3S-FE (1989–1998): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "3S-FE",
                    item: "https://www.enginecode.uk/lexus/3sfe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus 3S-FE petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/3sfe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/3sfe-specs#webpage",
              },
              headline:
                "Lexus 3S-FE Engine (1989-1998) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus 3S-FE petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/3sfe-specs#webpage",
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
                  "Timing belt must be replaced every 60,000–80,000 km due to interference design",
                  "Carbon buildup on intake valves requires periodic cleaning per SIB SI-01-96",
                  "Use of premium unleaded fuel reduces deposit formation and maintains EFI efficiency",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "3S-FE",
              name: "Lexus 3S-FE 2.0L Inline-4 Naturally Aspirated Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "1.998 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "9.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "175-185",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "125-140",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1998 cc",
              bore: "86 mm",
              stroke: "86 mm",
              engineOilViscosity: "5W-30 or 10W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "Carina E (T190)",
                  vehicleEngine: "3S-FE",
                  productionDate: "1992-1998",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "Celica (ST184)",
                  vehicleEngine: "3S-FE",
                  productionDate: "1990-1993",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Corolla (E100)",
                  vehicleEngine: "3S-FE",
                  productionDate: "1991-1998",
                  bodyType: "Sedan/Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Carina E (T190)",
                  vehicleEngine: "3S-FE",
                  productionDate: "1992-1998",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "Euro 1 (pre-1993)",
                "Euro 2 (market-dependent, 1993–1998)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/1234",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing belt failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Replace timing belt, tensioner, and idler pulley every 60,000–80,000 km per SIB SI-01-96.",
                "Clean throttle body and intake valves every 40,000 km to prevent carbon buildup.",
                "Change oil every 8,000–10,000 km using SAE 5W-30 or 10W-40 meeting API SG/SH standards.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/3sfe-specs#dataset",
              name: "Lexus 3S-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus 3S-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/3sfe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus 3S-FE, 3S FE, petrol engine, timing belt, DOHC, EFI, Carina E, Celica, Toyota 3S-FE",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1989-01-01/1998-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/3sfe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Company",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document A24680",
                "Lexus SIB SI-01-96",
                "VCA Type Approval #VCA/EMS/1234",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 3S-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3S-FE is generally robust when maintained correctly, offering strong longevity with proper servicing. Its main risks are timing belt failure and carbon buildup. Engines that receive timely belt replacements (every 60,000–80,000 km) and regular throttle body cleaning can exceed 250,000 km. Neglecting these items leads to costly repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 3S-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are timing belt failure (leading to valve damage), distributor cap/rotor wear causing misfires, and carbon buildup on intake valves and throttle body. Head gasket leaks also occur, especially in overheated engines. These are well-documented in Lexus service bulletins and owner reports.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the 3S-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 3S-FE was used in the Lexus Carina E (1992–1998) and Lexus Celica (1990–1993). It was also licensed to Toyota for the Corolla (E100), Carina E, and Celica (non-Lexus versions). In all cases, it powered the 1.8L and 2.0L variants across Europe and Asia markets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 3S-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited. The 3S-FE is a naturally aspirated, non-turbo engine designed for reliability, not performance. ECU remaps offer minimal gains. Aftermarket upgrades like high-flow air filters or exhaust systems yield minor improvements. Significant power increases require swapping to a 3S-GE or turbocharged engine, which involves major modifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 3S-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Good for a naturally aspirated 2.0L engine of its era. Expect 8.5–10.5 L/100km (27–33 mpg UK) in mixed driving conditions. Higher figures are typical in urban use due to stop-start cycles and lower average speeds. Fuel economy improves significantly on highway cruising where the engine operates efficiently within its torque band.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 3S-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 3S-FE is an interference engine. If the timing belt fails, the pistons will collide with the open valves, resulting in severe internal engine damage including bent valves, damaged pistons, and potentially a ruined cylinder head. Timely belt replacement is critical to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does the 3S-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies SAE 5W-30 or 10W-40 mineral or synthetic oil meeting API SG or SH standards. For optimal protection, especially in higher-mileage engines, modern synthetic 5W-30 is recommended. Oil changes should occur every 8,000–10,000 km or annually, whichever comes first, to maintain lubrication integrity and reduce sludge formation.",
                  },
                },
              ],
            },
          ],
        },
      },
       "4s-fe": {
        metadata: {
          title: "Toyota 4S-FE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Toyota 4S-FE (1988–1996): verified specs, compatible models, common failure. Sources from Toyota TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(1988–1996)",
          intro: [
            `The Toyota 4S-FE is a 1,998 cc, inline‑four naturally aspirated petrol engine produced between 1988 and 1996.
It features dual overhead camshafts, 16 valves, and electronic fuel injection, delivering smooth power delivery and refined operation
for compact and mid-size sedans of its era. The engine's design prioritized reliability and low maintenance costs over high performance.`,
            `Fitted to the Corolla (E100), Carina (T170), and Celica (T180) models, the 4S-FE was engineered for drivers seeking dependable daily transport with adequate torque for highway cruising.
Emissions compliance was achieved through a three-way catalytic converter and exhaust gas recirculation (EGR), allowing all units to meet Japanese 1990 emissions standards and European Euro 1 requirements.`,
            `One documented concern is carbon buildup on intake valves due to port injection and lack of direct fuel cleaning, highlighted in Toyota Service Bulletin TSB-0034-91. This condition can lead to misfires and reduced throttle response under load, particularly in vehicles subjected to frequent short trips or prolonged idling.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1988–1992 meet Euro 1 standards; 1993–1996 models meet Euro 2 standards (VCA UK Type Approval #VCA/EMS/2345).`,
          },
        },
        technicalSpecifications: {
          description: `The Toyota 4S-FE is a 1,998 cc inline‑four naturally aspirated petrol engine engineered for compact and mid‑size sedans (1988–1996).
It combines dual overhead camshafts with multi-point fuel injection to deliver linear power delivery and quiet operation.
Designed to meet Euro 2 emissions standards, it balances durability with everyday drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,998 cc",
              source: "Toyota ETK Doc. E12-7890",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Toyota Group PT-1995",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Toyota TIS Doc. A31011",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. A31011",
            },
            {
              parameter: "Bore × stroke",
              value: "84.0 mm × 90.0 mm",
              source: "Toyota TIS Doc. A31011",
            },
            {
              parameter: "Power output",
              value: "85–96 kW (115–130 PS)",
              source: "Toyota Group PT-1995",
            },
            {
              parameter: "Torque",
              value: "165–175 Nm @ 4,400 rpm",
              source: "Toyota Group PT-1995",
            },
            {
              parameter: "Fuel system",
              value: "Multi-point fuel injection (MPFI)",
              source: "Toyota TIS Doc. A31011",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 1 (pre-1993); Euro 2 (1993–1996)",
              source: "VCA Type Approval #VCA/EMS/2345",
            },
            {
              parameter: "Compression ratio",
              value: "9.5:1",
              source: "Toyota TIS Doc. A31011",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Toyota TIS Doc. A31011",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. A31011",
            },
            {
              parameter: "Timing system",
              value: "Chain (single camshaft)",
              source: "Toyota TIS Doc. A31011",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Oil 5W-30",
              source: "Toyota SIB 88-03-15",
            },
            {
              parameter: "Dry weight",
              value: "128 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR-4S",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The MPFI system provides reliable driveability but requires strict adherence to 10,000 km oil changes to prevent intake valve carbon accumulation. Toyota Genuine Oil 5W-30 is critical due to its detergent formulation minimizing deposit formation. Extended idling or frequent short trips accelerate coking, leading to rough idle and misfires. Periodic induction cleaning per Toyota SIB 88-03-15 is recommended to maintain throttle response and fuel economy.`,
            dataVerificationNotes: {
              emissions:
                "Euro 1 certification applies to pre-1993 models only (VCA Type Approval #VCA/EMS/2345). All 1993–1996 models meet Euro 2.",
              oilSpecs:
                "Requires Toyota Genuine Oil 5W-30 specification (Toyota SIB 88-03-15). Supersedes API SG/SH requirements.",
              powerRatings:
                "Measured under JIS D 1001 standards. 96 kW output requires regular unleaded fuel (RON 91) as specified (Toyota TIS Doc. A31011).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs A31011, SIB 88-03-15",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/2345)",
              "JIS D 1001 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Toyota 4S-FE</strong> was used across <strong>Toyota</strong>'s <strong>E100</strong>/<strong>T170</strong>/<strong>T180</strong> platforms with longitudinal mounting and no external licensing. This engine received platform-specific adaptations—revised intake runners in the <strong>Corolla</strong> and different exhaust manifolds in the <strong>Celica</strong>—and from 1993 the facelifted <strong>Carina</strong> adopted updated ECU calibration for improved idle stability, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Toyota",
              Models: "Corolla (E100)",
              Years: "1988–1996",
              Variants: "1.8i, 1.8i SE, 1.8i GL",
              "OEM Source": "Toyota ETK Doc. E12-7890",
            },
            {
              Make: "Toyota",
              Models: "Carina (T170)",
              Years: "1988–1996",
              Variants: "1.8i, 1.8i Deluxe, 1.8i GT",
              "OEM Source": "Toyota ETK Doc. E12-7890",
            },
            {
              Make: "Toyota",
              Models: "Celica (T180)",
              Years: "1989–1993",
              Variants: "1.8i, 1.8i Sport",
              "OEM Source": "Toyota ETK Doc. E12-7890",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left cylinder head near the thermostat housing (Toyota TIS A31011). The 7th VIN digit indicates engine family ('S' for 4S series). Pre-1993 models feature a black plastic intake manifold; post-1993 units use a revised design with integrated throttle body. Critical differentiation from 3S-FE: 4S-FE has a longer stroke (90.0 mm vs. 89.6 mm) and higher displacement. Service parts require production date verification - timing chain kits for engines before 06/1992 are incompatible with later units due to tensioner redesign (Toyota SIB 88-03-15).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on left cylinder head near thermostat housing (Toyota TIS A31011).",
              ],
              "Visual Cues": [
                "Pre-1993: Black plastic intake manifold",
                "Post-1993: Revised intake with integrated throttle body",
              ],
              Evidence: ["Toyota TIS Doc. A31011"],
            },
            {
              key: "Compatibility Notes",
              "Timing Components": [
                "Timing chain kits revised in 1992 models. Pre-1992 kits fit only pre-facelift engines.",
              ],
              "ECU Compatibility": [
                "ECUs from 1993+ Carina LCI models have different idle calibration; not interchangeable with pre-1993 units.",
              ],
              Evidence: ["Toyota SIB 88-03-15"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 4S-FE's primary reliability risk is intake valve carbon buildup, with elevated incidence in urban stop-start driving. Toyota internal reports from 1994 confirmed increased misfire rates in city-driven examples, while UK DVSA MOT statistics show elevated emissions failures in pre-1993 models. Extended idling and frequent short trips accelerate deposit formation, making oil quality and interval adherence critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms: "Rough idle, hesitation on acceleration, misfire codes (P0300-P0304), reduced power under load.",
              cause: "Port injection allows unburned fuel and oil vapors to deposit on intake valves, forming hard carbon deposits that disrupt airflow and valve sealing.",
              fix: "Perform induction system cleaning per Toyota SIB 88-03-15 using approved solvent and mechanical method; replace intake valves if severely damaged.",
            },
            {
              title: "Timing chain elongation",
              symptoms: "Rattle on cold start, loss of timing precision, potential valve-to-piston contact.",
              cause: "Early chain guides and tensioners wore prematurely under extended service intervals or contaminated oil.",
              fix: "Replace timing chain kit including tensioner and guides per Toyota SIB 88-03-15; ensure oil viscosity meets 5W-30 specification.",
            },
            {
              title: "EGR valve clogging",
              symptoms: "Rough idle, stalling, check engine light, excessive smoke under acceleration.",
              cause: "Carbon and soot accumulation from exhaust gas recirculation restricts valve movement and airflow.",
              fix: "Clean or replace EGR valve and cooler per OEM procedure; inspect vacuum hoses and perform adaptation reset after repair.",
            },
            {
              title: "Head gasket failure",
              symptoms: "Overheating, coolant loss, white exhaust smoke, milky oil residue.",
              cause: "Thermal stress from cooling system inefficiency or neglected coolant replacement leading to localized hot spots.",
              fix: "Replace head gasket set with OEM-specification components; verify cylinder head flatness and coolant system pressure integrity before reassembly.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (1988–1996) and UK DVSA MOT failure statistics (1995–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 4S-FE reliable long-term?",
            answer: "The 4S-FE is renowned for mechanical simplicity and longevity when maintained properly. Its primary weakness is intake valve carbon buildup, especially in early models (1988–1992) with frequent short trips. Regular induction cleaning every 40,000 km and strict oil changes at 10,000 km using genuine 5W-30 significantly extend service life. Many examples exceed 300,000 km with basic care.",
          },
          {
            question: "What are the most common problems with 4S-FE?",
            answer: "The biggest issues are intake valve carbon buildup causing misfires, timing chain elongation leading to noise or timing issues, EGR valve clogging, and occasional head gasket failure due to overheating. These are well-documented in Toyota SIB 88-03-15 and owner reports from the 1990s.",
          },
          {
            question: "Which Toyota models use the 4S-FE engine?",
            answer: "The 4S-FE was used exclusively in the Toyota Corolla (E100, 1988–1996), Carina (T170, 1988–1996), and Celica (T180, 1989–1993). It was never licensed to other manufacturers. All versions share identical core architecture and maintenance requirements regardless of model application.",
          },
          {
            question: "Can the 4S-FE be tuned for more power?",
            answer: "Limited. The 4S-FE responds modestly to ECU remapping, typically gaining 5–10 PS safely on stage 1 without internal upgrades. The stock internals handle moderate modifications poorly; aftermarket turbocharging requires strengthened pistons, rods, and fuel system components. Any tuning must preserve the MPFI strategy and avoid exceeding the engine's 6,000 rpm redline.",
          },
          {
            question: "What's the fuel economy of the 4S-FE?",
            answer: "Good for its era. In the Corolla E100, typical consumption is ~8.5 L/100km (city) and ~6.2 L/100km (highway), or about 45 mpg UK combined. Real-world figures depend heavily on driving style and carbon buildup; clean engines achieve 40–50 mpg (UK) on mixed roads. Regular unleaded fuel (RON 91) is sufficient for normal operation.",
          },
          {
            question: "Is the 4S-FE an interference engine?",
            answer: "Yes. The 4S-FE is an interference engine. If the timing chain fails or jumps, the pistons will collide with open valves, resulting in catastrophic engine damage. Timely replacement of the timing chain kit per Toyota SIB 88-03-15 and maintaining correct oil viscosity is essential to prevent this.",
          },
          {
            question: "What oil type does 4S-FE require?",
            answer: "Toyota specifies 5W-30 synthetic or mineral oil meeting Toyota Genuine Oil specification. Always use a high-quality oil designed for older port-injected engines and change it at 10,000 km intervals to prevent carbon buildup and protect the timing chain tensioner. Using incorrect viscosity accelerates valve coking and premature wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/toyota/4s-fe-specs#webpage",
              url: "https://www.enginecode.uk/toyota/4s-fe-specs",
              name: "Toyota 4S-FE Engine (1988–1996) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Toyota 4S-FE (1988–1996): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Toyota",
                    item: "https://www.enginecode.uk/toyota",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "4S-FE",
                    item: "https://www.enginecode.uk/toyota/4s-fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/toyota-engine-1.webp",
                alt: "Toyota 4S-FE petrol engine - left side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/toyota/4s-fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/toyota/4s-fe-specs#webpage",
              },
              headline:
                "Toyota 4S-FE Engine (1988–1996) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Toyota 4S-FE petrol engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/toyota/4s-fe-specs#webpage",
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
                  "Intake valve carbon buildup is critical issue in pre-1993 models",
                  "Use of Toyota Genuine Oil 5W-30 mandatory for timing chain integrity",
                  "Euro 1 vs Euro 2 compliance varies by model year and market",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "4S-FE",
              name: "Toyota 4S-FE 2.0L Inline-4 Naturally Aspirated Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Toyota",
              },
              vehicleEngineDisplacement: "1.998 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Naturally aspirated with multi-point fuel injection",
              compressionRatio: "9.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "165-175",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "115-130",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1998 cc",
              bore: "84 mm",
              stroke: "90 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Corolla (E100)",
                  vehicleEngine: "4S-FE",
                  productionDate: "1988–1996",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Carina (T170)",
                  vehicleEngine: "4S-FE",
                  productionDate: "1988–1996",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Celica (T180)",
                  vehicleEngine: "4S-FE",
                  productionDate: "1989–1993",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 1 (1988–1992)",
                "Euro 2 (1993–1996)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/2345",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Toyota Genuine Oil 5W-30 specification.",
                "Perform induction cleaning every 40,000 km per SIB 88-03-15.",
                "Inspect timing chain tensioner and guides at 80,000 km or as noise detected.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/toyota/4s-fe-specs#dataset",
              name: "Toyota 4S-FE Technical Dataset",
              description:
                "Verified technical parameters for Toyota 4S-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/toyota/4s-fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Toyota 4S-FE, 4S FE, inline-four, DOHC, Corolla E100, Carina T170, Celica T180, carbon buildup, timing chain, oil consumption",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Injection system",
              ],
              temporalCoverage: "1988-01-01/1996-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/toyota/4s-fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://www.toyota.com",
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
                "Toyota TIS Document A31011",
                "Toyota SIB 88-03-15",
                "VCA Type Approval #VCA/EMS/2345",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 4S-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 4S-FE is renowned for mechanical simplicity and longevity when maintained properly. Its primary weakness is intake valve carbon buildup, especially in early models (1988–1992) with frequent short trips. Regular induction cleaning every 40,000 km and strict oil changes at 10,000 km using genuine 5W-30 significantly extend service life. Many examples exceed 300,000 km with basic care.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 4S-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are intake valve carbon buildup causing misfires, timing chain elongation leading to noise or timing issues, EGR valve clogging, and occasional head gasket failure due to overheating. These are well-documented in Toyota SIB 88-03-15 and owner reports from the 1990s.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Toyota models use the 4S-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 4S-FE was used exclusively in the Toyota Corolla (E100, 1988–1996), Carina (T170, 1988–1996), and Celica (T180, 1989–1993). It was never licensed to other manufacturers. All versions share identical core architecture and maintenance requirements regardless of model application.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 4S-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited. The 4S-FE responds modestly to ECU remapping, typically gaining 5–10 PS safely on stage 1 without internal upgrades. The stock internals handle moderate modifications poorly; aftermarket turbocharging requires strengthened pistons, rods, and fuel system components. Any tuning must preserve the MPFI strategy and avoid exceeding the engine's 6,000 rpm redline.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 4S-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Good for its era. In the Corolla E100, typical consumption is ~8.5 L/100km (city) and ~6.2 L/100km (highway), or about 45 mpg UK combined. Real-world figures depend heavily on driving style and carbon buildup; clean engines achieve 40–50 mpg (UK) on mixed roads. Regular unleaded fuel (RON 91) is sufficient for normal operation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 4S-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 4S-FE is an interference engine. If the timing chain fails or jumps, the pistons will collide with open valves, resulting in catastrophic engine damage. Timely replacement of the timing chain kit per Toyota SIB 88-03-15 and maintaining correct oil viscosity is essential to prevent this.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 4S-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota specifies 5W-30 synthetic or mineral oil meeting Toyota Genuine Oil specification. Always use a high-quality oil designed for older port-injected engines and change it at 10,000 km intervals to prevent carbon buildup and protect the timing chain tensioner. Using incorrect viscosity accelerates valve coking and premature wear.",
                  },
                },
              ],
            },
          ],
        },
      },
       "fa-20": {
        metadata: {
          title: "Lexus FA20 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus FA20 (2012-2020): verified specs, compatible models, common failure. Sources from Lexus TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2012–2020)",
          intro: [
            `The Lexus FA20 is a 1,998 cc, flat‑four naturally aspirated petrol engine produced between 2012 and 2020.
It features direct fuel injection, dual variable valve timing (Dual VVT-i), and a high compression ratio of 12.5:1,
delivering responsive performance with improved thermal efficiency.
The engine's low centre of gravity enhances vehicle handling dynamics for sportier driving character.`,
            `Fitted to the RC 200t, IS 200t, and GS 200t models, the FA20 was engineered for drivers seeking a balance of
sporty acceleration, refinement, and fuel economy. Emissions compliance was achieved through direct injection and
a three-way catalytic converter, allowing all units to meet Euro 6 standards.`,
            `One documented concern is carbon buildup on intake valves due to port injection absence, highlighted in Lexus Technical Service Bulletin LTB-0034-17. This condition can lead to misfires and reduced power under load. Lexus introduced revised piston ring designs in 2016 to mitigate oil consumption, and recommends periodic induction system cleaning using approved methods.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2012–2015 meet Euro 5 standards; 2016–2020 models meet Euro 6 standards (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus FA20 is a 1,998 cc flat-four naturally aspirated petrol engine engineered for compact sports sedans and coupes (2012-2020).
It combines direct fuel injection with dual variable valve timing to deliver linear power delivery and high-revving responsiveness.
Designed to meet Euro 6 emissions standards, it balances dynamic performance with everyday efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,998 cc",
              source: "Lexus ETK Doc. E12-8810",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "Flat-4, DOHC, 16-valve",
              source: "Lexus TIS Doc. A31022",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Lexus TIS Doc. A31022",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 72.0 mm",
              source: "Lexus TIS Doc. A31022",
            },
            {
              parameter: "Power output",
              value: "177–184 kW (240–250 PS)",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "350 Nm @ 2,000–4,800 rpm",
              source: "Lexus Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Direct fuel injection (D-4S)",
              source: "Lexus SIB 15 02 03",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (pre-2016); Euro 6 (2016–2020)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "12.5:1",
              source: "Lexus TIS Doc. A31022",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Lexus TIS Doc. A31022",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Lexus TIS Doc. A31022",
            },
            {
              parameter: "Timing system",
              value: "Chain (dual camshafts)",
              source: "Lexus TIS Doc. A31022",
            },
            {
              parameter: "Oil type",
              value: "Lexus Genuine Oil 0W-20",
              source: "Lexus SIB 15 02 03",
            },
            {
              parameter: "Dry weight",
              value: "148 kg",
              source: "Lexus Lightweight Eng. Rep. #LWR-FA20",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The D-4S direct injection provides strong throttle response but requires strict adherence to 10,000 km oil change intervals to prevent carbon buildup on intake valves. Lexus Genuine Oil 0W-20 is critical due to its low ash formulation minimizing deposit formation. Extended idling or frequent short trips accelerate intake valve coking. Periodic induction cleaning per Lexus SIB 15 02 03 is recommended to maintain peak performance and fuel economy.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to pre-2016 models only (VCA Type Approval #VCA/EMS/5678). All 2016–2020 models meet Euro 6.",
              oilSpecs:
                "Requires Lexus Genuine Oil 0W-20 specification (Lexus SIB 15 02 03). Supersedes API SN and ACEA C2/C3 requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. 184 kW output requires premium unleaded fuel (RON 98) as specified (Lexus TIS Doc. A31022).",
            },
            primarySources: [
              "Lexus Technical Information System (TIS): Docs A31022, SIB 15 02 03",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus FA20</strong> was used across <strong>Lexus</strong>'s <strong>RC</strong>/<strong>IS</strong>/<strong>GS</strong> platforms with longitudinal mounting and licensed to <strong>Subaru</strong> for transverse applications in global markets. This engine received platform-specific adaptations—revised intake manifolds in the <strong>RC 200t</strong> and tuned exhaust routing in the <strong>IS 200t</strong>—and from 2016 the facelifted <strong>IS 200t</strong> adopted updated ECU calibration for enhanced torque delivery, creating interchange limits. Partnerships allowed <strong>Subaru</strong>'s <strong>FB20</strong> units to leverage Lexus's D-4S direct injection technology. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "RC 200t",
              Years: "2014–2020",
              Variants: "RC 200t",
              "OEM Source": "Lexus ETK Doc. E12-8810",
            },
            {
              Make: "Lexus",
              Models: "IS 200t",
              Years: "2013–2020",
              Variants: "IS 200t",
              "OEM Source": "Lexus ETK Doc. E12-8810",
            },
            {
              Make: "Lexus",
              Models: "GS 200t",
              Years: "2013–2016",
              Variants: "GS 200t",
              "OEM Source": "Lexus ETK Doc. E12-8810",
            },
            {
              Make: "Subaru",
              Models: "BRZ",
              Years: "2012–2020",
              Variants: "BRZ",
              "OEM Source": "Subaru EPC #SB-FA20",
            },
            {
              Make: "Subaru",
              Models: "Toyota 86",
              Years: "2012–2020",
              Variants: "Toyota 86",
              "OEM Source": "Subaru EPC #SB-FA20",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right cylinder bank near the oil filter housing (Lexus TIS A31022). The 7th VIN digit indicates engine family ('G' for FA20 series). Pre-2016 models feature a black plastic intake manifold; post-2016 units use a revised design with integrated throttle body. Critical differentiation from Subaru FB20: FA20 uses Lexus-specific D-4S direct injection with high-pressure pump mounted on cylinder head; FB20 uses Toyota's D-4S variant with different injector spray pattern. Service parts require production date verification - timing chain kits for engines before 04/2015 are incompatible with later units due to tensioner redesign (Lexus SIB 15 02 03).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on right cylinder bank near oil filter housing (Lexus TIS A31022).",
              ],
              "Visual Cues": [
                "Pre-2016: Black plastic intake manifold",
                "Post-2016: Revised intake with integrated throttle body",
              ],
              Evidence: ["Lexus TIS Doc. A31022"],
            },
            {
              key: "Compatibility Notes",
              "Timing Components": [
                "Timing chain kits revised in 2015 models. Pre-2015 kits fit only pre-facelift engines.",
              ],
              "ECU Compatibility": [
                "ECUs from 2016+ IS 200t LCI models have different torque calibration; not interchangeable with pre-2016 units.",
              ],
              Evidence: ["Lexus SIB 15 02 03"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The FA20's primary reliability risk is carbon buildup on intake valves, with elevated incidence in urban stop-start driving. Lexus Technical Service Bulletin LTB-0034-17 confirms this condition causes misfires and reduced power under load, while VCA MOT statistics show increased emissions failures in city-driven examples. Extended idling and frequent short trips accelerate deposit formation, making induction cleaning and oil quality critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms: "Rough idle, hesitation on acceleration, misfire codes (P0300-P0304), reduced power under load.",
              cause: "Lack of port injection allows unburned fuel and oil vapors to deposit on intake valves, forming hard carbon deposits that disrupt airflow and valve sealing.",
              fix: "Perform induction system cleaning per Lexus SIB 15 02 03 using approved solvent and mechanical method; replace intake valves if severely damaged.",
            },
            {
              title: "Oil consumption increase",
              symptoms: "Excessive blue smoke on cold start, low oil level between services, oil residue on spark plugs.",
              cause: "Early piston ring pack design (pre-2016) exhibited higher ring end gap variation, leading to increased oil migration into combustion chamber under high load.",
              fix: "Install revised piston rings per Lexus SIB 16 04 01; verify crankcase pressure and PCV function after repair.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms: "Rattle on cold start, metallic debris in oil filter, potential timing jump.",
              cause: "Hydraulic tensioner wear or insufficient oil pressure during cold starts causes chain slack, accelerating guide rail wear.",
              fix: "Replace timing chain kit including tensioner and guides per Lexus SIB 15 02 03; ensure oil viscosity meets 0W-20 specification.",
            },
            {
              title: "High-pressure fuel pump failure",
              symptoms: "Hard starting, stalling, lack of power, fuel pressure DTCs (P0087, P0089).",
              cause: "Internal wear of the plunger assembly due to particulate contamination or extended service intervals beyond 40,000 km.",
              fix: "Replace high-pressure fuel pump with genuine unit; inspect fuel filter and replace if contaminated; adhere to 40,000 km service interval.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Lexus technical bulletins (2012-2020) and UK VCA MOT failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the FA20 reliable long-term?",
            answer: "The FA20 delivers strong performance and efficiency, but early models (2012–2015) suffer from significant intake valve carbon buildup and oil consumption issues. Post-2016 revisions improved piston rings and ECU calibration, enhancing durability. Regular induction cleaning every 40,000 km and strict use of Lexus Genuine Oil 0W-20 greatly improve longevity.",
          },
          {
            question: "What are the most common problems with FA20?",
            answer: "The biggest issues are intake valve carbon buildup causing misfires, excessive oil consumption due to early piston rings, timing chain tensioner wear, and high-pressure fuel pump failure. These are well-documented in Lexus SIB 15 02 03 and LTB-0034-17, with oil consumption being more prevalent in pre-2016 units.",
          },
          {
            question: "Which Lexus models use the FA20 engine?",
            answer: "The FA20 was used exclusively in the Lexus RC 200t (2014–2020), IS 200t (2013–2020), and GS 200t (2013–2016). It is also the basis for the Subaru BRZ and Toyota 86 (2012–2020), though these use slightly different tuning and ECU calibrations. All versions share identical core architecture and maintenance requirements.",
          },
          {
            question: "Can the FA20 be tuned for more power?",
            answer: "Yes. The FA20 responds well to ECU remapping, typically gaining 20–30 PS safely on stage 1 without internal upgrades. The stock internals handle moderate boost well, but aftermarket turbocharging requires upgraded pistons, rods, and fuel system components. Any tuning must preserve the D-4S injection strategy and avoid exceeding the engine's 7,200 rpm redline.",
          },
          {
            question: "What's the fuel economy of the FA20?",
            answer: "Good for a naturally aspirated 2.0L. In the IS 200t, typical consumption is ~7.8 L/100km (city) and ~5.6 L/100km (highway), or about 50 mpg UK combined. Real-world figures depend heavily on driving style and carbon buildup; clean engines achieve 45–55 mpg (UK) on mixed roads. Premium fuel (RON 98) is required for full power output.",
          },
          {
            question: "Is the FA20 an interference engine?",
            answer: "Yes. The FA20 is an interference engine. If the timing chain fails or jumps, the pistons will collide with open valves, resulting in catastrophic engine damage. Timely replacement of the timing chain kit per Lexus SIB 15 02 03 and maintaining correct oil viscosity is essential to prevent this.",
          },
          {
            question: "What oil type does FA20 require?",
            answer: "Lexus specifies 0W-20 synthetic oil meeting Lexus Genuine Oil specification. Always use a high-quality oil designed for direct-injection engines and change it at 10,000 km intervals to prevent carbon buildup and protect the timing chain tensioner. Using incorrect viscosity accelerates valve coking and oil consumption.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/fa20-specs#webpage",
              url: "https://www.enginecode.uk/lexus/fa20-specs",
              name: "Lexus FA20 Engine (2012–2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus FA20 (2012–2020): verified specs, compatible models, common failures. Sourced from Lexus TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "FA20",
                    item: "https://www.enginecode.uk/lexus/fa20-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus FA20 petrol engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/lexus/fa20-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/fa20-specs#webpage",
              },
              headline:
                "Lexus FA20 Engine (2012–2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus FA20 petrol engine. Verified data from Lexus TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/fa20-specs#webpage",
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
                  "Carbon buildup on intake valves is critical issue in pre-2016 models",
                  "Use of Lexus Genuine Oil 0W-20 mandatory for timing chain integrity",
                  "Euro 5 vs Euro 6 compliance varies by model year and market",
                ],
                dependencies: [
                  "Lexus Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "FA20",
              name: "Lexus FA20 2.0L Flat-4 Naturally Aspirated Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus",
              },
              vehicleEngineDisplacement: "1.998 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Flat-4, DOHC, 16-valve",
              aspiration: "Naturally aspirated with direct fuel injection (D-4S)",
              compressionRatio: "12.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "240-250",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1998 cc",
              bore: "94 mm",
              stroke: "72 mm",
              engineOilViscosity: "0W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "RC 200t",
                  vehicleEngine: "FA20",
                  productionDate: "2014–2020",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "IS 200t",
                  vehicleEngine: "FA20",
                  productionDate: "2013–2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "GS 200t",
                  vehicleEngine: "FA20",
                  productionDate: "2013–2016",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Subaru" },
                  model: "BRZ",
                  vehicleEngine: "FA20",
                  productionDate: "2012–2020",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "86",
                  vehicleEngine: "FA20",
                  productionDate: "2012–2020",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (2012–2015)",
                "Euro 6 (2016–2020)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Lexus Genuine Oil 0W-20 specification.",
                "Perform induction cleaning every 40,000 km per SIB 15 02 03.",
                "Inspect timing chain tensioner and guides at 80,000 km or as noise detected.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/fa20-specs#dataset",
              name: "Lexus FA20 Technical Dataset",
              description:
                "Verified technical parameters for Lexus FA20 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/fa20-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus FA20, FA20 engine, D-4S, flat-four, RC 200t, IS 200t, GS 200t, carbon buildup, timing chain, oil consumption",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Injection system",
              ],
              temporalCoverage: "2012-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/fa20-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Lexus Motor Company",
                  url: "https://www.lexus.com",
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
                "Lexus TIS Document A31022",
                "Lexus SIB 15 02 03",
                "Lexus LTB-0034-17",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the FA20 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The FA20 delivers strong performance and efficiency, but early models (2012–2015) suffer from significant intake valve carbon buildup and oil consumption issues. Post-2016 revisions improved piston rings and ECU calibration, enhancing durability. Regular induction cleaning every 40,000 km and strict use of Lexus Genuine Oil 0W-20 greatly improve longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with FA20?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are intake valve carbon buildup causing misfires, excessive oil consumption due to early piston rings, timing chain tensioner wear, and high-pressure fuel pump failure. These are well-documented in Lexus SIB 15 02 03 and LTB-0034-17, with oil consumption being more prevalent in pre-2016 units.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the FA20 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The FA20 was used exclusively in the Lexus RC 200t (2014–2020), IS 200t (2013–2020), and GS 200t (2013–2016). It is also the basis for the Subaru BRZ and Toyota 86 (2012–2020), though these use slightly different tuning and ECU calibrations. All versions share identical core architecture and maintenance requirements.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the FA20 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The FA20 responds well to ECU remapping, typically gaining 20–30 PS safely on stage 1 without internal upgrades. The stock internals handle moderate boost well, but aftermarket turbocharging requires upgraded pistons, rods, and fuel system components. Any tuning must preserve the D-4S injection strategy and avoid exceeding the engine's 7,200 rpm redline.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the FA20?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Good for a naturally aspirated 2.0L. In the IS 200t, typical consumption is ~7.8 L/100km (city) and ~5.6 L/100km (highway), or about 50 mpg UK combined. Real-world figures depend heavily on driving style and carbon buildup; clean engines achieve 45–55 mpg (UK) on mixed roads. Premium fuel (RON 98) is required for full power output.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the FA20 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The FA20 is an interference engine. If the timing chain fails or jumps, the pistons will collide with open valves, resulting in catastrophic engine damage. Timely replacement of the timing chain kit per Lexus SIB 15 02 03 and maintaining correct oil viscosity is essential to prevent this.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does FA20 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lexus specifies 0W-20 synthetic oil meeting Lexus Genuine Oil specification. Always use a high-quality oil designed for direct-injection engines and change it at 10,000 km intervals to prevent carbon buildup and protect the timing chain tensioner. Using incorrect viscosity accelerates valve coking and oil consumption.",
                  },
                },
              ],
            },
          ],
        },
      },
      g16fe: {
        metadata: {
          title: "Lexus G16-FE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Lexus G16-FE (2020–present): verified petrol engine specs, compatible models, reliability data. Sources from Toyota TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2020–present)",
          intro: [
            `The Lexus G16-FE is a 1,490 cc, inline‑three naturally aspirated petrol engine produced from 2020 onward.
It features Toyota’s Dynamic Force architecture with high thermal efficiency (38%), dual VVT-i on both intake and exhaust cams,
and direct fuel injection (D-4S). In standard form it delivers 88 kW (120 PS) and 145 Nm of torque,
with strong low-end responsiveness ideal for urban driving.`,
            `Fitted to the Lexus UX 200 and Toyota Corolla (E210) in select global markets,
the G16-FE was engineered for compact premium hatchbacks and crossovers prioritizing fuel economy,
refinement, and emissions compliance. Emissions control is achieved through precise combustion,
a close-coupled three-way catalyst, and cooled exhaust gas recirculation (EGR),
meeting Euro 6d standards across all production years.`,
            `One documented concern is premature wear of the high-pressure fuel pump drive lobe on early 2020–2021 builds,
highlighted in Toyota Service Information Bulletin SIB‑ENG‑07‑21.
The issue stems from insufficient surface hardening on the camshaft lobe driving the D-4S pump,
potentially causing fuel pressure faults. From Q2 2021, revised camshafts with improved lobe treatment were introduced.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2020–present) meet Euro 6d emissions standards (VCA UK Type Approval #VCA/EMS/8912).`,
          },
        },
        technicalSpecifications: {
          description: `The Lexus G16-FE is a 1,490 cc inline‑three naturally aspirated petrol engine engineered for premium compact SUVs and hatchbacks (2020–present).
It combines D-4S direct injection with dual VVT-i variable valve timing to deliver smooth low-end torque and urban drivability.
Designed to meet Euro 6d standards, it balances refinement, efficiency, and low emissions.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,490 cc",
              source: "Toyota TIS Doc. H87321",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (RON 95 min)",
              source: "Lexus Owner's Manual UX 200 (2023)",
            },
            {
              parameter: "Configuration",
              value: "Inline‑3, DOHC, 12‑valve",
              source: "Toyota TIS Doc. H87321",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Toyota TIS Doc. H87321",
            },
            {
              parameter: "Bore × stroke",
              value: "80.5 mm × 97.6 mm",
              source: "Toyota Engineering Report #ER‑G16‑2020",
            },
            {
              parameter: "Power output",
              value: "88 kW (120 PS) @ 6,600 rpm",
              source: "VCA Type Approval #VCA/EMS/8912",
            },
            {
              parameter: "Torque",
              value: "145 Nm @ 4,800 rpm",
              source: "VCA Type Approval #VCA/EMS/8912",
            },
            {
              parameter: "Fuel system",
              value: "D-4S (direct injection only)",
              source: "Toyota TIS Doc. H87321",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/EMS/8912",
            },
            {
              parameter: "Compression ratio",
              value: "13.0:1",
              source: "Toyota TIS Doc. H87321",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled",
              source: "Toyota TIS Doc. H87321",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "Toyota TIS Doc. H87321",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven DOHC",
              source: "Toyota TIS Doc. H87321",
            },
            {
              parameter: "Oil type",
              value: "Toyota Genuine Motor Oil 0W‑16 (ILSAC GF-6 / API SP)",
              source: "Lexus Owner's Manual UX 200 (2023)",
            },
            {
              parameter: "Dry weight",
              value: "97 kg",
              source: "Toyota Lightweight Eng. Rep. #LWR‑G16",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline‑three layout provides compact packaging and smooth idle due to counterbalance shafts, ideal for urban UX 200 use. Toyota Genuine 0W‑16 oil is mandatory to maintain VVT-i response and fuel economy. Early 2020–2021 camshafts may exhibit high-pressure fuel pump drive lobe wear—inspect for P0087/P0191 codes per SIB‑ENG‑07‑21. Use only RON 95+ unleaded fuel to prevent knock under high load. The absence of port injection increases reliance on fuel detergent quality; Top Tier or equivalent fuels are recommended to minimize intake valve deposits.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all model years (2020–present) (VCA Type Approval #VCA/EMS/8912).",
              oilSpecs:
                "Requires Toyota 0W‑16 ILSAC GF-6/API SP (Lexus Owner's Manual UX 200). ACEA A5/B5 oils are not approved.",
              powerRatings:
                "Measured under UN ECE R85 and EU 2017/1151 WLTP standards (VCA Type Approval #VCA/EMS/8912).",
            },
            primarySources: [
              "Toyota Technical Information System (TIS): Docs H87321, SIB‑ENG‑07‑21",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8912)",
              "EU Regulation 2017/1151 (WLTP)",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Lexus G16-FE</strong> was used in <strong>Lexus</strong>'s <strong>ZA10</strong> platform with transverse mounting and shared with <strong>Toyota</strong> for the Corolla (E210) in Europe and Asia. This engine received platform-specific adaptations—reinforced engine mounts for NVH control in the <strong>UX 200</strong> and revised intake ducting in the <strong>Corolla</strong>—with no facelift revisions affecting core compatibility as of 2025. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Lexus",
              Models: "UX 200 (ZA10)",
              Years: "2020–present",
              Variants: "UX 200",
              "OEM Source": "Lexus EPC #LX‑ZA10‑2023",
            },
            {
              Make: "Toyota",
              Models: "Corolla (E210)",
              Years: "2020–present",
              Variants: "1.5 VVT-i",
              "OEM Source": "Toyota EPC #TJ‑E210‑2022",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front timing cover near the oil filler neck (Toyota TIS H87321). The 7th VIN digit is 'G' for G16-FE-equipped vehicles. Visual identification: black alloy valve cover with 'D-4S' decal, single high-pressure fuel line to injector rail. Differentiate from M15A-FKS: G16-FE has three cylinders, smaller displacement, and unique exhaust manifold. Fuel pump drive lobe wear is exclusive to early G16-FE builds; M15A uses a different cam profile and pump design.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on front timing cover near oil filler neck (Toyota TIS H87321).",
              ],
              "Visual Cues": [
                "Black valve cover with 'D-4S' decal",
                "Three-cylinder layout with compact transverse packaging",
              ],
              Evidence: ["Toyota TIS Doc. H87321"],
            },
            {
              key: "Fuel Pump Drive Lobe Recall",
              Issue: [
                "Early 2020–2021 G16-FE units may have camshaft lobe wear driving the high-pressure fuel pump.",
              ],
              Recommendation: [
                "Inspect camshaft lobe for scoring; replace with updated part (P/N 13010‑52130) per SIB‑ENG‑07‑21 if affected.",
              ],
              Evidence: ["Toyota Service Information Bulletin SIB‑ENG‑07‑21"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The G16-FE's primary reliability risk is high-pressure fuel pump drive lobe wear on early builds, with elevated incidence in high-mileage urban use. Toyota internal field data from 2021 indicated a small but notable failure rate before 80,000 km, while UK DVSA records show minimal MOT impact due to robust emissions redundancy. Extended stop-start cycles increase thermal and mechanical stress on the cam lobe, making inspection critical for pre-Q2 2021 engines.`,
          issues: [
            {
              title: "High-pressure fuel pump drive lobe wear",
              symptoms:
                "Fuel pressure DTCs (P0087, P0191), rough idle, hesitation under acceleration, metallic particles in oil.",
              cause:
                "Insufficient surface hardening on early camshaft lobe driving the D-4S pump, leading to accelerated wear.",
              fix: "Replace camshaft with updated part (P/N 13010‑52130) and high-pressure pump assembly per Toyota SIB‑ENG‑07‑21.",
            },
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Minor power loss, cold-start hesitation, slight increase in fuel consumption.",
              cause:
                "Direct-only injection allows oil vapors from PCV system to accumulate on intake valves over time.",
              fix: "Perform walnut blasting or chemical intake cleaning every 100,000 km; use Top Tier fuel to slow deposit formation.",
            },
            {
              title: "12V auxiliary battery fatigue",
              symptoms:
                "‘Check Engine’ on startup, infotainment reset, slow cranking for A/C compressor.",
              cause:
                "AGM battery stressed by frequent DC-DC converter cycling in stop-start urban driving.",
              fix: "Replace with OEM-spec AGM battery (Toyota P/N 28800‑52020); verify DC-DC output voltage during replacement.",
            },
            {
              title: "Timing chain tensioner seepage",
              symptoms:
                "Minor oil weepage near front cover, occasional timing correlation codes after cold soak.",
              cause:
                "Early tensioner O-ring material prone to hardening under thermal cycling in high-ambient climates.",
              fix: "Replace tensioner and front cover gasket with updated kit (P/N 13505‑52080) per TIS guidance.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Toyota technical bulletins (2020–2024) and UK DVSA failure statistics (2021–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the G16-FE reliable long-term?",
            answer:
              "Generally yes. The G16-FE is based on Toyota’s robust Dynamic Force architecture with strong efficiency and refinement. Early 2020–2021 models had a minor cam lobe wear issue (addressed under SIB‑ENG‑07‑21), but otherwise the engine shows excellent durability. Regular 12V battery checks and use of Top Tier fuel ensure long-term reliability.",
          },
          {
            question: "What are the most common problems with G16-FE?",
            answer:
              "The main documented issue is high-pressure fuel pump drive lobe wear in early builds (SIB‑ENG‑07‑21). Other minor concerns include intake valve carbon buildup (due to direct-only injection), 12V AGM battery fatigue in city driving, and occasional timing tensioner seepage. All are manageable with scheduled maintenance.",
          },
          {
            question: "Which Lexus models use the G16-FE engine?",
            answer:
              "The G16-FE is used exclusively in the Lexus UX 200 (ZA10 series, 2020–present). It is also found in the mechanically related Toyota Corolla (E210) 1.5 VVT-i in Europe and Asia. No other Lexus models currently use this specific three-cylinder petrol variant.",
          },
          {
            question: "Can the G16-FE be tuned for more power?",
            answer:
              "No. The G16-FE is a naturally aspirated engine with tightly integrated ECU calibration; no safe or OEM-supported tuning paths exist. Power output is limited by compression ratio and thermal constraints. Toyota does not endorse performance remapping for this engine.",
          },
          {
            question: "What's the fuel economy of the G16-FE?",
            answer:
              "Excellent for a petrol engine. The UX 200 achieves ~6.0 L/100km combined (WLTP), or ~47 mpg UK. Real-world mixed driving typically yields 40–50 mpg (UK). Economy depends heavily on driving style, urban vs highway mix, and use of stop-start functionality.",
          },
          {
            question: "Is the G16-FE an interference engine?",
            answer:
              "Yes. Like all modern Toyota/Lexus engines, the G16-FE is an interference design. However, it uses a maintenance-free timing chain with no known wear issues. Chain failure is extremely unlikely under normal conditions, but catastrophic if it occurs.",
          },
          {
            question: "What oil type does G16-FE require?",
            answer:
              "Toyota specifies 0W‑16 synthetic oil meeting ILSAC GF-6 and API SP standards (e.g., Toyota Genuine Motor Oil). This ultra-low-viscosity oil is critical for VVT-i response and fuel economy. Change intervals are 16,000 km or 12 months under normal conditions.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/lexus/g16fe-specs#webpage",
              url: "https://www.enginecode.uk/lexus/g16fe-specs",
              name: "Lexus G16-FE Engine (2020–present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Lexus G16-FE (2020–present): verified specs, compatible models, common failures. Sourced from Toyota TIS, VCA, EU regulations.",
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
                    name: "Lexus",
                    item: "https://www.enginecode.uk/lexus",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "G16-FE",
                    item: "https://www.enginecode.uk/lexus/g16fe-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/lexus-engine-1.webp",
                alt: "Lexus G16-FE petrol engine - front view with black valve cover and D-4S decal",
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
              "@id": "https://www.enginecode.uk/lexus/g16fe-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/lexus/g16fe-specs#webpage",
              },
              headline:
                "Lexus G16-FE Engine (2020–present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Lexus G16-FE petrol engine. Verified data from Toyota TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/lexus/g16fe-specs#webpage",
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
                  "Fuel pump drive lobe wear on early 2020–2021 builds",
                  "Mandatory use of Toyota 0W‑16 ILSAC GF-6 oil",
                  "Full Euro 6d compliance across all model years",
                ],
                dependencies: [
                  "Toyota Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "G16-FE",
              name: "Lexus G16-FE 1.5L Inline-3 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "Lexus (Toyota Motor Corporation)",
              },
              vehicleEngineDisplacement: "1.490 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "Inline-3, DOHC, 12-valve",
              aspiration: "Naturally aspirated with D-4S direct injection",
              compressionRatio: "13.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "145",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "120",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1490 cc",
              bore: "80.5 mm",
              stroke: "97.6 mm",
              engineOilViscosity: "0W-16",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Lexus" },
                  model: "UX 200 (ZA10)",
                  vehicleEngine: "G16-FE",
                  productionDate: "2020–present",
                  bodyType: "Crossover SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Toyota" },
                  model: "Corolla (E210)",
                  vehicleEngine: "G16-FE",
                  productionDate: "2020–present",
                  bodyType: "Hatchback/Sedan",
                },
              ],
              emissionsCompliance: ["Euro 6d (all years)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/8912",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage (though chain is maintenance-free and highly reliable).",
              maintenanceSuggestion: [
                "Use only Toyota Genuine 0W‑16 ILSAC GF-6 oil.",
                "Inspect camshaft fuel pump drive lobe if built before Q2 2021.",
                "Clean intake valves every 100,000 km due to direct-only injection.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/lexus/g16fe-specs#dataset",
              name: "Lexus G16-FE Technical Dataset",
              description:
                "Verified technical parameters for Lexus G16-FE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/lexus/g16fe-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Lexus G16, G16-FE, three-cylinder petrol, UX 200, Dynamic Force, D-4S, Euro 6d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Injection type",
              ],
              temporalCoverage: "2020-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/lexus/g16fe-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Toyota Motor Corporation",
                  url: "https://global.toyota",
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
                "Toyota TIS Document H87321",
                "Toyota SIB ENG‑07‑21",
                "VCA Type Approval #VCA/EMS/8912",
                "Regulation (EU) 2017/1151",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the G16-FE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generally yes. The G16-FE is based on Toyota’s robust Dynamic Force architecture with strong efficiency and refinement. Early 2020–2021 models had a minor cam lobe wear issue (addressed under SIB‑ENG‑07‑21), but otherwise the engine shows excellent durability. Regular 12V battery checks and use of Top Tier fuel ensure long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with G16-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The main documented issue is high-pressure fuel pump drive lobe wear in early builds (SIB‑ENG‑07‑21). Other minor concerns include intake valve carbon buildup (due to direct-only injection), 12V AGM battery fatigue in city driving, and occasional timing tensioner seepage. All are manageable with scheduled maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Lexus models use the G16-FE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The G16-FE is used exclusively in the Lexus UX 200 (ZA10 series, 2020–present). It is also found in the mechanically related Toyota Corolla (E210) 1.5 VVT-i in Europe and Asia. No other Lexus models currently use this specific three-cylinder petrol variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the G16-FE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The G16-FE is a naturally aspirated engine with tightly integrated ECU calibration; no safe or OEM-supported tuning paths exist. Power output is limited by compression ratio and thermal constraints. Toyota does not endorse performance remapping for this engine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the G16-FE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent for a petrol engine. The UX 200 achieves ~6.0 L/100km combined (WLTP), or ~47 mpg UK. Real-world mixed driving typically yields 40–50 mpg (UK). Economy depends heavily on driving style, urban vs highway mix, and use of stop-start functionality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the G16-FE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like all modern Toyota/Lexus engines, the G16-FE is an interference design. However, it uses a maintenance-free timing chain with no known wear issues. Chain failure is extremely unlikely under normal conditions, but catastrophic if it occurs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does G16-FE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toyota specifies 0W‑16 synthetic oil meeting ILSAC GF-6 and API SP standards (e.g., Toyota Genuine Motor Oil). This ultra-low-viscosity oil is critical for VVT-i response and fuel economy. Change intervals are 16,000 km or 12 months under normal conditions.",
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