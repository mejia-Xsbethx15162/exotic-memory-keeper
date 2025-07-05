import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LogOut, Heart, Camera, MapPin } from 'lucide-react';

// Import travel images
import travelBeach from '@/assets/travel-beach.jpg';
import travelTemple from '@/assets/travel-temple.jpg';
import travelMarket from '@/assets/travel-market.jpg';
import travelTerraces from '@/assets/travel-terraces.jpg';
import travelWildlife from '@/assets/travel-wildlife.jpg';

interface TravelMemoryCardProps {
  userName: string;
  onLogout: () => void;
}

export const TravelMemoryCard: React.FC<TravelMemoryCardProps> = ({ userName, onLogout }) => {
  const travelImages = [
    { src: travelBeach, alt: "Playa paradisíaca con aguas cristalinas" },
    { src: travelTemple, alt: "Templo antiguo entre la selva" },
    { src: travelMarket, alt: "Mercado exótico lleno de colores" },
    { src: travelTerraces, alt: "Terrazas de arroz al atardecer" },
    { src: travelWildlife, alt: "Vida silvestre tropical" }
  ];

  return (
    <div className="min-h-screen bg-gradient-memory">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-warm-sunset/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart fill="currentColor" className="text-exotic-coral h-6 w-6" />
            <span className="text-lg font-semibold">Recuerdos Especiales</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Hola, {userName}</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onLogout}
              className="border-warm-sunset/30 hover:bg-warm-sunset hover:text-warm-sunset-foreground"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent">
            Nuestro Viaje Inolvidable
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
              "Querida Karen, cada fotografía en esta tarjeta guarda un pedacito de nuestro corazón. 
              Desde las playas cristalinas hasta los templos ancestrales, cada momento vivido contigo 
              se ha convertido en un tesoro invaluable. Que estos recuerdos nos transporten de vuelta 
              a esos días mágicos donde el tiempo se detuvo y la aventura nos abrazó."
            </p>
            <div className="flex items-center justify-center gap-2 text-warm-sunset">
              <MapPin className="h-5 w-5" />
              <span className="text-lg font-medium">Con amor infinito</span>
              <Heart fill="currentColor" className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="h-6 w-6 text-tropical-teal" />
            <h2 className="text-3xl font-bold text-foreground">Galería de Recuerdos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelImages.map((image, index) => (
              <Card key={index} className="overflow-hidden shadow-memory hover:shadow-warm transition-all duration-300 hover:scale-105 border-0">
                <div className="aspect-video relative group">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Revive la Magia
          </h2>
          <Card className="max-w-4xl mx-auto shadow-memory border-0">
            <CardContent className="p-0">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5tRNJ12nSIY"
                  title="Maravillas del Caribe - Islas Más Hermosas del Caribe"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-4 italic">
            "Las mejores aventuras son aquellas que compartimos con personas especiales"
          </p>
        </div>

        {/* Final Message */}
        <div className="text-center bg-gradient-travel rounded-2xl p-12 text-white shadow-memory">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Hasta el Próximo Destino
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Que esta tarjeta digital sea un recordatorio de que las mejores historias 
            se escriben cuando nos atrevemos a explorar el mundo juntos. 
            ¡Nuestras aventuras apenas comienzan!
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <Heart fill="currentColor" className="h-6 w-6" />
            <span className="text-xl font-semibold">Para siempre en nuestros corazones</span>
            <Heart fill="currentColor" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};