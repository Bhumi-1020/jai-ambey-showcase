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
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="mt-1.5"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </ScrollReveal>

          <div>
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
              <div className="bg-secondary rounded-2xl border border-border overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-10 w-10 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Google Maps Embed Placeholder</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Replace with your Google Maps iframe</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
