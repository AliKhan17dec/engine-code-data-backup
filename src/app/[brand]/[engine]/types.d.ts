// declare type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
//
// declare interface Issue {
//   title: string;
//   cause: string;
//   fix: string;
//   fixIcon: Icon;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
// }
//
// declare type TableCellValue = string | number | null | undefined;
//
// declare interface TableRowData {
//   [key: string]: TableCellValue;
// }
//
// declare type TableData = TableRowData[];
//
// declare interface FAQItem {
//   question: string;
//   answer: string;
// }
//
// declare interface TechnicalSpecsData {
//   title: string;
//   description: string;
//   engineSpecs: TableData;
//   practicalImplications: {
//     heading: string;
//     content: string;
//     icon?: React.JSX.Element;
//   };
// }
//
// declare interface CompatibleModelsData {
//   title: string;
//   description: string;
//   compatibleModels: TableData;
//   guidanceTitle: string;
//   guidanceText: string;
// }
//
// declare interface InfoBlock {
//   title: string;
//   description: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   gradient: string;
// }
//
// declare interface CommonReliabilityIssuesData {
//   issues: Issue[];
//   heading: string;
//   subheading: string;
//   infoBlock: InfoBlock;
// }
//
// declare interface ResourceContent {
//   title: string;
//   description?: string;
//   link?: string;
// }
//
// declare interface ResourceLink {
//   title: string;
//   href: string;
// }
//
// declare type CategoryType = "link" | "text-block" | "mixed";
//
// declare interface ResourceCategory {
//   title: string;
//   icon: React.ReactNode;
//   type: CategoryType;
//   links?: ResourceLink[];
//   content?: ResourceContent[];
// }
//
// declare interface ResourceSection {
//   title: string;
//   icon: React.ReactNode;
//   description: string;
//   categories: ResourceCategory[];
// }
// declare interface HeroData {
//   heading: string;
//   intro: string;
//   // image: {
//   //   src: string;
//   //   alt: string;
//   // };
//   disclaimer: {
//     title: string;
//     text: string;
//   };
// }
// declare interface HeroDataProps {
//   heading: string;
//   intro: string;
//   image: {
//     src: string;
//     alt: string;
//   };
//   disclaimer: {
//     title: string;
//     text: string;
//   };
// }
//
// declare interface EnginePageData {
//   metadata: Metadata;
//   hero: HeroData;
//   technicalSpecifications: TechnicalSpecsData;
//   compatibleModels: CompatibleModelsData;
//   bannerImage: string;
//   commonReliabilityIssues: CommonReliabilityIssuesData;
//   faqs: FAQItem[];
//   researchResources: ResourceSection[];
// }
// declare interface BrandData {
//   heroImage: {
//     src: string;
//     alt: string;
//   };
//   engines: Record<string, EnginePageData>;
// }
// declare type enginePageData = {
//   hero: HeroData;
//   metadata: Metadata;
//   technicalSpecifications: TechnicalSpecsData;
//   compatibleModels: CompatibleModelsData;
//   bannerImage: string;
//   commonReliabilityIssues: CommonReliabilityIssuesData;
//   faqs: FAQItem[];
//   researchResources: ResourceSection[];
// } | null;
type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type TableCellValue = string | number | null | undefined;
type TableData = Record<string, TableCellValue>[];

interface Issue {
  title: string;
  cause: string;
  fix: string;
  icon: Icon;
  fixIcon: Icon;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface InfoBlock {
  title: string;
  description: string;
  icon: Icon;
  gradient: string;
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

interface CommonReliabilityIssuesData {
  heading: string;
  subheading: string;
  infoBlock: InfoBlock;
  issues: Issue[];
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
  disclaimer: {
    title: string;
    text: string;
  };
}

interface HeroDataProps extends HeroData {
  image: {
    src: string;
    alt: string;
  };
}

interface EnginePageData {
  metadata: Metadata;
  hero: HeroData;
  technicalSpecifications: TechnicalSpecsData;
  compatibleModels: CompatibleModelsData;
  bannerImage: string;
  commonReliabilityIssues: CommonReliabilityIssuesData;
  faqs: FAQItem[];
  researchResources: ResourceSection[];
}

interface BrandData {
  heroImage: {
    src: string;
    alt: string;
  };
  engines: Record<string, EnginePageData>;
}

type EnginePageDataOrNull = EnginePageData | null;
