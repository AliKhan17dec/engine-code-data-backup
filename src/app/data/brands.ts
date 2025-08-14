interface EngineFamily {
  family: string;
  name: string;
  productionYears: string;
  configuration: string;
  displacementRange: string;
  fuelType: string;
  technology: string;
  description: string;
  sources: {
    label: string;
    url: string;
  }[];
  variants: {
    name: string;
    url: string;
    displacement: string;
    years: string;
  }[];
  variantCount: number;
  documentationLink: string;
}
interface EngineData {
  [brand: string]: {
    [familyKey: string]: EngineFamily;
  };
}
const engineFamilies: EngineData = {
  // === M20 Engine Family ===
  bmw: {
    m20: {
      family: "M20",
      name: "M20 Engine Family",
      productionYears: "1977–1993",
      configuration: "Inline-6, SOHC, Chain-Driven",
      displacementRange: "2.0L–2.7L",
      fuelType: "Petrol",
      technology: "Bosch L-Jetronic / Motronic, Aluminum Head, Iron Block",
      description:
        "The M20 is BMW's first mass-produced inline-six engine, known for its smoothness, durability, and tuning potential. Introduced in 1977, it powered a wide range of vehicles from the 5 Series (E28) to the 3 Series (E30). The M20 evolved from carbureted and mechanical fuel injection to full Motronic engine management, with later models featuring single VANOS variable valve timing. It remains a favorite among enthusiasts for its robust design and adaptability.",
      sources: [
        {
          label: "BMW TIS 11 20 0",
          url: "https://www.bmw-techinfo.com/document/11_20_0_647_146",
        },
        {
          label: "BMW Group Classic Engineering Archives",
          url: "https://www.bmwgroup.com/en/innovation/classic-engine-technology.html",
        },
      ],
      variants: [
        {
          name: "M20 B20 (206EA)",
          url: "/bmw/m20b20-206ea-specs",
          displacement: "2.0L",
          years: "1977–1981",
        },
        {
          name: "M20 B20 (206EB)",
          url: "/bmw/m20b20-206eb-specs",
          displacement: "2.0L",
          years: "1981–1983",
        },
        {
          name: "M20 B20 (206EC)",
          url: "/bmw/m20b20-206ec-specs",
          displacement: "2.0L",
          years: "1983–1985",
        },
        {
          name: "M20 B20 (206EZ)",
          url: "/bmw/m20b20-206ez-specs",
          displacement: "2.0L",
          years: "1985–1987",
        },
        {
          name: "M20 B20 (206KA)",
          url: "/bmw/m20b20-206ka-specs",
          displacement: "2.0L",
          years: "1982–1987",
        },
        {
          name: "M20 B20 (206VA)",
          url: "/bmw/m20b20-206va-specs",
          displacement: "2.0L",
          years: "1977–1981",
        },
        {
          name: "M20 B23 (236EA)",
          url: "/bmw/m20b23-236ea-specs",
          displacement: "2.3L",
          years: "1982–1984",
        },
        {
          name: "M20 B23 (236EB)",
          url: "/bmw/m20b23-236eb-specs",
          displacement: "2.3L",
          years: "1984–1986",
        },
        {
          name: "M20 B23 (236EC)",
          url: "/bmw/m20b23-236ec-specs",
          displacement: "2.3L",
          years: "1986–1987",
        },
        {
          name: "M20 B23 (236EW)",
          url: "/bmw/m20b23-236ew-specs",
          displacement: "2.3L",
          years: "1985–1987",
        },
        {
          name: "M20 B25 (256E1)",
          url: "/bmw/m20b25-256e1-specs",
          displacement: "2.5L",
          years: "1986–1988",
        },
        {
          name: "M20 B25 (256E2)",
          url: "/bmw/m20b25-256e2-specs",
          displacement: "2.5L",
          years: "1988–1990",
        },
        {
          name: "M20 B25 (256EX)",
          url: "/bmw/m20b25-256ex-specs",
          displacement: "2.5L",
          years: "1990–1992",
        },
        {
          name: "M20 B25 (256K1)",
          url: "/bmw/m20b25-256k1-specs",
          displacement: "2.5L",
          years: "1988–1991",
        },
        {
          name: "M20 B27 (276EA)",
          url: "/bmw/m20b27-276ea-specs",
          displacement: "2.7L",
          years: "1987–1989",
        },
        {
          name: "M20 B27 (276EB)",
          url: "/bmw/m20b27-276eb-specs",
          displacement: "2.7L",
          years: "1989–1991",
        },
        {
          name: "M20 B27 (276KA)",
          url: "/bmw/m20b27-276ka-specs",
          displacement: "2.7L",
          years: "1988–1990",
        },
        {
          name: "M20 B27 (276KB)",
          url: "/bmw/m20b27-276kb-specs",
          displacement: "2.7L",
          years: "1990–1993",
        },
      ],
      variantCount: 18,
      documentationLink: "/bmw/m20-family-technical-manual",
    },
    n47: {
      family: "N47",
      name: "N47 Diesel Engine Family",
      productionYears: "2007–2015",
      configuration: "Inline-4, DOHC, Turbocharged",
      displacementRange: "1.6L–2.0L",
      fuelType: "Diesel",
      technology:
        "Common rail with piezo injectors, variable geometry turbo; twin‑turbo on higher‑output variants",
      description:
        "The N47 is BMW’s second‑generation common‑rail diesel family, succeeding the M47. Introduced in 2007, it features double overhead camshafts, piezoelectric injectors, and variable boost technology, with twin‑turbo options on higher‑output trims. Its modular design enabled displacement variants while retaining common core components across the lineup. Power outputs ranged from 85–184 hp depending on calibration and turbo configuration.",
      sources: [
        {
          label: "BMW TIS 11 40 0",
          url: "https://www.bmw-techinfo.com/document/11_40_0_647_146",
        },
        {
          label: "BMW Group Engine Technology",
          url: "https://www.bmwgroup.com/en/innovation/engine-technology.html",
        },
      ],
      variants: [
        {
          name: "N47D16",
          url: "/bmw/n47d16-specs",
          displacement: "1.6L",
          years: "2010–2014",
        },
        {
          name: "N47D20A",
          url: "/bmw/n47d20a-specs",
          displacement: "2.0L",
          years: "2007–2011",
        },
        {
          name: "N47D20B",
          url: "/bmw/n47d20b-specs",
          displacement: "2.0L",
          years: "2011–2013",
        },
        {
          name: "N47D20C",
          url: "/bmw/n47d20c-specs",
          displacement: "2.0L",
          years: "2013–2015",
        },
      ],
      variantCount: 4,
      documentationLink: "/bmw/n47-family-technical-manual",
    },

    // === Add more engines below (example placeholder) ===
    /*
    m10: {
      family: "M10",
      name: "M10 Engine Family",
      productionYears: "1987–2000",
      configuration: "Inline-6, SOHC, Chain-Driven",
      displacementRange: "2.0L–2.7L",
      fuelType: "Petrol",
      technology: "Bosch L-Jetronic / Motronic, Aluminum Head, Iron Block",
      description:
        "The M20 is BMW's first mass-produced inline-six engine, known for its smoothness, durability, and tuning potential. Introduced in 1977, it powered a wide range of vehicles from the 5 Series (E28) to the 3 Series (E30). The M20 evolved from carbureted and mechanical fuel injection to full Motronic engine management, with later models featuring single VANOS variable valve timing. It remains a favorite among enthusiasts for its robust design and adaptability.",
      sources: [
        {
          label: "BMW TIS 11 20 0",
          url: "https://www.bmw-techinfo.com/document/11_20_0_647_146",
        },
        {
          label: "BMW Group Classic Engineering Archives",
          url: "https://www.bmwgroup.com/en/innovation/classic-engine-technology.html",
        },
      ],
      variants: [
        {
          name: "M10 B10 (206EA)",
          url: "/bmw/m20b20-206ea-specs",
          displacement: "2.0L",
          years: "1977–1981",
        },
        {
          name: "M10 B11 (206EB)",
          url: "/bmw/m20b20-206eb-specs",
          displacement: "2.0L",
          years: "1981–1983",
        },
        {
          name: "M10 B12 (206EC)",
          url: "/bmw/m20b20-206ec-specs",
          displacement: "2.0L",
          years: "1983–1985",
        },
        {
          name: "M20 B20 (206EZ)",
          url: "/bmw/m20b20-206ez-specs",
          displacement: "2.0L",
          years: "1985–1987",
        },
        {
          name: "M20 B20 (206KA)",
          url: "/bmw/m20b20-206ka-specs",
          displacement: "2.0L",
          years: "1982–1987",
        },
        {
          name: "M20 B20 (206VA)",
          url: "/bmw/m20b20-206va-specs",
          displacement: "2.0L",
          years: "1977–1981",
        },
        {
          name: "M20 B23 (236EA)",
          url: "/bmw/m20b23-236ea-specs",
          displacement: "2.3L",
          years: "1982–1984",
        },
        {
          name: "M20 B23 (236EB)",
          url: "/bmw/m20b23-236eb-specs",
          displacement: "2.3L",
          years: "1984–1986",
        },
        {
          name: "M20 B23 (236EC)",
          url: "/bmw/m20b23-236ec-specs",
          displacement: "2.3L",
          years: "1986–1987",
        },
        {
          name: "M20 B23 (236EW)",
          url: "/bmw/m20b23-236ew-specs",
          displacement: "2.3L",
          years: "1985–1987",
        },
        {
          name: "M20 B25 (256E1)",
          url: "/bmw/m20b25-256e1-specs",
          displacement: "2.5L",
          years: "1986–1988",
        },
        {
          name: "M20 B25 (256E2)",
          url: "/bmw/m20b25-256e2-specs",
          displacement: "2.5L",
          years: "1988–1990",
        },
        {
          name: "M20 B25 (256EX)",
          url: "/bmw/m20b25-256ex-specs",
          displacement: "2.5L",
          years: "1990–1992",
        },
        {
          name: "M20 B25 (256K1)",
          url: "/bmw/m20b25-256k1-specs",
          displacement: "2.5L",
          years: "1988–1991",
        },
        {
          name: "M20 B27 (276EA)",
          url: "/bmw/m20b27-276ea-specs",
          displacement: "2.7L",
          years: "1987–1989",
        },
        {
          name: "M20 B27 (276EB)",
          url: "/bmw/m20b27-276eb-specs",
          displacement: "2.7L",
          years: "1989–1991",
        },
        {
          name: "M20 B27 (276KA)",
          url: "/bmw/m20b27-276ka-specs",
          displacement: "2.7L",
          years: "1988–1990",
        },
        {
          name: "M20 B27 (276KB)",
          url: "/bmw/m20b27-276kb-specs",
          displacement: "2.7L",
          years: "1990–1993",
        },
      ],
      variantCount: 18,
      documentationLink: "/bmw/m20-family-technical-manual",
    },
    */
  },
};

export default engineFamilies;
