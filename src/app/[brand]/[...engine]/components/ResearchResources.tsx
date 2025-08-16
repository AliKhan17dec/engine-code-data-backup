// import Container from "@/components/Container";
// import { H1, SH } from "@/components/Typography";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ExternalLink } from "lucide-react";
//
// interface ResearchResourcesProps {
//   sections: ResourceSection[];
// }
// export default function ResearchResources({
//   sections,
// }: ResearchResourcesProps) {
//   return (
//     <Container>
//       <H1>Research Resources</H1>
//       <SH className="text-center">
//         Comprehensive technical documentation and regulatory references
//       </SH>
//
//       <div className="grid gap-6 md:grid-cols-2 mt-6">
//         {sections.map((section, i) => (
//           <Card
//             key={i}
//             className="shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm"
//           >
//             <CardHeader className="pb-4">
//               <div className="flex items-center gap-2">
//                 {section.icon}
//                 <CardTitle className="text-xl text-foreground">
//                   {section.title}
//                 </CardTitle>
//               </div>
//               <CardDescription className="text-muted-foreground">
//                 {section.description}
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {section.categories.map((cat, j) => (
//                 <div key={j}>
//                   <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
//                     {cat.icon}
//                     {cat.title}
//                   </h4>
//
//                   {cat.type === "text-block" || cat.type === "mixed" ? (
//                     <div className="space-y-3 ml-6">
//                       {cat?.content?.map((item, k) => (
//                         <div key={k} className="p-3 rounded-lg bg-muted">
//                           <p className="font-medium text-foreground">
//                             {item.link ? (
//                               <a
//                                 href={item.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:underline"
//                               >
//                                 {item.title}{" "}
//                                 <ExternalLink className="inline h-3 w-3" />
//                               </a>
//                             ) : (
//                               item.title
//                             )}
//                           </p>
//                           {item.description && (
//                             <p className="text-sm text-muted-foreground mt-1">
//                               {item.description}
//                             </p>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="space-y-2 ml-6">
//                       {cat.links?.map((link, k) => (
//                         <a
//                           key={k}
//                           href={link.href}
//                           className="flex items-center gap-2 text-primary hover:underline transition-colors"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {link.title}
//                           <ExternalLink className="h-3 w-3" />
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//
//       <div className="mt-8 text-center">
//         <p className="text-sm text-muted-foreground">
//           All external links open in new tabs. Please verify current
//           availability of resources.
//         </p>
//       </div>
//     </Container>
//   );
// }
// ResearchResources.tsx
// import Container from "@/components/Container";
// import { H1, SH } from "@/components/Typography";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ExternalLink } from "lucide-react";
//
// interface ResearchResourcesProps {
//   sections: ResourceSection[];
// }
//
// export default function ResearchResources({
//   sections,
// }: ResearchResourcesProps) {
//   // Split the last section if it's "Verification & Updates"
//   const isFullWidthLastSection =
//     sections.length > 0 &&
//     sections[sections.length - 1]?.title === "Verification & Updates";
//
//   const regularSections = isFullWidthLastSection
//     ? sections.slice(0, -1)
//     : sections;
//   const fullWidthSection = isFullWidthLastSection
//     ? sections[sections.length - 1]
//     : null;
//
//   return (
//     <Container>
//       <H1>Research Resources</H1>
//       <SH className="text-center">
//         Comprehensive technical documentation and regulatory references
//       </SH>
//
//       {/* Regular Two-Column Grid */}
//       <div className="grid gap-6 md:grid-cols-2 mt-6">
//         {regularSections.map((section, i) => (
//           <Card
//             key={i}
//             className="shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm"
//           >
//             <CardHeader className="pb-4">
//               <div className="flex items-center gap-2">
//                 {section.icon}
//                 <CardTitle className="text-xl text-foreground">
//                   {section.title}
//                 </CardTitle>
//               </div>
//               <CardDescription className="text-muted-foreground">
//                 {section.description}
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {section.categories.map((cat, j) => (
//                 <div key={j}>
//                   <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
//                     {cat.icon}
//                     {cat.title}
//                   </h4>
//
//                   {cat.type === "text-block" || cat.type === "mixed" ? (
//                     <div className="space-y-3 ml-6">
//                       {cat?.content?.map((item, k) => (
//                         <div
//                           key={k}
//                           className="p-3 rounded-lg bg-muted text-sm"
//                         >
//                           <p className="font-medium text-foreground">
//                             {item.link ? (
//                               <a
//                                 href={item.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:underline flex items-center gap-1"
//                               >
//                                 {item.title}{" "}
//                                 <ExternalLink className="inline h-3 w-3" />
//                               </a>
//                             ) : (
//                               item.title
//                             )}
//                           </p>
//                           {item.description && (
//                             <p className="text-muted-foreground mt-1">
//                               {item.description}
//                             </p>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="space-y-2 ml-6">
//                       {cat.links?.map((link, k) => (
//                         <a
//                           key={k}
//                           href={link.href}
//                           className="flex items-center gap-2 text-primary hover:underline transition-colors text-sm"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {link.title}
//                           <ExternalLink className="h-3 w-3" />
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//
//       {/* Full-Width Verification & Updates Section */}
//       {fullWidthSection && (
//         <Card
//           className="mt-8 border-l-4 border-l-green-500 bg-gradient-to-r from-green-50/70 to-transparent dark:from-green-900/20 shadow-md"
//           id="verification-updates"
//         >
//           <CardHeader className="pb-2">
//             <div className="flex items-center gap-2">
//               {fullWidthSection.icon}
//               <CardTitle className="text-xl text-foreground">
//                 {fullWidthSection.title}
//               </CardTitle>
//             </div>
//             <CardDescription className="text-muted-foreground">
//               {fullWidthSection.description}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             {fullWidthSection.categories.map((cat, i) => (
//               <div key={i} className="mb-4">
//                 <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
//                   {cat.icon}
//                   {cat.title}
//                 </h4>
//                 <div className="space-y-3 ml-6">
//                   {cat.content?.map((item, k) => (
//                     <div
//                       key={k}
//                       className="p-4 rounded-md bg-white/70 dark:bg-gray-800/60 border border-green-200 dark:border-green-900/30 shadow-sm"
//                     >
//                       <p className="font-semibold text-green-800 dark:text-green-200">
//                         {item.title}
//                       </p>
//                       <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       )}
//
//       <div className="mt-8 text-center">
//         <p className="text-sm text-muted-foreground">
//           All external links open in new tabs. Please verify current
//           availability of resources.
//         </p>
//       </div>
//     </Container>
//   );
// }
// ResearchResources.tsx
import Container from "@/components/Container";
import { H1, SH } from "@/components/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ResearchResourcesProps {
  sections: ResourceSection[];
}

export default function ResearchResources({
  sections,
}: ResearchResourcesProps) {
  return (
    <Container>
      <H1>Research Resources</H1>
      <SH className="text-center">
        Comprehensive technical documentation and regulatory references
      </SH>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {sections.map((section, i) => (
          <Card
            key={i}
            className="shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                {section.icon}
                <CardTitle className="text-xl text-foreground">
                  {section.title}
                </CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.categories.map((cat, j) => (
                <div key={j}>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {cat.icon}
                    {cat.title}
                  </h4>

                  {cat.type === "text-block" || cat.type === "mixed" ? (
                    <div className="space-y-3 ml-6">
                      {cat?.content?.map((item, k) => (
                        <div key={k} className="p-3 rounded-lg bg-muted">
                          <p className="font-medium text-foreground">
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {item.title}{" "}
                                <ExternalLink className="inline h-3 w-3" />
                              </a>
                            ) : (
                              item.title
                            )}
                          </p>
                          {item.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2 ml-6">
                      {cat.links?.map((link, k) => (
                        <a
                          key={k}
                          href={link.href}
                          className="flex items-center gap-2 text-primary hover:underline transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* === FULL-WIDTH VERIFICATION CARD === */}
      <Card
        className="mt-10 border-l-4 border-l-green-500 bg-gradient-to-r from-green-50/50 to-transparent dark:from-green-900/20"
        id="verification-note"
      >
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-green-800 dark:text-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.165-2.052-.48-3.016z"
              />
            </svg>
            Last Updated: 16 August 2025
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            All specifications and compatibility data verified against official
            BMW documentation and EU/UK regulatory texts. Where official data is
            unavailable, entries are marked{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-semibold">
              &ldquo;Undisclosed&ldquo;
            </code>
            .
          </p>
        </CardContent>
      </Card>
      {/* === END VERIFICATION CARD === */}

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          All external links open in new tabs. Please verify current
          availability of resources.
        </p>
      </div>
    </Container>
  );
}
