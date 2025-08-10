import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, FileText, Scale, Microscope, Globe } from "lucide-react";

export default function ResearchResources() {
  return (
    <section
      id="research-resources"
      aria-labelledby="research-resources-heading"
      className="space-y-6"
    >
      <div className="space-y-2">
        <h2
          id="research-resources-heading"
          className="text-xl font-semibold tracking-tight"
        >
          Research Resources
        </h2>
        <p className="text-sm text-muted-foreground">
          Academic & Government References
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-4 w-4" />
              Official Documentation
            </CardTitle>
            <CardDescription>
              Service literature and technical bulletins
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.bmw-tech.org/goto/manuals/n47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-foreground"
                >
                  BMW N47D20A Service Manual
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.bmw-tech.org/tsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-foreground"
                >
                  BMW Technical Service Bulletins
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Scale className="h-4 w-4" />
              Regulatory Compliance
            </CardTitle>
            <CardDescription>
              Type approval and emissions regulation
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.gov.uk/vehicle-approval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-foreground"
                >
                  UK VCA Type Approval Database
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-foreground"
                >
                  EU Commission Regulation (EC) No 715/2007
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Microscope className="h-4 w-4" />
              Engineering Studies
            </CardTitle>
            <CardDescription>
              Peer‑reviewed and technical analyses
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://doi.org/10.4271/2010-01-2134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-foreground"
                >
                  SAE: &quot;Thermal Management in Modern Diesels&quot; (DOI:
                  10.4271/2010-01-2134)
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://doi.org/10.1109/TVT.2015.2453124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-foreground"
                >
                  IEEE: &quot;Variable Geometry Turbocharger Control
                  Systems&quot; (DOI: 10.1109/TVT.2015.2453124)
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Globe className="h-4 w-4" />
              General Reference
            </CardTitle>
            <CardDescription>Background and summary material</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/BMW_N47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-foreground"
                >
                  Wikipedia: BMW N47 Technical History
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
