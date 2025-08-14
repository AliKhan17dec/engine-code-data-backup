// import type { Metadata } from "next";
// import { JSX } from "react";
// import TechnicalSpecifications from "@/app/brand/components/TechnicalSpecifications";
// import CompatibleModels from "@/app/brand/components/CompatibleModels";
// import CommonReliabilityIssues from "./components/CommonReliabilityIssues";
// import Hero from "./components/Hero";
// import FAQs from "./components/FAQs";
// import ResearchResources from "./components/ResearchResources";
// import { pageData } from "./data/data";
// import Banner from "./components/Banner";
// import StickyButton from "./components/StickyButton";
//
// const brand = "bmw";
// const engine = "n47d20a";
// const { engines, heroImage: image } = pageData[brand];
// const {
//   hero,
//   technicalSpecifications,
//   compatibleModels,
//   bannerImage,
//   commonReliabilityIssues,
//   faqs,
//   researchResources,
// } = engines[engine];
//
// export const metadata: Metadata = pageData[brand].engines[engine].metadata;
//
// const Page = (): JSX.Element => {
//   return (
//     <>
//       <StickyButton />
//       <Hero {...hero} image={image} />
//       <TechnicalSpecifications {...technicalSpecifications} />
//       <CompatibleModels {...compatibleModels} />
//       <Banner bannerImage={bannerImage} />
//       <CommonReliabilityIssues {...commonReliabilityIssues} />
//       <FAQs faqData={faqs} />
//       <ResearchResources sections={researchResources} />
//     </>
//   );
// };
//
// export default Page;
// app/[brand]/[engine]/page.tsx
import { getEnginePageData } from "@/lib/engine-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StickyButton from "./components/StickyButton";
import Hero from "./components/Hero";
import TechnicalSpecifications from "./components/TechnicalSpecifications";
import CompatibleModels from "./components/CompatibleModels";
import Banner from "./components/Banner";
import CommonReliabilityIssues from "./components/CommonReliabilityIssues";
import FAQs from "./components/FAQs";
import ResearchResources from "./components/ResearchResources";

export async function generateMetadata({
  params,
}: {
  params: { brand: string; engine: string };
}): Promise<Metadata> {
  const engineData = getEnginePageData(params.brand, params.engine);
  if (!engineData) notFound();
  return engineData.metadata;
}

export default function EnginePage({
  params,
}: {
  params: { brand: string; engine: string };
}) {
  const engineData = getEnginePageData(params.brand, params.engine);
  if (!engineData) notFound();

  const {
    hero,
    technicalSpecifications,
    compatibleModels,
    bannerImage,
    commonReliabilityIssues,
    faqs,
    researchResources,
  } = engineData;

  return (
    <>
      <StickyButton />
      <Hero {...hero} />
      <TechnicalSpecifications {...technicalSpecifications} />
      <CompatibleModels {...compatibleModels} />
      <Banner bannerImage={bannerImage} />
      <CommonReliabilityIssues {...commonReliabilityIssues} />
      <FAQs faqData={faqs} />
      <ResearchResources sections={researchResources} />
    </>
  );
}
