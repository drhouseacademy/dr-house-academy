'use client';

import Link from 'next/link';
import { useState } from 'react';
import { login, signInWithGoogle } from '@/lib/auth/actions';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-[80vh] flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Bon Retour 👋
          </h1>
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Continuez votre apprentissage. Chaque jour est une nouvelle occasion.
          </p>

          <form action={login} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                E-mail
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-cyan focus:border-transparent"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-cyan focus:border-transparent"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-end">
              <Link href="/mot-de-passe-oublie" className="text-sm font-medium text-cyan hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-medium transition-all hover:scale-[1.02] disabled:opacity-50"
              style={{ backgroundColor: '#00B4D8' }}
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: 'var(--border-color)' }} />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-muted)' }}>
                  Ou
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <form action={signInWithGoogle}>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg border font-medium text-sm flex items-center justify-center gap-2 transition-colors hover:bg-[var(--bg-card-hover)]"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
              </form>

              <button
                type="button"
                className="w-full py-2.5 rounded-lg border font-medium text-sm flex items-center justify-center gap-2 transition-colors hover:bg-[var(--bg-card-hover)]"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Apple
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
            Vous n&apos;avez pas de compte ?{' '}
            <Link href="/inscription" className="font-medium text-cyan hover:underline">
              S&apos;inscrire
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:flex flex-1 items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-md p-8 text-center">
          <svg width="200" height="200" viewBox="0 0 100 100" className="mx-auto mb-8 animate-heartbeat">
            <path d="M30 15 L85 50 L30 85 Z" fill="#00B4D8" opacity="0.2" />
            <path d="M45 35 C45 25 55 20 60 30 L60 55 C60 65 50 70 45 60" stroke="#E63946" strokeWidth="3" fill="none" />
            <circle cx="45" cy="35" r="4" fill="#E63946" />
            <circle cx="60" cy="55" r="3" fill="#E63946" />
            <polyline points="25,50 35,50 38,35 42,65 46,40 50,50 75,50" stroke="#E63946" strokeWidth="2" fill="none" />
          </svg>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Dr House Academy
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Votre partenaire de confiance pour la réussite en médecine.
          </p>
        </div>
      </div>
    </div>
  );
}
