import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import PopularProducts from '@/components/landing/popular-products';
import Testimonials from '@/components/landing/testimonials';
import HowItWorks from '@/components/landing/how-it-works';
import SellerCTA from '@/components/landing/seller-cta';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <PopularProducts />
        <Testimonials />
        <HowItWorks />
        <SellerCTA />
      </main>
      <Footer />
    </div>
  );
}
