import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Calendar, MessageCircle, Send, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Envoyer les données à Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "contact@philippesimo.com",
      action: "Envoyer un email",
      href: "mailto:contact@philippesimo.com",
      color: "text-blue-500"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Message direct",
      action: "Ouvrir WhatsApp",
      href: "https://wa.me/33123456789",
      color: "text-green-500"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Calendly",
      description: "Prendre rendez-vous",
      action: "Réserver un créneau",
      href: "https://calendly.com/copiaonline02/30min",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            📧 Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Prenons Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Vous avez un projet ? Une question ? N'hésitez pas à me contacter pour discuter 
            de vos ambitions entrepreneuriales.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pb-6">
                <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Envoyez-moi un message
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou votre question..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods & Info */}
            <div className="space-y-6">
              {/* Quick Contact Methods */}
              <Card className="p-6">
                <CardHeader className="px-0 pb-4">
                  <CardTitle className="text-xl font-semibold">
                    Méthodes de contact rapides
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg bg-muted ${method.color}`}>
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{method.title}</h3>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                      <Button 
                        asChild
                        variant="outline" 
                        size="sm"
                      >
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.action}
                        </a>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Location & Availability */}
              <Card className="p-6">
                <CardHeader className="px-0 pb-4">
                  <CardTitle className="text-xl font-semibold flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    Localisation & Disponibilité
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Basé en</h3>
                    <p className="text-muted-foreground">France & Côte d'Ivoire</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Disponibilité</h3>
                    <p className="text-muted-foreground">
                      Consultations en ligne et en présentiel sur rendez-vous
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Langues</h3>
                    <p className="text-muted-foreground">Français, Anglais</p>
                  </div>
                </CardContent>
              </Card>

              {/* Calendly Embed */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader className="px-0 pb-4">
                  <CardTitle className="text-xl font-semibold flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    Réserver un appel
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-muted-foreground mb-4">
                    Réservez directement un créneau dans mon agenda pour une consultation gratuite de 30 minutes.
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a 
                      href="https://calendly.com/copiaonline02/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Prendre rendez-vous maintenant
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;