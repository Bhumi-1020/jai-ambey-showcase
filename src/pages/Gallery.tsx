import ScrollReveal from '@/components/ScrollReveal';

const galleryCategories = [
  { title: 'Our Store', count: 4 },
  { title: 'Product Displays', count: 4 },
  { title: 'Installation Work', count: 4 },
];

const Gallery = () => {
  return (
    <main className="pt-20">
      <section className="section-padding gradient-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Gallery</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            A glimpse into our store, products, and installations.
          </p>
        </div>
      </section>

      {galleryCategories.map(cat => (
        <section key={cat.title} className="section-padding odd:bg-background even:bg-secondary">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">{cat.title}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: cat.count }, (_, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="aspect-square rounded-xl bg-secondary border border-border flex items-center justify-center hover-lift cursor-pointer overflow-hidden group">
                    <p className="text-muted-foreground/50 text-xs text-center px-2">
                      {cat.title} Photo {i + 1}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Gallery;
