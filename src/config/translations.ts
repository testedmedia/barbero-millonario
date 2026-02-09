// ============================================================
// BARBERO MILLONARIO - Translations (ES / EN)
// ============================================================

export type Lang = "es" | "en";

const translations = {
  // ---- Navbar ----
  nav: {
    about: { es: "Sobre Mí", en: "About" },
    services: { es: "Servicios", en: "Services" },
    gallery: { es: "Galería", en: "Gallery" },
    testimonials: { es: "Testimonios", en: "Testimonials" },
    faq: { es: "Preguntas", en: "FAQ" },
    book: { es: "Reservar", en: "Book Now" },
  },

  // ---- Hero ----
  hero: {
    tagline: {
      es: "La Experiencia #1 VIP de Barbería en Medellín",
      en: "The #1 VIP Barber Experience in Medellín",
    },
    subtitle: {
      es: "Servicio a Domicilio",
      en: "At-Home VIP Service",
    },
    cta: {
      es: "RESERVA TU CITA",
      en: "BOOK YOUR APPOINTMENT",
    },
    ctaSecondary: {
      es: "Ver Servicios",
      en: "View Services",
    },
    statsClients: {
      es: "Clientes VIP",
      en: "VIP Clients",
    },
  },

  // ---- About ----
  about: {
    title: { es: "Sobre Mí", en: "About Me" },
    subtitle: {
      es: "Tu Barbero VIP a Domicilio",
      en: "Your VIP Barber, At Your Door",
    },
    bio: {
      es: "Soy Stiven Díaz, el Barbero Millonario. Llevo la experiencia de barbería de lujo directamente a tu puerta. Casas de lujo, penthouses, hoteles, Airbnbs - donde sea que estés en Medellín, yo llego con mi kit profesional completo. No es solo un corte. Es una experiencia.",
      en: "I'm Stiven Díaz, the Barbero Millonario. I bring the luxury barber experience directly to your door. Luxury homes, penthouses, hotels, Airbnbs - wherever you are in Medellín, I arrive with my full professional kit. It's not just a haircut. It's an experience.",
    },
    features: [
      {
        titleEs: "Servicio VIP a Domicilio",
        titleEn: "VIP Home Service",
        descEs: "Llego a tu ubicación con todo lo necesario",
        descEn: "I come to your location with everything needed",
        icon: "home",
      },
      {
        titleEs: "Productos Premium",
        titleEn: "Premium Products",
        descEs: "Solo uso productos profesionales de alta gama",
        descEn: "I only use high-end professional products",
        icon: "star",
      },
      {
        titleEs: "Experiencia Personalizada",
        titleEn: "Personalized Experience",
        descEs: "Cada corte es único, adaptado a tu estilo",
        descEn: "Every cut is unique, tailored to your style",
        icon: "scissors",
      },
      {
        titleEs: "Discreción y Profesionalismo",
        titleEn: "Discretion & Professionalism",
        descEs: "Servicio confidencial de primera clase",
        descEn: "First-class confidential service",
        icon: "shield",
      },
    ],
  },

  // ---- Services ----
  services: {
    title: { es: "Servicios", en: "Services" },
    subtitle: {
      es: "Elige Tu Experiencia",
      en: "Choose Your Experience",
    },
    duration: { es: "min", en: "min" },
    book: { es: "Reservar", en: "Book" },
    featured: { es: "MÁS POPULAR", en: "MOST POPULAR" },
  },

  // ---- Gallery ----
  gallery: {
    title: { es: "Mi Trabajo", en: "My Work" },
    subtitle: {
      es: "Resultados Que Hablan Por Sí Solos",
      en: "Results That Speak for Themselves",
    },
  },

  // ---- Testimonials ----
  testimonials: {
    title: { es: "Testimonios", en: "Testimonials" },
    subtitle: {
      es: "Lo Que Dicen Mis Clientes",
      en: "What My Clients Say",
    },
  },

  // ---- Coverage ----
  coverage: {
    title: { es: "Cobertura", en: "Coverage" },
    subtitle: {
      es: "Dónde Opero en Medellín",
      en: "Where I Operate in Medellín",
    },
    note: {
      es: "Consultar disponibilidad para otras zonas",
      en: "Ask about availability for other areas",
    },
  },

  // ---- How It Works ----
  howItWorks: {
    title: { es: "Cómo Funciona", en: "How It Works" },
    subtitle: {
      es: "Tres Pasos Para Tu Experiencia VIP",
      en: "Three Steps to Your VIP Experience",
    },
    steps: [
      {
        titleEs: "Reserva por WhatsApp",
        titleEn: "Book via WhatsApp",
        descEs:
          "Envía un mensaje con tu fecha, hora y servicio preferido",
        descEn:
          "Send a message with your preferred date, time, and service",
      },
      {
        titleEs: "Confirmación",
        titleEn: "Confirmation",
        descEs:
          "Confirmo disponibilidad y aseguro tu cita",
        descEn:
          "I confirm availability and lock in your appointment",
      },
      {
        titleEs: "Experiencia VIP",
        titleEn: "VIP Experience",
        descEs:
          "Llego a tu ubicación con mi kit profesional completo",
        descEn:
          "I arrive at your location with my full professional kit",
      },
    ],
  },

  // ---- Social ----
  socialSection: {
    title: { es: "Sígueme", en: "Follow Me" },
    subtitle: {
      es: "Contenido Exclusivo en Todas las Plataformas",
      en: "Exclusive Content Across All Platforms",
    },
  },

  // ---- FAQ ----
  faq: {
    title: { es: "Preguntas Frecuentes", en: "FAQ" },
    subtitle: {
      es: "Todo Lo Que Necesitas Saber",
      en: "Everything You Need to Know",
    },
  },

  // ---- Footer ----
  footer: {
    tagline: {
      es: "La experiencia de barbería VIP que mereces",
      en: "The VIP barber experience you deserve",
    },
    quickLinks: { es: "Enlaces Rápidos", en: "Quick Links" },
    contact: { es: "Contacto", en: "Contact" },
    followUs: { es: "Sígueme", en: "Follow Me" },
    madeWith: {
      es: "Hecho con amor en Medellín",
      en: "Made with love in Medellín",
    },
    rights: {
      es: "Todos los derechos reservados",
      en: "All rights reserved",
    },
  },

  // ---- Booking Form ----
  bookingForm: {
    title: { es: "Reserva Tu Cita", en: "Book Your Appointment" },
    name: { es: "Nombre", en: "Name" },
    phone: { es: "Teléfono / WhatsApp", en: "Phone / WhatsApp" },
    service: { es: "Servicio", en: "Service" },
    selectService: {
      es: "Selecciona un servicio",
      en: "Select a service",
    },
    date: { es: "Fecha y Hora Preferida", en: "Preferred Date & Time" },
    location: { es: "Ubicación / Dirección", en: "Location / Address" },
    notes: { es: "Notas Adicionales", en: "Additional Notes" },
    submit: {
      es: "Enviar por WhatsApp",
      en: "Send via WhatsApp",
    },
  },

  // ---- WhatsApp Float ----
  whatsapp: {
    tooltip: {
      es: "Reserva por WhatsApp",
      en: "Book via WhatsApp",
    },
  },
} as const;

export default translations;

// Helper to get translated text
export function t(
  obj: { es: string; en: string },
  lang: Lang
): string {
  return obj[lang];
}
