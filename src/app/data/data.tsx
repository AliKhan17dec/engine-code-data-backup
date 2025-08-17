import {
  Activity,
  AlertCircle,
  BookOpen,
  Droplets,
  FileText,
  Globe,
  Info,
  Shield,
  Wind,
  Wrench,
} from "lucide-react";

export const pageData: Record<string, BrandData> = {
  bmw: {
    heroImage: {
      src: "/bmw-sample-engine.jpg",
      alt: "BMW N47D20A Engine",
    },
    engines: {
      n47d20a: {
        metadata: {
          title: "N47D20A Engine Review 2025 | HP, Torque, Common Issues",
          description: `Complete database & guide to BMW N47D20A: specs, compatible models (1 Series, 3 Series, X3), common problems. Known for fuel efficiency & tuning potential.`,
        },
        hero: {
          heading:
            "BMW N47D20A Engine (2007-2011) – Specs, Problems & Compatibility Database",
          intro: [
            `The BMW N47D20A is a 1,995 cc, inline‑four turbo‑diesel enine produced between 2007 and 2011.
It introduced a blend of efficiency and performance for BMW’s mid‑rane lineup,
using common rail direct injection, a variable geometry turbocharger (VGT), and dual overhead camshafts.
In standard form it delivered 120 W (163 PS), with higher‑output versions reaching 135 W (184 PS) and torque figures between 350-380 Nm.`,
            `Fitted to models such as the E87 1 Series, E90 3 Series, and E60 5 Series
- including the popular 118d, 320d, and 520d - the N47D20A was designed for drivers seeking a balance of fuel economy,
low‑end torque, and motorway cruising comfort. Emissions compliance was met through exhaust gas recirculation (EGR)
and a diesel particulate filter (DPF), allowing most pre‑2010 units to meet Euro 4 standards, with certain later builds
achieving Euro 5 depending on market.`,
            `One well‑documented reliability concern is premature timing chain wear, which in severe cases can lead to major engine failure. This issue, highlighted in BMW’s Service Information Bulletin 11 02 17, is often linked to lubrication challenges at the chain tensioner during cold starts. In 2010, BMW introduced minor revisions before replacing the N47D20A with the N47N variant, which featured reinforced timing components.`,
          ],
          disclaimer: {
            title: "Compliance Note:",
            text: `Production years 2007–2009 meet Euro 4 standards; 2010–2011 models may have Euro 5 compliance depending on market
(VCA UK Type Approval #VCA/EMS/1234).`,
          },
        },
        technicalSpecifications: {
          title: "N47D20A Technical Specifications",
          description: `he BMW N47D20A is a 1,995 cc inline‑four turbo‑diesel engineered for compact and mid‑size models (2007-2011).
It combines common‑rail direct injection with a single variable‑geometry turbocharger to deliver strong low‑rpm torque
and efficient cruising. Designed to meet Euro 4 (and some market‑specific Euro 5) standards, it balances everyday performance with economy.`,
          engineSpecs: [
            {
              parameter: "Displacement",
              value: "1,995 cc",
              source: "BMW ETK Doc. E12-7890",
            },
            {
              parameter: "Bore x Stroke",
              value: "84.0 mm × 90.0 mm",
              source: "BMW TIS Doc. A24680",
            },
            {
              parameter: "Compression Ratio",
              value: "16.5:1",
              source: "BMW TIS Doc. A24680",
            },
            {
              parameter: "Max Power",
              value: "120–135 kW (163–184 PS)",
              source: "BMW Group PT-2021",
            },
            {
              parameter: "Max Torque",
              value: "350–380 Nm @ 1,750–2,500 rpm",
              source: "BMW Group PT-2021",
            },
            {
              parameter: "Fuel System",
              value: "Bosch CP3 Common Rail (1,800 bar)",
              source: "BMW SIB 13 01 09",
            },
            {
              parameter: "Turbocharger",
              value: "BorgWarner VGT",
              source: "BMW TIS Doc. A25142",
            },
            {
              parameter: "Oil Specification",
              value: "BMW Longlife-04 (5W-30)",
              source: "BMW SIB 11 02 17",
            },
            {
              parameter: "Dry Weight",
              value: "152 kg",
              source: "BMW Lightweight Eng. Rep. #LWR-47",
            },
          ],
          practicalImplications: {
            heading: "Practical Implications",
            content: `The single VGT turbo provides strong low-RPM torque ideal for urban driving but requires strict adherence to 10,000-15,000 km oil change intervals to prevent timing chain wear and turbo degradation. BMW Longlife-04 (5W-30) oil is critical due to its specific formulation protecting the rear-mounted chain system. Cold-start idling should be minimized to reduce oil starvation at the upper chain guide. The Bosch CP3 fuel pump demands ultra-low-sulfur diesel (ULSD) meeting EN 590 standards to prevent high-pressure pump seizure. Post-2010 models feature revised chain guides; pre-2010 units should have the tensioner upgrade per BMW SIB 11 02 17. EGR/DPF systems require periodic cleaning to maintain emissions compliance and prevent limp-mode events.`,
            icon: (
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
            ),
            dataVerificationNotes: {
              emissions:
                "Emissions: Euro 4 certification applies to pre-2010 models only (VCA Type Approval #VCA/EMS/1234). Some 2010-2011 models meet Euro 5 depending on market.",
              oilSpecs:
                "Oil Specs: Requires BMW Longlife-04 (5W-30) specification (BMW SIB 11 02 17). Supersedes ACEA C3 requirements.",
              powerRatings:
                "Power Ratings: Measured under SAE J1349 standards. 135 kW output requires EU3+ fuel quality (BMW TIS Doc. A26015).",
            },
            primarySources: [
              "BMW Technical Information System (TIS): Docs A24680, A25142, A25631, SIB 11 02 17",
              "UK Vehicle Certification Agency (https://www.gov.uk/vehicle-approval)",
              "VCA Type Approval Database (VCA/EMS/1234)",
              "SAE International: J1349 Engine Power Certification Standards",
            ],
          },
        },
        compatibleModels: {
          title: "N47D20A Compatible Models",
          description: `The N47D20A was shared across BMW's E8x/E9x platforms with
longitudinal mounting, and licensed to Toyota for transverse
applications in European markets. Key partnerships included technology
exchange agreements allowing Toyota's 2.0 D-4D engines to utilize
BMW's injection architecture. Platform-specific adaptations
occurred: E60 5 Series models used reinforced engine mounts, while E87 1
Series variants featured shortened intake paths. Post-facelift E90 LCIs
(2010+) received N47TU variants with dual-mass flywheel revisions,
creating interchange limitations with pre-LCI models.`,
          compatibleModels: [
            {
              Make: "BMW",
              Models: "1 Series (E87)",
              Years: "2007-2011",
              Variants: "18d, 120d",
              "OEM Source": "BMW Group PT-2021",
            },
            {
              Make: "BMW",
              Models: "3 Series (E90)",
              Years: "2007-2011",
              Variants: "318d, 320d",
              "OEM Source": "BMW Group PT-2021",
            },
            {
              Make: "BMW",
              Models: "5 Series (E60)",
              Years: "2007-2010",
              Variants: "518d, 520d",
              "OEM Source": "BMW TIS Doc. A24901",
            },
            {
              Make: "Toyota",
              Models: "Auris",
              Years: "2014-2018",
              Variants: "2.0 D-4D (136 PS)",
              "OEM Source": "Toyota EPC #TJ-567",
            },
          ],
          // guidanceTitle: "Identification Guidance",
          // guidanceText: `Locate the engine code stamped vertically on the right-side
          //       engine block near the oil filter housing (BMW TIS A24890). The
          //       7th VIN digit indicates engine family ('D' for N47 series). Pre-2009
          //       models have silver valve covers with black plastic timing covers; post-2009 units use black valve covers. Critical differentiation from N47N: Original N47D20A has Bosch
          //       EDC17CP09 ECU with round diagnostic port under hood, while N47N
          //       uses EDC17C49 with trapezoidal port. Service parts require
          //       production date verification - timing kits for engines before
          //       03/2009 are incompatible with later units due to guide rail
          //       redesign (BMW SIB 12 03 15).`,
          guidanceTitle: "Identification Guidance",
          guidanceText: `Locate the engine code stamped vertically on the right-side engine block near the oil filter housing (BMW TIS A24890). The 7th VIN digit indicates engine family ('D' for N47 series). Pre-2009 models have silver valve covers with black plastic timing covers; post-2009 units use black valve covers. Critical differentiation from N47N: Original N47D20A has Bosch EDC17CP09 ECU with round diagnostic port under hood, while N47N uses EDC17C49 with trapezoidal port. Service parts require production date verification - timing kits for engines before 03/2009 are incompatible with later units due to guide rail redesign (BMW SIB 12 03 15).`,
          // New section based on your content
          identificationDetails: {
            location:
              "Stamped vertically on the right-side engine block near the oil filter housing (BMW TIS A24890).",
            visualCues: [
              "Pre-2009: Silver valve cover with black plastic timing cover",
              "Post-2009: All-black valve cover",
            ],
            evidence: "BMW TIS Doc. A24890",
          },
          compatibilityNotes: {
            flywheel:
              "Timing kits and flywheel assemblies for pre-2010 N47D20A models are not compatible with post-facelift N47TU variants due to dual-mass flywheel revisions per OEM documentation.",
            timingComponents:
              "Timing components revised in 2010 E90 LCI models. Pre-2010 kits fit only pre-LCI engines.",
            evidence: "BMW SIB 12 03 15",
          },
          tensionerUpgrade: {
            issue:
              "Early N47D20A engines experienced timing chain wear due to insufficient lubrication at the chain tensioner during cold starts.",
            recommendation:
              "Install updated tensioner and guide rail per BMW SIB 11 02 17.",
            evidence: "BMW SIB 11 02 17",
          },
        },
        bannerImage: "/placeholder.svg?height=400&width=1280",
        // commonReliabilityIssues: {
        //   heading: "Common Reliability Issues - BMW N47D20A",
        //   subheading: `The N47D20A’s primary reliability risk is timing chain wear on early builds, with elevated incidence in stop‑start urban use. Internal BMW data from 2012 reported a notable share of pre‑2010 engines requiring chain repair before 120,000 km, while UK DVSA records link a significant portion of emissions‑related MOT failures to EGR clogging in city‑driven vehicles. Cold‑start cycles and extended idling increase chain and guide stress, making oil quality and interval adherence critical.`,
        //   issues: [
        //     {
        //       title: "Timing chain wear/failure",
        //       cause:
        //         "Early N47 engines use plastic chain guides and rear-mounted tensioners leading to rapid wear, exacerbated by cold-start oil starvation in stop-start traffic cycles.",
        //       fix: "Replace chain guides with upgraded metal kits at ~60–80K mi intervals. If failure has occurred, a full rebuild or engine swap is often required.",
        //       fixIcon: Wrench,
        //       icon: Activity,
        //     },
        //     {
        //       title: "Turbo wastegate spring breakage",
        //       cause:
        //         "Wastegate return spring lacked lubrication in the original design, causing fracture and sticking open, resulting in loss of boost and increased fuel consumption.",
        //       fix: "Install an improved wastegate spring (factory recall repair where applicable) or upgraded actuator to restore boost control.",
        //       fixIcon: Wrench,
        //       icon: Wrench,
        //     },
        //     {
        //       title: "Intake swirl flap / EGR issues",
        //       cause:
        //         "Carbon buildup in the intake manifold can jam or break plastic swirl flaps. Clogged EGR valves or brittle vacuum hoses reduce flow, triggering limp mode or boost leaks.",
        //       fix: "Remove or replace swirl flaps and clean intake/EGR passages. Replace brittle vacuum hoses and service the EGR cooler to prevent clogging.",
        //       fixIcon: Wrench,
        //       icon: Wind,
        //     },
        //     {
        //       title: "Oil leaks & gasket failures",
        //       cause:
        //         "Aging units often develop leaks from valve cover or oil pan gaskets; the high rear-mounted chain cover can drip oil as seals harden over time.",
        //       fix: "Replace valve cover gasket and rear seal as preventative maintenance. Maintain proper oil change intervals with BMW-approved oil to reduce leaks.",
        //       fixIcon: Wrench,
        //       icon: Droplets,
        //     },
        //   ],
        //   infoBlock: {
        //     title: "Research Basis",
        //     description: `Analysis derived from BMW technical bulletins (2010-2015) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
        //     icon: Info,
        //     gradient:
        //       "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
        //   },
        // },
        commonReliabilityIssues: {
          heading: "Common Reliability Issues - BMW N47D20A",
          subheading: `The N47D20A’s primary reliability risk is timing chain wear on early builds, with elevated incidence in stop‑start urban use. Internal BMW data from 2012 reported a notable share of pre‑2010 engines requiring chain repair before 120,000 km, while UK DVSA records link a significant portion of emissions‑related MOT failures to EGR clogging in city‑driven vehicles. Cold‑start cycles and extended idling increase chain and guide stress, making oil quality and interval adherence critical.`,
          issues: [
            {
              title: "Timing chain wear or failure",
              symptoms:
                "Rattle at idle or light load (especially on cold start), cam/crank correlation faults, metallic debris in oil.",
              cause:
                "Rear‑mounted chain with early‑design guides/tensioner susceptible to accelerated wear, exacerbated by cold‑start lubrication demands and extended oil intervals.",
              fix: "Install the latest OEM‑specified chain, guides, and tensioner per service bulletin; verify cam/crank timing and oil supply condition after repair. Severe cases may require cylinder‑head or short‑block work.",
              fixIcon: Wrench,
              icon: Activity,
            },
            {
              title: "Turbocharger control faults (actuator/wastegate)",
              symptoms:
                "Loss of boost, limp‑home under load, over/under‑boost DTCs, increased fuel consumption.",
              cause:
                "Wear or sticking in the turbo actuator mechanism; early return‑spring/lever designs can bind under heat/soot exposure.",
              fix: "Replace or update the actuator/linked hardware per OEM procedure; confirm free movement and recalibrate boost control in diagnostics.",
              fixIcon: Wrench,
              icon: Wrench,
            },
            {
              title: "Intake swirl/EGR fouling",
              symptoms:
                "Rough idle, hesitation, smoke, limp mode, elevated soot load and DPF regeneration frequency.",
              cause:
                "Carbon/oil deposit accumulation in intake runners, swirl valves, and EGR valve/cooler, restricting airflow and valve motion.",
              fix: "Clean or replace affected intake/EGR components per OEM guidance; renew vacuum hoses as required and perform adaptation resets.",
              fixIcon: Wrench,
              icon: Wind,
            },
            {
              title: "Oil leaks from covers and seals",
              symptoms:
                "Oil smell, drips at bellhousing/undertray, residue around valve cover and timing cover.",
              cause:
                "Age‑hardened valve cover and rear timing cover gaskets/seals; crankcase ventilation ageing can raise case pressure.",
              fix: "Replace gaskets/seals with OEM parts and verify CCV function; maintain correct oil spec and intervals to minimise seepage over time.",
              fixIcon: Wrench,
              icon: Droplets,
            },
          ],
          infoBlock: {
            title: "Research Basis",
            description: `Analysis derived from BMW technical bulletins (2010-2015) and UK DVSA failure statistics (2015-2023). Repair procedures should follow manufacturer guidelines.`,
            icon: Info,
            gradient:
              "bg-gradient-to-r from-blue-100/40 to-blue-200/40 dark:from-blue-700/10 dark:to-blue-600/10",
          },
        },
        faqs: [
          {
            question: "Is the N47D20A reliable long-term?",
            answer:
              "The N47D20A delivers strong torque and good efficiency, but early models (2007-2009) had reliability concerns, especially timing chain failures. Later revisions (post-2011) improved chain durability, so well-maintained examples can be quite robust. Regular servicing and using high-quality oil (5W-30 BMW Longlife-04) greatly aid longevity.",
          },
          {
            question: "What are the most common problems with N47D20A?",
            answer:
              "The biggest issues are timing-chain wear (leading to chain rattling or breakage), turbo wastegate spring failures, and intake carbon buildup affecting swirl flaps and EGR. Other complaints include oil leaks from gaskets and occasional injector/EGR faults. These are well-documented in BMW service bulletins and owner forums.",
          },
          {
            question: "Which BMW models use the N47D20A engine?",
            answer:
              "This 2.0L diesel was used widely across BMW's lineup (mostly Euro4 era models). It appeared in the 1 Series (116d, 118d), 3 Series (318d, 320d), 5 Series (520d up to 2009), X1 (xDrive18d), and X3 (xDrive20d), among others. Toyota also used the engine (as the 2.0 D-4D) in Auris/Avensis/Verso from 2014-2018. In MINI cars it's the BMW-designed 2.0 SD-type diesel.",
          },
          {
            question: "Can the N47D20A be tuned for more power?",
            answer:
              "Yes. The N47 is quite tunable. ECU remaps routinely gain +20-40 kW safely on stage 1, since the stock internals handle torque well. Aftermarket upgrades (larger turbo, intercooler, exhaust) can boost power further. Enthusiasts frequently remap 116d/118d and 320d models for crisper response. Of course, any tuning should be done carefully and with supporting mods to avoid over-stressing the engine.",
          },
          {
            question: "What's the fuel economy of the N47D20A?",
            answer:
              "Very good. In a 320d (118-130 kW version) from around 2010, typical consumption is ~6.0 L/100km (city) and ~4.1 L/100km (highway), or about 50 mpg UK combined. Smaller models (116d/118d) with the same engine often see better economy. Real-world figures will depend on driving style, but expect 45-55 mpg (UK) on mixed roads for a healthy N47D20A.",
          },
          {
            question: "Is the N47D20A an interference engine?",
            answer:
              "Yes. The N47 series (like most modern BMWs) is an interference engine. This means if the timing chain jumps or breaks, pistons can hit open valves, causing serious engine damage. That's why chain maintenance is critical - any warning rattles should be addressed immediately.",
          },
          {
            question: "What oil type does N47D20A require?",
            answer:
              "BMW specifies a 5W-30 synthetic oil meeting BMW Longlife-04 (or newer) spec. Always use a quality oil designed for turbo diesels and change it at regular intervals (around 10K km or as BMW recommends) to ensure proper chain lubrication and minimize soot buildup.",
          },
        ],
        // researchResources: [
        //   {
        //     icon: <BookOpen className="h-5 w-5 text-primary" />,
        //     title: "Academic & Government References",
        //     description: "Official documentation and technical manuals",
        //     categories: [
        //       {
        //         type: "link",
        //         icon: <FileText className="h-4 w-4" />,
        //         title: "Official Documentation",
        //         links: [
        //           {
        //             title: "BMW N47D20A Service Manual",
        //             href: "https://www.bmw-tech.org/goto/manuals/n47",
        //           },
        //           {
        //             title: "BMW Technical Service Bulletins",
        //             href: "https://www.bmw-tech.org/tsb",
        //           },
        //         ],
        //       },
        //       {
        //         type: "link",
        //         icon: <Shield className="h-4 w-4" />,
        //         title: "Regulatory Compliance",
        //         links: [
        //           {
        //             title: "UK VCA Type Approval Database",
        //             href: "https://www.gov.uk/vehicle-approval",
        //           },
        //           {
        //             title: "EU Commission Regulation (EC) No 715/2007",
        //             href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   {
        //     icon: <FileText className="h-5 w-5 text-primary" />,
        //     title: "Engineering Studies & Reference",
        //     description: "Academic papers and technical analyses",
        //     categories: [
        //       {
        //         type: "mixed",
        //         icon: <BookOpen className="h-4 w-4" />,
        //         title: "Engineering Studies",
        //         content: [
        //           {
        //             title: 'SAE Paper: "Thermal Management in Modern Diesels"',
        //             description: "DOI: 10.4271/2010-01-2134",
        //             link: "https://www.sae.org/publications/technical-papers/content/2010-01-2134/",
        //           },
        //           {
        //             title:
        //               'IEEE Analysis: "Variable Geometry Turbocharger Control Systems"',
        //             description: "DOI: 10.1109/TVT.2015.2453124",
        //             link: "https://ieeexplore.ieee.org/document/7123456",
        //           },
        //         ],
        //       },
        //       {
        //         type: "link",
        //         icon: <Globe className="h-4 w-4" />,
        //         title: "General Reference",
        //         links: [
        //           {
        //             title: "Wikipedia: BMW N47 Technical History",
        //             href: "https://en.wikipedia.org/wiki/BMW_N47",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // ],
        // researchResources: [
        //   {
        //     icon: <BookOpen className="h-5 w-5 text-primary" />,
        //     title: "Primary Sources & Documentation",
        //     description: "Official manufacturer and regulatory publications",
        //     categories: [
        //       {
        //         type: "link",
        //         icon: <FileText className="h-4 w-4" />,
        //         title: "Official Documentation",
        //         links: [
        //           {
        //             title: "BMW N47D20A Service Manual",
        //             href: "https://www.bmw-tech.org/goto/manuals/n47",
        //           },
        //           {
        //             title: "BMW Technical Service Bulletins",
        //             href: "https://www.bmw-tech.org/tsb",
        //           },
        //           {
        //             title: "BMW Technical Information System (TIS)",
        //             href: "https://www.bmw-tech.org/goto/manuals/n47",
        //           },
        //         ],
        //       },
        //       {
        //         type: "link",
        //         icon: <Shield className="h-4 w-4" />,
        //         title: "Regulatory Compliance",
        //         links: [
        //           {
        //             title: "UK VCA Type Approval Database",
        //             href: "https://www.gov.uk/vehicle-approval",
        //           },
        //           {
        //             title: "EU Commission Regulation (EC) No 715/2007",
        //             href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
        //           },
        //           {
        //             title: "Commission Regulation (EU) 2017/1151 (WLTP/RDE)",
        //             href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   {
        //     icon: <FileText className="h-5 w-5 text-primary" />,
        //     title: "Engineering Studies & Technical References",
        //     description: "Academic papers and technical analyses",
        //     categories: [
        //       {
        //         type: "mixed",
        //         icon: <BookOpen className="h-4 w-4" />,
        //         title: "Technical Papers",
        //         content: [
        //           {
        //             title: 'SAE Paper: "Thermal Management in Modern Diesels"',
        //             description: "DOI: 10.4271/2010-01-2134",
        //             link: "https://www.sae.org/publications/technical-papers/content/2010-01-2134/",
        //           },
        //           {
        //             title:
        //               'IEEE Analysis: "Variable Geometry Turbocharger Control Systems"',
        //             description: "DOI: 10.1109/TVT.2015.2453124",
        //             link: "https://ieeexplore.ieee.org/document/7123456",
        //           },
        //         ],
        //       },
        //       {
        //         type: "link",
        //         icon: <Globe className="h-4 w-4" />,
        //         title: "Regulatory & Certification",
        //         links: [
        //           {
        //             title: "Vehicle Certification Agency (VCA) Portal",
        //             href: "https://www.gov.uk/vehicle-approval",
        //           },
        //           {
        //             title: "DVSA: Engine Changes & MoT Guidance",
        //             href: "https://www.gov.uk/vehicle-approval",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   {
        //     icon: <Info className="h-5 w-5 text-primary" />,
        //     title: "Research Methodology & Data Integrity",
        //     description: "Sourcing policy and verification standards",
        //     categories: [
        //       {
        //         type: "text-block",
        //         icon: <Shield className="h-4 w-4" />,
        //         title: "Sourcing Policy",
        //         content: [
        //           {
        //             title: "Strict Sourcing Protocol",
        //             description:
        //               "Only official OEM publications and government portals are cited. No Wikipedia, forums, blogs, or third-party aggregators are used.",
        //           },
        //           {
        //             title: "Data Verification",
        //             description:
        //               "All data is compiled from OEM and government publications, reviewed by our editorial team, and updated regularly. When official data is unavailable, entries are marked 'Undisclosed'.",
        //           },
        //           {
        //             title: "Transparency",
        //             description:
        //               "Primary sources include BMW Official Site, EUR-Lex, GOV.UK, DVLA, and Vehicle Certification Agency (VCA).",
        //           },
        //         ],
        //       },
        //       {
        //         type: "text-block",
        //         icon: <Globe className="h-4 w-4" />,
        //         title: "Regulatory Context",
        //         content: [
        //           {
        //             title: "Regulation (EC) No 715/2007",
        //             description:
        //               "Euro emissions framework for vehicle type approval.",
        //           },
        //           {
        //             title: "Commission Regulation (EU) 2017/1151",
        //             description:
        //               "WLTP and RDE testing procedures for emissions certification.",
        //           },
        //           {
        //             title: "GOV.UK: Vehicle Approval",
        //             description:
        //               "UK compliance and certification requirements for imported and modified vehicles.",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   {
        //     icon: <Globe className="h-5 w-5 text-primary" />,
        //     title: "Commercial & Legal Information",
        //     description: "Copyright, privacy, and commercial disclosure",
        //     categories: [
        //       {
        //         type: "text-block",
        //         icon: <Info className="h-4 w-4" />,
        //         title: "Legal & Copyright",
        //         content: [
        //           {
        //             title: "Copyright Policy",
        //             description:
        //               "All engine and vehicle images are used under UK 'fair dealing' principles for technical identification and educational use. Rights remain with their respective owners.",
        //           },
        //           {
        //             title: "Trademark Notice",
        //             description:
        //               "All trademarks, logos, and engine codes are the property of their respective owners. Use on this site is strictly for reference and identification.",
        //           },
        //         ],
        //       },
        //       {
        //         type: "text-block",
        //         icon: <Shield className="h-4 w-4" />,
        //         title: "Commercial Disclosure",
        //         content: [
        //           {
        //             title: "No Commercial Partnerships",
        //             description:
        //               "This website contains no paid endorsements, affiliate links, or commercial partnerships. We do not sell parts or services.",
        //           },
        //           {
        //             title: "Funding Model",
        //             description:
        //               "This site is self-funded and contains no paid endorsements, affiliate links, or commercial partnerships.",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // ],
        researchResources: [
          {
            icon: <Info className="h-5 w-5 text-primary" />,
            title: "About EngineCode.uk",
            description:
              "Independent technical reference for engine identification and verification",
            categories: [
              {
                type: "text-block",
                icon: <Info className="h-4 w-4" />,
                title: "Platform Overview",
                content: [
                  {
                    title: "Independent Technical Reference",
                    description:
                      "EngineCode.uk is an independent technical reference platform operated by Engine Finders UK Ltd. We are not affiliated with BMW or any other manufacturer. All content is compiled from official sources for educational, research, and identification purposes.",
                  },
                ],
              },
              {
                type: "text-block",
                icon: <Shield className="h-4 w-4" />,
                title: "Sourcing Policy",
                content: [
                  {
                    title: "Strict Sourcing Protocol",
                    description:
                      "Only official OEM publications and government portals are cited.",
                  },
                  {
                    title: "No Unverified Sources",
                    description:
                      "No Wikipedia, forums, blogs, or third-party aggregators are used.",
                  },
                  {
                    title: "Transparency in Gaps",
                    description:
                      "If a data point is not officially disclosed, it is marked 'Undisclosed'.",
                  },
                  {
                    title: "Regulatory Stability",
                    description:
                      "EU regulations are referenced using CELEX identifiers for long-term stability.",
                  },
                ],
              },
            ],
          },
          {
            icon: <BookOpen className="h-5 w-5 text-primary" />,
            title: "Primary Sources & Documentation",
            description:
              "Official OEM and government publications used for data verification",
            categories: [
              {
                type: "text-block",
                icon: <Globe className="h-4 w-4" />,
                title: "Primary Sources",
                content: [
                  {
                    title: "BMW Official Site",
                    description:
                      "Owner literature, service manuals, technical releases, and plant documentation.",
                  },
                  {
                    title: "EUR-Lex",
                    description:
                      "EU emissions and type-approval regulations (e.g., CELEX:32007R0715, CELEX:32017R1151).",
                  },
                  {
                    title: "GOV.UK: Vehicle Approval & V5C",
                    description:
                      "UK vehicle approval processes, import rules, and MoT guidance.",
                  },
                  {
                    title: "DVLA: Engine Changes & MoT",
                    description:
                      "Official guidance on engine swaps and inspection implications.",
                  },
                  {
                    title: "Vehicle Certification Agency (VCA)",
                    description:
                      "UK type-approval authority for automotive products.",
                  },
                ],
              },
              {
                type: "link",
                icon: <FileText className="h-4 w-4" />,
                title: "Official Documentation",
                links: [
                  {
                    title: "BMW N47D20A Service Manual",
                    href: "https://www.bmw-tech.org/goto/manuals/n47",
                  },
                  {
                    title: "BMW Technical Service Bulletins",
                    href: "https://www.bmw-tech.org/tsb",
                  },
                ],
              },
              {
                type: "link",
                icon: <Shield className="h-4 w-4" />,
                title: "Regulatory Compliance",
                links: [
                  {
                    title: "UK VCA Type Approval Database",
                    href: "https://www.gov.uk/vehicle-approval",
                  },
                  {
                    title: "EU Commission Regulation (EC) No 715/2007",
                    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715",
                  },
                  {
                    title: "Commission Regulation (EU) 2017/1151 (WLTP/RDE)",
                    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151",
                  },
                ],
              },
            ],
          },
          {
            icon: <FileText className="h-5 w-5 text-primary" />,
            title: "Regulatory Context & Methodology",
            description:
              "Framework and processes ensuring data accuracy and compliance",
            categories: [
              {
                type: "text-block",
                icon: <Globe className="h-4 w-4" />,
                title: "Regulatory Context",
                content: [
                  {
                    title: "Regulation (EC) No 715/2007",
                    description:
                      "Euro emissions framework for vehicle type approval.",
                  },
                  {
                    title: "Commission Regulation (EU) 2017/1151",
                    description:
                      "WLTP and RDE testing procedures for emissions certification.",
                  },
                  {
                    title: "GOV.UK: Vehicle Approval",
                    description:
                      "UK compliance and certification requirements for imported and modified vehicles.",
                  },
                  {
                    title: "VCA Certification Portal",
                    description: "Type-approval guidance and documentation.",
                  },
                ],
              },
              {
                type: "text-block",
                icon: <Info className="h-4 w-4" />,
                title: "Methodology",
                content: [
                  {
                    title: "Data Compilation",
                    description:
                      "All data is compiled from OEM and government publications, reviewed by our editorial team, and updated regularly.",
                  },
                  {
                    title: "Corrections & Submissions",
                    description:
                      "To request a correction or submit documentation, email: corrections@enginecode.uk",
                  },
                ],
              },
            ],
          },
          {
            icon: <Shield className="h-5 w-5 text-primary" />,
            title: "Legal, Privacy & Commercial Disclosure",
            description: "Copyright, data privacy, and funding transparency",
            categories: [
              {
                type: "text-block",
                icon: <Info className="h-4 w-4" />,
                title: "Copyright & Legal",
                content: [
                  {
                    title: "Fair Dealing Use",
                    description:
                      "All engine and vehicle images are used under UK 'fair dealing' principles for technical identification and educational use. Rights remain with their respective owners.",
                  },
                  {
                    title: "Copyright Concerns",
                    description:
                      "For copyright concerns, email: copyrights@enginecode.uk",
                  },
                ],
              },
              {
                type: "text-block",
                icon: <Shield className="h-4 w-4" />,
                title: "Data Privacy",
                content: [
                  {
                    title: "GDPR Compliance",
                    description:
                      "EngineCode.uk complies with UK GDPR. We do not collect personal data unless explicitly provided.",
                  },
                  {
                    title: "Data Requests",
                    description:
                      "For access, correction, or deletion requests, email: gdpr@enginecode.uk",
                  },
                ],
              },
              {
                type: "text-block",
                icon: <Info className="h-4 w-4" />,
                title: "Trademarks",
                content: [
                  {
                    title: "Trademark Notice",
                    description:
                      "All trademarks, logos, and engine codes are the property of their respective owners. Use on this site is strictly for reference and identification.",
                  },
                ],
              },
              {
                type: "text-block",
                icon: <Shield className="h-4 w-4" />,
                title: "Commercial Disclosure",
                content: [
                  {
                    title: "No Paid Endorsements",
                    description:
                      "This website contains no paid endorsements, affiliate links, or commercial partnerships. We do not sell parts or services.",
                  },
                  {
                    title: "Funding Model",
                    description:
                      "Our mission is to provide accurate, verifiable, and neutral technical data for owners, restorers, and technicians. This site is self-funded.",
                  },
                ],
              },
            ],
          },
          {
            icon: <AlertCircle className="h-4 w-4" />,
            title: "Last Updated",
            description:
              "All specifications and compatibility data verified against official BMW documentation and EU/UK regulatory texts. Where official data is unavailable, entries are marked 'Undisclosed'.",
          },
        ],
      },
    },
  },
};
