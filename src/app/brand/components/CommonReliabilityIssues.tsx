import { JSX } from "react";
import Container from "../../../components/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CommonReliabilityIssuesData } from "../types";
import { H1, P, SH, Strong } from "@/components/Typography";

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

      <div className="grid gap-6 md:grid-cols-2">
        {issues.map((issue) => {
          const Icon = issue.icon;
          return (
            <Card key={issue.title}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Icon className="h-4 w-4 text-amber-500" />
                  {issue.title}
                </CardTitle>
                <CardDescription>Cause and recommended fix</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="mb-3">
                  <Icon className="mt-0.5 h-4 w-4 text-muted-foreground inline-block" />
                  <span className="text-sm font-semibold"> Cause: </span>
                  <span className="text-sm text-muted-foreground">
                    {issue.cause}
                  </span>
                </div>
                <div className="mb-3">
                  <issue.fixIcon className="mt-0.5 h-4 w-4 text-muted-foreground inline" />
                  <span className="text-sm font-semibold"> Fix: </span>
                  <span className="text-sm text-muted-foreground">
                    {issue.fix}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

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
