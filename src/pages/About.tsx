import { Shield, Target, Award, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const timeline = [
  { year: '2014', title: 'Founded', desc: 'Jai Ambey Electricals opened its doors to serve the community.' },
  { year: '2016', title: 'Expanded Product Range', desc: 'Added pipe fittings and electronics to our inventory.' },
  { year: '2019', title: 'Custom Cooler Launch', desc: 'Started assembling custom air coolers in-house.' },
  { year: '2024', title: '10 Years Strong', desc: 'Celebrating a decade of trusted service with 1000+ happy customers.' },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">About Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            The story behind your trusted electrical and appliance store.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jai Ambey Electricals was founded in 2014 with a simple mission — to provide quality electrical products at affordable prices. What started as a small electrical shop has grown into a comprehensive store offering everything from ceiling fans to custom-assembled air coolers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, we have expanded our product range to include pipe fittings, electronics, and specialized cooling solutions. Our commitment to quality, fair pricing, and customer satisfaction has earned us the trust of thousands of customers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="aspect-[4/3] rounded-2xl bg-secondary flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Shop Image Placeholder</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground">Our Values</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Quality First', desc: 'Only genuine branded products.' },
              { icon: Target, title: 'Customer Focus', desc: 'Your satisfaction is our priority.' },
              { icon: Award, title: 'Expertise', desc: '10+ years of industry experience.' },
              { icon: Clock, title: 'Reliability', desc: 'Consistent service you can count on.' },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="text-center p-6 bg-card rounded-2xl border border-border hover-lift">
                  <div className="h-14 w-14 mx-auto rounded-xl bg-accent flex items-center justify-center mb-4">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-card-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground">Our Journey</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 150}>
                <div className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:text-${i % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-1.5 mt-1.5" />
                  <div className="ml-10 md:ml-0 md:w-1/2 bg-card p-5 rounded-xl border border-border">
                    <span className="text-xs font-bold text-primary">{t.year}</span>
                    <h3 className="font-heading font-semibold text-card-foreground mt-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
