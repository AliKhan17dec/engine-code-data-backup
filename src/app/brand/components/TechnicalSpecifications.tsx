import { JSX } from "react";
import Container from "../../../components/Container";
import { EngineSpecsTable } from "./EngineSpecsTable";
import { Card, CardContent } from "../../../components/ui/card";
import { AlertCircle } from "lucide-react";
import { TechnicalSpecsData } from "../types";
import { H1, SH, P } from "@/components/Typography";

const TechnicalSpecifications = ({
  title,
  description,
  engineSpecs,
  practicalImplications,
}: TechnicalSpecsData): JSX.Element => {
  return (
    <Container>
      <H1>{title}</H1>
      <SH>{description}</SH>
      <EngineSpecsTable data={engineSpecs} />
      <Card className="mt-12 rounded-xl shadow-lg border bg-card border-border relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none
                  bg-gradient-to-r from-amber-100/40 to-yellow-100/40
                  dark:from-amber-400/5 dark:to-yellow-400/5"
        />
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {practicalImplications.icon || (
                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-foreground font-semibold text-lg">
                {practicalImplications.heading}
              </h3>
              <P>{practicalImplications.content}</P>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TechnicalSpecifications;
