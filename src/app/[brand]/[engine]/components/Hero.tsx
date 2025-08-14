import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Info } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import { JSX } from "react";
import { H1, H6, P, SH } from "@/components/Typography";
import Link from "next/link";

const Hero = ({
  heading,
  intro,
  image,
  disclaimer,
}: HeroDataProps): JSX.Element => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-7/10 w-full">
          <H1>{heading}</H1>
          <SH>{intro}</SH>
          <div className="w-full h-56 md:h-96 relative mb-12 drop-shadow-xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
            />
          </div>

          <Card className="rounded-xl shadow-lg border bg-card border-border relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none
                         bg-gradient-to-r from-amber-100/40 to-yellow-100/40
                         dark:from-amber-400/5 dark:to-yellow-400/5"
            />
            <CardContent className="p-6">
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
        </div>
        <div className="lg:w-3/10 w-full">
          <div className="lg:sticky top-20 h-fit">
            <Card className="rounded-xl shadow-lg border bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-foreground font-bold text-xl">
                    Key Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <H6>Related Engines</H6>
                    <ul className="pl-5 space-y-1">
                      <li>
                        <Link href="#">Engine #1</Link>
                      </li>
                      <li>
                        <Link href="#">Engine #2</Link>
                      </li>
                      <li>
                        <Link href="#">Engine #3</Link>
                      </li>
                      <li>
                        <Link href="#">Engine #4</Link>
                      </li>
                      <li>
                        <Link href="#">Engine #1</Link>
                      </li>
                      <li>
                        <Link href="#">Engine #1</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
