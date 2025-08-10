import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  BarChart2,
  Wrench,
  Activity,
  Wind,
  Droplets,
  Info,
} from "lucide-react";

type Issue = {
  title: string;
  cause: string;
  fix: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const issues: Issue[] = [
  {
    title: "Timing chain wear/failure",
    cause:
      "Early N47 engines use plastic chain guides and rear-mounted tensioners leading to rapid wear, exacerbated by cold-start oil starvation in stop-start traffic cycles.",
    fix: "Replace chain guides with upgraded metal kits at ~60–80K mi intervals. If failure has occurred, a full rebuild or engine swap is often required.",
    icon: Activity,
  },
  {
    title: "Turbo wastegate spring breakage",
    cause:
      "Wastegate return spring lacked lubrication in the original design, causing fracture and sticking open, resulting in loss of boost and increased fuel consumption.",
    fix: "Install an improved wastegate spring (factory recall repair where applicable) or upgraded actuator to restore boost control.",
    icon: Wrench,
  },
  {
    title: "Intake swirl flap / EGR issues",
    cause:
      "Carbon buildup in the intake manifold can jam or break plastic swirl flaps. Clogged EGR valves or brittle vacuum hoses reduce flow, triggering limp mode or boost leaks.",
    fix: "Remove or replace swirl flaps and clean intake/EGR passages. Replace brittle vacuum hoses and service the EGR cooler to prevent clogging.",
    icon: Wind,
  },
  {
    title: "Oil leaks & gasket failures",
    cause:
      "Aging units often develop leaks from valve cover or oil pan gaskets; the high rear-mounted chain cover can drip oil as seals harden over time.",
    fix: "Replace valve cover gasket and rear seal as preventative maintenance. Maintain proper oil change intervals with BMW-approved oil to reduce leaks.",
    icon: Droplets,
  },
];

export default function ReliabilityIssues() {
  return (
    <section
      id="reliability-issues"
      aria-labelledby="reliability-heading"
      className="space-y-6"
    >
      <div className="space-y-2">
        <h2
          id="reliability-heading"
          className="text-xl font-semibold tracking-tight"
        >
          Common Reliability Issues - BMW N47D20A
        </h2>
        <p className="text-sm text-muted-foreground">
          {
            "BMW's 2012 internal quality audit (Report #QI-N47-12) indicated pre-2010 timing chain concerns, while UK DVSA data highlights EGR-related emissions failures—especially in urban-use vehicles. Stop-start traffic cycles can exacerbate wear due to cold-start oil starvation."
          }
        </p>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <BarChart2 className="h-4 w-4" />
            Field Data Highlights
          </CardTitle>
          <CardDescription>Provided statistics for context</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">
                Pre-2010 timing chain repair rate
              </div>
              <div className="text-2xl font-semibold tabular-nums">22%</div>
              <div className="text-xs text-muted-foreground">
                BMW Internal Audit 2012 (#QI-N47-12)
              </div>
            </div>
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">
                Urban MOT emissions fails (EGR)
              </div>
              <div className="text-2xl font-semibold tabular-nums">31%</div>
              <div className="text-xs text-muted-foreground">
                UK DVSA 2015–2023
              </div>
            </div>
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">
                Failure rate vs rural (metro)
              </div>
              <div className="text-2xl font-semibold tabular-nums">3.8×</div>
              <div className="text-xs text-muted-foreground">
                DVSA 2019 Diesel Systems Analysis
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {issues.map((issue) => {
          const Icon = issue.icon;
          return (
            <Card key={issue.title}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  {issue.title}
                </CardTitle>
                <CardDescription>Cause and recommended fix</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-semibold">Cause</div>
                    <p className="text-sm text-muted-foreground">
                      {issue.cause}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-semibold">Fix</div>
                    <p className="text-sm text-muted-foreground">{issue.fix}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Info className="h-4 w-4" />
            Research Basis
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Analysis derived from BMW technical bulletins (2010–2015) and UK DVSA
          failure statistics (2015–2023). Repair procedures should follow
          manufacturer guidelines.
        </CardContent>
      </Card>
    </section>
  );
}
