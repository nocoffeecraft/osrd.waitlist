import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "./faqs.js";

export default function FAQs() {
  return (
    <div className="px-7 pt-0 py-7 lg:px-20 sm:px-16 sm:py-10 sm:pt-5 xl:mx-20">
      <h2 className="font-bold text-4xl mb-3">FAQs</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.q} value={faq.q}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
