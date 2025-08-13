import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import { JSX } from "react";

const Hero = ({ heading, intro, image, disclaimer }: HeroData): JSX.Element => {
  return (
    <Container>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center leading-tight">
        {heading}
      </h1>

      {/* Intro Paragraph */}
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
        {intro}
      </p>

      {/* Responsive Image */}
      <div className="w-full h-56 md:h-96 relative mb-12">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover rounded-lg shadow-md"
          sizes="(max-width: 768px) 100vw, 1280px"
        />
      </div>

      {/* Disclaimer Card */}
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
              <h3 className="text-foreground font-semibold text-lg">
                {disclaimer.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {disclaimer.text}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Hero;
