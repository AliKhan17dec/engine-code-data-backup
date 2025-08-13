import type { Metadata } from "next";
import { JSX } from "react";
import TechnicalSpecifications from "@/app/brand/components/TechnicalSpecifications";
import CompatibleModels from "@/app/brand/components/CompatibleModels";
import CommonReliabilityIssues from "./components/CommonReliabilityIssues";
import Hero from "./components/Hero";
import FAQs from "./components/FAQs";
import ResearchResources from "./components/ResearchResources";
import { pageData } from "./data/data";

const brand = "bmw";
const engine = "n47d20a";
const engineData = pageData[brand][engine];
export const metadata: Metadata = engineData.metadata;

const Page = (): JSX.Element => {
  return (
    <>
      <Hero {...engineData.hero} />
      <TechnicalSpecifications {...engineData.technicalSpecifications} />
      <CompatibleModels {...engineData.compatibleModels} />
      <CommonReliabilityIssues {...engineData.commonReliabilityIssues} />
      <FAQs faqData={engineData.faqs} />
      <ResearchResources sections={engineData.researchResources} />
    </>
  );
};

export default Page;
