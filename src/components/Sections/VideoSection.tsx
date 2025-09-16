import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Youtube } from "lucide-react";

const VideoSection = () => {
  const videos = [
    {
      title: "Stratégies d'Investissement en Afrique",
      description: "Découvrez les meilleures stratégies pour investir efficacement dans les marchés africains et créer de la valeur durable.",
      thumbnail: "https://img.youtube.com/vi/Zyu7TREwDxQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Zyu7TREwDxQ",
      duration: "12:30",
      views: "45K"
    },
    {
      title: "Entrepreneuriat et Diaspora Africaine",
      description: "Comment la diaspora peut jouer un rôle clé dans le développement économique du continent africain.",
      thumbnail: "https://img.youtube.com/vi/pnRgYDMfWLw/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=pnRgYDMfWLw",
      duration: "18:45",
      views: "32K"
    },
    {
      title: "Réussir ses Premiers Pas d'Entrepreneur",
      description: "Guide pratique pour les nouveaux entrepreneurs : éviter les pièges courants et maximiser ses chances de succès.",
      thumbnail: "https://img.youtube.com/vi/3Y7OWkdkRJE/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=3Y7OWkdkRJE",
      duration: "15:20",
      views: "67K"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            📹 Vidéos & Formations
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Contenus Vidéo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez mes interventions, formations et conseils en entrepreneuriat
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 overflow-hidden">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-4 bg-accent/90 rounded-full">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3">
                  <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                    {video.duration}
                  </Badge>
                </div>

                {/* YouTube Icon */}
                <div className="absolute top-3 left-3">
                  <Youtube className="h-6 w-6 text-red-500" />
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {video.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {video.views} vues
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {video.description}
                </p>

                <Button 
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group/btn"
                >
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    Regarder sur YouTube
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-red-500/5 to-accent/5 border-red-500/20">
            <div className="mb-4">
              <Youtube className="h-12 w-12 mx-auto text-red-500 mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Suivez ma chaîne YouTube
            </h3>
            <p className="text-muted-foreground mb-6">
              Ne manquez aucune de mes nouvelles vidéos sur l'entrepreneuriat, 
              les stratégies d'investissement et les conseils pour réussir en Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8"
              >
                <a 
                  href="https://youtube.com/@PhilippeSimo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Youtube className="h-5 w-5" />
                  S'abonner à la chaîne
                </a>
              </Button>
              <Button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                size="lg"
                className="px-8"
              >
                Proposer une collaboration
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;