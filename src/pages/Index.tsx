import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ProductCategories from '@/components/home/ProductCategories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CoolerHighlight from '@/components/home/CoolerHighlight';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import ContactMini from '@/components/home/ContactMini';
import BrandLogos from '@/components/home/BrandLogos';
import FAQSection from '@/components/home/FAQSection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <ProductCategories />
      <WhyChooseUs />
      <CoolerHighlight />
      <Testimonials />
      <CTASection />
      <ContactMini />
      <BrandLogos />
      <FAQSection />
    </main>
  );
};

export default Index;
