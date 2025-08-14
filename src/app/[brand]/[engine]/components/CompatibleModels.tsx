import { JSX } from "react";
import { EngineSpecsTable } from "./EngineSpecsTable";
import Container from "@/components/Container";
import { H1, H6, P, SH } from "@/components/Typography";

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
      <div className="space-y-2 mt-8">
        <H6>{guidanceTitle}:</H6>
        <P>{guidanceText}</P>
      </div>
    </Container>
  );
};

export default CompatibleModels;
