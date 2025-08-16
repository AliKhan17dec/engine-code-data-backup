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
import { JSX } from "react";

const generateStaticParams = async (): Promise<EnginePageProps[]> => {
  const slugs = await getAllEngineSlugs();

  return slugs.map(({ brand, engine }) => ({
    brand,
    engine: [`${engine}-specs`],
  }));
};

const generateMetadata = async (props: {
  params: Promise<EnginePageProps>;
}): Promise<Metadata> => {
  const params = await props.params;
  const engineParam = params.engine.join("-");
  const engine = engineParam.replace(/-specs$/, "");
  const engineData = await getEnginePageData(params.brand, engine);
  if (!engineData) notFound();
  return engineData.metadata;
};

const EnginePage = async (props: {
  params: Promise<EnginePageProps>;
}): Promise<JSX.Element> => {
  const params = await props.params;
  const engineParam = params.engine.join("-");
  const engine = engineParam.replace(/-specs$/, "");
  const engineData = await getEnginePageData(params.brand, engine);
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
      <StickyButton engineCode={engine} />
      <Hero {...hero} />
      <TechnicalSpecifications {...technicalSpecifications} />
      <CompatibleModels {...compatibleModels} />
      <Banner bannerImage={bannerImage} />
      <CommonReliabilityIssues {...commonReliabilityIssues} />
      <FAQs faqData={faqs} />
      <ResearchResources sections={researchResources} />
    </>
  );
};

export const dynamicParams = false;
export default EnginePage;
export { generateStaticParams, generateMetadata };
