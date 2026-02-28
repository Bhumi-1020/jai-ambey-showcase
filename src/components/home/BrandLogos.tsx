import ScrollReveal from '@/components/ScrollReveal';

const brands = Array.from({ length: 6 }, (_, i) => `Brand ${i + 1}`);

const BrandLogos = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-8">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Partners</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
            Brands We Carry
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {brands.map(brand => (
              <div
                key={brand}
                className="h-16 w-32 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground text-sm font-medium hover:bg-accent hover:text-primary transition-colors duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandLogos;
