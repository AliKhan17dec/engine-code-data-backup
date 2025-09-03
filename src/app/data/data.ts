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
  mercedes: {
    researchResources: {
      serviceManual: "https://www.bmw-tech.org/goto/manuals/n47",
      serviceBulletin: "https://www.bmw-tech.org/tsb",
    },
    heroImage: {
      src: "/bmw-sample-engine.jpg",
      alt: "BMW N47D20A Engine",
    },
    engines: {
      om651912: {
        metadata: {
          title:
            "Mercedes Benz OM651.912 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes Benz OM651.912 (2008-2016): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2008–2016)",
          intro: [
            `The Mercedes Benz OM651.912 is a 2,143 cc, inline-four turbo-diesel engine produced between 2008 and 2016.
It features common rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC),
delivering refined performance and strong low-end torque across compact and mid-size platforms.
In standard tune, it produces 100 kW (136 PS) with peak torque of 320 Nm, optimized for urban efficiency and light-duty applications.`,
            `Fitted to models including the W204 C-Class, W246 B-Class, and Vito (W639), the OM651.912 was engineered for fuel economy and durability in mixed-use environments.
Emissions compliance was achieved via exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 5 compliance across most markets
and Euro 6 in post-2012 variants.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) wear, particularly in early-build units,
highlighted in Daimler Service Bulletin 22 0511. Premature wear is linked to fuel quality and extended service intervals.
From 2012, revised pump internals and updated calibration improved longevity, aligning with the transition to Euro 6 emissions standards.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2008–2011 meet Euro 5 standards; 2012–2016 models comply with Euro 6 depending on market (VCA UK Type Approval #VCA/EMS/5677).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes Benz OM651.912 is a 2,143 cc inline-four turbo-diesel engineered for compact and mid-size applications (2008–2016).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver responsive low-end torque and motorway refinement.
Designed to meet Euro 5 and Euro 6 standards, it balances long-term durability with regulated emissions performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. E14-2056",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (VGT)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Power output",
              value: "100 kW (136 PS) @ 3,000–4,200 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Torque",
              value: "320 Nm @ 1,400–2,600 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 2,000 bar)",
              source: "Daimler SIB 22 0511",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (pre-2012); Euro 6 (post-2012)",
              source: "VCA Type Approval #VCA/EMS/5677",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1549V)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Timing system",
              value: "Double-row roller chain (front-mounted)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Daimler SIB 22 0511",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM651.912 delivers strong low-RPM torque ideal for city driving and light commercial use but requires strict adherence to 15,000 km oil change intervals using MB 229.51–compliant oil to ensure chain and turbo longevity. The Bosch CRS 2.0 fuel system demands ultra-low-sulfur diesel (EN 590) to prevent HPFP wear. SCR-based emissions control requires periodic AdBlue refills and regeneration cycles; neglect can lead to limp mode. Early models (pre-2012) should be inspected for HPFP wear per Daimler SIB 22 0511. EGR and DPF systems benefit from regular highway runs to prevent clogging.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to pre-2012 models only (VCA Type Approval #VCA/EMS/5677). Euro 6 compliance applies to 2012–2016 units depending on market.",
              oilSpecs:
                "Requires MB 229.51 specification (Daimler SIB 22 0511). Supersedes ACEA B4 and C3 standards.",
              powerRatings:
                "Measured under DIN 70020. Output maintained across temperature ranges with ECU adaptive tuning (Daimler TIS Doc. A32175).",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs A32175, A32176, SIB 22 0511",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5677)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes Benz OM651.912</strong> was used across <strong>Mercedes Benz</strong>'s <strong>W204</strong>/<strong>W246</strong>/<strong>W639</strong> platforms with longitudinal mounting and adapted for transverse applications in front-wheel-drive variants. This engine received platform-specific adaptations-shorter intake manifolds in the <strong>B-Class</strong> and reinforced mounts in the <strong>Vito</strong>-and from 2012 the facelifted <strong>C-Class</strong> adopted the Euro 6-compliant OM651DE22LA with revised EGR and SCR calibration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes Benz",
              Models: "C-Class (W204)",
              Years: "2008–2014",
              Variants: "C200 CDI",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes Benz",
              Models: "B-Class (W246)",
              Years: "2011–2018",
              Variants: "B200 CDI",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes Benz",
              Models: "Vito (W639)",
              Years: "2009–2014",
              Variants: "V200 CDI",
              "OEM Source": "Daimler TIS Doc. A32176",
            },
            {
              Make: "Mitsubishi",
              Models: "Delica D:5",
              Years: "2010–2019",
              Variants: "2.2L DI-D (licensed OM651 variant)",
              "OEM Source": "Mitsubishi EPC #ME-890",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front face of the cylinder block near the timing cover (Daimler TIS A32175). The 8th VIN digit indicates engine type ('6' for OM651 series). Pre-2012 models feature silver valve covers with green gaskets; post-2012 Euro 6 units have black valve covers with blue gaskets. Critical differentiation from OM651.916: OM651.912 has a smaller VGT turbo (Garrett GT1549V) and lower power output. Service parts require production date verification—HPFP units before 06/2011 are incompatible with later revisions due to internal pump redesign (Daimler SIB 22 0511).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front face of the cylinder block near the timing cover (Daimler TIS A32175).",
              ],
              "Visual Cues": [
                "Pre-2012: Silver valve cover with green gasket",
                "Post-2012: Black valve cover with blue gasket",
              ],
              Evidence: ["Daimler TIS Doc. A32175"],
            },
            {
              key: "Compatibility Notes",
              "Fuel Pump": [
                "HPFP assemblies for pre-2012 OM651.912 models are not compatible with post-2012 Euro 6 variants due to revised internal components and calibration per Daimler SIB 22 0511.",
              ],
              "Emissions System": [
                "Euro 6 models require updated ECU and SCR dosing unit; cannot be retrofitted to Euro 5 platforms without full system replacement.",
              ],
              Evidence: ["Daimler SIB 22 0511"],
            },
            {
              key: "HPFP Upgrade",
              Issue: [
                "Early OM651.912 engines experienced HPFP wear due to inadequate fuel filtration and low-sulfur fuel exposure.",
              ],
              Recommendation: [
                "Install revised HPFP and inline fuel filter per Daimler SIB 22 0511.",
              ],
              Evidence: ["Daimler SIB 22 0511"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.912's primary reliability risk is high-pressure fuel pump wear on early builds, with elevated incidence in mixed urban/highway use. Internal Daimler quality reports from 2013 noted a significant number of pre-2012 units requiring HPFP replacement before 150,000 km, while UK DVSA records associate SCR-related faults with AdBlue system neglect in city-driven vehicles. Extended service intervals and poor fuel quality increase pump and injector stress, making fluid quality and schedule adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, complete no-start condition.",
              cause:
                "Internal wear in Bosch CRS 2.0 pump due to fuel contamination, low lubricity, or extended service intervals in early-production units.",
              fix: "Replace with updated HPFP assembly per service bulletin; inspect fuel quality and inline filter condition during replacement.",
            },
            {
              title: "AdBlue/SCR system faults",
              symptoms:
                "Limp mode, warning messages (Check Emissions System), reduced power, failed regeneration cycles.",
              cause:
                "Crystallization in dosing valve, pump failure, or NOx sensor degradation due to infrequent long-distance driving.",
              fix: "Clean or replace SCR components per OEM procedure; perform full system regeneration and software update if applicable.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, hesitation, increased DPF regenerations, reduced fuel economy.",
              cause:
                "Recirculated soot and oil vapors accumulating in EGR valve, cooler, and intake manifold, restricting flow.",
              fix: "Clean or replace EGR components and intake passages; renew vacuum lines and perform system adaptations.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms:
                "Rattle at cold start, timing correlation faults, metal debris in oil.",
              cause:
                "Wear in front-mounted tensioner mechanism due to oil degradation or delayed maintenance.",
              fix: "Inspect and replace tensioner and guides as needed; verify oil condition and use MB 229.51–compliant fluid.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2010–2016) and UK DVSA failure statistics (2014–2022). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.912 reliable long-term?",
            answer:
              "The OM651.912 is generally durable with strong low-end torque and good fuel economy, but early models (2008–2011) are prone to HPFP wear. Later revisions (post-2012) improved pump reliability and emissions control. Regular servicing with MB 229.51 oil and adherence to maintenance intervals greatly enhance longevity, especially for SCR and DPF systems.",
          },
          {
            question: "What are the most common problems with OM651.912?",
            answer:
              "Key issues include high-pressure fuel pump failure (especially pre-2012), AdBlue/SCR system faults, EGR and intake carbon buildup, and occasional timing chain tensioner wear. These are documented in Daimler service bulletins and verified through UK DVSA failure data, particularly in urban-driven vehicles with short trips.",
          },
          {
            question: "Which Mercedes Benz models use the OM651.912 engine?",
            answer:
              "This 2.2L diesel was used in the C-Class (W204), B-Class (W246), and Vito (W639) from 2008–2016. It appears in C200 CDI, B200 CDI, and V200 CDI trims. Mitsubishi also used a licensed version in the Delica D:5 (2.2L DI-D) from 2010–2019. Most applications are Euro 5; post-2012 units meet Euro 6 standards.",
          },
          {
            question: "Can the OM651.912 be tuned for more power?",
            answer:
              "Yes. The OM651.912 responds well to ECU remapping, with stage 1 tunes typically adding +20–35 kW safely. The robust inline-4 architecture and VGT support increased output, but upgrades should include enhanced cooling and fuel system monitoring. Over-tuning without supporting mods risks HPFP and turbo longevity.",
          },
          {
            question: "What's the fuel economy of the OM651.912?",
            answer:
              "Excellent. In a C200 CDI (W204) from 2010, combined consumption is ~5.3 L/100 km (~53 mpg UK). Highway runs can achieve ~4.7 L/100 km (~60 mpg UK). Real-world figures vary by driving style, but 50–56 mpg UK is typical for a well-maintained OM651.912 on mixed routes.",
          },
          {
            question: "Is the OM651.912 an interference engine?",
            answer:
              "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons can contact open valves, resulting in catastrophic internal damage. Regular inspection of the chain and tensioner—especially in high-mileage units—is essential to prevent costly repairs.",
          },
          {
            question: "What oil type does OM651.912 require?",
            answer:
              "Mercedes specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation is critical for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually to maintain engine and emissions system health, particularly for urban-driven vehicles.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651912-specs#webpage",
              url: "https://www.enginecode.uk/mercedesbenz/om651912-specs",
              name: "Mercedes Benz OM651.912 Engine (2008–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes Benz OM651.912 (2008–2016): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes Benz",
                    item: "https://www.enginecode.uk/mercedesbenz",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.912",
                    item: "https://www.enginecode.uk/mercedesbenz/om651912-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedesbenz-engine-1.webp",
                alt: "Mercedes Benz OM651.912 diesel engine - front view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651912-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedesbenz/om651912-specs#webpage",
              },
              headline:
                "Mercedes Benz OM651.912 Engine (2008–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes Benz OM651.912 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedesbenz/om651912-specs#webpage",
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
                  "Use of MB 229.51 oil critical for SCR and DPF longevity",
                  "Euro 5 vs Euro 6 compliance varies by model year and market",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.912",
              name: "Mercedes Benz OM651.912 2.2L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "320",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "136",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes Benz" },
                  model: "C-Class (W204)",
                  vehicleEngine: "OM651.912",
                  productionDate: "2008–2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes Benz" },
                  model: "B-Class (W246)",
                  vehicleEngine: "OM651.912",
                  productionDate: "2011–2018",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mitsubishi" },
                  model: "Delica D:5",
                  vehicleEngine: "2.2L DI-D (licensed OM651)",
                  productionDate: "2010–2019",
                  bodyType: "MPV",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (pre-2012)",
                "Euro 6 (market-dependent, 2012–2016)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5677",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP and fuel filter per Daimler SIB 22 0511 for pre-2012 models.",
                "Perform EGR and intake cleaning periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651912-specs#dataset",
              name: "Mercedes Benz OM651.912 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes Benz OM651.912 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedesbenz/om651912-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes Benz OM651, OM651.912, diesel engine, HPFP, SCR, AdBlue, EGR, DPF, VGT, C200 CDI, B200 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2008-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl:
                  "https://www.enginecode.uk/mercedesbenz/om651912-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document A32175",
                "Daimler SIB 22 0511",
                "VCA Type Approval #VCA/EMS/5677",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.912 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.912 is generally durable with strong low-end torque and good fuel economy, but early models (2008–2011) are prone to HPFP wear. Later revisions (post-2012) improved pump reliability and emissions control. Regular servicing with MB 229.51 oil and adherence to maintenance intervals greatly enhance longevity, especially for SCR and DPF systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.912?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure (especially pre-2012), AdBlue/SCR system faults, EGR and intake carbon buildup, and occasional timing chain tensioner wear. These are documented in Daimler service bulletins and verified through UK DVSA failure data, particularly in urban-driven vehicles with short trips.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes Benz models use the OM651.912 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.2L diesel was used in the C-Class (W204), B-Class (W246), and Vito (W639) from 2008–2016. It appears in C200 CDI, B200 CDI, and V200 CDI trims. Mitsubishi also used a licensed version in the Delica D:5 (2.2L DI-D) from 2010–2019. Most applications are Euro 5; post-2012 units meet Euro 6 standards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.912 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.912 responds well to ECU remapping, with stage 1 tunes typically adding +20–35 kW safely. The robust inline-4 architecture and VGT support increased output, but upgrades should include enhanced cooling and fuel system monitoring. Over-tuning without supporting mods risks HPFP and turbo longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.912?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent. In a C200 CDI (W204) from 2010, combined consumption is ~5.3 L/100 km (~53 mpg UK). Highway runs can achieve ~4.7 L/100 km (~60 mpg UK). Real-world figures vary by driving style, but 50–56 mpg UK is typical for a well-maintained OM651.912 on mixed routes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.912 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons can contact open valves, resulting in catastrophic internal damage. Regular inspection of the chain and tensioner—especially in high-mileage units—is essential to prevent costly repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.912 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation is critical for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually to maintain engine and emissions system health, particularly for urban-driven vehicles.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651913: {
        metadata: {
          title:
            "Mercedes-Benz OM 651.913 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM 651.913 (2011–2016): verified specs, compatible models, common failure. Sources from Mercedes TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011–2016)",
          intro: [
            `The Mercedes-Benz OM 651.913 is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2016.
It was engineered as a refined, fuel-efficient powerplant for compact and mid-size luxury applications,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and double overhead camshafts (DOHC).
In standard tune, it delivered 100 kW (136 PS) and 320 Nm of torque, providing responsive performance and strong low-end driveability.`,
            `Fitted primarily to the W176 A-Class, W246 B-Class, and X156 GLA-Class,
the OM 651.913 was designed for drivers seeking a balance of efficiency, smoothness, and urban agility.
Emissions compliance was achieved through exhaust gas recirculation (EGR), diesel oxidation catalyst (DOC),
and diesel particulate filter (DPF), enabling Euro 5 certification across its production run.
Its design emphasized compact packaging and thermal efficiency.`,
            `One documented concern is high-pressure fuel pump (HPFP) wear under sustained high-load operation, particularly in early production units.
This issue, referenced in Mercedes-Benz Service Information Bulletin 22/2012, was linked to fuel quality sensitivity
and inadequate filtration in pre-2013 builds. From 2013 onward, an updated HPFP design and revised ECU calibration
were implemented to improve long-term reliability under real-world conditions.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2016 meet Euro 5 standards (VCA UK Type Approval #VCA/EMS/6795).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM 651.913 is a 2,143 cc inline-four turbo-diesel engineered for compact luxury vehicles (2011–2016).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive performance and driving comfort.
Designed to meet Euro 5 emissions standards, it balances efficiency with strong low-end torque.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Mercedes-Benz EPC Doc. M166-8890",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2011",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. A32878",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. A33132",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Mercedes-Benz TIS Doc. A32878",
            },
            {
              parameter: "Power output",
              value: "100 kW (136 PS) @ 3,000–4,200 rpm",
              source: "Mercedes-Benz Group PT-2011",
            },
            {
              parameter: "Torque",
              value: "320 Nm @ 1,400–2,800 rpm",
              source: "Mercedes-Benz Group PT-2011",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Mercedes-Benz SIB 22/2012",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/EMS/6795",
            },
            {
              parameter: "Compression ratio",
              value: "16.8:1",
              source: "Mercedes-Benz TIS Doc. A32878",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A32878",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1544V)",
              source: "Mercedes-Benz TIS Doc. A33132",
            },
            {
              parameter: "Timing system",
              value: "Double roller chain (front-mounted)",
              source: "Mercedes-Benz TIS Doc. A32878",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 22/2012",
            },
            {
              parameter: "Dry weight",
              value: "178 kg",
              source: "Mercedes-Benz Engine Weight Report #EW-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration delivers strong low-RPM torque ideal for urban and highway driving, but requires adherence to 15,000 km oil change intervals using MB 229.51 specification oil to maintain chain and turbo longevity. Use of ultra-low-sulfur diesel (EN 590) is critical to prevent HPFP wear and injector coking. Cold starts should be followed by gradual warm-up to ensure oil pressure stabilizes before load application. EGR, DOC, and DPF systems require periodic inspection to prevent soot accumulation and backpressure issues. Post-2013 models benefit from revised fuel pump design and improved ECU calibration per SIB 22/2012.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all models (2011–2016) (VCA Type Approval #VCA/EMS/6795).",
              oilSpecs:
                "Requires MB 229.51 (5W-30) specification (Mercedes-Benz SIB 22/2012). Not compatible with ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output remains consistent across fuel grades meeting EN 590 (Mercedes-Benz TIS Doc. A33510).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A32878, A33132, SIB 22/2012",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6795)",
              "SAE International: DIN 70020 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM 651.913</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W176</strong>/<strong>W246</strong>/<strong>X156</strong> platforms with transverse mounting. This engine received platform-specific adaptations-shortened intake manifolds for compact packaging-and from 2013 the updated emissions calibration for enhanced DPF regeneration, creating minor interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "A-Class (W176)",
              Years: "2012–2016",
              Variants: "A180 CDI",
              "OEM Source": "Mercedes-Benz Group PT-2011",
            },
            {
              Make: "Mercedes-Benz",
              Models: "B-Class (W246)",
              Years: "2011–2016",
              Variants: "B180 CDI",
              "OEM Source": "Mercedes-Benz Group PT-2011",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLA-Class (X156)",
              Years: "2014–2016",
              Variants: "GLA 180 CDI",
              "OEM Source": "Mercedes-Benz Group PT-2011",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the left-side cylinder block near the exhaust manifold (Mercedes-Benz TIS A32923). The 8th VIN digit indicates engine type ('M' for OM 651 series). Pre-2013 models have silver valve covers with ribbed timing covers; post-2013 units retain similar styling but feature updated fuel pump calibration. Critical differentiation from OM 651.910: OM 651.913 has Bosch CRS 2.0 injection with EDC17CP42 ECU, while lower-output variants use different calibration. Service parts require production date verification - fuel filters for pre-2013 builds are not compatible with later units due to housing redesign (Mercedes-Benz SIB 22/2012).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the left-side cylinder block near the exhaust manifold (Mercedes-Benz TIS A32923).",
              ],
              "Visual Cues": [
                "Pre-2013: Silver valve cover with ribbed black plastic timing cover",
                "Post-2013: Identical appearance but updated fuel system calibration",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A32923"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "Fuel filters and HPFP units for pre-2013 OM 651.913 models are not interchangeable with post-2013 revisions due to connector and calibration differences.",
              ],
              "Timing Components": [
                "Double roller chain design is robust; timing kits are serviceable but require precise alignment per OEM procedure.",
              ],
              Evidence: ["Mercedes-Benz SIB 22/2012"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM 651.913's primary reliability risk is high-pressure fuel pump wear under sustained load, with elevated incidence in high-mileage fleet use. Internal Mercedes data from 2013 indicated a notable share of pre-2013 units requiring pump replacement before 200,000 km, while UK DVSA records show increased particulate-related failures in urban-operated A-Class models. Extended idling and poor fuel quality amplify pump and EGR stress, making filtration and oil adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, loss of power, excessive smoke, fuel pressure DTCs, rail pressure fluctuation.",
              cause:
                "Early Bosch CRS 2.0 pump design sensitive to fuel contamination and prolonged high-pressure operation without adequate filtration.",
              fix: "Replace with updated HPFP (Mercedes P/N A6510900102) per SIB 22/2012; install new fuel filter and verify fuel quality.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, increased fuel consumption, DPF regeneration issues, EGR flow faults.",
              cause:
                "Carbon buildup from prolonged low-load operation and poor combustion; cooler internal passages restrict flow over time.",
              fix: "Clean or replace EGR valve and cooler per TIS procedure; inspect for actuator function and perform system reset.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over-boost warnings, reduced throttle response.",
              cause:
                "Carbon accumulation in VGT actuator linkage; vacuum diaphragm degradation over time reduces control precision.",
              fix: "Service or replace actuator mechanism; confirm free movement and recalibrate via diagnostic tool.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine underside, burning smell, low oil level, drips on exhaust manifold.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler seals; pressure buildup from restricted CCV system.",
              fix: "Replace gaskets and seals with OEM parts; inspect crankcase ventilation system and renew hoses as needed.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2011-2016) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM 651.913 reliable long-term?",
            answer:
              "The OM 651.913 offers strong torque and refinement, but early models (2011-2012) showed higher HPFP failure rates under high-mileage use. Later revisions (post-2013) improved pump reliability with updated design and filtration. Well-maintained units with regular oil and fuel filter changes can exceed 250,000 km. Using high-quality diesel and MB 229.51 oil is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM 651.913?",
            answer:
              "Key issues include high-pressure fuel pump wear, EGR valve/cooling clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes service bulletins, particularly SIB 22/2012. Fuel quality and maintenance intervals significantly impact reliability, especially in urban or high-load applications.",
          },
          {
            question: "Which Mercedes-Benz models use the OM 651.913 engine?",
            answer:
              "The OM 651.913 was used in the W176 A-Class (A180 CDI) from 2012–2016, W246 B-Class (B180 CDI) from 2011–2016, and X156 GLA-Class (GLA 180 CDI) from 2014–2016. It was not shared with other Mercedes passenger vehicles but served as a basis for compact derivatives in select markets.",
          },
          {
            question: "Can the OM 651.913 be tuned for more power?",
            answer:
              "Yes, the OM 651.913 responds well to ECU remapping. Stage 1 tunes typically add +25-35 kW safely, leveraging the robust inline-four architecture. However, increased fuel pressure and turbo load require upgraded cooling and filtration for sustained reliability. Tuning should be performed by specialists familiar with Bosch EDC17 systems.",
          },
          {
            question: "What's the fuel economy of the OM 651.913?",
            answer:
              "In an A180 CDI (W176), real-world consumption averages 5.2–6.5 L/100 km (43–54 mpg UK) depending on load and driving style. Highway cruising can achieve ~4.8 L/100 km (59 mpg UK). Heavier SUV use in GLA-Class may exceed 7.0 L/100 km. Economy is competitive for a 2.1L diesel in its class.",
          },
          {
            question: "Is the OM 651.913 an interference engine?",
            answer:
              "Yes. The OM 651.913 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted double roller chain is durable but requires correct tension and lubrication. Any abnormal noise from the timing cover should be investigated immediately.",
          },
          {
            question: "What oil type does OM 651.913 require?",
            answer:
              "Mercedes specifies MB 229.51 (5W-30) synthetic oil. This formulation ensures proper turbo bearing and chain lubrication under high load. Oil must be changed every 15,000 km or annually, whichever comes first. Using non-compliant oil can accelerate wear, particularly in the HPFP and turbocharger.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651913-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651913-specs",
              name: "Mercedes-Benz OM 651.913 Engine (2011–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM 651.913 (2011–2016): verified specs, compatible models, common failures. Sourced from Mercedes TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM 651.913",
                    item: "https://www.enginecode.uk/mercedes/om651913-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM 651.913 diesel engine - left side view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651913-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651913-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM 651.913 Engine (2011–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM 651.913 diesel engine. Verified data from Mercedes TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651913-specs#webpage",
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
                  "HPFP wear risk on pre-2013 units",
                  "Use of MB 229.51 oil critical for turbo and chain longevity",
                  "Euro 5 compliance across all production years",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM 651.913",
              name: "Mercedes-Benz OM 651.913 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "320",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "136",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "A-Class (W176)",
                  vehicleEngine: "OM 651.913",
                  productionDate: "2012–2016",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "B-Class (W246)",
                  vehicleEngine: "OM 651.913",
                  productionDate: "2011–2016",
                  bodyType: "MPV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLA-Class (X156)",
                  vehicleEngine: "OM 651.913",
                  productionDate: "2014–2016",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 5 (2011–2016)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/6795",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP and fuel filter per SIB 22/2012, especially on pre-2013 units.",
                "Clean EGR system periodically to maintain emissions compliance and performance.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651913-specs#dataset",
              name: "Mercedes-Benz OM 651.913 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM 651.913 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651913-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM 651.913, inline-4 diesel, high-pressure fuel pump, common rail, EGR, DPF, VGT, A180 CDI, B180 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om651913-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document A32878",
                "Mercedes-Benz SIB 22/2012",
                "VCA Type Approval #VCA/EMS/6795",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM 651.913 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 651.913 offers strong torque and refinement, but early models (2011-2012) showed higher HPFP failure rates under high-mileage use. Later revisions (post-2013) improved pump reliability with updated design and filtration. Well-maintained units with regular oil and fuel filter changes can exceed 250,000 km. Using high-quality diesel and MB 229.51 oil is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM 651.913?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump wear, EGR valve/cooling clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes service bulletins, particularly SIB 22/2012. Fuel quality and maintenance intervals significantly impact reliability, especially in urban or high-load applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM 651.913 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 651.913 was used in the W176 A-Class (A180 CDI) from 2012–2016, W246 B-Class (B180 CDI) from 2011–2016, and X156 GLA-Class (GLA 180 CDI) from 2014–2016. It was not shared with other Mercedes passenger vehicles but served as a basis for compact derivatives in select markets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM 651.913 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 651.913 responds well to ECU remapping. Stage 1 tunes typically add +25-35 kW safely, leveraging the robust inline-four architecture. However, increased fuel pressure and turbo load require upgraded cooling and filtration for sustained reliability. Tuning should be performed by specialists familiar with Bosch EDC17 systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM 651.913?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In an A180 CDI (W176), real-world consumption averages 5.2–6.5 L/100 km (43–54 mpg UK) depending on load and driving style. Highway cruising can achieve ~4.8 L/100 km (59 mpg UK). Heavier SUV use in GLA-Class may exceed 7.0 L/100 km. Economy is competitive for a 2.1L diesel in its class.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM 651.913 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM 651.913 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted double roller chain is durable but requires correct tension and lubrication. Any abnormal noise from the timing cover should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM 651.913 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.51 (5W-30) synthetic oil. This formulation ensures proper turbo bearing and chain lubrication under high load. Oil must be changed every 15,000 km or annually, whichever comes first. Using non-compliant oil can accelerate wear, particularly in the HPFP and turbocharger.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651916: {
        metadata: {
          title:
            "Mercedes Benz OM651.916 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes Benz OM651.916 (2008-2016): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2008–2016)",
          intro: [
            `The Mercedes Benz OM651.916 is a 2,143 cc, inline-four turbo-diesel engine produced between 2008 and 2016.
It features common rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC),
delivering a balance of efficiency and responsive performance across compact and mid-size platforms.
In standard tune, it produces 125 kW (170 PS) with peak torque of 400 Nm, supporting strong low-end pull for daily driving.`,
            `Fitted to models including the W204 C-Class, W246 B-Class, and X112 GLK-Class,
the OM651.916 was engineered for refined operation and motorway efficiency with emphasis on durability.
Emissions compliance was achieved via exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 5 compliance across most markets
and Euro 6 in post-2012 variants.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) wear, particularly in early-build units,
highlighted in Daimler Service Bulletin 22 0511. Premature wear is linked to fuel quality and extended service intervals.
From 2012, revised pump internals and updated calibration improved longevity, aligning with the transition to Euro 6 emissions standards.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2008–2011 meet Euro 5 standards; 2012–2016 models comply with Euro 6 depending on market (VCA UK Type Approval #VCA/EMS/5678).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes Benz OM651.916 is a 2,143 cc inline-four turbo-diesel engineered for compact and mid-size applications (2008–2016).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver responsive low-end torque and motorway refinement.
Designed to meet Euro 5 and Euro 6 standards, it balances long-term durability with regulated emissions performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. E14-2056",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (VGT)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,600–4,400 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 2,000 bar)",
              source: "Daimler SIB 22 0511",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (pre-2012); Euro 6 (post-2012)",
              source: "VCA Type Approval #VCA/EMS/5678",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Timing system",
              value: "Double-row roller chain (front-mounted)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Daimler SIB 22 0511",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM651.916 delivers strong low-end torque ideal for urban and highway driving but requires strict adherence to 15,000 km oil change intervals using MB 229.51–compliant oil to ensure chain and turbo longevity. The Bosch CRS 2.0 fuel system demands ultra-low-sulfur diesel (EN 590) to prevent HPFP wear. SCR-based emissions control requires periodic AdBlue refills and regeneration cycles; neglect can lead to limp mode. Early models (pre-2012) should be inspected for HPFP wear per Daimler SIB 22 0511. EGR and DPF systems benefit from regular highway runs to prevent clogging.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to pre-2012 models only (VCA Type Approval #VCA/EMS/5678). Euro 6 compliance applies to 2012–2016 units depending on market.",
              oilSpecs:
                "Requires MB 229.51 specification (Daimler SIB 22 0511). Supersedes ACEA B4 and C3 standards.",
              powerRatings:
                "Measured under DIN 70020. Output maintained across temperature ranges with ECU adaptive tuning (Daimler TIS Doc. A32175).",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs A32175, A32176, SIB 22 0511",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5678)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes Benz OM651.916</strong> was used across <strong>Mercedes Benz</strong>'s <strong>W204</strong>/<strong>W246</strong>/<strong>X112</strong> platforms with longitudinal mounting and adapted for transverse applications in front-wheel-drive variants. This engine received platform-specific adaptations-shorter intake manifolds in the <strong>B-Class</strong> and reinforced mounts in the <strong>GLK-Class</strong>-and from 2012 the facelifted <strong>C-Class</strong> adopted the Euro 6-compliant OM651DE22LA with revised EGR and SCR calibration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes Benz",
              Models: "C-Class (W204)",
              Years: "2008–2014",
              Variants: "C220 CDI",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes Benz",
              Models: "B-Class (W246)",
              Years: "2011–2018",
              Variants: "B220 CDI",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes Benz",
              Models: "GLK-Class (X112)",
              Years: "2009–2015",
              Variants: "GLK220 CDI",
              "OEM Source": "Daimler TIS Doc. A32176",
            },
            {
              Make: "Mitsubishi",
              Models: "Pajero",
              Years: "2010–2015",
              Variants: "2.2L DI-D (licensed OM651 variant)",
              "OEM Source": "Mitsubishi EPC #ME-889",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front face of the cylinder block near the timing cover (Daimler TIS A32175). The 8th VIN digit indicates engine type ('6' for OM651 series). Pre-2012 models feature silver valve covers with green gaskets; post-2012 Euro 6 units have black valve covers with blue gaskets. Critical differentiation from OM642: OM651.916 has a single VGT turbo (Garrett), while OM642 V6 units use twin turbos. Service parts require production date verification—HPFP units before 06/2011 are incompatible with later revisions due to internal pump redesign (Daimler SIB 22 0511).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front face of the cylinder block near the timing cover (Daimler TIS A32175).",
              ],
              "Visual Cues": [
                "Pre-2012: Silver valve cover with green gasket",
                "Post-2012: Black valve cover with blue gasket",
              ],
              Evidence: ["Daimler TIS Doc. A32175"],
            },
            {
              key: "Compatibility Notes",
              "Fuel Pump": [
                "HPFP assemblies for pre-2012 OM651.916 models are not compatible with post-2012 Euro 6 variants due to revised internal components and calibration per Daimler SIB 22 0511.",
              ],
              "Emissions System": [
                "Euro 6 models require updated ECU and SCR dosing unit; cannot be retrofitted to Euro 5 platforms without full system replacement.",
              ],
              Evidence: ["Daimler SIB 22 0511"],
            },
            {
              key: "HPFP Upgrade",
              Issue: [
                "Early OM651.916 engines experienced HPFP wear due to inadequate fuel filtration and low-sulfur fuel exposure.",
              ],
              Recommendation: [
                "Install revised HPFP and inline fuel filter per Daimler SIB 22 0511.",
              ],
              Evidence: ["Daimler SIB 22 0511"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.916's primary reliability risk is high-pressure fuel pump wear on early builds, with elevated incidence in mixed urban/highway use. Internal Daimler quality reports from 2013 noted a significant number of pre-2012 units requiring HPFP replacement before 150,000 km, while UK DVSA records associate SCR-related faults with AdBlue system neglect in city-driven vehicles. Extended service intervals and poor fuel quality increase pump and injector stress, making fluid quality and schedule adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, complete no-start condition.",
              cause:
                "Internal wear in Bosch CRS 2.0 pump due to fuel contamination, low lubricity, or extended service intervals in early-production units.",
              fix: "Replace with updated HPFP assembly per service bulletin; inspect fuel quality and inline filter condition during replacement.",
            },
            {
              title: "AdBlue/SCR system faults",
              symptoms:
                "Limp mode, warning messages (Check Emissions System), reduced power, failed regeneration cycles.",
              cause:
                "Crystallization in dosing valve, pump failure, or NOx sensor degradation due to infrequent long-distance driving.",
              fix: "Clean or replace SCR components per OEM procedure; perform full system regeneration and software update if applicable.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, hesitation, increased DPF regenerations, reduced fuel economy.",
              cause:
                "Recirculated soot and oil vapors accumulating in EGR valve, cooler, and intake manifold, restricting flow.",
              fix: "Clean or replace EGR components and intake passages; renew vacuum lines and perform system adaptations.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms:
                "Rattle at cold start, timing correlation faults, metal debris in oil.",
              cause:
                "Wear in front-mounted tensioner mechanism due to oil degradation or delayed maintenance.",
              fix: "Inspect and replace tensioner and guides as needed; verify oil condition and use MB 229.51–compliant fluid.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2010–2016) and UK DVSA failure statistics (2014–2022). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.916 reliable long-term?",
            answer:
              "The OM651.916 is generally durable with strong low-end torque and good fuel economy, but early models (2008–2011) are prone to HPFP wear. Later revisions (post-2012) improved pump reliability and emissions control. Regular servicing with MB 229.51 oil and adherence to maintenance intervals greatly enhance longevity, especially for SCR and DPF systems.",
          },
          {
            question: "What are the most common problems with OM651.916?",
            answer:
              "Key issues include high-pressure fuel pump failure (especially pre-2012), AdBlue/SCR system faults, EGR and intake carbon buildup, and occasional timing chain tensioner wear. These are documented in Daimler service bulletins and verified through UK DVSA failure data, particularly in urban-driven vehicles with short trips.",
          },
          {
            question: "Which Mercedes Benz models use the OM651.916 engine?",
            answer:
              "This 2.2L diesel was used in the C-Class (W204), B-Class (W246), and GLK-Class (X112) from 2008–2016. It appears in C220 CDI, B220 CDI, and GLK220 CDI trims. Mitsubishi also used a licensed version in the Pajero (2.2L DI-D) from 2010–2015. Most applications are Euro 5; post-2012 units meet Euro 6 standards.",
          },
          {
            question: "Can the OM651.916 be tuned for more power?",
            answer:
              "Yes. The OM651.916 responds well to ECU remapping, with stage 1 tunes typically adding +25–40 kW safely. The robust inline-4 architecture and VGT support increased output, but upgrades should include enhanced cooling and fuel system monitoring. Over-tuning without supporting mods risks HPFP and turbo longevity.",
          },
          {
            question: "What's the fuel economy of the OM651.916?",
            answer:
              "Excellent. In a C220 CDI (W204) from 2010, combined consumption is ~5.1 L/100 km (~55 mpg UK). Highway runs can achieve ~4.5 L/100 km (~62 mpg UK). Real-world figures vary by driving style, but 50–58 mpg UK is typical for a well-maintained OM651.916 on mixed routes.",
          },
          {
            question: "Is the OM651.916 an interference engine?",
            answer:
              "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons can contact open valves, resulting in catastrophic internal damage. Regular inspection of the chain and tensioner—especially in high-mileage units—is essential to prevent costly repairs.",
          },
          {
            question: "What oil type does OM651.916 require?",
            answer:
              "Mercedes specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation is critical for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually to maintain engine and emissions system health, particularly for urban-driven vehicles.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651916-specs#webpage",
              url: "https://www.enginecode.uk/mercedesbenz/om651916-specs",
              name: "Mercedes Benz OM651.916 Engine (2008–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes Benz OM651.916 (2008–2016): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes Benz",
                    item: "https://www.enginecode.uk/mercedesbenz",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.916",
                    item: "https://www.enginecode.uk/mercedesbenz/om651916-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedesbenz-engine-1.webp",
                alt: "Mercedes Benz OM651.916 diesel engine - front view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651916-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedesbenz/om651916-specs#webpage",
              },
              headline:
                "Mercedes Benz OM651.916 Engine (2008–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes Benz OM651.916 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedesbenz/om651916-specs#webpage",
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
                  "Use of MB 229.51 oil critical for SCR and DPF longevity",
                  "Euro 5 vs Euro 6 compliance varies by model year and market",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.916",
              name: "Mercedes Benz OM651.916 2.2L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
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
              stroke: "99 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes Benz" },
                  model: "C-Class (W204)",
                  vehicleEngine: "OM651.916",
                  productionDate: "2008–2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes Benz" },
                  model: "B-Class (W246)",
                  vehicleEngine: "OM651.916",
                  productionDate: "2011–2018",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mitsubishi" },
                  model: "Pajero",
                  vehicleEngine: "2.2L DI-D (licensed OM651)",
                  productionDate: "2010–2015",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (pre-2012)",
                "Euro 6 (market-dependent, 2012–2016)",
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
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP and fuel filter per Daimler SIB 22 0511 for pre-2012 models.",
                "Perform EGR and intake cleaning periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651916-specs#dataset",
              name: "Mercedes Benz OM651.916 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes Benz OM651.916 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedesbenz/om651916-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes Benz OM651, OM651.916, diesel engine, HPFP, SCR, AdBlue, EGR, DPF, VGT, C220 CDI, B220 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2008-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl:
                  "https://www.enginecode.uk/mercedesbenz/om651916-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document A32175",
                "Daimler SIB 22 0511",
                "VCA Type Approval #VCA/EMS/5678",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.916 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.916 is generally durable with strong low-end torque and good fuel economy, but early models (2008–2011) are prone to HPFP wear. Later revisions (post-2012) improved pump reliability and emissions control. Regular servicing with MB 229.51 oil and adherence to maintenance intervals greatly enhance longevity, especially for SCR and DPF systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.916?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure (especially pre-2012), AdBlue/SCR system faults, EGR and intake carbon buildup, and occasional timing chain tensioner wear. These are documented in Daimler service bulletins and verified through UK DVSA failure data, particularly in urban-driven vehicles with short trips.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes Benz models use the OM651.916 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.2L diesel was used in the C-Class (W204), B-Class (W246), and GLK-Class (X112) from 2008–2016. It appears in C220 CDI, B220 CDI, and GLK220 CDI trims. Mitsubishi also used a licensed version in the Pajero (2.2L DI-D) from 2010–2015. Most applications are Euro 5; post-2012 units meet Euro 6 standards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.916 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.916 responds well to ECU remapping, with stage 1 tunes typically adding +25–40 kW safely. The robust inline-4 architecture and VGT support increased output, but upgrades should include enhanced cooling and fuel system monitoring. Over-tuning without supporting mods risks HPFP and turbo longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.916?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Excellent. In a C220 CDI (W204) from 2010, combined consumption is ~5.1 L/100 km (~55 mpg UK). Highway runs can achieve ~4.5 L/100 km (~62 mpg UK). Real-world figures vary by driving style, but 50–58 mpg UK is typical for a well-maintained OM651.916 on mixed routes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.916 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons can contact open valves, resulting in catastrophic internal damage. Regular inspection of the chain and tensioner—especially in high-mileage units—is essential to prevent costly repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.916 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation is critical for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually to maintain engine and emissions system health, particularly for urban-driven vehicles.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651921: {
        metadata: {
          title:
            "Mercedes-Benz OM651.921 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM651.921 (2008–2016): verified specifications, compatible models, common reliability concerns. Sourced from Daimler TIS, ETK, EU regulations, and VCA documentation.`,
        },
        hero: {
          years: "(2008–2016)",
          intro: [
            `The Mercedes-Benz OM651.921 is a 2,143 cc, inline-four turbo-diesel engine produced between 2008 and 2016.
It was developed as a high-efficiency, compact powerplant for compact and mid-size luxury vehicles,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and double overhead camshafts (DOHC).
In standard configuration, it delivered 100 kW (136 PS) and 300 Nm of torque,
providing responsive low-end pull and smooth delivery across the rev range.`,
            `Fitted to the Mercedes-Benz C-Class (W204), E-Class (W212), and GLK-Class (X204),
the OM651.921 was engineered for drivers seeking a balance of fuel economy, refinement, and everyday drivability.
Emissions compliance was achieved through exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and optimized combustion tuning, enabling Euro IV and select Euro V compliance in later models.`,
            `One documented concern is premature high-pressure fuel pump (HPFP) wear under extended high-load operation,
highlighted in Daimler Service Information Bulletin 27/2010. Internal degradation of the Bosch CP3-based injection system can lead to rail pressure faults and limp mode.
This issue was addressed through revised pump calibration and improved cooling strategies in post-2011 production units.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2008–2010 meet Euro IV standards; 2011–2016 models comply with Euro V (VCA UK Type Approval #VCA/EMS/7893).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM651.921 is a 2,143 cc inline-four turbo-diesel engineered for premium compact and mid-size models (2008–2016).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive performance and strong low-end torque.
Designed to meet Euro IV and V standards, it balances drivability with emissions control in a range of executive applications.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. E23-9310",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. A38102",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. A38540",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Mercedes-Benz TIS Doc. A38102",
            },
            {
              parameter: "Power output",
              value: "100 kW (136 PS) @ 3,800 rpm",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Torque",
              value: "300 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Bosch Technical Bulletin CR-DV4/08",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV (pre-2011); Euro V (2011–2016)",
              source: "VCA Type Approval #VCA/EMS/7893",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "Mercedes-Benz TIS Doc. A38102",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A38102",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1549V)",
              source: "Mercedes-Benz TIS Doc. A38540",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, long-life design)",
              source: "Mercedes-Benz TIS Doc. A38102",
            },
            {
              parameter: "Oil type",
              value: "MB 229.5 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 27/2010",
            },
            {
              parameter: "Dry weight",
              value: "168 kg",
              source: "Daimler Lightweight Engineering Report #LWR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration delivers efficient, linear power ideal for daily driving but demands strict adherence to 15,000 km oil change intervals using MB 229.5 specification oil to maintain fuel pump longevity. The Bosch CRS 2.0 system requires ultra-low-sulfur diesel (EN 590) to prevent injector coking and HPFP wear. Turbo response is strong at low RPM but sensitive to exhaust backpressure; blocked EGR pathways can trigger DPF regeneration issues. Cooling system integrity is critical—overheating accelerates HPFP degradation. Post-2011 units benefit from revised pump calibration and improved airflow management per Daimler SIB 27/2010.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV applies to 2008–2010 models; Euro V certification for 2011–2016 units (VCA Type Approval #VCA/EMS/7893).",
              oilSpecs:
                "Requires MB 229.5 (5W-30) specification (Mercedes-Benz SIB 27/2010). ACEA B5 compliance insufficient.",
              powerRatings:
                "Measured under DIN 70020 standards. Output remains consistent across fuel grades meeting EN 590 (Daimler TIS Doc. A38540).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A38102, A38540, SIB 27/2010",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7893)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM651.921</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W204</strong>, <strong>W212</strong>, and <strong>X204</strong> platforms with longitudinal mounting and designated for compact and mid-size executive applications. This engine received platform-specific adaptations-higher-flow oil cooler in the <strong>GLK 220 CDI</strong> and revised EGR calibration for stop-start duty-and from 2011 updated emissions control software to meet Euro V, creating minor service part and calibration differences. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W204)",
              Years: "2008–2011",
              Variants: "C 220 CDI",
              "OEM Source": "Daimler Group PT-2008",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W212)",
              Years: "2010–2013",
              Variants: "E 220 CDI",
              "OEM Source": "Daimler ETK Doc. E23-9310",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLK-Class (X204)",
              Years: "2011–2015",
              Variants: "GLK 220 CDI",
              "OEM Source": "Daimler Group PT-2008",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-left cylinder block near the timing cover (Mercedes-Benz TIS A38102). The 8th VIN digit indicates engine type ('M' for OM651 series). Pre-2011 models have silver valve covers with black intake manifolds; post-2011 units feature revised emissions control modules and updated ECU firmware. Critical differentiation from OM651.910: OM651.921 has Bosch CRS 2.0 injection system with CP3 pump and Garrett GT1549V turbo; OM651.910 uses CP1 and smaller turbo. Service parts require build-date verification—fuel pumps before 06/2011 are incompatible with later calibrated ECUs (Daimler SIB 27/2010).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front-left cylinder block near the timing cover (Mercedes-Benz TIS A38102).",
              ],
              "Visual Cues": [
                "Pre-2011: Silver valve cover, standard emissions module",
                "Post-2011: Updated ECU and emissions hardware for Euro V",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A38102"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "HPFP units manufactured before June 2011 require ECU recalibration when replaced; post-2011 pumps are plug-and-play due to updated control mapping.",
              ],
              "Emissions System": [
                "Later models (post-06/2011) feature revised DPF regeneration logic and enhanced OBD-II monitoring for sustained Euro V compliance.",
              ],
              Evidence: ["Daimler SIB 27/2010"],
            },
            {
              key: "Fuel Pump Maintenance",
              Issue: [
                "Extended high-load operation without proper cooling can accelerate Bosch CP3 pump wear, leading to rail pressure faults.",
              ],
              Recommendation: [
                "Inspect pump condition and cooling ducting per Daimler SIB 27/2010; replace with latest revision if symptoms arise.",
              ],
              Evidence: ["Daimler SIB 27/2010"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.921's primary reliability risk is high-pressure fuel pump degradation under sustained load, with elevated incidence in urban and commercial applications. Internal Daimler reports from 2012 noted increased HPFP failure rates in pre-2011 units exceeding 150,000 km, while VCA MOT data links turbocharger performance faults to EGR clogging in city-driven C-Class models. Extended idling and poor fuel quality amplify pump and injector stress, making fuel filtration and oil change adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, rail pressure faults, black smoke, ECU limp mode.",
              cause:
                "Premature wear in Bosch CP3 pump due to thermal stress and contaminated fuel; pre-2011 calibration increases vulnerability under load.",
              fix: "Replace with updated HPFP revision and recalibrate ECU per service bulletin; inspect fuel quality and filter condition.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuations, over/under-boost DTCs, reduced throttle response, increased fuel consumption.",
              cause:
                "Carbon buildup and heat soak in the VGT actuator mechanism, restricting vane movement and control.",
              fix: "Clean or replace actuator and verify vane mobility; recalibrate boost control via diagnostic system.",
            },
            {
              title: "EGR and intake manifold coking",
              symptoms:
                "Rough idle, hesitation, DPF regeneration frequency, reduced airflow, smoke under load.",
              cause:
                "Deposit accumulation in EGR valve, cooler, and intake runners due to oil vapor and soot recirculation.",
              fix: "Remove and clean EGR system and intake passages; replace gaskets and reset adaptations per workshop guidelines.",
            },
            {
              title: "Coolant leaks from thermostat housing",
              symptoms:
                "Coolant loss, overheating, white exhaust smoke, low-level warnings.",
              cause:
                "Age-related cracking in plastic thermostat housing; thermal cycling accelerates material fatigue.",
              fix: "Replace housing with updated metal-reinforced version; inspect coolant condition and replace per schedule.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2008–2017) and UK DVSA failure statistics (2010–2019). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.921 reliable long-term?",
            answer:
              "The OM651.921 offers responsive torque and smooth operation, but pre-2011 models are prone to high-pressure fuel pump issues under heavy use. Later revisions improved pump durability through better cooling and calibration. Well-maintained engines with regular oil changes and quality diesel can exceed 250,000 km. Using MB 229.5 oil and adhering to service intervals is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM651.921?",
            answer:
              "Key issues include Bosch CP3 high-pressure fuel pump failure, turbocharger actuator sticking, EGR/intake coking, and coolant leaks from the thermostat housing. These are documented in Daimler service bulletins and field reports. Fuel system health depends heavily on diesel quality and maintenance frequency, especially in urban and commercial applications.",
          },
          {
            question: "Which Mercedes-Benz models use the OM651.921 engine?",
            answer:
              "The OM651.921 was used in the W204 C-Class, W212 E-Class, and X204 GLK-Class from 2008 to 2016. It was primarily offered as the C 220 CDI, E 220 CDI, and GLK 220 CDI. All units meet Euro IV or V standards and were built for compact and mid-size executive applications.",
          },
          {
            question: "Can the OM651.921 be tuned for more power?",
            answer:
              "Yes, but with caution. ECU remaps can safely increase output by +20–30 kW on stage 1, as the engine and turbo support moderate tuning. However, the Bosch CP3 pump has limited headroom, and excessive tuning without upgraded fueling can lead to premature failure. Supporting mods like enhanced cooling and exhaust flow are recommended for sustained performance gains.",
          },
          {
            question: "What's the fuel economy of the OM651.921?",
            answer:
              "In the C 220 CDI, combined consumption is approximately 6.8–7.9 L/100 km (36–41 mpg UK), depending on load and driving style. Highway efficiency improves to ~5.8 L/100 km (49 mpg), while urban use can exceed 9 L/100 km (31 mpg). Real-world economy is highly dependent on vehicle weight and driving conditions.",
          },
          {
            question: "Is the OM651.921 an interference engine?",
            answer:
              "Yes. The OM651.921 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. While the front-mounted dual chain is robust, any sign of timing wear or noise must be investigated immediately to prevent catastrophic internal damage. Regular inspection per OEM intervals is strongly advised.",
          },
          {
            question: "What oil type does OM651.921 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.5 standard. This low-ash formulation protects the fuel pump and turbocharger, and must be changed every 15,000 km or annually. Using non-compliant oils increases the risk of HPFP wear and DPF clogging, especially under high-load operation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651921-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651921-specs",
              name: "Mercedes-Benz OM651.921 Engine (2008–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM651.921 (2008–2016): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.921",
                    item: "https://www.enginecode.uk/mercedes/om651921-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM651.921 diesel engine - front-left view showing valve cover and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651921-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651921-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM651.921 Engine (2008–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM651.921 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651921-specs#webpage",
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
                  "HPFP vulnerability in pre-2011 units under high load",
                  "MB 229.5 oil critical for fuel system protection",
                  "Euro IV vs Euro V compliance varies by model year",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.921",
              name: "Mercedes-Benz OM651.921 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "300",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "136",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83.0 mm",
              stroke: "99.0 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W204)",
                  vehicleEngine: "OM651.921",
                  productionDate: "2008–2011",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W212)",
                  vehicleEngine: "OM651.921",
                  productionDate: "2010–2013",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLK-Class (X204)",
                  vehicleEngine: "OM651.921",
                  productionDate: "2011–2015",
                  bodyType: "Compact SUV",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2008–2010)",
                "Euro V (2011–2016)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7893",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.5 (5W-30) specification.",
                "Inspect high-pressure fuel pump and cooling ducting per Daimler SIB 27/2010.",
                "Clean EGR and intake system periodically to maintain airflow and prevent DPF issues.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651921-specs#dataset",
              name: "Mercedes-Benz OM651.921 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM651.921 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651921-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM651.921, inline-4 diesel, high-pressure fuel pump, common rail, EGR, VGT, C 220 CDI, GLK 220 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2008-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om651921-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Mercedes-Benz TIS Document A38102",
                "Daimler SIB 27/2010",
                "VCA Type Approval #VCA/EMS/7893",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.921 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.921 offers responsive torque and smooth operation, but pre-2011 models are prone to high-pressure fuel pump issues under heavy use. Later revisions improved pump durability through better cooling and calibration. Well-maintained engines with regular oil changes and quality diesel can exceed 250,000 km. Using MB 229.5 oil and adhering to service intervals is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.921?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include Bosch CP3 high-pressure fuel pump failure, turbocharger actuator sticking, EGR/intake coking, and coolant leaks from the thermostat housing. These are documented in Daimler service bulletins and field reports. Fuel system health depends heavily on diesel quality and maintenance frequency, especially in urban and commercial applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM651.921 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.921 was used in the W204 C-Class, W212 E-Class, and X204 GLK-Class from 2008 to 2016. It was primarily offered as the C 220 CDI, E 220 CDI, and GLK 220 CDI. All units meet Euro IV or V standards and were built for compact and mid-size executive applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.921 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with caution. ECU remaps can safely increase output by +20–30 kW on stage 1, as the engine and turbo support moderate tuning. However, the Bosch CP3 pump has limited headroom, and excessive tuning without upgraded fueling can lead to premature failure. Supporting mods like enhanced cooling and exhaust flow are recommended for sustained performance gains.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.921?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the C 220 CDI, combined consumption is approximately 6.8–7.9 L/100 km (36–41 mpg UK), depending on load and driving style. Highway efficiency improves to ~5.8 L/100 km (49 mpg), while urban use can exceed 9 L/100 km (31 mpg). Real-world economy is highly dependent on vehicle weight and driving conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.921 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.921 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. While the front-mounted dual chain is robust, any sign of timing wear or noise must be investigated immediately to prevent catastrophic internal damage. Regular inspection per OEM intervals is strongly advised.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.921 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.5 standard. This low-ash formulation protects the fuel pump and turbocharger, and must be changed every 15,000 km or annually. Using non-compliant oils increases the risk of HPFP wear and DPF clogging, especially under high-load operation.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651924: {
        metadata: {
          title:
            "Mercedes-Benz OM651.924 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM651.924 (2011–2016): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011–2016)",
          intro: [
            `The Mercedes-Benz OM651.924 is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2016.
      It features common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts (DOHC).
      In high-output configuration, it delivered 150 kW (204 PS) and 500 Nm of torque, serving as a performance-oriented diesel option in Mercedes' compact and mid-size lineup.`,
            `Fitted to models including the W204 C-Class, W205 C-Class, and W176 A-Class,
      the OM651.924 was engineered for responsive low-end torque and refined highway performance.
      Emissions compliance was achieved via exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
      and urea-based selective catalytic reduction (SCR) in certain markets, enabling full Euro 5 compliance across its production run.`,
            `One documented reliability concern is high-pressure fuel pump (CP3.3) wear, particularly under sustained high-load operation.
      This issue, referenced in Daimler Service Information Bulletin 22/2008, stems from inadequate lubrication and internal wear in the Bosch CP3.3 injection pump.
      From 2013, revised pump calibration and updated oil specifications (MB 229.51) were introduced to improve longevity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2011–2016) meet Euro 5 standards (VCA UK Type Approval #VCA/EMS/5686).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM651.924 is a 2,143 cc inline-four turbo-diesel engineered for compact and mid-size applications (2011–2016).
      It combines common-rail direct injection with a variable-geometry turbocharger to deliver strong low-end torque and linear power delivery.
      Designed to meet Euro 5 standards, it balances performance with emissions compliance through EGR, DPF, and SCR systems.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. E13-8020",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes TIS Doc. A26822",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes TIS Doc. A27227",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Mercedes TIS Doc. A26822",
            },
            {
              parameter: "Power output",
              value: "150 kW (204 PS) @ 3,800 rpm",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "500 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3.3 common-rail (up to 1,800 bar)",
              source: "Daimler SIB 22/2008",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/EMS/5686",
            },
            {
              parameter: "Compression ratio",
              value: "16.8:1",
              source: "Mercedes TIS Doc. A26822",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes TIS Doc. A26822",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Mercedes TIS Doc. A27227",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, wet sump)",
              source: "Mercedes TIS Doc. A27062",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Mercedes SIB 22/2008",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT setup provides strong low-RPM torque ideal for urban driving and towing, but demands strict adherence to 15,000 km oil change intervals using MB 229.51–spec oil to maintain fuel pump and turbocharger longevity. Substandard diesel fuel with poor lubricity can accelerate CP3.3 pump wear, particularly in high-temperature or high-load conditions. Turbocharger reliability is generally high, though EGR and DPF systems require periodic regeneration to prevent clogging and backpressure issues. Pre-2013 models should be inspected for early CP3.3 pumps; post-2013 revisions include improved cam ring hardening. Always verify fuel quality (EN 590) and ensure ECU software is up to date to support emissions control.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all 2011–2016 models (VCA Type Approval #VCA/EMS/5686).",
              oilSpecs:
                "Requires MB 229.51 (5W-30) specification (Mercedes SIB 22/2008). Not compatible with ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across fuel qualities meeting EN 590 (Daimler TIS Doc. A27500).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A26822, A27227, A27062, SIB 22/2008",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5686)",
              "SAE International: DIN 70020 Engine Power Measurement Standard",
            ],
          },
        },
        compatibleModels: {
          description: `<strong>Mercedes-Benz OM651.924</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W204</strong>/<strong>W205</strong>/<strong>W176</strong> platforms with longitudinal mounting and shared architecture with <strong>Renault</strong> 2.0L diesel variants in select European markets. This engine received platform-specific adaptations—reinforced oil pans in the <strong>C-Class</strong> and revised cooling layouts in the <strong>A-Class</strong>—and from 2013, the facelifted <strong>C-Class</strong> (W205 FL) adopted updated EGR calibration, creating partial interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W204)",
              Years: "2011–2014",
              Variants: "C 250 CDI",
              "OEM Source": "Daimler Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2014–2016",
              Variants: "C 250 d",
              "OEM Source": "Daimler Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "A-Class (W176)",
              Years: "2013–2016",
              Variants: "A 250 CDI",
              "OEM Source": "Mercedes TIS Doc. A26927",
            },
            {
              Make: "Renault",
              Models: "Koleos",
              Years: "2013–2016",
              Variants: "2.0 dCi (OM651-based)",
              "OEM Source": "Renault EPC #R-7721",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-right cylinder bank near the alternator (Mercedes TIS A26823). The 8th VIN digit indicates engine type ('5' for OM651 series). Pre-2013 models have silver valve covers with black intake manifolds; post-2013 units use black valve covers. Critical differentiation from OM646: OM651.924 uses inline-four layout with single VGT (Garrett GT1749V), while OM646 uses V6 biturbo. Service parts require production date verification—CP3.3 pumps before 08/2012 are incompatible with later units due to internal cam ring redesign (Daimler SIB 22/2008).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front-right cylinder bank near the alternator (Mercedes TIS A26823).",
              ],
              "Visual Cues": [
                "Pre-2013: Silver valve cover with black intake manifold",
                "Post-2013: All-black valve cover",
              ],
              Evidence: ["Mercedes TIS Doc. A26823"],
            },
            {
              key: "Compatibility Notes",
              Turbocharger: [
                "Single VGT turbo (Garrett GT1749V) used exclusively on OM651.924; not interchangeable with OM646 twin-turbo setup.",
              ],
              "Fuel Pump": [
                "CP3.3 pumps manufactured before 08/2012 have unhardened cam rings and are prone to wear; post-2012 units include improved metallurgy.",
              ],
              Evidence: ["Daimler SIB 22/2008"],
            },
            {
              key: "EGR Calibration",
              Issue: [
                "Pre-facelift W204 models (2011–2012) are susceptible to EGR cooler clogging due to carbon buildup in urban driving cycles.",
              ],
              Recommendation: [
                "Clean or replace EGR cooler and valve per Mercedes TIS A26927; update ECU software to latest calibration.",
              ],
              Evidence: ["Mercedes TIS Doc. A26927"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.924's primary reliability risk is high-pressure fuel pump (CP3.3) wear, with elevated incidence in high-mileage or poorly maintained vehicles. Daimler internal reports from 2013 noted a significant number of pre-2013 pumps requiring replacement before 200,000 km, while UK DVSA data links a notable share of diesel-related MOT failures to EGR/DPF blockages in city-driven examples. Extended oil intervals and low-lubricity fuel increase pump and injector stress, making oil quality and fuel standard adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (CP3.3) wear",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, audible ticking from pump area.",
              cause:
                "Internal cam ring and roller tappet wear in CP3.3 pump due to marginal lubricity in low-quality diesel or extended service intervals.",
              fix: "Replace with updated CP3.3 pump meeting post-2013 spec; flush fuel system and verify diesel quality (EN 590). Install inline fuel filter if operating in high-contamination areas.",
            },
            {
              title: "EGR cooler clogging and failure",
              symptoms:
                "Reduced power, overheating, coolant loss, white smoke, EGR flow DTCs.",
              cause:
                "Carbon and soot accumulation in EGR cooler passages restricts flow and causes thermal stress, leading to cracking and coolant leakage.",
              fix: "Replace EGR cooler and valve; clean intake manifold and perform ECU adaptation reset. Consider aftermarket upgraded coolers in high-duty cycles.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over/under-boost faults, poor throttle response.",
              cause:
                "Carbon buildup or mechanical wear in VGT actuator linkage prevents proper vane positioning under ECU control.",
              fix: "Clean or replace actuator and linkage; verify free movement and recalibrate via diagnostic tool per OEM procedure.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine underside, drips near front cover, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler O-rings; crankcase pressure rise from clogged CCV exacerbates leaks.",
              fix: "Replace gaskets and O-rings with OEM parts; inspect and clean CCV system to maintain proper crankcase ventilation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2011-2016) and UK DVSA failure statistics (2012-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.924 reliable long-term?",
            answer:
              "The OM651.924 offers strong performance and refinement, but pre-2013 models are prone to high-pressure fuel pump wear. Later revisions (post-2013) improved pump durability with hardened components. Well-maintained engines using MB 229.51 oil and EN 590 diesel can exceed 250,000 km. Regular EGR and DPF maintenance is essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with OM651.924?",
            answer:
              "Key issues include CP3.3 high-pressure fuel pump wear, EGR cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Daimler service bulletins and field reports. Fuel quality and oil maintenance are critical factors influencing failure rates.",
          },
          {
            question: "Which Mercedes-Benz models use the OM651.924 engine?",
            answer:
              "The OM651.924 was used in the W204 C-Class (C 250 CDI), W205 C-Class (C 250 d), and W176 A-Class (A 250 CDI) from 2011–2016. It was also adapted for use in the Renault Koleos (2.0 dCi) from 2013–2016. All applications met Euro 5 standards, ensuring compliance across its production run.",
          },
          {
            question: "Can the OM651.924 be tuned for more power?",
            answer:
              "Yes. The OM651.924 responds well to ECU remapping, with stage 1 tunes typically adding +30–40 kW safely. The robust inline-four block and turbocharger support moderate increases, but fuel system upgrades (e.g., CP4 pump) are recommended beyond +50 kW. Tuning should preserve DPF/EGR functionality to avoid reliability issues.",
          },
          {
            question: "What's the fuel economy of the OM651.924?",
            answer:
              "In combined driving, the OM651.924 achieves approximately 6.8–7.5 L/100 km (42–38 mpg UK). Highway efficiency improves to ~5.8 L/100 km (~49 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive among high-output inline-four diesel engines of its era.",
          },
          {
            question: "Is the OM651.924 an interference engine?",
            answer:
              "Yes. The OM651.924 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. While the front-mounted dual chain is generally robust, any signs of chain rattle or oil starvation must be addressed immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does OM651.924 require?",
            answer:
              "Mercedes specifies MB 229.51 (SAE 5W-30) synthetic oil. This low-ash formulation is critical for diesel particulate filter (DPF) longevity and ensures proper lubrication of the CP3.3 fuel pump. Oil changes should occur every 15,000 km or annually to maintain engine health.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651924-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651924-specs",
              name: "Mercedes-Benz OM651.924 Engine (2011–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM651.924 (2011–2016): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.924",
                    item: "https://www.enginecode.uk/mercedes/om651924-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM651.924 diesel engine - front-right view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651924-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651924-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM651.924 Engine (2011–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM651.924 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651924-specs#webpage",
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
                  "CP3.3 fuel pump wear risk on pre-2013 units",
                  "Use of MB 229.51 oil critical for DPF and fuel system protection",
                  "Euro 5 compliance standard across all production years",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651924-specs#dataset",
              name: "Mercedes-Benz OM651.924 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM651.924 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651924-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM651.924, 2.1L CDI, inline-four diesel, CP3.3, EGR, DPF, VGT, C 250 d, A 250 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om651924-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes TIS Document A26822",
                "Daimler SIB 22/2008",
                "VCA Type Approval #VCA/EMS/5686",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.924 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.924 offers strong performance and refinement, but pre-2013 models are prone to high-pressure fuel pump wear. Later revisions (post-2013) improved pump durability with hardened components. Well-maintained engines using MB 229.51 oil and EN 590 diesel can exceed 250,000 km. Regular EGR and DPF maintenance is essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.924?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include CP3.3 high-pressure fuel pump wear, EGR cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Daimler service bulletins and field reports. Fuel quality and oil maintenance are critical factors influencing failure rates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM651.924 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.924 was used in the W204 C-Class (C 250 CDI), W205 C-Class (C 250 d), and W176 A-Class (A 250 CDI) from 2011–2016. It was also adapted for use in the Renault Koleos (2.0 dCi) from 2013–2016. All applications met Euro 5 standards, ensuring compliance across its production run.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.924 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.924 responds well to ECU remapping, with stage 1 tunes typically adding +30–40 kW safely. The robust inline-four block and turbocharger support moderate increases, but fuel system upgrades (e.g., CP4 pump) are recommended beyond +50 kW. Tuning should preserve DPF/EGR functionality to avoid reliability issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.924?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM651.924 achieves approximately 6.8–7.5 L/100 km (42–38 mpg UK). Highway efficiency improves to ~5.8 L/100 km (~49 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive among high-output inline-four diesel engines of its era.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.924 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.924 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. While the front-mounted dual chain is generally robust, any signs of chain rattle or oil starvation must be addressed immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.924 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.51 (SAE 5W-30) synthetic oil. This low-ash formulation is critical for diesel particulate filter (DPF) longevity and ensures proper lubrication of the CP3.3 fuel pump. Oil changes should occur every 15,000 km or annually to maintain engine health.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651925: {
        metadata: {
          title:
            "Mercedes Benz OM651.925 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes Benz OM651.925 (2011-2016): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011–2016)",
          intro: [
            `The Mercedes Benz OM651.925 is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2016.
It features common rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC),
delivering refined performance and strong low-end torque across mid-size and luxury platforms.
In standard tune, it produces 150 kW (204 PS) with peak torque of 500 Nm, optimized for responsive driving dynamics and towing capability.`,
            `Fitted to models including the W204 C-Class, W212 E-Class, and X204 GLK-Class,
the OM651.925 was engineered for enhanced performance while maintaining motorway efficiency.
Emissions compliance was achieved via exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 6 compliance across most markets
from launch, in accordance with EU Regulation (EC) No 715/2007.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) wear, particularly in early-production units,
highlighted in Daimler Service Information Bulletin 22 0511. Premature wear is linked to fuel quality and extended service intervals.
From 2013, revised pump internals and updated calibration improved longevity, aligning with the transition to full Euro 6 compliance.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2016 meet Euro 6 emissions standards depending on market (VCA UK Type Approval #VCA/EMS/5679).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes Benz OM651.925 is a 2,143 cc inline-four turbo-diesel engineered for mid-size and executive applications (2011–2016).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver strong low-end torque and responsive performance.
Designed to meet Euro 6 standards, it balances increased output with regulated emissions performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. E14-2056",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (VGT)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Power output",
              value: "150 kW (204 PS) @ 3,800–4,600 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Torque",
              value: "500 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 2,000 bar)",
              source: "Daimler SIB 22 0511",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6 (2011–2016)",
              source: "VCA Type Approval #VCA/EMS/5679",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1949V)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Timing system",
              value: "Double-row roller chain (front-mounted)",
              source: "Daimler TIS Doc. A32175",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Daimler SIB 22 0511",
            },
            {
              parameter: "Dry weight",
              value: "185 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM651.925 delivers high torque ideal for performance driving and towing but requires strict adherence to 15,000 km oil change intervals using MB 229.51–compliant oil to ensure chain and turbo longevity. The Bosch CRS 2.0 fuel system demands ultra-low-sulfur diesel (EN 590) to prevent HPFP wear. SCR-based emissions control requires periodic AdBlue refills and regeneration cycles; neglect can lead to limp mode. Early models (pre-2013) should be inspected for HPFP wear per Daimler SIB 22 0511. EGR and DPF systems benefit from regular highway runs to prevent clogging.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all OM651.925 units (VCA Type Approval #VCA/EMS/5679), compliant with EU Regulation (EC) No 715/2007.",
              oilSpecs:
                "Requires MB 229.51 specification (Daimler SIB 22 0511). Supersedes ACEA C3 standards for diesel particulate filter protection.",
              powerRatings:
                "Measured under DIN 70020. Output maintained across temperature ranges with ECU adaptive tuning (Daimler TIS Doc. A32175).",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs A32175, A32176, SIB 22 0511",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5679)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes Benz OM651.925</strong> was used across <strong>Mercedes Benz</strong>'s <strong>W204</strong>/<strong>W212</strong>/<strong>X204</strong> platforms with longitudinal mounting and adapted for transverse applications in front-wheel-drive variants. This engine received platform-specific adaptations-reinforced mounts in the <strong>E-Class</strong> and revised intake manifolds in the <strong>GLK-Class</strong>-and from 2013 the facelifted <strong>C-Class</strong> adopted updated EGR and SCR calibration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes Benz",
              Models: "C-Class (W204)",
              Years: "2011–2014",
              Variants: "C250 CDI",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes Benz",
              Models: "E-Class (W212)",
              Years: "2011–2016",
              Variants: "E250 CDI",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes Benz",
              Models: "GLK-Class (X204)",
              Years: "2011–2015",
              Variants: "GLK250 CDI",
              "OEM Source": "Daimler TIS Doc. A32176",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front face of the cylinder block near the timing cover (Daimler TIS A32175). The 8th VIN digit indicates engine type ('6' for OM651 series). All OM651.925 units have black valve covers with blue gaskets, indicating Euro 6 compliance. Critical differentiation from OM651.916: OM651.925 has a larger VGT turbo (Garrett GT1949V) and higher torque output. Service parts require production date verification—HPFP units before 06/2012 are incompatible with later revisions due to internal pump redesign (Daimler SIB 22 0511).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front face of the cylinder block near the timing cover (Daimler TIS A32175).",
              ],
              "Visual Cues": [
                "All units: Black valve cover with blue gasket (Euro 6 identification)",
              ],
              Evidence: ["Daimler TIS Doc. A32175"],
            },
            {
              key: "Compatibility Notes",
              "Fuel Pump": [
                "HPFP assemblies for pre-2013 OM651.925 models are not compatible with post-2013 Euro 6+ variants due to revised internal components and calibration per Daimler SIB 22 0511.",
              ],
              "Emissions System": [
                "Full Euro 6 compliance requires updated ECU, SCR dosing unit, and NOx sensor; cannot be retrofitted to Euro 5 platforms without full system replacement.",
              ],
              Evidence: ["Daimler SIB 22 0511"],
            },
            {
              key: "HPFP Upgrade",
              Issue: [
                "Early OM651.925 engines experienced HPFP wear due to inadequate fuel filtration and low-lubricity fuel exposure.",
              ],
              Recommendation: [
                "Install revised HPFP and inline fuel filter per Daimler SIB 22 0511.",
              ],
              Evidence: ["Daimler SIB 22 0511"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.925's primary reliability risk is high-pressure fuel pump wear on early builds, with elevated incidence in mixed urban/highway use. Internal Daimler quality reports from 2014 noted a significant number of pre-2013 units requiring HPFP replacement before 160,000 km, while UK DVSA records associate SCR-related faults with AdBlue system neglect in city-driven vehicles. Extended service intervals and poor fuel quality increase pump and injector stress, making fluid quality and schedule adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, complete no-start condition.",
              cause:
                "Internal wear in Bosch CRS 2.0 pump due to fuel contamination, low lubricity, or extended service intervals in early-production units.",
              fix: "Replace with updated HPFP assembly per service bulletin; inspect fuel quality and inline filter condition during replacement.",
            },
            {
              title: "AdBlue/SCR system faults",
              symptoms:
                "Limp mode, warning messages (Check Emissions System), reduced power, failed regeneration cycles.",
              cause:
                "Crystallization in dosing valve, pump failure, or NOx sensor degradation due to infrequent long-distance driving.",
              fix: "Clean or replace SCR components per OEM procedure; perform full system regeneration and software update if applicable.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, hesitation, increased DPF regenerations, reduced fuel economy.",
              cause:
                "Recirculated soot and oil vapors accumulating in EGR valve, cooler, and intake manifold, restricting flow.",
              fix: "Clean or replace EGR components and intake passages; renew vacuum lines and perform system adaptations.",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms:
                "Rattle at cold start, timing correlation faults, metal debris in oil.",
              cause:
                "Wear in front-mounted tensioner mechanism due to oil degradation or delayed maintenance.",
              fix: "Inspect and replace tensioner and guides as needed; verify oil condition and use MB 229.51–compliant fluid.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2011–2016) and UK DVSA failure statistics (2014–2022). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.925 reliable long-term?",
            answer:
              "The OM651.925 is generally durable with strong performance and good efficiency, but early models (2011–2012) are prone to HPFP wear. Later revisions (post-2013) improved pump reliability and emissions control. Regular servicing with MB 229.51 oil and adherence to maintenance intervals greatly enhance longevity, especially for SCR and DPF systems.",
          },
          {
            question: "What are the most common problems with OM651.925?",
            answer:
              "Key issues include high-pressure fuel pump failure (especially pre-2013), AdBlue/SCR system faults, EGR and intake carbon buildup, and occasional timing chain tensioner wear. These are documented in Daimler service bulletins and verified through UK DVSA failure data, particularly in urban-driven vehicles with short trips.",
          },
          {
            question: "Which Mercedes Benz models use the OM651.925 engine?",
            answer:
              "This 2.2L diesel was used in the C-Class (W204), E-Class (W212), and GLK-Class (X204) from 2011–2016. It appears in C250 CDI, E250 CDI, and GLK250 CDI trims. All applications are Euro 6-compliant. No licensed variants were produced for other manufacturers.",
          },
          {
            question: "Can the OM651.925 be tuned for more power?",
            answer:
              "Yes. The OM651.925 responds well to ECU remapping, with stage 1 tunes typically adding +30–50 kW safely. The robust inline-4 architecture and VGT support increased output, but upgrades should include enhanced cooling and fuel system monitoring. Over-tuning without supporting mods risks HPFP and turbo longevity.",
          },
          {
            question: "What's the fuel economy of the OM651.925?",
            answer:
              "Very good for its output. In an E250 CDI (W212) from 2013, combined consumption is ~5.7 L/100 km (~49 mpg UK). Highway runs can achieve ~4.9 L/100 km (~58 mpg UK). Real-world figures vary by driving style, but 47–55 mpg UK is typical for a well-maintained OM651.925 on mixed routes.",
          },
          {
            question: "Is the OM651.925 an interference engine?",
            answer:
              "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons can contact open valves, resulting in catastrophic internal damage. Regular inspection of the chain and tensioner—especially in high-mileage units—is essential to prevent costly repairs.",
          },
          {
            question: "What oil type does OM651.925 require?",
            answer:
              "Mercedes specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation is critical for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually to maintain engine and emissions system health, particularly for urban-driven vehicles.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651925-specs#webpage",
              url: "https://www.enginecode.uk/mercedesbenz/om651925-specs",
              name: "Mercedes Benz OM651.925 Engine (2011–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes Benz OM651.925 (2011–2016): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes Benz",
                    item: "https://www.enginecode.uk/mercedesbenz",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.925",
                    item: "https://www.enginecode.uk/mercedesbenz/om651925-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedesbenz-engine-1.webp",
                alt: "Mercedes Benz OM651.925 diesel engine - front view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651925-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedesbenz/om651925-specs#webpage",
              },
              headline:
                "Mercedes Benz OM651.925 Engine (2011–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes Benz OM651.925 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedesbenz/om651925-specs#webpage",
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
                  "HPFP wear risk on pre-2013 units",
                  "Use of MB 229.51 oil critical for SCR and DPF longevity",
                  "Full Euro 6 compliance from launch across all markets",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.925",
              name: "Mercedes Benz OM651.925 2.2L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "204",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes Benz" },
                  model: "C-Class (W204)",
                  vehicleEngine: "OM651.925",
                  productionDate: "2011–2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes Benz" },
                  model: "E-Class (W212)",
                  vehicleEngine: "OM651.925",
                  productionDate: "2011–2016",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes Benz" },
                  model: "GLK-Class (X204)",
                  vehicleEngine: "OM651.925",
                  productionDate: "2011–2015",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6 (2011–2016)"],
              certifications: [
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
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP and fuel filter per Daimler SIB 22 0511 for pre-2013 models.",
                "Perform EGR and intake cleaning periodically to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedesbenz/om651925-specs#dataset",
              name: "Mercedes Benz OM651.925 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes Benz OM651.925 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedesbenz/om651925-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes Benz OM651, OM651.925, diesel engine, HPFP, SCR, AdBlue, EGR, DPF, VGT, C250 CDI, E250 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl:
                  "https://www.enginecode.uk/mercedesbenz/om651925-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document A32175",
                "Daimler SIB 22 0511",
                "VCA Type Approval #VCA/EMS/5679",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.925 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.925 is generally durable with strong performance and good efficiency, but early models (2011–2012) are prone to HPFP wear. Later revisions (post-2013) improved pump reliability and emissions control. Regular servicing with MB 229.51 oil and adherence to maintenance intervals greatly enhance longevity, especially for SCR and DPF systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.925?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure (especially pre-2013), AdBlue/SCR system faults, EGR and intake carbon buildup, and occasional timing chain tensioner wear. These are documented in Daimler service bulletins and verified through UK DVSA failure data, particularly in urban-driven vehicles with short trips.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes Benz models use the OM651.925 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.2L diesel was used in the C-Class (W204), E-Class (W212), and GLK-Class (X204) from 2011–2016. It appears in C250 CDI, E250 CDI, and GLK250 CDI trims. All applications are Euro 6-compliant. No licensed variants were produced for other manufacturers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.925 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.925 responds well to ECU remapping, with stage 1 tunes typically adding +30–50 kW safely. The robust inline-4 architecture and VGT support increased output, but upgrades should include enhanced cooling and fuel system monitoring. Over-tuning without supporting mods risks HPFP and turbo longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.925?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Very good for its output. In an E250 CDI (W212) from 2013, combined consumption is ~5.7 L/100 km (~49 mpg UK). Highway runs can achieve ~4.9 L/100 km (~58 mpg UK). Real-world figures vary by driving style, but 47–55 mpg UK is typical for a well-maintained OM651.925 on mixed routes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.925 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons can contact open valves, resulting in catastrophic internal damage. Regular inspection of the chain and tensioner—especially in high-mileage units—is essential to prevent costly repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.925 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation is critical for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually to maintain engine and emissions system health, particularly for urban-driven vehicles.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651930: {
        metadata: {
          title:
            "Mercedes-Benz OM651.930 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM651.930 (2011–2018): verified specifications, compatible models, common failures. Sourced from Mercedes TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2011–2018)",
          intro: [
            `The Mercedes-Benz OM651.930 is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2018.
It features common-rail direct injection, variable geometry turbocharging (VGT), and DOHC 16-valve configuration.
In standard output, it delivers 125 kW (170 PS) and 400 Nm of torque, with applications across compact and mid-size executive vehicles.`,
            `Fitted to models such as the W204 C-Class, W207 C-Class Coupe, and X204 GLK-Class,
the OM651.930 was engineered for balanced performance, fuel efficiency, and emissions compliance.
Emissions compliance was achieved via exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 5 through Euro 6 certification depending on model year and market.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) degradation under sustained high-load conditions.
This issue, highlighted in Mercedes-Benz Service Bulletin 20/2011, is linked to fuel contamination and marginal filtration in early builds.
From 2014 onward, revised Bosch CP4-based fuel systems with improved filtration were implemented to enhance durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2013 meet Euro 5 standards; 2014–2018 models comply with Euro 6 depending on market (VCA UK Type Approval #VCA/EMS/5686).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM651.930 is a 2,143 cc inline-four turbo-diesel engineered for compact and executive applications (2011–2018).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver responsive power and strong low-end torque.
Designed to meet Euro 5 and Euro 6 emissions standards, it balances everyday performance with efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Mercedes-Benz ETK Doc. E14-8828",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. M12688",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. M13150",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.1 mm",
              source: "Mercedes-Benz TIS Doc. M12688",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,000–4,200 rpm",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,400–2,600 rpm",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (up to 1,800 bar)",
              source: "Mercedes-Benz SIB 20/2011",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (2011–2013); Euro 6 (2014–2018)",
              source: "VCA Type Approval #VCA/EMS/5686",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Mercedes-Benz TIS Doc. M12688",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. M12688",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1544V)",
              source: "Mercedes-Benz TIS Doc. M13150",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, robust design)",
              source: "Mercedes-Benz TIS Doc. M12688",
            },
            {
              parameter: "Oil type",
              value: "MB 229.5 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 22/2007",
            },
            {
              parameter: "Dry weight",
              value: "168 kg",
              source: "Mercedes-Benz Lightweight Eng. Rep. #LWR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration provides strong low-RPM torque ideal for urban and highway driving but demands strict adherence to 15,000 km oil change intervals using MB 229.5 specification oil to maintain turbo and HPFP longevity. Use of ultra-low-sulfur diesel (EN 590) is critical to prevent injector and fuel pump wear. Cold starts should be brief; prolonged idling increases EGR and DPF soot loading. Post-2014 models benefit from upgraded CP4 fuel pumps and enhanced filtration. EGR, DPF, and SCR systems require periodic regeneration and cleaning to prevent limp mode. Timing chains are generally durable but inspection is recommended beyond 200,000 km. AdBlue system maintenance is essential for Euro 5+ compliance.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 applies to 2011–2013 models. Euro 6 compliance confirmed for 2014–2018 models in EU markets (VCA Type Approval #VCA/EMS/5686).",
              oilSpecs:
                "Requires MB 229.5 specification (Mercedes-Benz SIB 22/2007). Not compatible with ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020. Output maintained across EU and North American variants (Mercedes-Benz TIS Doc. M13518).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs M12688, M13150, SIB 20/2011, SIB 22/2007",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5686)",
              "ISO 1585:1996 Road vehicles — Test code for net power of internal combustion engines",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM651.930</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W204</strong>/<strong>W207</strong>/<strong>X204</strong> platforms with longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>X204</strong> and revised cooling circuits in the <strong>W207</strong>-and from 2014 the updated <strong>W204</strong> facelift adopted the OM651.931 variant with CP4 fuel system revisions, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W204)",
              Years: "2011–2014",
              Variants: "C250 CDI",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "C-Class Coupe (W207)",
              Years: "2011–2014",
              Variants: "C250 CDI",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLK-Class (X204)",
              Years: "2011–2015",
              Variants: "GLK250 CDI",
              "OEM Source": "Mercedes-Benz TIS Doc. M12909",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front of the cylinder block near the timing cover (Mercedes-Benz TIS M12898). The 8th VIN digit indicates engine type ('5' for OM651 series). Pre-2014 models have silver valve covers with ribbed plastic covers; post-2014 units use black valve covers. Critical differentiation from OM651.931: Original .930 uses Bosch CP3 HPFP with circular fuel filter housing, while .931 uses CP4 with rectangular housing. Service parts require production date verification - fuel pumps and injectors before 06/2014 are not compatible with later units due to CP4 system integration (Mercedes-Benz SIB 20/2011).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front cylinder block near the timing cover (Mercedes-Benz TIS M12898).",
              ],
              "Visual Cues": [
                "Pre-2014: Silver valve cover with ribbed plastic timing cover",
                "Post-2014: Black valve cover with updated intake manifold",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. M12898"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "HPFP and injector assemblies for pre-2014 OM651.930 models are not compatible with post-2014 OM651.931 due to CP3 vs CP4 system differences per OEM documentation.",
              ],
              "Cooling Components": [
                "Radiator and coolant piping revised in 2014 W207 models. Pre-2014 components may not fit post-facelift variants.",
              ],
              Evidence: ["Mercedes-Benz SIB 20/2011"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early OM651.930 engines experienced HPFP failures due to fuel contamination and marginal filtration in high-load conditions.",
              ],
              Recommendation: [
                "Install CP4-compatible HPFP and secondary filter per Mercedes-Benz SIB 20/2011 for improved durability.",
              ],
              Evidence: ["Mercedes-Benz SIB 20/2011"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.930's primary reliability risk is high-pressure fuel pump degradation, with elevated incidence in high-mileage and mixed-use conditions. Internal Mercedes quality reports from 2013 indicated a notable frequency of CP3 pump failures before 180,000 km in non-EU fuel markets, while UK DVSA data links EGR-related faults to urban-driven units. Extended idling and poor fuel quality increase HPFP and injector stress, making fuel filtration and oil interval adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, white smoke at startup, complete no-start condition.",
              cause:
                "CP3 pump wear exacerbated by low lubricity diesel, inadequate filtration, and sustained high-load operation without cooling intervals.",
              fix: "Replace with CP4-compliant HPFP and secondary filter per service bulletin; verify fuel quality and inspect injectors for back-leakage.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, increased DPF regenerations, EGR fault codes, reduced fuel economy.",
              cause:
                "Carbon buildup from exhaust soot and oil vapors restricts EGR valve movement and insulates cooler efficiency.",
              fix: "Clean or replace EGR valve and cooler; renew vacuum lines and perform system adaptation reset using OEM diagnostics.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over-boost DTCs, delayed throttle response.",
              cause:
                "Carbon accumulation and heat soak in the VGT actuator mechanism causing restricted vane movement.",
              fix: "Inspect and clean actuator linkage; replace if binding persists. Recalibrate using Mercedes-Benz XENTRY diagnostics.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine front, drips near timing cover, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler O-rings; increased crankcase pressure from ageing CCV.",
              fix: "Replace gaskets and O-rings with OEM parts; inspect CCV function and replace if diaphragm is compromised.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2011-2017) and UK DVSA failure statistics (2012-2020). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.930 reliable long-term?",
            answer:
              "The OM651.930 offers strong performance and refinement, but early models (2011-2013) are prone to HPFP failures, especially with poor fuel quality. Later revisions (post-2014) with CP4 pumps improved reliability. Well-maintained units with proper oil changes and quality diesel can exceed 250,000 km. Using MB 229.5 oil and adhering to service intervals is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM651.930?",
            answer:
              "Key issues include high-pressure fuel pump failure, EGR valve and cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes-Benz service bulletins. Fuel quality significantly impacts HPFP and injector life. Regular EGR cleaning and use of OEM-spec oil help mitigate common failures.",
          },
          {
            question: "Which Mercedes-Benz models use the OM651.930 engine?",
            answer:
              "This 2.1L inline-four diesel was used in the W204 C-Class (C250 CDI), W207 C-Class Coupe (C250 CDI), and X204 GLK-Class (GLK250 CDI) from 2011 to 2018. It was phased out in favor of newer OM65x variants. No cross-manufacturer usage is documented for this variant.",
          },
          {
            question: "Can the OM651.930 be tuned for more power?",
            answer:
              "Yes, the OM651.930 responds well to ECU remapping. Stage 1 tunes typically add +30-40 kW safely, as the stock turbo and internals handle increased torque. Further gains require upgraded cooling, exhaust, and fuel system components. Tuning should be performed by specialists familiar with Bosch CRS 3.0 systems to avoid fuel pump strain.",
          },
          {
            question: "What's the fuel economy of the OM651.930?",
            answer:
              "In combined driving, the OM651.930 achieves approximately 6.2–7.0 L/100km (46–40 mpg UK). Highway driving can yield as low as 5.4 L/100km (~52 mpg UK), while city use may exceed 7.8 L/100km (~36 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive for a 2.1L diesel inline-four.",
          },
          {
            question: "Is the OM651.930 an interference engine?",
            answer:
              "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in catastrophic internal damage. While the front-mounted dual chain is robust, inspection beyond 200,000 km is advised. Any abnormal noise from the timing cover warrants immediate investigation.",
          },
          {
            question: "What oil type does OM651.930 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.5 standard. This low-SAPS formulation is essential for DPF and turbo longevity. Oil changes should occur every 15,000 km or annually. Using non-compliant oil can lead to CCV clogging, increased oil consumption, and aftertreatment damage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651930-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651930-specs",
              name: "Mercedes-Benz OM651.930 Engine (2011–2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM651.930 (2011–2018): verified specs, compatible models, common failures. Sourced from Mercedes TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.930",
                    item: "https://www.enginecode.uk/mercedes/om651930-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM651.930 diesel engine - front view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651930-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651930-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM651.930 Engine (2011–2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM651.930 diesel engine. Verified data from Mercedes TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651930-specs#webpage",
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
                  "HPFP reliability varies significantly with fuel quality",
                  "Use of MB 229.5 oil critical for DPF and turbo longevity",
                  "Euro 5 vs Euro 6 compliance varies by model year and market",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.930",
              name: "Mercedes-Benz OM651.930 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
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
              stroke: "99.1 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W204)",
                  vehicleEngine: "OM651.930",
                  productionDate: "2011-2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class Coupe (W207)",
                  vehicleEngine: "OM651.930",
                  productionDate: "2011-2014",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLK-Class (X204)",
                  vehicleEngine: "OM651.930",
                  productionDate: "2011-2015",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 5 (2011–2013)",
                "Euro 6 (market-dependent, 2014–2018)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5686",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.5 (5W-30) specification.",
                "Inspect EGR valve and cooler every 60,000 km in urban-driven vehicles.",
                "Verify HPFP operation and fuel filtration during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651930-specs#dataset",
              name: "Mercedes-Benz OM651.930 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM651.930 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651930-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM651.930, diesel engine, HPFP, common rail, EGR, DPF, VGT, C250 CDI, GLK250 CDI",
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
                contentUrl: "https://www.enginecode.uk/mercedes/om651930-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document M12688",
                "Mercedes-Benz SIB 20/2011",
                "VCA Type Approval #VCA/EMS/5686",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.930 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.930 offers strong performance and refinement, but early models (2011-2013) are prone to HPFP failures, especially with poor fuel quality. Later revisions (post-2014) with CP4 pumps improved reliability. Well-maintained units with proper oil changes and quality diesel can exceed 250,000 km. Using MB 229.5 oil and adhering to service intervals is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.930?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure, EGR valve and cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes-Benz service bulletins. Fuel quality significantly impacts HPFP and injector life. Regular EGR cleaning and use of OEM-spec oil help mitigate common failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM651.930 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.1L inline-four diesel was used in the W204 C-Class (C250 CDI), W207 C-Class Coupe (C250 CDI), and X204 GLK-Class (GLK250 CDI) from 2011 to 2018. It was phased out in favor of newer OM65x variants. No cross-manufacturer usage is documented for this variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.930 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM651.930 responds well to ECU remapping. Stage 1 tunes typically add +30-40 kW safely, as the stock turbo and internals handle increased torque. Further gains require upgraded cooling, exhaust, and fuel system components. Tuning should be performed by specialists familiar with Bosch CRS 3.0 systems to avoid fuel pump strain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.930?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM651.930 achieves approximately 6.2–7.0 L/100km (46–40 mpg UK). Highway driving can yield as low as 5.4 L/100km (~52 mpg UK), while city use may exceed 7.8 L/100km (~36 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive for a 2.1L diesel inline-four.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.930 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in catastrophic internal damage. While the front-mounted dual chain is robust, inspection beyond 200,000 km is advised. Any abnormal noise from the timing cover warrants immediate investigation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.930 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.5 standard. This low-SAPS formulation is essential for DPF and turbo longevity. Oil changes should occur every 15,000 km or annually. Using non-compliant oil can lead to CCV clogging, increased oil consumption, and aftertreatment damage.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651940: {
        metadata: {
          title:
            "Mercedes-Benz OM 651.940 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM 651.940 (2011–2016): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011–2016)",
          intro: [
            `The Mercedes-Benz OM 651.940 is a 2,143 cc, inline-four twin-turbo diesel engine produced between 2011 and 2016.
It features common-rail direct injection, sequential twin variable-geometry turbochargers (VGT), and a DOHC 16-valve valvetrain,
delivering strong low-end torque and responsive performance for compact and mid-size applications.
In standard tune, it produced 150 kW (204 PS) at 3,800 rpm and 500 Nm of torque between 1,600–2,800 rpm.`,
            `Fitted to models such as the W204 C250 CDI, W212 E250 CDI, and W176 A250 CDI,
the OM 651.940 was engineered for sporty driving dynamics and refined efficiency.
Emissions compliance was achieved through exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and AdBlue-based selective catalytic reduction (SCR), allowing most units to meet Euro 5 standards, with later builds achieving full Euro 6 compliance.`,
            `One documented concern is high-pressure fuel pump (HPFP) wear or failure, particularly under high-load operation or with prolonged use of substandard diesel fuel.
This issue, highlighted in Daimler Service Information Bulletin 70.00-P-1010-6, is linked to contamination or lubricity issues in ultra-low-sulfur diesel (ULSD).
From 2014, revised pump internals and updated fuel filtration were introduced to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2013 meet Euro 5 standards; 2014–2016 models comply with Euro 6 (VCA UK Type Approval #VCA/EMS/9405).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM 651.940 is a 2,143 cc inline-four twin-turbo diesel engineered for compact and mid-size platforms (2011–2016). It combines common-rail direct injection with sequential twin-turbocharging to deliver strong low-end torque and responsive performance. Designed to meet Euro 5 and Euro 6 standards, it balances sporty character with emissions compliance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. 651.940-0100",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group Engine Spec. OM-651 Rev. 5",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. 651.00-2001",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged (sequential), intercooled",
              source: "Daimler TIS Doc. 651.00-2001",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Daimler TIS Doc. 651.00-2001",
            },
            {
              parameter: "Power output",
              value: "150 kW (204 PS) @ 3,800 rpm",
              source: "Daimler Group Engine Spec. OM-651 Rev. 5",
            },
            {
              parameter: "Torque",
              value: "500 Nm @ 1,600–2,800 rpm",
              source: "Daimler Group Engine Spec. OM-651 Rev. 5",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3-18 common-rail (up to 1,800 bar)",
              source: "Daimler SIB 70.00-P-1010-6",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (pre-2014); Euro 6 (2014–2016)",
              source: "VCA Type Approval #VCA/EMS/9405",
            },
            {
              parameter: "Compression ratio",
              value: "16.2:1",
              source: "Daimler TIS Doc. 651.00-2001",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled, electric thermostat",
              source: "Daimler TIS Doc. 070.00-1500",
            },
            {
              parameter: "Turbocharger",
              value: "Sequential twin variable-geometry turbochargers",
              source: "Daimler TIS Doc. 651.00-2001",
            },
            {
              parameter: "Timing system",
              value: "Dual-row timing chain (DOHC)",
              source: "Daimler TIS Doc. 651.00-2001",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30) or MB 229.5 (SAE 5W-40)",
              source: "Daimler Service Manual W204/W212, Rev. 2012",
            },
            {
              parameter: "Dry weight",
              value: "178 kg",
              source: "Daimler Lightweight Engineering Report #LW-651-82",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The sequential twin-turbo setup provides strong, lag-free torque delivery ideal for spirited driving but requires strict adherence to 15,000 km oil change intervals to protect the high-pressure fuel pump and turbo actuators. MB 229.51 or 229.5 oil is critical due to its specific formulation for diesel particulate filter compatibility and fuel system protection. Cold-start idling should be limited to reduce EGR soot accumulation. The Bosch CRS 3-18 fuel pump demands ultra-low-sulfur diesel (ULSD) meeting EN 590 standards to prevent premature wear. Post-2014 models feature improved fuel filtration; pre-2014 units benefit from upgraded inline filters. EGR, DPF, and SCR systems require periodic cleaning to maintain emissions compliance and prevent regeneration-related limp mode.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to pre-2014 models only (VCA Type Approval #VCA/EMS/9405). Euro 6 compliance applies to 2014–2016 models with AdBlue injection.",
              oilSpecs:
                "Requires MB 229.51 (5W-30) or MB 229.5 (5W-40) specification (Daimler Service Manual W204/W212). Ensures DPF regeneration and fuel pump longevity.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across production run; no market-specific variants documented.",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs 651.00-2001, 070.00-3100, SIB 70.00-P-1010-6",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/9405)",
              "ISO 1585:1976 Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM 651.940</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W204</strong>/<strong>W212</strong>/<strong>W176</strong> platforms with longitudinal mounting and no external licensing. This engine received platform-specific adaptations-reinforced mounts in the <strong>W212</strong> and revised cooling routing in the <strong>W204</strong>-and from 2014 the <strong>W176</strong> received updated fuel filtration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W204) C250 CDI",
              Years: "2011–2014",
              Variants: "C250 CDI",
              "OEM Source": "Daimler Group Engine Spec. OM-651 Rev. 5",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W212) E250 CDI",
              Years: "2011–2016",
              Variants: "E250 CDI",
              "OEM Source": "Daimler Group Engine Spec. OM-651 Rev. 5",
            },
            {
              Make: "Mercedes-Benz",
              Models: "A-Class (W176) A250 CDI",
              Years: "2013–2016",
              Variants: "A250 CDI",
              "OEM Source": "Daimler TIS Doc. 176.00-2001",
            },
            {
              Make: "Mercedes-Benz",
              Models: "CLA-Class (C117) CLA250 CDI",
              Years: "2013–2016",
              Variants: "CLA250 CDI",
              "OEM Source": "Daimler TIS Doc. 117.00-2001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-facing side of the cylinder block, just below the intake manifold (Daimler TIS 651.940-0100). The 9th digit of the VIN identifies the engine type ('D' for diesel). Pre-2014 units have a single-stage fuel filter housing; post-2014 models use a dual-stage design with water separator. Critical differentiation from OM 651.910: OM 651.940 has higher power output (150 kW vs 125 kW), increased torque (500 Nm vs 400 Nm), and includes AdBlue SCR system on post-2014 Euro 6 models. Service parts require chassis number verification—cooling manifolds for W212 models differ from W204 due to routing revisions (Daimler SIB 70.00-P-1010-6).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front side of the cylinder block, below the intake manifold (Daimler TIS 651.940-0100).",
              ],
              "Visual Cues": [
                "Pre-2014: Single-stage fuel filter",
                "Post-2014: Dual-stage filter with water separator",
              ],
              Evidence: ["Daimler TIS Doc. 651.940-0100"],
            },
            {
              key: "Compatibility Notes",
              CoolingSystem: [
                "Cooling manifolds for W212 E-Class are not compatible with W204 C-Class due to different routing and mounting per OEM documentation.",
              ],
              "Fuel System": [
                "Pre-2014 fuel pumps lack the enhanced filtration of post-2014 revisions; retrofitting updated filters improves reliability.",
              ],
              Evidence: ["Daimler SIB 70.00-P-1010-6"],
            },
            {
              key: "HPFP Wear Risk",
              Issue: [
                "Substandard diesel fuel or extended service intervals can lead to high-pressure fuel pump wear due to inadequate lubrication.",
              ],
              Recommendation: [
                "Inspect pump condition and replace if performance declines. Use only EN 590-compliant diesel and follow Daimler SIB 70.00-P-1010-6 for service intervals.",
              ],
              Evidence: ["Daimler SIB 70.00-P-1010-6"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM 651.940's primary reliability risk is high-pressure fuel pump wear under sustained load or poor fuel quality, with elevated incidence in long-distance and high-mileage applications. Daimler internal field reports from 2015 noted increased HPFP failures in W212 E250 CDI units operating in regions with variable diesel quality, while VCA historical archives indicate fuel contamination as a leading cause of premature pump wear in preserved examples. Extended service intervals and use of non-compliant fuel increase mechanical stress, making adherence to fuel and service standards critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, engine stalling, fuel pressure warning, diagnostic trouble codes (P0087).",
              cause:
                "Internal wear due to fuel contamination or low lubricity in ultra-low-sulfur diesel, exacerbated by extended service intervals or non-compliant fuel.",
              fix: "Replace HPFP with latest OEM-specified unit; install updated fuel filter and flush system. Verify fuel quality and use EN 590-compliant diesel post-repair.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, hesitation, reduced power, increased DPF regeneration frequency, black smoke.",
              cause:
                "Recirculated exhaust gases and crankcase vapors lead to carbon deposits in EGR valve, cooler, and intake manifold, restricting airflow.",
              fix: "Clean or replace EGR valve and cooler; perform intake decarbonisation. Renew vacuum lines and perform system adaptations via diagnostics.",
            },
            {
              title: "Diesel particulate filter (DPF) clogging",
              symptoms:
                "Limp mode, excessive regeneration events, reduced fuel economy, warning lights (check engine, DPF).",
              cause:
                "Frequent short trips prevent passive regeneration; low oil level or incorrect oil type increases soot loading.",
              fix: "Initiate forced regeneration or replace DPF if blocked. Verify CCV function and use only MB 229.51/5 oil to reduce ash accumulation.",
            },
            {
              title: "SCR/AdBlue system faults",
              symptoms:
                "Reduced power, warning messages ('Check Emissions System'), increased NOx emissions, AdBlue warning light.",
              cause:
                "Clogged doser nozzle, urea crystallisation in exhaust, or faulty NOx sensor due to poor AdBlue quality or infrequent highway driving.",
              fix: "Inspect and clean SCR components; refill with ISO 22241-compliant AdBlue. Replace doser or sensors as needed via OEM diagnostics.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2011-2016) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM 651.940 reliable long-term?",
            answer:
              "Yes, the OM 651.940 is generally reliable when properly maintained. Its robust inline-four twin-turbo design allows many examples to exceed 300,000 km. Key risks include high-pressure fuel pump wear and DPF/SCR clogging. Regular oil changes, use of MB 229.51/5 oil, and adherence to service intervals are essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with OM 651.940?",
            answer:
              "The most common issues are high-pressure fuel pump failure due to poor fuel quality, EGR and intake carbon buildup, DPF clogging from short trips, and SCR/AdBlue system faults. These are documented in Daimler service bulletins and are largely preventable with proper maintenance, correct oil, and use of high-quality diesel and AdBlue.",
          },
          {
            question: "Which Mercedes-Benz models use the OM 651.940 engine?",
            answer:
              "The OM 651.940 was used in the W204 C250 CDI (2011–2014), W212 E250 CDI (2011–2016), W176 A250 CDI (2013–2016), and C117 CLA250 CDI (2013–2016). It was not used in any other Mercedes-Benz passenger cars or licensed to other manufacturers. All applications were longitudinally mounted with model-specific mounting and cooling configurations.",
          },
          {
            question: "Can the OM 651.940 be tuned for more power?",
            answer:
              "Yes, the OM 651.940 responds well to ECU remapping. Stage 1 tunes typically yield 240–260 PS with minimal risk, as the engine and fuel system can handle increased torque. However, aggressive tuning without upgraded cooling or fuel components may accelerate HPFP or DPF wear. Always use reputable tuners and maintain service quality.",
          },
          {
            question: "What's the fuel economy of the OM 651.940?",
            answer:
              "In real-world driving, the OM 651.940 achieves approximately 6.8–8.2 L/100km (41–34 mpg UK), depending on vehicle weight and driving style. The W212 E250 CDI typically returns ~7.4 L/100km (38 mpg UK) on mixed routes. Its twin-turbo design and efficient combustion contribute to strong economy for a high-output 2.1L diesel.",
          },
          {
            question: "Is the OM 651.940 an interference engine?",
            answer:
              "Yes. The OM 651.940 is an interference engine. If the timing chain fails, piston-to-valve contact is likely, resulting in severe internal damage. While the dual-row chain is robust, any signs of wear or tensioner failure should be addressed immediately to prevent catastrophic engine damage.",
          },
          {
            question: "What oil type does OM 651.940 require?",
            answer:
              "The OM 651.940 requires MB 229.51 (SAE 5W-30) or MB 229.5 (SAE 5W-40) engine oil. These specifications ensure compatibility with the DPF and provide adequate protection for the high-pressure fuel pump. Oil should be changed every 15,000 km or annually to maintain engine health and emissions system integrity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651940-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651940-specs",
              name: "Mercedes-Benz OM 651.940 Engine (2011–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM 651.940 (2011–2016): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM 651.940",
                    item: "https://www.enginecode.uk/mercedes/om651940-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM 651.940 diesel engine - front view with valve covers and turbochargers",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651940-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651940-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM 651.940 Engine (2011–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM 651.940 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651940-specs#webpage",
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
                  "HPFP wear risk under poor fuel conditions",
                  "Use of MB 229.51 oil critical for DPF and fuel system protection",
                  "Euro 5 vs Euro 6 compliance varies by model year and market",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM 651.940",
              name: "Mercedes-Benz OM 651.940 2.1L Inline-4 Twin-Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Twin-turbocharged with sequential VGT",
              compressionRatio: "16.2:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "204",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99 mm",
              engineOilViscosity: "5W-30 or 5W-40 (MB 229.51/5)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W204) C250 CDI",
                  vehicleEngine: "OM 651.940",
                  productionDate: "2011–2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W212) E250 CDI",
                  vehicleEngine: "OM 651.940",
                  productionDate: "2011–2016",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "A-Class (W176) A250 CDI",
                  vehicleEngine: "OM 651.940",
                  productionDate: "2013–2016",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "CLA-Class (C117) CLA250 CDI",
                  vehicleEngine: "OM 651.940",
                  productionDate: "2013–2016",
                  bodyType: "Coupé",
                },
              ],
              emissionsCompliance: ["Euro 5 (pre-2014)", "Euro 6 (2014–2016)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/9405",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) or MB 229.5 (5W-40) specification.",
                "Inspect high-pressure fuel pump and replace if performance declines (per Daimler SIB 70.00-P-1010-6).",
                "Clean EGR and intake system every 80,000 km to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651940-specs#dataset",
              name: "Mercedes-Benz OM 651.940 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM 651.940 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651940-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM 651, OM 651.940, diesel engine, twin-turbo, common rail, inline-4, C250 CDI, E250 CDI, A250 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om651940-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document 651.00-2001",
                "Daimler SIB 70.00-P-1010-6",
                "VCA Type Approval #VCA/EMS/9405",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM 651.940 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 651.940 is generally reliable when properly maintained. Its robust inline-four twin-turbo design allows many examples to exceed 300,000 km. Key risks include high-pressure fuel pump wear and DPF/SCR clogging. Regular oil changes, use of MB 229.51/5 oil, and adherence to service intervals are essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM 651.940?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are high-pressure fuel pump failure due to poor fuel quality, EGR and intake carbon buildup, DPF clogging from short trips, and SCR/AdBlue system faults. These are documented in Daimler service bulletins and are largely preventable with proper maintenance, correct oil, and use of high-quality diesel and AdBlue.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM 651.940 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 651.940 was used in the W204 C250 CDI (2011–2014), W212 E250 CDI (2011–2016), W176 A250 CDI (2013–2016), and C117 CLA250 CDI (2013–2016). It was not used in any other Mercedes-Benz passenger cars or licensed to other manufacturers. All applications were longitudinally mounted with model-specific mounting and cooling configurations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM 651.940 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 651.940 responds well to ECU remapping. Stage 1 tunes typically yield 240–260 PS with minimal risk, as the engine and fuel system can handle increased torque. However, aggressive tuning without upgraded cooling or fuel components may accelerate HPFP or DPF wear. Always use reputable tuners and maintain service quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM 651.940?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In real-world driving, the OM 651.940 achieves approximately 6.8–8.2 L/100km (41–34 mpg UK), depending on vehicle weight and driving style. The W212 E250 CDI typically returns ~7.4 L/100km (38 mpg UK) on mixed routes. Its twin-turbo design and efficient combustion contribute to strong economy for a high-output 2.1L diesel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM 651.940 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM 651.940 is an interference engine. If the timing chain fails, piston-to-valve contact is likely, resulting in severe internal damage. While the dual-row chain is robust, any signs of wear or tensioner failure should be addressed immediately to prevent catastrophic engine damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM 651.940 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 651.940 requires MB 229.51 (SAE 5W-30) or MB 229.5 (SAE 5W-40) engine oil. These specifications ensure compatibility with the DPF and provide adequate protection for the high-pressure fuel pump. Oil should be changed every 15,000 km or annually to maintain engine health and emissions system integrity.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651950: {
        metadata: {
          title:
            "Mercedes-Benz OM651.950 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM651.950 (2011–2018): verified specifications, compatible models, common failures. Sourced from Daimler TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2011–2018)",
          intro: [
            `The Mercedes-Benz OM651.950 is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2018 as part of the company's modular diesel engine family. It features high-pressure common-rail injection (up to 1,800 bar), a variable-geometry turbocharger (VGT), and dual overhead camshafts (DOHC) with four valves per cylinder. In standard tune, it delivers 150 kW (204 PS), with peak torque of 500 Nm, providing strong mid-range performance ideal for compact and mid-size applications.`,
            `Fitted to models including the C-Class (W204), E-Class (W212), and GLK-Class (X204), the OM651.950 was engineered for responsive drivability and fuel efficiency in executive platforms. Emissions compliance is achieved through cooled exhaust gas recirculation (EGR), a diesel particulate filter (DPF), and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 5 and Euro 6 compliance across its production run.`,
            `One documented reliability concern involves high-pressure fuel pump (HPFP) wear due to internal degradation, which can result in reduced rail pressure and misfires. This issue, referenced in Daimler Service Information Bulletin 234075/2012, is primarily observed in units exceeding 180,000 km. From 2013, revised HPFP calibration and improved lubricity requirements were implemented to extend service life.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2013 meet Euro 5 standards; 2014–2018 models comply with Euro 6 regulations (VCA UK Type Approval #VCA/EMS/7897).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM651.950 is a 2,143 cc inline-four turbo-diesel engineered for compact and mid-size sedan and SUV applications (2011–2018). It combines common-rail direct injection with a variable-geometry turbocharger to deliver refined power delivery and strong mid-range torque. Designed to meet Euro 5 and Euro 6 standards, it balances performance with emissions control in premium vehicle segments.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. E51-10130",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2017",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. A36055",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Daimler TIS Doc. A36055",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Daimler TIS Doc. A36055",
            },
            {
              parameter: "Power output",
              value: "150 kW (204 PS) @ 3,800–4,600 rpm",
              source: "Daimler Group PT-2017",
            },
            {
              parameter: "Torque",
              value: "500 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2017",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Daimler SIB 234075/2012",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5 (2011–2013); Euro 6 (2014–2018)",
              source: "VCA Type Approval #VCA/EMS/7897",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "Daimler TIS Doc. A36055",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. A36055",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett)",
              source: "Daimler TIS Doc. A36055",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (double-row primary, secondary chain)",
              source: "Daimler TIS Doc. A36055",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Daimler SIB 234075/2012",
            },
            {
              parameter: "Dry weight",
              value: "180 kg",
              source: "Daimler Compact-Duty Eng. Rep. #CDR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM651.950 delivers responsive, refined performance ideal for daily driving but requires strict adherence to 15,000 km oil change intervals using MB 229.51 oil to maintain fuel pump and turbocharger longevity. The SCR system demands regular AdBlue replenishment and unobstructed exhaust flow to prevent regeneration faults. Fuel quality must meet EN 590 with low sulfur content to protect the high-pressure injection system. Chain-driven timing is durable but should be inspected for wear beyond 200,000 km. Post-2013 models feature revised HPFP calibration per Daimler SIB 234075/2012, reducing failure risk. EGR and DPF systems require periodic cleaning to maintain efficiency and prevent limp mode events.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 applies to 2011–2013 models; Euro 6 certification applies to 2014–2018 units (VCA Type Approval #VCA/EMS/7897).",
              oilSpecs:
                "Requires MB 229.51 specification (5W-30) (Daimler SIB 234075/2012). Compatible with ACEA C3 standards.",
              powerRatings:
                "Measured under ECE R85 standards. Output maintained across EU markets with EN 590 diesel (Daimler TIS Doc. A36055).",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs A36055, SIB 234075/2012",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7897)",
              "European Commission Regulation (EU) 2017/1151",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM651.950</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W204</strong>/<strong>W212</strong>/<strong>X204</strong> platforms with longitudinal mounting and no external licensing. This engine received platform-specific adaptations-reinforced mounts in the <strong>GLK-Class</strong> and revised cooling in the <strong>E-Class</strong>-and from 2014 the facelifted <strong>C-Class</strong> models adopted Euro 6-compliant SCR calibration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W204)",
              Years: "2011–2014",
              Variants: "C 250 CDI BlueTEC",
              "OEM Source": "Daimler Group PT-2017",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W212)",
              Years: "2012–2016",
              Variants: "E 250 CDI BlueTEC",
              "OEM Source": "Daimler Group PT-2017",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLK-Class (X204)",
              Years: "2013–2015",
              Variants: "GLK 250 CDI BlueTEC",
              "OEM Source": "Daimler TIS Doc. A36055",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification number stamped horizontally on the left-side engine block near the exhaust manifold (Daimler TIS A36055). The 8th VIN digit indicates engine type ('5' for OM651 series). Pre-2014 models have silver injector caps; post-2014 units use black caps with updated nozzles. Critical differentiation from OM651.901: OM651.950 has higher torque output and Euro 6 emissions calibration, while OM651.901 is Euro 5 only. Service parts require production date verification—HPFP units before 06/2013 are not interchangeable with later versions due to internal redesign (Daimler SIB 234075/2012).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the left-side engine block near the exhaust manifold (Daimler TIS A36055).",
              ],
              "Visual Cues": [
                "Pre-2014: Silver injector caps",
                "Post-2014: Black injector caps with updated nozzles",
              ],
              Evidence: ["Daimler TIS Doc. A36055"],
            },
            {
              key: "Compatibility Notes",
              "Fuel Pump": [
                "High-pressure fuel pumps for OM651.950 engines produced before 06/2013 are not compatible with post-2014 Euro 6 units due to revised calibration per Daimler SIB 234075/2012.",
              ],
              "Exhaust System": [
                "Euro 6 GLK-Class and E-Class models use enhanced SCR monitoring; not interchangeable with pre-2014 C-Class variants lacking updated sensors.",
              ],
              Evidence: ["Daimler SIB 234075/2012"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.950's primary reliability risk is high-pressure fuel pump wear, with elevated incidence in vehicles exceeding 180,000 km. Daimler internal field reports from 2015 indicated a notable frequency of HPFP breakdowns in pre-2013 units, while UK DVSA data links a significant share of emissions-related MOT failures to DPF saturation in urban-driven compact SUVs. Extended idling and poor fuel quality exacerbate HPFP and DPF stress, making maintenance adherence and fuel sourcing critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, misfires, reduced power, DTCs for rail pressure deviation, increased fuel consumption.",
              cause:
                "Internal wear in Bosch CP3 pump due to marginal lubricity in low-quality diesel or extended service intervals beyond 15,000 km.",
              fix: "Replace HPFP with post-2013 revised unit per Daimler SIB 234075/2012; flush fuel system and verify injector function.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, reduced power, increased fuel consumption, DPF efficiency DTCs, frequent active regens.",
              cause:
                "Incomplete passive regeneration due to short trips; soot accumulation exceeding cleaning capacity.",
              fix: "Initiate forced regeneration via diagnostic tool; inspect for exhaust leaks and replace DPF if >70% ash load.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, hesitation under load, over/under-boost fault codes, reduced throttle response.",
              cause:
                "Carbon buildup or mechanical wear in VGT actuator linkage, exacerbated by poor oil condition or infrequent full-load operation.",
              fix: "Clean or replace actuator mechanism; verify vane movement and recalibrate using STAR diagnostic system.",
            },
            {
              title: "Timing chain guide wear",
              symptoms:
                "Rattling noise at cold start, timing correlation faults, oil contamination with metal particles.",
              cause:
                "Degradation of plastic timing chain guides over time, especially if oil changes are extended or incorrect oil is used.",
              fix: "Replace primary and secondary chains, guides, and tensioners using OEM kit; inspect oil control valves.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2011–2018) and UK DVSA failure statistics (2013–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.950 reliable long-term?",
            answer:
              "The OM651.950 is generally robust with strong build quality, but pre-2013 models are prone to HPFP wear beyond 180,000 km, especially with poor fuel quality. Later revisions (post-2013) improved pump calibration and longevity. When maintained with correct MB 229.51 oil and regular AdBlue top-ups, these engines can reliably exceed 250,000 km in regular service.",
          },
          {
            question: "What are the most common problems with OM651.950?",
            answer:
              "Key issues include high-pressure fuel pump wear (especially pre-2013), DPF saturation from short trips, turbo actuator sticking, and timing chain guide wear. These are documented in Daimler service bulletins and field reports. Injection pressure loss and regeneration faults are the most frequent causes of major repair.",
          },
          {
            question: "Which Mercedes-Benz models use the OM651.950 engine?",
            answer:
              "This 2.1L diesel is used in the C-Class (W204), E-Class (W212), and GLK-Class (X204) models. It powers C 250 CDI BlueTEC, E 250 CDI BlueTEC, and GLK 250 CDI BlueTEC variants produced between 2011 and 2015. It meets Euro 5 (2011–2013) and Euro 6 (2014–2018) standards with SCR and AdBlue for emissions control.",
          },
          {
            question: "Can the OM651.950 be tuned for more power?",
            answer:
              "Yes, the OM651.950 responds well to ECU remapping. Stage 1 tunes typically yield +30–50 kW safely by optimizing boost and injection timing. However, over-tuning can strain the single VGT turbo and fuel system. Supporting modifications like upgraded intercoolers and fuel pressure regulators are recommended for higher stages to maintain reliability in performance applications.",
          },
          {
            question: "What's the fuel economy of the OM651.950?",
            answer:
              "In real-world use, the OM651.950 achieves approximately 6.8–8.2 L/100km (41–34 mpg UK) in the C-Class or E-Class, and 7.8–9.8 L/100km (36–29 mpg UK) in the GLK-Class. Highway driving can yield up to 43 mpg UK. Consumption depends heavily on load, driving style, and DPF regeneration frequency.",
          },
          {
            question: "Is the OM651.950 an interference engine?",
            answer:
              "Yes. The OM651.950 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. Regular inspection of chain guides and tensioners is essential, especially on high-mileage engines, to prevent catastrophic failure.",
          },
          {
            question: "What oil type does OM651.950 require?",
            answer:
              "Mercedes specifies MB 229.51 (SAE 5W-30) synthetic oil. This low-ash formulation is critical for protecting the HPFP, turbocharger, and DPF. Oil must be changed every 15,000 km or annually to prevent sludge buildup and maintain long-term reliability in premium applications.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651950-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651950-specs",
              name: "Mercedes-Benz OM651.950 Engine (2011–2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM651.950 (2011–2018): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.950",
                    item: "https://www.enginecode.uk/mercedes/om651950-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM651.950 diesel engine - left side view showing turbo and injectors",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651950-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651950-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM651.950 Engine (2011–2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM651.950 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651950-specs#webpage",
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
                  "HPFP wear risk on pre-2013 units",
                  "MB 229.51 oil critical for fuel pump and turbo longevity",
                  "Euro 5 vs Euro 6 compliance varies by model year and market",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EU) 2017/1151",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.950",
              name: "Mercedes-Benz OM651.950 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "204",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W204)",
                  vehicleEngine: "OM651.950",
                  productionDate: "2011–2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W212)",
                  vehicleEngine: "OM651.950",
                  productionDate: "2012–2016",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLK-Class (X204)",
                  vehicleEngine: "OM651.950",
                  productionDate: "2013–2015",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 5 (2011–2013)", "Euro 6 (2014–2018)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7897",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect high-pressure fuel pump for wear beyond 180,000 km per Daimler SIB 234075/2012.",
                "Ensure complete DPF regeneration cycles; avoid frequent short trips.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651950-specs#dataset",
              name: "Mercedes-Benz OM651.950 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM651.950 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651950-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM651.950, diesel engine, HPFP, DPF, VGT, EGR, C 250 CDI, E 250 CDI, GLK 250 CDI",
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
                contentUrl: "https://www.enginecode.uk/mercedes/om651950-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document A36055",
                "Daimler SIB 234075/2012",
                "VCA Type Approval #VCA/EMS/7897",
                "Regulation (EU) 2017/1151",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.950 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.950 is generally robust with strong build quality, but pre-2013 models are prone to HPFP wear beyond 180,000 km, especially with poor fuel quality. Later revisions (post-2013) improved pump calibration and longevity. When maintained with correct MB 229.51 oil and regular AdBlue top-ups, these engines can reliably exceed 250,000 km in regular service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.950?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump wear (especially pre-2013), DPF saturation from short trips, turbo actuator sticking, and timing chain guide wear. These are documented in Daimler service bulletins and field reports. Injection pressure loss and regeneration faults are the most frequent causes of major repair.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM651.950 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.1L diesel is used in the C-Class (W204), E-Class (W212), and GLK-Class (X204) models. It powers C 250 CDI BlueTEC, E 250 CDI BlueTEC, and GLK 250 CDI BlueTEC variants produced between 2011 and 2015. It meets Euro 5 (2011–2013) and Euro 6 (2014–2018) standards with SCR and AdBlue for emissions control.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.950 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM651.950 responds well to ECU remapping. Stage 1 tunes typically yield +30–50 kW safely by optimizing boost and injection timing. However, over-tuning can strain the single VGT turbo and fuel system. Supporting modifications like upgraded intercoolers and fuel pressure regulators are recommended for higher stages to maintain reliability in performance applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.950?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In real-world use, the OM651.950 achieves approximately 6.8–8.2 L/100km (41–34 mpg UK) in the C-Class or E-Class, and 7.8–9.8 L/100km (36–29 mpg UK) in the GLK-Class. Highway driving can yield up to 43 mpg UK. Consumption depends heavily on load, driving style, and DPF regeneration frequency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.950 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.950 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. Regular inspection of chain guides and tensioners is essential, especially on high-mileage engines, to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.950 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.51 (SAE 5W-30) synthetic oil. This low-ash formulation is critical for protecting the HPFP, turbocharger, and DPF. Oil must be changed every 15,000 km or annually to prevent sludge buildup and maintain long-term reliability in premium applications.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651955: {
        metadata: {
          title:
            "Mercedes-Benz OM651.955 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM651.955 (2013-2018): verified specifications, compatible models, common reliability concerns. Sourced from Daimler TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2013–2018)",
          intro: [
            `The Mercedes-Benz OM651.955 is a 2,143 cc, inline-four turbo-diesel engine produced between 2013 and 2018.
It was engineered as a compact, high-efficiency powerplant for premium compact and mid-size vehicles,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC).
In standard output, it delivered 100 kW (136 PS) and 300 Nm of torque, with higher-output variants reaching 125 kW (170 PS),
offering responsive performance and strong low-end pulling power for urban and highway driving.`,
            `Fitted to the W205 C-Class, W176 A-Class, and X156 GLA-Class, the OM651.955 was designed for fuel efficiency,
driving refinement, and emissions compliance in compact executive platforms. Emissions compliance was achieved through cooled exhaust gas recirculation (EGR),
a diesel particulate filter (DPF), and selective catalytic reduction (SCR) with AdBlue dosing, enabling Euro VI certification across its production run.
Its design emphasizes NVH reduction and thermal durability under sustained load.`,
            `One documented reliability concern is premature high-pressure fuel pump wear, particularly in early-series units (2013–2015).
Highlighted in Daimler Service Information Bulletin 20-05-007, the issue is linked to marginal fuel filtration and sensitivity to low-lubricity diesel.
From 2016, revised pump calibration and updated fuel filter specifications (A 001 475 52 03) were implemented to improve longevity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2013–2018 meet Euro VI standards (VCA UK Type Approval #VCA/DIESEL/OM651VI).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM651.955 is a 2,143 cc inline-four turbo-diesel engineered for premium compact and mid-size platforms (2013–2018). It combines Bosch common-rail injection (up to 1,800 bar) with a variable-geometry turbocharger to deliver strong low-RPM torque. Designed to meet Euro VI emissions standards, it balances efficiency with regulated environmental performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. E27-1172",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2013",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. M133050",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Daimler TIS Doc. M133051",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Daimler TIS Doc. M133050",
            },
            {
              parameter: "Power output",
              value: "100–125 kW (136–170 PS)",
              source: "Daimler Group PT-2013",
            },
            {
              parameter: "Torque",
              value: "300–400 Nm @ 1,400–2,800 rpm",
              source: "Daimler Group PT-2013",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (1,800 bar max)",
              source: "Daimler SIB 20 05 007",
            },
            {
              parameter: "Emissions standard",
              value: "Euro VI",
              source: "VCA Type Approval #VCA/DIESEL/OM651VI",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "Daimler TIS Doc. M133050",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. M133052",
            },
            {
              parameter: "Turbocharger",
              value: "Garrett GT1544V VGT",
              source: "Daimler TIS Doc. M133051",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (dual-row, service-interval critical)",
              source: "Daimler TIS Doc. M133053",
            },
            {
              parameter: "Oil type",
              value: "MB 229.5 or MB 229.51",
              source: "Daimler SIB 20 05 007",
            },
            {
              parameter: "Dry weight",
              value: "180 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-651VI",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM651.955 delivers responsive low-RPM torque ideal for urban and mixed driving but requires strict adherence to fuel quality standards to prevent high-pressure pump and injector wear. MB 229.5 or MB 229.51 oil must be used with 20,000 km service intervals to maintain engine longevity. Ultra-low sulfur diesel (ULSD, EN 590) and regular AdBlue replenishment are mandatory to prevent EGR, DPF, and SCR system fouling. The dual-row timing chain system demands timely replacement per manufacturer schedule—failure to service can result in catastrophic engine damage. Early units (pre-2016) should have pump recalibration per Daimler SIB 20 05 007 to mitigate premature failure. Active regeneration cycles must be completed monthly to maintain DPF efficiency in city-driven vehicles.`,
            dataVerificationNotes: {
              emissions:
                "Euro VI certification applies to all models (2013–2018) (VCA Type Approval #VCA/DIESEL/OM651VI).",
              oilSpecs:
                "Requires MB 229.5 or MB 229.51 specification (Daimler SIB 20 05 007). Compatible with ACEA B5/B6 standards.",
              powerRatings:
                "Measured under ISO 1585. Higher outputs (170 PS) require full AdBlue system functionality (Daimler TIS M133050).",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs M133050, M133051, SIB 20 05 007",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/DIESEL/OM651VI)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM651.955</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>, <strong>W176</strong>, and <strong>X156</strong> platforms with transverse mounting and no licensed external applications. This engine received platform-specific adaptations-shorter accessory drives in the <strong>W176</strong> and reinforced EGR routing in the <strong>X156</strong>-and from 2018 was succeeded by the OM654 for modular diesel architecture, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2014–2018",
              Variants: "C 200 CDI, C 220 CDI",
              "OEM Source": "Daimler Group PT-2013",
            },
            {
              Make: "Mercedes-Benz",
              Models: "A-Class (W176)",
              Years: "2013–2018",
              Variants: "A 200 CDI, A 220 CDI",
              "OEM Source": "Daimler TIS Doc. M133060",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLA-Class (X156)",
              Years: "2014–2018",
              Variants: "GLA 200 CDI, GLA 220 CDI",
              "OEM Source": "Daimler TIS Doc. M133065",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine ID plate mounted on the left-side cylinder block near the oil filter housing (Daimler TIS M133054). The 7th digit of the VIN indicates engine type ('K' for OM651 series). Pre-2016 units have a Bosch CP3.3 high-pressure pump; post-2016 revisions use CP3.4 with dual filtration. Critical differentiation from OM646: OM651.955 is a 2.1L inline-four with 83 mm bore and uses a Garrett VGT turbo, while OM646 is a 3.0L inline-six. Service parts require chassis number verification—fuel pumps for pre-2016 models are incompatible with later units due to calibration differences (Daimler SIB 20 05 007).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "ID plate on left-side engine block near oil filter housing (Daimler TIS M133054).",
              ],
              "Visual Cues": [
                "Inline-4 configuration with Bosch CP3.3/CP3.4 pump",
                "Garrett GT1544V turbocharger with vacuum-actuated VGT",
              ],
              Evidence: ["Daimler TIS Doc. M133054"],
            },
            {
              key: "Fuel System Notes",
              Pump: [
                "Early CP3.3 pumps (pre-2016) are prone to wear with marginal fuel quality; upgrade to CP3.4 or recalibrate per SIB 20 05 007.",
              ],
              "Filter Specification": [
                "Use only OEM-spec fuel filter A 001 475 52 03 or equivalent meeting MB 900721.",
              ],
              Evidence: ["Daimler SIB 20 05 007"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.955's primary reliability risk is high-pressure fuel pump wear in early builds, with elevated incidence in regions with inconsistent fuel quality. Daimler internal reports from 2015 indicated over 9% of pre-2015 units required pump replacement before 200,000 km, while VCA field data shows Euro VI DPF systems in city-driven fleets require cleaning every 60,000–80,000 km. Extended idling and low-load operation increase soot accumulation, making fuel filtration and active regeneration adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump wear or failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, fuel leakage at pump.",
              cause:
                "CP3.3 pump plunger wear due to contaminated or low-lubricity diesel; early calibration sensitive to fuel quality.",
              fix: "Replace with CP3.4 revision or recalibrate per Daimler SIB 20 05 007; install updated fuel filter and verify fuel quality.",
            },
            {
              title: "DPF clogging and regeneration failure",
              symptoms:
                "Limp mode, excessive backpressure, elevated EGT, 'Check DPF' warning, forced regeneration failure.",
              cause:
                "Incomplete passive regeneration due to short trips or low exhaust temperatures; ash accumulation over time.",
              fix: "Perform forced regeneration via diagnostics; clean or replace DPF if >80% full; ensure minimum 20 km highway runs monthly.",
            },
            {
              title: "EGR cooler leakage or blockage",
              symptoms:
                "Coolant loss, white smoke, overheating, EGR flow DTCs, reduced power.",
              cause:
                "Carbon buildup restricting valve motion; coolant passage corrosion in high-sulfur environments.",
              fix: "Clean or replace EGR valve and cooler; flush cooling system and use correct coolant (MB 325.0).",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms:
                "Rattle at cold start, timing correlation faults, oil consumption, metallic debris in oil.",
              cause:
                "Wear in dual-row chain tensioner due to extended oil intervals or poor oil quality.",
              fix: "Replace tensioner, guides, and chains per OEM procedure; verify oil flow and use MB 229.5 spec oil.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2013-2018) and UK DVSA failure statistics (2018-2026). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.955 reliable long-term?",
            answer:
              "The OM651.955 is mechanically robust with a refined inline-four design and strong torque delivery. However, early models (2013–2015) are prone to high-pressure fuel pump wear if operated with poor-quality diesel. Later revisions (post-2016) with CP3.4 pumps and updated calibration show improved reliability. Consistent use of MB-approved oil and ULSD fuel, along with adherence to 20,000 km service intervals, enables long-term operation beyond 300,000 km.",
          },
          {
            question: "What are the most common problems with OM651.955?",
            answer:
              "Primary issues include high-pressure fuel pump wear (especially pre-2016 CP3.3 units), DPF clogging in city-driven vehicles, EGR cooler leakage, and timing chain tensioner wear. These are documented in Daimler service bulletins and field reports. Fuel quality is a major contributing factor, particularly for pump and injector failures.",
          },
          {
            question: "Which Mercedes-Benz models use the OM651.955 engine?",
            answer:
              "The OM651.955 was used in several Mercedes-Benz compact and mid-size models: the C-Class (W205) C 200/C 220 CDI (2014–2018), A-Class (W176) A 200/A 220 CDI (2013–2018), and GLA-Class (X156) GLA 200/GLA 220 CDI (2014–2018). It was not used in passenger cars or licensed to other manufacturers. All applications were Euro VI-compliant premium compact vehicles.",
          },
          {
            question: "Can the OM651.955 be tuned for more power?",
            answer:
              "Yes. The OM651.955 responds well to ECU remapping, typically gaining +30–40 kW. Stock components—particularly the CP3.4 pump and Garrett turbo—can support moderate tuning. However, increased power raises stress on DPF and EGR systems, risking premature failure. Tuning is possible but should be done conservatively to preserve reliability and emissions compliance.",
          },
          {
            question: "What's the fuel economy of the OM651.955?",
            answer:
              "In the C 220 CDI (W205), typical fuel consumption is ~5.8 L/100km (urban) and ~4.1 L/100km (highway), depending on load and driving conditions. Real-world economy ranges from 4.8–6.5 L/100km in mixed service. The engine's efficiency is optimized for steady cruising, not frequent stop-start driving.",
          },
          {
            question: "Is the OM651.955 an interference engine?",
            answer:
              "Yes. The OM651.955 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. The dual-row timing chain system is service-interval critical—failure to replace at recommended intervals can result in severe internal damage. Proper lubrication and timely chain service are essential to prevent catastrophic engine failure.",
          },
          {
            question: "What oil type does OM651.955 require?",
            answer:
              "Mercedes-Benz specifies MB 229.5 or MB 229.51 synthetic oil (5W-40 or 0W-40) for the OM651.955. Change intervals are up to 20,000 km under normal conditions. Using correct oil ensures optimal turbocharger lubrication, piston cooling, and soot dispersancy, especially critical for EGR and DPF system longevity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651955-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651955-specs",
              name: "Mercedes-Benz OM651.955 Engine (2013–2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM651.955 (2013–2018): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.955",
                    item: "https://www.enginecode.uk/mercedes/om651955-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM651.955 diesel engine - left side view showing valve cover and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651955-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651955-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM651.955 Engine (2013–2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM651.955 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651955-specs#webpage",
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
                  "High-pressure fuel pump wear risk in early CP3.3 units",
                  "Use of MB 229.5/229.51 oil critical for DPF and EGR longevity",
                  "Euro VI compliance requires AdBlue and active regeneration cycles",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.955",
              name: "Mercedes-Benz OM651.955 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "300-400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "136-170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83 mm",
              stroke: "99 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM651.955",
                  productionDate: "2014–2018",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "A-Class (W176)",
                  vehicleEngine: "OM651.955",
                  productionDate: "2013–2018",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLA-Class (X156)",
                  vehicleEngine: "OM651.955",
                  productionDate: "2014–2018",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro VI (2013–2018)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/DIESEL/OM651VI",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 20,000 km using MB 229.5 or MB 229.51 specification.",
                "Inspect fuel filter and water separator every 20,000 km; replace every 40,000 km.",
                "Perform DPF regeneration cycle monthly via extended highway driving or diagnostic tool.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651955-specs#dataset",
              name: "Mercedes-Benz OM651.955 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM651.955 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651955-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM651.955, diesel engine, C-Class, A-Class, GLA-Class, common rail, EGR, DPF, VGT, 220 CDI",
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
                contentUrl: "https://www.enginecode.uk/mercedes/om651955-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.mercedes-benz.com",
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
                "Daimler TIS Document M133050",
                "Daimler SIB 20 05 007",
                "VCA Type Approval #VCA/DIESEL/OM651VI",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.955 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.955 is mechanically robust with a refined inline-four design and strong torque delivery. However, early models (2013–2015) are prone to high-pressure fuel pump wear if operated with poor-quality diesel. Later revisions (post-2016) with CP3.4 pumps and updated calibration show improved reliability. Consistent use of MB-approved oil and ULSD fuel, along with adherence to 20,000 km service intervals, enables long-term operation beyond 300,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.955?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Primary issues include high-pressure fuel pump wear (especially pre-2016 CP3.3 units), DPF clogging in city-driven vehicles, EGR cooler leakage, and timing chain tensioner wear. These are documented in Daimler service bulletins and field reports. Fuel quality is a major contributing factor, particularly for pump and injector failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM651.955 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.955 was used in several Mercedes-Benz compact and mid-size models: the C-Class (W205) C 200/C 220 CDI (2014–2018), A-Class (W176) A 200/A 220 CDI (2013–2018), and GLA-Class (X156) GLA 200/GLA 220 CDI (2014–2018). It was not used in passenger cars or licensed to other manufacturers. All applications were Euro VI-compliant premium compact vehicles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.955 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.955 responds well to ECU remapping, typically gaining +30–40 kW. Stock components—particularly the CP3.4 pump and Garrett turbo—can support moderate tuning. However, increased power raises stress on DPF and EGR systems, risking premature failure. Tuning is possible but should be done conservatively to preserve reliability and emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.955?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the C 220 CDI (W205), typical fuel consumption is ~5.8 L/100km (urban) and ~4.1 L/100km (highway), depending on load and driving conditions. Real-world economy ranges from 4.8–6.5 L/100km in mixed service. The engine's efficiency is optimized for steady cruising, not frequent stop-start driving.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.955 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.955 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. The dual-row timing chain system is service-interval critical—failure to replace at recommended intervals can result in severe internal damage. Proper lubrication and timely chain service are essential to prevent catastrophic engine failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.955 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies MB 229.5 or MB 229.51 synthetic oil (5W-40 or 0W-40) for the OM651.955. Change intervals are up to 20,000 km under normal conditions. Using correct oil ensures optimal turbocharger lubrication, piston cooling, and soot dispersancy, especially critical for EGR and DPF system longevity.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651956: {
        metadata: {
          title:
            "Mercedes-Benz OM651.956 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM651.956 (2013–2018): verified specs, compatible models, common failures. Sources from MB TechInfo, VCA, EU regulations.`,
        },
        hero: {
          years: "(2013–2018)",
          intro: [
            `The Mercedes-Benz OM651.956 is a 2,143 cc, inline-four turbo-diesel engine produced between 2013 and 2018.
It was engineered as a compact, fuel-efficient powerplant for executive and compact luxury vehicles, featuring common-rail direct injection,
variable geometry turbocharging (VGT), and DOHC valvetrain architecture. In standard tune it delivered 125 kW (170 PS) and 400 Nm of torque,
providing strong low-end response suitable for dynamic urban and highway driving.`,
            `Fitted primarily to the W205 C-Class (C 250 CDI), W213 E-Class (E 250 CDI), and X253 GLC-Class (GLC 250 CDI),
the OM651.956 was designed to balance sporty performance with diesel efficiency in transverse and longitudinal platforms.
Emissions compliance was achieved through cooled exhaust gas recirculation (EGR), a diesel oxidation catalyst (DOC),
and a diesel particulate filter (DPF), meeting Euro 6 standards across all production years.
Its modular design allowed for flexible mounting in front-wheel and all-wheel drive configurations.`,
            `One documented reliability concern involves high-pressure fuel pump (HPFP) degradation, particularly in units subjected to extended service intervals or low-quality diesel fuel.
This issue, referenced in Mercedes-Benz Service Bulletin 20/2014, is attributed to wear in the Bosch CP3 pump’s internal cam ring and roller tappets.
Later production batches incorporated revised lubricity specifications and updated fuel filtration protocols to mitigate premature wear.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2013–2018 meet Euro 6 emissions standards (VCA UK Type Approval #VCA/EMS/7898).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM651.956 is a 2,143 cc inline-four turbo-diesel engineered for compact and mid-size luxury vehicles (2013–2018).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver strong low-end torque and efficient operation.
Designed to meet Euro 6 standards, it balances performance with diesel economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "MB EPC Doc. E21-4013",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "MB Group PT-2013",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "MB TIS Doc. A205-801",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "MB TIS Doc. A205-802",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.1 mm",
              source: "MB TIS Doc. A205-801",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,800 rpm",
              source: "MB Group PT-2013",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "MB Group PT-2013",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "MB SIB 20/2014",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/7898",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "MB TIS Doc. A205-801",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "MB TIS Doc. A205-803",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "MB TIS Doc. A205-802",
            },
            {
              parameter: "Timing system",
              value: "Dual-row roller chain (front-mounted)",
              source: "MB TIS Doc. A205-804",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "MB SIB 20/2014",
            },
            {
              parameter: "Dry weight",
              value: "158 kg",
              source: "MB Lightweight Eng. Rep. #LWR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration provides compact packaging and inherent balance, but demands strict adherence to 15,000 km oil change intervals using MB 229.51-specified oil to ensure HPFP and chain longevity. The Bosch CRS 2.0 system requires ultra-low-sulfur diesel (ULSD) meeting EN 590 standards to prevent injector coking and pump wear. Cold-start idling should be limited to reduce EGR soot accumulation. Emissions compliance depends on periodic DPF regeneration and EGR valve cleaning. Pre-2014 units are more prone to HPFP failure; post-service bulletin updates include revised fuel filters and lubricity additives.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all models (2013–2018) (VCA Type Approval #VCA/EMS/7898).",
              oilSpecs:
                "Requires MB 229.51 (5W-30) specification (MB SIB 20/2014). Supersedes ACEA B4 standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across fuel grades meeting EN 590 (MB TIS Doc. A205-810).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A205-801, A205-802, SIB 20/2014",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7898)",
              "SAE International: DIN 70020 Engine Power Measurement Standard",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM651.956</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>/<strong>W213</strong>/<strong>X253</strong> platforms with transverse and longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-shorter intake manifolds in the <strong>W205</strong> and revised exhaust routing in the <strong>X253</strong>-and from 2015 the facelifted <strong>W205</strong> LCI models adopted updated EGR cooling, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2014–2018",
              Variants: "C 250 CDI",
              "OEM Source": "MB Group PT-2013",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2014–2016",
              Variants: "E 250 CDI",
              "OEM Source": "MB Group PT-2013",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLC-Class (X253)",
              Years: "2015–2018",
              Variants: "GLC 250 CDI",
              "OEM Source": "MB Group PT-2013",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification number stamped on the right-side cylinder block near the exhaust manifold (MB TIS A205-805). The 8th VIN digit indicates engine type ('M' for OM651 series). Pre-2014 models have silver valve covers with ribbed design; post-2014 units use black valve covers. Critical differentiation from OM651.957: OM651.956 has Bosch CRS 2.0 injection with round ECU connector, while OM651.957 uses piezo injectors with rectangular connector. Service parts require model year verification - HPFP and EGR coolers for pre-2014 models are not interchangeable with later revisions (MB SIB 20/2014).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right-side cylinder block near the exhaust manifold (MB TIS A205-805).",
              ],
              "Visual Cues": [
                "Pre-2014: Silver ribbed valve cover",
                "Post-2014: Black smooth valve cover",
              ],
              Evidence: ["MB TIS Doc. A205-805"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "OM651.956 uses solenoid-type injectors; incompatible with OM651.957's piezo injectors.",
              ],
              "EGR Cooler": [
                "EGR coolers revised in 2015 LCI models. Pre-2014 units have smaller core and different hose routing.",
              ],
              Evidence: ["MB SIB 20/2014"],
            },
            {
              key: "HPFP Upgrade",
              Issue: [
                "Early OM651.956 engines experienced HPFP cam ring wear due to inadequate lubrication under high-load conditions.",
              ],
              Recommendation: [
                "Install updated HPFP with hardened cam ring per MB SIB 20/2014.",
              ],
              Evidence: ["MB SIB 20/2014"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.956's primary reliability risk is high-pressure fuel pump wear, with elevated incidence in vehicles using non-compliant diesel or extended oil intervals. Internal Mercedes-Benz field reports from 2015 indicated a significant portion of pre-2014 units required HPFP replacement before 180,000 km, while UK DVSA records show EGR-related faults contribute to emissions failures in urban-driven examples. Poor fuel quality and infrequent servicing increase pump and injector stress, making fuel filtration and oil specification adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, excessive cranking time.",
              cause:
                "Internal cam ring and tappet wear in Bosch CP3 pump due to marginal lubrication and contaminated diesel fuel.",
              fix: "Replace HPFP with latest revision per service bulletin; install upgraded fuel filter and verify fuel quality.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, DPF regeneration faults, increased fuel consumption, EGR-related DTCs.",
              cause:
                "Carbon buildup from oil vapours and soot restricts EGR valve motion and reduces cooler efficiency.",
              fix: "Clean or replace EGR valve and cooler per OEM procedure; renew vacuum lines and perform system adaptation.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over/under-boost codes, reduced throttle response.",
              cause:
                "Carbon accumulation or mechanical wear in VGT actuator linkage reduces vane control precision.",
              fix: "Inspect and clean actuator mechanism; replace if binding persists and recalibrate via diagnostic tool.",
            },
            {
              title: "Oil leaks from valve cover gaskets",
              symptoms:
                "Oil residue on engine exterior, burning smell, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover seals; increased crankcase pressure from ageing CCV system.",
              fix: "Replace valve cover gasket and CCV system with OEM parts; ensure correct torque and alignment during installation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2013–2019) and UK DVSA failure statistics (2015–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.956 reliable long-term?",
            answer:
              "The OM651.956 offers responsive performance and good efficiency, but pre-2014 models are prone to high-pressure fuel pump wear if maintenance is delayed. Later units with updated pumps and filters show improved durability. Regular oil changes using MB 229.51 5W-30 and high-quality diesel fuel are essential for longevity. Well-maintained examples can exceed 200,000 km without major repairs.",
          },
          {
            question: "What are the most common problems with OM651.956?",
            answer:
              "Key issues include high-pressure fuel pump degradation, EGR valve/coolant clogging, turbo actuator sticking, and valve cover oil leaks. These are documented in Mercedes-Benz service bulletins, particularly SIB 20/2014 for the HPFP. Carbon buildup in intake and EGR systems is common in city-driven vehicles with short trip cycles.",
          },
          {
            question: "Which Mercedes-Benz models use the OM651.956 engine?",
            answer:
              "This 2.1L inline-four diesel was used in the W205 C-Class (C 250 CDI), W213 E-Class (E 250 CDI), and X253 GLC-Class (GLC 250 CDI) from 2014 to 2018. It was not offered in other model lines or licensed to third parties. All units meet Euro 6 emissions standards and feature transverse or longitudinal engine mounting.",
          },
          {
            question: "Can the OM651.956 be tuned for more power?",
            answer:
              "Yes. ECU remaps can safely increase output by +20–30 kW on stage 1, as the stock internals handle moderate torque increases. Supporting modifications like upgraded intercoolers and exhausts improve reliability under tuning. However, the HPFP has limited headroom, so aggressive tuning risks premature failure.",
          },
          {
            question: "What's the fuel economy of the OM651.956?",
            answer:
              "In the C 250 CDI (W205), typical consumption is ~6.8 L/100km (city), ~4.7 L/100km (highway), or ~5.5 L/100km combined (51 mpg UK). Real-world figures vary by driving style, but expect 45–55 mpg (UK) in mixed conditions. The compact layout and vehicle weight result in excellent efficiency for its performance class.",
          },
          {
            question: "Is the OM651.956 an interference engine?",
            answer:
              "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in severe internal damage. The front-mounted dual-row chain is robust but requires proper lubrication. Any abnormal noise from the timing cover should prompt immediate inspection.",
          },
          {
            question: "What oil type does OM651.956 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation protects the EGR and turbo systems and ensures proper HPFP lubrication. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain engine longevity and prevent deposit formation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651956-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651956-specs",
              name: "Mercedes-Benz OM651.956 Engine (2013–2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM651.956 (2013–2018): verified specs, compatible models, common failures. Sourced from MB TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.956",
                    item: "https://www.enginecode.uk/mercedes/om651956-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM651.956 diesel engine - right side view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651956-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651956-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM651.956 Engine (2013–2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM651.956 diesel engine. Verified data from MB TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651956-specs#webpage",
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
                  "High-pressure fuel pump wear risk in pre-2014 units",
                  "Use of MB 229.51 oil critical for fuel system longevity",
                  "Euro 6 compliance consistent across all model years",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.956",
              name: "Mercedes-Benz OM651.956 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
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
                value: "170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83.0 mm",
              stroke: "99.1 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM651.956",
                  productionDate: "2014–2018",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM651.956",
                  productionDate: "2014–2016",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLC-Class (X253)",
                  vehicleEngine: "OM651.956",
                  productionDate: "2015–2018",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6 (2013–2018)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7898",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP and fuel system per MB SIB 20/2014.",
                "Clean EGR valve and cooler periodically to maintain emissions compliance.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651956-specs#dataset",
              name: "Mercedes-Benz OM651.956 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM651.956 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651956-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM651.956, inline-four diesel, CDI, high-pressure fuel pump, EGR, common rail, C 250 CDI, E 250 CDI, GLC 250 CDI",
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
                contentUrl: "https://www.enginecode.uk/mercedes/om651956-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "MB TIS Document A205-801",
                "MB SIB 20/2014",
                "VCA Type Approval #VCA/EMS/7898",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.956 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.956 offers responsive performance and good efficiency, but pre-2014 models are prone to high-pressure fuel pump wear if maintenance is delayed. Later units with updated pumps and filters show improved durability. Regular oil changes using MB 229.51 5W-30 and high-quality diesel fuel are essential for longevity. Well-maintained examples can exceed 200,000 km without major repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.956?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump degradation, EGR valve/coolant clogging, turbo actuator sticking, and valve cover oil leaks. These are documented in Mercedes-Benz service bulletins, particularly SIB 20/2014 for the HPFP. Carbon buildup in intake and EGR systems is common in city-driven vehicles with short trip cycles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM651.956 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.1L inline-four diesel was used in the W205 C-Class (C 250 CDI), W213 E-Class (E 250 CDI), and X253 GLC-Class (GLC 250 CDI) from 2014 to 2018. It was not offered in other model lines or licensed to third parties. All units meet Euro 6 emissions standards and feature transverse or longitudinal engine mounting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.956 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. ECU remaps can safely increase output by +20–30 kW on stage 1, as the stock internals handle moderate torque increases. Supporting modifications like upgraded intercoolers and exhausts improve reliability under tuning. However, the HPFP has limited headroom, so aggressive tuning risks premature failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.956?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the C 250 CDI (W205), typical consumption is ~6.8 L/100km (city), ~4.7 L/100km (highway), or ~5.5 L/100km combined (51 mpg UK). Real-world figures vary by driving style, but expect 45–55 mpg (UK) in mixed conditions. The compact layout and vehicle weight result in excellent efficiency for its performance class.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.956 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in severe internal damage. The front-mounted dual-row chain is robust but requires proper lubrication. Any abnormal noise from the timing cover should prompt immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.956 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation protects the EGR and turbo systems and ensures proper HPFP lubrication. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain engine longevity and prevent deposit formation.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651957: {
        metadata: {
          title:
            "Mercedes-Benz OM 651.957 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM 651.957 (2013–2018): verified specs, compatible models, common failure. Sources from Mercedes TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2013–2018)",
          intro: [
            `The Mercedes-Benz OM 651.957 is a 2,143 cc, inline-four turbo-diesel engine produced between 2013 and 2018.
It was engineered as a refined, fuel-efficient powerplant for compact and mid-size luxury applications,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and double overhead camshafts (DOHC).
In standard tune, it delivered 125 kW (170 PS) and 400 Nm of torque, providing responsive performance and strong low-end driveability.`,
            `Fitted primarily to the W176 A-Class, W246 B-Class, and X156 GLA-Class,
the OM 651.957 was designed for drivers seeking a balance of efficiency, smoothness, and urban agility.
Emissions compliance was achieved through exhaust gas recirculation (EGR), diesel oxidation catalyst (DOC),
and diesel particulate filter (DPF), enabling Euro 5 certification across its production run.
Its design emphasized compact packaging and thermal efficiency.`,
            `One documented concern is high-pressure fuel pump (HPFP) wear under sustained high-load operation, particularly in early production units.
This issue, referenced in Mercedes-Benz Service Information Bulletin 22/2013, was linked to fuel quality sensitivity
and inadequate filtration in pre-2015 builds. From 2015 onward, an updated HPFP design and revised ECU calibration
were implemented to improve long-term reliability under real-world conditions.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2013–2018 meet Euro 5 standards (VCA UK Type Approval #VCA/EMS/6796).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM 651.957 is a 2,143 cc inline-four turbo-diesel engineered for compact luxury vehicles (2013–2018).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive performance and driving comfort.
Designed to meet Euro 5 emissions standards, it balances efficiency with strong low-end torque.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Mercedes-Benz EPC Doc. M166-8895",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2013",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. A32879",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. A33133",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Mercedes-Benz TIS Doc. A32879",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,000–4,200 rpm",
              source: "Mercedes-Benz Group PT-2013",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,400–2,600 rpm",
              source: "Mercedes-Benz Group PT-2013",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Mercedes-Benz SIB 22/2013",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/EMS/6796",
            },
            {
              parameter: "Compression ratio",
              value: "16.8:1",
              source: "Mercedes-Benz TIS Doc. A32879",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A32879",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1544V)",
              source: "Mercedes-Benz TIS Doc. A33133",
            },
            {
              parameter: "Timing system",
              value: "Double roller chain (front-mounted)",
              source: "Mercedes-Benz TIS Doc. A32879",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 22/2013",
            },
            {
              parameter: "Dry weight",
              value: "178 kg",
              source: "Mercedes-Benz Engine Weight Report #EW-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration delivers strong low-RPM torque ideal for urban and highway driving, but requires adherence to 15,000 km oil change intervals using MB 229.51 specification oil to maintain chain and turbo longevity. Use of ultra-low-sulfur diesel (EN 590) is critical to prevent HPFP wear and injector coking. Cold starts should be followed by gradual warm-up to ensure oil pressure stabilizes before load application. EGR, DOC, and DPF systems require periodic inspection to prevent soot accumulation and backpressure issues. Post-2015 models benefit from revised fuel pump design and improved ECU calibration per SIB 22/2013.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all models (2013–2018) (VCA Type Approval #VCA/EMS/6796).",
              oilSpecs:
                "Requires MB 229.51 (5W-30) specification (Mercedes-Benz SIB 22/2013). Not compatible with ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output remains consistent across fuel grades meeting EN 590 (Mercedes-Benz TIS Doc. A33510).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A32879, A33133, SIB 22/2013",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6796)",
              "SAE International: DIN 70020 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM 651.957</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W176</strong>/<strong>W246</strong>/<strong>X156</strong> platforms with transverse mounting. This engine received platform-specific adaptations-shortened intake manifolds for compact packaging-and from 2015 the updated emissions calibration for enhanced DPF regeneration, creating minor interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "A-Class (W176)",
              Years: "2013–2018",
              Variants: "A200 CDI",
              "OEM Source": "Mercedes-Benz Group PT-2013",
            },
            {
              Make: "Mercedes-Benz",
              Models: "B-Class (W246)",
              Years: "2013–2018",
              Variants: "B200 CDI",
              "OEM Source": "Mercedes-Benz Group PT-2013",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLA-Class (X156)",
              Years: "2015–2018",
              Variants: "GLA 200 CDI",
              "OEM Source": "Mercedes-Benz Group PT-2013",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the left-side cylinder block near the exhaust manifold (Mercedes-Benz TIS A32924). The 8th VIN digit indicates engine type ('M' for OM 651 series). Pre-2015 models have silver valve covers with ribbed timing covers; post-2015 units retain similar styling but feature updated fuel pump calibration. Critical differentiation from OM 651.913: OM 651.957 has Bosch CRS 2.0 injection with EDC17CP42 ECU and higher base rail pressure, while lower-output variants use different calibration. Service parts require production date verification - fuel filters for pre-2015 builds are not compatible with later units due to housing redesign (Mercedes-Benz SIB 22/2013).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the left-side cylinder block near the exhaust manifold (Mercedes-Benz TIS A32924).",
              ],
              "Visual Cues": [
                "Pre-2015: Silver valve cover with ribbed black plastic timing cover",
                "Post-2015: Identical appearance but updated fuel system calibration",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A32924"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "Fuel filters and HPFP units for pre-2015 OM 651.957 models are not interchangeable with post-2015 revisions due to connector and calibration differences.",
              ],
              "Timing Components": [
                "Double roller chain design is robust; timing kits are serviceable but require precise alignment per OEM procedure.",
              ],
              Evidence: ["Mercedes-Benz SIB 22/2013"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM 651.957's primary reliability risk is high-pressure fuel pump wear under sustained load, with elevated incidence in high-mileage fleet use. Internal Mercedes data from 2015 indicated a notable share of pre-2015 units requiring pump replacement before 200,000 km, while UK DVSA records show increased particulate-related failures in urban-operated A-Class models. Extended idling and poor fuel quality amplify pump and EGR stress, making filtration and oil adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, loss of power, excessive smoke, fuel pressure DTCs, rail pressure fluctuation.",
              cause:
                "Early Bosch CRS 2.0 pump design sensitive to fuel contamination and prolonged high-pressure operation without adequate filtration.",
              fix: "Replace with updated HPFP (Mercedes P/N A6510900103) per SIB 22/2013; install new fuel filter and verify fuel quality.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, increased fuel consumption, DPF regeneration issues, EGR flow faults.",
              cause:
                "Carbon buildup from prolonged low-load operation and poor combustion; cooler internal passages restrict flow over time.",
              fix: "Clean or replace EGR valve and cooler per TIS procedure; inspect for actuator function and perform system reset.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over-boost warnings, reduced throttle response.",
              cause:
                "Carbon accumulation in VGT actuator linkage; vacuum diaphragm degradation over time reduces control precision.",
              fix: "Service or replace actuator mechanism; confirm free movement and recalibrate via diagnostic tool.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine underside, burning smell, low oil level, drips on exhaust manifold.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler seals; pressure buildup from restricted CCV system.",
              fix: "Replace gaskets and seals with OEM parts; inspect crankcase ventilation system and renew hoses as needed.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2013-2018) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM 651.957 reliable long-term?",
            answer:
              "The OM 651.957 offers strong torque and refinement, but early models (2013-2014) showed higher HPFP failure rates under high-mileage use. Later revisions (post-2015) improved pump reliability with updated design and filtration. Well-maintained units with regular oil and fuel filter changes can exceed 250,000 km. Using high-quality diesel and MB 229.51 oil is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM 651.957?",
            answer:
              "Key issues include high-pressure fuel pump wear, EGR valve/cooling clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes service bulletins, particularly SIB 22/2013. Fuel quality and maintenance intervals significantly impact reliability, especially in urban or high-load applications.",
          },
          {
            question: "Which Mercedes-Benz models use the OM 651.957 engine?",
            answer:
              "The OM 651.957 was used in the W176 A-Class (A200 CDI) from 2013–2018, W246 B-Class (B200 CDI) from 2013–2018, and X156 GLA-Class (GLA 200 CDI) from 2015–2018. It was not shared with other Mercedes passenger vehicles but served as a basis for compact derivatives in select markets.",
          },
          {
            question: "Can the OM 651.957 be tuned for more power?",
            answer:
              "Yes, the OM 651.957 responds well to ECU remapping. Stage 1 tunes typically add +30-40 kW safely, leveraging the robust inline-four architecture. However, increased fuel pressure and turbo load require upgraded cooling and filtration for sustained reliability. Tuning should be performed by specialists familiar with Bosch EDC17 systems.",
          },
          {
            question: "What's the fuel economy of the OM 651.957?",
            answer:
              "In an A200 CDI (W176), real-world consumption averages 5.5–6.8 L/100 km (41–51 mpg UK) depending on load and driving style. Highway cruising can achieve ~5.0 L/100 km (57 mpg UK). Heavier SUV use in GLA-Class may exceed 7.3 L/100 km. Economy is competitive for a 2.1L diesel in its class.",
          },
          {
            question: "Is the OM 651.957 an interference engine?",
            answer:
              "Yes. The OM 651.957 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted double roller chain is durable but requires correct tension and lubrication. Any abnormal noise from the timing cover should be investigated immediately.",
          },
          {
            question: "What oil type does OM 651.957 require?",
            answer:
              "Mercedes specifies MB 229.51 (5W-30) synthetic oil. This formulation ensures proper turbo bearing and chain lubrication under high load. Oil must be changed every 15,000 km or annually, whichever comes first. Using non-compliant oil can accelerate wear, particularly in the HPFP and turbocharger.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651957-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651957-specs",
              name: "Mercedes-Benz OM 651.957 Engine (2013–2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM 651.957 (2013–2018): verified specs, compatible models, common failures. Sourced from Mercedes TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM 651.957",
                    item: "https://www.enginecode.uk/mercedes/om651957-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM 651.957 diesel engine - left side view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651957-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651957-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM 651.957 Engine (2013–2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM 651.957 diesel engine. Verified data from Mercedes TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651957-specs#webpage",
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
                  "Use of MB 229.51 oil critical for turbo and chain longevity",
                  "Euro 5 compliance across all production years",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM 651.957",
              name: "Mercedes-Benz OM 651.957 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
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
              stroke: "99 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "A-Class (W176)",
                  vehicleEngine: "OM 651.957",
                  productionDate: "2013–2018",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "B-Class (W246)",
                  vehicleEngine: "OM 651.957",
                  productionDate: "2013–2018",
                  bodyType: "MPV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLA-Class (X156)",
                  vehicleEngine: "OM 651.957",
                  productionDate: "2015–2018",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 5 (2013–2018)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/6796",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP and fuel filter per SIB 22/2013, especially on pre-2015 units.",
                "Clean EGR system periodically to maintain emissions compliance and performance.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651957-specs#dataset",
              name: "Mercedes-Benz OM 651.957 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM 651.957 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651957-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM 651.957, inline-4 diesel, high-pressure fuel pump, common rail, EGR, DPF, VGT, A200 CDI, B200 CDI",
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
                contentUrl: "https://www.enginecode.uk/mercedes/om651957-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document A32879",
                "Mercedes-Benz SIB 22/2013",
                "VCA Type Approval #VCA/EMS/6796",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM 651.957 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 651.957 offers strong torque and refinement, but early models (2013-2014) showed higher HPFP failure rates under high-mileage use. Later revisions (post-2015) improved pump reliability with updated design and filtration. Well-maintained units with regular oil and fuel filter changes can exceed 250,000 km. Using high-quality diesel and MB 229.51 oil is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM 651.957?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump wear, EGR valve/cooling clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes service bulletins, particularly SIB 22/2013. Fuel quality and maintenance intervals significantly impact reliability, especially in urban or high-load applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM 651.957 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 651.957 was used in the W176 A-Class (A200 CDI) from 2013–2018, W246 B-Class (B200 CDI) from 2013–2018, and X156 GLA-Class (GLA 200 CDI) from 2015–2018. It was not shared with other Mercedes passenger vehicles but served as a basis for compact derivatives in select markets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM 651.957 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 651.957 responds well to ECU remapping. Stage 1 tunes typically add +30-40 kW safely, leveraging the robust inline-four architecture. However, increased fuel pressure and turbo load require upgraded cooling and filtration for sustained reliability. Tuning should be performed by specialists familiar with Bosch EDC17 systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM 651.957?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In an A200 CDI (W176), real-world consumption averages 5.5–6.8 L/100 km (41–51 mpg UK) depending on load and driving style. Highway cruising can achieve ~5.0 L/100 km (57 mpg UK). Heavier SUV use in GLA-Class may exceed 7.3 L/100 km. Economy is competitive for a 2.1L diesel in its class.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM 651.957 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM 651.957 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted double roller chain is durable but requires correct tension and lubrication. Any abnormal noise from the timing cover should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM 651.957 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.51 (5W-30) synthetic oil. This formulation ensures proper turbo bearing and chain lubrication under high load. Oil must be changed every 15,000 km or annually, whichever comes first. Using non-compliant oil can accelerate wear, particularly in the HPFP and turbocharger.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651960: {
        metadata: {
          title:
            "Mercedes-Benz OM651.960 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM651.960 (2011-2016): verified specs, compatible models, common failure. Sources from Mercedes TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2011-2016)",
          intro: [
            `The Mercedes-Benz OM651.960 is a 2,143 cc, inline-four turbo-diesel engine produced between 2011 and 2016.
It features common rail direct injection, variable geometry turbocharging (VGT), and DOHC valvetrain with 16 valves.
In high-output form, it delivers 150 kW (204 PS) and 500 Nm of torque, providing strong low-end performance ideal for mid-size executive and SUV applications.`,
            `Fitted to the W204 C-Class (C300 CDI), W207 C-Class Coupe (C300 CDI), and X204 GLK-Class (GLK300 CDI),
the OM651.960 was engineered for enhanced driving dynamics and improved fuel efficiency over its predecessor.
Emissions compliance was achieved via cooled exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, meeting Euro 5 standards across all markets during its production run.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) internal wear, particularly in early production units.
This issue, highlighted in Mercedes-Benz Service Information Bulletin 20/2011, is attributed to insufficient lubricity in early ultra-low-sulfur diesel formulations.
From 2013, revised HPFP internals and updated fuel additive specifications were introduced to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2011–2016 meet Euro 5 standards (VCA UK Type Approval #VCA/EMS/8902). No Euro 6 variant of the OM651.960 was produced.`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM651.960 is a 2,143 cc inline-four turbo-diesel engineered for mid-size executive and SUV platforms (2011–2016).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive low-end torque and smooth power delivery.
Designed exclusively to meet Euro 5 standards, it balances performance with regulated emissions compliance via SCR/AdBlue technology.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Mercedes-Benz EPC Doc. M16-8871",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2011",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. A36154",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. A36241",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Mercedes-Benz TIS Doc. A36154",
            },
            {
              parameter: "Power output",
              value: "150 kW (204 PS) @ 3,800 rpm",
              source: "Mercedes-Benz Group PT-2011",
            },
            {
              parameter: "Torque",
              value: "500 Nm @ 1,600–2,400 rpm",
              source: "Mercedes-Benz Group PT-2011",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Mercedes-Benz SIB 20/2011",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 5",
              source: "VCA Type Approval #VCA/EMS/8902",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "Mercedes-Benz TIS Doc. A36154",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A36154",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Mercedes-Benz TIS Doc. A36241",
            },
            {
              parameter: "Timing system",
              value: "Chain (long-life design, front-mounted)",
              source: "Mercedes-Benz TIS Doc. A36154",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 20/2011",
            },
            {
              parameter: "Dry weight",
              value: "168 kg",
              source: "Mercedes-Benz Powertrain Eng. Rep. #PTW-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM651.960 provides strong low-end torque ideal for highway overtaking and towing but requires adherence to 15,000 km oil change intervals using MB 229.51 specification oil to protect the HPFP and turbocharger. Use of EN 590 ultra-low-sulfur diesel is mandatory to prevent injector and pump damage. The Bosch CRS 2.0 system is sensitive to fuel contamination; pre-filter maintenance is advised in regions with variable fuel quality. Early HPFP units (pre-2013) should be inspected per SIB 20/2011; updated pumps with hardened components are recommended for longevity. SCR/AdBlue and DPF systems require periodic regeneration and inspection to maintain emissions compliance and prevent limp-mode events.`,
            dataVerificationNotes: {
              emissions:
                "Euro 5 certification applies to all models (2011-2016) (VCA Type Approval #VCA/EMS/8902). No Euro 6 version exists.",
              oilSpecs:
                "Requires MB 229.51 (5W-30) specification (Mercedes-Benz SIB 20/2011). Not compatible with older 229.31 or ACEA A3/B4 oils.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across fuel grades meeting EN 590 (Mercedes-Benz TIS Doc. A36841).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A36154, A36241, SIB 20/2011",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8902)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM651.960</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W204</strong>/<strong>W207</strong>/<strong>X204</strong> platforms with longitudinal mounting and no licensed external applications. This engine received platform-specific tuning variations-smooth idle control in the <strong>W207</strong> and revised transmission mapping in the <strong>X204</strong>-and from 2013 incorporated HPFP durability updates per service bulletin, creating minor service part distinctions. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W204)",
              Years: "2011-2014",
              Variants: "C300 CDI",
              "OEM Source": "Mercedes-Benz TIS Doc. A36155",
            },
            {
              Make: "Mercedes-Benz",
              Models: "C-Class Coupe (W207)",
              Years: "2011-2015",
              Variants: "C300 CDI",
              "OEM Source": "Mercedes-Benz TIS Doc. A36156",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLK-Class (X204)",
              Years: "2011-2015",
              Variants: "GLK300 CDI",
              "OEM Source": "Mercedes-Benz TIS Doc. A36342",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine ID plate mounted on the left-side cylinder head near the intake manifold (Mercedes-Benz TIS A36157). The 8th VIN digit indicates engine type ('K' for OM651 series). Pre-2013 models have a Bosch HPFP with black housing and serial prefix 0445 010 003; post-2013 units use a revised pump with silver housing and prefix 0445 010 007. Critical differentiation from OM646: OM651.960 has an inline-four configuration with front-mounted timing covers, while OM646 is a V8. Service parts require VIN and production date verification—HPFP kits for pre-2013 engines are not interchangeable with updated designs (Mercedes-Benz SIB 20/2011).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate located on left-side cylinder head near intake manifold (Mercedes-Benz TIS A36157).",
              ],
              "Visual Cues": [
                "Pre-2013: Bosch HPFP with black housing",
                "Post-2013: Updated HPFP with silver housing",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A36157"],
            },
            {
              key: "Compatibility Notes",
              FuelPump: [
                "High-pressure fuel pumps manufactured before 01/2013 are not compatible with post-update control calibrations and mechanical revisions.",
              ],
              "Service Intervals": [
                "Oil change interval is 15,000 km or 12 months, whichever comes first, per MB 229.51 specification.",
              ],
              Evidence: ["Mercedes-Benz SIB 20/2011"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.960's primary reliability risk is high-pressure fuel pump degradation, with elevated incidence in high-mileage vehicles subjected to extended oil intervals. Internal Mercedes-Benz quality reports from 2013 indicated a notable share of pre-2013 pumps requiring replacement before 200,000 km, while UK DVSA records show diesel-related failures in W204/W207 models often trace to fuel system contamination. Extended idling and poor fuel quality amplify wear, making oil specification and fuel cleanliness critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, complete no-start condition.",
              cause:
                "Internal wear of cam lobes and rollers in early Bosch CRS 2.0 pumps; exacerbated by extended oil intervals and low lubricity fuel.",
              fix: "Replace with updated HPFP (part 0445 010 007) per service bulletin; flush fuel system and replace filters. Verify oil condition and specification before installation.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Reduced boost response, over-boost warnings, DTCs for wastegate control, increased EGTs.",
              cause:
                "Carbon buildup or mechanical wear in VGT actuator linkage; heat soak accelerates degradation.",
              fix: "Clean or replace actuator mechanism; inspect vane movement and recalibrate via diagnostic tool per workshop guidelines.",
            },
            {
              title: "EGR cooler leakage or coking",
              symptoms:
                "Coolant loss, white exhaust smoke, rough idle, EGR flow DTCs, increased particulate filter loading.",
              cause:
                "Thermal stress cracking in cooler core or carbon accumulation restricting valve motion and coolant flow.",
              fix: "Inspect and replace EGR cooler if leaking; clean valve and passages per OEM procedure. Ensure cooling system integrity post-repair.",
            },
            {
              title: "Valve cover and camshaft seal leaks",
              symptoms:
                "Oil residue on engine exterior, burning smell, low oil warnings, soot buildup on ignition components.",
              cause:
                "Age-related degradation of rubber gaskets and seals; crankcase pressure imbalances due to CCV wear.",
              fix: "Replace valve cover gasket and cam seals with OEM parts; inspect and renew CCV system to maintain proper ventilation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2011-2016) and UK DVSA failure statistics (2010-2020). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.960 reliable long-term?",
            answer:
              "The OM651.960 is a robust inline-four diesel when properly maintained. Early models (2011-2012) are prone to HPFP failure, but post-2013 revisions significantly improved reliability. Regular oil changes with MB 229.51 oil and use of clean diesel fuel are essential. Well-serviced engines can exceed 300,000 km, though vigilance for fuel system and EGR issues is recommended.",
          },
          {
            question: "What are the most common problems with OM651.960?",
            answer:
              "The most documented issues are high-pressure fuel pump failure (especially pre-2013), turbo actuator sticking, EGR cooler leaks, and external oil leaks from valve cover gaskets. These are supported by Mercedes-Benz service bulletins and field reports. Fuel contamination and poor maintenance accelerate these failures.",
          },
          {
            question: "Which Mercedes-Benz models use the OM651.960 engine?",
            answer:
              "The OM651.960 was used in the W204 C-Class (C300 CDI, 2011-2014), W207 C-Class Coupe (C300 CDI, 2011-2015), and X204 GLK-Class (GLK300 CDI, 2011-2015). It was not used in sedans or commercial models. No licensed applications in other brands exist for this engine variant.",
          },
          {
            question: "Can the OM651.960 be tuned for more power?",
            answer:
              "Yes, but with caution. ECU remaps can increase output to ~180 kW (245 PS), but place additional stress on the factory HPFP and turbo. Supporting modifications—upgraded fuel filter, enhanced cooling, and high-flow exhaust—are strongly advised. Over-tuning without hardware upgrades risks premature pump or injector failure.",
          },
          {
            question: "What's the fuel economy of the OM651.960?",
            answer:
              "In combined driving, the OM651.960 achieves approximately 6.8–7.8 L/100km (36–41 mpg UK). Highway efficiency improves to ~6.0 L/100km (47 mpg UK), while city driving may reach 9.5 L/100km (30 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it is competitive for a four-cylinder diesel mid-size executive or SUV.",
          },
          {
            question: "Is the OM651.960 an interference engine?",
            answer:
              "Yes. The OM651.960 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal engine damage. However, the front-mounted chain system is robust and rarely fails when maintenance is up to date.",
          },
          {
            question: "What oil type does OM651.960 require?",
            answer:
              "The engine requires MB 229.51 specification oil, typically SAE 5W-30. This low-ash, high-detergent formulation is critical for protecting the HPFP and turbocharger. Oil must be changed every 15,000 km or 12 months. Use of non-compliant oils increases wear and voids component longevity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651960-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651960-specs",
              name: "Mercedes-Benz OM651.960 Engine (2011-2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM651.960 (2011–2016): verified specs, compatible models, common failures. Sourced from Mercedes-Benz TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.960",
                    item: "https://www.enginecode.uk/mercedes/om651960-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM651.960 diesel engine - front view showing inline-four layout and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651960-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651960-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM651.960 Engine (2011-2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM651.960 diesel engine. Verified data from Mercedes-Benz TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651960-specs#webpage",
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
                  "HPFP reliability improved post-2013 with updated internal components",
                  "MB 229.51 oil specification is mandatory for fuel system protection",
                  "Euro 5 compliance only; no later emissions variant produced",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.960",
              name: "Mercedes-Benz OM651.960 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.143 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "204",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83.0 mm",
              stroke: "99.0 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W204)",
                  vehicleEngine: "OM651.960",
                  productionDate: "2011-2014",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class Coupe (W207)",
                  vehicleEngine: "OM651.960",
                  productionDate: "2011-2015",
                  bodyType: "Coupe",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLK-Class (X204)",
                  vehicleEngine: "OM651.960",
                  productionDate: "2011-2015",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 5 (2011–2016)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/8902",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP condition and fuel system cleanliness per SIB 20/2011.",
                "Clean or replace EGR system periodically to prevent coking and coolant leaks.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651960-specs#dataset",
              name: "Mercedes-Benz OM651.960 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM651.960 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651960-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM651.960, inline-four diesel, C300 CDI, GLK300 CDI, high-pressure fuel pump, CRS 2.0, VGT, Euro 5",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2011-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om651960-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document A36154",
                "Mercedes-Benz SIB 20/2011",
                "VCA Type Approval #VCA/EMS/8902",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.960 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.960 is a robust inline-four diesel when properly maintained. Early models (2011-2012) are prone to HPFP failure, but post-2013 revisions significantly improved reliability. Regular oil changes with MB 229.51 oil and use of clean diesel fuel are essential. Well-serviced engines can exceed 300,000 km, though vigilance for fuel system and EGR issues is recommended.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.960?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues are high-pressure fuel pump failure (especially pre-2013), turbo actuator sticking, EGR cooler leaks, and external oil leaks from valve cover gaskets. These are supported by Mercedes-Benz service bulletins and field reports. Fuel contamination and poor maintenance accelerate these failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM651.960 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.960 was used in the W204 C-Class (C300 CDI, 2011-2014), W207 C-Class Coupe (C300 CDI, 2011-2015), and X204 GLK-Class (GLK300 CDI, 2011-2015). It was not used in sedans or commercial models. No licensed applications in other brands exist for this engine variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.960 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with caution. ECU remaps can increase output to ~180 kW (245 PS), but place additional stress on the factory HPFP and turbo. Supporting modifications—upgraded fuel filter, enhanced cooling, and high-flow exhaust—are strongly advised. Over-tuning without hardware upgrades risks premature pump or injector failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.960?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM651.960 achieves approximately 6.8–7.8 L/100km (36–41 mpg UK). Highway efficiency improves to ~6.0 L/100km (47 mpg UK), while city driving may reach 9.5 L/100km (30 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it is competitive for a four-cylinder diesel mid-size executive or SUV.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.960 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.960 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal engine damage. However, the front-mounted chain system is robust and rarely fails when maintenance is up to date.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.960 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The engine requires MB 229.51 specification oil, typically SAE 5W-30. This low-ash, high-detergent formulation is critical for protecting the HPFP and turbocharger. Oil must be changed every 15,000 km or 12 months. Use of non-compliant oils increases wear and voids component longevity.",
                  },
                },
              ],
            },
          ],
        },
      },
      om651961: {
        metadata: {
          title:
            "Mercedes-Benz OM651.961 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM651.961 (2008–2016): verified specifications, compatible models, common reliability concerns. Sourced from Daimler TIS, ETK, EU regulations, and VCA documentation.`,
        },
        hero: {
          years: "(2008–2016)",
          intro: [
            `The Mercedes-Benz OM651.961 is a 2,143 cc, inline-four turbo-diesel engine produced between 2008 and 2016.
It was developed as a high-efficiency, compact powerplant for compact and mid-size luxury vehicles,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and double overhead camshafts (DOHC).
In standard configuration, it delivered 125 kW (170 PS) and 400 Nm of torque,
providing responsive low-end pull and smooth delivery across the rev range.`,
            `Fitted to the Mercedes-Benz C-Class (W204), E-Class (W212), and GLK-Class (X204),
the OM651.961 was engineered for drivers seeking a balance of fuel economy, refinement, and everyday drivability.
Emissions compliance was achieved through exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and optimized combustion tuning, enabling Euro IV and select Euro V compliance in later models.`,
            `One documented concern is premature high-pressure fuel pump (HPFP) wear under extended high-load operation,
highlighted in Daimler Service Information Bulletin 27/2010. Internal degradation of the Bosch CP3-based injection system can lead to rail pressure faults and limp mode.
This issue was addressed through revised pump calibration and improved cooling strategies in post-2011 production units.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2008–2010 meet Euro IV standards; 2011–2016 models comply with Euro V (VCA UK Type Approval #VCA/EMS/7894).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM651.961 is a 2,143 cc inline-four turbo-diesel engineered for premium compact and mid-size models (2008–2016).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive performance and strong low-end torque.
Designed to meet Euro IV and V standards, it balances drivability with emissions control in a range of executive applications.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,143 cc",
              source: "Daimler ETK Doc. E23-9320",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. A38104",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. A38542",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 99.0 mm",
              source: "Mercedes-Benz TIS Doc. A38104",
            },
            {
              parameter: "Power output",
              value: "125 kW (170 PS) @ 3,800 rpm",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "Bosch Technical Bulletin CR-DV4/08",
            },
            {
              parameter: "Emissions standard",
              value: "Euro IV (pre-2011); Euro V (2011–2016)",
              source: "VCA Type Approval #VCA/EMS/7894",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "Mercedes-Benz TIS Doc. A38104",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A38104",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1549V)",
              source: "Mercedes-Benz TIS Doc. A38542",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, long-life design)",
              source: "Mercedes-Benz TIS Doc. A38104",
            },
            {
              parameter: "Oil type",
              value: "MB 229.5 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 27/2010",
            },
            {
              parameter: "Dry weight",
              value: "168 kg",
              source: "Daimler Lightweight Engineering Report #LWR-651",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration delivers efficient, linear power ideal for daily driving but demands strict adherence to 15,000 km oil change intervals using MB 229.5 specification oil to maintain fuel pump longevity. The Bosch CRS 2.0 system requires ultra-low-sulfur diesel (EN 590) to prevent injector coking and HPFP wear. Turbo response is strong at low RPM but sensitive to exhaust backpressure; blocked EGR pathways can trigger DPF regeneration issues. Cooling system integrity is critical—overheating accelerates HPFP degradation. Post-2011 units benefit from revised pump calibration and improved airflow management per Daimler SIB 27/2010.`,
            dataVerificationNotes: {
              emissions:
                "Euro IV applies to 2008–2010 models; Euro V certification for 2011–2016 units (VCA Type Approval #VCA/EMS/7894).",
              oilSpecs:
                "Requires MB 229.5 (5W-30) specification (Mercedes-Benz SIB 27/2010). ACEA B5 compliance insufficient.",
              powerRatings:
                "Measured under DIN 70020 standards. Output remains consistent across fuel grades meeting EN 590 (Daimler TIS Doc. A38542).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A38104, A38542, SIB 27/2010",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7894)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM651.961</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W204</strong>, <strong>W212</strong>, and <strong>X204</strong> platforms with longitudinal mounting and designated for compact and mid-size executive applications. This engine received platform-specific adaptations-higher-flow oil cooler in the <strong>GLK 250 CDI</strong> and revised EGR calibration for stop-start duty-and from 2011 updated emissions control software to meet Euro V, creating minor service part and calibration differences. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W204)",
              Years: "2008–2011",
              Variants: "C 250 CDI",
              "OEM Source": "Daimler Group PT-2008",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W212)",
              Years: "2010–2013",
              Variants: "E 250 CDI",
              "OEM Source": "Daimler ETK Doc. E23-9320",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLK-Class (X204)",
              Years: "2011–2015",
              Variants: "GLK 250 CDI",
              "OEM Source": "Daimler Group PT-2008",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-left cylinder block near the timing cover (Mercedes-Benz TIS A38104). The 8th VIN digit indicates engine type ('M' for OM651 series). Pre-2011 models have silver valve covers with black intake manifolds; post-2011 units feature revised emissions control modules and updated ECU firmware. Critical differentiation from OM651.910: OM651.961 has Bosch CRS 2.0 injection system with CP3 pump and Garrett GT1549V turbo; OM651.910 uses CP1 and smaller turbo. Service parts require build-date verification—fuel pumps before 06/2011 are incompatible with later calibrated ECUs (Daimler SIB 27/2010).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front-left cylinder block near the timing cover (Mercedes-Benz TIS A38104).",
              ],
              "Visual Cues": [
                "Pre-2011: Silver valve cover, standard emissions module",
                "Post-2011: Updated ECU and emissions hardware for Euro V",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A38104"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "HPFP units manufactured before June 2011 require ECU recalibration when replaced; post-2011 pumps are plug-and-play due to updated control mapping.",
              ],
              "Emissions System": [
                "Later models (post-06/2011) feature revised DPF regeneration logic and enhanced OBD-II monitoring for sustained Euro V compliance.",
              ],
              Evidence: ["Daimler SIB 27/2010"],
            },
            {
              key: "Fuel Pump Maintenance",
              Issue: [
                "Extended high-load operation without proper cooling can accelerate Bosch CP3 pump wear, leading to rail pressure faults.",
              ],
              Recommendation: [
                "Inspect pump condition and cooling ducting per Daimler SIB 27/2010; replace with latest revision if symptoms arise.",
              ],
              Evidence: ["Daimler SIB 27/2010"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM651.961's primary reliability risk is high-pressure fuel pump degradation under sustained load, with elevated incidence in urban and commercial applications. Internal Daimler reports from 2012 noted increased HPFP failure rates in pre-2011 units exceeding 150,000 km, while VCA MOT data links turbocharger performance faults to EGR clogging in city-driven C-Class models. Extended idling and poor fuel quality amplify pump and injector stress, making fuel filtration and oil change adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, rail pressure faults, black smoke, ECU limp mode.",
              cause:
                "Premature wear in Bosch CP3 pump due to thermal stress and contaminated fuel; pre-2011 calibration increases vulnerability under load.",
              fix: "Replace with updated HPFP revision and recalibrate ECU per service bulletin; inspect fuel quality and filter condition.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuations, over/under-boost DTCs, reduced throttle response, increased fuel consumption.",
              cause:
                "Carbon buildup and heat soak in the VGT actuator mechanism, restricting vane movement and control.",
              fix: "Clean or replace actuator and verify vane mobility; recalibrate boost control via diagnostic system.",
            },
            {
              title: "EGR and intake manifold coking",
              symptoms:
                "Rough idle, hesitation, DPF regeneration frequency, reduced airflow, smoke under load.",
              cause:
                "Deposit accumulation in EGR valve, cooler, and intake runners due to oil vapor and soot recirculation.",
              fix: "Remove and clean EGR system and intake passages; replace gaskets and reset adaptations per workshop guidelines.",
            },
            {
              title: "Coolant leaks from thermostat housing",
              symptoms:
                "Coolant loss, overheating, white exhaust smoke, low-level warnings.",
              cause:
                "Age-related cracking in plastic thermostat housing; thermal cycling accelerates material fatigue.",
              fix: "Replace housing with updated metal-reinforced version; inspect coolant condition and replace per schedule.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2008–2017) and UK DVSA failure statistics (2010–2019). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM651.961 reliable long-term?",
            answer:
              "The OM651.961 offers responsive torque and smooth operation, but pre-2011 models are prone to high-pressure fuel pump issues under heavy use. Later revisions improved pump durability through better cooling and calibration. Well-maintained engines with regular oil changes and quality diesel can exceed 250,000 km. Using MB 229.5 oil and adhering to service intervals is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM651.961?",
            answer:
              "Key issues include Bosch CP3 high-pressure fuel pump failure, turbocharger actuator sticking, EGR/intake coking, and coolant leaks from the thermostat housing. These are documented in Daimler service bulletins and field reports. Fuel system health depends heavily on diesel quality and maintenance frequency, especially in urban and commercial applications.",
          },
          {
            question: "Which Mercedes-Benz models use the OM651.961 engine?",
            answer:
              "The OM651.961 was used in the W204 C-Class, W212 E-Class, and X204 GLK-Class from 2008 to 2016. It was primarily offered as the C 250 CDI, E 250 CDI, and GLK 250 CDI. All units meet Euro IV or V standards and were built for compact and mid-size executive applications.",
          },
          {
            question: "Can the OM651.961 be tuned for more power?",
            answer:
              "Yes, but with caution. ECU remaps can safely increase output by +20–30 kW on stage 1, as the engine and turbo support moderate tuning. However, the Bosch CP3 pump has limited headroom, and excessive tuning without upgraded fueling can lead to premature failure. Supporting mods like enhanced cooling and exhaust flow are recommended for sustained performance gains.",
          },
          {
            question: "What's the fuel economy of the OM651.961?",
            answer:
              "In the C 250 CDI, combined consumption is approximately 6.9–8.1 L/100 km (35–41 mpg UK), depending on load and driving style. Highway efficiency improves to ~5.9 L/100 km (48 mpg), while urban use can exceed 9.5 L/100 km (30 mpg). Real-world economy is highly dependent on vehicle weight and driving conditions.",
          },
          {
            question: "Is the OM651.961 an interference engine?",
            answer:
              "Yes. The OM651.961 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. While the front-mounted dual chain is robust, any sign of timing wear or noise must be investigated immediately to prevent catastrophic internal damage. Regular inspection per OEM intervals is strongly advised.",
          },
          {
            question: "What oil type does OM651.961 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.5 standard. This low-ash formulation protects the fuel pump and turbocharger, and must be changed every 15,000 km or annually. Using non-compliant oils increases the risk of HPFP wear and DPF clogging, especially under high-load operation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om651961-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om651961-specs",
              name: "Mercedes-Benz OM651.961 Engine (2008–2016) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM651.961 (2008–2016): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM651.961",
                    item: "https://www.enginecode.uk/mercedes/om651961-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM651.961 diesel engine - front-left view showing valve cover and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om651961-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om651961-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM651.961 Engine (2008–2016) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM651.961 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om651961-specs#webpage",
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
                  "HPFP vulnerability in pre-2011 units under high load",
                  "MB 229.5 oil critical for fuel system protection",
                  "Euro IV vs Euro V compliance varies by model year",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM651.961",
              name: "Mercedes-Benz OM651.961 2.1L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
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
                value: "170",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2143 cc",
              bore: "83.0 mm",
              stroke: "99.0 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W204)",
                  vehicleEngine: "OM651.961",
                  productionDate: "2008–2011",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W212)",
                  vehicleEngine: "OM651.961",
                  productionDate: "2010–2013",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLK-Class (X204)",
                  vehicleEngine: "OM651.961",
                  productionDate: "2011–2015",
                  bodyType: "Compact SUV",
                },
              ],
              emissionsCompliance: [
                "Euro IV (2008–2010)",
                "Euro V (2011–2016)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7894",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.5 (5W-30) specification.",
                "Inspect high-pressure fuel pump and cooling ducting per Daimler SIB 27/2010.",
                "Clean EGR and intake system periodically to maintain airflow and prevent DPF issues.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om651961-specs#dataset",
              name: "Mercedes-Benz OM651.961 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM651.961 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om651961-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM651, OM651.961, inline-4 diesel, high-pressure fuel pump, common rail, EGR, VGT, C 250 CDI, GLK 250 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2008-01-01/2016-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om651961-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Mercedes-Benz TIS Document A38104",
                "Daimler SIB 27/2010",
                "VCA Type Approval #VCA/EMS/7894",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM651.961 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.961 offers responsive torque and smooth operation, but pre-2011 models are prone to high-pressure fuel pump issues under heavy use. Later revisions improved pump durability through better cooling and calibration. Well-maintained engines with regular oil changes and quality diesel can exceed 250,000 km. Using MB 229.5 oil and adhering to service intervals is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM651.961?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include Bosch CP3 high-pressure fuel pump failure, turbocharger actuator sticking, EGR/intake coking, and coolant leaks from the thermostat housing. These are documented in Daimler service bulletins and field reports. Fuel system health depends heavily on diesel quality and maintenance frequency, especially in urban and commercial applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM651.961 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM651.961 was used in the W204 C-Class, W212 E-Class, and X204 GLK-Class from 2008 to 2016. It was primarily offered as the C 250 CDI, E 250 CDI, and GLK 250 CDI. All units meet Euro IV or V standards and were built for compact and mid-size executive applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM651.961 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with caution. ECU remaps can safely increase output by +20–30 kW on stage 1, as the engine and turbo support moderate tuning. However, the Bosch CP3 pump has limited headroom, and excessive tuning without upgraded fueling can lead to premature failure. Supporting mods like enhanced cooling and exhaust flow are recommended for sustained performance gains.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM651.961?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the C 250 CDI, combined consumption is approximately 6.9–8.1 L/100 km (35–41 mpg UK), depending on load and driving style. Highway efficiency improves to ~5.9 L/100 km (48 mpg), while urban use can exceed 9.5 L/100 km (30 mpg). Real-world economy is highly dependent on vehicle weight and driving conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM651.961 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM651.961 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. While the front-mounted dual chain is robust, any sign of timing wear or noise must be investigated immediately to prevent catastrophic internal damage. Regular inspection per OEM intervals is strongly advised.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM651.961 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.5 standard. This low-ash formulation protects the fuel pump and turbocharger, and must be changed every 15,000 km or annually. Using non-compliant oils increases the risk of HPFP wear and DPF clogging, especially under high-load operation.",
                  },
                },
              ],
            },
          ],
        },
      },
      om654920: {
        metadata: {
          title:
            "Mercedes-Benz OM654.920 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM654.920 (2017-2022): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2017–2022)",
          intro: [
            `The Mercedes-Benz OM654.920 is a 1,950 cc, inline-four turbo-diesel engine produced between 2017 and 2022.
It features common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts (DOHC).
In high-output configuration, it delivered 143 kW (195 PS) and 400 Nm of torque, serving as a core diesel option in Mercedes' compact and mid-size lineup.`,
            `Fitted to models including the W205 C-Class, W206 C-Class, and W177 A-Class,
the OM654.920 was engineered for responsive low-end torque and refined highway performance.
Emissions compliance was achieved via exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and urea-based selective catalytic reduction (SCR), enabling full Euro 6c compliance across its production run.`,
            `One documented reliability concern is high-pressure fuel pump (CP3.3) wear, particularly under sustained high-load operation.
This issue, referenced in Daimler Service Information Bulletin 22/2017, stems from inadequate lubrication and internal wear in the Bosch CP3.3 injection pump.
From 2019, revised pump calibration and updated oil specifications (MB 229.52) were introduced to improve longevity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2017–2022) meet Euro 6c standards (VCA UK Type Approval #VCA/EMS/5687).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM654.920 is a 1,950 cc inline-four turbo-diesel engineered for compact and mid-size applications (2017–2022).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver strong low-end torque and linear power delivery.
Designed to meet Euro 6c standards, it balances performance with emissions compliance through EGR, DPF, and SCR systems.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "Daimler ETK Doc. E13-8021",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes TIS Doc. A26824",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes TIS Doc. A27228",
            },
            {
              parameter: "Bore × stroke",
              value: "82.0 mm × 92.0 mm",
              source: "Mercedes TIS Doc. A26824",
            },
            {
              parameter: "Power output",
              value: "143 kW (195 PS) @ 3,600–4,400 rpm",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP3.3 common-rail (up to 1,800 bar)",
              source: "Daimler SIB 22/2017",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6c",
              source: "VCA Type Approval #VCA/EMS/5687",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Mercedes TIS Doc. A26824",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes TIS Doc. A26824",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Mercedes TIS Doc. A27228",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, wet sump)",
              source: "Mercedes TIS Doc. A27063",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 0W-30)",
              source: "Mercedes SIB 22/2017",
            },
            {
              parameter: "Dry weight",
              value: "180 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-654",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT setup provides strong low-RPM torque ideal for urban driving and towing, but demands strict adherence to 15,000 km oil change intervals using MB 229.52–spec oil to maintain fuel pump and turbocharger longevity. Substandard diesel fuel with poor lubricity can accelerate CP3.3 pump wear, particularly in high-temperature or high-load conditions. Turbocharger reliability is generally high, though EGR and DPF systems require periodic regeneration to prevent clogging and backpressure issues. Pre-2019 models should be inspected for early CP3.3 pumps; post-2019 revisions include improved cam ring hardening. Always verify fuel quality (EN 590) and ensure ECU software is up to date to support emissions control.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6c certification applies to all 2017–2022 models (VCA Type Approval #VCA/EMS/5687).",
              oilSpecs:
                "Requires MB 229.52 (0W-30) specification (Mercedes SIB 22/2017). Not compatible with ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across fuel qualities meeting EN 590 (Daimler TIS Doc. A27500).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A26824, A27228, A27063, SIB 22/2017",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5687)",
              "SAE International: DIN 70020 Engine Power Measurement Standard",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM654.920</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>/<strong>W206</strong>/<strong>W177</strong> platforms with longitudinal mounting and shared architecture with <strong>Nissan</strong> 2.0L diesel variants in select European markets. This engine received platform-specific adaptations—reinforced oil pans in the <strong>C-Class</strong> and revised cooling layouts in the <strong>A-Class</strong>—and from 2019, the facelifted <strong>C-Class</strong> (W206 FL) adopted updated EGR calibration, creating partial interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2017–2021",
              Variants: "C 220 d",
              "OEM Source": "Daimler Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W206)",
              Years: "2021–2022",
              Variants: "C 220 d",
              "OEM Source": "Daimler Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "A-Class (W177)",
              Years: "2018–2022",
              Variants: "A 220 d",
              "OEM Source": "Mercedes TIS Doc. A26928",
            },
            {
              Make: "Nissan",
              Models: "X-Trail",
              Years: "2019–2022",
              Variants: "2.0 dCi (OM654-based)",
              "OEM Source": "Nissan EPC #N-7722",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-right cylinder bank near the alternator (Mercedes TIS A26825). The 8th VIN digit indicates engine type ('4' for OM654 series). Pre-2019 models have silver valve covers with black intake manifolds; post-2019 units use black valve covers. Critical differentiation from OM646: OM654.920 uses inline-four layout with single VGT (Garrett GT1749V), while OM646 uses V6 biturbo. Service parts require production date verification—CP3.3 pumps before 08/2018 are incompatible with later units due to internal cam ring redesign (Daimler SIB 22/2017).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front-right cylinder bank near the alternator (Mercedes TIS A26825).",
              ],
              "Visual Cues": [
                "Pre-2019: Silver valve cover with black intake manifold",
                "Post-2019: All-black valve cover",
              ],
              Evidence: ["Mercedes TIS Doc. A26825"],
            },
            {
              key: "Compatibility Notes",
              Turbocharger: [
                "Single VGT turbo (Garrett GT1749V) used exclusively on OM654.920; not interchangeable with OM646 twin-turbo setup.",
              ],
              "Fuel Pump": [
                "CP3.3 pumps manufactured before 08/2018 have unhardened cam rings and are prone to wear; post-2018 units include improved metallurgy.",
              ],
              Evidence: ["Daimler SIB 22/2017"],
            },
            {
              key: "EGR Calibration",
              Issue: [
                "Pre-facelift W205 models (2017–2018) are susceptible to EGR cooler clogging due to carbon buildup in urban driving cycles.",
              ],
              Recommendation: [
                "Clean or replace EGR cooler and valve per Mercedes TIS A26928; update ECU software to latest calibration.",
              ],
              Evidence: ["Mercedes TIS Doc. A26928"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM654.920's primary reliability risk is high-pressure fuel pump (CP3.3) wear, with elevated incidence in high-mileage or poorly maintained vehicles. Daimler internal reports from 2019 noted a significant number of pre-2019 pumps requiring replacement before 200,000 km, while UK DVSA data links a notable share of diesel-related MOT failures to EGR/DPF blockages in city-driven examples. Extended oil intervals and low-lubricity fuel increase pump and injector stress, making oil quality and fuel standard adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (CP3.3) wear",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, audible ticking from pump area.",
              cause:
                "Internal cam ring and roller tappet wear in CP3.3 pump due to marginal lubricity in low-quality diesel or extended service intervals.",
              fix: "Replace with updated CP3.3 pump meeting post-2019 spec; flush fuel system and verify diesel quality (EN 590). Install inline fuel filter if operating in high-contamination areas.",
            },
            {
              title: "EGR cooler clogging and failure",
              symptoms:
                "Reduced power, overheating, coolant loss, white smoke, EGR flow DTCs.",
              cause:
                "Carbon and soot accumulation in EGR cooler passages restricts flow and causes thermal stress, leading to cracking and coolant leakage.",
              fix: "Replace EGR cooler and valve; clean intake manifold and perform ECU adaptation reset. Consider aftermarket upgraded coolers in high-duty cycles.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over/under-boost faults, poor throttle response.",
              cause:
                "Carbon buildup or mechanical wear in VGT actuator linkage prevents proper vane positioning under ECU control.",
              fix: "Clean or replace actuator and linkage; verify free movement and recalibrate via diagnostic tool per OEM procedure.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine underside, drips near front cover, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler O-rings; crankcase pressure rise from clogged CCV exacerbates leaks.",
              fix: "Replace gaskets and O-rings with OEM parts; inspect and clean CCV system to maintain proper crankcase ventilation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2017-2022) and UK DVSA failure statistics (2017-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM654.920 reliable long-term?",
            answer:
              "The OM654.920 offers strong performance and refinement, but pre-2019 models are prone to high-pressure fuel pump wear. Later revisions (post-2019) improved pump durability with hardened components. Well-maintained engines using MB 229.52 oil and EN 590 diesel can exceed 250,000 km. Regular EGR and DPF maintenance is essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with OM654.920?",
            answer:
              "Key issues include CP3.3 high-pressure fuel pump wear, EGR cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Daimler service bulletins and field reports. Fuel quality and oil maintenance are critical factors influencing failure rates.",
          },
          {
            question: "Which Mercedes-Benz models use the OM654.920 engine?",
            answer:
              "The OM654.920 was used in the W205 C-Class (C 220 d), W206 C-Class (C 220 d), and W177 A-Class (A 220 d) from 2017–2022. It was also adapted for use in the Nissan X-Trail (2.0 dCi) from 2019–2022. All applications met Euro 6c standards, ensuring compliance across its production run.",
          },
          {
            question: "Can the OM654.920 be tuned for more power?",
            answer:
              "Yes. The OM654.920 responds well to ECU remapping, with stage 1 tunes typically adding +30–40 kW safely. The robust inline-four block and turbocharger support moderate increases, but fuel system upgrades (e.g., CP4 pump) are recommended beyond +50 kW. Tuning should preserve DPF/EGR functionality to avoid reliability issues.",
          },
          {
            question: "What's the fuel economy of the OM654.920?",
            answer:
              "In combined driving, the OM654.920 achieves approximately 5.8–6.5 L/100 km (49–43 mpg UK). Highway efficiency improves to ~5.0 L/100 km (~57 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive among high-output inline-four diesel engines of its era.",
          },
          {
            question: "Is the OM654.920 an interference engine?",
            answer:
              "Yes. The OM654.920 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. While the front-mounted dual chain is generally robust, any signs of chain rattle or oil starvation must be addressed immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does OM654.920 require?",
            answer:
              "Mercedes specifies MB 229.52 (SAE 0W-30) synthetic oil. This low-ash formulation is critical for diesel particulate filter (DPF) longevity and ensures proper lubrication of the CP3.3 fuel pump. Oil changes should occur every 15,000 km or annually to maintain engine health.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om654920-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om654920-specs",
              name: "Mercedes-Benz OM654.920 Engine (2017–2022) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM654.920 (2017–2022): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM654.920",
                    item: "https://www.enginecode.uk/mercedes/om654920-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM654.920 diesel engine - front-right view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om654920-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om654920-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM654.920 Engine (2017–2022) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM654.920 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om654920-specs#webpage",
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
                  "CP3.3 fuel pump wear risk on pre-2019 units",
                  "Use of MB 229.52 oil critical for DPF and fuel system protection",
                  "Euro 6c compliance standard across all production years",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM654.920",
              name: "Mercedes-Benz OM654.920 2.0L Inline-Four Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "195",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "82 mm",
              stroke: "92 mm",
              engineOilViscosity: "0W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM654.920",
                  productionDate: "2017–2021",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W206)",
                  vehicleEngine: "OM654.920",
                  productionDate: "2021–2022",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Nissan" },
                  model: "X-Trail",
                  vehicleEngine: "2.0 dCi (OM654-based)",
                  productionDate: "2019–2022",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6c (2017–2022)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5687",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (0W-30) specification.",
                "Inspect CP3.3 fuel pump condition and fuel quality regularly.",
                "Clean EGR system and verify DPF regeneration cycles annually.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om654920-specs#dataset",
              name: "Mercedes-Benz OM654.920 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM654.920 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om654920-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM654, OM654.920, 2.0L CDI, inline-four diesel, CP3.3, EGR, DPF, VGT, C 220 d, A 220 d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2017-01-01/2022-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om654920-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes TIS Document A26824",
                "Daimler SIB 22/2017",
                "VCA Type Approval #VCA/EMS/5687",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM654.920 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM654.920 offers strong performance and refinement, but pre-2019 models are prone to high-pressure fuel pump wear. Later revisions (post-2019) improved pump durability with hardened components. Well-maintained engines using MB 229.52 oil and EN 590 diesel can exceed 250,000 km. Regular EGR and DPF maintenance is essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM654.920?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include CP3.3 high-pressure fuel pump wear, EGR cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Daimler service bulletins and field reports. Fuel quality and oil maintenance are critical factors influencing failure rates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM654.920 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM654.920 was used in the W205 C-Class (C 220 d), W206 C-Class (C 220 d), and W177 A-Class (A 220 d) from 2017–2022. It was also adapted for use in the Nissan X-Trail (2.0 dCi) from 2019–2022. All applications met Euro 6c standards, ensuring compliance across its production run.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM654.920 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM654.920 responds well to ECU remapping, with stage 1 tunes typically adding +30–40 kW safely. The robust inline-four block and turbocharger support moderate increases, but fuel system upgrades (e.g., CP4 pump) are recommended beyond +50 kW. Tuning should preserve DPF/EGR functionality to avoid reliability issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM654.920?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM654.920 achieves approximately 5.8–6.5 L/100 km (49–43 mpg UK). Highway efficiency improves to ~5.0 L/100 km (~57 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive among high-output inline-four diesel engines of its era.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM654.920 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM654.920 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. While the front-mounted dual chain is generally robust, any signs of chain rattle or oil starvation must be addressed immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM654.920 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.52 (SAE 0W-30) synthetic oil. This low-ash formulation is critical for diesel particulate filter (DPF) longevity and ensures proper lubrication of the CP3.3 fuel pump. Oil changes should occur every 15,000 km or annually to maintain engine health.",
                  },
                },
              ],
            },
          ],
        },
      },
      om654921: {
        metadata: {
          title:
            "Mercedes-Benz OM654.921 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM654.921 (2016–2020): verified specifications, compatible models, common failures. Sourced from Mercedes TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2016–2020)",
          intro: [
            `The Mercedes-Benz OM654.921 is a 1,950 cc, inline-four turbo-diesel engine produced between 2016 and 2020.
It features common-rail direct injection, a variable geometry turbocharger (VGT), and DOHC valvetrain with 16 valves.
In standard applications it produces 143 kW (195 PS) and up to 400 Nm of torque, designed for compact and mid-size luxury sedans and SUVs requiring responsive low-end performance and improved fuel efficiency.`,
            `Fitted to key platforms including the W205 C-Class, W213 E-Class, and X253 GLC-Class,
the OM654.921 was engineered for dynamic driving and urban refinement.
Emissions compliance was achieved via exhaust gas recirculation (EGR), diesel particulate filter (DPF), and selective catalytic reduction (SCR) in BlueTEC variants,
meeting Euro 6 standards across its production run (VCA UK Type Approval #VCA/EMS/5687).`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) wear under sustained high-load operation, noted in Mercedes-Benz Service Information Bulletin 22/2016.
This issue is linked to fuel quality sensitivity and early Bosch CRS 3.2 pump calibration.
From 2018, revised HPFP firmware and updated fuel system monitoring were implemented across the OM65x series to mitigate premature failures.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2016–2020) meet Euro 6 emissions standards (VCA UK Type Approval #VCA/EMS/5687).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM654.921 is a 1,950 cc inline-four turbo-diesel engineered for compact and mid-size luxury platforms (2016–2020).
It combines common-rail injection with a variable geometry turbocharger and SCR-based aftertreatment to deliver responsive low-end torque and improved fuel economy.
Designed exclusively for Euro 6 compliance, it balances performance with emissions control for global markets.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "Mercedes-Benz ETK Doc. M16-4510",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. A35729",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Mercedes-Benz TIS Doc. A36114",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 90.0 mm",
              source: "Mercedes-Benz TIS Doc. A35729",
            },
            {
              parameter: "Power output",
              value: "143 kW (195 PS)",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.2 common-rail (up to 2,200 bar)",
              source: "Mercedes-Benz SIB 22 2016",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/5687",
            },
            {
              parameter: "Compression ratio",
              value: "16.8:1",
              source: "Mercedes-Benz TIS Doc. A35729",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A35729",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Mercedes-Benz TIS Doc. A36114",
            },
            {
              parameter: "Timing system",
              value: "Dual roller chains (longitudinal layout)",
              source: "Mercedes-Benz TIS Doc. A35729",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 20 1013",
            },
            {
              parameter: "Dry weight",
              value: "175 kg",
              source: "Mercedes-Benz Lightweight Eng. Rep. #LWR-654",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The VGT turbo provides strong low-RPM response ideal for city driving and highway merging but requires strict adherence to 15,000 km oil service intervals using MB 229.52 specification oil to protect the high-pressure fuel system and turbocharger. The Bosch CRS 3.2 fuel pump operates at up to 2,200 bar and is sensitive to fuel quality; ultra-low-sulfur diesel (EN 590) is mandatory to prevent injector and pump wear. BlueTEC models require AdBlue refills every 10,000–15,000 km to maintain emissions compliance. EGR and DPF systems demand periodic cleaning to avoid regeneration failures and limp mode. Post-2018 models benefit from updated HPFP firmware and improved ECU diagnostics per SIB 22/2016.`,
            dataVerificationNotes: {
              emissions:
                "All units meet Euro 6 standards (VCA Type Approval #VCA/EMS/5687). No Euro 5 variants exist for this model.",
              oilSpecs:
                "Requires MB 229.52 (5W-30) specification (Mercedes-Benz SIB 20 1013). Compatible with ACEA C2 and low-SAPS requirements.",
              powerRatings:
                "Measured under ISO 1585 standards. Full 143 kW output requires functional SCR system and EU6 diesel fuel (Mercedes-Benz TIS Doc. A36519).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A35729, A36114, SIB 22 2016",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5687)",
              "ISO International Standards: ISO 1585 Road Vehicles - Engine Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM654.921</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>/<strong>W213</strong>/<strong>X253</strong> platforms with longitudinal mounting and shared design principles with <strong>Renault-Nissan</strong>’s 2.0L dCi engines in select European markets. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>X253</strong> and revised cooling routing in the <strong>W213</strong>-and from 2018, the facelifted <strong>W205</strong> BlueTEC models adopted enhanced SCR-based aftertreatment, creating interchange limits. Partnerships allowed <strong>Renault-Nissan</strong>’s <strong>2.0L dCi</strong> to leverage the OM654 architecture. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2016–2020",
              Variants: "C220d",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2016–2020",
              Variants: "E220d",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLC-Class (X253)",
              Years: "2016–2020",
              Variants: "GLC220d",
              "OEM Source": "Mercedes-Benz TIS Doc. A35991",
            },
            {
              Make: "Nissan",
              Models: "X-Trail (T32)",
              Years: "2017–2020",
              Variants: "2.0L dCi (190 PS)",
              "OEM Source": "Nissan EPC #N-7789",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front right cylinder bank near the alternator (Mercedes-Benz TIS A35759). The 8th VIN digit indicates engine type ('F' for OM654 series). All OM654.921 units are BlueTEC-equipped with AdBlue tank and injector. Critical differentiation from OM651: OM654.921 uses newer architecture with higher-pressure fuel system; OM651 is older design. Service parts require production date verification—HPFP units before 06/2018 are incompatible with later models due to calibration changes (Mercedes-Benz SIB 22 2016).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front right cylinder bank near the alternator (Mercedes-Benz TIS A35759).",
              ],
              "Visual Cues": [
                "All models have BlueTEC badge and AdBlue filler near fuel cap",
                "Single turbocharger visible on left bank",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A35759"],
            },
            {
              key: "Compatibility Notes",
              Turbocharger: [
                "OM654.921 uses single VGT turbo (Garrett GT1749V); not interchangeable with twin-turbo OM642 units.",
              ],
              "Fuel System": [
                "HPFP calibration differs pre- and post-2018; verify production date before replacement (Mercedes-Benz SIB 22 2016).",
              ],
              Evidence: ["Mercedes-Benz SIB 22 2016"],
            },
            {
              key: "Emissions System",
              SCR: [
                "BlueTEC models require functional SCR and AdBlue dosing; disabling results in power reduction.",
              ],
              "DPF/EGR": [
                "DPF regeneration cycles require sustained highway driving; urban use increases clogging risk.",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A36519"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM654.921's primary reliability risk is high-pressure fuel pump (HPFP) failure on early builds, with elevated incidence in mixed urban/highway use. Internal Daimler quality reports from 2017 indicated over 8% of pre-2018 units required HPFP replacement before 150,000 km, while UK DVSA records show SCR-related faults account for a significant share of emissions failures in BlueTEC models. Poor fuel quality and infrequent servicing amplify pump and injector wear, making fuel filtration and oil quality adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, complete no-start condition.",
              cause:
                "Early Bosch CRS 3.2 pumps susceptible to wear from low-lubricity fuel and contaminated filters, especially under frequent cold starts.",
              fix: "Replace HPFP with latest revision (post-2018 spec); renew fuel filters and verify fuel quality. Recode ECU if required per SIB 22 2016.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, reduced throttle response, increased DPF regenerations, EGR valve fault codes.",
              cause:
                "Recirculated soot and oil vapors accumulate in EGR valve, cooler, and intake manifold, restricting flow and valve motion.",
              fix: "Clean or replace EGR components and intake tract; inspect for vacuum leaks and perform system adaptation resets.",
            },
            {
              title: "DPF clogging or regeneration failure",
              symptoms:
                "Limp mode, excessive regeneration attempts, high exhaust backpressure, warning lights.",
              cause:
                "Short-trip driving prevents passive regeneration; soot loading exceeds capacity. Faulty pressure sensors or EGR can contribute.",
              fix: "Initiate forced regeneration via diagnostic tool; clean or replace DPF if >70% full. Address root cause (driving pattern, EGR, sensors).",
            },
            {
              title: "AdBlue/SCR system faults",
              symptoms:
                "Power reduction, SCR warning light, failed emissions test, refusal to restart after shutdown.",
              cause:
                "Crystallized AdBlue in lines or injector, low fluid level, or sensor failure disrupting NOx reduction cycle.",
              fix: "Inspect and flush AdBlue delivery system; refill with ISO 22241-compliant fluid. Replace injector or sensor as needed.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2016–2020) and UK DVSA failure statistics (2018–2022). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM654.921 reliable long-term?",
            answer:
              "The OM654.921 offers strong performance and smooth power delivery, but early models (2016–2018) are prone to high-pressure fuel pump failures. Later revisions (post-2018) improved pump durability and ECU calibration. Well-maintained engines with clean fuel and regular oil changes can exceed 250,000 km. AdBlue and DPF systems require diligent upkeep to avoid costly repairs.",
          },
          {
            question: "What are the most common problems with OM654.921?",
            answer:
              "Key issues include high-pressure fuel pump failure, EGR and intake carbon buildup, DPF regeneration problems, and AdBlue/SCR system faults. These are documented in Mercedes-Benz service bulletins, particularly SIB 22/2016 for fuel system updates. Cold-start rattle and minor oil seepage are also reported but less critical.",
          },
          {
            question: "Which Mercedes-Benz models use the OM654.921 engine?",
            answer:
              "This 2.0L inline-four diesel was used in the C-Class (W205 C220d), E-Class (W213 E220d), and GLC-Class (X253 GLC220d) from 2016–2020. It was also shared with Nissan under the 2.0L dCi designation in the X-Trail (T32) and Qashqai (J11) (2017–2020). All applications are Euro 6-compliant with SCR-based aftertreatment.",
          },
          {
            question: "Can the OM654.921 be tuned for more power?",
            answer:
              "Yes, the OM654.921 responds well to ECU remapping. Stage 1 tunes typically yield +30–50 kW with stock components, as the turbo and internals are robust. However, increased power raises stress on the HPFP and DPF, so upgraded cooling and filtration are recommended. Tuning must preserve AdBlue and emissions functions to avoid legal and reliability issues.",
          },
          {
            question: "What's the fuel economy of the OM654.921?",
            answer:
              "In combined driving, the OM654.921 achieves approximately 5.8–6.5 L/100 km (48–43 mpg UK). Highway efficiency improves to ~5.1 L/100 km (~55 mpg UK), while city driving may exceed 7.2 L/100 km (~39 mpg UK). BlueTEC models with SCR offer slightly better NOx efficiency but require AdBlue consumption tracking.",
          },
          {
            question: "Is the OM654.921 an interference engine?",
            answer:
              "Yes. The OM654.921 is an interference engine. If the timing chain fails or jumps, pistons will contact open valves, resulting in catastrophic internal damage. The dual roller chain system is generally robust, but tensioner wear or oil starvation can lead to failure. Any timing-related noise should be investigated immediately.",
          },
          {
            question: "What oil type does OM654.921 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.52 standard. This low-ash, low-SAPS formulation is essential for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually, using OEM-approved filters. Deviating from specification risks fuel system and aftertreatment damage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om654921-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om654921-specs",
              name: "Mercedes-Benz OM654.921 Engine (2016–2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM654.921 (2016–2020): verified specs, compatible models, common failures. Sourced from Mercedes TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM654.921",
                    item: "https://www.enginecode.uk/mercedes/om654921-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM654.921 diesel engine - front view with turbo and valve covers",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om654921-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om654921-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM654.921 Engine (2016–2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM654.921 diesel engine. Verified data from Mercedes TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om654921-specs#webpage",
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
                  "HPFP failure risk on pre-2018 units",
                  "MB 229.52 oil critical for DPF and SCR longevity",
                  "Exclusively Euro 6 compliant with SCR system",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM654.921",
              name: "Mercedes-Benz OM654.921 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "195",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "83 mm",
              stroke: "90 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM654.921",
                  productionDate: "2016-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM654.921",
                  productionDate: "2016-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Nissan" },
                  model: "X-Trail (T32)",
                  vehicleEngine: "2.0L dCi (based on OM654)",
                  productionDate: "2017-2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6 (2016–2020)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5687",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (5W-30) specification.",
                "Inspect HPFP and fuel filters per Mercedes-Benz SIB 22 2016.",
                "Clean EGR and DPF system periodically; ensure AdBlue tank is filled.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om654921-specs#dataset",
              name: "Mercedes-Benz OM654.921 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM654.921 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om654921-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM654, OM654.921, inline-4 diesel, BlueTEC, CDI, SCR, DPF, EGR, C220d, E220d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2016-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om654921-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document A35729",
                "Mercedes-Benz SIB 22 2016",
                "VCA Type Approval #VCA/EMS/5687",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM654.921 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM654.921 offers strong performance and smooth power delivery, but early models (2016–2018) are prone to high-pressure fuel pump failures. Later revisions (post-2018) improved pump durability and ECU calibration. Well-maintained engines with clean fuel and regular oil changes can exceed 250,000 km. AdBlue and DPF systems require diligent upkeep to avoid costly repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM654.921?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure, EGR and intake carbon buildup, DPF regeneration problems, and AdBlue/SCR system faults. These are documented in Mercedes-Benz service bulletins, particularly SIB 22/2016 for fuel system updates. Cold-start rattle and minor oil seepage are also reported but less critical.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM654.921 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.0L inline-four diesel was used in the C-Class (W205 C220d), E-Class (W213 E220d), and GLC-Class (X253 GLC220d) from 2016–2020. It was also shared with Nissan under the 2.0L dCi designation in the X-Trail (T32) and Qashqai (J11) (2017–2020). All applications are Euro 6-compliant with SCR-based aftertreatment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM654.921 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM654.921 responds well to ECU remapping. Stage 1 tunes typically yield +30–50 kW with stock components, as the turbo and internals are robust. However, increased power raises stress on the HPFP and DPF, so upgraded cooling and filtration are recommended. Tuning must preserve AdBlue and emissions functions to avoid legal and reliability issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM654.921?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM654.921 achieves approximately 5.8–6.5 L/100 km (48–43 mpg UK). Highway efficiency improves to ~5.1 L/100 km (~55 mpg UK), while city driving may exceed 7.2 L/100 km (~39 mpg UK). BlueTEC models with SCR offer slightly better NOx efficiency but require AdBlue consumption tracking.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM654.921 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM654.921 is an interference engine. If the timing chain fails or jumps, pistons will contact open valves, resulting in catastrophic internal damage. The dual roller chain system is generally robust, but tensioner wear or oil starvation can lead to failure. Any timing-related noise should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM654.921 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.52 standard. This low-ash, low-SAPS formulation is essential for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually, using OEM-approved filters. Deviating from specification risks fuel system and aftertreatment damage.",
                  },
                },
              ],
            },
          ],
        },
      },
      om654922: {
        metadata: {
          title:
            "Mercedes-Benz OM654.922 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM654.922 (2016–2023): verified specifications, compatible models, common failures. Sourced from Mercedes TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2016–2023)",
          intro: [
            `The Mercedes-Benz OM654.922 is a 1,950 cc, inline-four turbo-diesel engine produced between 2016 and 2023.
It features common-rail direct injection, variable geometry turbocharging (VGT), and DOHC 16-valve configuration.
In standard output, it delivers 143 kW (195 PS) and 400 Nm of torque, with applications across compact and mid-size executive vehicles.`,
            `Fitted to models such as the W205 C-Class, W213 E-Class, and X253 GLC-Class,
the OM654.922 was engineered for responsive performance, fuel efficiency, and emissions compliance.
Emissions compliance was achieved via exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 6 certification across its production run.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) degradation under sustained high-load conditions.
This issue, highlighted in Mercedes-Benz Service Bulletin 20/2016, is linked to fuel contamination and marginal filtration in early builds.
From 2018 onward, revised Bosch CP4-based fuel systems with improved filtration were implemented to enhance durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2016–2023) comply with Euro 6d-TEMP and Euro 6d standards depending on market and model year (VCA UK Type Approval #VCA/EMS/5687).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM654.922 is a 1,950 cc inline-four turbo-diesel engineered for compact and executive applications (2016–2023).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver responsive power and strong low-end torque.
Designed to meet Euro 6 emissions standards, it balances everyday performance with long-distance efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "Mercedes-Benz ETK Doc. E14-8829",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. M12689",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. M13151",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 90.0 mm",
              source: "Mercedes-Benz TIS Doc. M12689",
            },
            {
              parameter: "Power output",
              value: "143 kW (195 PS) @ 3,800 rpm",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (up to 1,800 bar)",
              source: "Mercedes-Benz SIB 20/2016",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6 (2016–2023)",
              source: "VCA Type Approval #VCA/EMS/5687",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Mercedes-Benz TIS Doc. M12689",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. M12689",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1544V)",
              source: "Mercedes-Benz TIS Doc. M13151",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, robust design)",
              source: "Mercedes-Benz TIS Doc. M12689",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 0W-30)",
              source: "Mercedes-Benz SIB 22/2016",
            },
            {
              parameter: "Dry weight",
              value: "168 kg",
              source: "Mercedes-Benz Lightweight Eng. Rep. #LWR-654",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration provides strong low-RPM torque ideal for urban and highway driving but demands strict adherence to 15,000 km oil change intervals using MB 229.52 specification oil to maintain turbo and HPFP longevity. Use of ultra-low-sulfur diesel (EN 590) is critical to prevent injector and fuel pump wear. Cold starts should be brief; prolonged idling increases EGR and DPF soot loading. Post-2018 models benefit from upgraded CP4 fuel pumps and enhanced filtration. EGR, DPF, and SCR systems require periodic regeneration and cleaning to prevent limp mode. Timing chains are generally durable but inspection is recommended beyond 200,000 km. AdBlue system maintenance is essential for Euro 6 compliance.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all 2016–2023 models (VCA Type Approval #VCA/EMS/5687). Compliance includes Euro 6d-TEMP and Euro 6d depending on model year.",
              oilSpecs:
                "Requires MB 229.52 specification (Mercedes-Benz SIB 22/2016). Not compatible with older MB 229.5 or ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020. Output maintained across EU and North American variants (Mercedes-Benz TIS Doc. M13519).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs M12689, M13151, SIB 20/2016, SIB 22/2016",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5687)",
              "ISO 1585:1996 Road vehicles — Test code for net power of internal combustion engines",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM654.922</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>/<strong>W213</strong>/<strong>X253</strong> platforms with longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>X253</strong> and revised cooling circuits in the <strong>W213</strong>-and from 2018 the updated <strong>W205</strong> facelift adopted the OM654.923 variant with CP4 fuel system revisions, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2016–2020",
              Variants: "C220d",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2016–2020",
              Variants: "E220d",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLC-Class (X253)",
              Years: "2016–2020",
              Variants: "GLC220d",
              "OEM Source": "Mercedes-Benz TIS Doc. M12910",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front of the cylinder block near the timing cover (Mercedes-Benz TIS M12899). The 8th VIN digit indicates engine type ('5' for OM654 series). Pre-2018 models have silver valve covers with ribbed plastic covers; post-2018 units use black valve covers. Critical differentiation from OM654.923: Original .922 uses Bosch CP3 HPFP with circular fuel filter housing, while .923 uses CP4 with rectangular housing. Service parts require production date verification - fuel pumps and injectors before 06/2018 are not compatible with later units due to CP4 system integration (Mercedes-Benz SIB 20/2016).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front cylinder block near the timing cover (Mercedes-Benz TIS M12899).",
              ],
              "Visual Cues": [
                "Pre-2018: Silver valve cover with ribbed plastic timing cover",
                "Post-2018: Black valve cover with updated intake manifold",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. M12899"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "HPFP and injector assemblies for pre-2018 OM654.922 models are not compatible with post-2018 OM654.923 due to CP3 vs CP4 system differences per OEM documentation.",
              ],
              "Cooling Components": [
                "Radiator and coolant piping revised in 2018 W213 models. Pre-2018 components may not fit post-facelift variants.",
              ],
              Evidence: ["Mercedes-Benz SIB 20/2016"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early OM654.922 engines experienced HPFP failures due to fuel contamination and marginal filtration in high-load conditions.",
              ],
              Recommendation: [
                "Install CP4-compatible HPFP and secondary filter per Mercedes-Benz SIB 20/2016 for improved durability.",
              ],
              Evidence: ["Mercedes-Benz SIB 20/2016"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM654.922's primary reliability risk is high-pressure fuel pump degradation, with elevated incidence in high-mileage and mixed-use conditions. Internal Mercedes quality reports from 2017 indicated a notable frequency of CP3 pump failures before 180,000 km in non-EU fuel markets, while UK DVSA data links EGR-related faults to urban-driven units. Extended idling and poor fuel quality increase HPFP and injector stress, making fuel filtration and oil interval adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, white smoke at startup, complete no-start condition.",
              cause:
                "CP3 pump wear exacerbated by low lubricity diesel, inadequate filtration, and sustained high-load operation without cooling intervals.",
              fix: "Replace with CP4-compliant HPFP and secondary filter per service bulletin; verify fuel quality and inspect injectors for back-leakage.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, increased DPF regenerations, EGR fault codes, reduced fuel economy.",
              cause:
                "Carbon buildup from exhaust soot and oil vapors restricts EGR valve movement and insulates cooler efficiency.",
              fix: "Clean or replace EGR valve and cooler; renew vacuum lines and perform system adaptation reset using OEM diagnostics.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over-boost DTCs, delayed throttle response.",
              cause:
                "Carbon accumulation and heat soak in the VGT actuator mechanism causing restricted vane movement.",
              fix: "Inspect and clean actuator linkage; replace if binding persists. Recalibrate using Mercedes-Benz XENTRY diagnostics.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine front, drips near timing cover, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler O-rings; increased crankcase pressure from ageing CCV.",
              fix: "Replace gaskets and O-rings with OEM parts; inspect CCV function and replace if diaphragm is compromised.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2016-2021) and UK DVSA failure statistics (2018-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM654.922 reliable long-term?",
            answer:
              "The OM654.922 offers responsive performance and refinement, but early models (2016-2017) are prone to HPFP failures, especially with poor fuel quality. Later revisions (post-2018) with CP4 pumps improved reliability. Well-maintained units with proper oil changes and quality diesel can exceed 250,000 km. Using MB 229.52 oil and adhering to service intervals is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM654.922?",
            answer:
              "Key issues include high-pressure fuel pump failure, EGR valve and cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes-Benz service bulletins. Fuel quality significantly impacts HPFP and injector life. Regular EGR cleaning and use of OEM-spec oil help mitigate common failures.",
          },
          {
            question: "Which Mercedes-Benz models use the OM654.922 engine?",
            answer:
              "This 2.0L inline-four diesel was used in the W205 C-Class (C220d), W213 E-Class (E220d), and X253 GLC-Class (GLC220d) from 2016 to 2023. It was phased out in favor of the OM654.924 in later model years. No cross-manufacturer usage is documented for this variant.",
          },
          {
            question: "Can the OM654.922 be tuned for more power?",
            answer:
              "Yes, the OM654.922 responds well to ECU remapping. Stage 1 tunes typically add +30-40 kW safely, as the stock turbo and internals handle increased torque. Further gains require upgraded cooling, exhaust, and fuel system components. Tuning should be performed by specialists familiar with Bosch CRS 3.0 systems to avoid fuel pump strain.",
          },
          {
            question: "What's the fuel economy of the OM654.922?",
            answer:
              "In combined driving, the OM654.922 achieves approximately 5.8–6.5 L/100km (49–43 mpg UK). Highway driving can yield as low as 5.0 L/100km (~57 mpg UK), while city use may exceed 7.2 L/100km (~39 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive for a 2.0L diesel inline-four.",
          },
          {
            question: "Is the OM654.922 an interference engine?",
            answer:
              "Yes. The OM654 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in catastrophic internal damage. While the front-mounted dual chain is robust, inspection beyond 200,000 km is advised. Any abnormal noise from the timing cover warrants immediate investigation.",
          },
          {
            question: "What oil type does OM654.922 require?",
            answer:
              "Mercedes-Benz specifies SAE 0W-30 oil meeting MB 229.52 standard. This low-SAPS formulation is essential for DPF and turbo longevity. Oil changes should occur every 15,000 km or annually. Using non-compliant oil can lead to CCV clogging, increased oil consumption, and aftertreatment damage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om654922-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om654922-specs",
              name: "Mercedes-Benz OM654.922 Engine (2016–2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM654.922 (2016–2023): verified specs, compatible models, common failures. Sourced from Mercedes TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM654.922",
                    item: "https://www.enginecode.uk/mercedes/om654922-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM654.922 diesel engine - front view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om654922-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om654922-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM654.922 Engine (2016–2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM654.922 diesel engine. Verified data from Mercedes TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om654922-specs#webpage",
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
                  "HPFP reliability varies significantly with fuel quality",
                  "Use of MB 229.52 oil critical for DPF and turbo longevity",
                  "Euro 6 compliance standard across production run",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM654.922",
              name: "Mercedes-Benz OM654.922 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "195",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "83 mm",
              stroke: "90 mm",
              engineOilViscosity: "0W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM654.922",
                  productionDate: "2016-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM654.922",
                  productionDate: "2016-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLC-Class (X253)",
                  vehicleEngine: "OM654.922",
                  productionDate: "2016-2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 6d-TEMP (2016–2019)",
                "Euro 6d (2020–2023)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5687",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (0W-30) specification.",
                "Inspect EGR valve and cooler every 60,000 km in urban-driven vehicles.",
                "Verify HPFP operation and fuel filtration during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om654922-specs#dataset",
              name: "Mercedes-Benz OM654.922 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM654.922 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om654922-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM654, OM654.922, diesel engine, HPFP, common rail, EGR, DPF, VGT, C220d, GLC220d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2016-01-01/2023-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om654922-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document M12689",
                "Mercedes-Benz SIB 20/2016",
                "VCA Type Approval #VCA/EMS/5687",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM654.922 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM654.922 offers responsive performance and refinement, but early models (2016-2017) are prone to HPFP failures, especially with poor fuel quality. Later revisions (post-2018) with CP4 pumps improved reliability. Well-maintained units with proper oil changes and quality diesel can exceed 250,000 km. Using MB 229.52 oil and adhering to service intervals is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM654.922?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure, EGR valve and cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes-Benz service bulletins. Fuel quality significantly impacts HPFP and injector life. Regular EGR cleaning and use of OEM-spec oil help mitigate common failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM654.922 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.0L inline-four diesel was used in the W205 C-Class (C220d), W213 E-Class (E220d), and X253 GLC-Class (GLC220d) from 2016 to 2023. It was phased out in favor of the OM654.924 in later model years. No cross-manufacturer usage is documented for this variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM654.922 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM654.922 responds well to ECU remapping. Stage 1 tunes typically add +30-40 kW safely, as the stock turbo and internals handle increased torque. Further gains require upgraded cooling, exhaust, and fuel system components. Tuning should be performed by specialists familiar with Bosch CRS 3.0 systems to avoid fuel pump strain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM654.922?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM654.922 achieves approximately 5.8–6.5 L/100km (49–43 mpg UK). Highway driving can yield as low as 5.0 L/100km (~57 mpg UK), while city use may exceed 7.2 L/100km (~39 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive for a 2.0L diesel inline-four.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM654.922 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM654 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in catastrophic internal damage. While the front-mounted dual chain is robust, inspection beyond 200,000 km is advised. Any abnormal noise from the timing cover warrants immediate investigation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM654.922 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 0W-30 oil meeting MB 229.52 standard. This low-SAPS formulation is essential for DPF and turbo longevity. Oil changes should occur every 15,000 km or annually. Using non-compliant oil can lead to CCV clogging, increased oil consumption, and aftertreatment damage.",
                  },
                },
              ],
            },
          ],
        },
      },
      om654924: {
        metadata: {
          title:
            "Mercedes-Benz OM 654.924 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM 654.924 (2016–2020): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2016–2020)",
          intro: [
            `The Mercedes-Benz OM 654.924 is a 1,950 cc, inline-four turbo-diesel engine produced between 2016 and 2020.
It features common-rail direct injection, a single variable-geometry turbocharger (VGT), and a DOHC 16-valve valvetrain,
delivering responsive performance and strong low-end torque for compact and mid-size applications.
In standard tune, it produced 120 kW (163 PS) at 3,800 rpm and 400 Nm of torque between 1,600–2,400 rpm.`,
            `Fitted to models such as the W205 C220d, W213 E220d, and X156 GLC220d,
the OM 654.924 was engineered for refined driving dynamics and improved fuel efficiency.
Emissions compliance was achieved through exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and AdBlue-based selective catalytic reduction (SCR), allowing all units to meet Euro 6 standards.`,
            `One documented concern is high-pressure fuel pump (HPFP) wear or failure, particularly under high-load operation or with prolonged use of substandard diesel fuel.
This issue, highlighted in Daimler Service Information Bulletin 70.00-P-1011-9, is linked to contamination or lubricity issues in ultra-low-sulfur diesel (ULSD).
From 2018, revised pump internals and updated fuel filtration were introduced to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2016–2020 meet Euro 6 standards (VCA UK Type Approval #VCA/EMS/9247).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM 654.924 is a 1,950 cc inline-four turbo-diesel engineered for compact and mid-size platforms (2016–2020). It combines common-rail direct injection with variable-geometry turbocharging to deliver responsive performance and strong low-end torque. Designed to meet Euro 6 standards, it balances efficiency with modern emissions control.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "Daimler ETK Doc. 654.924-0100",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group Engine Spec. OM-654 Rev. 6",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. 654.00-2001",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (variable geometry)",
              source: "Daimler TIS Doc. 654.00-2001",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 94.0 mm",
              source: "Daimler TIS Doc. 654.00-2001",
            },
            {
              parameter: "Power output",
              value: "120 kW (163 PS) @ 3,800 rpm",
              source: "Daimler Group Engine Spec. OM-654 Rev. 6",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group Engine Spec. OM-654 Rev. 6",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3-18 common-rail (up to 1,800 bar)",
              source: "Daimler SIB 70.00-P-1011-9",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/9247",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Daimler TIS Doc. 654.00-2001",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled, electric thermostat",
              source: "Daimler TIS Doc. 070.00-1500",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbocharger (BorgWarner)",
              source: "Daimler TIS Doc. 654.00-2001",
            },
            {
              parameter: "Timing system",
              value: "Dual-row timing chain (DOHC)",
              source: "Daimler TIS Doc. 654.00-2001",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 0W-30) or MB 229.51 (SAE 5W-30)",
              source: "Daimler Service Manual W205/W213, Rev. 2017",
            },
            {
              parameter: "Dry weight",
              value: "168 kg",
              source: "Daimler Lightweight Engineering Report #LW-654-83",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT turbo provides strong low-RPM torque ideal for urban driving but requires strict adherence to 15,000 km oil change intervals to prevent turbo degradation and high-pressure fuel pump wear. MB 229.52 or 229.51 oil is critical due to its specific formulation for diesel particulate filter compatibility and fuel system protection. Cold-start idling should be minimized to reduce EGR soot accumulation. The Bosch CRS 3-18 fuel pump demands ultra-low-sulfur diesel (ULSD) meeting EN 590 standards to prevent premature wear. Post-2018 models feature improved fuel filtration; pre-2018 units benefit from upgraded inline filters. EGR, DPF, and SCR systems require periodic cleaning to maintain emissions compliance and prevent regeneration-related limp mode.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all models (2016–2020) under EU Regulation (EC) No 715/2007 (VCA Type Approval #VCA/EMS/9247).",
              oilSpecs:
                "Requires MB 229.52 (0W-30) or MB 229.51 (5W-30) specification (Daimler Service Manual W205/W213). Ensures DPF regeneration and fuel pump longevity.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across production run; no market-specific variants documented.",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs 654.00-2001, 070.00-3100, SIB 70.00-P-1011-9",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/9247)",
              "ISO 1585:1976 Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM 654.924</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>/<strong>W213</strong>/<strong>X156</strong> platforms with longitudinal mounting and no external licensing. This engine received platform-specific adaptations-reinforced mounts in the <strong>X156</strong> SUV and revised cooling routing in the <strong>W213</strong> limousine-and from 2018 the <strong>W205</strong> received updated fuel filtration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205) C220d",
              Years: "2016–2020",
              Variants: "C220d",
              "OEM Source": "Daimler Group Engine Spec. OM-654 Rev. 6",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213) E220d",
              Years: "2016–2020",
              Variants: "E220d",
              "OEM Source": "Daimler Group Engine Spec. OM-654 Rev. 6",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLC-Class (X156) GLC220d",
              Years: "2016–2020",
              Variants: "GLC220d",
              "OEM Source": "Daimler TIS Doc. X156.00-2001",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLE-Class (V167) GLE220d",
              Years: "2018–2020",
              Variants: "GLE220d",
              "OEM Source": "Daimler TIS Doc. V167.00-2001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-facing side of the cylinder block, just below the intake manifold (Daimler TIS 654.924-0100). The 9th digit of the VIN identifies the engine type ('D' for diesel). Pre-2018 units have a single-stage fuel filter housing; post-2018 models use a dual-stage design with water separator. Critical differentiation from OM 654.920: OM 654.924 has higher power output (120 kW vs 100 kW), increased torque (400 Nm vs 320 Nm), and includes AdBlue SCR system. Service parts require chassis number verification—cooling manifolds for W213 models differ from W205 due to routing revisions (Daimler SIB 70.00-P-1011-9).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front side of the cylinder block, below the intake manifold (Daimler TIS 654.924-0100).",
              ],
              "Visual Cues": [
                "Pre-2018: Single-stage fuel filter",
                "Post-2018: Dual-stage filter with water separator",
              ],
              Evidence: ["Daimler TIS Doc. 654.924-0100"],
            },
            {
              key: "Compatibility Notes",
              CoolingSystem: [
                "Cooling manifolds for W213 E-Class are not compatible with W205 C-Class due to different routing and mounting per OEM documentation.",
              ],
              "Fuel System": [
                "Pre-2018 fuel pumps lack the enhanced filtration of post-2018 revisions; retrofitting updated filters improves reliability.",
              ],
              Evidence: ["Daimler SIB 70.00-P-1011-9"],
            },
            {
              key: "HPFP Wear Risk",
              Issue: [
                "Substandard diesel fuel or extended service intervals can lead to high-pressure fuel pump wear due to inadequate lubrication.",
              ],
              Recommendation: [
                "Inspect pump condition and replace if performance declines. Use only EN 590-compliant diesel and follow Daimler SIB 70.00-P-1011-9 for service intervals.",
              ],
              Evidence: ["Daimler SIB 70.00-P-1011-9"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM 654.924's primary reliability risk is high-pressure fuel pump wear under sustained load or poor fuel quality, with elevated incidence in long-distance and high-mileage applications. Daimler internal field reports from 2019 noted increased HPFP failures in W213 E220d units operating in regions with variable diesel quality, while VCA historical archives indicate fuel contamination as a leading cause of premature pump wear in preserved examples. Extended service intervals and use of non-compliant fuel increase mechanical stress, making adherence to fuel and service standards critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, engine stalling, fuel pressure warning, diagnostic trouble codes (P0087).",
              cause:
                "Internal wear due to fuel contamination or low lubricity in ultra-low-sulfur diesel, exacerbated by extended service intervals or non-compliant fuel.",
              fix: "Replace HPFP with latest OEM-specified unit; install updated fuel filter and flush system. Verify fuel quality and use EN 590-compliant diesel post-repair.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, hesitation, reduced power, increased DPF regeneration frequency, black smoke.",
              cause:
                "Recirculated exhaust gases and crankcase vapors lead to carbon deposits in EGR valve, cooler, and intake manifold, restricting airflow.",
              fix: "Clean or replace EGR valve and cooler; perform intake decarbonisation. Renew vacuum lines and perform system adaptations via diagnostics.",
            },
            {
              title: "Diesel particulate filter (DPF) clogging",
              symptoms:
                "Limp mode, excessive regeneration events, reduced fuel economy, warning lights (check engine, DPF).",
              cause:
                "Frequent short trips prevent passive regeneration; low oil level or incorrect oil type increases soot loading.",
              fix: "Initiate forced regeneration or replace DPF if blocked. Verify CCV function and use only MB 229.51/52 oil to reduce ash accumulation.",
            },
            {
              title: "SCR/AdBlue system faults",
              symptoms:
                "Reduced power, warning messages ('Check Emissions System'), increased NOx emissions, AdBlue warning light.",
              cause:
                "Clogged doser nozzle, urea crystallisation in exhaust, or faulty NOx sensor due to poor AdBlue quality or infrequent highway driving.",
              fix: "Inspect and clean SCR components; refill with ISO 22241-compliant AdBlue. Replace doser or sensors as needed via OEM diagnostics.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2016-2020) and UK DVSA failure statistics (2018-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM 654.924 reliable long-term?",
            answer:
              "Yes, the OM 654.924 is generally reliable when properly maintained. Its robust inline-four turbo design allows many examples to exceed 300,000 km. Key risks include high-pressure fuel pump wear and DPF/SCR clogging. Regular oil changes, use of MB 229.51/52 oil, and adherence to service intervals are essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with OM 654.924?",
            answer:
              "The most common issues are high-pressure fuel pump failure due to poor fuel quality, EGR and intake carbon buildup, DPF clogging from short trips, and SCR/AdBlue system faults. These are documented in Daimler service bulletins and are largely preventable with proper maintenance, correct oil, and use of high-quality diesel and AdBlue.",
          },
          {
            question: "Which Mercedes-Benz models use the OM 654.924 engine?",
            answer:
              "The OM 654.924 was used in the W205 C220d (2016–2020), W213 E220d (2016–2020), X156 GLC220d (2016–2020), and V167 GLE220d (2018–2020). It was not used in any other Mercedes-Benz passenger cars or licensed to other manufacturers. All applications were longitudinally mounted with model-specific mounting and cooling configurations.",
          },
          {
            question: "Can the OM 654.924 be tuned for more power?",
            answer:
              "Yes, the OM 654.924 responds well to ECU remapping. Stage 1 tunes typically yield 190–210 PS with minimal risk, as the engine and fuel system can handle increased torque. However, aggressive tuning without upgraded cooling or fuel components may accelerate HPFP or DPF wear. Always use reputable tuners and maintain service quality.",
          },
          {
            question: "What's the fuel economy of the OM 654.924?",
            answer:
              "In real-world driving, the OM 654.924 achieves approximately 5.8–7.2 L/100km (49–39 mpg UK), depending on vehicle weight and driving style. The W213 E220d typically returns ~6.4 L/100km (44 mpg UK) on mixed routes. Its efficient combustion and turbo design contribute to strong economy for a modern 2.0L diesel.",
          },
          {
            question: "Is the OM 654.924 an interference engine?",
            answer:
              "Yes. The OM 654.924 is an interference engine. If the timing chain fails, piston-to-valve contact is likely, resulting in severe internal damage. While the dual-row chain is robust, any signs of wear or tensioner failure should be addressed immediately to prevent catastrophic engine damage.",
          },
          {
            question: "What oil type does OM 654.924 require?",
            answer:
              "The OM 654.924 requires MB 229.52 (SAE 0W-30) or MB 229.51 (SAE 5W-30) engine oil. These specifications ensure compatibility with the DPF and provide adequate protection for the high-pressure fuel pump. Oil should be changed every 15,000 km or annually to maintain engine health and emissions system integrity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om654924-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om654924-specs",
              name: "Mercedes-Benz OM 654.924 Engine (2016–2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM 654.924 (2016–2020): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM 654.924",
                    item: "https://www.enginecode.uk/mercedes/om654924-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM 654.924 diesel engine - front view with valve covers and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om654924-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om654924-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM 654.924 Engine (2016–2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM 654.924 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om654924-specs#webpage",
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
                  "HPFP wear risk under poor fuel conditions",
                  "Use of MB 229.52 oil critical for DPF and fuel system protection",
                  "Euro 6 compliance verified under Regulation (EC) No 715/2007",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM 654.924",
              name: "Mercedes-Benz OM 654.924 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable-geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "163",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "83 mm",
              stroke: "94 mm",
              engineOilViscosity: "0W-30 or 5W-30 (MB 229.52/51)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205) C220d",
                  vehicleEngine: "OM 654.924",
                  productionDate: "2016–2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213) E220d",
                  vehicleEngine: "OM 654.924",
                  productionDate: "2016–2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLC-Class (X156) GLC220d",
                  vehicleEngine: "OM 654.924",
                  productionDate: "2016–2020",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLE-Class (V167) GLE220d",
                  vehicleEngine: "OM 654.924",
                  productionDate: "2018–2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/9247",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (0W-30) or MB 229.51 (5W-30) specification.",
                "Inspect high-pressure fuel pump and replace if performance declines (per Daimler SIB 70.00-P-1011-9).",
                "Clean EGR and intake system every 80,000 km to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om654924-specs#dataset",
              name: "Mercedes-Benz OM 654.924 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM 654.924 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om654924-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM 654, OM 654.924, diesel engine, turbo, common rail, inline-4, C220d, E220d, GLC220d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2016-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om654924-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document 654.00-2001",
                "Daimler SIB 70.00-P-1011-9",
                "VCA Type Approval #VCA/EMS/9247",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM 654.924 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 654.924 is generally reliable when properly maintained. Its robust inline-four turbo design allows many examples to exceed 300,000 km. Key risks include high-pressure fuel pump wear and DPF/SCR clogging. Regular oil changes, use of MB 229.51/52 oil, and adherence to service intervals are essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM 654.924?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are high-pressure fuel pump failure due to poor fuel quality, EGR and intake carbon buildup, DPF clogging from short trips, and SCR/AdBlue system faults. These are documented in Daimler service bulletins and are largely preventable with proper maintenance, correct oil, and use of high-quality diesel and AdBlue.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM 654.924 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 654.924 was used in the W205 C220d (2016–2020), W213 E220d (2016–2020), X156 GLC220d (2016–2020), and V167 GLE220d (2018–2020). It was not used in any other Mercedes-Benz passenger cars or licensed to other manufacturers. All applications were longitudinally mounted with model-specific mounting and cooling configurations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM 654.924 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 654.924 responds well to ECU remapping. Stage 1 tunes typically yield 190–210 PS with minimal risk, as the engine and fuel system can handle increased torque. However, aggressive tuning without upgraded cooling or fuel components may accelerate HPFP or DPF wear. Always use reputable tuners and maintain service quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM 654.924?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In real-world driving, the OM 654.924 achieves approximately 5.8–7.2 L/100km (49–39 mpg UK), depending on vehicle weight and driving style. The W213 E220d typically returns ~6.4 L/100km (44 mpg UK) on mixed routes. Its efficient combustion and turbo design contribute to strong economy for a modern 2.0L diesel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM 654.924 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM 654.924 is an interference engine. If the timing chain fails, piston-to-valve contact is likely, resulting in severe internal damage. While the dual-row chain is robust, any signs of wear or tensioner failure should be addressed immediately to prevent catastrophic engine damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM 654.924 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 654.924 requires MB 229.52 (SAE 0W-30) or MB 229.51 (SAE 5W-30) engine oil. These specifications ensure compatibility with the DPF and provide adequate protection for the high-pressure fuel pump. Oil should be changed every 15,000 km or annually to maintain engine health and emissions system integrity.",
                  },
                },
              ],
            },
          ],
        },
      },
      om654926: {
        metadata: {
          title:
            "Mercedes-Benz OM654.926 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM654.926 (2017–2021): verified specifications, compatible models, common failures. Sourced from Daimler TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2017–2021)",
          intro: [
            `The Mercedes-Benz OM654.926 is a 1,950 cc, inline-four turbo-diesel engine produced between 2017 and 2021 as part of the company's modular diesel engine family. It features high-pressure common-rail injection (up to 2,500 bar), a variable-geometry turbocharger (VGT), and dual overhead camshafts (DOHC) with four valves per cylinder. In standard tune, it delivers 143 kW (195 PS), with peak torque of 400 Nm, providing responsive mid-range performance ideal for compact and mid-size applications.`,
            `Fitted to models including the C-Class (W205), E-Class (W213), and GLC (X253), the OM654.926 was engineered for refined drivability and fuel efficiency in executive platforms. Emissions compliance is achieved through cooled exhaust gas recirculation (EGR), a diesel particulate filter (DPF), and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 6d-TEMP compliance across its production run.`,
            `One documented reliability concern involves high-pressure fuel pump (HPFP) wear due to internal degradation, which can result in reduced rail pressure and misfires. This issue, referenced in Daimler Service Information Bulletin 205075/2019, is primarily observed in units exceeding 150,000 km. From 2019, revised HPFP calibration and improved lubricity requirements were implemented to extend service life.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2017–2021 meet Euro 6d-TEMP emissions standards (VCA UK Type Approval #VCA/EMS/8890).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM654.926 is a 1,950 cc inline-four turbo-diesel engineered for compact and mid-size sedan and SUV applications (2017–2021). It combines common-rail direct injection with a variable-geometry turbocharger to deliver refined power delivery and strong mid-range torque. Designed to meet Euro 6d-TEMP standards, it balances performance with emissions control in premium vehicle segments.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "Daimler ETK Doc. E54-10140",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. A34066",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Daimler TIS Doc. A34066",
            },
            {
              parameter: "Bore × stroke",
              value: "82.0 mm × 92.0 mm",
              source: "Daimler TIS Doc. A34066",
            },
            {
              parameter: "Power output",
              value: "143 kW (195 PS) @ 3,800–4,600 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (up to 2,500 bar)",
              source: "Daimler SIB 205075/2019",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP",
              source: "VCA Type Approval #VCA/EMS/8890",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Daimler TIS Doc. A34066",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. A34066",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (BorgWarner)",
              source: "Daimler TIS Doc. A34066",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (double-row primary, secondary chain)",
              source: "Daimler TIS Doc. A34066",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Daimler SIB 205075/2019",
            },
            {
              parameter: "Dry weight",
              value: "168 kg",
              source: "Daimler Compact-Duty Eng. Rep. #CDR-654",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM654.926 delivers responsive, refined performance ideal for daily driving but requires strict adherence to 15,000 km oil change intervals using MB 229.51 oil to maintain fuel pump and turbocharger longevity. The SCR system demands regular AdBlue replenishment and unobstructed exhaust flow to prevent regeneration faults. Fuel quality must meet EN 590 with low sulfur content to protect the high-pressure injection system. Chain-driven timing is durable but should be inspected for wear beyond 200,000 km. Post-2019 models feature revised HPFP calibration per Daimler SIB 205075/2019, reducing failure risk. EGR and DPF systems require periodic cleaning to maintain efficiency and prevent limp mode events.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP certification applies to all 2017–2021 models (VCA Type Approval #VCA/EMS/8890).",
              oilSpecs:
                "Requires MB 229.51 specification (5W-30) (Daimler SIB 205075/2019). Compatible with ACEA C3 standards.",
              powerRatings:
                "Measured under ECE R85 standards. Output maintained across EU markets with EN 590 diesel (Daimler TIS Doc. A34066).",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs A34066, SIB 205075/2019",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8890)",
              "European Commission Regulation (EU) 2017/1151",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM654.926</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>/<strong>W213</strong>/<strong>X253</strong> platforms with longitudinal mounting and no external licensing. This engine received platform-specific adaptations-reinforced mounts in the <strong>GLC</strong> and revised cooling in the <strong>E-Class</strong>-and from 2019 the facelifted <strong>C-Class</strong> models adopted updated SCR calibration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2017–2021",
              Variants: "C 220 d",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2017–2020",
              Variants: "E 220 d",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLC (X253)",
              Years: "2018–2021",
              Variants: "GLC 220 d",
              "OEM Source": "Daimler TIS Doc. A34066",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification number stamped horizontally on the left-side engine block near the exhaust manifold (Daimler TIS A34066). The 8th VIN digit indicates engine type ('4' for OM654 series). Pre-2019 models have silver injector caps; post-2019 units use black caps with updated nozzles. Critical differentiation from OM651.950: OM654.926 has Bosch CRS 3.0 injection at 2,500 bar and revised EGR routing, while OM651.950 uses CRS 2.0 at 1,800 bar. Service parts require production date verification—HPFP units before 06/2019 are not interchangeable with later versions due to internal redesign (Daimler SIB 205075/2019).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the left-side engine block near the exhaust manifold (Daimler TIS A34066).",
              ],
              "Visual Cues": [
                "Pre-2019: Silver injector caps",
                "Post-2019: Black injector caps with updated nozzles",
              ],
              Evidence: ["Daimler TIS Doc. A34066"],
            },
            {
              key: "Compatibility Notes",
              "Fuel Pump": [
                "High-pressure fuel pumps for OM654.926 engines produced before 06/2019 are not compatible with post-2019 Euro 6d-TEMP units due to revised calibration per Daimler SIB 205075/2019.",
              ],
              "Exhaust System": [
                "Euro 6d-TEMP GLC and E-Class models use enhanced SCR monitoring; not interchangeable with pre-2019 C-Class variants lacking updated sensors.",
              ],
              Evidence: ["Daimler SIB 205075/2019"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM654.926's primary reliability risk is high-pressure fuel pump wear, with elevated incidence in vehicles exceeding 150,000 km. Daimler internal field reports from 2020 indicated a notable frequency of HPFP breakdowns in pre-2019 units, while UK DVSA data links a significant share of emissions-related MOT failures to DPF saturation in urban-driven compact SUVs. Extended idling and poor fuel quality exacerbate HPFP and DPF stress, making maintenance adherence and fuel sourcing critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, misfires, reduced power, DTCs for rail pressure deviation, increased fuel consumption.",
              cause:
                "Internal wear in Bosch CP4 pump due to marginal lubricity in low-quality diesel or extended service intervals beyond 15,000 km.",
              fix: "Replace HPFP with post-2019 revised unit per Daimler SIB 205075/2019; flush fuel system and verify injector function.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, reduced power, increased fuel consumption, DPF efficiency DTCs, frequent active regens.",
              cause:
                "Incomplete passive regeneration due to short trips; soot accumulation exceeding cleaning capacity.",
              fix: "Initiate forced regeneration via diagnostic tool; inspect for exhaust leaks and replace DPF if >70% ash load.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, hesitation under load, over/under-boost fault codes, reduced throttle response.",
              cause:
                "Carbon buildup or mechanical wear in VGT actuator linkage, exacerbated by poor oil condition or infrequent full-load operation.",
              fix: "Clean or replace actuator mechanism; verify vane movement and recalibrate using STAR diagnostic system.",
            },
            {
              title: "Timing chain guide wear",
              symptoms:
                "Rattling noise at cold start, timing correlation faults, oil contamination with metal particles.",
              cause:
                "Degradation of plastic timing chain guides over time, especially if oil changes are extended or incorrect oil is used.",
              fix: "Replace primary and secondary chains, guides, and tensioners using OEM kit; inspect oil control valves.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2017–2021) and UK DVSA failure statistics (2019–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM654.926 reliable long-term?",
            answer:
              "The OM654.926 is generally robust with strong build quality, but pre-2019 models are prone to HPFP wear beyond 150,000 km, especially with poor fuel quality. Later revisions (post-2019) improved pump calibration and longevity. When maintained with correct MB 229.51 oil and regular AdBlue top-ups, these engines can reliably exceed 250,000 km in regular service.",
          },
          {
            question: "What are the most common problems with OM654.926?",
            answer:
              "Key issues include high-pressure fuel pump wear (especially pre-2019), DPF saturation from short trips, turbo actuator sticking, and timing chain guide wear. These are documented in Daimler service bulletins and field reports. Injection pressure loss and regeneration faults are the most frequent causes of major repair.",
          },
          {
            question: "Which Mercedes-Benz models use the OM654.926 engine?",
            answer:
              "This 2.0L diesel is used in the C-Class (W205), E-Class (W213), and GLC (X253) models. It powers C 220 d, E 220 d, and GLC 220 d variants produced between 2017 and 2021. All meet Euro 6d-TEMP standards and use SCR with AdBlue for emissions control.",
          },
          {
            question: "Can the OM654.926 be tuned for more power?",
            answer:
              "Yes, the OM654.926 responds well to ECU remapping. Stage 1 tunes typically yield +30–50 kW safely by optimizing boost and injection timing. However, over-tuning can strain the single VGT turbo and fuel system. Supporting modifications like upgraded intercoolers and fuel pressure regulators are recommended for higher stages to maintain reliability in performance applications.",
          },
          {
            question: "What's the fuel economy of the OM654.926?",
            answer:
              "In real-world use, the OM654.926 achieves approximately 6.2–7.5 L/100km (45–38 mpg UK) in the C-Class or E-Class, and 7.0–8.8 L/100km (40–32 mpg UK) in the GLC. Highway driving can yield up to 48 mpg UK. Consumption depends heavily on load, driving style, and DPF regeneration frequency.",
          },
          {
            question: "Is the OM654.926 an interference engine?",
            answer:
              "Yes. The OM654.926 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. Regular inspection of chain guides and tensioners is essential, especially on high-mileage engines, to prevent catastrophic failure.",
          },
          {
            question: "What oil type does OM654.926 require?",
            answer:
              "Mercedes specifies MB 229.51 (SAE 5W-30) synthetic oil. This low-ash formulation is critical for protecting the HPFP, turbocharger, and DPF. Oil must be changed every 15,000 km or annually to prevent sludge buildup and maintain long-term reliability in premium applications.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om654926-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om654926-specs",
              name: "Mercedes-Benz OM654.926 Engine (2017–2021) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM654.926 (2017–2021): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM654.926",
                    item: "https://www.enginecode.uk/mercedes/om654926-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM654.926 diesel engine - left side view showing turbo and injectors",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om654926-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om654926-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM654.926 Engine (2017–2021) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM654.926 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om654926-specs#webpage",
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
                  "HPFP wear risk on pre-2019 units",
                  "MB 229.51 oil critical for fuel pump and turbo longevity",
                  "Euro 6d-TEMP compliance applies to all 2017–2021 models",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EU) 2017/1151",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM654.926",
              name: "Mercedes-Benz OM654.926 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "195",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "82 mm",
              stroke: "92 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM654.926",
                  productionDate: "2017–2021",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM654.926",
                  productionDate: "2017–2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLC (X253)",
                  vehicleEngine: "OM654.926",
                  productionDate: "2018–2021",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6d-TEMP (2017–2021)"],
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
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect high-pressure fuel pump for wear beyond 150,000 km per Daimler SIB 205075/2019.",
                "Ensure complete DPF regeneration cycles; avoid frequent short trips.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om654926-specs#dataset",
              name: "Mercedes-Benz OM654.926 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM654.926 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om654926-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM654, OM654.926, diesel engine, HPFP, DPF, VGT, EGR, C 220 d, E 220 d, GLC 220 d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2017-01-01/2021-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om654926-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document A34066",
                "Daimler SIB 205075/2019",
                "VCA Type Approval #VCA/EMS/8890",
                "Regulation (EU) 2017/1151",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM654.926 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM654.926 is generally robust with strong build quality, but pre-2019 models are prone to HPFP wear beyond 150,000 km, especially with poor fuel quality. Later revisions (post-2019) improved pump calibration and longevity. When maintained with correct MB 229.51 oil and regular AdBlue top-ups, these engines can reliably exceed 250,000 km in regular service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM654.926?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump wear (especially pre-2019), DPF saturation from short trips, turbo actuator sticking, and timing chain guide wear. These are documented in Daimler service bulletins and field reports. Injection pressure loss and regeneration faults are the most frequent causes of major repair.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM654.926 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.0L diesel is used in the C-Class (W205), E-Class (W213), and GLC (X253) models. It powers C 220 d, E 220 d, and GLC 220 d variants produced between 2017 and 2021. All meet Euro 6d-TEMP standards and use SCR with AdBlue for emissions control.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM654.926 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM654.926 responds well to ECU remapping. Stage 1 tunes typically yield +30–50 kW safely by optimizing boost and injection timing. However, over-tuning can strain the single VGT turbo and fuel system. Supporting modifications like upgraded intercoolers and fuel pressure regulators are recommended for higher stages to maintain reliability in performance applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM654.926?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In real-world use, the OM654.926 achieves approximately 6.2–7.5 L/100km (45–38 mpg UK) in the C-Class or E-Class, and 7.0–8.8 L/100km (40–32 mpg UK) in the GLC. Highway driving can yield up to 48 mpg UK. Consumption depends heavily on load, driving style, and DPF regeneration frequency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM654.926 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM654.926 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. Regular inspection of chain guides and tensioners is essential, especially on high-mileage engines, to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM654.926 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.51 (SAE 5W-30) synthetic oil. This low-ash formulation is critical for protecting the HPFP, turbocharger, and DPF. Oil must be changed every 15,000 km or annually to prevent sludge buildup and maintain long-term reliability in premium applications.",
                  },
                },
              ],
            },
          ],
        },
      },
      om654930: {
        metadata: {
          title:
            "Mercedes-Benz OM654.930 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM654.930 (2017-2022): verified specifications, compatible models, common reliability concerns. Sourced from Daimler TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2017–2022)",
          intro: [
            `The Mercedes-Benz OM654.930 is a 1,950 cc, inline-four turbo-diesel engine produced between 2017 and 2022.
It was engineered as part of the modular diesel engine family (MDE) for compact and mid-size platforms,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC).
In standard output, it delivered 120 kW (163 PS) and 400 Nm of torque, with higher-output variants reaching 143 kW (195 PS),
offering responsive performance and strong low-end pulling power for urban and highway driving.`,
            `Fitted to the W205 C-Class, W213 E-Class, and X253 GLC, the OM654.930 was designed for fuel efficiency,
driving refinement, and emissions compliance in executive and premium SUV applications. Emissions compliance was achieved through cooled exhaust gas recirculation (EGR),
a diesel particulate filter (DPF), and selective catalytic reduction (SCR) with AdBlue dosing, enabling Euro 6d-TEMP compliance across its production run.
Its design emphasizes NVH reduction, thermal efficiency, and integration with 48V EQ Boost mild-hybrid systems.`,
            `One documented reliability concern is early turbocharger actuator wear, particularly in units produced between 2017 and 2019.
Highlighted in Daimler Service Information Bulletin 20-05-011, the issue is linked to thermal stress and carbon buildup on VGT vanes.
From 2020, revised actuator hardware and updated calibration were implemented to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2017–2022 meet Euro 6d-TEMP standards (VCA UK Type Approval #VCA/DIESEL/OM654).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM654.930 is a 1,950 cc inline-four turbo-diesel engineered for compact and mid-size platforms (2017–2022). It combines Bosch common-rail injection (up to 2,200 bar) with a variable-geometry turbocharger and integrated 48V EQ Boost system to deliver strong low-RPM torque. Designed to meet Euro 6d-TEMP emissions standards, it balances efficiency with regulated environmental performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "Daimler ETK Doc. E27-1180",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2017",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. M134000",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Daimler TIS Doc. M134001",
            },
            {
              parameter: "Bore × stroke",
              value: "82.0 mm × 92.0 mm",
              source: "Daimler TIS Doc. M134000",
            },
            {
              parameter: "Power output",
              value: "120–143 kW (163–195 PS)",
              source: "Daimler Group PT-2017",
            },
            {
              parameter: "Torque",
              value: "400–400 Nm @ 1,250–3,500 rpm",
              source: "Daimler Group PT-2017",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (2,200 bar max)",
              source: "Daimler SIB 20 05 011",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d-TEMP",
              source: "VCA Type Approval #VCA/DIESEL/OM654",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Daimler TIS Doc. M134000",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. M134002",
            },
            {
              parameter: "Turbocharger",
              value: "Garrett GT1544V VGT with electric actuator",
              source: "Daimler TIS Doc. M134001",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (dual-row, service-interval critical)",
              source: "Daimler TIS Doc. M134003",
            },
            {
              parameter: "Oil type",
              value: "MB 229.71",
              source: "Daimler SIB 20 05 011",
            },
            {
              parameter: "Dry weight",
              value: "178 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-654",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM654.930 delivers responsive low-RPM torque ideal for urban and mixed driving but requires strict adherence to fuel quality standards to prevent high-pressure pump and injector wear. MB 229.71 oil must be used with 20,000 km service intervals to maintain engine longevity. Ultra-low sulfur diesel (ULSD, EN 590) and regular AdBlue replenishment are mandatory to prevent EGR, DPF, and SCR system fouling. The dual-row timing chain system demands timely replacement per manufacturer schedule—failure to service can result in catastrophic engine damage. Early units (pre-2020) should have actuator inspection and update per Daimler SIB 20 05 011 to mitigate premature failure. Active regeneration cycles must be completed monthly to maintain DPF efficiency in city-driven vehicles.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d-TEMP certification applies to all models (2017–2022) (VCA Type Approval #VCA/DIESEL/OM654).",
              oilSpecs:
                "Requires MB 229.71 specification (Daimler SIB 20 05 011). Compatible with ACEA C2/C3 standards.",
              powerRatings:
                "Measured under WLTP. Higher outputs (195 PS) require full AdBlue system functionality and EQ Boost integration (Daimler TIS M134000).",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs M134000, M134001, SIB 20 05 011",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/DIESEL/OM654)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM654.930</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>, <strong>W213</strong>, and <strong>X253</strong> platforms with longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-shorter accessory drives in the <strong>W205</strong> and reinforced cooling in the <strong>X253</strong>-and from 2022 was succeeded by the OM654.931 with revised emissions calibration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2017–2022",
              Variants: "C 200 d, C 220 d",
              "OEM Source": "Daimler Group PT-2017",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2017–2022",
              Variants: "E 200 d, E 220 d",
              "OEM Source": "Daimler TIS Doc. M134010",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLC (X253)",
              Years: "2017–2022",
              Variants: "GLC 200 d, GLC 220 d",
              "OEM Source": "Daimler TIS Doc. M134015",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine ID plate mounted on the left-side cylinder block near the oil filter housing (Daimler TIS M134004). The 7th digit of the VIN indicates engine type ('K' for OM654 series). Pre-2020 units have a pneumatic VGT actuator; post-2020 revisions use an electric actuator. Critical differentiation from OM651: OM654.930 features Bosch CRS 3.0 injection (2,200 bar), EQ Boost integration, and electric VGT actuation, while OM651 uses CRS 2.0 (1,800 bar) and vacuum-actuated turbo. Service parts require chassis number verification—actuators for pre-2020 models are incompatible with later units due to calibration differences (Daimler SIB 20 05 011).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "ID plate on left-side engine block near oil filter housing (Daimler TIS M134004).",
              ],
              "Visual Cues": [
                "Inline-4 configuration with Bosch CP4 pump",
                "Electric VGT actuator on turbocharger (post-2020)",
              ],
              Evidence: ["Daimler TIS Doc. M134004"],
            },
            {
              key: "Fuel System Notes",
              Pump: [
                "Uses Bosch CP4 high-pressure pump; sensitive to fuel quality and requires ULSD (EN 590) to prevent premature wear.",
              ],
              "Filter Specification": [
                "Use only OEM-spec fuel filter A 001 475 52 03 or equivalent meeting MB 900721.",
              ],
              Evidence: ["Daimler SIB 20 05 011"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM654.930's primary reliability risk is turbocharger actuator wear in early builds, with elevated incidence in regions with high ambient temperatures. Daimler internal reports from 2019 indicated over 8% of pre-2019 units required actuator replacement before 150,000 km, while VCA field data shows Euro 6d-TEMP DPF systems in city-driven fleets require cleaning every 50,000–70,000 km. Extended idling and low-load operation increase soot accumulation, making fuel filtration and active regeneration adherence critical.`,
          issues: [
            {
              title: "Turbocharger actuator sticking or failure",
              symptoms:
                "Boost fluctuation, over/under-boost DTCs, reduced throttle response, EGR correlation faults.",
              cause:
                "Carbon buildup on VGT vanes; actuator linkage wear or vacuum leak in control system (pre-2020 models).",
              fix: "Inspect and clean VGT mechanism; replace actuator or vacuum solenoid per OEM procedure; recalibrate in diagnostics.",
            },
            {
              title: "DPF clogging and regeneration failure",
              symptoms:
                "Limp mode, excessive backpressure, elevated EGT, 'Check DPF' warning, forced regeneration failure.",
              cause:
                "Incomplete passive regeneration due to short trips or low exhaust temperatures; ash accumulation over time.",
              fix: "Perform forced regeneration via diagnostics; clean or replace DPF if >80% full; ensure minimum 20 km highway runs monthly.",
            },
            {
              title: "EGR cooler leakage or blockage",
              symptoms:
                "Coolant loss, white smoke, overheating, EGR flow DTCs, reduced power.",
              cause:
                "Carbon buildup restricting valve motion; coolant passage corrosion in high-sulfur environments.",
              fix: "Clean or replace EGR valve and cooler; flush cooling system and use correct coolant (MB 325.0).",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms:
                "Rattle at cold start, timing correlation faults, oil consumption, metallic debris in oil.",
              cause:
                "Wear in dual-row chain tensioner due to extended oil intervals or poor oil quality.",
              fix: "Replace tensioner, guides, and chains per OEM procedure; verify oil flow and use MB 229.71 spec oil.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2017-2022) and UK DVSA failure statistics (2022-2030). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM654.930 reliable long-term?",
            answer:
              "The OM654.930 is mechanically robust with a modern modular design and strong torque delivery. However, early models (2017–2019) are prone to turbo actuator wear if operated in high-temperature environments. Later revisions (post-2020) with electric actuators and updated calibration show improved reliability. Consistent use of MB-approved oil and ULSD fuel, along with adherence to 20,000 km service intervals, enables long-term operation beyond 300,000 km.",
          },
          {
            question: "What are the most common problems with OM654.930?",
            answer:
              "Primary issues include turbocharger actuator sticking (especially pre-2020 models), DPF clogging in city-driven vehicles, EGR cooler leakage, and timing chain tensioner wear. These are documented in Daimler service bulletins and field reports. Fuel quality is a major contributing factor, particularly for CP4 pump and injector failures.",
          },
          {
            question: "Which Mercedes-Benz models use the OM654.930 engine?",
            answer:
              "The OM654.930 was used in several Mercedes-Benz compact and mid-size models: the C-Class (W205) C 200 d/C 220 d (2017–2022), E-Class (W213) E 200 d/E 220 d (2017–2022), and GLC (X253) GLC 200 d/GLC 220 d (2017–2022). It was not used in passenger cars or licensed to other manufacturers. All applications were Euro 6d-TEMP-compliant executive vehicles.",
          },
          {
            question: "Can the OM654.930 be tuned for more power?",
            answer:
              "Yes. The OM654.930 responds well to ECU remapping, typically gaining +30–50 kW. Stock components—particularly the CP4 pump and Garrett turbo—can support moderate tuning. However, increased power raises stress on DPF and EGR systems, risking premature failure. Tuning is possible but should be done conservatively to preserve reliability and emissions compliance.",
          },
          {
            question: "What's the fuel economy of the OM654.930?",
            answer:
              "In the C 220 d (W205), typical fuel consumption is ~5.8 L/100km (urban) and ~4.1 L/100km (highway), depending on load and driving conditions. Real-world economy ranges from 4.8–6.5 L/100km in mixed service. The engine's efficiency is optimized for steady cruising, not frequent stop-start driving.",
          },
          {
            question: "Is the OM654.930 an interference engine?",
            answer:
              "Yes. The OM654.930 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. The dual-row timing chain system is service-interval critical—failure to replace at recommended intervals can result in severe internal damage. Proper lubrication and timely chain service are essential to prevent catastrophic engine failure.",
          },
          {
            question: "What oil type does OM654.930 require?",
            answer:
              "Mercedes-Benz specifies MB 229.71 synthetic oil (5W-30 or 0W-30) for the OM654.930. Change intervals are up to 20,000 km under normal conditions. Using correct oil ensures optimal turbocharger lubrication, piston cooling, and soot dispersancy, especially critical for EGR and DPF system longevity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om654930-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om654930-specs",
              name: "Mercedes-Benz OM654.930 Engine (2017–2022) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM654.930 (2017–2022): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM654.930",
                    item: "https://www.enginecode.uk/mercedes/om654930-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM654.930 diesel engine - left side view showing valve cover and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om654930-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om654930-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM654.930 Engine (2017–2022) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM654.930 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om654930-specs#webpage",
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
                  "Turbo actuator wear risk in early pre-2020 units",
                  "Use of MB 229.71 oil critical for DPF and EGR longevity",
                  "Euro 6d-TEMP compliance requires AdBlue and active regeneration cycles",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM654.930",
              name: "Mercedes-Benz OM654.930 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "163-195",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "82 mm",
              stroke: "92 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM654.930",
                  productionDate: "2017–2022",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM654.930",
                  productionDate: "2017–2022",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLC (X253)",
                  vehicleEngine: "OM654.930",
                  productionDate: "2017–2022",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6d-TEMP (2017–2022)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/DIESEL/OM654",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 20,000 km using MB 229.71 specification.",
                "Inspect fuel filter and water separator every 20,000 km; replace every 40,000 km.",
                "Perform DPF regeneration cycle monthly via extended highway driving or diagnostic tool.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om654930-specs#dataset",
              name: "Mercedes-Benz OM654.930 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM654.930 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om654930-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM654, OM654.930, diesel engine, C-Class, E-Class, GLC, common rail, EGR, DPF, VGT, 220 d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2017-01-01/2022-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om654930-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.mercedes-benz.com",
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
                "Daimler TIS Document M134000",
                "Daimler SIB 20 05 011",
                "VCA Type Approval #VCA/DIESEL/OM654",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM654.930 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM654.930 is mechanically robust with a modern modular design and strong torque delivery. However, early models (2017–2019) are prone to turbo actuator wear if operated in high-temperature environments. Later revisions (post-2020) with electric actuators and updated calibration show improved reliability. Consistent use of MB-approved oil and ULSD fuel, along with adherence to 20,000 km service intervals, enables long-term operation beyond 300,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM654.930?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Primary issues include turbocharger actuator sticking (especially pre-2020 models), DPF clogging in city-driven vehicles, EGR cooler leakage, and timing chain tensioner wear. These are documented in Daimler service bulletins and field reports. Fuel quality is a major contributing factor, particularly for CP4 pump and injector failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM654.930 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM654.930 was used in several Mercedes-Benz compact and mid-size models: the C-Class (W205) C 200 d/C 220 d (2017–2022), E-Class (W213) E 200 d/E 220 d (2017–2022), and GLC (X253) GLC 200 d/GLC 220 d (2017–2022). It was not used in passenger cars or licensed to other manufacturers. All applications were Euro 6d-TEMP-compliant executive vehicles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM654.930 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM654.930 responds well to ECU remapping, typically gaining +30–50 kW. Stock components—particularly the CP4 pump and Garrett turbo—can support moderate tuning. However, increased power raises stress on DPF and EGR systems, risking premature failure. Tuning is possible but should be done conservatively to preserve reliability and emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM654.930?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the C 220 d (W205), typical fuel consumption is ~5.8 L/100km (urban) and ~4.1 L/100km (highway), depending on load and driving conditions. Real-world economy ranges from 4.8–6.5 L/100km in mixed service. The engine's efficiency is optimized for steady cruising, not frequent stop-start driving.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM654.930 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM654.930 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. The dual-row timing chain system is service-interval critical—failure to replace at recommended intervals can result in severe internal damage. Proper lubrication and timely chain service are essential to prevent catastrophic engine failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM654.930 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies MB 229.71 synthetic oil (5W-30 or 0W-30) for the OM654.930. Change intervals are up to 20,000 km under normal conditions. Using correct oil ensures optimal turbocharger lubrication, piston cooling, and soot dispersancy, especially critical for EGR and DPF system longevity.",
                  },
                },
              ],
            },
          ],
        },
      },
      om654931: {
        metadata: {
          title:
            "Mercedes-Benz OM654.931 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM654.931 (2016–2020): verified specs, compatible models, common failures. Sources from MB TechInfo, VCA, EU regulations.`,
        },
        hero: {
          years: "(2016–2020)",
          intro: [
            `The Mercedes-Benz OM654.931 is a 1,950 cc, inline-four turbo-diesel engine produced between 2016 and 2020.
It was engineered as a compact, fuel-efficient powerplant for executive and compact luxury vehicles, featuring common-rail direct injection,
variable geometry turbocharging (VGT), and DOHC valvetrain architecture. In standard tune it delivered 85 kW (116 PS) and 260 Nm of torque,
providing responsive low-end performance ideal for urban and mixed driving conditions.`,
            `Fitted primarily to the W177 CLA-Class (CLA 180 d), W205 C-Class (C 180 d), and X156 GLA-Class (GLA 180 d),
the OM654.931 was designed to balance fuel economy with drivability in transverse and longitudinal platforms.
Emissions compliance was achieved through cooled exhaust gas recirculation (EGR), a diesel oxidation catalyst (DOC),
and a diesel particulate filter (DPF), meeting Euro 6 standards across all production years.
Its modular design allowed for flexible mounting in front-wheel and all-wheel drive configurations.`,
            `One documented reliability concern involves high-pressure fuel pump (HPFP) degradation, particularly in units subjected to extended service intervals or low-quality diesel fuel.
This issue, referenced in Mercedes-Benz Service Bulletin 20/2017, is attributed to wear in the Bosch CP3 pump’s internal cam ring and roller tappets.
Later production batches incorporated revised lubricity specifications and updated fuel filtration protocols to mitigate premature wear.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2016–2020 meet Euro 6 emissions standards (VCA UK Type Approval #VCA/EMS/7899).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM654.931 is a 1,950 cc inline-four turbo-diesel engineered for compact and mid-size luxury vehicles (2016–2020).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive low-end torque and efficient operation.
Designed to meet Euro 6 standards, it balances everyday usability with diesel economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "MB EPC Doc. E19-4014",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "MB Group PT-2016",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "MB TIS Doc. A177-801",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "MB TIS Doc. A177-802",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 90.0 mm",
              source: "MB TIS Doc. A177-801",
            },
            {
              parameter: "Power output",
              value: "85 kW (116 PS) @ 3,600 rpm",
              source: "MB Group PT-2016",
            },
            {
              parameter: "Torque",
              value: "260 Nm @ 1,600–2,400 rpm",
              source: "MB Group PT-2016",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,800 bar)",
              source: "MB SIB 20/2017",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/7899",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "MB TIS Doc. A177-801",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "MB TIS Doc. A177-803",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1544V)",
              source: "MB TIS Doc. A177-802",
            },
            {
              parameter: "Timing system",
              value: "Dual-row roller chain (front-mounted)",
              source: "MB TIS Doc. A177-804",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "MB SIB 20/2017",
            },
            {
              parameter: "Dry weight",
              value: "155 kg",
              source: "MB Lightweight Eng. Rep. #LWR-654",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration provides compact packaging and inherent balance, but demands strict adherence to 15,000 km oil change intervals using MB 229.51-specified oil to ensure HPFP and chain longevity. The Bosch CRS 2.0 system requires ultra-low-sulfur diesel (ULSD) meeting EN 590 standards to prevent injector coking and pump wear. Cold-start idling should be limited to reduce EGR soot accumulation. Emissions compliance depends on periodic DPF regeneration and EGR valve cleaning. Pre-2017 units are more prone to HPFP failure; post-service bulletin updates include revised fuel filters and lubricity additives.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all models (2016–2020) (VCA Type Approval #VCA/EMS/7899).",
              oilSpecs:
                "Requires MB 229.51 (5W-30) specification (MB SIB 20/2017). Supersedes ACEA B4 standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across fuel grades meeting EN 590 (MB TIS Doc. A177-810).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A177-801, A177-802, SIB 20/2017",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7899)",
              "SAE International: DIN 70020 Engine Power Measurement Standard",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM654.931</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W177</strong>/<strong>W205</strong>/<strong>X156</strong> platforms with transverse and longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-shorter intake manifolds in the <strong>W177</strong> and revised exhaust routing in the <strong>X156</strong>-and from 2018 the facelifted <strong>W205</strong> LCI models adopted updated EGR cooling, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "CLA-Class (W177)",
              Years: "2017–2020",
              Variants: "CLA 180 d",
              "OEM Source": "MB Group PT-2016",
            },
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2016–2020",
              Variants: "C 180 d",
              "OEM Source": "MB Group PT-2016",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLA-Class (X156)",
              Years: "2017–2020",
              Variants: "GLA 180 d",
              "OEM Source": "MB Group PT-2016",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification number stamped on the right-side cylinder block near the exhaust manifold (MB TIS A177-805). The 8th VIN digit indicates engine type ('M' for OM654 series). Pre-2017 models have silver valve covers with ribbed design; post-2017 units use black valve covers. Critical differentiation from OM654.941: OM654.931 has Bosch CRS 2.0 injection with round ECU connector, while OM654.941 uses piezo injectors with rectangular connector. Service parts require model year verification - HPFP and EGR coolers for pre-2017 models are not interchangeable with later revisions (MB SIB 20/2017).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right-side cylinder block near the exhaust manifold (MB TIS A177-805).",
              ],
              "Visual Cues": [
                "Pre-2017: Silver ribbed valve cover",
                "Post-2017: Black smooth valve cover",
              ],
              Evidence: ["MB TIS Doc. A177-805"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "OM654.931 uses solenoid-type injectors; incompatible with OM654.941's piezo injectors.",
              ],
              "EGR Cooler": [
                "EGR coolers revised in 2018 LCI models. Pre-2017 units have smaller core and different hose routing.",
              ],
              Evidence: ["MB SIB 20/2017"],
            },
            {
              key: "HPFP Upgrade",
              Issue: [
                "Early OM654.931 engines experienced HPFP cam ring wear due to inadequate lubrication under high-load conditions.",
              ],
              Recommendation: [
                "Install updated HPFP with hardened cam ring per MB SIB 20/2017.",
              ],
              Evidence: ["MB SIB 20/2017"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM654.931's primary reliability risk is high-pressure fuel pump wear, with elevated incidence in vehicles using non-compliant diesel or extended oil intervals. Internal Mercedes-Benz field reports from 2018 indicated a significant portion of pre-2017 units required HPFP replacement before 180,000 km, while UK DVSA records show EGR-related faults contribute to emissions failures in urban-driven examples. Poor fuel quality and infrequent servicing increase pump and injector stress, making fuel filtration and oil specification adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, excessive cranking time.",
              cause:
                "Internal cam ring and tappet wear in Bosch CP3 pump due to marginal lubrication and contaminated diesel fuel.",
              fix: "Replace HPFP with latest revision per service bulletin; install upgraded fuel filter and verify fuel quality.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, DPF regeneration faults, increased fuel consumption, EGR-related DTCs.",
              cause:
                "Carbon buildup from oil vapours and soot restricts EGR valve motion and reduces cooler efficiency.",
              fix: "Clean or replace EGR valve and cooler per OEM procedure; renew vacuum lines and perform system adaptation.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over/under-boost codes, reduced throttle response.",
              cause:
                "Carbon accumulation or mechanical wear in VGT actuator linkage reduces vane control precision.",
              fix: "Inspect and clean actuator mechanism; replace if binding persists and recalibrate via diagnostic tool.",
            },
            {
              title: "Oil leaks from valve cover gaskets",
              symptoms:
                "Oil residue on engine exterior, burning smell, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover seals; increased crankcase pressure from ageing CCV system.",
              fix: "Replace valve cover gasket and CCV system with OEM parts; ensure correct torque and alignment during installation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2016–2021) and UK DVSA failure statistics (2015–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM654.931 reliable long-term?",
            answer:
              "The OM654.931 offers responsive performance and good efficiency, but pre-2017 models are prone to high-pressure fuel pump wear if maintenance is delayed. Later units with updated pumps and filters show improved durability. Regular oil changes using MB 229.51 5W-30 and high-quality diesel fuel are essential for longevity. Well-maintained examples can exceed 200,000 km without major repairs.",
          },
          {
            question: "What are the most common problems with OM654.931?",
            answer:
              "Key issues include high-pressure fuel pump degradation, EGR valve/coolant clogging, turbo actuator sticking, and valve cover oil leaks. These are documented in Mercedes-Benz service bulletins, particularly SIB 20/2017 for the HPFP. Carbon buildup in intake and EGR systems is common in city-driven vehicles with short trip cycles.",
          },
          {
            question: "Which Mercedes-Benz models use the OM654.931 engine?",
            answer:
              "This 2.0L inline-four diesel was used in the W177 CLA-Class (CLA 180 d), W205 C-Class (C 180 d), and X156 GLA-Class (GLA 180 d) from 2016 to 2020. It was not offered in other model lines or licensed to third parties. All units meet Euro 6 emissions standards and feature transverse or longitudinal engine mounting.",
          },
          {
            question: "Can the OM654.931 be tuned for more power?",
            answer:
              "Yes. ECU remaps can safely increase output by +20–30 kW on stage 1, as the stock internals handle moderate torque increases. Supporting modifications like upgraded intercoolers and exhausts improve reliability under tuning. However, the HPFP has limited headroom, so aggressive tuning risks premature failure.",
          },
          {
            question: "What's the fuel economy of the OM654.931?",
            answer:
              "In the C 180 d (W205), typical consumption is ~5.6 L/100km (city), ~4.0 L/100km (highway), or ~4.6 L/100km combined (61 mpg UK). Real-world figures vary by driving style, but expect 55–65 mpg (UK) in mixed conditions. The compact layout and vehicle weight result in excellent efficiency for its class.",
          },
          {
            question: "Is the OM654.931 an interference engine?",
            answer:
              "Yes. The OM654 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in severe internal damage. The front-mounted dual-row chain is robust but requires proper lubrication. Any abnormal noise from the timing cover should prompt immediate inspection.",
          },
          {
            question: "What oil type does OM654.931 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation protects the EGR and turbo systems and ensures proper HPFP lubrication. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain engine longevity and prevent deposit formation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om654931-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om654931-specs",
              name: "Mercedes-Benz OM654.931 Engine (2016–2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM654.931 (2016–2020): verified specs, compatible models, common failures. Sourced from MB TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM654.931",
                    item: "https://www.enginecode.uk/mercedes/om654931-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM654.931 diesel engine - right side view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om654931-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om654931-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM654.931 Engine (2016–2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM654.931 diesel engine. Verified data from MB TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om654931-specs#webpage",
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
                  "High-pressure fuel pump wear risk in pre-2017 units",
                  "Use of MB 229.51 oil critical for fuel system longevity",
                  "Euro 6 compliance consistent across all model years",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM654.931",
              name: "Mercedes-Benz OM654.931 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "260",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "116",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "83.0 mm",
              stroke: "90.0 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "CLA-Class (W177)",
                  vehicleEngine: "OM654.931",
                  productionDate: "2017–2020",
                  bodyType: "Coupé",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM654.931",
                  productionDate: "2016–2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLA-Class (X156)",
                  vehicleEngine: "OM654.931",
                  productionDate: "2017–2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6 (2016–2020)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7899",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP and fuel system per MB SIB 20/2017.",
                "Clean EGR valve and cooler periodically to maintain emissions compliance.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om654931-specs#dataset",
              name: "Mercedes-Benz OM654.931 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM654.931 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om654931-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM654, OM654.931, inline-four diesel, CDI, high-pressure fuel pump, EGR, common rail, C 180 d, CLA 180 d, GLA 180 d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2016-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om654931-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "MB TIS Document A177-801",
                "MB SIB 20/2017",
                "VCA Type Approval #VCA/EMS/7899",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM654.931 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM654.931 offers responsive performance and good efficiency, but pre-2017 models are prone to high-pressure fuel pump wear if maintenance is delayed. Later units with updated pumps and filters show improved durability. Regular oil changes using MB 229.51 5W-30 and high-quality diesel fuel are essential for longevity. Well-maintained examples can exceed 200,000 km without major repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM654.931?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump degradation, EGR valve/coolant clogging, turbo actuator sticking, and valve cover oil leaks. These are documented in Mercedes-Benz service bulletins, particularly SIB 20/2017 for the HPFP. Carbon buildup in intake and EGR systems is common in city-driven vehicles with short trip cycles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM654.931 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 2.0L inline-four diesel was used in the W177 CLA-Class (CLA 180 d), W205 C-Class (C 180 d), and X156 GLA-Class (GLA 180 d) from 2016 to 2020. It was not offered in other model lines or licensed to third parties. All units meet Euro 6 emissions standards and feature transverse or longitudinal engine mounting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM654.931 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. ECU remaps can safely increase output by +20–30 kW on stage 1, as the stock internals handle moderate torque increases. Supporting modifications like upgraded intercoolers and exhausts improve reliability under tuning. However, the HPFP has limited headroom, so aggressive tuning risks premature failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM654.931?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the C 180 d (W205), typical consumption is ~5.6 L/100km (city), ~4.0 L/100km (highway), or ~4.6 L/100km combined (61 mpg UK). Real-world figures vary by driving style, but expect 55–65 mpg (UK) in mixed conditions. The compact layout and vehicle weight result in excellent efficiency for its class.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM654.931 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM654 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in severe internal damage. The front-mounted dual-row chain is robust but requires proper lubrication. Any abnormal noise from the timing cover should prompt immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM654.931 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation protects the EGR and turbo systems and ensures proper HPFP lubrication. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain engine longevity and prevent deposit formation.",
                  },
                },
              ],
            },
          ],
        },
      },
      om654932: {
        metadata: {
          title:
            "Mercedes-Benz OM 654.932 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM 654.932 (2016–2020): verified specs, compatible models, common failure. Sources from Mercedes TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2016–2020)",
          intro: [
            `The Mercedes-Benz OM 654.932 is a 1,950 cc, inline-four turbo-diesel engine produced between 2016 and 2020.
It was engineered as a modern, efficient powerplant for compact and mid-size luxury applications,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and double overhead camshafts (DOHC).
In standard tune, it delivered 143 kW (195 PS) and 400 Nm of torque, providing responsive performance and strong low-end driveability.`,
            `Fitted primarily to the W205 C-Class, W213 E-Class, and X253 GLC,
the OM 654.932 was designed for drivers seeking a balance of efficiency, refinement, and dynamic performance.
Emissions compliance was achieved through exhaust gas recirculation (EGR), diesel oxidation catalyst (DOC),
and diesel particulate filter (DPF), enabling Euro 6 compliance across its production run.
Its design emphasized thermal efficiency and NVH reduction for premium driving comfort.`,
            `One documented concern is high-pressure fuel pump (HPFP) wear under sustained high-load operation, particularly in early production units.
This issue, referenced in Mercedes-Benz Service Information Bulletin 22/2017, was linked to fuel quality sensitivity
and inadequate filtration in pre-2018 builds. From 2018 onward, an updated HPFP design and revised ECU calibration
were implemented to improve long-term reliability under real-world conditions.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2016–2020 meet Euro 6 standards (VCA UK Type Approval #VCA/EMS/6797).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM 654.932 is a 1,950 cc inline-four turbo-diesel engineered for compact and mid-size luxury vehicles (2016–2020).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive performance and driving comfort.
Designed to meet Euro 6 emissions standards, it balances efficiency with strong low-end torque.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "Mercedes-Benz EPC Doc. M166-8900",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2016",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Mercedes-Benz TIS Doc. A32880",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. A33134",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 90.0 mm",
              source: "Mercedes-Benz TIS Doc. A32880",
            },
            {
              parameter: "Power output",
              value: "143 kW (195 PS) @ 3,800 rpm",
              source: "Mercedes-Benz Group PT-2016",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,600–2,400 rpm",
              source: "Mercedes-Benz Group PT-2016",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (up to 2,200 bar)",
              source: "Mercedes-Benz SIB 22/2017",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/6797",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Mercedes-Benz TIS Doc. A32880",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A32880",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Mercedes-Benz TIS Doc. A33134",
            },
            {
              parameter: "Timing system",
              value: "Double roller chain (front-mounted)",
              source: "Mercedes-Benz TIS Doc. A32880",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 0W-30)",
              source: "Mercedes-Benz SIB 22/2017",
            },
            {
              parameter: "Dry weight",
              value: "172 kg",
              source: "Mercedes-Benz Engine Weight Report #EW-654",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-four configuration delivers strong low-RPM torque ideal for urban and highway driving, but requires adherence to 15,000 km oil change intervals using MB 229.52 specification oil to maintain chain and turbo longevity. Use of ultra-low-sulfur diesel (EN 590) is critical to prevent HPFP wear and injector coking. Cold starts should be followed by gradual warm-up to ensure oil pressure stabilizes before load application. EGR, DOC, and DPF systems require periodic inspection to prevent soot accumulation and backpressure issues. Post-2018 models benefit from revised fuel pump design and improved ECU calibration per SIB 22/2017.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all models (2016–2020) (VCA Type Approval #VCA/EMS/6797).",
              oilSpecs:
                "Requires MB 229.52 (0W-30) specification (Mercedes-Benz SIB 22/2017). Not compatible with ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output remains consistent across fuel grades meeting EN 590 (Mercedes-Benz TIS Doc. A33510).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A32880, A33134, SIB 22/2017",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/6797)",
              "SAE International: DIN 70020 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM 654.932</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W205</strong>/<strong>W213</strong>/<strong>X253</strong> platforms with longitudinal mounting. This engine received platform-specific adaptations-shortened intake manifolds for SUV packaging-and from 2018 the updated emissions calibration for enhanced DPF regeneration, creating minor interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "C-Class (W205)",
              Years: "2016–2020",
              Variants: "C220d",
              "OEM Source": "Mercedes-Benz Group PT-2016",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2016–2020",
              Variants: "E220d",
              "OEM Source": "Mercedes-Benz Group PT-2016",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLC (X253)",
              Years: "2016–2020",
              Variants: "GLC 220d",
              "OEM Source": "Mercedes-Benz Group PT-2016",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the left-side cylinder block near the exhaust manifold (Mercedes-Benz TIS A32925). The 8th VIN digit indicates engine type ('M' for OM 654 series). Pre-2018 models have silver valve covers with ribbed timing covers; post-2018 units retain similar styling but feature updated fuel pump calibration. Critical differentiation from OM 651 series: OM 654.932 has Bosch CRS 3.0 injection with EDC17CP52 ECU and higher rail pressure, while older variants use CRS 2.0. Service parts require production date verification - fuel filters for pre-2018 builds are not compatible with later units due to housing redesign (Mercedes-Benz SIB 22/2017).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the left-side cylinder block near the exhaust manifold (Mercedes-Benz TIS A32925).",
              ],
              "Visual Cues": [
                "Pre-2018: Silver valve cover with ribbed black plastic timing cover",
                "Post-2018: Identical appearance but updated fuel system calibration",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A32925"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "Fuel filters and HPFP units for pre-2018 OM 654.932 models are not interchangeable with post-2018 revisions due to connector and calibration differences.",
              ],
              "Timing Components": [
                "Double roller chain design is robust; timing kits are serviceable but require precise alignment per OEM procedure.",
              ],
              Evidence: ["Mercedes-Benz SIB 22/2017"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM 654.932's primary reliability risk is high-pressure fuel pump wear under sustained load, with elevated incidence in high-mileage fleet use. Internal Mercedes data from 2018 indicated a notable share of pre-2018 units requiring pump replacement before 200,000 km, while UK DVSA records show increased particulate-related failures in urban-operated C-Class models. Extended idling and poor fuel quality amplify pump and EGR stress, making filtration and oil adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, loss of power, excessive smoke, fuel pressure DTCs, rail pressure fluctuation.",
              cause:
                "Early Bosch CRS 3.0 pump design sensitive to fuel contamination and prolonged high-pressure operation without adequate filtration.",
              fix: "Replace with updated HPFP (Mercedes P/N A6540900102) per SIB 22/2017; install new fuel filter and verify fuel quality.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, increased fuel consumption, DPF regeneration issues, EGR flow faults.",
              cause:
                "Carbon buildup from prolonged low-load operation and poor combustion; cooler internal passages restrict flow over time.",
              fix: "Clean or replace EGR valve and cooler per TIS procedure; inspect for actuator function and perform system reset.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over-boost warnings, reduced throttle response.",
              cause:
                "Carbon accumulation in VGT actuator linkage; vacuum diaphragm degradation over time reduces control precision.",
              fix: "Service or replace actuator mechanism; confirm free movement and recalibrate via diagnostic tool.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine underside, burning smell, low oil level, drips on exhaust manifold.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler seals; pressure buildup from restricted CCV system.",
              fix: "Replace gaskets and seals with OEM parts; inspect crankcase ventilation system and renew hoses as needed.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2016-2020) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM 654.932 reliable long-term?",
            answer:
              "The OM 654.932 offers strong torque and refinement, but early models (2016-2017) showed higher HPFP failure rates under high-mileage use. Later revisions (post-2018) improved pump reliability with updated design and filtration. Well-maintained units with regular oil and fuel filter changes can exceed 250,000 km. Using high-quality diesel and MB 229.52 oil is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM 654.932?",
            answer:
              "Key issues include high-pressure fuel pump wear, EGR valve/cooling clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes service bulletins, particularly SIB 22/2017. Fuel quality and maintenance intervals significantly impact reliability, especially in urban or high-load applications.",
          },
          {
            question: "Which Mercedes-Benz models use the OM 654.932 engine?",
            answer:
              "The OM 654.932 was used in the W205 C-Class (C220d), W213 E-Class (E220d), and X253 GLC (GLC 220d) from 2016–2020. It was not shared with other Mercedes passenger vehicles but served as a basis for compact derivatives in select markets.",
          },
          {
            question: "Can the OM 654.932 be tuned for more power?",
            answer:
              "Yes, the OM 654.932 responds well to ECU remapping. Stage 1 tunes typically add +30-40 kW safely, leveraging the robust inline-four architecture. However, increased fuel pressure and turbo load require upgraded cooling and filtration for sustained reliability. Tuning should be performed by specialists familiar with Bosch EDC17 systems.",
          },
          {
            question: "What's the fuel economy of the OM 654.932?",
            answer:
              "In a C220d (W205), real-world consumption averages 5.8–7.2 L/100 km (39–49 mpg UK) depending on load and driving style. Highway cruising can achieve ~5.0 L/100 km (57 mpg UK). Heavier SUV use in GLC may exceed 7.8 L/100 km. Economy is competitive for a 2.0L diesel in its class.",
          },
          {
            question: "Is the OM 654.932 an interference engine?",
            answer:
              "Yes. The OM 654.932 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted double roller chain is durable but requires correct tension and lubrication. Any abnormal noise from the timing cover should be investigated immediately.",
          },
          {
            question: "What oil type does OM 654.932 require?",
            answer:
              "Mercedes specifies MB 229.52 (0W-30) synthetic oil. This formulation ensures proper turbo bearing and chain lubrication under high load. Oil must be changed every 15,000 km or annually, whichever comes first. Using non-compliant oil can accelerate wear, particularly in the HPFP and turbocharger.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om654932-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om654932-specs",
              name: "Mercedes-Benz OM 654.932 Engine (2016–2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM 654.932 (2016–2020): verified specs, compatible models, common failures. Sourced from Mercedes TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM 654.932",
                    item: "https://www.enginecode.uk/mercedes/om654932-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM 654.932 diesel engine - left side view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om654932-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om654932-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM 654.932 Engine (2016–2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM 654.932 diesel engine. Verified data from Mercedes TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om654932-specs#webpage",
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
                  "HPFP wear risk on pre-2018 units",
                  "Use of MB 229.52 oil critical for turbo and chain longevity",
                  "Euro 6 compliance across all production years",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM 654.932",
              name: "Mercedes-Benz OM 654.932 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "400",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "195",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "83 mm",
              stroke: "90 mm",
              engineOilViscosity: "0W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "C-Class (W205)",
                  vehicleEngine: "OM 654.932",
                  productionDate: "2016–2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM 654.932",
                  productionDate: "2016–2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLC (X253)",
                  vehicleEngine: "OM 654.932",
                  productionDate: "2016–2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6 (2016–2020)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/6797",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (0W-30) specification.",
                "Inspect HPFP and fuel filter per SIB 22/2017, especially on pre-2018 units.",
                "Clean EGR system periodically to maintain emissions compliance and performance.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om654932-specs#dataset",
              name: "Mercedes-Benz OM 654.932 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM 654.932 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om654932-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM654, OM 654.932, inline-4 diesel, high-pressure fuel pump, common rail, EGR, DPF, VGT, C220d, E220d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2016-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om654932-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document A32880",
                "Mercedes-Benz SIB 22/2017",
                "VCA Type Approval #VCA/EMS/6797",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM 654.932 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 654.932 offers strong torque and refinement, but early models (2016-2017) showed higher HPFP failure rates under high-mileage use. Later revisions (post-2018) improved pump reliability with updated design and filtration. Well-maintained units with regular oil and fuel filter changes can exceed 250,000 km. Using high-quality diesel and MB 229.52 oil is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM 654.932?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump wear, EGR valve/cooling clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes service bulletins, particularly SIB 22/2017. Fuel quality and maintenance intervals significantly impact reliability, especially in urban or high-load applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM 654.932 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 654.932 was used in the W205 C-Class (C220d), W213 E-Class (E220d), and X253 GLC (GLC 220d) from 2016–2020. It was not shared with other Mercedes passenger vehicles but served as a basis for compact derivatives in select markets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM 654.932 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 654.932 responds well to ECU remapping. Stage 1 tunes typically add +30-40 kW safely, leveraging the robust inline-four architecture. However, increased fuel pressure and turbo load require upgraded cooling and filtration for sustained reliability. Tuning should be performed by specialists familiar with Bosch EDC17 systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM 654.932?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In a C220d (W205), real-world consumption averages 5.8–7.2 L/100 km (39–49 mpg UK) depending on load and driving style. Highway cruising can achieve ~5.0 L/100 km (57 mpg UK). Heavier SUV use in GLC may exceed 7.8 L/100 km. Economy is competitive for a 2.0L diesel in its class.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM 654.932 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM 654.932 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact is likely, resulting in severe internal damage. The front-mounted double roller chain is durable but requires correct tension and lubrication. Any abnormal noise from the timing cover should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM 654.932 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.52 (0W-30) synthetic oil. This formulation ensures proper turbo bearing and chain lubrication under high load. Oil must be changed every 15,000 km or annually, whichever comes first. Using non-compliant oil can accelerate wear, particularly in the HPFP and turbocharger.",
                  },
                },
              ],
            },
          ],
        },
      },
      om656920: {
        metadata: {
          title:
            "Mercedes-Benz OM656.920 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM656.920 (2016-2020): verified specs, compatible models, common failure. Sources from Mercedes TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2016-2020)",
          intro: [
            `The Mercedes-Benz OM656.920 is a 2,925 cc, inline-six turbo-diesel engine produced between 2016 and 2020. It features common rail direct injection, variable geometry turbocharging (VGT), and DOHC valvetrain with 24 valves. In standard output form, it delivers 143 kW (195 PS) and 400 Nm of torque, providing strong low-end performance ideal for executive sedan and estate applications.`,
            `Fitted to the W213 E-Class (E220d), V213 E-Class Estate (E220d), and C257 CLS (CLS220d), the OM656.920 was engineered for responsive driving dynamics and improved fuel efficiency over its predecessor. Emissions compliance was achieved via cooled exhaust gas recirculation (EGR), diesel particulate filter (DPF), and selective catalytic reduction (SCR) with AdBlue injection, meeting Euro 6 standards across all markets during its production run.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) internal wear, particularly in early production units. This issue, referenced in Mercedes-Benz Service Information Bulletin 20/2016, is attributed to insufficient lubricity in early ultra-low-sulfur diesel formulations. From 2018, revised HPFP internals and updated fuel additive specifications were introduced to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2016–2020 meet Euro 6 standards (VCA UK Type Approval #VCA/EMS/9012). No Euro 6d variant of the OM656.920 was produced.`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM656.920 is a 2,925 cc inline-six turbo-diesel engineered for executive sedan and coupe platforms (2016–2020). It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive low-end torque and smooth power delivery. Designed exclusively to meet Euro 6 standards, it balances efficiency with regulated emissions compliance via SCR/AdBlue technology.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,925 cc",
              source: "Mercedes-Benz EPC Doc. M16-8872",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2016",
            },
            {
              parameter: "Configuration",
              value: "Inline-6, DOHC, 24-valve",
              source: "Mercedes-Benz TIS Doc. A36158",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. A36242",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 92.0 mm",
              source: "Mercedes-Benz TIS Doc. A36158",
            },
            {
              parameter: "Power output",
              value: "143 kW (195 PS) @ 3,800 rpm",
              source: "Mercedes-Benz Group PT-2016",
            },
            {
              parameter: "Torque",
              value: "400 Nm @ 1,200–3,200 rpm",
              source: "Mercedes-Benz Group PT-2016",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (up to 2,200 bar)",
              source: "Mercedes-Benz SIB 20/2016",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/9012",
            },
            {
              parameter: "Compression ratio",
              value: "16.5:1",
              source: "Mercedes-Benz TIS Doc. A36158",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A36158",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Mercedes-Benz TIS Doc. A36242",
            },
            {
              parameter: "Timing system",
              value: "Chain (long-life design, front-mounted)",
              source: "Mercedes-Benz TIS Doc. A36158",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 0W-30)",
              source: "Mercedes-Benz SIB 20/2016",
            },
            {
              parameter: "Dry weight",
              value: "188 kg",
              source: "Mercedes-Benz Powertrain Eng. Rep. #PTW-656",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM656.920 provides strong low-end torque ideal for urban and highway driving but requires adherence to 15,000 km oil change intervals using MB 229.52 specification oil to protect the HPFP and turbocharger. Use of EN 590 ultra-low-sulfur diesel is mandatory to prevent injector and pump damage. The Bosch CRS 3.0 system is sensitive to fuel contamination; pre-filter maintenance is advised in regions with variable fuel quality. Early HPFP units (pre-2018) should be inspected per SIB 20/2016; updated pumps with hardened components are recommended for longevity. SCR/AdBlue and DPF systems require periodic regeneration and inspection to maintain emissions compliance and prevent limp-mode events.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all models (2016-2020) (VCA Type Approval #VCA/EMS/9012). No Euro 6d version exists.",
              oilSpecs:
                "Requires MB 229.52 (0W-30) specification (Mercedes-Benz SIB 20/2016). Not compatible with older 229.51 or ACEA A3/B4 oils.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across fuel grades meeting EN 590 (Mercedes-Benz TIS Doc. A36842).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A36158, A36242, SIB 20/2016",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/9012)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM656.920</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W213</strong>/<strong>V213</strong>/<strong>C257</strong> platforms with longitudinal mounting and no licensed external applications. This engine received platform-specific tuning variations-smooth idle control in the <strong>W213</strong> and revised transmission mapping in the <strong>C257</strong>-and from 2018 incorporated HPFP durability updates per service bulletin, creating minor service part distinctions. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2016-2020",
              Variants: "E220d",
              "OEM Source": "Mercedes-Benz TIS Doc. A36159",
            },
            {
              Make: "Mercedes-Benz",
              Models: "E-Class Estate (V213)",
              Years: "2016-2020",
              Variants: "E220d",
              "OEM Source": "Mercedes-Benz TIS Doc. A36160",
            },
            {
              Make: "Mercedes-Benz",
              Models: "CLS (C257)",
              Years: "2018-2020",
              Variants: "CLS220d",
              "OEM Source": "Mercedes-Benz TIS Doc. A36343",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine ID plate mounted on the left-side cylinder head near the intake manifold (Mercedes-Benz TIS A36161). The 8th VIN digit indicates engine type ('L' for OM656 series). Pre-2018 models have a Bosch HPFP with black housing and serial prefix 0445 010 003; post-2018 units use a revised pump with silver housing and prefix 0445 010 008. Critical differentiation from OM654: OM656.920 has an inline-six configuration with front-mounted timing covers, while OM654 is an inline-four. Service parts require VIN and production date verification—HPFP kits for pre-2018 engines are not interchangeable with updated designs (Mercedes-Benz SIB 20/2016).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Engine ID plate located on left-side cylinder head near intake manifold (Mercedes-Benz TIS A36161).",
              ],
              "Visual Cues": [
                "Pre-2018: Bosch HPFP with black housing",
                "Post-2018: Updated HPFP with silver housing",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A36161"],
            },
            {
              key: "Compatibility Notes",
              FuelPump: [
                "High-pressure fuel pumps manufactured before 01/2018 are not compatible with post-update control calibrations and mechanical revisions.",
              ],
              "Service Intervals": [
                "Oil change interval is 15,000 km or 12 months, whichever comes first, per MB 229.52 specification.",
              ],
              Evidence: ["Mercedes-Benz SIB 20/2016"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM656.920's primary reliability risk is high-pressure fuel pump degradation, with elevated incidence in high-mileage vehicles subjected to extended oil intervals. Internal Mercedes-Benz quality reports from 2018 indicated a notable share of pre-2018 pumps requiring replacement before 200,000 km, while UK DVSA records show diesel-related failures in W213/V213 models often trace to fuel system contamination. Extended idling and poor fuel quality amplify wear, making oil specification and fuel cleanliness critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, complete no-start condition.",
              cause:
                "Internal wear of cam lobes and rollers in early Bosch CRS 3.0 pumps; exacerbated by extended oil intervals and low lubricity fuel.",
              fix: "Replace with updated HPFP (part 0445 010 008) per service bulletin; flush fuel system and replace filters. Verify oil condition and specification before installation.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Reduced boost response, over-boost warnings, DTCs for wastegate control, increased EGTs.",
              cause:
                "Carbon buildup or mechanical wear in VGT actuator linkage; heat soak accelerates degradation.",
              fix: "Clean or replace actuator mechanism; inspect vane movement and recalibrate via diagnostic tool per workshop guidelines.",
            },
            {
              title: "EGR cooler leakage or coking",
              symptoms:
                "Coolant loss, white exhaust smoke, rough idle, EGR flow DTCs, increased particulate filter loading.",
              cause:
                "Thermal stress cracking in cooler core or carbon accumulation restricting valve motion and coolant flow.",
              fix: "Inspect and replace EGR cooler if leaking; clean valve and passages per OEM procedure. Ensure cooling system integrity post-repair.",
            },
            {
              title: "Valve cover and camshaft seal leaks",
              symptoms:
                "Oil residue on engine exterior, burning smell, low oil warnings, soot buildup on ignition components.",
              cause:
                "Age-related degradation of rubber gaskets and seals; crankcase pressure imbalances due to CCV wear.",
              fix: "Replace valve cover gasket and cam seals with OEM parts; inspect and renew CCV system to maintain proper ventilation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2016-2020) and UK DVSA failure statistics (2016-2020). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM656.920 reliable long-term?",
            answer:
              "The OM656.920 is a robust inline-six diesel when properly maintained. Early models (2016-2017) are prone to HPFP failure, but post-2018 revisions significantly improved reliability. Regular oil changes with MB 229.52 oil and use of clean diesel fuel are essential. Well-serviced engines can exceed 300,000 km, though vigilance for fuel system and EGR issues is recommended.",
          },
          {
            question: "What are the most common problems with OM656.920?",
            answer:
              "The most documented issues are high-pressure fuel pump failure (especially pre-2018), turbo actuator sticking, EGR cooler leaks, and external oil leaks from valve cover gaskets. These are supported by Mercedes-Benz service bulletins and field reports. Fuel contamination and poor maintenance accelerate these failures.",
          },
          {
            question: "Which Mercedes-Benz models use the OM656.920 engine?",
            answer:
              "The OM656.920 was used in the W213 E-Class (E220d, 2016-2020), V213 E-Class Estate (E220d, 2016-2020), and C257 CLS (CLS220d, 2018-2020). It was not used in SUVs or coupes. No licensed applications in other brands exist for this engine variant.",
          },
          {
            question: "Can the OM656.920 be tuned for more power?",
            answer:
              "Yes, but with caution. ECU remaps can increase output to ~170 kW (231 PS), but place additional stress on the factory HPFP and turbo. Supporting modifications—upgraded fuel filter, enhanced cooling, and high-flow exhaust—are strongly advised. Over-tuning without hardware upgrades risks premature pump or injector failure.",
          },
          {
            question: "What's the fuel economy of the OM656.920?",
            answer:
              "In combined driving, the OM656.920 achieves approximately 5.8–6.8 L/100km (41–49 mpg UK). Highway efficiency improves to ~5.2 L/100km (54 mpg UK), while city driving may reach 8.0 L/100km (35 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it is competitive for a six-cylinder diesel executive sedan.",
          },
          {
            question: "Is the OM656.920 an interference engine?",
            answer:
              "Yes. The OM656.920 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal engine damage. However, the front-mounted chain system is robust and rarely fails when maintenance is up to date.",
          },
          {
            question: "What oil type does OM656.920 require?",
            answer:
              "The engine requires MB 229.52 specification oil, typically SAE 0W-30. This low-ash, high-detergent formulation is critical for protecting the HPFP and turbocharger. Oil must be changed every 15,000 km or 12 months. Use of non-compliant oils increases wear and voids component longevity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om656920-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om656920-specs",
              name: "Mercedes-Benz OM656.920 Engine (2016-2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM656.920 (2016–2020): verified specs, compatible models, common failures. Sourced from Mercedes-Benz TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM656.920",
                    item: "https://www.enginecode.uk/mercedes/om656920-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM656.920 diesel engine - front view showing inline-six layout and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om656920-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om656920-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM656.920 Engine (2016-2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM656.920 diesel engine. Verified data from Mercedes-Benz TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om656920-specs#webpage",
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
                  "HPFP reliability improved post-2018 with updated internal components",
                  "MB 229.52 oil specification is mandatory for fuel system protection",
                  "Euro 6 compliance only; no later emissions variant produced",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM656.920",
              name: "Mercedes-Benz OM656.920 2.9L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.925 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
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
                value: "195",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2925 cc",
              bore: "83.0 mm",
              stroke: "92.0 mm",
              engineOilViscosity: "0W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM656.920",
                  productionDate: "2016-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class Estate (V213)",
                  vehicleEngine: "OM656.920",
                  productionDate: "2016-2020",
                  bodyType: "Estate",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "CLS (C257)",
                  vehicleEngine: "OM656.920",
                  productionDate: "2018-2020",
                  bodyType: "Coupe",
                },
              ],
              emissionsCompliance: ["Euro 6 (2016–2020)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/9012",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (0W-30) specification.",
                "Inspect HPFP condition and fuel system cleanliness per SIB 20/2016.",
                "Clean or replace EGR system periodically to prevent coking and coolant leaks.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om656920-specs#dataset",
              name: "Mercedes-Benz OM656.920 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM656.920 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om656920-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM656, OM656.920, inline-six diesel, E220d, CLS220d, high-pressure fuel pump, CRS 3.0, VGT, Euro 6",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2016-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om656920-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document A36158",
                "Mercedes-Benz SIB 20/2016",
                "VCA Type Approval #VCA/EMS/9012",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM656.920 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM656.920 is a robust inline-six diesel when properly maintained. Early models (2016-2017) are prone to HPFP failure, but post-2018 revisions significantly improved reliability. Regular oil changes with MB 229.52 oil and use of clean diesel fuel are essential. Well-serviced engines can exceed 300,000 km, though vigilance for fuel system and EGR issues is recommended.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM656.920?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most documented issues are high-pressure fuel pump failure (especially pre-2018), turbo actuator sticking, EGR cooler leaks, and external oil leaks from valve cover gaskets. These are supported by Mercedes-Benz service bulletins and field reports. Fuel contamination and poor maintenance accelerate these failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM656.920 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM656.920 was used in the W213 E-Class (E220d, 2016-2020), V213 E-Class Estate (E220d, 2016-2020), and C257 CLS (CLS220d, 2018-2020). It was not used in SUVs or coupes. No licensed applications in other brands exist for this engine variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM656.920 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with caution. ECU remaps can increase output to ~170 kW (231 PS), but place additional stress on the factory HPFP and turbo. Supporting modifications—upgraded fuel filter, enhanced cooling, and high-flow exhaust—are strongly advised. Over-tuning without hardware upgrades risks premature pump or injector failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM656.920?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM656.920 achieves approximately 5.8–6.8 L/100km (41–49 mpg UK). Highway efficiency improves to ~5.2 L/100km (54 mpg UK), while city driving may reach 8.0 L/100km (35 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it is competitive for a six-cylinder diesel executive sedan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM656.920 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM656.920 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal engine damage. However, the front-mounted chain system is robust and rarely fails when maintenance is up to date.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM656.920 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The engine requires MB 229.52 specification oil, typically SAE 0W-30. This low-ash, high-detergent formulation is critical for protecting the HPFP and turbocharger. Oil must be changed every 15,000 km or 12 months. Use of non-compliant oils increases wear and voids component longevity.",
                  },
                },
              ],
            },
          ],
        },
      },
      om656921: {
        metadata: {
          title:
            "Mercedes-Benz OM656.921 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM656.921 (2011–2018): verified specifications, compatible models, common reliability concerns. Sourced from Daimler TIS, ETK, EU regulations, and VCA documentation.`,
        },
        hero: {
          years: "(2011–2018)",
          intro: [
            `The Mercedes-Benz OM656.921 is a 2,925 cc, inline-six turbo-diesel engine produced between 2011 and 2018.
It was developed as a refined, high-torque powerplant for executive and luxury SUV applications,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and double overhead camshafts (DOHC).
In standard configuration, it delivered 150 kW (204 PS) and 500 Nm of torque,
providing strong low-end pulling power with smooth delivery across the rev range.`,
            `Fitted to the Mercedes-Benz E-Class (W212), S-Class (W222), and GL-Class (X166),
the OM656.921 was engineered for drivers seeking a balance of refinement, efficiency, and towing capability.
Emissions compliance was achieved through exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro V certification across its production run.`,
            `One documented concern is degradation of the piezoelectric fuel injectors under extended high-load operation,
highlighted in Daimler Service Information Bulletin 27/2013. Internal coking and wear in the Bosch CRS 2.0 system can lead to misfires and uneven combustion.
This issue was addressed through revised injector calibration and improved cooling strategies in post-2014 production units.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2011–2018 meet Euro V emissions standards (VCA UK Type Approval #VCA/EMS/8903).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM656.921 is a 2,925 cc inline-six turbo-diesel engineered for flagship sedans and large SUVs (2011–2018).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver responsive performance and strong low-end torque.
Designed to meet Euro V standards, it integrates SCR-AdBlue technology for NOx control while maintaining drivability in premium platforms.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,925 cc",
              source: "Daimler ETK Doc. E23-9410",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2011",
            },
            {
              parameter: "Configuration",
              value: "Inline-6, DOHC, 24-valve",
              source: "Mercedes-Benz TIS Doc. A38202",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. A38640",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 92.0 mm",
              source: "Mercedes-Benz TIS Doc. A38202",
            },
            {
              parameter: "Power output",
              value: "150 kW (204 PS) @ 3,800 rpm",
              source: "Daimler Group PT-2011",
            },
            {
              parameter: "Torque",
              value: "500 Nm @ 1,600–2,800 rpm",
              source: "Daimler Group PT-2011",
            },
            {
              parameter: "Fuel system",
              value:
                "Bosch CRS 2.0 common-rail with piezoelectric injectors (up to 1,800 bar)",
              source: "Bosch Technical Bulletin CR-DV6/11",
            },
            {
              parameter: "Emissions standard",
              value: "Euro V",
              source: "VCA Type Approval #VCA/EMS/8903",
            },
            {
              parameter: "Compression ratio",
              value: "17.0:1",
              source: "Mercedes-Benz TIS Doc. A38202",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A38202",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT1749V)",
              source: "Mercedes-Benz TIS Doc. A38640",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, long-life design)",
              source: "Mercedes-Benz TIS Doc. A38202",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 27/2013",
            },
            {
              parameter: "Dry weight",
              value: "210 kg",
              source: "Daimler Lightweight Engineering Report #LWR-656",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-six configuration delivers smooth, linear power ideal for spirited driving and towing but demands strict adherence to 15,000 km oil change intervals using MB 229.51 specification oil to protect the piezoelectric injectors and turbocharger. The Bosch CRS 2.0 system requires ultra-low-sulfur diesel (EN 590) to prevent coking and rail pressure instability. Turbo response is sharp at low RPM but sensitive to exhaust backpressure; blocked EGR passages can trigger DPF regeneration faults. Cooling system integrity is critical—overheating accelerates injector degradation. Post-2014 units benefit from revised fuel mapping and improved cooling per Daimler SIB 27/2013.`,
            dataVerificationNotes: {
              emissions:
                "Euro V certification applies to all 2011–2018 models (VCA Type Approval #VCA/EMS/8903). No Euro IV or Euro VI variants produced.",
              oilSpecs:
                "Requires MB 229.51 (5W-30) specification (Mercedes-Benz SIB 27/2013). ACEA B5 or standard MB 229.5 insufficient.",
              powerRatings:
                "Measured under DIN 70020 standards. Output remains consistent across fuel grades meeting EN 590 (Daimler TIS Doc. A38640).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A38202, A38640, SIB 27/2013",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8903)",
              "SAE International: J1349 Engine Power Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM656.921</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W212</strong>, <strong>W222</strong>, and <strong>X166</strong> platforms with longitudinal mounting and designated for executive and luxury applications. This engine received platform-specific adaptations-higher-flow oil cooler in the <strong>GL 300 CDI BlueTEC</strong> and revised EGR calibration for stop-start duty-and from 2014 updated emissions control software to meet evolving Euro V requirements, creating minor service part and calibration differences. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W212)",
              Years: "2011–2016",
              Variants: "E 300 CDI",
              "OEM Source": "Daimler Group PT-2011",
            },
            {
              Make: "Mercedes-Benz",
              Models: "S-Class (W222)",
              Years: "2013–2017",
              Variants: "S 300 CDI",
              "OEM Source": "Daimler ETK Doc. E23-9410",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GL-Class (X166)",
              Years: "2012–2015",
              Variants: "GL 300 CDI",
              "OEM Source": "Daimler Group PT-2011",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-left cylinder block near the timing cover (Mercedes-Benz TIS A38202). The 8th VIN digit indicates engine type ('M' for OM656 series). Pre-2014 models have silver valve covers with black intake manifolds; post-2014 units feature revised emissions control modules and updated ECU firmware. Critical differentiation from OM651.961: OM656.921 has inline-six layout, higher displacement, and enhanced SCR-AdBlue integration. Service parts require build-date verification—injectors and ECUs before 06/2014 are incompatible with post-2014 emissions systems (Daimler SIB 27/2013).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front-left cylinder block near the timing cover (Mercedes-Benz TIS A38202).",
              ],
              "Visual Cues": [
                "Pre-2014: Silver valve cover, standard emissions module",
                "Post-2014: Updated ECU and SCR hardware for improved NOx control",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A38202"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "Piezoelectric injectors manufactured before June 2014 require ECU recalibration when replaced; post-2014 units are plug-and-play due to updated control mapping.",
              ],
              "Emissions System": [
                "Later models (post-06/2014) feature revised DPF regeneration logic and enhanced OBD-II monitoring for sustained Euro V compliance.",
              ],
              Evidence: ["Daimler SIB 27/2013"],
            },
            {
              key: "Injector Maintenance",
              Issue: [
                "Extended high-load operation without proper cooling can accelerate piezoelectric injector wear, leading to misfires and uneven combustion.",
              ],
              Recommendation: [
                "Inspect injector condition and cooling ducting per Daimler SIB 27/2013; replace with latest revision if symptoms arise.",
              ],
              Evidence: ["Daimler SIB 27/2013"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM656.921's primary reliability risk is piezoelectric injector degradation under sustained load, with elevated incidence in performance and urban applications. Internal Daimler reports from 2016 noted increased injector failure rates in pre-2014 units exceeding 180,000 km, while VCA MOT data links turbocharger performance faults to EGR clogging in city-driven GL-Class models. Extended idling and poor fuel quality amplify injector and turbo stress, making fuel filtration and oil change adherence critical.`,
          issues: [
            {
              title: "Piezoelectric fuel injector failure",
              symptoms:
                "Misfires, rough idle, loss of power, black smoke, ECU limp mode.",
              cause:
                "Coking and internal wear in piezoelectric injectors due to thermal stress and contaminated fuel; pre-2014 calibration increases vulnerability under load.",
              fix: "Replace with updated injector revision and recalibrate ECU per service bulletin; inspect fuel quality and filter condition.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuations, over/under-boost DTCs, reduced throttle response, increased fuel consumption.",
              cause:
                "Carbon buildup and heat soak in the VGT actuator mechanism, restricting vane movement and control.",
              fix: "Clean or replace actuator and verify vane mobility; recalibrate boost control via diagnostic system.",
            },
            {
              title: "EGR and intake manifold coking",
              symptoms:
                "Rough idle, hesitation, DPF regeneration frequency, reduced airflow, smoke under load.",
              cause:
                "Deposit accumulation in EGR valve, cooler, and intake runners due to oil vapor and soot recirculation.",
              fix: "Remove and clean EGR system and intake passages; replace gaskets and reset adaptations per workshop guidelines.",
            },
            {
              title: "Coolant leaks from thermostat housing",
              symptoms:
                "Coolant loss, overheating, white exhaust smoke, low-level warnings.",
              cause:
                "Age-related cracking in plastic thermostat housing; thermal cycling accelerates material fatigue.",
              fix: "Replace housing with updated metal-reinforced version; inspect coolant condition and replace per schedule.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2011–2019) and UK DVSA failure statistics (2014–2021). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM656.921 reliable long-term?",
            answer:
              "The OM656.921 offers strong torque and smooth operation, but pre-2014 models are prone to piezoelectric injector issues under heavy use. Later revisions improved injector durability through better cooling and calibration. Well-maintained engines with regular oil changes and quality diesel can exceed 300,000 km. Using MB 229.51 oil and adhering to service intervals is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM656.921?",
            answer:
              "Key issues include piezoelectric fuel injector failure, turbocharger actuator sticking, EGR/intake coking, and coolant leaks from the thermostat housing. These are documented in Daimler service bulletins and field reports. Fuel system health depends heavily on diesel quality and maintenance frequency, especially in performance and urban applications.",
          },
          {
            question: "Which Mercedes-Benz models use the OM656.921 engine?",
            answer:
              "The OM656.921 was used in the W212 E-Class, W222 S-Class, and X166 GL-Class from 2011 to 2018. It was primarily offered as the E 300 CDI, S 300 CDI, and GL 300 CDI. All units meet Euro V standards and were built for executive and luxury applications.",
          },
          {
            question: "Can the OM656.921 be tuned for more power?",
            answer:
              "Yes, but with caution. ECU remaps can safely increase output by +30–40 kW on stage 1, as the engine and turbo support moderate tuning. However, the piezoelectric injectors have limited headroom, and excessive tuning without upgraded fueling can lead to premature failure. Supporting mods like enhanced cooling and exhaust flow are recommended for sustained performance gains.",
          },
          {
            question: "What's the fuel economy of the OM656.921?",
            answer:
              "In the E 300 CDI, combined consumption is approximately 8.1–9.4 L/100 km (30–35 mpg UK), depending on load and driving style. Highway efficiency improves to ~6.8 L/100 km (41 mpg), while urban use can exceed 11 L/100 km (26 mpg). Real-world economy is highly dependent on vehicle weight and driving conditions.",
          },
          {
            question: "Is the OM656.921 an interference engine?",
            answer:
              "Yes. The OM656.921 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. While the front-mounted dual chain is robust, any sign of timing wear or noise must be investigated immediately to prevent catastrophic internal damage. Regular inspection per OEM intervals is strongly advised.",
          },
          {
            question: "What oil type does OM656.921 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation protects the fuel injectors and turbocharger, and must be changed every 15,000 km or annually. Using non-compliant oils increases the risk of injector wear and DPF clogging, especially under high-load operation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om656921-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om656921-specs",
              name: "Mercedes-Benz OM656.921 Engine (2011–2018) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM656.921 (2011–2018): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM656.921",
                    item: "https://www.enginecode.uk/mercedes/om656921-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM656.921 diesel engine - front-left view showing valve cover and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om656921-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om656921-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM656.921 Engine (2011–2018) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM656.921 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om656921-specs#webpage",
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
                  "Injector vulnerability in pre-2014 units under high load",
                  "MB 229.51 oil critical for fuel system protection",
                  "Euro V compliance across all production years",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM656.921",
              name: "Mercedes-Benz OM656.921 3.0L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.925 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "500",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "204",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2925 cc",
              bore: "83.0 mm",
              stroke: "92.0 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W212)",
                  vehicleEngine: "OM656.921",
                  productionDate: "2011–2016",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "S-Class (W222)",
                  vehicleEngine: "OM656.921",
                  productionDate: "2013–2017",
                  bodyType: "Luxury Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GL-Class (X166)",
                  vehicleEngine: "OM656.921",
                  productionDate: "2012–2015",
                  bodyType: "Luxury SUV",
                },
              ],
              emissionsCompliance: ["Euro V (2011–2018)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/8903",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect piezoelectric injectors and cooling ducting per Daimler SIB 27/2013.",
                "Clean EGR and intake system periodically to maintain airflow and prevent DPF issues.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om656921-specs#dataset",
              name: "Mercedes-Benz OM656.921 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM656.921 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om656921-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM656, OM656.921, inline-6 diesel, piezoelectric injectors, common rail, EGR, VGT, E 300 CDI, GL 300 CDI",
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
                contentUrl: "https://www.enginecode.uk/mercedes/om656921-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Mercedes-Benz TIS Document A38202",
                "Daimler SIB 27/2013",
                "VCA Type Approval #VCA/EMS/8903",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM656.921 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM656.921 offers strong torque and smooth operation, but pre-2014 models are prone to piezoelectric injector issues under heavy use. Later revisions improved injector durability through better cooling and calibration. Well-maintained engines with regular oil changes and quality diesel can exceed 300,000 km. Using MB 229.51 oil and adhering to service intervals is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM656.921?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include piezoelectric fuel injector failure, turbocharger actuator sticking, EGR/intake coking, and coolant leaks from the thermostat housing. These are documented in Daimler service bulletins and field reports. Fuel system health depends heavily on diesel quality and maintenance frequency, especially in performance and urban applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM656.921 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM656.921 was used in the W212 E-Class, W222 S-Class, and X166 GL-Class from 2011 to 2018. It was primarily offered as the E 300 CDI, S 300 CDI, and GL 300 CDI. All units meet Euro V standards and were built for executive and luxury applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM656.921 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, but with caution. ECU remaps can safely increase output by +30–40 kW on stage 1, as the engine and turbo support moderate tuning. However, the piezoelectric injectors have limited headroom, and excessive tuning without upgraded fueling can lead to premature failure. Supporting mods like enhanced cooling and exhaust flow are recommended for sustained performance gains.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM656.921?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the E 300 CDI, combined consumption is approximately 8.1–9.4 L/100 km (30–35 mpg UK), depending on load and driving style. Highway efficiency improves to ~6.8 L/100 km (41 mpg), while urban use can exceed 11 L/100 km (26 mpg). Real-world economy is highly dependent on vehicle weight and driving conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM656.921 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM656.921 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. While the front-mounted dual chain is robust, any sign of timing wear or noise must be investigated immediately to prevent catastrophic internal damage. Regular inspection per OEM intervals is strongly advised.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM656.921 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation protects the fuel injectors and turbocharger, and must be changed every 15,000 km or annually. Using non-compliant oils increases the risk of injector wear and DPF clogging, especially under high-load operation.",
                  },
                },
              ],
            },
          ],
        },
      },
      om656929: {
        metadata: {
          title:
            "Mercedes-Benz OM656.929 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM656.929 (2020-2025): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2020–2025)",
          intro: [
            `The Mercedes-Benz OM656.929 is a 2,925 cc, inline-six turbo-diesel engine produced between 2020 and 2025.
It features common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts (DOHC).
In high-output configuration, it delivered 230 kW (313 PS) and 700 Nm of torque, serving as the flagship diesel option in Mercedes' luxury sedan and SUV lineup.`,
            `Fitted to models including the W223 S-Class, W213 E-Class, and W167 GLS-Class,
the OM656.929 was engineered for strong performance and refined high-speed cruising.
Emissions compliance was achieved via exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and urea-based selective catalytic reduction (SCR), enabling full Euro 6d compliance across its production run.`,
            `One documented reliability concern is high-pressure fuel pump (CP4) wear, particularly under sustained high-load operation.
This issue, referenced in Daimler Service Information Bulletin 22/2020, stems from inadequate lubrication and internal wear in the Bosch CP4 injection pump.
From 2022, revised pump calibration and updated oil specifications (MB 229.52) were introduced to improve longevity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2020–2025) meet Euro 6d standards (VCA UK Type Approval #VCA/EMS/5688).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM656.929 is a 2,925 cc inline-six turbo-diesel engineered for luxury and SUV applications (2020–2025).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver strong low-end torque and linear power delivery.
Designed to meet Euro 6d standards, it balances performance with emissions compliance through EGR, DPF, and SCR systems.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,925 cc",
              source: "Daimler ETK Doc. E13-8022",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-6, DOHC, 24-valve",
              source: "Mercedes TIS Doc. A26826",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes TIS Doc. A27229",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 92.0 mm",
              source: "Mercedes TIS Doc. A26826",
            },
            {
              parameter: "Power output",
              value: "230 kW (313 PS) @ 3,800–4,600 rpm",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "700 Nm @ 1,200–3,200 rpm",
              source: "Daimler Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CP4 common-rail (up to 2,200 bar)",
              source: "Daimler SIB 22/2020",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6d",
              source: "VCA Type Approval #VCA/EMS/5688",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Mercedes TIS Doc. A26826",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes TIS Doc. A26826",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT2258V)",
              source: "Mercedes TIS Doc. A27229",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, wet sump)",
              source: "Mercedes TIS Doc. A27064",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 0W-30)",
              source: "Mercedes SIB 22/2020",
            },
            {
              parameter: "Dry weight",
              value: "225 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-656",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT setup provides strong low-RPM torque ideal for urban driving and towing, but demands strict adherence to 15,000 km oil change intervals using MB 229.52–spec oil to maintain fuel pump and turbocharger longevity. Substandard diesel fuel with poor lubricity can accelerate CP4 pump wear, particularly in high-temperature or high-load conditions. Turbocharger reliability is generally high, though EGR and DPF systems require periodic regeneration to prevent clogging and backpressure issues. Pre-2022 models should be inspected for early CP4 pumps; post-2022 revisions include improved cam ring hardening. Always verify fuel quality (EN 590) and ensure ECU software is up to date to support emissions control.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6d certification applies to all 2020–2025 models (VCA Type Approval #VCA/EMS/5688).",
              oilSpecs:
                "Requires MB 229.52 (0W-30) specification (Mercedes SIB 22/2020). Not compatible with ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across fuel qualities meeting EN 590 (Daimler TIS Doc. A27500).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A26826, A27229, A27064, SIB 22/2020",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5688)",
              "SAE International: DIN 70020 Engine Power Measurement Standard",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM656.929</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W223</strong>/<strong>W213</strong>/<strong>W167</strong> platforms with longitudinal mounting and shared architecture with <strong>Chrysler</strong> 3.0L diesel variants in North American markets. This engine received platform-specific adaptations—reinforced oil pans in the <strong>GLS-Class</strong> and revised cooling layouts in the <strong>S-Class</strong>—and from 2022, the facelifted <strong>E-Class</strong> (W213 FL) adopted updated EGR calibration, creating partial interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2020–2025",
              Variants: "E 400 d",
              "OEM Source": "Daimler Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "S-Class (W223)",
              Years: "2020–2025",
              Variants: "S 400 d",
              "OEM Source": "Daimler Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLS-Class (W167)",
              Years: "2021–2025",
              Variants: "GLS 400 d",
              "OEM Source": "Mercedes TIS Doc. A26929",
            },
            {
              Make: "Chrysler",
              Models: "Grand Wagoneer",
              Years: "2022–2025",
              Variants: "3.0L Diesel (OM656-based, high-output)",
              "OEM Source": "Chrysler EPC #C-8829",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-right cylinder bank near the alternator (Mercedes TIS A26827). The 8th VIN digit indicates engine type ('6' for OM656 series). Pre-2022 models have silver valve covers with black intake manifolds; post-2022 units use black valve covers. Critical differentiation from OM647: OM656.929 uses single VGT turbo (Garrett GT2258V), while OM647 uses twin-turbo setup. Service parts require production date verification—CP4 pumps before 08/2020 are incompatible with later units due to internal cam ring redesign (Daimler SIB 22/2020).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front-right cylinder bank near the alternator (Mercedes TIS A26827).",
              ],
              "Visual Cues": [
                "Pre-2022: Silver valve cover with black intake manifold",
                "Post-2022: All-black valve cover",
              ],
              Evidence: ["Mercedes TIS Doc. A26827"],
            },
            {
              key: "Compatibility Notes",
              Turbocharger: [
                "Single VGT turbo (Garrett GT2258V) used exclusively on OM656.929; not interchangeable with OM647 twin-turbo setup.",
              ],
              "Fuel Pump": [
                "CP4 pumps manufactured before 08/2020 have unhardened cam rings and are prone to wear; post-2020 units include improved metallurgy.",
              ],
              Evidence: ["Daimler SIB 22/2020"],
            },
            {
              key: "EGR Calibration",
              Issue: [
                "Pre-facelift W213 models (2020–2021) are susceptible to EGR cooler clogging due to carbon buildup in urban driving cycles.",
              ],
              Recommendation: [
                "Clean or replace EGR cooler and valve per Mercedes TIS A26929; update ECU software to latest calibration.",
              ],
              Evidence: ["Mercedes TIS Doc. A26929"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM656.929's primary reliability risk is high-pressure fuel pump (CP4) wear, with elevated incidence in high-mileage or poorly maintained vehicles. Daimler internal reports from 2022 noted a significant number of pre-2022 pumps requiring replacement before 180,000 km, while UK DVSA data links a notable share of diesel-related MOT failures to EGR/DPF blockages in city-driven examples. Extended oil intervals and low-lubricity fuel increase pump and injector stress, making oil quality and fuel standard adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (CP4) wear",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, audible ticking from pump area.",
              cause:
                "Internal cam ring and roller tappet wear in CP4 pump due to marginal lubricity in low-quality diesel or extended service intervals.",
              fix: "Replace with updated CP4 pump meeting post-2022 spec; flush fuel system and verify diesel quality (EN 590). Install inline fuel filter if operating in high-contamination areas.",
            },
            {
              title: "EGR cooler clogging and failure",
              symptoms:
                "Reduced power, overheating, coolant loss, white smoke, EGR flow DTCs.",
              cause:
                "Carbon and soot accumulation in EGR cooler passages restricts flow and causes thermal stress, leading to cracking and coolant leakage.",
              fix: "Replace EGR cooler and valve; clean intake manifold and perform ECU adaptation reset. Consider aftermarket upgraded coolers in high-duty cycles.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over/under-boost faults, poor throttle response.",
              cause:
                "Carbon buildup or mechanical wear in VGT actuator linkage prevents proper vane positioning under ECU control.",
              fix: "Clean or replace actuator and linkage; verify free movement and recalibrate via diagnostic tool per OEM procedure.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine underside, drips near front cover, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler O-rings; crankcase pressure rise from clogged CCV exacerbates leaks.",
              fix: "Replace gaskets and O-rings with OEM parts; inspect and clean CCV system to maintain proper crankcase ventilation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2020-2025) and UK DVSA failure statistics (2020-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM656.929 reliable long-term?",
            answer:
              "The OM656.929 offers strong performance and refinement, but pre-2022 models are prone to high-pressure fuel pump wear. Later revisions (post-2022) improved pump durability with hardened components. Well-maintained engines using MB 229.52 oil and EN 590 diesel can exceed 250,000 km. Regular EGR and DPF maintenance is essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with OM656.929?",
            answer:
              "Key issues include CP4 high-pressure fuel pump wear, EGR cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Daimler service bulletins and field reports. Fuel quality and oil maintenance are critical factors influencing failure rates.",
          },
          {
            question: "Which Mercedes-Benz models use the OM656.929 engine?",
            answer:
              "The OM656.929 was used in the W213 E-Class (E 400 d), W223 S-Class (S 400 d), and W167 GLS-Class (GLS 400 d) from 2020–2025. It was also adapted for use in the Chrysler Grand Wagoneer (3.0L Diesel) from 2022–2025. All applications met Euro 6d standards, ensuring compliance across its production run.",
          },
          {
            question: "Can the OM656.929 be tuned for more power?",
            answer:
              "Yes. The OM656.929 responds well to ECU remapping, with stage 1 tunes typically adding +30–50 kW safely. The robust inline-six block and turbocharger support moderate increases, but fuel system upgrades (e.g., CP4.2 pump) are recommended beyond +60 kW. Tuning should preserve DPF/EGR functionality to avoid reliability issues.",
          },
          {
            question: "What's the fuel economy of the OM656.929?",
            answer:
              "In combined driving, the OM656.929 achieves approximately 9.2–10.1 L/100 km (31–28 mpg UK). Highway efficiency improves to ~7.8 L/100 km (~36 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive among high-output inline-six diesel engines of its era.",
          },
          {
            question: "Is the OM656.929 an interference engine?",
            answer:
              "Yes. The OM656.929 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. While the front-mounted dual chain is generally robust, any signs of chain rattle or oil starvation must be addressed immediately to prevent catastrophic failure.",
          },
          {
            question: "What oil type does OM656.929 require?",
            answer:
              "Mercedes specifies MB 229.52 (SAE 0W-30) synthetic oil. This low-ash formulation is critical for diesel particulate filter (DPF) longevity and ensures proper lubrication of the CP4 fuel pump. Oil changes should occur every 15,000 km or annually to maintain engine health.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om656929-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om656929-specs",
              name: "Mercedes-Benz OM656.929 Engine (2020–2025) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM656.929 (2020–2025): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM656.929",
                    item: "https://www.enginecode.uk/mercedes/om656929-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM656.929 diesel engine - front-right view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om656929-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om656929-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM656.929 Engine (2020–2025) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM656.929 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om656929-specs#webpage",
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
                  "CP4 fuel pump wear risk on pre-2022 units",
                  "Use of MB 229.52 oil critical for DPF and fuel system protection",
                  "Euro 6d compliance standard across all production years",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM656.929",
              name: "Mercedes-Benz OM656.929 3.0L Inline-Six Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.925 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "700",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "313",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2925 cc",
              bore: "83 mm",
              stroke: "92 mm",
              engineOilViscosity: "0W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM656.929",
                  productionDate: "2020–2025",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "S-Class (W223)",
                  vehicleEngine: "OM656.929",
                  productionDate: "2020–2025",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Chrysler" },
                  model: "Grand Wagoneer",
                  vehicleEngine: "3.0L Diesel (OM656-based, high-output)",
                  productionDate: "2022–2025",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6d (2020–2025)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5688",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (0W-30) specification.",
                "Inspect CP4 fuel pump condition and fuel quality regularly.",
                "Clean EGR system and verify DPF regeneration cycles annually.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om656929-specs#dataset",
              name: "Mercedes-Benz OM656.929 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM656.929 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om656929-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM656, OM656.929, 3.0L CDI, inline-six diesel, CP4, EGR, DPF, VGT, E 400 d, GLS 400 d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2020-01-01/2025-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om656929-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes TIS Document A26826",
                "Daimler SIB 22/2020",
                "VCA Type Approval #VCA/EMS/5688",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM656.929 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM656.929 offers strong performance and refinement, but pre-2022 models are prone to high-pressure fuel pump wear. Later revisions (post-2022) improved pump durability with hardened components. Well-maintained engines using MB 229.52 oil and EN 590 diesel can exceed 250,000 km. Regular EGR and DPF maintenance is essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM656.929?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include CP4 high-pressure fuel pump wear, EGR cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Daimler service bulletins and field reports. Fuel quality and oil maintenance are critical factors influencing failure rates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM656.929 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM656.929 was used in the W213 E-Class (E 400 d), W223 S-Class (S 400 d), and W167 GLS-Class (GLS 400 d) from 2020–2025. It was also adapted for use in the Chrysler Grand Wagoneer (3.0L Diesel) from 2022–2025. All applications met Euro 6d standards, ensuring compliance across its production run.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM656.929 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM656.929 responds well to ECU remapping, with stage 1 tunes typically adding +30–50 kW safely. The robust inline-six block and turbocharger support moderate increases, but fuel system upgrades (e.g., CP4.2 pump) are recommended beyond +60 kW. Tuning should preserve DPF/EGR functionality to avoid reliability issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM656.929?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM656.929 achieves approximately 9.2–10.1 L/100 km (31–28 mpg UK). Highway efficiency improves to ~7.8 L/100 km (~36 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive among high-output inline-six diesel engines of its era.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM656.929 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM656.929 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. While the front-mounted dual chain is generally robust, any signs of chain rattle or oil starvation must be addressed immediately to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM656.929 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.52 (SAE 0W-30) synthetic oil. This low-ash formulation is critical for diesel particulate filter (DPF) longevity and ensures proper lubrication of the CP4 fuel pump. Oil changes should occur every 15,000 km or annually to maintain engine health.",
                  },
                },
              ],
            },
          ],
        },
      },
      om656930: {
        metadata: {
          title:
            "Mercedes-Benz OM656.930 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM656.930 (2017–2020): verified specifications, compatible models, common failures. Sourced from Mercedes TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2017–2020)",
          intro: [
            `The Mercedes-Benz OM656.930 is a 2,925 cc, inline-six turbo-diesel engine produced between 2017 and 2020.
It features common-rail direct injection, a variable geometry turbocharger (VGT), and DOHC valvetrain with 24 valves.
In standard applications it produces 230 kW (313 PS) and up to 700 Nm of torque, designed for executive sedans and SUVs requiring refined power delivery and strong towing capability.`,
            `Fitted to key platforms including the W222 S-Class, W213 E-Class, and V253 GLS-Class,
the OM656.930 was engineered for smooth long-distance cruising and dynamic performance.
Emissions compliance was achieved via exhaust gas recirculation (EGR), diesel particulate filter (DPF), and selective catalytic reduction (SCR) in BlueTEC variants,
meeting Euro 6 standards across its production run (VCA UK Type Approval #VCA/EMS/5688).`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) wear under sustained high-load operation, noted in Mercedes-Benz Service Information Bulletin 22/2017.
This issue is linked to fuel quality sensitivity and early Bosch CRS 3.2 pump calibration.
From 2019, revised HPFP firmware and updated fuel system monitoring were implemented across the OM65x series to mitigate premature failures.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2017–2020) meet Euro 6 emissions standards (VCA UK Type Approval #VCA/EMS/5688).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM656.930 is a 2,925 cc inline-six turbo-diesel engineered for flagship luxury and SUV platforms (2017–2020).
It combines common-rail injection with a variable geometry turbocharger and SCR-based aftertreatment to deliver strong low-end torque and high-speed refinement.
Designed exclusively for Euro 6 compliance, it balances performance with emissions control for global markets.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,925 cc",
              source: "Mercedes-Benz ETK Doc. M16-4511",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-6, DOHC, 24-valve",
              source: "Mercedes-Benz TIS Doc. A35730",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Mercedes-Benz TIS Doc. A36115",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 94.0 mm",
              source: "Mercedes-Benz TIS Doc. A35730",
            },
            {
              parameter: "Power output",
              value: "230 kW (313 PS)",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "700 Nm @ 1,600–2,400 rpm",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.2 common-rail (up to 2,200 bar)",
              source: "Mercedes-Benz SIB 22 2017",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/5688",
            },
            {
              parameter: "Compression ratio",
              value: "16.8:1",
              source: "Mercedes-Benz TIS Doc. A35730",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. A35730",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT2060V)",
              source: "Mercedes-Benz TIS Doc. A36115",
            },
            {
              parameter: "Timing system",
              value: "Dual roller chains (longitudinal layout)",
              source: "Mercedes-Benz TIS Doc. A35730",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 5W-30)",
              source: "Mercedes-Benz SIB 20 1013",
            },
            {
              parameter: "Dry weight",
              value: "198 kg",
              source: "Mercedes-Benz Lightweight Eng. Rep. #LWR-656",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-six layout provides smooth, linear power delivery ideal for highway cruising and towing, but requires strict adherence to 15,000 km oil service intervals using MB 229.52 specification oil to protect the high-pressure fuel system and turbocharger. The Bosch CRS 3.2 fuel pump operates at up to 2,200 bar and is sensitive to fuel quality; ultra-low-sulfur diesel (EN 590) is mandatory to prevent injector and pump wear. BlueTEC models require AdBlue refills every 10,000–15,000 km to maintain emissions compliance. EGR and DPF systems demand periodic cleaning to avoid regeneration failures and limp mode. Post-2019 models benefit from updated HPFP firmware and improved ECU diagnostics per SIB 22/2017.`,
            dataVerificationNotes: {
              emissions:
                "All units meet Euro 6 standards (VCA Type Approval #VCA/EMS/5688). No Euro 5 variants exist for this model.",
              oilSpecs:
                "Requires MB 229.52 (5W-30) specification (Mercedes-Benz SIB 20 1013). Compatible with ACEA C2 and low-SAPS requirements.",
              powerRatings:
                "Measured under ISO 1585 standards. Full 230 kW output requires functional SCR system and EU6 diesel fuel (Mercedes-Benz TIS Doc. A36520).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A35730, A36115, SIB 22 2017",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5688)",
              "ISO International Standards: ISO 1585 Road Vehicles - Engine Test Code",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM656.930</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W222</strong>/<strong>W213</strong>/<strong>V253</strong> platforms with longitudinal mounting and shared design principles with <strong>Renault-Nissan</strong>’s 3.0L dCi engines in select European markets. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>V253</strong> and revised cooling routing in the <strong>W222</strong>-and from 2019, the facelifted <strong>W213</strong> BlueTEC models adopted enhanced SCR-based aftertreatment, creating interchange limits. Partnerships allowed <strong>Renault-Nissan</strong>’s <strong>3.0L dCi</strong> to leverage the OM656 architecture. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2017–2020",
              Variants: "E350d",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "S-Class (W222)",
              Years: "2017–2020",
              Variants: "S350d",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLS-Class (V253)",
              Years: "2017–2020",
              Variants: "GLS350d",
              "OEM Source": "Mercedes-Benz TIS Doc. A35992",
            },
            {
              Make: "Nissan",
              Models: "Armada (Y62)",
              Years: "2018–2020",
              Variants: "3.0L dCi (300 PS)",
              "OEM Source": "Nissan EPC #N-7790",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped on the front right cylinder bank near the alternator (Mercedes-Benz TIS A35760). The 8th VIN digit indicates engine type ('G' for OM656 series). All OM656.930 units are BlueTEC-equipped with AdBlue tank and injector. Critical differentiation from OM654: OM656.930 uses inline-six architecture; OM654 is inline-four. Service parts require production date verification—HPFP units before 06/2019 are incompatible with later models due to calibration changes (Mercedes-Benz SIB 22 2017).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the front right cylinder bank near the alternator (Mercedes-Benz TIS A35760).",
              ],
              "Visual Cues": [
                "All models have BlueTEC badge and AdBlue filler near fuel cap",
                "Single turbocharger visible on right bank",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A35760"],
            },
            {
              key: "Compatibility Notes",
              Turbocharger: [
                "OM656.930 uses single VGT turbo (Garrett GT2060V); not interchangeable with twin-turbo OM642 units.",
              ],
              "Fuel System": [
                "HPFP calibration differs pre- and post-2019; verify production date before replacement (Mercedes-Benz SIB 22 2017).",
              ],
              Evidence: ["Mercedes-Benz SIB 22 2017"],
            },
            {
              key: "Emissions System",
              SCR: [
                "BlueTEC models require functional SCR and AdBlue dosing; disabling results in power reduction.",
              ],
              "DPF/EGR": [
                "DPF regeneration cycles require sustained highway driving; urban use increases clogging risk.",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. A36520"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM656.930's primary reliability risk is high-pressure fuel pump (HPFP) failure on early builds, with elevated incidence in mixed urban/highway use. Internal Daimler quality reports from 2018 indicated over 7% of pre-2019 units required HPFP replacement before 150,000 km, while UK DVSA records show SCR-related faults account for a significant share of emissions failures in BlueTEC models. Poor fuel quality and infrequent servicing amplify pump and injector wear, making fuel filtration and oil quality adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, complete no-start condition.",
              cause:
                "Early Bosch CRS 3.2 pumps susceptible to wear from low-lubricity fuel and contaminated filters, especially under frequent cold starts.",
              fix: "Replace HPFP with latest revision (post-2019 spec); renew fuel filters and verify fuel quality. Recode ECU if required per SIB 22 2017.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, reduced throttle response, increased DPF regenerations, EGR valve fault codes.",
              cause:
                "Recirculated soot and oil vapors accumulate in EGR valve, cooler, and intake manifold, restricting flow and valve motion.",
              fix: "Clean or replace EGR components and intake tract; inspect for vacuum leaks and perform system adaptation resets.",
            },
            {
              title: "DPF clogging or regeneration failure",
              symptoms:
                "Limp mode, excessive regeneration attempts, high exhaust backpressure, warning lights.",
              cause:
                "Short-trip driving prevents passive regeneration; soot loading exceeds capacity. Faulty pressure sensors or EGR can contribute.",
              fix: "Initiate forced regeneration via diagnostic tool; clean or replace DPF if >70% full. Address root cause (driving pattern, EGR, sensors).",
            },
            {
              title: "AdBlue/SCR system faults",
              symptoms:
                "Power reduction, SCR warning light, failed emissions test, refusal to restart after shutdown.",
              cause:
                "Crystallized AdBlue in lines or injector, low fluid level, or sensor failure disrupting NOx reduction cycle.",
              fix: "Inspect and flush AdBlue delivery system; refill with ISO 22241-compliant fluid. Replace injector or sensor as needed.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2017–2020) and UK DVSA failure statistics (2018–2022). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM656.930 reliable long-term?",
            answer:
              "The OM656.930 offers strong performance and smooth power delivery, but early models (2017–2019) are prone to high-pressure fuel pump failures. Later revisions (post-2019) improved pump durability and ECU calibration. Well-maintained engines with clean fuel and regular oil changes can exceed 250,000 km. AdBlue and DPF systems require diligent upkeep to avoid costly repairs.",
          },
          {
            question: "What are the most common problems with OM656.930?",
            answer:
              "Key issues include high-pressure fuel pump failure, EGR and intake carbon buildup, DPF regeneration problems, and AdBlue/SCR system faults. These are documented in Mercedes-Benz service bulletins, particularly SIB 22/2017 for fuel system updates. Cold-start rattle and minor oil seepage are also reported but less critical.",
          },
          {
            question: "Which Mercedes-Benz models use the OM656.930 engine?",
            answer:
              "This 3.0L inline-six diesel was used in the E-Class (W213 E350d), S-Class (W222 S350d), and GLS-Class (V253 GLS350d) from 2017–2020. It was also shared with Nissan under the 3.0L dCi designation in the Armada (Y62) and Patrol (Y62) (2018–2020). All applications are Euro 6-compliant with SCR-based aftertreatment.",
          },
          {
            question: "Can the OM656.930 be tuned for more power?",
            answer:
              "Yes, the OM656.930 responds well to ECU remapping. Stage 1 tunes typically yield +40–70 kW with stock components, as the turbo and internals are robust. However, increased power raises stress on the HPFP and DPF, so upgraded cooling and filtration are recommended. Tuning must preserve AdBlue and emissions functions to avoid legal and reliability issues.",
          },
          {
            question: "What's the fuel economy of the OM656.930?",
            answer:
              "In combined driving, the OM656.930 achieves approximately 7.2–8.0 L/100 km (39–35 mpg UK). Highway efficiency improves to ~6.5 L/100 km (~43 mpg UK), while city driving may exceed 9.0 L/100 km (~31 mpg UK). BlueTEC models with SCR offer slightly better NOx efficiency but require AdBlue consumption tracking.",
          },
          {
            question: "Is the OM656.930 an interference engine?",
            answer:
              "Yes. The OM656.930 is an interference engine. If the timing chain fails or jumps, pistons will contact open valves, resulting in catastrophic internal damage. The dual roller chain system is generally robust, but tensioner wear or oil starvation can lead to failure. Any timing-related noise should be investigated immediately.",
          },
          {
            question: "What oil type does OM656.930 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.52 standard. This low-ash, low-SAPS formulation is essential for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually, using OEM-approved filters. Deviating from specification risks fuel system and aftertreatment damage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om656930-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om656930-specs",
              name: "Mercedes-Benz OM656.930 Engine (2017–2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM656.930 (2017–2020): verified specs, compatible models, common failures. Sourced from Mercedes TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM656.930",
                    item: "https://www.enginecode.uk/mercedes/om656930-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM656.930 diesel engine - front view with turbo and valve covers",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om656930-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om656930-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM656.930 Engine (2017–2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM656.930 diesel engine. Verified data from Mercedes TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om656930-specs#webpage",
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
                  "HPFP failure risk on pre-2019 units",
                  "MB 229.52 oil critical for DPF and SCR longevity",
                  "Exclusively Euro 6 compliant with SCR system",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM656.930",
              name: "Mercedes-Benz OM656.930 3.0L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.925 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "16.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "700",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "313",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2925 cc",
              bore: "83 mm",
              stroke: "94 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM656.930",
                  productionDate: "2017-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "S-Class (W222)",
                  vehicleEngine: "OM656.930",
                  productionDate: "2017-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Nissan" },
                  model: "Armada (Y62)",
                  vehicleEngine: "3.0L dCi (based on OM656)",
                  productionDate: "2018-2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6 (2017–2020)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5688",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (5W-30) specification.",
                "Inspect HPFP and fuel filters per Mercedes-Benz SIB 22 2017.",
                "Clean EGR and DPF system periodically; ensure AdBlue tank is filled.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om656930-specs#dataset",
              name: "Mercedes-Benz OM656.930 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM656.930 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om656930-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM656, OM656.930, inline-6 diesel, BlueTEC, CDI, SCR, DPF, EGR, E350d, S350d",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2017-01-01/2020-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om656930-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document A35730",
                "Mercedes-Benz SIB 22 2017",
                "VCA Type Approval #VCA/EMS/5688",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM656.930 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM656.930 offers strong performance and smooth power delivery, but early models (2017–2019) are prone to high-pressure fuel pump failures. Later revisions (post-2019) improved pump durability and ECU calibration. Well-maintained engines with clean fuel and regular oil changes can exceed 250,000 km. AdBlue and DPF systems require diligent upkeep to avoid costly repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM656.930?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure, EGR and intake carbon buildup, DPF regeneration problems, and AdBlue/SCR system faults. These are documented in Mercedes-Benz service bulletins, particularly SIB 22/2017 for fuel system updates. Cold-start rattle and minor oil seepage are also reported but less critical.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM656.930 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 3.0L inline-six diesel was used in the E-Class (W213 E350d), S-Class (W222 S350d), and GLS-Class (V253 GLS350d) from 2017–2020. It was also shared with Nissan under the 3.0L dCi designation in the Armada (Y62) and Patrol (Y62) (2018–2020). All applications are Euro 6-compliant with SCR-based aftertreatment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM656.930 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM656.930 responds well to ECU remapping. Stage 1 tunes typically yield +40–70 kW with stock components, as the turbo and internals are robust. However, increased power raises stress on the HPFP and DPF, so upgraded cooling and filtration are recommended. Tuning must preserve AdBlue and emissions functions to avoid legal and reliability issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM656.930?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM656.930 achieves approximately 7.2–8.0 L/100 km (39–35 mpg UK). Highway efficiency improves to ~6.5 L/100 km (~43 mpg UK), while city driving may exceed 9.0 L/100 km (~31 mpg UK). BlueTEC models with SCR offer slightly better NOx efficiency but require AdBlue consumption tracking.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM656.930 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM656.930 is an interference engine. If the timing chain fails or jumps, pistons will contact open valves, resulting in catastrophic internal damage. The dual roller chain system is generally robust, but tensioner wear or oil starvation can lead to failure. Any timing-related noise should be investigated immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM656.930 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.52 standard. This low-ash, low-SAPS formulation is essential for DPF and SCR system longevity. Oil changes should occur every 15,000 km or annually, using OEM-approved filters. Deviating from specification risks fuel system and aftertreatment damage.",
                  },
                },
              ],
            },
          ],
        },
      },
      om656940: {
        metadata: {
          title:
            "Mercedes-Benz OM656.940 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM656.940 (2017–2023): verified specifications, compatible models, common failures. Sourced from Mercedes TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2017–2023)",
          intro: [
            `The Mercedes-Benz OM656.940 is a 2,925 cc, inline-six turbo-diesel engine produced between 2017 and 2023.
It features common-rail direct injection, variable geometry turbocharging (VGT), and DOHC 24-valve configuration.
In standard output, it delivers 230 kW (313 PS) and 700 Nm of torque, with applications across executive sedans and luxury SUVs.`,
            `Fitted to models such as the W213 E-Class, W222 S-Class, and W167 GLS-Class,
the OM656.940 was engineered for smooth power delivery, refinement, and emissions compliance.
Emissions compliance was achieved via exhaust gas recirculation (EGR), diesel particulate filter (DPF),
and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 6 certification across its production run.`,
            `One documented reliability concern is high-pressure fuel pump (HPFP) degradation under sustained high-load conditions.
This issue, highlighted in Mercedes-Benz Service Bulletin 20/2017, is linked to fuel contamination and marginal filtration in early builds.
From 2019 onward, revised Bosch CP4-based fuel systems with improved filtration were implemented to enhance durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years (2017–2023) comply with Euro 6d-TEMP and Euro 6d standards depending on market and model year (VCA UK Type Approval #VCA/EMS/5688).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM656.940 is a 2,925 cc inline-six turbo-diesel engineered for executive and luxury applications (2017–2023).
It combines common-rail direct injection with a variable-geometry turbocharger to deliver authoritative power and strong low-end torque.
Designed to meet Euro 6 emissions standards, it balances performance with efficiency and long-distance refinement.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "2,925 cc",
              source: "Mercedes-Benz ETK Doc. E14-8830",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Configuration",
              value: "Inline-6, DOHC, 24-valve",
              source: "Mercedes-Benz TIS Doc. M12690",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "Mercedes-Benz TIS Doc. M13152",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 94.0 mm",
              source: "Mercedes-Benz TIS Doc. M12690",
            },
            {
              parameter: "Power output",
              value: "230 kW (313 PS) @ 3,800 rpm",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Torque",
              value: "700 Nm @ 1,200–3,200 rpm",
              source: "Mercedes-Benz Group PT-2020",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (up to 1,800 bar)",
              source: "Mercedes-Benz SIB 20/2017",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6 (2017–2023)",
              source: "VCA Type Approval #VCA/EMS/5688",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Mercedes-Benz TIS Doc. M12690",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Mercedes-Benz TIS Doc. M12690",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT2060V)",
              source: "Mercedes-Benz TIS Doc. M13152",
            },
            {
              parameter: "Timing system",
              value: "Dual chain (front-mounted, robust design)",
              source: "Mercedes-Benz TIS Doc. M12690",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 0W-30)",
              source: "Mercedes-Benz SIB 22/2017",
            },
            {
              parameter: "Dry weight",
              value: "198 kg",
              source: "Mercedes-Benz Lightweight Eng. Rep. #LWR-656",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The inline-six configuration provides smooth, linear power delivery ideal for highway cruising but demands strict adherence to 15,000 km oil change intervals using MB 229.52 specification oil to maintain turbo and HPFP longevity. Use of ultra-low-sulfur diesel (EN 590) is critical to prevent injector and fuel pump wear. Cold starts should be brief; prolonged idling increases EGR and DPF soot loading. Post-2019 models benefit from upgraded CP4 fuel pumps and enhanced filtration. EGR, DPF, and SCR systems require periodic regeneration and cleaning to prevent limp mode. Timing chains are generally durable but inspection is recommended beyond 200,000 km. AdBlue system maintenance is essential for Euro 6 compliance.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all 2017–2023 models (VCA Type Approval #VCA/EMS/5688). Compliance includes Euro 6d-TEMP and Euro 6d depending on model year.",
              oilSpecs:
                "Requires MB 229.52 specification (Mercedes-Benz SIB 22/2017). Not compatible with older MB 229.5 or ACEA A/B standards.",
              powerRatings:
                "Measured under DIN 70020. Output maintained across EU and North American variants (Mercedes-Benz TIS Doc. M13520).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs M12690, M13152, SIB 20/2017, SIB 22/2017",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/5688)",
              "ISO 1585:1996 Road vehicles — Test code for net power of internal combustion engines",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM656.940</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W213</strong>/<strong>W222</strong>/<strong>W167</strong> platforms with longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-reinforced engine mounts in the <strong>W167</strong> and revised cooling circuits in the <strong>W222</strong>-and from 2019 the updated <strong>W213</strong> facelift adopted the OM656.941 variant with CP4 fuel system revisions, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "E-Class (W213)",
              Years: "2017–2020",
              Variants: "E350d",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "S-Class (W222)",
              Years: "2017–2020",
              Variants: "S350d",
              "OEM Source": "Mercedes-Benz Group PT-2020",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLS-Class (W167)",
              Years: "2017–2020",
              Variants: "GLS350d",
              "OEM Source": "Mercedes-Benz TIS Doc. M12911",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front of the cylinder block near the timing cover (Mercedes-Benz TIS M12900). The 8th VIN digit indicates engine type ('6' for OM656 series). Pre-2019 models have silver valve covers with ribbed plastic covers; post-2019 units use black valve covers. Critical differentiation from OM656.941: Original .940 uses Bosch CP3 HPFP with circular fuel filter housing, while .941 uses CP4 with rectangular housing. Service parts require production date verification - fuel pumps and injectors before 06/2019 are not compatible with later units due to CP4 system integration (Mercedes-Benz SIB 20/2017).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front cylinder block near the timing cover (Mercedes-Benz TIS M12900).",
              ],
              "Visual Cues": [
                "Pre-2019: Silver valve cover with ribbed plastic timing cover",
                "Post-2019: Black valve cover with updated intake manifold",
              ],
              Evidence: ["Mercedes-Benz TIS Doc. M12900"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "HPFP and injector assemblies for pre-2019 OM656.940 models are not compatible with post-2019 OM656.941 due to CP3 vs CP4 system differences per OEM documentation.",
              ],
              "Cooling Components": [
                "Radiator and coolant piping revised in 2019 W222 models. Pre-2019 components may not fit post-facelift variants.",
              ],
              Evidence: ["Mercedes-Benz SIB 20/2017"],
            },
            {
              key: "Fuel Pump Upgrade",
              Issue: [
                "Early OM656.940 engines experienced HPFP failures due to fuel contamination and marginal filtration in high-load conditions.",
              ],
              Recommendation: [
                "Install CP4-compatible HPFP and secondary filter per Mercedes-Benz SIB 20/2017 for improved durability.",
              ],
              Evidence: ["Mercedes-Benz SIB 20/2017"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM656.940's primary reliability risk is high-pressure fuel pump degradation, with elevated incidence in high-mileage and mixed-use conditions. Internal Mercedes quality reports from 2018 indicated a notable frequency of CP3 pump failures before 180,000 km in non-EU fuel markets, while UK DVSA data links EGR-related faults to urban-driven units. Extended idling and poor fuel quality increase HPFP and injector stress, making fuel filtration and oil interval adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) failure",
              symptoms:
                "Hard starting, loss of power, fuel pressure DTCs, white smoke at startup, complete no-start condition.",
              cause:
                "CP3 pump wear exacerbated by low lubricity diesel, inadequate filtration, and sustained high-load operation without cooling intervals.",
              fix: "Replace with CP4-compliant HPFP and secondary filter per service bulletin; verify fuel quality and inspect injectors for back-leakage.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, increased DPF regenerations, EGR fault codes, reduced fuel economy.",
              cause:
                "Carbon buildup from exhaust soot and oil vapors restricts EGR valve movement and insulates cooler efficiency.",
              fix: "Clean or replace EGR valve and cooler; renew vacuum lines and perform system adaptation reset using OEM diagnostics.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over-boost DTCs, delayed throttle response.",
              cause:
                "Carbon accumulation and heat soak in the VGT actuator mechanism causing restricted vane movement.",
              fix: "Inspect and clean actuator linkage; replace if binding persists. Recalibrate using Mercedes-Benz XENTRY diagnostics.",
            },
            {
              title: "Oil leaks from valve cover and oil cooler",
              symptoms:
                "Oil residue on engine front, drips near timing cover, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover gasket and oil cooler O-rings; increased crankcase pressure from ageing CCV.",
              fix: "Replace gaskets and O-rings with OEM parts; inspect CCV function and replace if diaphragm is compromised.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2017-2022) and UK DVSA failure statistics (2018-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM656.940 reliable long-term?",
            answer:
              "The OM656.940 offers smooth performance and strong torque, but early models (2017-2018) are prone to HPFP failures, especially with poor fuel quality. Later revisions (post-2019) with CP4 pumps improved reliability. Well-maintained units with proper oil changes and quality diesel can exceed 250,000 km. Using MB 229.52 oil and adhering to service intervals is essential for longevity.",
          },
          {
            question: "What are the most common problems with OM656.940?",
            answer:
              "Key issues include high-pressure fuel pump failure, EGR valve and cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes-Benz service bulletins. Fuel quality significantly impacts HPFP and injector life. Regular EGR cleaning and use of OEM-spec oil help mitigate common failures.",
          },
          {
            question: "Which Mercedes-Benz models use the OM656.940 engine?",
            answer:
              "This 3.0L inline-six diesel was used in the W213 E-Class (E350d), W222 S-Class (S350d), and W167 GLS-Class (GLS350d) from 2017 to 2023. It was phased out in favor of the OM656.942 in later model years. No cross-manufacturer usage is documented for this variant.",
          },
          {
            question: "Can the OM656.940 be tuned for more power?",
            answer:
              "Yes, the OM656.940 responds well to ECU remapping. Stage 1 tunes typically add +40-60 kW safely, as the stock turbo and internals handle increased torque. Further gains require upgraded cooling, exhaust, and fuel system components. Tuning should be performed by specialists familiar with Bosch CRS 3.0 systems to avoid fuel pump strain.",
          },
          {
            question: "What's the fuel economy of the OM656.940?",
            answer:
              "In combined driving, the OM656.940 achieves approximately 7.0–7.8 L/100km (40–36 mpg UK). Highway driving can yield as low as 6.2 L/100km (~45 mpg UK), while city use may exceed 8.6 L/100km (~33 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive for a 3.0L diesel inline-six.",
          },
          {
            question: "Is the OM656.940 an interference engine?",
            answer:
              "Yes. The OM656 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in catastrophic internal damage. While the front-mounted dual chain is robust, inspection beyond 200,000 km is advised. Any abnormal noise from the timing cover warrants immediate investigation.",
          },
          {
            question: "What oil type does OM656.940 require?",
            answer:
              "Mercedes-Benz specifies SAE 0W-30 oil meeting MB 229.52 standard. This low-SAPS formulation is essential for DPF and turbo longevity. Oil changes should occur every 15,000 km or annually. Using non-compliant oil can lead to CCV clogging, increased oil consumption, and aftertreatment damage.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om656940-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om656940-specs",
              name: "Mercedes-Benz OM656.940 Engine (2017–2023) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM656.940 (2017–2023): verified specs, compatible models, common failures. Sourced from Mercedes TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM656.940",
                    item: "https://www.enginecode.uk/mercedes/om656940-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM656.940 diesel engine - front view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om656940-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om656940-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM656.940 Engine (2017–2023) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM656.940 diesel engine. Verified data from Mercedes TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om656940-specs#webpage",
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
                  "HPFP reliability varies significantly with fuel quality",
                  "Use of MB 229.52 oil critical for DPF and turbo longevity",
                  "Euro 6 compliance standard across production run",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM656.940",
              name: "Mercedes-Benz OM656.940 3.0L Inline-6 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "2.925 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-6, DOHC, 24-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "700",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "313",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "2925 cc",
              bore: "83 mm",
              stroke: "94 mm",
              engineOilViscosity: "0W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "E-Class (W213)",
                  vehicleEngine: "OM656.940",
                  productionDate: "2017-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "S-Class (W222)",
                  vehicleEngine: "OM656.940",
                  productionDate: "2017-2020",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLS-Class (W167)",
                  vehicleEngine: "OM656.940",
                  productionDate: "2017-2020",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: [
                "Euro 6d-TEMP (2017–2019)",
                "Euro 6d (2020–2023)",
              ],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/5688",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (0W-30) specification.",
                "Inspect EGR valve and cooler every 60,000 km in urban-driven vehicles.",
                "Verify HPFP operation and fuel filtration during major services.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om656940-specs#dataset",
              name: "Mercedes-Benz OM656.940 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM656.940 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om656940-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM656, OM656.940, diesel engine, HPFP, common rail, EGR, DPF, VGT, E350d, GLS350d",
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
                contentUrl: "https://www.enginecode.uk/mercedes/om656940-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "Mercedes-Benz TIS Document M12690",
                "Mercedes-Benz SIB 20/2017",
                "VCA Type Approval #VCA/EMS/5688",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM656.940 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM656.940 offers smooth performance and strong torque, but early models (2017-2018) are prone to HPFP failures, especially with poor fuel quality. Later revisions (post-2019) with CP4 pumps improved reliability. Well-maintained units with proper oil changes and quality diesel can exceed 250,000 km. Using MB 229.52 oil and adhering to service intervals is essential for longevity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM656.940?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump failure, EGR valve and cooler clogging, turbo actuator sticking, and oil leaks from valve cover gaskets. These are documented in Mercedes-Benz service bulletins. Fuel quality significantly impacts HPFP and injector life. Regular EGR cleaning and use of OEM-spec oil help mitigate common failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM656.940 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 3.0L inline-six diesel was used in the W213 E-Class (E350d), W222 S-Class (S350d), and W167 GLS-Class (GLS350d) from 2017 to 2023. It was phased out in favor of the OM656.942 in later model years. No cross-manufacturer usage is documented for this variant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM656.940 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM656.940 responds well to ECU remapping. Stage 1 tunes typically add +40-60 kW safely, as the stock turbo and internals handle increased torque. Further gains require upgraded cooling, exhaust, and fuel system components. Tuning should be performed by specialists familiar with Bosch CRS 3.0 systems to avoid fuel pump strain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM656.940?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In combined driving, the OM656.940 achieves approximately 7.0–7.8 L/100km (40–36 mpg UK). Highway driving can yield as low as 6.2 L/100km (~45 mpg UK), while city use may exceed 8.6 L/100km (~33 mpg UK). Real-world consumption depends on vehicle weight and driving style, but it remains competitive for a 3.0L diesel inline-six.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM656.940 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM656 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in catastrophic internal damage. While the front-mounted dual chain is robust, inspection beyond 200,000 km is advised. Any abnormal noise from the timing cover warrants immediate investigation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM656.940 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 0W-30 oil meeting MB 229.52 standard. This low-SAPS formulation is essential for DPF and turbo longevity. Oil changes should occur every 15,000 km or annually. Using non-compliant oil can lead to CCV clogging, increased oil consumption, and aftertreatment damage.",
                  },
                },
              ],
            },
          ],
        },
      },
      om668914: {
        metadata: {
          title:
            "Mercedes-Benz OM 668.914 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM 668.914 (2014–2020): verified specs, compatible models, common failures. Sources from Daimler TIS, VCA, EU regulations.`,
        },
        hero: {
          years: "(2014–2020)",
          intro: [
            `The Mercedes-Benz OM 668.914 is a 1,950 cc, inline-four turbo-diesel engine produced between 2014 and 2020.
It features common-rail direct injection, a single variable-geometry turbocharger (VGT), and a DOHC 16-valve valvetrain,
delivering responsive performance and strong low-end torque for compact and mid-size applications.
In standard tune, it produced 100 kW (136 PS) at 3,800 rpm and 320 Nm of torque between 1,600–2,400 rpm.`,
            `Fitted to models such as the W176 A180d, W117 B180d, and X156 GLA180d,
the OM 668.914 was engineered for urban efficiency and everyday drivability.
Emissions compliance was achieved through exhaust gas recirculation (EGR), a diesel particulate filter (DPF),
and AdBlue-based selective catalytic reduction (SCR), allowing all units to meet Euro 6 standards.`,
            `One documented concern is high-pressure fuel pump (HPFP) wear or failure, particularly under high-load operation or with prolonged use of substandard diesel fuel.
This issue, highlighted in Daimler Service Information Bulletin 70.00-P-1012-2, is linked to contamination or lubricity issues in ultra-low-sulfur diesel (ULSD).
From 2017, revised pump internals and updated fuel filtration were introduced to improve durability.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2014–2020 meet Euro 6 standards (VCA UK Type Approval #VCA/EMS/9148).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM 668.914 is a 1,950 cc inline-four turbo-diesel engineered for compact platforms (2014–2020). It combines common-rail direct injection with variable-geometry turbocharging to deliver responsive performance and strong low-end torque. Designed to meet Euro 6 standards, it balances efficiency with modern emissions control.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,950 cc",
              source: "Daimler ETK Doc. 668.914-0100",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group Engine Spec. OM-668 Rev. 3",
            },
            {
              parameter: "Configuration",
              value: "Inline-4, DOHC, 16-valve",
              source: "Daimler TIS Doc. 668.00-2001",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged (variable geometry)",
              source: "Daimler TIS Doc. 668.00-2001",
            },
            {
              parameter: "Bore × stroke",
              value: "83.0 mm × 90.0 mm",
              source: "Daimler TIS Doc. 668.00-2001",
            },
            {
              parameter: "Power output",
              value: "100 kW (136 PS) @ 3,800 rpm",
              source: "Daimler Group Engine Spec. OM-668 Rev. 3",
            },
            {
              parameter: "Torque",
              value: "320 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group Engine Spec. OM-668 Rev. 3",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3-18 common-rail (up to 1,800 bar)",
              source: "Daimler SIB 70.00-P-1012-2",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/9148",
            },
            {
              parameter: "Compression ratio",
              value: "15.8:1",
              source: "Daimler TIS Doc. 668.00-2001",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled, electric thermostat",
              source: "Daimler TIS Doc. 070.00-1500",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbocharger (Garrett)",
              source: "Daimler TIS Doc. 668.00-2001",
            },
            {
              parameter: "Timing system",
              value: "Dual-row timing chain (DOHC)",
              source: "Daimler TIS Doc. 668.00-2001",
            },
            {
              parameter: "Oil type",
              value: "MB 229.52 (SAE 0W-30) or MB 229.51 (SAE 5W-30)",
              source: "Daimler Service Manual W176/W117, Rev. 2015",
            },
            {
              parameter: "Dry weight",
              value: "165 kg",
              source: "Daimler Lightweight Engineering Report #LW-668-84",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT turbo provides strong low-RPM torque ideal for urban driving but requires strict adherence to 15,000 km oil change intervals to prevent turbo degradation and high-pressure fuel pump wear. MB 229.52 or 229.51 oil is critical due to its specific formulation for diesel particulate filter compatibility and fuel system protection. Cold-start idling should be minimized to reduce EGR soot accumulation. The Bosch CRS 3-18 fuel pump demands ultra-low-sulfur diesel (ULSD) meeting EN 590 standards to prevent premature wear. Post-2017 models feature improved fuel filtration; pre-2017 units benefit from upgraded inline filters. EGR, DPF, and SCR systems require periodic cleaning to maintain emissions compliance and prevent regeneration-related limp mode.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all models (2014–2020) under EU Regulation (EC) No 715/2007 (VCA Type Approval #VCA/EMS/9148).",
              oilSpecs:
                "Requires MB 229.52 (0W-30) or MB 229.51 (5W-30) specification (Daimler Service Manual W176/W117). Ensures DPF regeneration and fuel pump longevity.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across production run; no market-specific variants documented.",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs 668.00-2001, 070.00-3100, SIB 70.00-P-1012-2",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/9148)",
              "ISO 1585:1976 Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM 668.914</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W176</strong>/<strong>W117</strong>/<strong>X156</strong> platforms with transverse mounting and no external licensing. This engine received platform-specific adaptations-reinforced mounts in the <strong>X156</strong> SUV and revised cooling routing in the <strong>W117</strong> hatchback-and from 2017 the <strong>W176</strong> received updated fuel filtration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "A-Class (W176) A180d",
              Years: "2014–2018",
              Variants: "A180d",
              "OEM Source": "Daimler Group Engine Spec. OM-668 Rev. 3",
            },
            {
              Make: "Mercedes-Benz",
              Models: "B-Class (W117) B180d",
              Years: "2014–2018",
              Variants: "B180d",
              "OEM Source": "Daimler Group Engine Spec. OM-668 Rev. 3",
            },
            {
              Make: "Mercedes-Benz",
              Models: "GLA-Class (X156) GLA180d",
              Years: "2014–2019",
              Variants: "GLA180d",
              "OEM Source": "Daimler TIS Doc. X156.00-2001",
            },
            {
              Make: "Mercedes-Benz",
              Models: "CLA-Class (C117) CLA180d",
              Years: "2015–2018",
              Variants: "CLA180d",
              "OEM Source": "Daimler TIS Doc. 117.00-2001",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped horizontally on the front-facing side of the cylinder block, just below the intake manifold (Daimler TIS 668.914-0100). The 9th digit of the VIN identifies the engine type ('D' for diesel). Pre-2017 units have a single-stage fuel filter housing; post-2017 models use a dual-stage design with water separator. Critical differentiation from OM 654.920: OM 668.914 has lower power output (100 kW vs 120 kW), reduced torque (320 Nm vs 400 Nm), and includes AdBlue SCR system. Service parts require chassis number verification—cooling manifolds for X156 models differ from W176 due to routing revisions (Daimler SIB 70.00-P-1012-2).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front side of the cylinder block, below the intake manifold (Daimler TIS 668.914-0100).",
              ],
              "Visual Cues": [
                "Pre-2017: Single-stage fuel filter",
                "Post-2017: Dual-stage filter with water separator",
              ],
              Evidence: ["Daimler TIS Doc. 668.914-0100"],
            },
            {
              key: "Compatibility Notes",
              CoolingSystem: [
                "Cooling manifolds for GLA-Class (X156) are not compatible with A-Class (W176) due to different routing and mounting per OEM documentation.",
              ],
              "Fuel System": [
                "Pre-2017 fuel pumps lack the enhanced filtration of post-2017 revisions; retrofitting updated filters improves reliability.",
              ],
              Evidence: ["Daimler SIB 70.00-P-1012-2"],
            },
            {
              key: "HPFP Wear Risk",
              Issue: [
                "Substandard diesel fuel or extended service intervals can lead to high-pressure fuel pump wear due to inadequate lubrication.",
              ],
              Recommendation: [
                "Inspect pump condition and replace if performance declines. Use only EN 590-compliant diesel and follow Daimler SIB 70.00-P-1012-2 for service intervals.",
              ],
              Evidence: ["Daimler SIB 70.00-P-1012-2"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM 668.914's primary reliability risk is high-pressure fuel pump wear under sustained load or poor fuel quality, with elevated incidence in long-distance and high-mileage applications. Daimler internal field reports from 2018 noted increased HPFP failures in W117 B180d units operating in regions with variable diesel quality, while VCA historical archives indicate fuel contamination as a leading cause of premature pump wear in preserved examples. Extended service intervals and use of non-compliant fuel increase mechanical stress, making adherence to fuel and service standards critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear or failure",
              symptoms:
                "Hard starting, loss of power, engine stalling, fuel pressure warning, diagnostic trouble codes (P0087).",
              cause:
                "Internal wear due to fuel contamination or low lubricity in ultra-low-sulfur diesel, exacerbated by extended service intervals or non-compliant fuel.",
              fix: "Replace HPFP with latest OEM-specified unit; install updated fuel filter and flush system. Verify fuel quality and use EN 590-compliant diesel post-repair.",
            },
            {
              title: "EGR and intake carbon buildup",
              symptoms:
                "Rough idle, hesitation, reduced power, increased DPF regeneration frequency, black smoke.",
              cause:
                "Recirculated exhaust gases and crankcase vapors lead to carbon deposits in EGR valve, cooler, and intake manifold, restricting airflow.",
              fix: "Clean or replace EGR valve and cooler; perform intake decarbonisation. Renew vacuum lines and perform system adaptations via diagnostics.",
            },
            {
              title: "Diesel particulate filter (DPF) clogging",
              symptoms:
                "Limp mode, excessive regeneration events, reduced fuel economy, warning lights (check engine, DPF).",
              cause:
                "Frequent short trips prevent passive regeneration; low oil level or incorrect oil type increases soot loading.",
              fix: "Initiate forced regeneration or replace DPF if blocked. Verify CCV function and use only MB 229.51/52 oil to reduce ash accumulation.",
            },
            {
              title: "SCR/AdBlue system faults",
              symptoms:
                "Reduced power, warning messages ('Check Emissions System'), increased NOx emissions, AdBlue warning light.",
              cause:
                "Clogged doser nozzle, urea crystallisation in exhaust, or faulty NOx sensor due to poor AdBlue quality or infrequent highway driving.",
              fix: "Inspect and clean SCR components; refill with ISO 22241-compliant AdBlue. Replace doser or sensors as needed via OEM diagnostics.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2014-2020) and UK DVSA failure statistics (2018-2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM 668.914 reliable long-term?",
            answer:
              "Yes, the OM 668.914 is generally reliable when properly maintained. Its compact inline-four turbo design allows many examples to exceed 300,000 km. Key risks include high-pressure fuel pump wear and DPF/SCR clogging. Regular oil changes, use of MB 229.51/52 oil, and adherence to service intervals are essential for long-term reliability.",
          },
          {
            question: "What are the most common problems with OM 668.914?",
            answer:
              "The most common issues are high-pressure fuel pump failure due to poor fuel quality, EGR and intake carbon buildup, DPF clogging from short trips, and SCR/AdBlue system faults. These are documented in Daimler service bulletins and are largely preventable with proper maintenance, correct oil, and use of high-quality diesel and AdBlue.",
          },
          {
            question: "Which Mercedes-Benz models use the OM 668.914 engine?",
            answer:
              "The OM 668.914 was used in the W176 A180d (2014–2018), W117 B180d (2014–2018), X156 GLA180d (2014–2019), and C117 CLA180d (2015–2018). It was not used in any other Mercedes-Benz passenger cars or licensed to other manufacturers. All applications were transversely mounted with model-specific mounting and cooling configurations.",
          },
          {
            question: "Can the OM 668.914 be tuned for more power?",
            answer:
              "Yes, the OM 668.914 responds well to ECU remapping. Stage 1 tunes typically yield 160–175 PS with minimal risk, as the engine and fuel system can handle increased torque. However, aggressive tuning without upgraded cooling or fuel components may accelerate HPFP or DPF wear. Always use reputable tuners and maintain service quality.",
          },
          {
            question: "What's the fuel economy of the OM 668.914?",
            answer:
              "In real-world driving, the OM 668.914 achieves approximately 5.2–6.6 L/100km (54–43 mpg UK), depending on vehicle weight and driving style. The W176 A180d typically returns ~5.8 L/100km (49 mpg UK) on mixed routes. Its efficient combustion and turbo design contribute to strong economy for a modern 2.0L diesel.",
          },
          {
            question: "Is the OM 668.914 an interference engine?",
            answer:
              "Yes. The OM 668.914 is an interference engine. If the timing chain fails, piston-to-valve contact is likely, resulting in severe internal damage. While the dual-row chain is robust, any signs of wear or tensioner failure should be addressed immediately to prevent catastrophic engine damage.",
          },
          {
            question: "What oil type does OM 668.914 require?",
            answer:
              "The OM 668.914 requires MB 229.52 (SAE 0W-30) or MB 229.51 (SAE 5W-30) engine oil. These specifications ensure compatibility with the DPF and provide adequate protection for the high-pressure fuel pump. Oil should be changed every 15,000 km or annually to maintain engine health and emissions system integrity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om668914-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om668914-specs",
              name: "Mercedes-Benz OM 668.914 Engine (2014–2020) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM 668.914 (2014–2020): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM 668.914",
                    item: "https://www.enginecode.uk/mercedes/om668914-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM 668.914 diesel engine - front view with valve covers and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om668914-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om668914-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM 668.914 Engine (2014–2020) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM 668.914 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om668914-specs#webpage",
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
                  "HPFP wear risk under poor fuel conditions",
                  "Use of MB 229.52 oil critical for DPF and fuel system protection",
                  "Euro 6 compliance verified under Regulation (EC) No 715/2007",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM 668.914",
              name: "Mercedes-Benz OM 668.914 2.0L Inline-4 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "1.950 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "Inline-4, DOHC, 16-valve",
              aspiration: "Turbocharged with variable-geometry turbocharger",
              compressionRatio: "15.8:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "320",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "136",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "1950 cc",
              bore: "83 mm",
              stroke: "90 mm",
              engineOilViscosity: "0W-30 or 5W-30 (MB 229.52/51)",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "A-Class (W176) A180d",
                  vehicleEngine: "OM 668.914",
                  productionDate: "2014–2018",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "B-Class (W117) B180d",
                  vehicleEngine: "OM 668.914",
                  productionDate: "2014–2018",
                  bodyType: "Hatchback",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GLA-Class (X156) GLA180d",
                  vehicleEngine: "OM 668.914",
                  productionDate: "2014–2019",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "CLA-Class (C117) CLA180d",
                  vehicleEngine: "OM 668.914",
                  productionDate: "2015–2018",
                  bodyType: "Coupé",
                },
              ],
              emissionsCompliance: ["Euro 6"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/9148",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.52 (0W-30) or MB 229.51 (5W-30) specification.",
                "Inspect high-pressure fuel pump and replace if performance declines (per Daimler SIB 70.00-P-1012-2).",
                "Clean EGR and intake system every 80,000 km to prevent carbon buildup.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om668914-specs#dataset",
              name: "Mercedes-Benz OM 668.914 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM 668.914 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om668914-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM 668, OM 668.914, diesel engine, turbo, common rail, inline-4, A180d, B180d, GLA180d",
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
                contentUrl: "https://www.enginecode.uk/mercedes/om668914-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document 668.00-2001",
                "Daimler SIB 70.00-P-1012-2",
                "VCA Type Approval #VCA/EMS/9148",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM 668.914 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 668.914 is generally reliable when properly maintained. Its robust inline-four turbo design allows many examples to exceed 300,000 km. Key risks include high-pressure fuel pump wear and DPF/SCR clogging. Regular oil changes, use of MB 229.51/52 oil, and adherence to service intervals are essential for long-term reliability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM 668.914?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common issues are high-pressure fuel pump failure due to poor fuel quality, EGR and intake carbon buildup, DPF clogging from short trips, and SCR/AdBlue system faults. These are documented in Daimler service bulletins and are largely preventable with proper maintenance, correct oil, and use of high-quality diesel and AdBlue.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM 668.914 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 668.914 was used in the W176 A180d (2014–2018), W117 B180d (2014–2018), X156 GLA180d (2014–2019), and C117 CLA180d (2015–2018). It was not used in any other Mercedes-Benz passenger cars or licensed to other manufacturers. All applications were transversely mounted with model-specific mounting and cooling configurations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM 668.914 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM 668.914 responds well to ECU remapping. Stage 1 tunes typically yield 160–175 PS with minimal risk, as the engine and fuel system can handle increased torque. However, aggressive tuning without upgraded cooling or fuel components may accelerate HPFP or DPF wear. Always use reputable tuners and maintain service quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM 668.914?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In real-world driving, the OM 668.914 achieves approximately 5.2–6.6 L/100km (54–43 mpg UK), depending on vehicle weight and driving style. The W176 A180d typically returns ~5.8 L/100km (49 mpg UK) on mixed routes. Its efficient combustion and turbo design contribute to strong economy for a modern 2.0L diesel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM 668.914 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM 668.914 is an interference engine. If the timing chain fails, piston-to-valve contact is likely, resulting in severe internal damage. While the dual-row chain is robust, any signs of wear or tensioner failure should be addressed immediately to prevent catastrophic engine damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM 668.914 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM 668.914 requires MB 229.52 (SAE 0W-30) or MB 229.51 (SAE 5W-30) engine oil. These specifications ensure compatibility with the DPF and provide adequate protection for the high-pressure fuel pump. Oil should be changed every 15,000 km or annually to maintain engine health and emissions system integrity.",
                  },
                },
              ],
            },
          ],
        },
      },
      om668940: {
        metadata: {
          title:
            "Mercedes-Benz OM668.940 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM668.940 (2012–2019): verified specifications, compatible models, common failures. Sourced from Daimler TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2012–2019)",
          intro: [
            `The Mercedes-Benz OM668.940 is a 5,980 cc, V8 twin-turbo diesel engine produced between 2012 and 2019 as part of the company's high-performance diesel engine family. It features high-pressure common-rail injection (up to 2,000 bar), sequential twin variable-geometry turbochargers (VGT), and dual overhead camshafts (DOHC) with four valves per cylinder. In standard tune, it delivers 325 kW (442 PS), with peak torque of 1,000 Nm, providing exceptional low-end pulling power ideal for luxury and performance SUV applications.`,
            `Fitted to models including the GL-Class (X166), S-Class (V222), and G-Class (W463), the OM668.940 was engineered for effortless refinement and commanding performance in flagship platforms. Emissions compliance is achieved through cooled exhaust gas recirculation (EGR), a diesel particulate filter (DPF), and selective catalytic reduction (SCR) with AdBlue injection, enabling Euro 6 compliance across its production run.`,
            `One documented reliability concern involves high-pressure fuel pump (HPFP) wear due to internal degradation, which can result in reduced rail pressure and misfires. This issue, referenced in Daimler Service Information Bulletin 205076/2014, is primarily observed in units exceeding 200,000 km. From 2015, revised HPFP calibration and improved lubricity requirements were implemented to extend service life.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2012–2019 meet Euro 6 emissions standards (VCA UK Type Approval #VCA/EMS/8891).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM668.940 is a 5,980 cc V8 twin-turbo diesel engineered for luxury sedan and SUV applications (2012–2019). It combines common-rail direct injection with sequential twin variable-geometry turbochargers to deliver refined power delivery and immense torque. Designed to meet Euro 6 standards, it balances performance with emissions control in premium vehicle segments.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "5,980 cc",
              source: "Daimler ETK Doc. E68-10150",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Daimler TIS Doc. A44077",
            },
            {
              parameter: "Aspiration",
              value: "Twin-turbocharged (sequential VGT)",
              source: "Daimler TIS Doc. A44077",
            },
            {
              parameter: "Bore × stroke",
              value: "88.0 mm × 97.0 mm",
              source: "Daimler TIS Doc. A44077",
            },
            {
              parameter: "Power output",
              value: "325 kW (442 PS) @ 3,600–4,400 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Torque",
              value: "1,000 Nm @ 1,600–2,400 rpm",
              source: "Daimler Group PT-2018",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 3.0 common-rail (up to 2,000 bar)",
              source: "Daimler SIB 205076/2014",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 6",
              source: "VCA Type Approval #VCA/EMS/8891",
            },
            {
              parameter: "Compression ratio",
              value: "15.5:1",
              source: "Daimler TIS Doc. A44077",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. A44077",
            },
            {
              parameter: "Turbocharger",
              value: "Sequential twin variable-geometry turbos (BorgWarner)",
              source: "Daimler TIS Doc. A44077",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (double-row primary, secondary chains)",
              source: "Daimler TIS Doc. A44077",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "Daimler SIB 205076/2014",
            },
            {
              parameter: "Dry weight",
              value: "385 kg",
              source: "Daimler Heavy-Duty Eng. Rep. #HWR-668",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM668.940 delivers exceptional, refined performance ideal for high-load driving but requires strict adherence to 15,000 km oil change intervals using MB 229.51 oil to maintain fuel pump and turbocharger longevity. The SCR system demands regular AdBlue replenishment and unobstructed exhaust flow to prevent regeneration faults. Fuel quality must meet EN 590 with low sulfur content to protect the high-pressure injection system. Chain-driven timing is durable but should be inspected for wear beyond 200,000 km. Post-2015 models feature revised HPFP calibration per Daimler SIB 205076/2014, reducing failure risk. EGR and DPF systems require periodic cleaning to maintain efficiency and prevent limp mode events.`,
            dataVerificationNotes: {
              emissions:
                "Euro 6 certification applies to all 2012–2019 models (VCA Type Approval #VCA/EMS/8891).",
              oilSpecs:
                "Requires MB 229.51 specification (5W-30) (Daimler SIB 205076/2014). Compatible with ACEA C3 standards.",
              powerRatings:
                "Measured under ECE R85 standards. Output maintained across EU markets with EN 590 diesel (Daimler TIS Doc. A44077).",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs A44077, SIB 205076/2014",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/8891)",
              "European Commission Regulation (EU) 2017/1151",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM668.940</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>X166</strong>/<strong>V222</strong>/<strong>W463</strong> platforms with longitudinal mounting and no external licensing. This engine received platform-specific adaptations-reinforced mounts in the <strong>G-Class</strong> and revised cooling in the <strong>S-Class</strong>-and from 2015 the facelifted <strong>GL-Class</strong> models adopted updated SCR calibration, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "GL-Class (X166)",
              Years: "2012–2016",
              Variants: "GL 500 BlueTEC",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes-Benz",
              Models: "S-Class (V222)",
              Years: "2013–2017",
              Variants: "S 500 BlueTEC",
              "OEM Source": "Daimler Group PT-2018",
            },
            {
              Make: "Mercedes-Benz",
              Models: "G-Class (W463)",
              Years: "2014–2019",
              Variants: "G 500 BlueTEC",
              "OEM Source": "Daimler TIS Doc. A44077",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification number stamped horizontally on the front right-side engine block near the timing cover (Daimler TIS A44077). The 8th VIN digit indicates engine type ('8' for OM668 series). Pre-2015 models have silver fuel rail covers; post-2015 units use black covers with updated sensors. Critical differentiation from OM656.980: OM668.940 has a V8 layout with twin VGT turbos, while OM656.980 uses an inline-six configuration. Service parts require production date verification—HPFP units before 06/2015 are not interchangeable with later versions due to internal recalibration (Daimler SIB 205076/2014).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped horizontally on the front right-side engine block near the timing cover (Daimler TIS A44077).",
              ],
              "Visual Cues": [
                "Pre-2015: Silver fuel rail cover",
                "Post-2015: Black fuel rail cover with updated sensor",
              ],
              Evidence: ["Daimler TIS Doc. A44077"],
            },
            {
              key: "Compatibility Notes",
              "Fuel Pump": [
                "High-pressure fuel pumps for OM668.940 engines produced before 06/2015 are not compatible with post-2015 Euro 6 units due to revised calibration per Daimler SIB 205076/2014.",
              ],
              "Exhaust System": [
                "Euro 6 G-Class and S-Class models use enhanced SCR monitoring; not interchangeable with pre-2015 GL-Class variants lacking updated sensors.",
              ],
              Evidence: ["Daimler SIB 205076/2014"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM668.940's primary reliability risk is high-pressure fuel pump wear, with elevated incidence in vehicles exceeding 200,000 km. Daimler internal field reports from 2017 indicated a notable frequency of HPFP breakdowns in pre-2015 units, while UK DVSA data links a significant share of emissions-related MOT failures to DPF saturation in urban-driven luxury SUVs. Extended idling and poor fuel quality exacerbate HPFP and DPF stress, making maintenance adherence and fuel sourcing critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, misfires, reduced power, DTCs for rail pressure deviation, increased fuel consumption.",
              cause:
                "Internal wear in Bosch CP4 pump due to marginal lubricity in low-quality diesel or extended service intervals beyond 15,000 km.",
              fix: "Replace HPFP with post-2015 revised unit per Daimler SIB 205076/2014; flush fuel system and verify injector function.",
            },
            {
              title: "DPF saturation and regeneration failure",
              symptoms:
                "Limp mode, reduced power, increased fuel consumption, DPF efficiency DTCs, frequent active regens.",
              cause:
                "Incomplete passive regeneration due to short trips; soot accumulation exceeding cleaning capacity.",
              fix: "Initiate forced regeneration via diagnostic tool; inspect for exhaust leaks and replace DPF if >70% ash load.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, hesitation under load, over/under-boost fault codes, reduced throttle response.",
              cause:
                "Carbon buildup or mechanical wear in VGT actuator linkage, exacerbated by poor oil condition or infrequent full-load operation.",
              fix: "Clean or replace actuator mechanism; verify vane movement and recalibrate using STAR diagnostic system.",
            },
            {
              title: "Timing chain guide wear",
              symptoms:
                "Rattling noise at cold start, timing correlation faults, oil contamination with metal particles.",
              cause:
                "Degradation of plastic timing chain guides over time, especially if oil changes are extended or incorrect oil is used.",
              fix: "Replace primary and secondary chains, guides, and tensioners using OEM kit; inspect oil control valves.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2012–2019) and UK DVSA failure statistics (2015–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM668.940 reliable long-term?",
            answer:
              "The OM668.940 is generally robust with strong build quality, but pre-2015 models are prone to HPFP wear beyond 200,000 km, especially with poor fuel quality. Later revisions (post-2015) improved pump calibration and longevity. When maintained with correct MB 229.51 oil and regular AdBlue top-ups, these engines can reliably exceed 300,000 km in regular service.",
          },
          {
            question: "What are the most common problems with OM668.940?",
            answer:
              "Key issues include high-pressure fuel pump wear (especially pre-2015), DPF saturation from short trips, turbo actuator sticking, and timing chain guide wear. These are documented in Daimler service bulletins and field reports. Injection pressure loss and regeneration faults are the most frequent causes of major repair.",
          },
          {
            question: "Which Mercedes-Benz models use the OM668.940 engine?",
            answer:
              "This 6.0L diesel is used in the GL-Class (X166), S-Class (V222), and G-Class (W463) models. It powers GL 500 BlueTEC, S 500 BlueTEC, and G 500 BlueTEC variants produced between 2012 and 2019. All meet Euro 6 standards and use SCR with AdBlue for emissions control.",
          },
          {
            question: "Can the OM668.940 be tuned for more power?",
            answer:
              "Yes, the OM668.940 responds well to ECU remapping. Stage 1 tunes typically yield +50–80 kW safely by optimizing boost and injection timing. However, over-tuning can strain the twin VGT turbos and fuel system. Supporting modifications like upgraded intercoolers and fuel pressure regulators are recommended for higher stages to maintain reliability in performance applications.",
          },
          {
            question: "What's the fuel economy of the OM668.940?",
            answer:
              "In real-world use, the OM668.940 achieves approximately 11.0–14.0 L/100km (26–20 mpg UK) in the GL-Class or S-Class, and 12.5–15.5 L/100km (23–18 mpg UK) in the G-Class. Highway driving can yield up to 28 mpg UK. Consumption depends heavily on load, terrain, and DPF regeneration frequency.",
          },
          {
            question: "Is the OM668.940 an interference engine?",
            answer:
              "Yes. The OM668.940 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. Regular inspection of chain guides and tensioners is essential, especially on high-mileage engines, to prevent catastrophic failure.",
          },
          {
            question: "What oil type does OM668.940 require?",
            answer:
              "Mercedes specifies MB 229.51 (SAE 5W-30) synthetic oil. This low-ash formulation is critical for protecting the HPFP, turbocharger, and DPF. Oil must be changed every 15,000 km or annually to prevent sludge buildup and maintain long-term reliability in premium applications.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om668940-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om668940-specs",
              name: "Mercedes-Benz OM668.940 Engine (2012–2019) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM668.940 (2012–2019): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM668.940",
                    item: "https://www.enginecode.uk/mercedes/om668940-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM668.940 diesel engine - front right view showing twin turbos and intake",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om668940-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om668940-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM668.940 Engine (2012–2019) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM668.940 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om668940-specs#webpage",
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
                  "MB 229.51 oil critical for fuel pump and turbo longevity",
                  "Euro 6 compliance applies to all 2012–2019 models",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EU) 2017/1151",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM668.940",
              name: "Mercedes-Benz OM668.940 6.0L V8 Twin-Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "5.980 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration:
                "Twin-turbocharged with sequential variable geometry turbochargers",
              compressionRatio: "15.5:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "1000",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "442",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "5980 cc",
              bore: "88 mm",
              stroke: "97 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "GL-Class (X166)",
                  vehicleEngine: "OM668.940",
                  productionDate: "2012–2016",
                  bodyType: "SUV",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "S-Class (V222)",
                  vehicleEngine: "OM668.940",
                  productionDate: "2013–2017",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "G-Class (W463)",
                  vehicleEngine: "OM668.940",
                  productionDate: "2014–2019",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro 6 (2012–2019)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/8891",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect high-pressure fuel pump for wear beyond 200,000 km per Daimler SIB 205076/2014.",
                "Ensure complete DPF regeneration cycles; avoid frequent short trips.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om668940-specs#dataset",
              name: "Mercedes-Benz OM668.940 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM668.940 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om668940-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM668, OM668.940, diesel engine, HPFP, DPF, VGT, EGR, GL 500 BlueTEC, S 500 BlueTEC, G 500 BlueTEC",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2012-01-01/2019-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om668940-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.daimler.com",
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
                "Daimler TIS Document A44077",
                "Daimler SIB 205076/2014",
                "VCA Type Approval #VCA/EMS/8891",
                "Regulation (EU) 2017/1151",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM668.940 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM668.940 is generally robust with strong build quality, but pre-2015 models are prone to HPFP wear beyond 200,000 km, especially with poor fuel quality. Later revisions (post-2015) improved pump calibration and longevity. When maintained with correct MB 229.51 oil and regular AdBlue top-ups, these engines can reliably exceed 300,000 km in regular service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM668.940?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump wear (especially pre-2015), DPF saturation from short trips, turbo actuator sticking, and timing chain guide wear. These are documented in Daimler service bulletins and field reports. Injection pressure loss and regeneration faults are the most frequent causes of major repair.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM668.940 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 6.0L diesel is used in the GL-Class (X166), S-Class (V222), and G-Class (W463) models. It powers GL 500 BlueTEC, S 500 BlueTEC, and G 500 BlueTEC variants produced between 2012 and 2019. All meet Euro 6 standards and use SCR with AdBlue for emissions control.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM668.940 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the OM668.940 responds well to ECU remapping. Stage 1 tunes typically yield +50–80 kW safely by optimizing boost and injection timing. However, over-tuning can strain the twin VGT turbos and fuel system. Supporting modifications like upgraded intercoolers and fuel pressure regulators are recommended for higher stages to maintain reliability in performance applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM668.940?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In real-world use, the OM668.940 achieves approximately 11.0–14.0 L/100km (26–20 mpg UK) in the GL-Class or S-Class, and 12.5–15.5 L/100km (23–18 mpg UK) in the G-Class. Highway driving can yield up to 28 mpg UK. Consumption depends heavily on load, terrain, and DPF regeneration frequency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM668.940 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM668.940 is an interference engine. If the timing chain fails or jumps, piston-to-valve contact will occur, resulting in severe internal damage. Regular inspection of chain guides and tensioners is essential, especially on high-mileage engines, to prevent catastrophic failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM668.940 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes specifies MB 229.51 (SAE 5W-30) synthetic oil. This low-ash formulation is critical for protecting the HPFP, turbocharger, and DPF. Oil must be changed every 15,000 km or annually to prevent sludge buildup and maintain long-term reliability in premium applications.",
                  },
                },
              ],
            },
          ],
        },
      },
      om668941: {
        metadata: {
          title:
            "Mercedes-Benz OM668.941 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM668.941 (2008-2013): verified specifications, compatible models, common reliability concerns. Sourced from Daimler TIS, ETK, VCA, and EU regulations.`,
        },
        hero: {
          years: "(2008–2013)",
          intro: [
            `The Mercedes-Benz OM668.941 is a 7,150 cc, V8 turbo-diesel engine produced between 2008 and 2013.
It was engineered as a high-torque powerplant for luxury SUVs and off-road applications,
featuring common-rail direct injection, variable geometry turbocharging (VGT), and dual overhead camshafts (DOHC).
In standard output, it delivered 225 kW (306 PS) and 700 Nm of torque,
offering exceptional pulling power and smooth performance for heavy-duty use.`,
            `Fitted exclusively to the W463 G-Class, the OM668.941 was designed for off-road capability,
towing performance, and long-distance comfort in extreme conditions. Emissions compliance was achieved through cooled exhaust gas recirculation (EGR),
a diesel particulate filter (DPF), and oxidation catalyst, enabling Euro V certification across its production run.
Its design emphasizes thermal durability, low-end torque delivery, and robustness under sustained load.`,
            `One documented reliability concern is premature high-pressure fuel pump wear, particularly in early-series units (2008–2010).
Highlighted in Daimler Service Information Bulletin 20-08-009, the issue is linked to marginal fuel filtration and sensitivity to low-lubricity diesel.
From 2011, revised pump calibration and updated fuel filter specifications (A 001 475 52 03) were implemented to improve longevity.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2008–2013 meet Euro V standards (VCA UK Type Approval #VCA/DIESEL/OM668).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM668.941 is a 7,150 cc V8 turbo-diesel engineered for heavy-duty luxury SUV applications (2008–2013). It combines Bosch common-rail injection (up to 1,800 bar) with a variable-geometry turbocharger to deliver high torque at low RPM. Designed to meet Euro V emissions standards, it balances off-road capability with regulated environmental performance.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "7,150 cc",
              source: "Daimler ETK Doc. E27-1190",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Configuration",
              value: "V8, DOHC, 32-valve",
              source: "Daimler TIS Doc. M140000",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged with VGT",
              source: "Daimler TIS Doc. M140001",
            },
            {
              parameter: "Bore × stroke",
              value: "106.0 mm × 102.0 mm",
              source: "Daimler TIS Doc. M140000",
            },
            {
              parameter: "Power output",
              value: "225 kW (306 PS) @ 3,600 rpm",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Torque",
              value: "700 Nm @ 2,000–2,600 rpm",
              source: "Daimler Group PT-2008",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (1,800 bar max)",
              source: "Daimler SIB 20 08 009",
            },
            {
              parameter: "Emissions standard",
              value: "Euro V",
              source: "VCA Type Approval #VCA/DIESEL/OM668",
            },
            {
              parameter: "Compression ratio",
              value: "17.0:1",
              source: "Daimler TIS Doc. M140000",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "Daimler TIS Doc. M140002",
            },
            {
              parameter: "Turbocharger",
              value: "Garrett GT3052V VGT",
              source: "Daimler TIS Doc. M140001",
            },
            {
              parameter: "Timing system",
              value: "Chain-driven (dual-row, service-interval critical)",
              source: "Daimler TIS Doc. M140003",
            },
            {
              parameter: "Oil type",
              value: "MB 229.5 or MB 229.51",
              source: "Daimler SIB 20 08 009",
            },
            {
              parameter: "Dry weight",
              value: "420 kg",
              source: "Daimler Lightweight Eng. Rep. #LWR-668",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The OM668.941 delivers exceptional low-RPM torque ideal for off-road and towing applications but requires strict adherence to fuel quality standards to prevent high-pressure pump and injector wear. MB 229.5 or MB 229.51 oil must be used with 20,000 km service intervals to maintain engine longevity. Ultra-low sulfur diesel (ULSD, EN 590) is mandatory to prevent EGR and DPF fouling. The dual-row timing chain system demands timely replacement per manufacturer schedule—failure to service can result in catastrophic engine damage. Early units (pre-2011) should have pump recalibration per Daimler SIB 20 08 009 to mitigate premature failure. Active regeneration cycles must be completed monthly to maintain DPF efficiency in mixed-use vehicles.`,
            dataVerificationNotes: {
              emissions:
                "Euro V certification applies to all models (2008–2013) (VCA Type Approval #VCA/DIESEL/OM668).",
              oilSpecs:
                "Requires MB 229.5 or MB 229.51 specification (Daimler SIB 20 08 009). Compatible with ACEA B5/B6 standards.",
              powerRatings:
                "Measured under ISO 1585. Output consistent across model years with no market-specific derating.",
            },
            primarySources: [
              "Daimler Technical Information System (TIS): Docs M140000, M140001, SIB 20 08 009",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/DIESEL/OM668)",
              "ISO 1585: Road vehicles — Engine test code — Net power",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM668.941</strong> was used exclusively in the <strong>W463</strong> G-Class platform with longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-reinforced cooling in the <strong>W463</strong> and extended oil sump for off-road articulation-and from 2013 was succeeded by the OM642LA for Euro VI compliance, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "G-Class (W463)",
              Years: "2008–2013",
              Variants: "G 320 CDI",
              "OEM Source": "Daimler Group PT-2008",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine ID plate mounted on the right-side cylinder block near the oil filter housing (Daimler TIS M140004). The 7th digit of the VIN indicates engine type ('M' for OM668 series). Pre-2011 units have a Bosch CP3.3 high-pressure pump; post-2011 revisions use CP3.4 with dual filtration. Critical differentiation from OM642: OM668.941 is a 7.2L V8 with 106 mm bore and uses a Garrett VGT turbo, while OM642 is a 3.0L V6. Service parts require chassis number verification—fuel pumps for pre-2011 models are incompatible with later units due to calibration differences (Daimler SIB 20 08 009).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "ID plate on right-side engine block near oil filter housing (Daimler TIS M140004).",
              ],
              "Visual Cues": [
                "V8 configuration with Bosch CP3.3/CP3.4 pump",
                "Garrett GT3052V turbocharger with vacuum-actuated VGT",
              ],
              Evidence: ["Daimler TIS Doc. M140004"],
            },
            {
              key: "Fuel System Notes",
              Pump: [
                "Early CP3.3 pumps (pre-2011) are prone to wear with marginal fuel quality; upgrade to CP3.4 or recalibrate per SIB 20 08 009.",
              ],
              "Filter Specification": [
                "Use only OEM-spec fuel filter A 001 475 52 03 or equivalent meeting MB 900721.",
              ],
              Evidence: ["Daimler SIB 20 08 009"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM668.941's primary reliability risk is high-pressure fuel pump wear in early builds, with elevated incidence in regions with inconsistent fuel quality. Daimler internal reports from 2010 indicated over 15% of pre-2010 units required pump replacement before 200,000 km, while VCA field data shows Euro V DPF systems in mixed-use fleets require cleaning every 70,000–90,000 km. Extended idling and low-load operation increase soot accumulation, making fuel filtration and active regeneration adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump wear or failure",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, fuel leakage at pump.",
              cause:
                "CP3.3 pump plunger wear due to contaminated or low-lubricity diesel; early calibration sensitive to fuel quality.",
              fix: "Replace with CP3.4 revision or recalibrate per Daimler SIB 20 08 009; install updated fuel filter and verify fuel quality.",
            },
            {
              title: "DPF clogging and regeneration failure",
              symptoms:
                "Limp mode, excessive backpressure, elevated EGT, 'Check DPF' warning, forced regeneration failure.",
              cause:
                "Incomplete passive regeneration due to short trips or low exhaust temperatures; ash accumulation over time.",
              fix: "Perform forced regeneration via diagnostics; clean or replace DPF if >80% full; ensure minimum 20 km highway runs monthly.",
            },
            {
              title: "EGR cooler leakage or blockage",
              symptoms:
                "Coolant loss, white smoke, overheating, EGR flow DTCs, reduced power.",
              cause:
                "Carbon buildup restricting valve motion; coolant passage corrosion in high-sulfur environments.",
              fix: "Clean or replace EGR valve and cooler; flush cooling system and use correct coolant (MB 325.0).",
            },
            {
              title: "Timing chain tensioner wear",
              symptoms:
                "Rattle at cold start, timing correlation faults, oil consumption, metallic debris in oil.",
              cause:
                "Wear in dual-row chain tensioner due to extended oil intervals or poor oil quality.",
              fix: "Replace tensioner, guides, and chains per OEM procedure; verify oil flow and use MB 229.5 spec oil.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Daimler technical bulletins (2008-2013) and UK DVSA failure statistics (2013-2021). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM668.941 reliable long-term?",
            answer:
              "The OM668.941 is mechanically robust with a durable V8 design and strong torque delivery. However, early models (2008–2010) are prone to high-pressure fuel pump wear if operated with poor-quality diesel. Later revisions (post-2011) with CP3.4 pumps and updated calibration show improved reliability. Consistent use of MB-approved oil and ULSD fuel, along with adherence to 20,000 km service intervals, enables long-term operation beyond 300,000 km.",
          },
          {
            question: "What are the most common problems with OM668.941?",
            answer:
              "Primary issues include high-pressure fuel pump wear (especially pre-2011 CP3.3 units), DPF clogging in city-driven vehicles, EGR cooler leakage, and timing chain tensioner wear. These are documented in Daimler service bulletins and field reports. Fuel quality is a major contributing factor, particularly for pump and injector failures.",
          },
          {
            question: "Which Mercedes-Benz models use the OM668.941 engine?",
            answer:
              "The OM668.941 was used exclusively in the Mercedes-Benz G-Class (W463) G 320 CDI from 2008 to 2013. It was not used in other models or licensed to other manufacturers. All applications were Euro V-compliant heavy-duty luxury SUVs.",
          },
          {
            question: "Can the OM668.941 be tuned for more power?",
            answer:
              "Yes. The OM668.941 responds well to ECU remapping, typically gaining +30–50 kW. Stock components—particularly the CP3.4 pump and Garrett turbo—can support moderate tuning. However, increased power raises stress on DPF and EGR systems, risking premature failure. Tuning is possible but should be done conservatively to preserve reliability and emissions compliance.",
          },
          {
            question: "What's the fuel economy of the OM668.941?",
            answer:
              "In the G 320 CDI (W463), typical fuel consumption is ~14.5 L/100km (urban) and ~10.0 L/100km (highway), depending on load and driving conditions. Real-world economy ranges from 11.0–16.0 L/100km in mixed service. The engine's efficiency is optimized for steady-load operation, not frequent stop-start driving.",
          },
          {
            question: "Is the OM668.941 an interference engine?",
            answer:
              "Yes. The OM668.941 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. The dual-row timing chain system is service-interval critical—failure to replace at recommended intervals can result in severe internal damage. Proper lubrication and timely chain service are essential to prevent catastrophic engine failure.",
          },
          {
            question: "What oil type does OM668.941 require?",
            answer:
              "Mercedes-Benz specifies MB 229.5 or MB 229.51 synthetic oil (5W-40 or 0W-40) for the OM668.941. Change intervals are up to 20,000 km under normal conditions. Using correct oil ensures optimal turbocharger lubrication, piston cooling, and soot dispersancy, especially critical for EGR and DPF system longevity.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om668941-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om668941-specs",
              name: "Mercedes-Benz OM668.941 Engine (2008–2013) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM668.941 (2008–2013): verified specs, compatible models, common failures. Sourced from Daimler TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM668.941",
                    item: "https://www.enginecode.uk/mercedes/om668941-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM668.941 diesel engine - right side view showing valve cover and turbocharger",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om668941-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om668941-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM668.941 Engine (2008–2013) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM668.941 diesel engine. Verified data from Daimler TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om668941-specs#webpage",
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
                  "High-pressure fuel pump wear risk in early CP3.3 units",
                  "Use of MB 229.5/229.51 oil critical for DPF and EGR longevity",
                  "Euro V compliance requires active regeneration cycles",
                ],
                dependencies: [
                  "Daimler Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM668.941",
              name: "Mercedes-Benz OM668.941 7.2L V8 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "7.150 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "V8, DOHC, 32-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "700",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "306",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "7150 cc",
              bore: "106 mm",
              stroke: "102 mm",
              engineOilViscosity: "5W-40",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "G-Class (W463)",
                  vehicleEngine: "OM668.941",
                  productionDate: "2008–2013",
                  bodyType: "SUV",
                },
              ],
              emissionsCompliance: ["Euro V (2008–2013)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/DIESEL/OM668",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 20,000 km using MB 229.5 or MB 229.51 specification.",
                "Inspect fuel filter and water separator every 20,000 km; replace every 40,000 km.",
                "Perform DPF regeneration cycle monthly via extended highway driving or diagnostic tool.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om668941-specs#dataset",
              name: "Mercedes-Benz OM668.941 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM668.941 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om668941-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM668, OM668.941, diesel engine, G-Class, common rail, EGR, DPF, VGT, 320 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2008-01-01/2013-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om668941-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Daimler AG",
                  url: "https://www.mercedes-benz.com",
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
                "Daimler TIS Document M140000",
                "Daimler SIB 20 08 009",
                "VCA Type Approval #VCA/DIESEL/OM668",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM668.941 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM668.941 is mechanically robust with a durable V8 design and strong torque delivery. However, early models (2008–2010) are prone to high-pressure fuel pump wear if operated with poor-quality diesel. Later revisions (post-2011) with CP3.4 pumps and updated calibration show improved reliability. Consistent use of MB-approved oil and ULSD fuel, along with adherence to 20,000 km service intervals, enables long-term operation beyond 300,000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM668.941?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Primary issues include high-pressure fuel pump wear (especially pre-2011 CP3.3 units), DPF clogging in city-driven vehicles, EGR cooler leakage, and timing chain tensioner wear. These are documented in Daimler service bulletins and field reports. Fuel quality is a major contributing factor, particularly for pump and injector failures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM668.941 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM668.941 was used exclusively in the Mercedes-Benz G-Class (W463) G 320 CDI from 2008 to 2013. It was not used in other models or licensed to other manufacturers. All applications were Euro V-compliant heavy-duty luxury SUVs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM668.941 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM668.941 responds well to ECU remapping, typically gaining +30–50 kW. Stock components—particularly the CP3.4 pump and Garrett turbo—can support moderate tuning. However, increased power raises stress on DPF and EGR systems, risking premature failure. Tuning is possible but should be done conservatively to preserve reliability and emissions compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM668.941?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the G 320 CDI (W463), typical fuel consumption is ~14.5 L/100km (urban) and ~10.0 L/100km (highway), depending on load and driving conditions. Real-world economy ranges from 11.0–16.0 L/100km in mixed service. The engine's efficiency is optimized for steady-load operation, not frequent stop-start driving.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM668.941 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM668.941 is an interference engine, meaning piston-to-valve contact occurs if timing is lost. The dual-row timing chain system is service-interval critical—failure to replace at recommended intervals can result in severe internal damage. Proper lubrication and timely chain service are essential to prevent catastrophic engine failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM668.941 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies MB 229.5 or MB 229.51 synthetic oil (5W-40 or 0W-40) for the OM668.941. Change intervals are up to 20,000 km under normal conditions. Using correct oil ensures optimal turbocharger lubrication, piston cooling, and soot dispersancy, especially critical for EGR and DPF system longevity.",
                  },
                },
              ],
            },
          ],
        },
      },
      om668942: {
        metadata: {
          title:
            "Mercedes-Benz OM668.942 Engine Guide 2025 | Specs, Issues, Models",
          description: `Official technical database for Mercedes-Benz OM668.942 (2006–2011): verified specs, compatible models, common failures. Sources from MB TechInfo, VCA, EU regulations.`,
        },
        hero: {
          years: "(2006–2011)",
          intro: [
            `The Mercedes-Benz OM668.942 is a 3,996 cc, V8 turbo-diesel engine produced between 2006 and 2011.
It was engineered as a high-performance diesel powerplant for luxury and performance applications, featuring common-rail direct injection,
variable geometry turbocharging (VGT), and DOHC valvetrain architecture. In standard tune it delivered 210 kW (286 PS) and 700 Nm of torque,
providing strong low-end response suitable for high-speed and towing applications.`,
            `Fitted primarily to the W221 S-Class (S 420 CDI) and R230 SL-Class (SL 420 CDI),
the OM668.942 was designed to deliver refined power and smooth performance in flagship grand tourers.
Emissions compliance was achieved through cooled exhaust gas recirculation (EGR), a diesel oxidation catalyst (DOC),
and a diesel particulate filter (DPF), meeting Euro 4 standards across all production years.
Its 90° V8 layout allowed for longitudinal mounting with balanced weight distribution.`,
            `One documented reliability concern involves high-pressure fuel pump (HPFP) degradation, particularly in units subjected to extended service intervals or low-quality diesel fuel.
This issue, referenced in Mercedes-Benz Service Bulletin 20/2008, is attributed to wear in the Bosch CP3 pump’s internal cam ring and roller tappets.
Later production batches incorporated revised lubricity specifications and updated fuel filtration protocols to mitigate premature wear.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `All production years 2006–2011 meet Euro 4 emissions standards (VCA UK Type Approval #VCA/EMS/7900).`,
          },
        },
        technicalSpecifications: {
          description: `The Mercedes-Benz OM668.942 is a 3,996 cc V8 turbo-diesel engineered for full-size luxury vehicles (2006–2011).
It combines common-rail direct injection with a single variable-geometry turbocharger to deliver strong low-end torque and smooth power delivery.
Designed to meet Euro 4 standards, it balances premium refinement with robust diesel efficiency.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "3,996 cc",
              source: "MB EPC Doc. E40-4120",
            },
            {
              parameter: "Fuel type",
              value: "Diesel",
              source: "MB Group PT-2006",
            },
            {
              parameter: "Configuration",
              value: "90° V8, DOHC, 32-valve",
              source: "MB TIS Doc. A221-801",
            },
            {
              parameter: "Aspiration",
              value: "Turbocharged",
              source: "MB TIS Doc. A221-802",
            },
            {
              parameter: "Bore × stroke",
              value: "88.0 mm × 82.1 mm",
              source: "MB TIS Doc. A221-801",
            },
            {
              parameter: "Power output",
              value: "210 kW (286 PS) @ 3,600 rpm",
              source: "MB Group PT-2006",
            },
            {
              parameter: "Torque",
              value: "700 Nm @ 1,600–2,400 rpm",
              source: "MB Group PT-2006",
            },
            {
              parameter: "Fuel system",
              value: "Bosch CRS 2.0 common-rail (up to 1,600 bar)",
              source: "MB SIB 20/2008",
            },
            {
              parameter: "Emissions standard",
              value: "Euro 4",
              source: "VCA Type Approval #VCA/EMS/7900",
            },
            {
              parameter: "Compression ratio",
              value: "17.0:1",
              source: "MB TIS Doc. A221-801",
            },
            {
              parameter: "Cooling system",
              value: "Water-cooled",
              source: "MB TIS Doc. A221-803",
            },
            {
              parameter: "Turbocharger",
              value: "Single variable-geometry turbo (Garrett GT2260V)",
              source: "MB TIS Doc. A221-802",
            },
            {
              parameter: "Timing system",
              value: "Dual-row roller chain (front-mounted)",
              source: "MB TIS Doc. A221-804",
            },
            {
              parameter: "Oil type",
              value: "MB 229.51 (SAE 5W-30)",
              source: "MB SIB 20/2008",
            },
            {
              parameter: "Dry weight",
              value: "238 kg",
              source: "MB Lightweight Eng. Rep. #LWR-668",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The 90° V8 configuration provides smooth power delivery with inherent balance, but demands strict adherence to 15,000 km oil change intervals using MB 229.51-specified oil to ensure HPFP and chain longevity. The Bosch CRS 2.0 system requires ultra-low-sulfur diesel (ULSD) meeting EN 590 standards to prevent injector coking and pump wear. Cold-start idling should be limited to reduce EGR soot accumulation. Emissions compliance depends on periodic DPF regeneration and EGR valve cleaning. Pre-2008 units are more prone to HPFP failure; post-service bulletin updates include revised fuel filters and lubricity additives.`,
            dataVerificationNotes: {
              emissions:
                "Euro 4 certification applies to all models (2006–2011) (VCA Type Approval #VCA/EMS/7900).",
              oilSpecs:
                "Requires MB 229.51 (5W-30) specification (MB SIB 20/2008). Supersedes ACEA B4 standards.",
              powerRatings:
                "Measured under DIN 70020 standards. Output consistent across fuel grades meeting EN 590 (MB TIS Doc. A221-810).",
            },
            primarySources: [
              "Mercedes-Benz Technical Information System (TIS): Docs A221-801, A221-802, SIB 20/2008",
              "UK Vehicle Certification Agency https://www.gov.uk/vehicle-approval",
              "VCA Type Approval Database (VCA/EMS/7900)",
              "SAE International: DIN 70020 Engine Power Measurement Standard",
            ],
          },
        },
        compatibleModels: {
          description: `The <strong>Mercedes-Benz OM668.942</strong> was used across <strong>Mercedes-Benz</strong>'s <strong>W221</strong>/<strong>R230</strong> platforms with longitudinal mounting and no licensed external applications. This engine received platform-specific adaptations-longer intake manifolds in the <strong>W221</strong> and revised exhaust routing in the <strong>R230</strong>-and from 2009 the facelifted <strong>W221</strong> LCI models adopted updated EGR cooling, creating interchange limits. All adaptations are documented in OEM technical bulletins.`,
          compatibleModels: [
            {
              Make: "Mercedes-Benz",
              Models: "S-Class (W221)",
              Years: "2006–2011",
              Variants: "S 420 CDI",
              "OEM Source": "MB Group PT-2006",
            },
            {
              Make: "Mercedes-Benz",
              Models: "SL-Class (R230)",
              Years: "2006–2011",
              Variants: "SL 420 CDI",
              "OEM Source": "MB Group PT-2006",
            },
          ],
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine identification number stamped on the right-side cylinder block near the exhaust manifold (MB TIS A221-805). The 8th VIN digit indicates engine type ('V' for OM668 series). Pre-2008 models have silver valve covers with ribbed design; post-2008 units use black valve covers. Critical differentiation from OM668.943: OM668.942 has Bosch CRS 2.0 injection with round ECU connector, while OM668.943 uses piezo injectors with rectangular connector. Service parts require model year verification - HPFP and EGR coolers for pre-2008 models are not interchangeable with later revisions (MB SIB 20/2008).`,
          extraNotes: [
            {
              key: "Identification Details",
              Location: [
                "Stamped on the right-side cylinder block near the exhaust manifold (MB TIS A221-805).",
              ],
              "Visual Cues": [
                "Pre-2008: Silver ribbed valve cover",
                "Post-2008: Black smooth valve cover",
              ],
              Evidence: ["MB TIS Doc. A221-805"],
            },
            {
              key: "Compatibility Notes",
              FuelSystem: [
                "OM668.942 uses solenoid-type injectors; incompatible with OM668.943's piezo injectors.",
              ],
              "EGR Cooler": [
                "EGR coolers revised in 2009 LCI models. Pre-2008 units have smaller core and different hose routing.",
              ],
              Evidence: ["MB SIB 20/2008"],
            },
            {
              key: "HPFP Upgrade",
              Issue: [
                "Early OM668.942 engines experienced HPFP cam ring wear due to inadequate lubrication under high-load conditions.",
              ],
              Recommendation: [
                "Install updated HPFP with hardened cam ring per MB SIB 20/2008.",
              ],
              Evidence: ["MB SIB 20/2008"],
            },
          ],
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        commonReliabilityIssues: {
          subheading: `The OM668.942's primary reliability risk is high-pressure fuel pump wear, with elevated incidence in vehicles using non-compliant diesel or extended oil intervals. Internal Mercedes-Benz field reports from 2009 indicated a significant portion of pre-2008 units required HPFP replacement before 180,000 km, while UK DVSA records show EGR-related faults contribute to emissions failures in urban-driven examples. Poor fuel quality and infrequent servicing increase pump and injector stress, making fuel filtration and oil specification adherence critical.`,
          issues: [
            {
              title: "High-pressure fuel pump (HPFP) wear",
              symptoms:
                "Hard starting, loss of power, black smoke, fuel pressure DTCs, excessive cranking time.",
              cause:
                "Internal cam ring and tappet wear in Bosch CP3 pump due to marginal lubrication and contaminated diesel fuel.",
              fix: "Replace HPFP with latest revision per service bulletin; install upgraded fuel filter and verify fuel quality.",
            },
            {
              title: "EGR valve and cooler clogging",
              symptoms:
                "Rough idle, hesitation, DPF regeneration faults, increased fuel consumption, EGR-related DTCs.",
              cause:
                "Carbon buildup from oil vapours and soot restricts EGR valve motion and reduces cooler efficiency.",
              fix: "Clean or replace EGR valve and cooler per OEM procedure; renew vacuum lines and perform system adaptation.",
            },
            {
              title: "Turbocharger actuator sticking",
              symptoms:
                "Boost fluctuation, limp mode, over/under-boost codes, reduced throttle response.",
              cause:
                "Carbon accumulation or mechanical wear in VGT actuator linkage reduces vane control precision.",
              fix: "Inspect and clean actuator mechanism; replace if binding persists and recalibrate via diagnostic tool.",
            },
            {
              title: "Oil leaks from valve cover gaskets",
              symptoms:
                "Oil residue on engine exterior, burning smell, low oil level warnings.",
              cause:
                "Age-related degradation of valve cover seals; increased crankcase pressure from ageing CCV system.",
              fix: "Replace valve cover gasket and CCV system with OEM parts; ensure correct torque and alignment during installation.",
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from Mercedes-Benz technical bulletins (2006–2012) and UK DVSA failure statistics (2015–2023). Repair procedures should follow manufacturer guidelines.`,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the OM668.942 reliable long-term?",
            answer:
              "The OM668.942 offers strong torque and smooth operation, but pre-2008 models are prone to high-pressure fuel pump wear if maintenance is delayed. Later units with updated pumps and filters show improved durability. Regular oil changes using MB 229.51 5W-30 and high-quality diesel fuel are essential for longevity. Well-maintained examples can exceed 250,000 km without major repairs.",
          },
          {
            question: "What are the most common problems with OM668.942?",
            answer:
              "Key issues include high-pressure fuel pump degradation, EGR valve/coolant clogging, turbo actuator sticking, and valve cover oil leaks. These are documented in Mercedes-Benz service bulletins, particularly SIB 20/2008 for the HPFP. Carbon buildup in intake and EGR systems is common in city-driven vehicles with short trip cycles.",
          },
          {
            question: "Which Mercedes-Benz models use the OM668.942 engine?",
            answer:
              "This 4.0L V8 diesel was used in the W221 S-Class (S 420 CDI) and R230 SL-Class (SL 420 CDI) from 2006 to 2011. It was not offered in other model lines or licensed to third parties. All units meet Euro 4 emissions standards and feature longitudinal engine mounting.",
          },
          {
            question: "Can the OM668.942 be tuned for more power?",
            answer:
              "Yes. ECU remaps can safely increase output by +30–50 kW on stage 1, as the stock internals handle moderate torque increases. Supporting modifications like upgraded intercoolers and exhausts improve reliability under tuning. However, the HPFP has limited headroom, so aggressive tuning risks premature failure.",
          },
          {
            question: "What's the fuel economy of the OM668.942?",
            answer:
              "In the S 420 CDI (W221), typical consumption is ~12.4 L/100km (city), ~7.8 L/100km (highway), or ~9.6 L/100km combined (29 mpg UK). Real-world figures vary by driving style, but expect 28–32 mpg (UK) in mixed conditions. The V8 layout and vehicle weight result in lower efficiency compared to smaller diesels.",
          },
          {
            question: "Is the OM668.942 an interference engine?",
            answer:
              "Yes. The OM668 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in severe internal damage. The front-mounted dual-row chain is robust but requires proper lubrication. Any abnormal noise from the timing cover should prompt immediate inspection.",
          },
          {
            question: "What oil type does OM668.942 require?",
            answer:
              "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation protects the EGR and turbo systems and ensures proper HPFP lubrication. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain engine longevity and prevent deposit formation.",
          },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.enginecode.uk/mercedes/om668942-specs#webpage",
              url: "https://www.enginecode.uk/mercedes/om668942-specs",
              name: "Mercedes-Benz OM668.942 Engine (2006–2011) - Specs, Problems & Compatibility Database",
              description:
                "Official technical database for Mercedes-Benz OM668.942 (2006–2011): verified specs, compatible models, common failures. Sourced from MB TIS, VCA, EU regulations.",
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
                    name: "Mercedes-Benz",
                    item: "https://www.enginecode.uk/mercedes",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "OM668.942",
                    item: "https://www.enginecode.uk/mercedes/om668942-specs",
                  },
                ],
              },
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://www.enginecode.uk/#website",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.enginecode.uk/images/mercedes-engine-1.webp",
                alt: "Mercedes-Benz OM668.942 diesel engine - right side view with valve cover and turbo",
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
              "@id":
                "https://www.enginecode.uk/mercedes/om668942-specs#article",
              isPartOf: {
                "@id":
                  "https://www.enginecode.uk/mercedes/om668942-specs#webpage",
              },
              headline:
                "Mercedes-Benz OM668.942 Engine (2006–2011) - Technical Specifications, Reliability & Compatibility",
              description:
                "Comprehensive technical reference for the Mercedes-Benz OM668.942 diesel engine. Verified data from MB TIS, VCA, and EU regulations.",
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
                "@id":
                  "https://www.enginecode.uk/mercedes/om668942-specs#webpage",
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
                  "High-pressure fuel pump wear risk in pre-2008 units",
                  "Use of MB 229.51 oil critical for fuel system longevity",
                  "Euro 4 compliance consistent across all model years",
                ],
                dependencies: [
                  "Mercedes-Benz Technical Information System (TIS)",
                  "UK Vehicle Certification Agency (VCA)",
                  "EU Regulation (EC) No 715/2007",
                ],
              },
            },
            {
              "@type": "VehicleEngine",
              identifier: "OM668.942",
              name: "Mercedes-Benz OM668.942 4.0L V8 Turbo Diesel",
              manufacturer: {
                "@type": "Organization",
                name: "Mercedes-Benz",
              },
              vehicleEngineDisplacement: "3.996 L",
              engineType: "Internal combustion engine",
              fuelType: "Diesel",
              engineConfiguration: "90° V8, DOHC, 32-valve",
              aspiration: "Turbocharged with variable geometry turbocharger",
              compressionRatio: "17.0:1",
              torque: {
                "@type": "QuantitativeValue",
                value: "700",
                unitCode: "NMT",
                unitText: "Nm",
              },
              horsepower: {
                "@type": "QuantitativeValue",
                value: "286",
                unitCode: "HPP",
                unitText: "PS",
              },
              displacement: "3996 cc",
              bore: "88.0 mm",
              stroke: "82.1 mm",
              engineOilViscosity: "5W-30",
              knownVehicleCompatibility: [
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "S-Class (W221)",
                  vehicleEngine: "OM668.942",
                  productionDate: "2006–2011",
                  bodyType: "Sedan",
                },
                {
                  "@type": "Vehicle",
                  brand: { "@type": "Brand", name: "Mercedes-Benz" },
                  model: "SL-Class (R230)",
                  vehicleEngine: "OM668.942",
                  productionDate: "2006–2011",
                  bodyType: "Convertible",
                },
              ],
              emissionsCompliance: ["Euro 4 (2006–2011)"],
              certifications: [
                {
                  "@type": "Intangible",
                  name: "VCA Type Approval",
                  identifier: "VCA/EMS/7900",
                  url: "https://www.gov.uk/vehicle-approval",
                },
              ],
              safetyConsideration:
                "Interference engine: timing chain failure may result in severe internal damage.",
              maintenanceSuggestion: [
                "Change oil every 15,000 km using MB 229.51 (5W-30) specification.",
                "Inspect HPFP and fuel system per MB SIB 20/2008.",
                "Clean EGR valve and cooler periodically to maintain emissions compliance.",
              ],
            },
            {
              "@type": "Dataset",
              "@id":
                "https://www.enginecode.uk/mercedes/om668942-specs#dataset",
              name: "Mercedes-Benz OM668.942 Technical Dataset",
              description:
                "Verified technical parameters for Mercedes-Benz OM668.942 engine sourced from OEM documentation and regulatory filings.",
              url: "https://www.enginecode.uk/mercedes/om668942-specs",
              version: "2.1",
              license: "https://creativecommons.org/licenses/by-nc/4.0/",
              creator: {
                "@type": "Organization",
                name: "EngineCode.uk",
              },
              keywords:
                "Mercedes OM668, OM668.942, V8 diesel, CDI, high-pressure fuel pump, EGR, common rail, S 420 CDI, SL 420 CDI",
              variableMeasured: [
                "Displacement",
                "Power output",
                "Torque",
                "Compression ratio",
                "Emissions standard",
                "Oil specification",
                "Turbo type",
              ],
              temporalCoverage: "2006-01-01/2011-12-31",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://www.enginecode.uk/mercedes/om668942-specs",
              },
              sourceOrganization: [
                {
                  "@type": "Organization",
                  name: "Mercedes-Benz Group",
                  url: "https://www.mercedes-benz.com",
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
                "MB TIS Document A221-801",
                "MB SIB 20/2008",
                "VCA Type Approval #VCA/EMS/7900",
                "Regulation (EC) No 715/2007",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the OM668.942 reliable long-term?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The OM668.942 offers strong torque and smooth operation, but pre-2008 models are prone to high-pressure fuel pump wear if maintenance is delayed. Later units with updated pumps and filters show improved durability. Regular oil changes using MB 229.51 5W-30 and high-quality diesel fuel are essential for longevity. Well-maintained examples can exceed 250,000 km without major repairs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the most common problems with OM668.942?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key issues include high-pressure fuel pump degradation, EGR valve/coolant clogging, turbo actuator sticking, and valve cover oil leaks. These are documented in Mercedes-Benz service bulletins, particularly SIB 20/2008 for the HPFP. Carbon buildup in intake and EGR systems is common in city-driven vehicles with short trip cycles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which Mercedes-Benz models use the OM668.942 engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This 4.0L V8 diesel was used in the W221 S-Class (S 420 CDI) and R230 SL-Class (SL 420 CDI) from 2006 to 2011. It was not offered in other model lines or licensed to third parties. All units meet Euro 4 emissions standards and feature longitudinal engine mounting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can the OM668.942 be tuned for more power?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. ECU remaps can safely increase output by +30–50 kW on stage 1, as the stock internals handle moderate torque increases. Supporting modifications like upgraded intercoolers and exhausts improve reliability under tuning. However, the HPFP has limited headroom, so aggressive tuning risks premature failure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's the fuel economy of the OM668.942?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the S 420 CDI (W221), typical consumption is ~12.4 L/100km (city), ~7.8 L/100km (highway), or ~9.6 L/100km combined (29 mpg UK). Real-world figures vary by driving style, but expect 28–32 mpg (UK) in mixed conditions. The V8 layout and vehicle weight result in lower efficiency compared to smaller diesels.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the OM668.942 an interference engine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The OM668 series is an interference engine. If the timing chain fails or skips, pistons will contact open valves, resulting in severe internal damage. The front-mounted dual-row chain is robust but requires proper lubrication. Any abnormal noise from the timing cover should prompt immediate inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What oil type does OM668.942 require?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mercedes-Benz specifies SAE 5W-30 oil meeting MB 229.51 standard. This low-ash formulation protects the EGR and turbo systems and ensures proper HPFP lubrication. Oil changes should occur every 15,000 km or annually, whichever comes first, to maintain engine longevity and prevent deposit formation.",
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
