import { JSX } from "react";
import Container from "@/components/Container";
import { EngineSpecsTable } from "./EngineSpecsTable";
import { H1, SH, P, H6 } from "@/components/Typography";

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
      <div className="space-y-2 mt-8">
        <H6>{practicalImplications.heading}:</H6>
        <P>{practicalImplications.content}</P>
      </div>
    </Container>
  );
};

export default TechnicalSpecifications;
