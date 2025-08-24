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

export const getAllBrands = async () => {
  return Object.keys(pageData).map((brand) => ({
    id: brand,
    name: brand.charAt(0).toUpperCase() + brand.slice(1),
    engineCount: Object.keys(pageData[brand].engines).length,
  }));
};

export const getEnginesForBrand = async (brand: string) => {
  const brandData = pageData[brand];
  if (!brandData) return [];

  return Object.keys(brandData.engines).map((engine) => ({
    id: engine,
    name: engine.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  }));
};
