"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-crema/80 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-navy font-bold text-xl tracking-tighter">
          OVALO FUTURO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/cursos" className="text-texto-muted hover:text-navy transition-colors text-sm font-medium">
            CURSOS
          </Link>
          <Link href="/mentorias" className="text-texto-muted hover:text-navy transition-colors text-sm font-medium">
            MENTORIAS
          </Link>
          <Link href="/becas" className="text-texto-muted hover:text-navy transition-colors text-sm font-medium">
            BECAS
          </Link>
          <Link href="/escuela-alternativa" className="text-texto-muted hover:text-navy transition-colors text-sm font-medium">
            ESCUELA ALTERNATIVA
          </Link>
          <Link 
            href="/contacto" 
            className="bg-coral hover:bg-coral-claro text-blanco px-5 py-2 text-sm font-bold transition-all"
          >
            CONTACTO
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-navy hover:text-coral transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-crema border-b border-navy/5 absolute top-20 left-0 w-full shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link 
              href="/cursos" 
              onClick={() => setIsMenuOpen(false)}
              className="text-navy font-medium text-lg py-2 border-b border-navy/5 hover:text-coral transition-colors"
            >
              CURSOS
            </Link>
            <Link 
              href="/mentorias" 
              onClick={() => setIsMenuOpen(false)}
              className="text-navy font-medium text-lg py-2 border-b border-navy/5 hover:text-coral transition-colors"
            >
              MENTORIAS
            </Link>
            <Link 
              href="/becas" 
              onClick={() => setIsMenuOpen(false)}
              className="text-navy font-medium text-lg py-2 border-b border-navy/5 hover:text-coral transition-colors"
            >
              BECAS
            </Link>
            <Link 
              href="/escuela-alternativa" 
              onClick={() => setIsMenuOpen(false)}
              className="text-navy font-medium text-lg py-2 border-b border-navy/5 hover:text-coral transition-colors"
            >
              ESCUELA ALTERNATIVA
            </Link>
            <Link 
              href="/contacto" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-coral hover:bg-coral-claro text-blanco text-center px-5 py-3 text-base font-bold mt-4 transition-colors"
            >
              CONTACTO
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
