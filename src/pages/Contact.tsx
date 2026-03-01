import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollReveal from '@/components/ScrollReveal';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 12345 67890', href: 'tel:+911234567890' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/911234567890' },
    { icon: Mail, label: 'Email', value: 'info@jaiambeyelectricals.com', href: 'mailto:info@jaiambeyelectricals.com' },
    { icon: MapPin, label: 'Address', value: '123, Main Market, City Name, State - 000000' },
    { icon: Clock, label: 'Business Hours', value: 'Mon - Sat: 9:00 AM - 8:00 PM | Sunday: 10:00 AM - 2:00 PM' },
  ];

  return (
    <main className="pt-20">
      <section className="section-padding gradient-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have a question or need help choosing the right product? Reach out to us!
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Info</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map(item => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors text-sm">
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
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Find Us on Map</h3>
              <div className="bg-secondary rounded-2xl border border-border overflow-hidden h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.909817915024!2d74.73178537564247!3d26.297023386277885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396959dca582cb41%3A0x17da42387aed47fa!2sJai%20Ambe%20Electicals!5e0!3m2!1sen!2sin!4v1772377885858!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Jai Ambey Electricals Location" />
              </div>
            </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
