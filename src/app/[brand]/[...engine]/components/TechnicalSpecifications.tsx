// import { JSX } from "react";
// import Container from "@/components/Container";
// import { EngineSpecsTable } from "./EngineSpecsTable";
// import { H1, SH, P, H5 } from "@/components/Typography";
// import { AlertCircle, ExternalLink } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//
// const TechnicalSpecifications = ({
//   engine,
//   description,
//   engineSpecs,
//   practicalImplications,
// }: TechnicalSpecsProps): JSX.Element => {
//   return (
//     <Container>
//       <H1>{engine.toUpperCase()} Technical Specifications</H1>
//       <SH>{description}</SH>
//       <EngineSpecsTable data={engineSpecs} tableType="technical-specs" />
//       <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
//         <CardHeader className="space-y-2">
//           <div className="flex items-center gap-2">
//             <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
//             <CardTitle className="text-foreground">
//               <H5>{practicalImplications.heading}</H5>
//             </CardTitle>
//           </div>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <SH>{practicalImplications.content}</SH>
//
//           {practicalImplications.dataVerificationNotes && (
//             <div className="space-y-2">
//               <h3 className="font-semibold text-foreground flex items-center gap-2">
//                 Data Verification Notes
//               </h3>
//               <div className="space-y-3">
//                 {Object.entries(
//                   practicalImplications.dataVerificationNotes,
//                 ).map(([key, value]) => (
//                   <div key={key} className="p-3 rounded-lg bg-muted my-4">
//                     <p className="font-medium text-foreground">
//                       <strong>
//                         {key
//                           .replace(/([A-Z])/g, " $1")
//                           .replace(/^./, (str) => str.toUpperCase())}
//                         :
//                       </strong>{" "}
//                       {value}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//
//           {practicalImplications.primarySources && (
//             <div className="space-y-2">
//               <h3 className="font-semibold text-foreground flex items-center gap-2">
//                 Primary Sources
//               </h3>
//               <div className="space-y-3">
//                 {practicalImplications.primarySources.map((source, index) => {
//                   const urlMatch = source.match(/https?:\/\/[^\s)]+/);
//                   const url = urlMatch ? urlMatch[0] : null;
//                   const displayText = url
//                     ? source.replace(url, "").trim()
//                     : source;
//
//                   return (
//                     <div key={index} className="p-3 rounded-lg bg-muted my-4">
//                       <p className="font-medium text-foreground">
//                         {url ? (
//                           <a
//                             href={url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:underline flex items-center gap-1"
//                           >
//                             {displayText || url}
//                             <ExternalLink className="inline h-3 w-3 flex-shrink-0" />
//                           </a>
//                         ) : (
//                           displayText
//                         )}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default TechnicalSpecifications;
// TechnicalSpecifications.tsx
import { JSX } from "react";
import Container from "@/components/Container";
import { EngineSpecsTable } from "./EngineSpecsTable";
import { H1, SH, P, H5, H6 } from "@/components/Typography";
import {
  AlertCircle,
  ExternalLink,
  FileSearch,
  Library,
  Link,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalSpecifications = ({
  engine,
  description,
  engineSpecs,
  practicalImplications,
}: TechnicalSpecsProps): JSX.Element => {
  return (
    <Container>
      <H1>{engine.toUpperCase()} Technical Specifications</H1>
      <SH className="mt-2">{description}</SH>

      <EngineSpecsTable data={engineSpecs} tableType="technical-specs" />

      <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
        <CardHeader className="space-y-3 pb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle>
              <H5>{practicalImplications.heading}</H5>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <SH>{practicalImplications.content}</SH>

          {practicalImplications.dataVerificationNotes && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileSearch className="h-5 w-5" />
                <H6>Data Verification Notes</H6>
              </div>
              <div className="space-y-3">
                {Object.entries(
                  practicalImplications.dataVerificationNotes,
                ).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-lg bg-muted">
                    <p className="font-medium text-foreground">
                      <strong>
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                        :
                      </strong>{" "}
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {practicalImplications.primarySources && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Link className="h-5 w-5" />
                <H6>Primary Sources</H6>
              </div>
              <div className="space-y-3">
                {practicalImplications.primarySources.map((source, index) => {
                  const urlMatch = source.match(/https?:\/\/[^\s)]+/);
                  const url = urlMatch ? urlMatch[0] : null;
                  const displayText = url
                    ? source.replace(url, "").trim()
                    : source;

                  return (
                    <div key={index} className="p-4 rounded-lg bg-muted">
                      <p className="font-medium text-foreground">
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1"
                          >
                            {displayText || url}
                            <ExternalLink className="inline h-3 w-3 flex-shrink-0" />
                          </a>
                        ) : (
                          displayText
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default TechnicalSpecifications;
