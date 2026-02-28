import { Snowflake, Cog, Box, Fan, CheckCircle, Phone, ThermometerSun, Shield, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const benefits = [
  { icon: ThermometerSun, title: 'Better Cooling', desc: 'Optimized airflow design for maximum cooling in Indian summers.' },
  { icon: Cog, title: 'High Quality Motors', desc: 'Premium copper-wound motors for powerful and silent operation.' },
  { icon: Shield, title: 'Durable Body', desc: 'Sturdy construction with rust-resistant materials for long life.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Direct assembly means no middlemen — great value for money.' },
];

const steps = [
  { icon: Cog, title: 'Motor Selection', desc: 'We handpick premium motors tested for optimal performance and longevity.' },
  { icon: Box, title: 'Body Assembly', desc: 'Sturdy body frames are assembled with precision using high-grade materials.' },
  { icon: Fan, title: 'Fan & Pump Installation', desc: 'High-quality fans and water pumps are fitted for maximum cooling.' },
  { icon: CheckCircle, title: 'Quality Testing', desc: 'Every cooler undergoes rigorous testing before it reaches you.' },
];

const CustomCoolers = () => {
  return (
    <main className="pt-20">
      <section className="section-padding gradient-primary text-primary-foreground text-center">
        <div className="container-custom">
          <Snowflake className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Custom Air Coolers</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Handcrafted for peak cooling performance. Built in-house with premium components.
          </p>
        </div>
      </section>

      {/* About custom coolers */}
      <section className="section-padding bg-background">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">In-House Assembly Excellence</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Jai Ambey Electricals, we don't just sell coolers — we build them. Our custom-assembled air coolers are designed from the ground up to deliver superior cooling performance that factory-made coolers simply can't match.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each cooler is hand-assembled by our skilled technicians using carefully selected components. From motor to pump, every part is chosen for quality and performance.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="aspect-video rounded-2xl bg-secondary flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Workshop Image Placeholder</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground">Why Our Coolers Stand Out</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 100}>
                <div className="text-center p-6 bg-card rounded-2xl border border-border hover-lift">
                  <div className="h-14 w-14 mx-auto rounded-xl bg-accent flex items-center justify-center mb-4">
                    <b.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-card-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground">Our Assembly Process</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 150}>
                <div className="flex gap-4 p-5 bg-card rounded-xl border border-border hover-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent shrink-0">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary mb-1">Step {i + 1}</div>
                    <h3 className="font-heading font-semibold text-card-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-center text-primary-foreground">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready for a Custom Cooler?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Get a cooler built to your specifications. Contact us today!
            </p>
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 font-semibold">
              <a href="tel:+911234567890">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us for Custom Cooler
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default CustomCoolers;
