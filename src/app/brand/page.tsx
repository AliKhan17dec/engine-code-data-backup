import type { Metadata } from "next";
import { JSX } from "react";
import TechnicalSpecifications from "@/app/brand/components/TechnicalSpecifications";
import CompatibleModels from "@/app/brand/components/CompatibleModels";
import CommonReliabilityIssues from "./components/CommonReliabilityIssues";
import Hero from "./components/Hero";
import FAQs from "./components/FAQs";
import ResearchResources from "./components/ResearchResources";
import { pageData } from "./data/data";
import Banner from "./components/Banner";
import StickyButton from "./components/StickyButton";

const brand = "bmw";
const engine = "n47d20a";
const {
  hero,
  technicalSpecifications,
  compatibleModels,
  bannerImage,
  commonReliabilityIssues,
  faqs,
  researchResources,
} = pageData[brand][engine];

export const metadata: Metadata = pageData[brand][engine].metadata;

const Page = (): JSX.Element => {
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
};

export default Page;
