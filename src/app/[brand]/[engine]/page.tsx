import { getAllEngineSlugs, getEnginePageData } from "@/app/lib/engine-data";
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

async function generateStaticParams() {
  const slugs = await getAllEngineSlugs();

  return slugs.map(({ brand, engine }) => ({
    brand,
    engine,
  }));
}

async function generateMetadata(props: {
  params: Promise<{ brand: string; engine: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const engineData = await getEnginePageData(params.brand, params.engine);
  if (!engineData) notFound();
  return engineData.metadata;
}

async function EnginePage(props: {
  params: Promise<{ brand: string; engine: string }>;
}) {
  const params = await props.params;
  const engineData = await getEnginePageData(params.brand, params.engine);
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
      <StickyButton engineKey={params.engine} />
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
export const dynamicParams = false;

export default EnginePage;
export { generateStaticParams, generateMetadata };
