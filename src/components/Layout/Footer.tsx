import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Youtube, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      href: "https://youtube.com/@PhilippeSimo",
      color: "hover:text-red-500"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/philippesimo",
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:contact@philippesimo.com",
      color: "hover:text-primary"
    }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#" },
    { name: "À propos", href: "#about" },
    { name: "Galerie", href: "#gallery" },
    { name: "Podcasts", href: "#podcasts" },
    { name: "Vidéos", href: "#videos" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Formation entrepreneuriale",
    "Consultation stratégique",
    "Mentorat personnalisé",
    "Conférences & Workshops"
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Philippe Simo</h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
                Entrepreneur, investisseur et formateur passionné par le développement 
                de l'écosystème entrepreneurial africain et l'accompagnement de la diaspora.
              </p>
              
              {/* Quick Contact */}
              <div className="space-y-3">
                <h4 className="font-semibold mb-3">Contact rapide</h4>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    asChild
                    variant="secondary" 
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-primary-foreground border-white/20"
                  >
                    <a href="mailto:contact@philippesimo.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="secondary" 
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-primary-foreground/80 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Philippe Simo. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/80">Suivez-moi :</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-primary-foreground/60 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <button className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </button>
              <button className="hover:text-primary-foreground transition-colors">
                Confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;