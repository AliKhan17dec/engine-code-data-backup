"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <section id="faqs" aria-labelledby="faqs-heading" className="space-y-6">
      <div className="space-y-2">
        <h2 id="faqs-heading" className="text-xl font-semibold tracking-tight">
          FAQs
        </h2>
        <p className="text-sm text-muted-foreground">
          Common questions about the BMW N47D20A, compiled for quick reference.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>
            Reliability, models, tuning, economy, and maintenance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-left">
                {"Is the N47D20A reliable long-term?"}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                The N47D20A delivers strong torque and good efficiency, but
                early models (2007–2009) had reliability concerns, especially
                timing chain failures. Later revisions (post‑2011) improved
                chain durability, so well‑maintained examples can be quite
                robust. Regular servicing and using high‑quality oil (5W‑30 BMW
                Longlife‑04) greatly aid longevity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger className="text-left">
                {"What are the most common problems with N47D20A?"}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                The biggest issues are timing‑chain wear (leading to chain
                rattling or breakage), turbo wastegate spring failures, and
                intake carbon buildup affecting swirl flaps and EGR. Other
                complaints include oil leaks from gaskets and occasional
                injector/EGR faults. These are well‑documented in BMW service
                bulletins and owner forums.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger className="text-left">
                {"Which BMW models use the N47D20A engine?"}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                This 2.0L diesel was used widely across BMW’s lineup (mostly
                Euro 4 era models). It appeared in the 1 Series (116d, 118d), 3
                Series (318d, 320d), 5 Series (520d up to 2009), X1 (xDrive18d),
                and X3 (xDrive20d), among others. Toyota also used the engine
                (as the 2.0 D‑4D) in Auris/Avensis/Verso from 2014–2018. In MINI
                cars it’s the BMW‑designed 2.0 SD‑type diesel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger className="text-left">
                {"Can the N47D20A be tuned for more power?"}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Yes. The N47 is quite tunable. ECU remaps routinely gain +20–40
                kW on stage 1, since the stock internals handle torque well.
                Aftermarket upgrades (larger turbo, intercooler, exhaust) can
                boost power further. Enthusiasts frequently remap 116d/118d and
                320d models for crisper response. Any tuning should be done
                carefully with supporting mods to avoid over‑stressing the
                engine.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger className="text-left">
                {"What’s the fuel economy of the N47D20A?"}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Very good. In a 320d (118–130 kW version) from around 2010,
                typical consumption is ~6.0 L/100km (city) and ~4.1 L/100km
                (highway), or about 50 mpg UK combined. Smaller models
                (116d/118d) with the same engine often see better economy.
                Real‑world figures will depend on driving style, but expect
                45–55 mpg (UK) on mixed roads for a healthy N47D20A.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger className="text-left">
                {"Is the N47D20A an interference engine?"}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Yes. The N47 series (like most modern BMWs) is an interference
                engine. If the timing chain jumps or breaks, pistons can hit
                open valves, causing serious engine damage. That’s why chain
                maintenance is critical—any warning rattles should be addressed
                immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger className="text-left">
                {"What oil type does N47D20A require?"}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                BMW specifies a 5W‑30 synthetic oil meeting BMW Longlife‑04 (or
                newer) spec. Always use a quality oil designed for turbo diesels
                and change it at regular intervals (around 10K km or as BMW
                recommends) to ensure proper chain lubrication and minimize soot
                buildup.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
