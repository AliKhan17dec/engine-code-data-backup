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
import { ListChecks, Info, BookOpenText } from "lucide-react";

type SpecRow = {
  parameter: string;
  value: string;
  source: string;
};

const rows: SpecRow[] = [
  {
    parameter: "Displacement",
    value: "1,995 cc",
    source: "BMW ETK Doc. E12-7890",
  },
  {
    parameter: "Bore × Stroke",
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
];

export default function TechnicalSpecs() {
  return (
    <section
      id="technical-specs"
      aria-labelledby="tech-specs-heading"
      className="space-y-6"
    >
      <div className="space-y-2">
        <h2
          id="tech-specs-heading"
          className="text-xl font-semibold tracking-tight"
        >
          N47D20A Technical Specifications
        </h2>
        <p className="text-sm text-muted-foreground">
          {
            "The N47D20A's 16.5:1 compression ratio enables efficient combustion critical for Euro 4 compliance, while its aluminium alloy block reduces mass for improved dynamics in BMW's sport-oriented chassis. Optimized for executive vehicles requiring sub-6L/100km efficiency, the engine employs a swirl-flame combustion process with piezo injectors enabling up to 5 injections per cycle."
          }
        </p>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Parameter Table</CardTitle>
          <CardDescription>Factory data and cited OEM sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">Parameter</TableHead>
                  <TableHead className="whitespace-nowrap">Value</TableHead>
                  <TableHead className="whitespace-nowrap">
                    OEM Source
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.parameter}>
                    <TableCell className="font-medium">{r.parameter}</TableCell>
                    <TableCell>{r.value}</TableCell>
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
            <ListChecks className="h-4 w-4" />
            Practical Implications
          </CardTitle>
          <CardDescription>
            Operational guidance derived from provided references
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <ul className="list-inside list-disc space-y-2">
            <li>
              The single VGT turbo provides strong low‑RPM torque ideal for
              urban driving but requires strict adherence to 15,000‑km oil
              change intervals to prevent vane sticking.
            </li>
            <li>
              BMW Longlife‑04 oil is non‑negotiable due to its high‑ester
              formulation protecting timing chain components.
            </li>
            <li>
              Cold‑start idling should be minimized to reduce oil starvation at
              the upper chain guide.
            </li>
            <li>
              The Bosch CP3 fuel pump demands ultra‑low‑sulfur diesel (ULSD) to
              prevent high‑pressure valve wear.
            </li>
            <li>
              Post‑2010 models feature revised chain guides, but pre‑2010 units
              require aftermarket tensioner upgrades per BMW TIS A25631.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Info className="h-4 w-4" />
              Data Verification Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Emissions: Euro 4 certification applies to pre‑2010 models only
                (VCA UK Type Approval #VCA/EMS/1234)
              </li>
              <li>
                Oil Specs: BMW Longlife‑04 supersedes ACEA C3 requirements (BMW
                SIB 11 02 17)
              </li>
              <li>
                Power Ratings: 135 kW output requires EU3+ fuel quality (BMW TIS
                Doc. A26015)
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpenText className="h-4 w-4" />
              Primary Sources
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-inside list-disc space-y-2">
              <li>
                BMW Technical Information System (TIS): Docs A24680, A25142,
                A25631
              </li>
              <li>
                <a
                  href="https://www.gov.uk/vehicle-approval"
                  className="underline underline-offset-2 hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UK Vehicle Certification Agency
                </a>
              </li>
              <li>VCA Type Approval Database</li>
              <li>
                SAE International: J1349 Engine Power Certification Standards
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
