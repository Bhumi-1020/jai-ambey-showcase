import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  { q: 'Do you provide delivery?', a: 'Yes, we provide delivery services within the city limits. Delivery charges may apply based on distance and product size. Contact us for more details.' },
  { q: 'Do you offer installation?', a: 'We offer professional installation services for select products like ceiling fans, water tanks, and air coolers. Our experienced technicians ensure safe and proper installation.' },
  { q: 'Do products have warranty?', a: 'All our products come with manufacturer warranty. The warranty period varies by product and brand. We also provide after-sales support for any issues.' },
  { q: 'What areas do you serve?', a: 'We primarily serve the local city and surrounding areas. For bulk orders or special requirements, we can arrange delivery to nearby towns as well.' },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom max-w-3xl">
        <ScrollReveal className="text-center mb-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-heading font-semibold text-card-foreground hover:text-primary py-4 text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
