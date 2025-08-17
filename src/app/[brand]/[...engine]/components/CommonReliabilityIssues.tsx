// import { JSX } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { H1, P, SH, Strong } from "@/components/Typography";
// import Container from "@/components/Container";
//
// const CommonReliabilityIssues = ({
//   issues,
//   heading,
//   subheading,
//   infoBlock,
// }: CommonReliabilityIssuesData): JSX.Element => {
//   return (
//     <Container>
//       <H1>{heading}</H1>
//       <SH>{subheading}</SH>
//
//       <div className="grid gap-6 md:grid-cols-2">
//         {issues.map((issue) => {
//           const Icon = issue.icon;
//           return (
//             <Card key={issue.title}>
//               <CardHeader className="pb-3">
//                 <CardTitle className="flex items-center gap-2 text-lg">
//                   <Icon className="h-4 w-4 text-amber-500" />
//                   {issue.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <div className="mb-3">
//                   <Icon className="mt-0.5 h-4 w-4 text-muted-foreground inline-block" />
//                   <span className="text-sm font-semibold"> Cause: </span>
//                   <span className="text-sm text-muted-foreground">
//                     {issue.cause}
//                   </span>
//                 </div>
//                 <div className="mb-3">
//                   <issue.fixIcon className="mt-0.5 h-4 w-4 text-muted-foreground inline" />
//                   <span className="text-sm font-semibold"> Fix: </span>
//                   <span className="text-sm text-muted-foreground">
//                     {issue.fix}
//                   </span>
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>
//
//       {infoBlock && (
//         <Card className="mt-12 rounded-xl shadow-lg border bg-card border-border relative overflow-hidden">
//           <div
//             className="absolute inset-0 pointer-events-none
//                bg-gradient-to-r"
//             style={{ background: infoBlock.gradient }}
//           />
//           <CardContent>
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <infoBlock.icon />
//               </div>
//               <div className="space-y-2">
//                 <Strong>{infoBlock.title}</Strong>
//                 <P>{infoBlock.description}</P>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       )}
//     </Container>
//   );
// };
//
// export default CommonReliabilityIssues;
import { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, P, SH, Strong } from "@/components/Typography";
import Container from "@/components/Container";
import { AlertCircle } from "lucide-react"; // Import icons used in data

const CommonReliabilityIssues = ({
  issues,
  heading,
  subheading,
  infoBlock,
}: CommonReliabilityIssuesData): JSX.Element => {
  return (
    <Container>
      <H1>{heading}</H1>
      <SH>{subheading}</SH>
      {/* Added text-center for consistency */}
      {/* === ISSUES GRID === */}
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {issues.map((issue) => {
          const Icon = issue.icon;
          const FixIcon = issue.fixIcon; // Get the fix icon component
          return (
            <Card
              key={issue.title}
              className="shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                  <Icon className="h-5 w-5 text-amber-500" />
                  {issue.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Symptoms */}
                <div>
                  <div className="flex items-start">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="ml-2">
                      <span className="text-sm font-semibold text-foreground">
                        Symptoms:{" "}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {issue.symptoms}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Cause */}
                <div>
                  <div className="flex items-start">
                    <Icon className="mt-0.5 h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="ml-2">
                      <span className="text-sm font-semibold text-foreground">
                        Cause:{" "}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {issue.cause}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Fix */}
                <div>
                  <div className="flex items-start">
                    <FixIcon className="mt-0.5 h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="ml-2">
                      <span className="text-sm font-semibold text-foreground">
                        Fix:{" "}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {issue.fix}
                      </span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {/* <Card */}
      {/*   className="mt-10 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/20" */}
      {/*   // id="verification-note" // Optional ID if needed for anchoring */}
      {/* > */}
      {/*   <CardHeader> */}
      {/*     <CardTitle className="text-xl flex items-center gap-2 text-blue-800 dark:text-blue-200"> */}
      {/*       <infoBlock.icon className="h-5 w-5" /> */}
      {/*       {infoBlock.title} */}
      {/*     </CardTitle> */}
      {/*   </CardHeader> */}
      {/*   <CardContent> */}
      {/*     <P className="text-muted-foreground leading-relaxed"> */}
      {/*       {infoBlock.description} */}
      {/*     </P> */}
      {/*   </CardContent> */}
      {/* </Card> */}
      {infoBlock && (
        <Card className="mt-12 rounded-xl shadow-lg border bg-card border-border relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none
         bg-gradient-to-r"
            style={{ background: infoBlock.gradient }}
          />
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <infoBlock.icon />
              </div>
              <div className="space-y-2">
                <Strong>{infoBlock.title}</Strong>
                <P>{infoBlock.description}</P>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default CommonReliabilityIssues;
