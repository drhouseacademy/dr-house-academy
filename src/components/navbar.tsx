'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './theme-provider';
import Logo from './logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(15, 23, 36, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo size={40} />
            <div className="flex flex-col">
              <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                <span style={{ color: '#E63946' }}>Dr</span>{' '}
                <span>House</span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase" style={{ color: 'var(--text-secondary)' }}>
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/cours"
              className="text-sm font-medium transition-colors hover:text-cyan"
              style={{ color: 'var(--text-secondary)' }}
            >
              Cours
            </Link>
            <Link
              href="/a-propos"
              className="text-sm font-medium transition-colors hover:text-cyan"
              style={{ color: 'var(--text-secondary)' }}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-cyan"
              style={{ color: 'var(--text-secondary)' }}
            >
              Contact
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-primary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-primary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Auth buttons */}
            <Link
              href="/connexion"
              className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className="inline-flex text-sm font-medium px-4 py-2 rounded-lg text-white transition-colors"
              style={{ backgroundColor: '#00B4D8' }}
            >
              S&apos;inscrire
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-primary)' }}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex flex-col gap-3">
              <Link href="/cours" className="text-sm font-medium px-3 py-2 rounded-lg" style={{ color: 'var(--text-primary)' }}>
                Cours
              </Link>
              <Link href="/packs" className="text-sm font-medium px-3 py-2 rounded-lg" style={{ color: 'var(--text-primary)' }}>
                Packs
              </Link>
              <Link href="/a-propos" className="text-sm font-medium px-3 py-2 rounded-lg" style={{ color: 'var(--text-primary)' }}>
                À propos
              </Link>
              <Link href="/contact" className="text-sm font-medium px-3 py-2 rounded-lg" style={{ color: 'var(--text-primary)' }}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
