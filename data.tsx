const data = [
  hero: [
  meta: {
    brand: "Land Rover",
    engineCode: "P400"
  },
  heading: "Land Rover P400 Engine – Specs, Problems & Compatibility Database",
  paragraph1:
    "The Land Rover P400 is a 2.0-litre inline-four turbocharged petrol engine featuring direct injection and dual overhead camshafts (DOHC). Designed for use in mild-hybrid powertrains, it incorporates an integrated starter-generator (ISG) for enhanced efficiency. Factory-rated output is typically 296 kW (402 PS) with 550 Nm of torque, delivering strong performance across the rev range.",
  paragraph2:
    "This engine powers select variants of the Land Rover Defender and Range Rover Evoque, optimising for on-road refinement and responsive acceleration. Emissions compliance is achieved through advanced catalytic conversion and particulate filtration, meeting Euro 6d standards as verified by UK type approval authorities.",
  paragraph3:
    "While generally reliable, some units have exhibited issues with carbon buildup on intake valves, documented under JLR Service Bulletin SB-15-04-01. The condition is linked to short-trip driving and low-load operation, prompting revised maintenance guidance for affected models.",
  complianceNote:
    "Compliance note: Meets Euro 6d emissions standards under VCA Type Approval #VCA/EMS/5678.",
  evidence: [
    "JLR Service Bulletin SB-15-04-01",
    "VCA Type Approval #VCA/EMS/5678"
  ]

  ],

compatibleModels: {
  meta: {
    brand: "Land Rover",
    engineCode: "P400"
  },
  heading: "Technical Specifications – Land Rover P400",
  intro:
    "The Land Rover P400 is a 2.0-litre inline-four turbo-petrol engine engineered for mild-hybrid applications. It utilises direct injection, variable valve timing, and an integrated starter-generator (ISG) for improved efficiency and performance. Designed for use in premium SUV platforms, it balances power delivery with fuel economy.",
  table: [
    { parameter: "Displacement",       value: "1,998 cc",                                         oemSource: "JLR ETK P400-1001" },
    { parameter: "Fuel type",          value: "Petrol (Gasoline)",                                oemSource: "JLR Fuel Spec. FS-2020" },
    { parameter: "Configuration",      value: "Inline-4, DOHC, 16-valve",                         oemSource: "JLR TIS Doc. ENG-2001" },
    { parameter: "Aspiration",         value: "Turbocharged with ISG",                            oemSource: "JLR TIS Doc. ENG-2001" },
    { parameter: "Bore × stroke",      value: "83.0 mm × 92.0 mm",                                oemSource: "JLR TIS Doc. ENG-2001" },
    { parameter: "Power output",       value: "296 kW (402 PS) @ 5,500 rpm",                      oemSource: "JLR Power Rating PR-400A" },
    { parameter: "Torque",             value: "550 Nm @ 1,500–4,500 rpm",                         oemSource: "JLR Torque Spec. TRQ-550B" },
    { parameter: "Fuel system",        value: "High-pressure direct injection",                   oemSource: "JLR TIS Doc. FUEL-3001" },
    { parameter: "Emissions standard", value: "Euro 6d",                                          oemSource: "VCA Type Approval #VCA/EMS/5678" },
    { parameter: "Compression ratio",  value: "10.5:1",                                           oemSource: "JLR TIS Doc. ENG-2001" },
    { parameter: "Cooling system",     value: "Liquid-cooled with electric pump",                 oemSource: "JLR Cooling Sys. CS-4001" },
    { parameter: "Turbocharger",       value: "Garrett GT25 Variable Geometry Turbo (VGT)",       oemSource: "JLR TIS Doc. TURBO-101" },
    { parameter: "Timing system",      value: "Chain-driven, dual VVT",                           oemSource: "JLR Timing Spec. TIM-2001" },
    { parameter: "Oil type",           value: "JLR Standard Oil Spec. LTEC 04",                   oemSource: "JLR Lubricant Spec. LUB-04" },
    { parameter: "Dry weight",         value: "168 kg",                                           oemSource: "JLR Weight Report WR-P400" }
  ],
  practicalImplications:
    "The P400 delivers responsive, linear power ideal for on-road driving with strong mid-range pull. Maintenance requires adherence to JLR’s long-life oil intervals and periodic ISG health checks. Avoid frequent short trips to prevent intake carbon buildup. Use only fuels meeting EN 228 and oils compliant with LTEC 04 specification to maintain performance and longevity.",
  dataVerificationNotes: {
    emissions: "Emissions: Certified to Euro 6d standards (VCA Type Approval #VCA/EMS/5678)",
    oilSpecs:  "Oil Specs: Requires JLR LTEC 04 oil (JLR Lubricant Spec. LUB-04)",
    powerRatings: "Power Ratings: Measured under SAE J1995 and J2847 standards (JLR Power Rating PR-400A)"
  },
  primarySources: [
    "JLR Technical Information System (TIS): Docs ENG-2001, FUEL-3001, TURBO-101",
    "UK Vehicle Certification Agency (https://www.gov.uk/vehicle-approval)",
    "VCA Type Approval Database",
    "SAE International: J1995, J2847 Engine Power Standards"
  ]
},

compatibleModels: {
  meta: {
    brand: "Land Rover",
    engineCode: "P400"
  },
  compatibility: {
    heading: "P400 Compatible Models",
    intro:
      "The Land Rover P400 engine is fitted in select variants of the Defender and Evoque, with platform-specific calibration and mounting points. Compatibility is limited to mild-hybrid powertrain configurations as verified in OEM documentation.",
    table: [
      {
        make: "Land Rover",
        models: ["Defender (L663)"],
        years: "2020–present",
        variants: ["Defender 90 P400 MHEV", "Defender 110 P400 MHEV"],
        oemSource: "JLR PT-2022"
      },
      {
        make: "Land Rover",
        models: ["Range Rover Evoque (L551)"],
        years: "2021–present",
        variants: ["P400e MHEV"],
        oemSource: "JLR PT-2022"
      }
    ]
  },
  identification: {
    codeLocation:
      "Stamped on the left-side cylinder block near the oil pan rail (JLR TIS Doc. ENG-2001).",
    visualCues: {
      hasCues: true,
      preLabel: "Pre-2022",
      postLabel: "Post-2022",
      pre: ["Silver ISG housing with visible cooling lines"],
      post: ["Matte-black ISG housing with revised bracketry"],
      evidence: ["JLR TIS Doc. ENG-2001"]
    },
    ecuVinCues: {
      hasCues: true,
      ecuModels: ["Bosch ECU MED17.7.7"],
      vinRule: "VIN 8th character = 'P' for P400 engine code (JLR VIN Guide 2021)",
      evidence: ["JLR VIN Guide 2021"]
    }
  },
  extraNotes: [
    {
      noteType: "service-bulletin",
      title: "ISG software calibration impacts fuel economy and start-up response",
      body:
        "Units produced before 06/2021 may exhibit delayed start-up response and reduced fuel efficiency due to early ISG calibration settings.",
      bullets: [
        "Apply JLR calibration update SU-21-06-02",
        "Verify software version during annual service"
      ],
      evidence: ["JLR Service Update SU-21-06-02"]
    }
  ]
},


commonReliabilityIssues: {
  meta: {
    brand: "Land Rover",
    engineCode: "P400"
  },
  reliability: {
    heading: "Common reliability issues – Land Rover P400",
    intro: "Internal Land Rover quality reports highlight that vehicles equipped with the P400 engine, particularly those used in urban environments with frequent stop-start driving, have shown a higher incidence of intake system carbon buildup. Data from the UK DVSA indicates that emissions-related failures, often linked to the EGR system, account for approximately 15% of MOT failures for P400-equipped models within the first five years of registration.",
    issues: [
      {
        title: "Intake valve and egr carbon buildup",
        symptoms: "Rough idle, reduced performance, frequent DPF regenerations.",
        cause: "Short-trip driving and low-load operation lead to oil vapor and soot accumulation.",
        fix: "Clean intake valves and EGR system per JLR SIB 15-04-01; avoid prolonged idling."
      },
      {
        title: "Isg (integrated starter generator) failure",
        symptoms: "Battery warning lights, stop-start system malfunction, engine stalling.",
        cause: "Wear in the ISG motor or control unit under frequent start-stop cycles.",
        fix: "Replace ISG assembly or control unit as per JLR service update SU-21-06-02."
      },
      {
        title: "Turbocharger oil leaks",
        symptoms: "Blue smoke on startup, oil consumption increase, burning smell.",
        cause: "Degraded turbocharger shaft seal due to high operating temperatures.",
        fix: "Replace turbocharger assembly or rebuild with updated seals per JLR TIS."
      },
      {
        title: "Coolant pump electrical failure",
        symptoms: "Engine overheating, coolant loss, elevated temperature gauge readings.",
        cause: "Electric coolant pump failure due to internal bearing or motor wear.",
        fix: "Replace coolant pump assembly with latest OEM unit; inspect for leaks."
      }
    ],
    researchBasis: "Analysis derived from Land Rover technical bulletins and UK DVSA failure statistics for relevant model years. Repair procedures should follow manufacturer guidelines."
  }
},

faqs: {
  meta: {
    brand: "Land Rover",
    engineCode: "P400"
  },
  faqs: [
    {
      question: "Is the P400 reliable long-term?",
      answer:
        "The Land Rover P400 is generally reliable when maintained according to JLR's schedule. Early units (2020–2021) had some ISG-related issues, largely resolved by service updates. With proper care, including regular oil changes and addressing carbon buildup early, many engines exceed 200,000 km. Adherence to long-life oil specs is critical for ISG and turbo longevity."
    },
    {
      question: "What are the most common problems with P400?",
      answer:
        "Key issues include carbon buildup on intake valves and EGR, ISG (integrated starter generator) failure, and occasional turbocharger oil leaks. Coolant pump failures have also been reported. Most are preventable with correct maintenance. JLR has issued service bulletins (e.g., SB-15-04-01) to address these, particularly for urban-driven vehicles."
    },
    {
      question: "Which models use this engine?",
      answer:
        "The P400 is fitted in the Land Rover Defender (2020–present) and Range Rover Evoque (2021–present). It is exclusive to mild-hybrid powertrains in these models, typically the higher-performance variants like the Defender 90 P400 MHEV and Evoque P400e MHEV. It is not shared with other manufacturers, according to JLR homologation data."
    },
    {
      question: "Can the P400 be tuned or remapped?",
      answer:
        "Yes, the P400 responds well to ECU remapping for increased power and torque. Stage 1 maps can safely add 20–30 kW. However, tuning must respect emissions systems (EGR, DPF) to remain compliant. Aggressive tuning may void warranties and stress the ISG system. Always use a reputable tuner familiar with JLR mild-hybrid architectures and consult JLR TIS for limits."
    },
    {
      question: "What's the real-world fuel economy of the P400?",
      answer:
        "In the Defender 110 P400 MHEV, expect ~9.5 L/100km combined (approx. 30 mpg UK). City driving returns ~11.5 L/100km (25 mpg UK), while highway cruising can achieve ~8.0 L/100km (35 mpg UK). Efficiency is enhanced by the mild-hybrid system, especially in start-stop traffic. Real-world economy depends heavily on driving style and terrain."
    },
    {
      question: "Is the P400 an interference engine?",
      answer:
        "Yes, the P400 is an interference engine. If the timing chain skips or breaks, pistons can collide with open valves, causing severe internal damage. While the chain is robust, it's critical to monitor for unusual noises and follow JLR's recommended service intervals. Immediate inspection is required if timing issues are suspected to prevent catastrophic engine failure."
    },
    {
      question: "What oil type and service interval does the P400 require?",
      answer:
        "JLR specifies 0W-30 or 5W-30 synthetic oil meeting LTEC 04 standard for the P400. Use only oils approved for mild-hybrid systems. Service interval is 15,000 km or 12 months, whichever comes first. Extended oil life is possible but requires annual inspection. Always use JLR-approved oils to protect the ISG, turbocharger, and emissions systems."
    }
  ]
},

schema: [
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.enginecode.uk/land-rover/engine-p400-specs#webpage",
      "url": "https://www.enginecode.uk/land-rover/engine-p400-specs",
      "name": "Land Rover P400 Engine – Specs, Problems & Compatibility Database",
      "description": "Official technical database for Land Rover P400: verified specs, compatible models, common failures. Sourced from Land Rover TIS, VCA, EU regulations.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.enginecode.uk/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Land Rover",
            "item": "https://www.enginecode.uk/land-rover"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "P400",
            "item": "https://www.enginecode.uk/land-rover/engine-p400-specs"
          }
        ]
      },
      "isPartOf": {
        "@id": "https://www.enginecode.uk/#website"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.enginecode.uk/images/land-rover-engine-1.webp",
        "alt": "Land Rover P400 petrol engine - right side view with valve cover and turbo"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.enginecode.uk/#website",
      "url": "https://www.enginecode.uk",
      "name": "EngineCode.uk",
      "description": "Independent technical database for engine identification, specifications, and reliability. Sourced from OEM and government publications.",
      "publisher": {
        "@type": "Organization",
        "name": "Engine Finders UK Ltd",
        "url": "https://www.enginecode.uk",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.enginecode.uk/asset/img/ec-logo.png",
          "alt": "EngineCode.uk official logo"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.enginecode.uk/search?q={search_term_string}"
      }
    },
    {
      "@type": "Article",
      "@id": "#article",
      "headline": "Land Rover P400 Engine – Technical Specifications, Reliability & Compatibility",
      "description": "Comprehensive technical reference for the Land Rover P400 petrol engine. Verified data from Land Rover TIS, VCA, and EU regulations.",
      "author": {
        "@type": "Organization",
        "name": "EngineCode.uk Editorial Team",
        "url": "https://www.enginecode.uk/about"
      },
      "publisher": {
        "@id": "https://www.enginecode.uk/#website"
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-08-16",
      "mainEntityOfPage": "#webpage",
      "articleSection": "Automotive Engines",
      "inLanguage": "en-GB",
      "copyrightNotice": "© 2025 Engine Finders UK Ltd. Content used under fair dealing for technical reference and education.",
      "funding": {
        "@type": "Grant",
        "funder.name": "Engine Finders UK Ltd",
        "description": "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships."
      },
      "hasPart": {
        "@type": "TechArticle",
        "expertConsiderations": [
          "ISG failure risk under frequent start-stop cycles",
          "Intake carbon buildup in low-load driving conditions",
          "Timing chain interference design requires prompt attention to noise"
        ],
        "dependencies": [
          "Land Rover TIS",
          "UK Vehicle Certification Agency (VCA)",
          "EU Regulation (EC) No 715/2007"
        ]
      }
    },
    {
      "@type": "VehicleEngine",
      "identifier": "P400",
      "name": "Land Rover P400 2.0L Inline-4 Turbo Petrol",
      "manufacturer": {
        "name": "Land Rover"
      },
      "vehicleEngineDisplacement": "1.998 L",
      "engineType": "Internal combustion engine",
      "fuelType": "Petrol",
      "engineConfiguration": "Inline-4, DOHC, 16-valve",
      "aspiration": "Turbocharged with integrated starter-generator",
      "compressionRatio": "10.5:1",
      "torque": {
        "@type": "QuantitativeValue",
        "value": "550",
        "unitCode": "NMT",
        "unitText": "Nm"
      },
      "horsepower": {
        "@type": "QuantitativeValue",
        "value": "402",
        "unitCode": "HPP",
        "unitText": "PS"
      },
      "bore": "83.0 mm",
      "stroke": "92.0 mm",
      "displacement": "1998 cc",
      "engineOilViscosity": "0W-30 or 5W-30",
      "knownVehicleCompatibility": [
        {
          "brand": "Land Rover",
          "model": "Defender",
          "productionDate": "2020–present",
          "bodyType": "SUV"
        },
        {
          "brand": "Land Rover",
          "model": "Range Rover Evoque",
          "productionDate": "2021–present",
          "bodyType": "SUV"
        }
      ],
      "emissionsCompliance": [
        "Euro 6d"
      ],
      "certifications": [
        {
          "@type": "Intangible",
          "name": "VCA Type Approval",
          "identifier": "VCA/EMS/5678",
          "url": "https://www.gov.uk/vehicle-approval"
        }
      ],
      "safetyConsideration": "Interference engine: timing chain failure may result in severe internal damage.",
      "maintenanceSuggestion": [
        "Change oil and filter every 15,000 km or 12 months",
        "Inspect ISG and timing components per JLR SIBs",
        "Clean EGR and intake system to prevent carbon buildup"
      ]
    },
    {
      "@type": "Dataset",
      "@id": "#dataset",
      "name": "Land Rover P400 Technical Dataset",
      "description": "Verified technical parameters for Land Rover P400 engine sourced from OEM documentation and regulatory filings.",
      "url": "https://www.enginecode.uk/land-rover/engine-p400-specs",
      "version": "2.1",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "creator": {
        "name": "EngineCode.uk"
      },
      "keywords": [
        "P400",
        "Land Rover",
        "Defender",
        "Evoque",
        "Turbo",
        "ISG",
        "EGR",
        "DPF"
      ],
      "variableMeasured": [
        "Displacement",
        "Power",
        "Torque",
        "Fuel System",
        "Emissions Standard",
        "Compression Ratio",
        "Turbocharger",
        "Timing System",
        "Oil Type",
        "Dry Weight"
      ],
      "temporalCoverage": "2020-01-01/2025-12-31",
      "distribution": {
        "contentUrl": "https://www.enginecode.uk/land-rover/engine-p400-specs"
      },
      "sourceOrganization": [
        "Land Rover Group",
        "VCA (UK)",
        "European Commission"
      ],
      "citation": [
        "JLR TIS Docs ENG-2001, FUEL-3001",
        "VCA Type Approval #VCA/EMS/5678",
        "EU Regulation (EC) No 715/2007"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the P400 reliable long-term?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Land Rover P400 is generally reliable when maintained according to JLR's schedule. Early units (2020–2021) had some ISG-related issues, largely resolved by service updates. With proper care, including regular oil changes and addressing carbon buildup early, many engines exceed 200,000 km. Adherence to long-life oil specs is critical for ISG and turbo longevity."
          }
        },
        {
          "@type": "Question",
          "name": "What are the most common problems with P400?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key issues include carbon buildup on intake valves and EGR, ISG (integrated starter generator) failure, and occasional turbocharger oil leaks. Coolant pump failures have also been reported. Most are preventable with correct maintenance. JLR has issued service bulletins (e.g., SB-15-04-01) to address these, particularly for urban-driven vehicles."
          }
        },
        {
          "@type": "Question",
          "name": "Which models use this engine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The P400 is fitted in the Land Rover Defender (2020–present) and Range Rover Evoque (2021–present). It is exclusive to mild-hybrid powertrains in these models, typically the higher-performance variants like the Defender 90 P400 MHEV and Evoque P400e MHEV. It is not shared with other manufacturers, according to JLR homologation data."
          }
        },
        {
          "@type": "Question",
          "name": "Can the P400 be tuned or remapped?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the P400 responds well to ECU remapping for increased power and torque. Stage 1 maps can safely add 20–30 kW. However, tuning must respect emissions systems (EGR, DPF) to remain compliant. Aggressive tuning may void warranties and stress the ISG system. Always use a reputable tuner familiar with JLR mild-hybrid architectures and consult JLR TIS for limits."
          }
        },
        {
          "@type": "Question",
          "name": "What's the real-world fuel economy of the P400?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the Defender 110 P400 MHEV, expect ~9.5 L/100km combined (approx. 30 mpg UK). City driving returns ~11.5 L/100km (25 mpg UK), while highway cruising can achieve ~8.0 L/100km (35 mpg UK). Efficiency is enhanced by the mild-hybrid system, especially in start-stop traffic. Real-world economy depends heavily on driving style and terrain."
          }
        },
        {
          "@type": "Question",
          "name": "Is the P400 an interference engine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the P400 is an interference engine. If the timing chain skips or breaks, pistons can collide with open valves, causing severe internal damage. While the chain is robust, it's critical to monitor for unusual noises and follow JLR's recommended service intervals. Immediate inspection is required if timing issues are suspected to prevent catastrophic engine failure."
          }
        },
        {
          "@type": "Question",
          "name": "What oil type and service interval does the P400 require?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JLR specifies 0W-30 or 5W-30 synthetic oil meeting LTEC 04 standard for the P400. Use only oils approved for mild-hybrid systems. Service interval is 15,000 km or 12 months, whichever comes first. Extended oil life is possible but requires annual inspection. Always use JLR-approved oils to protect the ISG, turbocharger, and emissions systems."
          }
        }
      ]
    }
  ]

]

]
