import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import { JSX } from "react";
import { H1, H6, P, SH } from "@/components/Typography";
import RelatedEngines from "./RelatedEngines";

const Hero = ({
  intro,
  image,
  disclaimer,
  brand,
  engine,
  years,
  fuelType,
}: HeroDataProps): JSX.Element => {
  return (
    <Container>
      <H1>
        {brand.toUpperCase()} {engine.toUpperCase()} {fuelType} engine {years} –
        Specs, Problems & Compatibility Database
      </H1>
      <div className="flex flex-col lg:flex-row gap-12 my-5">
        <div className="lg:w-7/10 w-full">
          {intro.map((paragraph, idx) => (
            <SH key={idx}>{paragraph}</SH>
          ))}
          <div className="w-full h-56 md:h-96 relative drop-shadow-xl">
            <Image
              src={image?.src as string}
              alt={image?.alt as string}
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
            />
          </div>
        </div>
        <div className="lg:w-3/10 w-full">
          <div className="lg:sticky top-20 h-fit">
            <RelatedEngines />
          </div>
        </div>
      </div>
      <Card className="rounded-xl shadow-lg border bg-card border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
            </div>
            <div className="space-y-2">
              <H6>{disclaimer.title}</H6>
              <P>{disclaimer.text}</P>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Hero;
