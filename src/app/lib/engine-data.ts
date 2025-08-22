"use server";
import { pageData } from "@/app/data/data";

export const getEnginePageData = async (brand: string, engine: string) => {
  const brandData = pageData[brand];

  if (!brandData || !brandData.engines || !brandData.engines[engine]) {
    return null;
  }

  const engineData = brandData.engines[engine];

  return {
    ...engineData,
    researchResources: {
      ...brandData.researchResources,
    },
  };
};
export const getAllEngineSlugs = async (): Promise<
  { brand: string; engine: string }[]
> => {
  const slugs = [];

  for (const brandKey in pageData) {
    const brandData = pageData[brandKey];

    for (const engineKey in brandData.engines) {
      slugs.push({
        brand: brandKey,
        engine: engineKey,
      });
    }
  }

  return slugs;
};
