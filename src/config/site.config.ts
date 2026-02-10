// ============================================================
// BARBERO MILLONARIO - Site Configuration
// ============================================================
// This is the SINGLE SOURCE OF TRUTH for all site content.
// To update content, edit this file only. No component code
// changes needed for content updates.
// ============================================================

export const siteConfig = {
  // ---- Business Info ----
  businessName: "Barbero Millonario",
  ownerName: "Stiven Diaz",
  whatsappNumber: "573242824201",
  websiteUrl: "https://barberomillonario.com",

  // ---- Social Links ----
  social: {
    tiktok: "https://www.tiktok.com/@barberomillonario",
    instagram: "https://www.instagram.com/barberomillonariooficial",
    instagramPersonal: "https://www.instagram.com/stivendiaz_96",
    youtube: "https://www.youtube.com/@barberomillonario",
  },

  // ---- Social Handles (display) ----
  handles: {
    tiktok: "@barberomillonario",
    instagram: "@barberomillonariooficial",
    instagramPersonal: "@stivendiaz_96",
    youtube: "@barberomillonario",
  },

  // ---- Social Stats ----
  stats: {
    tiktok: "300K+",
    instagram: "26K+",
    youtube: "33K+",
    clients: "5,000+",
  },

  // ---- Services ----
  services: [
    {
      id: "corte-vip",
      nameEs: "Corte VIP",
      nameEn: "VIP Haircut",
      descEs: "Corte personalizado premium con consulta de estilo",
      descEn: "Premium personalized haircut with style consultation",
      priceCOP: 250000,
      priceUSD: 60,
      duration: 45,
      image: "/images/service-haircut.jpg",
    },
    {
      id: "barba-premium",
      nameEs: "Barba Premium",
      nameEn: "Premium Beard",
      descEs: "Perfilado, afeitado y tratamiento de barba",
      descEn: "Beard trim, shave, and treatment",
      priceCOP: 120000,
      priceUSD: 30,
      duration: 30,
      image: "/images/service-beard.jpg",
    },
    {
      id: "combo-completo",
      nameEs: "Combo Completo",
      nameEn: "Full Combo",
      descEs: "Corte + Barba + Limpieza Facial",
      descEn: "Haircut + Beard + Facial Cleanse",
      priceCOP: 350000,
      priceUSD: 85,
      duration: 75,
      image: "/images/service-combo.jpg",
    },
    {
      id: "limpieza-facial",
      nameEs: "Limpieza Facial",
      nameEn: "Facial Cleanse",
      descEs: "Mascara negra + tratamiento facial",
      descEn: "Black mask + facial treatment",
      priceCOP: 100000,
      priceUSD: 25,
      duration: 20,
      image: "/images/service-facial.jpg",
    },
    {
      id: "experiencia-millonario",
      nameEs: "Experiencia Millonario",
      nameEn: "Millionaire Experience",
      descEs:
        "El paquete completo: corte, barba, facial, masaje de cuero cabelludo, productos premium",
      descEn:
        "The full package: cut, beard, facial, scalp massage, premium products",
      priceCOP: 500000,
      priceUSD: 120,
      duration: 120,
      image: "/images/service-vip.jpg",
      featured: true,
    },
  ],

  // ---- Coverage Areas ----
  coverageAreas: [
    "El Poblado",
    "Laureles",
    "Envigado",
    "Sabaneta",
    "La Estrella",
    "Las Palmas",
    "Manila",
    "Astorga",
  ],

  // ---- Testimonials (Real Google Reviews) ----
  testimonials: [
    {
      id: 1,
      nameEs: "Robert F.",
      nameEn: "Robert F.",
      quoteEs:
        "Barbero Millonario redefine lo que significa cortarse el pelo en Medellin. Un servicio que llega a tu casa, siempre puntual, con resultados tan perfectos que te miras dos veces al espejo. Esta no es solo una peluqueria, es una experiencia premium.",
      quoteEn:
        "Barbero Millonario redefines what it means to get a haircut in Medellin. A service that comes to your home, always on time, with results so sharp they'll make you double-take in the mirror. This isn't just a haircut - it's a premium experience. The gold standard.",
      rating: 5,
      serviceEs: "Corte VIP a Domicilio",
      serviceEn: "VIP Mobile Haircut",
    },
    {
      id: 2,
      nameEs: "Josh E.",
      nameEn: "Josh E.",
      quoteEs:
        "Sin duda el mejor barbero en Colombia. Vengo desde 2019 y siempre fue dificil encontrar alguien que me corte exactamente como quiero. Lo que mas me gusta es que vienen directo a tu casa, lo cual me ahorra mucho tiempo.",
      quoteEn:
        "Hands down the best barber in Colombia. I've been coming since 2019 and it was always hard to find someone who cuts my hair exactly how I want. The best part is they come directly to your house which saves me a lot of time.",
      rating: 5,
      serviceEs: "Corte VIP",
      serviceEn: "VIP Haircut",
    },
    {
      id: 3,
      nameEs: "Matthew C.",
      nameEn: "Matthew C.",
      quoteEs:
        "El barbero millonario es el mejor del juego. Si estas en Medellin NECESITAS cortarte con el. Vino a mi casa, me sorprendio con productos y regalos, y hace un trabajo excepcional con pelo, barba, todo. Super recomendado!",
      quoteEn:
        "The billionaire barber is the best in the game. If you're in Medellin you NEED to get your haircut by him. He came to my house, surprised me with hair products and gifts, and does an exceptional job with hair, beards, etc. Highly recommend!",
      rating: 5,
      serviceEs: "Experiencia Millonario",
      serviceEn: "Millionaire Experience",
    },
    {
      id: 4,
      nameEs: "Daniel G.",
      nameEn: "Daniel G.",
      quoteEs:
        "Vine desde Miami con altas expectativas por mis cortes semanales alla, y el absolutamente cumplio! Va directo a tu ubicacion. Su trabajo con tijera es preciso y sus degradados son increiblemente suaves.",
      quoteEn:
        "I came from Miami with high expectations for my weekly cuts back home, and he absolutely delivered! He comes directly to your location. His scissor work is precise, and his fades are incredibly smooth.",
      rating: 5,
      serviceEs: "Corte VIP",
      serviceEn: "VIP Haircut",
    },
    {
      id: 5,
      nameEs: "Mike I.",
      nameEn: "Mike I.",
      quoteEs:
        "Una experiencia como ninguna otra. Me he cortado con los mejores barberos sin importar la ciudad o pais. De NYC a MIA, ahora en el INCREIBLE MEDELLIN. Verdaderamente una experiencia VIP. Supero todas mis expectativas.",
      quoteEn:
        "An experience like none other. I've been getting cuts with only the finest barbers no matter what city or country. From NYC to MIA, now in the AMAZING MEDELLIN. Truly a VIP experience. Went above and beyond my expectations.",
      rating: 5,
      serviceEs: "Combo Completo",
      serviceEn: "Full Combo",
    },
    {
      id: 6,
      nameEs: "Tevin W.",
      nameEn: "Tevin W.",
      quoteEs:
        "Era mi primera vez en Medellin y necesitaba un corte urgente. Su servicio fue increible, se lo recomiendo a todos. Se tomo su tiempo para hacer todo bien. Un tipo genial que incluso me enseno un poco de espanol!",
      quoteEn:
        "It was my first time in Medellin and I needed a haircut bad. His service was amazing, I recommend him to everyone. He took his time to do everything right. Really cool guy who even taught me a little Spanish!",
      rating: 5,
      serviceEs: "Corte VIP a Domicilio",
      serviceEn: "VIP Mobile Haircut",
    },
    {
      id: 7,
      nameEs: "Jesus Q.",
      nameEn: "Jesus Q.",
      quoteEs:
        "Contrate al barbero millonario durante mis vacaciones en Medellin y fue una experiencia excelente. El corte y la barba quedaron increiblemente bien. Ademas me dio recomendaciones de lugares para visitar. Calidad, profesionalismo y muy buena vibra.",
      quoteEn:
        "I hired the millionaire barber during my vacation in Medellin and it was an excellent experience. The haircut and beard turned out incredibly well. He also gave me recommendations for places to visit. Quality, professionalism, and great vibes.",
      rating: 5,
      serviceEs: "Combo Completo",
      serviceEn: "Full Combo",
    },
    {
      id: 8,
      nameEs: "Glenn B.",
      nameEn: "Glenn B.",
      quoteEs:
        "He ido a muchos barberos en Medellin y honestamente no se por que perdi el tiempo en otros lados. Este tipo es increible - precision, estilo y consistencia cada vez. Nunca dejare que otro me toque el pelo. Un verdadero artista.",
      quoteEn:
        "I've been to a lot of barbers in Medellin, and I don't know why I wasted my time anywhere else. This guy absolutely kills it - precision, style, and consistency every time. I'll never let anyone else touch my hair again. A true artist.",
      rating: 5,
      serviceEs: "Corte VIP",
      serviceEn: "VIP Haircut",
    },
    {
      id: 9,
      nameEs: "Connor M.",
      nameEn: "Connor M.",
      quoteEs:
        "Super profesional y talentoso. Vino a nuestra casa en Medellin y nos corto a mi amigo y a mi. Degradado perfecto y texturizado. Trabajo con la inspiracion que le dimos y agrego su propio estilo. Gran corte y gran tipo.",
      quoteEn:
        "Super professional and talented. He came to our house in Medellin and gave cuts to my friend and me. Perfect fade and texturing. He worked with the inspo we gave him and added his own style. Great cut and great guy.",
      rating: 5,
      serviceEs: "Corte VIP",
      serviceEn: "VIP Haircut",
    },
    {
      id: 10,
      nameEs: "Daniel P.",
      nameEn: "Daniel P.",
      quoteEs:
        "No confio en muchos barberos con mi pelo, pero Stiven es de clase mundial. Gracias como siempre.",
      quoteEn:
        "I don't trust many barbers with my hair, but Stiven is nothing but world class. Thank you like always.",
      rating: 5,
      serviceEs: "Corte VIP",
      serviceEn: "VIP Haircut",
    },
    {
      id: 11,
      nameEs: "Oscar O.",
      nameEn: "Oscar O.",
      quoteEs:
        "Excelente trato y servicio. Mucha atencion a cada detalle, sin duda mi barbero de confianza en Medellin.",
      quoteEn:
        "Excellent service and treatment. Great attention to detail, definitely my trusted barber in Medellin.",
      rating: 5,
      serviceEs: "Corte VIP",
      serviceEn: "VIP Haircut",
    },
    {
      id: 12,
      nameEs: "Simon G.",
      nameEn: "Simon G.",
      quoteEs:
        "Excelente servicio, me senti muy comodo. Super parchado, hablamos de todo pero sobre todo muy profesional. Recomendadisimo!",
      quoteEn:
        "Excellent service, I felt very comfortable. Super chill, we talked about everything but above all, very professional. Highly recommended!",
      rating: 5,
      serviceEs: "Corte VIP",
      serviceEn: "VIP Haircut",
    },
  ],

  // ---- FAQ ----
  faq: [
    {
      questionEs: "Que zonas cubres?",
      questionEn: "What areas do you cover?",
      answerEs:
        "Cubro El Poblado, Laureles, Envigado, Sabaneta, La Estrella, Las Palmas y zonas cercanas. Para otras zonas, consultar disponibilidad por WhatsApp.",
      answerEn:
        "I cover El Poblado, Laureles, Envigado, Sabaneta, La Estrella, Las Palmas, and surrounding areas. For other areas, check availability via WhatsApp.",
    },
    {
      questionEs: "Con cuanta anticipacion debo reservar?",
      questionEn: "How far in advance should I book?",
      answerEs:
        "Recomiendo reservar con al menos 24 horas de anticipacion. Para fines de semana y dias festivos, 2-3 dias antes es ideal.",
      answerEn:
        "I recommend booking at least 24 hours in advance. For weekends and holidays, 2-3 days ahead is ideal.",
    },
    {
      questionEs: "Que formas de pago aceptas?",
      questionEn: "What forms of payment do you accept?",
      answerEs:
        "Acepto efectivo, Nequi, Daviplata, y transferencia bancaria. El pago se realiza al finalizar el servicio.",
      answerEn:
        "I accept cash, Nequi, Daviplata, and bank transfer. Payment is made after the service is completed.",
    },
    {
      questionEs: "Trabajas con grupos o eventos?",
      questionEn: "Do you work with groups or events?",
      answerEs:
        "Si, ofrezco servicio para grupos, despedidas de soltero, bodas y eventos corporativos. Contactame por WhatsApp para cotizacion.",
      answerEn:
        "Yes, I offer services for groups, bachelor parties, weddings, and corporate events. Contact me via WhatsApp for a quote.",
    },
    {
      questionEs: "Que productos usas?",
      questionEn: "What products do you use?",
      answerEs:
        "Uso productos profesionales de alta gama. Cada producto es seleccionado para garantizar el mejor resultado y cuidado del cabello y barba.",
      answerEn:
        "I use high-end professional products. Each product is selected to guarantee the best results and care for hair and beard.",
    },
    {
      questionEs: "Puedo reservar como regalo para alguien?",
      questionEn: "Can I book as a gift for someone?",
      answerEs:
        "Claro que si. Puedes reservar una sesion como regalo. Contactame por WhatsApp y te ayudo a coordinarlo. Es un regalo unico y memorable.",
      answerEn:
        "Of course! You can book a session as a gift. Contact me via WhatsApp and I'll help you coordinate it. It's a unique and memorable gift.",
    },
  ],

  // ---- Gallery images ----
  gallery: [
    { id: 1, src: "/images/gallery-3.jpg", alt: "Charcoal Face Treatment" },
    { id: 3, src: "/images/gallery-5.jpg", alt: "Luxury Penthouse Cut" },
    { id: 4, src: "/images/gallery-6.jpg", alt: "Premium Beard Work" },
    { id: 5, src: "/images/gallery-7.jpg", alt: "Rooftop VIP Experience" },
    { id: 7, src: "/images/gallery-9.jpg", alt: "Braided Style Result" },
    { id: 11, src: "/images/gmb-1.jpg", alt: "Barbero Millonario Style" },
    { id: 12, src: "/images/gmb-2.jpg", alt: "Premium Haircut Result" },
    { id: 13, src: "/images/gmb-3.jpg", alt: "VIP Barber Experience" },
    { id: 14, src: "/images/gmb-4.jpg", alt: "Fresh Fade Cut" },
    { id: 15, src: "/images/gmb-5.jpg", alt: "Client Transformation" },
    { id: 16, src: "/images/gmb-6.jpg", alt: "Signature Barbero Look" },
    { id: 17, src: "/images/gmb-7.jpg", alt: "Barbero Millonario Portfolio" },
  ],
};

// ---- Helper: Build WhatsApp URL ----
export function getWhatsAppUrl(serviceName?: string, lang: "es" | "en" = "es"): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (lang === "en") {
    if (serviceName) {
      const msg = encodeURIComponent(
        `Hi! I'd like to book: ${serviceName}. Preferred date: ____ Location: ____`
      );
      return `${base}?text=${msg}`;
    }
    const msg = encodeURIComponent(
      "Hi! I'd like to book an appointment with Barbero Millonario. Service: ____ Preferred date: ____ Location: ____"
    );
    return `${base}?text=${msg}`;
  }
  if (serviceName) {
    const msg = encodeURIComponent(
      `Hola! Quiero reservar: ${serviceName}. Fecha preferida: ____ Ubicacion: ____`
    );
    return `${base}?text=${msg}`;
  }
  const msg = encodeURIComponent(
    "Hola! Quiero reservar una cita con Barbero Millonario. Servicio: ____ Fecha preferida: ____ Ubicacion: ____"
  );
  return `${base}?text=${msg}`;
}

// ---- Helper: Format COP price ----
export function formatCOP(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
