import { Cog, Box, Fan, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  { icon: Cog, title: 'Motor Selection', desc: 'Premium motors chosen for optimal airflow and durability.' },
  { icon: Box, title: 'Body Assembly', desc: 'Sturdy body built with high-grade materials.' },
  { icon: Fan, title: 'Fan & Pump Installation', desc: 'Precision-fitted components for maximum cooling.' },
  { icon: CheckCircle, title: 'Quality Testing', desc: 'Rigorous testing to ensure peak performance.' },
];

const CoolerHighlight = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Specialty</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Custom Assembled Air Coolers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We assemble our own air coolers to ensure best cooling performance and durability. Each cooler is carefully built with premium components, tested rigorously, and backed by our quality guarantee.
            </p>
            <Button asChild size="lg">
              <a href="tel:+911234567890">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us for Custom Cooler
              </a>
            </Button>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 150}>
                <div className="bg-card p-5 rounded-xl border border-border hover-lift group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent mb-3 group-hover:bg-primary transition-colors duration-300">
                    <step.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="text-xs font-semibold text-primary mb-1">Step {i + 1}</div>
                  <h3 className="font-heading font-semibold text-card-foreground text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoolerHighlight;
