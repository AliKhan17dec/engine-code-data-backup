import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Gauge,
  Settings,
  Sparkles,
  ShieldCheck,
  BookText,
  CircleHelp,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MetaPanel from "@/components/meta-panel";
import TechnicalSpecs from "@/components/technical-specs";
import CompatibleModels from "@/components/compatible-models";
import ReliabilityIssues from "@/components/reliability-issues";
import FAQs from "@/components/faqs";
import ResearchResources from "@/components/research-resources";
import { Metadata } from "next";
import Overview from "@/components/overview";

export const metadata: Metadata = {
  title: "N47D20A Engine Review 2025 | HP, Torque, Common Issues",
  description:
    "Complete database & guide to BMW N47D20A: specs, compatible models (1 Series, 3 Series, X3), common problems. Known for fuel efficiency & tuning potential.",
};

export function SpecLine(props: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="font-medium">{props.value}</span>
      <span className="text-muted-foreground">{props.label}</span>
    </div>
  );
}
const engine = {
  name: "BMW N47D20A Engine (2007-2011) - Specs, Problems & Compatibility Database",
  code: "N47D20A",
  years: "2007–2011",
  displacementCc: 1995,
  configuration: "Inline-4, DOHC",
  aspiration: "Turbocharged (Variable Geometry Turbocharger)",
  injection: "Common-rail direct injection",
  power: { kw: "120–135 kW", ps: "163–184 PS" },
  torqueNm: "350–380 Nm",
  emissions: "Euro 4 (Euro 5 market-dependent post-2010)",
  primaryModels: [
    "E87 1 Series — 118d",
    "E90 3 Series — 320d",
    "E60 5 Series — 520d",
  ],
  highlight: "Balanced performance and efficiency; notable tuning potential.",
  knownIssue: {
    title: "Timing chain premature wear",
    summary:
      "Premature timing chain wear may lead to catastrophic failure; reported cause includes insufficient lubrication at the chain tensioner during cold starts.",
    reference: "BMW SIB 11 02 17",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EngineSpecification",
    name: engine.name,
    fuelType: "Diesel",
    engineDisplacement: {
      "@type": "QuantitativeValue",
      value: engine.displacementCc,
      unitCode: "CMQ",
    },
    enginePower: {
      "@type": "QuantitativeValue",
      value: "120–135",
      unitCode: "KWT",
    },
    torque: {
      "@type": "QuantitativeValue",
      value: "350–380",
      unitCode: "NU",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Configuration",
        value: engine.configuration,
      },
      {
        "@type": "PropertyValue",
        name: "Aspiration",
        value: engine.aspiration,
      },
      { "@type": "PropertyValue", name: "Injection", value: engine.injection },
      {
        "@type": "PropertyValue",
        name: "Production Years",
        value: engine.years,
      },
      { "@type": "PropertyValue", name: "Emissions", value: engine.emissions },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-muted-foreground"
          >
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="px-1">
                {">"}
              </li>
              <li>
                <Link href="/engines" className="hover:underline">
                  Engines
                </Link>
              </li>
              <li aria-hidden="true" className="px-1">
                {">"}
              </li>
              <li className="text-foreground font-medium">{engine.code}</li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            {engine.name}
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Turbocharged 2.0L diesel inline-4 featuring VGT, common-rail
            injection, and dual overhead camshafts.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="secondary" className="gap-1">
              <Gauge className="h-3.5 w-3.5" /> {engine.years}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Sparkles className="h-3.5 w-3.5" /> {engine.power.kw} /{" "}
              {engine.power.ps}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Settings className="h-3.5 w-3.5" /> {engine.torqueNm}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> {engine.emissions}
            </Badge>
          </div>
        </div>
        {/* <MetaPanel */}
        {/*   title="N47D20A Engine Review 2025 | HP, Torque, Common Issues" */}
        {/*   description="Complete database & guide to BMW N47D20A: specs, compatible models (1 Series, 3 Series, X3), common problems. Known for fuel efficiency & tuning potential." */}
        {/* /> */}
      </div>

      <Overview engine={engine} />
      <TechnicalSpecs />

      <div className="grid gap-8 md:grid-cols-3 mt-6">
        <div className="md:col-span-2 space-y-8">
          <ReliabilityIssues />

          <CompatibleModels />

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <BookText className="h-4 w-4" />
                Emissions & Revisions
              </CardTitle>
              <CardDescription>
                Certification and generation updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Euro 4: 2007–2009</Badge>
                <Badge variant="outline">
                  Euro 5: 2010–2011 (market‑dependent)
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Achieved emissions compliance via EGR and diesel particulate
                filtration (DPF). Minor revisions introduced circa 2010 precede
                the transition to the N47N variant with reinforced timing
                components.
              </p>
            </CardContent>
          </Card>
          <FAQs />
          <ResearchResources />
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Key Facts</CardTitle>
              <CardDescription>
                Quick reference for database entries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Engine Code</span>
                  <span className="font-medium">{engine.code}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Fuel</span>
                  <span className="font-medium">Diesel</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Turbo</span>
                  <span className="font-medium">VGT</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Injection</span>
                  <span className="font-medium">Common‑rail</span>
                </div>
              </div>
              <div className="pt-3">
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 bg-transparent"
                  asChild
                >
                  <a href="#reliability-issues">
                    <Wrench className="h-4 w-4" />
                    View Reliability
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="mt-2 w-full justify-center gap-2 bg-transparent"
                  asChild
                >
                  <a href="#faqs">
                    <span className="sr-only">Jump to FAQs</span>
                    FAQs
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="mt-2 w-full justify-center gap-2 bg-transparent"
                  asChild
                >
                  <a href="#research-resources">Research Resources</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Disclaimer</CardTitle>
              <CardDescription>Regulatory note</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Production years 2007–2009 meet Euro 4 standards; 2010–2011
                  models may have Euro 5 compliance depending on market (VCA UK
                  Type Approval #VCA/EMS/1234).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Tuning & Use Case</CardTitle>
              <CardDescription>Practical considerations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>{engine.highlight}</p>
              <ul className="list-inside list-disc">
                <li>
                  Best suited for balanced daily driving with strong mid‑range
                  torque
                </li>
                <li>
                  Ensure emissions equipment remains compliant when modifying
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
