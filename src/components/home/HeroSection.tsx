import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="gradient-hero-overlay absolute inset-0" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-foreground/10 animate-float"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom px-4 md:px-8 text-center text-primary-foreground">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-sm font-medium mb-6 backdrop-blur-sm">
            ⚡ Trusted Since 2014
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
            Your Trusted Electrical & Appliance Store
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto font-body">
            Electricals • Pipe Fittings • Electronics • Custom Air Coolers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 font-semibold">
              <a href="tel:+911234567890">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 font-semibold">
              <Link to="/contact">
                <MapPin className="h-5 w-5 mr-2" />
                Visit Store
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition-opacity">
            Explore Our Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
