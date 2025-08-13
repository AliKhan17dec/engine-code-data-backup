import { AlertCircle } from "lucide-react";
import { JSX } from "react";
import { EngineSpecsTable } from "./EngineSpecsTable";
import { Card, CardContent } from "../../../components/ui/card";
import Container from "../../../components/Container";
import { TableData, CompatibleModelsData } from "../types";
import { H1, P, SH, Strong } from "@/components/Typography";

const CompatibleModels = ({
  title,
  description,
  compatibleModels,
  guidanceTitle,
  guidanceText,
}: CompatibleModelsData): JSX.Element => {
  return (
    <Container>
      <H1>{title}</H1>
      <SH>{description}</SH>
      <EngineSpecsTable data={compatibleModels} />
      <Card className="mt-12 rounded-xl shadow-lg border bg-card border-border relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none
                     bg-gradient-to-r from-amber-100/40 to-yellow-100/40
                     dark:from-amber-400/5 dark:to-yellow-400/5"
        />
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
            </div>
            <div className="space-y-2">
              <Strong>{guidanceTitle}</Strong>
              <P>{guidanceText}</P>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CompatibleModels;
