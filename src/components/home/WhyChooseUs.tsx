import { Shield, Wrench, DollarSign, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';

const features = [
  { icon: Shield, title: 'High Quality Products', desc: 'Only genuine, branded products from trusted manufacturers.' },
  { icon: Wrench, title: 'Custom Assembled Coolers', desc: 'Air coolers built in-house for superior cooling performance.' },
  { icon: DollarSign, title: 'Competitive Pricing', desc: 'Best prices in the market without compromising on quality.' },
  { icon: Users, title: 'Trusted Local Store', desc: 'Serving our community with integrity for over a decade.' },
];

const counters = [
  { target: 10, suffix: '+', label: 'Years Experience' },
  { target: 1000, suffix: '+', label: 'Happy Customers' },
  { target: 500, suffix: '+', label: 'Products Available' },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Strengths</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Why Choose Us
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 100}>
              <div className="text-center p-6 rounded-2xl bg-card border border-border hover-lift group">
                <div className="h-14 w-14 mx-auto rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feat.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-card-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="gradient-primary rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-primary-foreground">
              {counters.map(c => (
                <div key={c.label}>
                  <div className="text-4xl md:text-5xl font-heading font-extrabold mb-2">
                    <AnimatedCounter target={c.target} suffix={c.suffix} />
                  </div>
                  <p className="text-sm opacity-80">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
