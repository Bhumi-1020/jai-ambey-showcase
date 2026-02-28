import { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScrollReveal from '@/components/ScrollReveal';

interface Product {
  name: string;
  desc: string;
}

const products: Record<string, Product[]> = {
  electricals: [
    { name: 'Ceiling Fans', desc: 'Energy-efficient ceiling fans in various designs and sizes.' },
    { name: 'Air Coolers', desc: 'Custom assembled and branded coolers for every room.' },
    { name: 'LED Lights', desc: 'Bright, energy-saving LED lighting solutions.' },
    { name: 'Designer Switches', desc: 'Premium modular switches for modern homes.' },
    { name: 'Disco Lights', desc: 'Colorful LED disco lights for parties and events.' },
    { name: 'Juicers', desc: 'Powerful mixer grinders and juicers for your kitchen.' },
    { name: 'Plugs', desc: 'High-quality electrical plugs and sockets.' },
  ],
  'pipe-fitting': [
    { name: 'Water Tanks', desc: 'Durable water storage tanks in multiple capacities.' },
    { name: 'PVC Pipes', desc: 'ISI-marked PVC pipes for plumbing needs.' },
    { name: 'Taps', desc: 'Stylish and durable taps for kitchen and bathroom.' },
    { name: 'Pipe Accessories', desc: 'Elbows, connectors, valves, and more.' },
  ],
  electronics: [
    { name: 'LED TVs', desc: 'Smart and HD LED TVs from top brands.' },
    { name: 'Refrigerators', desc: 'Energy-efficient refrigerators for every household.' },
    { name: 'Washing Machines', desc: 'Fully automatic and semi-automatic washing machines.' },
  ],
};

const tabLabels: Record<string, string> = {
  electricals: 'Electricals',
  'pipe-fitting': 'Pipe Fitting',
  electronics: 'Electronics',
};

const Products = () => {
  return (
    <main className="pt-20">
      <section className="section-padding gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Our Products</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Browse our complete range of quality electrical products, pipe fittings, and electronics.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs defaultValue="electricals" className="w-full">
            <ScrollReveal>
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-10">
                {Object.keys(tabLabels).map(key => (
                  <TabsTrigger key={key} value={key} className="text-sm font-medium">
                    {tabLabels[key]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollReveal>

            {Object.entries(products).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                {category === 'electronics' && (
                  <ScrollReveal>
                    <div className="bg-accent rounded-xl p-4 mb-8 text-center">
                      <p className="text-sm text-accent-foreground">⚡ All electronics come with manufacturer warranty and energy efficiency ratings.</p>
                    </div>
                  </ScrollReveal>
                )}
                {category === 'pipe-fitting' && (
                  <ScrollReveal>
                    <div className="bg-accent rounded-xl p-4 mb-8 text-center">
                      <p className="text-sm text-accent-foreground">📐 Available in various sizes and materials. Ask for specifications in-store.</p>
                    </div>
                  </ScrollReveal>
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map((product, i) => (
                    <ScrollReveal key={product.name} delay={i * 80}>
                      <div className="bg-card rounded-2xl border border-border overflow-hidden hover-lift group">
                        <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                          <p className="text-muted-foreground/50 text-xs">Product Image</p>
                        </div>
                        <div className="p-5">
                          <h3 className="font-heading font-semibold text-card-foreground mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <a href="tel:+911234567890">
                              <Phone className="h-3.5 w-3.5 mr-1.5" />
                              Contact for Price
                            </a>
                          </Button>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default Products;
