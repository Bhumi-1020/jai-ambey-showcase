import { Zap, Droplets, Tv, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import lightingImg from '@/assets/lighting.jpeg';
import pipeImg from '@/assets/pipe.jpg';
import electronicsImg from '@/assets/electronics.jpg';

const categories = [
  {
    title: 'Electricals',
    icon: Zap,
    items: ['Fans', 'Coolers', 'Lights', 'Plugs', 'Designer Switches', 'Juicers', 'LED Lights', 'Disco Lights'],
    image: lightingImg,
  },
  {
    title: 'Pipe Fitting',
    icon: Droplets,
    items: ['Water Tanks', 'Pipes', 'Taps', 'Pipe Fittings'],
    image: pipeImg,
  },
  {
    title: 'Electronics',
    icon: Tv,
    items: ['LED TVs', 'Refrigerators', 'Washing Machines'],
    image: electronicsImg,
  },
];

const ProductCategories = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Range</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Product Categories
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Browse our extensive collection of quality electrical products, pipe fittings, and electronics.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <ScrollReveal key={cat.title} delay={index * 150}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-md hover-lift cursor-pointer">
                <div className="h-48 relative overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-card-foreground mb-3">{cat.title}</h3>
                  <ul className="space-y-1.5 mb-5">
                    {cat.items.map(item => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="sm" className="w-full group/btn">
                    <Link to="/products">
                      View Products <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
