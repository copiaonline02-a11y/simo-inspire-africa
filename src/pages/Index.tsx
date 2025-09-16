import Header from "@/components/Layout/Header";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import GallerySection from "@/components/Sections/GallerySection";
import PodcastSection from "@/components/Sections/PodcastSection";
import VideoSection from "@/components/Sections/VideoSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Layout/Footer";
import ChatBotWidget from "@/components/ChatBot/ChatBotWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <PodcastSection />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBotWidget />
    </div>
  );
};

export default Index;
