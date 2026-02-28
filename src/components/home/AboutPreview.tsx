import { ArrowRight, Shield, Wrench, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const AboutPreview = () => {
  const features = [
    { icon: Shield, text: 'Trusted local electrical shop' },
    { icon: Star, text: 'Wide range of quality products' },
    { icon: Wrench, text: 'Custom air cooler assembling' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Welcome to Jai Ambey Electricals
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Jai Ambey Electricals, we bring you a comprehensive range of electrical appliances, pipe fittings, and electronics at competitive prices. With over a decade of experience, we are your go-to destination for everything electrical. We also specialize in custom-assembled air coolers built for peak performance.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{text}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="group">
              <Link to="/about">
                Read More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="h-20 w-20 mx-auto rounded-full bg-accent flex items-center justify-center mb-4">
                    <Star className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Shop Image Placeholder</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-primary opacity-20 -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
