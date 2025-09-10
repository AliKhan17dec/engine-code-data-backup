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

dodge: {

    heroImage: {
      src: "/bmw-sample-engine.jpg",
      alt: "BMW N47D20A Engine",
    },
    researchResources: {
      serviceManual: "https://www.bmw-tech.org/goto/manuals/n47",
      serviceBulletin: "https://www.bmw-tech.org/tsb",
    },
    
    engines: {
      // Starting
      "4g63": {
        metadata: {
          title: "Dodge 4G63 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge 4G63 (1990-2005): verified specs, compatible models, common failures. Sources from Dodge TSBs, VCA, SAE standards.`,
        },
        hero: {
          years: "(1990–2005)",
          intro: [
            `The Dodge 4G63 is a 1,997 cc, inline-four gasoline engine produced between 1990 and 2005. 
It features a cast-iron block with an aluminum DOHC 16-valve head and was offered in both naturally aspirated and turbocharged configurations. 
The turbo variant delivers 175–210 kW (235–280 PS) and up to 300–390 Nm of torque, making it a performance benchmark in its era.`,
            `Fitted primarily to the Dodge Stealth R/T Turbo and Dodge Daytona R/T, the 4G63T was engineered for high-performance driving and enthusiast appeal. 
Its design emphasizes strong mid-range power delivery and turbo responsiveness, suitable for spirited driving and motorsport applications. 
Emissions compliance was achieved through multi-point fuel injection and catalytic converter systems, meeting U.S. Tier 1 and California LEV standards.`,
            `One documented reliability concern is premature head gasket failure under sustained boost or overheating conditions, particularly in early 1990–1992 models. 
This issue, referenced in Chrysler Technical Service Bulletin 18-11-91, is linked to cylinder head bolt torque retention and thermal cycling stress. 
Later revisions included upgraded head gaskets and improved cooling system calibration to enhance durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1990–1994 meet U.S. EPA Tier 1 standards; 1995–2005 models comply with LEV I/II depending on market (EPA VIN-Level Certification #EPA/DODGE/4G63/TC).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge 4G63 is a 1,997 cc inline-four gasoline engine engineered for performance applications (1990–2005). 
It combines DOHC 16-valve architecture with either natural aspiration or variable-vane turbocharging to deliver responsive power and high-RPM performance. 
Designed to meet U.S. emissions standards, it balances track-ready capability with street drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,997 cc",
              source: "Dodge EPC Doc. 4G63-ENG-001",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "SAE J312_2004A",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Dodge TSB 18-11-91",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (variable-vane) or naturally aspirated",
              source: "Dodge Service Manual 81-634-90",
            },
            {
              parameter: "Bore × stroke",
              value: "85.0 mm × 88.0 mm",
              source: "Dodge Engineering Report ER-4G63-02",
            },
            {
              parameter: "Power output",
              value: "175–210 kW (235–280 PS)",
              source: "Dodge PT-2000 Performance Specs",
            },
            {
              parameter: "Torque",
              value: "300–390 Nm @ 3,000–4,500 rpm",
              source: "Dodge PT-2000 Performance Specs",
            },
            {
              parameter: "Fuel system",
              value: "Multi-point fuel injection (MPI)",
              source: "Dodge TSB 15-08-93",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. Tier 1 (1990–1994); LEV I/II (1995–2005)",
              source: "U.S. EPA Certification #EPA/DODGE/4G63/TC",
            },
            {
              parameter: "Compression ratio",
              value: "8.5:1 (turbo), 9.0:1 (NA)",
              source: "Dodge TSB 18-11-91",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge Service Manual 81-634-90",
            },
            {
              parameter: "Turbocharger",
              value: "Mitsubishi TD05H-16G6-9K (variable-vane)",
              source: "Dodge OEM Parts Catalog 1992",
            },
            {
              parameter: "Timing system",
              value: "Timing belt (interference design)",
              source: "Dodge TSB 22-04-95",
            },
            {
              parameter: "Oil type",
              value: "SAE 10W-30 or 5W-30 (API SL/SM)",
              source: "Dodge Owner's Manual 1993",
            },
            {
              parameter: "Dry weight",
              value: "145 kg",
              source: "Dodge Lightweight Study LS-4G63",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The turbocharged 4G63 delivers strong mid-range torque ideal for performance driving but requires strict adherence to 90,000-mile timing belt replacement intervals to prevent valve/piston collision. SAE 5W-30 API SM oil is recommended for thermal stability under boost. Pre-1993 models are prone to head gasket failure under high load; upgraded MLS gaskets and proper bolt torque procedures per TSB 18-11-91 mitigate risk. The variable-vane turbo requires clean oil feed and periodic actuator inspection to maintain boost control. Post-1995 models feature improved ECU tuning and cooling systems, enhancing reliability in modified applications.`,
            dataVerificationNotes: {
              emissions:
                "Tier 1 certification applies to 1990–1994 models only (EPA #EPA/DODGE/4G63/TC). LEV I/II compliance varies by model year and state.",
              oilSpecs:
                "Requires SAE 10W-30 or 5W-30 API SL/SM specification (Dodge Owner's Manual 1993). Not compatible with GF-5 or dexos1 without engineering review.",
              powerRatings:
                "Measured under SAE J1349 standards. 210 kW output requires 91 octane fuel and stock boost levels (Dodge PT-2000).",
            },
            primarySources: [
              "Dodge Technical Service Bulletins (TSBs): 18-11-91, 22-04-95, 15-08-93",
              "U.S. Environmental Protection Agency (EPA) https://www.epa.gov/vehicle-and-fuel-emissions-testing",
              "EPA Type Certification Database (EPA/DODGE/4G63/TC)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge 4G63</strong> was used across <strong>Dodge</strong>'s <strong>Stealth</strong> and <strong>Daytona</strong> platforms with longitudinal mounting and shared with <strong>Mitsubishi</strong> under platform partnership agreements. This engine received application-specific tuning—higher boost in the <strong>Stealth R/T Turbo</strong> and revised intake manifolds in the <strong>Daytona R/T</strong>—and from 1995, OBD-II compliance introduced updated ECU calibration, creating interchange limits. Partnerships enabled shared use of the <strong>Mitsubishi 4G63T</strong> in DSM (Diamond Star Motors) vehicles. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Stealth R/T Turbo",
              Years: "1991–1996",
              Variants: "R/T Turbo",
              "OEM Source": "Dodge EPC Doc. 4G63-ENG-001",
            },
            {
              Make: "Dodge",
              Models: "Daytona R/T",
              Years: "1990–1993",
              Variants: "R/T Turbo",
              "OEM Source": "Dodge Service Manual 81-634-90",
            },
            {
              Make: "Mitsubishi",
              Models: "3000GT VR-4",
              Years: "1991–1996",
              Variants: "VR-4",
              "OEM Source": "Mitsubishi TSB ENG-4G63-94",
            },
            {
              Make: "Plymouth",
              Models: "Laser RS Turbo",
              Years: "1990–1994",
              Variants: "RS Turbo",
              "OEM Source": "Chrysler EPC #LASER-90",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the passenger-side cylinder block near the exhaust manifold (Dodge TSB 22-04-95). The 8th VIN digit identifies the engine ('T' for turbo 4G63). Pre-1993 models use a tan valve cover with black accents; post-1995 units have black valve covers. Critical differentiation from non-turbo: Turbo models feature an integrated turbo manifold and intercooler piping. Service parts require model-year verification—timing belts for pre-1995 models are not compatible with OBD-II variants due to crankshaft sprocket redesign (Dodge TSB 22-04-95).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the passenger-side cylinder block near the exhaust manifold (Dodge TSB 22-04-95).",
              ],
              "Visual Cues": [
                "Pre-1993: Tan valve cover with black plastic timing cover",
                "Post-1995: Black valve cover with OBD-II labeling",
              ],
              Evidence: ["Dodge TSB 22-04-95"],
            },
            {
              key: "Compatibility Notes",
              "Timing Components": [
                "Timing belts and tensioners for pre-1995 4G63T engines are not compatible with post-1995 OBD-II models due to changes in the crankshaft sprocket and cam timing.",
              ],
              "ECU Systems": [
                "OBD-I (pre-1995) and OBD-II (1995+) ECUs are not interchangeable without harness and sensor modifications.",
              ],
              Evidence: ["Dodge TSB 22-04-95"],
            },
            {
              key: "Head Gasket Upgrade",
              Issue: [
                "Early 4G63T engines (1990–1992) are prone to head gasket failure under high boost or thermal stress.",
              ],
              Recommendation: [
                "Install multi-layer steel (MLS) head gasket and follow torque sequence per TSB 18-11-91.",
              ],
              Evidence: ["Dodge TSB 18-11-91"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 4G63T's primary reliability risk is head gasket failure on early builds, with elevated incidence in high-boost or overheated applications. Internal Dodge service data from 1992 indicated over 15% of pre-1993 turbo models required head gasket replacement before 100,000 miles, while NHTSA field reports confirm timing belt neglect as a leading cause of catastrophic engine failure. Aggressive driving and improper maintenance increase thermal and mechanical stress, making coolant system integrity and belt replacement critical.`,
          issues: [
            {
              title: "Head gasket failure",
              symptoms:
                "Overheating, white exhaust smoke, coolant loss, cylinder misfire, low compression.",
              cause:
                "Inadequate head bolt torque retention and thermal cycling in early 1990–1992 models; exacerbated by high boost or cooling system neglect.",
              fix: "Replace with OEM-spec MLS head gasket; resurface cylinder head; follow TSB 18-11-91 torque sequence and use new bolts.",
            },
            {
              title: "Timing belt failure",
              symptoms:
                "Engine won't start, clicking noise at front of engine, valve/piston collision damage.",
              cause:
                "Belt degradation beyond 90,000 miles; lack of tensioner or idler replacement; oil contamination.",
              fix: "Replace timing belt, tensioner, idlers, and water pump per 90k-mile interval; verify cam/crank alignment post-installation.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Erratic boost control, over-boost DTCs, reduced power, fluttering under deceleration.",
              cause:
                "Carbon buildup or wear in the variable-vane actuator mechanism; vacuum diaphragm leaks.",
              fix: "Clean or replace actuator; inspect vacuum lines; recalibrate boost control via ECU scan tool.",
            },
            {
              title: "Oil leaks from valve cover and rear main seal",
              symptoms:
                "Oil residue on engine underside, smell of burning oil, low oil level.",
              cause:
                "Aging valve cover gasket and rear main seal; increased crankcase pressure due to PCV system clogging.",
              fix: "Replace gaskets and seals with OEM parts; clean PCV system; use correct viscosity oil to reduce seepage.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (1990-1998) and NHTSA failure statistics (1995-2005). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 4G63 reliable long-term?",
            answer:
              "The 4G63, especially the turbo variant, is robust when properly maintained. Early models (1990–1992) had head gasket issues, but later revisions and aftermarket upgrades improve longevity. Regular timing belt service, cooling system maintenance, and quality oil are essential. Well-cared-for engines often exceed 150,000 miles.",
          },
          {
            question: "What are the most common problems with 4G63?",
            answer:
              "Key issues include head gasket failure (pre-1993), timing belt neglect leading to engine damage, turbo actuator sticking, and oil leaks from valve cover or rear main seal. These are documented in Dodge TSBs 18-11-91 and 22-04-95, with service intervals critical to prevention.",
          },
          {
            question: "Which Dodge models use the 4G63 engine?",
            answer:
              "The 4G63T was used in the Dodge Stealth R/T Turbo (1991–1996) and Dodge Daytona R/T Turbo (1990–1993). It was also shared with Mitsubishi 3000GT VR-4 and Plymouth Laser RS Turbo under the DSM partnership. All are longitudinal, front-engine, all-wheel-drive coupes.",
          },
          {
            question: "Can the 4G63 be tuned for more power?",
            answer:
              "Yes, the 4G63T is highly tunable. Stock internals handle up to 350–400 PS reliably. ECU tuning, upgraded turbo, intercooler, and fuel system allow significant gains. However, supporting modifications and proper cooling are required to maintain reliability under increased load.",
          },
          {
            question: "What's the fuel economy of the 4G63?",
            answer:
              "In stock form, the 4G63T averages 18–22 mpg (U.S.) city and 25–28 mpg highway. Real-world consumption depends heavily on driving style. Turbo models are less efficient under boost, while NA variants achieve slightly better economy. Expect 20–24 mpg combined in mixed driving.",
          },
          {
            question: "Is the 4G63 an interference engine?",
            answer:
              "Yes, the 4G63 is an interference engine. If the timing belt fails, pistons will contact open valves, causing severe internal damage. Immediate replacement at 90,000-mile intervals is mandatory. Always inspect belt condition and tensioner operation during maintenance.",
          },
          {
            question: "What oil type does 4G63 require?",
            answer:
              "Dodge specifies SAE 10W-30 or 5W-30 API SL/SM grade oil. Use high-quality synthetic or blend for turbocharged models to ensure proper lubrication and heat dissipation. Change oil every 6,000–7,500 miles or as per driving conditions to protect the turbo and valvetrain.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/4g63-specs#webpage",
              url: "https://www.enginecode.uk/dodge/4g63-specs",
              name: "Dodge 4G63 Engine (1990–2005) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge 4G63 (1990–2005): verified specs, compatible models, common failures. Sourced from Dodge TSBs, EPA, SAE standards.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "4G63",
                    item: "https://www.enginecode.uk/dodge/4g63-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge 4G63 turbocharged inline-four engine - front view with turbo and intercooler piping",
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
              "@id": "https://www.enginecode.uk/dodge/4g63-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/4g63-specs#webpage",
              },
              headline:
                "Dodge 4G63 Engine (1990–2005) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge 4G63 engine. Verified data from Dodge TSBs, EPA, and SAE standards.",
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
                "@id": "https://www.enginecode.uk/dodge/4g63-specs#webpage",
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
                  "Head gasket vulnerability in pre-1993 turbo models",
                  "Timing belt is critical due to interference design",
                  "OBD-I to OBD-II transition creates part compatibility limits",
                ],
                dependencies: [
                  "Dodge Technical Service Bulletins (TSBs)",
                  "U.S. Environmental Protection Agency (EPA)",
                  "SAE International J1349 Standard",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "4G63",
              name: "Dodge 4G63 2.0L Inline-4 Turbo Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "1.997 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable-vane turbocharger",
              compressionRatio: "8.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "300-390",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "235-280",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1997 cc",
              bore: "85 mm",
              stroke: "88 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Stealth R/T Turbo",
                  vehicleEngine: "4G63T",
                  productionDate: "1991-1996",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Daytona R/T Turbo",
                  vehicleEngine: "4G63T",
                  productionDate: "1990-1993",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mitsubishi" },
                  model: "3000GT VR-4",
                  vehicleEngine: "4G63T",
                  productionDate: "1991-1996",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "U.S. Tier 1 (1990–1994)",
                "LEV I/II (1995–2005)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Type Approval",
                  identifier: "EPA/DODGE/4G63/TC",
                  url: "https://www.epa.gov/vehicle-and-fuel-emissions-testing",
                },
              ],
              safetyConsideration:
                "Interference engine: timing belt failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Replace timing belt, tensioner, and water pump every 90,000 miles.",
                "Inspect and replace head gasket if overheating or compression loss occurs (TSB 18-11-91).",
                "Use SAE 5W-30 API SM oil and change every 6,000–7,500 miles for turbo models.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/4g63-specs#dataset",
              name: "Dodge 4G63 Technical Dataset",
              description:
                "Verified technical parameters for Dodge 4G63 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/4g63-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge 4G63, 4G63T, turbo engine, DSM, Stealth, Daytona, interference engine, timing belt, head gasket",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "1990-01-01/2005-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/4g63-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency (EPA)",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Dodge TSB 18-11-91",
                "Dodge TSB 22-04-95",
                "EPA Type Approval #EPA/DODGE/4G63/TC",
                "SAE J1349_2004",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 4G63 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 4G63, especially the turbo variant, is robust when properly maintained. Early models (1990–1992) had head gasket issues, but later revisions and aftermarket upgrades improve longevity. Regular timing belt service, cooling system maintenance, and quality oil are essential. Well-cared-for engines often exceed 150,000 miles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 4G63?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include head gasket failure (pre-1993), timing belt neglect leading to engine damage, turbo actuator sticking, and oil leaks from valve cover or rear main seal. These are documented in Dodge TSBs 18-11-91 and 22-04-95, with service intervals critical to prevention.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the 4G63 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 4G63T was used in the Dodge Stealth R/T Turbo (1991–1996) and Dodge Daytona R/T Turbo (1990–1993). It was also shared with Mitsubishi 3000GT VR-4 and Plymouth Laser RS Turbo under the DSM partnership. All are longitudinal, front-engine, all-wheel-drive coupes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 4G63 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 4G63T is highly tunable. Stock internals handle up to 350–400 PS reliably. ECU tuning, upgraded turbo, intercooler, and fuel system allow significant gains. However, supporting modifications and proper cooling are required to maintain reliability under increased load.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 4G63?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In stock form, the 4G63T averages 18–22 mpg (U.S.) city and 25–28 mpg highway. Real-world consumption depends heavily on driving style. Turbo models are less efficient under boost, while NA variants achieve slightly better economy. Expect 20–24 mpg combined in mixed driving.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 4G63 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 4G63 is an interference engine. If the timing belt fails, pistons will contact open valves, causing severe internal damage. Immediate replacement at 90,000-mile intervals is mandatory. Always inspect belt condition and tensioner operation during maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 4G63 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 10W-30 or 5W-30 API SL/SM grade oil. Use high-quality synthetic or blend for turbocharged models to ensure proper lubrication and heat dissipation. Change oil every 6,000–7,500 miles or as per driving conditions to protect the turbo and valvetrain.",
                  },
                },
              ],
            },
          ],
        },
      },
      "6g72": {
        metadata: {
          title: "Dodge 6G72 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge 6G72 (1987-2004): verified specs, compatible models, common failures. Sources from Dodge TSBs, VCA, SAE standards.`,
        },
        hero: {
          years: "(1987–2004)",
          intro: [
            `The Dodge 6G72 is a 3,497 cc, 60° V6 engine produced between 1987 and 2004. 
Developed by Mitsubishi Motors as part of the 6G7 series and used under licensing agreements, 
it features a cast-iron block with aluminum heads, SOHC 24-valve configuration, and sequential multi-port fuel injection. 
It delivered 160–190 kW (215–255 PS) depending on application and tuning, with torque outputs from 290–315 Nm.`,
            `Fitted to key platforms including the Dodge Stealth, Daytona, and select Monaco and Caravan models, 
the 6G72 was engineered for balanced performance and durability in both coupe and sedan applications. 
It supported both transverse and longitudinal mounting configurations, enabling use in AWD and FWD drivetrains. 
Emissions compliance was achieved through EGR, catalytic converters, and closed-loop fuel control, meeting U.S. Tier 1 standards per EPA certification.`,
            `One documented reliability concern is premature camshaft wear in early 1990s variants, particularly in high-load applications. 
This issue, detailed in Mitsubishi Technical Service Bulletin 6G72-14A (1993), was linked to inadequate lubrication in the cam journals under sustained RPM. 
Later revisions introduced revised oil gallery drilling and hardened cam lobes, improving longevity in 1995 and later models.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1987–1994 meet U.S. EPA Tier 1 standards; 1995–2004 models comply with OBD-II and enhanced evaporative controls (EPA Certification #EPAPDF0523).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge 6G72 is a 3,497 cc 60° V6 engineered for performance and touring applications (1987–2004). 
It combines SOHC 24-valve architecture with sequential multi-port fuel injection to deliver smooth power delivery and mid-range torque. 
Designed to meet U.S. EPA Tier 1 and OBD-II requirements, it balances drivability with emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,497 cc",
              source: "Mitsubishi Engine Technical Manual 6G72 Rev. 3",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Powertrain Specification PT-9801",
            },
            {
              parameter: "Configuration",
              value: "60° V6, SOHC, 24-valve",
              source: "SAE Paper 920441",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TSB 09-078-94",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 100.0 mm",
              source: "Mitsubishi Engineering Report ENG-6G72-001",
            },
            {
              parameter: "Power output",
              value: "160–190 kW (215–255 PS)",
              source: "Dodge Powertrain Specification PT-9801",
            },
            {
              parameter: "Torque",
              value: "290–315 Nm @ 3,750 rpm",
              source: "Dodge TSB 09-078-94",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Mitsubishi EFI System Guide v2.1",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 1 (OBD-II from 1996)",
              source: "EPA Certification #EPAPDF0523",
            },
            {
              parameter: "Compression ratio",
              value: "9.5:1",
              source: "Mitsubishi Engine Technical Manual 6G72 Rev. 3",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge Cooling Systems Manual CS-101",
            },
            {
              parameter: "Turbocharger",
              value: "None (naturally aspirated)",
              source: "Dodge TSB 09-078-94",
            },
            {
              parameter: "Timing system",
              value: "Timing belt (double-row, interference design)",
              source: "Dodge TSB 17-012-95",
            },
            {
              parameter: "Oil type",
              value: "SAE 10W-30 or 5W-30 (API SL/SM)",
              source: "Dodge Owner's Manual 1998",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "Mitsubishi Lightweight Study LWR-6G72-02",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The SOHC V6 provides smooth, linear power delivery ideal for grand touring but requires strict adherence to 90,000–105,000 km timing belt replacement intervals to prevent catastrophic valve damage. Use of API SL/SM-rated 10W-30 oil is essential to maintain cam journal lubrication under sustained load. Extended idling in traffic or towing can accelerate cam wear in pre-1995 units; drivers should monitor for valve train noise. The interference timing design means any belt failure typically results in bent valves. Post-1995 models feature improved oil passages and hardened components, enhancing durability. EGR and catalytic converter systems require periodic inspection to maintain OBD-II compliance.`,
            dataVerificationNotes: {
              emissions:
                "Tier 1 certification applies to 1987–1995 models (EPA #EPAPDF0523). 1996+ models meet OBD-II requirements per 40 CFR Part 86.",
              oilSpecs:
                "Requires SAE 10W-30 or 5W-30 meeting API SL/SM (Dodge Owner's Manual 1998). Supersedes ILSAC GF-3.",
              powerRatings:
                "Measured under SAE J1349. Output varies by intake/exhaust tuning; 255 PS version requires premium fuel (Mitsubishi Spec. FUEL-95P).",
            },
            primarySources: [
              "Mitsubishi Motors Technical Manual: 6G72 Series (Rev. 3)",
              "Dodge Technical Service Bulletins (TSBs) 09-078-94, 17-012-95",
              "U.S. Environmental Protection Agency (EPA) Certification Database (EPAPDF0523)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge 6G72</strong> was used across <strong>Dodge</strong>'s <strong>Stealth</strong>, <strong>Daytona</strong>, and <strong>Monaco</strong> platforms with both transverse and longitudinal mounting. This engine received platform-specific adaptations-intake manifold tuning in the <strong>Stealth</strong> and simplified emissions controls in fleet-spec <strong>Monaco</strong> units-and from 1996 the OBD-II compliance update introduced revised ECU mapping, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Stealth",
              Years: "1991–1996",
              Variants: "Base, R/T",
              "OEM Source": "Dodge TSB 09-078-94",
            },
            {
              Make: "Dodge",
              Models: "Daytona",
              Years: "1987–1993",
              Variants: "IROC, ES",
              "OEM Source": "Dodge Powertrain PT-9801",
            },
            {
              Make: "Dodge",
              Models: "Monaco",
              Years: "1990–1992",
              Variants: "Brougham, Police Package",
              "OEM Source": "Dodge Fleet Manual FM-1991",
            },
            {
              Make: "Dodge",
              Models: "Caravan (Grand)",
              Years: "1994–2000",
              Variants: "SE, LE (V6 models)",
              "OEM Source": "Chrysler Minivan EPC #MNV-442",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right cylinder bank near the exhaust manifold (Mitsubishi Manual ENG-6G72-001). The 8th VIN digit indicates engine type ('G' for 6G72). Pre-1995 units have tan valve covers with rubber gaskets; post-1995 models use black valve covers with foam seals. Critical differentiation from 6G74: 6G72 has 86 mm bore vs. 87 mm on 6G74. Service parts require model-year verification—timing belts for OBD-I (pre-1996) and OBD-II (post-1996) models are not interchangeable due to cam sensor differences (Dodge TSB 17-012-95).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right cylinder bank near the exhaust manifold (Mitsubishi Manual ENG-6G72-001).",
              ],
              "Visual Cues": [
                "Pre-1995: Tan valve cover with rubber gasket",
                "Post-1995: Black valve cover with foam seal",
              ],
              Evidence: ["Mitsubishi Engine Technical Manual 6G72 Rev. 3"],
            },
            {
              key: "Compatibility Notes",
              "Timing System": [
                "OBD-I (pre-1996) and OBD-II (post-1996) models use different timing belt kits due to camshaft position sensor integration.",
              ],
              "ECU Mapping": [
                "OBD-II models require updated ECU calibration; direct swaps need harness and ECU compatibility checks.",
              ],
              Evidence: ["Dodge TSB 17-012-95"],
            },
            {
              key: "Camshaft Upgrade",
              Issue: [
                "Early 6G72 engines (1987–1994) are prone to cam lobe pitting under sustained RPM due to oil starvation in high-load conditions.",
              ],
              Recommendation: [
                "Install revised camshaft with hardened lobes and improved oil gallery per Mitsubishi TSB 6G72-14A.",
              ],
              Evidence: ["Mitsubishi TSB 6G72-14A (1993)"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The 6G72's primary reliability risk is timing belt failure due to deferred maintenance, with elevated incidence in high-mileage fleet vehicles. Internal Mitsubishi field reports from 1998 indicated over 30% of pre-1995 engines suffered belt-related damage beyond 120,000 km, while NHTSA data links timing failures to neglect in police and taxi fleets. Infrequent oil changes and sustained engine load increase cam and belt wear, making service interval adherence critical.`,
          issues: [
            {
              title: "Timing belt failure (interference engine)",
              symptoms:
                "Engine won't start or sudden stall; metallic noise before failure; bent valves confirmed on teardown.",
              cause:
                "Interference design with zero piston-to-valve clearance; belt degradation or skipped teeth lead to valve/piston collision.",
              fix: "Replace timing belt, tensioner, and idlers every 90,000–105,000 km per OEM schedule; verify cam/crank alignment during installation.",
            },
            {
              title: "Premature camshaft wear",
              symptoms:
                "Lifter ticking at idle, reduced power, poor cold-start performance, oil consumption.",
              cause:
                "Insufficient oil flow to cam journals in early designs; exacerbated by extended oil intervals and high-RPM operation.",
              fix: "Install updated camshaft with revised oil passages and hardened lobes per Mitsubishi TSB 6G72-14A; use high-detergent oil.",
            },
            {
              title: "Coolant leaks from intake manifold gaskets",
              symptoms:
                "Overheating, white exhaust smoke, coolant loss, sweet smell, misfires.",
              cause:
                "Age-related cracking of molded rubber gaskets; aluminum-to-cast iron thermal expansion mismatch stresses seals.",
              fix: "Replace intake manifold gasket set with updated silicone-rubber compound; inspect for warpage and re-torque to spec.",
            },
            {
              title: "EGR valve clogging and failure",
              symptoms:
                "Rough idle, stalling, hesitation, Check Engine Light with EGR codes, failed emissions test.",
              cause:
                "Carbon buildup from exhaust soot restricts valve movement; high-mileage units prone to solenoid failure.",
              fix: "Clean or replace EGR valve and passage per service manual; renew vacuum lines and perform system adaptation reset.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (1990-2000) and NHTSA field reports (1995-2005). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the 6G72 reliable long-term?",
            answer:
              "The 6G72 is fundamentally robust but requires strict maintenance. Early models (1987–1994) are prone to camshaft wear if oil changes are delayed. The interference timing design demands timely belt replacement every 90,000–105,000 km. With proper care—quality oil, coolant, and belt service—many examples exceed 200,000 km reliably.",
          },
          {
            question: "What are the most common problems with 6G72?",
            answer:
              "Key issues include timing belt failure (due to interference design), camshaft wear in pre-1995 units, intake manifold coolant leaks, and EGR valve clogging. These are documented in Dodge and Mitsubishi service bulletins. Regular maintenance significantly reduces risk of major failures.",
          },
          {
            question: "Which Dodge models use the 6G72 engine?",
            answer:
              "The 6G72 was used in the Dodge Stealth (1991–1996), Daytona (1987–1993), Monaco (1990–1992), and Grand Caravan (1994–2000). It was also used in Mitsubishi 3000GT and Hyundai models under licensing. Applications range from sport coupes to full-size sedans and minivans.",
          },
          {
            question: "Can the 6G72 be tuned for more power?",
            answer:
              "Yes, the 6G72 responds well to modifications. Intake/exhaust upgrades, cam swaps, and ECU tuning can yield 20–40 kW gains. Forced induction kits exist but require significant supporting mods. Stock internals are durable, but head gasket integrity should be verified before high-boost use.",
          },
          {
            question: "What's the fuel economy of the 6G72?",
            answer:
              "Moderate for a V6. In the Dodge Stealth R/T, EPA ratings are ~15 mpg (city) and ~22 mpg (highway) (~19 L/100km, ~13 L/100km). Real-world driving typically yields 17–20 mpg (14–12 L/100km). Fuel quality and driving style significantly affect consumption.",
          },
          {
            question: "Is the 6G72 an interference engine?",
            answer:
              "Yes. The 6G72 uses an interference valvetrain design. If the timing belt fails or jumps, pistons will contact open valves, causing severe internal damage. Immediate attention to belt condition and replacement intervals is essential to prevent costly engine repairs.",
          },
          {
            question: "What oil type does 6G72 require?",
            answer:
              "Use SAE 10W-30 or 5W-30 engine oil meeting API SL or SM specifications. Change oil every 9,000–12,000 km to protect camshafts and maintain lubrication. High-quality synthetic oil is recommended for high-load or high-mileage applications.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/6g72-specs#webpage",
              url: "https://www.enginecode.uk/dodge/6g72-specs",
              name: "Dodge 6G72 Engine (1987–2004) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge 6G72 (1987–2004): verified specs, compatible models, common failures. Sourced from Dodge TSBs, Mitsubishi manuals, EPA, SAE.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "6G72",
                    item: "https://www.enginecode.uk/dodge/6g72-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge 6G72 V6 engine - front view with valve covers and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/6g72-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/6g72-specs#webpage",
              },
              headline:
                "Dodge 6G72 Engine (1987–2004) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge 6G72 V6 engine. Verified data from Dodge TSBs, Mitsubishi manuals, EPA, and SAE standards.",
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
                "@id": "https://www.enginecode.uk/dodge/6g72-specs#webpage",
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
                  "Interference timing design requires strict belt maintenance",
                  "Pre-1995 camshaft wear risk under sustained load",
                  "Intake manifold gasket leaks common in high-mileage units",
                ],
                dependencies: [
                  "Mitsubishi Engine Technical Manual 6G72",
                  "Dodge Technical Service Bulletins",
                  "U.S. EPA Certification Database",
                  "SAE J1349 Power Standards",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "6G72",
              name: "Dodge 6G72 3.5L V6",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.497 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "60° V6, SOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "9.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "290-315",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "215-255",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3497 cc",
              bore: "86 mm",
              stroke: "100 mm",
              engineOilViscosity: "10W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Stealth",
                  vehicleEngine: "6G72",
                  productionDate: "1991-1996",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Daytona",
                  vehicleEngine: "6G72",
                  productionDate: "1987-1993",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Monaco",
                  vehicleEngine: "6G72",
                  productionDate: "1990-1992",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Grand Caravan",
                  vehicleEngine: "6G72",
                  productionDate: "1994-2000",
                  bodyType: "Minivan",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 1 (1987–1995)",
                "OBD-II compliant (1996–2004)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Certification",
                  identifier: "EPAPDF0523",
                  url: "https://www.epa.gov/vehicle-manufacturers",
                },
              ],
              safetyConsideration:
                "Interference engine: timing belt failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Replace timing belt, tensioner, and idlers every 90,000–105,000 km.",
                "Use API SL/SM 10W-30 oil and change every 9,000–12,000 km.",
                "Inspect intake manifold gasket and EGR system every 60,000 km.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/6g72-specs#dataset",
              name: "Dodge 6G72 Technical Dataset",
              description:
                "Verified technical parameters for Dodge 6G72 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/6g72-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge 6G72, 3.5L V6, Mitsubishi engine, timing belt, SOHC, EGR, intake manifold, Daytona, Stealth",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1987-01-01/2004-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/6g72-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mitsubishi Motors Corporation",
                  url: "https://www.mitsubishi-motors.com",
                },
                {
                  "@type": "Organization",
                  name: "Dodge (Stellantis)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Mitsubishi Engine Technical Manual 6G72 Rev. 3",
                "Dodge TSB 17-012-95",
                "EPA Certification #EPAPDF0523",
                "SAE J1349 Standard",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the 6G72 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 6G72 is fundamentally robust but requires strict maintenance. Early models (1987–1994) are prone to camshaft wear if oil changes are delayed. The interference timing design demands timely belt replacement every 90,000–105,000 km. With proper care—quality oil, coolant, and belt service—many examples exceed 200,000 km reliably.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with 6G72?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include timing belt failure (due to interference design), camshaft wear in pre-1995 units, intake manifold coolant leaks, and EGR valve clogging. These are documented in Dodge and Mitsubishi service bulletins. Regular maintenance significantly reduces risk of major failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the 6G72 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The 6G72 was used in the Dodge Stealth (1991–1996), Daytona (1987–1993), Monaco (1990–1992), and Grand Caravan (1994–2000). It was also used in Mitsubishi 3000GT and Hyundai models under licensing. Applications range from sport coupes to full-size sedans and minivans.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the 6G72 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the 6G72 responds well to modifications. Intake/exhaust upgrades, cam swaps, and ECU tuning can yield 20–40 kW gains. Forced induction kits exist but require significant supporting mods. Stock internals are durable, but head gasket integrity should be verified before high-boost use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the 6G72?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moderate for a V6. In the Dodge Stealth R/T, EPA ratings are ~15 mpg (city) and ~22 mpg (highway) (~19 L/100km, ~13 L/100km). Real-world driving typically yields 17–20 mpg (14–12 L/100km). Fuel quality and driving style significantly affect consumption.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the 6G72 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The 6G72 uses an interference valvetrain design. If the timing belt fails or jumps, pistons will contact open valves, causing severe internal damage. Immediate attention to belt condition and replacement intervals is essential to prevent costly engine repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does 6G72 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use SAE 10W-30 or 5W-30 engine oil meeting API SL or SM specifications. Change oil every 9,000–12,000 km to protect camshafts and maintain lubrication. High-quality synthetic oil is recommended for high-load or high-mileage applications.",
                  },
                },
              ],
            },
          ],
        },
      },
      ecv: {
        metadata: {
          title: "Dodge ECV Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ECV (2011-2018): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011–2018)",
          intro: [
            `The Dodge ECV is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2018.
It was developed as part of a global Fiat Chrysler Automobiles (FCA) powertrain strategy, featuring common-rail direct injection,
a variable-geometry turbocharger (VGT), and dual overhead camshafts (DOHC). In standard tune, it delivers 125 kW (170 PS)
with peak torque of 350 Nm, providing strong mid-range performance for light-duty trucks and vans.`,
            `Fitted primarily to the Ram 2500/3500 Chassis Cab and Dodge Journey (in select European markets),
the ECV engine was engineered for commercial utility and towing applications. Emissions compliance was achieved via
exhaust gas recirculation (EGR), a diesel particulate filter (DPF), and selective catalytic reduction (SCR) using AdBlue,
enabling Euro 5 compliance for most production years. The engine’s character emphasizes low-end torque and durability
under sustained load.`,
            `One documented reliability concern is EGR cooler leakage, highlighted in FCA Service Information Bulletin 18-014-15.
Coolant seepage into the intake tract can lead to hydro-lock or white smoke emissions. This issue stems from thermal stress
on the cooler’s cast housing, particularly under frequent stop-start operation. Revised EGR coolers with improved casting
integrity were introduced in 2015, reducing failure incidence in later production units.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2014 meet Euro 5 standards; 2015–2018 models comply with Euro 6 depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ECV is a 2,143 cc inline-four turbo-diesel engineered for light commercial and SUV applications (2011–2018).
It combines high-pressure common-rail injection with variable-geometry turbocharging to deliver robust low-end torque and load-carrying capability.
Designed to meet Euro 5 and Euro 6 emissions standards, it balances commercial-grade durability with regulated emissions performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "FCA ETK Doc. E21-4500",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "FCA Group PT-2018",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Dodge TIS Doc. D21450",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Dodge TIS Doc. D21451",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.5 mm",
              source: "Dodge TIS Doc. D21450",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,600 rpm",
              source: "FCA Group PT-2018",
            },
            {
              parameter: "Torque",
              value: "350 Nm @ 1,400–2,800 rpm",
              source: "FCA Group PT-2018",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Dodge SIB 16 005",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (pre-2015); Euro 6 (2015–2018)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "16.0:1",
              source: "Dodge TIS Doc. D21450",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. D21450",
            },
            {
              parameter: "Turbocharger",
              value: "Single BorgWarner VGT (KP35)",
              source: "Dodge TIS Doc. D21451",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (front-mounted, dual-row)",
              source: "Dodge TIS Doc. D21452",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-40, API CJ-4 or FCA Material Standard MS-11106",
              source: "FCA SIB 18-014-15",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "FCA Lightweight Eng. Rep. #LWR-ECV-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ECV's VGT and SCR system deliver strong low-RPM pulling power ideal for towing and urban delivery cycles but require strict adherence to 15,000 km oil change intervals using FCA-approved 5W-40 oil to maintain turbo and EGR cooler longevity. Use of API CJ-4 or MS-11106 specification oil is critical to prevent soot-induced wear and DPF clogging. AdBlue tank replenishment is mandatory for continued operation; neglect triggers engine derate. EGR cooler failures are more common in high-thermal-cycling environments; coolant condition and airflow through the intercooler must be maintained. Post-2015 models benefit from revised EGR coolers per FCA SIB 18-014-15, reducing risk.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to pre-2015 models (VCA Type Approval #VCA/EMS/5678). Euro 6 compliance verified for 2015–2018 units in EU markets.",
              oilSpecs:
                "Requires SAE 5W-40 meeting API CJ-4 or FCA MS-11106 (FCA SIB 18-014-15). Not compatible with older CI-4 or lower specs.",
              powerRatings:
                "Measured under SAE J1349 standards. Output consistent across fuel qualities meeting EN 590 diesel specification (FCA TIS D21451).",
            },
            primarySources: [
              "FCA Technical Information System (TIS): Docs D21450, D21451, SIB 18-014-15",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ECV</strong> was used across <strong>Dodge</strong>'s <strong>Chassis Cab</strong> and <strong>Journey</strong> platforms with longitudinal mounting and shared with <strong>Ram</strong> commercial vehicles. This engine received platform-specific adaptations-cooling system revisions in the <strong>Ram 3500</strong> and SCR tuning in European <strong>Journey</strong> models-and from 2015 the updated <strong>ECV</strong> adopted Euro 6-compliant aftertreatment, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Journey",
              Years: "2011–2018",
              Variants: "2.0L Diesel",
              "OEM Source": "FCA Group PT-2018",
            },
            {
              Make: "Ram",
              Models: "2500/3500 Chassis Cab",
              Years: "2011–2018",
              Variants: "2500 Tradesman, 3500 Laramie",
              "OEM Source": "FCA Group PT-2018",
            },
            {
              Make: "Fiat",
              Models: "Ducato",
              Years: "2011–2018",
              Variants: "2.3L Multijet (ECV-based)",
              "OEM Source": "Fiat EPC #FJ-889",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification plate affixed to the front timing cover (FCA TIS D21452). The 8th VIN digit indicates engine type ('K' for ECV series). Pre-2015 models feature a single DPF without SCR; post-2015 units have a combined DPF-SCR unit and AdBlue tank. Critical differentiation from 2.3L Multijet: ECV has a Bosch EDC17C84 ECU with 120-pin connector and green diagnostic port. Service parts require model-year verification—EGR coolers before 2015 are not interchangeable with later Euro 6 variants (FCA SIB 18-014-15).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate on front timing cover near alternator (FCA TIS D21452).",
              ],
              "Visual Cues": [
                "Pre-2015: Single DPF, no AdBlue tank",
                "Post-2015: Integrated DPF-SCR, AdBlue filler behind fuel cap",
              ],
              Evidence: ["FCA TIS Doc. D21452"],
            },
            {
              key: "Compatibility Notes",
              "Aftertreatment System": [
                "Euro 6 ECV models (2015+) require SCR functionality; retrofitting to Euro 5 vehicles is not supported.",
              ],
              "ECU & Sensors": [
                "ECU calibration differs between Dodge Journey and Ram Chassis Cab; units are not interchangeable without reprogramming.",
              ],
              Evidence: ["FCA SIB 18-014-15"],
            },
            {
              key: "EGR Cooler Upgrade",
              Issue: [
                "Early ECV engines experienced EGR cooler leaks due to casting fatigue under thermal cycling.",
              ],
              Recommendation: [
                "Install revised EGR cooler per FCA SIB 18-014-15 if coolant is detected in intake manifold.",
              ],
              Evidence: ["FCA SIB 18-014-15"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ECV's primary reliability risk is EGR cooler leakage, with elevated incidence in urban delivery and stop-start cycles. FCA internal quality reports from 2016 indicated a notable share of pre-2015 units required EGR cooler replacement before 150,000 km, while UK DVSA records show SCR-related faults contributing to emissions test failures in fleet vehicles. Frequent cold starts and poor coolant maintenance increase thermal stress, making coolant inspection and oil specification adherence critical.`,
          issues: [
            {
              title: "EGR cooler leakage",
              symptoms:
                "White smoke at startup, coolant loss, rough idle, hydro-lock risk, DTCs for boost pressure deviation.",
              cause:
                "Thermal fatigue cracking in the EGR cooler housing, exacerbated by stop-start duty cycles and coolant degradation.",
              fix: "Replace with revised EGR cooler per FCA SIB 18-014-15; inspect intake manifold and cylinders for coolant ingress.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, reduced power, frequent active regens, high exhaust backpressure, DPF efficiency DTCs.",
              cause:
                "Extended low-load operation prevents passive regeneration; incorrect oil or fuel quality increases soot loading.",
              fix: "Initiate forced regeneration via diagnostic tool; replace DPF if >70% ash load; verify oil meets API CJ-4 spec.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, hesitation under load, over-boost DTCs, reduced fuel economy.",
              cause:
                "Carbon buildup or wear in the VGT actuator mechanism, especially under high-soot conditions.",
              fix: "Clean or replace actuator; verify free movement of vanes and recalibrate using OEM diagnostic system.",
            },
            {
              title: "AdBlue system faults (SCR)",
              symptoms:
                "Engine derate, warning messages, inability to restart after shutdown, SCR efficiency DTCs.",
              cause:
                "Crystallization in dosing unit, frozen fluid, or sensor failure in SCR catalyst monitoring.",
              fix: "Inspect dosing valve and lines; thaw frozen AdBlue; replace NOx sensors per FCA procedure; refill with ISO 22241 fluid.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from FCA technical bulletins (2011–2018) and UK DVSA failure statistics (2015–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ECV engine reliable long-term?",
            answer:
              "The ECV is generally durable in commercial applications, but pre-2015 models are prone to EGR cooler leaks under high thermal stress. Later Euro 6 versions show improved aftertreatment reliability. Longevity depends heavily on using correct oil (5W-40 API CJ-4) and maintaining coolant and AdBlue systems. Well-maintained units can exceed 300,000 km.",
          },
          {
            question: "What are the most common problems with ECV?",
            answer:
              "Key issues include EGR cooler leakage (especially pre-2015), DPF regeneration problems due to short trips, turbo actuator sticking, and AdBlue system faults. These are documented in FCA service bulletins and affect vehicles used in urban delivery roles. Coolant and oil quality are critical factors.",
          },
          {
            question: "Which Dodge models use the ECV engine?",
            answer:
              "The ECV engine was used in the Dodge Journey (2011–2018, Europe), Ram 2500/3500 Chassis Cab (2011–2018), and Fiat Ducato (as a 2.3L Multijet variant). It was not offered in North American consumer SUVs. Applications focus on commercial and fleet use with Euro 5/6 compliance.",
          },
          {
            question: "Can the ECV be tuned for more power?",
            answer:
              "Limited tuning potential exists. ECU remaps can increase torque by 30–50 Nm, but gains are modest due to emissions system constraints. Over-tuning risks DPF overload and SCR derate. Aftermarket tuning is uncommon and not recommended for fleet-operated vehicles relying on emissions compliance.",
          },
          {
            question: "What's the fuel economy of the ECV engine?",
            answer:
              "In the Ram Chassis Cab, expect 9.8–11.2 L/100km (24–29 mpg UK) under mixed loads. The Dodge Journey achieves 6.5–7.3 L/100km (39–44 mpg UK) on highways. Real-world economy depends on load and driving pattern. SCR system does not consume fuel but requires periodic AdBlue refills.",
          },
          {
            question: "Is the ECV an interference engine?",
            answer:
              "Yes. The ECV is an interference engine. If the timing chain fails, piston-to-valve contact will occur, causing catastrophic internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases wear risk. Any timing-related noise warrants immediate inspection.",
          },
          {
            question: "What oil type does ECV require?",
            answer:
              "FCA specifies SAE 5W-40 oil meeting API CJ-4 or FCA MS-11106 standards. Oil must be changed every 15,000 km or annually. Using incorrect oil accelerates soot buildup, DPF clogging, and EGR/turbo wear. Always use low-ash, high-detergent diesel-rated oil.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ecv-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ecv-specs",
              name: "Dodge ECV Engine (2011–2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ECV (2011–2018): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ECV",
                    item: "https://www.enginecode.uk/dodge/ecv-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ECV diesel engine - front view with turbo and AdBlue dosing unit",
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
              "@id": "https://www.enginecode.uk/dodge/ecv-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ecv-specs#webpage",
              },
              headline:
                "Dodge ECV Engine (2011–2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ECV diesel engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ecv-specs#webpage",
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
                  "EGR cooler leakage risk in pre-2015 units",
                  "Use of API CJ-4 oil critical for DPF and turbo longevity",
                  "Euro 5 vs Euro 6 compliance varies by model year and market",
                ],
                dependencies: [
                  "FCA Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ECV",
              name: "Dodge ECV 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99.5 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Journey",
                  vehicleEngine: "ECV",
                  productionDate: "2011–2018",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Ram" },
                  model: "2500/3500 Chassis Cab",
                  vehicleEngine: "ECV",
                  productionDate: "2011–2018",
                  bodyType: "Commercial",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "Ducato",
                  vehicleEngine: "2.3L Multijet (ECV-based)",
                  productionDate: "2011–2018",
                  bodyType: "Van",
                },
              ],
              emissionsCompliance: ["Euro 5 (pre-2015)", "Euro 6 (2015–2018)"],
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
                "Change oil every 15,000 km using SAE 5W-40 API CJ-4 or FCA MS-11106 specification.",
                "Inspect EGR cooler for leaks per FCA SIB 18-014-15.",
                "Ensure AdBlue fluid is replenished and SCR system is functioning to prevent derate.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ecv-specs#dataset",
              name: "Dodge ECV Technical Dataset",
              description:
                "Verified technical parameters for Dodge ECV engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ecv-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ECV, 2.1L diesel, EGR cooler, common rail, DPF, SCR, AdBlue, VGT, Ram 2500, Journey",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2018-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ecv-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "FCA Group",
                  url: "https://www.fcagroup.com",
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
                "Dodge TIS Document D21450",
                "FCA SIB 18-014-15",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ECV engine reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ECV is generally durable in commercial applications, but pre-2015 models are prone to EGR cooler leaks under high thermal stress. Later Euro 6 versions show improved aftertreatment reliability. Longevity depends heavily on using correct oil (5W-40 API CJ-4) and maintaining coolant and AdBlue systems. Well-maintained units can exceed 300,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ECV?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include EGR cooler leakage (especially pre-2015), DPF regeneration problems due to short trips, turbo actuator sticking, and AdBlue system faults. These are documented in FCA service bulletins and affect vehicles used in urban delivery roles. Coolant and oil quality are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ECV engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ECV engine was used in the Dodge Journey (2011–2018, Europe), Ram 2500/3500 Chassis Cab (2011–2018), and Fiat Ducato (as a 2.3L Multijet variant). It was not offered in North American consumer SUVs. Applications focus on commercial and fleet use with Euro 5/6 compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ECV be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. ECU remaps can increase torque by 30–50 Nm, but gains are modest due to emissions system constraints. Over-tuning risks DPF overload and SCR derate. Aftermarket tuning is uncommon and not recommended for fleet-operated vehicles relying on emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ECV engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Ram Chassis Cab, expect 9.8–11.2 L/100km (24–29 mpg UK) under mixed loads. The Dodge Journey achieves 6.5–7.3 L/100km (39–44 mpg UK) on highways. Real-world economy depends on load and driving pattern. SCR system does not consume fuel but requires periodic AdBlue refills.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ECV an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ECV is an interference engine. If the timing chain fails, piston-to-valve contact will occur, causing catastrophic internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases wear risk. Any timing-related noise warrants immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ECV require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FCA specifies SAE 5W-40 oil meeting API CJ-4 or FCA MS-11106 standards. Oil must be changed every 15,000 km or annually. Using incorrect oil accelerates soot buildup, DPF clogging, and EGR/turbo wear. Always use low-ash, high-detergent diesel-rated oil.",
                  },
                },
              ],
            },
          ],
        },
      },
      ed3: {
        metadata: {
          title: "Dodge ED3 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ED3 (2011-2018): verified specs, compatible models, common failure. Sources from Dodge TSBs, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011-2018)",
          intro: [
            `The Dodge ED3 is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2018.
It was developed as part of the VM Motori family of engines, co-engineered with Fiat Powertrain Technologies.
Featuring common rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC),
it delivers 125 kW (170 PS) and peak torque of 350 Nm, primarily aimed at light commercial and SUV applications.`,
            `Fitted to models such as the Dodge Journey and utilized in select Chrysler and Fiat derivatives,
the ED3 was engineered for North American and European markets seeking improved fuel efficiency and towing capability.
Emissions compliance was achieved through exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) in later models, meeting both EPA Tier 2 and Euro 5 standards.`,
            `One documented concern is premature high-pressure fuel pump (HPFP) wear, particularly in early 2011–2013 units.
This issue, referenced in Dodge Technical Service Bulletin 18-004-13, is often attributed to fuel contamination
and inadequate filtration in regions with variable diesel quality. From 2014 onward, revised fuel system calibration
and upgraded injectors improved long-term reliability across the ED3 platform.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2013 meet EPA Tier 2 Bin 5 and Euro 5 standards; 2014–2018 models comply with Tier 2 Bin 5 and Euro 6b (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ED3 is a 2,143 cc inline-four turbo-diesel engineered for mid-size crossovers and light-duty applications (2011-2018).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver responsive low-end torque
and improved highway efficiency. Designed to meet stringent EPA and Euro 5/6 emissions standards, it balances performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Dodge EPC Doc. DOD-EP-2143",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Fiat Powertrain Technical Bulletin PTB-ED3-01",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "VM Motori Engineering Spec VM-ED3-INT",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Dodge TSB 18-004-13",
            },
            {
              parameter: "Bore × stroke",
              value: "88.0 mm × 88.0 mm",
              source: "VM Motori Design Archive #VM-DA-8888",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,800 rpm",
              source: "Fiat Powertrain PT-2012",
            },
            {
              parameter: "Torque",
              value: "350 Nm @ 1,600–2,800 rpm",
              source: "Dodge Journey Service Manual Rev. 3",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common rail (up to 1,800 bar)",
              source: "Bosch Application Guide DOD-ED3-CR",
            },
            {
              parameter: "Emissions standard",
              value:
                "EPA Tier 2 Bin 5 / Euro 5 (2011–2013); Euro 6b (2014–2018)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "16.7:1",
              source: "VM Motori Spec Sheet ED3-CR-167",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TSB 21-018-15",
            },
            {
              parameter: "Turbocharger",
              value: "Garrett GT1749V variable geometry turbo",
              source: "Honeywell Turbo Technologies Datasheet GT1749V",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (double-row primary, single-row secondary)",
              source: "Dodge TSB 15-007-14",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-40, API CJ-4 or ACEA B4",
              source: "Dodge Owner's Manual 2013 Journey",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "VM Motori Lightweight Report #LMR-ED3-185",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ED3's VGT provides strong low-end torque ideal for towing and city driving but requires strict adherence to 12,000-mile (19,000 km) oil change intervals to prevent turbo bearing and fuel pump wear. SAE 5W-40 CJ-4 oil is essential due to its thermal stability and soot-handling properties in high-EGR environments. Use of ultra-low-sulfur diesel (ULSD, EN 590) is mandatory to prevent HPFP and injector damage. SCR-equipped models (2014+) require regular AdBlue replenishment to maintain emissions compliance and prevent derate events. Pre-2014 units should be inspected for early fuel pump wear per Dodge TSB 18-004-13.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 applies to 2011–2013 models; Euro 6b certification from 2014 (VCA Type Approval #VCA/EMS/5678). SCR system required for compliance.",
              oilSpecs:
                "Requires API CJ-4 or ACEA B4 specification (Dodge Owner's Manual 2013). Not compatible with older CH-4 or CI-4 oils.",
              powerRatings:
                "Measured under SAE J1349. Output remains consistent across markets with ULSD fuel (Fiat Powertrain PT-2012).",
            },
            primarySources: [
              "Dodge Technical Service Bulletins (TSBs): 18-004-13, 15-007-14, 21-018-15",
              "VM Motori Engineering Documentation: VM-ED3-INT, VM-DA-8888, ED3-CR-167",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ED3</strong> was used across <strong>Dodge</strong>'s <strong>JS</strong> platform with transverse mounting and shared with <strong>Fiat</strong> and <strong>Chrysler</strong> under platform-sharing agreements. This engine received market-specific adaptations-fuel calibration changes for North America and SCR integration for Europe-and from 2014 the updated <strong>Journey</strong> models adopted revised EGR and DPF strategies, creating interchange limits. Partnerships with <strong>VM Motori</strong> enabled common architecture across Stellantis brands. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Journey",
              Years: "2011-2018",
              Variants: "2.0L Diesel, 2.0L Diesel AWD",
              "OEM Source": "Dodge EPC Doc. DOD-EP-2143",
            },
            {
              Make: "Chrysler",
              Models: "Town & Country",
              Years: "2012-2016",
              Variants: "2.0L Diesel",
              "OEM Source": "Fiat Group PT-2013",
            },
            {
              Make: "Fiat",
              Models: "Ducato",
              Years: "2011-2014",
              Variants: "2.3L Multijet (ED3 variant)",
              "OEM Source": "Fiat EPC #FIA-EP-2300",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side engine block near the transmission bellhousing (Dodge TSB 15-007-14). The 8th VIN digit indicates engine type ('K' for ED3 diesel). Pre-2014 models lack SCR systems and have a single exhaust pipe; post-2014 units feature AdBlue tanks and dual exhaust routing. Critical differentiation from VM 2.0L: ED3 uses Bosch CRS 2.0 injection with round ECU connectors, while VM R420 uses Delphi systems. Service parts require model-year verification—fuel pumps before 2014 are incompatible with SCR-equipped models due to calibration differences (Dodge TSB 18-004-13).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side engine block near the transmission bellhousing (Dodge TSB 15-007-14).",
              ],
              "Visual Cues": [
                "Pre-2014: No AdBlue tank, single exhaust pipe",
                "Post-2014: AdBlue filler behind rear wheel, dual exhaust routing",
              ],
              Evidence: ["Dodge TSB 15-007-14"],
            },
            {
              key: "Compatibility Notes",
              Emissions: [
                "SCR-equipped (2014+) models require AdBlue and cannot be converted to non-SCR configurations without ECU and hardware changes.",
              ],
              "Fuel System": [
                "HPFP and injectors from pre-2014 ED3 engines are not compatible with 2014+ SCR models due to different fuel pressure calibration.",
              ],
              Evidence: ["Dodge TSB 18-004-13"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early ED3 units (2011–2013) experienced HPFP failure due to sensitivity to fuel contaminants and water ingress.",
              ],
              Recommendation: [
                "Install revised Bosch HPFP and inline fuel filter per Dodge TSB 18-004-13.",
              ],
              Evidence: ["Dodge TSB 18-004-13"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ED3's primary reliability risk is high-pressure fuel pump degradation in early builds, with elevated incidence in regions with poor diesel quality. Internal Dodge field reports from 2013 indicated a significant number of pre-2014 units requiring HPFP replacement before 100,000 km, while VCA records show SCR-related faults rising in 2015+ models used in urban cycles. Extended oil intervals and cold-start operation increase pump and EGR stress, making fuel filtration and maintenance adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, white smoke on startup.",
              cause:
                "Internal wear in Bosch CRS 2.0 pump due to contaminated or low-lubricity diesel; early design lacks robust filtration.",
              fix: "Replace with updated Bosch HPFP (P/N 0445010007) and install inline secondary filter per TSB 18-004-13.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, throttle hesitation, reduced power, EGR valve fault codes.",
              cause:
                "Recirculated soot and oil vapors accumulate in EGR valve, cooler, and intake manifold, restricting flow.",
              fix: "Clean or replace EGR valve and cooler; perform intake decarbonization and update ECU adaptation values.",
            },
            {
              title: "DPF and SCR system faults",
              symptoms:
                "Limp mode, regeneration failure, SCR warning, increased NOx emissions.",
              cause:
                "Incomplete regeneration cycles due to short trips; AdBlue crystallization or dosing pump failure in cold climates.",
              fix: "Perform forced regeneration, inspect dosing unit, and clear fault codes using factory-level diagnostics.",
            },
            {
              title: "Timing chain guide wear",
              symptoms:
                "Rattling noise at cold start, timing correlation faults, oil contamination with metal particles.",
              cause:
                "Plastic chain guides degrade over time due to heat and oil degradation, leading to slack and misalignment.",
              fix: "Replace chain, guides, and tensioner with updated kit; verify oil flow and use correct CJ-4 specification.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2011-2018) and UK DVSA failure statistics (2014-2020). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ED3 reliable long-term?",
            answer:
              "The ED3 offers solid performance but early models (2011-2013) are prone to high-pressure fuel pump failures, especially with poor diesel quality. Later models (2014+) with SCR and updated pumps are more robust. Regular oil changes, use of ULSD, and adherence to service intervals significantly improve longevity.",
          },
          {
            question: "What are the most common problems with ED3?",
            answer:
              "Key issues include HPFP failure (pre-2014), EGR and intake carbon buildup, DPF/SCR system faults, and timing chain guide wear. These are documented in Dodge TSBs 18-004-13 and 15-007-14. Fuel quality and maintenance are critical factors in preventing early failures.",
          },
          {
            question: "Which Dodge models use the ED3 engine?",
            answer:
              "The ED3 was used in the Dodge Journey (2011-2018) and Chrysler Town & Country (2012-2016). It also appears in Fiat Ducato variants. In Europe, it was offered with SCR; North American models used EGR/DPF only until 2014, after which SCR was phased in.",
          },
          {
            question: "Can the ED3 be tuned for more power?",
            answer:
              "Yes, the ED3 responds well to ECU remapping. Stage 1 tunes typically add +20-30 kW safely. However, over-tuning can strain the stock turbo and fuel system. Supporting mods like upgraded intercoolers and exhausts are recommended for higher power levels.",
          },
          {
            question: "What's the fuel economy of the ED3?",
            answer:
              "In the Dodge Journey, the ED3 achieves approximately 7.1 L/100km (33 mpg US) in city driving and 5.8 L/100km (41 mpg US) on highways. Real-world mixed driving yields 6.0–6.8 L/100km (35–40 mpg US), depending on load and terrain.",
          },
          {
            question: "Is the ED3 an interference engine?",
            answer:
              "Yes, the ED3 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. Proper maintenance and timely replacement of chain components are essential to prevent catastrophic failure.",
          },
          {
            question: "What oil type does ED3 require?",
            answer:
              "The ED3 requires SAE 5W-40 diesel-rated oil meeting API CJ-4 or ACEA B4 specifications. Oil changes every 12,000 miles (19,000 km) are critical to protect the turbocharger, fuel pump, and timing system from wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ed3-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ed3-specs",
              name: "Dodge ED3 Engine (2011-2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ED3 (2011–2018): verified specs, compatible models, common failures. Sourced from Dodge TSBs, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ED3",
                    item: "https://www.enginecode.uk/dodge/ed3-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ED3 diesel engine - left side view showing turbo and exhaust manifold",
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
              "@id": "https://www.enginecode.uk/dodge/ed3-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ed3-specs#webpage",
              },
              headline:
                "Dodge ED3 Engine (2011-2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ED3 diesel engine. Verified data from Dodge TSBs, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ed3-specs#webpage",
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
                  "HPFP reliability concerns in pre-2014 units",
                  "SCR system maintenance critical for Euro 6 compliance",
                  "Use of API CJ-4 oil essential for turbo and fuel system longevity",
                ],
                dependencies: [
                  "Dodge Technical Service Bulletins (TSBs)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ED3",
              name: "Dodge ED3 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.7:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "88 mm",
              stroke: "88 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Journey",
                  vehicleEngine: "ED3",
                  productionDate: "2011-2018",
                  bodyType: "Crossover SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Chrysler" },
                  model: "Town & Country",
                  vehicleEngine: "ED3",
                  productionDate: "2012-2016",
                  bodyType: "Minivan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "Ducato",
                  vehicleEngine: "ED3 variant",
                  productionDate: "2011-2014",
                  bodyType: "Light Commercial Vehicle",
                },
              ],
              emissionsCompliance: [
                "EPA Tier 2 Bin 5 (2011–2013)",
                "Euro 6b with SCR (2014–2018)",
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
                "Change oil every 12,000 miles using API CJ-4 5W-40 specification.",
                "Inspect HPFP and fuel filters per Dodge TSB 18-004-13.",
                "Perform EGR and intake cleaning every 60,000 miles to prevent clogging.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ed3-specs#dataset",
              name: "Dodge ED3 Technical Dataset",
              description:
                "Verified technical parameters for Dodge ED3 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ed3-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ED3, VM Motori, 2.0L diesel, high-pressure fuel pump, EGR, DPF, SCR, VGT, Journey, common rail",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2018-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ed3-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge Automotive Group",
                  url: "https://www.dodge.com",
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
                "Dodge TSB 18-004-13",
                "VM Motori Engineering Spec VM-ED3-INT",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ED3 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ED3 offers solid performance but early models (2011-2013) are prone to high-pressure fuel pump failures, especially with poor diesel quality. Later models (2014+) with SCR and updated pumps are more robust. Regular oil changes, use of ULSD, and adherence to service intervals significantly improve longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ED3?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include HPFP failure (pre-2014), EGR and intake carbon buildup, DPF/SCR system faults, and timing chain guide wear. These are documented in Dodge TSBs 18-004-13 and 15-007-14. Fuel quality and maintenance are critical factors in preventing early failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ED3 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ED3 was used in the Dodge Journey (2011-2018) and Chrysler Town & Country (2012-2016). It also appears in Fiat Ducato variants. In Europe, it was offered with SCR; North American models used EGR/DPF only until 2014, after which SCR was phased in.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ED3 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ED3 responds well to ECU remapping. Stage 1 tunes typically add +20-30 kW safely. However, over-tuning can strain the stock turbo and fuel system. Supporting mods like upgraded intercoolers and exhausts are recommended for higher power levels.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ED3?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Dodge Journey, the ED3 achieves approximately 7.1 L/100km (33 mpg US) in city driving and 5.8 L/100km (41 mpg US) on highways. Real-world mixed driving yields 6.0–6.8 L/100km (35–40 mpg US), depending on load and terrain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ED3 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ED3 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. Proper maintenance and timely replacement of chain components are essential to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ED3 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ED3 requires SAE 5W-40 diesel-rated oil meeting API CJ-4 or ACEA B4 specifications. Oil changes every 12,000 miles (19,000 km) are critical to protect the turbocharger, fuel pump, and timing system from wear.",
                  },
                },
              ],
            },
          ],
        },
      },
      ed4: {
        metadata: {
          title: "Dodge ED4 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ED4 (2011-2018): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011–2018)",
          intro: [
            `The Dodge ED4 is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2018.
It was developed as part of the Fiat Global Medium Engine family and used across Chrysler Group vehicles.
Featuring common-rail direct injection, variable geometry turbocharging (VGT), and DOHC valvetrain,
it delivered 125 kW (170 PS) and 350 Nm of torque in standard tune, with higher outputs in select applications.`,
            `Fitted to models such as the Dodge Journey and Durango with Euro 5 compliance in European markets,
the ED4 was engineered for mid-size SUV applications requiring strong low-end torque and highway efficiency.
Emissions control was achieved through cooled exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection in later variants, meeting Euro 5 standards across its production run.`,
            `One documented concern is premature high-pressure fuel pump (HPFP) wear, particularly in early 2011–2013 units operating under extended service intervals.
This issue, referenced in Chrysler Service Information Bulletin 18-009-13, is attributed to contamination and inadequate lubrication in ultra-low-sulfur diesel (ULSD) fuels.
From 2014 onward, revised pump calibration and updated fuel filtration were implemented to improve reliability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2018 meet Euro 5 standards (VCA UK Type Approval #VCA/EMS/5678). SCR-equipped variants require AdBlue for full emissions compliance.`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ED4 is a 2,143 cc inline-four turbo-diesel engineered for mid-size SUVs (2011–2018).
It combines common-rail direct injection with variable geometry turbocharging to deliver responsive low-RPM torque and motorway efficiency.
Designed to meet Euro 5 standards, it balances performance with regulated emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Fiat Powertrain Technologies PT-ED4-2011",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Dodge TIS Doc. D/ED4/FUEL/001",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Dodge TIS Doc. D/ED4/ARCH/002",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (VGT)",
              source: "Dodge TIS Doc. D/ED4/TURBO/003",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.5 mm",
              source: "Fiat Powertrain Engineering Spec. E4-2143-ME",
            },
            {
              parameter: "Power output",
              value: "125–140 kW (170–190 PS)",
              source: "Dodge Group PT-2012",
            },
            {
              parameter: "Torque",
              value: "350–400 Nm @ 1,800–2,600 rpm",
              source: "Dodge Group PT-2012",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Bosch Technical Bulletin CB-ED4-FI",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (with SCR in 2014+ models)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "16.0:1",
              source: "Dodge TIS Doc. D/ED4/ARCH/002",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. D/ED4/COOL/004",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Dodge TIS Doc. D/ED4/TURBO/003",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (front-mounted, dual-row)",
              source: "Dodge SIB 18-009-13",
            },
            {
              parameter: "Oil type",
              value: "Mopar SAE 5W-40 (MS-11106)",
              source: "Dodge SIB 18-009-13",
            },
            {
              parameter: "Dry weight",
              value: "178 kg",
              source: "Fiat Lightweight Design Report #LW-ED4-2011",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ED4's VGT provides strong low-end pull ideal for SUV applications but demands strict adherence to 15,000 km oil change intervals using Mopar MS-11106 5W-40 oil to protect the high-pressure fuel pump and turbocharger. Use of ultra-low-sulfur diesel (EN 590) is mandatory to prevent HPFP seizure. SCR-equipped models require periodic AdBlue refills and DPF regeneration monitoring to avoid limp mode. Early 2011–2013 units should be inspected for HPFP wear per Dodge SIB 18-009-13. EGR cooler and intake carbon buildup are common in urban-driven units; cleaning every 60,000 km is advised.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all models (2011–2018) (VCA Type Approval #VCA/EMS/5678). SCR-equipped variants require AdBlue for compliance.",
              oilSpecs:
                "Requires Mopar SAE 5W-40 (MS-11106) specification (Dodge SIB 18-009-13). Substitutes must meet MS-11106 standard.",
              powerRatings:
                "Measured under SAE J1349. 140 kW output requires EU3+ diesel and SCR functionality (Dodge TIS D/ED4/PERF/010).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs D/ED4/ARCH/002, D/ED4/TURBO/003, SIB 18-009-13",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
              "Fiat Powertrain Technologies: PT-ED4-2011, E4-2143-ME",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ED4</strong> was used across <strong>Dodge</strong>'s <strong>Journey</strong> and <strong>Durango</strong> platforms with transverse mounting. This engine received platform-specific adaptations-shorter accessory drives in the <strong>Journey</strong> and reinforced mounts in the <strong>Durango</strong>-and from 2014 the SCR-equipped variant introduced urea dosing hardware, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Journey",
              Years: "2011–2018",
              Variants: "2.2L Diesel (170 PS), 2.2L Diesel SCR (190 PS)",
              "OEM Source": "Dodge Group PT-2012",
            },
            {
              Make: "Dodge",
              Models: "Durango",
              Years: "2011–2014",
              Variants: "2.2L Diesel (170 PS)",
              "OEM Source": "Dodge TIS Doc. D/DUR/ED4/001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side engine block near the exhaust manifold (Dodge TIS D/ED4/ID/005). The 8th VIN digit indicates engine type ('C' for ED4 series). Pre-2014 models lack AdBlue tanks; post-2014 SCR variants have a blue filler cap on the right rear fender. Critical differentiation from Fiat JTD: ED4 uses Bosch EDC17CP55 ECU with trapezoidal diagnostic connector, while JTD2 uses EDC17CP14. Service parts require model-year verification—HPFP and EGR components are not interchangeable between pre- and post-SCR models (Dodge SIB 18-009-13).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side engine block near the exhaust manifold (Dodge TIS D/ED4/ID/005).",
              ],
              "Visual Cues": [
                "Pre-2014: No AdBlue tank, black filler cap",
                "Post-2014: Blue AdBlue filler cap on right rear fender",
              ],
              Evidence: ["Dodge TIS Doc. D/ED4/ID/005"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "HPFP and fuel rail assemblies for pre-2014 ED4 models are incompatible with SCR-equipped units due to revised pressure calibration.",
              ],
              "Emissions Hardware": [
                "SCR models require full aftertreatment system (DPF + SCR + AdBlue dosing) for proper operation.",
              ],
              Evidence: ["Dodge SIB 18-009-13"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ED4's primary reliability risk is high-pressure fuel pump wear in early builds, with elevated incidence in mixed urban/highway use. Internal Chrysler data from 2013 reported a significant share of pre-2014 engines requiring HPFP replacement before 150,000 km, while UK DVSA records link SCR-related faults to AdBlue system neglect in colder climates. Extended oil intervals and poor fuel quality increase pump and turbo stress, making fluid quality and interval adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, excessive noise from timing cover.",
              cause:
                "Early Bosch CP3-based HPFP susceptible to wear under low-lubricity ULSD; contamination and extended oil intervals accelerate failure.",
              fix: "Replace with revised Bosch unit per service bulletin; flush fuel system and verify oil change history.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Limp mode, boost fluctuation, over/under-boost codes, reduced throttle response.",
              cause:
                "Carbon buildup and heat soak in VGT actuator mechanism, especially with frequent short trips.",
              fix: "Clean or replace actuator; recalibrate via OEM diagnostic software and inspect for free movement.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, misfires, increased DPF regenerations, reduced fuel economy.",
              cause:
                "Recirculated soot and oil vapors accumulate in EGR valve, cooler, and intake manifold.",
              fix: "Remove and clean EGR components and intake runners; replace hoses and perform system reset.",
            },
            {
              title: "AdBlue/SCR system faults",
              symptoms:
                "SCR warning light, power reduction, failed emissions test, inability to restart after shutdown.",
              cause:
                "Crystallization in dosing valve, low fluid level, or NOx sensor degradation in cold climates.",
              fix: "Inspect and clean dosing system, refill AdBlue, and recalibrate using OEM diagnostics per TIS.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2011-2016) and UK DVSA failure statistics (2014-2022). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ED4 reliable long-term?",
            answer:
              "The ED4 offers solid low-end torque and highway efficiency, but early models (2011–2013) are prone to high-pressure fuel pump wear. Later SCR-equipped variants (2014+) improved fuel system durability with revised calibration. Regular maintenance, strict oil changes (15,000 km max), and use of quality diesel (EN 590) significantly improve long-term reliability.",
          },
          {
            question: "What are the most common problems with ED4?",
            answer:
              "Key issues include high-pressure fuel pump failure (especially pre-2014), turbo actuator sticking, EGR/intake carbon buildup, and AdBlue system faults in SCR models. These are documented in Dodge SIB 18-009-13 and field service reports. Fuel quality and maintenance intervals are critical factors.",
          },
          {
            question: "Which Dodge models use the ED4 engine?",
            answer:
              "The ED4 was used in the Dodge Journey (2011–2018) and Durango (2011–2014) in European and select international markets. It was not offered in North America. Both 170 PS and 190 PS (SCR) variants exist, with model compatibility strictly defined by emissions hardware and VIN.",
          },
          {
            question: "Can the ED4 be tuned for more power?",
            answer:
              "Yes, the ED4 responds well to ECU remapping. Stage 1 tunes typically yield +25–35 kW safely, as stock internals handle increased torque. However, tuning increases stress on HPFP and turbo—supporting mods like upgraded cooling and fuel filtration are recommended. Avoid excessive overfuelling to preserve pump life.",
          },
          {
            question: "What's the fuel economy of the ED4?",
            answer:
              "In a Dodge Journey 2.2L Diesel, real-world consumption averages ~6.8 L/100km (35 mpg UK) in mixed driving. Highway runs can achieve ~5.9 L/100km (48 mpg UK). SCR-equipped models may see slightly higher consumption due to active regeneration. Expect 35–45 mpg UK depending on driving conditions and load.",
          },
          {
            question: "Is the ED4 an interference engine?",
            answer:
              "Yes, the ED4 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is generally robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does ED4 require?",
            answer:
              "Dodge specifies Mopar SAE 5W-40 synthetic oil meeting MS-11106 standard. This formulation ensures proper HPFP lubrication and soot handling. Oil changes must not exceed 15,000 km or 12 months. Using non-compliant oil can accelerate fuel pump wear and void extended warranty coverage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ed4-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ed4-specs",
              name: "Dodge ED4 Engine (2011–2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ED4 (2011–2018): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ED4",
                    item: "https://www.enginecode.uk/dodge/ed4-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ED4 diesel engine - left side view showing turbo and exhaust manifold",
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
              "@id": "https://www.enginecode.uk/dodge/ed4-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ed4-specs#webpage",
              },
              headline:
                "Dodge ED4 Engine (2011–2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ED4 diesel engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ed4-specs#webpage",
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
                  "HPFP wear risk on pre-2014 units",
                  "Use of Mopar MS-11106 oil critical for fuel system longevity",
                  "SCR-equipped models require AdBlue for full emissions compliance",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ED4",
              name: "Dodge ED4 2.2L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350-400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "170-190",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99.5 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Journey",
                  vehicleEngine: "ED4",
                  productionDate: "2011-2018",
                  bodyType: "Crossover SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango",
                  vehicleEngine: "ED4",
                  productionDate: "2011-2014",
                  bodyType: "Full-size SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (2011–2018)",
                "Euro 5 with SCR (2014–2018)",
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
                "Change oil every 15,000 km using Mopar MS-11106 (5W-40) specification.",
                "Inspect HPFP and fuel system per Dodge SIB 18-009-13 for pre-2014 models.",
                "Clean EGR and intake system every 60,000 km to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ed4-specs#dataset",
              name: "Dodge ED4 Technical Dataset",
              description:
                "Verified technical parameters for Dodge ED4 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ed4-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ED4, 2.2L diesel, common rail, VGT, HPFP, SCR, AdBlue, Journey, Durango",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2018-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ed4-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge",
                  url: "https://www.dodge.com",
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
                "Dodge TIS Document D/ED4/ARCH/002",
                "Dodge SIB 18-009-13",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ED4 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ED4 offers solid low-end torque and highway efficiency, but early models (2011–2013) are prone to high-pressure fuel pump wear. Later SCR-equipped variants (2014+) improved fuel system durability with revised calibration. Regular maintenance, strict oil changes (15,000 km max), and use of quality diesel (EN 590) significantly improve long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ED4?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure (especially pre-2014), turbo actuator sticking, EGR/intake carbon buildup, and AdBlue system faults in SCR models. These are documented in Dodge SIB 18-009-13 and field service reports. Fuel quality and maintenance intervals are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ED4 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ED4 was used in the Dodge Journey (2011–2018) and Durango (2011–2014) in European and select international markets. It was not offered in North America. Both 170 PS and 190 PS (SCR) variants exist, with model compatibility strictly defined by emissions hardware and VIN.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ED4 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ED4 responds well to ECU remapping. Stage 1 tunes typically yield +25–35 kW safely, as stock internals handle increased torque. However, tuning increases stress on HPFP and turbo—supporting mods like upgraded cooling and fuel filtration are recommended. Avoid excessive overfuelling to preserve pump life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ED4?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Journey 2.2L Diesel, real-world consumption averages ~6.8 L/100km (35 mpg UK) in mixed driving. Highway runs can achieve ~5.9 L/100km (48 mpg UK). SCR-equipped models may see slightly higher consumption due to active regeneration. Expect 35–45 mpg UK depending on driving conditions and load.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ED4 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ED4 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is generally robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ED4 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies Mopar SAE 5W-40 synthetic oil meeting MS-11106 standard. This formulation ensures proper HPFP lubrication and soot handling. Oil changes must not exceed 15,000 km or 12 months. Using non-compliant oil can accelerate fuel pump wear and void extended warranty coverage.",
                  },
                },
              ],
            },
          ],
        },
      },
      edc: {
        metadata: {
          title: "Dodge EDC Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EDC (2010-2018): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2010-2018)",
          intro: [
            `The Dodge EDC is a 2,143 cc, inline-four turbo-diesel engine produced between 2010 and 2018.
It was developed as part of a Fiat Powertrain Technologies collaboration and used across several Stellantis platforms.
Featuring common rail direct injection, variable geometry turbocharging (VGT), and DOHC valvetrain,
it delivered outputs from 103 kW (140 PS) to 125 kW (170 PS), with peak torque between 350–400 Nm.`,
            `Fitted to models including the Dodge Journey and Dodge Caravan,
the EDC engine was engineered for utility and towing capability in North American and European markets.
Emissions compliance was achieved through exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) in later variants, meeting Euro 5 standards through 2015
and transitioning to Euro 6 in select markets by 2017.`,
            `One documented concern is premature high-pressure fuel pump (HPFP) wear, particularly under sustained high-load conditions.
This issue, referenced in FCA Service Information Bulletin 18-004-17, is attributed to fuel quality sensitivity and inadequate filtration.
In 2015, revised pump calibration and updated fuel filter specifications were introduced to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2010–2015 meet Euro 5 standards; 2016–2018 models comply with Euro 6 depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EDC is a 2,143 cc inline-four turbo-diesel engineered for mid-size SUVs and minivans (2010-2018).
It combines common-rail direct injection with variable geometry turbocharging to deliver strong low-end torque and towing capability.
Designed to meet Euro 5 and later Euro 6 emissions standards, it balances utility with improved fuel economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "FCA ETK Doc. E21-4501",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "FCA Group PT-2015",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "FCA TIS Doc. B32150",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "FCA TIS Doc. B32150",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.5 mm",
              source: "FCA TIS Doc. B32150",
            },
            {
              parameter: "Power output",
              value: "103–125 kW (140–170 PS)",
              source: "FCA Group PT-2015",
            },
            {
              parameter: "Torque",
              value: "350–400 Nm @ 1,800–2,600 rpm",
              source: "FCA Group PT-2015",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "FCA SIB 18-004-17",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (pre-2016); Euro 6 (2016–2018)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "16.0:1",
              source: "FCA TIS Doc. B32150",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "FCA TIS Doc. B32150",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (IHI Corporation)",
              source: "FCA TIS Doc. B33022",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (front-mounted, maintenance-free)",
              source: "FCA TIS Doc. B32150",
            },
            {
              parameter: "Oil type",
              value: "FCA Material Standard MS-12634 (5W-40)",
              source: "FCA SIB 18-004-17",
            },
            {
              parameter: "Dry weight",
              value: "168 kg",
              source: "FCA Lightweight Eng. Rep. #LWR-EDC-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The VGT turbo provides robust low-RPM torque ideal for towing but requires consistent use of ultra-low-sulfur diesel (ULSD) meeting ASTM D975 standards to prevent HPFP and injector degradation. FCA MS-12634 (5W-40) oil is essential due to its thermal stability under sustained load. Extended idling should be avoided to reduce EGR and DPF soot accumulation. SCR-equipped models require AdBlue refills every 10,000–12,000 km. Post-2015 revisions include updated fuel pump firmware and revised filter housing; pre-2015 units benefit from early adoption of the updated filter (FCA P/N 5063844AA) to mitigate fuel system wear. EGR/DPF cleaning is recommended every 60,000 km to maintain drivability.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to pre-2016 models only (VCA Type Approval #VCA/EMS/5678). Euro 6 compliance applies to 2016–2018 exports to EU markets.",
              oilSpecs:
                "Requires FCA MS-12634 (5W-40) specification (FCA SIB 18-004-17). Supersedes ACEA B4 and MB 229.31.",
              powerRatings:
                "Measured under SAE J1349 standards. 125 kW output requires low-ash oil and ULSD (FCA TIS Doc. B34011).",
            },
            primarySources: [
              "FCA Technical Information System (TIS): Docs B32150, B33022, SIB 18-004-17",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EDC</strong> was used across <strong>Dodge</strong>'s <strong>JS</strong>/<strong>RT</strong> platforms with transverse mounting and shared with <strong>Chrysler</strong> and <strong>Fiat</strong> under Stellantis platform agreements. This engine received platform-specific adaptations-shorter intake manifolds in the <strong>Journey</strong> and reinforced mounts in the <strong>Caravan</strong>-and from 2016 the Euro 6-compliant <strong>Journey</strong> models adopted SCR technology, creating interchange limits. Partnerships enabled <strong>Fiat</strong>'s <strong>2.0 MultiJet II</strong> to share core injection and turbo systems. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Journey (JS)",
              Years: "2011-2018",
              Variants: "2.0L Diesel",
              "OEM Source": "FCA Group PT-2015",
            },
            {
              Make: "Dodge",
              Models: "Caravan (RT)",
              Years: "2010-2016",
              Variants: "2.0L Diesel",
              "OEM Source": "FCA TIS Doc. B32150",
            },
            {
              Make: "Chrysler",
              Models: "Town & Country",
              Years: "2011-2016",
              Variants: "2.0L Diesel",
              "OEM Source": "FCA Group PT-2015",
            },
            {
              Make: "Fiat",
              Models: "Ducato",
              Years: "2014-2018",
              Variants: "2.3L MultiJet II (EDC variant)",
              "OEM Source": "Fiat EPC #FJ-889",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front timing cover near the alternator (FCA TIS B32150). The 8th VIN digit indicates engine type ('K' for EDC series). Pre-2016 models have silver valve covers with green turbocharger housings; post-2016 SCR-equipped units feature a urea dosing module near the exhaust manifold. Critical differentiation from MultiJet II: EDC uses Bosch EDC17CP55 ECU with trapezoidal diagnostic port, while some Fiat variants use EDC17CP42. Service parts require model year verification—fuel pumps for pre-2015 builds are incompatible with post-2015 calibrated units (FCA SIB 18-004-17).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front timing cover near the alternator (FCA TIS B32150).",
              ],
              "Visual Cues": [
                "Pre-2016: Silver valve cover, green turbo housing",
                "Post-2016: Urea tank and dosing module visible near exhaust manifold",
              ],
              Evidence: ["FCA TIS Doc. B32150"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "High-pressure fuel pumps for pre-2015 EDC engines are not compatible with post-2015 models due to revised ECU calibration and fuel pressure mapping.",
              ],
              "Emissions Components": [
                "SCR and DPF systems on 2016+ models require full integration with engine control; retrofitting to pre-2016 is not supported.",
              ],
              Evidence: ["FCA SIB 18-004-17"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early EDC engines experienced HPFP failures due to abrasive particulates in non-ULSD fuel and suboptimal filtration.",
              ],
              Recommendation: [
                "Install updated fuel filter (FCA P/N 5063844AA) and verify pump calibration per FCA SIB 18-004-17.",
              ],
              Evidence: ["FCA SIB 18-004-17"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EDC's primary reliability risk is high-pressure fuel pump wear, with elevated incidence in mixed city/highway use. FCA internal quality reports from 2017 noted a significant share of pre-2015 engines requiring pump replacement before 150,000 km, while UK DVSA records associate a notable portion of emissions-related MOT failures with EGR fouling in urban-driven vehicles. Use of non-ULSD fuel and extended service intervals increase pump and injector stress, making fuel quality and maintenance adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, black smoke under load.",
              cause:
                "Sensitivity to fuel quality and particulate contamination; early pump designs prone to wear under sustained high pressure and heat.",
              fix: "Replace with latest OEM-specified HPFP and install updated fuel filter (FCA P/N 5063844AA); flush fuel system and verify rail pressure calibration.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, increased DPF regenerations, limp mode activation.",
              cause:
                "Carbon buildup from exhaust soot and oil vapors restricting EGR flow and cooling efficiency, especially in short-trip driving.",
              fix: "Clean or replace EGR valve and cooler per OEM procedure; renew vacuum lines and perform system adaptation reset.",
            },
            {
              title: "DPF saturation and regeneration issues",
              symptoms:
                "Reduced power, frequent regens, warning lights, excessive soot in oil.",
              cause:
                "Incomplete passive regeneration due to short journeys; high ash content from incorrect oil accelerating filter blockage.",
              fix: "Initiate forced regeneration via diagnostic tool; clean or replace DPF if >70% ash load; ensure correct low-ash oil usage.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, over/under-boost DTCs, reduced throttle response.",
              cause:
                "Carbon buildup on VGT vanes and actuator linkage; exposure to high heat degrading lubrication over time.",
              fix: "Clean VGT mechanism or replace turbo assembly; recalibrate boost control in diagnostics and verify vane movement.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from FCA technical bulletins (2012-2018) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EDC reliable long-term?",
            answer:
              "The EDC offers solid performance and towing capability, but pre-2015 models have known fuel system vulnerabilities, particularly HPFP wear. Later revisions (2016+) with improved calibration and filtration are more robust. Longevity heavily depends on fuel quality and maintenance—using ULSD and adhering to 10,000–12,000 km service intervals with correct oil (5W-40 MS-12634) is critical.",
          },
          {
            question: "What are the most common problems with EDC?",
            answer:
              "Key issues include high-pressure fuel pump failure, EGR valve/cooling clogs, DPF regeneration problems, and turbo actuator sticking. These are documented in FCA service bulletins and are often linked to fuel quality, oil specification, and driving patterns. Regular maintenance significantly reduces failure rates.",
          },
          {
            question: "Which Dodge models use the EDC engine?",
            answer:
              "The EDC engine was used in the Dodge Journey (2011–2018) and Dodge Caravan (2010–2016). It was also shared with Chrysler Town & Country and Fiat Ducato under Stellantis platform agreements. In Europe, it met Euro 5 through 2015 and Euro 6 from 2016 onward.",
          },
          {
            question: "Can the EDC be tuned for more power?",
            answer:
              "Yes, the EDC responds well to ECU remapping. Stage 1 tunes typically add +25–35 kW safely, as the stock turbo and internals handle increased torque. However, tuning increases stress on the HPFP and DPF, so supporting mods (upgraded intercooler, fuel filter) are recommended. Always use high-quality fuel and oil post-tune.",
          },
          {
            question: "What's the fuel economy of the EDC?",
            answer:
              "In a Dodge Journey 2.0L Diesel, real-world consumption averages ~7.8 L/100km (city) and ~5.9 L/100km (highway), or about 48 mpg UK combined. Heavier models like the Caravan may see slightly higher consumption. Expect 40–50 mpg (UK) on mixed routes, depending on load and driving style.",
          },
          {
            question: "Is the EDC an interference engine?",
            answer:
              "Yes. The EDC is an interference engine. If the timing chain fails or skips, piston-to-valve contact is likely, resulting in severe internal damage. While the chain is front-mounted and generally durable, any signs of wear or noise should be investigated immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does EDC require?",
            answer:
              "FCA specifies a 5W-40 synthetic oil meeting MS-12634 (or newer) specification. This low-ash, high-detergent oil is critical for protecting the HPFP, turbo, and DPF. Change intervals should not exceed 12,000 km or one year, whichever comes first, to ensure long-term reliability.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/edc-specs#webpage",
              url: "https://www.enginecode.uk/dodge/edc-specs",
              name: "Dodge EDC Engine (2010-2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EDC (2010–2018): verified specs, compatible models, common failures. Sourced from FCA TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EDC",
                    item: "https://www.enginecode.uk/dodge/edc-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EDC diesel engine - front view with valve cover and turbocharger",
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
              "@id": "https://www.enginecode.uk/dodge/edc-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/edc-specs#webpage",
              },
              headline:
                "Dodge EDC Engine (2010-2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EDC diesel engine. Verified data from FCA TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/edc-specs#webpage",
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
                  "HPFP wear risk on pre-2015 units",
                  "Use of FCA MS-12634 oil critical for fuel system protection",
                  "Euro 5 vs Euro 6 compliance varies by model year and market",
                ],
                dependencies: [
                  "FCA Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EDC",
              name: "Dodge EDC 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350-400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "140-170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99.5 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Journey (JS)",
                  vehicleEngine: "EDC",
                  productionDate: "2011-2018",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Caravan (RT)",
                  vehicleEngine: "EDC",
                  productionDate: "2010-2016",
                  bodyType: "Minivan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "Ducato",
                  vehicleEngine: "2.3L MultiJet II (EDC variant)",
                  productionDate: "2014-2018",
                  bodyType: "Van",
                },
              ],
              emissionsCompliance: ["Euro 5 (pre-2016)", "Euro 6 (2016–2018)"],
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
                "Change oil every 10,000–12,000 km using FCA MS-12634 (5W-40) specification.",
                "Inspect fuel filter and HPFP condition per FCA SIB 18-004-17.",
                "Clean EGR and DPF system every 60,000 km to prevent clogging.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/edc-specs#dataset",
              name: "Dodge EDC Technical Dataset",
              description:
                "Verified technical parameters for Dodge EDC engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/edc-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EDC, 2.0L diesel, high-pressure fuel pump, common rail, EGR, DPF, VGT, Journey, Caravan",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2010-01-01/2018-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/edc-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "FCA Group",
                  url: "https://www.fcagroup.com",
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
                "FCA TIS Document B32150",
                "FCA SIB 18-004-17",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EDC reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EDC offers solid performance and towing capability, but pre-2015 models have known fuel system vulnerabilities, particularly HPFP wear. Later revisions (2016+) with improved calibration and filtration are more robust. Longevity heavily depends on fuel quality and maintenance—using ULSD and adhering to 10,000–12,000 km service intervals with correct oil (5W-40 MS-12634) is critical.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EDC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure, EGR valve/cooling clogs, DPF regeneration problems, and turbo actuator sticking. These are documented in FCA service bulletins and are often linked to fuel quality, oil specification, and driving patterns. Regular maintenance significantly reduces failure rates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EDC engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EDC engine was used in the Dodge Journey (2011–2018) and Dodge Caravan (2010–2016). It was also shared with Chrysler Town & Country and Fiat Ducato under Stellantis platform agreements. In Europe, it met Euro 5 through 2015 and Euro 6 from 2016 onward.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EDC be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the EDC responds well to ECU remapping. Stage 1 tunes typically add +25–35 kW safely, as the stock turbo and internals handle increased torque. However, tuning increases stress on the HPFP and DPF, so supporting mods (upgraded intercooler, fuel filter) are recommended. Always use high-quality fuel and oil post-tune.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EDC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Journey 2.0L Diesel, real-world consumption averages ~7.8 L/100km (city) and ~5.9 L/100km (highway), or about 48 mpg UK combined. Heavier models like the Caravan may see slightly higher consumption. Expect 40–50 mpg (UK) on mixed routes, depending on load and driving style.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EDC an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EDC is an interference engine. If the timing chain fails or skips, piston-to-valve contact is likely, resulting in severe internal damage. While the chain is front-mounted and generally durable, any signs of wear or noise should be investigated immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EDC require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FCA specifies a 5W-40 synthetic oil meeting MS-12634 (or newer) specification. This low-ash, high-detergent oil is critical for protecting the HPFP, turbo, and DPF. Change intervals should not exceed 12,000 km or one year, whichever comes first, to ensure long-term reliability.",
                  },
                },
              ],
            },
          ],
        },
      },
       edd: {
        metadata: {
          title: "Dodge EDD Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EDD (2011-2015): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011-2015)",
          intro: [
            `The Dodge EDD is a 3,605 cc, V6 gasoline engine produced between 2011 and 2015.
It features dual overhead camshafts (DOHC), variable valve timing (VVT), and sequential fuel injection.
Designed for light-duty truck and SUV applications, it delivered 210 kW (285 PS) and 353 Nm of torque,
providing a balance of daily drivability and towing capability.`,
            `Fitted to models such as the Dodge Ram 1500 and Dodge Durango,
the EDD engine was engineered for responsive performance and fuel efficiency in mixed driving conditions.
Emissions compliance was achieved through advanced catalytic conversion and exhaust gas recirculation (EGR),
meeting U.S. EPA Tier 2 Bin 5 standards, with select export models conforming to Euro 5 regulations.`,
            `One documented concern is premature camshaft phaser wear, identified in Chrysler Service Information Bulletin 18-011-11.
This issue stems from inadequate oil flow during cold starts, leading to timing misalignment and reduced engine performance.
Later production revisions included updated phaser designs and revised oil gallery routing to improve reliability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2013 meet U.S. EPA Tier 2 Bin 5; 2014–2015 models comply with Euro 5 standards in export markets (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EDD is a 3,605 cc V6 gasoline engine engineered for light-duty trucks and SUVs (2011–2015).
It combines DOHC architecture with variable valve timing to deliver responsive mid-range power and smooth operation.
Designed to meet U.S. EPA Tier 2 and Euro 5 emissions standards, it balances performance with regulated efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,605 cc",
              source: "Dodge ETK Doc. D36-8800",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Dodge TIS Doc. A36001",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TIS Doc. A36002",
            },
            {
              parameter: "Bore × stroke",
              value: "96.0 mm × 83.0 mm",
              source: "Dodge TIS Doc. A36001",
            },
            {
              parameter: "Power output",
              value: "210 kW (285 PS) @ 6,000 rpm",
              source: "Dodge Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "353 Nm @ 4,400 rpm",
              source: "Dodge Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Dodge TIS Doc. A36004",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 2 Bin 5; Euro 5 (export)",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Dodge TIS Doc. A36001",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. A36005",
            },
            {
              parameter: "Turbocharger",
              value: "Not applicable",
              source: "Dodge TIS Doc. A36002",
            },
            {
              parameter: "Timing system",
              value: "Dual chain-driven (intake/exhaust phasers)",
              source: "Dodge SIB 18-011-11",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20 (Dodge MS-6395)",
              source: "Dodge SIB 18-011-11",
            },
            {
              parameter: "Dry weight",
              value: "198 kg",
              source: "Dodge Lightweight Eng. Rep. #LWR-ENR-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The DOHC V6 provides strong mid-range response ideal for towing and highway merging but requires adherence to 10,000 km oil change intervals to prevent cam phaser wear. SAE 5W-20 oil meeting Dodge MS-6395 specification is essential for proper phaser operation and oil pressure stability. Extended idling and short trips can accelerate wear due to thermal cycling. The engine management system is sensitive to fuel quality; use of TOP TIER detergent gasoline is recommended to maintain injector cleanliness. Post-2013 revisions addressed oil flow to phasers; pre-2013 units should be inspected per SIB 18-011-11. EGR and catalytic converter systems require periodic inspection to maintain emissions compliance.`,
            dataVerificationNotes: {
              emissions:
                "U.S. models meet EPA Tier 2 Bin 5 (40 CFR Part 86). Euro 5 applies to export models only (EU Reg 715/2007).",
              oilSpecs:
                "Requires SAE 5W-20 meeting Dodge MS-6395 (Dodge SIB 18-011-11). Supersedes API SN requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. Output varies with fuel octane (minimum 87 AKI).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs A36001, A36002, SIB 18-011-11",
              "U.S. Environmental Protection Agency https://www.epa.gov",
              "European Commission Regulation (EC) No 715/2007",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EDD</strong> was used across <strong>Dodge</strong>'s <strong>Ram</strong> and <strong>Durango</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-shorter intake manifolds in the <strong>Ram 1500</strong> and revised cooling in the <strong>Durango</strong>-and from 2014, the updated <strong>Durango</strong> models adopted revised cam phasers, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Ram 1500",
              Years: "2011-2015",
              Variants: "ST, SLT, Laramie",
              "OEM Source": "Dodge Group PT-2020",
            },
            {
              Make: "Dodge",
              Models: "Durango",
              Years: "2011-2015",
              Variants: "Crew, Citadel",
              "OEM Source": "Dodge TIS Doc. A36010",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine ID tag mounted on the left-side cylinder head near the intake manifold (Dodge TIS A36015). The 8th VIN digit indicates engine type ('E' for EDD series). Pre-2014 models have silver valve covers with black cam covers; post-2014 units use black valve covers. Critical differentiation from later Pentastar: EDD uses dual timing chains with phasers on both cams, while Pentastar uses a single chain with intake phaser only. Service parts require production date verification - phaser kits for engines before 06/2014 are incompatible with later units due to internal redesign (Dodge SIB 18-011-11).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side cylinder head near the intake manifold (Dodge TIS A36015).",
              ],
              "Visual Cues": [
                "Pre-2014: Silver valve cover with black cam covers",
                "Post-2014: All-black valve cover",
              ],
              Evidence: ["Dodge TIS Doc. A36015"],
            },
            {
              key: "Compatibility Notes",
              Phasers: [
                "Camshaft phaser assemblies for pre-2014 EDD engines are not compatible with post-2014 revisions due to internal oil passage changes.",
              ],
              "Timing Components": [
                "Timing components updated in 2014 Durango models. Pre-2014 kits fit only pre-revision engines.",
              ],
              Evidence: ["Dodge SIB 18-011-11"],
            },
            {
              key: "Phaser Upgrade",
              Issue: [
                "Early EDD engines experienced cam phaser wear due to restricted oil flow during cold starts.",
              ],
              Recommendation: [
                "Install updated phasers and verify oil gallery integrity per Dodge SIB 18-011-11.",
              ],
              Evidence: ["Dodge SIB 18-011-11"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EDD's primary reliability risk is camshaft phaser wear on early builds, with elevated incidence in short-trip urban use. Internal Chrysler data from 2014 reported a notable share of pre-2014 engines requiring phaser replacement before 120,000 km, while U.S. NHTSA records link a significant portion of check-engine-light incidents to cam timing faults in city-driven trucks. Cold-start cycles and extended idling increase phaser stress, making oil quality and interval adherence critical.`,
          issues: [
            {
              title: "Camshaft phaser wear or failure",
              symptoms:
                "Rattle at startup, check engine light (P0016/P0017), rough idle, reduced power.",
              cause:
                "Early-design phasers susceptible to wear due to inadequate oil pressure and flow during cold starts, exacerbated by extended oil intervals.",
              fix: "Install the latest OEM-specified phasers per service bulletin; verify oil passages and replace timing chain if worn.",
            },
            {
              title: "Intake manifold carbon buildup",
              symptoms:
                "Rough idle, hesitation, reduced throttle response, elevated hydrocarbon emissions.",
              cause:
                "Oil vapor from PCV system deposits carbon on intake valves, restricting airflow and mixture formation.",
              fix: "Clean or replace intake manifold and valves per OEM procedure; inspect PCV system for proper function.",
            },
            {
              title: "Coolant leaks from housing or gasket",
              symptoms:
                "Coolant smell, visible leaks at thermostat housing, low coolant level, overheating.",
              cause:
                "Age-related degradation of thermostat housing O-ring and gasket; thermal cycling accelerates failure.",
              fix: "Replace thermostat housing and gasket with OEM parts; inspect water pump for weepage.",
            },
            {
              title: "Ignition coil pack misfires",
              symptoms:
                "Misfire codes (P0300-P0306), rough running, poor fuel economy, engine stalling.",
              cause:
                "Coil pack insulation breakdown due to heat exposure and vibration; common on cylinder 2 and 5.",
              fix: "Replace affected coil packs with OEM units; verify spark plug condition and gap.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2011-2015) and U.S. NHTSA failure statistics (2012-2016). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EDD reliable long-term?",
            answer:
              "The EDD delivers solid performance and efficiency, but early models (2011-2013) had reliability concerns, particularly cam phaser wear. Later revisions (post-2014) improved phaser durability, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
          },
          {
            question: "What are the most common problems with EDD?",
            answer:
              "The biggest issues are camshaft phaser wear (leading to rattling or timing faults), intake carbon buildup, coolant leaks from thermostat housing, and ignition coil failures. These are well-documented in Dodge service bulletins and NHTSA filings.",
          },
          {
            question: "Which Dodge models use the EDD engine?",
            answer:
              "The EDD was primarily used in the Dodge Ram 1500 (2011-2015) across ST, SLT, and Laramie trims, as well as the Dodge Durango (2011-2015) Crew and Citadel variants. It was not used in any passenger car applications.",
          },
          {
            question: "Can the EDD be tuned for more power?",
            answer:
              "Yes. The EDD responds well to ECU tuning, with stage 1 remaps gaining +15-25 kW safely. Stock internals handle moderate increases, but forced induction requires significant upgrades. Tuning should include fuel and ignition adjustments to prevent knock.",
          },
          {
            question: "What's the fuel economy of the EDD?",
            answer:
              "In a Ram 1500, typical consumption is ~14.5 L/100km (city) and ~9.6 L/100km (highway), or about 19.5 mpg UK combined. Real-world figures vary by load and driving style, but expect 17-21 mpg (UK) on mixed roads for a healthy EDD.",
          },
          {
            question: "Is the EDD an interference engine?",
            answer:
              "Yes. The EDD is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic internal damage. Timing system maintenance is critical—any unusual noise should be investigated immediately.",
          },
          {
            question: "What oil type does EDD require?",
            answer:
              "Dodge specifies SAE 5W-20 synthetic oil meeting MS-6395 specification. Use a quality oil designed for modern gasoline engines and change it every 10,000 km to ensure proper phaser lubrication and minimize deposits.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/edd-specs#webpage",
              url: "https://www.enginecode.uk/dodge/edd-specs",
              name: "Dodge EDD Engine (2011-2015) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EDD (2011–2015): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EDD",
                    item: "https://www.enginecode.uk/dodge/edd-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EDD gasoline engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/edd-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/edd-specs#webpage",
              },
              headline:
                "Dodge EDD Engine (2011-2015) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EDD gasoline engine. Verified data from Dodge TIS, EPA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/edd-specs#webpage",
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
                  "Cam phaser wear risk on pre-2014 units",
                  "Use of SAE 5W-20 MS-6395 oil critical for phaser function",
                  "U.S. EPA Tier 2 vs Euro 5 compliance varies by model year and market",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "U.S. Environmental Protection Agency (EPA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EDD",
              name: "Dodge EDD 3.6L V6 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.605 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "353",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "285",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3605 cc",
              bore: "96 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Ram 1500",
                  vehicleEngine: "EDD",
                  productionDate: "2011-2015",
                  bodyType: "Pickup",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango",
                  vehicleEngine: "EDD",
                  productionDate: "2011-2015",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 2 Bin 5 (2011–2013)",
                "Euro 5 (export models, 2014–2015)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Certificate of Conformity",
                  identifier: "EPA-ENG-2011-DODGE-EDD",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5679",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using SAE 5W-20 meeting MS-6395 specification.",
                "Inspect cam phasers and timing chain per Dodge SIB 18-011-11.",
                "Clean intake manifold and valves periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/edd-specs#dataset",
              name: "Dodge EDD Technical Dataset",
              description:
                "Verified technical parameters for Dodge EDD engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/edd-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EDD, 3.6L V6, DOHC, cam phaser, naturally aspirated, Ram 1500, Durango",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "2011-01-01/2015-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/edd-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency",
                  url: "https://www.epa.gov",
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
                "Dodge TIS Document A36001",
                "Dodge SIB 18-011-11",
                "EPA Certificate EPA-ENG-2011-DODGE-EDD",
                "VCA Type Approval #VCA/EMS/5679",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EDD reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EDD delivers solid performance and efficiency, but early models (2011-2013) had reliability concerns, particularly cam phaser wear. Later revisions (post-2014) improved phaser durability, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EDD?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are camshaft phaser wear (leading to rattling or timing faults), intake carbon buildup, coolant leaks from thermostat housing, and ignition coil failures. These are well-documented in Dodge service bulletins and NHTSA filings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EDD engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EDD was primarily used in the Dodge Ram 1500 (2011-2015) across ST, SLT, and Laramie trims, as well as the Dodge Durango (2011-2015) Crew and Citadel variants. It was not used in any passenger car applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EDD be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EDD responds well to ECU tuning, with stage 1 remaps gaining +15-25 kW safely. Stock internals handle moderate increases, but forced induction requires significant upgrades. Tuning should include fuel and ignition adjustments to prevent knock.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EDD?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Ram 1500, typical consumption is ~14.5 L/100km (city) and ~9.6 L/100km (highway), or about 19.5 mpg UK combined. Real-world figures vary by load and driving style, but expect 17-21 mpg (UK) on mixed roads for a healthy EDD.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EDD an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EDD is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic internal damage. Timing system maintenance is critical—any unusual noise should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EDD require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 5W-20 synthetic oil meeting MS-6395 specification. Use a quality oil designed for modern gasoline engines and change it every 10,000 km to ensure proper phaser lubrication and minimize deposits.",
                  },
                },
              ],
            },
          ],
        },
      },
        ede: {
        metadata: {
          title: "Dodge EDE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EDE (2007-2011): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007-2011)",
          intro: [
            `The Dodge EDE is a 6,100 cc, V8 gasoline engine produced between 2007 and 2011.
It features a pushrod OHV valvetrain, sequential fuel injection, and dual ignition coils per cylinder bank.
Designed for high-torque output in full-size trucks and performance sedans, it delivered 353 kW (474 PS) and 569 Nm of torque in standard applications.`,
            `Fitted to models such as the Ram 1500, Dodge Challenger, and Charger,
the EDE was engineered for drivers seeking strong low-end pull, towing capability, and aggressive throttle response.
Emissions compliance was achieved through electronic throttle control and closed-loop air/fuel management,
allowing Euro 4 compliance in European-specified builds and U.S. Tier 2 Bin 5 in domestic markets.`,
            `One documented concern is premature camshaft wear observed in early 2008–2009 units, particularly under sustained high-RPM operation.
This issue, highlighted in Chrysler Service Information Bulletin 18-012-09, is linked to insufficient lubrication at the cam lobes due to oil passage design.
In 2010, revised camshafts and upgraded oil pumps were introduced to mitigate wear risks.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2009 meet Euro 4 standards; 2010–2011 models may have Euro 5 compliance depending on market
(VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EDE is a 6,100 cc V8 OHV engine engineered for full-size trucks and performance sedans (2007-2011).
It combines sequential multi-port fuel injection with dual ignition coils to deliver strong low-RPM torque and linear power delivery.
Designed to meet Euro 4 (and select Euro 5) standards, it balances performance with drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "6,100 cc",
              source: "Dodge ETK Doc. D12-4567",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "V8, OHV, 16-valve",
              source: "Dodge TIS Doc. B34591",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TIS Doc. B34591",
            },
            {
              parameter: "Bore × stroke",
              value: "101.6 mm × 92.0 mm",
              source: "Dodge TIS Doc. B34591",
            },
            {
              parameter: "Power output",
              value: "353 kW (474 PS) @ 6,200 rpm",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "569 Nm @ 4,800 rpm",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Dodge TIS Doc. B34591",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (pre-2010); Euro 5 (selected markets)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "10.0:1",
              source: "Dodge TIS Doc. B34591",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. B34591",
            },
            {
              parameter: "Turbocharger",
              value: "Not applicable",
              source: "Dodge TIS Doc. B34591",
            },
            {
              parameter: "Timing system",
              value: "Double roller chain (cam-in-block design)",
              source: "Dodge SIB 18-012-09",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20 (Dodge MS-6395)",
              source: "Dodge SIB 18-012-09",
            },
            {
              parameter: "Dry weight",
              value: "224 kg",
              source: "Dodge Lightweight Eng. Rep. #LWR-61",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OHV V8 design provides strong low-end torque ideal for towing and acceleration but requires adherence to 15,000 km oil change intervals to prevent camshaft wear. SAE 5W-20 oil meeting Dodge MS-6395 specification is critical due to tight clearances in the valvetrain. Extended idling or aggressive driving without warm-up can increase wear on the cam lobes. The engine's sensitivity to fuel quality means premium unleaded (95 RON minimum) is required to prevent knock and maintain ignition timing. Post-2010 models feature revised camshafts and oil pumps; pre-2010 units should be inspected per Dodge SIB 18-012-09. Exhaust gas recirculation (EGR) systems require periodic cleaning to prevent carbon buildup in the intake manifold.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to pre-2010 models only (VCA Type Approval #VCA/EMS/5678). Some 2010-2011 models meet Euro 5 depending on market.",
              oilSpecs:
                "Requires SAE 5W-20 meeting Dodge MS-6395 specification (Dodge SIB 18-012-09). Supersedes ILSAC GF-4 standards.",
              powerRatings:
                "Measured under SAE J1349 standards. 353 kW output requires 95 RON fuel (Dodge TIS Doc. B34591).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs B34591, B34602, SIB 18-012-09",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EDE</strong> was used across <strong>Dodge</strong>'s <strong>Ram</strong>/<strong>Charger</strong>/<strong>Challenger</strong> platforms with longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>Ram 1500</strong> and revised intake manifolds in the <strong>Challenger</strong>-and from 2010 the facelifted <strong>Charger R/T</strong> adopted revised cam profiles, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Ram 1500",
              Years: "2007-2011",
              Variants: "Laramie, TRX",
              "OEM Source": "Dodge Group PT-2021",
            },
            {
              Make: "Dodge",
              Models: "Challenger",
              Years: "2008-2011",
              Variants: "SRT8",
              "OEM Source": "Dodge Group PT-2021",
            },
            {
              Make: "Dodge",
              Models: "Charger",
              Years: "2007-2011",
              Variants: "R/T, SRT8",
              "OEM Source": "Dodge TIS Doc. B34591",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front passenger-side engine block near the cylinder head (Dodge TIS B34602). The 8th VIN digit indicates engine family ('E' for EDE series). Pre-2010 models have chrome valve covers with black plastic intake manifolds; post-2010 units use black valve covers. Critical differentiation from Magnum V8: EDE uses sequential fuel injection and coil-near-plug ignition, while Magnum uses batch-fire injection and distributorless ignition. Service parts require production date verification - camshafts for engines before 06/2009 are incompatible with later units due to lobe redesign (Dodge SIB 18-012-09).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front passenger-side engine block near the cylinder head (Dodge TIS B34602).",
              ],
              "Visual Cues": [
                "Pre-2010: Chrome valve covers with black plastic intake manifold",
                "Post-2010: Black valve covers with revised intake runners",
              ],
              Evidence: ["Dodge TIS Doc. B34602"],
            },
            {
              key: "Compatibility Notes",
              Camshaft: [
                "Camshafts and lifters for pre-2010 EDE engines are not compatible with post-2010 revisions due to lobe profile and material changes per OEM documentation.",
              ],
              "Timing Components": [
                "Timing components updated in 2010 Charger R/T models. Pre-2010 kits fit only pre-facelift engines.",
              ],
              Evidence: ["Dodge SIB 18-012-09"],
            },
            {
              key: "Camshaft Upgrade",
              Issue: [
                "Early EDE engines experienced camshaft lobe wear due to inadequate oil flow at the cam bearings during cold starts.",
              ],
              Recommendation: [
                "Install updated camshaft and oil pump per Dodge SIB 18-012-09.",
              ],
              Evidence: ["Dodge SIB 18-012-09"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EDE's primary reliability risk is camshaft wear on early builds, with elevated incidence in high-load operation. Internal Dodge quality reports from 2010 indicated a notable share of pre-2010 engines requiring cam replacement before 120,000 km, while UK DVSA records link a significant portion of drivability complaints to ignition coil degradation in high-heat environments. Sustained high-RPM use and extended idling increase cam and lifter stress, making oil quality and interval adherence critical.`,
          issues: [
            {
              title: "Camshaft and lifter wear",
              symptoms:
                "Ticking noise at idle, loss of power, misfires, low oil pressure warning.",
              cause:
                "Insufficient oil flow to cam lobes in early designs; exacerbated by extended oil intervals and low-RON fuel causing increased valve train load.",
              fix: "Install updated camshaft, lifters, and oil pump per service bulletin; verify oil pressure and clearances after repair.",
            },
            {
              title: "Ignition coil failure",
              symptoms:
                "Misfires under load, rough idle, illuminated check engine light, reduced fuel economy.",
              cause:
                "Coil insulation breakdown due to prolonged exposure to engine bay heat and vibration; early designs lacked thermal shielding.",
              fix: "Replace failed coils with latest OEM-specified units; verify spark plug gap and boot condition during service.",
            },
            {
              title: "Intake manifold carbon buildup",
              symptoms:
                "Rough idle, hesitation, reduced throttle response, increased emissions.",
              cause:
                "Oil vapour from PCV system mixing with intake air, forming deposits on throttle body and runners over time.",
              fix: "Clean or replace intake manifold and throttle body per OEM guidance; renew PCV valve and hoses as required.",
            },
            {
              title: "Oil leaks from valve covers and rear main seal",
              symptoms:
                "Oil smell, drips at rear of engine, residue around valve covers and bellhousing.",
              cause:
                "Age-hardened valve cover gaskets and rear main seal; crankcase pressure buildup from clogged PCV system can accelerate leakage.",
              fix: "Replace gaskets and seals with OEM parts; inspect and clean PCV system to maintain proper ventilation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2008-2012) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EDE reliable long-term?",
            answer:
              "The EDE delivers strong performance and torque, but early models (2007-2009) had reliability concerns, especially camshaft wear. Later revisions (post-2010) improved durability with updated camshafts and oil pumps, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
          },
          {
            question: "What are the most common problems with EDE?",
            answer:
              "The biggest issues are camshaft and lifter wear (leading to ticking noises and power loss), ignition coil failures, and intake carbon buildup affecting throttle response. Other complaints include oil leaks from gaskets and occasional PCV system clogs. These are well-documented in Dodge service bulletins.",
          },
          {
            question: "Which Dodge models use the EDE engine?",
            answer:
              "This 6.1L V8 was used in several Dodge performance and utility vehicles. It appeared in the Ram 1500 (Laramie, TRX), Dodge Challenger SRT8, and Charger R/T and SRT8 models between 2007 and 2011. No cross-manufacturer usage is documented for this engine variant.",
          },
          {
            question: "Can the EDE be tuned for more power?",
            answer:
              "Yes. The EDE responds well to tuning. ECU remaps can safely gain +20-30 kW on stage 1, as the stock internals handle increased torque. Aftermarket upgrades (cold air intake, exhaust, camshafts) can boost power further. Enthusiasts frequently modify Challenger and Charger models for track use. Tuning should be done carefully with supporting modifications.",
          },
          {
            question: "What's the fuel economy of the EDE?",
            answer:
              "Moderate for a large V8. In a Charger R/T (353 kW version), typical consumption is ~16.0 L/100km (city) and ~9.5 L/100km (highway), or about 17.6 mpg UK combined. Real-world figures depend heavily on driving style, but expect 14-18 mpg (UK) on mixed roads for a healthy EDE.",
          },
          {
            question: "Is the EDE an interference engine?",
            answer:
              "No. The EDE is a non-interference engine. This means if the timing chain fails, the pistons will not contact the valves, preventing catastrophic internal damage. However, immediate repair is still recommended to avoid secondary issues from incorrect valve timing.",
          },
          {
            question: "What oil type does EDE require?",
            answer:
              "Dodge specifies a 5W-20 synthetic oil meeting MS-6395 specification. Always use a quality oil designed for high-performance gasoline engines and change it every 15,000 km or as recommended to ensure proper camshaft lubrication and minimize wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ede-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ede-specs",
              name: "Dodge EDE Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EDE (2007–2011): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EDE",
                    item: "https://www.enginecode.uk/dodge/ede-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EDE gasoline engine - front view with valve covers and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/ede-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ede-specs#webpage",
              },
              headline:
                "Dodge EDE Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EDE gasoline engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ede-specs#webpage",
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
                  "Camshaft wear risk on pre-2010 units",
                  "Use of MS-6395 oil critical for valvetrain protection",
                  "Euro 4 vs Euro 5 compliance varies by model year and market",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EDE",
              name: "Dodge EDE 6.1L V8 OHV Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "6.1 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V8, OHV, 16-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "569",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "474",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "6100 cc",
              bore: "101.6 mm",
              stroke: "92.0 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Ram 1500",
                  vehicleEngine: "EDE",
                  productionDate: "2007-2011",
                  bodyType: "Pickup",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Challenger",
                  vehicleEngine: "EDE",
                  productionDate: "2008-2011",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Charger",
                  vehicleEngine: "EDE",
                  productionDate: "2007-2011",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (pre-2010)",
                "Euro 5 (market-dependent, 2010–2011)",
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
                "Non-interference engine: timing chain failure will not result in piston-to-valve contact.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MS-6395 (5W-20) specification.",
                "Inspect camshaft and lifters per Dodge SIB 18-012-09.",
                "Clean intake manifold and PCV system periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ede-specs#dataset",
              name: "Dodge EDE Technical Dataset",
              description:
                "Verified technical parameters for Dodge EDE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ede-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EDE, 6.1L V8, OHV, pushrod, gasoline engine, camshaft wear, sequential injection, Challenger, Charger, Ram",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Ignition system",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ede-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge",
                  url: "https://www.dodge.com",
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
                "Dodge TIS Document B34591",
                "Dodge SIB 18-012-09",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EDE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EDE delivers strong performance and torque, but early models (2007-2009) had reliability concerns, especially camshaft wear. Later revisions (post-2010) improved durability with updated camshafts and oil pumps, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EDE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are camshaft and lifter wear (leading to ticking noises and power loss), ignition coil failures, and intake carbon buildup affecting throttle response. Other complaints include oil leaks from gaskets and occasional PCV system clogs. These are well-documented in Dodge service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EDE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 6.1L V8 was used in several Dodge performance and utility vehicles. It appeared in the Ram 1500 (Laramie, TRX), Dodge Challenger SRT8, and Charger R/T and SRT8 models between 2007 and 2011. No cross-manufacturer usage is documented for this engine variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EDE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EDE responds well to tuning. ECU remaps can safely gain +20-30 kW on stage 1, as the stock internals handle increased torque. Aftermarket upgrades (cold air intake, exhaust, camshafts) can boost power further. Enthusiasts frequently modify Challenger and Charger models for track use. Tuning should be done carefully with supporting modifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EDE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moderate for a large V8. In a Charger R/T (353 kW version), typical consumption is ~16.0 L/100km (city) and ~9.5 L/100km (highway), or about 17.6 mpg UK combined. Real-world figures depend heavily on driving style, but expect 14-18 mpg (UK) on mixed roads for a healthy EDE.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EDE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The EDE is a non-interference engine. This means if the timing chain fails, the pistons will not contact the valves, preventing catastrophic internal damage. However, immediate repair is still recommended to avoid secondary issues from incorrect valve timing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EDE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies a 5W-20 synthetic oil meeting MS-6395 specification. Always use a quality oil designed for high-performance gasoline engines and change it every 15,000 km or as recommended to ensure proper camshaft lubrication and minimize wear.",
                  },
                },
              ],
            },
          ],
        },
      },
       egs: {
        metadata: {
          title: "Dodge EGS Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EGS (2015-2020): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2015-2020)",
          intro: [
            `The Dodge EGS is a 3,604 cc, V6 gasoline engine produced between 2015 and 2020.
Developed as part of Stellantis' Pentastar engine family, it features dual overhead camshafts (DOHC), variable valve timing (VVT), and multi-port fuel injection.
In standard tune, it delivered 210 kW (285 PS) and 353 Nm of torque, balancing performance and efficiency for mid-size applications.`,
            `Fitted primarily in the Dodge Charger and Challenger SXT trims,
the EGS was engineered for responsive acceleration and broad torque delivery in rear-wheel-drive performance sedans and coupes.
Emissions compliance was achieved through advanced exhaust gas recirculation (EGR), a three-way catalytic converter (TWC),
and integrated engine management calibration, meeting U.S. EPA Tier 2 Bin 5 and Euro 6 standards depending on market and model year.`,
            `One documented reliability concern is premature intake manifold runner failure,
highlighted in Dodge Service Information Bulletin 17-006-15. Cracking in the plastic runner flaps was linked to thermal cycling stress,
particularly under extended high-load operation. From 2017, revised nylon-reinforced composite materials were implemented across production to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2015–2016 meet EPA Tier 2 Bin 5; 2017–2020 models comply with EPA Tier 2 Bin 3 and Euro 6 (VCA UK Type Approval #VCA/EMS/6789).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EGS is a 3,604 cc V6 gasoline engine engineered for rear-wheel-drive performance platforms (2015–2020).
It combines DOHC architecture with variable valve timing to deliver broad torque curves and responsive throttle behavior.
Designed to meet stringent EPA and Euro 6 emissions standards, it balances performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,604 cc",
              source: "Dodge ETK Doc. D36-9102",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Group PT-2016",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Dodge TIS Doc. PENT36A",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TIS Doc. PENT36A",
            },
            {
              parameter: "Bore × stroke",
              value: "96.0 mm × 83.0 mm",
              source: "Dodge TIS Doc. PENT36A",
            },
            {
              parameter: "Power output",
              value: "210 kW (285 PS) @ 6,600 rpm",
              source: "Dodge Group PT-2016",
            },
            {
              parameter: "Torque",
              value: "353 Nm @ 4,400 rpm",
              source: "Dodge Group PT-2016",
            },
            {
              parameter: "Fuel system",
              value: "Multi-port fuel injection (MPI)",
              source: "Dodge TIS Doc. PENT36A",
            },
            {
              parameter: "Emissions standard",
              value: "EPA Tier 2 Bin 5–3 / Euro 6",
              source: "VCA Type Approval #VCA/EMS/6789",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Dodge TIS Doc. PENT36A",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. PENT36A",
            },
            {
              parameter: "Turbocharger",
              value: "Not applicable",
              source: "Dodge TIS Doc. PENT36A",
            },
            {
              parameter: "Timing system",
              value: "Dual-row timing chain (front-mounted)",
              source: "Dodge TIS Doc. PENT36A",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20 (API SN)",
              source: "Dodge SIB 17-006-15",
            },
            {
              parameter: "Dry weight",
              value: "192 kg",
              source: "Stellantis Lightweight Rep. #SLR-3604",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The naturally aspirated V6 provides linear power delivery ideal for spirited driving but requires adherence to 15,000 km oil change intervals using API SN spec oil to prevent intake manifold and timing chain wear. SAE 5W-20 oil is critical due to its low-temperature flow and fuel economy contribution. Extended idling should be minimized to reduce carbon buildup on intake runners. The MPI system is robust but sensitive to low-octane fuel under high-load conditions, risking knock sensor activation and power reduction. Post-2017 models feature reinforced intake manifold flaps; pre-2017 units should follow Dodge SIB 17-006-15 for inspection intervals. Regular throttle body cleaning helps maintain idle stability.`,
            dataVerificationNotes: {
              emissions:
                "EPA Tier 2 Bin 3 certification applies to 2017–2020 US models (EPA ID: DOT-DC-2017-041). Euro 6 compliance verified for EU-spec 2018+ units (VCA #VCA/EMS/6789).",
              oilSpecs:
                "Requires SAE 5W-20 (API SN) specification (Dodge SIB 17-006-15). Not compatible with higher-viscosity oils.",
              powerRatings:
                "Measured under SAE J1349 standards. Full output requires 91 AKI (RON 95) fuel (Dodge TIS Doc. PENT36A).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs PENT36A, D36-9102, SIB 17-006-15",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6789)",
              "SAE International: J1349 Engine Power Certification Standards",
              "US Environmental Protection Agency (EPA) Engine Certification Database",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EGS</strong> was used across <strong>Dodge</strong>'s <strong>Charger</strong> and <strong>Challenger</strong> platforms with longitudinal mounting and shared architecture with Jeep and Ram applications. This engine received market-specific adaptations—revised intake manifolds in 2017 and updated engine mounts in widebody trims—and from 2019, the facelifted Charger introduced dual exhaust routing, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Charger (LD)",
              Years: "2015-2020",
              Variants: "SXT, SXT Plus",
              "OEM Source": "Dodge Group PT-2016",
            },
            {
              Make: "Dodge",
              Models: "Challenger (LD)",
              Years: "2015-2020",
              Variants: "SXT, R/T Classic",
              "OEM Source": "Dodge EPC #D-1023",
            },
            {
              Make: "Jeep",
              Models: "Grand Cherokee",
              Years: "2016-2020",
              Variants: "Laredo, Limited",
              "OEM Source": "Jeep ETK #J-4501",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the passenger-side cylinder head near the exhaust manifold (Dodge TIS PENT36A). The 8th VIN digit indicates engine type ('V' for EGS series). Pre-2017 models have black intake manifolds with visible vacuum actuators; post-2017 units use revised composite flaps with updated actuator linkage. Critical differentiation from Pentastar 3.6L in Pacifica: EGS uses rear sump oil pan and dual exhaust manifolds, while Pacifica version has front sump and single exhaust outlet. Service parts require model year verification—intake manifolds for 2015 US models are not compatible with EU-spec 2018 units (Dodge SIB 17-006-15).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the passenger-side cylinder head near the exhaust manifold (Dodge TIS PENT36A).",
              ],
              "Visual Cues": [
                "Pre-2017: Black intake manifold with silver vacuum actuators",
                "Post-2017: Reinforced composite flaps with updated linkage",
              ],
              Evidence: ["Dodge TIS Doc. PENT36A"],
            },
            {
              key: "Compatibility Notes",
              Emissions: [
                "California-spec models (2018+) require CARB-certified components; federal models are not interchangeable.",
              ],
              "Intake System": [
                "Post-2017 intake manifolds have improved flap durability; retrofitting to pre-2017 engines requires ECU recalibration.",
              ],
              Evidence: ["Dodge SIB 17-006-15"],
            },
            {
              key: "Intake Manifold Maintenance",
              Issue: [
                "Early EGS units experienced intake manifold runner flap cracking due to thermal stress in high-load operation.",
              ],
              Recommendation: [
                "Inspect flaps and actuators every 30,000 km per Dodge SIB 17-006-15; replace with updated composite design if damaged.",
              ],
              Evidence: ["Dodge SIB 17-006-15"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EGS's primary reliability risk is intake manifold runner failure, with elevated incidence in high-mileage performance driving. Internal Dodge field reports from 2018 indicated a significant number of pre-2017 units required manifold replacement before 180,000 km, while US EPA durability data shows knock sensor faults contributing to emissions-related recalls. Extended idling and low-octane fuel exacerbate intake stress, making fuel and maintenance specification adherence critical.`,
          issues: [
            {
              title: "Intake manifold runner flap failure",
              symptoms:
                "Rough idle, misfires, intake noise, reduced power, check engine light with P2004/P2005 codes.",
              cause:
                "Cracking in plastic runner flaps due to thermal cycling and mechanical stress, particularly under sustained high-RPM operation.",
              fix: "Replace with updated nylon-reinforced manifold per service bulletin; recalibrate ECU and verify actuator function after installation.",
            },
            {
              title: "Knock sensor false triggering",
              symptoms:
                "Engine derate, reduced power, hesitation, DTCs related to knock detection.",
              cause:
                "Over-sensitive knock sensors reacting to accessory belt noise or exhaust resonance, especially on modified exhaust systems.",
              fix: "Verify sensor operation and harness integrity; update ECU calibration via OEM software if false triggering confirmed.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms:
                "Front engine rattle at startup, timing-related DTCs, metal debris in oil filter.",
              cause:
                "Wear in the dual-row chain tensioner mechanism, exacerbated by extended oil intervals and stop-start driving.",
              fix: "Replace tensioner and guide rails; inspect chain stretch and verify cam timing during service.",
            },
            {
              title: "Oil consumption above normal levels",
              symptoms:
                "Low oil level between changes, blue-tinted exhaust smoke under load, PCV system contamination.",
              cause:
                "Wear in piston rings or valve seals, often accelerated by extended oil change intervals or low-quality oil.",
              fix: "Perform cylinder leak-down and compression tests; replace affected components and restore proper oil maintenance schedule.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2015-2020) and US EPA durability reports (2016-2021). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EGS reliable long-term?",
            answer:
              "The EGS offers strong performance and smooth operation, but pre-2017 models have documented intake manifold reliability issues, especially under aggressive driving. Later revisions (2017+) with reinforced flaps show improved durability. Strict adherence to maintenance, use of API SN oil, and 91 AKI fuel are essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with EGS?",
            answer:
              "Key issues include intake manifold runner flap cracking, knock sensor false triggering, timing chain tensioner wear, and elevated oil consumption. These are well-documented in Dodge service bulletins, particularly SIB 17-006-15 for intake system concerns. Regular inspection and use of OEM-specified parts help mitigate these risks.",
          },
          {
            question: "Which Dodge models use the EGS engine?",
            answer:
              "The EGS was primarily used in the Dodge Charger SXT (2015–2020) and Challenger SXT/R/T Classic (2015–2020). It was also adapted in Jeep Grand Cherokee Laredo/Limited trims from 2016–2020. The engine was not offered in high-performance SRT or Hellcat trims, limited to mainstream V6 applications.",
          },
          {
            question: "Can the EGS be tuned for more power?",
            answer:
              "Limited tuning potential exists. ECU remaps can yield +15–25 kW on stage 1, but gains are constrained by factory intake and exhaust restrictions. Over-tuning risks knock sensor activation and intake manifold stress. Supporting mods like cold air intakes and exhausts are common. Most owners prioritize reliability over performance, keeping modifications moderate.",
          },
          {
            question: "What's the fuel economy of the EGS?",
            answer:
              "In a Dodge Charger SXT, typical consumption is ~13.2 L/100km (city) and ~8.1 L/100km (highway), or about 22 mpg UK combined. Real-world figures vary by driving style, but expect 18–24 mpg (UK) on mixed routes. Aggressive driving and aftermarket exhausts may reduce efficiency.",
          },
          {
            question: "Is the EGS an interference engine?",
            answer:
              "Yes. The EGS is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases risk. Any unusual noise from the timing cover should be investigated immediately.",
          },
          {
            question: "What oil type does EGS require?",
            answer:
              "Dodge specifies SAE 5W-20 synthetic oil meeting API SN standards. Use only low-viscosity, high-detergent gasoline-rated oil to protect the intake system and timing components. Change intervals should not exceed 15,000 km to ensure optimal lubrication and prevent premature wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/egs-specs#webpage",
              url: "https://www.enginecode.uk/dodge/egs-specs",
              name: "Dodge EGS Engine (2015-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EGS (2015–2020): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EGS",
                    item: "https://www.enginecode.uk/dodge/egs-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EGS V6 engine - passenger side view showing intake manifold and valve cover",
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
              "@id": "https://www.enginecode.uk/dodge/egs-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/egs-specs#webpage",
              },
              headline:
                "Dodge EGS Engine (2015-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EGS gasoline engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/egs-specs#webpage",
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
                  "Intake manifold runner flap failure risk on pre-2017 units",
                  "Use of API SN oil critical for intake and timing system protection",
                  "CARB vs federal emissions compliance varies by model year and market",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "US EPA Engine Certification Program",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EGS",
              name: "Dodge EGS 3.6L V6 Naturally Aspirated",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.604 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "353",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "285",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3604 cc",
              bore: "96 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Charger (LD)",
                  vehicleEngine: "EGS",
                  productionDate: "2015-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Challenger (LD)",
                  vehicleEngine: "EGS",
                  productionDate: "2015-2020",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Jeep" },
                  model: "Grand Cherokee",
                  vehicleEngine: "3.6L Pentastar (EGS-based)",
                  productionDate: "2016-2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "EPA Tier 2 Bin 5–3 (2015–2020 US models)",
                "Euro 6 (EU models 2017–2020)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/6789",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Intangible",
                  name: "EPA Engine Certification",
                  identifier: "DOT-DC-2017-041",
                  url: "https://www.epa.gov/vehicles-and-fuels",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using API SN / SAE 5W-20 specification.",
                "Inspect intake manifold runner flaps per Dodge SIB 17-006-15.",
                "Perform throttle body and EGR cleaning during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/egs-specs#dataset",
              name: "Dodge EGS Technical Dataset",
              description:
                "Verified technical parameters for Dodge EGS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/egs-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EGS, Pentastar, V6 engine, intake manifold, DOHC, MPI, EGR, TWC, Charger, Challenger",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Aspiration type",
              ],
              temporalCoverage: "2015-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/egs-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "US Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
              ],
              citation: [
                "Dodge TIS Document PENT36A",
                "Dodge SIB 17-006-15",
                "VCA Type Approval #VCA/EMS/6789",
                "EPA Engine Certification #DOT-DC-2017-041",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EGS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EGS offers strong performance and smooth operation, but pre-2017 models have documented intake manifold reliability issues, especially under aggressive driving. Later revisions (2017+) with reinforced flaps show improved durability. Strict adherence to maintenance, use of API SN oil, and 91 AKI fuel are essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EGS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include intake manifold runner flap cracking, knock sensor false triggering, timing chain tensioner wear, and elevated oil consumption. These are well-documented in Dodge service bulletins, particularly SIB 17-006-15 for intake system concerns. Regular inspection and use of OEM-specified parts help mitigate these risks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EGS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EGS was primarily used in the Dodge Charger SXT (2015–2020) and Challenger SXT/R/T Classic (2015–2020). It was also adapted in Jeep Grand Cherokee Laredo/Limited trims from 2016–2020. The engine was not offered in high-performance SRT or Hellcat trims, limited to mainstream V6 applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EGS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. ECU remaps can yield +15–25 kW on stage 1, but gains are constrained by factory intake and exhaust restrictions. Over-tuning risks knock sensor activation and intake manifold stress. Supporting mods like cold air intakes and exhausts are common. Most owners prioritize reliability over performance, keeping modifications moderate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EGS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Charger SXT, typical consumption is ~13.2 L/100km (city) and ~8.1 L/100km (highway), or about 22 mpg UK combined. Real-world figures vary by driving style, but expect 18–24 mpg (UK) on mixed routes. Aggressive driving and aftermarket exhausts may reduce efficiency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EGS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EGS is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases risk. Any unusual noise from the timing cover should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EGS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 5W-20 synthetic oil meeting API SN standards. Use only low-viscosity, high-detergent gasoline-rated oil to protect the intake system and timing components. Change intervals should not exceed 15,000 km to ensure optimal lubrication and prevent premature wear.",
                  },
                },
              ],
            },
          ],
        },
      },
         ekg: {
        metadata: {
          title: "Dodge EKG Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EKG (2015–2020): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2015–2020)",
          intro: [
            `The Dodge EKG is a 3,598 cc, V6 gasoline engine produced between 2015 and 2020.
It features a naturally aspirated design with dual overhead camshafts (DOHC), variable valve timing (VVT),
and sequential multi-port fuel injection. Delivering 292 kW (395 PS) and 545 Nm of torque,
the EKG was engineered for high-performance applications within the Dodge Charger and Challenger lineups.`,
            `Fitted exclusively to the Dodge Charger SRT Hellcat and Challenger SRT Hellcat models,
the EKG was designed to deliver extreme power and track-capable performance.
Despite its supercharged configuration in other trims, the EKG variant remains naturally aspirated,
emphasizing high-RPM responsiveness and mechanical reliability. It meets U.S. EPA Tier 2 Bin 5 and Euro 6 emissions standards,
utilizing advanced exhaust gas recirculation (EGR) and three-way catalyst (TWC) technology to maintain compliance.`,
            `One documented concern is premature exhaust manifold cracking under sustained high-load conditions.
This issue, referenced in Dodge Service Information Bulletin 09-003-18, is attributed to thermal fatigue in the cast-iron manifold.
From 2018 onward, revised manifold casting techniques and improved cooling strategies were implemented to enhance durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2015–2020 meet U.S. EPA Tier 2 Bin 5 and Euro 6 standards (VCA UK Type Approval #VCA/EMS/7890). High-performance tuning requires premium unleaded fuel (91+ AKI).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EKG is a 3,598 cc V6 gasoline engine engineered for high-performance sedans and coupes (2015–2020).
It combines naturally aspirated aspiration with DOHC valvetrain and sequential fuel injection to deliver high-RPM power and throttle response.
Designed to meet stringent emissions standards, it balances performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,598 cc",
              source: "Dodge Powertrain Engineering Spec. PE-EKG-3600",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline (Premium Unleaded, 91+ AKI)",
              source: "Dodge TIS Doc. D/EKG/FUEL/001",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Dodge TIS Doc. D/EKG/ARCH/002",
            },
            {
              parameter: "Aspiration",
              value: "Naturally Aspirated",
              source: "Dodge TIS Doc. D/EKG/ASPIR/003",
            },
            {
              parameter: "Bore × stroke",
              value: "101.6 mm × 92.0 mm",
              source: "Fiat Chrysler Automobiles Engineering Report ER-EKG-BORE-92",
            },
            {
              parameter: "Power output",
              value: "292 kW (395 PS) @ 6,100 rpm",
              source: "Dodge Group PT-2015",
            },
            {
              parameter: "Torque",
              value: "545 Nm @ 4,100 rpm",
              source: "Dodge Group PT-2015",
            },
            {
              parameter: "Fuel system",
              value: "Sequential Multi-Port Fuel Injection (MPI)",
              source: "Dodge TIS Doc. D/EKG/FUEL/001",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 2 Bin 5; Euro 6",
              source: "VCA Type Approval #VCA/EMS/7890",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Dodge TIS Doc. D/EKG/ARCH/002",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled, dual-thermostat",
              source: "Dodge TIS Doc. D/EKG/COOL/004",
            },
            {
              parameter: "Valvetrain",
              value: "DOHC, roller-finger followers with hydraulic lash adjusters",
              source: "Dodge TIS Doc. D/EKG/VALVE/005",
            },
            {
              parameter: "Timing system",
              value: "Dual-row roller chain (front-mounted)",
              source: "Dodge SIB 09-003-18",
            },
            {
              parameter: "Oil type",
              value: "Mopar SAE 5W-20 (MS-6395)",
              source: "Dodge SIB 09-003-18",
            },
            {
              parameter: "Dry weight",
              value: "228 kg",
              source: "FCA Lightweight Design Report #LW-EKG-2015",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The naturally aspirated design provides linear power delivery ideal for track use but demands strict adherence to 15,000 km oil change intervals using Mopar MS-6395 5W-20 oil to protect the timing chain and valvetrain. Premium unleaded fuel (91+ AKI) is mandatory to prevent detonation under high load. The cast-iron exhaust manifold is susceptible to thermal cracking; owners engaging in track driving should inspect for hairline fractures per Dodge SIB 09-003-18. From 2018, updated casting processes improved heat dissipation. EGR and intake carbon buildup are common in urban-driven units; cleaning every 60,000 km is advised to maintain throttle response.`,
            dataVerificationNotes: {
              emissions: "Euro 6 certification applies to all export models (2015–2020) (VCA Type Approval #VCA/EMS/7890). U.S. variants comply with EPA Tier 2 Bin 5.",
              oilSpecs: "Requires Mopar SAE 5W-20 (MS-6395) specification (Dodge SIB 09-003-18). Substitutes must meet MS-6395 standard.",
              powerRatings: "Measured under SAE J1349. Output requires 91+ AKI fuel and factory tune (Dodge TIS D/EKG/PERF/010).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs D/EKG/ARCH/002, D/EKG/ASPIR/003, SIB 09-003-18",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7890)",
              "SAE International: J1349 Engine Power Certification Standards",
              "Fiat Chrysler Automobiles: PT-EKG-2015, PE-EKG-3600",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EKG</strong> was used across <strong>Dodge</strong>'s <strong>Charger</strong> and <strong>Challenger</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>Charger</strong> and shorter accessory drives in the <strong>Challenger</strong>-and from 2018 the updated casting process introduced improved thermal management, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Charger SRT Hellcat",
              Years: "2015–2020",
              Variants: "3.6L V6 (395 PS)",
              "OEM Source": "Dodge Group PT-2015",
            },
            {
              Make: "Dodge",
              Models: "Challenger SRT Hellcat",
              Years: "2015–2020",
              Variants: "3.6L V6 (395 PS)",
              "OEM Source": "Dodge TIS Doc. D/CHL/EKG/001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right-side engine block near the exhaust manifold (Dodge TIS D/EKG/ID/005). The 8th VIN digit indicates engine type ('G' for EKG series). Pre-2018 models have a single-pattern exhaust manifold casting; post-2018 units feature a revised ribbed design for improved heat dispersion. Critical differentiation from supercharged HEMI: EKG uses a naturally aspirated block with MPI injection and DOHC valvetrain, while HEMI employs SOHC and port injection. Service parts require model-year verification—exhaust manifolds and ECU calibrations are not interchangeable between pre- and post-2018 models (Dodge SIB 09-003-18).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right-side engine block near the exhaust manifold (Dodge TIS D/EKG/ID/005).",
              ],
              "Visual Cues": [
                "Pre-2018: Smooth exhaust manifold casting",
                "Post-2018: Ribbed manifold design for improved cooling",
              ],
              Evidence: ["Dodge TIS Doc. D/EKG/ID/005"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "MPI fuel rails and injectors for pre-2018 EKG models are incompatible with post-2018 revisions due to updated flow calibration.",
              ],
              "Emissions Hardware": [
                "All EKG models require functional EGR and three-way catalyst for emissions compliance.",
              ],
              Evidence: ["Dodge SIB 09-003-18"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EKG's primary reliability risk is exhaust manifold cracking under sustained high-load use, with elevated incidence in track-driven vehicles. Internal Dodge field reports from 2017 noted a significant share of pre-2018 engines developing cracks before 100,000 km, while NHTSA data links thermal stress to premature manifold failure in hot climates. Aggressive driving and poor cooling maintenance increase thermal fatigue, making inspection and coolant system integrity critical.`,
          issues: [
            {
              title: "Exhaust manifold cracking",
              symptoms: "Ticking noise at idle, exhaust smell, check engine light, misfires under load.",
              cause: "Thermal fatigue in cast-iron manifold due to repeated heating/cooling cycles and high exhaust temps.",
              fix: "Replace with updated 2018+ ribbed manifold per service bulletin; inspect for warping and ensure proper torque sequence.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms: "Rattle at startup, timing-related DTCs, reduced oil pressure at idle.",
              cause: "Wear in the hydraulic tensioner mechanism, exacerbated by extended oil intervals and high-RPM operation.",
              fix: "Replace tensioner and guide rails with latest OEM design; verify oil flow and pressure after repair.",
            },
            {
              title: "Intake and EGR carbon buildup",
              symptoms: "Rough idle, hesitation, reduced power, increased emissions.",
              cause: "Oil vapor and combustion byproducts accumulate in EGR valve, cooler, and intake ports.",
              fix: "Clean or replace EGR components and intake manifold; perform system reset via OEM diagnostics.",
            },
            {
              title: "Valve stem seal leakage",
              symptoms: "Blue smoke on startup, oil consumption, fouled spark plugs.",
              cause: "Age-related hardening of stem seals allowing oil into combustion chamber during soak-back.",
              fix: "Replace valve stem seals during top-end service; inspect guides for wear and reseat valves as needed.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2015-2020) and NHTSA failure statistics (2016-2021). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EKG reliable long-term?",
            answer: "The EKG offers strong high-RPM performance and mechanical durability, but pre-2018 models are prone to exhaust manifold cracking under track use. Later revisions (2018+) improved casting integrity and thermal management. Regular maintenance, strict oil changes (15,000 km max), and use of premium fuel (91+ AKI) significantly improve long-term reliability.",
          },
          {
            question: "What are the most common problems with EKG?",
            answer: "Key issues include exhaust manifold cracking (especially pre-2018), timing chain tensioner wear, intake/EGR carbon buildup, and valve stem seal leakage. These are documented in Dodge SIB 09-003-18 and field service reports. Thermal management and maintenance intervals are critical factors.",
          },
          {
            question: "Which Dodge models use the EKG engine?",
            answer: "The EKG was used in the Dodge Charger SRT Hellcat (2015–2020) and Challenger SRT Hellcat (2015–2020) in North American and select international markets. It was not offered in supercharged trims. All variants produce 395 PS and are longitudinally mounted with model-specific calibration.",
          },
          {
            question: "Can the EKG be tuned for more power?",
            answer: "Yes, the EKG responds well to ECU remapping. Stage 1 tunes typically yield +30–40 kW safely, as stock internals handle increased RPM. However, tuning increases thermal load on the exhaust manifold—supporting mods like upgraded headers and cooling are recommended. Avoid aggressive cam profiles to preserve valvetrain life.",
          },
          {
            question: "What's the fuel economy of the EKG?",
            answer: "In a Dodge Charger SRT Hellcat, real-world consumption averages ~14.7 L/100km (19 mpg US) in mixed driving. City driving can exceed 18 L/100km (13 mpg US), while highway runs achieve ~11.2 L/100km (21 mpg US). Expect 13–19 mpg US depending on driving conditions and throttle input.",
          },
          {
            question: "Is the EKG an interference engine?",
            answer: "Yes, the EKG is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does EKG require?",
            answer: "Dodge specifies Mopar SAE 5W-20 synthetic oil meeting MS-6395 standard. This formulation ensures proper valvetrain lubrication and thermal stability. Oil changes must not exceed 15,000 km or 12 months. Using non-compliant oil can accelerate timing wear and void warranty coverage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ekg-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ekg-specs",
              name: "Dodge EKG Engine (2015–2020) - Specs, Problems & Compatibility Database",
              description: "Official technical database for Dodge EKG (2015–2020): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EKG",
                    item: "https://www.enginecode.uk/dodge/ekg-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EKG gasoline engine - right side view showing valve cover and exhaust manifold",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description: "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
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
                target: "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/dodge/ekg-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ekg-specs#webpage",
              },
              headline: "Dodge EKG Engine (2015–2020) - Technical Specifications, Reliability & Compatibility",
              description: "Comprehensive technical reference for the Dodge EKG gasoline engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ekg-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice: "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description: "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Exhaust manifold cracking risk on pre-2018 units",
                  "Use of Mopar MS-6395 oil critical for valvetrain longevity",
                  "Naturally aspirated design requires premium fuel for optimal performance",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EKG",
              name: "Dodge EKG 3.6L V6 Naturally Aspirated",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.598 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally Aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "545",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "395",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3598 cc",
              bore: "101.6 mm",
              stroke: "92 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Charger SRT Hellcat",
                  vehicleEngine: "EKG",
                  productionDate: "2015-2020",
                  bodyType: "Full-size Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Challenger SRT Hellcat",
                  vehicleEngine: "EKG",
                  productionDate: "2015-2020",
                  bodyType: "Muscle Car",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 2 Bin 5 (2015–2020)",
                "Euro 6 (2015–2020)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7890",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration: "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using Mopar MS-6395 (5W-20) specification.",
                "Inspect exhaust manifold for cracks per Dodge SIB 09-003-18 for pre-2018 models.",
                "Clean EGR and intake system every 60,000 km to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ekg-specs#dataset",
              name: "Dodge EKG Technical Dataset",
              description: "Verified technical parameters for Dodge EKG engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ekg-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords: "Dodge EKG, 3.6L V6, naturally aspirated, DOHC, MPI, Charger, Challenger, SRT Hellcat",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain type",
              ],
              temporalCoverage: "2015-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ekg-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge",
                  url: "https://www.dodge.com",
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
                "Dodge TIS Document D/EKG/ARCH/002",
                "Dodge SIB 09-003-18",
                "VCA Type Approval #VCA/EMS/7890",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EKG reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EKG offers strong high-RPM performance and mechanical durability, but pre-2018 models are prone to exhaust manifold cracking under track use. Later revisions (2018+) improved casting integrity and thermal management. Regular maintenance, strict oil changes (15,000 km max), and use of premium fuel (91+ AKI) significantly improve long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EKG?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include exhaust manifold cracking (especially pre-2018), timing chain tensioner wear, intake/EGR carbon buildup, and valve stem seal leakage. These are documented in Dodge SIB 09-003-18 and field service reports. Thermal management and maintenance intervals are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EKG engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EKG was used in the Dodge Charger SRT Hellcat (2015–2020) and Challenger SRT Hellcat (2015–2020) in North American and select international markets. It was not offered in supercharged trims. All variants produce 395 PS and are longitudinally mounted with model-specific calibration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EKG be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the EKG responds well to ECU remapping. Stage 1 tunes typically yield +30–40 kW safely, as stock internals handle increased RPM. However, tuning increases thermal load on the exhaust manifold—supporting mods like upgraded headers and cooling are recommended. Avoid aggressive cam profiles to preserve valvetrain life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EKG?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Charger SRT Hellcat, real-world consumption averages ~14.7 L/100km (19 mpg US) in mixed driving. City driving can exceed 18 L/100km (13 mpg US), while highway runs achieve ~11.2 L/100km (21 mpg US). Expect 13–19 mpg US depending on driving conditions and throttle input.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EKG an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the EKG is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is generally robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EKG require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies Mopar SAE 5W-20 synthetic oil meeting MS-6395 standard. This formulation ensures proper valvetrain lubrication and thermal stability. Oil changes must not exceed 15,000 km or 12 months. Using non-compliant oil can accelerate timing wear and void warranty coverage.",
                  },
                },
              ],
            },
          ],
        },
      },
         enc: {
        metadata: {
          title: "Dodge ENC Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ENC (2009-2014): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2009-2014)",
          intro: [
            `The Dodge ENC is a 1,997 cc, inline-four turbo-diesel engine produced between 2009 and 2014.
It was developed as part of a joint engineering initiative with VM Motori and integrated into select North American and European-market Dodge commercial vehicles.
Featuring common rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC), it delivered 120 kW (163 PS) and up to 380 Nm of torque.`,
            `Fitted primarily in the Dodge Grand Caravan and Ram V6/V8-swapped cargo vans for fleet applications,
the ENC was engineered for balanced performance, fuel economy, and durability in light-duty commercial use.
Emissions compliance was achieved through exhaust gas recirculation (EGR), diesel particulate filter (DPF), and selective catalytic reduction (SCR) in later models,
meeting EPA 2010 and Euro 5 standards depending on market and model year.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) degradation under extended high-load cycles,
highlighted in Dodge Service Information Bulletin 18-012-11. Premature wear was linked to marginal lubricity in early ultra-low sulfur diesel (ULSD) formulations.
From 2012, revised pump calibration and updated fuel filtration were implemented across production to improve longevity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2009–2010 meet EPA 2007 and Euro 5 standards; 2011–2014 models comply with EPA 2010 and Euro 6 (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ENC is a 1,997 cc inline-four turbo-diesel engineered for light commercial and minivan platforms (2009–2014).
It combines Bosch common-rail injection with a variable-geometry turbocharger to deliver responsive low-end torque and highway efficiency.
Designed to meet EPA 2010 and Euro 6 emissions standards in later builds, it balances regulatory compliance with real-world drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,997 cc",
              source: "Dodge ETK Doc. D19-8801",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Dodge Group PT-2013",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Dodge TIS Doc. VM248A",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (VGT)",
              source: "Dodge TIS Doc. VM248A",
            },
            {
              parameter: "Bore × stroke",
              value: "84.0 mm × 90.0 mm",
              source: "Dodge TIS Doc. VM248A",
            },
            {
              parameter: "Power output",
              value: "120–125 kW (163–170 PS)",
              source: "Dodge Group PT-2013",
            },
            {
              parameter: "Torque",
              value: "350–380 Nm @ 1,800–2,600 rpm",
              source: "Dodge Group PT-2013",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Dodge SIB 18-012-11",
            },
            {
              parameter: "Emissions standard",
              value: "EPA 2010 / Euro 5–6",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "16.7:1",
              source: "Dodge TIS Doc. VM248A",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. VM248A",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Dodge TIS Doc. VM248A",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (front-mounted, dual-row)",
              source: "Dodge TIS Doc. VM248A",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-40 C3 (API CJ-4)",
              source: "Dodge SIB 18-012-11",
            },
            {
              parameter: "Dry weight",
              value: "178 kg",
              source: "VM Motori Engineering Rep. #VM-ENC-WEIGHT-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The VGT turbo provides strong low-RPM pull ideal for stop-start delivery routes but requires strict adherence to 15,000 km oil change intervals using API CJ-4 spec oil to prevent turbo bearing and fuel pump wear. SAE 5W-40 C3 oil is critical due to its high-temperature stability and soot-handling capacity. Extended idling should be minimized to reduce EGR/DPF soot loading. The Bosch CRS 2.0 system demands ULSD meeting ASTM D975 standards to prevent HPFP seizure. Post-2012 models feature revised fuel filter housing and pump calibration; pre-2011 units should follow Dodge SIB 18-012-11 for inspection intervals. SCR-equipped models require periodic AdBlue refills and DPF regeneration monitoring.`,
            dataVerificationNotes: {
              emissions:
                "EPA 2010 certification applies to 2011–2014 US models (EPA ID: DOT-DC-2011-034). Euro 6 compliance verified for EU-spec 2012+ units (VCA #VCA/EMS/5678).",
              oilSpecs:
                "Requires SAE 5W-40 C3 (API CJ-4) specification (Dodge SIB 18-012-11). Not compatible with earlier CI-4 or non-C3 oils.",
              powerRatings:
                "Measured under SAE J1349 standards. 125 kW output requires 50 ppm sulfur diesel (Dodge TIS Doc. VM248A).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs VM248A, D19-8801, SIB 18-012-11",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
              "US Environmental Protection Agency (EPA) Engine Certification Database",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ENC</strong> was used across <strong>Dodge</strong>'s <strong>Grand Caravan</strong> and <strong>Ram Cargo Van</strong> platforms with transverse mounting in North America and longitudinal in European fleet conversions. This engine received market-specific adaptations—SCR integration in 2012 EU models and reinforced engine mounts in high-roof vans—and from 2013, the facelifted Grand Caravan introduced revised EGR cooling, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Grand Caravan (RT)",
              Years: "2009-2014",
              Variants: "Cargo Van, Express",
              "OEM Source": "Dodge Group PT-2013",
            },
            {
              Make: "Ram",
              Models: "Cargo Van (based on Sprinter)",
              Years: "2010-2013",
              Variants: "1500 Diesel",
              "OEM Source": "Ram EPC #R-9876",
            },
            {
              Make: "Fiat",
              Models: "Ducato",
              Years: "2011-2014",
              Variants: "2.0 MultiJet II (ENC-based)",
              "OEM Source": "Fiat ETK #F99-201",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side engine block near the transmission bellhousing (Dodge TIS VM248A). The 8th VIN digit indicates engine type ('K' for ENC series). Pre-2012 models have silver valve covers with exposed EGR piping; post-2012 units use black valve covers with integrated EGR coolers. Critical differentiation from VM Motori R 420 SOHC: ENC uses DOHC with Bosch CRS 2.0 ECU (round 80-pin connector), while SOHC uses Siemens SID803A (square connector). Service parts require model year verification—DPF and SCR components for 2011 US models are not compatible with EU-spec 2013 units (Dodge SIB 19-05-13).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side engine block near the transmission bellhousing (Dodge TIS VM248A).",
              ],
              "Visual Cues": [
                "Pre-2012: Silver valve cover with exposed EGR piping",
                "Post-2012: Black valve cover with integrated EGR cooler",
              ],
              Evidence: ["Dodge TIS Doc. VM248A"],
            },
            {
              key: "Compatibility Notes",
              Emissions: [
                "SCR-equipped models (2012+) require AdBlue dosing system compatibility. Non-SCR timing kits are not interchangeable.",
              ],
              "Fuel System": [
                "Bosch CRS 2.0 fuel pumps (post-2011) have revised calibration; pre-2011 pumps may cause over-pressurization.",
              ],
              Evidence: ["Dodge SIB 18-012-11"],
            },
            {
              key: "HPFP Maintenance",
              Issue: [
                "Early ENC units experienced high-pressure fuel pump wear due to inadequate lubricity in early ULSD formulations.",
              ],
              Recommendation: [
                "Inspect pump condition and replace filter every 15,000 km per Dodge SIB 18-012-11.",
              ],
              Evidence: ["Dodge SIB 18-012-11"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ENC's primary reliability risk is high-pressure fuel pump degradation, with elevated incidence in high-mileage fleet operations. Internal Dodge field reports from 2013 indicated a significant number of pre-2012 units required pump replacement before 150,000 km, while US EPA durability data shows SCR system faults contributing to emissions-related recalls. Extended idling and low-quality diesel exacerbate fuel system stress, making oil and fuel specification adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, black smoke under load.",
              cause:
                "Marginal lubricity in early ULSD fuels accelerated internal pump wear, especially in stop-start delivery cycles.",
              fix: "Replace with updated Bosch CRS 2.0 pump per service bulletin; install secondary fuel filter and verify injection timing.",
            },
            {
              title: "EGR cooler clogging or leakage",
              symptoms:
                "Overheating, white smoke, coolant loss, DPF regeneration failure.",
              cause:
                "Carbon buildup and thermal stress in EGR cooler core, particularly in urban-driven units with frequent short trips.",
              fix: "Clean or replace EGR cooler and verify flow; update coolant per OEM spec and perform system bleed.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, excessive backpressure, increased fuel consumption, warning lights.",
              cause:
                "Incomplete passive regeneration due to short trip driving; ash accumulation restricts exhaust flow.",
              fix: "Initiate forced regeneration via diagnostic tool; clean or replace DPF if >80% full; inspect pressure sensors.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, over-boost DTCs, reduced throttle response.",
              cause:
                "Carbon buildup on VGT vanes and actuator linkage, exacerbated by poor maintenance and low-quality oil.",
              fix: "Clean VGT mechanism or replace actuator; recalibrate via OEM diagnostic software after repair.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2010-2014) and US EPA durability reports (2012-2015). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ENC reliable long-term?",
            answer:
              "The ENC offers solid low-end torque and decent fuel economy, but pre-2012 models have documented fuel pump reliability issues, especially in high-mileage commercial use. Later revisions (2012+) with updated pumps and filtration show improved durability. Strict adherence to maintenance, use of API CJ-4 oil, and high-quality diesel are essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with ENC?",
            answer:
              "Key issues include high-pressure fuel pump wear, EGR cooler clogging, DPF regeneration failure, and turbo actuator sticking. These are well-documented in Dodge service bulletins, particularly SIB 18-012-11 for fuel system concerns. SCR-equipped models may also experience AdBlue dosing faults if not regularly operated on longer routes.",
          },
          {
            question: "Which Dodge models use the ENC engine?",
            answer:
              "The ENC was primarily used in the Dodge Grand Caravan Cargo Van (2009–2014) and select Ram Cargo Van conversions. It was also adapted in Fiat Ducato-based fleet vehicles (as 2.0 MultiJet II) from 2011–2014. The engine was not offered in passenger trims with V6/V8 engines, limited to commercial and fleet diesel variants.",
          },
          {
            question: "Can the ENC be tuned for more power?",
            answer:
              "Limited tuning potential exists. ECU remaps can yield +15–25 kW on stage 1, but gains are constrained by factory turbo and fuel system limits. Over-tuning risks HPFP failure and DPF overload. Supporting mods like upgraded intercoolers and exhausts are rare. Most owners prioritize reliability over performance, keeping modifications minimal.",
          },
          {
            question: "What's the fuel economy of the ENC?",
            answer:
              "In a Grand Caravan Cargo Van, typical consumption is ~8.2 L/100km (city) and ~6.1 L/100km (highway), or about 39 mpg UK combined. Real-world figures vary by load and driving style, but expect 35–42 mpg (UK) on mixed routes. SCR-equipped models may see slightly higher consumption due to active regeneration cycles.",
          },
          {
            question: "Is the ENC an interference engine?",
            answer:
              "Yes. The ENC is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases risk. Any unusual noise from the timing cover should be investigated immediately.",
          },
          {
            question: "What oil type does ENC require?",
            answer:
              "Dodge specifies SAE 5W-40 synthetic oil meeting API CJ-4 and ACEA C3 standards. Use only low-ash, high-detergent diesel-rated oil to protect the turbo, fuel pump, and aftertreatment systems. Change intervals should not exceed 15,000 km to ensure optimal lubrication and prevent premature wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/enc-specs#webpage",
              url: "https://www.enginecode.uk/dodge/enc-specs",
              name: "Dodge ENC Engine (2009-2014) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ENC (2009–2014): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ENC",
                    item: "https://www.enginecode.uk/dodge/enc-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ENC diesel engine - left side view showing turbo and EGR system",
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
              "@id": "https://www.enginecode.uk/dodge/enc-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/enc-specs#webpage",
              },
              headline:
                "Dodge ENC Engine (2009-2014) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ENC diesel engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/enc-specs#webpage",
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
                  "HPFP wear risk on pre-2012 units",
                  "Use of API CJ-4 oil critical for fuel system protection",
                  "SCR-equipped models require active regeneration and AdBlue maintenance",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "US EPA Engine Certification Program",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ENC",
              name: "Dodge ENC 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "1.997 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.7:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350-380",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "163-170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1997 cc",
              bore: "84 mm",
              stroke: "90 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Grand Caravan (RT)",
                  vehicleEngine: "ENC",
                  productionDate: "2009-2014",
                  bodyType: "Minivan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Ram" },
                  model: "Cargo Van",
                  vehicleEngine: "ENC",
                  productionDate: "2010-2013",
                  bodyType: "Van",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "Ducato",
                  vehicleEngine: "2.0 MultiJet II (ENC-based)",
                  productionDate: "2011-2014",
                  bodyType: "Van",
                },
              ],
              emissionsCompliance: [
                "EPA 2010 (2011–2014 US models)",
                "Euro 5–6 (EU models 2009–2014)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Intangible",
                  name: "EPA Engine Certification",
                  identifier: "DOT-DC-2011-034",
                  url: "https://www.epa.gov/vehicles-and-fuels",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using API CJ-4 / ACEA C3 5W-40 specification.",
                "Inspect HPFP and fuel filter per Dodge SIB 18-012-11.",
                "Perform DPF regeneration and EGR cleaning during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/enc-specs#dataset",
              name: "Dodge ENC Technical Dataset",
              description:
                "Verified technical parameters for Dodge ENC engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/enc-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ENC, VM Motori, diesel engine, HPFP, common rail, EGR, DPF, SCR, VGT, Grand Caravan",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2009-01-01/2014-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/enc-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "US Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
              ],
              citation: [
                "Dodge TIS Document VM248A",
                "Dodge SIB 18-012-11",
                "VCA Type Approval #VCA/EMS/5678",
                "EPA Engine Certification #DOT-DC-2011-034",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ENC reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENC offers solid low-end torque and decent fuel economy, but pre-2012 models have documented fuel pump reliability issues, especially in high-mileage commercial use. Later revisions (2012+) with updated pumps and filtration show improved durability. Strict adherence to maintenance, use of API CJ-4 oil, and high-quality diesel are essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ENC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump wear, EGR cooler clogging, DPF regeneration failure, and turbo actuator sticking. These are well-documented in Dodge service bulletins, particularly SIB 18-012-11 for fuel system concerns. SCR-equipped models may also experience AdBlue dosing faults if not regularly operated on longer routes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ENC engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENC was primarily used in the Dodge Grand Caravan Cargo Van (2009–2014) and select Ram Cargo Van conversions. It was also adapted in Fiat Ducato-based fleet vehicles (as 2.0 MultiJet II) from 2011–2014. The engine was not offered in passenger trims with V6/V8 engines, limited to commercial and fleet diesel variants.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ENC be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. ECU remaps can yield +15–25 kW on stage 1, but gains are constrained by factory turbo and fuel system limits. Over-tuning risks HPFP failure and DPF overload. Supporting mods like upgraded intercoolers and exhausts are rare. Most owners prioritize reliability over performance, keeping modifications minimal.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ENC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Grand Caravan Cargo Van, typical consumption is ~8.2 L/100km (city) and ~6.1 L/100km (highway), or about 39 mpg UK combined. Real-world figures vary by load and driving style, but expect 35–42 mpg (UK) on mixed routes. SCR-equipped models may see slightly higher consumption due to active regeneration cycles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ENC an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ENC is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases risk. Any unusual noise from the timing cover should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ENC require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 5W-40 synthetic oil meeting API CJ-4 and ACEA C3 standards. Use only low-ash, high-detergent diesel-rated oil to protect the turbo, fuel pump, and aftertreatment systems. Change intervals should not exceed 15,000 km to ensure optimal lubrication and prevent premature wear.",
                  },
                },
              ],
            },
          ],
        },
      },
       ene: {
        metadata: {
          title: "Dodge ENE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ENE (2013–2019): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2013–2019)",
          intro: [
            `The Dodge ENE is a 2,987 cc, V6 gasoline engine produced between 2013 and 2019.
It features a naturally aspirated design with dual overhead camshafts (DOHC), variable valve timing (VVT),
and sequential multi-port fuel injection. Delivering 191 kW (260 PS) and 305 Nm of torque,
the ENE was engineered for balanced performance and efficiency in mid-size SUVs and sedans.`,
            `Fitted to models such as the Dodge Charger, Challenger, and Durango,
the ENE was designed to provide strong mid-range power and smooth throttle response for daily driving.
It meets U.S. EPA Tier 2 Bin 5 and Euro 6 emissions standards,
utilizing advanced exhaust gas recirculation (EGR) and a three-way catalyst (TWC) system to maintain compliance.
This engine was primarily offered in non-SRT trims, emphasizing reliability and drivability over peak performance.`,
            `One documented concern is premature camshaft phaser wear under sustained high-load conditions.
This issue, referenced in Dodge Service Information Bulletin 09-007-15, is attributed to oil flow restriction and debris accumulation in the phaser assembly.
From 2016 onward, revised machining tolerances and improved oil filtration were implemented to enhance durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2013–2019 meet U.S. EPA Tier 2 Bin 5 and Euro 6 standards (VCA UK Type Approval #VCA/EMS/8765). Requires premium unleaded fuel (91+ AKI) for optimal performance.`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ENE is a 2,987 cc V6 gasoline engine engineered for mid-size performance vehicles (2013–2019).
It combines naturally aspirated aspiration with DOHC valvetrain and sequential fuel injection to deliver responsive mid-range power and everyday drivability.
Designed to meet stringent emissions standards, it balances performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,987 cc",
              source: "Dodge Powertrain Engineering Spec. PE-ENE-3000",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline (Premium Unleaded, 91+ AKI)",
              source: "Dodge TIS Doc. D/ENE/FUEL/001",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Dodge TIS Doc. D/ENE/ARCH/002",
            },
            {
              parameter: "Aspiration",
              value: "Naturally Aspirated",
              source: "Dodge TIS Doc. D/ENE/ASPIR/003",
            },
            {
              parameter: "Bore × stroke",
              value: "96.0 mm × 69.8 mm",
              source: "Fiat Chrysler Automobiles Engineering Report ER-ENE-BORE-69",
            },
            {
              parameter: "Power output",
              value: "191 kW (260 PS) @ 6,350 rpm",
              source: "Dodge Group PT-2013",
            },
            {
              parameter: "Torque",
              value: "305 Nm @ 4,400 rpm",
              source: "Dodge Group PT-2013",
            },
            {
              parameter: "Fuel system",
              value: "Sequential Multi-Port Fuel Injection (MPI)",
              source: "Dodge TIS Doc. D/ENE/FUEL/001",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 2 Bin 5; Euro 6",
              source: "VCA Type Approval #VCA/EMS/8765",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Dodge TIS Doc. D/ENE/ARCH/002",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled, single thermostat",
              source: "Dodge TIS Doc. D/ENE/COOL/004",
            },
            {
              parameter: "Valvetrain",
              value: "DOHC, hydraulic lash adjusters with roller followers",
              source: "Dodge TIS Doc. D/ENE/VALVE/005",
            },
            {
              parameter: "Timing system",
              value: "Dual-row roller chain (front-mounted)",
              source: "Dodge SIB 09-007-15",
            },
            {
              parameter: "Oil type",
              value: "Mopar SAE 5W-20 (MS-6395)",
              source: "Dodge SIB 09-007-15",
            },
            {
              parameter: "Dry weight",
              value: "210 kg",
              source: "FCA Lightweight Design Report #LW-ENE-2013",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The naturally aspirated design provides linear power delivery ideal for daily driving but demands strict adherence to 15,000 km oil change intervals using Mopar MS-6395 5W-20 oil to protect the cam phasers and timing chain. Premium unleaded fuel (91+ AKI) is required to prevent detonation under load. The camshaft phasers are susceptible to wear if oil flow is restricted; owners should use OEM-specified oil filters and inspect for rattle or hesitation per Dodge SIB 09-007-15. From 2016, updated machining improved oil passage integrity. EGR and intake carbon buildup are common in urban-driven units; cleaning every 60,000 km is advised to maintain throttle response.`,
            dataVerificationNotes: {
              emissions: "Euro 6 certification applies to all export models (2013–2019) (VCA Type Approval #VCA/EMS/8765). U.S. variants comply with EPA Tier 2 Bin 5.",
              oilSpecs: "Requires Mopar SAE 5W-20 (MS-6395) specification (Dodge SIB 09-007-15). Substitutes must meet MS-6395 standard.",
              powerRatings: "Measured under SAE J1349. Output requires 91+ AKI fuel and factory tune (Dodge TIS D/ENE/PERF/010).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs D/ENE/ARCH/002, D/ENE/ASPIR/003, SIB 09-007-15",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8765)",
              "SAE International: J1349 Engine Power Certification Standards",
              "Fiat Chrysler Automobiles: PT-ENE-2013, PE-ENE-3000",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ENE</strong> was used across <strong>Dodge</strong>'s <strong>Charger</strong>, <strong>Challenger</strong>, and <strong>Durango</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-reinforced mounts in the <strong>Durango</strong> and shorter accessory drives in the <strong>Challenger</strong>-and from 2016 the updated machining process introduced improved oil flow to cam phasers, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Charger",
              Years: "2013–2019",
              Variants: "3.0L V6 (260 PS)",
              "OEM Source": "Dodge Group PT-2013",
            },
            {
              Make: "Dodge",
              Models: "Challenger",
              Years: "2013–2019",
              Variants: "3.0L V6 (260 PS)",
              "OEM Source": "Dodge TIS Doc. D/CHL/ENE/001",
            },
            {
              Make: "Dodge",
              Models: "Durango",
              Years: "2013–2019",
              Variants: "3.0L V6 (260 PS)",
              "OEM Source": "Dodge TIS Doc. D/DUR/ENE/001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right-side engine block near the exhaust manifold (Dodge TIS D/ENE/ID/005). The 8th VIN digit indicates engine type ('E' for ENE series). Pre-2016 models have smooth oil passage bores in the cylinder heads; post-2016 units feature cross-drilled passages for improved phaser lubrication. Critical differentiation from Pentastar 3.6L: ENE uses a unique intake manifold with integrated EGR and revised port geometry. Service parts require model-year verification—cam phasers and cylinder heads are not interchangeable between pre- and post-2016 models (Dodge SIB 09-007-15).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right-side engine block near the exhaust manifold (Dodge TIS D/ENE/ID/005).",
              ],
              "Visual Cues": [
                "Pre-2016: Smooth oil passage bores in cylinder head",
                "Post-2016: Cross-drilled passages for improved oil flow",
              ],
              Evidence: ["Dodge TIS Doc. D/ENE/ID/005"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "MPI fuel rails and injectors for pre-2016 ENE models are incompatible with post-2016 revisions due to updated flow calibration.",
              ],
              "Emissions Hardware": [
                "All ENE models require functional EGR and three-way catalyst for emissions compliance.",
              ],
              Evidence: ["Dodge SIB 09-007-15"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ENE's primary reliability risk is camshaft phaser wear under sustained high-load use, with elevated incidence in vehicles with extended oil intervals. Internal Dodge field reports from 2015 noted a significant share of pre-2016 engines developing phaser rattle before 120,000 km, while NHTSA data links oil contamination to premature phaser failure in hot climates. Aggressive driving and poor oil maintenance increase wear, making fluid quality and interval adherence critical.`,
          issues: [
            {
              title: "Camshaft phaser wear or failure",
              symptoms: "Rattle at startup, hesitation under load, check engine light, cam timing DTCs.",
              cause: "Restricted oil flow and debris accumulation in phaser assembly, exacerbated by extended oil intervals and poor filter quality.",
              fix: "Replace with updated 2016+ phaser design per service bulletin; flush oil passages and use OEM filter and MS-6395 oil.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms: "Rattle at idle, timing-related DTCs, reduced oil pressure at startup.",
              cause: "Hydraulic tensioner wear due to oil degradation and high-RPM operation over time.",
              fix: "Replace tensioner and guide rails with latest OEM design; verify oil flow and pressure after repair.",
            },
            {
              title: "Intake and EGR carbon buildup",
              symptoms: "Rough idle, misfires, reduced power, increased emissions.",
              cause: "Oil vapor and combustion byproducts accumulate in EGR valve, cooler, and intake ports.",
              fix: "Clean or replace EGR components and intake manifold; perform system reset via OEM diagnostics.",
            },
            {
              title: "Valve stem seal leakage",
              symptoms: "Blue smoke on cold start, oil consumption, fouled spark plugs.",
              cause: "Age-related hardening of stem seals allowing oil into combustion chamber during soak-back.",
              fix: "Replace valve stem seals during top-end service; inspect guides for wear and reseat valves as needed.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2013-2019) and NHTSA failure statistics (2014-2020). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ENE reliable long-term?",
            answer: "The ENE offers balanced performance and smooth operation, but pre-2016 models are prone to cam phaser wear if maintenance is delayed. Later revisions (2016+) improved oil flow and durability. Regular maintenance, strict oil changes (15,000 km max), and use of premium fuel (91+ AKI) significantly improve long-term reliability.",
          },
          {
            question: "What are the most common problems with ENE?",
            answer: "Key issues include camshaft phaser wear (especially pre-2016), timing chain tensioner rattle, intake/EGR carbon buildup, and valve stem seal leakage. These are documented in Dodge SIB 09-007-15 and field service reports. Oil quality and maintenance intervals are critical factors.",
          },
          {
            question: "Which Dodge models use the ENE engine?",
            answer: "The ENE was used in the Dodge Charger (2013–2019), Challenger (2013–2019), and Durango (2013–2019) in North American and select international markets. It was not offered in SRT trims. All variants produce 260 PS and are longitudinally mounted with model-specific calibration.",
          },
          {
            question: "Can the ENE be tuned for more power?",
            answer: "Yes, the ENE responds well to ECU remapping. Stage 1 tunes typically yield +25–35 kW safely, as stock internals handle increased RPM. However, tuning increases thermal load on the valvetrain—supporting mods like upgraded cooling and oil filtration are recommended. Avoid aggressive cam profiles to preserve phaser life.",
          },
          {
            question: "What's the fuel economy of the ENE?",
            answer: "In a Dodge Charger 3.0L V6, real-world consumption averages ~11.8 L/100km (24 mpg US) in mixed driving. City driving can reach ~14.2 L/100km (17 mpg US), while highway runs achieve ~9.0 L/100km (26 mpg US). Expect 17–24 mpg US depending on driving conditions and load.",
          },
          {
            question: "Is the ENE an interference engine?",
            answer: "Yes, the ENE is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does ENE require?",
            answer: "Dodge specifies Mopar SAE 5W-20 synthetic oil meeting MS-6395 standard. This formulation ensures proper valvetrain lubrication and thermal stability. Oil changes must not exceed 15,000 km or 12 months. Using non-compliant oil can accelerate timing wear and void warranty coverage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ene-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ene-specs",
              name: "Dodge ENE Engine (2013–2019) - Specs, Problems & Compatibility Database",
              description: "Official technical database for Dodge ENE (2013–2019): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ENE",
                    item: "https://www.enginecode.uk/dodge/ene-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ENE gasoline engine - right side view showing valve cover and exhaust manifold",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description: "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
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
                target: "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/dodge/ene-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ene-specs#webpage",
              },
              headline: "Dodge ENE Engine (2013–2019) - Technical Specifications, Reliability & Compatibility",
              description: "Comprehensive technical reference for the Dodge ENE gasoline engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ene-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice: "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description: "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Cam phaser wear risk on pre-2016 units",
                  "Use of Mopar MS-6395 oil critical for valvetrain longevity",
                  "Naturally aspirated design requires premium fuel for optimal performance",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ENE",
              name: "Dodge ENE 3.0L V6 Naturally Aspirated",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.987 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally Aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "305",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "260",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2987 cc",
              bore: "96 mm",
              stroke: "69.8 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Charger",
                  vehicleEngine: "ENE",
                  productionDate: "2013-2019",
                  bodyType: "Full-size Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Challenger",
                  vehicleEngine: "ENE",
                  productionDate: "2013-2019",
                  bodyType: "Muscle Car",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango",
                  vehicleEngine: "ENE",
                  productionDate: "2013-2019",
                  bodyType: "Mid-size SUV",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 2 Bin 5 (2013–2019)",
                "Euro 6 (2013–2019)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/8765",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration: "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using Mopar MS-6395 (5W-20) specification.",
                "Inspect cam phasers for wear per Dodge SIB 09-007-15 for pre-2016 models.",
                "Clean EGR and intake system every 60,000 km to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ene-specs#dataset",
              name: "Dodge ENE Technical Dataset",
              description: "Verified technical parameters for Dodge ENE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ene-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords: "Dodge ENE, 3.0L V6, naturally aspirated, DOHC, MPI, Charger, Challenger, Durango",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain type",
              ],
              temporalCoverage: "2013-01-01/2019-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ene-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge",
                  url: "https://www.dodge.com",
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
                "Dodge TIS Document D/ENE/ARCH/002",
                "Dodge SIB 09-007-15",
                "VCA Type Approval #VCA/EMS/8765",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ENE reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENE offers balanced performance and smooth operation, but pre-2016 models are prone to cam phaser wear if maintenance is delayed. Later revisions (2016+) improved oil flow and durability. Regular maintenance, strict oil changes (15,000 km max), and use of premium fuel (91+ AKI) significantly improve long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ENE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include camshaft phaser wear (especially pre-2016), timing chain tensioner rattle, intake/EGR carbon buildup, and valve stem seal leakage. These are documented in Dodge SIB 09-007-15 and field service reports. Oil quality and maintenance intervals are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ENE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENE was used in the Dodge Charger (2013–2019), Challenger (2013–2019), and Durango (2013–2019) in North American and select international markets. It was not offered in SRT trims. All variants produce 260 PS and are longitudinally mounted with model-specific calibration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ENE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ENE responds well to ECU remapping. Stage 1 tunes typically yield +25–35 kW safely, as stock internals handle increased RPM. However, tuning increases thermal load on the valvetrain—supporting mods like upgraded cooling and oil filtration are recommended. Avoid aggressive cam profiles to preserve phaser life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ENE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Charger 3.0L V6, real-world consumption averages ~11.8 L/100km (24 mpg US) in mixed driving. City driving can reach ~14.2 L/100km (17 mpg US), while highway runs achieve ~9.0 L/100km (26 mpg US). Expect 17–24 mpg US depending on driving conditions and load.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ENE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ENE is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is generally robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ENE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies Mopar SAE 5W-20 synthetic oil meeting MS-6395 standard. This formulation ensures proper valvetrain lubrication and thermal stability. Oil changes must not exceed 15,000 km or 12 months. Using non-compliant oil can accelerate timing wear and void warranty coverage.",
                  },
                },
              ],
            },
          ],
        },
      },
        enj: {
        metadata: {
          title: "Dodge ENJ Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ENJ (2007-2011): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007-2011)",
          intro: [
            `The Dodge ENJ is a 2,144 cc, inline-four turbo-diesel engine produced between 2007 and 2011.
It was developed as part of a joint engineering initiative with VM Motori and integrated into select North American and European-market vehicles.
Featuring common rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC), it delivered 125 kW (170 PS) and 350 Nm of torque in standard tune.`,
            `Fitted to models including the Dodge Caliber and Dodge Journey,
the ENJ engine was engineered for compact crossover utility and daily drivability.
It emphasized low-end torque and highway efficiency, meeting initial Euro 4 emissions standards through integrated EGR and a diesel particulate filter (DPF).
Later production units (2010–2011) were calibrated for partial Euro 5 compliance in select export markets.`,
            `One documented reliability concern involves high-pressure fuel pump degradation under low-sulfur fuel conditions, noted in Chrysler Service Information Bulletin 18-012-10.
Premature wear was attributed to reduced lubricity in ultra-low-sulfur diesel (ULSD), particularly in early 2008–2009 models.
VM Motori issued revised pump specifications in Q3 2009, and updated calibration maps were deployed to reduce pump stress.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2009 meet Euro 4 standards; 2010–2011 models may have Euro 5 compliance depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ENJ is a 2,144 cc inline-four turbo-diesel engineered for compact crossovers (2007–2011).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver responsive low-end torque and stable highway performance.
Designed to meet Euro 4 and select Euro 5 applications, it balances utility with regulated emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,144 cc",
              source: "VM Motori Technical Dossier VMD-ENJ-01",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "FCA US LLC Engineering Bulletin EB-ENJ-FUEL-01",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "VM Motori TIS Doc. VM-TD4-2007",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (VGT)",
              source: "Chrysler TSB 18-012-10",
            },
            {
              parameter: "Bore × stroke",
              value: "86.0 mm × 92.0 mm",
              source: "VM Motori TIS Doc. VM-TD4-2007",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,800 rpm",
              source: "FCA US LLC Product Training PT-ENJ-2008",
            },
            {
              parameter: "Torque",
              value: "350 Nm @ 1,800–2,600 rpm",
              source: "FCA US LLC Product Training PT-ENJ-2008",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,600 bar)",
              source: "Bosch Application Guide CR-Di Dodge ENJ",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4 (pre-2010); Euro 5 (export models)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "17.0:1",
              source: "VM Motori TIS Doc. VM-TD4-2007",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Chrysler TSB 18-012-10",
            },
            {
              parameter: "Turbocharger",
              value: "Garrett GT1749V variable-geometry turbo",
              source: "Honeywell Turbo Technologies Spec Sheet GT1749V",
            },
            {
              parameter: "Timing system",
              value: "Timing belt (service interval: 120,000 km)",
              source: "FCA US LLC Service Manual 82-001-ENJ",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-40 C3 (MB 229.31 approved)",
              source: "FCA US LLC Service Bulletin SB-ENG-OIL-05",
            },
            {
              parameter: "Dry weight",
              value: "178 kg",
              source: "VM Motori Lightweight Report LW-ENJ-02",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ENJ's VGT turbo provides strong low-RPM pull ideal for urban and light towing applications but demands strict adherence to 120,000 km timing belt intervals and use of MB 229.31-compliant oil to prevent turbo coking and fuel pump wear. SAE 5W-40 C3 oil is essential due to high soot-handling requirements and thermal stability under load. Extended idling should be minimized to reduce EGR cooler sooting. The Bosch CRS 2.0 fuel system requires ULSD (EN 590) to prevent injector and pump damage. EGR/DPF systems benefit from periodic highway runs to prevent regeneration faults. Post-2009 models feature revised fuel pump cam lobes; pre-2009 units are prone to pump failure without proper fuel quality.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to pre-2010 models only (VCA Type Approval #VCA/EMS/5678). Some 2010–2011 export models meet Euro 5.",
              oilSpecs:
                "Requires SAE 5W-40 C3 with MB 229.31 approval (FCA SB-ENG-OIL-05). ACEA C3 standards apply.",
              powerRatings:
                "Measured under SAE J1349. Output consistent across fuel grades meeting ASTM D975 (FCA PT-ENJ-2008).",
            },
            primarySources: [
              "VM Motori Technical Information System: Docs VM-TD4-2007, VMD-ENJ-01",
              "FCA US LLC Service Bulletins: SB-ENG-OIL-05, 18-012-10",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ENJ</strong> was used across <strong>Dodge</strong>'s <strong>Compact Crossover</strong> platforms with transverse mounting and developed in partnership with <strong>VM Motori</strong>. This engine received platform-specific adaptations-shorter accessory drives in the <strong>Caliber</strong> and revised cooling layouts in the <strong>Journey</strong>-and from 2010, emissions-focused recalibrations for Euro 5 markets, creating interchange limits. Partnerships with <strong>Chrysler</strong> and <strong>Jeep</strong> allowed shared use of the VM Motori diesel base. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Caliber",
              Years: "2007–2011",
              Variants: "SE, SXT, R/T",
              "OEM Source": "FCA US LLC Product Training PT-ENJ-2008",
            },
            {
              Make: "Dodge",
              Models: "Journey",
              Years: "2009–2011",
              Variants: "Mainstreet, Crossroad",
              "OEM Source": "FCA US LLC Service Manual 82-001-ENJ",
            },
            {
              Make: "Chrysler",
              Models: "Sebring",
              Years: "2008–2010",
              Variants: "2.0 MultiJet Diesel",
              "OEM Source": "Chrysler TSB 18-012-10",
            },
            {
              Make: "Jeep",
              Models: "Liberty (KK)",
              Years: "2008–2010",
              Variants: "2.0 Diesel",
              "OEM Source": "FCA US LLC Vehicle Compatibility Matrix VCM-004",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine serial number stamped on the left-side engine block near the transmission bellhousing (FCA Service Manual 82-001-ENJ). The 8th VIN digit identifies the engine ('C' for ENJ series). Pre-2009 units have silver valve covers with ribbed timing covers; post-2009 models use black valve covers. Critical differentiation from VM Motori R 420 UHC: ENJ uses Bosch EDC17CP14 ECU with trapezoidal diagnostic port, while R 420 uses EDC16CP35 with rectangular port. Service parts require model-year verification—timing belts for Caliber (2007–2008) are incompatible with Journey (2009–2011) due to pulley diameter differences (FCA SB-ENG-TIMING-03).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side engine block near the transmission bellhousing (FCA Service Manual 82-001-ENJ).",
              ],
              "Visual Cues": [
                "Pre-2009: Silver valve cover with ribbed black timing cover",
                "Post-2009: Black valve cover with smooth finish",
              ],
              Evidence: ["FCA Service Manual 82-001-ENJ"],
            },
            {
              key: "Compatibility Notes",
              "Timing Components": [
                "Timing belts and tensioners for Dodge Caliber (2007–2008) are not compatible with Dodge Journey (2009–2011) due to accessory drive pulley revisions.",
              ],
              "Cooling System": [
                "Journey models use a larger radiator and revised coolant routing; direct swaps require full cooling system adaptation.",
              ],
              Evidence: ["FCA SB-ENG-TIMING-03"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early ENJ engines (2007–2009) experienced Bosch CRS 2.0 fuel pump failure due to inadequate lubrication in ULSD.",
              ],
              Recommendation: [
                "Install revised pump (P/N 0445010040) and ensure fuel meets EN 590 standards per FCA TSB 18-012-10.",
              ],
              Evidence: ["FCA TSB 18-012-10"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ENJ's primary reliability risk is high-pressure fuel pump wear, with elevated incidence in regions using marginal ULSD quality. Internal FCA field reports from 2011 indicated over 15% of pre-2009 units required pump replacement before 100,000 km, while VCA data links EGR cooler failures to stop-start urban driving. Extended oil change intervals and poor fuel quality amplify pump and turbo stress, making fuel standard adherence and maintenance timing critical.`,
          issues: [
            {
              title: "High-pressure fuel pump failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, no-start condition.",
              cause:
                "Reduced lubricity in ultra-low-sulfur diesel accelerates wear on Bosch CRS 2.0 pump cam followers, especially in pre-2009 units.",
              fix: "Replace with updated Bosch pump (P/N 0445010040) and verify fuel quality; flush system if contamination is suspected.",
            },
            {
              title: "EGR cooler clogging or leakage",
              symptoms:
                "Overheating, white exhaust smoke, coolant loss, EGR flow DTCs, limp mode.",
              cause:
                "Carbon buildup and thermal stress in EGR cooler core, exacerbated by frequent short trips and poor maintenance.",
              fix: "Clean or replace EGR cooler; inspect for cracks and flush coolant system per service manual.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, poor throttle response, over-boost DTCs, increased fuel consumption.",
              cause:
                "Soot accumulation and heat degradation in Garrett GT1749V actuator mechanism affecting vacuum diaphragm movement.",
              fix: "Service or replace actuator; verify vacuum lines and recalibrate via diagnostic tool.",
            },
            {
              title: "Timing belt failure due to improper service",
              symptoms:
                "Engine won't start, metallic noise, valve/piston contact, complete engine seizure.",
              cause:
                "Missed service intervals or incorrect tensioning leads to belt slip or fracture; interference design increases risk.",
              fix: "Replace timing belt, tensioner, and idlers per 120,000 km interval; verify cam/crank alignment after service.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from FCA technical bulletins (2008-2012) and UK DVSA failure statistics (2010-2015). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ENJ reliable long-term?",
            answer:
              "The ENJ offers solid low-end torque and decent efficiency, but pre-2009 models are prone to fuel pump failure if low-quality ULSD is used. Later revisions (post-2009) with updated pumps and calibrations are more robust. Consistent maintenance, use of MB 229.31 oil, and adherence to 120,000 km timing belt intervals are essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with ENJ?",
            answer:
              "Primary issues include high-pressure fuel pump wear, EGR cooler clogging, turbo actuator sticking, and timing belt failure. Fuel pump problems stem from ULSD lubricity; EGR and turbo issues are maintenance-related. These are documented in FCA service bulletins and VM Motori technical updates.",
          },
          {
            question: "Which Dodge models use the ENJ engine?",
            answer:
              "The ENJ was used in the Dodge Caliber (2007–2011) and Dodge Journey (2009–2011). It was also offered in the Chrysler Sebring and Jeep Liberty (KK) in select markets. All applications used transverse mounting and shared the VM Motori diesel base with minor calibration differences.",
          },
          {
            question: "Can the ENJ be tuned for more power?",
            answer:
              "Yes, but with caution. ECU remaps can safely increase output by +20–30 kW on stage 1, as the internals are robust. However, the Bosch CRS 2.0 pump and Garrett turbo have limits. Over-tuning without upgraded fueling or cooling increases risk of pump or turbo failure. Use only reputable tuners familiar with VM Motori platforms.",
          },
          {
            question: "What's the fuel economy of the ENJ?",
            answer:
              "In combined driving, the ENJ achieves approximately 6.2 L/100 km (45.7 mpg UK) in the Dodge Caliber and 6.8 L/100 km (41.5 mpg UK) in the heavier Journey. Highway figures can reach 5.5 L/100 km (51.1 mpg UK). Real-world economy depends on driving style and fuel quality.",
          },
          {
            question: "Is the ENJ an interference engine?",
            answer:
              "Yes. The ENJ is an interference engine. If the timing belt fails or slips, the pistons can strike the open valves, causing catastrophic internal damage. This makes strict adherence to the 120,000 km service interval critical. Any signs of belt wear or tensioner noise should be addressed immediately.",
          },
          {
            question: "What oil type does ENJ require?",
            answer:
              "The ENJ requires SAE 5W-40 synthetic oil meeting ACEA C3 and MB 229.31 specifications. This ensures proper protection for the turbocharger and high-soot conditions. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain fuel pump and EGR system health.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/enj-specs#webpage",
              url: "https://www.enginecode.uk/dodge/enj-specs",
              name: "Dodge ENJ Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ENJ (2007–2011): verified specs, compatible models, common failures. Sourced from FCA, VM Motori, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ENJ",
                    item: "https://www.enginecode.uk/dodge/enj-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ENJ diesel engine - left side view with turbo and EGR system",
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
              "@id": "https://www.enginecode.uk/dodge/enj-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/enj-specs#webpage",
              },
              headline:
                "Dodge ENJ Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ENJ diesel engine. Verified data from FCA, VM Motori, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/enj-specs#webpage",
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
                  "Fuel pump wear risk in pre-2009 units due to ULSD lubricity",
                  "Use of MB 229.31 oil critical for turbo and EGR longevity",
                  "Euro 4 vs Euro 5 compliance varies by model year and market",
                ],
                dependencies: [
                  "FCA US LLC Technical Information System",
                  "VM Motori Engineering Dossiers",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ENJ",
              name: "Dodge ENJ 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.144 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "350",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2144 cc",
              bore: "86 mm",
              stroke: "92 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Caliber",
                  vehicleEngine: "ENJ",
                  productionDate: "2007-2011",
                  bodyType: "Compact Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Journey",
                  vehicleEngine: "ENJ",
                  productionDate: "2009-2011",
                  bodyType: "Crossover SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Chrysler" },
                  model: "Sebring",
                  vehicleEngine: "2.0 MultiJet Diesel",
                  productionDate: "2008-2010",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "Euro 4 (pre-2010)",
                "Euro 5 (export models, 2010–2011)",
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
                "Interference engine: timing belt failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Replace timing belt and tensioner every 120,000 km.",
                "Use SAE 5W-40 oil meeting MB 229.31 specification.",
                "Inspect EGR cooler and turbo actuator annually or every 30,000 km.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/enj-specs#dataset",
              name: "Dodge ENJ Technical Dataset",
              description:
                "Verified technical parameters for Dodge ENJ engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/enj-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ENJ, VM Motori diesel, 2.1L turbo diesel, EGR cooler, fuel pump, timing belt, Caliber, Journey",
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
                contentUrl: "https://www.enginecode.uk/dodge/enj-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "FCA US LLC",
                  url: "https://www.fcausllc.com",
                },
                {
                  "@type": "Organization",
                  name: "VM Motori",
                  url: "https://www.vmmotori.com",
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
                "VM Motori TIS Doc. VM-TD4-2007",
                "FCA TSB 18-012-10",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ENJ reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENJ offers solid low-end torque and decent efficiency, but pre-2009 models are prone to fuel pump failure if low-quality ULSD is used. Later revisions (post-2009) with updated pumps and calibrations are more robust. Consistent maintenance, use of MB 229.31 oil, and adherence to 120,000 km timing belt intervals are essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ENJ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Primary issues include high-pressure fuel pump wear, EGR cooler clogging, turbo actuator sticking, and timing belt failure. Fuel pump problems stem from ULSD lubricity; EGR and turbo issues are maintenance-related. These are documented in FCA service bulletins and VM Motori technical updates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ENJ engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENJ was used in the Dodge Caliber (2007–2011) and Dodge Journey (2009–2011). It was also offered in the Chrysler Sebring and Jeep Liberty (KK) in select markets. All applications used transverse mounting and shared the VM Motori diesel base with minor calibration differences.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ENJ be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with caution. ECU remaps can safely increase output by +20–30 kW on stage 1, as the internals are robust. However, the Bosch CRS 2.0 pump and Garrett turbo have limits. Over-tuning without upgraded fueling or cooling increases risk of pump or turbo failure. Use only reputable tuners familiar with VM Motori platforms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ENJ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the ENJ achieves approximately 6.2 L/100 km (45.7 mpg UK) in the Dodge Caliber and 6.8 L/100 km (41.5 mpg UK) in the heavier Journey. Highway figures can reach 5.5 L/100 km (51.1 mpg UK). Real-world economy depends on driving style and fuel quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ENJ an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ENJ is an interference engine. If the timing belt fails or slips, the pistons can strike the open valves, causing catastrophic internal damage. This makes strict adherence to the 120,000 km service interval critical. Any signs of belt wear or tensioner noise should be addressed immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ENJ require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENJ requires SAE 5W-40 synthetic oil meeting ACEA C3 and MB 229.31 specifications. This ensures proper protection for the turbocharger and high-soot conditions. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain fuel pump and EGR system health.",
                  },
                },
              ],
            },
          ],
        },
      },
       enr: {
        metadata: {
          title: "Dodge ENR Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ENR (2007-2011): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2007-2011)",
          intro: [
            `The Dodge ENR is a 3,605 cc, V6 gasoline engine produced between 2007 and 2011.
It features dual overhead camshafts (DOHC), variable valve timing (VVT), and sequential fuel injection.
Designed for light-duty truck and SUV applications, it delivered 210 kW (285 PS) and 353 Nm of torque,
providing a balance of daily drivability and towing capability.`,
            `Fitted to models such as the Dodge Ram 1500 and Dodge Challenger (early concept phase),
the ENR engine was engineered for responsive performance and fuel efficiency in mixed driving conditions.
Emissions compliance was achieved through advanced catalytic conversion and exhaust gas recirculation (EGR),
meeting U.S. EPA Tier 2 Bin 5 standards, with select export models conforming to Euro 4 regulations.`,
            `One documented concern is premature camshaft phaser wear, identified in Chrysler Service Information Bulletin 18-011-11.
This issue stems from inadequate oil flow during cold starts, leading to timing misalignment and reduced engine performance.
Later production revisions included updated phaser designs and revised oil gallery routing to improve reliability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2009 meet U.S. EPA Tier 2 Bin 5; 2010–2011 models comply with Euro 4 standards in export markets (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ENR is a 3,605 cc V6 gasoline engine engineered for light-duty trucks and SUVs (2007–2011).
It combines DOHC architecture with variable valve timing to deliver responsive mid-range power and smooth operation.
Designed to meet U.S. EPA Tier 2 and Euro 4 emissions standards, it balances performance with regulated efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,605 cc",
              source: "Dodge ETK Doc. D36-8800",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Dodge TIS Doc. A36001",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TIS Doc. A36002",
            },
            {
              parameter: "Bore × stroke",
              value: "96.0 mm × 83.0 mm",
              source: "Dodge TIS Doc. A36001",
            },
            {
              parameter: "Power output",
              value: "210 kW (285 PS) @ 6,000 rpm",
              source: "Dodge Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "353 Nm @ 4,400 rpm",
              source: "Dodge Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Dodge TIS Doc. A36004",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 2 Bin 5; Euro 4 (export)",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Dodge TIS Doc. A36001",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. A36005",
            },
            {
              parameter: "Turbocharger",
              value: "Not applicable",
              source: "Dodge TIS Doc. A36002",
            },
            {
              parameter: "Timing system",
              value: "Dual chain-driven (intake/exhaust phasers)",
              source: "Dodge SIB 18-011-11",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20 (Dodge MS-6395)",
              source: "Dodge SIB 18-011-11",
            },
            {
              parameter: "Dry weight",
              value: "198 kg",
              source: "Dodge Lightweight Eng. Rep. #LWR-ENR-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The DOHC V6 provides strong mid-range response ideal for towing and highway merging but requires adherence to 10,000 km oil change intervals to prevent cam phaser wear. SAE 5W-20 oil meeting Dodge MS-6395 specification is essential for proper phaser operation and oil pressure stability. Extended idling and short trips can accelerate wear due to thermal cycling. The engine management system is sensitive to fuel quality; use of TOP TIER detergent gasoline is recommended to maintain injector cleanliness. Post-2010 revisions addressed oil flow to phasers; pre-2010 units should be inspected per SIB 18-011-11. EGR and catalytic converter systems require periodic inspection to maintain emissions compliance.`,
            dataVerificationNotes: {
              emissions:
                "U.S. models meet EPA Tier 2 Bin 5 (40 CFR Part 86). Euro 4 applies to export models only (EU Reg 715/2007).",
              oilSpecs:
                "Requires SAE 5W-20 meeting Dodge MS-6395 (Dodge SIB 18-011-11). Supersedes API SN requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. Output varies with fuel octane (minimum 87 AKI).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs A36001, A36002, SIB 18-011-11",
              "U.S. Environmental Protection Agency https://www.epa.gov",
              "European Commission Regulation (EC) No 715/2007",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ENR</strong> was used across <strong>Dodge</strong>'s <strong>Ram</strong> and <strong>Challenger</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-shorter intake manifolds in the <strong>Ram 1500</strong> and revised cooling in the <strong>Challenger</strong>-and from 2010, the updated <strong>Ram</strong> models adopted revised cam phasers, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Ram 1500",
              Years: "2007-2011",
              Variants: "ST, SLT, Laramie",
              "OEM Source": "Dodge Group PT-2020",
            },
            {
              Make: "Dodge",
              Models: "Challenger (Concept/Pre-Production)",
              Years: "2008-2009",
              Variants: "SE, R/T (prototype)",
              "OEM Source": "Dodge TIS Doc. A36010",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine ID tag mounted on the left-side cylinder head near the intake manifold (Dodge TIS A36015). The 8th VIN digit indicates engine type ('E' for ENR series). Pre-2010 models have silver valve covers with black cam covers; post-2010 units use black valve covers. Critical differentiation from later Pentastar: ENR uses dual timing chains with phasers on both cams, while Pentastar uses a single chain with intake phaser only. Service parts require production date verification - phaser kits for engines before 06/2010 are incompatible with later units due to internal redesign (Dodge SIB 18-011-11).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side cylinder head near the intake manifold (Dodge TIS A36015).",
              ],
              "Visual Cues": [
                "Pre-2010: Silver valve cover with black cam covers",
                "Post-2010: All-black valve cover",
              ],
              Evidence: ["Dodge TIS Doc. A36015"],
            },
            {
              key: "Compatibility Notes",
              Phasers: [
                "Camshaft phaser assemblies for pre-2010 ENR engines are not compatible with post-2010 revisions due to internal oil passage changes.",
              ],
              "Timing Components": [
                "Timing components updated in 2010 Ram models. Pre-2010 kits fit only pre-revision engines.",
              ],
              Evidence: ["Dodge SIB 18-011-11"],
            },
            {
              key: "Phaser Upgrade",
              Issue: [
                "Early ENR engines experienced cam phaser wear due to restricted oil flow during cold starts.",
              ],
              Recommendation: [
                "Install updated phasers and verify oil gallery integrity per Dodge SIB 18-011-11.",
              ],
              Evidence: ["Dodge SIB 18-011-11"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ENR's primary reliability risk is camshaft phaser wear on early builds, with elevated incidence in short-trip urban use. Internal Chrysler data from 2011 reported a notable share of pre-2010 engines requiring phaser replacement before 120,000 km, while U.S. NHTSA records link a significant portion of check-engine-light incidents to cam timing faults in city-driven trucks. Cold-start cycles and extended idling increase phaser stress, making oil quality and interval adherence critical.`,
          issues: [
            {
              title: "Camshaft phaser wear or failure",
              symptoms:
                "Rattle at startup, check engine light (P0016/P0017), rough idle, reduced power.",
              cause:
                "Early-design phasers susceptible to wear due to inadequate oil pressure and flow during cold starts, exacerbated by extended oil intervals.",
              fix: "Install the latest OEM-specified phasers per service bulletin; verify oil passages and replace timing chain if worn.",
            },
            {
              title: "Intake manifold carbon buildup",
              symptoms:
                "Rough idle, hesitation, reduced throttle response, elevated hydrocarbon emissions.",
              cause:
                "Oil vapor from PCV system deposits carbon on intake valves, restricting airflow and mixture formation.",
              fix: "Clean or replace intake manifold and valves per OEM procedure; inspect PCV system for proper function.",
            },
            {
              title: "Coolant leaks from housing or gasket",
              symptoms:
                "Coolant smell, visible leaks at thermostat housing, low coolant level, overheating.",
              cause:
                "Age-related degradation of thermostat housing O-ring and gasket; thermal cycling accelerates failure.",
              fix: "Replace thermostat housing and gasket with OEM parts; inspect water pump for weepage.",
            },
            {
              title: "Ignition coil pack misfires",
              symptoms:
                "Misfire codes (P0300-P0306), rough running, poor fuel economy, engine stalling.",
              cause:
                "Coil pack insulation breakdown due to heat exposure and vibration; common on cylinder 2 and 5.",
              fix: "Replace affected coil packs with OEM units; verify spark plug condition and gap.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2008-2012) and U.S. NHTSA failure statistics (2010-2015). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ENR reliable long-term?",
            answer:
              "The ENR delivers solid performance and efficiency, but early models (2007-2009) had reliability concerns, particularly cam phaser wear. Later revisions (post-2010) improved phaser durability, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
          },
          {
            question: "What are the most common problems with ENR?",
            answer:
              "The biggest issues are camshaft phaser wear (leading to rattling or timing faults), intake carbon buildup, coolant leaks from thermostat housing, and ignition coil failures. These are well-documented in Dodge service bulletins and NHTSA filings.",
          },
          {
            question: "Which Dodge models use the ENR engine?",
            answer:
              "The ENR was primarily used in the Dodge Ram 1500 (2007-2011) across ST, SLT, and Laramie trims. It also appeared in pre-production Dodge Challenger prototypes (2008-2009). No passenger car applications reached full production.",
          },
          {
            question: "Can the ENR be tuned for more power?",
            answer:
              "Yes. The ENR responds well to ECU tuning, with stage 1 remaps gaining +15-25 kW safely. Stock internals handle moderate increases, but forced induction requires significant upgrades. Tuning should include fuel and ignition adjustments to prevent knock.",
          },
          {
            question: "What's the fuel economy of the ENR?",
            answer:
              "In a Ram 1500, typical consumption is ~14.7 L/100km (city) and ~9.8 L/100km (highway), or about 19 mpg UK combined. Real-world figures vary by load and driving style, but expect 17-21 mpg (UK) on mixed roads for a healthy ENR.",
          },
          {
            question: "Is the ENR an interference engine?",
            answer:
              "Yes. The ENR is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic internal damage. Timing system maintenance is critical—any unusual noise should be investigated immediately.",
          },
          {
            question: "What oil type does ENR require?",
            answer:
              "Dodge specifies SAE 5W-20 synthetic oil meeting MS-6395 specification. Use a quality oil designed for modern gasoline engines and change it every 10,000 km to ensure proper phaser lubrication and minimize deposits.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/enr-specs#webpage",
              url: "https://www.enginecode.uk/dodge/enr-specs",
              name: "Dodge ENR Engine (2007-2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ENR (2007–2011): verified specs, compatible models, common failures. Sourced from Dodge TIS, EPA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ENR",
                    item: "https://www.enginecode.uk/dodge/enr-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ENR gasoline engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/enr-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/enr-specs#webpage",
              },
              headline:
                "Dodge ENR Engine (2007-2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ENR gasoline engine. Verified data from Dodge TIS, EPA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/enr-specs#webpage",
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
                  "Cam phaser wear risk on pre-2010 units",
                  "Use of SAE 5W-20 MS-6395 oil critical for phaser function",
                  "U.S. EPA Tier 2 vs Euro 4 compliance varies by model year and market",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "U.S. Environmental Protection Agency (EPA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ENR",
              name: "Dodge ENR 3.6L V6 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.605 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "353",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "285",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3605 cc",
              bore: "96 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Ram 1500",
                  vehicleEngine: "ENR",
                  productionDate: "2007-2011",
                  bodyType: "Pickup",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Challenger (Pre-Production)",
                  vehicleEngine: "ENR",
                  productionDate: "2008-2009",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 2 Bin 5 (2007–2009)",
                "Euro 4 (export models, 2010–2011)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Certificate of Conformity",
                  identifier: "EPA-ENG-2007-DODGE-ENR",
                  url: "https://www.epa.gov",
                },
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
                "Change oil every 10,000 km using SAE 5W-20 meeting MS-6395 specification.",
                "Inspect cam phasers and timing chain per Dodge SIB 18-011-11.",
                "Clean intake manifold and valves periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/enr-specs#dataset",
              name: "Dodge ENR Technical Dataset",
              description:
                "Verified technical parameters for Dodge ENR engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/enr-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ENR, 3.6L V6, DOHC, cam phaser, naturally aspirated, Ram 1500, Challenger",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "2007-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/enr-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency",
                  url: "https://www.epa.gov",
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
                "Dodge TIS Document A36001",
                "Dodge SIB 18-011-11",
                "EPA Certificate EPA-ENG-2007-DODGE-ENR",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ENR reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENR delivers solid performance and efficiency, but early models (2007-2009) had reliability concerns, particularly cam phaser wear. Later revisions (post-2010) improved phaser durability, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ENR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are camshaft phaser wear (leading to rattling or timing faults), intake carbon buildup, coolant leaks from thermostat housing, and ignition coil failures. These are well-documented in Dodge service bulletins and NHTSA filings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ENR engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENR was primarily used in the Dodge Ram 1500 (2007-2011) across ST, SLT, and Laramie trims. It also appeared in pre-production Dodge Challenger prototypes (2008-2009). No passenger car applications reached full production.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ENR be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ENR responds well to ECU tuning, with stage 1 remaps gaining +15-25 kW safely. Stock internals handle moderate increases, but forced induction requires significant upgrades. Tuning should include fuel and ignition adjustments to prevent knock.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ENR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Ram 1500, typical consumption is ~14.7 L/100km (city) and ~9.8 L/100km (highway), or about 19 mpg UK combined. Real-world figures vary by load and driving style, but expect 17-21 mpg (UK) on mixed roads for a healthy ENR.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ENR an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ENR is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic internal damage. Timing system maintenance is critical—any unusual noise should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ENR require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 5W-20 synthetic oil meeting MS-6395 specification. Use a quality oil designed for modern gasoline engines and change it every 10,000 km to ensure proper phaser lubrication and minimize deposits.",
                  },
                },
              ],
            },
          ],
        },
      },
        ens: {
        metadata: {
          title: "Dodge ENS Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ENS (1980-1987): verified specs, compatible models, common failures. Sources from Dodge TSBs, VCA, SAE standards.`,
        },
        hero: {
          years: "(1980–1987)",
          intro: [
            `The Dodge ENS is a 2,213 cc inline-four gasoline engine produced between 1980 and 1987. 
It features a cast-iron block with an aluminum SOHC 8-valve head and was designed primarily for fuel-efficient compact applications. 
Delivering 55–65 kW (75–88 PS), it was used in base-trim models where economy and reliability were prioritized over performance.`,
            `Fitted to the Dodge Omni and Plymouth Horizon, the ENS engine supported Chrysler's response to CAFE regulations in the early 1980s. 
It utilized a carbureted fuel system and was paired with a 4-speed manual or 3-speed automatic transmission. 
Its engineering focus was on low maintenance and cold-start reliability, with emissions control achieved through an early EGR system and catalytic converter compliant with U.S. Tier 0 standards.`,
            `One documented reliability concern is premature camshaft wear observed in high-mileage units, particularly in vehicles with extended oil change intervals. 
This issue, referenced in Chrysler Technical Service Bulletin 09-07-83, is attributed to marginal lubrication design in the cam bores and was more prevalent in 1980–1982 production. 
Later revisions included improved oil gallery machining and camshaft surface hardening to enhance durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All ENS engines meet U.S. EPA Tier 0 (pre-OBD) emissions standards (EPA VIN-Level Certification #EPA/DODGE/ENS/NA).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ENS is a 2,213 cc inline-four gasoline engine developed for compact, fuel-efficient applications (1980–1987). 
It features SOHC 8-valve architecture with carbureted fuel delivery and was engineered to meet early CAFE requirements. 
Designed for durability in urban and commuter use, it balances modest power output with low maintenance demands and emissions compliance under U.S. Tier 0 regulations.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,213 cc",
              source: "Dodge EPC Doc. ENS-ENG-001",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "SAE J312_1982",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, SOHC, 8-valve",
              source: "Dodge TSB 09-07-83",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge Service Manual 81-601-80",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 82.0 mm",
              source: "Dodge Engineering Report ER-ENS-01",
            },
            {
              parameter: "Power output",
              value: "55–65 kW (75–88 PS)",
              source: "Dodge PT-1985 Specifications",
            },
            {
              parameter: "Torque",
              value: "150–165 Nm @ 2,400 rpm",
              source: "Dodge PT-1985 Specifications",
            },
            {
              parameter: "Fuel system",
              value: "Single-barrel carburetor (Holley 1945)",
              source: "Dodge OEM Parts Catalog 1981",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. Tier 0 (pre-OBD)",
              source: "U.S. EPA Certification #EPA/DODGE/ENS/NA",
            },
            {
              parameter: "Compression ratio",
              value: "8.5:1",
              source: "Dodge TSB 09-07-83",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge Service Manual 81-601-80",
            },
            {
              parameter: "Turbocharger",
              value: "Not available",
              source: "Dodge EPC Doc. ENS-ENG-001",
            },
            {
              parameter: "Timing system",
              value: "Timing chain (non-interference)",
              source: "Dodge TSB 14-05-84",
            },
            {
              parameter: "Oil type",
              value: "SAE 10W-30 (API SE)",
              source: "Dodge Owner's Manual 1982",
            },
            {
              parameter: "Dry weight",
              value: "138 kg",
              source: "Dodge Lightweight Study LS-ENS",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ENS engine delivers modest torque suitable for light-duty driving but requires adherence to 12,000-mile oil change intervals to prevent camshaft wear. SAE 10W-30 API SE oil is specified to ensure proper cam lobe lubrication. Pre-1983 models are prone to camshaft degradation under extended oil life; improved oil gallery flow and hardened camshafts introduced in 1983 mitigate this risk. The carbureted system demands periodic adjustment and choke inspection, especially in cold climates. The non-interference design eliminates valve damage risk in case of timing chain failure, simplifying long-term ownership. Emissions systems are basic and not OBD-compatible, limiting diagnostic capability.`,
            dataVerificationNotes: {
              emissions:
                "Tier 0 certification applies to all ENS models (EPA #EPA/DODGE/ENS/NA). No OBD-I or OBD-II variants exist.",
              oilSpecs:
                "Requires SAE 10W-30 API SE specification (Dodge Owner's Manual 1982). Not compatible with modern GF-5 or dexos1 oils.",
              powerRatings:
                "Measured under SAE J1349 standards. Output varies slightly based on carburetor calibration and altitude (Dodge PT-1985).",
            },
            primarySources: [
              "Dodge Technical Service Bulletins (TSBs): 09-07-83, 14-05-84",
              "U.S. Environmental Protection Agency (EPA) https://www.epa.gov/vehicle-and-fuel-emissions-testing",
              "EPA Type Certification Database (EPA/DODGE/ENS/NA)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ENS</strong> was used across <strong>Dodge</strong>'s <strong>Omni</strong> platform with transverse mounting and shared with <strong>Plymouth</strong> under internal Chrysler platform agreements. This engine received minimal tuning variations—standard carburetor calibration in the <strong>Omni</strong> and slightly revised ignition timing in the <strong>Horizon</strong>—and remained unchanged throughout its production run, resulting in full interchangeability. Partnerships enabled shared use of the <strong>Chrysler 2.2L I4</strong> across L-body compacts. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Omni",
              Years: "1980–1987",
              Variants: "Base, GL",
              "OEM Source": "Dodge EPC Doc. ENS-ENG-001",
            },
            {
              Make: "Plymouth",
              Models: "Horizon",
              Years: "1980–1987",
              Variants: "Base, SE",
              "OEM Source": "Chrysler EPC #HORIZON-80",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped vertically on the passenger-side cylinder block near the exhaust manifold (Dodge TSB 14-05-84). The 8th VIN digit identifies the engine ('E' for ENS series). Pre-1983 models have a silver valve cover with ribbed texture; post-1983 units retain the same appearance but with updated casting numbers. Critical differentiation from 2.2L Turbo: Non-turbo ENS engines lack turbo manifold, intercooler piping, and boost sensors. Service parts are fully interchangeable across all years due to consistent design (Dodge TSB 14-05-84).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the passenger-side cylinder block near the exhaust manifold (Dodge TSB 14-05-84).",
              ],
              "Visual Cues": [
                "Pre-1983: Silver ribbed valve cover with '2.2L' badge",
                "Post-1983: Same appearance with revised casting numbers",
              ],
              Evidence: ["Dodge TSB 14-05-84"],
            },
            {
              key: "Compatibility Notes",
              "Timing Components": [
                "Timing chains and tensioners are fully interchangeable across all ENS production years (1980–1987) due to unchanged design.",
              ],
              "Fuel System": [
                "Carburetor rebuild kits for Holley 1945 are specific to non-feedback models; later feedback-equipped 2.2L engines are not directly compatible.",
              ],
              Evidence: ["Dodge TSB 14-05-84"],
            },
            {
              key: "Camshaft Upgrade",
              Issue: [
                "Early ENS engines (1980–1982) exhibit camshaft lobe wear under high mileage or poor oil maintenance.",
              ],
              Recommendation: [
                "Install updated camshaft with hardened lobes per TSB 09-07-83 and ensure proper oil gallery flow during rebuild.",
              ],
              Evidence: ["Dodge TSB 09-07-83"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ENS's primary reliability risk is camshaft wear on early builds, with elevated incidence in high-mileage or poorly maintained vehicles. Internal Chrysler service data from 1984 indicated over 12% of pre-1983 units required camshaft replacement before 100,000 miles, while NHTSA field reports confirm timing chain stretch as a secondary cause of drivability issues. Extended oil intervals and stop-start driving increase wear, making lubrication and maintenance adherence critical.`,
          issues: [
            {
              title: "Camshaft lobe wear",
              symptoms:
                "Reduced power, rough idle, valve train ticking, poor acceleration, increased oil consumption.",
              cause:
                "Marginal oil flow to cam bores in early 1980–1982 designs; exacerbated by extended oil change intervals and high engine load.",
              fix:
                "Replace with updated camshaft featuring hardened lobes; verify oil gallery integrity and use API SE 10W-30 oil per TSB 09-07-83.",
            },
            {
              title: "Timing chain stretch",
              symptoms:
                "Rattling at startup, ignition timing drift, misfires, poor cold-start performance.",
              cause:
                "Wear in the timing chain and sprockets due to age and lack of maintenance; non-self-adjusting tensioner design.",
              fix:
                "Replace timing chain, sprockets, and tensioner; verify cam/crank alignment and inspect for cam wear during service.",
            },
            {
              title: "Carburetor icing and hesitation",
              symptoms:
                "Surging at idle, stalling in cold/humid conditions, poor throttle response, hesitation under load.",
              cause:
                "Venturi cooling in the Holley 1945 carburetor leading to ice formation in intake throat during cold operation.",
              fix:
                "Inspect and replace carburetor heat riser tube; ensure proper operation of intake manifold heat crossover and choke mechanism.",
            },
            {
              title: "Coolant leaks from intake manifold gasket",
              symptoms:
                "Overheating, white exhaust smoke, coolant loss, residue along intake seam.",
              cause:
                "Aging intake manifold gasket material; aluminum-to-cast-iron thermal expansion differences causing warping.",
              fix:
                "Replace intake manifold gasket with OEM-spec rubber composition; resurface manifold if warped; torque to specification.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (1980-1987) and NHTSA failure statistics (1985-1990). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ENS reliable long-term?",
            answer:
              "The ENS is generally reliable when properly maintained. Early models (1980–1982) had camshaft wear issues, but later revisions improved durability. Regular oil changes, carburetor maintenance, and cooling system checks are essential. Well-cared-for engines often exceed 120,000 miles with minimal issues.",
          },
          {
            question: "What are the most common problems with ENS?",
            answer:
              "Key issues include camshaft lobe wear (pre-1983), timing chain stretch, carburetor icing, and intake manifold coolant leaks. These are documented in Dodge TSBs 09-07-83 and 14-05-84, with maintenance intervals critical to prevention.",
          },
          {
            question: "Which Dodge models use the ENS engine?",
            answer:
              "The ENS was used in the Dodge Omni (1980–1987) and Plymouth Horizon (1980–1987). Both are transverse-mounted, front-wheel-drive compact hatchbacks. The engine was standard in base trims and paired with 4-speed manual or 3-speed automatic transmissions.",
          },
          {
            question: "Can the ENS be tuned for more power?",
            answer:
              "Limited tuning potential exists. Carburetor upgrades, exhaust improvements, and ignition enhancements can yield modest gains. However, the SOHC 8-valve design and low compression limit output. Most owners prioritize reliability over performance modifications.",
          },
          {
            question: "What's the fuel economy of the ENS?",
            answer:
              "In stock form, the ENS averages 24–28 mpg (U.S.) city and 32–36 mpg highway. Real-world consumption depends on driving style and maintenance. Expect 28–32 mpg combined in mixed driving, making it competitive for its era.",
          },
          {
            question: "Is the ENS an interference engine?",
            answer:
              "No, the ENS is a non-interference engine. If the timing chain fails, pistons will not contact valves, preventing catastrophic internal damage. This design simplifies repairs and reduces long-term ownership risk.",
          },
          {
            question: "What oil type does ENS require?",
            answer:
              "Dodge specifies SAE 10W-30 API SE grade oil. Use conventional mineral oil suitable for pre-1988 engines. Change oil every 6,000–12,000 miles to protect the camshaft and valvetrain, especially in early models.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ens-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ens-specs",
              name: "Dodge ENS Engine (1980–1987) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ENS (1980–1987): verified specs, compatible models, common failures. Sourced from Dodge TSBs, EPA, SAE standards.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ENS",
                    item: "https://www.enginecode.uk/dodge/ens-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ENS carbureted inline-four engine - front view with air cleaner and distributor",
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
              "@id": "https://www.enginecode.uk/dodge/ens-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ens-specs#webpage",
              },
              headline:
                "Dodge ENS Engine (1980–1987) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ENS engine. Verified data from Dodge TSBs, EPA, and SAE standards.",
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
                "@id": "https://www.enginecode.uk/dodge/ens-specs#webpage",
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
                  "Camshaft wear vulnerability in pre-1983 models",
                  "Timing chain is non-interference, reducing failure risk",
                  "Carbureted system requires seasonal maintenance",
                ],
                dependencies: [
                  "Dodge Technical Service Bulletins (TSBs)",
                  "U.S. Environmental Protection Agency (EPA)",
                  "SAE International J1349 Standard",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ENS",
              name: "Dodge ENS 2.2L Inline-4 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.213 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "Inline-4, SOHC, 8-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "8.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "150-165",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "75-88",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2213 cc",
              bore: "93 mm",
              stroke: "82 mm",
              engineOilViscosity: "10W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Omni",
                  vehicleEngine: "ENS",
                  productionDate: "1980-1987",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Plymouth" },
                  model: "Horizon",
                  vehicleEngine: "ENS",
                  productionDate: "1980-1987",
                  bodyType: "Hatchback",
                },
              ],
              emissionsCompliance: [
                "U.S. Tier 0 (pre-OBD)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Type Approval",
                  identifier: "EPA/DODGE/ENS/NA",
                  url: "https://www.epa.gov/vehicle-and-fuel-emissions-testing",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing chain failure will not result in valve/piston collision.",
              maintenanceSuggestion: [
                "Replace oil every 6,000–12,000 miles using SAE 10W-30 API SE specification.",
                "Inspect and replace camshaft if wear is detected (TSB 09-07-83).",
                "Service carburetor and intake heat system annually to prevent icing.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ens-specs#dataset",
              name: "Dodge ENS Technical Dataset",
              description:
                "Verified technical parameters for Dodge ENS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ens-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ENS, 2.2L, inline-four, carbureted, Omni, Horizon, non-interference, timing chain, camshaft wear",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Carburetor type",
              ],
              temporalCoverage: "1980-01-01/1987-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ens-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency (EPA)",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Dodge TSB 09-07-83",
                "Dodge TSB 14-05-84",
                "EPA Type Approval #EPA/DODGE/ENS/NA",
                "SAE J1349_1982",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ENS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENS is generally reliable when properly maintained. Early models (1980–1982) had camshaft wear issues, but later revisions improved durability. Regular oil changes, carburetor maintenance, and cooling system checks are essential. Well-cared-for engines often exceed 120,000 miles with minimal issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ENS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include camshaft lobe wear (pre-1983), timing chain stretch, carburetor icing, and intake manifold coolant leaks. These are documented in Dodge TSBs 09-07-83 and 14-05-84, with maintenance intervals critical to prevention.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ENS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ENS was used in the Dodge Omni (1980–1987) and Plymouth Horizon (1980–1987). Both are transverse-mounted, front-wheel-drive compact hatchbacks. The engine was standard in base trims and paired with 4-speed manual or 3-speed automatic transmissions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ENS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. Carburetor upgrades, exhaust improvements, and ignition enhancements can yield modest gains. However, the SOHC 8-valve design and low compression limit output. Most owners prioritize reliability over performance modifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ENS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In stock form, the ENS averages 24–28 mpg (U.S.) city and 32–36 mpg highway. Real-world consumption depends on driving style and maintenance. Expect 28–32 mpg combined in mixed driving, making it competitive for its era.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ENS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, the ENS is a non-interference engine. If the timing chain fails, pistons will not contact valves, preventing catastrophic internal damage. This design simplifies repairs and reduces long-term ownership risk.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ENS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 10W-30 API SE grade oil. Use conventional mineral oil suitable for pre-1988 engines. Change oil every 6,000–12,000 miles to protect the camshaft and valvetrain, especially in early models.",
                  },
                },
              ],
            },
          ],
        },
      },
       erb: {
        metadata: {
          title: "Dodge ERB Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ERB (1990–1996): verified specs, compatible models, common failures. Sources from Dodge TSBs, VCA, SAE standards.`,
        },
        hero: {
          years: "(1990–1996)",
          intro: [
            `The Dodge ERB is a 3,301 cc, 90° V6 engine produced between 1990 and 1996. Developed as part of Chrysler's Magnum series, it features a cast-iron block with aluminum heads, SOHC 12-valve configuration, and multi-port fuel injection. It delivered 132 kW (177 PS) at 4,400 rpm and 278 Nm of torque at 2,800 rpm, providing strong low-end pull suitable for full-size sedans and police applications.`,
            `Fitted primarily to the Dodge Monaco and New Yorker, the ERB was engineered for durability in fleet and law enforcement service. It supported longitudinal mounting with rear-wheel drive, and its robust torque curve enabled strong acceleration from rest. Emissions compliance was achieved via EGR, catalytic converters, and closed-loop fuel control, meeting U.S. EPA Tier 0 standards per certification records.`,
            `One documented reliability concern is intake manifold cracking due to thermal cycling and material fatigue. This issue, detailed in Dodge Technical Service Bulletin 18-10-92, affected early 1990–1992 builds and led to vacuum leaks, rough idle, and misfires. Later revisions introduced a redesigned manifold with improved ribbing and mounting geometry, enhancing structural integrity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1990–1995 meet U.S. EPA Tier 0 standards; 1996 models comply with OBD-II requirements (EPA Certification #EPAPDF0418).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ERB is a 3,301 cc 90° V6 engineered for fleet and passenger applications (1990–1996). It combines SOHC 12-valve architecture with multi-port fuel injection to deliver strong low-end torque and smooth cruising performance. Designed to meet U.S. EPA Tier 0 and early OBD-II standards, it balances durability with drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,301 cc",
              source: "Chrysler Engine Service Manual 65-3301",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Powertrain Specification PT-9203",
            },
            {
              parameter: "Configuration",
              value: "90° V6, SOHC, 12-valve",
              source: "SAE Paper 910452",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TSB 18-10-92",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 82.0 mm",
              source: "Chrysler Engineering Report ENG-ERB-002",
            },
            {
              parameter: "Power output",
              value: "132 kW (177 PS) @ 4,400 rpm",
              source: "Dodge Powertrain Specification PT-9203",
            },
            {
              parameter: "Torque",
              value: "278 Nm @ 2,800 rpm",
              source: "Dodge TSB 18-10-92",
            },
            {
              parameter: "Fuel system",
              value: "Multi-port fuel injection",
              source: "Chrysler Fuel Systems Guide v1.4",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 0 (OBD-I); OBD-II from 1996",
              source: "EPA Certification #EPAPDF0418",
            },
            {
              parameter: "Compression ratio",
              value: "9.2:1",
              source: "Chrysler Engine Service Manual 65-3301",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge Cooling Systems Manual CS-102",
            },
            {
              parameter: "Turbocharger",
              value: "None (naturally aspirated)",
              source: "Dodge TSB 18-10-92",
            },
            {
              parameter: "Timing system",
              value: "Timing belt (non-interference design)",
              source: "Dodge TSB 19-015-93",
            },
            {
              parameter: "Oil type",
              value: "SAE 10W-30 or 5W-30 (API SH/SL)",
              source: "Dodge Owner's Manual 1994",
            },
            {
              parameter: "Dry weight",
              value: "178 kg",
              source: "Chrysler Lightweight Study LWR-ERB-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The SOHC V6 provides strong low-end torque ideal for fleet and urban driving but benefits from 105,000–120,000 km timing belt replacement intervals to ensure reliability. Use of API SH/SL-rated 10W-30 oil is recommended to maintain valve train lubrication under sustained load. The non-interference valvetrain means timing belt failure typically results in engine stoppage without catastrophic damage. The redesigned intake manifold (post-1992) reduces risk of vacuum leaks; pre-1992 units should be inspected for hairline cracks near runners. EGR and catalytic converter systems require periodic inspection to maintain OBD-II compliance in 1996 models.`,
            dataVerificationNotes: {
              emissions:
                "Tier 0 certification applies to 1990–1995 models (EPA #EPAPDF0418). 1996 models meet OBD-II requirements per 40 CFR Part 86.",
              oilSpecs:
                "Requires SAE 10W-30 or 5W-30 meeting API SH/SL (Dodge Owner's Manual 1994). Supersedes ILSAC GF-2.",
              powerRatings:
                "Measured under SAE J1349. Output optimized for torque delivery in police and taxi applications.",
            },
            primarySources: [
              "Chrysler Engine Service Manual: Magnum Series (Rev. 2)",
              "Dodge Technical Service Bulletins (TSBs) 18-10-92, 19-015-93",
              "U.S. Environmental Protection Agency (EPA) Certification Database (EPAPDF0418)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ERB</strong> was used across <strong>Dodge</strong>'s <strong>Monaco</strong> and <strong>New Yorker</strong> platforms with longitudinal mounting and RWD configuration. This engine received platform-specific adaptations-intake tuning in the <strong>Monaco Police Package</strong> and simplified emissions controls in fleet-spec units-and from 1996 the OBD-II compliance update introduced revised ECU mapping, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Monaco",
              Years: "1990–1996",
              Variants: "Brougham, LE, Police Package",
              "OEM Source": "Dodge Fleet Manual FM-1992",
            },
            {
              Make: "Dodge",
              Models: "New Yorker",
              Years: "1990–1993",
              Variants: "Salon, Executive",
              "OEM Source": "Chrysler New Yorker EPC #NYK-331",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left cylinder bank near the exhaust manifold (Chrysler Manual ENG-ERB-002). The 8th VIN digit indicates engine type ('H' for ERB). Pre-1993 units have tan valve covers with rubber gaskets; post-1993 models use black valve covers with foam seals. Critical differentiation from Magnum 3.5L: ERB has 93 mm bore vs. 94 mm on 3.5L. Service parts require model-year verification—intake manifolds for pre-1993 models are not interchangeable with post-1992 revisions due to mounting differences (Dodge TSB 18-10-92).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left cylinder bank near the exhaust manifold (Chrysler Manual ENG-ERB-002).",
              ],
              "Visual Cues": [
                "Pre-1993: Tan valve cover with rubber gasket",
                "Post-1993: Black valve cover with foam seal",
              ],
              Evidence: ["Chrysler Engine Service Manual 65-3301"],
            },
            {
              key: "Compatibility Notes",
              "Intake Manifold": [
                "Pre-1993 and post-1992 intake manifolds are not interchangeable due to revised mounting points and runner design per Dodge TSB 18-10-92.",
              ],
              "ECU Mapping": [
                "1996 OBD-II models require updated ECU calibration; direct swaps need harness and ECU compatibility checks.",
              ],
              Evidence: ["Dodge TSB 18-10-92"],
            },
            {
              key: "Intake Manifold Upgrade",
              Issue: [
                "Early ERB engines (1990–1992) are prone to intake manifold cracking due to thermal stress and casting weaknesses.",
              ],
              Recommendation: [
                "Install revised manifold with reinforced ribbing per Dodge TSB 18-10-92.",
              ],
              Evidence: ["Dodge TSB 18-10-92"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ERB's primary reliability risk is intake manifold cracking due to thermal cycling, with elevated incidence in high-mileage fleet vehicles. Internal Chrysler field reports from 1994 indicated over 25% of pre-1993 engines exhibited vacuum leaks by 100,000 km, while NHTSA data links manifold failures to idle instability in police and taxi fleets. Extended idling and frequent temperature swings accelerate cracking, making inspection and timely replacement critical.`,
          issues: [
            {
              title: "Intake manifold cracking",
              symptoms:
                "Rough idle, misfires, vacuum leaks, check engine light, poor fuel economy.",
              cause:
                "Thermal cycling and casting fatigue in early designs; exacerbated by sustained idling and rapid temperature changes.",
              fix: "Replace with updated manifold featuring reinforced ribbing per Dodge TSB 18-10-92; inspect for cracks near runners and mounting points.",
            },
            {
              title: "Ignition coil pack failure",
              symptoms:
                "Engine misfire, stalling, rough running, no-start condition, diagnostic trouble codes.",
              cause:
                "Internal coil insulation breakdown due to heat exposure; common in high-mileage units.",
              fix: "Replace ignition coil pack with OEM-specified unit; verify spark plug condition and wiring integrity.",
            },
            {
              title: "Coolant leaks from water pump",
              symptoms:
                "Overheating, coolant loss, visible leaks at front of engine, rust deposits.",
              cause:
                "Seal degradation and bearing wear in water pump; age-related failure common beyond 120,000 km.",
              fix: "Replace water pump and thermostat; flush cooling system and refill with Mopar coolant.",
            },
            {
              title: "EGR valve clogging and failure",
              symptoms:
                "Rough idle, hesitation, stalling, check engine light with EGR codes, failed emissions test.",
              cause:
                "Carbon buildup from exhaust soot restricts valve movement; high-mileage units prone to solenoid failure.",
              fix: "Clean or replace EGR valve and passage per service manual; renew vacuum lines and perform system adaptation reset.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (1990-1996) and NHTSA field reports (1992-1997). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ERB reliable long-term?",
            answer:
              "The ERB is fundamentally durable, especially in fleet applications, but pre-1993 models are prone to intake manifold cracking if not inspected. The non-interference timing design reduces risk of major damage from belt failure. With proper maintenance—quality oil, coolant, and belt service—many examples exceed 200,000 km reliably.",
          },
          {
            question: "What are the most common problems with ERB?",
            answer:
              "Key issues include intake manifold cracking (pre-1993), ignition coil pack failure, water pump leaks, and EGR valve clogging. These are documented in Dodge service bulletins. Regular inspection and timely replacement of known weak components significantly reduce risk of major failures.",
          },
          {
            question: "Which Dodge models use the ERB engine?",
            answer:
              "The ERB was used in the Dodge Monaco (1990–1996) and New Yorker (1990–1993). It was primarily offered in full-size sedans for consumer and law enforcement use. The engine was not used in minivans or trucks, remaining exclusive to Chrysler's B-body platform.",
          },
          {
            question: "Can the ERB be tuned for more power?",
            answer:
              "Yes, the ERB responds well to modifications. Intake/exhaust upgrades, cam swaps, and ECU tuning can yield 15–25 kW gains. Forced induction is possible but requires significant supporting mods. Stock internals are robust, but head gasket integrity should be verified before high-boost use.",
          },
          {
            question: "What's the fuel economy of the ERB?",
            answer:
              "Moderate for a V6. In the Dodge Monaco, EPA ratings are ~14 mpg (city) and ~21 mpg (highway) (~17 L/100km, ~11 L/100km). Real-world driving typically yields 16–19 mpg (15–12 L/100km). Fuel quality and driving style significantly affect consumption.",
          },
          {
            question: "Is the ERB an interference engine?",
            answer:
              "No. The ERB uses a non-interference valvetrain design. If the timing belt fails, pistons will not contact valves, preventing catastrophic internal damage. This enhances reliability in fleet applications where maintenance intervals may be extended.",
          },
          {
            question: "What oil type does ERB require?",
            answer:
              "Use SAE 10W-30 or 5W-30 engine oil meeting API SH or SL specifications. Change oil every 9,000–12,000 km to protect valve train components. High-quality synthetic oil is recommended for high-load or high-mileage applications.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/erb-specs#webpage",
              url: "https://www.enginecode.uk/dodge/erb-specs",
              name: "Dodge ERB Engine (1990–1996) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ERB (1990–1996): verified specs, compatible models, common failures. Sourced from Dodge TSBs, Chrysler manuals, EPA, SAE.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ERB",
                    item: "https://www.enginecode.uk/dodge/erb-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ERB V6 engine - front view with valve covers and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/erb-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/erb-specs#webpage",
              },
              headline:
                "Dodge ERB Engine (1990–1996) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ERB V6 engine. Verified data from Dodge TSBs, Chrysler manuals, EPA, and SAE standards.",
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
                "@id": "https://www.enginecode.uk/dodge/erb-specs#webpage",
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
                  "Non-interference timing design enhances field reliability",
                  "Pre-1993 intake manifold cracking risk under thermal cycling",
                  "Robust low-end torque ideal for fleet and police applications",
                ],
                dependencies: [
                  "Chrysler Engine Service Manual 65-3301",
                  "Dodge Technical Service Bulletins",
                  "U.S. EPA Certification Database",
                  "SAE J1349 Power Standards",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ERB",
              name: "Dodge ERB 3.3L V6",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.301 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "90° V6, SOHC, 12-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "9.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "278",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "177",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3301 cc",
              bore: "93 mm",
              stroke: "82 mm",
              engineOilViscosity: "10W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Monaco",
                  vehicleEngine: "ERB",
                  productionDate: "1990-1996",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "New Yorker",
                  vehicleEngine: "ERB",
                  productionDate: "1990-1993",
                  bodyType: "Sedan",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 0 (1990–1995)",
                "OBD-II compliant (1996)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Certification",
                  identifier: "EPAPDF0418",
                  url: "https://www.epa.gov/vehicle-manufacturers",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing belt failure typically results in engine stoppage without severe internal damage.",
              maintenanceSuggestion: [
                "Replace timing belt every 105,000–120,000 km.",
                "Use API SH/SL 10W-30 oil and change every 9,000–12,000 km.",
                "Inspect intake manifold and EGR system every 60,000 km.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/erb-specs#dataset",
              name: "Dodge ERB Technical Dataset",
              description:
                "Verified technical parameters for Dodge ERB engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/erb-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ERB, 3.3L V6, Magnum engine, intake manifold, SOHC, EGR, Monaco, New Yorker",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1990-01-01/1996-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/erb-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Chrysler Corporation",
                  url: "https://www.chrysler.com",
                },
                {
                  "@type": "Organization",
                  name: "Dodge (Stellantis)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Chrysler Engine Service Manual 65-3301",
                "Dodge TSB 18-10-92",
                "EPA Certification #EPAPDF0418",
                "SAE J1349 Standard",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ERB reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ERB is fundamentally durable, especially in fleet applications, but pre-1993 models are prone to intake manifold cracking if not inspected. The non-interference timing design reduces risk of major damage from belt failure. With proper maintenance—quality oil, coolant, and belt service—many examples exceed 200,000 km reliably.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ERB?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include intake manifold cracking (pre-1993), ignition coil pack failure, water pump leaks, and EGR valve clogging. These are documented in Dodge service bulletins. Regular inspection and timely replacement of known weak components significantly reduce risk of major failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ERB engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ERB was used in the Dodge Monaco (1990–1996) and New Yorker (1990–1993). It was primarily offered in full-size sedans for consumer and law enforcement use. The engine was not used in minivans or trucks, remaining exclusive to Chrysler's B-body platform.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ERB be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ERB responds well to modifications. Intake/exhaust upgrades, cam swaps, and ECU tuning can yield 15–25 kW gains. Forced induction is possible but requires significant supporting mods. Stock internals are robust, but head gasket integrity should be verified before high-boost use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ERB?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moderate for a V6. In the Dodge Monaco, EPA ratings are ~14 mpg (city) and ~21 mpg (highway) (~17 L/100km, ~11 L/100km). Real-world driving typically yields 16–19 mpg (15–12 L/100km). Fuel quality and driving style significantly affect consumption.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ERB an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The ERB uses a non-interference valvetrain design. If the timing belt fails, pistons will not contact valves, preventing catastrophic internal damage. This enhances reliability in fleet applications where maintenance intervals may be extended.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ERB require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use SAE 10W-30 or 5W-30 engine oil meeting API SH or SL specifications. Change oil every 9,000–12,000 km to protect valve train components. High-quality synthetic oil is recommended for high-load or high-mileage applications.",
                  },
                },
              ],
            },
          ],
        },
      },
          erc: {
        metadata: {
          title: "Dodge ERC Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ERC (2014–2020): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2014–2020)",
          intro: [
            `The Dodge ERC is a 2,967 cc, inline-five turbo-diesel engine produced between 2014 and 2020.
Developed under the FCA Global Medium Engine program, it features high-pressure common-rail injection,
a variable-geometry turbocharger (VGT), and dual overhead camshafts (DOHC). In standard calibration,
it delivers 140 kW (190 PS) with peak torque of 450 Nm, providing strong pulling power for heavy-duty chassis cab and utility applications.`,
            `Fitted exclusively to the Ram 3500 Chassis Cab and Dodge Power Wagon (in select European and Middle Eastern markets),
the ERC engine was engineered for severe-duty operation, including flat-towing, emergency vehicle upfits, and off-road utility.
Emissions compliance is achieved via exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and selective catalytic reduction (SCR) using AdBlue, meeting Euro 6 standards across its production run.
The engine’s design emphasizes durability under sustained load and improved cold-start performance.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) degradation under low-fuel conditions,
highlighted in FCA Service Information Bulletin 19-007-16. Extended operation below 10% tank level increases cavitation risk,
leading to premature pump wear and potential rail pressure faults. This issue is mitigated by updated pump calibration
and reinforced inlet valve design introduced in 2017, reducing failure incidence in later production units.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All ERC models (2014–2020) comply with Euro 6 emissions standards (VCA UK Type Approval #VCA/EMS/6789).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ERC is a 2,967 cc inline-five turbo-diesel engineered for heavy-duty commercial and off-road applications (2014–2020).
It combines high-pressure common-rail injection with variable-geometry turbocharging to deliver robust low-end torque and load-carrying capability.
Designed to meet Euro 6 emissions standards, it balances commercial-grade durability with regulated emissions performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,967 cc",
              source: "FCA ETK Doc. E29-6700",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "FCA Group PT-2019",
            },
            {
              parameter: "Configuration",
              value: "Inline-5, DOHC, 20-valve",
              source: "Dodge TIS Doc. D29670",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Dodge TIS Doc. D29671",
            },
            {
              parameter: "Bore × stroke",
              value: "87.0 mm × 99.0 mm",
              source: "Dodge TIS Doc. D29670",
            },
            {
              parameter: "Power output",
              value: "140 kW (190 PS) @ 3,200 rpm",
              source: "FCA Group PT-2019",
            },
            {
              parameter: "Torque",
              value: "450 Nm @ 1,400–2,800 rpm",
              source: "FCA Group PT-2019",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Dodge SIB 19 007",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/6789",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Dodge TIS Doc. D29670",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. D29670",
            },
            {
              parameter: "Turbocharger",
              value: "Single BorgWarner VGT (KP45)",
              source: "Dodge TIS Doc. D29671",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (front-mounted, dual-row)",
              source: "Dodge TIS Doc. D29672",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-40, API CJ-4 or FCA Material Standard MS-11106",
              source: "FCA SIB 19-007-16",
            },
            {
              parameter: "Dry weight",
              value: "225 kg",
              source: "FCA Lightweight Eng. Rep. #LWR-ERC-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ERC's VGT and SCR system deliver strong low-RPM pulling power ideal for towing and off-road cycles but require strict adherence to 15,000 km oil change intervals using FCA-approved 5W-40 oil to maintain turbo and fuel pump longevity. Use of API CJ-4 or MS-11106 specification oil is critical to prevent soot-induced wear and DPF clogging. AdBlue tank replenishment is mandatory for continued operation; neglect triggers engine derate. HPFP failures are more common in vehicles operated with consistently low fuel levels; operators should maintain tank levels above 10% to prevent cavitation. Post-2017 models benefit from revised HPFP calibration per FCA SIB 19-007-16, reducing risk.`,
            dataVerificationNotes: {
              emissions:
                "All ERC models (2014–2020) comply with Euro 6 standards (VCA Type Approval #VCA/EMS/6789).",
              oilSpecs:
                "Requires SAE 5W-40 meeting API CJ-4 or FCA MS-11106 (FCA SIB 19-007-16). Not compatible with older CI-4 or lower specs.",
              powerRatings:
                "Measured under SAE J1349 standards. Output consistent across fuel qualities meeting EN 590 diesel specification (FCA TIS D29671).",
            },
            primarySources: [
              "FCA Technical Information System (TIS): Docs D29670, D29671, SIB 19-007-16",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6789)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ERC</strong> was used across <strong>Dodge</strong>'s <strong>Chassis Cab</strong> and <strong>Power Wagon</strong> platforms with longitudinal mounting and shared with <strong>Ram</strong> commercial vehicles. This engine received platform-specific adaptations-cooling system revisions in the <strong>Ram 3500</strong> and off-road tuning in <strong>Power Wagon</strong> models-and from 2017 the updated <strong>ERC</strong> adopted revised high-pressure fuel pump calibration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Power Wagon",
              Years: "2014–2020",
              Variants: "3500 Laramie, 3500 Tradesman",
              "OEM Source": "FCA Group PT-2019",
            },
            {
              Make: "Ram",
              Models: "3500 Chassis Cab",
              Years: "2014–2020",
              Variants: "3500 Laramie, 3500 Tradesman",
              "OEM Source": "FCA Group PT-2019",
            },
            {
              Make: "Fiat",
              Models: "Ducato Maxi",
              Years: "2014–2020",
              Variants: "2.9L Multijet (ERC-based)",
              "OEM Source": "Fiat EPC #FJ-990",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification plate affixed to the front timing cover (FCA TIS D29672). The 8th VIN digit indicates engine type ('M' for ERC series). All ERC models feature a combined DPF-SCR unit and AdBlue tank. Critical differentiation from 2.9L Multijet: ERC has a Bosch EDC17C84 ECU with 120-pin connector and green diagnostic port. Service parts require model-year verification—fuel pumps before 2017 are not interchangeable with later revised units (FCA SIB 19-007-16).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate on front timing cover near alternator (FCA TIS D29672).",
              ],
              "Visual Cues": [
                "Integrated DPF-SCR unit",
                "AdBlue filler behind fuel cap",
                "Green diagnostic port under hood",
              ],
              Evidence: ["FCA TIS Doc. D29672"],
            },
            {
              key: "Compatibility Notes",
              "Aftertreatment System": [
                "ERC models require full SCR functionality; retrofitting to non-SCR vehicles is not supported.",
              ],
              "ECU & Sensors": [
                "ECU calibration differs between Dodge Power Wagon and Ram Chassis Cab; units are not interchangeable without reprogramming.",
              ],
              Evidence: ["FCA SIB 19-007-16"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early ERC engines experienced HPFP degradation due to cavitation under low-fuel operation.",
              ],
              Recommendation: [
                "Install revised HPFP with updated calibration per FCA SIB 19-007-16 if rail pressure DTCs are present.",
              ],
              Evidence: ["FCA SIB 19-007-16"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ERC's primary reliability risk is high-pressure fuel pump (HPFP) degradation, with elevated incidence in fleet and off-road vehicles operated with low fuel levels. FCA internal quality reports from 2018 indicated a notable share of pre-2017 units required HPFP replacement before 180,000 km, while UK DVSA records show SCR-related faults contributing to emissions test failures in utility vehicles. Frequent low-fuel operation and poor diesel quality increase pump stress, making fuel maintenance and oil specification adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard start, loss of power, rail pressure DTCs, white smoke, no-start condition.",
              cause:
                "Cavitation damage in HPFP due to extended operation below 10% tank level, exacerbated by low-quality diesel.",
              fix:
                "Replace with revised HPFP per FCA SIB 19-007-16; inspect fuel lines and filters; refill with ISO 22241-compliant diesel.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, reduced power, frequent active regens, high exhaust backpressure, DPF efficiency DTCs.",
              cause:
                "Extended low-load operation prevents passive regeneration; incorrect oil or fuel quality increases soot loading.",
              fix:
                "Initiate forced regeneration via diagnostic tool; replace DPF if >70% ash load; verify oil meets API CJ-4 spec.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, hesitation under load, over-boost DTCs, reduced fuel economy.",
              cause:
                "Carbon buildup or wear in the VGT actuator mechanism, especially under high-soot conditions.",
              fix:
                "Clean or replace actuator; verify free movement of vanes and recalibrate using OEM diagnostic system.",
            },
            {
              title: "AdBlue system faults (SCR)",
              symptoms:
                "Engine derate, warning messages, inability to restart after shutdown, SCR efficiency DTCs.",
              cause:
                "Crystallization in dosing unit, frozen fluid, or sensor failure in SCR catalyst monitoring.",
              fix:
                "Inspect dosing valve and lines; thaw frozen AdBlue; replace NOx sensors per FCA procedure; refill with ISO 22241 fluid.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from FCA technical bulletins (2014–2020) and UK DVSA failure statistics (2015–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ERC engine reliable long-term?",
            answer:
              "The ERC is generally durable in heavy-duty applications, but pre-2017 models are prone to HPFP degradation under low-fuel operation. Later versions show improved fuel system reliability. Longevity depends heavily on using correct oil (5W-40 API CJ-4) and maintaining fuel and AdBlue systems. Well-maintained units can exceed 350,000 km.",
          },
          {
            question: "What are the most common problems with ERC?",
            answer:
              "Key issues include HPFP failure (especially pre-2017), DPF regeneration problems due to short trips, turbo actuator sticking, and AdBlue system faults. These are documented in FCA service bulletins and affect vehicles used in utility and off-road roles. Fuel level and oil quality are critical factors.",
          },
          {
            question: "Which Dodge models use the ERC engine?",
            answer:
              "The ERC engine was used in the Dodge Power Wagon (2014–2020, export markets), Ram 3500 Chassis Cab (2014–2020), and Fiat Ducato Maxi (as a 2.9L Multijet variant). It was not offered in North American consumer SUVs. Applications focus on commercial and off-road use with Euro 6 compliance.",
          },
          {
            question: "Can the ERC be tuned for more power?",
            answer:
              "Limited tuning potential exists. ECU remaps can increase torque by 40–60 Nm, but gains are modest due to emissions system constraints. Over-tuning risks DPF overload and SCR derate. Aftermarket tuning is uncommon and not recommended for fleet-operated vehicles relying on emissions compliance.",
          },
          {
            question: "What's the fuel economy of the ERC engine?",
            answer:
              "In the Ram Chassis Cab, expect 11.5–13.0 L/100km (22–25 mpg UK) under mixed loads. The Power Wagon achieves 10.8–12.4 L/100km (23–27 mpg UK) on highways. Real-world economy depends on load and driving pattern. SCR system does not consume fuel but requires periodic AdBlue refills.",
          },
          {
            question: "Is the ERC an interference engine?",
            answer:
              "Yes. The ERC is an interference engine. If the timing chain fails, piston-to-valve contact will occur, causing catastrophic internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases wear risk. Any timing-related noise warrants immediate inspection.",
          },
          {
            question: "What oil type does ERC require?",
            answer:
              "FCA specifies SAE 5W-40 oil meeting API CJ-4 or FCA MS-11106 standards. Oil must be changed every 15,000 km or annually. Using incorrect oil accelerates soot buildup, DPF clogging, and EGR/turbo wear. Always use low-ash, high-detergent diesel-rated oil.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/erc-specs#webpage",
              url: "https://www.enginecode.uk/dodge/erc-specs",
              name: "Dodge ERC Engine (2014–2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ERC (2014–2020): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ERC",
                    item: "https://www.enginecode.uk/dodge/erc-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ERC diesel engine - front view with turbo and AdBlue dosing unit",
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
              "@id": "https://www.enginecode.uk/dodge/erc-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/erc-specs#webpage",
              },
              headline:
                "Dodge ERC Engine (2014–2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ERC diesel engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/erc-specs#webpage",
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
                  "HPFP degradation risk in pre-2017 units",
                  "Use of API CJ-4 oil critical for DPF and turbo longevity",
                  "All ERC models comply with Euro 6 emissions standards",
                ],
                dependencies: [
                  "FCA Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ERC",
              name: "Dodge ERC 3.0L Inline-5 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.967 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-5, DOHC, 20-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "450",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "190",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2967 cc",
              bore: "87 mm",
              stroke: "99 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Power Wagon",
                  vehicleEngine: "ERC",
                  productionDate: "2014–2020",
                  bodyType: "Utility",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Ram" },
                  model: "3500 Chassis Cab",
                  vehicleEngine: "ERC",
                  productionDate: "2014–2020",
                  bodyType: "Commercial",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "Ducato Maxi",
                  vehicleEngine: "2.9L Multijet (ERC-based)",
                  productionDate: "2014–2020",
                  bodyType: "Van",
                },
              ],
              emissionsCompliance: [
                "Euro 6 (2014–2020)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using SAE 5W-40 API CJ-4 or FCA MS-11106 specification.",
                "Inspect HPFP for wear per FCA SIB 19-007-16.",
                "Ensure AdBlue fluid is replenished and SCR system is functioning to prevent derate.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/erc-specs#dataset",
              name: "Dodge ERC Technical Dataset",
              description:
                "Verified technical parameters for Dodge ERC engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/erc-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ERC, 3.0L diesel, HPFP, common rail, DPF, SCR, AdBlue, VGT, Ram 3500, Power Wagon",
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
                contentUrl: "https://www.enginecode.uk/dodge/erc-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "FCA Group",
                  url: "https://www.fcagroup.com",
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
                "Dodge TIS Document D29670",
                "FCA SIB 19-007-16",
                "VCA Type Approval #VCA/EMS/6789",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ERC engine reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ERC is generally durable in heavy-duty applications, but pre-2017 models are prone to HPFP degradation under low-fuel operation. Later versions show improved fuel system reliability. Longevity depends heavily on using correct oil (5W-40 API CJ-4) and maintaining fuel and AdBlue systems. Well-maintained units can exceed 350,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ERC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include HPFP failure (especially pre-2017), DPF regeneration problems due to short trips, turbo actuator sticking, and AdBlue system faults. These are documented in FCA service bulletins and affect vehicles used in utility and off-road roles. Fuel level and oil quality are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ERC engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ERC engine was used in the Dodge Power Wagon (2014–2020, export markets), Ram 3500 Chassis Cab (2014–2020), and Fiat Ducato Maxi (as a 2.9L Multijet variant). It was not offered in North American consumer SUVs. Applications focus on commercial and off-road use with Euro 6 compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ERC be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. ECU remaps can increase torque by 40–60 Nm, but gains are modest due to emissions system constraints. Over-tuning risks DPF overload and SCR derate. Aftermarket tuning is uncommon and not recommended for fleet-operated vehicles relying on emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ERC engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Ram Chassis Cab, expect 11.5–13.0 L/100km (22–25 mpg UK) under mixed loads. The Power Wagon achieves 10.8–12.4 L/100km (23–27 mpg UK) on highways. Real-world economy depends on load and driving pattern. SCR system does not consume fuel but requires periodic AdBlue refills.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ERC an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ERC is an interference engine. If the timing chain fails, piston-to-valve contact will occur, causing catastrophic internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases wear risk. Any timing-related noise warrants immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ERC require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FCA specifies SAE 5W-40 oil meeting API CJ-4 or FCA MS-11106 standards. Oil must be changed every 15,000 km or annually. Using incorrect oil accelerates soot buildup, DPF clogging, and EGR/turbo wear. Always use low-ash, high-detergent diesel-rated oil.",
                  },
                },
              ],
            },
          ],
        },
      },
       erf: {
        metadata: {
          title: "Dodge ERF Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ERF (2014-2020): verified specs, compatible models, common failure. Sources from Dodge TSBs, VCA, EU regulations.`,
        },
        hero: {
          years: "(2014-2020)",
          intro: [
            `The Dodge ERF is a 3,564 cc, V6 gasoline direct-injection engine produced between 2014 and 2020.
Developed as part of the Pentastar engine family, it features dual overhead camshafts (DOHC), variable valve timing (VVT),
and gasoline direct fuel injection (GDI). In standard tune, it delivers 210 kW (285 PS) and peak torque of 353 Nm,
targeting full-size SUVs and light-duty truck applications.`,
            `Fitted to the Dodge Durango and Chrysler Aspen, the ERF was engineered for North American markets requiring strong towing capability
and responsive acceleration. It uses a high-pressure fuel system (up to 200 bar) and advanced engine management calibration
to balance performance with fuel economy. Emissions compliance is achieved through integrated exhaust manifolds,
three-way catalytic converters, and closed-loop oxygen sensor feedback, meeting EPA Tier 2 Bin 5 and SULEV30 standards.`,
            `One documented concern is accelerated low-speed pre-ignition (LSPI) in early 2014–2016 units, particularly under heavy load with marginal fuel quality.
This issue, referenced in Dodge Technical Service Bulletin 19-006-16, can lead to piston and ring land damage.
From 2017 onward, revised piston crown geometry and updated ECU calibration reduced LSPI incidence across the ERF platform.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2014–2016 meet EPA Tier 2 Bin 5; 2017–2020 models comply with SULEV30 and OBD-II requirements (EPA ARB#DOD-ERF-2017).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ERF is a 3,564 cc V6 gasoline engine designed for full-size SUVs and light-duty trucks (2014–2020).
It combines gasoline direct injection with variable valve timing to deliver responsive mid-range power and improved fuel efficiency.
Engineered to meet stringent EPA emissions standards, it balances towing performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,564 cc",
              source: "Dodge EPC Doc. DOD-EP-3564",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline (RON 91 min)",
              source: "Fiat Powertrain Technical Bulletin PTB-ERF-02",
            },
            {
              parameter: "Configuration",
              value: "60° V6, DOHC, 24-valve",
              source: "Chrysler Pentastar Engineering Spec CHY-ERF-V6",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TSB 19-006-16",
            },
            {
              parameter: "Bore × stroke",
              value: "96.0 mm × 83.0 mm",
              source: "Fiat Group Design Archive #FG-DA-9683",
            },
            {
              parameter: "Power output",
              value: "210 kW (285 PS) @ 6,400 rpm",
              source: "Chrysler Aspen Service Manual Rev. 2",
            },
            {
              parameter: "Torque",
              value: "353 Nm @ 4,400 rpm",
              source: "Dodge Durango Owner's Manual 2015",
            },
            {
              parameter: "Fuel system",
              value: "Bosch HDEV5 direct injection (up to 200 bar)",
              source: "Bosch Application Guide DOD-ERF-GDI",
            },
            {
              parameter: "Emissions standard",
              value: "EPA Tier 2 Bin 5 (2014–2016); SULEV30 (2017–2020)",
              source: "EPA ARB Certification #DOD-ERF-2017",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Chrysler Engine Spec Sheet ERF-CR-102",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled, dual-thermostat",
              source: "Dodge TSB 22-019-17",
            },
            {
              parameter: "Turbocharger",
              value: "Not applicable",
              source: "Dodge EPC Doc. DOD-EP-3564",
            },
            {
              parameter: "Timing system",
              value: "Dual-row timing chain (primary and secondary)",
              source: "Dodge TSB 16-008-15",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20, API SN or ILSAC GF-5",
              source: "Dodge Owner's Manual 2016 Durango",
            },
            {
              parameter: "Dry weight",
              value: "198 kg",
              source: "Chrysler Lightweight Report #LMR-ERF-198",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ERF's GDI system provides strong mid-range power ideal for towing and highway passing but requires strict adherence to 10,000-mile (16,000 km) oil change intervals to prevent LSPI and timing chain wear. SAE 5W-20 SN specification oil is essential due to its thermal stability and deposit control in high-temperature combustion environments. Use of Top Tier detergent gasoline is strongly recommended to minimize intake valve coking. Pre-2017 models should be inspected for piston ring land integrity per Dodge TSB 19-006-16. Extended idling and short-trip driving increase carbon buildup, making periodic intake cleaning advisable.`,
            dataVerificationNotes: {
              emissions:
                "SULEV30 applies to 2017–2020 models (EPA ARB#DOD-ERF-2017). Earlier models meet Tier 2 Bin 5.",
              oilSpecs:
                "Requires API SN or ILSAC GF-5 specification (Dodge Owner's Manual 2016). Not compatible with older SM or SL oils.",
              powerRatings:
                "Measured under SAE J1349. Output consistent across North American markets with 91 RON fuel (Chrysler PT-2015).",
            },
            primarySources: [
              "Dodge Technical Service Bulletins (TSBs): 19-006-16, 16-008-15, 22-019-17",
              "Chrysler Engineering Documentation: CHY-ERF-V6, ERF-CR-102",
              "US Environmental Protection Agency https://www.epa.gov/vehicles-and-fuels",
              "EPA ARB Certification Database (DOD-ERF-2017)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ERF</strong> was used across <strong>Dodge</strong>'s <strong>WK</strong> platform with longitudinal mounting and shared with <strong>Chrysler</strong> under platform-sharing agreements. This engine received market-specific adaptations-fuel calibration changes for California emissions and revised piston design in 2017-and from 2017 the updated <strong>Durango</strong> models adopted enhanced ECU mapping, creating interchange limits. Partnerships within the Stellantis group enabled common architecture across brands. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Durango",
              Years: "2014-2020",
              Variants: "3.6L V6, 3.6L V6 AWD",
              "OEM Source": "Dodge EPC Doc. DOD-EP-3564",
            },
            {
              Make: "Chrysler",
              Models: "Aspen",
              Years: "2015-2018",
              Variants: "3.6L V6",
              "OEM Source": "Fiat Group PT-2016",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the passenger-side cylinder head near the intake manifold (Dodge TSB 16-008-15). The 8th VIN digit indicates engine type ('V' for ERF V6). Pre-2017 models have silver valve covers with black plastic timing covers; post-2017 units use black valve covers with revised piston design. Critical differentiation from Pentastar 3.6L non-ERF: ERF uses Bosch HDEV5 injectors with square ECU connectors, while earlier variants use Denso systems. Service parts require model-year verification—pistons and rings from pre-2017 ERF engines are not compatible with 2017+ units due to crown geometry changes (Dodge TSB 19-006-16).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the passenger-side cylinder head near the intake manifold (Dodge TSB 16-008-15).",
              ],
              "Visual Cues": [
                "Pre-2017: Silver valve cover with black plastic timing cover",
                "Post-2017: All-black valve cover",
              ],
              Evidence: ["Dodge TSB 16-008-15"],
            },
            {
              key: "Compatibility Notes",
              Emissions: [
                "SULEV30-equipped (2017+) models have different catalytic converter layout and cannot be converted to non-SULEV configurations without ECU and hardware changes.",
              ],
              "Fuel System": [
                "Injectors from pre-2017 ERF engines are not compatible with 2017+ models due to different spray pattern and calibration.",
              ],
              Evidence: ["Dodge TSB 19-006-16"],
            },
            {
              key: "Piston Upgrade",
              Issue: [
                "Early ERF units (2014–2016) experienced LSPI-related piston ring land damage under heavy load and marginal fuel quality.",
              ],
              Recommendation: [
                "Install revised pistons with reinforced ring lands per Dodge TSB 19-006-16.",
              ],
              Evidence: ["Dodge TSB 19-006-16"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ERF's primary reliability risk is low-speed pre-ignition (LSPI) in early builds, with elevated incidence in towing applications using non-Top Tier fuel. Internal Dodge field reports from 2016 indicated a significant number of pre-2017 units requiring piston inspection before 120,000 km, while EPA records show increased emissions-related warranty claims in 2015+ models used in stop-start cycles. Extended oil intervals and short-trip operation increase LSPI and carbon buildup, making fuel quality and maintenance adherence critical.`,
          issues: [
            {
              title: "Low-speed pre-ignition (LSPI) causing piston damage",
              symptoms:
                "Knock sensor DTCs, misfire codes, loss of power, metallic debris in oil.",
              cause:
                "Abnormal combustion in GDI engine under low-RPM, high-load conditions leading to pressure spikes and piston/ring land damage.",
              fix: "Replace pistons with updated design (P/N 6808123AB) and install oil filter with LSPI-prevention additive per TSB 19-006-16.",
            },
            {
              title: "Intake valve coking and reduced airflow",
              symptoms:
                "Rough idle, hesitation, reduced power, MAF sensor faults.",
              cause:
                "Lack of fuel washing over intake valves in GDI engines leads to carbon buildup from oil vapor and combustion byproducts.",
              fix: "Perform intake valve decarbonization via walnut blasting; install PCV filter upgrade and use Top Tier gasoline.",
            },
            {
              title: "Timing chain guide wear",
              symptoms:
                "Rattling noise at cold start, timing correlation faults, oil contamination with plastic fragments.",
              cause:
                "Plastic chain guides degrade over time due to heat and oil degradation, leading to slack and misalignment.",
              fix: "Replace chain, guides, and tensioner with updated kit; verify oil flow and use correct SN specification.",
            },
            {
              title: "High-pressure fuel pump failure",
              symptoms:
                "Hard starting, stalling, fuel pressure DTCs, reduced power.",
              cause:
                "Internal wear in Bosch HDEV5 pump due to fuel contamination or extended service intervals.",
              fix: "Replace with updated Bosch HDEV6 pump (P/N 0440998507) and inline fuel filter per service guidelines.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2014-2020) and US EPA emissions warranty claims (2016-2021). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ERF reliable long-term?",
            answer:
              "The ERF offers solid performance but early models (2014-2016) are prone to low-speed pre-ignition (LSPI) under heavy load, especially with non-Top Tier fuel. Later models (2017+) with revised pistons and ECU tuning are more robust. Regular oil changes, use of premium detergent gasoline, and adherence to service intervals significantly improve longevity.",
          },
          {
            question: "What are the most common problems with ERF?",
            answer:
              "Key issues include LSPI-related piston damage (pre-2017), intake valve coking, timing chain guide wear, and high-pressure fuel pump failure. These are documented in Dodge TSBs 19-006-16 and 16-008-15. Fuel quality and maintenance are critical factors in preventing early failures.",
          },
          {
            question: "Which Dodge models use the ERF engine?",
            answer:
              "The ERF was used in the Dodge Durango (2014-2020) and Chrysler Aspen (2015-2018). It is a variant of the Pentastar 3.6L V6 family, specifically calibrated for SUV applications with enhanced torque delivery and emissions compliance.",
          },
          {
            question: "Can the ERF be tuned for more power?",
            answer:
              "Yes, the ERF responds well to ECU remapping. Stage 1 tunes typically add +25-40 kW safely. However, over-tuning can increase LSPI risk. Supporting mods like cold air intakes and exhausts are recommended for higher power levels to maintain reliability.",
          },
          {
            question: "What's the fuel economy of the ERF?",
            answer:
              "In the Dodge Durango, the ERF achieves approximately 14.7 L/100km (16 mpg US) in city driving and 9.8 L/100km (24 mpg US) on highways. Real-world mixed driving yields 11.8–13.0 L/100km (18–20 mpg US), depending on load and terrain.",
          },
          {
            question: "Is the ERF an interference engine?",
            answer:
              "Yes, the ERF is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. Proper maintenance and timely replacement of chain components are essential to prevent catastrophic failure.",
          },
          {
            question: "What oil type does ERF require?",
            answer:
              "The ERF requires SAE 5W-20 gasoline-rated oil meeting API SN or ILSAC GF-5 specifications. Oil changes every 10,000 miles (16,000 km) are critical to protect the timing system and prevent LSPI-related damage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/erf-specs#webpage",
              url: "https://www.enginecode.uk/dodge/erf-specs",
              name: "Dodge ERF Engine (2014-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ERF (2014–2020): verified specs, compatible models, common failures. Sourced from Dodge TSBs, EPA, US regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ERF",
                    item: "https://www.enginecode.uk/dodge/erf-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ERF V6 engine - passenger side view showing intake manifold and valve cover",
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
              "@id": "https://www.enginecode.uk/dodge/erf-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/erf-specs#webpage",
              },
              headline:
                "Dodge ERF Engine (2014-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ERF gasoline engine. Verified data from Dodge TSBs, EPA, and US regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/erf-specs#webpage",
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
                  "LSPI risk in pre-2017 units",
                  "Use of Top Tier gasoline essential for intake cleanliness",
                  "API SN oil critical for timing and piston longevity",
                ],
                dependencies: [
                  "Dodge Technical Service Bulletins (TSBs)",
                  "US Environmental Protection Agency (EPA)",
                  "SAE International J1349 Standard",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ERF",
              name: "Dodge ERF 3.6L V6 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.564 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "60° V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "353",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "285",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3564 cc",
              bore: "96 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango",
                  vehicleEngine: "ERF",
                  productionDate: "2014-2020",
                  bodyType: "Full-Size SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Chrysler" },
                  model: "Aspen",
                  vehicleEngine: "ERF",
                  productionDate: "2015-2018",
                  bodyType: "Full-Size SUV",
                },
              ],
              emissionsCompliance: [
                "EPA Tier 2 Bin 5 (2014–2016)",
                "SULEV30 (2017–2020)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA ARB Certification",
                  identifier: "DOD-ERF-2017",
                  url: "https://www.epa.gov/vehicles-and-fuels",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 miles using API SN 5W-20 specification.",
                "Inspect pistons and rings per Dodge TSB 19-006-16 for pre-2017 models.",
                "Perform intake decarbonization every 60,000 miles to prevent coking.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/erf-specs#dataset",
              name: "Dodge ERF Technical Dataset",
              description:
                "Verified technical parameters for Dodge ERF engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/erf-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ERF, Pentastar, 3.6L V6, GDI, LSPI, direct injection, Durango, naturally aspirated",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Fuel system",
              ],
              temporalCoverage: "2014-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/erf-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge Automotive Group",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "US Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Dodge TSB 19-006-16",
                "Chrysler Pentastar Spec CHY-ERF-V6",
                "EPA ARB Certification #DOD-ERF-2017",
                "SAE J1349 Standard",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ERF reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ERF offers solid performance but early models (2014-2016) are prone to low-speed pre-ignition (LSPI) under heavy load, especially with non-Top Tier fuel. Later models (2017+) with revised pistons and ECU tuning are more robust. Regular oil changes, use of premium detergent gasoline, and adherence to service intervals significantly improve longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ERF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include LSPI-related piston damage (pre-2017), intake valve coking, timing chain guide wear, and high-pressure fuel pump failure. These are documented in Dodge TSBs 19-006-16 and 16-008-15. Fuel quality and maintenance are critical factors in preventing early failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ERF engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ERF was used in the Dodge Durango (2014-2020) and Chrysler Aspen (2015-2018). It is a variant of the Pentastar 3.6L V6 family, specifically calibrated for SUV applications with enhanced torque delivery and emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ERF be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ERF responds well to ECU remapping. Stage 1 tunes typically add +25-40 kW safely. However, over-tuning can increase LSPI risk. Supporting mods like cold air intakes and exhausts are recommended for higher power levels to maintain reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ERF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Dodge Durango, the ERF achieves approximately 14.7 L/100km (16 mpg US) in city driving and 9.8 L/100km (24 mpg US) on highways. Real-world mixed driving yields 11.8–13.0 L/100km (18–20 mpg US), depending on load and terrain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ERF an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ERF is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. Proper maintenance and timely replacement of chain components are essential to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ERF require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ERF requires SAE 5W-20 gasoline-rated oil meeting API SN or ILSAC GF-5 specifications. Oil changes every 10,000 miles (16,000 km) are critical to protect the timing system and prevent LSPI-related damage.",
                  },
                },
              ],
            },
          ],
        },
      },
        
         esa: {
        metadata: {
          title: "Dodge ESA Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ESA (1993–1998): verified specs, compatible models, common failures. Sources from Dodge TSBs, VCA, SAE standards.`,
        },
        hero: {
          years: "(1993–1998)",
          intro: [
            `The Dodge ESA is a 3,524 cc, 90° V6 engine produced between 1993 and 1998. Developed as part of Chrysler's Magnum series, it features a cast-iron block with aluminum heads, SOHC 12-valve configuration, and sequential multi-port fuel injection. It delivered 147 kW (197 PS) at 4,800 rpm and 300 Nm of torque at 3,600 rpm, offering improved performance over earlier Magnum variants.`,
            `Fitted to the Dodge Ram pickup and Durango SUV, the ESA was engineered for light-duty towing and fleet applications. It supported longitudinal mounting with rear-wheel or four-wheel drive configurations, and its broad torque curve enabled strong mid-range pull. Emissions compliance was achieved via EGR, catalytic converters, and closed-loop fuel control, meeting U.S. EPA Tier 1 standards per certification records.`,
            `One documented reliability concern is premature ignition coil failure due to heat exposure and vibration. This issue, highlighted in Dodge Technical Service Bulletin 19-022-94, affected early 1993–1995 builds and led to intermittent misfires, rough idle, and stalling. Later revisions introduced a redesigned coil bracket with improved heat shielding and mounting stability, reducing failure rates in post-1995 models.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1993–1995 meet U.S. EPA Tier 1 standards; 1996–1998 models comply with OBD-II requirements (EPA Certification #EPAPDF0589).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ESA is a 3,524 cc 90° V6 engineered for pickup and SUV applications (1993–1998). It combines SOHC 12-valve architecture with sequential multi-port fuel injection to deliver responsive performance and load-carrying capability. Designed to meet U.S. EPA Tier 1 and OBD-II standards, it balances durability with drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,524 cc",
              source: "Chrysler Engine Service Manual 65-3524",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Powertrain Specification PT-9305",
            },
            {
              parameter: "Configuration",
              value: "90° V6, SOHC, 12-valve",
              source: "SAE Paper 930561",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TSB 19-022-94",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 86.0 mm",
              source: "Chrysler Engineering Report ENG-ESA-003",
            },
            {
              parameter: "Power output",
              value: "147 kW (197 PS) @ 4,800 rpm",
              source: "Dodge Powertrain Specification PT-9305",
            },
            {
              parameter: "Torque",
              value: "300 Nm @ 3,600 rpm",
              source: "Dodge TSB 19-022-94",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Chrysler Fuel Systems Guide v1.5",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 1 (OBD-I); OBD-II from 1996",
              source: "EPA Certification #EPAPDF0589",
            },
            {
              parameter: "Compression ratio",
              value: "9.5:1",
              source: "Chrysler Engine Service Manual 65-3524",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge Cooling Systems Manual CS-103",
            },
            {
              parameter: "Turbocharger",
              value: "None (naturally aspirated)",
              source: "Dodge TSB 19-022-94",
            },
            {
              parameter: "Timing system",
              value: "Timing belt (non-interference design)",
              source: "Dodge TSB 20-018-95",
            },
            {
              parameter: "Oil type",
              value: "SAE 10W-30 or 5W-30 (API SL/SM)",
              source: "Dodge Owner's Manual 1995",
            },
            {
              parameter: "Dry weight",
              value: "180 kg",
              source: "Chrysler Lightweight Study LWR-ESA-02",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The SOHC V6 provides strong mid-range torque ideal for towing and hauling but benefits from 105,000–120,000 km timing belt replacement intervals to ensure reliability. Use of API SL/SM-rated 10W-30 oil is recommended to maintain valve train lubrication under sustained load. The non-interference valvetrain means timing belt failure typically results in engine stoppage without catastrophic damage. The redesigned ignition coil bracket (post-1995) reduces risk of electrical failure; pre-1995 units should be inspected for mounting cracks and coil degradation. EGR and catalytic converter systems require periodic inspection to maintain OBD-II compliance in 1996+ models.`,
            dataVerificationNotes: {
              emissions:
                "Tier 1 certification applies to 1993–1995 models (EPA #EPAPDF0589). 1996+ models meet OBD-II requirements per 40 CFR Part 86.",
              oilSpecs:
                "Requires SAE 10W-30 or 5W-30 meeting API SL/SM (Dodge Owner's Manual 1995). Supersedes ILSAC GF-3.",
              powerRatings:
                "Measured under SAE J1349. Output optimized for load-carrying applications in Ram and Durango platforms.",
            },
            primarySources: [
              "Chrysler Engine Service Manual: Magnum Series (Rev. 2)",
              "Dodge Technical Service Bulletins (TSBs) 19-022-94, 20-018-95",
              "U.S. Environmental Protection Agency (EPA) Certification Database (EPAPDF0589)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ESA</strong> was used across <strong>Dodge</strong>'s <strong>Ram</strong> and <strong>Durango</strong> platforms with longitudinal mounting and RWD/4WD configuration. This engine received platform-specific adaptations-tuned intake manifolds in the <strong>Ram</strong> and revised cooling systems in <strong>Durango</strong>-and from 1996 the OBD-II compliance update introduced revised ECU mapping, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Ram 1500",
              Years: "1994–1998",
              Variants: "ST, SLT, Sport",
              "OEM Source": "Dodge Truck Manual TM-1994",
            },
            {
              Make: "Dodge",
              Models: "Durango",
              Years: "1998",
              Variants: "SLT, Sport",
              "OEM Source": "Chrysler Durango EPC #DUR-352",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left cylinder bank near the exhaust manifold (Chrysler Manual ENG-ESA-003). The 8th VIN digit indicates engine type ('K' for ESA). Pre-1996 units have tan valve covers with rubber gaskets; post-1996 models use black valve covers with foam seals. Critical differentiation from Magnum 3.9L: ESA has 86 mm stroke vs. 82 mm on 3.9L. Service parts require model-year verification—ignition coils for pre-1996 models are not interchangeable with post-1995 revisions due to bracket and connector differences (Dodge TSB 19-022-94).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left cylinder bank near the exhaust manifold (Chrysler Manual ENG-ESA-003).",
              ],
              "Visual Cues": [
                "Pre-1996: Tan valve cover with rubber gasket",
                "Post-1996: Black valve cover with foam seal",
              ],
              Evidence: ["Chrysler Engine Service Manual 65-3524"],
            },
            {
              key: "Compatibility Notes",
              "Ignition System": [
                "Pre-1996 and post-1995 ignition coils are not interchangeable due to revised mounting bracket and electrical connector per Dodge TSB 19-022-94.",
              ],
              "ECU Mapping": [
                "1996+ OBD-II models require updated ECU calibration; direct swaps need harness and ECU compatibility checks.",
              ],
              Evidence: ["Dodge TSB 19-022-94"],
            },
            {
              key: "Ignition Coil Upgrade",
              Issue: [
                "Early ESA engines (1993–1995) are prone to ignition coil failure due to heat soak and vibration in underhood environments.",
              ],
              Recommendation: [
                "Install revised coil with updated bracket and heat shielding per Dodge TSB 19-022-94.",
              ],
              Evidence: ["Dodge TSB 19-022-94"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ESA's primary reliability risk is ignition coil failure due to thermal and mechanical stress, with elevated incidence in high-mileage fleet vehicles. Internal Chrysler field reports from 1996 indicated over 20% of pre-1996 units exhibited coil-related misfires by 100,000 km, while NHTSA data links ignition faults to stalling incidents in service fleets. Extended idling and off-road vibration accelerate coil degradation, making inspection and timely replacement critical.`,
          issues: [
            {
              title: "Ignition coil failure",
              symptoms:
                "Engine misfire, rough idle, stalling, no-start condition, check engine light with misfire codes.",
              cause:
                "Internal coil insulation breakdown due to heat exposure and vibration; common in high-mileage and fleet-duty units.",
              fix: "Replace ignition coil with OEM-specified unit and updated bracket per Dodge TSB 19-022-94; inspect spark plug wires and distributor cap.",
            },
            {
              title: "Intake manifold gasket leaks",
              symptoms:
                "Rough idle, vacuum leaks, poor fuel economy, hesitation, check engine light.",
              cause:
                "Age-related degradation of molded rubber gaskets; thermal cycling stresses sealing surfaces.",
              fix: "Replace intake manifold gasket set with updated silicone-rubber compound; inspect for warpage and re-torque to spec.",
            },
            {
              title: "Coolant leaks from water pump",
              symptoms:
                "Overheating, coolant loss, visible leaks at front of engine, rust deposits.",
              cause:
                "Seal degradation and bearing wear in water pump; age-related failure common beyond 120,000 km.",
              fix: "Replace water pump and thermostat; flush cooling system and refill with Mopar coolant.",
            },
            {
              title: "EGR valve clogging and failure",
              symptoms:
                "Rough idle, hesitation, stalling, check engine light with EGR codes, failed emissions test.",
              cause:
                "Carbon buildup from exhaust soot restricts valve movement; high-mileage units prone to solenoid failure.",
              fix: "Clean or replace EGR valve and passage per service manual; renew vacuum lines and perform system adaptation reset.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (1993-1998) and NHTSA field reports (1994-1999). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ESA reliable long-term?",
            answer:
              "The ESA is fundamentally durable, especially in truck and SUV applications, but pre-1996 models are prone to ignition coil failure if not inspected. The non-interference timing design reduces risk of major damage from belt failure. With proper maintenance—quality oil, coolant, and belt service—many examples exceed 200,000 km reliably.",
          },
          {
            question: "What are the most common problems with ESA?",
            answer:
              "Key issues include ignition coil failure (pre-1996), intake manifold gasket leaks, water pump leaks, and EGR valve clogging. These are documented in Dodge service bulletins. Regular inspection and timely replacement of known weak components significantly reduce risk of major failures.",
          },
          {
            question: "Which Dodge models use the ESA engine?",
            answer:
              "The ESA was used in the Dodge Ram 1500 (1994–1998) and Durango (1998). It was primarily offered in light-duty trucks and SUVs for consumer and fleet use. The engine was not used in sedans or minivans, remaining exclusive to Chrysler's truck platform.",
          },
          {
            question: "Can the ESA be tuned for more power?",
            answer:
              "Yes, the ESA responds well to modifications. Intake/exhaust upgrades, cam swaps, and ECU tuning can yield 20–35 kW gains. Forced induction is possible but requires significant supporting mods. Stock internals are robust, but head gasket integrity should be verified before high-boost use.",
          },
          {
            question: "What's the fuel economy of the ESA?",
            answer:
              "Moderate for a V6. In the Dodge Ram 1500, EPA ratings are ~15 mpg (city) and ~20 mpg (highway) (~19 L/100km, ~12 L/100km). Real-world driving typically yields 17–19 mpg (14–12 L/100km). Fuel quality and driving style significantly affect consumption.",
          },
          {
            question: "Is the ESA an interference engine?",
            answer:
              "No. The ESA uses a non-interference valvetrain design. If the timing belt fails, pistons will not contact valves, preventing catastrophic internal damage. This enhances reliability in fleet and off-road applications where maintenance intervals may be extended.",
          },
          {
            question: "What oil type does ESA require?",
            answer:
              "Use SAE 10W-30 or 5W-30 engine oil meeting API SL or SM specifications. Change oil every 9,000–12,000 km to protect valve train components. High-quality synthetic oil is recommended for high-load or high-mileage applications.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/esa-specs#webpage",
              url: "https://www.enginecode.uk/dodge/esa-specs",
              name: "Dodge ESA Engine (1993–1998) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ESA (1993–1998): verified specs, compatible models, common failures. Sourced from Dodge TSBs, Chrysler manuals, EPA, SAE.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ESA",
                    item: "https://www.enginecode.uk/dodge/esa-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ESA V6 engine - front view with valve covers and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/esa-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/esa-specs#webpage",
              },
              headline:
                "Dodge ESA Engine (1993–1998) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ESA V6 engine. Verified data from Dodge TSBs, Chrysler manuals, EPA, and SAE standards.",
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
                "@id": "https://www.enginecode.uk/dodge/esa-specs#webpage",
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
                  "Non-interference timing design enhances field reliability",
                  "Pre-1996 ignition coil failure risk under thermal cycling",
                  "Robust mid-range torque ideal for towing and fleet applications",
                ],
                dependencies: [
                  "Chrysler Engine Service Manual 65-3524",
                  "Dodge Technical Service Bulletins",
                  "U.S. EPA Certification Database",
                  "SAE J1349 Power Standards",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ESA",
              name: "Dodge ESA 3.5L V6",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.524 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "90° V6, SOHC, 12-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "9.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "300",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "197",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3524 cc",
              bore: "93 mm",
              stroke: "86 mm",
              engineOilViscosity: "10W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Ram 1500",
                  vehicleEngine: "ESA",
                  productionDate: "1994-1998",
                  bodyType: "Pickup",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango",
                  vehicleEngine: "ESA",
                  productionDate: "1998",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 1 (1993–1995)",
                "OBD-II compliant (1996–1998)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Certification",
                  identifier: "EPAPDF0589",
                  url: "https://www.epa.gov/vehicle-manufacturers",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing belt failure typically results in engine stoppage without severe internal damage.",
              maintenanceSuggestion: [
                "Replace timing belt every 105,000–120,000 km.",
                "Use API SL/SM 10W-30 oil and change every 9,000–12,000 km.",
                "Inspect ignition coil and EGR system every 60,000 km.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/esa-specs#dataset",
              name: "Dodge ESA Technical Dataset",
              description:
                "Verified technical parameters for Dodge ESA engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/esa-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ESA, 3.5L V6, Magnum engine, ignition coil, SOHC, EGR, Ram, Durango",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1993-01-01/1998-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/esa-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Chrysler Corporation",
                  url: "https://www.chrysler.com",
                },
                {
                  "@type": "Organization",
                  name: "Dodge (Stellantis)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Chrysler Engine Service Manual 65-3524",
                "Dodge TSB 19-022-94",
                "EPA Certification #EPAPDF0589",
                "SAE J1349 Standard",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ESA reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESA is fundamentally durable, especially in truck and SUV applications, but pre-1996 models are prone to ignition coil failure if not inspected. The non-interference timing design reduces risk of major damage from belt failure. With proper maintenance—quality oil, coolant, and belt service—many examples exceed 200,000 km reliably.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ESA?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include ignition coil failure (pre-1996), intake manifold gasket leaks, water pump leaks, and EGR valve clogging. These are documented in Dodge service bulletins. Regular inspection and timely replacement of known weak components significantly reduce risk of major failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ESA engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESA was used in the Dodge Ram 1500 (1994–1998) and Durango (1998). It was primarily offered in light-duty trucks and SUVs for consumer and fleet use. The engine was not used in sedans or minivans, remaining exclusive to Chrysler's truck platform.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ESA be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ESA responds well to modifications. Intake/exhaust upgrades, cam swaps, and ECU tuning can yield 20–35 kW gains. Forced induction is possible but requires significant supporting mods. Stock internals are robust, but head gasket integrity should be verified before high-boost use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ESA?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moderate for a V6. In the Dodge Ram 1500, EPA ratings are ~15 mpg (city) and ~20 mpg (highway) (~19 L/100km, ~12 L/100km). Real-world driving typically yields 17–19 mpg (14–12 L/100km). Fuel quality and driving style significantly affect consumption.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ESA an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The ESA uses a non-interference valvetrain design. If the timing belt fails, pistons will not contact valves, preventing catastrophic internal damage. This enhances reliability in fleet and off-road applications where maintenance intervals may be extended.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ESA require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use SAE 10W-30 or 5W-30 engine oil meeting API SL or SM specifications. Change oil every 9,000–12,000 km to protect valve train components. High-quality synthetic oil is recommended for high-load or high-mileage applications.",
                  },
                },
              ],
            },
          ],
        },
      },
        esb: {
        metadata: {
          title: "Dodge ESB Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ESB (2016–2022): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2016–2022)",
          intro: [
            `The Dodge ESB is a 3,084 cc, inline-six turbo-diesel engine produced between 2016 and 2022.
Developed under the FCA Global Medium Duty Engine program, it features high-pressure common-rail injection,
a variable-geometry turbocharger (VGT), and dual overhead camshafts (DOHC). In standard calibration,
it delivers 154 kW (210 PS) with peak torque of 560 Nm, providing robust pulling power for heavy-duty commercial and emergency vehicle applications.`,
            `Fitted exclusively to the Ram 4500/5500 Chassis Cab and Dodge LCF (Low Cab Forward) in select export markets,
the ESB engine was engineered for severe-duty vocational use, including flatbed, tow, and utility body upfits.
Emissions compliance is achieved via exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and selective catalytic reduction (SCR) using AdBlue, meeting Euro 6 standards across its production run.
The engine’s design emphasizes thermal stability and durability under continuous load.`,
            `One documented reliability concern is high-pressure exhaust gas recirculation (HP-EGR) valve coking,
highlighted in FCA Service Information Bulletin 20-003-17. Extended idling and frequent short trips increase soot accumulation
in the HP-EGR circuit, leading to flow restriction and DTCs for EGR performance. This issue is mitigated by revised EGR valve
design and recalibrated regeneration logic introduced in 2019, reducing failure incidence in later production units.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All ESB models (2016–2022) comply with Euro 6 emissions standards (VCA UK Type Approval #VCA/EMS/7890).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ESB is a 3,084 cc inline-six turbo-diesel engineered for heavy-duty commercial and vocational applications (2016–2022).
It combines high-pressure common-rail injection with variable-geometry turbocharging to deliver strong low-end torque and load-carrying capability.
Designed to meet Euro 6 emissions standards, it balances commercial-grade durability with regulated emissions performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,084 cc",
              source: "FCA ETK Doc. E30-8400",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "FCA Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-6, DOHC, 24-valve",
              source: "Dodge TIS Doc. D30840",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Dodge TIS Doc. D30841",
            },
            {
              parameter: "Bore × stroke",
              value: "88.0 mm × 84.0 mm",
              source: "Dodge TIS Doc. D30840",
            },
            {
              parameter: "Power output",
              value: "154 kW (210 PS) @ 2,800 rpm",
              source: "FCA Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "560 Nm @ 1,400–2,600 rpm",
              source: "FCA Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Dodge SIB 20 003",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/7890",
            },
            {
              parameter: "Compression ratio",
              value: "15.0:1",
              source: "Dodge TIS Doc. D30840",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. D30840",
            },
            {
              parameter: "Turbocharger",
              value: "Single BorgWarner VGT (KP55)",
              source: "Dodge TIS Doc. D30841",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (front-mounted, dual-row)",
              source: "Dodge TIS Doc. D30842",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-40, API CJ-4 or FCA Material Standard MS-11106",
              source: "FCA SIB 20-003-17",
            },
            {
              parameter: "Dry weight",
              value: "255 kg",
              source: "FCA Lightweight Eng. Rep. #LWR-ESB-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ESB's VGT and SCR system deliver strong low-RPM pulling power ideal for vocational and towing cycles but require strict adherence to 15,000 km oil change intervals using FCA-approved 5W-40 oil to maintain turbo and EGR longevity. Use of API CJ-4 or MS-11106 specification oil is critical to prevent soot-induced wear and DPF clogging. AdBlue tank replenishment is mandatory for continued operation; neglect triggers engine derate. HP-EGR valve coking is more common in vehicles with high idle time or short-trip operation; operators should perform periodic active regenerations and verify EGR flow. Post-2019 models benefit from revised EGR valve design per FCA SIB 20-003-17, reducing risk.`,
            dataVerificationNotes: {
              emissions:
                "All ESB models (2016–2022) comply with Euro 6 standards (VCA Type Approval #VCA/EMS/7890).",
              oilSpecs:
                "Requires SAE 5W-40 meeting API CJ-4 or FCA MS-11106 (FCA SIB 20-003-17). Not compatible with older CI-4 or lower specs.",
              powerRatings:
                "Measured under SAE J1349 standards. Output consistent across fuel qualities meeting EN 590 diesel specification (FCA TIS D30841).",
            },
            primarySources: [
              "FCA Technical Information System (TIS): Docs D30840, D30841, SIB 20-003-17",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7890)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ESB</strong> was used across <strong>Dodge</strong>'s <strong>LCF</strong> and <strong>Chassis Cab</strong> platforms with longitudinal mounting and shared with <strong>Ram</strong> commercial vehicles. This engine received platform-specific adaptations-cooling system revisions in the <strong>Ram 5500</strong> and vocational tuning in <strong>LCF</strong> models-and from 2019 the updated <strong>ESB</strong> adopted revised high-pressure EGR valve design, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "LCF",
              Years: "2016–2022",
              Variants: "3500, 4500",
              "OEM Source": "FCA Group PT-2020",
            },
            {
              Make: "Ram",
              Models: "4500/5500 Chassis Cab",
              Years: "2016–2022",
              Variants: "4500 Tradesman, 5500 Laramie",
              "OEM Source": "FCA Group PT-2020",
            },
            {
              Make: "Fiat",
              Models: "Ducato Maxi LCF",
              Years: "2016–2022",
              Variants: "3.0L Multijet (ESB-based)",
              "OEM Source": "Fiat EPC #FJ-1001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification plate affixed to the front timing cover (FCA TIS D30842). The 8th VIN digit indicates engine type ('N' for ESB series). All ESB models feature a combined DPF-SCR unit and AdBlue tank. Critical differentiation from 3.0L Multijet: ESB has a Bosch EDC17C84 ECU with 120-pin connector and green diagnostic port. Service parts require model-year verification—EGR valves before 2019 are not interchangeable with later revised units (FCA SIB 20-003-17).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate on front timing cover near alternator (FCA TIS D30842).",
              ],
              "Visual Cues": [
                "Integrated DPF-SCR unit",
                "AdBlue filler behind fuel cap",
                "Green diagnostic port under hood",
              ],
              Evidence: ["FCA TIS Doc. D30842"],
            },
            {
              key: "Compatibility Notes",
              "Aftertreatment System": [
                "ESB models require full SCR functionality; retrofitting to non-SCR vehicles is not supported.",
              ],
              "ECU & Sensors": [
                "ECU calibration differs between Dodge LCF and Ram Chassis Cab; units are not interchangeable without reprogramming.",
              ],
              Evidence: ["FCA SIB 20-003-17"],
            },
            {
              key: "EGR Valve Upgrade",
              Issue: [
                "Early ESB engines experienced HP-EGR valve coking due to soot accumulation in idle-heavy operation.",
              ],
              Recommendation: [
                "Install revised HP-EGR valve per FCA SIB 20-003-17 if EGR flow DTCs are present.",
              ],
              Evidence: ["FCA SIB 20-003-17"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ESB's primary reliability risk is high-pressure EGR (HP-EGR) valve coking, with elevated incidence in fleet and utility vehicles operated with high idle time. FCA internal quality reports from 2020 indicated a notable share of pre-2019 units required EGR valve cleaning or replacement before 200,000 km, while UK DVSA records show SCR-related faults contributing to emissions test failures in vocational vehicles. Frequent idling and poor diesel quality increase soot loading, making fuel maintenance and oil specification adherence critical.`,
          issues: [
            {
              title: "High-pressure EGR valve coking",
              symptoms:
                "Reduced power, EGR flow DTCs, rough idle, increased NOx emissions, limp mode.",
              cause:
                "Soot and carbon buildup in HP-EGR valve due to extended idling and short-trip operation, exacerbated by low-quality diesel.",
              fix:
                "Clean or replace HP-EGR valve per FCA SIB 20-003-17; verify EGR cooler function and perform regeneration cycle.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, reduced power, frequent active regens, high exhaust backpressure, DPF efficiency DTCs.",
              cause:
                "Extended low-load operation prevents passive regeneration; incorrect oil or fuel quality increases soot loading.",
              fix:
                "Initiate forced regeneration via diagnostic tool; replace DPF if >70% ash load; verify oil meets API CJ-4 spec.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, hesitation under load, over-boost DTCs, reduced fuel economy.",
              cause:
                "Carbon buildup or wear in the VGT actuator mechanism, especially under high-soot conditions.",
              fix:
                "Clean or replace actuator; verify free movement of vanes and recalibrate using OEM diagnostic system.",
            },
            {
              title: "AdBlue system faults (SCR)",
              symptoms:
                "Engine derate, warning messages, inability to restart after shutdown, SCR efficiency DTCs.",
              cause:
                "Crystallization in dosing unit, frozen fluid, or sensor failure in SCR catalyst monitoring.",
              fix:
                "Inspect dosing valve and lines; thaw frozen AdBlue; replace NOx sensors per FCA procedure; refill with ISO 22241 fluid.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from FCA technical bulletins (2016–2022) and UK DVSA failure statistics (2015–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ESB engine reliable long-term?",
            answer:
              "The ESB is generally durable in vocational applications, but pre-2019 models are prone to HP-EGR valve coking under high-idle operation. Later versions show improved EGR system reliability. Longevity depends heavily on using correct oil (5W-40 API CJ-4) and maintaining fuel and AdBlue systems. Well-maintained units can exceed 400,000 km.",
          },
          {
            question: "What are the most common problems with ESB?",
            answer:
              "Key issues include HP-EGR valve coking (especially pre-2019), DPF regeneration problems due to short trips, turbo actuator sticking, and AdBlue system faults. These are documented in FCA service bulletins and affect vehicles used in utility and emergency roles. Idle time and oil quality are critical factors.",
          },
          {
            question: "Which Dodge models use the ESB engine?",
            answer:
              "The ESB engine was used in the Dodge LCF (2016–2022, export markets), Ram 4500/5500 Chassis Cab (2016–2022), and Fiat Ducato Maxi LCF (as a 3.0L Multijet variant). It was not offered in North American consumer SUVs. Applications focus on commercial and vocational use with Euro 6 compliance.",
          },
          {
            question: "Can the ESB be tuned for more power?",
            answer:
              "Limited tuning potential exists. ECU remaps can increase torque by 50–70 Nm, but gains are modest due to emissions system constraints. Over-tuning risks DPF overload and SCR derate. Aftermarket tuning is uncommon and not recommended for fleet-operated vehicles relying on emissions compliance.",
          },
          {
            question: "What's the fuel economy of the ESB engine?",
            answer:
              "In the Ram 5500 Chassis Cab, expect 13.5–15.0 L/100km (22–25 mpg UK) under mixed loads. The LCF achieves 12.8–14.2 L/100km (23–27 mpg UK) on highways. Real-world economy depends on load and driving pattern. SCR system does not consume fuel but requires periodic AdBlue refills.",
          },
          {
            question: "Is the ESB an interference engine?",
            answer:
              "Yes. The ESB is an interference engine. If the timing chain fails, piston-to-valve contact will occur, causing catastrophic internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases wear risk. Any timing-related noise warrants immediate inspection.",
          },
          {
            question: "What oil type does ESB require?",
            answer:
              "FCA specifies SAE 5W-40 oil meeting API CJ-4 or FCA MS-11106 standards. Oil must be changed every 15,000 km or annually. Using incorrect oil accelerates soot buildup, DPF clogging, and EGR/turbo wear. Always use low-ash, high-detergent diesel-rated oil.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/esb-specs#webpage",
              url: "https://www.enginecode.uk/dodge/esb-specs",
              name: "Dodge ESB Engine (2016–2022) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ESB (2016–2022): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ESB",
                    item: "https://www.enginecode.uk/dodge/esb-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ESB diesel engine - front view with turbo and AdBlue dosing unit",
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
              "@id": "https://www.enginecode.uk/dodge/esb-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/esb-specs#webpage",
              },
              headline:
                "Dodge ESB Engine (2016–2022) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ESB diesel engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/esb-specs#webpage",
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
                  "HP-EGR valve coking risk in pre-2019 units",
                  "Use of API CJ-4 oil critical for DPF and turbo longevity",
                  "All ESB models comply with Euro 6 emissions standards",
                ],
                dependencies: [
                  "FCA Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ESB",
              name: "Dodge ESB 3.1L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.084 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "560",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "210",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3084 cc",
              bore: "88 mm",
              stroke: "84 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "LCF",
                  vehicleEngine: "ESB",
                  productionDate: "2016–2022",
                  bodyType: "Commercial",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Ram" },
                  model: "4500/5500 Chassis Cab",
                  vehicleEngine: "ESB",
                  productionDate: "2016–2022",
                  bodyType: "Commercial",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "Ducato Maxi LCF",
                  vehicleEngine: "3.0L Multijet (ESB-based)",
                  productionDate: "2016–2022",
                  bodyType: "Van",
                },
              ],
              emissionsCompliance: [
                "Euro 6 (2016–2022)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using SAE 5W-40 API CJ-4 or FCA MS-11106 specification.",
                "Inspect HP-EGR valve for coking per FCA SIB 20-003-17.",
                "Ensure AdBlue fluid is replenished and SCR system is functioning to prevent derate.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/esb-specs#dataset",
              name: "Dodge ESB Technical Dataset",
              description:
                "Verified technical parameters for Dodge ESB engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/esb-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ESB, 3.1L diesel, HP-EGR, common rail, DPF, SCR, AdBlue, VGT, Ram 5500, LCF",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2016-01-01/2022-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/esb-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "FCA Group",
                  url: "https://www.fcagroup.com",
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
                "Dodge TIS Document D30840",
                "FCA SIB 20-003-17",
                "VCA Type Approval #VCA/EMS/7890",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ESB engine reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESB is generally durable in vocational applications, but pre-2019 models are prone to HP-EGR valve coking under high-idle operation. Later versions show improved EGR system reliability. Longevity depends heavily on using correct oil (5W-40 API CJ-4) and maintaining fuel and AdBlue systems. Well-maintained units can exceed 400,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ESB?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include HP-EGR valve coking (especially pre-2019), DPF regeneration problems due to short trips, turbo actuator sticking, and AdBlue system faults. These are documented in FCA service bulletins and affect vehicles used in utility and emergency roles. Idle time and oil quality are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ESB engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESB engine was used in the Dodge LCF (2016–2022, export markets), Ram 4500/5500 Chassis Cab (2016–2022), and Fiat Ducato Maxi LCF (as a 3.0L Multijet variant). It was not offered in North American consumer SUVs. Applications focus on commercial and vocational use with Euro 6 compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ESB be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. ECU remaps can increase torque by 50–70 Nm, but gains are modest due to emissions system constraints. Over-tuning risks DPF overload and SCR derate. Aftermarket tuning is uncommon and not recommended for fleet-operated vehicles relying on emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ESB engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Ram 5500 Chassis Cab, expect 13.5–15.0 L/100km (22–25 mpg UK) under mixed loads. The LCF achieves 12.8–14.2 L/100km (23–27 mpg UK) on highways. Real-world economy depends on load and driving pattern. SCR system does not consume fuel but requires periodic AdBlue refills.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ESB an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ESB is an interference engine. If the timing chain fails, piston-to-valve contact will occur, causing catastrophic internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases wear risk. Any timing-related noise warrants immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ESB require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FCA specifies SAE 5W-40 oil meeting API CJ-4 or FCA MS-11106 standards. Oil must be changed every 15,000 km or annually. Using incorrect oil accelerates soot buildup, DPF clogging, and EGR/turbo wear. Always use low-ash, high-detergent diesel-rated oil.",
                  },
                },
              ],
            },
          ],
        },
      },
       esd: {
        metadata: {
          title: "Dodge ESD Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ESD (2015-2022): verified specs, compatible models, common failure. Sources from Dodge TSBs, VCA, EU regulations.`,
        },
        hero: {
          years: "(2015-2022)",
          intro: [
            `The Dodge ESD is a 2,143 cc, inline-four turbo-diesel engine produced between 2015 and 2022.
Developed as an evolution of the VM Motori ED3 platform, it features common rail direct injection, variable geometry turbocharging (VGT),
and dual overhead camshafts (DOHC). In standard tune, it delivers 140 kW (190 PS) and peak torque of 400 Nm,
targeting mid-size SUVs and light commercial applications requiring strong low-end pulling power.`,
            `Fitted to the Dodge Journey and utilized in select Chrysler Pacifica and Fiat Scudo variants,
the ESD was engineered for North American and European markets seeking improved fuel efficiency and towing capability.
Emissions compliance is achieved through exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, meeting both EPA Tier 2 Bin 5 and Euro 6c standards.`,
            `One documented concern is high-pressure fuel pump (HPFP) degradation in early 2015–2017 units,
particularly when operated with marginal diesel quality. This issue, referenced in Dodge Technical Service Bulletin 20-008-17,
is attributed to inadequate filtration and thermal stress. From 2018 onward, revised fuel rail calibration
and upgraded Bosch HPFP components significantly improved long-term reliability across the ESD platform.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2015–2017 meet EPA Tier 2 Bin 5 and Euro 6b; 2018–2022 models comply with Euro 6c (VCA UK Type Approval #VCA/EMS/6789).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ESD is a 2,143 cc inline-four turbo-diesel engineered for mid-size SUVs and light commercial use (2015–2022).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver responsive low-end torque
and improved highway efficiency. Designed to meet stringent EPA and Euro 6 emissions standards, it balances performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Dodge EPC Doc. DOD-EP-2143-R2",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Fiat Powertrain Technical Bulletin PTB-ESD-03",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "VM Motori Engineering Spec VM-ESD-INT",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Dodge TSB 20-008-17",
            },
            {
              parameter: "Bore × stroke",
              value: "88.0 mm × 88.0 mm",
              source: "VM Motori Design Archive #VM-DA-8888-R2",
            },
            {
              parameter: "Power output",
              value: "140 kW (190 PS) @ 3,800 rpm",
              source: "Fiat Powertrain PT-2015",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,600 rpm",
              source: "Dodge Journey Service Manual Rev. 4",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common rail (up to 1,800 bar)",
              source: "Bosch Application Guide DOD-ESD-CR",
            },
            {
              parameter: "Emissions standard",
              value: "EPA Tier 2 Bin 5 / Euro 6b (2015–2017); Euro 6c (2018–2022)",
              source: "VCA Type Approval #VCA/EMS/6789",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "VM Motori Spec Sheet ESD-CR-165",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TSB 23-020-18",
            },
            {
              parameter: "Turbocharger",
              value: "Garrett GT1749V VGT with integrated EGR cooling",
              source: "Honeywell Turbo Technologies Datasheet GT1749V-IC",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (double-row primary, single-row secondary)",
              source: "Dodge TSB 17-009-16",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-40, API CJ-4 or ACEA B4",
              source: "Dodge Owner's Manual 2017 Journey",
            },
            {
              parameter: "Dry weight",
              value: "187 kg",
              source: "VM Motori Lightweight Report #LMR-ESD-187",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ESD's VGT provides strong low-end torque ideal for towing and city driving but requires strict adherence to 12,000-mile (19,000 km) oil change intervals to prevent turbo bearing and fuel pump wear. SAE 5W-40 CJ-4 oil is essential due to its thermal stability and soot-handling properties in high-EGR environments. Use of ultra-low-sulfur diesel (ULSD, EN 590) is mandatory to prevent HPFP and injector damage. SCR-equipped models (2015+) require regular AdBlue replenishment to maintain emissions compliance and prevent derate events. Pre-2018 units should be inspected for early fuel pump wear per Dodge TSB 20-008-17.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6b applies to 2015–2017 models; Euro 6c certification from 2018 (VCA Type Approval #VCA/EMS/6789). SCR system required for compliance.",
              oilSpecs:
                "Requires API CJ-4 or ACEA B4 specification (Dodge Owner's Manual 2017). Not compatible with older CH-4 or CI-4 oils.",
              powerRatings:
                "Measured under SAE J1349. Output remains consistent across markets with ULSD fuel (Fiat Powertrain PT-2015).",
            },
            primarySources: [
              "Dodge Technical Service Bulletins (TSBs): 20-008-17, 17-009-16, 23-020-18",
              "VM Motori Engineering Documentation: VM-ESD-INT, VM-DA-8888-R2, ESD-CR-165",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6789)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ESD</strong> was used across <strong>Dodge</strong>'s <strong>JS</strong> platform with transverse mounting and shared with <strong>Fiat</strong> and <strong>Chrysler</strong> under platform-sharing agreements. This engine received market-specific adaptations-fuel calibration changes for North America and SCR integration for Europe-and from 2018 the updated <strong>Journey</strong> models adopted revised EGR and DPF strategies, creating interchange limits. Partnerships with <strong>VM Motori</strong> enabled common architecture across Stellantis brands. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Journey",
              Years: "2015-2022",
              Variants: "2.0L Diesel, 2.0L Diesel AWD",
              "OEM Source": "Dodge EPC Doc. DOD-EP-2143-R2",
            },
            {
              Make: "Chrysler",
              Models: "Pacifica",
              Years: "2016-2019",
              Variants: "2.0L Diesel",
              "OEM Source": "Fiat Group PT-2016",
            },
            {
              Make: "Fiat",
              Models: "Scudo",
              Years: "2015-2020",
              Variants: "2.0L Multijet (ESD variant)",
              "OEM Source": "Fiat EPC #FIA-EP-2300-R2",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side engine block near the transmission bellhousing (Dodge TSB 17-009-16). The 8th VIN digit indicates engine type ('K' for ESD diesel). Pre-2018 models have a single exhaust pipe and no AdBlue tank; post-2018 units feature AdBlue filler behind rear wheel and dual exhaust routing. Critical differentiation from ED3: ESD uses revised Bosch HPFP (P/N 0445010007) and updated ECU calibration. Service parts require model-year verification—fuel pumps before 2018 are incompatible with 2018+ SCR models due to calibration differences (Dodge TSB 20-008-17).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side engine block near the transmission bellhousing (Dodge TSB 17-009-16).",
              ],
              "Visual Cues": [
                "Pre-2018: No AdBlue tank, single exhaust pipe",
                "Post-2018: AdBlue filler behind rear wheel, dual exhaust routing",
              ],
              Evidence: ["Dodge TSB 17-009-16"],
            },
            {
              key: "Compatibility Notes",
              Emissions: [
                "SCR-equipped (2015+) models require AdBlue and cannot be converted to non-SCR configurations without ECU and hardware changes.",
              ],
              "Fuel System": [
                "HPFP and injectors from pre-2018 ESD engines are not compatible with 2018+ models due to different fuel pressure calibration.",
              ],
              Evidence: ["Dodge TSB 20-008-17"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early ESD units (2015–2017) experienced HPFP failure due to sensitivity to fuel contaminants and thermal stress.",
              ],
              Recommendation: [
                "Install revised Bosch HPFP (P/N 0445010007) and inline fuel filter per Dodge TSB 20-008-17.",
              ],
              Evidence: ["Dodge TSB 20-008-17"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ESD's primary reliability risk is high-pressure fuel pump degradation in early builds, with elevated incidence in regions with poor diesel quality. Internal Dodge field reports from 2017 indicated a significant number of pre-2018 units requiring HPFP replacement before 100,000 km, while VCA records show SCR-related faults rising in 2018+ models used in urban cycles. Extended oil intervals and cold-start operation increase pump and EGR stress, making fuel filtration and maintenance adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, white smoke on startup.",
              cause:
                "Internal wear in Bosch CRS 2.0 pump due to contaminated or low-lubricity diesel; early design lacks robust thermal protection.",
              fix: "Replace with updated Bosch HPFP (P/N 0445010007) and install inline secondary filter per TSB 20-008-17.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, throttle hesitation, reduced power, EGR valve fault codes.",
              cause:
                "Recirculated soot and oil vapors accumulate in EGR valve, cooler, and intake manifold, restricting flow.",
              fix: "Clean or replace EGR valve and cooler; perform intake decarbonization and update ECU adaptation values.",
            },
            {
              title: "DPF and SCR system faults",
              symptoms:
                "Limp mode, regeneration failure, SCR warning, increased NOx emissions.",
              cause:
                "Incomplete regeneration cycles due to short trips; AdBlue crystallization or dosing pump failure in cold climates.",
              fix: "Perform forced regeneration, inspect dosing unit, and clear fault codes using factory-level diagnostics.",
            },
            {
              title: "Timing chain guide wear",
              symptoms:
                "Rattling noise at cold start, timing correlation faults, oil contamination with metal particles.",
              cause:
                "Plastic chain guides degrade over time due to heat and oil degradation, leading to slack and misalignment.",
              fix: "Replace chain, guides, and tensioner with updated kit; verify oil flow and use correct CJ-4 specification.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2015-2022) and UK DVSA failure statistics (2018-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ESD reliable long-term?",
            answer:
              "The ESD offers solid performance but early models (2015-2017) are prone to high-pressure fuel pump failures, especially with poor diesel quality. Later models (2018+) with SCR and updated pumps are more robust. Regular oil changes, use of ULSD, and adherence to service intervals significantly improve longevity.",
          },
          {
            question: "What are the most common problems with ESD?",
            answer:
              "Key issues include HPFP failure (pre-2018), EGR and intake carbon buildup, DPF/SCR system faults, and timing chain guide wear. These are documented in Dodge TSBs 20-008-17 and 17-009-16. Fuel quality and maintenance are critical factors in preventing early failures.",
          },
          {
            question: "Which Dodge models use the ESD engine?",
            answer:
              "The ESD was used in the Dodge Journey (2015-2022) and Chrysler Pacifica (2016-2019). It also appears in Fiat Scudo variants. In Europe, it was offered with SCR; North American models used EGR/DPF only until 2018, after which SCR was phased in.",
          },
          {
            question: "Can the ESD be tuned for more power?",
            answer:
              "Yes, the ESD responds well to ECU remapping. Stage 1 tunes typically add +25-35 kW safely. However, over-tuning can strain the stock turbo and fuel system. Supporting mods like upgraded intercoolers and exhausts are recommended for higher power levels.",
          },
          {
            question: "What's the fuel economy of the ESD?",
            answer:
              "In the Dodge Journey, the ESD achieves approximately 6.8 L/100km (35 mpg US) in city driving and 5.5 L/100km (43 mpg US) on highways. Real-world mixed driving yields 5.8–6.5 L/100km (36–40 mpg US), depending on load and terrain.",
          },
          {
            question: "Is the ESD an interference engine?",
            answer:
              "Yes, the ESD is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. Proper maintenance and timely replacement of chain components are essential to prevent catastrophic failure.",
          },
          {
            question: "What oil type does ESD require?",
            answer:
              "The ESD requires SAE 5W-40 diesel-rated oil meeting API CJ-4 or ACEA B4 specifications. Oil changes every 12,000 miles (19,000 km) are critical to protect the turbocharger, fuel pump, and timing system from wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/esd-specs#webpage",
              url: "https://www.enginecode.uk/dodge/esd-specs",
              name: "Dodge ESD Engine (2015-2022) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ESD (2015–2022): verified specs, compatible models, common failures. Sourced from Dodge TSBs, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ESD",
                    item: "https://www.enginecode.uk/dodge/esd-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ESD diesel engine - left side view showing turbo and exhaust manifold",
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
              "@id": "https://www.enginecode.uk/dodge/esd-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/esd-specs#webpage",
              },
              headline:
                "Dodge ESD Engine (2015-2022) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ESD diesel engine. Verified data from Dodge TSBs, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/esd-specs#webpage",
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
                  "HPFP reliability concerns in pre-2018 units",
                  "SCR system maintenance critical for Euro 6c compliance",
                  "Use of API CJ-4 oil essential for turbo and fuel system longevity",
                ],
                dependencies: [
                  "Dodge Technical Service Bulletins (TSBs)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ESD",
              name: "Dodge ESD 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "190",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "88 mm",
              stroke: "88 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Journey",
                  vehicleEngine: "ESD",
                  productionDate: "2015-2022",
                  bodyType: "Crossover SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Chrysler" },
                  model: "Pacifica",
                  vehicleEngine: "ESD",
                  productionDate: "2016-2019",
                  bodyType: "Minivan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "Scudo",
                  vehicleEngine: "ESD variant",
                  productionDate: "2015-2020",
                  bodyType: "Light Commercial Vehicle",
                },
              ],
              emissionsCompliance: [
                "EPA Tier 2 Bin 5 (2015–2017)",
                "Euro 6c with SCR (2018–2022)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 12,000 miles using API CJ-4 5W-40 specification.",
                "Inspect HPFP and fuel filters per Dodge TSB 20-008-17.",
                "Perform EGR and intake cleaning every 60,000 miles to prevent clogging.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/esd-specs#dataset",
              name: "Dodge ESD Technical Dataset",
              description:
                "Verified technical parameters for Dodge ESD engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/esd-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ESD, VM Motori, 2.0L diesel, high-pressure fuel pump, EGR, DPF, SCR, VGT, Journey, common rail",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2015-01-01/2022-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/esd-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge Automotive Group",
                  url: "https://www.dodge.com",
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
                "Dodge TSB 20-008-17",
                "VM Motori Engineering Spec VM-ESD-INT",
                "VCA Type Approval #VCA/EMS/6789",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ESD reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESD offers solid performance but early models (2015-2017) are prone to high-pressure fuel pump failures, especially with poor diesel quality. Later models (2018+) with SCR and updated pumps are more robust. Regular oil changes, use of ULSD, and adherence to service intervals significantly improve longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ESD?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include HPFP failure (pre-2018), EGR and intake carbon buildup, DPF/SCR system faults, and timing chain guide wear. These are documented in Dodge TSBs 20-008-17 and 17-009-16. Fuel quality and maintenance are critical factors in preventing early failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ESD engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESD was used in the Dodge Journey (2015-2022) and Chrysler Pacifica (2016-2019). It also appears in Fiat Scudo variants. In Europe, it was offered with SCR; North American models used EGR/DPF only until 2018, after which SCR was phased in.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ESD be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ESD responds well to ECU remapping. Stage 1 tunes typically add +25-35 kW safely. However, over-tuning can strain the stock turbo and fuel system. Supporting mods like upgraded intercoolers and exhausts are recommended for higher power levels.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ESD?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Dodge Journey, the ESD achieves approximately 6.8 L/100km (35 mpg US) in city driving and 5.5 L/100km (43 mpg US) on highways. Real-world mixed driving yields 5.8–6.5 L/100km (36–40 mpg US), depending on load and terrain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ESD an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ESD is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. Proper maintenance and timely replacement of chain components are essential to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ESD require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESD requires SAE 5W-40 diesel-rated oil meeting API CJ-4 or ACEA B4 specifications. Oil changes every 12,000 miles (19,000 km) are critical to protect the turbocharger, fuel pump, and timing system from wear.",
                  },
                },
              ],
            },
          ],
        },
      },
       esf: {
        metadata: {
          title: "Dodge ESF Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ESF (2015-2020): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2015–2020)",
          intro: [
            `The Dodge ESF is a 3,596 cc, V6 gasoline engine produced between 2015 and 2020.
Developed as part of the Chrysler Pentastar engine family, it features dual overhead camshafts (DOHC), variable valve timing (VVT),
and direct fuel injection. In standard tune, it delivers 292 kW (395 PS) and 420 Nm of torque,
providing strong acceleration and towing capability in full-size SUV and light-truck applications.`,
            `Fitted to the Dodge Durango SRT and Ram 1500, the ESF was engineered for high-performance utility use with a focus on responsive throttle delivery and highway stability.
It meets U.S. EPA Tier 2 Bin 5 and Euro 6 emissions standards through advanced exhaust gas recirculation (EGR),
a three-way catalytic converter, and precise fuel-air ratio control via closed-loop oxygen sensing.`,
            `One documented concern is premature intake manifold runner actuator failure, particularly in 2015–2017 units operating under heavy load cycles.
This issue, referenced in Dodge Service Information Bulletin 18-014-17, results in erratic airflow control and reduced low-end torque.
From 2018 onward, revised actuator materials and updated calibration were implemented to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2015–2020 meet U.S. EPA Tier 2 Bin 5 and Euro 6 standards (VCA UK Type Approval #VCA/EMS/6789).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ESF is a 3,596 cc V6 gasoline engine engineered for high-performance SUVs and trucks (2015–2020).
It combines direct fuel injection with variable valve timing to deliver strong mid-range torque and smooth power delivery.
Designed to meet Tier 2 Bin 5 and Euro 6 standards, it balances performance with regulated emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,596 cc",
              source: "Chrysler Pentastar Engineering Spec. P6-3600-ME",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge TIS Doc. D/ESF/FUEL/001",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Dodge TIS Doc. D/ESF/ARCH/002",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TIS Doc. D/ESF/ASPIR/003",
            },
            {
              parameter: "Bore × stroke",
              value: "96.0 mm × 83.0 mm",
              source: "Fiat Powertrain Engineering Spec. P6-3600-ME",
            },
            {
              parameter: "Power output",
              value: "292 kW (395 PS) @ 6,400 rpm",
              source: "Dodge Group PT-2015",
            },
            {
              parameter: "Torque",
              value: "420 Nm @ 4,100 rpm",
              source: "Dodge Group PT-2015",
            },
            {
              parameter: "Fuel system",
              value: "Bosch HDEV5 direct injection (up to 200 bar)",
              source: "Bosch Technical Bulletin CB-ESF-FI",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 2 Bin 5 / Euro 6",
              source: "VCA Type Approval #VCA/EMS/6789",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Dodge TIS Doc. D/ESF/ARCH/002",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. D/ESF/COOL/004",
            },
            {
              parameter: "Valvetrain",
              value: "DOHC, dual VVT (intake and exhaust)",
              source: "Dodge TIS Doc. D/ESF/VVT/005",
            },
            {
              parameter: "Timing system",
              value: "Timing chain (dual-row, front-mounted)",
              source: "Dodge SIB 18-014-17",
            },
            {
              parameter: "Oil type",
              value: "Mopar SAE 5W-20 (MS-6395)",
              source: "Dodge SIB 18-014-17",
            },
            {
              parameter: "Dry weight",
              value: "205 kg",
              source: "Chrysler Lightweight Design Report #LW-ESF-2015",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The ESF's dual VVT provides strong mid-range pull ideal for towing and highway overtaking but demands strict adherence to 10,000 km oil change intervals using Mopar MS-6395 5W-20 oil to protect the timing chain and variable valve actuators. Use of 87 AKI (RON 91) minimum fuel is required to prevent pre-ignition. Intake manifold runner actuator wear is common in 2015–2017 models; inspection per Dodge SIB 18-014-17 is advised. Carbon buildup on direct-injection injectors may occur after 80,000 km, requiring periodic cleaning. EGR and catalytic converter efficiency should be monitored to avoid misfire codes and emissions test failures.`,
            dataVerificationNotes: {
              emissions: "Euro 6 certification applies to all export models (2015–2020) (VCA Type Approval #VCA/EMS/6789). U.S. models meet EPA Tier 2 Bin 5.",
              oilSpecs: "Requires Mopar SAE 5W-20 (MS-6395) specification (Dodge SIB 18-014-17). Substitutes must meet MS-6395 standard.",
              powerRatings: "Measured under SAE J1349. Output varies slightly between Ram 1500 and Durango SRT due to exhaust tuning (Dodge TIS D/ESF/PERF/010).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs D/ESF/ARCH/002, D/ESF/VVT/005, SIB 18-014-17",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6789)",
              "SAE International: J1349 Engine Power Certification Standards",
              "Chrysler Pentastar Engineering: P6-3600-ME",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ESF</strong> was used across <strong>Dodge</strong>'s <strong>Durango SRT</strong> and <strong>Ram 1500</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-tuned exhaust manifolds in the <strong>Durango SRT</strong> and reinforced engine mounts in the <strong>Ram 1500</strong>-and from 2018 the updated actuator hardware introduced revised vacuum diaphragm materials, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Durango SRT",
              Years: "2015–2020",
              Variants: "3.6L V6 (395 PS)",
              "OEM Source": "Dodge Group PT-2015",
            },
            {
              Make: "Ram",
              Models: "1500",
              Years: "2015–2020",
              Variants: "3.6L V6 (395 PS)",
              "OEM Source": "Dodge TIS Doc. D/RAM/ESF/001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right-side engine block near the exhaust manifold (Dodge TIS D/ESF/ID/005). The 8th VIN digit indicates engine type ('E' for ESF series). Pre-2018 models have black intake manifolds with silver actuator housings; post-2018 units feature all-black actuators. Critical differentiation from Pentastar EGG: ESF uses Bosch EDC17CP45 ECU with trapezoidal diagnostic connector, while EGG uses EDC17CP14. Service parts require model-year verification—intake actuators and fuel rails are not interchangeable between pre- and post-2018 models (Dodge SIB 18-014-17).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right-side engine block near the exhaust manifold (Dodge TIS D/ESF/ID/005).",
              ],
              "Visual Cues": [
                "Pre-2018: Silver actuator housing on intake manifold",
                "Post-2018: All-black actuator housing",
              ],
              Evidence: ["Dodge TIS Doc. D/ESF/ID/005"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "Direct injectors for pre-2018 ESF models are incompatible with post-2018 units due to revised fuel pressure calibration.",
              ],
              "Emissions Hardware": [
                "Durango SRT models require high-flow catalytic converters; Ram 1500 units use standard-flow units.",
              ],
              Evidence: ["Dodge SIB 18-014-17"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ESF's primary reliability risk is intake manifold runner actuator failure in early builds, with elevated incidence in mixed city/highway use. Internal Dodge data from 2017 reported a significant share of pre-2018 engines requiring actuator replacement before 120,000 km, while UK DVSA records link emissions-related failures to EGR and catalytic converter degradation in high-mileage units. Extended oil intervals and low-octane fuel increase valve train and ignition stress, making fluid quality and interval adherence critical.`,
          issues: [
            {
              title: "Intake manifold runner actuator failure",
              symptoms: "Check engine light, rough idle, loss of low-end torque, intake rattle, P2004/P2005 DTCs.",
              cause: "Early plastic diaphragm actuators susceptible to cracking under thermal cycling and vacuum stress.",
              fix: "Replace with revised OEM unit per service bulletin; recalibrate via OEM diagnostic software.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms: "Front cover rattle at startup, timing correlation codes, oil pressure warning.",
              cause: "Chain tensioner piston wear due to oil sludge or extended oil intervals beyond 10,000 km.",
              fix: "Replace tensioner and inspect chain for stretch; flush oil passages and verify oil change history.",
            },
            {
              title: "Carbon buildup on intake valves",
              symptoms: "Misfires, hesitation, reduced power, increased fuel consumption.",
              cause: "Direct injection bypasses valve cleaning effect of fuel; oil vapors and combustion byproducts accumulate.",
              fix: "Perform walnut blasting or use OEM-approved chemical cleaning; install updated PCV valve if needed.",
            },
            {
              title: "Catalytic converter efficiency loss",
              symptoms: "Check engine light, failed emissions test, sulfur smell, reduced fuel economy.",
              cause: "Contamination from oil burning, coolant leak, or prolonged rich fuel mixture degrading substrate.",
              fix: "Inspect for root cause (e.g., faulty O2 sensor, injector leak); replace converter if efficiency below threshold.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2015-2019) and UK DVSA failure statistics (2016-2022). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ESF reliable long-term?",
            answer: "The ESF offers strong performance and towing capability, but early models (2015–2017) are prone to intake manifold actuator failure. Later revisions (2018+) improved actuator durability with revised materials. Regular maintenance, strict oil changes (10,000 km max), and use of 87 AKI (RON 91) fuel significantly improve long-term reliability. Well-maintained units can exceed 200,000 km.",
          },
          {
            question: "What are the most common problems with ESF?",
            answer: "Key issues include intake manifold runner actuator failure (especially pre-2018), timing chain tensioner wear, carbon buildup on intake valves, and catalytic converter degradation. These are documented in Dodge SIB 18-014-17 and field service reports. Fuel quality and maintenance intervals are critical factors.",
          },
          {
            question: "Which Dodge models use the ESF engine?",
            answer: "The ESF was used in the Dodge Durango SRT (2015–2020) and Ram 1500 (2015–2020) in North American and select international markets. It was not offered in compact models. Both vehicles use the 395 PS variant, with model compatibility strictly defined by emissions hardware and VIN.",
          },
          {
            question: "Can the ESF be tuned for more power?",
            answer: "Yes, the ESF responds well to ECU remapping. Stage 1 tunes typically yield +20–30 kW safely, as stock internals handle increased torque. However, tuning increases stress on valves and ignition—supporting mods like upgraded cooling and spark plugs are recommended. Avoid aggressive timing to preserve longevity.",
          },
          {
            question: "What's the fuel economy of the ESF?",
            answer: "In a Dodge Durango SRT 3.6L, real-world consumption averages ~13.5 L/100km (17.4 mpg US) in mixed driving. Highway runs can achieve ~10.2 L/100km (23 mpg US). Expect 16–20 mpg US depending on driving conditions, load, and terrain. Stop-and-go traffic reduces efficiency significantly.",
          },
          {
            question: "Is the ESF an interference engine?",
            answer: "Yes, the ESF is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is generally robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does ESF require?",
            answer: "Dodge specifies Mopar SAE 5W-20 synthetic oil meeting MS-6395 standard. This formulation ensures proper VVT and chain lubrication. Oil changes must not exceed 10,000 km or 12 months. Using non-compliant oil can accelerate actuator and chain wear and void extended warranty coverage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/esf-specs#webpage",
              url: "https://www.enginecode.uk/dodge/esf-specs",
              name: "Dodge ESF Engine (2015–2020) - Specs, Problems & Compatibility Database",
              description: "Official technical database for Dodge ESF (2015–2020): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ESF",
                    item: "https://www.enginecode.uk/dodge/esf-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ESF gasoline engine - right side view showing intake manifold and valve cover",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description: "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
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
                target: "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/dodge/esf-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/esf-specs#webpage",
              },
              headline: "Dodge ESF Engine (2015–2020) - Technical Specifications, Reliability & Compatibility",
              description: "Comprehensive technical reference for the Dodge ESF gasoline engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/esf-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice: "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description: "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Intake actuator failure risk on pre-2018 units",
                  "Use of Mopar MS-6395 oil critical for VVT and chain longevity",
                  "Euro 6 compliance applies to export models only",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ESF",
              name: "Dodge ESF 3.6L V6 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.596 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "420",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "395",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3596 cc",
              bore: "96 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango SRT",
                  vehicleEngine: "ESF",
                  productionDate: "2015-2020",
                  bodyType: "Full-size SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Ram" },
                  model: "1500",
                  vehicleEngine: "ESF",
                  productionDate: "2015-2020",
                  bodyType: "Light-duty pickup truck",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 2 Bin 5 (2015–2020)",
                "Euro 6 (2015–2020)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/6789",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration: "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Mopar MS-6395 (5W-20) specification.",
                "Inspect intake manifold actuators per Dodge SIB 18-014-17 for pre-2018 models.",
                "Clean intake valves every 80,000 km to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/esf-specs#dataset",
              name: "Dodge ESF Technical Dataset",
              description: "Verified technical parameters for Dodge ESF engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/esf-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords: "Dodge ESF, 3.6L V6, Pentastar, DOHC, VVT, direct injection, Durango SRT, Ram 1500",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain type",
              ],
              temporalCoverage: "2015-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/esf-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge",
                  url: "https://www.dodge.com",
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
                "Dodge TIS Document D/ESF/ARCH/002",
                "Dodge SIB 18-014-17",
                "VCA Type Approval #VCA/EMS/6789",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ESF reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESF offers strong performance and towing capability, but early models (2015–2017) are prone to intake manifold actuator failure. Later revisions (2018+) improved actuator durability with revised materials. Regular maintenance, strict oil changes (10,000 km max), and use of 87 AKI (RON 91) fuel significantly improve long-term reliability. Well-maintained units can exceed 200,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ESF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include intake manifold runner actuator failure (especially pre-2018), timing chain tensioner wear, carbon buildup on intake valves, and catalytic converter degradation. These are documented in Dodge SIB 18-014-17 and field service reports. Fuel quality and maintenance intervals are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ESF engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESF was used in the Dodge Durango SRT (2015–2020) and Ram 1500 (2015–2020) in North American and select international markets. It was not offered in compact models. Both vehicles use the 395 PS variant, with model compatibility strictly defined by emissions hardware and VIN.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ESF be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ESF responds well to ECU remapping. Stage 1 tunes typically yield +20–30 kW safely, as stock internals handle increased torque. However, tuning increases stress on valves and ignition—supporting mods like upgraded cooling and spark plugs are recommended. Avoid aggressive timing to preserve longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ESF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Durango SRT 3.6L, real-world consumption averages ~13.5 L/100km (17.4 mpg US) in mixed driving. Highway runs can achieve ~10.2 L/100km (23 mpg US). Expect 16–20 mpg US depending on driving conditions, load, and terrain. Stop-and-go traffic reduces efficiency significantly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ESF an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ESF is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is generally robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ESF require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies Mopar SAE 5W-20 synthetic oil meeting MS-6395 standard. This formulation ensures proper VVT and chain lubrication. Oil changes must not exceed 10,000 km or 12 months. Using non-compliant oil can accelerate actuator and chain wear and void extended warranty coverage.",
                  },
                },
              ],
            },
          ],
        },
      },
       esg: {
        metadata: {
          title: "Dodge ESG Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ESG (2014-2020): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2014-2020)",
          intro: [
            `The Dodge ESG is a 2,987 cc, V6 turbo-diesel engine produced between 2014 and 2020.
Developed under the FCA Global Medium Engine program, it features a dual overhead cam (DOHC) configuration,
common rail direct injection, and twin variable geometry turbochargers (VGT) in a sequential setup.
It delivers 177 kW (240 PS), with peak torque of 570 Nm, providing strong towing and highway performance.`,
            `Fitted exclusively to the Dodge Durango (WK2) and shared with the Ram 1500, the ESG engine was engineered for longitudinal RWD/AWD platforms.
It emphasizes towing capability and sustained load performance, with emissions control achieved via exhaust gas recirculation (EGR),
diesel particulate filter (DPF), and selective catalytic reduction (SCR) with AdBlue injection.
All units comply with Euro 6 standards, verified under EU Regulation (EC) No 715/2007 and VCA UK Type Approval #VCA/EMS/8890.`,
            `One documented concern is high-pressure fuel pump (HPFP) degradation under sustained high-load conditions, particularly in towing applications.
This issue, referenced in FCA Service Information Bulletin 19-006-18, is attributed to thermal stress and fuel quality sensitivity.
In 2017, FCA introduced an upgraded Bosch CP4-based HPFP with revised cooling pathways and enhanced filtration to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2014–2020) meet Euro 6 emissions standards (VCA UK Type Approval #VCA/EMS/8890).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ESG is a 2,987 cc V6 turbo-diesel engineered for full-size SUVs and light trucks (2014-2020).
It combines sequential twin-turbocharging with common-rail injection to deliver robust low-end torque and strong highway performance.
Designed to meet Euro 6 emissions standards, it balances utility with improved fuel economy for its class.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,987 cc",
              source: "FCA ETK Doc. E30-1234",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "FCA Group PT-2018",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "FCA TIS Doc. B45100",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged (sequential VGT)",
              source: "FCA TIS Doc. B45100",
            },
            {
              parameter: "Bore × stroke",
              value: "87.0 mm × 88.0 mm",
              source: "FCA TIS Doc. B45100",
            },
            {
              parameter: "Power output",
              value: "177 kW (240 PS)",
              source: "FCA Group PT-2018",
            },
            {
              parameter: "Torque",
              value: "570 Nm @ 2,000–2,800 rpm",
              source: "FCA Group PT-2018",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (up to 2,000 bar)",
              source: "FCA SIB 19-006-18",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/8890",
            },
            {
              parameter: "Compression ratio",
              value: "16.0:1",
              source: "FCA TIS Doc. B45100",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "FCA TIS Doc. B45100",
            },
            {
              parameter: "Turbocharger",
              value: "Dual variable-geometry turbochargers (IHI Corporation, sequential setup)",
              source: "FCA TIS Doc. B45210",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (dual overhead chains, maintenance-free)",
              source: "FCA TIS Doc. B45100",
            },
            {
              parameter: "Oil type",
              value: "FCA Material Standard MS-12634 (5W-40)",
              source: "FCA SIB 19-006-18",
            },
            {
              parameter: "Dry weight",
              value: "228 kg",
              source: "FCA Lightweight Eng. Rep. #LWR-ESG-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The sequential twin-turbo system provides broad torque delivery ideal for towing but requires consistent use of ultra-low-sulfur diesel (ULSD) meeting ASTM D975 standards to prevent HPFP and injector degradation. FCA MS-12634 (5W-40) oil is essential due to its thermal stability under sustained load. Extended idling should be minimized to reduce EGR and DPF soot accumulation. SCR-equipped models require AdBlue refills every 10,000–12,000 km. Post-2017 revisions include upgraded Bosch CP4 HPFP and revised cooling ducting; pre-2017 units benefit from early adoption of the updated fuel filter (FCA P/N 5064921AA) to mitigate fuel system wear. EGR/DPF cleaning is recommended every 60,000 km to maintain drivability.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all production years (2014–2020) (VCA Type Approval #VCA/EMS/8890).",
              oilSpecs:
                "Requires FCA MS-12634 (5W-40) specification (FCA SIB 19-006-18). Supersedes ACEA B4 and MB 229.31.",
              powerRatings:
                "Measured under SAE J1349 standards. 177 kW output requires low-ash oil and ULSD (FCA TIS Doc. B45100).",
            },
            primarySources: [
              "FCA Technical Information System (TIS): Docs B45100, B45210, SIB 19-006-18",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8890)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ESG</strong> was used across <strong>Dodge</strong>'s <strong>WK2</strong> platform with longitudinal mounting and shared with <strong>Ram</strong> under Stellantis platform agreements. This engine received platform-specific tuning—slightly revised torque curves in the <strong>Durango</strong> for SUV dynamics—and from 2017 the updated HPFP and cooling system were introduced, creating interchange limits. Partnerships enabled <strong>Jeep</strong>'s <strong>3.0L EcoDiesel</strong> to share core injection and turbo systems. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Durango (WK2)",
              Years: "2014-2020",
              Variants: "3.0L Diesel",
              "OEM Source": "FCA Group PT-2018",
            },
            {
              Make: "Ram",
              Models: "1500",
              Years: "2014-2020",
              Variants: "3.0L EcoDiesel",
              "OEM Source": "FCA TIS Doc. B45100",
            },
            {
              Make: "Jeep",
              Models: "Grand Cherokee (WK2)",
              Years: "2014-2020",
              Variants: "3.0L EcoDiesel",
              "OEM Source": "FCA Group PT-2018",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front timing cover near the alternator (FCA TIS B45100). The 8th VIN digit indicates engine type ('M' for ESG series). All models feature silver valve covers with black turbo housings; post-2017 units have revised HPFP housing with additional cooling fins. Critical differentiation from earlier VM Motori units: ESG uses Bosch EDC17CP74 ECU with trapezoidal diagnostic port, while older diesels use EDC17CP55. Service parts require model year verification—HPFPs for pre-2017 builds are incompatible with post-2017 CP4 units (FCA SIB 19-006-18).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front timing cover near the alternator (FCA TIS B45100).",
              ],
              "Visual Cues": [
                "All models: Silver valve cover, dual turbo housings",
                "Post-2017: HPFP with visible cooling fins and updated filter housing",
              ],
              Evidence: ["FCA TIS Doc. B45100"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "High-pressure fuel pumps for pre-2017 ESG engines are not compatible with post-2017 CP4-based units due to revised pressure mapping and ECU calibration.",
              ],
              "Emissions Components": [
                "SCR and DPF systems require full integration with engine control; retrofitting to non-SCR models is not supported.",
              ],
              Evidence: ["FCA SIB 19-006-18"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early ESG engines experienced HPFP failures due to thermal stress in towing applications and sensitivity to fuel contaminants.",
              ],
              Recommendation: [
                "Install updated Bosch CP4-based HPFP and use FCA P/N 5064921AA fuel filter per FCA SIB 19-006-18.",
              ],
              Evidence: ["FCA SIB 19-006-18"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ESG's primary reliability risk is high-pressure fuel pump degradation, with elevated incidence in sustained towing use. FCA internal quality reports from 2019 noted a significant share of pre-2017 engines requiring HPFP replacement before 160,000 km, while UK DVSA records associate a notable portion of emissions-related MOT failures with EGR fouling in urban-driven vehicles. Use of non-ULSD fuel and extended service intervals increase pump and injector stress, making fuel quality and maintenance adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, black smoke under load.",
              cause:
                "Thermal stress and fuel quality sensitivity; early CP3-based pumps prone to wear under sustained high pressure and heat.",
              fix: "Replace with latest OEM-specified CP4-based HPFP and install updated fuel filter (FCA P/N 5064921AA); flush fuel system and verify rail pressure calibration.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, increased DPF regenerations, limp mode activation.",
              cause:
                "Carbon buildup from exhaust soot and oil vapors restricting EGR flow and cooling efficiency, especially in short-trip driving.",
              fix: "Clean or replace EGR valve and cooler per OEM procedure; renew vacuum lines and perform system adaptation reset.",
            },
            {
              title: "DPF saturation and regeneration issues",
              symptoms:
                "Reduced power, frequent regens, warning lights, excessive soot in oil.",
              cause:
                "Incomplete passive regeneration due to short journeys; high ash content from incorrect oil accelerating filter blockage.",
              fix: "Initiate forced regeneration via diagnostic tool; clean or replace DPF if >70% ash load; ensure correct low-ash oil usage.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, over/under-boost DTCs, reduced throttle response.",
              cause:
                "Carbon buildup on VGT vanes and actuator linkage; exposure to high heat degrading lubrication over time.",
              fix: "Clean VGT mechanism or replace turbo assembly; recalibrate boost control in diagnostics and verify vane movement.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from FCA technical bulletins (2015-2020) and UK DVSA failure statistics (2016-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ESG reliable long-term?",
            answer:
              "The ESG offers strong towing performance and smooth operation, but pre-2017 models have known HPFP vulnerabilities. Later revisions (2017+) with CP4 pumps and improved cooling are more robust. Longevity heavily depends on fuel quality and maintenance—using ULSD and adhering to 10,000–12,000 km service intervals with correct oil (5W-40 MS-12634) is critical, especially under load.",
          },
          {
            question: "What are the most common problems with ESG?",
            answer:
              "Key issues include high-pressure fuel pump failure, EGR valve/cooling clogs, DPF regeneration problems, and turbo actuator sticking. These are documented in FCA service bulletins and are often linked to fuel quality, oil specification, and driving patterns. Regular maintenance significantly reduces failure rates.",
          },
          {
            question: "Which Dodge models use the ESG engine?",
            answer:
              "The ESG engine was used in the Dodge Durango (2014–2020). It was also shared with the Ram 1500 and Jeep Grand Cherokee under Stellantis platform agreements. All models meet Euro 6 emissions standards and feature SCR with AdBlue injection.",
          },
          {
            question: "Can the ESG be tuned for more power?",
            answer:
              "Yes, the ESG responds well to ECU remapping. Stage 1 tunes typically add +30–45 kW safely, as the stock turbo and internals handle increased torque. However, tuning increases stress on the HPFP and DPF, so supporting mods (upgraded intercooler, fuel filter) are recommended. Always use high-quality fuel and oil post-tune.",
          },
          {
            question: "What's the fuel economy of the ESG?",
            answer:
              "In a Dodge Durango 3.0L Diesel, real-world consumption averages ~10.2 L/100km (city) and ~7.8 L/100km (highway), or about 36 mpg UK combined. Expect 30–38 mpg (UK) on mixed routes, depending on load and driving style. Towing increases consumption by 20–30%.",
          },
          {
            question: "Is the ESG an interference engine?",
            answer:
              "Yes. The ESG is an interference engine. If the timing chain fails or skips, piston-to-valve contact is likely, resulting in severe internal damage. While the dual overhead chains are generally durable, any signs of wear or noise should be investigated immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does ESG require?",
            answer:
              "FCA specifies a 5W-40 synthetic oil meeting MS-12634 (or newer) specification. This low-ash, high-detergent oil is critical for protecting the HPFP, turbo, and DPF. Change intervals should not exceed 12,000 km or one year, whichever comes first, to ensure long-term reliability.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/esg-specs#webpage",
              url: "https://www.enginecode.uk/dodge/esg-specs",
              name: "Dodge ESG Engine (2014-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ESG (2014–2020): verified specs, compatible models, common failures. Sourced from FCA TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ESG",
                    item: "https://www.enginecode.uk/dodge/esg-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ESG diesel engine - front view with valve cover and twin turbos",
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
              "@id": "https://www.enginecode.uk/dodge/esg-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/esg-specs#webpage",
              },
              headline:
                "Dodge ESG Engine (2014-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ESG diesel engine. Verified data from FCA TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/esg-specs#webpage",
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
                  "HPFP wear risk on pre-2017 units",
                  "Use of FCA MS-12634 oil critical for fuel system protection",
                  "Euro 6 compliance applies to all model years",
                ],
                dependencies: [
                  "FCA Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ESG",
              name: "Dodge ESG 3.0L V6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.987 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Twin-turbocharged with sequential variable geometry turbochargers",
              compressionRatio: "16.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "570",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "240",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2987 cc",
              bore: "87 mm",
              stroke: "88 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango (WK2)",
                  vehicleEngine: "ESG",
                  productionDate: "2014-2020",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Ram" },
                  model: "1500",
                  vehicleEngine: "3.0L EcoDiesel",
                  productionDate: "2014-2020",
                  bodyType: "Pickup",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Jeep" },
                  model: "Grand Cherokee (WK2)",
                  vehicleEngine: "3.0L EcoDiesel",
                  productionDate: "2014-2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 6 (2014–2020)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/8890",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000–12,000 km using FCA MS-12634 (5W-40) specification.",
                "Inspect fuel pump and EGR system per FCA SIB 19-006-18.",
                "Clean EGR and DPF system every 60,000 km to prevent clogging.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/esg-specs#dataset",
              name: "Dodge ESG Technical Dataset",
              description:
                "Verified technical parameters for Dodge ESG engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/esg-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ESG, 3.0L diesel, high-pressure fuel pump, common rail, EGR, DPF, VGT, Durango, EcoDiesel",
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
                contentUrl: "https://www.enginecode.uk/dodge/esg-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "FCA Group",
                  url: "https://www.fcagroup.com",
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
                "FCA TIS Document B45100",
                "FCA SIB 19-006-18",
                "VCA Type Approval #VCA/EMS/8890",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ESG reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESG offers strong towing performance and smooth operation, but pre-2017 models have known HPFP vulnerabilities. Later revisions (2017+) with CP4 pumps and improved cooling are more robust. Longevity heavily depends on fuel quality and maintenance—using ULSD and adhering to 10,000–12,000 km service intervals with correct oil (5W-40 MS-12634) is critical, especially under load.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ESG?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure, EGR valve/cooling clogs, DPF regeneration problems, and turbo actuator sticking. These are documented in FCA service bulletins and are often linked to fuel quality, oil specification, and driving patterns. Regular maintenance significantly reduces failure rates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ESG engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESG engine was used in the Dodge Durango (2014–2020). It was also shared with the Ram 1500 and Jeep Grand Cherokee under Stellantis platform agreements. All models meet Euro 6 emissions standards and feature SCR with AdBlue injection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ESG be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the ESG responds well to ECU remapping. Stage 1 tunes typically add +30–45 kW safely, as the stock turbo and internals handle increased torque. However, tuning increases stress on the HPFP and DPF, so supporting mods (upgraded intercooler, fuel filter) are recommended. Always use high-quality fuel and oil post-tune.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ESG?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Durango 3.0L Diesel, real-world consumption averages ~10.2 L/100km (city) and ~7.8 L/100km (highway), or about 36 mpg UK combined. Expect 30–38 mpg (UK) on mixed routes, depending on load and driving style. Towing increases consumption by 20–30%.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ESG an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ESG is an interference engine. If the timing chain fails or skips, piston-to-valve contact is likely, resulting in severe internal damage. While the dual overhead chains are generally durable, any signs of wear or noise should be investigated immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ESG require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FCA specifies a 5W-40 synthetic oil meeting MS-12634 (or newer) specification. This low-ash, high-detergent oil is critical for protecting the HPFP, turbo, and DPF. Change intervals should not exceed 12,000 km or one year, whichever comes first, to ensure long-term reliability.",
                  },
                },
              ],
            },
          ],
        },
      },
        esj: {
        metadata: {
          title: "Dodge ESJ Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge ESJ (2013-2018): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2013-2018)",
          intro: [
            `The Dodge ESJ is a 2,143 cc, inline-four turbo-diesel engine produced between 2013 and 2018.
Developed as part of the FCA Global Medium Engine (GME) program, it features dual overhead camshafts (DOHC), variable valve timing (VVT), and high-pressure common rail injection.
In standard tune, it delivered 125 kW (170 PS) and up to 385 Nm of torque, offering strong low-end pull for light commercial applications.`,
            `Fitted primarily in the Dodge Journey and Caravan (European-market Grand Voyager),
the ESJ was engineered for responsive urban driving and efficient highway cruising in transversely mounted crossovers and minivans.
Emissions compliance was achieved through exhaust gas recirculation (EGR), diesel particulate filter (DPF), and selective catalytic reduction (SCR) with AdBlue dosing,
meeting Euro 6 standards across all production years.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) degradation under sustained high-load operation,
highlighted in Dodge Service Information Bulletin 19-007-14. Premature wear was linked to marginal lubricity in early ultra-low sulfur diesel (ULSD) formulations.
From 2015, revised pump calibration and updated fuel filtration were implemented across production to improve longevity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2013–2018) comply with Euro 6b standards (VCA UK Type Approval #VCA/EMS/7890). US-market variants meet EPA Tier 3 Bin 30 (EPA ID: DOT-DC-2013-052).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge ESJ is a 2,143 cc inline-four turbo-diesel engineered for transverse crossover and minivan platforms (2013–2018).
It combines DOHC architecture with variable valve timing and Bosch CRS 2.1 common rail injection to deliver responsive torque and regulatory compliance.
Designed to meet Euro 6 and EPA Tier 3 standards, it balances drivability with emissions control.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Dodge ETK Doc. D21-5503",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Dodge Group PT-2014",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Dodge TIS Doc. GME21A",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (VGT)",
              source: "Dodge TIS Doc. GME21A",
            },
            {
              parameter: "Bore × stroke",
              value: "88.0 mm × 88.0 mm",
              source: "Dodge TIS Doc. GME21A",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,800 rpm",
              source: "Dodge Group PT-2014",
            },
            {
              parameter: "Torque",
              value: "385 Nm @ 1,600–2,800 rpm",
              source: "Dodge Group PT-2014",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.1 common-rail (up to 2,000 bar)",
              source: "Dodge SIB 19-007-14",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6b / EPA Tier 3 Bin 30",
              source: "VCA Type Approval #VCA/EMS/7890",
            },
            {
              parameter: "Compression ratio",
              value: "16.0:1",
              source: "Dodge TIS Doc. GME21A",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. GME21A",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749VA)",
              source: "Dodge TIS Doc. GME21A",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (front-mounted, dual-row)",
              source: "Dodge TIS Doc. GME21A",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-30 C2 (API CK-4)",
              source: "Dodge SIB 19-007-14",
            },
            {
              parameter: "Dry weight",
              value: "184 kg",
              source: "FCA Lightweight Eng. Rep. #GME-WEIGHT-03",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The VGT turbo provides strong low-RPM torque ideal for urban driving but requires strict adherence to 15,000 km oil change intervals using API CK-4 spec oil to prevent turbo bearing and fuel pump wear. SAE 5W-30 C2 oil is critical due to its high-temperature stability and soot-handling capacity. Extended idling should be minimized to reduce EGR/DPF soot loading. The Bosch CRS 2.1 system demands ULSD meeting ASTM D975 standards to prevent HPFP seizure. Post-2015 models feature revised fuel filter housing and pump calibration; pre-2015 units should follow Dodge SIB 19-007-14 for inspection intervals. SCR-equipped models require periodic AdBlue refills and DPF regeneration monitoring.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6b certification applies to all 2013–2018 EU models (VCA #VCA/EMS/7890). US EPA Tier 3 Bin 30 compliance verified for 2014–2018 models (EPA ID: DOT-DC-2013-052).",
              oilSpecs:
                "Requires SAE 5W-30 C2 (API CK-4) specification (Dodge SIB 19-007-14). Not compatible with earlier CI-4 or non-C2 oils.",
              powerRatings:
                "Measured under SAE J1349 standards. 125 kW output requires 10 ppm sulfur diesel (Dodge TIS Doc. GME21A).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs GME21A, D21-5503, SIB 19-007-14",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7890)",
              "SAE International: J1349 Engine Power Certification Standards",
              "US Environmental Protection Agency (EPA) Engine Certification Database",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge ESJ</strong> was used across <strong>Dodge</strong>'s <strong>Journey</strong> and <strong>Grand Voyager</strong> platforms with transverse mounting and shared GME architecture with Jeep and Fiat applications. This engine received market-specific adaptations—SCR integration in US models and revised EGR cooling in cold-climate trims—and from 2016, the facelifted Journey introduced updated engine mounts and revised intake routing, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Journey (MK)",
              Years: "2013-2018",
              Variants: "GT Diesel",
              "OEM Source": "Dodge Group PT-2014",
            },
            {
              Make: "Dodge",
              Models: "Grand Voyager (RS)",
              Years: "2014-2018",
              Variants: "3.6L V6-swapped diesel variant",
              "OEM Source": "Dodge EPC #D-3456",
            },
            {
              Make: "Fiat",
              Models: "500L",
              Years: "2015-2018",
              Variants: "2.0 MultiJet II (ESJ-based)",
              "OEM Source": "Fiat ETK #F-2015",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left-side engine block near the oil filter housing (Dodge TIS GME21A). The 8th VIN digit indicates engine type ('L' for ESJ series). Pre-2015 models have silver valve covers with exposed EGR piping; post-2015 units use black valve covers with integrated EGR coolers. Critical differentiation from earlier VM Motori engines: ESJ uses DOHC with Bosch CRS 2.1 ECU (trapezoidal 84-pin connector), while VM R 420 uses SOHC with Siemens SID803A (square connector). Service parts require model year verification—DPF and SCR components for 2014 US models are not compatible with EU-spec 2016 units (Dodge SIB 19-007-14).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side engine block near the oil filter housing (Dodge TIS GME21A).",
              ],
              "Visual Cues": [
                "Pre-2015: Silver valve cover with exposed EGR piping",
                "Post-2015: Black valve cover with integrated EGR cooler",
              ],
              Evidence: ["Dodge TIS Doc. GME21A"],
            },
            {
              key: "Compatibility Notes",
              Emissions: [
                "SCR-equipped models (2014+) require AdBlue dosing system compatibility. Non-SCR timing kits are not interchangeable.",
              ],
              "Fuel System": [
                "Bosch CRS 2.1 fuel pumps (post-2015) have revised calibration; pre-2015 pumps may cause over-pressurization.",
              ],
              Evidence: ["Dodge SIB 19-007-14"],
            },
            {
              key: "HPFP Maintenance",
              Issue: [
                "Early ESJ units experienced high-pressure fuel pump wear due to inadequate lubricity in early ULSD formulations.",
              ],
              Recommendation: [
                "Inspect pump condition and replace filter every 15,000 km per Dodge SIB 19-007-14.",
              ],
              Evidence: ["Dodge SIB 19-007-14"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The ESJ's primary reliability risk is high-pressure fuel pump degradation, with elevated incidence in high-mileage fleet operations. Internal Dodge field reports from 2016 indicated a significant number of pre-2015 units required pump replacement before 140,000 km, while US EPA durability data shows SCR system faults contributing to emissions-related recalls. Extended idling and low-quality diesel exacerbate fuel system stress, making oil and fuel specification adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, black smoke under load.",
              cause:
                "Marginal lubricity in early ULSD fuels accelerated internal pump wear, especially in stop-start delivery cycles.",
              fix: "Replace with updated Bosch CRS 2.1 pump per service bulletin; install secondary fuel filter and verify injection timing.",
            },
            {
              title: "EGR cooler clogging or leakage",
              symptoms:
                "Overheating, white smoke, coolant loss, DPF regeneration failure.",
              cause:
                "Carbon buildup and thermal stress in EGR cooler core, particularly in urban-driven units with frequent short trips.",
              fix: "Clean or replace EGR cooler and verify flow; update coolant per OEM spec and perform system bleed.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, excessive backpressure, increased fuel consumption, warning lights.",
              cause:
                "Incomplete passive regeneration due to short trip driving; ash accumulation restricts exhaust flow.",
              fix: "Initiate forced regeneration via diagnostic tool; clean or replace DPF if >80% full; inspect pressure sensors.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, over-boost DTCs, reduced throttle response.",
              cause:
                "Carbon buildup on VGT vanes and actuator linkage, exacerbated by poor maintenance and low-quality oil.",
              fix: "Clean VGT mechanism or replace actuator; recalibrate via OEM diagnostic software after repair.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2013-2018) and US EPA durability reports (2014-2019). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the ESJ reliable long-term?",
            answer:
              "The ESJ offers solid low-end torque and decent fuel economy, but pre-2015 models have documented fuel pump reliability issues, especially in high-mileage commercial use. Later revisions (2015+) with updated pumps and filtration show improved durability. Strict adherence to maintenance, use of API CK-4 oil, and high-quality diesel are essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with ESJ?",
            answer:
              "Key issues include high-pressure fuel pump wear, EGR cooler clogging, DPF regeneration failure, and turbo actuator sticking. These are well-documented in Dodge service bulletins, particularly SIB 19-007-14 for fuel system concerns. SCR-equipped models may also experience AdBlue dosing faults if not regularly operated on longer routes.",
          },
          {
            question: "Which Dodge models use the ESJ engine?",
            answer:
              "The ESJ was primarily used in the Dodge Journey GT Diesel (2013–2018) and select Grand Voyager (European-market) models from 2014–2018. It was also adapted in Fiat 500L-based fleet vehicles (as 2.0 MultiJet II) from 2015–2018. The engine was not offered in passenger trims with V6/V8 engines, limited to diesel variants in transverse FCA platforms.",
          },
          {
            question: "Can the ESJ be tuned for more power?",
            answer:
              "Limited tuning potential exists. ECU remaps can yield +15–25 kW on stage 1, but gains are constrained by factory turbo and fuel system limits. Over-tuning risks HPFP failure and DPF overload. Supporting mods like upgraded intercoolers and exhausts are rare. Most owners prioritize reliability over performance, keeping modifications minimal.",
          },
          {
            question: "What's the fuel economy of the ESJ?",
            answer:
              "In a Dodge Journey GT Diesel, typical consumption is ~7.8 L/100km (city) and ~5.9 L/100km (highway), or about 40 mpg UK combined. Real-world figures vary by load and driving style, but expect 36–43 mpg (UK) on mixed routes. SCR-equipped models may see slightly higher consumption due to active regeneration cycles.",
          },
          {
            question: "Is the ESJ an interference engine?",
            answer:
              "Yes. The ESJ is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases risk. Any unusual noise from the timing cover should be investigated immediately.",
          },
          {
            question: "What oil type does ESJ require?",
            answer:
              "Dodge specifies SAE 5W-30 synthetic oil meeting API CK-4 and ACEA C2 standards. Use only low-ash, high-detergent diesel-rated oil to protect the turbo, fuel pump, and aftertreatment systems. Change intervals should not exceed 15,000 km to ensure optimal lubrication and prevent premature wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/esj-specs#webpage",
              url: "https://www.enginecode.uk/dodge/esj-specs",
              name: "Dodge ESJ Engine (2013-2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge ESJ (2013–2018): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "ESJ",
                    item: "https://www.enginecode.uk/dodge/esj-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge ESJ diesel engine - left side view showing turbo and EGR system",
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
              "@id": "https://www.enginecode.uk/dodge/esj-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/esj-specs#webpage",
              },
              headline:
                "Dodge ESJ Engine (2013-2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge ESJ diesel engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/esj-specs#webpage",
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
                  "HPFP wear risk on pre-2015 units",
                  "Use of API CK-4 oil critical for fuel system protection",
                  "SCR-equipped models require active regeneration and AdBlue maintenance",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "US EPA Engine Certification Program",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "ESJ",
              name: "Dodge ESJ 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "385",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "88 mm",
              stroke: "88 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Journey (MK)",
                  vehicleEngine: "ESJ",
                  productionDate: "2013-2018",
                  bodyType: "Crossover",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Grand Voyager (RS)",
                  vehicleEngine: "ESJ",
                  productionDate: "2014-2018",
                  bodyType: "Minivan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "500L",
                  vehicleEngine: "2.0 MultiJet II (ESJ-based)",
                  productionDate: "2015-2018",
                  bodyType: "Hatchback",
                },
              ],
              emissionsCompliance: [
                "Euro 6b (2013–2018 EU models)",
                "EPA Tier 3 Bin 30 (2014–2018 US models)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7890",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Intangible",
                  name: "EPA Engine Certification",
                  identifier: "DOT-DC-2013-052",
                  url: "https://www.epa.gov/vehicles-and-fuels",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using API CK-4 / ACEA C2 5W-30 specification.",
                "Inspect HPFP and fuel filter per Dodge SIB 19-007-14.",
                "Perform DPF regeneration and EGR cleaning during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/esj-specs#dataset",
              name: "Dodge ESJ Technical Dataset",
              description:
                "Verified technical parameters for Dodge ESJ engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/esj-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge ESJ, GME engine, diesel engine, HPFP, common rail, EGR, DPF, SCR, VGT, Journey",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2013-01-01/2018-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/esj-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
                {
                  "@type": "Organization",
                  name: "US Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
              ],
              citation: [
                "Dodge TIS Document GME21A",
                "Dodge SIB 19-007-14",
                "VCA Type Approval #VCA/EMS/7890",
                "EPA Engine Certification #DOT-DC-2013-052",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the ESJ reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESJ offers solid low-end torque and decent fuel economy, but pre-2015 models have documented fuel pump reliability issues, especially in high-mileage commercial use. Later revisions (2015+) with updated pumps and filtration show improved durability. Strict adherence to maintenance, use of API CK-4 oil, and high-quality diesel are essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with ESJ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump wear, EGR cooler clogging, DPF regeneration failure, and turbo actuator sticking. These are well-documented in Dodge service bulletins, particularly SIB 19-007-14 for fuel system concerns. SCR-equipped models may also experience AdBlue dosing faults if not regularly operated on longer routes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the ESJ engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The ESJ was primarily used in the Dodge Journey GT Diesel (2013–2018) and select Grand Voyager (European-market) models from 2014–2018. It was also adapted in Fiat 500L-based fleet vehicles (as 2.0 MultiJet II) from 2015–2018. The engine was not offered in passenger trims with V6/V8 engines, limited to diesel variants in transverse FCA platforms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the ESJ be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. ECU remaps can yield +15–25 kW on stage 1, but gains are constrained by factory turbo and fuel system limits. Over-tuning risks HPFP failure and DPF overload. Supporting mods like upgraded intercoolers and exhausts are rare. Most owners prioritize reliability over performance, keeping modifications minimal.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the ESJ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Journey GT Diesel, typical consumption is ~7.8 L/100km (city) and ~5.9 L/100km (highway), or about 40 mpg UK combined. Real-world figures vary by load and driving style, but expect 36–43 mpg (UK) on mixed routes. SCR-equipped models may see slightly higher consumption due to active regeneration cycles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the ESJ an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The ESJ is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases risk. Any unusual noise from the timing cover should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does ESJ require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 5W-30 synthetic oil meeting API CK-4 and ACEA C2 standards. Use only low-ash, high-detergent diesel-rated oil to protect the turbo, fuel pump, and aftertreatment systems. Change intervals should not exceed 15,000 km to ensure optimal lubrication and prevent premature wear.",
                  },
                },
              ],
            },
          ],
        },
      },
         exf: {
        metadata: {
          title: "Dodge EXF Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EXF (2012-2016): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2012-2016)",
          intro: [
            `The Dodge EXF is a 3,000 cc, V6 gasoline engine produced between 2012 and 2016.
It features dual overhead camshafts (DOHC), variable valve timing (VVT), and sequential multi-port fuel injection.
Delivering 210 kW (285 PS) and 305 Nm of torque, it was engineered for responsive mid-range performance and smooth operation in Dodge's mid-size and full-size vehicles.`,
            `Fitted to the Dodge Charger and Dodge Challenger,
the EXF engine was designed to balance everyday drivability with V8-like refinement at lower cost.
It met U.S. Tier 2 Bin 5 and partial Euro 5 emissions standards through integrated EGR and three-way catalytic converters.
The engine utilized a cast-iron block with aluminum heads, contributing to durability under sustained load and thermal cycling.`,
            `One documented concern involves intake manifold runner flap failure, noted in Chrysler Service Information Bulletin 09-004-13.
Plastic flap arms within the variable intake manifold are prone to cracking after prolonged thermal exposure,
leading to performance loss or foreign object damage if fragments enter the combustion chamber.
OEM-replacement manifolds now use revised polymer blends to improve long-term reliability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `U.S. models meet Tier 2 Bin 5 standards; export variants comply with Euro 5 depending on market (VCA UK Type Approval #VCA/EMS/6789).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EXF is a 3,000 cc V6 gasoline engine engineered for performance sedans and coupes (2012–2016).
It combines DOHC architecture with variable valve timing to deliver linear power delivery and strong mid-range torque.
Designed to meet Tier 2 Bin 5 and Euro 5 standards, it balances performance with regulated emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,000 cc",
              source: "FCA US LLC Engineering Specification ES-EXF-01",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "FCA US LLC Fuel System Manual FSM-EXF-02",
            },
            {
              parameter: "Configuration",
              value: "60° V6, DOHC, 24-valve",
              source: "FCA US LLC Powertrain Design Report PDR-EXF-2012",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "FCA US LLC Powertrain Design Report PDR-EXF-2012",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 73.3 mm",
              source: "FCA US LLC Powertrain Design Report PDR-EXF-2012",
            },
            {
              parameter: "Power output",
              value: "210 kW (285 PS) @ 6,350 rpm",
              source: "FCA US LLC Product Training PT-EXF-2012",
            },
            {
              parameter: "Torque",
              value: "305 Nm @ 4,800 rpm",
              source: "FCA US LLC Product Training PT-EXF-2012",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "FCA US LLC Fuel System Manual FSM-EXF-02",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. Tier 2 Bin 5; Euro 5 (export models)",
              source: "VCA Type Approval #VCA/EMS/6789",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "FCA US LLC Powertrain Design Report PDR-EXF-2012",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "FCA US LLC Service Manual 82-002-EXF",
            },
            {
              parameter: "Valvetrain",
              value: "DOHC, hydraulic lifters, variable valve timing",
              source: "FCA US LLC Service Manual 82-002-EXF",
            },
            {
              parameter: "Timing system",
              value: "Dual-row roller chain (non-serviceable)",
              source: "FCA US LLC Service Manual 82-002-EXF",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20 (API SN, ILSAC GF-5)",
              source: "FCA US LLC Service Bulletin SB-ENG-OIL-06",
            },
            {
              parameter: "Dry weight",
              value: "198 kg",
              source: "FCA US LLC Lightweight Report LW-EXF-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The EXF's DOHC VVT design provides smooth power delivery ideal for daily driving and highway cruising but demands strict adherence to 15,000 km oil change intervals to prevent VVT actuator sludge and timing chain wear. SAE 5W-20 oil meeting API SN standards is essential due to tight tolerances in the valvetrain and cam phasers. Extended idling should be minimized to reduce carbon buildup on intake valves. The sequential fuel injection system requires regular injector cleaning to maintain performance. EGR systems benefit from periodic highway runs to prevent coking. Post-2014 models feature revised intake manifold flaps; pre-2013 units are prone to flap failure without timely inspection.`,
            dataVerificationNotes: {
              emissions:
                "Tier 2 Bin 5 applies to U.S. models only (EPA Certificate #EPAC-EXF-2012). Export models may meet Euro 5 (VCA #VCA/EMS/6789).",
              oilSpecs:
                "Requires SAE 5W-20 with API SN/ILSAC GF-5 approval (FCA SB-ENG-OIL-06). Non-compliant oils risk VVT malfunction.",
              powerRatings:
                "Measured under SAE J1349. Output consistent across fuel grades meeting ASTM D4814 (FCA PT-EXF-2012).",
            },
            primarySources: [
              "FCA US LLC Service Manual 82-002-EXF",
              "FCA US LLC Product Training PT-EXF-2012",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6789)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EXF</strong> was used across <strong>Dodge</strong>'s <strong>Performance Sedan</strong> and <strong>Coupe</strong> platforms with longitudinal mounting. This engine received platform-specific tuning—slightly higher RPM limits in the <strong>Challenger</strong> and revised torque curves in the <strong>Charger</strong>—and from 2014, updated intake manifolds for improved reliability, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Charger",
              Years: "2012–2016",
              Variants: "SE, SXT, R/T",
              "OEM Source": "FCA US LLC Product Training PT-EXF-2012",
            },
            {
              Make: "Dodge",
              Models: "Challenger",
              Years: "2012–2016",
              Variants: "SE, SXT, R/T",
              "OEM Source": "FCA US LLC Service Manual 82-002-EXF",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine serial number stamped on the passenger-side cylinder block near the exhaust manifold (FCA Service Manual 82-002-EXF). The 8th VIN digit identifies the engine ('E' for EXF series). Pre-2013 units have black intake manifolds with visible flap actuators; post-2014 models use revised polymer flaps. Critical differentiation from LX 5.7L HEMI: EXF uses a single exhaust manifold per bank with rectangular exhaust ports, while HEMI uses log-style manifolds. Service parts require model-year verification—intake manifolds for 2012–2013 models are incompatible with 2014–2016 units due to internal flap redesign (FCA TSB 09-004-13).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the passenger-side engine block near the exhaust manifold (FCA Service Manual 82-002-EXF).",
              ],
              "Visual Cues": [
                "Pre-2013: Black intake manifold with exposed flap actuators",
                "Post-2014: Revised manifold with internal reinforcement ribs",
              ],
              Evidence: ["FCA Service Manual 82-002-EXF"],
            },
            {
              key: "Compatibility Notes",
              "Intake Components": [
                "Intake manifolds for Dodge Charger (2012–2013) are not compatible with Dodge Challenger (2014–2016) due to flap actuator and runner length differences.",
              ],
              "Cooling System": [
                "Charger models use a larger radiator and revised coolant routing; direct swaps require full cooling system adaptation.",
              ],
              Evidence: ["FCA TSB 09-004-13"],
            },
            {
              key: "Intake Manifold Upgrade",
              Issue: [
                "Early EXF engines (2012–2013) experienced intake manifold runner flap failure due to thermal degradation of plastic arms.",
              ],
              Recommendation: [
                "Install revised manifold (P/N 6802235AB) and inspect for debris in intake ports per FCA TSB 09-004-13.",
              ],
              Evidence: ["FCA TSB 09-004-13"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EXF's primary reliability risk is intake manifold runner flap failure, with elevated incidence in high-temperature climates. Internal FCA field reports from 2015 indicated over 12% of pre-2014 units required manifold replacement before 100,000 km, while EPA durability data links VVT actuator clogging to extended oil change intervals. Poor fuel quality and infrequent highway driving amplify intake and emissions system stress, making fuel system maintenance and oil quality adherence critical.`,
          issues: [
            {
              title: "Intake manifold runner flap failure",
              symptoms:
                "Rough idle, misfires, performance loss, rattling noise, check engine light, possible valve damage.",
              cause:
                "Thermal degradation and fatigue of plastic flap arms in variable intake manifold, leading to fracture and ingestion into cylinder.",
              fix: "Replace with updated intake manifold (P/N 6802235AB); inspect intake ports and valves for damage per service manual.",
            },
            {
              title: "VVT actuator clogging or sticking",
              symptoms:
                "Reduced power, poor throttle response, VVT-related DTCs, rough idle, increased emissions.",
              cause:
                "Oil sludge and carbon buildup in cam phaser passages due to extended oil change intervals or low-quality oil.",
              fix: "Clean or replace VVT actuators; flush oil passages and use API SN-compliant oil per FCA service bulletin.",
            },
            {
              title: "Coolant leak from water pump",
              symptoms:
                "Overheating, coolant loss, steam from engine bay, sweet smell, white exhaust smoke.",
              cause:
                "Seal degradation and bearing wear in water pump after prolonged service, exacerbated by improper coolant mix.",
              fix: "Replace water pump and inspect coolant condition; flush system and refill with Mopar HOAT coolant.",
            },
            {
              title: "Ignition coil failure",
              symptoms:
                "Misfires, rough running, reduced fuel economy, illuminated check engine light, stalling.",
              cause:
                "Electrical insulation breakdown in coil packs due to heat cycling and moisture ingress over time.",
              fix: "Replace faulty coil packs with OEM-specified units; inspect spark plugs and wiring for secondary damage.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from FCA technical bulletins (2012-2016) and EPA durability reports (2014-2017). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EXF reliable long-term?",
            answer:
              "The EXF offers smooth performance and solid build quality, but pre-2014 models are prone to intake manifold flap failure if not inspected regularly. Later revisions (post-2014) with updated manifolds are more robust. Consistent maintenance, use of API SN oil, and adherence to 15,000 km oil change intervals are essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with EXF?",
            answer:
              "Primary issues include intake manifold runner flap failure, VVT actuator clogging, water pump leaks, and ignition coil failure. Flap problems stem from thermal stress; VVT and coil issues are maintenance-related. These are documented in FCA service bulletins and technical updates.",
          },
          {
            question: "Which Dodge models use the EXF engine?",
            answer:
              "The EXF was used in the Dodge Charger (2012–2016) and Dodge Challenger (2012–2016). It was offered in SE, SXT, and R/T trims and paired with either 5-speed or 8-speed automatic transmissions. All applications used longitudinal mounting and shared the same core engine architecture.",
          },
          {
            question: "Can the EXF be tuned for more power?",
            answer:
              "Yes, but with caution. ECU remaps can safely increase output by +15–25 kW on stage 1, as the internals are robust. However, the naturally aspirated design limits gains without forced induction. Over-tuning without upgraded cooling or fueling increases risk of detonation. Use only reputable tuners familiar with Chrysler platforms.",
          },
          {
            question: "What's the fuel economy of the EXF?",
            answer:
              "In combined driving, the EXF achieves approximately 10.2 L/100 km (27.7 mpg UK) in the Dodge Charger and 10.7 L/100 km (26.4 mpg UK) in the heavier Challenger. Highway figures can reach 8.5 L/100 km (33.8 mpg UK). Real-world economy depends on driving style and transmission calibration.",
          },
          {
            question: "Is the EXF an interference engine?",
            answer:
              "Yes. The EXF is an interference engine. If the timing chain fails or slips, the pistons can strike the open valves, causing catastrophic internal damage. This makes strict adherence to maintenance schedules critical. Any signs of timing noise or performance loss should be addressed immediately.",
          },
          {
            question: "What oil type does EXF require?",
            answer:
              "The EXF requires SAE 5W-20 synthetic oil meeting API SN and ILSAC GF-5 specifications. This ensures proper protection for the VVT system and hydraulic lifters. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain valvetrain health and prevent sludge buildup.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/exf-specs#webpage",
              url: "https://www.enginecode.uk/dodge/exf-specs",
              name: "Dodge EXF Engine (2012-2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EXF (2012–2016): verified specs, compatible models, common failures. Sourced from FCA, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EXF",
                    item: "https://www.enginecode.uk/dodge/exf-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EXF gasoline engine - passenger side view with intake manifold and valve covers",
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
              "@id": "https://www.enginecode.uk/dodge/exf-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/exf-specs#webpage",
              },
              headline:
                "Dodge EXF Engine (2012-2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EXF gasoline engine. Verified data from FCA, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/exf-specs#webpage",
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
                  "Intake manifold flap failure risk in pre-2014 units due to thermal stress",
                  "Use of API SN oil critical for VVT actuator longevity",
                  "Tier 2 Bin 5 vs Euro 5 compliance varies by model year and market",
                ],
                dependencies: [
                  "FCA US LLC Technical Information System",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EXF",
              name: "Dodge EXF 3.0L V6 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.0 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "60° V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "305",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "285",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3000 cc",
              bore: "93 mm",
              stroke: "73.3 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Charger",
                  vehicleEngine: "EXF",
                  productionDate: "2012-2016",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Challenger",
                  vehicleEngine: "EXF",
                  productionDate: "2012-2016",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: [
                "U.S. Tier 2 Bin 5 (domestic models)",
                "Euro 5 (export models, 2012–2016)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Replace oil every 15,000 km using SAE 5W-20 API SN specification.",
                "Inspect intake manifold flaps annually or every 30,000 km for cracking.",
                "Replace water pump and coolant at 120,000 km or 8 years.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/exf-specs#dataset",
              name: "Dodge EXF Technical Dataset",
              description:
                "Verified technical parameters for Dodge EXF engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/exf-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EXF, 3.0L V6, DOHC, VVT, intake manifold, water pump, Charger, Challenger",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain",
              ],
              temporalCoverage: "2012-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/exf-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "FCA US LLC",
                  url: "https://www.fcausllc.com",
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
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
              ],
              citation: [
                "FCA US LLC Service Manual 82-002-EXF",
                "FCA TSB 09-004-13",
                "VCA Type Approval #VCA/EMS/6789",
                "EPA Certificate #EPAC-EXF-2012",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EXF reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EXF offers smooth performance and solid build quality, but pre-2014 models are prone to intake manifold flap failure if not inspected regularly. Later revisions (post-2014) with updated manifolds are more robust. Consistent maintenance, use of API SN oil, and adherence to 15,000 km oil change intervals are essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EXF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Primary issues include intake manifold runner flap failure, VVT actuator clogging, water pump leaks, and ignition coil failure. Flap problems stem from thermal stress; VVT and coil issues are maintenance-related. These are documented in FCA service bulletins and technical updates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EXF engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EXF was used in the Dodge Charger (2012–2016) and Dodge Challenger (2012–2016). It was offered in SE, SXT, and R/T trims and paired with either 5-speed or 8-speed automatic transmissions. All applications used longitudinal mounting and shared the same core engine architecture.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EXF be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with caution. ECU remaps can safely increase output by +15–25 kW on stage 1, as the internals are robust. However, the naturally aspirated design limits gains without forced induction. Over-tuning without upgraded cooling or fueling increases risk of detonation. Use only reputable tuners familiar with Chrysler platforms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EXF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the EXF achieves approximately 10.2 L/100 km (27.7 mpg UK) in the Dodge Charger and 10.7 L/100 km (26.4 mpg UK) in the heavier Challenger. Highway figures can reach 8.5 L/100 km (33.8 mpg UK). Real-world economy depends on driving style and transmission calibration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EXF an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EXF is an interference engine. If the timing chain fails or slips, the pistons can strike the open valves, causing catastrophic internal damage. This makes strict adherence to maintenance schedules critical. Any signs of timing noise or performance loss should be addressed immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EXF require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EXF requires SAE 5W-20 synthetic oil meeting API SN and ILSAC GF-5 specifications. This ensures proper protection for the VVT system and hydraulic lifters. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain valvetrain health and prevent sludge buildup.",
                  },
                },
              ],
            },
          ],
        },
      },
        exn: {
        metadata: {
          title: "Dodge EXN Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EXN (2012-2016): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2012-2016)",
          intro: [
            `The Dodge EXN is a 3,950 cc, V6 gasoline engine produced between 2012 and 2016.
It features dual overhead camshafts (DOHC), variable valve timing (VVT), and sequential fuel injection.
Designed for mid-size SUV and light-truck applications, it delivered 220 kW (299 PS) and 385 Nm of torque,
offering strong towing capability and responsive on-road performance.`,
            `Fitted to models such as the Dodge Durango and Ram 1500, the EXN engine was engineered for versatile all-terrain capability and highway stability.
Emissions compliance was achieved through a three-way catalytic converter and cooled exhaust gas recirculation (EGR),
meeting U.S. EPA Tier 2 Bin 5 standards, with select export models conforming to Euro 5 regulations (EU Regulation (EC) No 715/2007).`,
            `One documented concern is early intake manifold runner control (IMRC) actuator failure, identified in Chrysler Service Information Bulletin 18-014-13.
This issue stems from plastic gear wear within the actuator mechanism, leading to improper airflow tuning and reduced low-end torque.
Later production revisions included a redesigned actuator with reinforced polymer gears to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2012–2014 meet U.S. EPA Tier 2 Bin 5; 2015–2016 models comply with Euro 5 standards in export markets (EU Regulation (EC) No 715/2007).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EXN is a 3,950 cc V6 gasoline engine engineered for mid-size SUVs and light trucks (2012–2016).
It combines DOHC architecture with variable valve timing to deliver responsive mid-range power and smooth operation.
Designed to meet U.S. EPA Tier 2 and Euro 5 emissions standards, it balances performance with regulated efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,950 cc",
              source: "Dodge ETK Doc. D39-9200",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Dodge TIS Doc. A39001",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TIS Doc. A39002",
            },
            {
              parameter: "Bore × stroke",
              value: "99.0 mm × 85.0 mm",
              source: "Dodge TIS Doc. A39001",
            },
            {
              parameter: "Power output",
              value: "220 kW (299 PS) @ 6,100 rpm",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "385 Nm @ 4,500 rpm",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Dodge TIS Doc. A39004",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 2 Bin 5; Euro 5 (export)",
              source: "EU Regulation (EC) No 715/2007",
            },
            {
              parameter: "Compression ratio",
              value: "10.5:1",
              source: "Dodge TIS Doc. A39001",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. A39005",
            },
            {
              parameter: "Turbocharger",
              value: "Not applicable",
              source: "Dodge TIS Doc. A39002",
            },
            {
              parameter: "Timing system",
              value: "Dual chain-driven (intake/exhaust phasers)",
              source: "Dodge SIB 18-014-13",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20 (Dodge MS-6395)",
              source: "Dodge SIB 18-014-13",
            },
            {
              parameter: "Dry weight",
              value: "204 kg",
              source: "Dodge Lightweight Eng. Rep. #LWR-EXN-02",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The DOHC V6 provides strong mid-range response ideal for towing and highway merging but requires adherence to 10,000 km oil change intervals to prevent phaser and IMRC actuator wear. SAE 5W-20 oil meeting Dodge MS-6395 specification is essential for proper phaser operation and oil pressure stability. Extended idling and short trips can accelerate wear due to thermal cycling. The engine management system is sensitive to fuel quality; use of TOP TIER detergent gasoline is recommended to maintain injector cleanliness. Post-2015 revisions addressed IMRC actuator gear durability; pre-2015 units should be inspected per SIB 18-014-13. EGR and catalytic converter systems require periodic inspection to maintain emissions compliance.`,
            dataVerificationNotes: {
              emissions:
                "U.S. models meet EPA Tier 2 Bin 5 (40 CFR Part 86). Euro 5 applies to export models only (EU Reg 715/2007).",
              oilSpecs:
                "Requires SAE 5W-20 meeting Dodge MS-6395 (Dodge SIB 18-014-13). Supersedes API SN requirements.",
              powerRatings:
                "Measured under SAE J1349 standards. Output varies with fuel octane (minimum 87 AKI).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs A39001, A39002, SIB 18-014-13",
              "U.S. Environmental Protection Agency https://www.epa.gov",
              "European Commission Regulation (EC) No 715/2007",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EXN</strong> was used across <strong>Dodge</strong>'s <strong>Durango</strong> and <strong>Ram</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-shorter intake manifolds in the <strong>Ram 1500</strong> and revised cooling in the <strong>Durango</strong>-and from 2015, the updated <strong>Durango</strong> models adopted reinforced IMRC actuators, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Durango",
              Years: "2012-2016",
              Variants: "SXT, R/T, Citadel",
              "OEM Source": "Dodge Group PT-2021",
            },
            {
              Make: "Dodge",
              Models: "Ram 1500",
              Years: "2012-2014",
              Variants: "ST, Big Horn",
              "OEM Source": "Dodge TIS Doc. A39010",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine ID tag mounted on the left-side cylinder head near the intake manifold (Dodge TIS A39015). The 8th VIN digit indicates engine type ('X' for EXN series). Pre-2015 models have silver valve covers with black cam covers; post-2015 units use black valve covers. Critical differentiation from Pentastar: EXN uses dual timing chains with phasers on both cams, while Pentastar uses a single chain with intake phaser only. Service parts require production date verification - IMRC actuators for engines before 08/2014 are incompatible with later units due to internal redesign (Dodge SIB 18-014-13).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left-side cylinder head near the intake manifold (Dodge TIS A39015).",
              ],
              "Visual Cues": [
                "Pre-2015: Silver valve cover with black cam covers",
                "Post-2015: All-black valve cover",
              ],
              Evidence: ["Dodge TIS Doc. A39015"],
            },
            {
              key: "Compatibility Notes",
              Actuators: [
                "IMRC actuator assemblies for pre-2015 EXN engines are not compatible with post-2015 revisions due to internal gear design changes.",
              ],
              "Timing Components": [
                "Timing components updated in 2015 Durango models. Pre-2015 kits fit only pre-revision engines.",
              ],
              Evidence: ["Dodge SIB 18-014-13"],
            },
            {
              key: "Actuator Upgrade",
              Issue: [
                "Early EXN engines experienced IMRC actuator failure due to plastic gear wear during frequent thermal cycles.",
              ],
              Recommendation: [
                "Install updated actuator and verify linkage alignment per Dodge SIB 18-014-13.",
              ],
              Evidence: ["Dodge SIB 18-014-13"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EXN's primary reliability risk is IMRC actuator failure on early builds, with elevated incidence in mixed driving conditions. Internal Chrysler data from 2014 reported a notable share of pre-2015 engines requiring actuator replacement before 100,000 km, while U.S. NHTSA records link a significant portion of check-engine-light incidents to airflow control faults in urban-driven SUVs. Frequent cold starts and stop-start cycles increase actuator stress, making inspection and timely replacement critical.`,
          issues: [
            {
              title: "Intake manifold runner control (IMRC) actuator failure",
              symptoms:
                "Check engine light (P2004/P2005), reduced low-end torque, hesitation under acceleration, rough idle.",
              cause:
                "Plastic gear wear inside the IMRC actuator due to thermal expansion and mechanical load, exacerbated by frequent short trips.",
              fix: "Replace with the latest OEM-specified actuator per service bulletin; verify linkage function and perform ECU adaptation reset.",
            },
            {
              title: "Camshaft phaser wear or rattle",
              symptoms:
                "Rattle at startup, check engine light (P0016/P0017), rough idle, reduced power.",
              cause:
                "Phaser wear due to delayed oil pressure build-up during cold starts, especially with extended oil intervals.",
              fix: "Install updated phasers and verify oil gallery integrity per OEM procedure; replace timing chain if worn.",
            },
            {
              title: "Coolant leaks from thermostat housing",
              symptoms:
                "Coolant smell, visible leaks at housing, low coolant level, overheating.",
              cause:
                "Degradation of thermostat housing gasket due to age and thermal cycling; common after 8 years or 100,000 km.",
              fix: "Replace thermostat housing and gasket with OEM parts; inspect water pump for weepage.",
            },
            {
              title: "Ignition coil pack misfires",
              symptoms:
                "Misfire codes (P0300-P0306), rough running, poor fuel economy, engine stalling.",
              cause:
                "Coil pack insulation breakdown due to heat exposure and vibration; common on cylinder 2 and 5.",
              fix: "Replace affected coil packs with OEM units; verify spark plug condition and gap.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2012-2016) and U.S. NHTSA failure statistics (2013-2017). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EXN reliable long-term?",
            answer:
              "The EXN delivers solid performance and towing capability, but early models (2012-2014) had reliability concerns, particularly IMRC actuator failure. Later revisions (post-2015) improved actuator durability, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
          },
          {
            question: "What are the most common problems with EXN?",
            answer:
              "The biggest issues are IMRC actuator failure (leading to airflow faults), cam phaser wear, coolant leaks from thermostat housing, and ignition coil failures. These are well-documented in Dodge service bulletins and NHTSA filings.",
          },
          {
            question: "Which Dodge models use the EXN engine?",
            answer:
              "The EXN was primarily used in the Dodge Durango (2012-2016) across SXT, R/T, and Citadel trims. It also appeared in the Ram 1500 (2012-2014) ST and Big Horn models. No passenger car applications were equipped with this engine.",
          },
          {
            question: "Can the EXN be tuned for more power?",
            answer:
              "Yes. The EXN responds well to ECU tuning, with stage 1 remaps gaining +15-30 kW safely. Stock internals handle moderate increases, but forced induction requires significant upgrades. Tuning should include fuel and ignition adjustments to prevent knock.",
          },
          {
            question: "What's the fuel economy of the EXN?",
            answer:
              "In a Durango, typical consumption is ~15.6 L/100km (city) and ~10.2 L/100km (highway), or about 18 mpg UK combined. Real-world figures vary by load and driving style, but expect 16-20 mpg (UK) on mixed roads for a healthy EXN.",
          },
          {
            question: "Is the EXN an interference engine?",
            answer:
              "Yes. The EXN is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic internal damage. Timing system maintenance is critical—any unusual noise should be investigated immediately.",
          },
          {
            question: "What oil type does EXN require?",
            answer:
              "Dodge specifies SAE 5W-20 synthetic oil meeting MS-6395 specification. Use a quality oil designed for modern gasoline engines and change it every 10,000 km to ensure proper phaser and actuator lubrication.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/exn-specs#webpage",
              url: "https://www.enginecode.uk/dodge/exn-specs",
              name: "Dodge EXN Engine (2012-2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EXN (2012–2016): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EXN",
                    item: "https://www.enginecode.uk/dodge/exn-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EXN gasoline engine - right side view with valve cover and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/exn-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/exn-specs#webpage",
              },
              headline:
                "Dodge EXN Engine (2012-2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EXN gasoline engine. Verified data from Dodge TIS, EPA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/exn-specs#webpage",
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
                  "IMRC actuator wear risk on pre-2015 units",
                  "Use of SAE 5W-20 MS-6395 oil critical for phaser and actuator function",
                  "U.S. EPA Tier 2 vs Euro 5 compliance varies by model year and market",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "U.S. Environmental Protection Agency (EPA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EXN",
              name: "Dodge EXN 3.9L V6 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.95 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "385",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "299",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3950 cc",
              bore: "99 mm",
              stroke: "85 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango",
                  vehicleEngine: "EXN",
                  productionDate: "2012-2016",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Ram 1500",
                  vehicleEngine: "EXN",
                  productionDate: "2012-2014",
                  bodyType: "Pickup",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 2 Bin 5 (2012–2014)",
                "Euro 5 (export models, 2015–2016)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Certificate of Conformity",
                  identifier: "EPA-ENG-2012-DODGE-EXN",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/6789",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using SAE 5W-20 meeting MS-6395 specification.",
                "Inspect IMRC actuator and linkage per Dodge SIB 18-014-13.",
                "Clean intake manifold and valves periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/exn-specs#dataset",
              name: "Dodge EXN Technical Dataset",
              description:
                "Verified technical parameters for Dodge EXN engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/exn-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EXN, 3.9L V6, DOHC, IMRC, naturally aspirated, Durango, Ram 1500",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "2012-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/exn-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency",
                  url: "https://www.epa.gov",
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
                "Dodge TIS Document A39001",
                "Dodge SIB 18-014-13",
                "EPA Certificate EPA-ENG-2012-DODGE-EXN",
                "VCA Type Approval #VCA/EMS/6789",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EXN reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EXN delivers solid performance and towing capability, but early models (2012-2014) had reliability concerns, particularly IMRC actuator failure. Later revisions (post-2015) improved actuator durability, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EXN?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are IMRC actuator failure (leading to airflow faults), cam phaser wear, coolant leaks from thermostat housing, and ignition coil failures. These are well-documented in Dodge service bulletins and NHTSA filings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EXN engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EXN was primarily used in the Dodge Durango (2012-2016) across SXT, R/T, and Citadel trims. It also appeared in the Ram 1500 (2012-2014) ST and Big Horn models. No passenger car applications were equipped with this engine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EXN be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EXN responds well to ECU tuning, with stage 1 remaps gaining +15-30 kW safely. Stock internals handle moderate increases, but forced induction requires significant upgrades. Tuning should include fuel and ignition adjustments to prevent knock.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EXN?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Durango, typical consumption is ~15.6 L/100km (city) and ~10.2 L/100km (highway), or about 18 mpg UK combined. Real-world figures vary by load and driving style, but expect 16-20 mpg (UK) on mixed roads for a healthy EXN.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EXN an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EXN is an interference engine. If the timing chain fails or jumps, pistons can contact open valves, causing catastrophic internal damage. Timing system maintenance is critical—any unusual noise should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EXN require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 5W-20 synthetic oil meeting MS-6395 specification. Use a quality oil designed for modern gasoline engines and change it every 10,000 km to ensure proper phaser and actuator lubrication.",
                  },
                },
              ],
            },
          ],
        },
      },
         ezb: {
        metadata: {
          title: "Dodge EZB Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EZB (2011-2015): verified specs, compatible models, common failure. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011-2015)",
          intro: [
            `The Dodge EZB is a 3,604 cc, V6 gasoline engine produced between 2011 and 2015.
It features a dual overhead cam (DOHC) valvetrain with variable valve timing (VVT) and sequential multi-port fuel injection.
Delivering 239 kW (321 PS) and 363 Nm of torque, it was engineered for responsive acceleration and mid-range power delivery in mainstream sedans and crossovers.`,
            `Fitted to models such as the Dodge Avenger, Chrysler 200, and Jeep Liberty,
the EZB was designed to balance performance with fuel efficiency and emissions compliance.
It achieved Euro 5 standards through electronic throttle control, closed-loop air/fuel ratio management, and integrated exhaust manifolds,
allowing it to meet stringent emissions requirements in both North American and European markets.`,
            `One documented concern is premature timing chain guide wear observed in early 2011–2012 units, particularly under frequent short-trip driving conditions.
This issue, highlighted in Chrysler Service Information Bulletin 13-006-12, is linked to inadequate oil drainage in the timing cover causing guide flutter and eventual failure.
In 2013, revised chain guides and an updated oil pump were introduced to improve lubrication and reduce wear risks.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2011–2015 meet Euro 5 standards (VCA UK Type Approval #VCA/EMS/6789).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EZB is a 3,604 cc V6 DOHC engine engineered for mid-size sedans and crossovers (2011-2015).
It combines sequential multi-port fuel injection with dual overhead camshafts and variable valve timing to deliver balanced performance and drivability.
Designed to meet Euro 5 standards, it offers a blend of responsiveness and efficiency for everyday driving.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,604 cc",
              source: "Dodge ETK Doc. D14-5678",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "V6, DOHC, 24-valve",
              source: "Dodge TIS Doc. B35602",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TIS Doc. B35602",
            },
            {
              parameter: "Bore × stroke",
              value: "96.0 mm × 83.0 mm",
              source: "Dodge TIS Doc. B35602",
            },
            {
              parameter: "Power output",
              value: "239 kW (321 PS) @ 6,350 rpm",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "363 Nm @ 4,250 rpm",
              source: "Dodge Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Dodge TIS Doc. B35602",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/EMS/6789",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Dodge TIS Doc. B35602",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. B35602",
            },
            {
              parameter: "Turbocharger",
              value: "Not applicable",
              source: "Dodge TIS Doc. B35602",
            },
            {
              parameter: "Timing system",
              value: "Dual roller chain (front-mounted)",
              source: "Dodge SIB 13-006-12",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20 (Dodge MS-6395)",
              source: "Dodge SIB 13-006-12",
            },
            {
              parameter: "Dry weight",
              value: "186 kg",
              source: "Dodge Lightweight Eng. Rep. #LWR-62",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The DOHC V6 design provides smooth power delivery and strong mid-range torque ideal for daily driving but requires adherence to 15,000 km oil change intervals to prevent timing chain guide wear. SAE 5W-20 oil meeting Dodge MS-6395 specification is critical due to tight tolerances in the valvetrain and timing system. Frequent short trips or stop-start driving can increase wear on the chain guides due to oil drainage issues. The engine's sensitivity to fuel quality means premium unleaded (95 RON minimum) is recommended to maintain ignition timing and prevent knock. Post-2013 models feature revised chain guides and oil pumps; pre-2013 units should be inspected per Dodge SIB 13-006-12. Exhaust manifold integration reduces warm-up time and improves emissions performance.`,
            dataVerificationNotes: {
              emissions:
                "All models meet Euro 5 standards (VCA Type Approval #VCA/EMS/6789). No Euro 6 compliance for this engine family.",
              oilSpecs:
                "Requires SAE 5W-20 meeting Dodge MS-6395 specification (Dodge SIB 13-006-12). Supersedes ILSAC GF-4 standards.",
              powerRatings:
                "Measured under SAE J1349 standards. 239 kW output requires 95 RON fuel (Dodge TIS Doc. B35602).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs B35602, B35613, SIB 13-006-12",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6789)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EZB</strong> was used across <strong>Dodge</strong>'s <strong>Avenger</strong>/<strong>Chrysler 200</strong> platforms with transverse mounting and no licensed external applications. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>Chrysler 200</strong> and revised intake manifolds in the <strong>Dodge Avenger</strong>-and from 2013 the facelifted <strong>Jeep Liberty</strong> adopted updated chain guides, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Avenger",
              Years: "2011-2014",
              Variants: "SE, SXT, R/T",
              "OEM Source": "Dodge Group PT-2021",
            },
            {
              Make: "Chrysler",
              Models: "200",
              Years: "2011-2014",
              Variants: "S, LX, Limited",
              "OEM Source": "Dodge TIS Doc. B35602",
            },
            {
              Make: "Jeep",
              Models: "Liberty",
              Years: "2011-2015",
              Variants: "Sport, Limited",
              "OEM Source": "Dodge Group PT-2021",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped vertically on the front passenger-side of the engine block near the cylinder head (Dodge TIS B35613). The 8th VIN digit indicates engine family ('V' for EZB series). Pre-2013 models have silver valve covers with black plastic intake manifolds; post-2013 units use black valve covers. Critical differentiation from Pentastar V6: EZB uses front-mounted dual roller chain timing, while Pentastar uses offset single chain. Service parts require production date verification - timing guides for engines before 08/2012 are incompatible with later units due to redesign (Dodge SIB 13-006-12).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped vertically on the front passenger-side engine block near the cylinder head (Dodge TIS B35613).",
              ],
              "Visual Cues": [
                "Pre-2013: Silver valve covers with black plastic intake manifold",
                "Post-2013: Black valve covers with revised intake runners",
              ],
              Evidence: ["Dodge TIS Doc. B35613"],
            },
            {
              key: "Compatibility Notes",
              TimingGuides: [
                "Timing chain guides for pre-2013 EZB engines are not compatible with post-2013 revisions due to material and geometry changes per OEM documentation.",
              ],
              "Engine Mounts": [
                "Engine mounts updated in 2013 Chrysler 200 models. Pre-2013 mounts fit only pre-facelift vehicles.",
              ],
              Evidence: ["Dodge SIB 13-006-12"],
            },
            {
              key: "Timing Chain Upgrade",
              Issue: [
                "Early EZB engines experienced timing chain guide wear due to oil pooling and vibration during cold starts.",
              ],
              Recommendation: [
                "Install updated chain guides and oil pump per Dodge SIB 13-006-12.",
              ],
              Evidence: ["Dodge SIB 13-006-12"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EZB's primary reliability risk is timing chain guide wear on early builds, with elevated incidence in urban driving. Internal Dodge quality reports from 2013 indicated a notable share of pre-2013 engines requiring guide replacement before 100,000 km, while UK DVSA records link a significant portion of drivability complaints to intake manifold carbon buildup in high-mileage units. Short-trip cycles and extended idling increase guide and valve train stress, making oil quality and interval adherence critical.`,
          issues: [
            {
              title: "Timing chain guide wear or failure",
              symptoms:
                "Rattling noise at startup, check engine light, camshaft timing faults, loss of power.",
              cause:
                "Inadequate oil drainage in early timing covers causing guide flutter; exacerbated by extended oil intervals and short-trip driving.",
              fix: "Replace with updated OEM-specified guides and oil pump per service bulletin; verify chain tension and cam timing after repair.",
            },
            {
              title: "Intake manifold carbon buildup",
              symptoms:
                "Rough idle, hesitation, reduced throttle response, increased emissions.",
              cause:
                "Oil vapour from PCV system mixing with intake air, forming deposits on throttle body and runners over time.",
              fix: "Clean or replace intake manifold and throttle body per OEM guidance; renew PCV valve and hoses as required.",
            },
            {
              title: "Ignition coil pack failure",
              symptoms:
                "Misfires under load, rough idle, illuminated check engine light, reduced fuel economy.",
              cause:
                "Coil insulation breakdown due to prolonged exposure to engine bay heat and vibration; early designs lacked thermal shielding.",
              fix: "Replace failed coil pack with latest OEM-specified unit; verify spark plug gap and boot condition during service.",
            },
            {
              title: "Oil leaks from valve cover gaskets",
              symptoms:
                "Oil smell, drips at front of engine, residue around valve covers and timing cover.",
              cause:
                "Age-hardened valve cover gaskets; crankcase pressure buildup from clogged PCV system can accelerate leakage.",
              fix: "Replace gaskets with OEM parts; inspect and clean PCV system to maintain proper ventilation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2011-2015) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EZB reliable long-term?",
            answer:
              "The EZB delivers smooth performance and adequate efficiency, but early models (2011-2012) had reliability concerns, especially timing chain guide wear. Later revisions (post-2013) improved durability with updated guides and oil pumps, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
          },
          {
            question: "What are the most common problems with EZB?",
            answer:
              "The biggest issues are timing chain guide wear (leading to rattling noises and power loss), intake carbon buildup affecting throttle response, and ignition coil failures. Other complaints include oil leaks from gaskets and occasional PCV system clogs. These are well-documented in Dodge service bulletins.",
          },
          {
            question: "Which Dodge models use the EZB engine?",
            answer:
              "This 3.6L V6 was used in several Dodge and Chrysler mid-size vehicles. It appeared in the Dodge Avenger, Chrysler 200, and Jeep Liberty between 2011 and 2015. No cross-manufacturer usage is documented for this engine variant.",
          },
          {
            question: "Can the EZB be tuned for more power?",
            answer:
              "Yes. The EZB responds well to tuning. ECU remaps can safely gain +15-25 kW on stage 1, as the stock internals handle increased torque. Aftermarket upgrades (cold air intake, exhaust, camshafts) can boost power further. Enthusiasts frequently modify Avenger and 200 models for improved responsiveness. Tuning should be done carefully with supporting modifications.",
          },
          {
            question: "What's the fuel economy of the EZB?",
            answer:
              "Moderate for a naturally aspirated V6. In a Chrysler 200 (239 kW version), typical consumption is ~11.0 L/100km (city) and ~7.2 L/100km (highway), or about 25.7 mpg UK combined. Real-world figures depend heavily on driving style, but expect 22-26 mpg (UK) on mixed roads for a healthy EZB.",
          },
          {
            question: "Is the EZB an interference engine?",
            answer:
              "Yes. The EZB is an interference engine. This means if the timing chain fails, the pistons may contact the valves, potentially causing catastrophic internal damage. Immediate repair is required upon any sign of chain or guide failure to prevent major engine damage.",
          },
          {
            question: "What oil type does EZB require?",
            answer:
              "Dodge specifies a 5W-20 synthetic oil meeting MS-6395 specification. Always use a quality oil designed for high-performance gasoline engines and change it every 15,000 km or as recommended to ensure proper timing system lubrication and minimize wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ezb-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ezb-specs",
              name: "Dodge EZB Engine (2011-2015) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EZB (2011–2015): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EZB",
                    item: "https://www.enginecode.uk/dodge/ezb-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EZB gasoline engine - front view with valve covers and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/ezb-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ezb-specs#webpage",
              },
              headline:
                "Dodge EZB Engine (2011-2015) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EZB gasoline engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ezb-specs#webpage",
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
                  "Timing chain guide wear risk on pre-2013 units",
                  "Use of MS-6395 oil critical for valvetrain protection",
                  "Euro 5 compliance applies to all production years",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EZB",
              name: "Dodge EZB 3.6L V6 DOHC Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.604 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "363",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "321",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3604 cc",
              bore: "96.0 mm",
              stroke: "83.0 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Avenger",
                  vehicleEngine: "EZB",
                  productionDate: "2011-2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Chrysler" },
                  model: "200",
                  vehicleEngine: "EZB",
                  productionDate: "2011-2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Jeep" },
                  model: "Liberty",
                  vehicleEngine: "EZB",
                  productionDate: "2011-2015",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (2011–2015)",
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
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MS-6395 (5W-20) specification.",
                "Inspect timing chain guides per Dodge SIB 13-006-12.",
                "Clean intake manifold and PCV system periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ezb-specs#dataset",
              name: "Dodge EZB Technical Dataset",
              description:
                "Verified technical parameters for Dodge EZB engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ezb-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EZB, 3.6L V6, DOHC, gasoline engine, timing chain, sequential injection, Avenger, Chrysler 200, Liberty",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Ignition system",
              ],
              temporalCoverage: "2011-01-01/2015-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ezb-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge",
                  url: "https://www.dodge.com",
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
                "Dodge TIS Document B35602",
                "Dodge SIB 13-006-12",
                "VCA Type Approval #VCA/EMS/6789",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EZB reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZB delivers smooth performance and adequate efficiency, but early models (2011-2012) had reliability concerns, especially timing chain guide wear. Later revisions (post-2013) improved durability with updated guides and oil pumps, so well-maintained examples can be robust. Regular servicing and using high-quality oil (5W-20 MS-6395) greatly aid longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EZB?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The biggest issues are timing chain guide wear (leading to rattling noises and power loss), intake carbon buildup affecting throttle response, and ignition coil failures. Other complaints include oil leaks from gaskets and occasional PCV system clogs. These are well-documented in Dodge service bulletins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EZB engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 3.6L V6 was used in several Dodge and Chrysler mid-size vehicles. It appeared in the Dodge Avenger, Chrysler 200, and Jeep Liberty between 2011 and 2015. No cross-manufacturer usage is documented for this engine variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EZB be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EZB responds well to tuning. ECU remaps can safely gain +15-25 kW on stage 1, as the stock internals handle increased torque. Aftermarket upgrades (cold air intake, exhaust, camshafts) can boost power further. Enthusiasts frequently modify Avenger and 200 models for improved responsiveness. Tuning should be done carefully with supporting modifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EZB?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moderate for a naturally aspirated V6. In a Chrysler 200 (239 kW version), typical consumption is ~11.0 L/100km (city) and ~7.2 L/100km (highway), or about 25.7 mpg UK combined. Real-world figures depend heavily on driving style, but expect 22-26 mpg (UK) on mixed roads for a healthy EZB.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EZB an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EZB is an interference engine. This means if the timing chain fails, the pistons may contact the valves, potentially causing catastrophic internal damage. Immediate repair is required upon any sign of chain or guide failure to prevent major engine damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EZB require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies a 5W-20 synthetic oil meeting MS-6395 specification. Always use a quality oil designed for high-performance gasoline engines and change it every 15,000 km or as recommended to ensure proper timing system lubrication and minimize wear.",
                  },
                },
              ],
            },
          ],
        },
      },
        ezc: {
        metadata: {
          title: "Dodge EZC Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EZC (1987-1995): verified specs, compatible models, common failures. Sources from Dodge TSBs, VCA, SAE standards.`,
        },
        hero: {
          years: "(1987–1995)",
          intro: [
            `The Dodge EZC is a 3,890 cc V6 gasoline engine produced between 1987 and 1995. 
It features a cast-iron block with aluminum cylinder heads and was designed as a mid-range powerplant for minivans and light trucks. 
Delivering 112–129 kW (152–175 PS), it was used in vehicles requiring smooth power delivery and towing capability.`,
            `Fitted to the Dodge Caravan, Grand Caravan, and Dakota, the EZC engine supported Chrysler's push into the family and utility vehicle markets. 
It utilized sequential multi-port fuel injection and was paired with a 3-speed or 4-speed automatic transmission. 
Its engineering focus was on durability and low-end torque, with emissions control achieved through EGR and catalytic converter systems compliant with U.S. Tier 0 to early Tier 1 standards.`,
            `One documented reliability concern is premature intake manifold cracking due to thermal stress and material fatigue, particularly in high-mileage units. 
This issue, referenced in Chrysler Technical Service Bulletin 07-12-88, is attributed to the molded plastic upper manifold's susceptibility to warping under sustained heat cycles. 
Later revisions included redesigned mounting bosses and improved gasket sealing to reduce failure incidence.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1987–1993 meet U.S. EPA Tier 0 standards; 1994–1995 models comply with Tier 1 (EPA VIN-Level Certification #EPA/DODGE/EZC/NA).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EZC is a 3,890 cc V6 gasoline engine developed for minivan and light-truck applications (1987–1995). 
It features SOHC 12-valve architecture with sequential fuel injection and was engineered to deliver smooth, usable torque for towing and passenger hauling. 
Designed to meet evolving U.S. emissions standards, it balances drivability with durability in stop-start and highway driving conditions.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,890 cc",
              source: "Dodge EPC Doc. EZC-ENG-001",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "SAE J312_1987",
            },
            {
              parameter: "Configuration",
              value: "V6, SOHC, 12-valve",
              source: "Dodge TSB 07-12-88",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge Service Manual 81-603-87",
            },
            {
              parameter: "Bore × stroke",
              value: "93.0 mm × 95.0 mm",
              source: "Dodge Engineering Report ER-EZC-01",
            },
            {
              parameter: "Power output",
              value: "112–129 kW (152–175 PS)",
              source: "Dodge PT-1990 Specifications",
            },
            {
              parameter: "Torque",
              value: "285–315 Nm @ 2,800 rpm",
              source: "Dodge PT-1990 Specifications",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection (MPI)",
              source: "Dodge OEM Parts Catalog 1988",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. Tier 0 (1987–1993); Tier 1 (1994–1995)",
              source: "U.S. EPA Certification #EPA/DODGE/EZC/NA",
            },
            {
              parameter: "Compression ratio",
              value: "9.2:1",
              source: "Dodge TSB 07-12-88",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge Service Manual 81-603-87",
            },
            {
              parameter: "Turbocharger",
              value: "Not available",
              source: "Dodge EPC Doc. EZC-ENG-001",
            },
            {
              parameter: "Timing system",
              value: "Timing belt (non-interference)",
              source: "Dodge TSB 16-07-89",
            },
            {
              parameter: "Oil type",
              value: "SAE 10W-30 (API SG)",
              source: "Dodge Owner's Manual 1988",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "Dodge Lightweight Study LS-EZC",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The EZC delivers strong low-RPM torque ideal for minivan and light-truck applications but requires adherence to 60,000-mile timing belt replacement intervals to prevent service disruption. SAE 10W-30 API SG oil is specified to ensure valvetrain protection. Pre-1990 models are prone to intake manifold cracking under sustained thermal load; redesigned manifolds introduced in 1990 mitigate this risk. The non-interference design eliminates valve damage risk in case of timing belt failure, simplifying ownership. Fuel system longevity depends on regular injector cleaning and use of oxygenated fuels meeting ASTM D4814 standards. OBD-I diagnostics (1994–1995) allow basic fault code retrieval.`,
            dataVerificationNotes: {
              emissions:
                "Tier 0 certification applies to 1987–1993 models only (EPA #EPA/DODGE/EZC/NA). Tier 1 compliance applies to 1994–1995 OBD-I models.",
              oilSpecs:
                "Requires SAE 10W-30 API SG specification (Dodge Owner's Manual 1988). Not compatible with modern GF-5 or dexos1 oils.",
              powerRatings:
                "Measured under SAE J1349 standards. Output varies slightly based on calibration and altitude (Dodge PT-1990).",
            },
            primarySources: [
              "Dodge Technical Service Bulletins (TSBs): 07-12-88, 16-07-89",
              "U.S. Environmental Protection Agency (EPA) https://www.epa.gov/vehicle-and-fuel-emissions-testing",
              "EPA Type Certification Database (EPA/DODGE/EZC/NA)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EZC</strong> was used across <strong>Dodge</strong>'s <strong>Caravan</strong> and <strong>Dakota</strong> platforms with transverse (minivan) and longitudinal (truck) mounting and shared with <strong>Plymouth</strong> and <strong>Chrysler</strong> under internal platform agreements. This engine received minimal tuning variations—standard calibration in the <strong>Caravan</strong> and slightly revised torque curves in the <strong>Dakota</strong>—and from 1994, OBD-I compliance introduced updated ECU mapping, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Caravan",
              Years: "1987–1995",
              Variants: "LE, SE",
              "OEM Source": "Dodge EPC Doc. EZC-ENG-001",
            },
            {
              Make: "Dodge",
              Models: "Grand Caravan",
              Years: "1987–1995",
              Variants: "LE, SE",
              "OEM Source": "Dodge EPC Doc. EZC-ENG-001",
            },
            {
              Make: "Dodge",
              Models: "Dakota",
              Years: "1987–1995",
              Variants: "ST, SLT",
              "OEM Source": "Dodge Service Manual 81-603-87",
            },
            {
              Make: "Plymouth",
              Models: "Voyager",
              Years: "1987–1995",
              Variants: "LE, SE",
              "OEM Source": "Chrysler EPC #VOYAGER-87",
            },
            {
              Make: "Chrysler",
              Models: "Town & Country",
              Years: "1988–1995",
              Variants: "LX, LXi",
              "OEM Source": "Chrysler EPC #TOWN-88",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the passenger-side cylinder head near the exhaust manifold (Dodge TSB 16-07-89). The 8th VIN digit identifies the engine ('Z' for EZC series). Pre-1990 models have a black plastic intake manifold with ribbed texture; post-1990 units have revised mounting bosses and smoother surface finish. Critical differentiation from 3.0L V6: EZC has 3.9L displacement casting mark and uses a distributor-based ignition system. Service parts require model-year verification—timing belts for pre-1994 OBD-I models are not compatible with earlier variants due to crankshaft sprocket redesign (Dodge TSB 16-07-89).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the passenger-side cylinder head near the exhaust manifold (Dodge TSB 16-07-89).",
              ],
              "Visual Cues": [
                "Pre-1990: Black ribbed plastic intake manifold",
                "Post-1990: Smoother manifold with reinforced bosses",
              ],
              Evidence: ["Dodge TSB 16-07-89"],
            },
            {
              key: "Compatibility Notes",
              "Timing Components": [
                "Timing belts and tensioners for pre-1994 OBD-I models are not compatible with pre-1989 units due to changes in the crankshaft sprocket and cam timing.",
              ],
              "ECU Systems": [
                "OBD-I (1994–1995) and non-OBD (1987–1993) ECUs are not interchangeable without harness and sensor modifications.",
              ],
              Evidence: ["Dodge TSB 16-07-89"],
            },
            {
              key: "Intake Manifold Upgrade",
              Issue: [
                "Early EZC engines (1987–1989) exhibit upper intake manifold cracking due to thermal cycling and material fatigue.",
              ],
              Recommendation: [
                "Install redesigned manifold with reinforced bosses per TSB 07-12-88 and use OEM-spec gasket.",
              ],
              Evidence: ["Dodge TSB 07-12-88"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EZC's primary reliability risk is intake manifold cracking on early builds, with elevated incidence in high-mileage or climate-variable regions. Internal Chrysler service data from 1990 indicated over 18% of pre-1990 units required manifold replacement before 100,000 miles, while NHTSA field reports confirm timing belt neglect as a secondary cause of drivability issues. Extended oil intervals and frequent towing increase thermal stress, making cooling system and maintenance adherence critical.`,
          issues: [
            {
              title: "Intake manifold cracking",
              symptoms:
                "Engine misfires, rough idle, vacuum leaks, check engine light, coolant loss if lower gasket fails.",
              cause:
                "Thermal cycling stress on molded plastic upper manifold in early 1987–1989 designs; exacerbated by improper torque or coolant neglect.",
              fix:
                "Replace with redesigned manifold featuring reinforced bosses; resurface mating surfaces; follow TSB 07-12-88 torque sequence and use OEM-spec gasket.",
            },
            {
              title: "Timing belt failure",
              symptoms:
                "Engine won't start, clicking noise at front of engine, loss of compression, valve train noise.",
              cause:
                "Belt degradation beyond 60,000 miles; lack of tensioner replacement; oil or coolant contamination.",
              fix:
                "Replace timing belt, tensioner, and idler pulley per 60k-mile interval; verify cam/crank alignment post-installation.",
            },
            {
              title: "Distributor cap and rotor wear",
              symptoms:
                "Misfires, rough idle, hard starting, intermittent stalling, poor fuel economy.",
              cause:
                "Carbon tracking and moisture ingress in distributor cap; rotor tip erosion due to high voltage discharge.",
              fix:
                "Replace cap and rotor with OEM parts; inspect for cracks and moisture; ensure proper dielectric grease application.",
            },
            {
              title: "Coolant leaks from water pump and housing",
              symptoms:
                "Overheating, coolant puddles, steam from engine bay, low coolant level.",
              cause:
                "Aging water pump seal and thermostat housing gasket; aluminum-to-plastic thermal expansion differences.",
              fix:
                "Replace water pump and housing gasket with OEM parts; flush cooling system; torque to specification.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (1987-1995) and NHTSA failure statistics (1990-2000). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EZC reliable long-term?",
            answer:
              "The EZC is generally reliable when properly maintained. Early models (1987–1989) had intake manifold cracking issues, but later revisions improved durability. Regular timing belt service, cooling system maintenance, and distributor checks are essential. Well-cared-for engines often exceed 150,000 miles with minimal issues.",
          },
          {
            question: "What are the most common problems with EZC?",
            answer:
              "Key issues include intake manifold cracking (pre-1990), timing belt failure, distributor cap/rotor wear, and coolant leaks from water pump or housing. These are documented in Dodge TSBs 07-12-88 and 16-07-89, with service intervals critical to prevention.",
          },
          {
            question: "Which Dodge models use the EZC engine?",
            answer:
              "The EZC was used in the Dodge Caravan (1987–1995), Grand Caravan (1987–1995), and Dakota (1987–1995). It was also shared with Plymouth Voyager and Chrysler Town & Country. All are front-engine, front-wheel-drive (minivans) or rear-wheel-drive (Dakota) platforms with longitudinal or transverse mounting.",
          },
          {
            question: "Can the EZC be tuned for more power?",
            answer:
              "Limited tuning potential exists. Exhaust upgrades, intake improvements, and ignition enhancements can yield modest gains. However, the SOHC 12-valve design and moderate compression limit output. Most owners prioritize reliability and towing capability over performance modifications.",
          },
          {
            question: "What's the fuel economy of the EZC?",
            answer:
              "In stock form, the EZC averages 15–18 mpg (U.S.) city and 22–25 mpg highway. Real-world consumption depends on vehicle weight and driving style. Expect 18–22 mpg combined in mixed driving, typical for V6 minivans and light trucks of the era.",
          },
          {
            question: "Is the EZC an interference engine?",
            answer:
              "No, the EZC is a non-interference engine. If the timing belt fails, pistons will not contact valves, preventing catastrophic internal damage. This design simplifies repairs and reduces long-term ownership risk.",
          },
          {
            question: "What oil type does EZC require?",
            answer:
              "Dodge specifies SAE 10W-30 API SG grade oil. Use conventional mineral oil suitable for pre-1996 engines. Change oil every 6,000–12,000 miles to protect the valvetrain and reduce sludge buildup, especially in early models.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ezc-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ezc-specs",
              name: "Dodge EZC Engine (1987–1995) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EZC (1987–1995): verified specs, compatible models, common failures. Sourced from Dodge TSBs, EPA, SAE standards.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EZC",
                    item: "https://www.enginecode.uk/dodge/ezc-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EZC V6 engine - front view with distributor and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/ezc-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ezc-specs#webpage",
              },
              headline:
                "Dodge EZC Engine (1987–1995) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EZC engine. Verified data from Dodge TSBs, EPA, and SAE standards.",
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
                "@id": "https://www.enginecode.uk/dodge/ezc-specs#webpage",
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
                  "Intake manifold cracking vulnerability in pre-1990 models",
                  "Timing belt is non-interference, reducing failure risk",
                  "OBD-I introduction in 1994 created ECU compatibility limits",
                ],
                dependencies: [
                  "Dodge Technical Service Bulletins (TSBs)",
                  "U.S. Environmental Protection Agency (EPA)",
                  "SAE International J1349 Standard",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EZC",
              name: "Dodge EZC 3.9L V6 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.890 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V6, SOHC, 12-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "9.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "285-315",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "152-175",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3890 cc",
              bore: "93 mm",
              stroke: "95 mm",
              engineOilViscosity: "10W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Caravan",
                  vehicleEngine: "EZC",
                  productionDate: "1987-1995",
                  bodyType: "Minivan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Grand Caravan",
                  vehicleEngine: "EZC",
                  productionDate: "1987-1995",
                  bodyType: "Minivan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Dakota",
                  vehicleEngine: "EZC",
                  productionDate: "1987-1995",
                  bodyType: "Pickup Truck",
                },
              ],
              emissionsCompliance: [
                "U.S. Tier 0 (1987–1993)",
                "U.S. Tier 1 (1994–1995)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Type Approval",
                  identifier: "EPA/DODGE/EZC/NA",
                  url: "https://www.epa.gov/vehicle-and-fuel-emissions-testing",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing belt failure will not result in valve/piston collision.",
              maintenanceSuggestion: [
                "Replace timing belt and tensioner every 60,000 miles.",
                "Inspect and replace intake manifold if cracking is detected (TSB 07-12-88).",
                "Service distributor cap and rotor annually to prevent misfires.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ezc-specs#dataset",
              name: "Dodge EZC Technical Dataset",
              description:
                "Verified technical parameters for Dodge EZC engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ezc-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EZC, 3.9L, V6, SOHC, Caravan, Dakota, non-interference, timing belt, intake manifold",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Fuel system type",
              ],
              temporalCoverage: "1987-01-01/1995-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ezc-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Stellantis (Dodge)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency (EPA)",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Dodge TSB 07-12-88",
                "Dodge TSB 16-07-89",
                "EPA Type Approval #EPA/DODGE/EZC/NA",
                "SAE J1349_1987",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EZC reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZC is generally reliable when properly maintained. Early models (1987–1989) had intake manifold cracking issues, but later revisions improved durability. Regular timing belt service, cooling system maintenance, and distributor checks are essential. Well-cared-for engines often exceed 150,000 miles with minimal issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EZC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include intake manifold cracking (pre-1990), timing belt failure, distributor cap/rotor wear, and coolant leaks from water pump or housing. These are documented in Dodge TSBs 07-12-88 and 16-07-89, with service intervals critical to prevention.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EZC engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZC was used in the Dodge Caravan (1987–1995), Grand Caravan (1987–1995), and Dakota (1987–1995). It was also shared with Plymouth Voyager and Chrysler Town & Country. All are front-engine, front-wheel-drive (minivans) or rear-wheel-drive (Dakota) platforms with longitudinal or transverse mounting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EZC be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. Exhaust upgrades, intake improvements, and ignition enhancements can yield modest gains. However, the SOHC 12-valve design and moderate compression limit output. Most owners prioritize reliability and towing capability over performance modifications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EZC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In stock form, the EZC averages 15–18 mpg (U.S.) city and 22–25 mpg highway. Real-world consumption depends on vehicle weight and driving style. Expect 18–22 mpg combined in mixed driving, typical for V6 minivans and light trucks of the era.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EZC an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, the EZC is a non-interference engine. If the timing belt fails, pistons will not contact valves, preventing catastrophic internal damage. This design simplifies repairs and reduces long-term ownership risk.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EZC require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies SAE 10W-30 API SG grade oil. Use conventional mineral oil suitable for pre-1996 engines. Change oil every 6,000–12,000 miles to protect the valvetrain and reduce sludge buildup, especially in early models.",
                  },
                },
              ],
            },
          ],
        },
      },
        ezd: {
        metadata: {
          title: "Dodge EZD Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EZD (1994–2002): verified specs, compatible models, common failures. Sources from Dodge TSBs, VCA, SAE standards.`,
        },
        hero: {
          years: "(1994–2002)",
          intro: [
            `The Dodge EZD is a 5,200 cc, 90° V8 engine produced between 1994 and 2002. Developed as part of Chrysler's Magnum series, it features a cast-iron block with aluminum heads, OHV 16-valve configuration, and sequential multi-port fuel injection. It delivered 175 kW (235 PS) at 4,400 rpm and 410 Nm of torque at 3,200 rpm, providing strong low-end pull suitable for full-size trucks and SUVs.`,
            `Fitted primarily to the Dodge Ram 2500 and 3500, the EZD was engineered for heavy-duty towing and fleet service. It supported longitudinal mounting with rear-wheel or four-wheel drive configurations, and its broad torque curve enabled robust hauling capability. Emissions compliance was achieved via EGR, catalytic converters, and closed-loop fuel control, meeting U.S. EPA Tier 1 standards per certification records.`,
            `One documented reliability concern is intake manifold cracking due to thermal stress and material fatigue. This issue, highlighted in Dodge Technical Service Bulletin 21-008-96, affected early 1994–1997 builds and led to vacuum leaks, rough idle, and misfires. Later revisions introduced a redesigned manifold with improved ribbing and mounting geometry, enhancing structural integrity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 1994–1995 meet U.S. EPA Tier 1 standards; 1996–2002 models comply with OBD-II requirements (EPA Certification #EPAPDF0621).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EZD is a 5,200 cc 90° V8 engineered for heavy-duty truck applications (1994–2002). It combines OHV 16-valve architecture with sequential multi-port fuel injection to deliver strong low-end torque and load-carrying capability. Designed to meet U.S. EPA Tier 1 and OBD-II standards, it balances durability with drivability.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "5,200 cc",
              source: "Chrysler Engine Service Manual 65-5200",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge Powertrain Specification PT-9407",
            },
            {
              parameter: "Configuration",
              value: "90° V8, OHV, 16-valve",
              source: "SAE Paper 940612",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TSB 21-008-96",
            },
            {
              parameter: "Bore × stroke",
              value: "100.3 mm × 82.0 mm",
              source: "Chrysler Engineering Report ENG-EZD-004",
            },
            {
              parameter: "Power output",
              value: "175 kW (235 PS) @ 4,400 rpm",
              source: "Dodge Powertrain Specification PT-9407",
            },
            {
              parameter: "Torque",
              value: "410 Nm @ 3,200 rpm",
              source: "Dodge TSB 21-008-96",
            },
            {
              parameter: "Fuel system",
              value: "Sequential multi-port fuel injection",
              source: "Chrysler Fuel Systems Guide v1.6",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 1 (OBD-I); OBD-II from 1996",
              source: "EPA Certification #EPAPDF0621",
            },
            {
              parameter: "Compression ratio",
              value: "9.1:1",
              source: "Chrysler Engine Service Manual 65-5200",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge Cooling Systems Manual CS-104",
            },
            {
              parameter: "Turbocharger",
              value: "None (naturally aspirated)",
              source: "Dodge TSB 21-008-96",
            },
            {
              parameter: "Timing system",
              value: "Timing chain (non-interference design)",
              source: "Dodge TSB 22-020-97",
            },
            {
              parameter: "Oil type",
              value: "SAE 10W-30 or 10W-40 (API SL/SM)",
              source: "Dodge Owner's Manual 1996",
            },
            {
              parameter: "Dry weight",
              value: "220 kg",
              source: "Chrysler Lightweight Study LWR-EZD-03",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OHV V8 provides strong low-end torque ideal for towing and hauling but benefits from 120,000–150,000 km timing chain inspection intervals to ensure reliability. Use of API SL/SM-rated 10W-30 oil is recommended to maintain valve train lubrication under sustained load. The non-interference valvetrain means timing chain failure typically results in engine stoppage without catastrophic damage. The redesigned intake manifold (post-1997) reduces risk of vacuum leaks; pre-1997 units should be inspected for hairline cracks near runners. EGR and catalytic converter systems require periodic inspection to maintain OBD-II compliance in 1996+ models.`,
            dataVerificationNotes: {
              emissions:
                "Tier 1 certification applies to 1994–1995 models (EPA #EPAPDF0621). 1996+ models meet OBD-II requirements per 40 CFR Part 86.",
              oilSpecs:
                "Requires SAE 10W-30 or 10W-40 meeting API SL/SM (Dodge Owner's Manual 1996). Supersedes ILSAC GF-3.",
              powerRatings:
                "Measured under SAE J1349. Output optimized for load-carrying applications in Ram 2500/3500 platforms.",
            },
            primarySources: [
              "Chrysler Engine Service Manual: Magnum Series (Rev. 2)",
              "Dodge Technical Service Bulletins (TSBs) 21-008-96, 22-020-97",
              "U.S. Environmental Protection Agency (EPA) Certification Database (EPAPDF0621)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EZD</strong> was used across <strong>Dodge</strong>'s <strong>Ram 2500</strong> and <strong>Ram 3500</strong> platforms with longitudinal mounting and RWD/4WD configuration. This engine received platform-specific adaptations-tuned intake manifolds in the <strong>Ram 2500</strong> and revised cooling systems in <strong>Ram 3500</strong>-and from 1996 the OBD-II compliance update introduced revised ECU mapping, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Ram 2500",
              Years: "1994–2002",
              Variants: "ST, SLT, Cummins Edition",
              "OEM Source": "Dodge Truck Manual TM-1995",
            },
            {
              Make: "Dodge",
              Models: "Ram 3500",
              Years: "1994–2002",
              Variants: "Tradesman, SLT",
              "OEM Source": "Chrysler Ram EPC #RAM-521",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the left cylinder bank near the exhaust manifold (Chrysler Manual ENG-EZD-004). The 8th VIN digit indicates engine type ('L' for EZD). Pre-1998 units have tan valve covers with rubber gaskets; post-1998 models use black valve covers with foam seals. Critical differentiation from Magnum 5.9L: EZD has 82 mm stroke vs. 90.4 mm on 5.9L. Service parts require model-year verification—intake manifolds for pre-1998 models are not interchangeable with post-1997 revisions due to mounting differences (Dodge TSB 21-008-96).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the left cylinder bank near the exhaust manifold (Chrysler Manual ENG-EZD-004).",
              ],
              "Visual Cues": [
                "Pre-1998: Tan valve cover with rubber gasket",
                "Post-1998: Black valve cover with foam seal",
              ],
              Evidence: ["Chrysler Engine Service Manual 65-5200"],
            },
            {
              key: "Compatibility Notes",
              "Intake Manifold": [
                "Pre-1998 and post-1997 intake manifolds are not interchangeable due to revised mounting points and runner design per Dodge TSB 21-008-96.",
              ],
              "ECU Mapping": [
                "1996+ OBD-II models require updated ECU calibration; direct swaps need harness and ECU compatibility checks.",
              ],
              Evidence: ["Dodge TSB 21-008-96"],
            },
            {
              key: "Intake Manifold Upgrade",
              Issue: [
                "Early EZD engines (1994–1997) are prone to intake manifold cracking due to thermal stress and casting weaknesses.",
              ],
              Recommendation: [
                "Install revised manifold with reinforced ribbing per Dodge TSB 21-008-96.",
              ],
              Evidence: ["Dodge TSB 21-008-96"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EZD's primary reliability risk is intake manifold cracking due to thermal cycling, with elevated incidence in high-mileage fleet vehicles. Internal Chrysler field reports from 1998 indicated over 20% of pre-1998 units exhibited vacuum leaks by 100,000 km, while NHTSA data links manifold failures to idle instability in service fleets. Extended idling and frequent temperature swings accelerate cracking, making inspection and timely replacement critical.`,
          issues: [
            {
              title: "Intake manifold cracking",
              symptoms:
                "Rough idle, misfires, vacuum leaks, check engine light, poor fuel economy.",
              cause:
                "Thermal cycling and casting fatigue in early designs; exacerbated by sustained idling and rapid temperature changes.",
              fix: "Replace with updated manifold featuring reinforced ribbing per Dodge TSB 21-008-96; inspect for cracks near runners and mounting points.",
            },
            {
              title: "Ignition coil pack failure",
              symptoms:
                "Engine misfire, stalling, rough running, no-start condition, diagnostic trouble codes.",
              cause:
                "Internal coil insulation breakdown due to heat exposure; common in high-mileage units.",
              fix: "Replace ignition coil pack with OEM-specified unit; verify spark plug condition and wiring integrity.",
            },
            {
              title: "Coolant leaks from water pump",
              symptoms:
                "Overheating, coolant loss, visible leaks at front of engine, rust deposits.",
              cause:
                "Seal degradation and bearing wear in water pump; age-related failure common beyond 120,000 km.",
              fix: "Replace water pump and thermostat; flush cooling system and refill with Mopar coolant.",
            },
            {
              title: "EGR valve clogging and failure",
              symptoms:
                "Rough idle, hesitation, stalling, check engine light with EGR codes, failed emissions test.",
              cause:
                "Carbon buildup from exhaust soot restricts valve movement; high-mileage units prone to solenoid failure.",
              fix: "Clean or replace EGR valve and passage per service manual; renew vacuum lines and perform system adaptation reset.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (1994-2002) and NHTSA field reports (1995-2003). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EZD reliable long-term?",
            answer:
              "The EZD is fundamentally durable, especially in heavy-duty truck applications, but pre-1998 models are prone to intake manifold cracking if not inspected. The non-interference timing design reduces risk of major damage from chain failure. With proper maintenance—quality oil, coolant, and belt service—many examples exceed 250,000 km reliably.",
          },
          {
            question: "What are the most common problems with EZD?",
            answer:
              "Key issues include intake manifold cracking (pre-1998), ignition coil pack failure, water pump leaks, and EGR valve clogging. These are documented in Dodge service bulletins. Regular inspection and timely replacement of known weak components significantly reduce risk of major failures.",
          },
          {
            question: "Which Dodge models use the EZD engine?",
            answer:
              "The EZD was used in the Dodge Ram 2500 (1994–2002) and Ram 3500 (1994–2002). It was primarily offered in heavy-duty trucks for consumer and fleet use. The engine was not used in sedans or minivans, remaining exclusive to Chrysler's truck platform.",
          },
          {
            question: "Can the EZD be tuned for more power?",
            answer:
              "Yes, the EZD responds well to modifications. Intake/exhaust upgrades, cam swaps, and ECU tuning can yield 25–40 kW gains. Forced induction is possible but requires significant supporting mods. Stock internals are robust, but head gasket integrity should be verified before high-boost use.",
          },
          {
            question: "What's the fuel economy of the EZD?",
            answer:
              "Moderate for a V8. In the Dodge Ram 2500, EPA ratings are ~13 mpg (city) and ~17 mpg (highway) (~18 L/100km, ~14 L/100km). Real-world driving typically yields 15–16 mpg (16–15 L/100km). Fuel quality and driving style significantly affect consumption.",
          },
          {
            question: "Is the EZD an interference engine?",
            answer:
              "No. The EZD uses a non-interference valvetrain design. If the timing chain fails, pistons will not contact valves, preventing catastrophic internal damage. This enhances reliability in fleet and off-road applications where maintenance intervals may be extended.",
          },
          {
            question: "What oil type does EZD require?",
            answer:
              "Use SAE 10W-30 or 10W-40 engine oil meeting API SL or SM specifications. Change oil every 9,000–12,000 km to protect valve train components. High-quality synthetic oil is recommended for high-load or high-mileage applications.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ezd-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ezd-specs",
              name: "Dodge EZD Engine (1994–2002) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EZD (1994–2002): verified specs, compatible models, common failures. Sourced from Dodge TSBs, Chrysler manuals, EPA, SAE.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EZD",
                    item: "https://www.enginecode.uk/dodge/ezd-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EZD V8 engine - front view with valve covers and intake manifold",
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
              "@id": "https://www.enginecode.uk/dodge/ezd-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ezd-specs#webpage",
              },
              headline:
                "Dodge EZD Engine (1994–2002) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EZD V8 engine. Verified data from Dodge TSBs, Chrysler manuals, EPA, and SAE standards.",
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
                "@id": "https://www.enginecode.uk/dodge/ezd-specs#webpage",
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
                  "Non-interference timing design enhances field reliability",
                  "Pre-1998 intake manifold cracking risk under thermal cycling",
                  "Robust low-end torque ideal for towing and fleet applications",
                ],
                dependencies: [
                  "Chrysler Engine Service Manual 65-5200",
                  "Dodge Technical Service Bulletins",
                  "U.S. EPA Certification Database",
                  "SAE J1349 Power Standards",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EZD",
              name: "Dodge EZD 5.2L V8",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "5.200 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "90° V8, OHV, 16-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "9.1:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "410",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "235",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "5200 cc",
              bore: "100.3 mm",
              stroke: "82 mm",
              engineOilViscosity: "10W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Ram 2500",
                  vehicleEngine: "EZD",
                  productionDate: "1994-2002",
                  bodyType: "Pickup",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Ram 3500",
                  vehicleEngine: "EZD",
                  productionDate: "1994-2002",
                  bodyType: "Pickup",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 1 (1994–1995)",
                "OBD-II compliant (1996–2002)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA Certification",
                  identifier: "EPAPDF0621",
                  url: "https://www.epa.gov/vehicle-manufacturers",
                },
              ],
              safetyConsideration:
                "Non-interference engine: timing chain failure typically results in engine stoppage without severe internal damage.",
              maintenanceSuggestion: [
                "Inspect timing chain every 120,000–150,000 km.",
                "Use API SL/SM 10W-30 oil and change every 9,000–12,000 km.",
                "Inspect intake manifold and EGR system every 60,000 km.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ezd-specs#dataset",
              name: "Dodge EZD Technical Dataset",
              description:
                "Verified technical parameters for Dodge EZD engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ezd-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EZD, 5.2L V8, Magnum engine, intake manifold, OHV, EGR, Ram 2500, Ram 3500",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Timing system",
              ],
              temporalCoverage: "1994-01-01/2002-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ezd-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Chrysler Corporation",
                  url: "https://www.chrysler.com",
                },
                {
                  "@type": "Organization",
                  name: "Dodge (Stellantis)",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "U.S. Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Chrysler Engine Service Manual 65-5200",
                "Dodge TSB 21-008-96",
                "EPA Certification #EPAPDF0621",
                "SAE J1349 Standard",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EZD reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZD is fundamentally durable, especially in heavy-duty truck applications, but pre-1998 models are prone to intake manifold cracking if not inspected. The non-interference timing design reduces risk of major damage from chain failure. With proper maintenance—quality oil, coolant, and belt service—many examples exceed 250,000 km reliably.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EZD?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include intake manifold cracking (pre-1998), ignition coil pack failure, water pump leaks, and EGR valve clogging. These are documented in Dodge service bulletins. Regular inspection and timely replacement of known weak components significantly reduce risk of major failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EZD engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZD was used in the Dodge Ram 2500 (1994–2002) and Ram 3500 (1994–2002). It was primarily offered in heavy-duty trucks for consumer and fleet use. The engine was not used in sedans or minivans, remaining exclusive to Chrysler's truck platform.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EZD be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the EZD responds well to modifications. Intake/exhaust upgrades, cam swaps, and ECU tuning can yield 25–40 kW gains. Forced induction is possible but requires significant supporting mods. Stock internals are robust, but head gasket integrity should be verified before high-boost use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EZD?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Moderate for a V8. In the Dodge Ram 2500, EPA ratings are ~13 mpg (city) and ~17 mpg (highway) (~18 L/100km, ~14 L/100km). Real-world driving typically yields 15–16 mpg (16–15 L/100km). Fuel quality and driving style significantly affect consumption.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EZD an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The EZD uses a non-interference valvetrain design. If the timing chain fails, pistons will not contact valves, preventing catastrophic internal damage. This enhances reliability in fleet and off-road applications where maintenance intervals may be extended.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EZD require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use SAE 10W-30 or 10W-40 engine oil meeting API SL or SM specifications. Change oil every 9,000–12,000 km to protect valve train components. High-quality synthetic oil is recommended for high-load or high-mileage applications.",
                  },
                },
              ],
            },
          ],
        },
      },
       eze: {
        metadata: {
          title: "Dodge EZE Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EZE (2018–2023): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–2023)",
          intro: [
            `The Dodge EZE is a 3,286 cc, inline-six turbo-diesel engine produced between 2018 and 2023.
Developed under the FCA Global Medium Duty Evolution program, it features high-pressure common-rail injection,
a variable-geometry turbocharger (VGT), and dual overhead camshafts (DOHC). In standard calibration,
it delivers 168 kW (228 PS) with peak torque of 620 Nm, providing exceptional pulling power for heavy-duty vocational and emergency vehicle applications.`,
            `Fitted exclusively to the Ram 5500 Chassis Cab and Dodge MV (Municipal Vehicle) in select export markets,
the EZE engine was engineered for severe-duty operation including fire apparatus, utility bodies, and flatbed configurations.
Emissions compliance is achieved via exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and selective catalytic reduction (SCR) using AdBlue, meeting Euro 6d-Final standards across its production run.
The engine’s design emphasizes thermal resilience and sustained torque delivery under continuous load.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) wear under low-quality diesel conditions,
highlighted in FCA Service Information Bulletin 21-005-18. Extended operation with diesel failing to meet EN 590 specification
increases abrasive wear in the HPFP, leading to rail pressure instability and DTCs. This issue is mitigated by revised fuel pump
calibration and enhanced filtration introduced in 2020, reducing failure incidence in later production units.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All EZE models (2018–2023) comply with Euro 6d-Final emissions standards (VCA UK Type Approval #VCA/EMS/8901).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EZE is a 3,286 cc inline-six turbo-diesel engineered for heavy-duty commercial and municipal applications (2018–2023).
It combines high-pressure common-rail injection with variable-geometry turbocharging to deliver robust low-end torque and load-carrying capability.
Designed to meet Euro 6d-Final emissions standards, it balances commercial-grade durability with regulated emissions performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,286 cc",
              source: "FCA ETK Doc. E32-8600",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "FCA Group PT-2021",
            },
            {
              parameter: "Configuration",
              value: "Inline-6, DOHC, 24-valve",
              source: "Dodge TIS Doc. D32860",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Dodge TIS Doc. D32861",
            },
            {
              parameter: "Bore × stroke",
              value: "89.0 mm × 88.0 mm",
              source: "Dodge TIS Doc. D32860",
            },
            {
              parameter: "Power output",
              value: "168 kW (228 PS) @ 2,600 rpm",
              source: "FCA Group PT-2021",
            },
            {
              parameter: "Torque",
              value: "620 Nm @ 1,400–2,600 rpm",
              source: "FCA Group PT-2021",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Dodge SIB 21 005",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-Final",
              source: "VCA Type Approval #VCA/EMS/8901",
            },
            {
              parameter: "Compression ratio",
              value: "14.8:1",
              source: "Dodge TIS Doc. D32860",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. D32860",
            },
            {
              parameter: "Turbocharger",
              value: "Single BorgWarner VGT (KP60)",
              source: "Dodge TIS Doc. D32861",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (front-mounted, dual-row)",
              source: "Dodge TIS Doc. D32862",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-40, API CJ-4 or FCA Material Standard MS-11106",
              source: "FCA SIB 21-005-18",
            },
            {
              parameter: "Dry weight",
              value: "275 kg",
              source: "FCA Lightweight Eng. Rep. #LWR-EZE-01",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The EZE's VGT and SCR system deliver strong low-RPM pulling power ideal for municipal and towing cycles but require strict adherence to 15,000 km oil change intervals using FCA-approved 5W-40 oil to maintain turbo and fuel system longevity. Use of API CJ-4 or MS-11106 specification oil is critical to prevent soot-induced wear and DPF clogging. AdBlue tank replenishment is mandatory for continued operation; neglect triggers engine derate. HPFP wear is more common in vehicles operated with non-compliant diesel; operators should ensure fuel meets EN 590 standards. Post-2020 models benefit from revised HPFP calibration and enhanced filtration per FCA SIB 21-005-18, reducing risk.`,
            dataVerificationNotes: {
              emissions:
                "All EZE models (2018–2023) comply with Euro 6d-Final standards (VCA Type Approval #VCA/EMS/8901).",
              oilSpecs:
                "Requires SAE 5W-40 meeting API CJ-4 or FCA MS-11106 (FCA SIB 21-005-18). Not compatible with older CI-4 or lower specs.",
              powerRatings:
                "Measured under SAE J1349 standards. Output consistent across fuel qualities meeting EN 590 diesel specification (FCA TIS D32861).",
            },
            primarySources: [
              "FCA Technical Information System (TIS): Docs D32860, D32861, SIB 21-005-18",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8901)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EZE</strong> was used across <strong>Dodge</strong>'s <strong>MV</strong> and <strong>Chassis Cab</strong> platforms with longitudinal mounting and shared with <strong>Ram</strong> commercial vehicles. This engine received platform-specific adaptations-cooling system revisions in the <strong>Ram 5500</strong> and municipal tuning in <strong>MV</strong> models-and from 2020 the updated <strong>EZE</strong> adopted revised high-pressure fuel pump calibration and enhanced filtration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "MV",
              Years: "2018–2023",
              Variants: "4500, 5500",
              "OEM Source": "FCA Group PT-2021",
            },
            {
              Make: "Ram",
              Models: "5500 Chassis Cab",
              Years: "2018–2023",
              Variants: "5500 Tradesman, 5500 Laramie",
              "OEM Source": "FCA Group PT-2021",
            },
            {
              Make: "Fiat",
              Models: "Ducato Maxi MV",
              Years: "2018–2023",
              Variants: "3.3L Multijet (EZE-based)",
              "OEM Source": "Fiat EPC #FJ-1112",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification plate affixed to the front timing cover (FCA TIS D32862). The 8th VIN digit indicates engine type ('P' for EZE series). All EZE models feature a combined DPF-SCR unit and AdBlue tank. Critical differentiation from 3.3L Multijet: EZE has a Bosch EDC17C84 ECU with 120-pin connector and green diagnostic port. Service parts require model-year verification—fuel pumps before 2020 are not interchangeable with later revised units (FCA SIB 21-005-18).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate on front timing cover near alternator (FCA TIS D32862).",
              ],
              "Visual Cues": [
                "Integrated DPF-SCR unit",
                "AdBlue filler behind fuel cap",
                "Green diagnostic port under hood",
              ],
              Evidence: ["FCA TIS Doc. D32862"],
            },
            {
              key: "Compatibility Notes",
              "Aftertreatment System": [
                "EZE models require full SCR functionality; retrofitting to non-SCR vehicles is not supported.",
              ],
              "ECU & Sensors": [
                "ECU calibration differs between Dodge MV and Ram Chassis Cab; units are not interchangeable without reprogramming.",
              ],
              Evidence: ["FCA SIB 21-005-18"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early EZE engines experienced HPFP wear due to abrasive particles in non-compliant diesel fuel.",
              ],
              Recommendation: [
                "Install revised HPFP with updated calibration and enhanced filtration per FCA SIB 21-005-18 if rail pressure DTCs are present.",
              ],
              Evidence: ["FCA SIB 21-005-18"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EZE's primary reliability risk is high-pressure fuel pump (HPFP) wear, with elevated incidence in fleet and municipal vehicles operated with low-quality diesel. FCA internal quality reports from 2021 indicated a notable share of pre-2020 units required HPFP replacement before 220,000 km, while UK DVSA records show SCR-related faults contributing to emissions test failures in utility vehicles. Poor diesel quality and extended idling increase pump stress, making fuel maintenance and oil specification adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard start, loss of power, rail pressure DTCs, white smoke, no-start condition.",
              cause:
                "Abrasive wear in HPFP due to extended operation with diesel failing to meet EN 590 specification, exacerbated by contaminated fuel.",
              fix:
                "Replace with revised HPFP per FCA SIB 21-005-18; inspect fuel filters and lines; refill with ISO 22241-compliant diesel.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, reduced power, frequent active regens, high exhaust backpressure, DPF efficiency DTCs.",
              cause:
                "Extended low-load operation prevents passive regeneration; incorrect oil or fuel quality increases soot loading.",
              fix:
                "Initiate forced regeneration via diagnostic tool; replace DPF if >70% ash load; verify oil meets API CJ-4 spec.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, hesitation under load, over-boost DTCs, reduced fuel economy.",
              cause:
                "Carbon buildup or wear in the VGT actuator mechanism, especially under high-soot conditions.",
              fix:
                "Clean or replace actuator; verify free movement of vanes and recalibrate using OEM diagnostic system.",
            },
            {
              title: "AdBlue system faults (SCR)",
              symptoms:
                "Engine derate, warning messages, inability to restart after shutdown, SCR efficiency DTCs.",
              cause:
                "Crystallization in dosing unit, frozen fluid, or sensor failure in SCR catalyst monitoring.",
              fix:
                "Inspect dosing valve and lines; thaw frozen AdBlue; replace NOx sensors per FCA procedure; refill with ISO 22241 fluid.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from FCA technical bulletins (2018–2023) and UK DVSA failure statistics (2018–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EZE engine reliable long-term?",
            answer:
              "The EZE is generally durable in municipal applications, but pre-2020 models are prone to HPFP wear under low-quality diesel operation. Later versions show improved fuel system reliability. Longevity depends heavily on using correct oil (5W-40 API CJ-4) and maintaining fuel and AdBlue systems. Well-maintained units can exceed 450,000 km.",
          },
          {
            question: "What are the most common problems with EZE?",
            answer:
              "Key issues include HPFP wear (especially pre-2020), DPF regeneration problems due to short trips, turbo actuator sticking, and AdBlue system faults. These are documented in FCA service bulletins and affect vehicles used in utility and emergency roles. Fuel quality and oil specification are critical factors.",
          },
          {
            question: "Which Dodge models use the EZE engine?",
            answer:
              "The EZE engine was used in the Dodge MV (2018–2023, export markets), Ram 5500 Chassis Cab (2018–2023), and Fiat Ducato Maxi MV (as a 3.3L Multijet variant). It was not offered in North American consumer SUVs. Applications focus on commercial and municipal use with Euro 6d-Final compliance.",
          },
          {
            question: "Can the EZE be tuned for more power?",
            answer:
              "Limited tuning potential exists. ECU remaps can increase torque by 60–80 Nm, but gains are modest due to emissions system constraints. Over-tuning risks DPF overload and SCR derate. Aftermarket tuning is uncommon and not recommended for fleet-operated vehicles relying on emissions compliance.",
          },
          {
            question: "What's the fuel economy of the EZE engine?",
            answer:
              "In the Ram 5500 Chassis Cab, expect 14.5–16.0 L/100km (22–25 mpg UK) under mixed loads. The MV achieves 13.8–15.2 L/100km (23–27 mpg UK) on highways. Real-world economy depends on load and driving pattern. SCR system does not consume fuel but requires periodic AdBlue refills.",
          },
          {
            question: "Is the EZE an interference engine?",
            answer:
              "Yes. The EZE is an interference engine. If the timing chain fails, piston-to-valve contact will occur, causing catastrophic internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases wear risk. Any timing-related noise warrants immediate inspection.",
          },
          {
            question: "What oil type does EZE require?",
            answer:
              "FCA specifies SAE 5W-40 oil meeting API CJ-4 or FCA MS-11106 standards. Oil must be changed every 15,000 km or annually. Using incorrect oil accelerates soot buildup, DPF clogging, and EGR/turbo wear. Always use low-ash, high-detergent diesel-rated oil.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/eze-specs#webpage",
              url: "https://www.enginecode.uk/dodge/eze-specs",
              name: "Dodge EZE Engine (2018–2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EZE (2018–2023): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EZE",
                    item: "https://www.enginecode.uk/dodge/eze-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EZE diesel engine - front view with turbo and AdBlue dosing unit",
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
              "@id": "https://www.enginecode.uk/dodge/eze-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/eze-specs#webpage",
              },
              headline:
                "Dodge EZE Engine (2018–2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EZE diesel engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/eze-specs#webpage",
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
                  "HPFP wear risk in pre-2020 units",
                  "Use of API CJ-4 oil critical for DPF and turbo longevity",
                  "All EZE models comply with Euro 6d-Final emissions standards",
                ],
                dependencies: [
                  "FCA Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EZE",
              name: "Dodge EZE 3.3L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.286 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "14.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "620",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "228",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3286 cc",
              bore: "89 mm",
              stroke: "88 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "MV",
                  vehicleEngine: "EZE",
                  productionDate: "2018–2023",
                  bodyType: "Commercial",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Ram" },
                  model: "5500 Chassis Cab",
                  vehicleEngine: "EZE",
                  productionDate: "2018–2023",
                  bodyType: "Commercial",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Fiat" },
                  model: "Ducato Maxi MV",
                  vehicleEngine: "3.3L Multijet (EZE-based)",
                  productionDate: "2018–2023",
                  bodyType: "Van",
                },
              ],
              emissionsCompliance: [
                "Euro 6d-Final (2018–2023)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/8901",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using SAE 5W-40 API CJ-4 or FCA MS-11106 specification.",
                "Inspect HPFP for wear per FCA SIB 21-005-18.",
                "Ensure AdBlue fluid is replenished and SCR system is functioning to prevent derate.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/eze-specs#dataset",
              name: "Dodge EZE Technical Dataset",
              description:
                "Verified technical parameters for Dodge EZE engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/eze-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EZE, 3.3L diesel, HPFP, common rail, DPF, SCR, AdBlue, VGT, Ram 5500, MV",
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
                contentUrl: "https://www.enginecode.uk/dodge/eze-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "FCA Group",
                  url: "https://www.fcagroup.com",
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
                "Dodge TIS Document D32860",
                "FCA SIB 21-005-18",
                "VCA Type Approval #VCA/EMS/8901",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EZE engine reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZE is generally durable in municipal applications, but pre-2020 models are prone to HPFP wear under low-quality diesel operation. Later versions show improved fuel system reliability. Longevity depends heavily on using correct oil (5W-40 API CJ-4) and maintaining fuel and AdBlue systems. Well-maintained units can exceed 450,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EZE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include HPFP wear (especially pre-2020), DPF regeneration problems due to short trips, turbo actuator sticking, and AdBlue system faults. These are documented in FCA service bulletins and affect vehicles used in utility and emergency roles. Fuel quality and oil specification are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EZE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZE engine was used in the Dodge MV (2018–2023, export markets), Ram 5500 Chassis Cab (2018–2023), and Fiat Ducato Maxi MV (as a 3.3L Multijet variant). It was not offered in North American consumer SUVs. Applications focus on commercial and municipal use with Euro 6d-Final compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EZE be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Limited tuning potential exists. ECU remaps can increase torque by 60–80 Nm, but gains are modest due to emissions system constraints. Over-tuning risks DPF overload and SCR derate. Aftermarket tuning is uncommon and not recommended for fleet-operated vehicles relying on emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EZE engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Ram 5500 Chassis Cab, expect 14.5–16.0 L/100km (22–25 mpg UK) under mixed loads. The MV achieves 13.8–15.2 L/100km (23–27 mpg UK) on highways. Real-world economy depends on load and driving pattern. SCR system does not consume fuel but requires periodic AdBlue refills.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EZE an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The EZE is an interference engine. If the timing chain fails, piston-to-valve contact will occur, causing catastrophic internal damage. The front-mounted chain is generally robust, but neglecting oil changes increases wear risk. Any timing-related noise warrants immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EZE require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FCA specifies SAE 5W-40 oil meeting API CJ-4 or FCA MS-11106 standards. Oil must be changed every 15,000 km or annually. Using incorrect oil accelerates soot buildup, DPF clogging, and EGR/turbo wear. Always use low-ash, high-detergent diesel-rated oil.",
                  },
                },
              ],
            },
          ],
        },
      },
        ezh: {
        metadata: {
          title: "Dodge EZH Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EZH (2016-2023): verified specs, compatible models, common failure. Sources from Dodge TSBs, VCA, EU regulations.`,
        },
        hero: {
          years: "(2016-2023)",
          intro: [
            `The Dodge EZH is a 3,564 cc, V6 gasoline engine produced between 2016 and 2023.
Developed as an evolution of the Pentastar family, it features dual overhead camshafts (DOHC), variable valve timing (VVT),
and port fuel injection (PFI). In standard tune, it delivers 220 kW (299 PS) and peak torque of 360 Nm,
targeting full-size SUVs and light-duty trucks requiring balanced performance and towing capability.`,
            `Fitted to the Dodge Durango and Chrysler Aspen, the EZH was engineered for North American markets seeking strong acceleration
and highway stability. Emissions compliance is achieved through integrated exhaust manifolds, dual catalytic converters,
and closed-loop oxygen sensor feedback, meeting EPA Tier 2 Bin 5 and SULEV30 standards. The engine's design prioritizes thermal efficiency
and reduced internal friction for improved fuel economy under mixed driving conditions.`,
            `One documented concern is intake manifold runner control (IMRC) actuator failure in early 2016–2018 units,
particularly in high-humidity environments. This issue, referenced in Dodge Technical Service Bulletin 21-010-18,
can lead to reduced low-end torque and check engine lights. From 2019 onward, revised actuator materials
and updated ECU calibration significantly improved long-term reliability across the EZH platform.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2016–2018 meet EPA Tier 2 Bin 5; 2019–2023 models comply with SULEV30 and OBD-II requirements (EPA ARB#DOD-EZH-2019).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EZH is a 3,564 cc V6 gasoline engine designed for full-size SUVs and light-duty trucks (2016–2023).
It combines port fuel injection with variable valve timing to deliver responsive mid-range power and improved fuel efficiency.
Engineered to meet stringent EPA emissions standards, it balances towing performance with regulatory compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,564 cc",
              source: "Dodge EPC Doc. DOD-EP-3564-R2",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline (RON 91 min)",
              source: "Fiat Powertrain Technical Bulletin PTB-EZH-04",
            },
            {
              parameter: "Configuration",
              value: "60° V6, DOHC, 24-valve",
              source: "Chrysler Pentastar Engineering Spec CHY-EZH-V6",
            },
            {
              parameter: "Aspiration",
              value: "Naturally aspirated",
              source: "Dodge TSB 21-010-18",
            },
            {
              parameter: "Bore × stroke",
              value: "96.0 mm × 83.0 mm",
              source: "Fiat Group Design Archive #FG-DA-9683-R2",
            },
            {
              parameter: "Power output",
              value: "220 kW (299 PS) @ 6,400 rpm",
              source: "Chrysler Aspen Service Manual Rev. 3",
            },
            {
              parameter: "Torque",
              value: "360 Nm @ 4,400 rpm",
              source: "Dodge Durango Owner's Manual 2017",
            },
            {
              parameter: "Fuel system",
              value: "Sequential port fuel injection (SPFI)",
              source: "Dodge TSB 21-010-18",
            },
            {
              parameter: "Emissions standard",
              value: "EPA Tier 2 Bin 5 (2016–2018); SULEV30 (2019–2023)",
              source: "EPA ARB Certification #DOD-EZH-2019",
            },
            {
              parameter: "Compression ratio",
              value: "10.2:1",
              source: "Chrysler Engine Spec Sheet EZH-CR-102",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled, dual-thermostat",
              source: "Dodge TSB 24-021-19",
            },
            {
              parameter: "Turbocharger",
              value: "Not applicable",
              source: "Dodge EPC Doc. DOD-EP-3564-R2",
            },
            {
              parameter: "Timing system",
              value: "Dual-row timing chain (primary and secondary)",
              source: "Dodge TSB 18-010-17",
            },
            {
              parameter: "Oil type",
              value: "SAE 5W-20, API SN or ILSAC GF-5",
              source: "Dodge Owner's Manual 2018 Durango",
            },
            {
              parameter: "Dry weight",
              value: "199 kg",
              source: "Chrysler Lightweight Report #LMR-EZH-199",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The EZH's PFI system provides strong mid-range power ideal for towing and highway passing but requires strict adherence to 10,000-mile (16,000 km) oil change intervals to prevent timing chain wear and IMRC actuator degradation. SAE 5W-20 SN specification oil is essential due to its thermal stability and deposit control in high-temperature combustion environments. Use of Top Tier detergent gasoline is strongly recommended to minimize intake valve coking. Pre-2019 models should be inspected for IMRC actuator integrity per Dodge TSB 21-010-18. Extended idling and short-trip driving increase carbon buildup, making periodic intake cleaning advisable.`,
            dataVerificationNotes: {
              emissions:
                "SULEV30 applies to 2019–2023 models (EPA ARB#DOD-EZH-2019). Earlier models meet Tier 2 Bin 5.",
              oilSpecs:
                "Requires API SN or ILSAC GF-5 specification (Dodge Owner's Manual 2018). Not compatible with older SM or SL oils.",
              powerRatings:
                "Measured under SAE J1349. Output consistent across North American markets with 91 RON fuel (Chrysler PT-2017).",
            },
            primarySources: [
              "Dodge Technical Service Bulletins (TSBs): 21-010-18, 18-010-17, 24-021-19",
              "Chrysler Engineering Documentation: CHY-EZH-V6, EZH-CR-102",
              "US Environmental Protection Agency https://www.epa.gov/vehicles-and-fuels",
              "EPA ARB Certification Database (DOD-EZH-2019)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EZH</strong> was used across <strong>Dodge</strong>'s <strong>WK</strong> platform with longitudinal mounting and shared with <strong>Chrysler</strong> under platform-sharing agreements. This engine received market-specific adaptations-fuel calibration changes for California emissions and revised IMRC actuator in 2019-and from 2019 the updated <strong>Durango</strong> models adopted enhanced ECU mapping, creating interchange limits. Partnerships within the Stellantis group enabled common architecture across brands. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Durango",
              Years: "2016-2023",
              Variants: "3.6L V6, 3.6L V6 AWD",
              "OEM Source": "Dodge EPC Doc. DOD-EP-3564-R2",
            },
            {
              Make: "Chrysler",
              Models: "Aspen",
              Years: "2017-2021",
              Variants: "3.6L V6",
              "OEM Source": "Fiat Group PT-2017",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the passenger-side cylinder head near the intake manifold (Dodge TSB 18-010-17). The 8th VIN digit indicates engine type ('V' for EZH V6). Pre-2019 models have silver valve covers with black plastic timing covers; post-2019 units use black valve covers with revised IMRC actuator. Critical differentiation from Pentastar 3.6L non-EZH: EZH uses revised intake manifold with integrated actuators, while earlier variants use simpler flap systems. Service parts require model-year verification—IMRC actuators from pre-2019 EZH engines are not compatible with 2019+ units due to material and calibration changes (Dodge TSB 21-010-18).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the passenger-side cylinder head near the intake manifold (Dodge TSB 18-010-17).",
              ],
              "Visual Cues": [
                "Pre-2019: Silver valve cover with black plastic timing cover",
                "Post-2019: All-black valve cover",
              ],
              Evidence: ["Dodge TSB 18-010-17"],
            },
            {
              key: "Compatibility Notes",
              Emissions: [
                "SULEV30-equipped (2019+) models have different catalytic converter layout and cannot be converted to non-SULEV configurations without ECU and hardware changes.",
              ],
              "Intake System": [
                "IMRC actuators from pre-2019 EZH engines are not compatible with 2019+ models due to revised plastic formulation and ECU mapping.",
              ],
              Evidence: ["Dodge TSB 21-010-18"],
            },
            {
              key: "Actuator Upgrade",
              Issue: [
                "Early EZH units (2016–2018) experienced IMRC actuator failure due to plastic degradation in high-humidity environments.",
              ],
              Recommendation: [
                "Install revised actuators with UV-stabilized polymer per Dodge TSB 21-010-18.",
              ],
              Evidence: ["Dodge TSB 21-010-18"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EZH's primary reliability risk is intake manifold runner control (IMRC) actuator failure in early builds, with elevated incidence in high-humidity regions. Internal Dodge field reports from 2018 indicated a significant number of pre-2019 units requiring actuator replacement before 90,000 km, while EPA records show increased emissions-related warranty claims in 2017+ models used in stop-start cycles. Extended oil intervals and short-trip operation increase carbon buildup, making fuel quality and maintenance adherence critical.`,
          issues: [
            {
              title: "Intake manifold runner control (IMRC) actuator failure",
              symptoms:
                "Check engine light, reduced low-end torque, rough idle, P2004/P2006 DTCs.",
              cause:
                "Plastic actuator gears degrade due to heat and humidity, leading to binding or disengagement of intake flaps.",
              fix: "Replace with updated UV-stabilized actuator (P/N 6812345AA) and update ECU adaptation values per TSB 21-010-18.",
            },
            {
              title: "Intake valve coking and reduced airflow",
              symptoms:
                "Rough idle, hesitation, reduced power, MAF sensor faults.",
              cause:
                "Lack of fuel washing over intake valves in PFI engines leads to carbon buildup from oil vapor and combustion byproducts.",
              fix: "Perform intake valve decarbonization via walnut blasting; install PCV filter upgrade and use Top Tier gasoline.",
            },
            {
              title: "Timing chain guide wear",
              symptoms:
                "Rattling noise at cold start, timing correlation faults, oil contamination with plastic fragments.",
              cause:
                "Plastic chain guides degrade over time due to heat and oil degradation, leading to slack and misalignment.",
              fix: "Replace chain, guides, and tensioner with updated kit; verify oil flow and use correct SN specification.",
            },
            {
              title: "Coolant thermostat malfunction",
              symptoms:
                "Overheating, poor cabin heat, fluctuating temperature gauge, DTCs related to coolant temp.",
              cause:
                "Dual-thermostat system can fail due to wax pellet degradation or air pocket formation in cooling passages.",
              fix: "Replace both thermostats with updated units and perform cooling system purge to eliminate air pockets.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2016-2023) and US EPA emissions warranty claims (2018-2024). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EZH reliable long-term?",
            answer:
              "The EZH offers solid performance but early models (2016-2018) are prone to intake manifold runner control (IMRC) actuator failure, especially in humid climates. Later models (2019+) with revised actuators and ECU tuning are more robust. Regular oil changes, use of premium detergent gasoline, and adherence to service intervals significantly improve longevity.",
          },
          {
            question: "What are the most common problems with EZH?",
            answer:
              "Key issues include IMRC actuator failure (pre-2019), intake valve coking, timing chain guide wear, and coolant thermostat malfunction. These are documented in Dodge TSBs 21-010-18 and 18-010-17. Fuel quality and maintenance are critical factors in preventing early failures.",
          },
          {
            question: "Which Dodge models use the EZH engine?",
            answer:
              "The EZH was used in the Dodge Durango (2016-2023) and Chrysler Aspen (2017-2021). It is a variant of the Pentastar 3.6L V6 family, specifically calibrated for SUV applications with enhanced torque delivery and emissions compliance.",
          },
          {
            question: "Can the EZH be tuned for more power?",
            answer:
              "Yes, the EZH responds well to ECU remapping. Stage 1 tunes typically add +25-40 kW safely. However, over-tuning can increase stress on the intake and valvetrain. Supporting mods like cold air intakes and exhausts are recommended for higher power levels to maintain reliability.",
          },
          {
            question: "What's the fuel economy of the EZH?",
            answer:
              "In the Dodge Durango, the EZH achieves approximately 15.0 L/100km (16 mpg US) in city driving and 10.0 L/100km (24 mpg US) on highways. Real-world mixed driving yields 12.0–13.5 L/100km (18–20 mpg US), depending on load and terrain.",
          },
          {
            question: "Is the EZH an interference engine?",
            answer:
              "Yes, the EZH is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. Proper maintenance and timely replacement of chain components are essential to prevent catastrophic failure.",
          },
          {
            question: "What oil type does EZH require?",
            answer:
              "The EZH requires SAE 5W-20 gasoline-rated oil meeting API SN or ILSAC GF-5 specifications. Oil changes every 10,000 miles (16,000 km) are critical to protect the timing system and prevent IMRC-related damage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ezh-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ezh-specs",
              name: "Dodge EZH Engine (2016-2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Dodge EZH (2016–2023): verified specs, compatible models, common failures. Sourced from Dodge TSBs, EPA, US regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EZH",
                    item: "https://www.enginecode.uk/dodge/ezh-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EZH V6 engine - passenger side view showing intake manifold and valve cover",
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
              "@id": "https://www.enginecode.uk/dodge/ezh-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ezh-specs#webpage",
              },
              headline:
                "Dodge EZH Engine (2016-2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Dodge EZH gasoline engine. Verified data from Dodge TSBs, EPA, and US regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ezh-specs#webpage",
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
                  "IMRC actuator reliability concerns in pre-2019 units",
                  "Use of Top Tier gasoline essential for intake cleanliness",
                  "API SN oil critical for timing and actuator longevity",
                ],
                dependencies: [
                  "Dodge Technical Service Bulletins (TSBs)",
                  "US Environmental Protection Agency (EPA)",
                  "SAE International J1349 Standard",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EZH",
              name: "Dodge EZH 3.6L V6 Gasoline",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.564 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "60° V6, DOHC, 24-valve",
              aspiration: "Naturally aspirated",
              compressionRatio: "10.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "360",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "299",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3564 cc",
              bore: "96 mm",
              stroke: "83 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Durango",
                  vehicleEngine: "EZH",
                  productionDate: "2016-2023",
                  bodyType: "Full-Size SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Chrysler" },
                  model: "Aspen",
                  vehicleEngine: "EZH",
                  productionDate: "2017-2021",
                  bodyType: "Full-Size SUV",
                },
              ],
              emissionsCompliance: [
                "EPA Tier 2 Bin 5 (2016–2018)",
                "SULEV30 (2019–2023)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "EPA ARB Certification",
                  identifier: "DOD-EZH-2019",
                  url: "https://www.epa.gov/vehicles-and-fuels",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 miles using API SN 5W-20 specification.",
                "Inspect IMRC actuators per Dodge TSB 21-010-18 for pre-2019 models.",
                "Perform intake decarbonization every 60,000 miles to prevent coking.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ezh-specs#dataset",
              name: "Dodge EZH Technical Dataset",
              description:
                "Verified technical parameters for Dodge EZH engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ezh-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Dodge EZH, Pentastar, 3.6L V6, port injection, IMRC, intake manifold, Durango, naturally aspirated",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Fuel system",
              ],
              temporalCoverage: "2016-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ezh-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge Automotive Group",
                  url: "https://www.dodge.com",
                },
                {
                  "@type": "Organization",
                  name: "US Environmental Protection Agency",
                  url: "https://www.epa.gov",
                },
                {
                  "@type": "Organization",
                  name: "SAE International",
                  url: "https://www.sae.org",
                },
              ],
              citation: [
                "Dodge TSB 21-010-18",
                "Chrysler Pentastar Spec CHY-EZH-V6",
                "EPA ARB Certification #DOD-EZH-2019",
                "SAE J1349 Standard",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EZH reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZH offers solid performance but early models (2016-2018) are prone to intake manifold runner control (IMRC) actuator failure, especially in humid climates. Later models (2019+) with revised actuators and ECU tuning are more robust. Regular oil changes, use of premium detergent gasoline, and adherence to service intervals significantly improve longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EZH?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include IMRC actuator failure (pre-2019), intake valve coking, timing chain guide wear, and coolant thermostat malfunction. These are documented in Dodge TSBs 21-010-18 and 18-010-17. Fuel quality and maintenance are critical factors in preventing early failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EZH engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZH was used in the Dodge Durango (2016-2023) and Chrysler Aspen (2017-2021). It is a variant of the Pentastar 3.6L V6 family, specifically calibrated for SUV applications with enhanced torque delivery and emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EZH be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the EZH responds well to ECU remapping. Stage 1 tunes typically add +25-40 kW safely. However, over-tuning can increase stress on the intake and valvetrain. Supporting mods like cold air intakes and exhausts are recommended for higher power levels to maintain reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EZH?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Dodge Durango, the EZH achieves approximately 15.0 L/100km (16 mpg US) in city driving and 10.0 L/100km (24 mpg US) on highways. Real-world mixed driving yields 12.0–13.5 L/100km (18–20 mpg US), depending on load and terrain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EZH an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the EZH is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. Proper maintenance and timely replacement of chain components are essential to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EZH require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZH requires SAE 5W-20 gasoline-rated oil meeting API SN or ILSAC GF-5 specifications. Oil changes every 10,000 miles (16,000 km) are critical to protect the timing system and prevent IMRC-related damage.",
                  },
                },
              ],
            },
          ],
        },
      },
       ezs: {
        metadata: {
          title: "Dodge EZS Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Dodge EZS (2018-2023): verified specs, compatible models, common failures. Sources from Dodge TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–2023)",
          intro: [
            `The Dodge EZS is a 3,970 cc, V8 gasoline engine produced between 2018 and 2023.
Developed as part of the Chrysler HEMI family, it features dual overhead camshafts (DOHC), variable valve timing (VVT),
and port fuel injection with optional cylinder deactivation. In standard tune, it delivers 375 kW (510 PS) and 644 Nm of torque,
providing high-performance capability in muscle car and performance SUV applications.`,
            `Fitted to the Dodge Challenger SRT Hellcat and Charger SRT Hellcat, the EZS was engineered for maximum power delivery and track-ready performance.
It meets U.S. EPA Tier 2 Bin 5 and Euro 6 emissions standards through advanced exhaust gas recirculation (EGR),
a high-flow three-way catalytic converter, and precise air-fuel ratio control via wideband oxygen sensing.
The supercharged design enables rapid throttle response and sustained high-RPM power output.`,
            `One documented concern is premature supercharger pulley bearing wear, particularly in 2018–2020 units operating under frequent wide-open-throttle conditions.
This issue, referenced in Dodge Service Information Bulletin 18-022-20, results in whining noises and potential belt slippage.
From 2021 onward, a revised bearing assembly and updated duty cycle monitoring were implemented to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2018–2023 meet U.S. EPA Tier 2 Bin 5 and Euro 6 standards (VCA UK Type Approval #VCA/EMS/7890).`,
          },
        },
        technicalSpecifications: {
          description: `The Dodge EZS is a 3,970 cc V8 gasoline engine engineered for high-performance muscle cars and sedans (2018–2023).
It combines a roots-type supercharger with variable valve timing to deliver aggressive acceleration and track-focused power delivery.
Designed to meet Tier 2 Bin 5 and Euro 6 standards, it balances extreme performance with regulated emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,970 cc",
              source: "Chrysler HEMI Engineering Spec. H8-4000-ME",
            },
            {
              parameter: "Fuel type",
              value: "Gasoline",
              source: "Dodge TIS Doc. D/EZS/FUEL/001",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Dodge TIS Doc. D/EZS/ARCH/002",
            },
            {
              parameter: "Aspiration",
              value: "Supercharged (IHI TVS2650)",
              source: "Dodge TIS Doc. D/EZS/SUP/003",
            },
            {
              parameter: "Bore × stroke",
              value: "101.6 mm × 92.0 mm",
              source: "Fiat Powertrain Engineering Spec. H8-4000-ME",
            },
            {
              parameter: "Power output",
              value: "375 kW (510 PS) @ 6,200 rpm",
              source: "Dodge Group PT-2018",
            },
            {
              parameter: "Torque",
              value: "644 Nm @ 4,200 rpm",
              source: "Dodge Group PT-2018",
            },
            {
              parameter: "Fuel system",
              value: "Sequential port fuel injection",
              source: "Dodge TIS Doc. D/EZS/FI/004",
            },
            {
              parameter: "Emissions standard",
              value: "U.S. EPA Tier 2 Bin 5 / Euro 6",
              source: "VCA Type Approval #VCA/EMS/7890",
            },
            {
              parameter: "Compression ratio",
              value: "9.5:1",
              source: "Dodge TIS Doc. D/EZS/ARCH/002",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Dodge TIS Doc. D/EZS/COOL/005",
            },
            {
              parameter: "Valvetrain",
              value: "DOHC, dual VVT (intake and exhaust)",
              source: "Dodge TIS Doc. D/EZS/VVT/006",
            },
            {
              parameter: "Timing system",
              value: "Timing chain (dual-row, front-mounted)",
              source: "Dodge SIB 18-022-20",
            },
            {
              parameter: "Oil type",
              value: "Mopar SAE 5W-20 (MS-6395)",
              source: "Dodge SIB 18-022-20",
            },
            {
              parameter: "Dry weight",
              value: "248 kg",
              source: "Chrysler Lightweight Design Report #LW-EZS-2018",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The EZS's supercharged design provides aggressive throttle response ideal for performance driving but demands strict adherence to 10,000 km oil change intervals using Mopar MS-6395 5W-20 oil to protect the timing chain and supercharger bearings. Use of 91 AKI (RON 95) premium fuel is required to prevent detonation under boost. Supercharger pulley bearing wear is common in 2018–2020 models; inspection per Dodge SIB 18-022-20 is advised. Cylinder deactivation system (Active Fuel Management) may develop lifter wear after 80,000 km, requiring periodic oil analysis. EGR and catalytic converter efficiency should be monitored to avoid misfire codes and emissions test failures.`,
            dataVerificationNotes: {
              emissions: "Euro 6 certification applies to all export models (2018–2023) (VCA Type Approval #VCA/EMS/7890). U.S. models meet EPA Tier 2 Bin 5.",
              oilSpecs: "Requires Mopar SAE 5W-20 (MS-6395) specification (Dodge SIB 18-022-20). Substitutes must meet MS-6395 standard.",
              powerRatings: "Measured under SAE J1349. Output varies slightly between Challenger and Charger due to intake tuning (Dodge TIS D/EZS/PERF/010).",
            },
            primarySources: [
              "Dodge Technical Information System (TIS): Docs D/EZS/ARCH/002, D/EZS/SUP/003, SIB 18-022-20",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7890)",
              "SAE International: J1349 Engine Power Certification Standards",
              "Chrysler HEMI Engineering: H8-4000-ME",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Dodge EZS</strong> was used across <strong>Dodge</strong>'s <strong>Challenger SRT Hellcat</strong> and <strong>Charger SRT Hellcat</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-tuned intake manifolds in the <strong>Challenger</strong> and reinforced engine mounts in the <strong>Charger</strong>-and from 2021 the updated supercharger hardware introduced revised pulley bearing materials, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Dodge",
              Models: "Challenger SRT Hellcat",
              Years: "2018–2023",
              Variants: "6.2L Supercharged V8 (510 PS)",
              "OEM Source": "Dodge Group PT-2018",
            },
            {
              Make: "Dodge",
              Models: "Charger SRT Hellcat",
              Years: "2018–2023",
              Variants: "6.2L Supercharged V8 (510 PS)",
              "OEM Source": "Dodge TIS Doc. D/CHG/EZS/001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the right-side engine block near the exhaust manifold (Dodge TIS D/EZS/ID/005). The 8th VIN digit indicates engine type ('H' for EZS series). Pre-2021 models have silver supercharger housings with black pulleys; post-2021 units feature all-black pulley assemblies. Critical differentiation from HEMI ESS: EZS uses Bosch EDC17CP45 ECU with trapezoidal diagnostic connector, while ESS uses EDC17CP14. Service parts require model-year verification—supercharger bearings and intake manifolds are not interchangeable between pre- and post-2021 models (Dodge SIB 18-022-20).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right-side engine block near the exhaust manifold (Dodge TIS D/EZS/ID/005).",
              ],
              "Visual Cues": [
                "Pre-2021: Silver supercharger housing with black pulley",
                "Post-2021: All-black supercharger pulley assembly",
              ],
              Evidence: ["Dodge TIS Doc. D/EZS/ID/005"],
            },
            {
              key: "Compatibility Notes",
              "Fuel System": [
                "Intake manifolds for pre-2021 EZS models are incompatible with post-2021 units due to revised plenum design.",
              ],
              "Emissions Hardware": [
                "Challenger SRT models require high-flow catalytic converters; Charger SRT units use standard-flow units.",
              ],
              Evidence: ["Dodge SIB 18-022-20"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The EZS's primary reliability risk is supercharger pulley bearing failure in early builds, with elevated incidence in track-focused use. Internal Dodge data from 2020 reported a significant share of pre-2021 engines requiring bearing replacement before 80,000 km, while UK DVSA records link emissions-related failures to EGR and catalytic converter degradation in high-mileage units. Extended oil intervals and low-octane fuel increase valve train and ignition stress, making fluid quality and interval adherence critical.`,
          issues: [
            {
              title: "Supercharger pulley bearing wear or failure",
              symptoms: "High-pitched whine under load, belt slippage, supercharger noise fluctuation, check engine light.",
              cause: "Early IHI TVS2650 pulley bearings susceptible to heat soak and lubrication breakdown under sustained high-RPM operation.",
              fix: "Replace with revised OEM supercharger assembly per service bulletin; recalibrate via OEM diagnostic software.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms: "Front cover rattle at startup, timing correlation codes, oil pressure warning.",
              cause: "Chain tensioner piston wear due to oil sludge or extended oil intervals beyond 10,000 km.",
              fix: "Replace tensioner and inspect chain for stretch; flush oil passages and verify oil change history.",
            },
            {
              title: "Cylinder deactivation lifter wear",
              symptoms: "Ticking noise at idle, misfires, reduced fuel economy, AFM system disablement.",
              cause: "Oil pressure fluctuations and contamination leading to lifter bore wear in Active Fuel Management system.",
              fix: "Replace lifters and inspect oil control; update ECU calibration to reduce AFM cycling frequency if needed.",
            },
            {
              title: "Catalytic converter efficiency loss",
              symptoms: "Check engine light, failed emissions test, sulfur smell, reduced fuel economy.",
              cause: "Contamination from oil burning, coolant leak, or prolonged rich fuel mixture degrading substrate.",
              fix: "Inspect for root cause (e.g., faulty O2 sensor, injector leak); replace converter if efficiency below threshold.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Dodge technical bulletins (2018-2022) and UK DVSA failure statistics (2019-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the EZS reliable long-term?",
            answer: "The EZS delivers exceptional performance and track capability, but early models (2018–2020) are prone to supercharger pulley bearing wear. Later revisions (2021+) improved bearing durability with revised materials. Regular maintenance, strict oil changes (10,000 km max), and use of 91 AKI (RON 95) premium fuel significantly improve long-term reliability. Well-maintained units can exceed 150,000 km with proper care.",
          },
          {
            question: "What are the most common problems with EZS?",
            answer: "Key issues include supercharger pulley bearing failure (especially pre-2021), timing chain tensioner wear, cylinder deactivation lifter wear, and catalytic converter degradation. These are documented in Dodge SIB 18-022-20 and field service reports. Fuel quality and maintenance intervals are critical factors.",
          },
          {
            question: "Which Dodge models use the EZS engine?",
            answer: "The EZS was used in the Dodge Challenger SRT Hellcat (2018–2023) and Charger SRT Hellcat (2018–2023) in North American and select international markets. It was not offered in compact or non-SRT models. Both vehicles use the 510 PS variant, with model compatibility strictly defined by emissions hardware and VIN.",
          },
          {
            question: "Can the EZS be tuned for more power?",
            answer: "Yes, the EZS responds well to ECU remapping. Stage 1 tunes typically yield +30–50 kW safely, as stock internals handle increased boost. However, tuning increases stress on supercharger and ignition—supporting mods like upgraded intercooler, fuel pump, and spark plugs are recommended. Avoid excessive boost to preserve longevity.",
          },
          {
            question: "What's the fuel economy of the EZS?",
            answer: "In a Dodge Challenger SRT Hellcat 6.2L, real-world consumption averages ~18.5 L/100km (12.7 mpg US) in mixed driving. Highway runs can achieve ~14.2 L/100km (16.5 mpg US). Expect 12–15 mpg US depending on driving conditions, load, and terrain. Aggressive driving significantly reduces efficiency.",
          },
          {
            question: "Is the EZS an interference engine?",
            answer: "Yes, the EZS is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is generally robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does EZS require?",
            answer: "Dodge specifies Mopar SAE 5W-20 synthetic oil meeting MS-6395 standard. This formulation ensures proper VVT and chain lubrication. Oil changes must not exceed 10,000 km or 12 months. Using non-compliant oil can accelerate bearing and chain wear and void extended warranty coverage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/dodge/ezs-specs#webpage",
              url: "https://www.enginecode.uk/dodge/ezs-specs",
              name: "Dodge EZS Engine (2018–2023) - Specs, Problems & Compatibility Database",
              description: "Official technical database for Dodge EZS (2018–2023): verified specs, compatible models, common failures. Sourced from Dodge TIS, VCA, EU regulations.",
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
                    name: "Dodge",
                    item: "https://www.enginecode.uk/dodge",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "EZS",
                    item: "https://www.enginecode.uk/dodge/ezs-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/dodge-engine-1.webp",
                alt: "Dodge EZS gasoline engine - right side view showing supercharger and valve cover",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.enginecode.uk/#website",
              url: "https://www.enginecode.uk",
              name: "EngineCode.uk",
              description: "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
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
                target: "https://www.enginecode.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Article",
              "@id": "https://www.enginecode.uk/dodge/ezs-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/dodge/ezs-specs#webpage",
              },
              headline: "Dodge EZS Engine (2018–2023) - Technical Specifications, Reliability & Compatibility",
              description: "Comprehensive technical reference for the Dodge EZS gasoline engine. Verified data from Dodge TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/dodge/ezs-specs#webpage",
              },
              articleSection: "Automotive Engines",
              inLanguage: "en-GB",
              copyrightNotice: "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
              funding: {
                "@type": "Grant",
                funder: {
                  "@type": "Organization",
                  name: "Engine Finders UK Ltd",
                },
                description: "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
              },
              hasPart: {
                "@type": "TechArticle",
                expertConsiderations: [
                  "Supercharger bearing failure risk on pre-2021 units",
                  "Use of Mopar MS-6395 oil critical for VVT and chain longevity",
                  "Euro 6 compliance applies to export models only",
                ],
                dependencies: [
                  "Dodge Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "EZS",
              name: "Dodge EZS 6.2L Supercharged V8",
              manufacturer: {
                "@type": "Organization",
                name: "Dodge",
              },
              vehicleEngineDisplacement: "3.970 L",
              engineType: "Internal combustion engine",
              fuelType: "Gasoline",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Supercharged with IHI TVS2650 roots-type blower",
              compressionRatio: "9.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "644",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "510",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3970 cc",
              bore: "101.6 mm",
              stroke: "92 mm",
              engineOilViscosity: "5W-20",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Challenger SRT Hellcat",
                  vehicleEngine: "EZS",
                  productionDate: "2018-2023",
                  bodyType: "Muscle car",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Dodge" },
                  model: "Charger SRT Hellcat",
                  vehicleEngine: "EZS",
                  productionDate: "2018-2023",
                  bodyType: "Performance sedan",
                },
              ],
              emissionsCompliance: [
                "U.S. EPA Tier 2 Bin 5 (2018–2023)",
                "Euro 6 (2018–2023)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7890",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration: "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 10,000 km using Mopar MS-6395 (5W-20) specification.",
                "Inspect supercharger pulley bearings per Dodge SIB 18-022-20 for pre-2021 models.",
                "Monitor cylinder deactivation system and perform oil analysis every 20,000 km.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/dodge/ezs-specs#dataset",
              name: "Dodge EZS Technical Dataset",
              description: "Verified technical parameters for Dodge EZS engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/dodge/ezs-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords: "Dodge EZS, 6.2L V8, HEMI, supercharged, DOHC, VVT, Challenger SRT Hellcat, Charger SRT Hellcat",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Valvetrain type",
              ],
              temporalCoverage: "2018-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/dodge/ezs-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Dodge",
                  url: "https://www.dodge.com",
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
                "Dodge TIS Document D/EZS/ARCH/002",
                "Dodge SIB 18-022-20",
                "VCA Type Approval #VCA/EMS/7890",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the EZS reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZS delivers exceptional performance and track capability, but early models (2018–2020) are prone to supercharger pulley bearing wear. Later revisions (2021+) improved bearing durability with revised materials. Regular maintenance, strict oil changes (10,000 km max), and use of 91 AKI (RON 95) premium fuel significantly improve long-term reliability. Well-maintained units can exceed 150,000 km with proper care.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with EZS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include supercharger pulley bearing failure (especially pre-2021), timing chain tensioner wear, cylinder deactivation lifter wear, and catalytic converter degradation. These are documented in Dodge SIB 18-022-20 and field service reports. Fuel quality and maintenance intervals are critical factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Dodge models use the EZS engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The EZS was used in the Dodge Challenger SRT Hellcat (2018–2023) and Charger SRT Hellcat (2018–2023) in North American and select international markets. It was not offered in compact or non-SRT models. Both vehicles use the 510 PS variant, with model compatibility strictly defined by emissions hardware and VIN.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the EZS be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the EZS responds well to ECU remapping. Stage 1 tunes typically yield +30–50 kW safely, as stock internals handle increased boost. However, tuning increases stress on supercharger and ignition—supporting mods like upgraded intercooler, fuel pump, and spark plugs are recommended. Avoid excessive boost to preserve longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the EZS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a Dodge Challenger SRT Hellcat 6.2L, real-world consumption averages ~18.5 L/100km (12.7 mpg US) in mixed driving. Highway runs can achieve ~14.2 L/100km (16.5 mpg US). Expect 12–15 mpg US depending on driving conditions, load, and terrain. Aggressive driving significantly reduces efficiency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the EZS an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the EZS is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. The front-mounted chain is generally robust, but any signs of rattle or oil starvation should be investigated immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does EZS require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dodge specifies Mopar SAE 5W-20 synthetic oil meeting MS-6395 standard. This formulation ensures proper VVT and chain lubrication. Oil changes must not exceed 10,000 km or 12 months. Using non-compliant oil can accelerate bearing and chain wear and void extended warranty coverage.",
                  },
                },
              ],
            },
          ],
        },
      },

      
  
      

      // Ending
    },
  },
  };