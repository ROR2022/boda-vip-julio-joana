// Datos demo para el paquete básico de boda
export const basicDemoData = {
  hero: {
    name: "Joana Yasmin & Julio Yael",
    subtitle: "¡Nos Casamos!",
    backgroundImage: "/images/boda/boda1.jpeg",
    carouselSettings: {
      autoAdvance: true,
      interval: 3000, // 3 segundos
      showIndicators: true,
      showControls: true // flechas de navegación
    },
    // Imágenes de fondo para el carrusel del hero - ACTUALIZADAS
      backgroundImages: [
        "/images/boda/boda2.jpeg", // Foto principal 
        "/images/boda/boda5.jpeg", // Segunda foto destacada
        "/images/boda/boda6.jpeg"  // Tercera foto destacada
      ]
  },
  
  event: {
    celebrants: {
      bride: "JOANA YASMIN GARCIA PEREZ",
      groom: "JULIO YAEL AGUILAR POLLARES"
    },
    parents: {
      brideParents: {
        father: "INOCENTE GARCIA SOTO",
        mother: "ELIZABETH PEREZ GONZALEZ"
      }, 
      groomParents: {
        father: "JOSE ALBERTO PEREZ",
        mother: "ERIKA PEREZ GONZALEZ"
      }
    },
    date: {
      full: "Sábado 12 de Enero 2030",
      day: "Sábado",
      date: "12 de Enero 2030"
    },
    ceremony: {
      time: "12:00 hrs.",
      venue: "Iglesia De San Isidro Labrador",
      address: "Zilacatipan,Huayacocotla., Veracruz",
      type: "Misa de Matrimonio",
      ubiLink: "https://maps.app.goo.gl/rv989XyMEeoYBstF9"
    },
    party: {
      time: "13:30 hrs.",
      venue: "La Galeria",
      address: "Zilacatipan,Huayacocotla., Veracruz",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/rv989XyMEeoYBstF9"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "January 12, 2030 12:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente <No Niños>",
    subtitle: "Esperamos que no sea impedimento para que puedan acompañarnos en este día tan especial.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarnos?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Su presencia es nuestro mejor regalo, pero si desean obsequiarnos algo, pueden considerar las siguientes opciones:",
    options: [
      {
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "BBVA Bancomer",
        details: "Cuenta: 1234567890\nCLABE: 012345678901234567\nA nombre de: Ana Lucía Martínez Rodríguez"
      },
      {
        icon: "🎁",
        title: "Mesa de Regalos",
        description: "Liverpool",
        details: "Evento: Boda Ana & Carlos\nCódigo: 51234567"
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Pueden entregarlo en la recepción"
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu boda",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 