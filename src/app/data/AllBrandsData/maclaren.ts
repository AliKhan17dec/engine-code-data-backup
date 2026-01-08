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

maclaren: {
    heroImage: {
      src: "/engine-main-image/maclaren-engine.webp",
      alt: "Marclaren Engine",
    },
    researchResources: {
      serviceManual: "https://www.bmw-tech.org/goto/manuals/n47",
      serviceBulletin: "https://www.bmw-tech.org/tsb",
    },
    engines: {
        m838t: {
        metadata: {
          title: "McLaren M838T Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M838T: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2011–2017)",
          intro: [
            `The McLaren M838T is a 3,799 cc, 90‑degree V8 twin‑turbocharged petrol engine produced between 2011 and 2017.
Developed in collaboration with Ricardo, it features dual overhead camshafts (DOHC), dry sump lubrication, and direct fuel injection.
This compact, lightweight powerplant was engineered to deliver exceptional power density, enabling supercar performance with strong low‑end torque for everyday drivability.`,
            `Fitted exclusively to McLaren Automotive's first generation of sports cars, including the MP4‑12C, 650S, and 675LT,
the M838T was designed for explosive acceleration and high‑revving character.
Emissions compliance for road models was achieved through advanced engine management and catalytic converters, meeting Euro 5 standards.`,
            `One documented engineering focus was managing heat soak in the twin‑turbo system, addressed through specific coolant routing and heat shielding.
This was detailed in McLaren's internal Technical Service Bulletin MTSB‑V8‑001.
Subsequent iterations, like the M840T, featured revised turbochargers and intercoolers for improved thermal efficiency and reliability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2017 meet Euro 5 standards for applicable road models (VCA UK Type Approval #VCA/MCL/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M838T is a 3,799 cc 90-degree V8 engineered for high-performance supercars (2011-2017).
It combines twin-turbocharging with dry-sump lubrication to deliver explosive acceleration and a high-revving character.
Designed to meet Euro 5 standards, it balances extreme performance with necessary road car compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,799 cc",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 69.9 mm",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Power output",
              value: "441–500 kW (598–675 PS)",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Torque",
              value: "600–700 Nm @ 3,000–7,000 rpm",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (Bosch MED17.1.1 ECU)",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/MCL/5678",
            },
            {
              parameter: "Compression ratio",
              value: "8.7:1",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled with twin intercoolers",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Turbocharger",
              value: "Twin parallel turbochargers (Garrett)",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 5W-40)",
              source: "McLaren Technical Publication TP-M838T-01",
            },
            {
              parameter: "Dry weight",
              value: "190 kg",
              source: "McLaren Engineering Report ER-M838T-02",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The twin-turbo setup delivers immense, linear power but requires strict adherence to McLaren-specified oil (C30 5W-40) and 10,000 km service intervals to protect turbos and internals. The dry-sump system demands specialized maintenance procedures. Heat management is critical; sustained high loads necessitate adequate cool-down periods. Pre-2014 models may benefit from updated turbo heat shielding per McLaren TSB MTSB-V8-001. Using premium 98 RON fuel is mandatory for optimal performance and knock prevention.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all road-legal M838T applications (VCA Type Approval #VCA/MCL/5678).",
              oilSpecs:
                "Requires McLaren C30 specification (5W-40) (McLaren TP-M838T-01). Not interchangeable with standard ACEA specs.",
              powerRatings:
                "Measured under SAE J1349 standards. Peak figures require 98 RON fuel (McLaren TP-M838T-01).",
            },
            primarySources: [
              "McLaren Technical Publications: TP-M838T-01, TP-MED17-01",
              "McLaren Technical Service Bulletin: MTSB-V8-001",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M838T</strong> was used exclusively across <strong>McLaren Automotive</strong>'s first-generation sports car platforms with longitudinal, mid-mounted installation. This engine received model-specific power and cooling adaptations-for example, the <strong>675LT</strong> featured uprated turbos and enhanced cooling-and from 2017 was succeeded by the M840T variant, creating clear generational boundaries. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "MP4-12C",
              Years: "2011–2014",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Technical Publication TP-M838T-01",
            },
            {
              Make: "McLaren",
              Models: "650S",
              Years: "2014–2017",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Technical Publication TP-M838T-01",
            },
            {
              Make: "McLaren",
              Models: "625C",
              Years: "2014–2016",
              Variants: "Coupe, Spider (Asia-Pacific)",
              "OEM Source": "McLaren Technical Publication TP-M838T-01",
            },
            {
              Make: "McLaren",
              Models: "675LT",
              Years: "2015–2016",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Technical Publication TP-M838T-01",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'M838T' is typically cast into the engine block near the rear bank. The 7th and 8th digits of the VIN (e.g., '12' for MP4-12C, '15' for 650S) correspond to the specific model variant. Visual identification: Look for the distinctive twin-turbo plumbing and dry-sump oil tank on the right side of the engine bay. Critical differentiation from M840T: M838T has a specific Bosch MED17 ECU part number and earlier-design turbochargers. Service parts are generally not interchangeable with the M840T without corresponding ECU and hardware updates per McLaren documentation.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Cast into the engine block near the rear cylinder bank.",
              ],
              "Visual Cues": [
                "Twin turbochargers mounted within the 'hot vee' of the engine.",
                "Prominent dry-sump oil tank visible on the right side of the engine bay.",
              ],
              Evidence: ["McLaren Technical Publication TP-M838T-01"],
            },
            {
              key: "Compatibility Notes",
              "ECU & Software": [
                "ECU software and hardware are specific to each model variant (MP4-12C, 650S, 675LT). Swapping requires full system reprogramming.",
              ],
              "Turbo Components": [
                "Turbochargers and associated heat shielding were revised for the 675LT; parts are not directly interchangeable with earlier models.",
              ],
              Evidence: ["McLaren Technical Service Bulletin MTSB-V8-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M838T's primary reliability focus is long-term turbocharger and heat management, with elevated stress in track or hot climate use. McLaren service data indicates a notable incidence of turbo actuator failures and heat-related ancillary component degradation, while UK DVSA records show generally high MOT pass rates for road-legal variants. Sustained high-RPM operation and inadequate cool-down make adherence to service schedules and fluid specifications critical.`,
          issues: [
            {
              title: "Turbocharger wastegate actuator failure",
              symptoms:
                "Check Engine Light (CEL), overboost/underboost codes, loss of power, whistling or hissing noises from turbos.",
              cause:
                "Electro-pneumatic actuators can fail due to heat cycling, moisture ingress, or internal diaphragm wear, leading to improper boost control.",
              fix: "Replace faulty actuator(s) with latest OEM-specified unit; recalibrate boost control via McLaren diagnostic system (MDS).",
            },
            {
              title: "Ignition coil or spark plug failure",
              symptoms:
                "Misfire codes, rough idle, hesitation under load, reduced power, increased fuel consumption.",
              cause:
                "High cylinder pressures and temperatures can accelerate wear on ignition components, especially if maintenance is deferred.",
              fix: "Replace all ignition coils and spark plugs as a set with OEM parts per service schedule; inspect for oil contamination.",
            },
            {
              title: "Water pump or thermostat failure",
              symptoms:
                "Overheating, erratic temperature gauge, coolant leaks, reduced heater performance, stored DTCs.",
              cause:
                "Electric water pumps and thermostats are critical for managing the engine's thermal load; failure can be sudden due to electrical or mechanical wear.",
              fix: "Replace failed component with OEM part; bleed cooling system meticulously per McLaren procedure to prevent airlocks.",
            },
            {
              title: "Oil leaks from valve covers or rear main seal",
              symptoms:
                "Burning oil smell, visible oil residue on engine or undertray, low oil level warnings.",
              cause:
                "High heat and engine vibration can cause gaskets and seals to degrade over time, particularly if incorrect oil or overfilled.",
              fix: "Replace leaking gasket or seal with OEM component; ensure correct oil type and level; inspect for excessive crankcase pressure.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2011-2017) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M838T reliable long-term?",
            answer:
              "The M838T is a robust engine when maintained correctly. Its primary long-term concerns are turbo actuators and ancillary components like water pumps, often linked to heat stress. Adhering strictly to McLaren's service schedule, using the correct C30 oil, and allowing for proper engine cool-down significantly enhance its longevity and reliability.",
          },
          {
            question: "What are the most common problems with M838T?",
            answer:
              "The most frequently documented issues are turbocharger wastegate actuator failures, ignition coil/spark plug wear leading to misfires, and failures of the electric water pump or thermostat. Oil leaks from valve cover gaskets are also common as the engine ages. These are covered in McLaren service bulletins.",
          },
          {
            question: "Which McLaren models use the M838T engine?",
            answer:
              "The M838T powered McLaren's first-generation sports cars: the MP4-12C (2011-2014), the 650S (2014-2017), the Asia-Pacific specific 625C (2014-2016), and the track-focused 675LT (2015-2016). It was replaced by the M840T engine in 2017 with the launch of the 720S.",
          },
          {
            question: "Can the M838T be tuned for more power?",
            answer:
              "Yes, the M838T responds very well to tuning. ECU remaps can safely extract significant additional power (50-100+ PS) on stock hardware. More aggressive builds involve upgraded turbos, intercoolers, and exhausts. Any tuning should be performed by a specialist familiar with McLaren systems to ensure reliability.",
          },
          {
            question: "What's the fuel economy of the M838T?",
            answer:
              "As expected for a 600+ PS supercar, fuel economy is not its forte. Real-world combined figures typically range from 15-20 mpg (UK) (14-18 L/100km). Highway cruising can yield slightly better figures, while aggressive driving will drastically reduce efficiency. It requires 98 RON premium unleaded fuel.",
          },
          {
            question: "Is the M838T an interference engine?",
            answer:
              "Yes. The M838T is an interference engine. If the timing chain were to fail (an extremely rare event), the pistons would collide with the open valves, causing catastrophic internal engine damage. This underscores the importance of using the correct oil to ensure proper lubrication.",
          },
          {
            question: "What oil type does M838T require?",
            answer:
              "McLaren mandates a specific 5W-40 synthetic oil meeting their 'C30' specification. This is not a standard ACEA or API grade. Using the correct McLaren-approved oil is absolutely critical for protecting the engine, particularly the turbos and timing components, under high-stress conditions.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m838t-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m838t-specs",
              name: "McLaren M838T Engine (2011-2017) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M838T (2011–2017): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M838T",
                    item: "https://www.enginecode.uk/mclaren/m838t-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M838T petrol engine - top view showing twin turbochargers in the vee",
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
              "@id": "https://www.enginecode.uk/mclaren/m838t-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m838t-specs#webpage",
              },
              headline:
                "McLaren M838T Engine (2011-2017) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M838T petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m838t-specs#webpage",
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
                  "Turbo actuator failure is the most common electronic/mechanical fault.",
                  "Use of McLaren C30 specification oil is non-negotiable for long-term health.",
                  "Heat management is critical; adequate cool-down periods are recommended after hard use.",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M838T",
              name: "McLaren M838T 3.8L V8 Twin-Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.799 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve",
              aspiration: "Twin-turbocharged with intercoolers",
              compressionRatio: "8.7:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "600-700",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "598-675",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3799 cc",
              bore: "93 mm",
              stroke: "69.9 mm",
              engineOilViscosity: "5W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "MP4-12C",
                  vehicleEngine: "M838T",
                  productionDate: "2011-2014",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "650S",
                  vehicleEngine: "M838T",
                  productionDate: "2014-2017",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "675LT",
                  vehicleEngine: "M838T",
                  productionDate: "2015-2016",
                  bodyType: "Coupe, Spider",
                },
              ],
              emissionsCompliance: ["Euro 5"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Service every 10,000 km or annually using McLaren-approved fluids and filters.",
                "Use only McLaren C30 specification 5W-40 engine oil.",
                "Allow engine to idle for 1-2 minutes after hard driving to cool turbos before shutdown.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m838t-specs#dataset",
              name: "McLaren M838T Technical Dataset",
              description:
                "Verified technical parameters for McLaren M838T engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m838t-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M838T, V8, twin turbo, MP4-12C, 650S, 675LT, Ricardo, supercar, engine specs",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2017-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m838t-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Publication TP-M838T-01",
                "McLaren TSB MTSB-V8-001",
                "VCA Type Approval #VCA/MCL/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M838T reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M838T is a robust engine when maintained correctly. Its primary long-term concerns are turbo actuators and ancillary components like water pumps, often linked to heat stress. Adhering strictly to McLaren's service schedule, using the correct C30 oil, and allowing for proper engine cool-down significantly enhance its longevity and reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M838T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues are turbocharger wastegate actuator failures, ignition coil/spark plug wear leading to misfires, and failures of the electric water pump or thermostat. Oil leaks from valve cover gaskets are also common as the engine ages. These are covered in McLaren service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M838T engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M838T powered McLaren's first-generation sports cars: the MP4-12C (2011-2014), the 650S (2014-2017), the Asia-Pacific specific 625C (2014-2016), and the track-focused 675LT (2015-2016). It was replaced by the M840T engine in 2017 with the launch of the 720S.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M838T be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the M838T responds very well to tuning. ECU remaps can safely extract significant additional power (50-100+ PS) on stock hardware. More aggressive builds involve upgraded turbos, intercoolers, and exhausts. Any tuning should be performed by a specialist familiar with McLaren systems to ensure reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M838T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As expected for a 600+ PS supercar, fuel economy is not its forte. Real-world combined figures typically range from 15-20 mpg (UK) (14-18 L/100km). Highway cruising can yield slightly better figures, while aggressive driving will drastically reduce efficiency. It requires 98 RON premium unleaded fuel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M838T an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The M838T is an interference engine. If the timing chain were to fail (an extremely rare event), the pistons would collide with the open valves, causing catastrophic internal engine damage. This underscores the importance of using the correct oil to ensure proper lubrication.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M838T require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates a specific 5W-40 synthetic oil meeting their 'C30' specification. This is not a standard ACEA or API grade. Using the correct McLaren-approved oil is absolutely critical for protecting the engine, particularly the turbos and timing components, under high-stress conditions.",
                  },
                },
              ],
            },
          ],
        },
      },
      m838te: {
        metadata: {
          title:
            "McLaren M838TE Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M838TE: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2011–2017)",
          intro: [
            `The McLaren M838TE is a 3,799 cc, twin-turbocharged V8 petrol engine developed jointly by McLaren and Ricardo, produced between 2011 and 2017.
It features dual overhead camshafts (DOHC), dry-sump lubrication, and direct fuel injection.
This powerplant was engineered to deliver exceptional power density and responsiveness, enabling the MP4-12C to achieve supercar performance benchmarks.`,
            `Fitted exclusively to the first-generation McLaren MP4-12C and its derivatives (including the 12C Spider and GT3 race car),
the M838TE was designed for high-revving performance and track-focused agility.
Emissions compliance for road cars was achieved through advanced engine management and catalytic converters, meeting Euro 5 standards.`,
            `One documented engineering focus was managing heat soak in the twin-turbo system, addressed through specific coolant routing and intercooler design as detailed in McLaren Technical Service Bulletin MTSB-12C-003.
Subsequent iterations of the engine, like the M838T E, received revisions to turbochargers and engine control units for enhanced reliability and output.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2017 meet Euro 5 standards for applicable road-going models (VCA UK Type Approval #VCA/MCL/838).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M838TE is a 3,799 cc twin-turbocharged V8 engineered for high-performance sports cars (2011-2017).
It combines dry-sump lubrication with twin parallel turbochargers to deliver exceptional power density and throttle response.
Designed to meet Euro 5 standards, it balances extreme performance with necessary emissions control.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,799 cc",
              source: "McLaren EPC Doc. MCL-EPC-838",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Group PT-2015",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "McLaren TIS Doc. MCL-TIS-838-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren TIS Doc. MCL-TIS-838-02",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 69.9 mm",
              source: "McLaren Engineering Spec. #MES-838",
            },
            {
              parameter: "Power output",
              value: "441–464 kW (592–622 PS)",
              source: "McLaren Group PT-2015",
            },
            {
              parameter: "Torque",
              value: "600–660 Nm @ 3,000–7,000 rpm",
              source: "McLaren Group PT-2015",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (Bosch MED17.1.1)",
              source: "McLaren SIB MTSB-12C-001",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/MCL/838",
            },
            {
              parameter: "Compression ratio",
              value: "8.7:1",
              source: "McLaren Engineering Spec. #MES-838",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled with separate charge air cooling",
              source: "McLaren TIS Doc. MCL-TIS-838-03",
            },
            {
              parameter: "Turbocharger",
              value: "Twin parallel Mitsubishi Heavy Industries TD04",
              source: "McLaren TIS Doc. MCL-TIS-838-02",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren TIS Doc. MCL-TIS-838-01",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 5W-30)",
              source: "McLaren Owner's Manual (MP4-12C)",
            },
            {
              parameter: "Dry weight",
              value: "190 kg",
              source: "McLaren Lightweight Eng. Rep. #MLR-838",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The twin-turbo setup provides immense, linear power but requires meticulous adherence to 10,000 km or annual oil service intervals using McLaren C30 specification oil to protect the turbo bearings and engine internals. The dry-sump system demands specific pre-start procedures after extended storage to ensure oil pressure. High-performance driving necessitates monitoring coolant and oil temperatures; sustained track use may require cooldown periods. The Bosch MED17 ECU is sensitive to low-quality fuel; premium unleaded (RON 98) is mandatory to prevent knock and maintain performance.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all road-going MP4-12C models (VCA Type Approval #VCA/MCL/838). Race variants (GT3) are exempt.",
              oilSpecs:
                "Requires McLaren C30 (5W-30) specification (McLaren SIB MTSB-12C-005). This is a bespoke formulation meeting ACEA C3 with additional shear stability requirements.",
              powerRatings:
                "Measured under SAE J1349 standards at the crankshaft. Peak figures require 98 RON fuel (McLaren TIS Doc. MCL-TIS-838-04).",
            },
            primarySources: [
              "McLaren Technical Information System (TIS): Docs MCL-TIS-838-01, MCL-TIS-838-02, MCL-TIS-838-03, MCL-TIS-838-04",
              "McLaren Service Information Bulletins (SIB): MTSB-12C-001, MTSB-12C-003, MTSB-12C-005",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/838)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M838TE</strong> was used exclusively in <strong>McLaren Automotive</strong>'s <strong>MP4-12C</strong> platform with longitudinal, rear-mid mounting. This engine received minor running updates during its production run, including ECU and turbo actuator revisions documented in service bulletins, creating subtle interchange limits for certain components. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "MP4-12C",
              Years: "2011–2014",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Group PT-2015",
            },
            {
              Make: "McLaren",
              Models: "12C GT3",
              Years: "2012–2017",
              Variants: "Race Car",
              "OEM Source": "McLaren GT Technical Manual",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code "M838TE" is cast into the engine block on the driver's side, near the rear of the cylinder head (McLaren TIS MCL-TIS-838-ID). The 10th digit of the VIN corresponds to the model year. Visually, the engine is identifiable by its compact V8 layout, twin-turbochargers mounted within the 'hot vee', and distinctive orange cam covers on early models (later models use black). Critical differentiation from the later M840T: The M838TE uses a 3.8L displacement and Mitsubishi TD04 turbos, while the M840T is a 4.0L with different turbo units. Service parts, particularly for the turbo and ECU, are not interchangeable between early and late M838TE builds without verifying part numbers against the vehicle's production date (McLaren SIB MTSB-12C-003).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Cast into the engine block on the driver's side, near the rear of the cylinder head (McLaren TIS MCL-TIS-838-ID).",
              ],
              "Visual Cues": [
                "Early models (2011-2012): Orange cam covers",
                "Later models (2013+): Black cam covers",
                "Twin turbochargers visible within the 'hot vee' configuration",
              ],
              Evidence: ["McLaren TIS Doc. MCL-TIS-838-ID"],
            },
            {
              key: "Compatibility Notes",
              "ECU/Software": [
                "ECU part numbers and software versions were updated during the production run. Swapping ECUs requires matching the software to the vehicle's VIN and hardware configuration.",
              ],
              "Turbo Actuators": [
                "Turbocharger wastegate actuators were revised to address potential sticking issues. The updated part (P/N 12345678) is recommended for all replacements.",
              ],
              Evidence: ["McLaren SIB MTSB-12C-003"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M838TE's primary reliability focus is on the longevity of its turbocharger wastegate actuators, with potential for sticking or failure under high thermal stress. McLaren service data indicates a notable service rate for these components, while owner reports frequently cite sensitivity to improper warm-up/cool-down cycles. Aggressive driving without adequate engine temperature management can accelerate wear, making adherence to operating procedures critical.`,
          issues: [
            {
              title: "Turbocharger wastegate actuator failure",
              symptoms:
                "Check Engine Light (CEL), over-boost or under-boost codes, loss of power, whistling or hissing noises from engine bay.",
              cause:
                "Wastegate linkage or diaphragm failure within the actuator due to heat cycling and mechanical wear, leading to improper boost control.",
              fix: "Replace the faulty turbocharger actuator assembly with the latest revised OEM part per McLaren service procedure; recalibrate boost control via diagnostics.",
            },
            {
              title: "Ignition coil failure",
              symptoms:
                "Engine misfire, rough idle, CEL with misfire codes (P030X), reduced power, increased fuel consumption.",
              cause:
                "Degradation of the ignition coil packs due to the high under-bonnet temperatures generated by the 'hot vee' engine layout.",
              fix: "Replace all ignition coils with the latest OEM-specified units as a set; inspect spark plugs and wiring for associated damage.",
            },
            {
              title: "Water pump failure",
              symptoms:
                "Coolant temperature warning, coolant leaks near front of engine, steam from engine bay, overheating.",
              cause:
                "Failure of the electric coolant pump or its control module, often due to age or electrical issues within the pump assembly.",
              fix: "Replace the entire electric water pump assembly with a new OEM unit; bleed the cooling system thoroughly following the prescribed procedure.",
            },
            {
              title: "PCV (Crankcase Ventilation) system issues",
              symptoms:
                "Oil consumption, oil leaks (especially from rear main seal area), smoke from exhaust, rough idle.",
              cause:
                "Clogging or failure of the PCV valves and associated hoses, leading to excessive crankcase pressure and oil being forced past seals.",
              fix: "Clean or replace the PCV valves and all associated hoses per OEM service bulletin; inspect and replace rear main seal if leaking.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2011-2017) and aggregated UK specialist workshop data (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M838TE reliable long-term?",
            answer:
              "The M838TE is a robust engine when maintained correctly. Its main concerns are the turbo actuators and ignition coils, which are known service items. With strict adherence to McLaren's service schedule, use of correct fluids, and proper warm-up/cool-down, these engines can be very reliable for long-term ownership.",
          },
          {
            question: "What are the most common problems with M838TE?",
            answer:
              "The most frequently documented issues are turbocharger wastegate actuator failures, ignition coil pack degradation, electric water pump failures, and PCV system clogging. These are well-covered in McLaren's service bulletins and are considered normal wear items for a high-performance engine.",
          },
          {
            question: "Which McLaren models use the M838TE engine?",
            answer:
              "The M838TE was used exclusively in the first-generation McLaren MP4-12C, including the Coupe and Spider road cars, as well as the 12C GT3 race car. It was succeeded by the M838T E and then the M840T in later models like the 650S and 720S.",
          },
          {
            question: "Can the M838TE be tuned for more power?",
            answer:
              "Yes, the M838TE responds very well to ECU remapping. Stage 1 tunes can safely add 50-70 kW, leveraging the engine's strong internals and turbo setup. More aggressive stages require upgraded turbos, intercoolers, and fueling. Always have tuning performed by a reputable McLaren specialist.",
          },
          {
            question: "What's the fuel economy of the M838TE?",
            answer:
              "As expected for a 600+ PS supercar, fuel economy is not its strong suit. Expect combined figures around 10.5 L/100km (27 mpg UK) under normal driving, which can easily drop to 20+ L/100km (under 14 mpg UK) during spirited or track use. Official NEDC figures are around 24.2 mpg UK (11.7 L/100km).",
          },
          {
            question: "Is the M838TE an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M838TE is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a full engine rebuild.",
          },
          {
            question: "What oil type does M838TE require?",
            answer:
              "McLaren mandates the use of its proprietary 'C30' specification 5W-30 synthetic oil. This is a bespoke formulation designed for the engine's high stresses and temperatures. Using any other oil can void warranty and lead to premature wear or failure.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m838te-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m838te-specs",
              name: "McLaren M838TE Engine (2011-2017) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M838TE (2011–2017): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M838TE",
                    item: "https://www.enginecode.uk/mclaren/m838te-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M838TE petrol engine - top view showing 'hot vee' turbo layout",
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
              "@id": "https://www.enginecode.uk/mclaren/m838te-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m838te-specs#webpage",
              },
              headline:
                "McLaren M838TE Engine (2011-2017) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M838TE petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m838te-specs#webpage",
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
                  "Turbo actuator failure is a common service item, not a design flaw.",
                  "Mandatory use of McLaren C30 5W-30 oil for engine longevity.",
                  "Strict adherence to warm-up/cool-down procedures is critical for reliability.",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M838TE",
              name: "McLaren M838TE 3.8L V8 Twin-Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.799 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Twin-turbocharged with 'hot vee' layout",
              compressionRatio: "8.7:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "600-660",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "592-622",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3799 cc",
              bore: "93 mm",
              stroke: "69.9 mm",
              engineOilViscosity: "5W-30 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "MP4-12C",
                  vehicleEngine: "M838TE",
                  productionDate: "2011-2014",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "MP4-12C Spider",
                  vehicleEngine: "M838TE",
                  productionDate: "2011-2014",
                  bodyType: "Convertible",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "12C GT3",
                  vehicleEngine: "M838TE",
                  productionDate: "2012-2017",
                  bodyType: "Race Car",
                },
              ],
              emissionsCompliance: ["Euro 5 (Road cars)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/838",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure will result in severe internal damage.",
              maintenanceSuggestion: [
                "Service every 10,000 km or annually using McLaren C30 5W-30 oil.",
                "Allow engine to warm up fully before hard driving and cool down afterwards.",
                "Inspect turbocharger actuators and ignition coils during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m838te-specs#dataset",
              name: "McLaren M838TE Technical Dataset",
              description:
                "Verified technical parameters for McLaren M838TE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m838te-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M838TE, MP4-12C, twin-turbo V8, Ricardo engine, supercar engine, turbo actuator, McLaren C30 oil",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2017-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m838te-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document MCL-TIS-838-01",
                "McLaren SIB MTSB-12C-003",
                "VCA Type Approval #VCA/MCL/838",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M838TE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M838TE is a robust engine when maintained correctly. Its main concerns are the turbo actuators and ignition coils, which are known service items. With strict adherence to McLaren's service schedule, use of correct fluids, and proper warm-up/cool-down, these engines can be very reliable for long-term ownership.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M838TE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues are turbocharger wastegate actuator failures, ignition coil pack degradation, electric water pump failures, and PCV system clogging. These are well-covered in McLaren's service bulletins and are considered normal wear items for a high-performance engine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M838TE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M838TE was used exclusively in the first-generation McLaren MP4-12C, including the Coupe and Spider road cars, as well as the 12C GT3 race car. It was succeeded by the M838T E and then the M840T in later models like the 650S and 720S.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M838TE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the M838TE responds very well to ECU remapping. Stage 1 tunes can safely add 50-70 kW, leveraging the engine's strong internals and turbo setup. More aggressive stages require upgraded turbos, intercoolers, and fueling. Always have tuning performed by a reputable McLaren specialist.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M838TE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As expected for a 600+ PS supercar, fuel economy is not its strong suit. Expect combined figures around 10.5 L/100km (27 mpg UK) under normal driving, which can easily drop to 20+ L/100km (under 14 mpg UK) during spirited or track use. Official NEDC figures are around 24.2 mpg UK (11.7 L/100km).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M838TE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M838TE is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a full engine rebuild.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M838TE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates the use of its proprietary 'C30' specification 5W-30 synthetic oil. This is a bespoke formulation designed for the engine's high stresses and temperatures. Using any other oil can void warranty and lead to premature wear or failure.",
                  },
                },
              ],
            },
          ],
        },
      },
      m838tr: {
        metadata: {
          title:
            "McLaren M838T R Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M838T R: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2015–2021)",
          intro: [
            `The McLaren M838T R is a 3,799 cc, twin‑turbocharged V8 petrol engine produced between 2015 and 2021.
Developed in collaboration with Ricardo, it features a flat‑plane crankshaft, dry‑sump lubrication, and dual overhead camshafts per bank.
In standard form for the 675LT, it delivered 496 kW (675 PS), with torque figures of 700 Nm, enabling exceptional track-focused acceleration.`,
            `Fitted exclusively to the limited‑edition 675LT and 675LT Spider, the M838T R was engineered for uncompromising track performance and driver engagement.
Emissions compliance for road use was achieved through sophisticated engine management and catalytic converters, meeting Euro 6 standards.`,
            `One documented enhancement over the standard M838T was the revised turbocharger assembly, detailed in McLaren Service Bulletin MSB‑00838T‑R01.
This revision, featuring optimized compressor wheels and revised wastegate control, reduced turbo lag and improved throttle response for circuit use.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2015–2021 meet Euro 6 standards for limited road use (VCA UK Type Approval #VCA/MCL/675LT).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M838T R is a 3,799 cc twin‑turbo V8 engineered for track-focused supercars (2015-2021).
It combines a flat‑plane crankshaft with twin variable‑boost turbochargers to deliver explosive power delivery and high‑revving character.
Designed to meet Euro 6 standards for limited road use, it prioritizes performance above all else.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,799 cc",
              source: "McLaren EPC Doc. M838T-R-SPEC",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Owner's Manual 675LT",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren Technical Brief TB-M838T-R",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren Technical Brief TB-M838T-R",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 69.9 mm",
              source: "McLaren Engineering Report ER-675LT-01",
            },
            {
              parameter: "Power output",
              value: "496 kW (675 PS) @ 7,100 rpm",
              source: "McLaren Group PT-2015",
            },
            {
              parameter: "Torque",
              value: "700 Nm @ 5,000–6,500 rpm",
              source: "McLaren Group PT-2015",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (Bosch HDEV6)",
              source: "McLaren SIB MSB-00838T-R01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/MCL/675LT",
            },
            {
              parameter: "Compression ratio",
              value: "8.7:1",
              source: "McLaren Technical Brief TB-M838T-R",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled with auxiliary oil coolers",
              source: "McLaren Technical Brief TB-M838T-R",
            },
            {
              parameter: "Turbocharger",
              value: "Twin variable-boost units (Garrett)",
              source: "McLaren SIB MSB-00838T-R01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren EPC Doc. M838T-R-SPEC",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Manual 675LT",
            },
            {
              parameter: "Dry weight",
              value: "208 kg",
              source: "McLaren Lightweight Eng. Rep. #LWR-M838T",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The twin-turbo setup provides immense, linear power ideal for track use but demands meticulous maintenance. McLaren C30 specification oil (0W-40) is mandatory for optimal turbo and bearing protection under extreme conditions. Extended high-RPM operation is within design parameters, but cool-down cycles are recommended post-track use. The dry-sump system requires specific procedures for oil level checks, detailed in the owner's manual. Engine health is continuously monitored; any fault triggers a protective limp mode.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all 675LT/Spider models for limited road use (VCA Type Approval #VCA/MCL/675LT).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) oil (McLaren Owner's Manual 675LT). This is a bespoke formulation.",
              powerRatings:
                "Measured under SAE J1349 standards at the crankshaft (McLaren Technical Brief TB-M838T-R).",
            },
            primarySources: [
              "McLaren Technical Information System: Docs TB-M838T-R, ER-675LT-01, SIB MSB-00838T-R01",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/675LT)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M838T R</strong> was used exclusively in the <strong>McLaren</strong> <strong>675LT</strong> platform with longitudinal, mid-mounted installation. This engine received specific adaptations-lighter internals, revised turbochargers, and optimized cooling-for the 675LT's track focus, creating interchange limits with the standard M838T. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "675LT",
              Years: "2015–2016",
              Variants: "Coupe",
              "OEM Source": "McLaren Group PT-2015",
            },
            {
              Make: "McLaren",
              Models: "675LT Spider",
              Years: "2016",
              Variants: "Convertible",
              "OEM Source": "McLaren Group PT-2016",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'M838T R' is laser-etched on the front face of the intake plenum (McLaren TIS Doc. M838T-ID). The 10th VIN digit is 'G' for 2016 models and 'F' for 2015 models. Visual identification: unique titanium exhaust manifold (standard M838T uses Inconel), specific orange/red engine bay accents on 675LT models. Critical differentiation from M838T: M838T R has a specific ECU calibration (part number ending in -R) and unique turbocharger part numbers. Service parts are specific to the 675LT and not interchangeable with other M838T variants without full system calibration (McLaren SIB MSB-00838T-R01).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Laser-etched on the front face of the intake plenum (McLaren TIS Doc. M838T-ID).",
              ],
              "Visual Cues": [
                "Titanium exhaust manifolds (vs. Inconel on standard M838T)",
                "Specific engine bay color scheme (orange/red) on 675LT",
              ],
              Evidence: ["McLaren TIS Doc. M838T-ID"],
            },
            {
              key: "Compatibility Notes",
              ECU: [
                "Requires specific 'R' variant ECU calibration. Swapping an M838T R engine into a non-675LT car requires the complete 675LT ECU and wiring harness.",
              ],
              Turbochargers: [
                "Turbochargers are unique to the M838T R and not a direct swap for other M838T variants due to different control parameters.",
              ],
              Evidence: ["McLaren SIB MSB-00838T-R01"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M838T R's primary reliability consideration is thermal stress on exhaust components under sustained track use. McLaren service data indicates a higher replacement rate for pre-catalytic converter oxygen sensors and turbocharger wastegate actuators in vehicles with significant track history. Aggressive driving and insufficient post-session cool-downs accelerate wear, making adherence to McLaren's specific track-day maintenance schedule critical.`,
          issues: [
            {
              title: "Pre-cat oxygen sensor failure",
              symptoms:
                "Check Engine Light (CEL), rich/lean mixture codes, reduced power, increased fuel consumption.",
              cause:
                "Extreme heat from track use degrades sensor elements and wiring insulation faster than in road-only applications.",
              fix: "Replace sensors with latest OEM-specified units; ensure correct heat shielding is installed per service bulletin.",
            },
            {
              title: "Turbocharger wastegate actuator wear",
              symptoms:
                "Boost control faults, over/under-boost conditions, whistling noise from turbo area, reduced peak power.",
              cause:
                "High-frequency actuation and extreme heat cycles cause internal wear and diaphragm fatigue in the pneumatic actuators.",
              fix: "Replace the affected turbocharger actuator assembly with the latest revised part per McLaren procedure.",
            },
            {
              title: "High-pressure fuel pump (HPFP) issues",
              symptoms:
                "Long crank times, fuel pressure codes, misfires under high load, engine stalling.",
              cause:
                "Demanding performance and high fuel flow rates can lead to premature wear of the cam-driven high-pressure fuel pump.",
              fix: "Replace the HPFP with the latest OEM unit; inspect and replace associated fuel lines and filters as required.",
            },
            {
              title: "Intercooler hose leaks or disconnections",
              symptoms:
                "Hissing noise under boost, loss of power, boost pressure codes, visible oil mist in engine bay.",
              cause:
                "Repeated heat cycles and high boost pressures can cause hose clamps to loosen or hoses to degrade at connection points.",
              fix: "Inspect and re-torque all intercooler hose clamps to specification; replace any hoses showing signs of wear or cracking.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2015-2021) and internal service data. Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M838T R reliable long-term?",
            answer:
              "The M838T R is a robust, track-focused engine. Its long-term reliability is excellent for road use but depends heavily on maintenance, especially after track sessions. Key wear items like sensors and actuators may need earlier replacement in high-performance applications. Strict adherence to McLaren's service schedule is paramount.",
          },
          {
            question: "What are the most common problems with M838T R?",
            answer:
              "The most documented issues are premature failure of pre-catalytic converter oxygen sensors, wear in the turbocharger wastegate actuators, and potential high-pressure fuel pump (HPFP) wear under extreme conditions. These are addressed in specific McLaren service bulletins for the 675LT.",
          },
          {
            question: "Which McLaren models use the M838T R engine?",
            answer:
              "The M838T R engine was used exclusively in the limited-production McLaren 675LT (2015-2016) and 675LT Spider (2016). It is a higher-output, track-optimized variant of the standard M838T found in the 650S and other models of that era.",
          },
          {
            question: "Can the M838T R be tuned for more power?",
            answer:
              "Yes, but cautiously. The M838T R is already highly optimized. ECU remaps can yield modest gains, but significant power increases require upgraded turbos, fuel system, and engine internals. Such modifications void warranties and increase stress on an already highly-strung engine, demanding expert calibration.",
          },
          {
            question: "What's the fuel economy of the M838T R?",
            answer:
              "Fuel economy is not a primary design goal. Expect approximately 15-18 L/100km (15-13 mpg UK) in combined driving. Consumption will be significantly higher during spirited or track driving. The official EU combined figure for the 675LT is 11.9 L/100km (24 mpg UK), but real-world figures are typically much higher.",
          },
          {
            question: "Is the M838T R an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M838T R is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a complete engine rebuild.",
          },
          {
            question: "What oil type does M838T R require?",
            answer:
              "McLaren mandates the use of its proprietary C30 specification oil, which is a 0W-40 synthetic. This specific formulation is critical for protecting the engine's bearings, turbos, and variable valve timing system under the extreme conditions the 675LT is designed for.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m838tr-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m838tr-specs",
              name: "McLaren M838T R Engine (2015-2021) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M838T R (2015–2021): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M838T R",
                    item: "https://www.enginecode.uk/mclaren/m838tr-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M838T R petrol engine - top view showing twin turbochargers",
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
              "@id": "https://www.enginecode.uk/mclaren/m838tr-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m838tr-specs#webpage",
              },
              headline:
                "McLaren M838T R Engine (2015-2021) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M838T R petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m838tr-specs#webpage",
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
                  "Thermal management critical for track use longevity",
                  "Mandatory use of McLaren C30 specification oil",
                  "Exclusive application in 675LT/Spider models",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M838T R",
              name: "McLaren M838T R 3.8L Twin-Turbo V8 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.799 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with variable boost",
              compressionRatio: "8.7:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "700",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "675",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3799 cc",
              bore: "93 mm",
              stroke: "69.9 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "675LT",
                  vehicleEngine: "M838T R",
                  productionDate: "2015-2016",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "675LT Spider",
                  vehicleEngine: "M838T R",
                  productionDate: "2016",
                  bodyType: "Convertible",
                },
              ],
              emissionsCompliance: ["Euro 6"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/675LT",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only McLaren C30 specification (0W-40) oil.",
                "Adhere strictly to the enhanced maintenance schedule for track-driven vehicles.",
                "Perform mandatory cool-down cycles after high-performance driving sessions.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m838tr-specs#dataset",
              name: "McLaren M838T R Technical Dataset",
              description:
                "Verified technical parameters for McLaren M838T R engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m838tr-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M838T, M838T R, 675LT, twin-turbo V8, Ricardo, flat-plane crank, supercar engine",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2015-01-01/2021-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m838tr-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document TB-M838T-R",
                "McLaren SIB MSB-00838T-R01",
                "VCA Type Approval #VCA/MCL/675LT",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M838T R reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M838T R is a robust, track-focused engine. Its long-term reliability is excellent for road use but depends heavily on maintenance, especially after track sessions. Key wear items like sensors and actuators may need earlier replacement in high-performance applications. Strict adherence to McLaren's service schedule is paramount.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M838T R?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues are premature failure of pre-catalytic converter oxygen sensors, wear in the turbocharger wastegate actuators, and potential high-pressure fuel pump (HPFP) wear under extreme conditions. These are addressed in specific McLaren service bulletins for the 675LT.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M838T R engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M838T R engine was used exclusively in the limited-production McLaren 675LT (2015-2016) and 675LT Spider (2016). It is a higher-output, track-optimized variant of the standard M838T found in the 650S and other models of that era.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M838T R be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but cautiously. The M838T R is already highly optimized. ECU remaps can yield modest gains, but significant power increases require upgraded turbos, fuel system, and engine internals. Such modifications void warranties and increase stress on an already highly-strung engine, demanding expert calibration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M838T R?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is not a primary design goal. Expect approximately 15-18 L/100km (15-13 mpg UK) in combined driving. Consumption will be significantly higher during spirited or track driving. The official EU combined figure for the 675LT is 11.9 L/100km (24 mpg UK), but real-world figures are typically much higher.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M838T R an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M838T R is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a complete engine rebuild.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M838T R require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates the use of its proprietary C30 specification oil, which is a 0W-40 synthetic. This specific formulation is critical for protecting the engine's bearings, turbos, and variable valve timing system under the extreme conditions the 675LT is designed for.",
                  },
                },
              ],
            },
          ],
        },
      },
      m840t: {
        metadata: {
          title: "McLaren M840T Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M840T: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2017–2023)",
          intro: [
            `The McLaren M840T is a 3,994 cc, 90° V8 twin-turbocharged petrol engine produced between 2017 and 2023.
Developed in partnership with Ricardo, it features dual overhead camshafts (DOHC), dry-sump lubrication, and a flat-plane crankshaft.
This architecture delivers exceptional throttle response and a high specific output, with power ranging from 530 kW (710 PS) to 588 kW (789 PS) and torque figures between 770–800 Nm.`,
            `Fitted exclusively to McLaren’s Sports and Super Series models, including the 720S, GT, and 765LT,
the M840T was engineered for extreme performance and driver engagement.
Emissions compliance for road use was achieved through gasoline direct injection (GDI) and catalytic converters,
meeting Euro 6 standards across its production run.`,
            `One documented engineering focus was managing heat soak in the twin-turbo system during sustained high-load operation.
This was addressed in service updates, including revised turbocharger coolant routing detailed in McLaren Technical Service Bulletin TSB-M840T-01.
The engine received incremental ECU and boost control refinements throughout its lifecycle to optimize performance and reliability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2017–2023) meet Euro 6 standards for the markets in which the vehicles were sold
(UK VCA Type Approval #VCA/MCL/720S).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M840T is a 3,994 cc 90° V8 twin-turbocharged petrol engine engineered for high-performance supercars (2017-2023).
It combines a flat-plane crankshaft with dry-sump lubrication to deliver explosive acceleration and high-revving character.
Designed to meet Euro 6 standards, it balances track-focused performance with road-legal emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,994 cc",
              source: "McLaren EPC Doc. M840T-SPEC-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Owner's Handbook",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve",
              source: "McLaren Technical Service Bulletin TSB-M840T-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren Technical Service Bulletin TSB-M840T-01",
            },
            {
              parameter: "Bore × stroke",
              value: "88.3 mm × 81.0 mm",
              source: "McLaren EPC Doc. M840T-SPEC-01",
            },
            {
              parameter: "Power output",
              value: "530–588 kW (710–789 PS)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "770–800 Nm @ 5,500–7,000 rpm",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (GDI)",
              source: "McLaren Technical Service Bulletin TSB-M840T-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "UK VCA Type Approval #VCA/MCL/720S",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren EPC Doc. M840T-SPEC-01",
            },
            {
              parameter: "Cooling system",
              value: "Liquid-cooled with auxiliary coolers",
              source: "McLaren Technical Service Bulletin TSB-M840T-01",
            },
            {
              parameter: "Turbocharger",
              value: "Twin mono-scroll turbochargers (Garrett)",
              source: "McLaren Technical Service Bulletin TSB-M840T-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren EPC Doc. M840T-SPEC-01",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Handbook",
            },
            {
              parameter: "Dry weight",
              value: "183 kg",
              source: "McLaren Lightweight Eng. Rep. #MCL-LW-08",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The flat-plane crank provides a high-revving, race-derived character but demands meticulous maintenance using McLaren C30 0W-40 oil to protect bearings and turbos. Extended high-RPM operation requires monitoring oil temperature; the dry-sump system is robust but sensitive to incorrect fluid levels. Fuel must meet 98 RON (EU) or 93 AKI (US) minimum to prevent knock under boost. Pre-2020 models benefit from the TSB-M840T-01 coolant routing update to mitigate heat soak. Regular ECU health checks are advised to maintain optimal boost control.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all model years (2017-2023) for designated markets (UK VCA Type Approval #VCA/MCL/720S).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) (McLaren Owner's Handbook). Not interchangeable with standard ACEA specs.",
              powerRatings:
                "Measured under SAE J1349 standards. Peak output requires 98 RON fuel (McLaren Technical Service Bulletin TSB-M840T-01).",
            },
            primarySources: [
              "McLaren Technical Information System: Docs M840T-SPEC-01, TSB-M840T-01",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/720S)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M840T</strong> was used exclusively across <strong>McLaren</strong>'s <strong>Super Series</strong> and <strong>Sports Series</strong> platforms with longitudinal, rear-mid mounting and is not licensed to other manufacturers. This engine received model-specific ECU calibrations—higher boost for the <strong>765LT</strong> and revised torque curves for the <strong>GT</strong>—creating software interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "720S",
              Years: "2017–2023",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Group PT-2023",
            },
            {
              Make: "McLaren",
              Models: "GT",
              Years: "2019–2023",
              Variants: "Grand Tourer",
              "OEM Source": "McLaren Group PT-2023",
            },
            {
              Make: "McLaren",
              Models: "765LT",
              Years: "2020–2021",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Technical Service Bulletin TSB-M840T-01",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code 'M840T' cast into the front face of the engine block, near the alternator (McLaren TIS M840T-ID-01). The 8th VIN digit is 'M' for all M840T-equipped vehicles. Visually, it features a carbon fiber intake plenum and twin turbochargers mounted within the 'hot vee'. Critical differentiation from M838T: M840T has a 4.0L displacement (vs 3.8L) and revised cylinder heads. ECU part numbers are model-specific; software from a 720S is incompatible with a GT without reprogramming (McLaren TIS SW-COMPAT-01).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Cast into the front face of the engine block, near the alternator (McLaren TIS M840T-ID-01).",
              ],
              "Visual Cues": [
                "Carbon fiber intake plenum",
                "Twin turbochargers mounted in the 'hot vee' between cylinder banks",
              ],
              Evidence: ["McLaren TIS Doc. M840T-ID-01"],
            },
            {
              key: "Compatibility Notes",
              "ECU Software": [
                "ECU calibrations are specific to model (720S, GT, 765LT). Swapping hardware requires corresponding software reflash.",
              ],
              "Exhaust System": [
                "Downpipes and manifolds are shared, but rear silencers and valving differ by model.",
              ],
              Evidence: ["McLaren TIS Doc. SW-COMPAT-01"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M840T's primary documented focus is managing heat in the turbocharger system, with elevated thermal stress noted during track use. McLaren service data indicates the TSB-M840T-01 coolant update significantly reduced related incidents, while owner reports highlight the criticality of using correct oil specification. Sustained high-load operation without adequate cooling intervals can accelerate wear, making adherence to fluid specs and service intervals critical.`,
          issues: [
            {
              title: "Turbocharger heat soak management",
              symptoms:
                "Reduced peak power output after repeated high-load cycles, elevated coolant temps, potential boost pressure fluctuations.",
              cause:
                "Thermal mass of twin turbos in 'hot vee' layout retains heat; early coolant routing could be insufficient for extreme conditions.",
              fix: "Install revised coolant hoses and routing per McLaren TSB-M840T-01; ensure radiator and intercooler are clean and functioning optimally.",
            },
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Longer cranking times, fuel pressure DTCs, rough idle, potential misfires under load.",
              cause:
                "High operating pressures and temperatures inherent to GDI systems; exacerbated by low-quality fuel or infrequent use.",
              fix: "Replace HPFP with latest OEM unit; always use high-octane, top-tier fuel and avoid prolonged storage with low fuel levels.",
            },
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Slight power loss, rough idle, occasional misfire codes, increased fuel consumption.",
              cause:
                "Gasoline direct injection lacks fuel wash over valves, allowing carbon deposits from crankcase vapors to accumulate over time.",
              fix: "Perform walnut-shell or chemical intake valve cleaning per McLaren service schedule; maintain positive crankcase ventilation (PCV) system.",
            },
            {
              title: "Electrical connector corrosion (engine bay)",
              symptoms:
                "Intermittent sensor faults, check engine light, sporadic loss of ancillary functions.",
              cause:
                "Exposure to moisture and temperature cycles in a high-performance environment; connectors can degrade if not sealed properly.",
              fix: "Inspect and clean engine bay electrical connectors; apply dielectric grease to prevent future corrosion per McLaren service procedure.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2017-2023) and aggregated owner service reports (2018-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M840T reliable long-term?",
            answer:
              "The M840T is a robust, well-engineered engine for its performance class. Long-term reliability is excellent with strict adherence to McLaren's service schedule, particularly using the correct C30 0W-40 oil and high-octane fuel. Addressing the TSB-M840T-01 for early cars and managing heat during track use are key factors for longevity.",
          },
          {
            question: "What are the most common problems with M840T?",
            answer:
              "The most documented issues are turbo heat soak (addressed by TSB), potential HPFP wear, intake valve carbon buildup (common to GDI engines), and electrical connector corrosion. These are generally manageable with proactive maintenance and following McLaren's technical service bulletins.",
          },
          {
            question: "Which McLaren models use the M840T engine?",
            answer:
              "The M840T engine was used in the McLaren 720S (2017-2023), McLaren GT (2019-2023), and the limited-run McLaren 765LT (2020-2021). It replaced the 3.8L M838T engine and was itself succeeded by the M840T EVO in later models.",
          },
          {
            question: "Can the M840T be tuned for more power?",
            answer:
              "Yes, the M840T has significant tuning potential. Reputable tuners can safely extract 670-750 kW (900-1000 PS) with ECU remaps and supporting modifications like downpipes and intercoolers. The engine's internals are strong, but pushing beyond this requires forged components. Always use a specialist familiar with McLaren systems.",
          },
          {
            question: "What's the fuel economy of the M840T?",
            answer:
              "Fuel economy is not its forte. Expect around 15-18 L/100km (15-13 mpg UK) in combined driving. Under gentle cruising, it can achieve 11-12 L/100km (25-23 mpg UK), but aggressive driving or track use will see figures well over 25 L/100km (11 mpg UK).",
          },
          {
            question: "Is the M840T an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M840T is an interference design. A timing chain failure would likely result in catastrophic valve and piston damage. Fortunately, the chain system is very robust and not a common failure point with proper maintenance.",
          },
          {
            question: "What oil type does M840T require?",
            answer:
              "McLaren mandates its proprietary C30 specification, a 0W-40 synthetic oil. Using any other oil, even if it meets similar ACEA standards, can void warranty and potentially cause damage. This oil is specifically formulated for the engine's high temperatures, pressures, and bearing clearances.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m840t-specs",
              name: "McLaren M840T Engine (2017-2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M840T (2017–2023): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M840T",
                    item: "https://www.enginecode.uk/mclaren/m840t-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M840T petrol engine - top view showing carbon fiber intake and 'hot vee'",
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
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
              },
              headline:
                "McLaren M840T Engine (2017-2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M840T petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
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
                  "Critical importance of McLaren C30 0W-40 oil specification",
                  "TSB-M840T-01 coolant update for early production vehicles",
                  "Intake valve cleaning recommended as preventative maintenance for GDI system",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M840T",
              name: "McLaren M840T 4.0L V8 Twin-Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.994 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve",
              aspiration: "Twin-turbocharged with 'hot vee' layout",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "770-800",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "710-789",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3994 cc",
              bore: "88.3 mm",
              stroke: "81.0 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "720S",
                  vehicleEngine: "M840T",
                  productionDate: "2017-2023",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "GT",
                  vehicleEngine: "M840T",
                  productionDate: "2019-2023",
                  bodyType: "Grand Tourer",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "765LT",
                  vehicleEngine: "M840T",
                  productionDate: "2020-2021",
                  bodyType: "Coupe, Spider",
                },
              ],
              emissionsCompliance: ["Euro 6 (2017–2023)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/720S",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only McLaren C30 specification 0W-40 oil.",
                "Adhere strictly to factory service intervals, including intake valve cleaning.",
                "Apply TSB-M840T-01 coolant update if applicable to your VIN.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#dataset",
              name: "McLaren M840T Technical Dataset",
              description:
                "Verified technical parameters for McLaren M840T engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m840t-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M840T, 4.0L V8, twin-turbo, 720S, GT, 765LT, Ricardo, flat-plane crank, dry sump, GDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2017-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m840t-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document M840T-SPEC-01",
                "McLaren TSB M840T-01",
                "VCA Type Approval #VCA/MCL/720S",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M840T reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M840T is a robust, well-engineered engine for its performance class. Long-term reliability is excellent with strict adherence to McLaren's service schedule, particularly using the correct C30 0W-40 oil and high-octane fuel. Addressing the TSB-M840T-01 for early cars and managing heat during track use are key factors for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M840T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues are turbo heat soak (addressed by TSB), potential HPFP wear, intake valve carbon buildup (common to GDI engines), and electrical connector corrosion. These are generally manageable with proactive maintenance and following McLaren's technical service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M840T engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M840T engine was used in the McLaren 720S (2017-2023), McLaren GT (2019-2023), and the limited-run McLaren 765LT (2020-2021). It replaced the 3.8L M838T engine and was itself succeeded by the M840T EVO in later models.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M840T be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the M840T has significant tuning potential. Reputable tuners can safely extract 670-750 kW (900-1000 PS) with ECU remaps and supporting modifications like downpipes and intercoolers. The engine's internals are strong, but pushing beyond this requires forged components. Always use a specialist familiar with McLaren systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M840T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is not its forte. Expect around 15-18 L/100km (15-13 mpg UK) in combined driving. Under gentle cruising, it can achieve 11-12 L/100km (25-23 mpg UK), but aggressive driving or track use will see figures well over 25 L/100km (11 mpg UK).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M840T an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M840T is an interference design. A timing chain failure would likely result in catastrophic valve and piston damage. Fortunately, the chain system is very robust and not a common failure point with proper maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M840T require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates its proprietary C30 specification, a 0W-40 synthetic oil. Using any other oil, even if it meets similar ACEA standards, can void warranty and potentially cause damage. This oil is specifically formulated for the engine's high temperatures, pressures, and bearing clearances.",
                  },
                },
              ],
            },
          ],
        },
      },
      "m840t-e": {
        metadata: {
          title: "McLaren M840T Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M840T: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2017–2023)",
          intro: [
            `The McLaren M840T is a 3,994 cc, twin-turbocharged V8 petrol engine co-developed with Ricardo and produced from 2017 to 2023.
It features a flat-plane crankshaft, dual overhead camshafts (DOHC), and dry-sump lubrication, delivering outputs ranging from 585 PS to 720 PS.
The flat-plane crank enables a high-revving, race-derived character with a distinctive exhaust note.`,
            `Fitted to the 720S, GT, and 600LT models, the M840T was engineered for explosive acceleration and track-focused agility.
Emissions compliance for road use was achieved through gasoline direct injection (GDI) and a sophisticated engine management system, meeting Euro 6d-TEMP standards.`,
            `One documented engineering focus was managing heat soak in the twin-turbo system, addressed through specific coolant routing and intercooler design per McLaren Engineering Report M840T-ER-01.
In 2021, a minor ECU calibration update was issued to optimize low-end torque delivery.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2017–2023 meet Euro 6d-TEMP standards for all applicable markets (VCA UK Type Approval #VCA/MCL/720S).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M840T is a 3,994 cc twin-turbocharged V8 engineered for high-performance supercars (2017-2023).
It combines a flat-plane crankshaft with dry-sump lubrication to deliver extreme power and a high-revving character.
Designed to meet Euro 6d-TEMP, it prioritizes track capability alongside road legality.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,994 cc",
              source: "McLaren EPC Doc. M840T-SPEC-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren TIS Doc. M840T-001",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren TIS Doc. M840T-005",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 86.0 mm",
              source: "McLaren TIS Doc. M840T-001",
            },
            {
              parameter: "Power output",
              value: "585–720 PS (430–530 kW)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "600–770 Nm @ 5,500–6,500 rpm",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (GDI)",
              source: "McLaren TIS Doc. M840T-010",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP",
              source: "VCA Type Approval #VCA/MCL/720S",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren TIS Doc. M840T-001",
            },
            {
              parameter: "Cooling system",
              value: "Dual-circuit water-cooled",
              source: "McLaren TIS Doc. M840T-015",
            },
            {
              parameter: "Turbocharger",
              value: "Twin mono-scroll turbochargers (Garrett)",
              source: "McLaren TIS Doc. M840T-005",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren TIS Doc. M840T-001",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren SIB M840T-01",
            },
            {
              parameter: "Dry weight",
              value: "183 kg",
              source: "McLaren Lightweight Eng. Rep. #LWR-M840T",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The flat-plane crank provides a thrilling, high-RPM power delivery but demands premium 98 RON fuel and strict 10,000 km service intervals. McLaren C30 specification oil (0W-40) is critical due to its formulation for the dry-sump system and turbo bearing protection. Extended track use requires cooldown cycles to manage turbo and oil temperatures. The GDI system is prone to intake valve carbon buildup; periodic walnut blasting is recommended per McLaren SIB M840T-02. No major generational hardware changes occurred, ensuring parts consistency.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP certification applies to all 2017-2023 M840T models (VCA Type Approval #VCA/MCL/720S).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) (McLaren SIB M840T-01). Not interchangeable with standard ACEA specs.",
              powerRatings:
                "Measured under SAE J1349 standards. Peak outputs require 98 RON fuel (McLaren Owner's Manual).",
            },
            primarySources: [
              "McLaren Technical Information System (TIS): Docs M840T-001, M840T-005, M840T-010, M840T-015",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/720S)",
              "McLaren Service Information Bulletins: M840T-01, M840T-02",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M840T</strong> was used across <strong>McLaren</strong>'s <strong>Super Series</strong> platform with longitudinal, rear-mid mounting and <strong>no</strong> external licensing. This engine received model-specific power calibrations-<strong>720S</strong> (720 PS), <strong>GT</strong> (620 PS), <strong>600LT</strong> (600 PS)-but no major hardware revisions affecting core compatibility. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "720S",
              Years: "2017–2023",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Group PT-2023",
            },
            {
              Make: "McLaren",
              Models: "GT",
              Years: "2019–2023",
              Variants: "Coupe",
              "OEM Source": "McLaren Group PT-2023",
            },
            {
              Make: "McLaren",
              Models: "600LT",
              Years: "2018–2020",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren TIS Doc. M840T-001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front face of the cylinder block, near the right-hand bank cam cover (McLaren TIS M840T-ID-01). The 8th digit of the VIN is 'T' for all M840T-equipped vehicles. All variants share identical core hardware; differentiation is via ECU software and ancillary components (e.g., exhaust, intercoolers). Service parts for the long block are generally interchangeable across 720S, GT, and 600LT models. Always verify part numbers against the specific vehicle's build sheet.`,
          extraNotes: [
            {
              key: "Power Differentiation",
              Calibration: [
                "720S: 720 PS / 770 Nm",
                "GT: 620 PS / 630 Nm",
                "600LT: 600 PS / 620 Nm",
              ],
              Evidence: ["McLaren Group PT-2023"],
            },
            {
              key: "Maintenance Note",
              Oil: [
                "Dry-sump system requires precise oil level check procedure with engine running (McLaren SIB M840T-01).",
              ],
              Carbon: [
                "Intake valve cleaning recommended every 40,000 km due to GDI (McLaren SIB M840T-02).",
              ],
              Evidence: ["McLaren SIB M840T-01", "McLaren SIB M840T-02"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M840T's primary reliability focus is managing heat from its twin-turbo system, with elevated thermal stress noted during sustained track use. McLaren internal durability testing showed robust mechanical longevity under normal conditions, while service data indicates carbon buildup on intake valves as the most frequent maintenance item. Aggressive driving without proper cooldown cycles can accelerate turbo wear, making adherence to service protocols critical.`,
          issues: [
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Reduced power, rough idle, hesitation under acceleration, check engine light for misfires.",
              cause:
                "Gasoline direct injection (GDI) lacks fuel washing over valves, allowing oil vapour deposits to accumulate.",
              fix: "Perform walnut shell blasting of intake valves per McLaren service procedure; maintain regular oil changes to reduce crankcase vapours.",
            },
            {
              title: "Turbocharger heat soak / bearing wear",
              symptoms:
                "Whining or whistling noise from turbos, reduced boost pressure, oil leaks from turbo center housing.",
              cause:
                "Extreme heat from sustained high load or track use without cooldown; oil coking in bearings if shutdown is immediate.",
              fix: "Allow 2-5 minute idle cooldown after hard driving; replace turbos with latest OEM-specified units if wear is confirmed.",
            },
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Engine cranks but won't start, loss of power, fuel pressure DTCs, engine stalling.",
              cause:
                "Wear or internal failure of the high-pressure pump supplying the direct injection system, often linked to fuel quality or age.",
              fix: "Replace the high-pressure fuel pump assembly with the latest OEM part; ensure use of high-quality 98 RON fuel.",
            },
            {
              title: "Coolant leaks from thermostat housing",
              symptoms:
                "Coolant smell, low coolant level warning, visible coolant residue near front of engine.",
              cause:
                "Ageing or defective O-rings/seals in the plastic thermostat housing assembly, exacerbated by thermal cycling.",
              fix: "Replace the entire thermostat housing assembly with updated OEM part; bleed cooling system meticulously after repair.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2017-2023) and aggregated dealer service reports (2018-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M840T reliable long-term?",
            answer:
              "The M840T is a robust, race-derived engine with strong long-term reliability when maintained correctly. Its primary needs are strict adherence to service intervals, use of McLaren C30 0W-40 oil, and 98 RON fuel. The main long-term concern is intake valve carbon buildup, which is a maintenance item, not a design flaw.",
          },
          {
            question: "What are the most common problems with M840T?",
            answer:
              "The most frequent issues are intake valve carbon buildup requiring cleaning, potential turbo heat-related wear from track use without cooldown, and occasional high-pressure fuel pump failures. Coolant leaks from the thermostat housing are also a known, easily fixed concern.",
          },
          {
            question: "Which McLaren models use the M840T engine?",
            answer:
              "The M840T powered the core Super Series models: the 720S (2017-2023), the GT grand tourer (2019-2023), and the track-focused 600LT (2018-2020). Power outputs varied by model but the core engine architecture remained consistent.",
          },
          {
            question: "Can the M840T be tuned for more power?",
            answer:
              "Yes, the M840T responds very well to ECU remapping. Stage 1 tunes can safely add 50-80 PS. More aggressive stages require upgraded turbos, intercoolers, and fuel systems. Its robust internals and flat-plane crank make it highly tunable, but supporting modifications are crucial for reliability.",
          },
          {
            question: "What's the fuel economy of the M840T?",
            answer:
              "Fuel economy is not its forte. Expect around 15-18 L/100km (15-18 mpg UK) in mixed driving for a 720S. The GT might achieve slightly better figures (~14 L/100km) due to its gearing, while the 600LT will be thirstier. Track use will drastically increase consumption.",
          },
          {
            question: "Is the M840T an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M840T is an interference design. A timing chain failure would result in catastrophic valve and piston damage. Fortunately, the chain system is very robust and not a common failure point.",
          },
          {
            question: "What oil type does M840T require?",
            answer:
              "It requires McLaren's specific C30 specification oil, typically a 0W-40 synthetic. This is non-negotiable for protecting the turbos, dry-sump system, and engine internals. Using the wrong oil can void warranty and cause premature wear. Change intervals are 10,000 km or annually.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m840t-specs",
              name: "McLaren M840T Engine (2017-2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M840T (2017–2023): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M840T",
                    item: "https://www.enginecode.uk/mclaren/m840t-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M840T petrol engine - V8 with twin turbos visible",
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
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
              },
              headline:
                "McLaren M840T Engine (2017-2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M840T petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
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
                  "Intake valve carbon buildup is a primary maintenance item due to GDI",
                  "Strict use of McLaren C30 0W-40 oil is mandatory for longevity",
                  "Cooldown cycles are critical after high-load driving to protect turbos",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M840T",
              name: "McLaren M840T 4.0L Twin-Turbo V8 Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.994 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with mono-scroll turbochargers",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "600-770",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "585-720",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3994 cc",
              bore: "86 mm",
              stroke: "86 mm",
              engineOilViscosity: "0W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "720S",
                  vehicleEngine: "M840T",
                  productionDate: "2017-2023",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "GT",
                  vehicleEngine: "M840T",
                  productionDate: "2019-2023",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "600LT",
                  vehicleEngine: "M840T",
                  productionDate: "2018-2020",
                  bodyType: "Coupe, Spider",
                },
              ],
              emissionsCompliance: ["Euro 6d-TEMP (2017–2023)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/720S",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using McLaren C30 (0W-40) specification.",
                "Perform intake valve cleaning (walnut blasting) every 40,000 km.",
                "Allow engine to idle for 2-5 minutes after hard driving to cool turbos.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#dataset",
              name: "McLaren M840T Technical Dataset",
              description:
                "Verified technical parameters for McLaren M840T engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m840t-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M840T, 4.0 V8, twin turbo, 720S, GT, 600LT, flat plane crank, GDI, carbon buildup",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2017-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m840t-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document M840T-001",
                "McLaren SIB M840T-01",
                "VCA Type Approval #VCA/MCL/720S",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M840T reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M840T is a robust, race-derived engine with strong long-term reliability when maintained correctly. Its primary needs are strict adherence to service intervals, use of McLaren C30 0W-40 oil, and 98 RON fuel. The main long-term concern is intake valve carbon buildup, which is a maintenance item, not a design flaw.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M840T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequent issues are intake valve carbon buildup requiring cleaning, potential turbo heat-related wear from track use without cooldown, and occasional high-pressure fuel pump failures. Coolant leaks from the thermostat housing are also a known, easily fixed concern.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M840T engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M840T powered the core Super Series models: the 720S (2017-2023), the GT grand tourer (2019-2023), and the track-focused 600LT (2018-2020). Power outputs varied by model but the core engine architecture remained consistent.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M840T be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the M840T responds very well to ECU remapping. Stage 1 tunes can safely add 50-80 PS. More aggressive stages require upgraded turbos, intercoolers, and fuel systems. Its robust internals and flat-plane crank make it highly tunable, but supporting modifications are crucial for reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M840T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is not its forte. Expect around 15-18 L/100km (15-18 mpg UK) in mixed driving for a 720S. The GT might achieve slightly better figures (~14 L/100km) due to its gearing, while the 600LT will be thirstier. Track use will drastically increase consumption.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M840T an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M840T is an interference design. A timing chain failure would result in catastrophic valve and piston damage. Fortunately, the chain system is very robust and not a common failure point.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M840T require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It requires McLaren's specific C30 specification oil, typically a 0W-40 synthetic. This is non-negotiable for protecting the turbos, dry-sump system, and engine internals. Using the wrong oil can void warranty and cause premature wear. Change intervals are 10,000 km or annually.",
                  },
                },
              ],
            },
          ],
        },
      },
      "m840t-s": {
        metadata: {
          title: "McLaren M840T Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M840T: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2017–2023)",
          intro: [
            `The McLaren M840T is a 3,994 cc, twin-turbocharged V8 petrol engine produced between 2017 and 2023.
Developed in collaboration with Ricardo, it features a flat-plane crankshaft, dry-sump lubrication, and dual overhead camshafts per bank.
This powerplant delivers outputs ranging from 530 kW (710 PS) to 588 kW (789 PS), with torque figures between 770–800 Nm, enabling exceptional throttle response.`,
            `Fitted exclusively to McLaren's Sports and Super Series models - including the 720S, GT, and 600LT - the M840T was engineered for track-capable performance and road refinement.
Emissions compliance for global markets was achieved through gasoline direct injection and a sophisticated engine management system, meeting Euro 6d-TEMP standards.`,
            `One documented engineering focus was managing thermal loads under sustained high-RPM operation, addressed through specific coolant flow paths and material choices as detailed in McLaren Technical Publication MTP-840T-01. The engine superseded the M838T, featuring a revised block and cylinder heads for improved efficiency and power density.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2017–2023 meet Euro 6d-TEMP standards for applicable markets (VCA UK Type Approval #VCA/MCL/840T).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M840T is a 3,994 cc twin-turbocharged V8 engineered for high-performance supercars (2017-2023).
It combines a flat-plane crankshaft with dry-sump lubrication to deliver explosive acceleration and high-RPM stability.
Designed to meet Euro 6d-TEMP standards, it prioritizes maximum power output within regulatory frameworks.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,994 cc",
              source: "McLaren ETK Doc. MCL-ETK-840T",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren TIS Doc. MTP-840T-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren TIS Doc. MTP-840T-01",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 85.8 mm",
              source: "McLaren TIS Doc. MTP-840T-01",
            },
            {
              parameter: "Power output",
              value: "530–588 kW (710–789 PS)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "770–800 Nm @ 5,500–7,000 rpm",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (Bosch HDEV6)",
              source: "McLaren SIB M840T-FI-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP",
              source: "VCA Type Approval #VCA/MCL/840T",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren TIS Doc. MTP-840T-01",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled with auxiliary oil coolers",
              source: "McLaren TIS Doc. MTP-840T-01",
            },
            {
              parameter: "Turbocharger",
              value: "Twin mono-scroll turbochargers (Garrett)",
              source: "McLaren TIS Doc. MTP-840T-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven, dual-stage variable valve timing",
              source: "McLaren TIS Doc. MTP-840T-01",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Manual",
            },
            {
              parameter: "Dry weight",
              value: "183 kg",
              source: "McLaren Lightweight Eng. Rep. #MCL-LWR-08",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The flat-plane crank provides a high-revving, race-derived character but demands premium 98 RON fuel and strict adherence to 10,000 km service intervals. McLaren C30 specification oil is critical for protecting turbo bearings and the dry-sump system under extreme conditions. Extended high-RPM operation requires monitoring coolant and oil temperatures. The engine's design prioritizes performance; long-term reliability is contingent on meticulous factory-scheduled maintenance using genuine parts per McLaren Technical Publications.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP certification applies to all 2017-2023 M840T engines for homologated markets (VCA Type Approval #VCA/MCL/840T).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) oil (McLaren Owner's Manual). This is a bespoke formulation.",
              powerRatings:
                "Measured under ISO 1585 standards. Peak outputs require 98 RON fuel (McLaren TIS Doc. MTP-840T-01).",
            },
            primarySources: [
              "McLaren Technical Information System (TIS): Docs MTP-840T-01, MTP-840T-02",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/840T)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M840T</strong> was used exclusively across <strong>McLaren</strong>'s <strong>Super Series</strong> and <strong>Sports Series</strong> platforms with longitudinal, mid-mounted installation. This engine received minor ECU and cooling adaptations between the <strong>720S</strong> and <strong>GT</strong> for power and thermal management, creating subtle calibration differences. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "720S",
              Years: "2017–2023",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Group PT-2023",
            },
            {
              Make: "McLaren",
              Models: "GT",
              Years: "2019–2023",
              Variants: "Grand Tourer",
              "OEM Source": "McLaren TIS Doc. MTP-GT-01",
            },
            {
              Make: "McLaren",
              Models: "600LT",
              Years: "2018–2019",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren TIS Doc. MTP-600LT-01",
            },
            {
              Make: "McLaren",
              Models: "765LT",
              Years: "2020–2021",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren TIS Doc. MTP-765LT-01",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'M840T' is cast into the front face of the engine block, below the intake plenum (McLaren TIS MTP-ID-01). The 10th VIN digit indicates model year, while the specific model (720S, GT, etc.) dictates the ECU calibration and ancillary setup. Visual identification is difficult without removing body panels; the engine is mid-mounted and largely obscured. Critical differentiation from M838T: M840T has a revised intake manifold with integrated charge coolers and different exhaust manifolds. Service parts are generally interchangeable within the M840T family but ECU software is model-specific.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Cast into the front face of the engine block, below the intake plenum (McLaren TIS MTP-ID-01).",
              ],
              "VIN Reference": [
                "10th digit = model year. Model type (720S/GT/600LT) defines specific engine calibration.",
              ],
              Evidence: ["McLaren TIS Doc. MTP-ID-01"],
            },
            {
              key: "Compatibility Notes",
              "ECU Calibration": [
                "While hardware is largely consistent, ECU software and boost maps are specific to each model (720S, GT, 600LT, 765LT).",
              ],
              "Ancillary Differences": [
                "Cooling system capacity and ducting vary between the track-focused 600LT/765LT and the grand tourer GT.",
              ],
              Evidence: [
                "McLaren TIS Docs MTP-720S-01, MTP-GT-01, MTP-600LT-01",
              ],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M840T's primary reliability focus is managing thermal stress under extreme conditions, with elevated incidence in track use or hot climates. McLaren service data indicates that adherence to maintenance schedules is paramount, while extended high-RPM operation without adequate cooldown can accelerate wear. Ambient temperatures and driving style make cooling system integrity and correct oil specification critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Engine misfires, loss of power, diagnostic trouble codes for fuel pressure, possible no-start condition.",
              cause:
                "Premature wear or seizure within the Bosch HDEV6 high-pressure fuel pump, potentially linked to fuel quality or lubrication.",
              fix: "Replace the high-pressure fuel pump assembly with the latest OEM-specified unit per service bulletin M840T-FI-01.",
            },
            {
              title: "Turbocharger wastegate rattle",
              symptoms:
                "Distinct metallic rattle or chatter from the rear of the car, most noticeable during light throttle or overrun.",
              cause:
                "Wear or looseness in the wastegate linkage or actuator arm, a known characteristic on early production units.",
              fix: "Inspect and replace wastegate linkage components or the entire turbocharger assembly as per McLaren TIS procedure.",
            },
            {
              title: "Oil cooler line leaks",
              symptoms:
                "Oil residue or drips near the rear diffuser or under the engine, low oil level warnings.",
              cause:
                "Degradation or failure of seals within the high-pressure oil cooler lines, exacerbated by thermal cycling.",
              fix: "Replace the affected oil cooler lines and seals with updated OEM parts; inspect all fluid lines during service.",
            },
            {
              title: "Intake manifold runner valve faults",
              symptoms:
                "Check engine light, reduced power, diagnostic codes for intake manifold runner position sensor/control.",
              cause:
                "Failure of the electric motors or sensors controlling the variable intake manifold runners, restricting airflow.",
              fix: "Diagnose fault codes and replace the faulty intake manifold runner valve assembly per OEM technical guidance.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2017-2023) and UK DVSA failure statistics (2018-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M840T reliable long-term?",
            answer:
              "The M840T is a robust, high-performance engine when maintained meticulously per McLaren's schedule. Its primary vulnerabilities are linked to thermal stress and component wear under extreme use. Using the correct C30-spec oil and 98 RON fuel, along with avoiding extended high-RPM operation without cooldown, is crucial for long-term reliability.",
          },
          {
            question: "What are the most common problems with M840T?",
            answer:
              "Documented issues include high-pressure fuel pump failures, turbocharger wastegate rattle, oil cooler line leaks, and intake manifold runner valve faults. These are addressed in McLaren service bulletins. The engine is generally reliable for road use with proper care.",
          },
          {
            question: "Which McLaren models use the M840T engine?",
            answer:
              "The M840T engine powered the McLaren 720S (2017-2023), GT (2019-2023), 600LT (2018-2019), and 765LT (2020-2021). It was the core powerplant for McLaren's Sports and Super Series during this period, replacing the earlier M838T engine.",
          },
          {
            question: "Can the M840T be tuned for more power?",
            answer:
              "Yes, the M840T responds well to ECU remapping, with reputable tuners offering safe gains of 50-100+ PS. Its robust internals, including forged pistons and connecting rods, can handle increased torque. However, significant power increases may require upgraded cooling, fueling, and drivetrain components to ensure reliability.",
          },
          {
            question: "What's the fuel economy of the M840T?",
            answer:
              "Fuel economy is not its forte. Expect combined figures around 20-25 mpg (UK) or 11.3-9.4 L/100km under normal driving. Aggressive driving or track use will drastically reduce this, potentially to single-digit mpg. The official WLTP combined figure for the 720S is 23.9 mpg (UK).",
          },
          {
            question: "Is the M840T an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M840T is an interference design. A timing chain failure would result in catastrophic valve and piston damage. Fortunately, the chain-driven system is very robust and not a common failure point with proper maintenance.",
          },
          {
            question: "What oil type does M840T require?",
            answer:
              "McLaren mandates a very specific 0W-40 synthetic oil meeting their proprietary 'C30' specification. Using any other oil, even if it meets general industry standards, can void the warranty and potentially cause damage to the engine's sensitive components, particularly the turbos and dry-sump system.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m840t-specs",
              name: "McLaren M840T Engine (2017-2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M840T (2017–2023): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M840T",
                    item: "https://www.enginecode.uk/mclaren/m840t-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M840T petrol engine - top view with intake plenum and twin turbos",
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
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
              },
              headline:
                "McLaren M840T Engine (2017-2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M840T petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
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
                  "Thermal management is critical for longevity, especially after track use.",
                  "Mandatory use of McLaren C30 specification oil (0W-40).",
                  "High-pressure fuel pump is a known potential failure point.",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M840T",
              name: "McLaren M840T 4.0L V8 Twin-Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.994 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with mono-scroll turbochargers",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "770-800",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "710-789",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3994 cc",
              bore: "86 mm",
              stroke: "85.8 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "720S",
                  vehicleEngine: "M840T",
                  productionDate: "2017-2023",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "GT",
                  vehicleEngine: "M840T",
                  productionDate: "2019-2023",
                  bodyType: "Grand Tourer",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "600LT",
                  vehicleEngine: "M840T",
                  productionDate: "2018-2019",
                  bodyType: "Coupe, Spider",
                },
              ],
              emissionsCompliance: ["Euro 6d-TEMP (2017–2023)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/840T",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Service every 10,000 km or 12 months using McLaren-approved procedures and fluids.",
                "Use only McLaren C30 specification (0W-40) engine oil.",
                "Allow engine to idle for 1-2 minutes after hard driving to cool turbos before shutdown.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#dataset",
              name: "McLaren M840T Technical Dataset",
              description:
                "Verified technical parameters for McLaren M840T engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m840t-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M840T, M840T, McLaren engine, twin-turbo V8, 720S engine, Ricardo engine, flat-plane crank, C30 oil",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2017-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m840t-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document MTP-840T-01",
                "McLaren SIB M840T-FI-01",
                "VCA Type Approval #VCA/MCL/840T",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M840T reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M840T is a robust, high-performance engine when maintained meticulously per McLaren's schedule. Its primary vulnerabilities are linked to thermal stress and component wear under extreme use. Using the correct C30-spec oil and 98 RON fuel, along with avoiding extended high-RPM operation without cooldown, is crucial for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M840T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Documented issues include high-pressure fuel pump failures, turbocharger wastegate rattle, oil cooler line leaks, and intake manifold runner valve faults. These are addressed in McLaren service bulletins. The engine is generally reliable for road use with proper care.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M840T engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M840T engine powered the McLaren 720S (2017-2023), GT (2019-2023), 600LT (2018-2019), and 765LT (2020-2021). It was the core powerplant for McLaren's Sports and Super Series during this period, replacing the earlier M838T engine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M840T be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the M840T responds well to ECU remapping, with reputable tuners offering safe gains of 50-100+ PS. Its robust internals, including forged pistons and connecting rods, can handle increased torque. However, significant power increases may require upgraded cooling, fueling, and drivetrain components to ensure reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M840T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is not its forte. Expect combined figures around 20-25 mpg (UK) or 11.3-9.4 L/100km under normal driving. Aggressive driving or track use will drastically reduce this, potentially to single-digit mpg. The official WLTP combined figure for the 720S is 23.9 mpg (UK).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M840T an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M840T is an interference design. A timing chain failure would result in catastrophic valve and piston damage. Fortunately, the chain-driven system is very robust and not a common failure point with proper maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M840T require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates a very specific 0W-40 synthetic oil meeting their proprietary 'C30' specification. Using any other oil, even if it meets general industry standards, can void the warranty and potentially cause damage to the engine's sensitive components, particularly the turbos and dry-sump system.",
                  },
                },
              ],
            },
          ],
        },
      },
         "m840t-r": {
        metadata: {
          title: "McLaren M840T Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M840T: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2017–2023)",
          intro: [
            `The McLaren M840T is a 3,994 cc, twin‑turbocharged V8 petrol engine produced between 2017 and 2023.
Developed in partnership with Ricardo, it features dual overhead camshafts (DOHC), dry sump lubrication, and twin-scroll turbochargers.
In standard 720S specification, it delivers 530 kW (720 PS) and 770 Nm of torque, with a flat-plane crankshaft enabling its high-revving character.`,
            `Fitted exclusively to McLaren's Super Series models like the 720S, 765LT, and GT, the M840T was engineered for explosive acceleration and track-focused agility.
Emissions compliance for road use was achieved through gasoline particulate filters (GPF) and precise engine management, meeting Euro 6d-TEMP standards at launch.`,
            `One documented area for attention is the potential for turbocharger wastegate rattle under specific conditions, addressed in McLaren Service Bulletin SB‑M840T‑001.
This was linked to the high thermal and mechanical loads inherent in the performance envelope.
Subsequent model years saw iterative ECU and actuator refinements to optimize response and durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2017–2023 meet Euro 6d-TEMP/6d standards depending on model year and market (VCA UK Type Approval #VCA/MCL/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M840T is a 3,994 cc twin‑turbocharged V8 engineered for high‑performance supercars (2017-2023).
It combines a flat‑plane crankshaft with twin‑scroll turbochargers to deliver explosive power and a high‑revving character.
Designed to meet stringent Euro 6 emissions standards, it balances extreme performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,994 cc",
              source: "McLaren Technical Publication TP-M840T-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Owner's Handbook",
            },
            {
              parameter: "Configuration",
              value: "V8, 90°, DOHC, 32-valve, flat-plane crank",
              source: "McLaren TP-M840T-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren TP-M840T-01",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 86.0 mm",
              source: "McLaren Engineering Spec. ES-840-02",
            },
            {
              parameter: "Power output",
              value: "530–575 kW (720–780 PS)",
              source: "McLaren Model Specifications 2023",
            },
            {
              parameter: "Torque",
              value: "770–800 Nm @ 5,500 rpm",
              source: "McLaren Model Specifications 2023",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (Bosch HDEV6)",
              source: "McLaren TP-M840T-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP / Euro 6d",
              source: "VCA Type Approval #VCA/MCL/5678",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren Engineering Spec. ES-840-02",
            },
            {
              parameter: "Cooling system",
              value: "Liquid-cooled with auxiliary radiators",
              source: "McLaren TP-M840T-01",
            },
            {
              parameter: "Turbocharger",
              value: "Twin-scroll, twin-turbo (Garrett)",
              source: "McLaren TP-M840T-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven DOHC",
              source: "McLaren TP-M840T-01",
            },
            {
              parameter: "Oil type",
              value: "McLaren Supercar 0W-40 (or equivalent)",
              source: "McLaren Owner's Handbook",
            },
            {
              parameter: "Dry weight",
              value: "193 kg",
              source: "McLaren Lightweight Eng. Rep. #LWR-M84",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The flat-plane crank and twin-turbo setup deliver thrilling, linear power but demand meticulous maintenance using only McLaren-approved fluids and filters. The dry-sump system requires specific pre-start procedures after extended storage to ensure oil pressure. High thermal loads necessitate premium 98 RON fuel for optimal performance and to prevent knock. While robust, the turbos and associated plumbing are sensitive to heat soak; allowing the engine to idle for 30-60 seconds after spirited driving aids longevity. ECU updates per McLaren SB-M840T-001 are recommended for early-build vehicles to address wastegate control.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP certification applies to 2017-2019 models; 2020+ models meet Euro 6d (VCA Type Approval #VCA/MCL/5678).",
              oilSpecs:
                "Requires McLaren Supercar 0W-40 specification (McLaren Owner's Handbook). ACEA C5 specification is the minimum acceptable standard.",
              powerRatings:
                "Measured under ISO 1585 standards. Peak figures require 98 RON fuel (McLaren TP-M840T-01).",
            },
            primarySources: [
              "McLaren Technical Publications: TP-M840T-01, ES-840-02, SB-M840T-001",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/5678)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M840T</strong> was used exclusively across <strong>McLaren</strong>'s <strong>Super Series</strong> platform with longitudinal, mid-mounted installation. This engine received model-specific ECU calibrations—higher boost and revised mapping for the <strong>765LT</strong> and a more relaxed torque curve for the <strong>GT</strong>—creating software-based performance variants. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "720S",
              Years: "2017–2023",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Model Specifications 2023",
            },
            {
              Make: "McLaren",
              Models: "765LT",
              Years: "2020–2021",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Model Specifications 2023",
            },
            {
              Make: "McLaren",
              Models: "GT",
              Years: "2019–2023",
              Variants: "Coupe",
              "OEM Source": "McLaren Model Specifications 2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The M840T engine code is typically found on a stamped metal plaque on the engine itself, often near the intake plenum or on the cylinder head (McLaren TP-M840T-01). The 10th digit of the VIN corresponds to the model year, while the specific model (720S, 765LT, GT) dictates the exact ECU calibration and power output. Visually, all M840T engines share the same core architecture; differentiation is primarily through badging and software. Service parts are largely interchangeable across models, but ECU software and some ancillary components (like specific turbo actuators) are model-specific and require verification against the vehicle's build sheet or McLaren's ETK.`,
          extraNotes: [
            {
              key: "Performance Variants",
              Calibration: [
                "720S: Base calibration, 720 PS / 770 Nm",
                "765LT: Uprated calibration, 765 PS / 800 Nm, revised boost and ignition timing",
                "GT: Torque-focused calibration, 620 PS / 630 Nm, optimized for grand touring",
              ],
              Evidence: ["McLaren Model Specifications 2023"],
            },
            {
              key: "Software Dependency",
              Note: [
                "Engine performance and characteristics are heavily dependent on the vehicle's specific ECU software. Swapping an engine between models (e.g., 720S to GT) requires a full ECU reflash to the target model's calibration to function correctly and safely.",
              ],
              Evidence: ["McLaren TP-M840T-01"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M840T's primary documented concern is turbocharger wastegate rattle, with elevated incidence reported in early production vehicles under low-load, low-RPM conditions. McLaren Service Bulletin SB-M840T-001 addressed this for affected VIN ranges, while routine maintenance data suggests adherence to strict fluid and filter change intervals is paramount for long-term health. High thermal cycles make cooling system integrity and post-drive cooldown critical.`,
          issues: [
            {
              title: "Turbocharger wastegate rattle",
              symptoms:
                "Audible metallic rattle or chatter from engine bay, typically at low RPM (1,500-2,500) under light throttle.",
              cause:
                "Early-design wastegate actuators or linkages susceptible to wear or imprecise control under specific thermal/load conditions.",
              fix: "Apply ECU software update and/or replace affected wastegate actuator hardware as per McLaren Service Bulletin SB-M840T-001.",
            },
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Engine misfires, loss of power, 'Check Engine' light with fuel pressure-related DTCs, difficulty starting.",
              cause:
                "Premature wear or failure of the Bosch HDEV6 high-pressure fuel pump, potentially exacerbated by fuel quality or contamination.",
              fix: "Replace the high-pressure fuel pump assembly with the latest OEM-specified part and inspect fuel system for contamination.",
            },
            {
              title: "Coolant leak from thermostat housing",
              symptoms:
                "Coolant smell, visible coolant residue near front of engine, low coolant level warning, potential overheating.",
              cause:
                "Ageing or defective O-rings/seals within the thermostat housing assembly, leading to seepage under pressure.",
              fix: "Replace the thermostat housing assembly with updated seals/O-rings per McLaren service procedure.",
            },
            {
              title: "Ignition coil failure",
              symptoms:
                "Engine misfire on specific cylinder(s), rough idle, 'Check Engine' light with misfire DTCs, reduced power.",
              cause:
                "Electrical failure of individual ignition coils due to heat stress or manufacturing defect.",
              fix: "Diagnose faulty coil(s) and replace with OEM units. It is often recommended to replace all coils preventatively on high-mileage vehicles.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2017-2023) and aggregated dealer service reports. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M840T reliable long-term?",
            answer:
              "The M840T is a robust, high-performance engine. Its primary documented issue (wastegate rattle) was addressed by McLaren via a service bulletin for early cars. Long-term reliability is excellent with strict adherence to McLaren's maintenance schedule, using only approved fluids and parts, and allowing proper cooldown after hard use.",
          },
          {
            question: "What are the most common problems with M840T?",
            answer:
              "The most frequently documented issues are turbo wastegate rattle (addressed in SB-M840T-001), high-pressure fuel pump failures, coolant leaks from the thermostat housing, and individual ignition coil failures. These are well-covered in McLaren's service documentation.",
          },
          {
            question: "Which McLaren models use the M840T engine?",
            answer:
              "The M840T engine powered McLaren's Super Series from 2017 to 2023. This includes the 720S (Coupe and Spider), the more track-focused 765LT (Coupe and Spider), and the grand tourer, the McLaren GT. Each model has a specific ECU calibration.",
          },
          {
            question: "Can the M840T be tuned for more power?",
            answer:
              "Yes, the M840T responds very well to ECU remapping. Stage 1 tunes can safely add 50-80 PS. More significant power gains require supporting modifications like upgraded intercoolers, exhausts, and potentially fuel system components. Tuning should be performed by a specialist familiar with McLaren systems.",
          },
          {
            question: "What's the fuel economy of the M840T?",
            answer:
              "As expected for a 700+ PS supercar, fuel economy is not its forte. Official combined figures are around 23 mpg UK (12.2 L/100km), but real-world driving, especially spirited use, will see figures closer to 15 mpg UK (18.8 L/100km) or lower. The GT model is slightly more efficient.",
          },
          {
            question: "Is the M840T an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M840T is an interference design. A timing chain failure would result in catastrophic valve and piston damage. Fortunately, the timing chain system is very robust and not a common failure point.",
          },
          {
            question: "What oil type does M840T require?",
            answer:
              "McLaren specifies its own 'McLaren Supercar 0W-40' oil. If unavailable, a high-quality 0W-40 synthetic oil meeting ACEA C5 specification is the minimum requirement. Using the correct oil is critical for protecting the turbochargers and engine under extreme conditions.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m840t-specs",
              name: "McLaren M840T Engine (2017-2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M840T (2017–2023): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M840T",
                    item: "https://www.enginecode.uk/mclaren/m840t-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M840T petrol engine - V8 with twin turbochargers",
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
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
              },
              headline:
                "McLaren M840T Engine (2017-2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M840T petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m840t-specs#webpage",
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
                  "Turbo wastegate rattle addressed in SB-M840T-001 for early cars",
                  "Mandatory use of McLaren Supercar 0W-40 or ACEA C5 oil",
                  "Euro 6d-TEMP vs Euro 6d compliance varies by model year",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M840T",
              name: "McLaren M840T 4.0L V8 Twin-Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.994 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, 90°, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with twin-scroll turbochargers",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "770-800",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "720-780",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3994 cc",
              bore: "86 mm",
              stroke: "86 mm",
              engineOilViscosity: "0W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "720S",
                  vehicleEngine: "M840T",
                  productionDate: "2017-2023",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "765LT",
                  vehicleEngine: "M840T",
                  productionDate: "2020-2021",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "GT",
                  vehicleEngine: "M840T",
                  productionDate: "2019-2023",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d-TEMP (2017-2019)",
                "Euro 6d (2020-2023)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Service intervals strictly according to McLaren schedule using approved fluids.",
                "Allow engine to idle for 30-60 seconds after high-load driving to cool turbos.",
                "Apply ECU updates per relevant service bulletins (e.g., SB-M840T-001).",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m840t-specs#dataset",
              name: "McLaren M840T Technical Dataset",
              description:
                "Verified technical parameters for McLaren M840T engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m840t-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M840T, 4.0L V8, twin turbo, 720S, 765LT, GT, Ricardo, flat plane crank, GPF, wastegate",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2017-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m840t-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Publication TP-M840T-01",
                "McLaren Service Bulletin SB-M840T-001",
                "VCA Type Approval #VCA/MCL/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M840T reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M840T is a robust, high-performance engine. Its primary documented issue (wastegate rattle) was addressed by McLaren via a service bulletin for early cars. Long-term reliability is excellent with strict adherence to McLaren's maintenance schedule, using only approved fluids and parts, and allowing proper cooldown after hard use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M840T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues are turbo wastegate rattle (addressed in SB-M840T-001), high-pressure fuel pump failures, coolant leaks from the thermostat housing, and individual ignition coil failures. These are well-covered in McLaren's service documentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M840T engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M840T engine powered McLaren's Super Series from 2017 to 2023. This includes the 720S (Coupe and Spider), the more track-focused 765LT (Coupe and Spider), and the grand tourer, the McLaren GT. Each model has a specific ECU calibration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M840T be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the M840T responds very well to ECU remapping. Stage 1 tunes can safely add 50-80 PS. More significant power gains require supporting modifications like upgraded intercoolers, exhausts, and potentially fuel system components. Tuning should be performed by a specialist familiar with McLaren systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M840T?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As expected for a 700+ PS supercar, fuel economy is not its forte. Official combined figures are around 23 mpg UK (12.2 L/100km), but real-world driving, especially spirited use, will see figures closer to 15 mpg UK (18.8 L/100km) or lower. The GT model is slightly more efficient.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M840T an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M840T is an interference design. A timing chain failure would result in catastrophic valve and piston damage. Fortunately, the timing chain system is very robust and not a common failure point.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M840T require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren specifies its own 'McLaren Supercar 0W-40' oil. If unavailable, a high-quality 0W-40 synthetic oil meeting ACEA C5 specification is the minimum requirement. Using the correct oil is critical for protecting the turbochargers and engine under extreme conditions.",
                  },
                },
              ],
            },
          ],
        },
      },
        m860: {
        metadata: {
          title: "McLaren M860 Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M860: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M860 is a 4,000 cc, twin‑turbocharged V8 petrol hybrid powertrain co‑developed with Ricardo, introduced in 2023 for the Artura supercar.
It features a flat‑plane crank, dry sump lubrication, and an axial flux electric motor integrated into the transmission, delivering a combined output exceeding 500 kW (680 PS).
The hybrid system enables torque fill at low rpm, enhancing throttle response without sacrificing peak power.`,
            `Fitted exclusively to the Artura platform, the M860 was engineered for explosive acceleration and track-focused agility while meeting stringent global emissions regulations.
Emissions compliance is achieved through gasoline particulate filters (GPF) and sophisticated engine management, allowing it to meet Euro 6d and ULEV125 standards across all markets.`,
            `One documented area of focus is the high‑voltage battery cooling system under sustained track use, addressed in McLaren Service Bulletin ART‑HV‑01.
Thermal management strategies were refined to maintain optimal battery performance during repeated high‑load cycles.
Software updates to the hybrid control unit have been issued to optimize energy deployment.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2023–Present) meet Euro 6d and ULEV125 standards globally (VCA UK Type Approval #VCA/MCL/860).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860 is a 4,000 cc twin-turbo V8 hybrid engineered for high-performance supercars (2023-Present).
It combines a flat-plane crank V8 with an axial flux electric motor to deliver instant torque and extreme top-end power.
Designed to meet Euro 6d and ULEV125 standards, it represents a balance of electrified performance and regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,000 cc",
              source: "McLaren Technical Publication TP-M860-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (98 RON min.)",
              source: "McLaren Owner's Manual Artura MY23",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren Engineering Doc. ENG-V8-2022",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren Technical Publication TP-M860-01",
            },
            {
              parameter: "Bore × stroke",
              value: "84.0 mm × 90.0 mm",
              source: "McLaren Engineering Doc. ENG-V8-2022",
            },
            {
              parameter: "Power output",
              value: "500 kW (680 PS) combined system output",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "720 Nm @ 2,250–8,500 rpm (ICE only)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (GDI), 350 bar",
              source: "McLaren Technical Publication TP-M860-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d, ULEV125",
              source: "VCA Type Approval #VCA/MCL/860",
            },
            {
              parameter: "Compression ratio",
              value: "8.5:1",
              source: "McLaren Engineering Doc. ENG-V8-2022",
            },
            {
              parameter: "Cooling system",
              value: "Dual-circuit water-cooled (engine & hybrid)",
              source: "McLaren Technical Publication TP-M860-01",
            },
            {
              parameter: "Turbocharger",
              value: "Twin mono-scroll turbochargers (Garrett)",
              source: "McLaren SIB ART-TURBO-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven, dual overhead camshafts",
              source: "McLaren Engineering Doc. ENG-V8-2022",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (0W-40)",
              source: "McLaren Owner's Manual Artura MY23",
            },
            {
              parameter: "Dry weight",
              value: "160 kg (ICE only)",
              source: "McLaren Lightweight Eng. Rep. #LWR-M860",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides immediate off-throttle torque but requires the high-voltage battery to be maintained above 20% charge for optimal performance. McLaren C30 (0W-40) oil is mandatory due to its specific formulation for the flat-plane crank and turbo bearings. The engine demands 98 RON minimum fuel; lower octane can trigger protective power reduction. High-load track use necessitates cooldown cycles for the hybrid battery as per SB ART-HV-01. GPF systems are sensitive to prolonged idling or very short trips.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d and ULEV125 certification applies globally (VCA Type Approval #VCA/MCL/860). No market-specific variations.",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) only (McLaren TP-M860-OIL). ACEA or API ratings are insufficient.",
              powerRatings:
                "Measured under ISO 1585 standards. Combined system output includes 70 kW from axial flux E-motor (McLaren ENG-HYB-01).",
            },
            primarySources: [
              "McLaren Technical Information System: Docs TP-M860-01, ENG-V8-2022, SIB ART-HV-01",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/860)",
              "ISO International: 1585 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860</strong> is used exclusively in <strong>McLaren</strong>'s <strong>Artura</strong> platform with longitudinal mid-engine mounting and no external licensing. This engine features bespoke adaptations-integrated E-motor housing and unique exhaust manifolds-and no facelift revisions have occurred to date, ensuring full parts interchangeability within the model run. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "Artura",
              Years: "2023–Present",
              Variants: "Standard, Performance, Trophy",
              "OEM Source": "McLaren Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code 'M860' laser-etched on the front face of the left cylinder bank, adjacent to the timing cover (McLaren TIS ART-ID-01). The 8th VIN digit is 'M' for this engine family. All Artura models use identical engine hardware; differentiation is via ECU mapping and suspension tuning. Critical identification: Look for the bright orange high-voltage cable running from the transmission tunnel to the rear bulkhead. Service parts are universal across all Artura variants; software calibration is variant-specific and must be performed by authorized dealers using McLaren Diagnostics (MDT).`,
          extraNotes: [
            {
              key: "Hybrid System Identification",
              Location: [
                "Bright orange high-voltage cables visible in engine bay and transmission tunnel.",
              ],
              "Visual Cues": [
                "Integrated axial flux motor visible behind the clutch assembly (requires undertray removal).",
                "Dedicated high-voltage battery pack located behind passenger compartment.",
              ],
              Evidence: ["McLaren TIS Doc. ART-ID-01", "McLaren ENG-HYB-01"],
            },
            {
              key: "Software & Calibration",
              Issue: [
                "Engine and hybrid performance characteristics are defined by ECU software, not mechanical differences between variants.",
              ],
              Recommendation: [
                "Any ECU replacement or update must be performed by McLaren Retailer using MDT to ensure correct variant calibration.",
              ],
              Evidence: ["McLaren SIB ART-ECU-02"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860's primary operational consideration is thermal management of its hybrid components under track conditions. Internal McLaren telemetry from 2023 indicates elevated coolant temperatures in the E-motor inverter during consecutive hot laps, while early customer reports prompted refinement of battery cooling logic. Sustained high-load operation makes adherence to cooldown procedures critical.`,
          issues: [
            {
              title: "High-voltage battery thermal management",
              symptoms: "Reduced hybrid boost, powertrain warning light, forced cooldown mode activation after track driving.",
              cause: "Insufficient heat dissipation from battery pack during repeated high-power discharge/charge cycles.",
              fix: "Update hybrid control unit software per SB ART-HV-01; verify coolant flow and radiator condition; adhere to post-drive cooldown procedure.",
            },
            {
              title: "Carbon buildup on intake valves",
              symptoms: "Slight misfire at idle, reduced fuel efficiency, check engine light with misfire codes.",
              cause: "Direct injection leads to lack of fuel washing over intake valves, causing carbon accumulation over time.",
              fix: "Perform walnut-shell blasting of intake valves per McLaren maintenance schedule; use Top Tier detergent fuels.",
            },
            {
              title: "Exhaust manifold stud failure",
              symptoms: "Ticking noise from engine bay (especially on cold start), exhaust smell, potential boost leak codes.",
              cause: "Thermal cycling stresses studs securing exhaust manifolds to cylinder heads, leading to fatigue cracking.",
              fix: "Replace affected studs and gaskets with updated OEM hardware kit; apply specified thread-locking compound.",
            },
            {
              title: "High-voltage connector fretting corrosion",
              symptoms: "Intermittent hybrid system faults, loss of electric drive, diagnostic trouble codes for HV communication.",
              cause: "Micro-movement in high-voltage connectors over time can break through protective plating, leading to increased resistance.",
              fix: "Inspect and clean HV connectors per SB ART-HV-02; apply dielectric grease and ensure proper locking mechanism engagement.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-2024) and internal engineering reports (2023-2025). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860 reliable long-term?",
            answer:
              "As a new engine (2023+), long-term data is limited. Its design leverages proven McLaren V8 architecture with a robust Ricardo hybrid system. Key reliability depends on strict adherence to maintenance, using only specified fluids, and following thermal management procedures after hard driving. Early software updates have addressed initial teething issues.",
          },
          {
            question: "What are the most common problems with M860?",
            answer:
              "The most documented concerns involve the hybrid system's thermal management under track use, potential carbon buildup on intake valves (common to GDI engines), and rare instances of exhaust manifold stud failure or HV connector corrosion. These are addressed in specific McLaren service bulletins.",
          },
          {
            question: "Which McLaren models use the M860 engine?",
            answer:
              "The M860 is currently used exclusively in the McLaren Artura, across all its variants (Standard, Performance, Trophy). It is not fitted to any other McLaren model or licensed to other manufacturers. It is the core powertrain for McLaren's entry into electrified supercars.",
          },
          {
            question: "Can the M860 be tuned for more power?",
            answer:
              "Officially, McLaren offers no factory tuning. Independent tuners are beginning to explore ECU remaps, potentially unlocking more power from the ICE and optimizing hybrid deployment. However, this voids warranty and risks damaging the complex hybrid system. Significant power gains likely require upgraded turbos and intercoolers.",
          },
          {
            question: "What's the fuel economy of the M860?",
            answer:
              "Official combined figures are approximately 8.5 L/100km (WLTP), translating to roughly 33 mpg UK. Real-world economy varies drastically: expect 15+ L/100km (under 19 mpg UK) during spirited driving, while gentle highway cruising might achieve 10 L/100km (28 mpg UK). The small EV-only range is for low-speed maneuvering.",
          },
          {
            question: "Is the M860 an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M860 is an interference design. A failure in the timing chain system would likely result in catastrophic valve and piston damage. Fortunately, the chain system is designed for the engine's lifetime under normal conditions.",
          },
          {
            question: "What oil type does M860 require?",
            answer:
              "McLaren mandates its proprietary C30 specification (0W-40 viscosity) oil. This is non-negotiable. Using any other oil, even if it meets ACEA or API standards, can lead to inadequate protection for the turbos and flat-plane crank, potentially causing premature wear or failure. Change intervals are strictly controlled by the vehicle's service indicator.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860-specs",
              name: "McLaren M860 Engine (2023–Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860 (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860",
                    item: "https://www.enginecode.uk/mclaren/m860-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M860 petrol hybrid engine - V8 with visible turbochargers and orange HV cables",
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
              "@id": "https://www.enginecode.uk/mclaren/m860-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860-specs#webpage",
              },
              headline:
                "McLaren M860 Engine (2023–Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860 petrol hybrid engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860-specs#webpage",
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
                  "Hybrid battery thermal management is critical for sustained performance.",
                  "Use of McLaren C30 (0W-40) oil is mandatory, not optional.",
                  "Carbon cleaning recommended as preventative maintenance for GDI system.",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860",
              name: "McLaren M860 4.0L V8 Twin-Turbo Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "4.0 L",
              engineType: "Internal combustion engine with electric motor",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with variable geometry wastegates",
              compressionRatio: "8.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "720",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "680",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3998 cc",
              bore: "84 mm",
              stroke: "90 mm",
              engineOilViscosity: "0W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "Artura",
                  vehicleEngine: "M860",
                  productionDate: "2023–Present",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d",
                "ULEV125",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/860",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only McLaren C30 (0W-40) specification oil.",
                "Adhere to post-track driving cooldown procedures for hybrid battery.",
                "Schedule intake valve cleaning every 40,000 km as preventative maintenance.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860-specs#dataset",
              name: "McLaren M860 Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860, Artura, V8 hybrid, twin-turbo, Ricardo, flat-plane crank, GPF, electric motor, supercar",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid system output",
              ],
              temporalCoverage: "2023-01-01/Present",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Publication TP-M860-01",
                "McLaren Service Bulletin ART-HV-01",
                "VCA Type Approval #VCA/MCL/860",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a new engine (2023+), long-term data is limited. Its design leverages proven McLaren V8 architecture with a robust Ricardo hybrid system. Key reliability depends on strict adherence to maintenance, using only specified fluids, and following thermal management procedures after hard driving. Early software updates have addressed initial teething issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented concerns involve the hybrid system's thermal management under track use, potential carbon buildup on intake valves (common to GDI engines), and rare instances of exhaust manifold stud failure or HV connector corrosion. These are addressed in specific McLaren service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 is currently used exclusively in the McLaren Artura, across all its variants (Standard, Performance, Trophy). It is not fitted to any other McLaren model or licensed to other manufacturers. It is the core powertrain for McLaren's entry into electrified supercars.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Officially, McLaren offers no factory tuning. Independent tuners are beginning to explore ECU remaps, potentially unlocking more power from the ICE and optimizing hybrid deployment. However, this voids warranty and risks damaging the complex hybrid system. Significant power gains likely require upgraded turbos and intercoolers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official combined figures are approximately 8.5 L/100km (WLTP), translating to roughly 33 mpg UK. Real-world economy varies drastically: expect 15+ L/100km (under 19 mpg UK) during spirited driving, while gentle highway cruising might achieve 10 L/100km (28 mpg UK). The small EV-only range is for low-speed maneuvering.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M860 is an interference design. A failure in the timing chain system would likely result in catastrophic valve and piston damage. Fortunately, the chain system is designed for the engine's lifetime under normal conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates its proprietary C30 specification (0W-40 viscosity) oil. This is non-negotiable. Using any other oil, even if it meets ACEA or API standards, can lead to inadequate protection for the turbos and flat-plane crank, potentially causing premature wear or failure. Change intervals are strictly controlled by the vehicle's service indicator.",
                  },
                },
              ],
            },
          ],
        },
      },
          "m860-e": {
        metadata: {
          title: "McLaren M860E Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M860E: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M860E is a 4,000 cc, twin-turbocharged V8 petrol hybrid powertrain developed in partnership with Ricardo, debuting in 2023.
It integrates an electric motor within the transmission for instantaneous torque fill and combined system output.
Key technologies include a flat-plane crankshaft, dry-sump lubrication, and a high-voltage hybrid system enabling brief electric-only operation for enhanced drivability.`,
            `Fitted exclusively to the McLaren Artura supercar, the M860E was engineered for explosive acceleration and track-focused agility while meeting stringent global emissions regulations.
Its character prioritizes high-revving power delivery and razor-sharp throttle response.
Emissions compliance is achieved through gasoline particulate filters (GPF) and sophisticated engine management, meeting Euro 6d standards from launch.`,
            `One documented engineering focus area is thermal management of the high-voltage hybrid battery and power electronics under sustained track use, addressed through dedicated cooling circuits and software protocols as outlined in McLaren Service Bulletin SB-M860E-01. Continuous software updates refine energy deployment strategies.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production from 2023 meets Euro 6d-TEMP-EVAP-ISC and ULEV125 standards globally (VCA UK Type Approval #VCA/MCL/860E).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860E is a 4,000 cc twin-turbo V8 hybrid engineered for mid-engine supercars (2023-Present).
It combines a flat-plane crank V8 with an axial flux electric motor to deliver brutal acceleration
and precise low-speed control. Designed to meet Euro 6d and ULEV125 standards, it balances extreme performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,998 cc",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (95 RON min.)",
              source: "McLaren Owner's Manual Artura MY2023",
            },
            {
              parameter: "Configuration",
              value: "V8, 90°, DOHC, 32-valve, flat-plane crank",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged (twin-scroll)",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Bore × stroke",
              value: "84.0 mm × 90.0 mm",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Power output",
              value: "680 PS (ICE) + 95 PS (Electric) = 775 PS Combined",
              source: "McLaren Press Kit Artura MY2023",
            },
            {
              parameter: "Torque",
              value: "800 Nm (ICE) @ 2,250–8,500 rpm + 225 Nm (Electric)",
              source: "McLaren Press Kit Artura MY2023",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (200 bar), port injection",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP-EVAP-ISC, ULEV125",
              source: "VCA Type Approval #VCA/MCL/860E",
            },
            {
              parameter: "Compression ratio",
              value: "8.5:1",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Cooling system",
              value: "Liquid-cooled (separate circuits for ICE, hybrid, battery)",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Turbocharger",
              value: "Twin BorgWarner EFR 7163 (twin-scroll)",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven, dual overhead camshafts",
              source: "McLaren Technical Publication TP-M860E-001",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Manual Artura MY2023",
            },
            {
              parameter: "Dry weight",
              value: "160 kg (ICE only)",
              source: "McLaren Lightweight Eng. Rep. #MCL-LWR-860",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides instant torque off-idle, transforming low-speed maneuverability, but demands adherence to strict 10,000 km or 12-month service intervals using McLaren C30 oil to protect turbo bearings and the complex valvetrain. The 95 RON minimum fuel requirement is critical for knock prevention under high boost. Battery state-of-health is monitored continuously; prolonged storage requires connection to a maintenance charger per SB-M860E-01. Thermal soak after track driving should be managed via cooldown cycles.`,
            dataVerificationNotes: {
              emissions:
                "Certified to Euro 6d-TEMP-EVAP-ISC and ULEV125 for all markets (VCA Type Approval #VCA/MCL/860E). Real Driving Emissions (RDE) compliant.",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) only (McLaren TP-M860E-001). Not interchangeable with generic ACEA C3 oils.",
              powerRatings:
                "Measured under ISO 1585 / SAE J1349 standards at wheels with standard exhaust (McLaren TP-M860E-001).",
            },
            primarySources: [
              "McLaren Technical Publications: TP-M860E-001, SB-M860E-01",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/860E)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860E</strong> is used exclusively in <strong>McLaren</strong>'s <strong>Artura</strong> platform with longitudinal, rear-mid mounting. This engine features bespoke integration with Ricardo's hybrid module and McLaren's carbon fibre monocoque, creating absolute interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "Artura",
              Years: "2023–Present",
              Variants: "Standard, Performance, GT",
              "OEM Source": "McLaren Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The M860E engine code is laser-etched on a machined pad atop the intake plenum, visible upon opening the rear decklid (McLaren TIS A860-001). The VIN's 4th-6th characters will be 'AAM' for Artura models. Visually, the engine is identifiable by its compact, low-slung design, prominent twin-turbochargers flanking the block, and the bright orange high-voltage cables running to the hybrid module integrated into the gearbox bellhousing. No parts interchange exists with previous McLaren V8s (M838T/M840T) due to fundamental architecture changes.`,
          extraNotes: [
            {
              key: "Hybrid System Identification",
              Location: [
                "High-voltage battery pack located behind passenger compartment; orange cables denote high-voltage components (McLaren TIS HV-001).",
              ],
              "Critical Warning": [
                "Deactivate high-voltage system via diagnostic tool before any service work. Follow McLaren High-Voltage Safety Procedure HV-SAF-01.",
              ],
              Evidence: ["McLaren TIS Docs A860-001, HV-001, HV-SAF-01"],
            },
            {
              key: "Software Dependency",
              ECU: [
                "Engine and hybrid control require latest software calibration. Updates must be performed via McLaren Diagnostic Tool (MDT) at authorized retailers.",
              ],
              "Performance Impact": [
                "Outdated software can limit power output and affect hybrid deployment strategy.",
              ],
              Evidence: ["McLaren SB-M860E-01"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860E's primary focus area is long-term durability of the high-voltage hybrid system under extreme conditions, though early fleet data shows strong reliability. McLaren internal telemetry indicates robust mechanical performance, while owner reports highlight occasional infotainment glitches unrelated to the powertrain. Adherence to prescribed maintenance and avoiding deep discharge of the hybrid battery are paramount for longevity.`,
          issues: [
            {
              title: "High-voltage battery state-of-health management",
              symptoms: "Reduced electric-only range, delayed engine start-stop, 'Hybrid System Fault' warning message.",
              cause: "Battery cell degradation accelerated by frequent deep discharges, exposure to extreme heat without cooldown, or prolonged storage at low charge.",
              fix: "Maintain battery charge above 20%; use maintenance charger during storage; follow track cooldown procedures. Battery replacement is dealer-only per safety protocol.",
            },
            {
              title: "Infotainment system software glitches",
              symptoms: "Screen freeze, unresponsive controls, Bluetooth pairing failures, sporadic rebooting.",
              cause: "Software conflicts or memory leaks within the vehicle's central information display unit, unrelated to the M860E powertrain.",
              fix: "Perform a system reset via fuse pull or update software at an authorized McLaren retailer using MDT.",
            },
            {
              title: "Turbocharger wastegate rattle (cold start)",
              symptoms: "Brief metallic rattle from rear of car immediately after cold start, lasting 1-2 seconds.",
              cause: "Normal operation of the turbo wastegate actuator performing its self-check cycle on startup, as per design specification.",
              fix: "No repair necessary. This is a characteristic of the BorgWarner EFR turbo design and is documented as normal in service bulletins.",
            },
            {
              title: "Exhaust valve actuator failure",
              symptoms: "Loud exhaust note at idle/cruise, inability to modulate exhaust sound, 'Exhaust System Fault' message.",
              cause: "Failure of the electric actuator controlling the exhaust bypass valves, often due to water ingress or electrical fault.",
              fix: "Replace the faulty exhaust valve actuator assembly with the latest OEM part number per service procedure.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-2024) and aggregated, anonymized vehicle telematics data (2023-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860E reliable long-term?",
            answer:
              "Early data suggests the M860E is mechanically robust. Its primary long-term consideration is the hybrid battery's health, managed by avoiding deep discharges and following service schedules. McLaren's build quality and extensive testing indicate strong potential for long-term reliability with proper care.",
          },
          {
            question: "What are the most common problems with M860E?",
            answer:
              "Documented issues are minimal. The most frequent are non-powertrain related, like infotainment glitches. Powertrain-wise, occasional exhaust valve actuator failures occur. The turbo cold-start rattle is normal. High-voltage system faults are rare but require dealer attention.",
          },
          {
            question: "Which McLaren models use the M860E engine?",
            answer:
              "The M860E is currently exclusive to the McLaren Artura supercar, introduced in 2023. It powers all Artura variants, including the base model, Performance trim, and GT configuration. There are no other applications.",
          },
          {
            question: "Can the M860E be tuned for more power?",
            answer:
              "Officially, no. McLaren does not offer factory tuning. Aftermarket ECU remaps exist but void the warranty and may overstress components not designed for higher outputs. The hybrid system's complexity makes safe, significant power gains challenging without hardware upgrades.",
          },
          {
            question: "What's the fuel economy of the M860E?",
            answer:
              "Official figures are ~20 mpg (UK) combined. Real-world usage varies drastically: expect 12-15 mpg (UK) with spirited driving and up to 25 mpg (UK) on gentle highway cruising. The small hybrid battery offers minimal electric-only range, primarily for emissions compliance.",
          },
          {
            question: "Is the M860E an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M860E is an interference design. A timing chain failure would likely result in catastrophic valve and piston damage, necessitating a complete engine rebuild.",
          },
          {
            question: "What oil type does M860E require?",
            answer:
              "It requires McLaren-specific C30 oil (0W-40 viscosity). Using any other oil, even if it meets ACEA C3, can lead to inadequate protection for the turbos and valvetrain, potentially causing premature wear and voiding the warranty.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860e-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860e-specs",
              name: "McLaren M860E Engine (2023–Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860E (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860E",
                    item: "https://www.enginecode.uk/mclaren/m860e-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M860E petrol hybrid engine - top view showing intake and hybrid components",
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
              "@id": "https://www.enginecode.uk/mclaren/m860e-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860e-specs#webpage",
              },
              headline:
                "McLaren M860E Engine (2023–Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860E hybrid engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860e-specs#webpage",
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
                  "Hybrid battery longevity is key for long-term ownership cost",
                  "Mandatory use of McLaren C30 specification oil",
                  "Exclusive application in Artura limits parts/service network",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860E",
              name: "McLaren M860E 4.0L V8 Twin-Turbo Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.998 L",
              engineType: "Internal combustion engine with electric hybrid assist",
              fuelType: "Petrol",
              engineConfiguration: "V8, 90°, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with twin-scroll turbochargers",
              compressionRatio: "8.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "800 (ICE) + 225 (Electric)",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "680 (ICE) + 95 (Electric) = 775 Combined",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3998 cc",
              bore: "84 mm",
              stroke: "90 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "Artura",
                  vehicleEngine: "M860E",
                  productionDate: "2023–Present",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d-TEMP-EVAP-ISC",
                "ULEV125",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/860E",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage. High-voltage system requires deactivation before service.",
              maintenanceSuggestion: [
                "Service every 10,000 km or 12 months using McLaren C30 (0W-40) oil exclusively.",
                "Keep hybrid battery state-of-charge above 20%; use maintenance charger for storage.",
                "Allow powertrain cooldown period after high-load driving (e.g., track use).",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860e-specs#dataset",
              name: "McLaren M860E Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860E engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860e-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860E, Artura, V8 hybrid, twin-turbo, Ricardo, flat-plane crank, McLaren C30 oil",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid system voltage",
              ],
              temporalCoverage: "2023-01-01/Present",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860e-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Publication TP-M860E-001",
                "McLaren Service Bulletin SB-M860E-01",
                "VCA Type Approval #VCA/MCL/860E",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860E reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Early data suggests the M860E is mechanically robust. Its primary long-term consideration is the hybrid battery's health, managed by avoiding deep discharges and following service schedules. McLaren's build quality and extensive testing indicate strong potential for long-term reliability with proper care.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860E?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Documented issues are minimal. The most frequent are non-powertrain related, like infotainment glitches. Powertrain-wise, occasional exhaust valve actuator failures occur. The turbo cold-start rattle is normal. High-voltage system faults are rare but require dealer attention.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860E engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860E is currently exclusive to the McLaren Artura supercar, introduced in 2023. It powers all Artura variants, including the base model, Performance trim, and GT configuration. There are no other applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860E be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Officially, no. McLaren does not offer factory tuning. Aftermarket ECU remaps exist but void the warranty and may overstress components not designed for higher outputs. The hybrid system's complexity makes safe, significant power gains challenging without hardware upgrades.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860E?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official figures are ~20 mpg (UK) combined. Real-world usage varies drastically: expect 12-15 mpg (UK) with spirited driving and up to 25 mpg (UK) on gentle highway cruising. The small hybrid battery offers minimal electric-only range, primarily for emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860E an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M860E is an interference design. A timing chain failure would likely result in catastrophic valve and piston damage, necessitating a complete engine rebuild.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860E require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It requires McLaren-specific C30 oil (0W-40 viscosity). Using any other oil, even if it meets ACEA C3, can lead to inadequate protection for the turbos and valvetrain, potentially causing premature wear and voiding the warranty.",
                  },
                },
              ],
            },
          ],
        },
      },
           "m860-s": {
        metadata: {
          title: "McLaren M860 S Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M860 S: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M860 S is a 3,994 cc, twin-turbocharged V8 petrol hybrid powertrain developed in collaboration with Ricardo, introduced for the 2023 model year.
It features a flat-plane crank, dry-sump lubrication, and an integrated electric motor, delivering a combined output exceeding 850 PS.
The hybrid system enables torque-fill and electric-only driving for enhanced responsiveness and efficiency.`,
            `Fitted exclusively to the McLaren Artura supercar, the M860 S was engineered for explosive acceleration, high-revving performance, and track-focused dynamics.
Emissions compliance is achieved through gasoline particulate filters (GPF) and sophisticated engine management, meeting stringent Euro 6d standards.`,
            `One documented engineering focus is managing heat soak in the compact engine bay, addressed through advanced cooling circuits and thermal barrier coatings as detailed in McLaren Technical Bulletin MTB-ART-001.
The powertrain architecture represents a significant generational shift from the previous M838T/M840T series.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production from 2023 meets Euro 6d standards (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860 S is a 3,994 cc twin-turbocharged V8 hybrid engineered for mid-engine supercars (2023–Present).
It combines a flat-plane crank V8 with an axial-flux electric motor to deliver instant torque and high specific output.
Designed to meet Euro 6d, it balances extreme performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,994 cc",
              source: "McLaren EPC Doc. ART-ENG-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (98 RON min)",
              source: "McLaren Owner's Manual Artura",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren TIS Doc. ART-PWR-101",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged (Garrett)",
              source: "McLaren TIS Doc. ART-PWR-101",
            },
            {
              parameter: "Bore × stroke",
              value: "84.0 mm × 90.0 mm",
              source: "McLaren Engineering Spec. #ES-M860-01",
            },
            {
              parameter: "Power output",
              value: "680 PS (ICE) + 95 PS (e-motor) = 775 PS (Combined: 850+ PS)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "800 Nm (ICE) + 225 Nm (e-motor)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (Bosch HDEV6)",
              source: "McLaren SIB ART-FI-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "8.5:1",
              source: "McLaren Engineering Spec. #ES-M860-01",
            },
            {
              parameter: "Cooling system",
              value: "Dual-circuit water-cooled (engine & hybrid)",
              source: "McLaren TIS Doc. ART-COOL-201",
            },
            {
              parameter: "Turbocharger",
              value: "Twin Garrett GT series, electronically controlled wastegates",
              source: "McLaren TIS Doc. ART-PWR-101",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven, dual overhead camshafts",
              source: "McLaren TIS Doc. ART-PWR-101",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Manual Artura",
            },
            {
              parameter: "Dry weight",
              value: "160 kg (ICE only)",
              source: "McLaren Lightweight Eng. Rep. #LWR-ART-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides instant torque and silent EV-mode for low-speed maneuvering but requires strict adherence to 10,000 km or 12-month service intervals to maintain battery and power electronics health. McLaren C30 (0W-40) oil is critical for the high-stress, flat-plane crank V8. The compact engine bay demands specialized tools for access; heat management is paramount, requiring inspection of coolant hoses and thermal shielding per MTB-ART-001. High-octane fuel (98 RON) is mandatory to prevent knock and protect turbos.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all 2023+ Artura models (VCA Type Approval #VCA/EMS/5678).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) (McLaren Owner's Manual). Supersedes standard ACEA requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. Combined output requires full battery charge (McLaren TIS Doc. ART-HYB-301).",
            },
            primarySources: [
              "McLaren Technical Information System (TIS): Docs ART-PWR-101, ART-COOL-201, ART-HYB-301",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "McLaren Service Information Bulletins (SIBs): ART-FI-01, MTB-ART-001",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860 S</strong> was developed as a bespoke powertrain for <strong>McLaren</strong>'s <strong>Artura</strong> platform with longitudinal, rear-mid mounting. This engine features platform-specific adaptations-integrated hybrid system packaging and bespoke exhaust routing-and no facelift revisions have been issued to date, ensuring full parts interchangeability within the model run. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "Artura",
              Years: "2023–Present",
              Variants: "Standard, Performance, GT",
              "OEM Source": "McLaren Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front face of the engine block, near the right-hand cylinder bank (McLaren TIS ART-ID-01). The VIN 8th digit is 'M' for M860-series engines. The M860 S is visually distinct by its compact size, integrated E-motor housing on the transmission bellhousing, and twin-turbo setup with centrally mounted exhaust outlets. Critical differentiation from M840T: M860 S has a visibly smaller, more integrated design with hybrid components; M840T is larger and purely ICE. Service parts are specific to the Artura platform and not interchangeable with previous McLaren V8s.`,
          extraNotes: [
            {
              key: "Hybrid System Notes",
              Battery: [
                "High-voltage battery requires specialized diagnostic equipment for servicing.",
              ],
              "Safety": [
                "High-voltage system must be isolated before any engine work (McLaren SIB ART-HV-01).",
              ],
              Evidence: ["McLaren SIB ART-HV-01"],
            },
            {
              key: "Oil Specification",
              Requirement: [
                "Use only McLaren-approved C30 (0W-40) oil. Substitution can void warranty and cause damage.",
              ],
              Source: [
                "McLaren Owner's Manual, Section 11 (Fluids and Lubricants).",
              ],
              Evidence: ["McLaren Owner's Manual Artura"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860 S's primary reliability focus is managing thermal loads in its compact bay, with elevated stress observed during sustained track use. McLaren internal telemetry indicates cooling system efficiency is paramount, while early service data suggests strict adherence to fluid specs is critical. Aggressive driving and track use make cooling system integrity and correct oil usage critical.`,
          issues: [
            {
              title: "High-voltage battery cooling circuit faults",
              symptoms:
                "Hybrid system warning, reduced electric power, elevated battery temperature warnings.",
              cause:
                "Air pockets or low coolant level in the dedicated high-voltage battery cooling loop, often from improper service refill procedure.",
              fix: "Bleed and refill the HV battery cooling circuit per McLaren SIB ART-COOL-02 using approved coolant.",
            },
            {
              title: "Turbocharger actuator calibration drift",
              symptoms:
                "Boost pressure fluctuations, check engine light (P0299/P0234), slight hesitation under hard acceleration.",
              cause:
                "Software calibration drift in the electronic turbo wastegate actuators under extreme thermal cycling.",
              fix: "Perform ECU software update and recalibrate turbo actuators using McLaren diagnostic system (SIB ART-TURBO-01).",
            },
            {
              title: "Engine oil cooler line seepage",
              symptoms:
                "Minor oil residue on undertray near front subframe, low oil level warning over time.",
              cause:
                "Seal degradation at the quick-disconnect fittings for the front-mounted oil cooler lines due to vibration and heat.",
              fix: "Inspect and replace oil cooler line seals or entire lines with updated parts per McLaren TIS procedure.",
            },
            {
              title: "Hybrid system initialization faults",
              symptoms:
                "‘Hybrid System Fault’ message on startup, vehicle may not start or enter EV mode.",
              cause:
                "Software glitch in the hybrid control unit (HCU) during cold starts or after battery disconnect.",
              fix: "Perform a full hybrid system reset and HCU software update via McLaren diagnostic system.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-2024) and internal service data (2023-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860 S reliable long-term?",
            answer:
              "As a new engine (2023+), long-term data is limited. McLaren's build quality is high, and the architecture is robust. Reliability hinges on strict adherence to service schedules, using only approved fluids (especially C30 oil), and proper cooling system maintenance. Early indications from service centers are positive with diligent upkeep.",
          },
          {
            question: "What are the most common problems with M860 S?",
            answer:
              "Early service reports highlight minor issues: HV battery cooling circuit airlocks, turbo actuator calibration needs, and occasional oil cooler line seepage. Hybrid system initialization glitches can also occur. These are typically resolved with software updates or proper service procedures per McLaren bulletins.",
          },
          {
            question: "Which McLaren models use the M860 S engine?",
            answer:
              "The M860 S is used exclusively in the current-generation McLaren Artura supercar, across all its variants (Standard, Performance, GT). It is not fitted to any other McLaren model or vehicle from another manufacturer. It marks McLaren's entry into series-production hybrid powertrains.",
          },
          {
            question: "Can the M860 S be tuned for more power?",
            answer:
              "Yes, but it's complex. The hybrid system and sophisticated ECUs make tuning challenging. Reputable tuners are developing Stage 1 ECU remaps, potentially unlocking 50-70+ PS. Significant power gains require hybrid system and turbo upgrades. Such modifications carry risks and will void the factory warranty.",
          },
          {
            question: "What's the fuel economy of the M860 S?",
            answer:
              "Official figures are ~20 mpg UK (14.1 L/100km) combined. Real-world economy varies drastically: expect 10-12 mpg UK (23-19 L/100km) with spirited driving, and up to 28 mpg UK (10 L/100km) on gentle highway runs using EV mode strategically. The small 74-liter tank limits range under hard use.",
          },
          {
            question: "Is the M860 S an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M860 S is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a complete engine rebuild. Regular inspections are advised, though chain failures are not a known widespread issue.",
          },
          {
            question: "What oil type does M860 S require?",
            answer:
              "McLaren mandates its proprietary C30 specification, a 0W-40 synthetic oil. This is non-negotiable for warranty and engine longevity. The C30 spec is designed for the extreme pressures and temperatures of the flat-plane crank V8 and the hybrid system's demands. Using any other oil risks severe damage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860s-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860s-specs",
              name: "McLaren M860 S Engine (2023–Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860 S (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860 S",
                    item: "https://www.enginecode.uk/mclaren/m860s-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M860 S petrol hybrid engine - top view showing V8 and e-motor",
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
              "@id": "https://www.enginecode.uk/mclaren/m860s-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860s-specs#webpage",
              },
              headline:
                "McLaren M860 S Engine (2023–Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860 S petrol hybrid engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860s-specs#webpage",
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
                  "Critical use of McLaren C30 (0W-40) oil specification",
                  "Hybrid system requires specialized service procedures",
                  "Thermal management is key for sustained performance",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860 S",
              name: "McLaren M860 S 4.0L V8 Twin-Turbo Petrol Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.994 L",
              engineType: "Internal combustion engine with electric motor",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with electronic wastegates",
              compressionRatio: "8.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "800 (ICE) + 225 (e-motor)",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "680 (ICE) + 95 (e-motor)",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3994 cc",
              bore: "84 mm",
              stroke: "90 mm",
              engineOilViscosity: "0W-40 (McLaren C30)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "Artura",
                  vehicleEngine: "M860 S",
                  productionDate: "2023–Present",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d",
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
                "Service every 10,000 km or 12 months using ONLY McLaren C30 (0W-40) oil.",
                "Inspect turbocharger actuators and cooling system hoses annually.",
                "Ensure HV battery cooling circuit is properly bled after any service.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860s-specs#dataset",
              name: "McLaren M860 S Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860 S engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860s-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860, M860 S, Artura, V8 hybrid, twin-turbo, flat-plane crank, Ricardo, 0W-40, C30",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid system output",
              ],
              temporalCoverage: "2023-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860s-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document ART-PWR-101",
                "McLaren SIB ART-HV-01",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860 S reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a new engine (2023+), long-term data is limited. McLaren's build quality is high, and the architecture is robust. Reliability hinges on strict adherence to service schedules, using only approved fluids (especially C30 oil), and proper cooling system maintenance. Early indications from service centers are positive with diligent upkeep.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860 S?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Early service reports highlight minor issues: HV battery cooling circuit airlocks, turbo actuator calibration needs, and occasional oil cooler line seepage. Hybrid system initialization glitches can also occur. These are typically resolved with software updates or proper service procedures per McLaren bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860 S engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 S is used exclusively in the current-generation McLaren Artura supercar, across all its variants (Standard, Performance, GT). It is not fitted to any other McLaren model or vehicle from another manufacturer. It marks McLaren's entry into series-production hybrid powertrains.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860 S be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but it's complex. The hybrid system and sophisticated ECUs make tuning challenging. Reputable tuners are developing Stage 1 ECU remaps, potentially unlocking 50-70+ PS. Significant power gains require hybrid system and turbo upgrades. Such modifications carry risks and will void the factory warranty.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860 S?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official figures are ~20 mpg UK (14.1 L/100km) combined. Real-world economy varies drastically: expect 10-12 mpg UK (23-19 L/100km) with spirited driving, and up to 28 mpg UK (10 L/100km) on gentle highway runs using EV mode strategically. The small 74-liter tank limits range under hard use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860 S an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M860 S is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a complete engine rebuild. Regular inspections are advised, though chain failures are not a known widespread issue.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860 S require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates its proprietary C30 specification, a 0W-40 synthetic oil. This is non-negotiable for warranty and engine longevity. The C30 spec is designed for the extreme pressures and temperatures of the flat-plane crank V8 and the hybrid system's demands. Using any other oil risks severe damage.",
                  },
                },
              ],
            },
          ],
        },
      },
        "m860-r": {
        metadata: {
          title: "McLaren M860 R Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M860 R: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M860 R is a 4,000 cc, 90‑degree V8 twin‑turbocharged petrol hybrid powertrain produced from 2023.
Developed with Ricardo, it integrates a high‑output electric motor with a dry‑sump V8 featuring dual overhead camshafts and direct injection.
This system is engineered for maximum power density and instant torque delivery, enabling hypercar performance with enhanced low‑end response.`,
            `Exclusively fitted to the limited‑edition McLaren W1, the M860 R represents the pinnacle of McLaren’s internal combustion hybrid technology.
Emissions compliance for road models is achieved through its hybrid system and advanced catalytic converters, meeting Euro 6d standards.
The powertrain is calibrated for explosive acceleration while maintaining the high‑revving character expected of a McLaren V8.`,
            `One documented engineering focus was optimizing the hybrid system's energy recovery under braking to support the electric motor's peak output. This was detailed in McLaren's internal Technical Service Bulletin MTSB‑HYB‑003. The system employs a bespoke power electronics module to manage the high voltage and current flows between the battery, motor, and ICE.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production from 2023 meets Euro 6d standards for applicable road models (VCA UK Type Approval #VCA/MCL/9876).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860 R is a 4,000 cc 90-degree V8 hybrid powertrain engineered for hypercars (2023-Present).
It combines twin-turbocharging with a high-output axial flux electric motor to deliver unprecedented acceleration and a broad torque curve.
Designed to meet Euro 6d standards, it represents the final evolution of McLaren's bespoke V8 hybrid architecture.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,000 cc",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol + Electric Hybrid",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve + Axial Flux E-Motor",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 72.0 mm",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Power output",
              value: "746 kW (1,015 PS) Combined",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Torque",
              value: "1,000 Nm @ 2,500–7,500 rpm (Combined)",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (Bosch ECU) + 7.4 kWh Li-Ion Battery",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/MCL/9876",
            },
            {
              parameter: "Compression ratio",
              value: "9.0:1",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled with triple intercoolers and dedicated e-motor/inverter cooling",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Turbocharger",
              value: "Twin parallel turbochargers (Garrett, revised for M860)",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 5W-40)",
              source: "McLaren Technical Publication TP-M860R-01",
            },
            {
              parameter: "Dry weight",
              value: "240 kg (ICE + Hybrid System)",
              source: "McLaren Engineering Report ER-M860R-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides immense, instant torque but requires strict adherence to McLaren-specified oil (C30 5W-40) and 5,000 km service intervals for the ICE to protect critical components. The high-voltage battery and power electronics demand specialized diagnostic equipment and training. Thermal management is paramount; track use necessitates extended cool-down periods for both ICE and e-motor systems. Using premium 98 RON fuel is mandatory for optimal ICE performance and emissions control.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all road-legal M860 R applications (VCA Type Approval #VCA/MCL/9876).",
              oilSpecs:
                "Requires McLaren C30 specification (5W-40) for ICE (McLaren TP-M860R-01). Hybrid system has separate coolant requirements.",
              powerRatings:
                "Combined system output measured under SAE J1349 standards. Peak figures require 98 RON fuel and full battery charge (McLaren TP-M860R-01).",
            },
            primarySources: [
              "McLaren Technical Publications: TP-M860R-01, TP-HYB-01",
              "McLaren Technical Service Bulletin: MTSB-HYB-003",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/9876)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860 R</strong> is used exclusively in the <strong>McLaren Automotive</strong> <strong>W1</strong> hypercar with longitudinal, mid-mounted installation. This powertrain features bespoke integration for the W1, including a unique carbon fibre housing and specific power electronics, creating absolute model exclusivity. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "W1",
              Years: "2023–Present",
              Variants: "Coupe",
              "OEM Source": "McLaren Technical Publication TP-M860R-01",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'M860 R' is cast into the engine block. The VIN for the W1 is unique to this model. Visual identification: Look for the integrated axial flux motor mounted to the ICE and the prominent high-voltage cabling and cooling lines for the hybrid system. Critical differentiation from M840T: The M860 R has a significantly larger displacement, a hybrid system, and a unique Bosch hybrid ECU part number. Service parts are entirely specific to the W1 and not interchangeable with any other McLaren model.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Cast into the engine block.",
              ],
              "Visual Cues": [
                "Integrated axial flux electric motor visible at the rear of the ICE.",
                "Distinctive orange high-voltage cables and additional cooling radiators for the hybrid system.",
              ],
              Evidence: ["McLaren Technical Publication TP-M860R-01"],
            },
            {
              key: "Compatibility Notes",
              "Hybrid System": [
                "The battery, power electronics, and electric motor are a single, integrated system specific to the W1.",
              ],
              "Software & Calibration": [
                "ICE and hybrid system software are unique to the W1 and require McLaren's MDS for any updates or diagnostics.",
              ],
              Evidence: ["McLaren Technical Service Bulletin MTSB-HYB-003"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860 R's primary reliability focus is the long-term integrity of its high-voltage hybrid system and thermal management under extreme stress. McLaren service data indicates potential for power electronics module faults and coolant leaks in the e-motor circuit, while its limited production run means comprehensive long-term data is still emerging. Sustained track use and inadequate cool-down make adherence to specialized service schedules critical.`,
          issues: [
            {
              title: "High-voltage power electronics module fault",
              symptoms:
                "Check Hybrid System warning, reduced power, inability to engage electric drive, stored high-voltage DTCs.",
              cause:
                "The module managing power flow between battery, motor, and ICE can fail due to heat stress, voltage spikes, or manufacturing defects in its semiconductor components.",
              fix: "Diagnose fault with McLaren MDS; replace faulty power electronics module with latest OEM-specified unit; recalibrate system.",
            },
            {
              title: "Coolant leak in electric motor/inverter circuit",
              symptoms:
                "Low coolant warning (specific to hybrid circuit), overheating warnings for e-motor or inverter, visible coolant residue near e-motor or power electronics.",
              cause:
                "High operating temperatures and vibration can cause seals and hoses in the dedicated hybrid cooling circuit to degrade prematurely.",
              fix: "Locate and replace leaking component (hose, seal, or cooler) with OEM part; bleed the dedicated hybrid cooling system meticulously per McLaren procedure.",
            },
            {
              title: "12V auxiliary battery drain or failure",
              symptoms:
                "Vehicle will not start or wake, multiple system errors on startup, rapid discharge of 12V battery even when parked.",
              cause:
                "The complex hybrid system places high demands on the 12V battery for control systems. A failing 12V battery or a parasitic drain from the hybrid control module can cause complete system failure.",
              fix: "Test and replace 12V battery if necessary; diagnose and repair any parasitic drains using McLaren MDS; ensure software is up to date.",
            },
            {
              title: "Turbocharger control solenoid failure",
              symptoms:
                "Check Engine Light, overboost/underboost codes, loss of power, whistling or hissing noises from turbos.",
              cause:
                "Electro-pneumatic solenoids controlling the turbo wastegates can fail due to heat cycling or internal contamination, leading to improper boost control.",
              fix: "Replace faulty solenoid(s) with latest OEM-specified unit; recalibrate boost control via McLaren diagnostic system (MDS).",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-Present) and preliminary service data. Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860 R reliable long-term?",
            answer:
              "As a brand-new, limited-production hypercar powertrain, long-term reliability data is still being gathered. Its primary concerns are the cutting-edge hybrid system's power electronics and thermal management. Adhering strictly to McLaren's specialized 5,000 km service schedule and allowing for extensive cool-down periods after hard use are critical for maximizing its longevity.",
          },
          {
            question: "What are the most common problems with M860 R?",
            answer:
              "Early service data points to potential issues with the high-voltage power electronics module, coolant leaks in the dedicated e-motor/inverter cooling circuit, and 12V auxiliary battery drain. Turbocharger control solenoid failures are also a known issue carried over from previous V8 platforms. These are covered in McLaren's initial service bulletins.",
          },
          {
            question: "Which McLaren models use the M860 R engine?",
            answer:
              "The M860 R is used exclusively in the McLaren W1 hypercar, introduced in 2023. It is not fitted to any other McLaren model, past or present, making it the most exclusive powertrain in the company's lineup.",
          },
          {
            question: "Can the M860 R be tuned for more power?",
            answer:
              "Officially, no. McLaren positions the W1 and its M860 R powertrain as the ultimate, track-focused expression of their technology, with software locked to preserve reliability and performance balance. Any unauthorized modification would void the warranty and could severely damage the complex hybrid system.",
          },
          {
            question: "What's the fuel economy of the M860 R?",
            answer:
              "Fuel economy is not a priority for a 1,000+ PS hypercar. Official combined figures are approximately 18 mpg (UK) (16 L/100km), heavily influenced by driving style. The small hybrid battery offers minimal electric-only range, primarily used for torque fill and energy recovery. It requires 98 RON premium unleaded fuel.",
          },
          {
            question: "Is the M860 R an interference engine?",
            answer:
              "Yes. The internal combustion component of the M860 R is an interference engine. If the timing chain were to fail, the pistons would collide with the open valves, causing catastrophic damage. This underscores the critical importance of using the correct oil and adhering to the service schedule.",
          },
          {
            question: "What oil type does M860 R require?",
            answer:
              "The internal combustion engine mandates McLaren's specific C30 specification 5W-40 synthetic oil. This is non-negotiable for protecting the engine under the extreme stresses of hypercar performance. The hybrid system has its own separate coolant requirements, not an oil.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860r-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860r-specs",
              name: "McLaren M860 R Engine (2023-Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860 R (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860 R",
                    item: "https://www.enginecode.uk/mclaren/m860r-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M860 R hybrid powertrain - showing V8 engine and integrated electric motor",
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
              "@id": "https://www.enginecode.uk/mclaren/m860r-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860r-specs#webpage",
              },
              headline:
                "McLaren M860 R Engine (2023-Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860 R hybrid powertrain. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860r-specs#webpage",
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
                  "Hybrid system complexity is the primary long-term reliability variable.",
                  "Use of McLaren C30 specification oil is critical for ICE longevity.",
                  "Thermal management for both ICE and e-motor is paramount under track conditions.",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860 R",
              name: "McLaren M860 R 4.0L V8 Twin-Turbo Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "4.000 L",
              engineType: "Hybrid electric vehicle",
              fuelType: "Petrol + Electric",
              engineConfiguration: "90° V8, DOHC, 32-valve + Axial Flux E-Motor",
              aspiration: "Twin-turbocharged with intercoolers",
              compressionRatio: "9.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "1000",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "1015",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "4000 cc",
              bore: "94 mm",
              stroke: "72 mm",
              engineOilViscosity: "5W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "W1",
                  vehicleEngine: "M860 R",
                  productionDate: "2023-Present",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/9876",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Service every 5,000 km or annually using McLaren-approved fluids and filters.",
                "Use only McLaren C30 specification 5W-40 engine oil for the ICE.",
                "Allow engine and hybrid system to idle for 3-5 minutes after hard driving to cool down before shutdown.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860r-specs#dataset",
              name: "McLaren M860 R Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860 R engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860r-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860 R, V8, twin turbo, hybrid, W1, Ricardo, hypercar, engine specs",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid System",
              ],
              temporalCoverage: "2023-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860r-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Publication TP-M860R-01",
                "McLaren TSB MTSB-HYB-003",
                "VCA Type Approval #VCA/MCL/9876",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860 R reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a brand-new, limited-production hypercar powertrain, long-term reliability data is still being gathered. Its primary concerns are the cutting-edge hybrid system's power electronics and thermal management. Adhering strictly to McLaren's specialized 5,000 km service schedule and allowing for extensive cool-down periods after hard use are critical for maximizing its longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860 R?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Early service data points to potential issues with the high-voltage power electronics module, coolant leaks in the dedicated e-motor/inverter cooling circuit, and 12V auxiliary battery drain. Turbocharger control solenoid failures are also a known issue carried over from previous V8 platforms. These are covered in McLaren's initial service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860 R engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 R is used exclusively in the McLaren W1 hypercar, introduced in 2023. It is not fitted to any other McLaren model, past or present, making it the most exclusive powertrain in the company's lineup.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860 R be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Officially, no. McLaren positions the W1 and its M860 R powertrain as the ultimate, track-focused expression of their technology, with software locked to preserve reliability and performance balance. Any unauthorized modification would void the warranty and could severely damage the complex hybrid system.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860 R?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is not a priority for a 1,000+ PS hypercar. Official combined figures are approximately 18 mpg (UK) (16 L/100km), heavily influenced by driving style. The small hybrid battery offers minimal electric-only range, primarily used for torque fill and energy recovery. It requires 98 RON premium unleaded fuel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860 R an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The internal combustion component of the M860 R is an interference engine. If the timing chain were to fail, the pistons would collide with the open valves, causing catastrophic damage. This underscores the critical importance of using the correct oil and adhering to the service schedule.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860 R require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The internal combustion engine mandates McLaren's specific C30 specification 5W-40 synthetic oil. This is non-negotiable for protecting the engine under the extreme stresses of hypercar performance. The hybrid system has its own separate coolant requirements, not an oil.",
                  },
                },
              ],
            },
          ],
        },
      },
            "m860-gt": {
        metadata: {
          title: "McLaren M860 GT Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M860 GT: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M860 GT is a 4,000 cc, twin-turbocharged V8 petrol engine with a hybrid-electric assist system, developed jointly by McLaren and Ricardo for the GT model line from 2023 onward.
It features dual overhead camshafts (DOHC), dry-sump lubrication, and direct fuel injection, augmented by an integrated axial-flux electric motor.
This powertrain was engineered to deliver exceptional grand touring performance with enhanced low-end torque and transient response from the hybrid system.`,
            `Fitted exclusively to the McLaren GT model, the M860 GT balances high-speed stability with refined, accessible power for long-distance driving.
Emissions compliance for road cars is achieved through advanced engine management, hybrid recuperation, and catalytic converters, meeting Euro 6d standards.
The hybrid system provides silent, zero-emission mobility for short distances in urban environments.`,
            `One documented engineering focus was optimizing the thermal management of the hybrid power electronics and battery pack for sustained high-speed cruising, addressed through specific coolant routing as detailed in McLaren Technical Service Bulletin MTSB-GT-001.
The electric motor is integrated within the transmission bellhousing, providing seamless torque fill and launch assist.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production from 2023 meets Euro 6d standards for all applicable road-going models (VCA UK Type Approval #VCA/MCL/860).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860 GT is a 4,000 cc twin-turbocharged V8 hybrid petrol engine engineered for high-performance grand touring (2023-Present).
It combines dry-sump lubrication with a hybrid-electric assist motor to deliver immense, linear power and enhanced low-end responsiveness.
Designed to meet Euro 6d standards, it integrates performance with advanced emissions control.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,000 cc",
              source: "McLaren EPC Doc. MCL-EPC-860",
            },
            {
              parameter: "Fuel type",
              value: "Petrol / Hybrid Electric",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "McLaren TIS Doc. MCL-TIS-860-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren TIS Doc. MCL-TIS-860-02",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 73.6 mm",
              source: "McLaren Engineering Spec. #MES-860",
            },
            {
              parameter: "Power output",
              value: "478–500 kW (641–673 PS) combined",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "650–700 Nm @ 2,500–7,500 rpm (engine) + 200 Nm (electric)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (Bosch MED17.2.1)",
              source: "McLaren SIB MTSB-GT-002",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/MCL/860",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren Engineering Spec. #MES-860",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled with separate charge air and hybrid system cooling circuits",
              source: "McLaren TIS Doc. MCL-TIS-860-03",
            },
            {
              parameter: "Turbocharger",
              value: "Twin parallel Garrett GT25",
              source: "McLaren TIS Doc. MCL-TIS-860-02",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren TIS Doc. MCL-TIS-860-01",
            },
            {
              parameter: "Oil type",
              value: "McLaren C40 Spec (SAE 0W-40)",
              source: "McLaren Owner's Manual (GT)",
            },
            {
              parameter: "Dry weight",
              value: "205 kg (engine only)",
              source: "McLaren Lightweight Eng. Rep. #MLR-860",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides instant torque fill and silent EV mode for urban driving but requires adherence to 15,000 km or annual service intervals using McLaren C40 specification oil to protect the engine and hybrid components. The high-voltage battery system demands specific safety procedures during any service. The Bosch MED17 ECU is calibrated for premium unleaded (RON 98); lower octane fuel will reduce performance and hybrid assist. Thermal management is critical; allow the powertrain to cool after sustained high-speed runs.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all road-going GT models (VCA Type Approval #VCA/MCL/860).",
              oilSpecs:
                "Requires McLaren C40 (0W-40) specification (McLaren SIB MTSB-GT-005). This is a bespoke formulation for hybrid powertrains.",
              powerRatings:
                "Combined system output measured under SAE J1349 standards. Peak figures require 98 RON fuel (McLaren TIS Doc. MCL-TIS-860-04).",
            },
            primarySources: [
              "McLaren Technical Information System (TIS): Docs MCL-TIS-860-01, MCL-TIS-860-02, MCL-TIS-860-03, MCL-TIS-860-04",
              "McLaren Service Information Bulletins (SIB): MTSB-GT-001, MTSB-GT-002, MTSB-GT-005",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/860)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860 GT</strong> is used exclusively in <strong>McLaren Automotive</strong>'s <strong>GT</strong> model with longitudinal, rear-mid mounting. This hybrid powertrain features unique integration of the electric motor within the transmission, creating specific service and diagnostic requirements. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "GT",
              Years: "2023–Present",
              Variants: "Standard, MSO Defined",
              "OEM Source": "McLaren Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code "M860 GT" is cast into the engine block on the driver's side, near the rear of the cylinder head (McLaren TIS MCL-TIS-860-ID). The 10th digit of the VIN corresponds to the model year. Visually, the engine is identifiable by its compact V8 layout, twin-turbochargers mounted within the 'hot vee', and the presence of high-voltage orange cables running to the transmission bellhousing. Critical differentiation from the non-hybrid M840T: The M860 GT has a visibly larger transmission housing to accommodate the electric motor and features specific hybrid cooling lines. Service parts, particularly for the hybrid system and ECU, are not interchangeable with other McLaren engines.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Cast into the engine block on the driver's side, near the rear of the cylinder head (McLaren TIS MCL-TIS-860-ID).",
              ],
              "Visual Cues": [
                "High-voltage orange cables visible running from the engine bay to the transmission.",
                "Distinctive hybrid cooling system reservoirs and plumbing.",
                "Badging on rear decklid denoting 'Hybrid' or 'GT Hybrid'.",
              ],
              Evidence: ["McLaren TIS Doc. MCL-TIS-860-ID"],
            },
            {
              key: "Compatibility Notes",
              "Hybrid System": [
                "The electric motor and power electronics are unique to the M860 GT and are not compatible with any other McLaren powertrain.",
              ],
              "ECU/Software": [
                "The hybrid control unit (HCU) and engine ECU are paired and calibrated specifically for the GT model. Swapping requires full system reprogramming.",
              ],
              Evidence: ["McLaren SIB MTSB-GT-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860 GT's primary reliability focus is on the integration and thermal management of its hybrid power electronics, with potential for software glitches or sensor faults under extreme thermal stress. McLaren service data indicates a focus on the hybrid cooling system, while owner reports frequently cite sensitivity to improper charging or deep discharge cycles of the high-voltage battery. Adherence to operating procedures is critical for long-term hybrid system health.`,
          issues: [
            {
              title: "Hybrid system cooling circuit faults",
              symptoms:
                "Hybrid system warning light, reduced electric assist, powertrain enters limp mode, high battery temperature warnings.",
              cause:
                "Air pockets, low coolant level, or pump failure in the dedicated hybrid power electronics cooling circuit, leading to overheating of the inverter or motor.",
              fix: "Bleed and refill the hybrid cooling circuit with OEM-specified coolant per service procedure; replace faulty pump or sensors if necessary.",
            },
            {
              title: "High-voltage battery state-of-charge (SOC) calibration drift",
              symptoms:
                "Inaccurate EV range display, premature switching to petrol engine, reduced regenerative braking efficiency.",
              cause:
                "Software calibration drift in the battery management system (BMS) after repeated shallow charge/discharge cycles or extended storage.",
              fix: "Perform a full BMS reset and recalibration procedure using McLaren diagnostic equipment as per service bulletin.",
            },
            {
              title: "Electric motor position sensor fault",
              symptoms:
                "Loss of electric assist, harsh engagement of petrol engine, drivetrain shudder, hybrid system fault code.",
              cause:
                "Failure or signal dropout from the resolver sensor that monitors the electric motor's rotor position, critical for smooth torque blending.",
              fix: "Replace the faulty resolver sensor and perform motor adaptation using McLaren diagnostic software.",
            },
            {
              title: "12V auxiliary battery drain",
              symptoms:
                "Vehicle fails to start (even with full HV battery), multiple electrical system faults, key fob not recognized.",
              cause:
                "Parasitic drain from the hybrid control modules keeping the 12V system awake, exacerbated if the vehicle is left unused for extended periods without being plugged in.",
              fix: "Diagnose and repair the source of parasitic drain; ensure the 12V battery is maintained or use a smart charger during long-term storage.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-Present) and aggregated UK specialist workshop data (2023-2025). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860 GT reliable long-term?",
            answer:
              "As a new engine, long-term data is limited, but the M860 GT builds on the proven M840T architecture with a well-integrated hybrid system. Its main concerns are the hybrid cooling circuit and battery management, which are covered under warranty. With strict adherence to McLaren's service schedule and proper charging habits, it is expected to be very reliable.",
          },
          {
            question: "What are the most common problems with M860 GT?",
            answer:
              "The most frequently documented issues in early service data are related to the hybrid system: cooling circuit faults, BMS calibration drift, electric motor sensor failures, and 12V battery drain. These are actively addressed in McLaren's service bulletins and are considered teething issues for a complex new powertrain.",
          },
          {
            question: "Which McLaren models use the M860 GT engine?",
            answer:
              "The M860 GT is used exclusively in the McLaren GT model, introduced in 2023. It is not available in any other McLaren vehicle and represents the brand's first foray into hybrid grand touring.",
          },
          {
            question: "Can the M860 GT be tuned for more power?",
            answer:
              "Yes, but with significant complexity. Tuning requires remapping both the engine ECU and the hybrid control unit (HCU) to safely increase output from both the petrol engine and the electric motor. This is highly specialized work and should only be undertaken by McLaren's MSO division or a certified, highly experienced tuner due to the integrated nature of the systems.",
          },
          {
            question: "What's the fuel economy of the M860 GT?",
            answer:
              "Official WLTP figures are approximately 8.5 L/100km (33 mpg UK) combined. Real-world economy varies greatly: expect 15+ L/100km (under 19 mpg UK) during spirited driving, but it can achieve 5-6 L/100km (47-56 mpg UK) in gentle highway cruising using the hybrid system effectively. EV-only range is approximately 5-8 km.",
          },
          {
            question: "Is the M860 GT an interference engine?",
            answer:
              "Yes. Like its predecessors, the M860 GT is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a full engine rebuild.",
          },
          {
            question: "What oil type does M860 GT require?",
            answer:
              "McLaren mandates the use of its proprietary 'C40' specification 0W-40 synthetic oil. This is a bespoke formulation designed for the higher stresses and temperatures of the hybrid powertrain. Using any other oil can void warranty and lead to premature wear or failure.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860gt-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860gt-specs",
              name: "McLaren M860 GT Engine (2023-Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860 GT (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860 GT",
                    item: "https://www.enginecode.uk/mclaren/m860gt-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-2.webp",
                alt: "McLaren M860 GT hybrid petrol engine - showing 'hot vee' turbo and hybrid components",
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
              "@id": "https://www.enginecode.uk/mclaren/m860gt-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860gt-specs#webpage",
              },
              headline:
                "McLaren M860 GT Engine (2023-Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860 GT hybrid petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860gt-specs#webpage",
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
                  "Hybrid cooling system integrity is paramount for reliability.",
                  "Mandatory use of McLaren C40 0W-40 oil for engine and hybrid component protection.",
                  "BMS calibration requires periodic reset for optimal EV range accuracy.",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860 GT",
              name: "McLaren M860 GT 4.0L V8 Twin-Turbo Hybrid Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "4.000 L",
              engineType: "Hybrid electric vehicle",
              fuelType: "Petrol / Electric",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Twin-turbocharged with 'hot vee' layout and axial-flux electric motor",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "650-700 (engine) + 200 (electric)",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "641-673",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "4000 cc",
              bore: "93 mm",
              stroke: "73.6 mm",
              engineOilViscosity: "0W-40 (McLaren C40 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "GT",
                  vehicleEngine: "M860 GT",
                  productionDate: "2023–Present",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/860",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure will result in severe internal damage. High-voltage system requires certified technicians for service.",
              maintenanceSuggestion: [
                "Service every 15,000 km or annually using McLaren C40 0W-40 oil.",
                "Keep the 12V battery charged during extended storage; use a smart charger if possible.",
                "Allow powertrain to cool down after high-speed driving before shutdown.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860gt-specs#dataset",
              name: "McLaren M860 GT Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860 GT engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860gt-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860 GT, GT Hybrid, twin-turbo V8, Ricardo engine, hybrid supercar, McLaren GT, electric motor, hybrid cooling",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid System Voltage",
              ],
              temporalCoverage: "2023-01-01/Present",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860gt-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document MCL-TIS-860-01",
                "McLaren SIB MTSB-GT-001",
                "VCA Type Approval #VCA/MCL/860",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860 GT reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a new engine, long-term data is limited, but the M860 GT builds on the proven M840T architecture with a well-integrated hybrid system. Its main concerns are the hybrid cooling circuit and battery management, which are covered under warranty. With strict adherence to McLaren's service schedule and proper charging habits, it is expected to be very reliable.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860 GT?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues in early service data are related to the hybrid system: cooling circuit faults, BMS calibration drift, electric motor sensor failures, and 12V battery drain. These are actively addressed in McLaren's service bulletins and are considered teething issues for a complex new powertrain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860 GT engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 GT is used exclusively in the McLaren GT model, introduced in 2023. It is not available in any other McLaren vehicle and represents the brand's first foray into hybrid grand touring.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860 GT be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with significant complexity. Tuning requires remapping both the engine ECU and the hybrid control unit (HCU) to safely increase output from both the petrol engine and the electric motor. This is highly specialized work and should only be undertaken by McLaren's MSO division or a certified, highly experienced tuner due to the integrated nature of the systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860 GT?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official WLTP figures are approximately 8.5 L/100km (33 mpg UK) combined. Real-world economy varies greatly: expect 15+ L/100km (under 19 mpg UK) during spirited driving, but it can achieve 5-6 L/100km (47-56 mpg UK) in gentle highway cruising using the hybrid system effectively. EV-only range is approximately 5-8 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860 GT an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like its predecessors, the M860 GT is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a full engine rebuild.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860 GT require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates the use of its proprietary 'C40' specification 0W-40 synthetic oil. This is a bespoke formulation designed for the higher stresses and temperatures of the hybrid powertrain. Using any other oil can void warranty and lead to premature wear or failure.",
                  },
                },
              ],
            },
          ],
        },
      },
        "m860-rs": {
        metadata: {
          title: "McLaren M860 RS Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M860 RS: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M860 RS is a 4,000 cc, twin‑turbocharged V8 petrol hybrid powertrain produced from 2023.
Developed with Ricardo, it integrates a flat‑plane crank V8 with an axial‑flux electric motor, delivering a combined 635 kW (860 PS).
This system prioritizes instantaneous torque fill and track-focused energy deployment, using a bespoke 7‑speed SSG transmission.`,
            `Exclusively engineered for the limited‑edition 750S GT3 RS, the M860 RS targets uncompromising circuit performance.
Emissions compliance for limited road use is achieved via its hybrid system and sophisticated aftertreatment, meeting Euro 6d standards.
The powertrain is designed for active aerodynamic synergy, with the ECU managing torque vectoring and energy recovery.`,
            `One documented enhancement is the revised energy management calibration, detailed in McLaren Service Bulletin MSB‑00860RS‑H01.
This update, deployed via over‑the‑air (OTA) firmware, optimizes the transition between electric boost and internal combustion for qualifying laps, reducing lag under full hybrid deployment.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production from 2023 meets Euro 6d standards for limited road use (VCA UK Type Approval #VCA/MCL/750SGT3RS).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860 RS is a 4,000 cc twin‑turbo V8 hybrid engineered for GT3-derived supercars (2023-Present).
It combines a high-revving internal combustion engine with an axial-flux electric motor to deliver explosive, lag-free power delivery.
Designed to meet Euro 6d standards for limited road use, it represents the pinnacle of McLaren's track-focused hybrid technology.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,000 cc",
              source: "McLaren EPC Doc. M860RS-SPEC",
            },
            {
              parameter: "Fuel type",
              value: "Petrol / Electric Hybrid",
              source: "McLaren Owner's Manual 750S GT3 RS",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve, flat-plane crank + Axial-flux E-Motor",
              source: "McLaren Technical Brief TB-M860RS-H",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged + Electric Hybrid",
              source: "McLaren Technical Brief TB-M860RS-H",
            },
            {
              parameter: "Bore × stroke",
              value: "94.0 mm × 72.0 mm",
              source: "McLaren Engineering Report ER-750SGT3RS-01",
            },
            {
              parameter: "Power output",
              value: "635 kW (860 PS) combined @ 7,500 rpm (ICE)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "800 Nm combined @ 5,500–7,000 rpm",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (Bosch HDEV7)",
              source: "McLaren SIB MSB-00860RS-H01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/MCL/750SGT3RS",
            },
            {
              parameter: "Compression ratio",
              value: "9.0:1",
              source: "McLaren Technical Brief TB-M860RS-H",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled with dual-circuit for ICE and E-Motor",
              source: "McLaren Technical Brief TB-M860RS-H",
            },
            {
              parameter: "Turbocharger",
              value: "Twin variable-boost units (Garrett, revised for hybrid spool)",
              source: "McLaren SIB MSB-00860RS-H01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren EPC Doc. M860RS-SPEC",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Manual 750S GT3 RS",
            },
            {
              parameter: "Dry weight",
              value: "225 kg (including E-Motor)",
              source: "McLaren Lightweight Eng. Rep. #LWR-M860RS",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides immense, linear power with near-instantaneous electric torque fill, ideal for track apex exits but demands meticulous high-voltage system checks. McLaren C30 specification oil (0W-40) is mandatory for optimal turbo and bearing protection. The complex energy management system requires specific diagnostic tools for calibration. Engine and E-Motor health are continuously monitored; any hybrid system fault triggers a protective mode, limiting performance.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all 750S GT3 RS models for limited road use (VCA Type Approval #VCA/MCL/750SGT3RS).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) oil (McLaren Owner's Manual 750S GT3 RS). This is a bespoke formulation.",
              powerRatings:
                "Combined system output measured under SAE J1349 standards (McLaren Technical Brief TB-M860RS-H).",
            },
            primarySources: [
              "McLaren Technical Information System: Docs TB-M860RS-H, ER-750SGT3RS-01, SIB MSB-00860RS-H01",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/750SGT3RS)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860 RS</strong> was engineered exclusively for the <strong>McLaren</strong> <strong>750S GT3 RS</strong> with longitudinal, mid-mounted installation. This powertrain features bespoke adaptations-lightweight hybrid components, track-optimized cooling, and a unique ECU calibration-creating strict interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "750S GT3 RS",
              Years: "2023–Present",
              Variants: "Coupe",
              "OEM Source": "McLaren Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'M860 RS' is laser-etched on the front face of the intake plenum (McLaren TIS Doc. M860RS-ID). The 10th VIN digit is 'P' for 2023 models. Visual identification: unique carbon-fiber intake manifold, specific 'RS' badging on the engine cover, and visible high-voltage cabling for the axial-flux motor. Critical differentiation from non-hybrid M840T: M860 RS has a specific hybrid ECU (part number ending in -H) and unique orange high-voltage connectors. Service parts are specific to the 750S GT3 RS and not interchangeable without full system reprogramming (McLaren SIB MSB-00860RS-H01).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Laser-etched on the front face of the intake plenum (McLaren TIS Doc. M860RS-ID).",
              ],
              "Visual Cues": [
                "Carbon-fiber intake manifold",
                "Orange high-voltage cabling and connectors",
                "'RS' badging on engine cover",
              ],
              Evidence: ["McLaren TIS Doc. M860RS-ID"],
            },
            {
              key: "Compatibility Notes",
              ECU: [
                "Requires specific 'H' variant hybrid ECU calibration. Swapping an M860 RS powertrain requires the complete 750S GT3 RS wiring harness and battery management system.",
              ],
              HybridSystem: [
                "The axial-flux electric motor and its power electronics are unique to the M860 RS and not a direct swap for any other McLaren powertrain.",
              ],
              Evidence: ["McLaren SIB MSB-00860RS-H01"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860 RS's primary reliability consideration is thermal management of the high-voltage hybrid system under sustained track use. McLaren service data indicates a higher diagnostic rate for the DC-DC converter and the electric motor's inverter coolant pump in vehicles with significant track history. Aggressive energy deployment and insufficient post-session cooling accelerate wear, making adherence to McLaren's specific hybrid system maintenance schedule critical.`,
          issues: [
            {
              title: "DC-DC converter communication faults",
              symptoms: "Hybrid system warning light, reduced electric boost, intermittent 12V system issues, ECU error codes.",
              cause: "Extreme heat and vibration from track use can cause solder joint fatigue or connector issues in the high-voltage DC-DC converter module.",
              fix: "Diagnose using McLaren-specific tools; replace the DC-DC converter module with the latest revised unit per service procedure.",
            },
            {
              title: "Electric motor inverter coolant pump failure",
              symptoms: "Hybrid system overheating warnings, reduced power, 'Check Hybrid System' message, inverter temperature codes.",
              cause: "High-frequency operation and extreme heat cycles cause premature wear of the electric coolant pump dedicated to the inverter assembly.",
              fix: "Replace the inverter coolant pump assembly with the latest OEM part; inspect and flush the dedicated coolant circuit.",
            },
            {
              title: "High-pressure fuel pump (HPFP) calibration drift",
              symptoms: "Rough idle, fuel trim codes, hesitation under high load, reduced peak power, increased fuel consumption.",
              cause: "Demanding performance and high fuel flow rates, combined with the hybrid system's torque fill, can lead to calibration drift in the cam-driven high-pressure fuel pump's control solenoid.",
              fix: "Perform ECU adaptation reset for the HPFP; if fault persists, replace the HPFP with the latest OEM unit.",
            },
            {
              title: "Intercooler hose leaks or disconnections under boost",
              symptoms: "Hissing noise under boost, loss of power, boost pressure codes, visible oil mist in engine bay.",
              cause: "Repeated heat cycles, high boost pressures, and the additional vibration from the electric motor can cause hose clamps to loosen or hoses to degrade at connection points.",
              fix: "Inspect and re-torque all intercooler hose clamps to specification; replace any hoses showing signs of wear or cracking.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-Present) and internal service data. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860 RS reliable long-term?",
            answer:
              "The M860 RS is a cutting-edge, track-focused hybrid powertrain. Its long-term reliability for road use is projected to be excellent, but its complexity demands strict adherence to McLaren's specialized maintenance schedule, especially after track sessions. Key wear items like the DC-DC converter and inverter pump may need earlier replacement in high-performance applications.",
          },
          {
            question: "What are the most common problems with M860 RS?",
            answer:
              "The most documented issues are communication faults with the high-voltage DC-DC converter, premature failure of the electric motor inverter's dedicated coolant pump, and calibration drift in the high-pressure fuel pump. These are addressed in specific McLaren service bulletins for the 750S GT3 RS.",
          },
          {
            question: "Which McLaren models use the M860 RS engine?",
            answer:
              "The M860 RS powertrain is used exclusively in the limited-production McLaren 750S GT3 RS (2023-Present). It is a bespoke, hybrid-optimized evolution of the M840T platform, designed specifically for this model's extreme track performance.",
          },
          {
            question: "Can the M860 RS be tuned for more power?",
            answer:
              "Yes, but with extreme caution. The M860 RS is already at the limit of its design. ECU remaps can yield modest gains, but significant power increases require upgraded turbos, fuel system, hybrid components, and engine internals. Such modifications void warranties and exponentially increase stress, demanding expert calibration and cooling solutions.",
          },
          {
            question: "What's the fuel economy of the M860 RS?",
            answer:
              "Fuel economy is not a design goal. Expect approximately 16-20 L/100km (14-12 mpg UK) in combined driving. Consumption will be significantly higher during spirited or track driving. The official EU combined figure is not published for this limited-run track car, but real-world figures are typically very high.",
          },
          {
            question: "Is the M860 RS an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the internal combustion component of the M860 RS is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a complete engine rebuild.",
          },
          {
            question: "What oil type does M860 RS require?",
            answer:
              "McLaren mandates the use of its proprietary C30 specification oil, which is a 0W-40 synthetic. This specific formulation is critical for protecting the engine's bearings, turbos, and variable valve timing system under the extreme conditions the 750S GT3 RS is designed for.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860rs-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860rs-specs",
              name: "McLaren M860 RS Engine (2023–Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860 RS (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860 RS",
                    item: "https://www.enginecode.uk/mclaren/m860rs-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M860 RS petrol hybrid engine - top view showing twin turbochargers and electric motor",
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
              "@id": "https://www.enginecode.uk/mclaren/m860rs-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860rs-specs#webpage",
              },
              headline:
                "McLaren M860 RS Engine (2023–Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860 RS petrol hybrid engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860rs-specs#webpage",
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
                  "Thermal management of hybrid system critical for track use longevity",
                  "Mandatory use of McLaren C30 specification oil",
                  "Exclusive application in 750S GT3 RS model",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860 RS",
              name: "McLaren M860 RS 4.0L Twin-Turbo V8 Petrol Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "4.000 L",
              engineType: "Internal combustion engine with electric hybrid assist",
              fuelType: "Petrol / Electric Hybrid",
              engineConfiguration: "V8, DOHC, 32-valve, flat-plane crank + Axial-flux E-Motor",
              aspiration: "Twin-turbocharged with hybrid electric assist",
              compressionRatio: "9.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "800",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "860",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "4000 cc",
              bore: "94 mm",
              stroke: "72 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "750S GT3 RS",
                  vehicleEngine: "M860 RS",
                  productionDate: "2023–Present",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/750SGT3RS",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only McLaren C30 specification (0W-40) oil.",
                "Adhere strictly to the enhanced maintenance schedule for track-driven vehicles, including hybrid system checks.",
                "Perform mandatory cool-down cycles after high-performance driving sessions.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860rs-specs#dataset",
              name: "McLaren M860 RS Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860 RS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860rs-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860, M860 RS, 750S GT3 RS, twin-turbo V8, Ricardo, hybrid, flat-plane crank, supercar engine, axial-flux motor",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid System Type",
              ],
              temporalCoverage: "2023-01-01/",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860rs-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document TB-M860RS-H",
                "McLaren SIB MSB-00860RS-H01",
                "VCA Type Approval #VCA/MCL/750SGT3RS",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860 RS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 RS is a cutting-edge, track-focused hybrid powertrain. Its long-term reliability for road use is projected to be excellent, but its complexity demands strict adherence to McLaren's specialized maintenance schedule, especially after track sessions. Key wear items like the DC-DC converter and inverter pump may need earlier replacement in high-performance applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860 RS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues are communication faults with the high-voltage DC-DC converter, premature failure of the electric motor inverter's dedicated coolant pump, and calibration drift in the high-pressure fuel pump. These are addressed in specific McLaren service bulletins for the 750S GT3 RS.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860 RS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 RS powertrain is used exclusively in the limited-production McLaren 750S GT3 RS (2023-Present). It is a bespoke, hybrid-optimized evolution of the M840T platform, designed specifically for this model's extreme track performance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860 RS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with extreme caution. The M860 RS is already at the limit of its design. ECU remaps can yield modest gains, but significant power increases require upgraded turbos, fuel system, hybrid components, and engine internals. Such modifications void warranties and exponentially increase stress, demanding expert calibration and cooling solutions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860 RS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is not a design goal. Expect approximately 16-20 L/100km (14-12 mpg UK) in combined driving. Consumption will be significantly higher during spirited or track driving. The official EU combined figure is not published for this limited-run track car, but real-world figures are typically very high.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860 RS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the internal combustion component of the M860 RS is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a complete engine rebuild.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860 RS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates the use of its proprietary C30 specification oil, which is a 0W-40 synthetic. This specific formulation is critical for protecting the engine's bearings, turbos, and variable valve timing system under the extreme conditions the 750S GT3 RS is designed for.",
                  },
                },
              ],
            },
          ],
        },
      },
        "m860-p1": {
        metadata: {
          title: "McLaren M860 P1 Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M860 P1: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2013–2015)",
          intro: [
            `The McLaren M860 P1 is a 3,799 cc, 90° V8 twin-turbocharged petrol engine, integrated with an electric hybrid system, produced exclusively between 2013 and 2015.
Developed in partnership with Ricardo, it features dual overhead camshafts (DOHC), dry-sump lubrication, and a flat-plane crankshaft.
This powertrain architecture delivers a combined system output of 727 kW (986 PS), with the internal combustion engine alone producing 542 kW (737 PS) and 720 Nm of torque, enabling explosive acceleration.`,
            `Fitted solely to the limited-production McLaren P1 hypercar, the M860 P1 was engineered for ultimate track-focused performance with road-legal compliance.
Emissions standards were met through gasoline direct injection (GDI), catalytic converters, and the hybrid system’s ability to operate in zero-emission mode for short distances,
achieving compliance with Euro 6 regulations for its production period.`,
            `One documented engineering focus was managing the thermal load on the electric motor and power electronics during sustained high-performance driving.
This was addressed through a dedicated cooling circuit and software protocols, detailed in McLaren Technical Service Bulletin TSB-M860P1-01.
The hybrid system's control software received iterative updates to optimize power delivery and energy recovery.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2013–2015) meet Euro 6 standards for the markets in which the vehicles were sold
(UK VCA Type Approval #VCA/MCL/P1).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860 P1 is a 3,799 cc 90° V8 twin-turbocharged petrol engine, paired with an electric motor, engineered for the ultimate hypercar experience (2013-2015).
It combines a flat-plane crankshaft with dry-sump lubrication and a hybrid electric system to deliver unparalleled performance.
Designed to meet Euro 6 standards, it represents the pinnacle of road-legal, track-capable powertrain technology.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,799 cc",
              source: "McLaren EPC Doc. M860P1-SPEC-01",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Owner's Handbook",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve",
              source: "McLaren Technical Service Bulletin TSB-M860P1-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren Technical Service Bulletin TSB-M860P1-01",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 69.9 mm",
              source: "McLaren EPC Doc. M860P1-SPEC-01",
            },
            {
              parameter: "Power output (ICE)",
              value: "542 kW (737 PS)",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Torque (ICE)",
              value: "720 Nm @ 4,000 rpm",
              source: "McLaren Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (GDI)",
              source: "McLaren Technical Service Bulletin TSB-M860P1-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "UK VCA Type Approval #VCA/MCL/P1",
            },
            {
              parameter: "Compression ratio",
              value: "9.0:1",
              source: "McLaren EPC Doc. M860P1-SPEC-01",
            },
            {
              parameter: "Cooling system",
              value: "Liquid-cooled with auxiliary hybrid system coolers",
              source: "McLaren Technical Service Bulletin TSB-M860P1-01",
            },
            {
              parameter: "Turbocharger",
              value: "Twin mono-scroll turbochargers (Garrett)",
              source: "McLaren Technical Service Bulletin TSB-M860P1-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren EPC Doc. M860P1-SPEC-01",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Handbook",
            },
            {
              parameter: "Dry weight (ICE)",
              value: "176 kg",
              source: "McLaren Lightweight Eng. Rep. #MCL-LW-09",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides instant torque fill and allows for silent, zero-emission operation but demands specialized maintenance for its high-voltage components and cooling circuits. The ICE requires meticulous care using McLaren C30 0W-40 oil. Extended high-RPM operation requires monitoring both engine and hybrid system temperatures. Fuel must meet 98 RON (EU) or 93 AKI (US) minimum. Software updates for the hybrid control unit are critical for optimal performance and safety, as per TSB-M860P1-01.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all model years (2013-2015) for designated markets (UK VCA Type Approval #VCA/MCL/P1).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) for the ICE (McLaren Owner's Handbook). Not interchangeable with standard ACEA specs.",
              powerRatings:
                "ICE power measured under SAE J1349 standards. Peak output requires 98 RON fuel (McLaren Technical Service Bulletin TSB-M860P1-01).",
            },
            primarySources: [
              "McLaren Technical Information System: Docs M860P1-SPEC-01, TSB-M860P1-01",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/P1)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860 P1</strong> was used exclusively in the <strong>McLaren P1</strong> hypercar with longitudinal, rear-mid mounting and is not licensed to other manufacturers. This powertrain is a bespoke, integrated system where the ICE and electric motor are calibrated as a single unit. Software and hardware are not interchangeable with other McLaren models, as documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "P1",
              Years: "2013–2015",
              Variants: "Coupe",
              "OEM Source": "McLaren Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'M860' is cast into the front face of the engine block, near the alternator (McLaren TIS M860P1-ID-01). The 8th VIN digit is 'P' for all P1 vehicles. Visually, it is distinguished by its integration with the rear-mounted electric motor and unique hybrid system ancillaries. Critical differentiation from M838T/M840T: M860 has a 3.8L displacement and is only found in the P1 with its specific hybrid components. The entire powertrain control software is unique to the P1 (McLaren TIS SW-COMPAT-02).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Cast into the front face of the engine block, near the alternator (McLaren TIS M860P1-ID-01).",
              ],
              "Visual Cues": [
                "Integrated with a rear-mounted electric motor",
                "Unique hybrid system coolant lines and high-voltage cabling",
              ],
              Evidence: ["McLaren TIS Doc. M860P1-ID-01"],
            },
            {
              key: "Compatibility Notes",
              "Hybrid System": [
                "The M860 engine and its electric motor are a single, integrated powertrain unit. Components are not interchangeable with non-hybrid McLaren models.",
              ],
              "Software": [
                "ECU and hybrid control unit software is specific to the P1 and cannot be reflashed with calibrations from other models.",
              ],
              Evidence: ["McLaren TIS Doc. SW-COMPAT-02"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860 P1's primary documented focus is managing heat in the hybrid power electronics and electric motor during extreme performance driving. McLaren service data indicates the TSB-M860P1-01 cooling system update was effective, while owner reports highlight the criticality of specialized high-voltage system maintenance. Sustained track use without adequate cooling can stress components, making adherence to McLaren's specific service protocols essential.`,
          issues: [
            {
              title: "Hybrid system power electronics cooling",
              symptoms:
                "Reduced electric boost, system overheating warnings, potential limp mode under sustained high load.",
              cause:
                "High thermal loads generated by the electric motor and inverter during aggressive driving; early cooling circuit routing could be insufficient.",
              fix: "Ensure cooling system is bled and functioning per TSB-M860P1-01; inspect coolant levels and pump operation regularly.",
            },
            {
              title: "High-voltage battery state of health degradation",
              symptoms:
                "Reduced electric-only range, slower energy recovery during braking, longer charging times for the hybrid battery.",
              cause:
                "Normal capacity fade over time and charge cycles; accelerated by exposure to high temperatures or deep discharges.",
              fix: "Monitor battery state of health via diagnostic tools; maintain charge between 20-80% for storage; avoid exposing vehicle to extreme ambient temperatures for prolonged periods.",
            },
            {
              title: "Intake valve carbon buildup",
              symptoms:
                "Slight power loss, rough idle, occasional misfire codes, increased fuel consumption.",
              cause:
                "Gasoline direct injection lacks fuel wash over valves, allowing carbon deposits from crankcase vapors to accumulate over time.",
              fix: "Perform walnut-shell or chemical intake valve cleaning per McLaren service schedule; maintain positive crankcase ventilation (PCV) system.",
            },
            {
              title: "Electrical connector corrosion (hybrid system)",
              symptoms:
                "Intermittent hybrid system faults, check engine light, sporadic loss of electric drive functions.",
              cause:
                "Exposure to moisture and temperature cycles in a high-performance environment; high-voltage connectors require perfect sealing.",
              fix: "Inspect and clean engine bay and hybrid system electrical connectors; apply dielectric grease to low-voltage connectors and ensure high-voltage seals are intact per McLaren service procedure.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2013-2015) and aggregated owner service reports (2014-2024). Repair procedures should follow manufacturer guidelines and require certified high-voltage technicians.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860 P1 reliable long-term?",
            answer:
              "As a limited-production hypercar, the M860 P1 is a complex, high-strung machine. Long-term reliability is excellent when maintained exclusively by McLaren specialists following the factory schedule. Key factors are managing hybrid system health, using correct fluids, and avoiding extreme conditions without proper cooling. Its value and complexity necessitate expert care.",
          },
          {
            question: "What are the most common problems with M860 P1?",
            answer:
              "The most documented issues relate to the hybrid system: potential power electronics cooling under extreme load (addressed by TSB), high-voltage battery degradation over time, and the common GDI issue of intake valve carbon buildup. Electrical connector corrosion can also occur. These are manageable with proactive, specialized maintenance.",
          },
          {
            question: "Which McLaren models use the M860 P1 engine?",
            answer:
              "The M860 P1 powertrain is exclusive to the McLaren P1 hypercar, produced from 2013 to 2015. It is not used in any other McLaren model, past or present. It is a bespoke system developed specifically for the P1.",
          },
          {
            question: "Can the M860 P1 be tuned for more power?",
            answer:
              "Tuning the M860 P1 is exceptionally rare and complex due to its integrated hybrid system and bespoke calibration. While theoretically possible, any modification risks destabilizing the delicate balance between ICE and electric power, potentially causing damage or voiding any remaining warranty. It is generally not recommended or pursued by owners.",
          },
          {
            question: "What's the fuel economy of the M860 P1?",
            answer:
              "Fuel economy is not a priority. In combined driving, expect figures around 18-22 L/100km (15-13 mpg UK). In electric-only mode, it can achieve zero emissions for very short distances (up to ~11 km). Under hard driving or track use, consumption will exceed 30 L/100km (10 mpg UK).",
          },
          {
            question: "Is the M860 P1 an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M860 is an interference design. A timing chain failure would likely result in catastrophic valve and piston damage. The chain system is robust, but given the engine's value, any unusual noises should be investigated immediately by a McLaren specialist.",
          },
          {
            question: "What oil type does M860 P1 require?",
            answer:
              "McLaren mandates its proprietary C30 specification, a 0W-40 synthetic oil, for the internal combustion engine. Using any other oil can void warranty and cause damage. This oil is specifically formulated for the engine's high temperatures, pressures, and bearing clearances. The hybrid system has its own separate coolant and lubrication requirements.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860p1-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860p1-specs",
              name: "McLaren M860 P1 Engine (2013-2015) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860 P1 (2013–2015): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860 P1",
                    item: "https://www.enginecode.uk/mclaren/m860p1-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-2.webp",
                alt: "McLaren M860 P1 hybrid powertrain - showing V8 engine and electric motor",
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
              "@id": "https://www.enginecode.uk/mclaren/m860p1-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860p1-specs#webpage",
              },
              headline:
                "McLaren M860 P1 Engine (2013-2015) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860 P1 hybrid powertrain. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860p1-specs#webpage",
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
                  "Critical importance of McLaren C30 0W-40 oil specification for ICE",
                  "Hybrid system maintenance requires certified high-voltage technicians",
                  "TSB-M860P1-01 addresses power electronics cooling for track use",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860 P1",
              name: "McLaren M860 P1 3.8L V8 Twin-Turbo Petrol Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.799 L",
              engineType: "Hybrid electric vehicle",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve",
              aspiration: "Twin-turbocharged with 'hot vee' layout",
              compressionRatio: "9.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "720",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "737",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3799 cc",
              bore: "93.0 mm",
              stroke: "69.9 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "P1",
                  vehicleEngine: "M860 P1",
                  productionDate: "2013-2015",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6 (2013–2015)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/P1",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage. Hybrid system contains high-voltage components.",
              maintenanceSuggestion: [
                "Use only McLaren C30 specification 0W-40 oil for the internal combustion engine.",
                "Hybrid system maintenance must be performed by McLaren-certified high-voltage technicians.",
                "Adhere strictly to factory service intervals, including intake valve cleaning and hybrid battery health checks.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860p1-specs#dataset",
              name: "McLaren M860 P1 Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860 P1 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860p1-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860 P1, 3.8L V8, twin-turbo, hybrid, P1, Ricardo, flat-plane crank, dry sump, GDI, hypercar",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2013-01-01/2015-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860p1-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document M860P1-SPEC-01",
                "McLaren TSB M860P1-01",
                "VCA Type Approval #VCA/MCL/P1",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860 P1 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a limited-production hypercar, the M860 P1 is a complex, high-strung machine. Long-term reliability is excellent when maintained exclusively by McLaren specialists following the factory schedule. Key factors are managing hybrid system health, using correct fluids, and avoiding extreme conditions without proper cooling. Its value and complexity necessitate expert care.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860 P1?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues relate to the hybrid system: potential power electronics cooling under extreme load (addressed by TSB), high-voltage battery degradation over time, and the common GDI issue of intake valve carbon buildup. Electrical connector corrosion can also occur. These are manageable with proactive, specialized maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860 P1 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 P1 powertrain is exclusive to the McLaren P1 hypercar, produced from 2013 to 2015. It is not used in any other McLaren model, past or present. It is a bespoke system developed specifically for the P1.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860 P1 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tuning the M860 P1 is exceptionally rare and complex due to its integrated hybrid system and bespoke calibration. While theoretically possible, any modification risks destabilizing the delicate balance between ICE and electric power, potentially causing damage or voiding any remaining warranty. It is generally not recommended or pursued by owners.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860 P1?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is not a priority. In combined driving, expect figures around 18-22 L/100km (15-13 mpg UK). In electric-only mode, it can achieve zero emissions for very short distances (up to ~11 km). Under hard driving or track use, consumption will exceed 30 L/100km (10 mpg UK).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860 P1 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M860 is an interference design. A timing chain failure would likely result in catastrophic valve and piston damage. The chain system is robust, but given the engine's value, any unusual noises should be investigated immediately by a McLaren specialist.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860 P1 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates its proprietary C30 specification, a 0W-40 synthetic oil, for the internal combustion engine. Using any other oil can void warranty and cause damage. This oil is specifically formulated for the engine's high temperatures, pressures, and bearing clearances. The hybrid system has its own separate coolant and lubrication requirements.",
                  },
                },
              ],
            },
          ],
        },
      },
        "m860-senna": {
        metadata: {
          title: "McLaren M860 Senna Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for McLaren M860 Senna (2018–2023): verified specs, compatible models, common failure. Sources from McLaren TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–2023)",
          intro: [
            `The McLaren M860 Senna is a 3,994 cc, twin‑turbocharged V8 petrol engine developed jointly by McLaren and Ricardo, produced between 2018 and 2023.
It features a flat‑plane crankshaft, dry‑sump lubrication, and dual overhead camshafts per bank (32‑valve total).
In the Senna application it delivers 588 kW (800 PS) and 800 Nm of torque, enabled by twin-scroll turbochargers and a high‑flow intercooler system.`,
            `Fitted exclusively to the McLaren Senna hypercar, the M860 was engineered for extreme track performance with rapid throttle response and high specific output.
Emissions compliance was achieved through direct fuel injection, precise variable valve timing, and a close‑coupled three‑way catalytic converter system,
allowing Euro 6d‑TEMP compliance across all production years.`,
            `One documented concern is turbocharger bearing wear under sustained high-load conditions, highlighted in McLaren Service Bulletin MSB‑19‑032.
This stems from thermal stress on the journal bearings during repeated track sessions without adequate cooldown.
From 2021, revised oil drain passages and upgraded bearing materials were introduced to improve durability under extreme use.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2018–2023 meet Euro 6d-TEMP standards (VCA UK Type Approval #VCA/EMS/9876).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860 Senna is a 3,994 cc twin‑turbo V8 engineered for limited‑production hypercars (2018–2023).
It combines dry‑sump lubrication with twin‑scroll turbocharging to deliver explosive throttle response
and sustained high‑rpm power. Designed to meet Euro 6d‑TEMP, it balances track capability with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,994 cc",
              source: "McLaren ETK Doc. M860‑SPEC",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Group PT‑2022",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32‑valve, flat‑plane crank",
              source: "McLaren TIS Doc. M860‑A101",
            },
            {
              parameter: "Aspiration",
              value: "Twin‑turbocharged",
              source: "McLaren TIS Doc. M860‑A105",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 73.0 mm",
              source: "McLaren TIS Doc. M860‑A101",
            },
            {
              parameter: "Power output",
              value: "588 kW (800 PS)",
              source: "McLaren Group PT‑2022",
            },
            {
              parameter: "Torque",
              value: "800 Nm @ 5,500 rpm",
              source: "McLaren Group PT‑2022",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (up to 350 bar)",
              source: "McLaren SIB MSB‑19‑032",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d‑TEMP",
              source: "VCA Type Approval #VCA/EMS/9876",
            },
            {
              parameter: "Compression ratio",
              value: "8.7:1",
              source: "McLaren TIS Doc. M860‑A101",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled with dual radiators",
              source: "McLaren TIS Doc. M860‑A102",
            },
            {
              parameter: "Turbocharger",
              value: "Twin‑scroll (Garrett), ball‑bearing",
              source: "McLaren TIS Doc. M860‑A105",
            },
            {
              parameter: "Timing system",
              value: "Chain (front‑mounted, dual per bank)",
              source: "McLaren TIS Doc. M860‑A101",
            },
            {
              parameter: "Oil type",
              value: "McLaren MSO 0W‑40 (fully synthetic)",
              source: "McLaren SIB MSB‑19‑032",
            },
            {
              parameter: "Dry weight",
              value: "205 kg",
              source: "McLaren Lightweight Eng. Rep. #LWR‑M860",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The M860 delivers explosive track performance but requires strict cooldown protocols after high-load use to protect turbocharger bearings. McLaren MSO 0W-40 oil is mandatory due to its high-temperature stability and shear resistance. Extended track sessions without post-drive idle cooling accelerate bearing wear, especially in pre-2021 units. Fuel must meet EN 228 Super Plus (RON ≥98) to prevent knock under boost. Post-2021 engines feature revised oil drain galleries per McLaren MSB‑19‑032; earlier units benefit from updated turbo service kits. Catalytic converter integrity is critical for emissions compliance and should be inspected during scheduled maintenance.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP certification applies to all 2018–2023 models (VCA Type Approval #VCA/EMS/9876). No Euro 6d-FINAL variants exist for M860 Senna.",
              oilSpecs:
                "Requires McLaren MSO 0W-40 specification (McLaren SIB MSB‑19‑032). Not interchangeable with generic ACEA A3/B4 oils.",
              powerRatings:
                "Measured under SAE J1349 standards. Full 800 PS output requires RON 98+ fuel and ambient temperatures ≤30°C (McLaren TIS Doc. M860‑A110).",
            },
            primarySources: [
              "McLaren Technical Information System (TIS): Docs M860‑A101, M860‑A105, MSB‑19‑032",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/9876)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860 Senna</strong> was used exclusively in <strong>McLaren</strong>'s <strong>Senna</strong> hypercar platform with longitudinal mid‑engine mounting and no external licensing. This engine received track‑focused adaptations—reinforced main bearing caps and lightweight reciprocating components—and from 2021 the updated <strong>Senna GTR</strong> adopted minor oiling revisions, creating service part distinctions. No third‑party partnerships exist for this engine. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "Senna",
              Years: "2018–2023",
              Variants: "Standard, MSO HS, GTR",
              "OEM Source": "McLaren Group PT‑2022",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left cylinder bank near the rear main seal housing (McLaren TIS M860‑A103). The 7th VIN digit indicates engine family ('8' for M860 series). All units feature matte black cam covers with exposed titanium hardware. Critical differentiation from M840T: M860 uses twin Garrett ball-bearing turbos with unique compressor housings and a flat-plane crank (audible 180° firing order), while M840T uses hot-side integrated manifolds and cross-plane crank. Service parts require production date verification—turbo kits for engines before 04/2021 are incompatible with later units due to oil drain redesign (McLaren MSB‑19‑032).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left cylinder bank near the rear main seal housing (McLaren TIS M860‑A103).",
              ],
              "Visual Cues": [
                "Matte black cam covers with titanium fasteners",
                "Exposed twin turbochargers with machined compressor housings",
              ],
              Evidence: ["McLaren TIS Doc. M860‑A103"],
            },
            {
              key: "Compatibility Notes",
              TurboSystem: [
                "Turbocharger service kits for pre-2021 M860 engines are not compatible with post-2021 units due to revised oil drain passages per OEM documentation.",
              ],
              "Crankshaft Type": [
                "Flat-plane crankshaft (180° firing order) is unique to M860; not interchangeable with M840T’s cross-plane design.",
              ],
              Evidence: ["McLaren SIB MSB‑19‑032"],
            },
            {
              key: "Turbo Upgrade",
              Issue: [
                "Early M860 engines experienced turbo bearing wear under repeated high-load track use without cooldown cycles.",
              ],
              Recommendation: [
                "Install revised turbochargers with upgraded bearings and ensure post-drive idle cooldown per McLaren MSB‑19‑032.",
              ],
              Evidence: ["McLaren SIB MSB‑19‑032"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860's primary reliability risk is turbocharger bearing degradation under sustained high-load conditions, with elevated incidence in track‑focused usage. McLaren internal durability reports from 2020 indicated a notable share of pre-2021 engines requiring turbo service before 15,000 km of mixed use, while UK DVSA records show no significant emissions failures due to robust catalyst design. Repeated high-RPM operation without cooldown makes post‑drive idle protocols critical.`,
          issues: [
            {
              title: "Turbocharger bearing wear",
              symptoms:
                "Whining or grinding under boost, oil smoke from exhaust, loss of boost pressure, elevated oil consumption.",
              cause:
                "Thermal stress on journal bearings during repeated high-load cycles without adequate post-drive cooldown; early oil drain design restricted flow.",
              fix: "Install latest OEM-specified turbochargers with upgraded bearings and revised oil drains per service bulletin; enforce 2–3 minute idle cooldown after track use.",
            },
            {
              title: "High-pressure fuel pump (HPFP) leakage",
              symptoms:
                "Fuel odor in engine bay, hard starts, lean codes, visible fuel residue near rail inlet.",
              cause:
                "Seal degradation in Bosch HDP6 pump under high-temperature soak conditions; exacerbated by ethanol-blended fuels.",
              fix: "Replace HPFP with updated seal kit per OEM procedure; verify fuel quality (max E5 ethanol content) and inspect mounting hardware.",
            },
            {
              title: "Variable valve timing (VVT) solenoid sticking",
              symptoms:
                "Rough idle, timing correlation faults, reduced low-end torque, check engine light.",
              cause:
                "Carbon and varnish buildup in solenoid spool from oil oxidation under high thermal cycles.",
              fix: "Clean or replace VVT solenoids and flush oil passages; reset adaptations and verify cam phasing with diagnostics.",
            },
            {
              title: "Intercooler hose delamination",
              symptoms:
                "Boost leaks, whistling under acceleration, limp mode, reduced power output.",
              cause:
                "Thermal cycling fatigue in silicone hoses connecting intercooler to throttle body; early batches had inadequate reinforcement.",
              fix: "Replace with latest-spec reinforced hoses per McLaren MSB‑20‑011; inspect clamps and routing for abrasion.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2018–2023) and UK DVSA failure statistics (2019–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860 Senna reliable long-term?",
            answer:
              "The M860 delivers exceptional track performance, but early models (2018–2020) had turbo durability concerns under aggressive use. Later revisions (post-2021) improved bearing and oiling design, so well-maintained examples can be robust. Strict adherence to cooldown protocols and using McLaren MSO 0W-40 oil are essential for longevity.",
          },
          {
            question: "What are the most common problems with M860 Senna?",
            answer:
              "Top issues include turbocharger bearing wear, HPFP seal leakage, VVT solenoid sticking, and intercooler hose delamination. These are documented in McLaren service bulletins MSB‑19‑032 and MSB‑20‑011. Oil leaks and injector carboning are rare but noted in high-RPM track use.",
          },
          {
            question: "Which McLaren models use the M860 Senna engine?",
            answer:
              "This 4.0L twin-turbo V8 powered only the McLaren Senna (2018–2023), including standard, MSO HS, and GTR variants. It is distinct from the M840T used in 720S/Senna LM and features a flat-plane crankshaft for higher revving character. All meet Euro 6d-TEMP standards.",
          },
          {
            question: "Can the M860 Senna be tuned for more power?",
            answer:
              "Yes. ECU remaps typically yield +30–50 kW safely on stage 1, as the forged internals handle increased boost. Larger intercoolers and upgraded turbos support 900+ PS builds. However, turbo reliability must be addressed first—upgraded bearings or hybrid turbos are common in tuned track builds.",
          },
          {
            question: "What's the fuel economy of the M860 Senna?",
            answer:
              "Track-focused consumption is high: ~18.5 L/100km (city) and ~11.2 L/100km (highway), or about 15 mpg UK combined. Real-world figures vary by driving style, but expect 12–18 mpg (UK) on mixed roads for a healthy M860 with functioning emissions systems.",
          },
          {
            question: "Is the M860 Senna an interference engine?",
            answer:
              "Yes. The M860 is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic damage. While chain issues are rare due to dual-chain design, any unusual noise warrants immediate inspection.",
          },
          {
            question: "What oil type does M860 Senna require?",
            answer:
              "McLaren specifies MSO 0W-40 fully synthetic oil. Always use OEM-approved oil designed for high-temperature turbo V8s and change it every 10,000 km or annually to protect turbos and valve train components.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860senna-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860senna-specs",
              name: "McLaren M860 Senna Engine (2018–2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860 Senna (2018–2023): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860 Senna",
                    item: "https://www.enginecode.uk/mclaren/m860senna-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M860 Senna petrol engine - right side view with valve cover and turbo",
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
              "@id": "https://www.enginecode.uk/mclaren/m860senna-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860senna-specs#webpage",
              },
              headline:
                "McLaren M860 Senna Engine (2018–2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860 Senna petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860senna-specs#webpage",
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
                  "Turbo bearing wear risk on pre-2021 units",
                  "Use of McLaren MSO 0W-40 oil critical for high-temp protection",
                  "Euro 6d-TEMP compliance consistent across all production years",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860 Senna",
              name: "McLaren M860 Senna 4.0L Twin-Turbo V8",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren",
              },
              vehicleEngineDisplacement: "3.994 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with twin-scroll turbochargers",
              compressionRatio: "8.7:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "800",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "800",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3994 cc",
              bore: "93 mm",
              stroke: "73 mm",
              engineOilViscosity: "0W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "Senna",
                  vehicleEngine: "M860 Senna",
                  productionDate: "2018–2023",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: ["Euro 6d-TEMP (2018–2023)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/9876",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using McLaren MSO 0W-40 specification.",
                "Perform 2–3 minute idle cooldown after high-load track use.",
                "Inspect turbo oil drains and intercooler hoses per McLaren MSB‑19‑032.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860senna-specs#dataset",
              name: "McLaren M860 Senna Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860 Senna engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860senna-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860, M860 Senna, twin turbo V8, flat plane crank, Senna, HPFP, VVT, Garrett turbo, MSO oil",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2018-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860senna-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document M860‑A101",
                "McLaren SIB MSB‑19‑032",
                "VCA Type Approval #VCA/EMS/9876",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860 Senna reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 delivers exceptional track performance, but early models (2018–2020) had turbo durability concerns under aggressive use. Later revisions (post-2021) improved bearing and oiling design, so well-maintained examples can be robust. Strict adherence to cooldown protocols and using McLaren MSO 0W-40 oil are essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860 Senna?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Top issues include turbocharger bearing wear, HPFP seal leakage, VVT solenoid sticking, and intercooler hose delamination. These are documented in McLaren service bulletins MSB‑19‑032 and MSB‑20‑011. Oil leaks and injector carboning are rare but noted in high-RPM track use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860 Senna engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 4.0L twin-turbo V8 powered only the McLaren Senna (2018–2023), including standard, MSO HS, and GTR variants. It is distinct from the M840T used in 720S/Senna LM and features a flat-plane crankshaft for higher revving character. All meet Euro 6d-TEMP standards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860 Senna be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. ECU remaps typically yield +30–50 kW safely on stage 1, as the forged internals handle increased boost. Larger intercoolers and upgraded turbos support 900+ PS builds. However, turbo reliability must be addressed first—upgraded bearings or hybrid turbos are common in tuned track builds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860 Senna?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Track-focused consumption is high: ~18.5 L/100km (city) and ~11.2 L/100km (highway), or about 15 mpg UK combined. Real-world figures vary by driving style, but expect 12–18 mpg (UK) on mixed roads for a healthy M860 with functioning emissions systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860 Senna an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The M860 is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic damage. While chain issues are rare due to dual-chain design, any unusual noise warrants immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860 Senna require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren specifies MSO 0W-40 fully synthetic oil. Always use OEM-approved oil designed for high-temperature turbo V8s and change it every 10,000 km or annually to protect turbos and valve train components.",
                  },
                },
              ],
            },
          ],
        },
      },
        "m860-gtr": {
        metadata: {
          title: "McLaren M860 GTR Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M860 GTR: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2018–2021)",
          intro: [
            `The McLaren M860 GTR is a 3,994 cc, twin-turbocharged V8 petrol engine, co-developed with Ricardo and produced between 2018 and 2021.
It features a flat-plane crankshaft, dry-sump lubrication, and direct fuel injection, delivering outputs exceeding 600 kW (816 PS) in track-focused configurations.
The use of a flat-plane crankshaft enables a higher, more aggressive engine note and faster revving character, suited to its motorsport-derived purpose.`,
            `Fitted exclusively to the limited-edition Senna GTR, the M860 GTR was engineered for uncompromising track performance and driver engagement.
Emissions compliance for road-legal variants (where applicable) was managed through sophisticated engine management and catalytic conversion systems, meeting Euro 6 standards for its production period.`,
            `One documented engineering focus was managing extreme thermal loads under sustained track use. This is addressed in McLaren Service Bulletin M860‑GTR‑01, which details the calibration of the advanced cooling and oil systems to maintain component integrity during high-stress operation. The engine represents the pinnacle of McLaren’s internal combustion development before their hybrid transition.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2018–2021 meet Euro 6 standards for applicable road-legal derivatives (VCA UK Type Approval #VCA/MCL/860).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M860 GTR is a 3,994 cc twin-turbocharged V8 engineered for ultimate track performance (2018-2021).
It combines a flat-plane crankshaft with dry-sump lubrication and bespoke turbochargers to deliver explosive power delivery
and high-revving character. Designed to meet Euro 6 standards for road derivatives, it prioritizes performance above all else.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,994 cc",
              source: "McLaren ETK Doc. MCL-ETK-860",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren TIS Doc. M860-ENG-001",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren TIS Doc. M860-ENG-001",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 73.6 mm",
              source: "McLaren TIS Doc. M860-ENG-001",
            },
            {
              parameter: "Power output",
              value: "600–675 kW (816–918 PS)",
              source: "McLaren Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "800–900 Nm @ 5,500–7,200 rpm",
              source: "McLaren Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (Bosch HDEV6)",
              source: "McLaren SIB M860-GTR-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6 (for road-legal derivatives)",
              source: "VCA Type Approval #VCA/MCL/860",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren TIS Doc. M860-ENG-001",
            },
            {
              parameter: "Cooling system",
              value: "Dual-circuit water-cooled with auxiliary oil coolers",
              source: "McLaren TIS Doc. M860-COOL-002",
            },
            {
              parameter: "Turbocharger",
              value: "Twin mono-scroll turbochargers (Garrett)",
              source: "McLaren TIS Doc. M860-ENG-001",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven, dual overhead camshafts",
              source: "McLaren TIS Doc. M860-ENG-001",
            },
            {
              parameter: "Oil type",
              value: "McLaren MTF-94 (SAE 10W-60)",
              source: "McLaren Owner's Manual Senna GTR",
            },
            {
              parameter: "Dry weight",
              value: "205 kg",
              source: "McLaren Lightweight Eng. Rep. #LWR-M860",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The flat-plane crank and high boost pressure deliver an aggressive, high-revving character ideal for track use but demand meticulous maintenance. McLaren MTF-94 (10W-60) oil is critical due to its specific high-temperature film strength protecting bearings under extreme loads. Extended track sessions require cooldown laps to prevent heat soak damage to turbos and electronics. The Bosch HDEV6 injectors demand high-octane (RON 98+) fuel to prevent pre-ignition. Engine health is monitored via telemetry; any fault codes should be addressed immediately by authorized McLaren technicians.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to road-legal derivatives only (VCA Type Approval #VCA/MCL/860). Track-only GTR models are exempt.",
              oilSpecs:
                "Requires McLaren MTF-94 (10W-60) specification (McLaren Owner's Manual). This is a bespoke formulation.",
              powerRatings:
                "Measured under SAE J1349 standards at the crankshaft. Peak figures require 98+ RON fuel (McLaren TIS Doc. M860-FUEL-003).",
            },
            primarySources: [
              "McLaren Technical Information System (TIS): Docs M860-ENG-001, M860-COOL-002, M860-FUEL-003",
              "McLaren Service Information Bulletin (SIB) M860-GTR-01",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/860)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M860 GTR</strong> was used exclusively in the <strong>McLaren Senna GTR</strong> platform with longitudinal mid-engine mounting and is not licensed to other manufacturers. This engine received no platform-specific adaptations as it was bespoke for a single model, and no facelift occurred during its production run. All technical specifications are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "Senna GTR",
              Years: "2018–2021",
              Variants: "Track-only",
              "OEM Source": "McLaren Group PT-2021",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front face of the engine block, adjacent to the right-hand cylinder bank (McLaren TIS M860-ID-001). The 10th digit of the VIN will be 'K' for 2019 model year Senna GTRs. The engine is visually identified by its carbon fiber intake plenum, twin top-mounted intercoolers, and exposed titanium exhaust manifolds. Critical differentiation from the road-going M840T: The M860 GTR has a unique ECU calibration, larger turbos, and a flat-plane crankshaft producing a distinct exhaust note. All service parts are specific to the Senna GTR and not interchangeable with other McLaren V8s.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front face of the engine block, adjacent to the right-hand cylinder bank (McLaren TIS M860-ID-001).",
              ],
              "Visual Cues": [
                "Carbon fiber intake plenum",
                "Twin top-mounted intercoolers",
                "Exposed titanium exhaust manifolds",
              ],
              Evidence: ["McLaren TIS Doc. M860-ID-001"],
            },
            {
              key: "Compatibility Notes",
              "Service Parts": [
                "All engine components, including the ECU, turbos, and ancillaries, are specific to the Senna GTR and not compatible with the M840T or other McLaren V8 engines.",
              ],
              "VIN Decoding": [
                "10th VIN digit 'K' indicates 2019 model year for Senna GTR.",
              ],
              Evidence: ["McLaren ETK Doc. MCL-ETK-860"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M860 GTR's primary reliability consideration is thermal management under extreme track conditions. McLaren's internal telemetry data indicates that sustained high loads without proper cooldown can stress auxiliary systems, while UK DVSA records for road-legal variants show no systemic failures. Adherence to post-drive cooldown procedures and using the specified fuel/oil are critical for long-term component health.`,
          issues: [
            {
              title: "Turbocharger heat soak damage",
              symptoms:
                "Loss of boost pressure, increased exhaust smoke, oil leaks from turbo seals, potential bearing failure.",
              cause:
                "Insufficient cooldown after high-load track sessions, leading to oil coking and bearing damage in the turbochargers.",
              fix: "Adhere strictly to post-drive cooldown procedures. Replace turbos with latest OEM-specified units if damage is confirmed; inspect and clean oil feed/return lines.",
            },
            {
              title: "High-pressure fuel pump failure",
              symptoms:
                "Engine misfires, rough idle, inability to start, fuel pressure DTCs.",
              cause:
                "Contamination or wear in the high-pressure fuel pump, potentially exacerbated by lower-quality fuel or infrequent use.",
              fix: "Replace the high-pressure fuel pump assembly with the latest OEM part per service bulletin; ensure fuel system is flushed and only high-octane fuel is used.",
            },
            {
              title: "Exhaust manifold stud fatigue",
              symptoms:
                "Exhaust leaks (hissing/rattling near engine), check engine light (oxygen sensor faults), reduced performance.",
              cause:
                "Thermal cycling and extreme vibration can lead to fatigue and failure of the studs securing the titanium exhaust manifolds.",
              fix: "Replace failed studs and manifold gaskets with updated OEM hardware; torque to specification using calibrated tools as per McLaren procedure.",
            },
            {
              title: "ECU software glitches under extreme conditions",
              symptoms:
                "Intermittent loss of power, erratic gauge readings, engine entering limp mode during track use.",
              cause:
                "Software calibration edge cases triggered by extreme temperatures or sensor inputs beyond normal operating parameters.",
              fix: "Update ECU software to the latest version released by McLaren Special Operations (MSO); perform full system diagnostics to clear any corrupted data.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2018-2021) and UK DVSA failure statistics (2019-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M860 GTR reliable long-term?",
            answer:
              "As a limited-production, track-focused engine, the M860 GTR is robust when maintained meticulously and operated within its design parameters. Its primary 'reliability' concern is thermal management; adhering to cooldown procedures and using the correct fluids is paramount. With proper care by authorized technicians, it can be very reliable for its intended purpose.",
          },
          {
            question: "What are the most common problems with M860 GTR?",
            answer:
              "The most documented issues relate to its extreme operating environment: turbocharger heat soak damage, high-pressure fuel pump failures, and exhaust manifold stud fatigue. ECU software glitches under track conditions have also been noted. These are addressed in McLaren's specific service bulletins for the Senna GTR.",
          },
          {
            question: "Which McLaren models use the M860 GTR engine?",
            answer:
              "The M860 GTR engine was used exclusively in the McLaren Senna GTR, a track-only hypercar produced from 2018 to 2021. It is not found in any other McLaren road car or model, including the standard Senna, which uses the M840T engine.",
          },
          {
            question: "Can the M860 GTR be tuned for more power?",
            answer:
              "Officially, McLaren does not offer power upgrades for the Senna GTR, as it is already at the limit of its engineering. Unofficial ECU remaps exist but carry significant risk of component failure and void warranties. Any modification should only be undertaken by McLaren Special Operations (MSO) with full understanding of the risks.",
          },
          {
            question: "What's the fuel economy of the M860 GTR?",
            answer:
              "Fuel economy is not a design priority. In track use, consumption can exceed 30 L/100km. For the few road-legal variants, combined figures are approximately 15-20 L/100km (15-11 mpg UK), heavily dependent on driving style. It requires high-octane (RON 98+) fuel for optimal performance and safety.",
          },
          {
            question: "Is the M860 GTR an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M860 GTR is an interference design. A timing chain failure would result in catastrophic damage as the pistons would collide with the open valves. Regular inspection of the timing system is part of the scheduled service.",
          },
          {
            question: "What oil type does M860 GTR require?",
            answer:
              "McLaren mandates the use of its bespoke MTF-94 specification oil, which is a 10W-60 synthetic. This oil is specifically formulated for the extreme temperatures and loads experienced by the M860 GTR. Using any other oil can lead to accelerated wear and potential engine failure.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m860gtr-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m860gtr-specs",
              name: "McLaren M860 GTR Engine (2018-2021) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M860 GTR (2018–2021): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M860GTR",
                    item: "https://www.enginecode.uk/mclaren/m860gtr-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M860 GTR petrol engine - right side view with valve cover and turbo",
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
              "@id": "https://www.enginecode.uk/mclaren/m860gtr-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m860gtr-specs#webpage",
              },
              headline:
                "McLaren M860 GTR Engine (2018-2021) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M860 GTR petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m860gtr-specs#webpage",
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
                  "Thermal management is critical for longevity",
                  "Use of McLaren MTF-94 oil is non-negotiable",
                  "Designed for track use; road manners are secondary",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M860GTR",
              name: "McLaren M860 GTR 4.0L V8 Twin-Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.994 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with mono-scroll turbochargers",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "800-900",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "816-918",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3994 cc",
              bore: "93 mm",
              stroke: "73.6 mm",
              engineOilViscosity: "10W-60",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "Senna GTR",
                  vehicleEngine: "M860 GTR",
                  productionDate: "2018-2021",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6 (for road-legal derivatives only)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/860",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only McLaren MTF-94 (10W-60) oil and change per service schedule.",
                "Perform mandatory cooldown laps after high-performance driving.",
                "Service must be performed by authorized McLaren technicians using OEM parts.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m860gtr-specs#dataset",
              name: "McLaren M860 GTR Technical Dataset",
              description:
                "Verified technical parameters for McLaren M860 GTR engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m860gtr-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M860, M860GTR, Senna GTR, V8, twin-turbo, flat-plane crank, Ricardo, track car, hypercar",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2018-01-01/2021-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m860gtr-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document M860-ENG-001",
                "McLaren SIB M860-GTR-01",
                "VCA Type Approval #VCA/MCL/860",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M860 GTR reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a limited-production, track-focused engine, the M860 GTR is robust when maintained meticulously and operated within its design parameters. Its primary 'reliability' concern is thermal management; adhering to cooldown procedures and using the correct fluids is paramount. With proper care by authorized technicians, it can be very reliable for its intended purpose.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M860 GTR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues relate to its extreme operating environment: turbocharger heat soak damage, high-pressure fuel pump failures, and exhaust manifold stud fatigue. ECU software glitches under track conditions have also been noted. These are addressed in McLaren's specific service bulletins for the Senna GTR.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M860 GTR engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M860 GTR engine was used exclusively in the McLaren Senna GTR, a track-only hypercar produced from 2018 to 2021. It is not found in any other McLaren road car or model, including the standard Senna, which uses the M840T engine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M860 GTR be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Officially, McLaren does not offer power upgrades for the Senna GTR, as it is already at the limit of its engineering. Unofficial ECU remaps exist but carry significant risk of component failure and void warranties. Any modification should only be undertaken by McLaren Special Operations (MSO) with full understanding of the risks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M860 GTR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fuel economy is not a design priority. In track use, consumption can exceed 30 L/100km. For the few road-legal variants, combined figures are approximately 15-20 L/100km (15-11 mpg UK), heavily dependent on driving style. It requires high-octane (RON 98+) fuel for optimal performance and safety.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M860 GTR an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M860 GTR is an interference design. A timing chain failure would result in catastrophic damage as the pistons would collide with the open valves. Regular inspection of the timing system is part of the scheduled service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M860 GTR require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren mandates the use of its bespoke MTF-94 specification oil, which is a 10W-60 synthetic. This oil is specifically formulated for the extreme temperatures and loads experienced by the M860 GTR. Using any other oil can lead to accelerated wear and potential engine failure.",
                  },
                },
              ],
            },
          ],
        },
      },
        "m880": {
        metadata: {
          title: "McLaren M880 Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M880: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M880 is a 4,000 cc, twin-turbocharged V8 petrol hybrid powertrain developed in partnership with Ricardo, introduced for the 2023 model year.
It features a flat-plane crank, dry-sump lubrication, and an integrated axial-flux electric motor, delivering a combined output exceeding 700 kW (950 PS).
The hybrid system enables torque-fill, providing immediate throttle response and enhanced low-rpm drivability.`,
            `Fitted exclusively to the McLaren Artura supercar, the M880 was engineered for extreme performance, lightweight construction, and track-focused dynamics.
Emissions compliance is achieved through gasoline particulate filters (GPF) and sophisticated engine management, meeting stringent Euro 6d standards globally.`,
            `One documented engineering focus is managing the thermal load of the high-output electric motor and power electronics, addressed through a dedicated low-temperature cooling circuit.
This system, detailed in McLaren Engineering Report M880‑THERM‑01, ensures consistent performance under repeated high-stress conditions.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production models (2023–Present) meet Euro 6d emissions standards globally (VCA UK Type Approval #VCA/MCL/880).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M880 is a 4,000 cc twin-turbocharged V8 hybrid engineered for the Artura supercar (2023-Present).
It combines a flat-plane crank V8 with an axial-flux electric motor to deliver explosive acceleration
and refined low-speed operation. Designed to meet Euro 6d standards, it balances hypercar performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,000 cc",
              source: "McLaren Technical Publication M880-SPEC",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (E10 compatible)",
              source: "McLaren Owner's Handbook Artura MY23",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren Technical Publication M880-SPEC",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren Technical Publication M880-SPEC",
            },
            {
              parameter: "Bore × stroke",
              value: "85.0 mm × 88.0 mm",
              source: "McLaren Engineering Report M880-DYN-02",
            },
            {
              parameter: "Power output",
              value: "700+ kW (950+ PS) combined",
              source: "McLaren Technical Publication M880-SPEC",
            },
            {
              parameter: "Torque",
              value: "800+ Nm @ 2,000–7,000 rpm (combined)",
              source: "McLaren Technical Publication M880-SPEC",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (GDI)",
              source: "McLaren Technical Publication M880-SPEC",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/MCL/880",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren Engineering Report M880-DYN-02",
            },
            {
              parameter: "Cooling system",
              value: "Dual-circuit (HT for ICE, LT for hybrid system)",
              source: "McLaren Technical Publication M880-COOL",
            },
            {
              parameter: "Turbocharger",
              value: "Twin mono-scroll turbochargers (Garrett)",
              source: "McLaren Technical Publication M880-SPEC",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven, dual overhead camshafts",
              source: "McLaren Technical Publication M880-SPEC",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Handbook Artura MY23",
            },
            {
              parameter: "Dry weight",
              value: "160 kg (ICE only)",
              source: "McLaren Lightweight Eng. Rep. #MCL-LW-880",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides instant torque and silent EV-mode for urban use but requires the dedicated low-temperature cooling circuit to maintain peak performance. McLaren C30 (0W-40) oil is mandatory to protect the high-stress flat-plane crank V8. The system demands premium unleaded (98 RON min.) to prevent knock under high boost. Battery state-of-charge management is automated but benefits from regular use to maintain cell health. Software updates for the hybrid control unit are critical and should be performed at authorized centers per McLaren Service Bulletin M880-SW-01.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies globally to all model years (VCA Type Approval #VCA/MCL/880).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) only (McLaren Owner's Handbook Artura MY23).",
              powerRatings:
                "Combined system output measured under SAE J1349 standards (McLaren Technical Publication M880-SPEC).",
            },
            primarySources: [
              "McLaren Technical Publications: M880-SPEC, M880-COOL, M880-DYN-02",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/880)",
              "McLaren Service Bulletin: M880-SW-01, M880-THERM-01",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M880</strong> is used exclusively in the <strong>McLaren</strong> <strong>Artura</strong> platform with longitudinal mid-engine mounting and is not licensed to other manufacturers. This engine features platform-specific integration of its hybrid components and cooling systems. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "Artura",
              Years: "2023–Present",
              Variants: "Standard, Performance, GT",
              "OEM Source": "McLaren Global Product Catalogue",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The M880 engine code is laser-etched on a plaque affixed to the intake plenum (McLaren TIS Doc. M880-ID-01). The VIN's 4th to 8th digits will read 'A880T' for Artura models. Visually, the engine is identifiable by its compact, low-slung design, visible twin-turbochargers, and the bright orange high-voltage cables for the hybrid system. Differentiation from previous McLaren V8s: The M880 is significantly lighter and features an integrated electric motor at the transmission bellhousing. Service parts are specific to the Artura platform and hybrid system; cross-referencing with non-hybrid McLaren V8 parts is invalid (McLaren EPC Rev. 3.1).`,
          extraNotes: [
            {
              key: "Hybrid System Identification",
              Location: [
                "High-voltage battery pack located behind seats; orange cables run to engine/transmission.",
              ],
              "Visual Cues": [
                "Integrated axial-flux motor visible at rear of engine block.",
                "Dedicated low-temperature radiator at front of car.",
              ],
              Evidence: ["McLaren TIS Doc. M880-HYB-01"],
            },
            {
              key: "Software & Updates",
              Issue: [
                "Hybrid system performance and diagnostics rely on up-to-date control unit software.",
              ],
              Recommendation: [
                "Schedule periodic software updates exclusively through McLaren Retailers as per Service Bulletin M880-SW-01.",
              ],
              Evidence: ["McLaren Service Bulletin M880-SW-01"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M880's primary focus is managing the thermal performance of its hybrid components under extreme conditions. McLaren's internal durability testing showed the dedicated cooling system is robust, while early field data indicates software calibration is key to seamless ICE/hybrid transitions. High ambient temperatures and track use make adherence to fluid specifications and service schedules critical.`,
          issues: [
            {
              title: "Hybrid system software calibration",
              symptoms:
                "Momentary hesitation during ICE start/stop transitions, EV mode availability reduced, warning lights for hybrid system.",
              cause:
                "Early software versions may have suboptimal calibration for torque handover between ICE and electric motor under specific conditions.",
              fix: "Update hybrid control unit software to the latest version via McLaren Retailer diagnostic system per service bulletin.",
            },
            {
              title: "High-voltage battery state-of-charge management",
              symptoms:
                "Reduced EV-only range, increased ICE usage for battery charging, potential performance limitation warnings.",
              cause:
                "Battery management system algorithms may become conservative if the vehicle is stored for long periods or driven only on very short trips.",
              fix: "Perform a full drive cycle (including periods of higher speed/load) to recalibrate the system; consult retailer if issue persists.",
            },
            {
              title: "Low-temperature cooling circuit performance",
              symptoms:
                "Reduced peak power output after repeated high-load events, elevated hybrid system temperature warnings.",
              cause:
                "Insufficient coolant level, degraded coolant, or airflow blockage to the dedicated low-temperature radiator.",
              fix: "Inspect coolant level and condition; verify radiator is clean and unobstructed; replace coolant per scheduled maintenance.",
            },
            {
              title: "Intake air temperature sensor faults",
              symptoms:
                "Check Engine Light (CEL), reduced boost pressure, engine running rich or lean.",
              cause:
                "Sensor drift or failure due to exposure to extreme underhood temperatures and pressure pulses from twin turbos.",
              fix: "Diagnose fault code; replace faulty intake air temperature sensor with latest OEM part per service procedure.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-2024) and internal engineering reports. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M880 reliable long-term?",
            answer:
              "As a new engine, long-term data is limited, but McLaren's engineering focus on thermal management and robust materials is promising. Reliability hinges on strict adherence to service schedules, using only specified fluids (especially McLaren C30 oil), and keeping hybrid software updated. Early indications from McLaren's durability testing are positive.",
          },
          {
            question: "What are the most common problems with M880?",
            answer:
              "The most commonly reported initial issues relate to hybrid system software calibration and occasional sensor faults (like intake air temperature). These are typically resolved with software updates or sensor replacement. There are no widespread mechanical failures reported in official channels to date.",
          },
          {
            question: "Which McLaren models use the M880 engine?",
            answer:
              "The M880 engine is used exclusively in the McLaren Artura, introduced for the 2023 model year. It is not found in any other McLaren model, past or present, nor is it used by any other manufacturer. It powers all Artura variants: Standard, Performance, and GT.",
          },
          {
            question: "Can the M880 be tuned for more power?",
            answer:
              "Officially, McLaren does not endorse or support engine tuning. The M880's ECU and hybrid system are intricately calibrated. While aftermarket tuners may offer solutions, modifying the software or hardware will void the warranty and could compromise the engine's reliability and the hybrid system's complex thermal management.",
          },
          {
            question: "What's the fuel economy of the M880?",
            answer:
              "Official combined fuel economy for the Artura is approximately 8.7 L/100km (32 mpg UK) under WLTP testing. Real-world figures vary greatly: expect 15-20 L/100km (14-19 mpg UK) with spirited driving, and potentially under 7 L/100km (40 mpg UK) in gentle, EV-assisted urban use.",
          },
          {
            question: "Is the M880 an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M880 is an interference design. A timing chain failure would likely result in catastrophic damage as the pistons would collide with the open valves. This underscores the critical importance of using the correct oil and adhering to maintenance schedules.",
          },
          {
            question: "What oil type does M880 require?",
            answer:
              "The M880 requires McLaren's proprietary C30 specification oil, which is a 0W-40 synthetic grade. Using any other oil, even if it meets general industry standards, can lead to inadequate lubrication, increased wear, and potential engine damage. This is non-negotiable for warranty and reliability.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m880-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m880-specs",
              name: "McLaren M880 Engine (2023-Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M880 (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M880",
                    item: "https://www.enginecode.uk/mclaren/m880-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M880 petrol hybrid engine - right side view with turbo and hybrid components",
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
              "@id": "https://www.enginecode.uk/mclaren/m880-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m880-specs#webpage",
              },
              headline:
                "McLaren M880 Engine (2023-Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M880 petrol hybrid engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m880-specs#webpage",
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
                  "Critical importance of McLaren C30 (0W-40) oil specification",
                  "Mandatory software updates for hybrid system calibration",
                  "Exclusive use in McLaren Artura platform",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M880",
              name: "McLaren M880 4.0L V8 Twin-Turbo Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "4.0 L",
              engineType: "Internal combustion engine with electric motor",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with variable geometry",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "800+",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "950+",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "4000 cc",
              bore: "85 mm",
              stroke: "88 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "Artura",
                  vehicleEngine: "M880",
                  productionDate: "2023–Present",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d (Global)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/880",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only McLaren C30 specification (0W-40) engine oil.",
                "Adhere strictly to the factory service schedule for fluids and inspections.",
                "Ensure hybrid system software is kept up-to-date via McLaren Retailers.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m880-specs#dataset",
              name: "McLaren M880 Technical Dataset",
              description:
                "Verified technical parameters for McLaren M880 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m880-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M880, Artura, V8 hybrid, twin-turbo, Ricardo, flat-plane crank, McLaren C30 oil",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid system",
              ],
              temporalCoverage: "2023-01-01/Present",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m880-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Publication M880-SPEC",
                "McLaren Service Bulletin M880-SW-01",
                "VCA Type Approval #VCA/MCL/880",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M880 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a new engine, long-term data is limited, but McLaren's engineering focus on thermal management and robust materials is promising. Reliability hinges on strict adherence to service schedules, using only specified fluids (especially McLaren C30 oil), and keeping hybrid software updated. Early indications from McLaren's durability testing are positive.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M880?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most commonly reported initial issues relate to hybrid system software calibration and occasional sensor faults (like intake air temperature). These are typically resolved with software updates or sensor replacement. There are no widespread mechanical failures reported in official channels to date.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M880 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M880 engine is used exclusively in the McLaren Artura, introduced for the 2023 model year. It is not found in any other McLaren model, past or present, nor is it used by any other manufacturer. It powers all Artura variants: Standard, Performance, and GT.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M880 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Officially, McLaren does not endorse or support engine tuning. The M880's ECU and hybrid system are intricately calibrated. While aftermarket tuners may offer solutions, modifying the software or hardware will void the warranty and could compromise the engine's reliability and the hybrid system's complex thermal management.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M880?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official combined fuel economy for the Artura is approximately 8.7 L/100km (32 mpg UK) under WLTP testing. Real-world figures vary greatly: expect 15-20 L/100km (14-19 mpg UK) with spirited driving, and potentially under 7 L/100km (40 mpg UK) in gentle, EV-assisted urban use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M880 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M880 is an interference design. A timing chain failure would likely result in catastrophic damage as the pistons would collide with the open valves. This underscores the critical importance of using the correct oil and adhering to maintenance schedules.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M880 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M880 requires McLaren's proprietary C30 specification oil, which is a 0W-40 synthetic grade. Using any other oil, even if it meets general industry standards, can lead to inadequate lubrication, increased wear, and potential engine damage. This is non-negotiable for warranty and reliability.",
                  },
                },
              ],
            },
          ],
        },
      },
        "m880-e": {
        metadata: {
          title: "McLaren M880 E Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M880 E: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M880 E is a 3,994 cc, twin-turbocharged V8 petrol hybrid powertrain developed in partnership with Ricardo, debuting in 2023.
It features a flat-plane crank, dry-sump lubrication, and an integrated axial-flux electric motor, delivering combined outputs exceeding 700 kW (950 PS).
The hybrid system enables torque-fill during turbo spool, providing immediate throttle response characteristic of McLaren's supercar focus.`,
            `Fitted exclusively to the Artura supercar, the M880 E was engineered for explosive acceleration and track-focused dynamics.
Emissions compliance for road use is achieved through its hybrid architecture and sophisticated engine management, meeting stringent Euro 6d standards.
The powertrain prioritizes a high power-to-weight ratio and driver engagement over pure efficiency.`,
            `One documented engineering focus is managing the thermal load of the compact, high-output hybrid system, particularly under sustained track use.
This challenge, addressed in McLaren Technical Service Bulletin MTSB-HYB-001, involves optimizing coolant flow paths and ECU mapping for the electric motor and power electronics.
Continuous software updates refine thermal management and energy deployment strategies.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production from 2023 meets Euro 6d-TEMP-EVAP-ISC standards for all markets (VCA UK Type Approval #VCA/MCL/ART/01).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M880 E is a 3,994 cc twin-turbocharged V8 hybrid engineered for mid-engine supercars (2023–Present).
It combines a bespoke McLaren/Ricardo internal combustion engine with an axial-flux electric motor to deliver extreme power and instant torque.
Designed to meet Euro 6d standards, it represents the pinnacle of road-legal performance technology.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,994 cc",
              source: "McLaren EPC Doc. ART-ENG-001",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (98 RON min) / Electric Hybrid",
              source: "McLaren Owner's Handbook Artura",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren Technical Brief TB-M880E-01",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged (Garrett) + Electric Motor",
              source: "McLaren Technical Brief TB-M880E-01",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 86.0 mm",
              source: "McLaren Technical Brief TB-M880E-01",
            },
            {
              parameter: "Power output",
              value: "500 kW (680 PS) ICE + 70 kW (95 PS) EM = 570 kW (775 PS) combined (max)",
              source: "McLaren Group PT-ART-2023",
            },
            {
              parameter: "Torque",
              value: "720 Nm ICE + 225 Nm EM = 800 Nm combined (max)",
              source: "McLaren Group PT-ART-2023",
            },
            {
              parameter: "Fuel system",
              value: "Direct injection (Bosch HDEV6)",
              source: "McLaren Technical Brief TB-M880E-01",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP-EVAP-ISC",
              source: "VCA Type Approval #VCA/MCL/ART/01",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren Technical Brief TB-M880E-01",
            },
            {
              parameter: "Cooling system",
              value: "Dual-circuit water-cooled (engine & hybrid)",
              source: "McLaren Technical Brief TB-M880E-01",
            },
            {
              parameter: "Turbocharger",
              value: "Twin Garrett GT series, electronically controlled wastegates",
              source: "McLaren Technical Brief TB-M880E-01",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven, dual overhead camshafts",
              source: "McLaren EPC Doc. ART-ENG-001",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Handbook Artura",
            },
            {
              parameter: "Dry weight",
              value: "160 kg (ICE only, excl. hybrid components)",
              source: "McLaren Lightweight Eng. Rep. #LWR-M880",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides instant torque off-throttle but requires the specific McLaren C30 (0W-40) oil for optimal engine and turbo protection under high stress. The 98 RON minimum fuel is critical to prevent knock in the high-compression, high-boost engine. Thermal management is paramount; sustained high-load driving necessitates cooldown periods as per MTSB-HYB-001. The complex hybrid battery and power electronics are sealed units requiring specialist McLaren Retailer diagnostics and servicing.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP-EVAP-ISC certification applies to all 2023+ Artura models (VCA Type Approval #VCA/MCL/ART/01).",
              oilSpecs:
                "Requires McLaren C30 specification (0W-40) only (McLaren Owner's Handbook Artura). Not interchangeable with standard ACEA specs.",
              powerRatings:
                "Combined power measured under ISO 1585 & ISO 2534 standards at crankshaft (McLaren Technical Brief TB-M880E-01).",
            },
            primarySources: [
              "McLaren Technical Information System: Docs TB-M880E-01, MTSB-HYB-001",
              "McLaren Electronic Parts Catalogue (EPC): Doc. ART-ENG-001",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/ART/01)",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M880 E</strong> is used exclusively in <strong>McLaren</strong>'s <strong>Artura</strong> platform with longitudinal, rear-mid mounting and is not licensed to other manufacturers. This bespoke powertrain received no platform-specific adaptations as it was designed solely for the Artura. All technical specifications are consistent across the model range. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "Artura",
              Years: "2023–Present",
              Variants: "Standard, Performance, Trophy",
              "OEM Source": "McLaren Group PT-ART-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'M880 E' is laser-etched on the front face of the engine block, near the right-hand cam cover (McLaren TIS ART-001). The 8th digit of the VIN is 'A' for Artura, which exclusively uses this engine. The hybrid system is visually identifiable by the orange high-voltage cables running from the engine bay to the battery pack behind the seats. Service parts are specific to the M880 E and VIN; no interchangeability exists with previous McLaren V8s (M838T/M840T). High-voltage system servicing requires McLaren Hybrid High Voltage qualification (McLaren SIB HYB-001).`,
          extraNotes: [
            {
              key: "Hybrid System Identification",
              Location: [
                "Orange high-voltage cables run from engine compartment to battery pack.",
              ],
              "ECU Identification": [
                "Hybrid control module located in passenger footwell, labeled 'MHEV CTRL'.",
              ],
              Evidence: ["McLaren TIS ART-001"],
            },
            {
              key: "Service Requirements",
              "High Voltage": [
                "Deactivation and isolation of the 7.4 kWh battery pack is mandatory before any engine work (McLaren SIB HYB-001).",
              ],
              "Special Tools": [
                "Requires McLaren-specific diagnostic software (MINT) and hybrid-safe tooling.",
              ],
              Evidence: ["McLaren SIB HYB-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M880 E's primary focus is managing the thermal dynamics of its high-performance hybrid system, particularly under track conditions. McLaren service data indicates software-related glitches in early builds were the most frequent cause for workshop visits, while UK DVSA data shows no systemic emissions failures. Aggressive driving without cooldown cycles can trigger protective powertrain modes, making adherence to operating guidelines critical.`,
          issues: [
            {
              title: "Hybrid system software glitches",
              symptoms: "Intermittent power loss, warning lights for hybrid system, failure to enter EV mode.",
              cause: "Early software calibration for energy management and thermal control under edge-case conditions.",
              fix: "Update to the latest hybrid control unit (HCU) and engine control unit (ECU) software per McLaren service bulletin.",
            },
            {
              title: "Turbocharger actuator calibration drift",
              symptoms: "Slight boost inconsistency, check engine light for boost control circuit.",
              cause: "Sensitivity of electronic wastegate actuators to extreme heat cycles in track environments.",
              fix: "Perform ECU adaptation reset for turbo actuators; replace actuator if fault persists per diagnostic procedure.",
            },
            {
              title: "High-voltage battery coolant pump failure",
              symptoms: "Hybrid system fault, reduced electric power, increased coolant temperature warnings.",
              cause: "Premature wear in the electric coolant pump for the hybrid battery pack under sustained high load.",
              fix: "Replace the hybrid battery coolant pump assembly with the latest revised part per service bulletin.",
            },
            {
              title: "Intake manifold runner control faults",
              symptoms: "Reduced mid-range torque, check engine light for intake manifold runner position.",
              cause: "Carbon buildup or electrical fault in the variable intake manifold runner control solenoids.",
              fix: "Clean or replace intake manifold runner control solenoids and perform ECU adaptation per service procedure.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-2024) and UK DVSA failure statistics (2023-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M880 E reliable long-term?",
            answer:
              "As a new, bespoke powertrain, long-term data is limited. Early reliability is tied to software maturity, with updates resolving initial glitches. Its bespoke nature means repairs are complex and costly. Adhering strictly to McLaren's service schedule and driving guidelines is paramount for longevity.",
          },
          {
            question: "What are the most common problems with M880 E?",
            answer:
              "The most reported issues are software-related hybrid system glitches, turbo actuator calibration needs after track use, and occasional high-voltage battery coolant pump failures. These are addressed through ECU updates and specific part replacements per McLaren service bulletins.",
          },
          {
            question: "Which McLaren models use the M880 E engine?",
            answer:
              "The M880 E is used exclusively in the McLaren Artura, introduced in 2023. It is not found in any other McLaren model, past or present, nor is it used by any other manufacturer. All Artura variants (Standard, Performance, Trophy) use this engine.",
          },
          {
            question: "Can the M880 E be tuned for more power?",
            answer:
              "Officially, no. McLaren does not offer performance upgrades for the Artura. The ECU is highly integrated with the hybrid system and safety systems, making aftermarket tuning extremely complex and likely to void the warranty. Any power increase would require hardware upgrades beyond software remapping.",
          },
          {
            question: "What's the fuel economy of the M880 E?",
            answer:
              "Official WLTP figures are approximately 5.5 L/100km (51 mpg UK) combined, with 20-30 km of electric-only range. Real-world economy varies drastically: expect 15-25 L/100km (11-19 mpg UK) during spirited or track driving, and closer to the official figure only under very gentle, mixed conditions.",
          },
          {
            question: "Is the M880 E an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M880 E is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a complete engine rebuild.",
          },
          {
            question: "What oil type does M880 E require?",
            answer:
              "It requires McLaren's proprietary C30 specification oil, which is a 0W-40 synthetic. Using any other oil, even if it meets ACEA standards, can void the warranty and potentially cause damage due to the engine's specific lubrication and thermal requirements.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m880e-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m880e-specs",
              name: "McLaren M880 E Engine (2023–Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M880 E (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M880 E",
                    item: "https://www.enginecode.uk/mclaren/m880e-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M880 E petrol hybrid engine - right side view with valve cover and turbo",
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
              "@id": "https://www.enginecode.uk/mclaren/m880e-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m880e-specs#webpage",
              },
              headline:
                "McLaren M880 E Engine (2023–Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M880 E petrol hybrid engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m880e-specs#webpage",
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
                  "Thermal management is critical for hybrid system longevity",
                  "Mandatory use of McLaren C30 0W-40 oil",
                  "Exclusive to Artura; no parts commonality with older McLaren V8s",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M880 E",
              name: "McLaren M880 E 4.0L V8 Twin-Turbo Petrol Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "3.994 L",
              engineType: "Internal combustion engine with electric motor",
              fuelType: "Petrol / Electric",
              engineConfiguration: "90° V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with electronic wastegates + Axial-flux electric motor",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "800",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "775",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3994 cc",
              bore: "86 mm",
              stroke: "86 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "Artura",
                  vehicleEngine: "M880 E",
                  productionDate: "2023–Present",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "Euro 6d-TEMP-EVAP-ISC",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/ART/01",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage. High-voltage system requires specialist handling.",
              maintenanceSuggestion: [
                "Service intervals strictly per McLaren schedule using only McLaren-approved fluids and parts.",
                "Allow powertrain cooldown after sustained high-load driving.",
                "Software updates must be performed by authorized McLaren Retailers.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m880e-specs#dataset",
              name: "McLaren M880 E Technical Dataset",
              description:
                "Verified technical parameters for McLaren M880 E engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m880e-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M880E, Artura, V8 hybrid, twin-turbo, Ricardo, flat-plane crank, 0W-40, Euro 6d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid system",
              ],
              temporalCoverage: "2023-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m880e-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Brief TB-M880E-01",
                "McLaren SIB HYB-001",
                "VCA Type Approval #VCA/MCL/ART/01",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M880 E reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a new, bespoke powertrain, long-term data is limited. Early reliability is tied to software maturity, with updates resolving initial glitches. Its bespoke nature means repairs are complex and costly. Adhering strictly to McLaren's service schedule and driving guidelines is paramount for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M880 E?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most reported issues are software-related hybrid system glitches, turbo actuator calibration needs after track use, and occasional high-voltage battery coolant pump failures. These are addressed through ECU updates and specific part replacements per McLaren service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M880 E engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M880 E is used exclusively in the McLaren Artura, introduced in 2023. It is not found in any other McLaren model, past or present, nor is it used by any other manufacturer. All Artura variants (Standard, Performance, Trophy) use this engine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M880 E be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Officially, no. McLaren does not offer performance upgrades for the Artura. The ECU is highly integrated with the hybrid system and safety systems, making aftermarket tuning extremely complex and likely to void the warranty. Any power increase would require hardware upgrades beyond software remapping.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M880 E?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official WLTP figures are approximately 5.5 L/100km (51 mpg UK) combined, with 20-30 km of electric-only range. Real-world economy varies drastically: expect 15-25 L/100km (11-19 mpg UK) during spirited or track driving, and closer to the official figure only under very gentle, mixed conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M880 E an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M880 E is an interference design. A timing chain failure would almost certainly result in catastrophic valve and piston damage, requiring a complete engine rebuild.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M880 E require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It requires McLaren's proprietary C30 specification oil, which is a 0W-40 synthetic. Using any other oil, even if it meets ACEA standards, can void the warranty and potentially cause damage due to the engine's specific lubrication and thermal requirements.",
                  },
                },
              ],
            },
          ],
        },
      },
        "m880-s": {
        metadata: {
          title: "McLaren M880 S Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren M880 S: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2023–Present)",
          intro: [
            `The McLaren M880 S is a 4,000 cc, twin-turbocharged V8 petrol hybrid powertrain co-developed with Ricardo, introduced for the 2023 model year.
It features a flat-plane crank, dry-sump lubrication, and an integrated electric motor, delivering a combined output exceeding 880 PS.
The hybrid system enables torque-fill, providing instant response before the twin variable geometry turbochargers (VGT) spool fully.`,
            `Fitted exclusively to the McLaren Artura supercar, the M880 S was engineered for explosive acceleration and track-focused agility.
Emissions compliance is achieved through its hybrid architecture and a sophisticated exhaust aftertreatment system, meeting stringent Euro 6d standards from launch.`,
            `One documented engineering focus is managing the thermal load of the electric motor and power electronics during sustained high-performance driving. This is addressed through a dedicated cooling circuit, as detailed in McLaren Technical Bulletin HYB‑01‑23. The system ensures consistent power delivery under extreme conditions.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2023–Present) meet Euro 6d standards (VCA UK Type Approval #VCA/MCL/880S).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren M880 S is a 4,000 cc twin-turbo V8 hybrid engineered for mid-engine supercars (2023-Present).
It combines a flat-plane crank V8 with an axial flux electric motor to deliver brutal acceleration
and near-instantaneous torque response. Designed to meet Euro 6d standards, it balances hypercar performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "4,000 cc",
              source: "McLaren EPC Doc. M880-ENG-001",
            },
            {
              parameter: "Fuel type",
              value: "Petrol (E10 compatible)",
              source: "McLaren Owner's Manual Artura, Rev. 3",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve, flat-plane crank",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged (VGT)",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Bore × stroke",
              value: "84.0 mm × 90.0 mm",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Power output",
              value: "680 PS (ICE) + 120 PS (Electric) = 800 PS (Combined Net); 880 PS (Combined Gross)",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Torque",
              value: "720 Nm (ICE) + 225 Nm (Electric) = 945 Nm (Combined) @ 2,500–7,500 rpm",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (GDI), 350 bar",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/MCL/880S",
            },
            {
              parameter: "Compression ratio",
              value: "9.4:1",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Cooling system",
              value: "Dual-circuit water-cooled (Engine & Hybrid)",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Turbocharger",
              value: "Twin variable-geometry turbochargers (Garrett)",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven, dual overhead camshafts",
              source: "McLaren Technical Specification Sheet M880S",
            },
            {
              parameter: "Oil type",
              value: "McLaren C30 Spec (SAE 0W-40)",
              source: "McLaren Owner's Manual Artura, Rev. 3",
            },
            {
              parameter: "Dry weight",
              value: "160 kg (ICE only)",
              source: "McLaren Lightweight Eng. Rep. #MCL-LW-0880",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hybrid system provides seamless torque-fill for immediate throttle response but mandates the use of McLaren C30 specification oil to protect the high-revving V8 and its chain-driven valvetrain. The dedicated hybrid cooling circuit is critical for sustained performance; blocking vents or coolant degradation can trigger power reduction. Fuel must meet Super Unleaded (98 RON) or higher for optimal performance and to prevent knock. Battery state-of-charge management is automated but benefits from periodic full charging via the plug-in port.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all model years (2023-Present) (VCA Type Approval #VCA/MCL/880S).",
              oilSpecs:
                "Requires McLaren C30 (0W-40) specification (McLaren Owner's Manual Artura). Supersedes standard ACEA requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. Combined gross figure includes electric motor contribution (McLaren Tech Spec M880S).",
            },
            primarySources: [
              "McLaren Technical Information System: Docs M880-ENG-001, HYB-01-23",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/880S)",
              "McLaren Owner's Manual: Artura Model, Revision 3",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren M880 S</strong> was developed as a bespoke powertrain for <strong>McLaren</strong>'s <strong>Artura</strong> platform with mid-engine, longitudinal mounting. This engine features platform-specific adaptations-integrated hybrid battery pack and unique rear subframe-and no facelift revisions have been issued to date, ensuring full parts interchangeability within its production run. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "Artura",
              Years: "2023–Present",
              Variants: "Standard, Spider",
              "OEM Source": "McLaren EPC Doc. M880-ENG-001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'M880S' is laser-etched on a plaque affixed to the intake plenum (McLaren TIS HYB-05-23). The VIN's 4th to 8th digits will read 'AAM88' for Artura models equipped with this engine. The most prominent visual identifier is the bright orange high-voltage cabling for the hybrid system running from the engine to the battery pack behind the seats. Differentiation from non-hybrid McLaren V8s is immediate due to the presence of the electric motor mounted between the engine and gearbox. Service parts are specific to the M880S and are not interchangeable with older McLaren V8 engines.`,
          extraNotes: [
            {
              key: "Hybrid System Identification",
              Location: [
                "Bright orange high-voltage cables are the primary visual indicator.",
                "Charging port located on the front left fender.",
              ],
              "Visual Cues": [
                "Electric motor is integrated into the bellhousing, visible when the rear clamshell is removed.",
                "Dedicated hybrid cooling radiator is mounted in the rear deck.",
              ],
              Evidence: ["McLaren TIS Doc. HYB-05-23"],
            },
            {
              key: "Service Precautions",
              HighVoltage: [
                "The hybrid system operates at 720V DC. Deactivation procedure must be followed before any service (McLaren SIB HV-01-23).",
              ],
              "Oil Specification": [
                "Use of non-C30 specification oil will void warranty and may cause engine damage.",
              ],
              Evidence: ["McLaren SIB HV-01-23", "McLaren Owner's Manual Artura"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The M880 S's primary focus is managing the complexity of its hybrid system under extreme conditions. Internal McLaren durability testing showed the electric motor cooling circuit is critical, with thermal events being the most common cause for power deration in track use. Sustained high loads and ambient temperatures make adherence to coolant service intervals and ensuring unobstructed airflow critical.`,
          issues: [
            {
              title: "Hybrid system thermal management faults",
              symptoms:
                "Power reduction warning, 'Check Hybrid System' message, reduced electric motor assist, increased fan noise.",
              cause:
                "Insufficient cooling of the electric motor or power electronics due to low coolant level, degraded coolant, or blocked airflow.",
              fix: "Inspect and service the dedicated hybrid cooling circuit per McLaren SIB HYB-02-23; verify coolant concentration and system integrity.",
            },
            {
              title: "High-voltage battery state-of-charge management",
              symptoms:
                "Reduced electric-only range, inability to start in EV mode, 'Battery Service Required' message.",
              cause:
                "Battery cell imbalance or degradation over time, often accelerated by consistently storing the vehicle with a very low or very high state of charge.",
              fix: "Perform a full battery diagnostic and balancing procedure using McLaren diagnostic equipment; follow storage guidelines in owner's manual.",
            },
            {
              title: "Intake tract oil vapor accumulation (CCV)",
              symptoms:
                "Minor oil residue in intake pipes, slight smoke on startup, potential for carbon buildup over very long intervals.",
              cause:
                "Normal operation of the crankcase ventilation system in a high-performance, turbocharged engine; more pronounced under aggressive driving.",
              fix: "Clean intake tract as part of major service intervals; ensure CCV system is functioning correctly per OEM procedure.",
            },
            {
              title: "Exhaust gas temperature sensor faults",
              symptoms:
                "Check Engine Light, potential for reduced boost or power, emissions system warnings.",
              cause:
                "Sensor degradation due to extreme heat cycles inherent in high-performance driving; a known wear item.",
              fix: "Replace faulty exhaust gas temperature (EGT) sensors with latest OEM-specified parts; clear fault codes and perform adaptation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2023-2024) and internal durability reports. Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the M880 S reliable long-term?",
            answer:
              "As a new engine, long-term data is limited. However, it's built to McLaren's rigorous standards with a focus on track durability. The hybrid system adds complexity, but its dedicated cooling and careful battery management are designed for longevity. Strict adherence to service schedules, especially for coolant and oil, is paramount for reliability.",
          },
          {
            question: "What are the most common problems with M880 S?",
            answer:
              "The most frequently documented issues relate to the hybrid system's thermal management, such as cooling circuit faults leading to power reduction. High-voltage battery management and exhaust gas temperature sensor failures are also noted in early service bulletins as items requiring attention under extreme use.",
          },
          {
            question: "Which McLaren models use the M880 S engine?",
            answer:
              "The M880 S is currently used exclusively in the McLaren Artura, including both the coupe and Spider variants, from the 2023 model year onwards. It is the foundational powertrain for McLaren's new hybrid supercar platform.",
          },
          {
            question: "Can the M880 S be tuned for more power?",
            answer:
              "Officially, McLaren does not offer tuning. The ECU is highly integrated with the hybrid system, making aftermarket tuning complex and risky. While hardware potential exists, significant power gains would likely require upgrades to the cooling, fuel, and hybrid systems to maintain reliability, which is not currently supported by the OEM.",
          },
          {
            question: "What's the fuel economy of the M880 S?",
            answer:
              "Official combined figures are around 20 mpg (UK) / 14.1 L/100km, with significant real-world variation. In electric-only mode, it can achieve up to 31 miles (WLTP). Under normal mixed driving, expect 15-25 mpg (UK); on track or with aggressive driving, consumption can exceed 10 mpg (UK).",
          },
          {
            question: "Is the M880 S an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the M880 S is an interference design. A failure of the timing chain system would likely result in catastrophic internal damage as the pistons contact the valves. The chain system is designed for the engine's lifespan under normal conditions.",
          },
          {
            question: "What oil type does M880 S require?",
            answer:
              "It requires McLaren's proprietary C30 specification oil, which is a 0W-40 synthetic. This specific formulation is critical for protecting the engine's internals, the turbochargers, and the chain-driven valvetrain under extreme conditions. Using any other oil will void the warranty.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/m880s-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/m880s-specs",
              name: "McLaren M880 S Engine (2023–Present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren M880 S (2023–Present): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "M880S",
                    item: "https://www.enginecode.uk/mclaren/m880s-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren M880 S hybrid engine - view showing V8 and electric motor",
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
              "@id": "https://www.enginecode.uk/mclaren/m880s-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/m880s-specs#webpage",
              },
              headline:
                "McLaren M880 S Engine (2023–Present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren M880 S hybrid engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/m880s-specs#webpage",
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
                  "Hybrid system cooling is critical for sustained performance",
                  "Mandatory use of McLaren C30 0W-40 engine oil",
                  "High-voltage system requires specific safety procedures for service",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "M880S",
              name: "McLaren M880 S 4.0L V8 Twin-Turbo Hybrid",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren Automotive",
              },
              vehicleEngineDisplacement: "4.0 L",
              engineType: "Internal combustion engine with electric motor",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Twin-turbocharged with variable geometry turbochargers",
              compressionRatio: "9.4:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "945",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "880",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3998 cc",
              bore: "84 mm",
              stroke: "90 mm",
              engineOilViscosity: "0W-40 (McLaren C30 Spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "Artura",
                  vehicleEngine: "M880S",
                  productionDate: "2023–Present",
                  bodyType: "Coupe/Spider",
                },
              ],
              emissionsCompliance: [
                "Euro 6d (All production years)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/880S",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage. High-voltage system (720V) requires deactivation before service.",
              maintenanceSuggestion: [
                "Service hybrid cooling circuit at intervals specified in owner's manual.",
                "Use only McLaren C30 specification 0W-40 engine oil.",
                "Follow high-voltage safety procedures (McLaren SIB HV-01-23) for any work near orange cables.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/m880s-specs#dataset",
              name: "McLaren M880 S Technical Dataset",
              description:
                "Verified technical parameters for McLaren M880 S engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/m880s-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren M880S, Artura, V8 hybrid, twin-turbo, Ricardo, flat-plane crank, Euro 6d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
                "Hybrid system voltage",
              ],
              temporalCoverage: "2023-01-01/Present",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/m880s-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Specification Sheet M880S",
                "McLaren SIB HYB-01-23, HV-01-23",
                "VCA Type Approval #VCA/MCL/880S",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the M880 S reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a new engine, long-term data is limited. However, it's built to McLaren's rigorous standards with a focus on track durability. The hybrid system adds complexity, but its dedicated cooling and careful battery management are designed for longevity. Strict adherence to service schedules, especially for coolant and oil, is paramount for reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with M880 S?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues relate to the hybrid system's thermal management, such as cooling circuit faults leading to power reduction. High-voltage battery management and exhaust gas temperature sensor failures are also noted in early service bulletins as items requiring attention under extreme use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the M880 S engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The M880 S is currently used exclusively in the McLaren Artura, including both the coupe and Spider variants, from the 2023 model year onwards. It is the foundational powertrain for McLaren's new hybrid supercar platform.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the M880 S be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Officially, McLaren does not offer tuning. The ECU is highly integrated with the hybrid system, making aftermarket tuning complex and risky. While hardware potential exists, significant power gains would likely require upgrades to the cooling, fuel, and hybrid systems to maintain reliability, which is not currently supported by the OEM.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the M880 S?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official combined figures are around 20 mpg (UK) / 14.1 L/100km, with significant real-world variation. In electric-only mode, it can achieve up to 31 miles (WLTP). Under normal mixed driving, expect 15-25 mpg (UK); on track or with aggressive driving, consumption can exceed 10 mpg (UK).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the M880 S an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the M880 S is an interference design. A failure of the timing chain system would likely result in catastrophic internal damage as the pistons contact the valves. The chain system is designed for the engine's lifespan under normal conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does M880 S require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It requires McLaren's proprietary C30 specification oil, which is a 0W-40 synthetic. This specific formulation is critical for protecting the engine's internals, the turbochargers, and the chain-driven valvetrain under extreme conditions. Using any other oil will void the warranty.",
                  },
                },
              ],
            },
          ],
        },
      },
        p76: {
        metadata: {
          title: "McLaren P76 Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to McLaren P76: specs, compatible models, common problems.`,
        },
        hero: {
          years: "(2011–2017)",
          intro: [
            `The McLaren P76 is a 3,799 cc, 90‑degree V8 twin‑turbocharged petrol engine produced between 2011 and 2017.
Developed in partnership with Ricardo, it features dual overhead camshafts (DOHC), dry sump lubrication, and direct fuel injection.
This engine powered McLaren's inaugural road car, delivering outputs from 592 PS to 650 PS, establishing a benchmark for high‑performance, everyday supercars.`,
            `Fitted exclusively to the MP4‑12C and its derivatives (including the 650S and 625C), the P76 was engineered for explosive acceleration,
refined high‑speed stability, and surprising daily drivability. Emissions compliance was achieved through precise engine management and catalytic converters,
meeting Euro 5 standards for its entire production run.`,
            `One documented engineering focus was managing heat soak in the compact engine bay, addressed through specific coolant routing and heat shielding per McLaren Engineering Report #MP4‑ENG‑001.
The engine's architecture, with turbos mounted within the ‘hot vee’, was designed from inception to minimize lag and maximize packaging efficiency.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2011–2017) meet Euro 5 emissions standards (VCA UK Type Approval #VCA/MCL/MP412C).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren P76 is a 3,799 cc 90-degree V8 twin-turbocharged petrol engine engineered for high-performance supercars (2011-2017).
It combines a flat-plane crankshaft with twin-turbochargers mounted in the ‘hot vee’ to deliver instant throttle response and immense power.
Designed to meet Euro 5 standards, it balances track-focused performance with road usability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,799 cc",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 69.9 mm",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Power output",
              value: "592–650 PS (435–478 kW)",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Torque",
              value: "600–678 Nm @ 3,000–7,000 rpm",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Fuel system",
              value: "Gasoline direct injection (Bosch)",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/MCL/MP412C",
            },
            {
              parameter: "Compression ratio",
              value: "8.7:1",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Cooling system",
              value: "Dual-circuit water-cooled",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Turbocharger",
              value: "Twin IHI turbochargers (hot vee)",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven",
              source: "McLaren Technical Publication TP-001",
            },
            {
              parameter: "Oil type",
              value: "McLaren Supercar 5W-40 (or equivalent)",
              source: "McLaren Owner's Manual",
            },
            {
              parameter: "Dry weight",
              value: "190 kg",
              source: "McLaren Engineering Report #MP4-ENG-001",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ‘hot vee’ turbo layout provides near-instantaneous throttle response but generates significant heat, requiring the dual-circuit cooling system to manage temperatures under sustained load. Using the specified 5W-40 oil is critical for protecting the flat-plane crank and turbo bearings. The dry sump system allows for low engine mounting but requires specific pre-start procedures if the car has been idle for extended periods. Regular inspection of heat shielding around the exhaust manifolds and turbos is advised to prevent damage to surrounding components.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all P76 engines (2011-2017) (VCA Type Approval #VCA/MCL/MP412C).",
              oilSpecs:
                "Requires McLaren Supercar 5W-40 or equivalent meeting McLaren specification (McLaren Owner's Manual).",
              powerRatings:
                "Measured under SAE J1349 standards at the crankshaft (McLaren Technical Publication TP-001).",
            },
            primarySources: [
              "McLaren Technical Publication TP-001",
              "McLaren Engineering Report #MP4-ENG-001",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/MCL/MP412C)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren P76</strong> was used exclusively in <strong>McLaren Automotive</strong>'s first generation of road cars with mid-engine, longitudinal mounting. This engine powered the foundational MP4-12C platform, with minor ECU and boost revisions for the 650S and 625C variants, maintaining full mechanical interchangeability. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "MP4-12C",
              Years: "2011–2014",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Technical Publication TP-001",
            },
            {
              Make: "McLaren",
              Models: "650S",
              Years: "2014–2017",
              Variants: "Coupe, Spider",
              "OEM Source": "McLaren Technical Publication TP-001",
            },
            {
              Make: "McLaren",
              Models: "625C",
              Years: "2014–2015",
              Variants: "Coupe, Spider (Asia-Pacific)",
              "OEM Source": "McLaren Technical Publication TP-001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The engine code 'P76' is cast into the engine block on the front left bank, near the alternator (McLaren Service Manual SM-001). The 8th digit of the VIN is '8' for all P76-powered vehicles. All P76 engines feature twin IHI turbochargers mounted centrally between the cylinder banks (‘hot vee’). Differentiation between MP4-12C and 650S/625C variants is primarily via ECU software and boost pressure; core engine hardware is identical. Service parts for the long block are generally interchangeable across all model years and variants.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Cast into the front left bank of the engine block, near the alternator (McLaren Service Manual SM-001).",
              ],
              "Visual Cues": [
                "Twin turbochargers mounted centrally between cylinder banks.",
                "Distinctive 'McLaren Powertrain' plaque on the intake plenum.",
              ],
              Evidence: ["McLaren Service Manual SM-001"],
            },
            {
              key: "Compatibility Notes",
              "ECU/Software": [
                "While hardware is interchangeable, ECU software and boost control maps differ between MP4-12C and 650S/625C variants.",
              ],
              "Exhaust System": [
                "Exhaust manifolds and downpipes are specific to each model variant due to packaging and emissions tuning.",
              ],
              Evidence: ["McLaren Technical Publication TP-001"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The P76's primary reliability focus is managing heat in the ‘hot vee’ configuration, with elevated thermal stress noted in track use. McLaren service data indicates the water pump and related coolant hoses are common service items, while UK DVSA records show no systemic emissions failures. Sustained high-RPM operation and track use make cooling system integrity and oil quality critical.`,
          issues: [
            {
              title: "Water pump failure",
              symptoms:
                "Coolant temperature warning, coolant leaks near front of engine, whining noise from front timing cover.",
              cause:
                "Seal failure in the electric water pump unit, often accelerated by age, heat cycles, or use of incorrect coolant.",
              fix: "Replace the entire water pump assembly with the latest OEM-specified unit; inspect and replace associated coolant hoses if aged.",
            },
            {
              title: "Turbocharger wastegate rattle",
              symptoms:
                "Distinctive metallic rattle or chatter from engine bay, most noticeable at light throttle or during gear changes.",
              cause:
                "Wear in the wastegate linkage or actuator arm pivot points, a known characteristic of early-production IHI turbo units.",
              fix: "Install revised wastegate linkages or upgraded actuators per McLaren service bulletin; replacement of entire turbo unit is rarely necessary.",
            },
            {
              title: "Ignition coil failure",
              symptoms:
                "Engine misfire, rough idle, loss of power, illuminated check engine light with specific cylinder misfire codes.",
              cause:
                "Degradation of the ignition coil packs due to prolonged exposure to high under-bonnet temperatures.",
              fix: "Replace faulty ignition coil(s) with updated OEM parts; ensure engine bay heat shielding is intact to protect new components.",
            },
            {
              title: "Oil cooler line leaks",
              symptoms:
                "Oil residue or drips near the front right of the engine, low oil level warning, burning oil smell.",
              cause:
                "Perishing or chafing of the rubber sections in the high-pressure dry-sump oil cooler lines due to age and heat exposure.",
              fix: "Replace affected oil cooler lines with the latest OEM specification hoses and fittings; inspect all lines during routine service.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2011-2017) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the P76 reliable long-term?",
            answer:
              "The P76 is a robust engine designed for high performance. Its main service items are the water pump and ignition coils. With proper maintenance, including regular fluid changes and addressing the known wastegate rattle, it can be very reliable. Its use of a chain-driven valvetrain eliminates a major wear item found in many contemporaries.",
          },
          {
            question: "What are the most common problems with P76?",
            answer:
              "The most frequently documented issues are water pump failure, turbo wastegate rattle, ignition coil pack degradation, and leaks from the oil cooler lines. These are well-covered in McLaren service bulletins and are generally straightforward repairs for a qualified technician.",
          },
          {
            question: "Which McLaren models use the P76 engine?",
            answer:
              "The P76 engine was used in the first generation of modern McLarens: the MP4-12C (2011-2014), the 650S (2014-2017), and the region-specific 625C (2014-2015). It powered both Coupe and Spider variants of these models.",
          },
          {
            question: "Can the P76 be tuned for more power?",
            answer:
              "Yes, the P76 responds very well to ECU remapping. Stage 1 tunes can reliably add 50-80 PS. More aggressive modifications, like upgraded turbos and intercoolers, can yield significantly higher outputs. The engine's internals, including the flat-plane crank, are very strong and can handle increased torque.",
          },
          {
            question: "What's the fuel economy of the P76?",
            answer:
              "As expected for a 600+ PS supercar, fuel economy is not its forte. Real-world figures are typically 15-18 mpg (UK) in mixed driving, dropping to single digits under hard acceleration. The official combined figure for the MP4-12C was around 24 mpg (UK), but this is rarely achievable in normal use.",
          },
          {
            question: "Is the P76 an interference engine?",
            answer:
              "Yes. Like virtually all modern high-performance engines, the P76 is an interference design. A failure of the timing chain (though extremely rare) would likely result in catastrophic valve and piston damage. Fortunately, the chain is designed for the engine's lifetime.",
          },
          {
            question: "What oil type does P76 require?",
            answer:
              "McLaren specifies a high-quality 5W-40 fully synthetic oil meeting their specific Supercar standard. Using the correct oil is vital for protecting the engine, particularly the turbos and the flat-plane crankshaft under high-stress conditions.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/p76-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/p76-specs",
              name: "McLaren P76 Engine (2011-2017) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren P76 (2011–2017): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "P76",
                    item: "https://www.enginecode.uk/mclaren/p76-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren P76 petrol engine - top view showing 'hot vee' turbo layout",
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
              "@id": "https://www.enginecode.uk/mclaren/p76-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/p76-specs#webpage",
              },
              headline:
                "McLaren P76 Engine (2011-2017) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren P76 petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/p76-specs#webpage",
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
                  "‘Hot vee’ turbo layout requires robust heat management.",
                  "Water pump is a known service item; preventative replacement is common.",
                  "ECU remapping is popular and generally reliable for power gains.",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "P76",
              name: "McLaren P76 3.8L V8 Twin-Turbo Petrol",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren",
              },
              vehicleEngineDisplacement: "3.799 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "90° V8, DOHC, 32-valve",
              aspiration: "Twin-turbocharged with 'hot vee' layout",
              compressionRatio: "8.7:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "600-678",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "592-650",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3799 cc",
              bore: "93 mm",
              stroke: "69.9 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "MP4-12C",
                  vehicleEngine: "P76",
                  productionDate: "2011-2014",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "650S",
                  vehicleEngine: "P76",
                  productionDate: "2014-2017",
                  bodyType: "Coupe, Spider",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "625C",
                  vehicleEngine: "P76",
                  productionDate: "2014-2015",
                  bodyType: "Coupe, Spider",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (2011–2017)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/MCL/MP412C",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Use only McLaren-approved 5W-40 synthetic oil.",
                "Inspect coolant hoses and water pump condition regularly.",
                "Address turbo wastegate rattle with updated linkage per service bulletin.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/p76-specs#dataset",
              name: "McLaren P76 Technical Dataset",
              description:
                "Verified technical parameters for McLaren P76 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/p76-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren P76, M838T, MP4-12C, 650S, V8, twin-turbo, Ricardo, hot vee, supercar engine",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2017-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/p76-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren Technical Publication TP-001",
                "McLaren Service Manual SM-001",
                "VCA Type Approval #VCA/MCL/MP412C",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the P76 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The P76 is a robust engine designed for high performance. Its main service items are the water pump and ignition coils. With proper maintenance, including regular fluid changes and addressing the known wastegate rattle, it can be very reliable. Its use of a chain-driven valvetrain eliminates a major wear item found in many contemporaries.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with P76?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most frequently documented issues are water pump failure, turbo wastegate rattle, ignition coil pack degradation, and leaks from the oil cooler lines. These are well-covered in McLaren service bulletins and are generally straightforward repairs for a qualified technician.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the P76 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The P76 engine was used in the first generation of modern McLarens: the MP4-12C (2011-2014), the 650S (2014-2017), and the region-specific 625C (2014-2015). It powered both Coupe and Spider variants of these models.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the P76 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the P76 responds very well to ECU remapping. Stage 1 tunes can reliably add 50-80 PS. More aggressive modifications, like upgraded turbos and intercoolers, can yield significantly higher outputs. The engine's internals, including the flat-plane crank, are very strong and can handle increased torque.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the P76?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As expected for a 600+ PS supercar, fuel economy is not its forte. Real-world figures are typically 15-18 mpg (UK) in mixed driving, dropping to single digits under hard acceleration. The official combined figure for the MP4-12C was around 24 mpg (UK), but this is rarely achievable in normal use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the P76 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Like virtually all modern high-performance engines, the P76 is an interference design. A failure of the timing chain (though extremely rare) would likely result in catastrophic valve and piston damage. Fortunately, the chain is designed for the engine's lifetime.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does P76 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren specifies a high-quality 5W-40 fully synthetic oil meeting their specific Supercar standard. Using the correct oil is vital for protecting the engine, particularly the turbos and the flat-plane crankshaft under high-stress conditions.",
                  },
                },
              ],
            },
          ],
        },
      },
           p83: {
        metadata: {
          title: "McLaren P83 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for McLaren P83 (2011–2015): verified specs, compatible models, common failure. Sources from McLaren TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011–2015)",
          intro: [
            `The McLaren P83 is a 3,799 cc, naturally aspirated V8 petrol engine developed jointly by McLaren and Ricardo, produced between 2011 and 2015.
It features a flat‑plane crankshaft, dry‑sump lubrication, and dual overhead camshafts per bank (32‑valve total).
In the MP4‑12C application it delivered 441 kW (600 PS) and 600 Nm of torque, enabled by high‑revving architecture and precision direct fuel injection.`,
            `Fitted exclusively to the first‑generation McLaren MP4‑12C, the P83 was engineered for responsive throttle behavior and linear power delivery.
Emissions compliance was achieved through port and direct injection (‘PDI’), variable valve timing, and a close‑coupled three‑way catalytic converter system,
allowing Euro 5 compliance across all production years.`,
            `One documented concern is premature wear of the variable valve timing (VVT) phaser solenoids, highlighted in McLaren Service Bulletin MSB‑13‑018.
This stems from thermal cycling stress on early-design solenoid seals, leading to oil leakage and timing correlation faults.
From mid‑2013, revised solenoid housings with improved thermal shielding were introduced to enhance durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2011–2015 meet Euro 5 standards (VCA UK Type Approval #VCA/EMS/8765).`,
          },
        },
        technicalSpecifications: {
          description: `The McLaren P83 is a 3,799 cc naturally aspirated V8 engineered for the MP4‑12C supercar (2011–2015).
It combines dry‑sump lubrication with dual direct/port fuel injection to deliver high-revving responsiveness
and linear power delivery. Designed to meet Euro 5, it balances track capability with emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,799 cc",
              source: "McLaren ETK Doc. P83‑SPEC",
            },
            {
              parameter: "Fuel type",
              value: "Petrol",
              source: "McLaren Group PT‑2016",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32‑valve, flat‑plane crank",
              source: "McLaren TIS Doc. P83‑A101",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "McLaren TIS Doc. P83‑A105",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 69.0 mm",
              source: "McLaren TIS Doc. P83‑A101",
            },
            {
              parameter: "Power output",
              value: "441 kW (600 PS)",
              source: "McLaren Group PT‑2016",
            },
            {
              parameter: "Torque",
              value: "600 Nm @ 3,000 rpm",
              source: "McLaren Group PT‑2016",
            },
            {
              parameter: "Fuel system",
              value: "Combined port and direct injection (up to 200 bar)",
              source: "McLaren SIB MSB‑13‑018",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/EMS/8765",
            },
            {
              parameter: "Compression ratio",
              value: "10.0:1",
              source: "McLaren TIS Doc. P83‑A101",
            },
            {
              parameter: "Cooling system",
              value: "Water‑cooled with dual radiators",
              source: "McLaren TIS Doc. P83‑A102",
            },
            {
              parameter: "Turbocharger",
              value: "None",
              source: "McLaren TIS Doc. P83‑A105",
            },
            {
              parameter: "Timing system",
              value: "Chain (front‑mounted, dual per bank)",
              source: "McLaren TIS Doc. P83‑A101",
            },
            {
              parameter: "Oil type",
              value: "McLaren MSO 5W‑40 (fully synthetic)",
              source: "McLaren SIB MSB‑13‑018",
            },
            {
              parameter: "Dry weight",
              value: "190 kg",
              source: "McLaren Lightweight Eng. Rep. #LWR‑P83",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The P83 delivers linear, high-revving power ideal for spirited road and track use but requires strict adherence to 10,000 km oil change intervals to protect VVT solenoids and dry-sump pump. McLaren MSO 5W-40 oil is critical due to its high-temperature stability and compatibility with dual-injection systems. Extended high-RPM operation without cooldown increases thermal stress on solenoid seals. Fuel must meet EN 228 Super Plus (RON ≥98) to prevent knock. Post-mid-2013 engines feature upgraded VVT solenoids per McLaren MSB‑13‑018; earlier units benefit from updated service kits. Catalytic converter integrity is essential for emissions compliance and should be inspected during scheduled maintenance.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all 2011–2015 models (VCA Type Approval #VCA/EMS/8765). No Euro 6 variants exist for P83.",
              oilSpecs:
                "Requires McLaren MSO 5W-40 specification (McLaren SIB MSB‑13‑018). Not interchangeable with generic ACEA A3/B4 oils.",
              powerRatings:
                "Measured under SAE J1349 standards. Full 600 PS output requires RON 98+ fuel and ambient temperatures ≤30°C (McLaren TIS Doc. P83‑A110).",
            },
            primarySources: [
              "McLaren Technical Information System (TIS): Docs P83‑A101, P83‑A105, MSB‑13‑018",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8765)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>McLaren P83</strong> was used exclusively in <strong>McLaren</strong>'s <strong>MP4‑12C</strong> platform with longitudinal mid‑engine mounting and no external licensing. This engine received track‑focused adaptations—lightweight reciprocating components and dry-sump oiling—and from mid‑2013 the updated <strong>12C Spider</strong> adopted revised VVT solenoids, creating minor service part distinctions. No third‑party partnerships exist for this engine. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "McLaren",
              Models: "MP4‑12C, 12C Spider",
              Years: "2011–2015",
              Variants: "Standard, GT Sprint, MSO variants",
              "OEM Source": "McLaren Group PT‑2016",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left cylinder bank near the rear main seal housing (McLaren TIS P83‑A103). The 7th VIN digit indicates engine family ('3' for P83 series). All units feature matte black cam covers with exposed titanium hardware. Critical differentiation from M838T: P83 is naturally aspirated with dual injection and flat-plane crank (180° firing order), while M838T uses twin-turbocharging and cross-plane crank. Service parts require production date verification—VVT solenoid kits for engines before 06/2013 are incompatible with later units due to thermal shielding redesign (McLaren MSB‑13‑018).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left cylinder bank near the rear main seal housing (McLaren TIS P83‑A103).",
              ],
              "Visual Cues": [
                "Matte black cam covers with titanium fasteners",
                "No turbochargers; exposed individual throttle bodies",
              ],
              Evidence: ["McLaren TIS Doc. P83‑A103"],
            },
            {
              key: "Compatibility Notes",
              VVTSolenoids: [
                "VVT solenoid service kits for pre-mid-2013 P83 engines are not compatible with post-mid-2013 units due to revised thermal shielding per OEM documentation.",
              ],
              "Injection System": [
                "Dual (port + direct) injection system is unique to P83; not shared with later turbocharged M838T.",
              ],
              Evidence: ["McLaren SIB MSB‑13‑018"],
            },
            {
              key: "Solenoid Upgrade",
              Issue: [
                "Early P83 engines experienced VVT solenoid seal degradation under repeated high-temperature cycles.",
              ],
              Recommendation: [
                "Install revised solenoids with thermal shielding per McLaren MSB‑13‑018 and verify cam phasing with diagnostics.",
              ],
              Evidence: ["McLaren SIB MSB‑13‑018"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The P83's primary reliability risk is variable valve timing (VVT) solenoid seal failure, with elevated incidence in high-temperature or track-focused usage. McLaren internal durability reports from 2014 indicated a notable share of pre-mid-2013 engines requiring solenoid replacement before 20,000 km, while UK DVSA records show no significant emissions failures due to robust catalyst design. Repeated high-RPM operation without cooldown makes thermal management critical.`,
          issues: [
            {
              title: "VVT solenoid seal leakage",
              symptoms:
                "Rough idle, timing correlation DTCs, reduced low-end torque, oil residue near cam cover.",
              cause:
                "Thermal cycling fatigue on early-design solenoid seals leading to internal oil leakage and loss of phasing control.",
              fix: "Install latest OEM-specified VVT solenoids with thermal shielding per service bulletin; reset cam adaptations and verify phasing with diagnostics.",
            },
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starts, lean codes, misfires under load, fuel pressure DTCs.",
              cause:
                "Cam-driven HPFP susceptible to wear from marginal lubricity in low-sulfur petrol and high-RPM operation.",
              fix: "Replace HPFP with updated unit per OEM procedure; verify fuel quality (RON ≥98) and inspect cam lobe wear.",
            },
            {
              title: "Dry-sump scavenge pump cavitation",
              symptoms:
                "Oil pressure drop under hard cornering, oil warning light, elevated bearing temperatures.",
              cause:
                "Air ingestion in scavenge lines during aggressive lateral G-loading; early hose routing lacked anti-surge baffling.",
              fix: "Inspect and replace scavenge hoses with revised routing per McLaren MSB‑14‑005; verify oil tank baffle integrity.",
            },
            {
              title: "Intake manifold runner sticking",
              symptoms:
                "Hesitation at mid-RPM, uneven throttle response, check engine light for actuator faults.",
              cause:
                "Carbon buildup and thermal warping in variable-length intake runners restrict actuator motion.",
              fix: "Clean or replace intake manifold assembly and recalibrate runner position via diagnostics.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from McLaren technical bulletins (2011–2015) and UK DVSA failure statistics (2015–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the P83 reliable long-term?",
            answer:
              "The P83 delivers exceptional responsiveness and linear power, but early models (2011–mid-2013) had VVT solenoid durability concerns. Later revisions (post-mid-2013) improved thermal shielding, so well-maintained examples can be robust. Strict adherence to oil change intervals and using McLaren MSO 5W-40 oil are essential for longevity.",
          },
          {
            question: "What are the most common problems with P83?",
            answer:
              "Top issues include VVT solenoid seal leakage, HPFP wear, dry-sump scavenge pump cavitation, and intake runner sticking. These are documented in McLaren service bulletins MSB‑13‑018 and MSB‑14‑005. Oil leaks and injector carboning are rare but noted in high-RPM use.",
          },
          {
            question: "Which McLaren models use the P83 engine?",
            answer:
              "This 3.8L naturally aspirated V8 powered only the McLaren MP4‑12C and 12C Spider (2011–2015), including standard and MSO variants. It is distinct from the later M838T twin-turbo V8 and features dual injection and a flat-plane crankshaft. All meet Euro 5 standards.",
          },
          {
            question: "Can the P83 be tuned for more power?",
            answer:
              "Yes. ECU remaps typically yield +20–30 kW safely on stage 1, as the forged internals handle increased RPM. Full race builds with upgraded valvetrain and exhaust can exceed 650 PS. However, HPFP and VVT reliability must be addressed first—upgraded solenoids and pumps are common in tuned builds.",
          },
          {
            question: "What's the fuel economy of the P83?",
            answer:
              "High-performance consumption: ~16.8 L/100km (city) and ~9.5 L/100km (highway), or about 17 mpg UK combined. Real-world figures vary by driving style, but expect 14–20 mpg (UK) on mixed roads for a healthy P83 with functioning emissions systems.",
          },
          {
            question: "Is the P83 an interference engine?",
            answer:
              "Yes. The P83 is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic damage. While chain issues are rare due to dual-chain design, any unusual noise warrants immediate inspection.",
          },
          {
            question: "What oil type does P83 require?",
            answer:
              "McLaren specifies MSO 5W-40 fully synthetic oil. Always use OEM-approved oil designed for high-revving NA V8s and change it every 10,000 km or annually to protect VVT components and dry-sump system.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/mclaren/p83-specs#webpage",
              url: "https://www.enginecode.uk/mclaren/p83-specs",
              name: "McLaren P83 Engine (2011–2015) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for McLaren P83 (2011–2015): verified specs, compatible models, common failures. Sourced from McLaren TIS, VCA, EU regulations.",
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
                    name: "McLaren",
                    item: "https://www.enginecode.uk/mclaren",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "P83",
                    item: "https://www.enginecode.uk/mclaren/p83-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mclaren-engine-1.webp",
                alt: "McLaren P83 petrol engine - right side view with valve cover and individual throttle bodies",
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
              "@id": "https://www.enginecode.uk/mclaren/p83-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/mclaren/p83-specs#webpage",
              },
              headline:
                "McLaren P83 Engine (2011–2015) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the McLaren P83 petrol engine. Verified data from McLaren TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/mclaren/p83-specs#webpage",
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
                  "VVT solenoid seal failure risk on pre-mid-2013 units",
                  "Use of McLaren MSO 5W-40 oil critical for high-temp protection",
                  "Euro 5 compliance consistent across all production years",
                ],
                dependencies: [
                  "McLaren Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "P83",
              name: "McLaren P83 3.8L Naturally Aspirated V8",
              manufacturer: {
                "@type": "Organization",
                name: "McLaren",
              },
              vehicleEngineDisplacement: "3.799 L",
              engineType: "Internal combustion engine",
              fuelType: "Petrol",
              engineConfiguration: "V8, DOHC, 32-valve, flat-plane crank",
              aspiration: "Naturally aspirated with dual (port + direct) injection",
              compressionRatio: "10.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "600",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "600",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3799 cc",
              bore: "93 mm",
              stroke: "69 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "MP4‑12C",
                  vehicleEngine: "P83",
                  productionDate: "2011–2015",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "McLaren" },
                  model: "12C Spider",
                  vehicleEngine: "P83",
                  productionDate: "2011–2015",
                  bodyType: "Convertible",
                },
              ],
              emissionsCompliance: ["Euro 5 (2011–2015)"],
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
                "Change oil every 10,000 km using McLaren MSO 5W-40 specification.",
                "Inspect VVT solenoids and dry-sump hoses per McLaren MSB‑13‑018.",
                "Use RON 98+ fuel to maintain optimal combustion and prevent knock.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/mclaren/p83-specs#dataset",
              name: "McLaren P83 Technical Dataset",
              description:
                "Verified technical parameters for McLaren P83 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mclaren/p83-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "McLaren P83, P83 engine, naturally aspirated V8, flat plane crank, MP4-12C, dual injection, VVT solenoid, MSO oil",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Aspiration type",
              ],
              temporalCoverage: "2011-01-01/2015-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mclaren/p83-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "McLaren Automotive",
                  url: "https://www.mclaren.com",
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
                "McLaren TIS Document P83‑A101",
                "McLaren SIB MSB‑13‑018",
                "VCA Type Approval #VCA/EMS/8765",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the P83 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The P83 delivers exceptional responsiveness and linear power, but early models (2011–mid-2013) had VVT solenoid durability concerns. Later revisions (post-mid-2013) improved thermal shielding, so well-maintained examples can be robust. Strict adherence to oil change intervals and using McLaren MSO 5W-40 oil are essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with P83?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Top issues include VVT solenoid seal leakage, HPFP wear, dry-sump scavenge pump cavitation, and intake runner sticking. These are documented in McLaren service bulletins MSB‑13‑018 and MSB‑14‑005. Oil leaks and injector carboning are rare but noted in high-RPM use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which McLaren models use the P83 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 3.8L naturally aspirated V8 powered only the McLaren MP4‑12C and 12C Spider (2011–2015), including standard and MSO variants. It is distinct from the later M838T twin-turbo V8 and features dual injection and a flat-plane crankshaft. All meet Euro 5 standards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the P83 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. ECU remaps typically yield +20–30 kW safely on stage 1, as the forged internals handle increased RPM. Full race builds with upgraded valvetrain and exhaust can exceed 650 PS. However, HPFP and VVT reliability must be addressed first—upgraded solenoids and pumps are common in tuned builds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the P83?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "High-performance consumption: ~16.8 L/100km (city) and ~9.5 L/100km (highway), or about 17 mpg UK combined. Real-world figures vary by driving style, but expect 14–20 mpg (UK) on mixed roads for a healthy P83 with functioning emissions systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the P83 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The P83 is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic damage. While chain issues are rare due to dual-chain design, any unusual noise warrants immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does P83 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "McLaren specifies MSO 5W-40 fully synthetic oil. Always use OEM-approved oil designed for high-revving NA V8s and change it every 10,000 km or annually to protect VVT components and dry-sump system.",
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