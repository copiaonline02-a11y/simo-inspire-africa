import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import portrait1 from "@/assets/philippe-portrait-1.jpg";
import portrait2 from "@/assets/philippe-portrait-2.jpg";
import portrait3 from "@/assets/philippe-portrait-3.jpg";
import portrait4 from "@/assets/philippe-portrait-4.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: portrait1,
      alt: "Portrait professionnel de Philippe Simo",
      category: "Portrait",
      title: "Portrait Professionnel"
    },
    {
      src: portrait2,
      alt: "Philippe Simo - Portrait décontracté",
      category: "Portrait",
      title: "Portrait Décontracté"
    },
    {
      src: portrait3,
      alt: "Philippe Simo - Portrait souriant",
      category: "Portrait",
      title: "Portrait Souriant"
    },
    {
      src: portrait4,
      alt: "Philippe Simo - Portrait formel",
      category: "Portrait",
      title: "Portrait Formel"
    }
  ];

  const categories = ["Tous", "Portrait", "Conférence", "Travail", "Formation"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredImages = selectedCategory === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            📸 Galerie
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Photos & Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez les moments clés de mon parcours professionnel et mes interventions
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-muted cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">{image.title}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="text-xs">
                  {image.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Image agrandie"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;