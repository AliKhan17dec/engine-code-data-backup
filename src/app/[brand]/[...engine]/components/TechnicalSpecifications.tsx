// import { JSX } from "react";
// import Container from "@/components/Container";
// import { EngineSpecsTable } from "./EngineSpecsTable";
// import { H1, SH, P } from "@/components/Typography";
// import { ExternalLink } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//
// const TechnicalSpecifications = ({
//   title,
//   description,
//   engineSpecs,
//   practicalImplications,
// }: TechnicalSpecsData): JSX.Element => {
//   return (
//     <Container>
//       <H1>{title}</H1>
//       <SH>{description}</SH>
//       <EngineSpecsTable data={engineSpecs} />
//       <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
//         <CardHeader className="pb-4">
//           <div className="flex items-center gap-2">
//             {practicalImplications.icon}
//             <CardTitle className="text-xl text-foreground">
//               {practicalImplications.heading}
//             </CardTitle>
//           </div>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <P>{practicalImplications.content}</P>
//
//           <div className="space-y-2">
//             <h3 className="font-semibold text-foreground flex items-center gap-2">
//               Data Verification Notes
//             </h3>
//             <div className="space-y-3 ml-6">
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Emissions:</strong>{" "}
//                   {practicalImplications.dataVerificationNotes.emissions}
//                 </p>
//               </div>
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Oil Specs:</strong>{" "}
//                   {practicalImplications.dataVerificationNotes.oilSpecs}
//                 </p>
//               </div>
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Power Ratings:</strong>{" "}
//                   {practicalImplications.dataVerificationNotes.powerRatings}
//                 </p>
//               </div>
//             </div>
//           </div>
//
//           <div className="space-y-2">
//             <h3 className="font-semibold text-foreground flex items-center gap-2">
//               Primary Sources
//             </h3>
//             <div className="space-y-2 ml-6">
//               {practicalImplications.primarySources.map((source, index) => {
//                 const urlMatch = source.match(/https?:\/\/[^\s)]+/);
//                 const url = urlMatch ? urlMatch[0] : null;
//                 const displayText = url
//                   ? source.replace(url, "").trim()
//                   : source;
//
//                 return (
//                   <div key={index} className="p-3 rounded-lg bg-muted">
//                     <p className="font-medium text-foreground">
//                       {url ? (
//                         <a
//                           href={url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="hover:underline flex items-center gap-1"
//                         >
//                           {displayText || url}
//                           <ExternalLink className="inline h-3 w-3 flex-shrink-0" />
//                         </a>
//                       ) : (
//                         displayText
//                       )}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
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
import { EngineSpecsTable } from "./EngineSpecsTable"; // Ensure correct path
import { H1, SH, P } from "@/components/Typography";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Assuming TechnicalSpecsData interface is defined somewhere
interface TechnicalSpecsData {
  title: string;
  description: string;
  engineSpecs: any[]; // Replace 'any' with the actual type of your engineSpecs data items
  practicalImplications: {
    heading: string;
    content: string;
    icon: JSX.Element;
    dataVerificationNotes: {
      emissions: string;
      oilSpecs: string;
      powerRatings: string;
    };
    primarySources: string[];
  };
}

const TechnicalSpecifications = ({
  title,
  description,
  engineSpecs, // This should be an array matching TableDataItem[]
  practicalImplications,
}: TechnicalSpecsData): JSX.Element => {
  return (
    <Container>
      <H1>{title}</H1>
      <SH>{description}</SH>
      {/* Pass props to force desktop table and use modal for source */}
      <EngineSpecsTable
        data={engineSpecs}
        forceDesktopTable={true} // Force desktop table view
        sourceColumnMode="modal" // Use Info icon and modal for source column
      />
      {/* ... rest of your component ... */}
      <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            {practicalImplications.icon}
            <CardTitle className="text-xl text-foreground">
              {practicalImplications.heading}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <P>{practicalImplications.content}</P>

          {/* Data Verification Notes */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              Data Verification Notes
            </h3>
            <div className="space-y-3 ml-6">
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Emissions:</strong>{" "}
                  {practicalImplications.dataVerificationNotes.emissions}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Oil Specs:</strong>{" "}
                  {practicalImplications.dataVerificationNotes.oilSpecs}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Power Ratings:</strong>{" "}
                  {practicalImplications.dataVerificationNotes.powerRatings}
                </p>
              </div>
            </div>
          </div>

          {/* Primary Sources */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              Primary Sources
            </h3>
            <div className="space-y-2 ml-6">
              {practicalImplications.primarySources.map((source, index) => {
                const urlMatch = source.match(/https?:\/\/[^\s)]+/);
                const url = urlMatch ? urlMatch[0] : null;
                const displayText = url
                  ? source.replace(url, "").trim()
                  : source;

                return (
                  <div key={index} className="p-3 rounded-lg bg-muted">
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
        </CardContent>
      </Card>
    </Container>
  );
};

export default TechnicalSpecifications;
