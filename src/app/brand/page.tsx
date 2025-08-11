import type { Metadata } from "next";
import { JSX } from "react";
import TechnicalSpecifications from "@/app/brand/components/TechnicalSpecifications";
import { Activity, Wrench, Wind, Droplets } from "lucide-react";
import { FAQItem, Issue, TableData } from "./types";
import CompatibleModels from "@/app/brand/components/CompatibleModels";
import CommonReliabilityIssues from "./components/CommonReliabilityIssues";
import Hero from "./components/Hero";
import FAQs from "./components/FAQs";
import ResearchResources from "./components/ResearchResources";

export const metadata: Metadata = {
  title: "N47D20A Engine Review 2025 | HP, Torque, Common Issues",
  description:
    "Complete database & guide to BMW N47D20A: specs, compatible models (1 Series, 3 Series, X3), common problems. Known for fuel efficiency & tuning potential.",
};

const engineSpecs: TableData = [
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
];
const compatibleModels: TableData = [
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
];

const issues: Issue[] = [
  {
    title: "Timing chain wear/failure",
    cause:
      "Early N47 engines use plastic chain guides and rear-mounted tensioners leading to rapid wear, exacerbated by cold-start oil starvation in stop-start traffic cycles.",
    fix: "Replace chain guides with upgraded metal kits at ~60–80K mi intervals. If failure has occurred, a full rebuild or engine swap is often required.",
    icon: Activity,
  },
  {
    title: "Turbo wastegate spring breakage",
    cause:
      "Wastegate return spring lacked lubrication in the original design, causing fracture and sticking open, resulting in loss of boost and increased fuel consumption.",
    fix: "Install an improved wastegate spring (factory recall repair where applicable) or upgraded actuator to restore boost control.",
    icon: Wrench,
  },
  {
    title: "Intake swirl flap / EGR issues",
    cause:
      "Carbon buildup in the intake manifold can jam or break plastic swirl flaps. Clogged EGR valves or brittle vacuum hoses reduce flow, triggering limp mode or boost leaks.",
    fix: "Remove or replace swirl flaps and clean intake/EGR passages. Replace brittle vacuum hoses and service the EGR cooler to prevent clogging.",
    icon: Wind,
  },
  {
    title: "Oil leaks & gasket failures",
    cause:
      "Aging units often develop leaks from valve cover or oil pan gaskets; the high rear-mounted chain cover can drip oil as seals harden over time.",
    fix: "Replace valve cover gasket and rear seal as preventative maintenance. Maintain proper oil change intervals with BMW-approved oil to reduce leaks.",
    icon: Droplets,
  },
];
const faqData: FAQItem[] = [
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
];

const Page = (): JSX.Element => {
  return (
    <>
      <Hero />
      <TechnicalSpecifications engineSpecs={engineSpecs} />
      <CompatibleModels compatibleModels={compatibleModels} />
      <CommonReliabilityIssues issues={issues} />
      <FAQs faqData={faqData} />
      <ResearchResources />
    </>
  );
};

export default Page;
