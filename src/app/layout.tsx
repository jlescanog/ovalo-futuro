import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ovalo Futuro | Innovación Educativa",
  description: "Cursos, mentorías y programas de becas para el futuro de la educación.",
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
        {children}
      </body>
    </html>
  );
}
