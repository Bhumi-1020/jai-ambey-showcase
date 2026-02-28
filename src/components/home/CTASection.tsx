import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const CTASection = () => {
  return (
    <section className="section-padding gradient-primary">
      <div className="container-custom text-center text-primary-foreground">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Our experts are ready to help you find the perfect electrical solution for your needs.
          </p>
          <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 font-semibold">
            <a href="tel:+911234567890">
              <Phone className="h-5 w-5 mr-2" />
              Call Us for Expert Advice
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
