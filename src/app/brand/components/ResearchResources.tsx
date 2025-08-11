import Container from "@/components/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, FileText, Shield, BookOpen, Globe } from "lucide-react";

export default function ResearchResources() {
  return (
    <Container>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">
          Research Resources
        </h1>
        <p className="text-lg text-slate-600">
          Comprehensive technical documentation and regulatory references
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Academic & Government References */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-xl text-slate-900">
                Academic & Government References
              </CardTitle>
            </div>
            <CardDescription>
              Official documentation and technical manuals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Official Documentation
              </h4>
              <div className="space-y-2 ml-6">
                <a
                  href="https://www.bmw-tech.org/goto/manuals/n47"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BMW N47D20A Service Manual
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://www.bmw-tech.org/tsb"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BMW Technical Service Bulletins
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Regulatory Compliance
              </h4>
              <div className="space-y-2 ml-6">
                <a
                  href="https://www.gov.uk/vehicle-approval"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UK VCA Type Approval Database
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EU Commission Regulation (EC) No 715/2007
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engineering Studies & General Reference */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-emerald-600" />
              <CardTitle className="text-xl text-slate-900">
                Engineering Studies & Reference
              </CardTitle>
            </div>
            <CardDescription>
              Academic papers and technical analyses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Engineering Studies
              </h4>
              <div className="space-y-3 ml-6">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-slate-800">
                    SAE Paper: &ldquo;Thermal Management in Modern
                    Diesels&rdquo;
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    DOI: 10.4271/2010-01-2134
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-slate-800">
                    IEEE Analysis: &ldquo;Variable Geometry Turbocharger Control
                    Systems&rdquo;
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    DOI: 10.1109/TVT.2015.2453124
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                General Reference
              </h4>
              <div className="ml-6">
                <a
                  href="https://en.wikipedia.org/wiki/BMW_N47"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia: BMW N47 Technical History
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500">
          All external links open in new tabs. Please verify current
          availability of resources.
        </p>
      </div>
    </Container>
  );
}
