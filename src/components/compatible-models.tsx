import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, Info, LinkIcon, Wrench } from "lucide-react";
import Link from "next/link";

type CompatibleRow = {
  make: string;
  models: string;
  years: string;
  variants: string;
  source: string;
};

const rows: CompatibleRow[] = [
  {
    make: "BMW",
    models: "1 Series (E87)",
    years: "2007–2011",
    variants: "118d, 120d",
    source: "BMW Group PT-2021",
  },
  {
    make: "BMW",
    models: "3 Series (E90)",
    years: "2007–2011",
    variants: "318d, 320d",
    source: "BMW Group PT-2021",
  },
  {
    make: "BMW",
    models: "5 Series (E60)",
    years: "2007–2010",
    variants: "518d, 520d",
    source: "BMW TIS Doc. A24901",
  },
  {
    make: "Toyota",
    models: "Auris",
    years: "2014–2018",
    variants: "2.0 D-4D (136 PS)",
    source: "Toyota EPC #TJ-567",
  },
];

export default function CompatibleModels() {
  return (
    <section
      id="compatible-models"
      aria-labelledby="compatible-models-heading"
      className="space-y-6"
    >
      <div className="space-y-2">
        <h2
          id="compatible-models-heading"
          className="text-xl font-semibold tracking-tight"
        >
          N47D20A Compatible Models
        </h2>
        <p className="text-sm text-muted-foreground">
          {
            "The N47D20A was shared across BMW's E8x/E9x platforms with longitudinal mounting, and licensed to Toyota for transverse applications in European markets. Key partnerships included technology exchange agreements allowing Toyota's 2.0 D-4D engines to utilize BMW's injection architecture. Platform-specific adaptations occurred: E60 5 Series models used reinforced engine mounts, while E87 1 Series variants featured shortened intake paths. Post-facelift E90 LCIs (2010+) received N47TU variants with dual-mass flywheel revisions, creating interchange limitations with pre-LCI models."
          }
        </p>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Model Applications</CardTitle>
          <CardDescription>
            Market and chassis coverage with cited sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[110px]">Make</TableHead>
                  <TableHead className="min-w-[170px]">Models</TableHead>
                  <TableHead className="min-w-[120px]">Years</TableHead>
                  <TableHead className="min-w-[200px]">Variants</TableHead>
                  <TableHead className="min-w-[180px]">OEM Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r, i) => (
                  <TableRow key={`${r.make}-${r.models}-${i}`}>
                    <TableCell className="font-medium">{r.make}</TableCell>
                    <TableCell>{r.models}</TableCell>
                    <TableCell>{r.years}</TableCell>
                    <TableCell>{r.variants}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {r.source}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Wrench className="h-4 w-4" />
            Fitment Notes
          </CardTitle>
          <CardDescription>
            Platform-specific adaptations and interchange limitations
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <ul className="list-inside list-disc space-y-2">
            <li>
              E60 5 Series: reinforced engine mounts for longitudinal
              installation.
            </li>
            <li>
              E87 1 Series: shortened intake tract for packaging efficiency.
            </li>
            <li>
              E90 LCI (2010+): N47TU with revised dual‑mass flywheel;
              interchange limitations with pre‑LCI models.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Info className="h-4 w-4" />
            Identification Guidance
          </CardTitle>
          <CardDescription>
            How to verify engine family and variant
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-3">
          <ul className="list-inside list-disc space-y-2">
            <li>
              Locate the engine code stamped vertically on the right‑side engine
              block near the oil filter housing (BMW TIS A24890).
            </li>
            <li>
              The 7th VIN digit indicates engine family {"('D' for N47 series)"}
              .
            </li>
            <li>
              Visual cues: pre‑2009 units have silver valve covers with black
              plastic timing covers; post‑2009 use black valve covers.
            </li>
            <li>
              Differentiate from N47N: Original N47D20A uses Bosch EDC17CP09
              with a round diagnostic port under hood; N47N uses EDC17C49 with a
              trapezoidal port.
            </li>
            <li>
              Service parts require production date verification — timing kits
              for engines before 03/2009 are incompatible with later units due
              to guide rail redesign (BMW SIB 12 03 15).
            </li>
          </ul>

          <div className="mt-2 flex items-start gap-2 rounded-md border p-3 text-xs">
            <AlertCircle className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <p>
              Always cross‑check ECU label and production date before ordering
              timing components, DMF assemblies, or harnesses.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-2 text-sm">
        <Link
          href="/bmw"
          className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-foreground"
        >
          <LinkIcon className="h-4 w-4" />
          Related Engines: View BMW engines
        </Link>
      </div>
    </section>
  );
}
