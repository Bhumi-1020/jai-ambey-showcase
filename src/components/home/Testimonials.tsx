import { Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    text: 'Excellent quality products and very helpful staff. I bought a custom air cooler and it works amazingly well. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    text: 'Best electrical shop in the area. Great prices and genuine products. The designer switches I purchased look fantastic in my new home.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    text: 'Got all my pipe fittings and water tank from here. Very knowledgeable team who helped me choose the right products. Will visit again!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 150}>
              <div className="bg-card p-6 rounded-2xl border border-border hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{t.name[0]}</span>
                  </div>
                  <span className="font-heading font-semibold text-sm text-card-foreground">{t.name}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
