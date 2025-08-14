// lib/engine-data.ts

import { pageData } from "@/app/data/data";

export function getEnginePageData(brand: string, engine: string) {
  const brandData = pageData[brand];

  if (!brandData || !brandData.engines || !brandData.engines[engine]) {
    return null;
  }

  const engineData = brandData.engines[engine];
  const brandHeroImage = brandData.heroImage;

  return {
    ...engineData,
    hero: {
      ...engineData.hero,
      image: brandHeroImage,
    },
  };
}
