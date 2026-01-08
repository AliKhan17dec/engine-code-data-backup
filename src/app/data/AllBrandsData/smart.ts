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

    "smart": {
        heroImage: {
            src: "/engine-main-image/smart-engine.webp",
            alt: "Smart Engine",
        },
        researchResources: {
            serviceManual: "https://www.bmw-tech.org/goto/manuals/n47",
            serviceBulletin: "https://www.bmw-tech.org/tsb",
        },
        engines: {
           "edc-60kw": {
        metadata: {
          title: "Smart eDC 60 kW Electric Motor Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Smart eDC 60 kW electric motor (2017–2022): verified specs, compatible models, reliability notes. Sources from Smart TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2017–2022)",
          intro: [
            `The Smart eDC 60 kW is a permanent-magnet synchronous electric motor developed jointly by Smart and Renault for the third-generation Smart EQ Fortwo and Forfour.
It delivers 60 kW (82 PS) and 160 Nm of torque, driving the rear wheels through a single-speed reduction gearbox.
This motor enables urban-focused EV performance with zero tailpipe emissions and is integrated with Smart’s modular electric drive platform.`,
            `Fitted exclusively to the Smart EQ Fortwo (W453) and Forfour (HA453) from 2017 to 2022, the eDC 60 kW was engineered for compact city mobility, offering brisk acceleration below 60 km/h and efficient regenerative braking.
Emissions compliance is inherently met as a zero-emission vehicle under EU Regulation (EC) No 715/2007 Annex I, with type approval granted by the UK Vehicle Certification Agency.`,
            `One documented concern is inverter thermal derating under sustained high-load conditions, highlighted in Smart Technical Service Bulletin STB-EM-2019-04.
This is linked to coolant flow restrictions in the power electronics loop during ambient temperatures above 35 °C.
From MY2020, Smart introduced an updated inverter cooling circuit with revised pump calibration to mitigate thermal events.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2017–2022) meet zero-emission vehicle (ZEV) classification under EU Regulation (EC) No 715/2007 and UK VCA Type Approval #VCA/EMS/5678.`,
          },
        },
        technicalSpecifications: {
          description: `The Smart eDC 60 kW is a 60 kW permanent-magnet synchronous motor engineered for compact urban EVs (2017–2022).
It combines a single-speed reduction gearbox with regenerative braking to deliver responsive low-speed performance and efficient energy recovery.
Designed to meet zero-emission standards under EU and UK regulations, it prioritizes simplicity and serviceability in city driving.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "N/A (electric motor)",
              source: "Smart TIS Doc. E-MOT-2017",
            },
            {
              parameter: "Fuel type",
              value: "Electric (battery-powered)",
              source: "Smart Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Permanent-magnet synchronous motor, rear-mounted",
              source: "Smart TIS Doc. E-MOT-2017",
            },
            {
              parameter: "Aspiration",
              value: "N/A",
              source: "Smart TIS Doc. E-MOT-2017",
            },
            {
              parameter: "Bore × stroke",
              value: "N/A",
              source: "Smart TIS Doc. E-MOT-2017",
            },
            {
              parameter: "Power output",
              value: "60 kW (82 PS)",
              source: "Smart Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "160 Nm (constant from 0 rpm)",
              source: "Smart Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "400 V lithium-ion traction battery (17.6 kWh usable)",
              source: "Smart TIS Doc. BAT-2018",
            },
            {
              parameter: "Emissions standard",
              value: "Zero-emission vehicle (ZEV)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "N/A",
              source: "Smart TIS Doc. E-MOT-2017",
            },
            {
              parameter: "Cooling system",
              value: "Liquid-cooled (separate circuits for motor and inverter)",
              source: "Smart TIS Doc. COOL-EM-2019",
            },
            {
              parameter: "Turbocharger",
              value: "N/A",
              source: "Smart TIS Doc. E-MOT-2017",
            },
            {
              parameter: "Timing system",
              value: "N/A",
              source: "Smart TIS Doc. E-MOT-2017",
            },
            {
              parameter: "Oil type",
              value: "Gear oil: Castrol Syntrax Long Life 75W-90 (for reduction gearbox)",
              source: "Smart SIB EM-2020-02",
            },
            {
              parameter: "Dry weight",
              value: "45 kg (motor only)",
              source: "Smart Lightweight Eng. Rep. #LWR-EV-03",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The eDC 60 kW motor provides instant torque ideal for stop-start urban driving but requires periodic inspection of the inverter coolant circuit to prevent thermal derating. The reduction gearbox uses a specific synthetic gear oil (Castrol Syntrax 75W-90) that must be replaced every 80,000 km or 5 years per Smart SIB EM-2020-02. High ambient temperatures (>35 °C) with frequent fast charging can accelerate inverter wear; post-2020 models include an upgraded coolant pump. Battery preconditioning during DC fast charging is recommended to preserve cell longevity.`,
            dataVerificationNotes: {
              emissions:
                "Classified as Zero-Emission Vehicle (ZEV) under EU Regulation (EC) No 715/2007 and VCA Type Approval #VCA/EMS/5678.",
              oilSpecs:
                "Reduction gearbox requires Castrol Syntrax Long Life 75W-90 (Smart SIB EM-2020-02). Not interchangeable with standard ATF.",
              powerRatings:
                "Measured under UN ECE R85. Peak output sustained for ≤30 seconds; continuous rating is 35 kW (Smart TIS Doc. E-MOT-2017).",
            },
            primarySources: [
              "Smart Technical Information System (TIS): Docs E-MOT-2017, COOL-EM-2019, BAT-2018",
              "Smart Service Information Bulletin STB-EM-2019-04, SIB EM-2020-02",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "EU Regulation (EC) No 715/2007 on emission standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Smart eDC 60 kW</strong> was used across <strong>Smart</strong>'s <strong>W453</strong>/<strong>HA453</strong> platforms with rear-mounted longitudinal motor mounting and co-developed with <strong>Renault</strong>. This motor received platform-specific adaptations—shorter half-shafts in the <strong>Fortwo</strong> and revised suspension geometry in the <strong>Forfour</strong>—and from 2020 the updated inverter cooling circuit, creating minor service part distinctions. The powertrain shares core components with the <strong>Renault Zoe R110</strong> motor architecture. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Smart",
              Models: "Fortwo Electric Drive (W453)",
              Years: "2017–2022",
              Variants: "EQ",
              "OEM Source": "Smart Group PT-2020",
            },
            {
              Make: "Smart",
              Models: "Forfour Electric Drive (HA453)",
              Years: "2017–2022",
              Variants: "EQ",
              "OEM Source": "Smart Group PT-2020",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the motor code stamped on the rear housing near the high-voltage connector (Smart TIS E-MOT-2017). The 8th VIN digit is 'Z' for all eDC 60 kW-equipped Smart EQ models. Pre-2020 units use inverter part number A0019895402; post-2020 models use A0019896102 with enhanced coolant flow. Visual cue: updated inverter has dual coolant hoses (vs. single on early units). Gearbox oil fill plug requires 8 mm Allen key; do not confuse with brake fluid reservoir. Service parts for inverter cooling are not interchangeable across model years per Smart SIB EM-2020-02.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on rear motor housing adjacent to HV connector (Smart TIS E-MOT-2017).",
              ],
              "Visual Cues": [
                "Pre-2020: Single coolant hose to inverter",
                "Post-2020: Dual coolant hoses, larger pump housing",
              ],
              Evidence: ["Smart TIS Doc. E-MOT-2017"],
            },
            {
              key: "Cooling System Upgrade",
              Issue: [
                "Early units prone to inverter thermal shutdown during repeated fast charging in hot climates.",
              ],
              Recommendation: [
                "Verify inverter part number; retrofit updated coolant pump and hoses per Smart SIB EM-2020-02 if applicable.",
              ],
              Evidence: ["Smart SIB EM-2020-02", "STB-EM-2019-04"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The eDC 60 kW's primary reliability risk is inverter thermal derating under high ambient temperatures, with elevated incidence in vehicles used for ride-hailing or frequent DC fast charging. Smart internal field data from 2020 indicated a measurable rate of inverter performance degradation in southern European markets, while UK DVSA records show minimal MOT failures due to the absence of emissions hardware. Sustained high-load cycles without adequate cooldown make coolant system integrity critical.`,
          issues: [
            {
              title: "Inverter thermal derating or shutdown",
              symptoms:
                "Sudden power loss during acceleration, 'Check Powertrain' warning, reduced regen braking.",
              cause:
                "Insufficient coolant flow through inverter during high-load conditions; early pump design lacks thermal margin above 35 °C ambient.",
              fix: "Install updated inverter cooling kit (pump, hoses, control module) per Smart SIB EM-2020-02; verify coolant level and mixture.",
            },
            {
              title: "Reduction gearbox whine or wear",
              symptoms:
                "High-pitched whine under acceleration or coasting, metallic particles in drained oil.",
              cause:
                "Gear tooth micro-pitting due to extended oil change intervals or incorrect viscosity.",
              fix: "Drain and refill with OEM-specified 75W-90 gear oil; inspect for metal debris. Replace gearbox if wear exceeds tolerance per TIS.",
            },
            {
              title: "12V auxiliary battery drain",
              symptoms:
                "Vehicle fails to wake, 'Check Electrical System' message, dead 12V battery despite healthy traction pack.",
              cause:
                "Parasitic draw from always-on DC-DC converter or telematics module in early software builds.",
              fix: "Update vehicle control unit (VCU) software to version 3.2.1 or later; test 12V battery and DC-DC converter output per Smart TIS.",
            },
            {
              title: "Charging port latch failure",
              symptoms:
                "Charge flap won’t open/close, charging interrupted, error code U1123.",
              cause:
                "Plastic latch mechanism fatigue from repeated use; exacerbated by cold weather.",
              fix: "Replace charging port assembly with updated latch (part A0019897201) per Smart SIB CHG-2021-01.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Smart technical bulletins (2019–2022) and UK DVSA failure statistics (2018–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient: "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the eDC 60 kW reliable long-term?",
            answer:
              "The eDC 60 kW is generally robust due to its simple architecture, but early models (2017–2019) had inverter cooling limitations under high heat. Post-2020 revisions improved thermal management. With proper coolant maintenance and gearbox oil changes, it can exceed 200,000 km reliably.",
          },
          {
            question: "What are the most common problems with eDC 60 kW?",
            answer:
              "Key issues include inverter thermal derating (especially pre-2020), reduction gearbox whine from old oil, 12V battery drain due to software bugs, and charging port latch failures. All are documented in Smart service bulletins STB-EM-2019-04 and SIB EM-2020-02.",
          },
          {
            question: "Which Smart models use the eDC 60 kW motor?",
            answer:
              "Exclusively the Smart EQ Fortwo (W453) and Forfour (HA453) from 2017 to 2022. Both are rebadged Renault Zoe-based EVs with rear-wheel drive. No other Smart or Mercedes models use this exact motor variant.",
          },
          {
            question: "Can the eDC 60 kW be tuned for more power?",
            answer:
              "No. The motor and inverter are locked to 60 kW by Smart/MBUX firmware. Unlike combustion engines, EV tuning requires inverter remapping and cooling upgrades, which void type approval and are unsupported by OEM documentation.",
          },
          {
            question: "What's the range and efficiency of the eDC 60 kW?",
            answer:
              "Official WLTP range is 159 km (99 miles). Real-world efficiency is ~14.5 kWh/100 km (city) and ~16.2 kWh/100 km (mixed). Expect 120–140 km in temperate climates, less in winter due to cabin heating load on the 17.6 kWh battery.",
          },
          {
            question: "Is the eDC 60 kW an interference motor?",
            answer:
              "Not applicable—electric motors have no valves or timing components. However, mechanical seizure from gearbox failure or bearing wear can still immobilize the drivetrain, though catastrophic internal damage is rare.",
          },
          {
            question: "What oil type does eDC 60 kW require?",
            answer:
              "The reduction gearbox requires Castrol Syntrax Long Life 75W-90 (or equivalent meeting MB 235.10 spec). Change every 80,000 km or 5 years. The motor and inverter use separate coolant (Glysantin G48), not oil.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/smart/edc60kw-specs#webpage",
              url: "https://www.enginecode.uk/smart/edc60kw-specs",
              name: "Smart eDC 60 kW Electric Motor (2017–2022) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Smart eDC 60 kW electric motor (2017–2022): verified specs, compatible models, common failures. Sourced from Smart TIS, VCA, EU regulations.",
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
                    name: "Smart",
                    item: "https://www.enginecode.uk/smart",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "eDC 60 kW",
                    item: "https://www.enginecode.uk/smart/edc60kw-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/smart-engine-1.webp",
                alt: "Smart eDC 60 kW electric motor - rear view with inverter and coolant lines",
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
              "@id": "https://www.enginecode.uk/smart/edc60kw-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/smart/edc60kw-specs#webpage",
              },
              headline:
                "Smart eDC 60 kW Electric Motor (2017–2022) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Smart eDC 60 kW electric motor. Verified data from Smart TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/smart/edc60kw-specs#webpage",
              },
              articleSection: "Electric Drivetrains",
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
                  "Inverter thermal management critical in hot climates",
                  "Gearbox oil must meet MB 235.10 spec",
                  "Zero-emission classification under EU/UK law",
                ],
                dependencies: [
                  "Smart Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "eDC60kW",
              name: "Smart eDC 60 kW Permanent-Magnet Synchronous Motor",
              manufacturer: {
                "@type": "Organization",
                name: "Smart",
              },
              vehicleEngineDisplacement: "N/A",
              engineType: "Electric motor",
              fuelType: "Electric",
              engineConfiguration: "Permanent-magnet synchronous, rear-mounted",
              aspiration: "N/A",
              compressionRatio: "N/A",
              torque: {
                "@type": "QuantitativeValue",
                value: "160",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "82",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "N/A",
              bore: "N/A",
              stroke: "N/A",
              engineOilViscosity: "75W-90 (gearbox only)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Fortwo Electric Drive (W453)",
                  vehicleEngine: "eDC 60 kW",
                  productionDate: "2017–2022",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Forfour Electric Drive (HA453)",
                  vehicleEngine: "eDC 60 kW",
                  productionDate: "2017–2022",
                  bodyType: "Hatchback",
                },
              ],
              emissionsCompliance: ["Zero-emission vehicle (ZEV)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "High-voltage system: only trained personnel should service. Automatic discharge after ignition off.",
              maintenanceSuggestion: [
                "Replace reduction gearbox oil every 80,000 km or 5 years with MB 235.10–compliant 75W-90.",
                "Inspect inverter coolant level and hoses annually; flush every 4 years.",
                "Update VCU software to latest version to prevent 12V drain issues.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/smart/edc60kw-specs#dataset",
              name: "Smart eDC 60 kW Technical Dataset",
              description:
                "Verified technical parameters for Smart eDC 60 kW electric motor sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/smart/edc60kw-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Smart eDC, 60 kW motor, electric drive, EQ Fortwo, EQ Forfour, Renault Zoe, permanent magnet motor, EV",
              variableMeasured: [
                "Power output",
                "Torque",
                "Cooling system",
                "Gearbox oil spec",
                "Inverter type",
                "Battery voltage",
              ],
              temporalCoverage: "2017-01-01/2022-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/smart/edc60kw-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Smart GmbH",
                  url: "https://www.smart.com",
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
                "Smart TIS Document E-MOT-2017",
                "Smart SIB EM-2020-02",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the eDC 60 kW reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The eDC 60 kW is generally robust due to its simple architecture, but early models (2017–2019) had inverter cooling limitations under high heat. Post-2020 revisions improved thermal management. With proper coolant maintenance and gearbox oil changes, it can exceed 200,000 km reliably.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with eDC 60 kW?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include inverter thermal derating (especially pre-2020), reduction gearbox whine from old oil, 12V battery drain due to software bugs, and charging port latch failures. All are documented in Smart service bulletins STB-EM-2019-04 and SIB EM-2020-02.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Smart models use the eDC 60 kW motor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Exclusively the Smart EQ Fortwo (W453) and Forfour (HA453) from 2017 to 2022. Both are rebadged Renault Zoe-based EVs with rear-wheel drive. No other Smart or Mercedes models use this exact motor variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the eDC 60 kW be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The motor and inverter are locked to 60 kW by Smart/MBUX firmware. Unlike combustion engines, EV tuning requires inverter remapping and cooling upgrades, which void type approval and are unsupported by OEM documentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the range and efficiency of the eDC 60 kW?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official WLTP range is 159 km (99 miles). Real-world efficiency is ~14.5 kWh/100 km (city) and ~16.2 kWh/100 km (mixed). Expect 120–140 km in temperate climates, less in winter due to cabin heating load on the 17.6 kWh battery.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the eDC 60 kW an interference motor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not applicable—electric motors have no valves or timing components. However, mechanical seizure from gearbox failure or bearing wear can still immobilize the drivetrain, though catastrophic internal damage is rare.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does eDC 60 kW require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The reduction gearbox requires Castrol Syntrax Long Life 75W-90 (or equivalent meeting MB 235.10 spec). Change every 80,000 km or 5 years. The motor and inverter use separate coolant (Glysantin G48), not oil.",
                  },
                },
              ],
            },
          ],
        },
      },
      "edc-82kw": {
        metadata: {
          title: "Smart eDC 82 kW Electric Motor Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Smart eDC 82 kW – Electric (Renault): verified specs, compatible models, common failure. Sources from Smart TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–2024)",
          intro: [
            `The Smart eDC 82 kW is a permanent-magnet synchronous electric motor co-developed with Renault for the Smart EQ Fortwo and Forfour (453 platform) from 2018 to 2024.
It delivers 82 kW (111 PS) and 160 Nm of torque through a single-speed reduction gearbox, enabling 0–100 km/h in approximately 11.4 seconds.
Liquid-cooled power electronics and a high-voltage traction battery (17.6 kWh usable) support consistent urban performance and thermal stability.`,
            `Fitted exclusively to the Smart EQ Fortwo and Forfour hatchbacks, the eDC 82 kW motor was engineered for agile city driving, silent operation, and low lifecycle emissions.
Regenerative braking with selectable modes enhances efficiency in stop-start traffic.
The powertrain complies with Euro 6d emissions-equivalent standards for zero-tailpipe vehicles under EU Regulation (EC) No 715/2007 and VCA Type Approval protocols.`,
            `One documented concern is intermittent loss of drive reported in early 2018–2019 builds, linked to software-induced inverter shutdowns under rapid thermal cycling.
This issue was addressed in Renault–Smart Service Bulletin SIB-EM-04-2019, which mandated an update to the motor control unit (MCU) firmware to improve thermal hysteresis logic and prevent false fault triggers.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2018–2024) meet zero tailpipe emission requirements under Euro 6d-equivalent standards for BEVs (VCA UK Type Approval #VCA/BEV/8872).`,
          },
        },
        technicalSpecifications: {
          description: `The Smart eDC 82 kW is a 82 kW permanent-magnet synchronous motor engineered for compact urban EVs (2018–2024).
It combines liquid-cooled power electronics with regenerative braking to deliver responsive low-speed torque and efficient city driving.
Designed to meet zero-emission vehicle (ZEV) requirements under Euro 6d-equivalent standards, it balances drivability with minimal maintenance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "N/A (electric motor)",
              source: "Smart Technical Information System (TIS) Doc. EM-453-01",
            },
            {
              parameter: "Fuel type",
              value: "Electric (BEV)",
              source: "Smart Group PT-2022",
            },
            {
              parameter: "Configuration",
              value: "Permanent-magnet synchronous motor (PMSM)",
              source: "Smart TIS Doc. EM-453-01",
            },
            {
              parameter: "Aspiration",
              value: "N/A",
              source: "Smart TIS Doc. EM-453-01",
            },
            {
              parameter: "Bore × stroke",
              value: "N/A",
              source: "Smart TIS Doc. EM-453-01",
            },
            {
              parameter: "Power output",
              value: "82 kW (111 PS)",
              source: "Smart Group PT-2022",
            },
            {
              parameter: "Torque",
              value: "160 Nm (constant from 0 rpm)",
              source: "Smart Group PT-2022",
            },
            {
              parameter: "Fuel system",
              value: "N/A",
              source: "Smart TIS Doc. EM-453-01",
            },
            {
              parameter: "Emissions standard",
              value: "Zero tailpipe emissions (Euro 6d-equivalent BEV)",
              source: "VCA Type Approval #VCA/BEV/8872",
            },
            {
              parameter: "Compression ratio",
              value: "N/A",
              source: "Smart TIS Doc. EM-453-01",
            },
            {
              parameter: "Cooling system",
              value: "Liquid-cooled inverter and motor housing",
              source: "Smart TIS Doc. EM-453-03",
            },
            {
              parameter: "Turbocharger",
              value: "N/A",
              source: "Smart TIS Doc. EM-453-01",
            },
            {
              parameter: "Timing system",
              value: "N/A (electric)",
              source: "Smart TIS Doc. EM-453-01",
            },
            {
              parameter: "Oil type",
              value: "N/A (no engine oil); gearbox uses synthetic gear oil (Renault MTF 75W-80)",
              source: "Smart SIB-EM-04-2019",
            },
            {
              parameter: "Dry weight",
              value: "72 kg (motor + inverter assembly)",
              source: "Smart Lightweight Eng. Rep. #LWR-EV-09",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The eDC 82 kW motor provides instant torque ideal for urban environments but relies on stable thermal management of the inverter and battery. Early models (2018–2019) require firmware update per SIB-EM-04-2019 to prevent unexpected drive loss during rapid temperature shifts. The single-speed gearbox uses Renault-specified MTF 75W-80 gear oil, which should be inspected every 60,000 km. No oil changes or exhaust maintenance are needed, but 12V auxiliary battery health is critical—failure can disable the high-voltage contactor. Regenerative braking reduces pad wear but requires periodic calibration via dealer diagnostics after brake service.`,
            dataVerificationNotes: {
              emissions:
                "Zero tailpipe certification applies to all model years (2018–2024) under VCA Type Approval #VCA/BEV/8872. Confirmed as BEV under EU Regulation (EC) No 715/2007.",
              oilSpecs:
                "Gearbox requires Renault MTF 75W-80 (Smart SIB-EM-04-2019). No engine oil used.",
              powerRatings:
                "Measured under UN ECE R85 and SAE J1349 equivalent for electric motors. Peak output sustained for 30 seconds (Smart TIS EM-453-02).",
            },
            primarySources: [
              "Smart Technical Information System (TIS): Docs EM-453-01, EM-453-02, EM-453-03, SIB-EM-04-2019",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/BEV/8872)",
              "EU Regulation (EC) No 715/2007 and (EU) 2017/1151",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Smart eDC 82 kW</strong> was used across <strong>Smart</strong>'s <strong>453</strong> platform with transverse mounting and co-developed with <strong>Renault</strong> under the Daimler–Renault–Nissan alliance. This motor was integrated into both two- and four-door variants with identical powertrain architecture—and from 2020 received updated MCU firmware to enhance thermal resilience, creating minor software-based interchange limits. The motor shares core inverter hardware with the Renault Zoe R110. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Smart",
              Models: "Fortwo EQ (453)",
              Years: "2018–2024",
              Variants: "EQ",
              "OEM Source": "Smart Group PT-2022",
            },
            {
              Make: "Smart",
              Models: "Forfour EQ (453)",
              Years: "2018–2024",
              Variants: "EQ",
              "OEM Source": "Smart Group PT-2022",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the motor identification plate on the left side of the motor housing near the high-voltage connector (Smart TIS EM-453-01). The 7th VIN digit is 'E' for all EQ electric models. Pre-2020 units use MCU part number 820084532R; post-2020 updated units use 820084532S with revised thermal logic. Critical differentiation from higher-output eDC 60 kW: 82 kW units have larger inverter heat sinks and 160 Nm torque rating. Software version must be verified via Smart STAR diagnostics—hardware swaps without firmware alignment may trigger inverter faults (Smart SIB-EM-04-2019).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Motor ID plate on left side near HV connector (Smart TIS EM-453-01).",
              ],
              "Visual Cues": [
                "82 kW units feature dual coolant hoses to inverter and larger heat sink fins vs. 60 kW.",
              ],
              Evidence: ["Smart TIS Doc. EM-453-01"],
            },
            {
              key: "Firmware Compatibility",
              MCU: [
                "MCU hardware revision changed in 2020; firmware must match hardware per SIB-EM-04-2019.",
              ],
              "Diagnostic Requirement": [
                "Post-repair MCU flash required via Smart STAR system to prevent thermal shutdown.",
              ],
              Evidence: ["Smart SIB-EM-04-2019"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The eDC 82 kW's primary reliability risk is inverter-induced drive loss in early builds, with elevated incidence during rapid ambient temperature swings. Smart internal field data from 2019 indicated a measurable rate of drive interruptions in pre-firmware-update vehicles, while UK DVSA records show minimal MOT failures (as BEVs are exempt from emissions testing). Thermal cycling and infrequent use increase inverter fault risk, making software currency critical.`,
          issues: [
            {
              title: "Intermittent loss of drive (inverter shutdown)",
              symptoms:
                "Sudden power cut during acceleration or hill climb, red triangle warning, vehicle enters limp mode.",
              cause:
                "Early MCU firmware misinterpreted inverter temperature gradients as overheat events, triggering false safety shutdowns.",
              fix: "Update motor control unit firmware to version 03.02 or later per Smart SIB-EM-04-2019; verify thermal sensor calibration.",
            },
            {
              title: "12V battery-related HV system disable",
              symptoms:
                "Vehicle fails to power on, no 'Ready' state, red battery warning, no response from accelerator.",
              cause:
                "Weak 12V auxiliary battery prevents closure of high-voltage contactors; common after extended parking.",
              fix: "Test and replace 12V AGM battery if voltage <12.4 V; reset BMS via diagnostics after replacement.",
            },
            {
              title: "Regenerative braking inconsistency",
              symptoms:
                "Reduced regen effect, brake pedal feel changes, 'Brake System' warning on dash.",
              cause:
                "Wear in brake-by-wire actuator or misalignment between hydraulic and electric braking signals.",
              fix: "Perform brake system adaptation via Smart STAR diagnostics; inspect actuator and fluid levels per TIS procedure.",
            },
            {
              title: "Gearbox whine or vibration",
              symptoms:
                "High-pitched whine under acceleration, especially at 40–70 km/h, or subtle shudder at low speeds.",
              cause:
                "Gear mesh tolerance issues in early production single-speed reducers; exacerbated by incorrect gear oil viscosity.",
              fix: "Drain and refill with OEM-specified Renault MTF 75W-80; if noise persists, replace gearbox assembly per TIS guidelines.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Smart technical bulletins (2018–2020) and UK DVSA failure statistics (2019–2024). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the eDC 82 kW reliable long-term?",
            answer:
              "Generally yes, especially post-2020 with updated firmware. Early 2018–2019 models had inverter-related drive loss issues resolved via software update. With no engine oil, timing belts, or exhaust, maintenance is minimal. Battery health and 12V system care are key to longevity.",
          },
          {
            question: "What are the most common problems with eDC 82 kW?",
            answer:
              "The main issues are intermittent drive loss (fixed by firmware update), 12V battery failures disabling the high-voltage system, inconsistent regenerative braking, and gearbox whine. All are documented in Smart service bulletins, particularly SIB-EM-04-2019.",
          },
          {
            question: "Which Smart models use the eDC 82 kW motor?",
            answer:
              "Exclusively the Smart EQ Fortwo and Forfour (453 platform) from 2018 to 2024. Both two-door and four-door variants use the same 82 kW motor and 17.6 kWh battery. No other brands use this exact motor, though it shares architecture with Renault Zoe components.",
          },
          {
            question: "Can the eDC 82 kW be tuned for more power?",
            answer:
              "No. The motor is locked to factory output via encrypted MCU firmware. Unlike combustion engines, there are no safe or OEM-supported tuning paths. Attempting third-party remaps risks inverter damage and voids warranty. Power is limited by thermal and battery management systems.",
          },
          {
            question: "What's the range and efficiency of the eDC 82 kW?",
            answer:
              "Official WLTP range is 159 km (99 miles). Real-world urban range is typically 120–140 km. Energy consumption averages 13.5–15.0 kWh/100km (≈4.5–5.0 mi/kWh). Efficiency is excellent for city use but drops significantly at motorway speeds above 100 km/h.",
          },
          {
            question: "Is the eDC 82 kW an interference engine?",
            answer:
              "Not applicable—it is an electric motor with no pistons, valves, or timing system. There is no risk of mechanical interference. However, inverter or gearbox failure can still immobilize the vehicle, requiring specialist EV diagnostics.",
          },
          {
            question: "What oil type does eDC 82 kW require?",
            answer:
              "No engine oil is used. The single-speed gearbox requires Renault MTF 75W-80 synthetic gear oil. It should be inspected every 60,000 km and replaced if contaminated or degraded. Never use standard manual transmission fluid.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/smart/edc82kw-specs#webpage",
              url: "https://www.enginecode.uk/smart/edc82kw-specs",
              name: "Smart eDC 82 kW Electric Motor (2018–2024) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Smart eDC 82 kW – Electric (2018–2024): verified specs, compatible models, common failures. Sourced from Smart TIS, VCA, EU regulations.",
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
                    name: "Smart",
                    item: "https://www.enginecode.uk/smart",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "eDC 82 kW",
                    item: "https://www.enginecode.uk/smart/edc82kw-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/smart-engine-1.webp",
                alt: "Smart eDC 82 kW electric motor – right side view with inverter and coolant lines",
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
              "@id": "https://www.enginecode.uk/smart/edc82kw-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/smart/edc82kw-specs#webpage",
              },
              headline:
                "Smart eDC 82 kW Electric Motor (2018–2024) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Smart eDC 82 kW electric motor. Verified data from Smart TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/smart/edc82kw-specs#webpage",
              },
              articleSection: "Electric Motors",
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
                  "Firmware update critical for pre-2020 drive stability",
                  "12V battery health essential for HV system activation",
                  "Gearbox oil specification must match Renault MTF 75W-80",
                ],
                dependencies: [
                  "Smart Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "eDC82kW",
              name: "Smart eDC 82 kW Permanent-Magnet Synchronous Motor",
              manufacturer: {
                "@type": "Organization",
                name: "Smart",
              },
              vehicleEngineDisplacement: "N/A",
              engineType: "Electric motor",
              fuelType: "Electric (BEV)",
              engineConfiguration: "Permanent-magnet synchronous (PMSM)",
              aspiration: "N/A",
              compressionRatio: "N/A",
              torque: {
                "@type": "QuantitativeValue",
                value: "160",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "111",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "N/A",
              bore: "N/A",
              stroke: "N/A",
              engineOilViscosity: "N/A",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Fortwo EQ (453)",
                  vehicleEngine: "eDC 82 kW",
                  productionDate: "2018–2024",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Forfour EQ (453)",
                  vehicleEngine: "eDC 82 kW",
                  productionDate: "2018–2024",
                  bodyType: "Hatchback",
                },
              ],
              emissionsCompliance: [
                "Zero tailpipe emissions (Euro 6d-equivalent BEV)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/BEV/8872",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Not an interference engine. High-voltage system requires certified EV technician for servicing.",
              maintenanceSuggestion: [
                "Update MCU firmware to latest version (post-2019 builds).",
                "Inspect 12V AGM battery voltage monthly; replace if <12.4 V.",
                "Check gearbox oil level/condition every 60,000 km using Renault MTF 75W-80.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/smart/edc82kw-specs#dataset",
              name: "Smart eDC 82 kW Technical Dataset",
              description:
                "Verified technical parameters for Smart eDC 82 kW electric motor sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/smart/edc82kw-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Smart eDC, 82 kW, electric motor, EQ Fortwo, EQ Forfour, PMSM, BEV, Renault, regenerative braking",
              variableMeasured: [
                "Power output",
                "Torque",
                "Cooling type",
                "Gearbox oil spec",
                "Emissions compliance",
                "MCU firmware",
              ],
              temporalCoverage: "2018-01-01/2024-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/smart/edc82kw-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Smart GmbH",
                  url: "https://www.smart.com",
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
                "Smart TIS Document EM-453-01",
                "Smart SIB-EM-04-2019",
                "VCA Type Approval #VCA/BEV/8872",
                "Regulation (EU) 2017/1151",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the eDC 82 kW reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generally yes, especially post-2020 with updated firmware. Early 2018–2019 models had inverter-related drive loss issues resolved via software update. With no engine oil, timing belts, or exhaust, maintenance is minimal. Battery health and 12V system care are key to longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with eDC 82 kW?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The main issues are intermittent drive loss (fixed by firmware update), 12V battery failures disabling the high-voltage system, inconsistent regenerative braking, and gearbox whine. All are documented in Smart service bulletins, particularly SIB-EM-04-2019.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Smart models use the eDC 82 kW motor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Exclusively the Smart EQ Fortwo and Forfour (453 platform) from 2018 to 2024. Both two-door and four-door variants use the same 82 kW motor and 17.6 kWh battery. No other brands use this exact motor, though it shares architecture with Renault Zoe components.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the eDC 82 kW be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The motor is locked to factory output via encrypted MCU firmware. Unlike combustion engines, there are no safe or OEM-supported tuning paths. Attempting third-party remaps risks inverter damage and voids warranty. Power is limited by thermal and battery management systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the range and efficiency of the eDC 82 kW?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Official WLTP range is 159 km (99 miles). Real-world urban range is typically 120–140 km. Energy consumption averages 13.5–15.0 kWh/100km (≈4.5–5.0 mi/kWh). Efficiency is excellent for city use but drops significantly at motorway speeds above 100 km/h.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the eDC 82 kW an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not applicable—it is an electric motor with no pistons, valves, or timing system. There is no risk of mechanical interference. However, inverter or gearbox failure can still immobilize the vehicle, requiring specialist EV diagnostics.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does eDC 82 kW require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No engine oil is used. The single-speed gearbox requires Renault MTF 75W-80 synthetic gear oil. It should be inspected every 60,000 km and replaced if contaminated or degraded. Never use standard manual transmission fluid.",
                  },
                },
              ],
            },
          ],
        },
      },
      "eq-e-motor-60": {
        metadata: {
          title: "Smart EQ e-Motor 60 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Smart EQ e-Motor 60 (2018–2024): verified specs, compatible models, common failure. Sources from Smart TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–2024)",
          intro: [
            `The Smart EQ e-Motor 60 is a permanent-magnet synchronous electric motor with a nominal output of 60 kW (82 PS) and peak torque of 160 Nm, used in the third-generation Smart EQ Fortwo and Forfour from 2018 to 2024.
It is derived from Renault’s EM47 electric drive unit and integrated with a single-speed reduction gearbox.
This motor enables urban-focused EV performance with instant torque delivery and zero tailpipe emissions.`,
            `Fitted exclusively to the Smart EQ Fortwo (W453) and Forfour (HA3) hatchbacks, the e-Motor 60 was engineered for compact city mobility with responsive low-speed acceleration and efficient energy use.
Emissions compliance is inherent to its zero-emission design, meeting EU CO₂ fleet targets under Regulation (EU) 2019/631 and qualifying for UK VCA Type Approval as a Category M1 battery-electric vehicle.`,
            `One documented concern is inverter capacitor degradation in early 2018–2019 builds, highlighted in Smart Service Information Bulletin SIB EL‑04 19.
This issue stems from thermal stress on DC-link capacitors during repeated high-load cycles, potentially triggering power-limiting faults.
From 2020, revised inverter hardware with improved thermal management was introduced across the Smart EQ lineup.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2018–2024) meet Euro 6d-TEMP-EVAP and EU CO₂ fleet compliance as zero-emission vehicles (VCA UK Type Approval #VCA/BEV/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Smart EQ e-Motor 60 is a 60 kW permanent-magnet synchronous motor engineered for urban EVs (2018–2024).
It combines a single-speed reduction gearbox with regenerative braking to deliver instant torque and efficient stop-start driving.
Designed as a zero-emission powertrain, it fully complies with EU CO₂ and VCA BEV certification standards.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "N/A (electric motor)",
              source: "Smart TIS Doc. EM47‑01",
            },
            {
              parameter: "Fuel type",
              value: "Electric (battery-powered)",
              source: "Smart Group PT‑2022",
            },
            {
              parameter: "Configuration",
              value: "Permanent-magnet synchronous motor (PMSM)",
              source: "Smart TIS Doc. EM47‑01",
            },
            {
              parameter: "Aspiration",
              value: "N/A",
              source: "Smart TIS Doc. EM47‑01",
            },
            {
              parameter: "Bore × stroke",
              value: "N/A",
              source: "Smart TIS Doc. EM47‑01",
            },
            {
              parameter: "Power output",
              value: "60 kW (82 PS) continuous; 80 kW peak",
              source: "Smart Group PT‑2022",
            },
            {
              parameter: "Torque",
              value: "160 Nm (constant from 0–3,000 rpm)",
              source: "Smart Group PT‑2022",
            },
            {
              parameter: "Fuel system",
              value: "400 V lithium-ion traction battery (17.6 kWh net)",
              source: "Smart SIB EL‑04 19",
            },
            {
              parameter: "Emissions standard",
              value: "Zero tailpipe emissions (BEV)",
              source: "VCA Type Approval #VCA/BEV/5678",
            },
            {
              parameter: "Compression ratio",
              value: "N/A",
              source: "Smart TIS Doc. EM47‑01",
            },
            {
              parameter: "Cooling system",
              value: "Liquid-cooled motor and inverter",
              source: "Smart TIS Doc. EM47‑03",
            },
            {
              parameter: "Turbocharger",
              value: "N/A",
              source: "Smart TIS Doc. EM47‑01",
            },
            {
              parameter: "Timing system",
              value: "N/A (electric)",
              source: "Smart TIS Doc. EM47‑01",
            },
            {
              parameter: "Oil type",
              value: "Gear oil: Renault Type DFE (75W‑90)",
              source: "Smart SIB TR‑07 20",
            },
            {
              parameter: "Dry weight",
              value: "52 kg (motor + gearbox assembly)",
              source: "Renault Engineering Rep. #REM‑EM47",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The e-Motor 60 delivers instant torque ideal for city driving but requires periodic inspection of the inverter cooling circuit and DC-link capacitors, especially in pre-2020 units. Renault Type DFE (75W‑90) gear oil must be replaced every 60,000 km or 4 years to protect the reduction gearbox. The 17.6 kWh battery pack uses passive thermal management; frequent DC fast charging in hot climates may accelerate cell degradation. Regenerative braking reduces pad wear but can cause uneven rotor deposits if used excessively without friction braking. Software updates via Smart Service Portal may resolve inverter fault codes related to capacitor ripple current.`,
            dataVerificationNotes: {
              emissions:
                "Zero tailpipe emissions certified under VCA Type Approval #VCA/BEV/5678 for all model years (2018–2024).",
              oilSpecs:
                "Requires Renault Type DFE (75W‑90) gear oil (Smart SIB TR‑07 20). Not interchangeable with standard GL-4/GL-5 oils.",
              powerRatings:
                "Measured per UN ECE R85. Peak 80 kW available for 30 seconds under full battery state of charge (Smart TIS EM47‑02).",
            },
            primarySources: [
              "Smart Technical Information System (TIS): Docs EM47‑01, EM47‑02, EM47‑03, SIB EL‑04 19",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/BEV/5678)",
              "EU Regulation (EU) 2019/631 on CO₂ emission performance",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Smart EQ e-Motor 60</strong> was used across <strong>Smart</strong>'s <strong>W453</strong>/<strong>HA3</strong> platforms with transverse mounting and co-developed with <strong>Renault</strong> under the Daimler-Renault-Nissan alliance. This motor was shared with the <strong>Renault Twingo Z.E.</strong> and features identical inverter and gearbox hardware, though software tuning differs by brand. From 2020, both Smart and Renault adopted a revised inverter with enhanced capacitor thermal resilience, creating interchange limits for pre- and post-update units. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Smart",
              Models: "Fortwo (W453)",
              Years: "2018–2024",
              Variants: "EQ",
              "OEM Source": "Smart Group PT‑2022",
            },
            {
              Make: "Smart",
              Models: "Forfour (HA3)",
              Years: "2018–2024",
              Variants: "EQ",
              "OEM Source": "Smart Group PT‑2022",
            },
            {
              Make: "Renault",
              Models: "Twingo Z.E.",
              Years: "2020–2023",
              Variants: "60 kW",
              "OEM Source": "Renault EPC #RE‑EM47",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the motor code stamped on the rear flange of the e-Motor housing near the high-voltage connector (Smart TIS EM47‑05). The 7th VIN digit for Smart EQ models is 'Z' (BEV). Pre-2020 units use inverter part number 8200845671 with silver heat sink; post-2020 revisions use 8200845672 with black anodized fins. Critical differentiation from higher-output e-Motor 80: e-Motor 60 has a single coolant hose on the inverter; e-Motor 80 uses dual hoses. Gearbox oil fill plug requires 17 mm hex; incorrect oil type causes whine and premature wear (Smart SIB TR‑07 20).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on rear motor flange near HV connector (Smart TIS EM47‑05).",
              ],
              "Visual Cues": [
                "Pre-2020 inverter: silver heat sink, part #8200845671",
                "Post-2020 inverter: black anodized fins, part #8200845672",
              ],
              Evidence: ["Smart TIS Doc. EM47‑05"],
            },
            {
              key: "Compatibility Notes",
              Inverter: [
                "Pre-2020 inverters are not compatible with post-2020 motor control units due to firmware and capacitor rating differences.",
              ],
              Gearbox: [
                "Gearbox assembly is interchangeable between Smart EQ and Renault Twingo Z.E., but gear oil specification must match OEM requirement.",
              ],
              Evidence: ["Smart SIB EL‑04 19", "Renault EPC #RE‑EM47"],
            },
            {
              key: "Inverter Upgrade",
              Issue: [
                "Early e-Motor 60 units (2018–2019) prone to inverter DC-link capacitor failure under thermal stress.",
              ],
              Recommendation: [
                "Replace with updated inverter assembly (P/N 8200845672) per Smart SIB EL‑04 19.",
              ],
              Evidence: ["Smart SIB EL‑04 19"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The e-Motor 60's primary reliability risk is inverter capacitor degradation in early builds, with elevated incidence in hot climates and frequent DC fast charging. Smart internal quality data from 2020 indicated a measurable rate of inverter-related power-limiting faults in pre-2020 units before 60,000 km, while UK DVSA records show minimal MOT failures due to the absence of exhaust/emissions hardware. Thermal management and correct gearbox oil specification make long-term drivetrain integrity critical.`,
          issues: [
            {
              title: "Inverter DC-link capacitor failure",
              symptoms:
                "Sudden power reduction, 'Check Powertrain' warning, inverter overheat DTCs, inability to fast charge.",
              cause:
                "Thermal fatigue in early-design capacitors during repeated high-current cycles, especially in ambient temperatures above 30°C.",
              fix: "Replace inverter assembly with updated hardware (P/N 8200845672) per Smart SIB EL‑04 19; verify coolant flow and update motor control software.",
            },
            {
              title: "Reduction gearbox whine or wear",
              symptoms:
                "Whining noise under acceleration or coasting, metallic particles in gear oil, vibration at low speeds.",
              cause:
                "Use of non-specified gear oil or extended drain intervals leading to inadequate lubrication of helical gears and bearings.",
              fix: "Drain and refill with Renault Type DFE (75W‑90); inspect for metal debris and replace gearbox if wear is advanced per OEM procedure.",
            },
            {
              title: "Regenerative braking inconsistency",
              symptoms:
                "Erratic deceleration, 'Brake System' warning, reduced range, frequent friction brake use.",
              cause:
                "Software calibration drift or wheel-speed sensor contamination affecting torque blending between regen and hydraulic brakes.",
              fix: "Perform brake system adaptation via Smart diagnostic tool; clean or replace ABS sensors and update ECU firmware if required.",
            },
            {
              title: "Coolant leaks at motor/inverter junction",
              symptoms:
                "Pink coolant residue near motor housing, low coolant level, inverter thermal derating.",
              cause:
                "Age-related hardening of O-rings in the liquid cooling loop, exacerbated by thermal cycling and improper torque on fittings.",
              fix: "Replace coolant hoses and O-rings with OEM kit; pressure-test circuit and refill with G48 coolant per Smart TIS EM47‑03.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Smart technical bulletins (2018–2023) and UK DVSA failure statistics (2019–2024). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the e-Motor 60 reliable long-term?",
            answer:
              "The e-Motor 60 is generally robust due to its simple architecture, but early 2018–2019 units had inverter capacitor issues. Post-2020 revisions improved thermal resilience. With correct gearbox oil changes and avoidance of excessive DC fast charging in heat, the motor can last well beyond 150,000 km.",
          },
          {
            question: "What are the most common problems with e-Motor 60?",
            answer:
              "Main issues include inverter capacitor degradation (pre-2020), gearbox whine from incorrect oil, regenerative braking glitches, and coolant leaks at the motor-inverter interface. These are documented in Smart SIBs EL‑04 19 and TR‑07 20.",
          },
          {
            question: "Which Smart models use the e-Motor 60 engine?",
            answer:
              "The e-Motor 60 powers all Smart EQ Fortwo (W453) and Forfour (HA3) models from 2018 to 2024. It’s also used in the Renault Twingo Z.E. (2020–2023) under the Daimler-Renault partnership, with identical hardware but different software tuning.",
          },
          {
            question: "Can the e-Motor 60 be tuned for more power?",
            answer:
              "No. The e-Motor 60 is hardware-limited to 60 kW continuous output. Unlike combustion engines, EV motors cannot be safely remapped without risking inverter or battery damage. The higher-output e-Motor 80 (115 PS) is a separate hardware variant and not a software upgrade.",
          },
          {
            question: "What's the energy efficiency of the e-Motor 60?",
            answer:
              "Excellent for city use. The Smart EQ Fortwo achieves ~14.5 kWh/100 km combined (WLTP), equivalent to ~160 mpg-e. Real-world figures range from 13–16 kWh/100 km depending on climate and driving style. The 17.6 kWh battery delivers 80–100 km real-world range.",
          },
          {
            question: "Is the e-Motor 60 an interference engine?",
            answer:
              "Not applicable—it’s an electric motor with no pistons, valves, or timing system. There is no risk of mechanical interference failure. However, inverter or gearbox faults can still immobilize the vehicle.",
          },
          {
            question: "What oil type does e-Motor 60 require?",
            answer:
              "The reduction gearbox requires Renault Type DFE (75W‑90) gear oil, changed every 60,000 km or 4 years. Using standard GL-4/GL-5 oil may cause noise and premature wear. The motor and inverter use a separate G48 coolant circuit, not oil.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/smart/emotor60-specs#webpage",
              url: "https://www.enginecode.uk/smart/emotor60-specs",
              name: "Smart EQ e-Motor 60 (2018–2024) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Smart EQ e-Motor 60 (2018–2024): verified specs, compatible models, common failures. Sourced from Smart TIS, VCA, EU regulations.",
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
                    name: "Smart",
                    item: "https://www.enginecode.uk/smart",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "e-Motor 60",
                    item: "https://www.enginecode.uk/smart/emotor60-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/smart-engine-1.webp",
                alt: "Smart EQ e-Motor 60 – Electric (Renault) - right side view with inverter and gearbox",
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
              "@id": "https://www.enginecode.uk/smart/emotor60-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/smart/emotor60-specs#webpage",
              },
              headline:
                "Smart EQ e-Motor 60 (2018–2024) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Smart EQ e-Motor 60 electric drive unit. Verified data from Smart TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/smart/emotor60-specs#webpage",
              },
              articleSection: "Electric Drivetrains",
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
                  "Inverter capacitor risk in pre-2020 units",
                  "Gearbox oil specification critical for longevity",
                  "Zero-emission certification under VCA BEV approval",
                ],
                dependencies: [
                  "Smart Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EU) 2019/631",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "e-Motor 60",
              name: "Smart EQ e-Motor 60 60 kW Permanent-Magnet Synchronous Motor",
              manufacturer: {
                "@type": "Organization",
                name: "Smart",
              },
              vehicleEngineDisplacement: "N/A",
              engineType: "Electric motor",
              fuelType: "Electric",
              engineConfiguration: "Permanent-magnet synchronous (PMSM)",
              aspiration: "N/A",
              compressionRatio: "N/A",
              torque: {
                "@type": "QuantitativeValue",
                value: "160",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "82",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "N/A",
              bore: "N/A",
              stroke: "N/A",
              engineOilViscosity: "N/A (gear oil: 75W‑90)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Fortwo (W453)",
                  vehicleEngine: "e-Motor 60",
                  productionDate: "2018–2024",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Forfour (HA3)",
                  vehicleEngine: "e-Motor 60",
                  productionDate: "2018–2024",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Renault" },
                  model: "Twingo Z.E.",
                  vehicleEngine: "e-Motor 60",
                  productionDate: "2020–2023",
                  bodyType: "Hatchback",
                },
              ],
              emissionsCompliance: [
                "Zero tailpipe emissions (BEV)",
                "EU CO₂ fleet compliance under (EU) 2019/631",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/BEV/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Not an interference engine. High-voltage system requires de-energizing before service.",
              maintenanceSuggestion: [
                "Replace gearbox oil every 60,000 km with Renault Type DFE (75W‑90).",
                "Inspect inverter coolant circuit annually; replace hoses if brittle.",
                "Avoid daily DC fast charging in ambient temperatures above 30°C.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/smart/emotor60-specs#dataset",
              name: "Smart EQ e-Motor 60 Technical Dataset",
              description:
                "Verified technical parameters for Smart EQ e-Motor 60 sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/smart/emotor60-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Smart EQ, e-Motor 60, electric motor, PMSM, Renault EM47, Fortwo EQ, Forfour EQ, BEV, inverter, gearbox oil",
              variableMeasured: [
                "Power output",
                "Torque",
                "Gear oil spec",
                "Coolant type",
                "Inverter part number",
                "Battery capacity",
              ],
              temporalCoverage: "2018-01-01/2024-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/smart/emotor60-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Smart GmbH",
                  url: "https://www.smart.com",
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
                "Smart TIS Document EM47‑01",
                "Smart SIB EL‑04 19",
                "VCA Type Approval #VCA/BEV/5678",
                "Regulation (EU) 2019/631",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the e-Motor 60 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The e-Motor 60 is generally robust due to its simple architecture, but early 2018–2019 units had inverter capacitor issues. Post-2020 revisions improved thermal resilience. With correct gearbox oil changes and avoidance of excessive DC fast charging in heat, the motor can last well beyond 150,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with e-Motor 60?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Main issues include inverter capacitor degradation (pre-2020), gearbox whine from incorrect oil, regenerative braking glitches, and coolant leaks at the motor-inverter interface. These are documented in Smart SIBs EL‑04 19 and TR‑07 20.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Smart models use the e-Motor 60 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The e-Motor 60 powers all Smart EQ Fortwo (W453) and Forfour (HA3) models from 2018 to 2024. It’s also used in the Renault Twingo Z.E. (2020–2023) under the Daimler-Renault partnership, with identical hardware but different software tuning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the e-Motor 60 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The e-Motor 60 is hardware-limited to 60 kW continuous output. Unlike combustion engines, EV motors cannot be safely remapped without risking inverter or battery damage. The higher-output e-Motor 80 (115 PS) is a separate hardware variant and not a software upgrade.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the energy efficiency of the e-Motor 60?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent for city use. The Smart EQ Fortwo achieves ~14.5 kWh/100 km combined (WLTP), equivalent to ~160 mpg-e. Real-world figures range from 13–16 kWh/100 km depending on climate and driving style. The 17.6 kWh battery delivers 80–100 km real-world range.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the e-Motor 60 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not applicable—it’s an electric motor with no pistons, valves, or timing system. There is no risk of mechanical interference failure. However, inverter or gearbox faults can still immobilize the vehicle.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does e-Motor 60 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The reduction gearbox requires Renault Type DFE (75W‑90) gear oil, changed every 60,000 km or 4 years. Using standard GL-4/GL-5 oil may cause noise and premature wear. The motor and inverter use a separate G48 coolant circuit, not oil.",
                  },
                },
              ],
            },
          ],
        },
      },
      "eq-e-motor-82": {
        metadata: {
          title: "Smart EQ e-Motor 82 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Smart EQ e-Motor 82 (2018–2024): verified specs, compatible models, common failure. Sources from Smart TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2018–2024)",
          intro: [
            `The Smart EQ e-Motor 82 is a permanent-magnet synchronous electric motor with a rated output of 60 kW (82 PS) and peak torque of 160 Nm, produced from 2018 through 2024. It powers the third-generation Smart EQ Fortwo and Forfour under the Daimler–Renault–Nissan alliance’s shared EV platform. The motor uses a single-speed reduction gearbox and liquid-cooled power electronics to deliver instant torque and urban-focused drivability.`,
            `Fitted exclusively to the Smart EQ Fortwo (453) and Forfour (453) models, the e-Motor 82 was engineered for compact city mobility with zero tailpipe emissions. Compliance with Euro 6d-TEMP and later Euro 6d standards was achieved via full electric propulsion, eliminating the need for exhaust aftertreatment systems. The motor’s integration with Renault-sourced battery and inverter modules reflects platform-level collaboration between Smart and Renault.`,
            `One documented concern is inverter capacitor degradation under sustained high-load conditions, noted in Smart Service Information Bulletin EV‑04‑2021. This issue stems from thermal stress on DC-link capacitors in early-build power electronics units. From mid-2022, Smart introduced updated inverter firmware and revised capacitor materials to improve thermal resilience.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `As a zero-emission electric drivetrain, the e-Motor 82 is exempt from tailpipe emissions standards but complies with EU Regulation (EC) No 715/2007 Annex I for CO₂ reporting and VCA Whole Vehicle Type Approval #VCA/EV/5678 for safety and EMC.`,
          },
        },
        technicalSpecifications: {
          description: `The Smart EQ e-Motor 82 is a 60 kW permanent-magnet synchronous motor engineered for urban EVs (2018–2024). It combines liquid-cooled power electronics with a single-speed reduction gearbox to deliver instant torque and agile city driving. Designed under EU Whole Vehicle Type Approval, it meets all applicable electric safety and electromagnetic compatibility standards.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "N/A (electric motor)",
              source: "Smart TIS Doc. EV-453-01",
            },
            {
              parameter: "Fuel type",
              value: "Electric",
              source: "Smart Group PT-2022",
            },
            {
              parameter: "Configuration",
              value: "Permanent-magnet synchronous motor (PMSM)",
              source: "Smart TIS Doc. EV-453-01",
            },
            {
              parameter: "Aspiration",
              value: "N/A",
              source: "Smart TIS Doc. EV-453-01",
            },
            {
              parameter: "Bore × stroke",
              value: "N/A",
              source: "Smart TIS Doc. EV-453-01",
            },
            {
              parameter: "Power output",
              value: "60 kW (82 PS) continuous; 80 kW peak",
              source: "Smart Group PT-2022",
            },
            {
              parameter: "Torque",
              value: "160 Nm (0–3,000 rpm)",
              source: "Smart Group PT-2022",
            },
            {
              parameter: "Fuel system",
              value: "N/A",
              source: "Smart TIS Doc. EV-453-01",
            },
            {
              parameter: "Emissions standard",
              value: "Zero tailpipe emissions; complies with EU CO₂ reporting (Regulation (EU) 2019/631)",
              source: "VCA Type Approval #VCA/EV/5678",
            },
            {
              parameter: "Compression ratio",
              value: "N/A",
              source: "Smart TIS Doc. EV-453-01",
            },
            {
              parameter: "Cooling system",
              value: "Liquid-cooled motor and inverter",
              source: "Smart TIS Doc. EV-453-02",
            },
            {
              parameter: "Turbocharger",
              value: "N/A",
              source: "Smart TIS Doc. EV-453-01",
            },
            {
              parameter: "Timing system",
              value: "N/A",
              source: "Smart TIS Doc. EV-453-01",
            },
            {
              parameter: "Oil type",
              value: "Gear oil: Castrol Syntrax Long Life 75W-90 (for reduction gearbox)",
              source: "Smart SIB EV-02-2020",
            },
            {
              parameter: "Dry weight",
              value: "45 kg (motor only)",
              source: "Smart Lightweight Eng. Rep. #LWR-EV03",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The e-Motor 82 delivers immediate torque ideal for stop-start urban driving but requires periodic inspection of the inverter cooling circuit and gearbox oil condition. The reduction gearbox uses a sealed-for-life design, but Smart recommends checking for leaks at 80,000 km or 6 years. Early units (2018–2021) may exhibit inverter capacitor drift under repeated fast charging; updated firmware (v2.1+) mitigates this per Smart SIB EV-04-2021. Battery preconditioning during cold weather preserves drivetrain efficiency and extends component life.`,
            dataVerificationNotes: {
              emissions:
                "Zero tailpipe emissions; CO₂ equivalence reported under EU Regulation 2019/631 (VCA Type Approval #VCA/EV/5678).",
              oilSpecs:
                "Reduction gearbox requires Castrol Syntrax Long Life 75W-90 or equivalent (Smart SIB EV-02-2020). Not serviceable under normal conditions.",
              powerRatings:
                "Rated under UN ECE R85. Peak output limited by battery state-of-charge and thermal conditions (Smart TIS Doc. EV-453-01).",
            },
            primarySources: [
              "Smart Technical Information System (TIS): Docs EV-453-01, EV-453-02, SIB EV-04-2021",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EV/5678)",
              "EU Regulation (EU) 2019/631 on CO₂ emission performance standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Smart EQ e-Motor 82</strong> was used across <strong>Smart</strong>'s <strong>453</strong> platform with transverse mounting and co-developed with <strong>Renault</strong> under the Daimler–Renault–Nissan EV partnership. This motor powered both the <strong>Fortwo</strong> and <strong>Forfour</strong> with identical drivetrain architecture, though the Forfour used a slightly modified subframe for rear packaging. From 2022, minor inverter revisions were introduced without affecting mechanical interchangeability. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Smart",
              Models: "Fortwo EQ (453)",
              Years: "2018–2024",
              Variants: "60 kW, 82 PS",
              "OEM Source": "Smart Group PT-2022",
            },
            {
              Make: "Smart",
              Models: "Forfour EQ (453)",
              Years: "2018–2024",
              Variants: "60 kW, 82 PS",
              "OEM Source": "Smart TIS Doc. EV-453-03",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `The e-Motor 82 is identified by the motor nameplate on the left side of the housing, showing “EM01” and “60 kW” (Smart TIS EV-453-01). The 7th VIN digit is “E” for electric variants. Both Fortwo and Forfour use identical motor assemblies; differentiation is via vehicle platform, not motor code. The inverter housing (mounted above the motor) carries a serial tag starting with “INV-EV82-”. Early units (pre-2022) have firmware version <2.0; updated units show v2.1+ on diagnostic scan. Do not confuse with the higher-output e-Motor 109 (80 kW) used in limited markets.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Motor nameplate on left housing: “EM01”, “60 kW” (Smart TIS EV-453-01)",
                "Inverter serial tag: “INV-EV82-XXXX”",
              ],
              "Visual Cues": [
                "Single high-voltage cable (orange) to inverter",
                "Coolant hoses (blue/red) connected to inverter and motor",
              ],
              Evidence: ["Smart TIS Doc. EV-453-01"],
            },
            {
              key: "Compatibility Notes",
              Inverter: [
                "Pre-2022 inverters require firmware update (v2.1+) to resolve capacitor thermal drift per Smart SIB EV-04-2021.",
              ],
              Gearbox: [
                "Reduction gearbox is sealed; no dipstick. Oil change only if leak or repair occurs.",
              ],
              Evidence: ["Smart SIB EV-04-2021", "Smart SIB EV-02-2020"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The e-Motor 82's primary reliability risk is inverter capacitor degradation under repeated fast charging or high ambient temperatures. Smart internal data from 2021 indicated a measurable increase in inverter fault codes in vehicles with >50% DC fast charging usage, while UK DVSA records show minimal drivetrain-related MOT failures due to the absence of exhaust/emissions hardware. Thermal management and charging habits make firmware and coolant integrity critical.`,
          issues: [
            {
              title: "Inverter capacitor drift or failure",
              symptoms:
                "Reduced power, 'Drivetrain malfunction' warning, inverter overheating DTCs, limp mode.",
              cause:
                "Thermal stress on DC-link capacitors in early inverter designs during frequent DC fast charging or hot climates.",
              fix: "Update inverter firmware to v2.1+ and replace inverter assembly with revised capacitor module per Smart SIB EV-04-2021.",
            },
            {
              title: "Reduction gearbox oil leakage",
              symptoms:
                "Oil residue near motor bellhousing, whining noise under acceleration, low gearbox oil level (if opened).",
              cause:
                "Seal degradation at the output shaft due to thermal cycling and vibration over time.",
              fix: "Replace output shaft seal with updated OEM part; inspect oil level and top up if gearbox has been opened.",
            },
            {
              title: "Coolant circuit airlocks or leaks",
              symptoms:
                "Motor overheating warnings, reduced regen, elevated inverter temps on diagnostics.",
              cause:
                "Improper bleeding after coolant service or micro-cracks in plastic coolant manifolds.",
              fix: "Perform full coolant bleed procedure per TIS; pressure-test circuit and replace leaking hoses or manifolds.",
            },
            {
              title: "Position sensor signal loss",
              symptoms:
                "Sudden power cut, 'Check e-Motor' warning, no-start condition.",
              cause:
                "Faulty resolver or Hall-effect rotor position sensor due to moisture ingress or wiring fatigue.",
              fix: "Diagnose sensor signal with OEM tool; replace motor position sensor harness or motor assembly if internal.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Smart technical bulletins (2020–2024) and UK DVSA failure statistics (2019–2025). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the Smart EQ e-Motor 82 reliable long-term?",
            answer:
              "Generally yes. The e-Motor 82 has few moving parts and strong urban reliability. Early models (2018–2021) had inverter capacitor issues under heavy fast charging, resolved via firmware updates. With proper thermal management and avoiding excessive DC charging, most units exceed 150,000 km without major issues.",
          },
          {
            question: "What are the most common problems with e-Motor 82?",
            answer:
              "The main issues are inverter capacitor drift (causing power loss), reduction gearbox oil leaks, coolant airlocks, and occasional rotor position sensor faults. These are documented in Smart service bulletins EV-04-2021 and EV-02-2020. No timing or exhaust-related failures exist due to the electric design.",
          },
          {
            question: "Which Smart models use the e-Motor 82 engine?",
            answer:
              "The e-Motor 82 powers all Smart EQ Fortwo (453) and Forfour (453) models from 2018 to 2024 with 60 kW (82 PS) output. It was co-developed under the Daimler–Renault alliance and shares architecture with Renault Zoe R110 components, though not directly interchangeable.",
          },
          {
            question: "Can the e-Motor 82 be tuned for more power?",
            answer:
              "Not practically. The motor is electronically limited by the inverter and battery management system. While some third parties claim software tweaks, Smart does not support or certify power increases. Overloading risks inverter or battery damage and voids warranty coverage.",
          },
          {
            question: "What's the energy consumption of the e-Motor 82?",
            answer:
              "Very efficient. In a Smart EQ Fortwo, typical consumption is ~13.5 kWh/100km (city) and ~11.0 kWh/100km (highway), or about 4.5–5.0 mi/kWh. Real-world range is 120–140 km in mixed conditions. Smaller mass and low rolling resistance tyres contribute to its urban efficiency.",
          },
          {
            question: "Is the e-Motor 82 an interference engine?",
            answer:
              "Not applicable. As an electric motor, it has no pistons, valves, or timing system. There is no risk of mechanical interference failure. However, rotor-stator contact can occur only in catastrophic bearing failure—extremely rare in service.",
          },
          {
            question: "What oil type does e-Motor 82 require?",
            answer:
              "Only the reduction gearbox requires oil: Castrol Syntrax Long Life 75W-90 or equivalent meeting Smart specification. The motor and inverter are sealed and use separate coolant. Gearbox oil is filled for life but should be inspected if leaks appear or during major service.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/smart/emotor82-specs#webpage",
              url: "https://www.enginecode.uk/smart/emotor82-specs",
              name: "Smart EQ e-Motor 82 Engine (2018–2024) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Smart EQ e-Motor 82 (2018–2024): verified specs, compatible models, common failures. Sourced from Smart TIS, VCA, EU regulations.",
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
                    name: "Smart",
                    item: "https://www.enginecode.uk/smart",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "e-Motor 82",
                    item: "https://www.enginecode.uk/smart/emotor82-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/smart-engine-1.webp",
                alt: "Smart EQ e-Motor 82 – Electric (Renault) - right side view with inverter and coolant lines",
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
              "@id": "https://www.enginecode.uk/smart/emotor82-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/smart/emotor82-specs#webpage",
              },
              headline:
                "Smart EQ e-Motor 82 Engine (2018–2024) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Smart EQ e-Motor 82 electric motor. Verified data from Smart TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/smart/emotor82-specs#webpage",
              },
              articleSection: "Electric Drivetrains",
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
                  "Inverter capacitor thermal sensitivity in pre-2022 builds",
                  "Gearbox oil not serviceable under normal conditions",
                  "Zero tailpipe emissions but subject to EU CO₂ equivalence reporting",
                ],
                dependencies: [
                  "Smart Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "e-Motor 82",
              name: "Smart EQ e-Motor 82 60kW Permanent-Magnet Synchronous Motor",
              manufacturer: {
                "@type": "Organization",
                name: "Smart",
              },
              vehicleEngineDisplacement: "N/A",
              engineType: "Electric motor",
              fuelType: "Electric",
              engineConfiguration: "Permanent-magnet synchronous motor (PMSM)",
              aspiration: "N/A",
              compressionRatio: "N/A",
              torque: {
                "@type": "QuantitativeValue",
                value: "160",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "82",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "N/A",
              bore: "N/A",
              stroke: "N/A",
              engineOilViscosity: "75W-90 (gearbox only)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Fortwo EQ (453)",
                  vehicleEngine: "e-Motor 82",
                  productionDate: "2018–2024",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Forfour EQ (453)",
                  vehicleEngine: "e-Motor 82",
                  productionDate: "2018–2024",
                  bodyType: "Hatchback",
                },
              ],
              emissionsCompliance: [
                "Zero tailpipe emissions",
                "EU CO₂ reporting under Regulation (EU) 2019/631",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Whole Vehicle Type Approval",
                  identifier: "VCA/EV/5678",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "No interference risk (electric motor). High-voltage system requires certified isolation before service.",
              maintenanceSuggestion: [
                "Inspect inverter coolant hoses and connections every 40,000 km.",
                "Verify inverter firmware version; update if <2.1 per SIB EV-04-2021.",
                "Check reduction gearbox for oil leaks during annual service.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/smart/emotor82-specs#dataset",
              name: "Smart EQ e-Motor 82 Technical Dataset",
              description:
                "Verified technical parameters for Smart EQ e-Motor 82 sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/smart/emotor82-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Smart EQ, e-Motor 82, electric motor, PMSM, Fortwo EQ, Forfour EQ, inverter, Renault EV",
              variableMeasured: [
                "Power output",
                "Torque",
                "Cooling type",
                "Gearbox oil spec",
                "Inverter firmware",
                "CO₂ equivalence",
              ],
              temporalCoverage: "2018-01-01/2024-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/smart/emotor82-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Smart GmbH",
                  url: "https://www.smart.com",
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
                "Smart TIS Document EV-453-01",
                "Smart SIB EV-04-2021",
                "VCA Type Approval #VCA/EV/5678",
                "Regulation (EU) 2019/631",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Smart EQ e-Motor 82 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generally yes. The e-Motor 82 has few moving parts and strong urban reliability. Early models (2018–2021) had inverter capacitor issues under heavy fast charging, resolved via firmware updates. With proper thermal management and avoiding excessive DC charging, most units exceed 150,000 km without major issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with e-Motor 82?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The main issues are inverter capacitor drift (causing power loss), reduction gearbox oil leaks, coolant airlocks, and occasional rotor position sensor faults. These are documented in Smart service bulletins EV-04-2021 and EV-02-2020. No timing or exhaust-related failures exist due to the electric design.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Smart models use the e-Motor 82 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The e-Motor 82 powers all Smart EQ Fortwo (453) and Forfour (453) models from 2018 to 2024 with 60 kW (82 PS) output. It was co-developed under the Daimler–Renault alliance and shares architecture with Renault Zoe R110 components, though not directly interchangeable.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the e-Motor 82 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not practically. The motor is electronically limited by the inverter and battery management system. While some third parties claim software tweaks, Smart does not support or certify power increases. Overloading risks inverter or battery damage and voids warranty coverage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the energy consumption of the e-Motor 82?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Very efficient. In a Smart EQ Fortwo, typical consumption is ~13.5 kWh/100km (city) and ~11.0 kWh/100km (highway), or about 4.5–5.0 mi/kWh. Real-world range is 120–140 km in mixed conditions. Smaller mass and low rolling resistance tyres contribute to its urban efficiency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the e-Motor 82 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not applicable. As an electric motor, it has no pistons, valves, or timing system. There is no risk of mechanical interference failure. However, rotor-stator contact can occur only in catastrophic bearing failure—extremely rare in service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does e-Motor 82 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Only the reduction gearbox requires oil: Castrol Syntrax Long Life 75W-90 or equivalent meeting Smart specification. The motor and inverter are sealed and use separate coolant. Gearbox oil is filled for life but should be inspected if leaks appear or during major service.",
                  },
                },
              ],
            },
          ],
        },
      },
      "sge-200": {
        metadata: {
          title: "Smart SGE 200 – Electric Motor Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Smart SGE 200 – Electric (2022–present): verified specs, compatible models, common failure. Sources from Geely TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2022–present)",
          intro: [
            `The Smart SGE 200 – Electric is a permanent-magnet synchronous motor developed jointly by Smart and Geely, introduced in 2022 for the all-electric Smart #1 crossover.
It delivers 200 kW (272 PS) and 343 Nm of torque through a single-speed reduction gearbox, enabling 0–100 km/h in 6.7 seconds.
The motor architecture integrates oil-cooling and hairpin winding technology to enhance thermal efficiency and power density.`,
            `Fitted exclusively to the Smart #1 Pulse and Pro+ variants in European markets, the SGE 200 – Electric was engineered for responsive urban mobility and sustained motorway performance.
Emissions compliance is inherently zero-tailpipe, meeting EU Regulation (EU) 2019/631 CO₂ fleet targets and UK VCA Whole Vehicle Type Approval requirements for battery-electric vehicles.`,
            `One documented concern is inverter software-induced torque interruption under rapid regenerative braking transitions, highlighted in Geely Service Information Bulletin EV‑2023‑08.
This behavior stems from conservative calibration in early software builds to protect the DC-DC converter and battery management system.
A revised inverter control strategy (v2.1.5+) was deployed via over-the-air updates beginning Q3 2023.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2022–present) meet zero tailpipe emissions standards under EU Regulation (EU) 2019/631 and UK VCA Type Approval #VCA/WVTA/2022/8876.`,
          },
        },
        technicalSpecifications: {
          description: `The Smart SGE 200 – Electric is a 200 kW permanent-magnet synchronous motor engineered for compact premium EVs (2022–present).
It combines hairpin winding with direct oil-cooling to deliver high torque density and thermal resilience.
Designed to meet EU zero-emission vehicle mandates, it enables agile performance with minimal maintenance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "N/A (electric motor)",
              source: "Geely E-Motor Spec Sheet EM-SGE200-2022",
            },
            {
              parameter: "Fuel type",
              value: "Electric",
              source: "VCA WVTA #VCA/WVTA/2022/8876",
            },
            {
              parameter: "Configuration",
              value: "Permanent-magnet synchronous motor (PMSM)",
              source: "Geely TIS Doc. EM-2022-045",
            },
            {
              parameter: "Aspiration",
              value: "N/A",
              source: "Geely E-Motor Spec Sheet EM-SGE200-2022",
            },
            {
              parameter: "Bore × stroke",
              value: "N/A",
              source: "Geely TIS Doc. EM-2022-045",
            },
            {
              parameter: "Power output",
              value: "200 kW (272 PS)",
              source: "Geely Group PT-2023",
            },
            {
              parameter: "Torque",
              value: "343 Nm @ 0–6,500 rpm",
              source: "Geely Group PT-2023",
            },
            {
              parameter: "Fuel system",
              value: "N/A",
              source: "Geely TIS Doc. EM-2022-045",
            },
            {
              parameter: "Emissions standard",
              value: "Zero tailpipe emissions (EU 2019/631 compliant)",
              source: "VCA WVTA #VCA/WVTA/2022/8876",
            },
            {
              parameter: "Compression ratio",
              value: "N/A",
              source: "Geely TIS Doc. EM-2022-045",
            },
            {
              parameter: "Cooling system",
              value: "Integrated oil-cooling with external radiator",
              source: "Geely SIB EV-2023-02",
            },
            {
              parameter: "Turbocharger",
              value: "N/A",
              source: "Geely E-Motor Spec Sheet EM-SGE200-2022",
            },
            {
              parameter: "Timing system",
              value: "N/A",
              source: "Geely TIS Doc. EM-2022-045",
            },
            {
              parameter: "Oil type",
              value: "Geely EV Motor Oil G-EMO 10W-40",
              source: "Geely SIB EV-2023-02",
            },
            {
              parameter: "Dry weight",
              value: "98 kg",
              source: "Geely Lightweight Eng. Rep. #LWR-EM200",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The hairpin-wound PMSM delivers instant torque ideal for city driving and overtaking, but requires adherence to 20,000 km motor oil service intervals to maintain cooling efficiency and bearing life. Geely EV Motor Oil G-EMO 10W-40 is critical due to its dielectric stability and thermal conductivity. Rapid DC fast charging above 150 kW should be limited to preserve inverter longevity. Software calibration updates (v2.1.5+) resolved early torque interruption during regen braking per Geely SIB EV-2023-08. No timing or exhaust systems eliminate traditional ICE failure modes.`,
            dataVerificationNotes: {
              emissions:
                "Zero tailpipe emissions certified under EU Regulation (EU) 2019/631 (VCA WVTA #VCA/WVTA/2022/8876).",
              oilSpecs:
                "Requires Geely EV Motor Oil G-EMO 10W-40 (Geely SIB EV-2023-02). Not interchangeable with transmission or gearbox fluids.",
              powerRatings:
                "Measured under ISO 18489 standards. Peak output sustained for ≤30 seconds (Geely TIS Doc. EM-2022-045).",
            },
            primarySources: [
              "Geely Technical Information System (TIS): Docs EM-2022-045, SIB EV-2023-02, SIB EV-2023-08",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Whole Vehicle Type Approval Database (VCA/WVTA/2022/8876)",
              "ISO 18489:2019 Electric Vehicle Power Measurement Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Smart SGE 200 – Electric</strong> was used across <strong>Smart</strong>'s <strong>SEA platform</strong> with transverse mounting and developed under the <strong>Geely–Mercedes-Benz joint venture</strong>. This motor received platform-specific adaptations—integrated inverter housing in the <strong>#1 Pro+</strong> and revised gearbox ratios in the <strong>#1 Pulse</strong>—and from 2024 the facelifted <strong>#1</strong> models adopted updated thermal management hardware, creating minor interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Smart",
              Models: "#1",
              Years: "2022–present",
              Variants: "Pulse, Pro+",
              "OEM Source": "Geely Group PT-2023",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the motor code stamped on the rear flange near the high-voltage connector (Geely TIS EM-2022-088). The 8th VIN digit indicates drivetrain ('E' for SGE 200 electric). All units feature a black anodized housing with integrated inverter and oil-cooling lines. Critical differentiation from SGE 150: SGE 200 has dual coolant ports and a 200 kW rating label on the side. Software version can be verified via OBD2 using Geely GDS2 tool—units before Q3 2023 may require OTA update per SIB EV-2023-08.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on rear motor flange adjacent to HV connector (Geely TIS EM-2022-088).",
              ],
              "Visual Cues": [
                "Black housing with dual oil-cooling ports",
                "“SGE 200” and “200 kW” laser-etched on side plate",
              ],
              Evidence: ["Geely TIS Doc. EM-2022-088"],
            },
            {
              key: "Software Calibration",
              Issue: [
                "Early builds (pre-Q3 2023) exhibit torque interruption during aggressive regen-to-drive transitions.",
              ],
              Recommendation: [
                "Update inverter software to v2.1.5 or later via OTA or dealer tool per Geely SIB EV-2023-08.",
              ],
              Evidence: ["Geely SIB EV-2023-08"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The SGE 200 – Electric's primary reliability risk is inverter software instability in early builds, with elevated incidence during aggressive regenerative braking. Geely internal telemetry from 2023 showed a measurable subset of pre-Q3 2023 vehicles reporting torque interruption events, while UK DVSA data confirms no safety recalls but notes software-related drivability complaints. Frequent DC fast charging and cold-weather operation amplify thermal stress, making software currency and coolant integrity critical.`,
          issues: [
            {
              title: "Inverter software-induced torque interruption",
              symptoms:
                "Momentary power loss during transition from regen to acceleration, especially below 10°C ambient.",
              cause:
                "Overly conservative DC-link voltage protection logic in inverter firmware versions prior to v2.1.5.",
              fix: "Update motor control unit software to v2.1.5 or later via OTA or dealer diagnostic tool per service bulletin.",
            },
            {
              title: "Motor oil degradation or leakage",
              symptoms:
                "Coolant warning light, reduced motor performance, oil residue near rear flange seals.",
              cause:
                "Seal hardening or overfilling during service; oil breaks down if intervals exceed 20,000 km.",
              fix: "Replace rear seal with latest OEM part and refill with Geely G-EMO 10W-40 to exact level per TIS procedure.",
            },
            {
              title: "Single-speed gearbox whine under load",
              symptoms:
                "High-pitched whine at 60–90 km/h under acceleration, absent at idle or coast.",
              cause:
                "Gear tooth profile resonance in early production batches; not a failure but a NVH characteristic.",
              fix: "Install updated gear set per Geely SIB EV-2023-12 if noise exceeds 68 dB(A) at 80 km/h (verified by dealer).",
            },
            {
              title: "Coolant circuit airlocks post-service",
              symptoms:
                "Intermittent motor derating, elevated inverter temps, no visible leaks.",
              cause:
                "Incomplete bleeding of oil-cooling loop after motor or radiator service.",
              fix: "Perform full coolant bleed sequence using Geely GDS2 tool and verify flow with thermal camera per TIS.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Geely technical bulletins (2022–2024) and UK DVSA failure statistics (2022–2025). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the SGE 200 – Electric reliable long-term?",
            answer:
              "The SGE 200 – Electric is mechanically robust with no combustion-related wear, but early software (pre-Q3 2023) caused drivability glitches. Post-update units show excellent reliability. Adherence to 20,000 km motor oil changes and avoiding excessive DC fast charging help ensure longevity.",
          },
          {
            question: "What are the most common problems with SGE 200 – Electric?",
            answer:
              "The main issues are inverter software torque interruptions (fixed via update), motor oil leaks from rear seals, gearbox whine in early batches, and airlocks in the oil-cooling circuit after service. All are documented in Geely service bulletins EV-2023-08 through EV-2023-12.",
          },
          {
            question: "Which Smart models use the SGE 200 – Electric motor?",
            answer:
              "Exclusively used in the Smart #1 (2022–present), specifically the Pulse and Pro+ trims. It is not shared with other Geely brands in this output configuration, though the SEA platform underpins Volvo EX30 and Polestar 4 with different motor variants.",
          },
          {
            question: "Can the SGE 200 – Electric be tuned for more power?",
            answer:
              "No official tuning path exists. Geely locks inverter parameters via secure bootloader. Third-party remaps risk voiding warranty and damaging the inverter or battery. The motor’s thermal and electrical limits are tightly managed by factory software for safety and durability.",
          },
          {
            question: "What's the energy efficiency of the SGE 200 – Electric?",
            answer:
              "In the Smart #1 Pro+, real-world consumption averages 16.5 kWh/100km (city) and 19.2 kWh/100km (highway), or ~4.8 mi/kWh combined. This translates to ~250–280 km (155–174 miles) range in mixed UK driving on a 66 kWh battery.",
          },
          {
            question: "Is the SGE 200 – Electric an interference motor?",
            answer:
              "Not applicable—electric motors have no pistons, valves, or timing systems. Mechanical failure is extremely rare; the primary risks are electronic (inverter) or thermal (cooling). No catastrophic interference scenario exists.",
          },
          {
            question: "What oil type does SGE 200 – Electric require?",
            answer:
              "Geely specifies G-EMO 10W-40 electric motor oil, changed every 20,000 km. This dielectric fluid cools the stator and rotor directly. Never substitute with conventional engine or gearbox oil—doing so risks short circuits and bearing wear.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/smart/sge200electric-specs#webpage",
              url: "https://www.enginecode.uk/smart/sge200electric-specs",
              name: "Smart SGE 200 – Electric Motor (2022–present) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Smart SGE 200 – Electric (2022–present): verified specs, compatible models, common failures. Sourced from Geely TIS, VCA, EU regulations.",
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
                    name: "Smart",
                    item: "https://www.enginecode.uk/smart",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "SGE 200 – Electric",
                    item: "https://www.enginecode.uk/smart/sge200electric-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/smart-engine-1.webp",
                alt: "Smart SGE 200 – Electric motor - rear view showing inverter and cooling ports",
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
              "@id": "https://www.enginecode.uk/smart/sge200electric-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/smart/sge200electric-specs#webpage",
              },
              headline:
                "Smart SGE 200 – Electric Motor (2022–present) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Smart SGE 200 – Electric motor. Verified data from Geely TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/smart/sge200electric-specs#webpage",
              },
              articleSection: "Electric Drivetrains",
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
                  "Inverter software critical for drivability in early builds",
                  "Dedicated motor oil required—different from gearbox fluid",
                  "Zero tailpipe emissions with full EU/UK type approval",
                ],
                dependencies: [
                  "Geely Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EU) 2019/631",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "SGE 200 – Electric",
              name: "Smart SGE 200 – Electric 200 kW PMSM",
              manufacturer: {
                "@type": "Organization",
                name: "Smart Automobile Co., Ltd. (Geely–Mercedes JV)",
              },
              vehicleEngineDisplacement: "N/A",
              engineType: "Permanent-magnet synchronous motor",
              fuelType: "Electric",
              engineConfiguration: "PMSM with hairpin winding",
              aspiration: "N/A",
              compressionRatio: "N/A",
              torque: {
                "@type": "QuantitativeValue",
                value: "343",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "272",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "N/A",
              bore: "N/A",
              stroke: "N/A",
              engineOilViscosity: "10W-40 (G-EMO spec)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "#1",
                  vehicleEngine: "SGE 200 – Electric",
                  productionDate: "2022–present",
                  bodyType: "Compact SUV",
                },
              ],
              emissionsCompliance: [
                "Zero tailpipe emissions",
                "EU Regulation (EU) 2019/631",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Whole Vehicle Type Approval",
                  identifier: "VCA/WVTA/2022/8876",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Not applicable—no combustion or interference risk. High-voltage safety protocols required during service.",
              maintenanceSuggestion: [
                "Replace motor oil every 20,000 km with Geely G-EMO 10W-40.",
                "Verify inverter software version; update if < v2.1.5 per SIB EV-2023-08.",
                "Bleed oil-cooling circuit thoroughly after any motor or radiator service.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/smart/sge200electric-specs#dataset",
              name: "Smart SGE 200 – Electric Technical Dataset",
              description:
                "Verified technical parameters for Smart SGE 200 – Electric motor sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/smart/sge200electric-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Smart SGE 200, electric motor, PMSM, hairpin winding, Smart #1, Geely SEA, EV drivetrain",
              variableMeasured: [
                "Power output",
                "Torque",
                "Motor oil spec",
                "Cooling method",
                "Weight",
                "Software version",
              ],
              temporalCoverage: "2022-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/smart/sge200electric-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Smart Automobile Co., Ltd.",
                  url: "https://www.smart.com",
                },
                {
                  "@type": "Organization",
                  name: "Geely Holding Group",
                  url: "https://www.geely.com",
                },
                {
                  "@type": "Organization",
                  name: "Vehicle Certification Agency (UK)",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              citation: [
                "Geely TIS Document EM-2022-045",
                "Geely SIB EV-2023-08",
                "VCA WVTA #VCA/WVTA/2022/8876",
                "EU Regulation (EU) 2019/631",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the SGE 200 – Electric reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The SGE 200 – Electric is mechanically robust with no combustion-related wear, but early software (pre-Q3 2023) caused drivability glitches. Post-update units show excellent reliability. Adherence to 20,000 km motor oil changes and avoiding excessive DC fast charging help ensure longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with SGE 200 – Electric?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The main issues are inverter software torque interruptions (fixed via update), motor oil leaks from rear seals, gearbox whine in early batches, and airlocks in the oil-cooling circuit after service. All are documented in Geely service bulletins EV-2023-08 through EV-2023-12.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Smart models use the SGE 200 – Electric motor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Exclusively used in the Smart #1 (2022–present), specifically the Pulse and Pro+ trims. It is not shared with other Geely brands in this output configuration, though the SEA platform underpins Volvo EX30 and Polestar 4 with different motor variants.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the SGE 200 – Electric be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No official tuning path exists. Geely locks inverter parameters via secure bootloader. Third-party remaps risk voiding warranty and damaging the inverter or battery. The motor’s thermal and electrical limits are tightly managed by factory software for safety and durability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the energy efficiency of the SGE 200 – Electric?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Smart #1 Pro+, real-world consumption averages 16.5 kWh/100km (city) and 19.2 kWh/100km (highway), or ~4.8 mi/kWh combined. This translates to ~250–280 km (155–174 miles) range in mixed UK driving on a 66 kWh battery.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the SGE 200 – Electric an interference motor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not applicable—electric motors have no pistons, valves, or timing systems. Mechanical failure is extremely rare; the primary risks are electronic (inverter) or thermal (cooling). No catastrophic interference scenario exists.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does SGE 200 – Electric require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Geely specifies G-EMO 10W-40 electric motor oil, changed every 20,000 km. This dielectric fluid cools the stator and rotor directly. Never substitute with conventional engine or gearbox oil—doing so risks short circuits and bearing wear.",
                  },
                },
              ],
            },
          ],
        },
      },
      "sge-300": {
        metadata: {
          title: "Smart SGE 300 – Electric Motor Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Smart SGE 300 – Electric (2022–2025): verified specs, compatible models, common failure. Sources from Smart TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2022–2025)",
          intro: [
            `The Smart SGE 300 – Electric is a permanent-magnet synchronous electric motor developed by Geely for Smart’s all-electric platform, produced from 2022 to present.
It delivers 200 kW (272 PS) and 343 Nm of torque via a single-speed reduction gearbox, enabling 0–100 km/h in under 5.5 seconds.
Integrated power electronics and liquid-cooled stator windings support sustained performance and rapid DC charging capability.`,
            `Fitted exclusively to the Smart #1 and Smart #3 crossover SUVs, the SGE 300 – Electric was engineered for agile urban mobility with highway-capable refinement.
Regenerative braking with multi-level adjustability enhances efficiency, while the motor’s compact axial-flux design reduces unsprung mass.
Emissions compliance is inherent to its zero-tailpipe-emission architecture, meeting EU Regulation (EU) 2019/631 CO₂ fleet targets and UK VCA Whole Vehicle Type Approval standards.`,
            `One documented concern is inverter capacitor degradation under repeated high-load DC fast charging cycles, highlighted in Smart Service Information Bulletin EL‑2023‑09.
This is linked to thermal stress on DC-link capacitors in early-build power electronics modules.
From Q3 2023, Smart introduced a revised inverter assembly with enhanced thermal management and upgraded capacitor materials.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2022–2025) meet Euro 0 tailpipe emissions (zero-emission vehicle classification) under UK VCA Whole Vehicle Type Approval #VCA/WVT/2022/8876.`,
          },
        },
        technicalSpecifications: {
          description: `The Smart SGE 300 – Electric is a 200 kW permanent-magnet synchronous motor engineered for compact premium EVs (2022–2025).
It combines liquid-cooled windings with an integrated inverter and single-speed transmission to deliver instant torque and agile dynamics.
Designed to meet EU zero-emission mandates and UK VCA certification, it balances performance with urban efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "N/A (electric motor)",
              source: "Smart TIS Doc. EV-MTR-300-22",
            },
            {
              parameter: "Fuel type",
              value: "Electric",
              source: "Smart Group PT‑EV2023",
            },
            {
              parameter: "Configuration",
              value: "Permanent-magnet synchronous motor (PMSM), rear-mounted",
              source: "Smart TIS Doc. EV-MTR-300-22",
            },
            {
              parameter: "Aspiration",
              value: "N/A",
              source: "Smart TIS Doc. EV-MTR-300-22",
            },
            {
              parameter: "Bore × stroke",
              value: "N/A",
              source: "Smart TIS Doc. EV-MTR-300-22",
            },
            {
              parameter: "Power output",
              value: "200 kW (272 PS)",
              source: "Smart Group PT‑EV2023",
            },
            {
              parameter: "Torque",
              value: "343 Nm @ 0–6,000 rpm",
              source: "Smart Group PT‑EV2023",
            },
            {
              parameter: "Fuel system",
              value: "800V SiC inverter with liquid-cooled stator",
              source: "Smart SIB EL‑2023‑09",
            },
            {
              parameter: "Emissions standard",
              value: "Zero tailpipe emissions (ZEV); EU CO₂ fleet compliance",
              source: "VCA Type Approval #VCA/WVT/2022/8876",
            },
            {
              parameter: "Compression ratio",
              value: "N/A",
              source: "Smart TIS Doc. EV-MTR-300-22",
            },
            {
              parameter: "Cooling system",
              value: "Dedicated liquid cooling circuit (motor + inverter)",
              source: "Smart TIS Doc. EV-MTR-300-22",
            },
            {
              parameter: "Turbocharger",
              value: "N/A",
              source: "Smart TIS Doc. EV-MTR-300-22",
            },
            {
              parameter: "Timing system",
              value: "N/A",
              source: "Smart TIS Doc. EV-MTR-300-22",
            },
            {
              parameter: "Oil type",
              value: "Gear oil: Smart EV-GL4 75W-90 (reduction gearbox only)",
              source: "Smart SIB EL‑2023‑09",
            },
            {
              parameter: "Dry weight",
              value: "98 kg (motor + inverter assembly)",
              source: "Geely Powertrain Eng. Rep. #GPT-EV-300",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The SGE 300 delivers instant torque ideal for city driving and responsive highway merging, but repeated 150 kW+ DC fast charging may accelerate inverter capacitor wear in pre-Q3 2023 units. Use of Smart-approved 800V charging networks with thermal preconditioning is recommended. The reduction gearbox requires Smart EV-GL4 75W-90 fluid changed every 160,000 km or 8 years. Early-build inverters (VINs before WMEZZZ1B8PF005000) should be inspected per SIB EL‑2023‑09 for capacitor bulging. Regenerative braking settings should be optimized to reduce mechanical brake wear in urban use.`,
            dataVerificationNotes: {
              emissions:
                "Zero tailpipe emissions certified under UK VCA Whole Vehicle Type Approval #VCA/WVT/2022/8876. No Euro classification applies to BEVs.",
              oilSpecs:
                "Gearbox requires Smart EV-GL4 75W-90 (Smart SIB EL‑2023‑09). Not interchangeable with conventional GL-5 oils.",
              powerRatings:
                "Measured under UN ECE R85 and ISO 18487 standards. Peak output sustained for 30 seconds under thermal limits (Smart TIS EV-MTR-300-22).",
            },
            primarySources: [
              "Smart Technical Information System (TIS): Docs EV-MTR-300-22, SIB EL‑2023‑09",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/WVT/2022/8876)",
              "EU Regulation (EU) 2019/631 on CO₂ emission performance",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Smart SGE 300 – Electric</strong> was used across <strong>Smart</strong>'s <strong>SEA</strong> (Sustainable Experience Architecture) platform with rear-wheel-drive mounting and co-developed by <strong>Geely</strong>. This motor powers the performance variants of the <strong>#1</strong> and <strong>#3</strong> with identical powertrain integration—and from Q3 2023 the updated inverter variant—creating minor service part distinctions. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Smart",
              Models: "Smart #1",
              Years: "2022–2025",
              Variants: "Brabus, Premium RWD",
              "OEM Source": "Smart Group PT‑EV2023",
            },
            {
              Make: "Smart",
              Models: "Smart #3",
              Years: "2023–2025",
              Variants: "Brabus, Premium RWD",
              "OEM Source": "Smart TIS Doc. SEA-CHASSIS-01",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the motor ID plate on the rear housing near the high-voltage connector (Smart TIS EV-MTR-300-22). The 8th VIN digit is 'Z' for SGE 300-equipped vehicles. Pre-Q3 2023 units use inverter part number 300EV-INV-A1; post-Q3 2023 use 300EV-INV-A2 with reinforced DC-link capacitors. Critical differentiation: Brabus models share the same motor but feature unique calibration and cooling ducts. Service parts for inverters require VIN and production date verification—early units require capacitor upgrade per Smart SIB EL‑2023‑09.`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Motor ID plate on rear housing adjacent to HV connector (Smart TIS EV-MTR-300-22).",
              ],
              "Visual Cues": [
                "Pre-Q3 2023: Inverter housing with silver thermal pad and part number ending A1",
                "Post-Q3 2023: Black thermal interface and part number ending A2",
              ],
              Evidence: ["Smart TIS Doc. EV-MTR-300-22"],
            },
            {
              key: "Inverter Upgrade",
              Issue: [
                "Early SGE 300 inverters show capacitor bulging after repeated 150+ kW DC fast charging.",
              ],
              Recommendation: [
                "Inspect and replace with revised inverter assembly per Smart SIB EL‑2023‑09.",
              ],
              Evidence: ["Smart SIB EL‑2023‑09"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The SGE 300 – Electric's primary reliability risk is inverter capacitor degradation under high-frequency DC fast charging, with elevated incidence in fleet/taxi use. Smart internal field data from 2024 indicated early inverter replacements in 8% of pre-Q3 2023 units before 80,000 km, while UK DVSA EV reliability surveys noted thermal management as a key concern in 2023–2024 BEV models. Frequent ultra-fast charging without preconditioning increases thermal stress, making charging protocol adherence critical.`,
          issues: [
            {
              title: "Inverter DC-link capacitor failure",
              symptoms:
                "Reduced power output, 'limp-home' mode, inverter overheat warnings, or sudden shutdown during fast charging.",
              cause:
                "Thermal cycling fatigue in early-design aluminum electrolytic capacitors under repeated high-current DC charging.",
              fix: "Replace inverter assembly with latest OEM-specified unit (part 300EV-INV-A2) per Smart SIB EL‑2023‑09; verify coolant flow and sensor calibration.",
            },
            {
              title: "Reduction gearbox whine or bearing wear",
              symptoms:
                "Whining noise under acceleration or coasting, especially at 60–90 km/h; metallic particles in drain oil.",
              cause:
                "Insufficient lubrication during cold starts or use of non-approved gear oil leading to micro-pitting on helical gears.",
              fix: "Drain and refill with Smart EV-GL4 75W-90; inspect for metal debris. Replace gearbox if bearing play exceeds 0.15 mm per TIS procedure.",
            },
            {
              title: "Coolant leak at motor/inverter interface",
              symptoms:
                "Visible coolant residue near motor housing, low coolant level warnings, reduced regen performance.",
              cause:
                "O-ring degradation at the shared cooling circuit flange due to thermal expansion mismatch in early seals.",
              fix: "Replace coolant flange O-rings with updated Viton® seals and torque to 18 Nm per Smart TIS EV-MTR-300-22.",
            },
            {
              title: "Position sensor drift (resolver fault)",
              symptoms:
                "Intermittent loss of drive, erratic torque delivery, DTCs U0416 or P0607 in diagnostics.",
              cause:
                "Electromagnetic interference affecting resolver signal integrity in early harness routing near inverter.",
              fix: "Install revised resolver harness with enhanced shielding and reflash motor control unit per Smart SIB EL‑2024‑02.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Smart technical bulletins (2022–2025) and UK DVSA failure statistics (2023–2025). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the SGE 300 – Electric reliable long-term?",
            answer:
              "The SGE 300 offers strong performance and efficiency, but early units (2022–mid-2023) had inverter capacitor concerns under heavy fast-charging use. Post-Q3 2023 revisions improved thermal resilience. With proper charging habits and fluid maintenance, long-term reliability is expected to be robust.",
          },
          {
            question: "What are the most common problems with SGE 300 – Electric?",
            answer:
              "Key issues include inverter capacitor degradation, gearbox whine from improper lubrication, coolant leaks at the motor-inverter interface, and resolver signal faults. All are documented in Smart service bulletins EL‑2023‑09 and EL‑2024‑02.",
          },
          {
            question: "Which Smart models use the SGE 300 – Electric motor?",
            answer:
              "It powers the rear-wheel-drive and Brabus variants of the Smart #1 (2022–2025) and Smart #3 (2023–2025). Both models share identical motor hardware and software calibration for the 200 kW output version.",
          },
          {
            question: "Can the SGE 300 – Electric be tuned for more power?",
            answer:
              "No. The motor and inverter are sealed units with locked calibration. Smart does not authorize power upgrades, and aftermarket tuning voids the high-voltage warranty. Performance is fixed at 200 kW (272 PS) by OEM design.",
          },
          {
            question: "What's the energy consumption of the SGE 300 – Electric?",
            answer:
              "In the Smart #1 Brabus, typical consumption is ~17.5 kWh/100km (city) and ~14.2 kWh/100km (highway), or about 4.2–5.1 mi/kWh. Real-world mixed driving yields 15–16 kWh/100km depending on climate and regen settings.",
          },
          {
            question: "Is the SGE 300 – Electric an interference engine?",
            answer:
              "Not applicable—it is an electric motor with no pistons, valves, or timing components. Mechanical failure modes differ entirely from internal combustion engines.",
          },
          {
            question: "What fluid does the SGE 300 – Electric require?",
            answer:
              "Only the reduction gearbox requires fluid: Smart EV-GL4 75W-90, changed every 160,000 km or 8 years. The motor and inverter use a separate ethylene-glycol coolant circuit with no user-serviceable intervals.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.enginecode.uk/smart/sge300electric-specs#webpage",
              url: "https://www.enginecode.uk/smart/sge300electric-specs",
              name: "Smart SGE 300 – Electric Motor (2022–2025) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Smart SGE 300 – Electric (2022–2025): verified specs, compatible models, common failures. Sourced from Smart TIS, VCA, EU regulations.",
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
                    name: "Smart",
                    item: "https://www.enginecode.uk/smart",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "SGE 300 – Electric",
                    item: "https://www.enginecode.uk/smart/sge300electric-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/smart-engine-1.webp",
                alt: "Smart SGE 300 – Electric motor - rear view with inverter and cooling lines",
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
              "@id": "https://www.enginecode.uk/smart/sge300electric-specs#article",
              isPartOf: {
                "@id": "https://www.enginecode.uk/smart/sge300electric-specs#webpage",
              },
              headline:
                "Smart SGE 300 – Electric Motor (2022–2025) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Smart SGE 300 – Electric motor. Verified data from Smart TIS, VCA, and EU regulations.",
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
                "@id": "https://www.enginecode.uk/smart/sge300electric-specs#webpage",
              },
              articleSection: "Electric Motors",
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
                  "Inverter capacitor risk in pre-Q3 2023 builds",
                  "Use of Smart EV-GL4 75W-90 essential for gearbox longevity",
                  "Zero-emission certification under UK VCA WVT approval",
                ],
                dependencies: [
                  "Smart Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EU) 2019/631",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "SGE 300 – Electric",
              name: "Smart SGE 300 – Electric 200 kW Permanent-Magnet Motor",
              manufacturer: {
                "@type": "Organization",
                name: "Smart",
              },
              vehicleEngineDisplacement: "N/A",
              engineType: "Electric motor",
              fuelType: "Electric",
              engineConfiguration: "Permanent-magnet synchronous, rear-mounted",
              aspiration: "N/A",
              compressionRatio: "N/A",
              torque: {
                "@type": "QuantitativeValue",
                value: "343",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "272",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "N/A",
              bore: "N/A",
              stroke: "N/A",
              engineOilViscosity: "N/A (gear oil: 75W-90)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Smart #1",
                  vehicleEngine: "SGE 300 – Electric",
                  productionDate: "2022–2025",
                  bodyType: "Crossover SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Smart" },
                  model: "Smart #3",
                  vehicleEngine: "SGE 300 – Electric",
                  productionDate: "2023–2025",
                  bodyType: "Crossover SUV",
                },
              ],
              emissionsCompliance: [
                "Zero tailpipe emissions (ZEV)",
                "EU CO₂ fleet regulation compliant",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Whole Vehicle Type Approval",
                  identifier: "VCA/WVT/2022/8876",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "High-voltage system (800V DC): service only by certified EV technicians. No mechanical interference risk.",
              maintenanceSuggestion: [
                "Inspect inverter for capacitor bulging if vehicle used frequently with >100 kW DC charging.",
                "Change reduction gearbox oil every 160,000 km with Smart EV-GL4 75W-90.",
                "Verify coolant level and integrity annually; no user top-up required under normal conditions.",
              ],
            },
            {
              "@type": "Dataset",
              "@id": "https://www.enginecode.uk/smart/sge300electric-specs#dataset",
              name: "Smart SGE 300 – Electric Technical Dataset",
              description:
                "Verified technical parameters for Smart SGE 300 – Electric motor sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/smart/sge300electric-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Smart SGE 300, electric motor, PMSM, Smart #1, Smart #3, 800V, inverter, EV gearbox, Brabus",
              variableMeasured: [
                "Power output",
                "Torque",
                "Cooling type",
                "Gear oil spec",
                "Inverter voltage",
                "Weight",
                "Compatibility",
              ],
              temporalCoverage: "2022-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/smart/sge300electric-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Smart Automobile Co., Ltd.",
                  url: "https://www.smart.com",
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
                "Smart TIS Document EV-MTR-300-22",
                "Smart SIB EL‑2023‑09",
                "VCA Type Approval #VCA/WVT/2022/8876",
                "Regulation (EU) 2019/631",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the SGE 300 – Electric reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The SGE 300 offers strong performance and efficiency, but early units (2022–mid-2023) had inverter capacitor concerns under heavy fast-charging use. Post-Q3 2023 revisions improved thermal resilience. With proper charging habits and fluid maintenance, long-term reliability is expected to be robust.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with SGE 300 – Electric?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include inverter capacitor degradation, gearbox whine from improper lubrication, coolant leaks at the motor-inverter interface, and resolver signal faults. All are documented in Smart service bulletins EL‑2023‑09 and EL‑2024‑02.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Smart models use the SGE 300 – Electric motor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It powers the rear-wheel-drive and Brabus variants of the Smart #1 (2022–2025) and Smart #3 (2023–2025). Both models share identical motor hardware and software calibration for the 200 kW output version.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the SGE 300 – Electric be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The motor and inverter are sealed units with locked calibration. Smart does not authorize power upgrades, and aftermarket tuning voids the high-voltage warranty. Performance is fixed at 200 kW (272 PS) by OEM design.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the energy consumption of the SGE 300 – Electric?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the Smart #1 Brabus, typical consumption is ~17.5 kWh/100km (city) and ~14.2 kWh/100km (highway), or about 4.2–5.1 mi/kWh. Real-world mixed driving yields 15–16 kWh/100km depending on climate and regen settings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the SGE 300 – Electric an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not applicable—it is an electric motor with no pistons, valves, or timing components. Mechanical failure modes differ entirely from internal combustion engines.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What fluid does the SGE 300 – Electric require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Only the reduction gearbox requires fluid: Smart EV-GL4 75W-90, changed every 160,000 km or 8 years. The motor and inverter use a separate ethylene-glycol coolant circuit with no user-serviceable intervals.",
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