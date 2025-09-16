import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, ExternalLink, Play, Clock } from "lucide-react";

const PodcastSection = () => {
  const podcasts = [
    {
      title: "Épisode 110 P1 - Entrepreneur State Of Africa",
      description: "Discussion approfondie sur l'entrepreneuriat en Afrique avec Philippe Simo, Nabou Fall et Delali Damessi",
      duration: "45 min",
      date: "2024",
      url: "https://podcasts.apple.com/ca/podcast/ep-110-p1-w-philippe-simo-nabou-fall-delali-damessi/id1465612783?i=1000681319442",
      embedUrl: "https://embed.podcasts.apple.com/ca/podcast/ep-110-p1-w-philippe-simo-nabou-fall-delali-damessi/id1465612783?i=1000681319442",
      episode: "110 P1",
      show: "Entrepreneur State Of Africa"
    },
    {
      title: "Épisode 67 - S'installer en Côte d'Ivoire",
      description: "Philippe Simo partage son expérience et ses conseils pour s'installer et entreprendre en Côte d'Ivoire",
      duration: "52 min",
      date: "2023",
      url: "https://podcasts.apple.com/us/podcast/ep-67-w-philippe-simo-sinstaller-en-c%C3%B4te-divoire-son/id1465612783?i=1000644352222",
      embedUrl: "https://embed.podcasts.apple.com/us/podcast/ep-67-w-philippe-simo-sinstaller-en-c%C3%B4te-divoire-son/id1465612783?i=1000644352222",
      episode: "67",
      show: "Entrepreneur State Of Africa"
    }
  ];

  return (
    <section id="podcasts" className="py-20 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            🎧 Audio & Podcasts
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Interviews & Podcasts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Écoutez mes interventions dans différents podcasts sur l'entrepreneuriat africain
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Podcasts Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Headphones className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        Épisode {podcast.episode}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {podcast.duration}
                  </div>
                </div>

                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {podcast.title}
                </CardTitle>
                
                <CardDescription className="text-sm font-medium text-accent mb-2">
                  {podcast.show}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {podcast.description}
                </p>

                {/* Embedded Apple Podcast Player */}
                <div className="mb-4">
                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="175"
                    style={{
                      width: '100%',
                      maxWidth: '660px',
                      overflow: 'hidden',
                      borderRadius: '10px'
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src={podcast.embedUrl}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium">
                    {podcast.date}
                  </span>
                  
                  <Button 
                    asChild
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    <a 
                      href={podcast.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Ouvrir dans Apple Podcasts
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="mb-4">
              <Headphones className="h-12 w-12 mx-auto text-primary mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Invitez-moi dans votre podcast
            </h3>
            <p className="text-muted-foreground mb-6">
              Je suis disponible pour partager mon expérience sur l'entrepreneuriat africain, 
              l'investissement au pays et l'accompagnement de la diaspora.
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Me contacter pour un interview
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;