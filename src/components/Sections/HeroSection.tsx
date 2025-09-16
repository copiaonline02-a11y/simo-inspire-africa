import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/philippe-simo-hero.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-bg via-background to-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                  ✨ Entrepreneur & Formateur
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="block">Philippe</span>
                <span className="block text-primary">Simo</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium max-w-2xl">
                Entrepreneur, investisseur & formateur
              </p>
              
              <p className="text-lg text-elegant-gray max-w-2xl">
                Inspirer la diaspora à construire en Afrique
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg group"
              >
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                onClick={scrollToAbout}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Découvrir mon parcours
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Entrepreneurs formés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projets accompagnés</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-last">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-professional-blue to-accent rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              
              {/* Main image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-background shadow-[var(--shadow-elegant)]">
                <img
                  src={heroImage}
                  alt="Portrait professionnel de Philippe Simo, entrepreneur et formateur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;