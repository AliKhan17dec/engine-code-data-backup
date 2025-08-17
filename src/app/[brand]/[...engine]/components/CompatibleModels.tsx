// import { JSX } from "react";
// import { EngineSpecsTable } from "./EngineSpecsTable";
// import Container from "@/components/Container";
// import { H1, H6, P, SH } from "@/components/Typography";
// import { AlertCircle, Wrench, Settings, Link as LinkIcon } from "lucide-react"; // Importing relevant icons
//
// const CompatibleModels = ({
//   title,
//   description,
//   compatibleModels,
//   guidanceTitle,
//   guidanceText,
// }: CompatibleModelsData): JSX.Element => {
//   return (
//     <Container>
//       <H1>{title}</H1>
//       <SH>{description}</SH>
//       <EngineSpecsTable data={compatibleModels} />
//       <div className="space-y-2 mt-8">
//         <H6>{guidanceTitle}:</H6>
//         <P>{guidanceText}</P>
//       </div>
//     </Container>
//   );
// };
//
// export default CompatibleModels;
// import { JSX } from "react";
// import { EngineSpecsTable } from "./EngineSpecsTable";
// import Container from "@/components/Container";
// import { H1, SH, P } from "@/components/Typography";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { AlertCircle, Wrench, Settings } from "lucide-react"; // Importing relevant icons
//
// const CompatibleModels = ({
//   title,
//   description,
//   compatibleModels,
//   guidanceTitle,
//   guidanceText,
//   identificationDetails,
//   compatibilityNotes,
//   tensionerUpgrade,
// }: CompatibleModelsData): JSX.Element => {
//   return (
//     <Container>
//       <H1>{title}</H1>
//       <SH>{description}</SH>
//       {/* Added text-center for consistency */}
//       <EngineSpecsTable data={compatibleModels} />
//       {/* === GUIDANCE CARD === */}
//       <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
//         <CardHeader className="pb-4">
//           <div className="flex items-center gap-2">
//             <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />{" "}
//             {/* Using AlertCircle as in previous component */}
//             <CardTitle className="text-xl text-foreground">
//               {guidanceTitle}
//             </CardTitle>
//           </div>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <P>{guidanceText}</P>
//
//           {/* Identification Details */}
//           <div className="space-y-2">
//             <h3 className="font-semibold text-foreground flex items-center gap-2">
//               <Wrench className="h-4 w-4" />
//               Identification Details
//             </h3>
//             <div className="space-y-3 ml-6">
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Location:</strong> {identificationDetails.location}
//                 </p>
//               </div>
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground mb-2">
//                   <strong>Visual Cues:</strong>
//                 </p>
//                 <ul className="list-disc pl-5 space-y-1">
//                   {identificationDetails.visualCues.map((cue, index) => (
//                     <li key={index} className="text-foreground">
//                       {cue}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Evidence:</strong> {identificationDetails.evidence}
//                 </p>
//               </div>
//             </div>
//           </div>
//
//           {/* Compatibility Notes */}
//           <div className="space-y-2">
//             <h3 className="font-semibold text-foreground flex items-center gap-2">
//               <Settings className="h-4 w-4" />
//               Compatibility Notes
//             </h3>
//             <div className="space-y-3 ml-6">
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   {compatibilityNotes.flywheel}
//                 </p>
//               </div>
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   {compatibilityNotes.timingComponents}
//                 </p>
//               </div>
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Evidence:</strong> {compatibilityNotes.evidence}
//                 </p>
//               </div>
//             </div>
//           </div>
//
//           {/* Tensioner Upgrade */}
//           <div className="space-y-2">
//             <h3 className="font-semibold text-foreground flex items-center gap-2">
//               <Settings className="h-4 w-4" />
//               Timing Chain Tensioner Upgrade
//             </h3>
//             <div className="space-y-3 ml-6">
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Issue:</strong> {tensionerUpgrade.issue}
//                 </p>
//               </div>
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Recommendation:</strong>{" "}
//                   {tensionerUpgrade.recommendation}
//                 </p>
//               </div>
//               <div className="p-3 rounded-lg bg-muted">
//                 <p className="font-medium text-foreground">
//                   <strong>Evidence:</strong> {tensionerUpgrade.evidence}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };
//
// export default CompatibleModels;
// CompatibleModels.tsx

import { JSX } from "react";
import Container from "@/components/Container";
import { EngineSpecsTable } from "./EngineSpecsTable"; // Ensure correct path
import { H1, SH, P } from "@/components/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Wrench, Settings } from "lucide-react";

const CompatibleModels = ({
  title,
  description,
  compatibleModels, // This should be an array matching TableDataItem[]
  guidanceTitle,
  guidanceText,
  identificationDetails,
  compatibilityNotes,
  tensionerUpgrade,
}: CompatibleModelsData): JSX.Element => {
  return (
    <Container>
      <H1>{title}</H1>
      <SH>{description}</SH>
      {/* Pass props to use card view on mobile and details for source */}
      <EngineSpecsTable
        data={compatibleModels}
        forceDesktopTable={false} // Allow mobile card view (default)
        sourceColumnMode="details" // Use details/summary for source column (default, but explicit)
      />
      {/* === GUIDANCE CARD === */}
      <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-xl text-foreground">
              {guidanceTitle}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <P>{guidanceText}</P>

          {/* Identification Details */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Identification Details
            </h3>
            <div className="space-y-3 ml-6">
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Location:</strong> {identificationDetails.location}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground mb-2">
                  <strong>Visual Cues:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {identificationDetails.visualCues.map((cue, index) => (
                    <li key={index} className="text-foreground">
                      {cue}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Evidence:</strong> {identificationDetails.evidence}
                </p>
              </div>
            </div>
          </div>

          {/* Compatibility Notes */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Compatibility Notes
            </h3>
            <div className="space-y-3 ml-6">
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  {compatibilityNotes.flywheel}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  {compatibilityNotes.timingComponents}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Evidence:</strong> {compatibilityNotes.evidence}
                </p>
              </div>
            </div>
          </div>

          {/* Tensioner Upgrade */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Timing Chain Tensioner Upgrade
            </h3>
            <div className="space-y-3 ml-6">
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Issue:</strong> {tensionerUpgrade.issue}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Recommendation:</strong>{" "}
                  {tensionerUpgrade.recommendation}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-medium text-foreground">
                  <strong>Evidence:</strong> {tensionerUpgrade.evidence}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CompatibleModels;
