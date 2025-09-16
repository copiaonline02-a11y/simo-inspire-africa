import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Né le",
      value: "4 septembre 1985"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Origine",
      value: "Douala, Cameroun"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: "Formation",
      value: "Ingénieur en génie industriel"
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      label: "Spécialité",
      value: "Entrepreneuriat & Formation"
    }
  ];

  const achievements = [
    "Diplômé de l'Université de Technologie de Troyes (France)",
    "Expérience en ingénierie projets dans le secteur énergétique",
    "Fondateur de la marque 'Investir au Pays'",
    "Formateur et mentor pour entrepreneurs africains",
    "Speaker reconnu en conférences et podcasts"
  ];

  return (
    <section id="about" className="py-20 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              📖 Mon parcours
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              À propos de Philippe Simo
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Philippe Simo est un entrepreneur et formateur d'origine camerounaise, 
                né le 4 septembre 1985 à Douala. Diplômé ingénieur en génie industriel 
                à l'Université de Technologie de Troyes (France), il a travaillé comme 
                ingénieur projets dans les secteurs de l'énergie avant de lancer ses 
                propres initiatives entrepreneuriales.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                À travers sa marque « Investir au Pays », il sensibilise la diaspora 
                africaine à investir dans leurs pays d'origine, propose des formations, 
                du mentoring et partage son expérience via YouTube, podcasts et conférences.
              </p>

              {/* Achievements */}
              <div className="space-y-3 mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Parcours clés
                </h3>
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {highlight.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {highlight.value}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Mission Statement */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ma mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accompagner les entrepreneurs africains et de la diaspora dans 
                  la réalisation de leurs projets, en partageant des stratégies 
                  concrètes et en créant des ponts entre l'Afrique et ses communautés 
                  internationales.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;