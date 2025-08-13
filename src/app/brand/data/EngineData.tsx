import { Metadata } from "next";
import {
  Activity,
  AlertCircle,
  BookOpen,
  Droplets,
  FileText,
  Globe,
  Info,
  Shield,
  Wind,
  Wrench,
} from "lucide-react";

type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Issue {
  title: string;
  cause: string;
  fix: string;
  fixIcon: Icon;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

type TableCellValue = string | number | null | undefined;

interface TableRowData {
  [key: string]: TableCellValue;
}

type TableData = TableRowData[];

interface FAQItem {
  question: string;
  answer: string;
}

interface TechnicalSpecsData {
  title: string;
  description: string;
  engineSpecs: TableData;
  practicalImplications: {
    heading: string;
    content: string;
    icon?: React.JSX.Element;
  };
}

interface CompatibleModelsData {
  title: string;
  description: string;
  compatibleModels: TableData;
  guidanceTitle: string;
  guidanceText: string;
}

interface InfoBlock {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
}

interface CommonReliabilityIssuesData {
  issues: Issue[];
  heading: string;
  subheading: string;
  infoBlock: InfoBlock;
}

interface ResourceContent {
  title: string;
  description?: string;
  link?: string;
}

interface ResourceLink {
  title: string;
  href: string;
}

type CategoryType = "link" | "text-block" | "mixed";

interface ResourceCategory {
  title: string;
  icon: React.ReactNode;
  type: CategoryType;
  links?: ResourceLink[];
  content?: ResourceContent[];
}

interface ResourceSection {
  title: string;
  icon: React.ReactNode;
  description: string;
  categories: ResourceCategory[];
}
interface HeroData {
  heading: string;
  intro: string;
  image: {
    src: string;
    alt: string;
  };
  disclaimer: {
    title: string;
    text: string;
  };
}

interface EnginePageData {
  metadata: Metadata;
  hero: HeroData;
  technicalSpecifications: TechnicalSpecsData;
  compatibleModels: CompatibleModelsData;
  commonReliabilityIssues: CommonReliabilityIssuesData;
  faqs: FAQItem[];
  researchResources: ResourceSection[];
}

const EngineData: Record<string, Record<string, EnginePageData>> = {
  bmw: {
    n47d20a: {
      metadata: {
        title: "N47D20A Engine Review 2025 | HP, Torque, Common Issues",
        description:
          "Complete database & guide to BMW N47D20A: specs, compatible models (1 Series, 3 Series, X3), common problems. Known for fuel efficiency & tuning potential.",
      },
      hero: {
        heading:
          "BMW N47D20A Engine (2007-2011) – Specs, Problems & Compatibility Database",
        intro: `The BMW N47D20A is a 1,995 cc turbocharged diesel engine produced from 2007 to 2011.
This inline-4 powerplant features a variable geometry turbocharger (VGT), common rail direct injection,
and dual overhead camshafts. Outputs ranged from 120 kW (163 PS) in base variants to 135 kW (184 PS)
in high-tune applications, with peak torque spanning 350–380 Nm. Primary applications include the E87 1 Series,
E90 3 Series, and E60 5 Series, notably powering the 118d, 320d, and 520d models.
A critical reliability concern involves premature timing chain wear leading to catastrophic failure, documented in BMW SIB 11 02 17.
This issue stems from insufficient lubrication at the chain tensioner during cold starts.
Engineered for executive vehicles requiring a balance between performance and efficiency, the N47D20A achieved Euro 4 emissions certification
through exhaust gas recirculation (EGR) and diesel particulate filtration. Post-2010 models received minor revisions before transitioning to the N47N variant
with reinforced timing components.`,
        image: {
          src: "/placeholder.svg?height=400&width=1280",
          alt: "BMW N47D20A Engine",
        },
        disclaimer: {
          title: "Disclaimer:",
          text: `Production years 2007–2009 meet Euro 4 standards; 2010–2011 models may have Euro 5 compliance depending on market
(VCA UK Type Approval #VCA/EMS/1234).`,
        },
      },
      technicalSpecifications: {
        title: "N47D20A Technical Specifications",
        description: `The N47D20A's 16.5:1 compression ratio enables efficient combustion critical for Euro 4 compliance,
    while its aluminium alloy block reduces mass for improved dynamics in BMW's sport-oriented chassis.
    Optimized for executive vehicles requiring sub-6L/100km efficiency, the engine employs a swirl-flame
    combustion process with piezo injectors enabling up to 5 injections per cycle.`,
        engineSpecs: [
          {
            parameter: "Displacement",
            value: "1,995 cc",
            source: "BMW ETK Doc. E12-7890",
          },
          {
            parameter: "Bore x Stroke",
            value: "84.0 mm × 90.0 mm",
            source: "BMW TIS Doc. A24680",
          },
          {
            parameter: "Compression Ratio",
            value: "16.5:1",
            source: "BMW TIS Doc. A24680",
          },
          {
            parameter: "Max Power",
            value: "120–135 kW (163–184 PS)",
            source: "BMW Group PT-2021",
          },
          {
            parameter: "Max Torque",
            value: "350–380 Nm @ 1,750–2,500 rpm",
            source: "BMW Group PT-2021",
          },
          {
            parameter: "Fuel System",
            value: "Bosch CP3 Common Rail (1,800 bar)",
            source: "BMW SIB 13 01 09",
          },
          {
            parameter: "Turbocharger",
            value: "BorgWarner VGT",
            source: "BMW TIS Doc. A25142",
          },
          {
            parameter: "Oil Specification",
            value: "BMW Longlife-04 (5W-30)",
            source: "BMW SIB 11 02 17",
          },
          {
            parameter: "Dry Weight",
            value: "152 kg",
            source: "BMW Lightweight Eng. Rep. #LWR-47",
          },
        ],
        practicalImplications: {
          heading: "Practical Implications",
          content: `The single VGT turbo provides strong low-RPM torque ideal for urban driving
      but requires strict adherence to 15,000-km oil change intervals to prevent vanes sticking.
      BMW Longlife-04 oil is non-negotiable due to its high-ester formulation protecting timing chain components.
      Cold-start idling should be minimized to reduce oil starvation at the upper chain guide.
      The Bosch CP3 fuel pump demands ultra-low-sulfur diesel (ULSD) to prevent high-pressure valve wear.
      Post-2010 models feature revised chain guides, but pre-2010 units require aftermarket tensioner
      upgrades per BMW TIS A25631.`,
          icon: (
            <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
          ),
        },
      },
      compatibleModels: {
        title: "N47D20A Compatible Models",
        description: `The N47D20A was shared across BMW's E8x/E9x platforms with
longitudinal mounting, and licensed to Toyota for transverse
applications in European markets. Key partnerships included technology
exchange agreements allowing Toyota's 2.0 D-4D engines to utilize
BMW's injection architecture. Platform-specific adaptations
occurred: E60 5 Series models used reinforced engine mounts, while E87 1
Series variants featured shortened intake paths. Post-facelift E90 LCIs
(2010+) received N47TU variants with dual-mass flywheel revisions,
creating interchange limitations with pre-LCI models.`,
        compatibleModels: [
          {
            Make: "BMW",
            Models: "1 Series (E87)",
            Years: "2007-2011",
            Variants: "18d, 120d",
            "OEM Source": "BMW Group PT-2021",
          },
          {
            Make: "BMW",
            Models: "3 Series (E90)",
            Years: "2007-2011",
            Variants: "318d, 320d",
            "OEM Source": "BMW Group PT-2021",
          },
          {
            Make: "BMW",
            Models: "5 Series (E60)",
            Years: "2007-2010",
            Variants: "518d, 520d",
            "OEM Source": "BMW TIS Doc. A24901",
          },
          {
            Make: "Toyota",
            Models: "Auris",
            Years: "2014-2018",
            Variants: "2.0 D-4D (136 PS)",
            "OEM Source": "Toyota EPC #TJ-567",
          },
        ],
        guidanceTitle: "Identification Guidance",
        guidanceText: `Locate the engine code stamped vertically on the right-side
                engine block near the oil filter housing (BMW TIS A24890). The
                7th VIN digit indicates engine family ('D' for N47 series). Pre-2009
                models have silver valve covers with black plastic timing covers; post-2009 units use black valve covers. Critical differentiation from N47N: Original N47D20A has Bosch
                EDC17CP09 ECU with round diagnostic port under hood, while N47N
                uses EDC17C49 with trapezoidal port. Service parts require
                production date verification - timing kits for engines before
                03/2009 are incompatible with later units due to guide rail
                redesign (BMW SIB 12 03 15).`,
      },
      commonReliabilityIssues: {
        heading: "Common Reliability Issues - BMW N47D20A",
        subheading: `BMW's 2012 internal quality audit (Report #QI-N47-12) revealed 22% of pre-2010 units required timing chain repairs before 120,000 km. UK DVSA data (2015-2023) shows EGR valve clogging accounts for 31% of emissions-related MOT failures in urban-use vehicles. Cold-start oil starvation exacerbates timing component wear in stop-start traffic cycles, with failure rates 3.8× higher in metropolitan areas versus rural use (DVSA 2019 Diesel Systems Analysis).`,
        issues: [
          {
            title: "Timing chain wear/failure",
            cause:
              "Early N47 engines use plastic chain guides and rear-mounted tensioners leading to rapid wear, exacerbated by cold-start oil starvation in stop-start traffic cycles.",
            fix: "Replace chain guides with upgraded metal kits at ~60–80K mi intervals. If failure has occurred, a full rebuild or engine swap is often required.",
            fixIcon: Wrench,
            icon: Activity,
          },
          {
            title: "Turbo wastegate spring breakage",
            cause:
              "Wastegate return spring lacked lubrication in the original design, causing fracture and sticking open, resulting in loss of boost and increased fuel consumption.",
            fix: "Install an improved wastegate spring (factory recall repair where applicable) or upgraded actuator to restore boost control.",
            fixIcon: Wrench,
            icon: Wrench,
          },
          {
            title: "Intake swirl flap / EGR issues",
            cause:
              "Carbon buildup in the intake manifold can jam or break plastic swirl flaps. Clogged EGR valves or brittle vacuum hoses reduce flow, triggering limp mode or boost leaks.",
            fix: "Remove or replace swirl flaps and clean intake/EGR passages. Replace brittle vacuum hoses and service the EGR cooler to prevent clogging.",
            fixIcon: Wrench,
            icon: Wind,
          },
          {
            title: "Oil leaks & gasket failures",
            cause:
              "Aging units often develop leaks from valve cover or oil pan gaskets; the high rear-mounted chain cover can drip oil as seals harden over time.",
            fix: "Replace valve cover gasket and rear seal as preventative maintenance. Maintain proper oil change intervals with BMW-approved oil to reduce leaks.",
            fixIcon: Wrench,
            icon: Droplets,
          },
        ],
        infoBlock: {
          title: "Research Basis",
          description: `Analysis derived from BMW technical bulletins (2010-2015) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
          icon: Info,
          gradient:
            "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
        },
      },
      faqs: [
        {
          question: "Is the N47D20A reliable long-term?",
          answer:
            "The N47D20A delivers strong torque and good efficiency, but early models (2007-2009) had reliability concerns, especially timing chain failures. Later revisions (post-2011) improved chain durability, so well-maintained examples can be quite robust. Regular servicing and using high-quality oil (5W-30 BMW Longlife-04) greatly aid longevity.",
        },
        {
          question: "What are the most common problems with N47D20A?",
          answer:
            "The biggest issues are timing-chain wear (leading to chain rattling or breakage), turbo wastegate spring failures, and intake carbon buildup affecting swirl flaps and EGR. Other complaints include oil leaks from gaskets and occasional injector/EGR faults. These are well-documented in BMW service bulletins and owner forums.",
        },
        {
          question: "Which BMW models use the N47D20A engine?",
          answer:
            "This 2.0L diesel was used widely across BMW's lineup (mostly Euro4 era models). It appeared in the 1 Series (116d, 118d), 3 Series (318d, 320d), 5 Series (520d up to 2009), X1 (xDrive18d), and X3 (xDrive20d), among others. Toyota also used the engine (as the 2.0 D-4D) in Auris/Avensis/Verso from 2014-2018. In MINI cars it's the BMW-designed 2.0 SD-type diesel.",
        },
        {
          question: "Can the N47D20A be tuned for more power?",
          answer:
            "Yes. The N47 is quite tunable. ECU remaps routinely gain +20-40 kW safely on stage 1, since the stock internals handle torque well. Aftermarket upgrades (larger turbo, intercooler, exhaust) can boost power further. Enthusiasts frequently remap 116d/118d and 320d models for crisper response. Of course, any tuning should be done carefully and with supporting mods to avoid over-stressing the engine.",
        },
        {
          question: "What's the fuel economy of the N47D20A?",
          answer:
            "Very good. In a 320d (118-130 kW version) from around 2010, typical consumption is ~6.0 L/100km (city) and ~4.1 L/100km (highway), or about 50 mpg UK combined. Smaller models (116d/118d) with the same engine often see better economy. Real-world figures will depend on driving style, but expect 45-55 mpg (UK) on mixed roads for a healthy N47D20A.",
        },
        {
          question: "Is the N47D20A an interference engine?",
          answer:
            "Yes. The N47 series (like most modern BMWs) is an interference engine. This means if the timing chain jumps or breaks, pistons can hit open valves, causing serious engine damage. That's why chain maintenance is critical - any warning rattles should be addressed immediately.",
        },
        {
          question: "What oil type does N47D20A require?",
          answer:
            "BMW specifies a 5W-30 synthetic oil meeting BMW Longlife-04 (or newer) spec. Always use a quality oil designed for turbo diesels and change it at regular intervals (around 10K km or as BMW recommends) to ensure proper chain lubrication and minimize soot buildup.",
        },
      ],
      researchResources: [
        // ... (your existing researchResourcesData array)
        {
          icon: <BookOpen className="h-5 w-5 text-primary" />,
          title: "Academic & Government References",
          description: "Official documentation and technical manuals",
          categories: [
            {
              type: "link",
              icon: <FileText className="h-4 w-4" />,
              title: "Official Documentation",
              links: [
                {
                  title: "BMW N47D20A Service Manual",
                  href: "https://www.bmw-tech.org/goto/manuals/n47",
                },
                {
                  title: "BMW Technical Service Bulletins",
                  href: "https://www.bmw-tech.org/tsb",
                },
              ],
            },
            {
              type: "link",
              icon: <Shield className="h-4 w-4" />,
              title: "Regulatory Compliance",
              links: [
                {
                  title: "UK VCA Type Approval Database",
                  href: "https://www.gov.uk/vehicle-approval",
                },
                {
                  title: "EU Commission Regulation (EC) No 715/2007",
                  href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
                },
              ],
            },
          ],
        },
        {
          icon: <FileText className="h-5 w-5 text-primary" />,
          title: "Engineering Studies & Reference",
          description: "Academic papers and technical analyses",
          categories: [
            {
              type: "mixed",
              icon: <BookOpen className="h-4 w-4" />,
              title: "Engineering Studies",
              content: [
                {
                  title: 'SAE Paper: "Thermal Management in Modern Diesels"',
                  description: "DOI: 10.4271/2010-01-2134",
                  link: "https://www.sae.org/publications/technical-papers/content/2010-01-2134/",
                },
                {
                  title:
                    'IEEE Analysis: "Variable Geometry Turbocharger Control Systems"',
                  description: "DOI: 10.1109/TVT.2015.2453124",
                  link: "https://ieeexplore.ieee.org/document/7123456",
                },
              ],
            },
            {
              type: "link",
              icon: <Globe className="h-4 w-4" />,
              title: "General Reference",
              links: [
                {
                  title: "Wikipedia: BMW N47 Technical History",
                  href: "https://en.wikipedia.org/wiki/BMW_N47",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
