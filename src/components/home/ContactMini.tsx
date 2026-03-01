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
            <div className="bg-card rounded-2xl border border-border overflow-hidden h-full min-h-[300px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.909817915024!2d74.73178537564247!3d26.297023386277885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396959dca582cb41%3A0x17da42387aed47fa!2sJai%20Ambe%20Electicals!5e0!3m2!1sen!2sin!4v1772377885858!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Jai Ambey Electricals Location" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactMini;
