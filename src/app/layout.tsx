import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barberomillonario.com"),
  title: "Barbero Millonario | #1 VIP Barber Experience | Medellin, Colombia",
  description:
    "Servicio de barberia VIP a domicilio en Medellin. Cortes premium, barba, limpieza facial. Reserva tu cita por WhatsApp. The #1 VIP mobile barber in Medellin.",
  keywords: [
    "barbero medellin",
    "barber medellin",
    "barbero a domicilio",
    "mobile barber medellin",
    "VIP barber",
    "barbero millonario",
    "corte de pelo medellin",
    "haircut medellin",
    "el poblado barber",
  ],
  openGraph: {
    title: "Barbero Millonario | #1 VIP Barber Experience",
    description:
      "Servicio de barberia VIP a domicilio en Medellin. Book your VIP experience via WhatsApp.",
    type: "website",
    locale: "es_CO",
    alternateLocale: "en_US",
    siteName: "Barbero Millonario",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barbero Millonario - VIP Barber Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbero Millonario | #1 VIP Barber in Medellin",
    description:
      "Luxury mobile barber service in Medellin. Book your VIP experience.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0A0A" />
        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Barbero Millonario",
              description:
                "Servicio de barberia VIP a domicilio en Medellin, Colombia. The #1 VIP mobile barber experience.",
              image: "https://barberomillonario.com/images/og-image.jpg",
              url: "https://barberomillonario.com",
              telephone: "+573242824201",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Medellin",
                addressRegion: "Antioquia",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.2127886,
                longitude: -75.5681464,
              },
              areaServed: {
                "@type": "City",
                name: "Medellin",
                containedInPlace: {
                  "@type": "Country",
                  name: "Colombia",
                },
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "08:00",
                closes: "20:00",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "50",
                bestRating: "5",
              },
              serviceType: [
                "Haircut",
                "Beard Trim",
                "Facial Treatment",
                "Mobile Barber Service",
              ],
              sameAs: [
                "https://www.tiktok.com/@barberomillonario",
                "https://www.instagram.com/barberomillonariooficial",
                "https://www.youtube.com/@barberomillonario",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-black-deep text-white-soft`}
      >
        {/* Grain overlay */}
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
