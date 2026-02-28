import { Link } from 'react-router-dom';
import { Zap, Phone, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Custom Coolers', path: '/custom-coolers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const productLinks = [
    { name: 'Ceiling Fans', path: '/products' },
    { name: 'Air Coolers', path: '/custom-coolers' },
    { name: 'LED Lights', path: '/products' },
    { name: 'Water Tanks', path: '/products' },
    { name: 'LED TVs', path: '/products' },
  ];

  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-lg font-heading font-bold">Jai Ambey</span>
                <span className="block text-xs opacity-80 -mt-1">Electricals</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted local electrical and appliance store. Quality products, competitive pricing, and expert advice since 2014.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path + link.name}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:+911234567890" className="hover:opacity-100 transition-opacity">+91 12345 67890</a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>info@jaiambeyelectricals.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123, Main Market, City Name, State - 000000</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Jai Ambey Electricals. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
