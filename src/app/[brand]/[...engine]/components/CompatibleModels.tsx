import { JSX, ReactNode } from "react";
import { EngineSpecsTable } from "./EngineSpecsTable";
import Container from "@/components/Container";
import { H1, SH, H5, H6 } from "@/components/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Wrench, Settings, Search, Info } from "lucide-react";

interface DynamicSectionProps {
  title: string;
  data: Record<string, string | string[]>;
  icon: ReactNode;
}

const DynamicSection = ({ title, data, icon }: DynamicSectionProps) => {
  return (
    <div className="space-y-4 mt-6">
      <H6 className="font-semibold flex items-center gap-2 text-base text-foreground">
        {icon}
        {title}
      </H6>

      <div className="space-y-3 pl-2">
        {Object.entries(data).map(([propertyKey, value]) => {
          const formattedKey = propertyKey
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())
            .trim();

          return (
            <div key={propertyKey} className="p-4 rounded-lg bg-muted">
              <h4 className="font-semibold text-foreground inline-block mr-2">
                {formattedKey}:
              </h4>
              {Array.isArray(value) ? (
                value.length > 1 ? (
                  <ul className="list-disc block pl-5 mt-1 space-y-1">
                    {value.map((item, index) => (
                      <li key={index} className=" text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-foreground">{value[0]}</span>
                )
              ) : (
                <span className="text-foreground">{value}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CompatibleModels = ({
  engine,
  description,
  compatibleModels,
  guidanceTitle,
  guidanceText,
  extraNotes,
  // fuelType,
}: CompatibleModelsProps): JSX.Element => {
  const getIcon = (key: string) => {
    const keyLower = key.toLowerCase();
    if (keyLower.includes("identification"))
      return <Search className="h-5 w-5" />;
    if (keyLower.includes("compatibility"))
      return <Settings className="h-5 w-5" />;
    if (keyLower.includes("tensioner") || keyLower.includes("upgrade"))
      return <Wrench className="h-5 w-5" />;
    return <Info className="h-5 w-5" />;
  };

  return (
    <Container>
      <H1>
        {engine.toUpperCase()} {/*fuelType*/} Compatible Models
      </H1>
      <SH className="mt-2" dangerouslySetInnerHTML={{ __html: description }} />

      <EngineSpecsTable data={compatibleModels} tableType="compatible-models" />

      <Card className="mt-8 shadow-lg border-0 bg-background/80 dark:bg-card/80 backdrop-blur-sm">
        <CardHeader className="space-y-3 pb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <CardTitle>
              <H5>{guidanceTitle}</H5>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <SH>{guidanceText}</SH>

          {extraNotes?.map((note) => {
            const { key, ...data } = note;
            return (
              <DynamicSection
                key={key}
                title={key}
                data={data}
                icon={getIcon(key)}
              />
            );
          })}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CompatibleModels;
