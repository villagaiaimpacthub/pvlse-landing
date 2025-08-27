import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="group card transition-all duration-300 bg-panel/80 backdrop-blur-sm border-hairline hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10">
          <Accordion type="single" collapsible>
            <AccordionItem value={`item-${idx}`} className="border-none">
              <AccordionTrigger className="px-4 py-4 text-left font-medium hover:no-underline text-textPrimary hover:text-textPrimary transition-all duration-300 ease-out group-hover:translate-y-[-1px] group-hover:text-accent">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-left text-textSecondary transition-all duration-300 ease-out group-hover:text-textPrimary/80">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}