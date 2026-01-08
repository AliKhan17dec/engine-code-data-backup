// import { getAllEngineSlugs, getEnginePageData } from "@/app/lib/engine-data";
import { getEnginePageData } from "@/app/lib/engine-data";

import type { Metadata } from "next";
import Head from "next/head";
import { notFound } from "next/navigation";
import { JSX } from "react";
import Banner from "./components/Banner";
import CommonReliabilityIssues from "./components/CommonReliabilityIssues";
import CompatibleModels from "./components/CompatibleModels";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import ResearchResources from "./components/ResearchResources";
import StickyButton from "./components/StickyButton";
import TechnicalSpecifications from "./components/TechnicalSpecifications";

export const revalidate = 86400;

// const generateStaticParams = async (): Promise<EnginePageProps[]> => {
//   const slugs = await getAllEngineSlugs();

//   return slugs.map(({ brand, engine }) => ({
//     brand,
//     engine: [`${engine}-specs`],
//   }));
// };

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
    schema,
    researchResources,
  } = engineData;
  const rawFuelType = (technicalSpecifications.engineSpecs.find(
    spec => /^fuel\s*type$/i.test(spec.name as string)
  ) || {}).value ?? "";

  const fuelType = /^(gasoline|petrol|petrol\s*\(gasoline\)|gasoline\s*\(petrol\))$/i.test(rawFuelType as string)
    ? "Petrol"
    : rawFuelType;
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <StickyButton engineCode={engine} />
      <Hero
        {...hero}
        brand={params.brand}
        engine={engine}
        fuelType={fuelType as string}
      />
      <TechnicalSpecifications
        {...technicalSpecifications}
        engine={engine}
      // fuelType={fuelType}
      />
      <CompatibleModels
        {...compatibleModels}
        engine={engine}
      // fuelType={fuelType}
      />
      <Banner hidden bannerImage={bannerImage} />
      <CommonReliabilityIssues
        {...commonReliabilityIssues}
        engine={engine}
        brand={params.brand}
      // fuelType={fuelType}
      />
      <FAQs faqData={faqs} brand={params.brand} engine={engine} />
      <ResearchResources
        researchResources={researchResources}
        brand={params.brand}
      />
    </>
  );
};

// export const dynamicParams = false;
export default EnginePage;
export { generateMetadata };
