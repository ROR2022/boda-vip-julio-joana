"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useMusicContext } from "@/context/music-context";
import { vipDemoData } from "./data/vip-demo-data";
import { premiumDemoData } from "../premium/data/premium-demo-data";

export function VipHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isPlaying, togglePlay, isClient } = useMusicContext();

  // Estado del carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const images = premiumDemoData.hero.backgroundImages
  const settings = premiumDemoData.hero.carouselSettings

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-avance del carrusel
  useEffect(() => {
    if (!settings.autoAdvance) return
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, settings.interval)

    return () => clearInterval(timer)
  }, [settings.autoAdvance, settings.interval, images.length])

  // Funciones de navegación del carrusel
  const nextImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
      setIsTransitioning(false)
    }, 150)
  }

  const prevImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
      setIsTransitioning(false)
    }, 150)
  }

  const goToImage = (index: number) => {
    if (index !== currentImageIndex) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex(index)
        setIsTransitioning(false)
      }, 150)
    }
  }

  return (
    <section 
    className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${vipDemoData.hero.backgroundImage}')`,
          filter: "brightness(0.6)",
        }}
      />

      {/* Overlay dorado exclusivo VIP */}
      <div
      
      className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 via-transparent to-yellow-900/30 z-1"
      ></div>

      {/* Music control button VIP - INCLUIDO en paquete VIP */}
      {isClient && (
        <div className="fixed top-4 right-4 z-20">
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-500/30 backdrop-blur-sm flex items-center justify-center text-white hover:from-yellow-400/40 hover:to-amber-500/40 transition-all duration-300 border-2 border-yellow-400/50 shadow-2xl vip-glow"
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>

          
        </div>
      )}

      {/* Carrusel de imágenes de fondo */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex 
              ? `opacity-${isTransitioning ? '50' : '100'}` 
              : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      {/* Controles de navegación del carrusel */}
      {settings.showControls && (
        <>
          {/* Flecha izquierda */}
          <button
            onClick={prevImage}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 z-20"
            title="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Flecha derecha */}
          <button
            onClick={nextImage}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 z-20"
            title="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Indicadores del carrusel */}
      {settings.showIndicators && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              title={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

     

      {/* Contenido principal */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="z-10 text-center px-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-yellow-200 text-xl mb-2 font-light tracking-wider"
          >
            {vipDemoData.hero.subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="font-script text-6xl md:text-8xl text-white mb-6 vip-text-gradient drop-shadow-2xl"
          >
            {vipDemoData.hero.name}
          </motion.h1>

         
          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 space-y-2"
          >
            <p className="text-xl md:text-2xl font-medium text-white">
              {vipDemoData.event.date.full}
            </p>
            <p className="text-lg md:text-xl text-yellow-100 opacity-90">
              {vipDemoData.event.ceremony.venue}
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll indicator VIP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-5 h-5 text-yellow-400 animate-bounce" />
        </div>
      </motion.div>

      {/* Efectos de brillo VIP */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
