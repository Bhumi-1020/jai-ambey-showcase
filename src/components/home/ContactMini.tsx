import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const ContactMini = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Visit Us Today
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone', value: '+91 12345 67890', href: 'tel:+911234567890' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/911234567890' },
                { icon: MapPin, label: 'Address', value: '123, Main Market, City Name, State - 000000' },
                { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9:00 AM - 8:00 PM | Sun: 10:00 AM - 2:00 PM' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-card rounded-2xl border border-border overflow-hidden h-full min-h-[300px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">Google Maps Embed Placeholder</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Replace with your Google Maps iframe</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactMini;
