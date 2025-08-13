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
import { ResourceSection } from "../types";

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

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          All external links open in new tabs. Please verify current
          availability of resources.
        </p>
      </div>
    </Container>
  );
}
