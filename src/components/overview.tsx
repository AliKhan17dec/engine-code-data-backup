import { JSX } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SpecLine } from "@/app/page";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Overview = ({ engine }: { engine: any }): JSX.Element => {
  return (
    <>
      <Card className="mb-8 overflow-hidden">
        <div className="relative w-full">
          <Image
            src="/placeholder.svg?height=400&width=1280"
            width={1280}
            height={400}
            alt="BMW N47D20A engine illustration"
            className="h-56 w-full object-cover md:h-72"
            priority
          />
        </div>
        <CardContent className="grid gap-y-6 gap-x-32 p-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="text-md text-muted-foreground">
              The BMW N47D20A is a 1,995 cc turbocharged diesel engine produced
              from 2007 to 2011. This inline-4 powerplant features a variable
              geometry turbocharger (VGT), common-rail direct injection, and
              dual overhead camshafts. Outputs ranged from 120 kW (163 PS) in
              base variants to 135 kW (184 PS) in high-tune applications, with
              peak torque spanning 350–380 Nm. Primary applications include the
              E87 1 Series, E90 3 Series, and E60 5 Series, notably powering the
              118d, 320d, and 520d models. Engineered for executive vehicles
              requiring balance between performance and efficiency, the N47D20A
              achieved Euro 4 emissions certification through EGR and diesel
              particulate filtration. Post-2010 models received minor revisions
              before transitioning to the N47N variant with reinforced timing
              components.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge>{engine.code}</Badge>
              <Badge variant="secondary">Diesel</Badge>
              <Badge variant="outline">Common-rail</Badge>
              <Badge variant="outline">VGT Turbo</Badge>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-3 text-sm font-semibold">Quick Specs</h3>
            <div className="divide-y">
              <SpecLine
                label="Displacement"
                value={`${engine.displacementCc} cc`}
              />
              <SpecLine label="Configuration" value={engine.configuration} />
              <SpecLine label="Aspiration" value="Turbocharged (VGT)" />
              <SpecLine label="Injection" value={engine.injection} />
              <SpecLine
                label="Power"
                value={`${engine.power.kw} (${engine.power.ps})`}
              />
              <SpecLine label="Torque" value={engine.torqueNm} />
              <SpecLine label="Emissions" value={engine.emissions} />
              <SpecLine label="Production" value={engine.years} />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Overview;
