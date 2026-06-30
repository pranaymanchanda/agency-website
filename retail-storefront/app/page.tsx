import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Shop from "@/components/Shop";
import Deals from "@/components/Deals";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Shop />
        <Deals />
        <Features />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
