import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ovalo Futuro | Innovación Educativa",
    template: "%s | Ovalo Futuro",
  },
  description: "Cursos, mentorías y programas de becas para el futuro de la educación.",
  keywords: ["educación", "cursos", "mentorías", "becas", "tecnología", "IA"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDF8F3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-crema text-texto-oscuro selection:bg-coral-xs selection:text-coral font-mono">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
