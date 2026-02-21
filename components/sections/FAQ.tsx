import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">FAQ</h2>
      </div>

      <Accordion type="single" collapsible className="rounded-2xl border border-border/70 px-4 sm:px-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you send DMs for me?</AccordionTrigger>
          <AccordionContent>No. You send manually.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you use LinkedIn data extraction?</AccordionTrigger>
          <AccordionContent>No.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you guarantee results?</AccordionTrigger>
          <AccordionContent>No. Delivery only.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What do you need from me?</AccordionTrigger>
          <AccordionContent>
            <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
              <li>Your offer</li>
              <li>ICP + 3 no’s</li>
              <li>10 accounts or keywords/competitors</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
