type Icon = React.ComponentType<
  React.SVGProps<SVGSVGElement<{ className?: string }>>
>;

type TableCellValue = string | number | null | undefined;
type TableData = Record<string, TableCellValue>[];

interface Issue {
  title: string;
  symptoms: string;
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
    dataVerificationNotes: Record<string, string>;
    primarySources: string[];
  };
}

interface CompatibleModelsData {
  title: string;
  description: string;
  compatibleModels: TableData;
  guidanceTitle: string;
  guidanceText: string;
  identificationDetails: {
    location: string;
    visualCues: string[];
    evidence: string;
  };
  compatibilityNotes: {
    flywheel: string;
    timingComponents: string;
    evidence: string;
  };
  tensionerUpgrade: {
    issue: string;
    recommendation: string;
    evidence: string;
  };
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
  categories?: ResourceCategory[];
}

interface HeroData {
  heading: string;
  intro: string[];
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

interface EnginePageProps {
  brand: string;
  engine: string[];
}
