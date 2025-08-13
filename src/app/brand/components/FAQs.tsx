import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JSX } from "react";
import Container from "@/components/Container";

const FAQs = ({ faqData }: { faqData: FAQItem[] }): JSX.Element => {
  return (
    <Container>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-relaxed text-center mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-center">
          Find answers to common questions about our products, shipping, and
          policies.
        </p>
      </div>

      <div className="space-y-2 pb-4">
        <Accordion type="single" collapsible className="space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-border rounded-xl shadow-sm "
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* <div className="mt-12 text-center"> */}
      {/*   <p className="text-muted-foreground mb-4"> */}
      {/*     {"Didn't find what you're looking for?"} */}
      {/*   </p> */}
      {/*   <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
      {/*     <a */}
      {/*       href="#contact" */}
      {/*       className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors" */}
      {/*     > */}
      {/*       Contact Support */}
      {/*     </a> */}
      {/*     <a */}
      {/*       href="#help" */}
      {/*       className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors" */}
      {/*     > */}
      {/*       Visit Help Center */}
      {/*     </a> */}
      {/*   </div> */}
      {/* </div> */}
    </Container>
  );
};

export default FAQs;
