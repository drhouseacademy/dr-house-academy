'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { register, signInWithGoogle } from '@/lib/auth/actions';
import Logo from '@/components/logo';

function RegisterForm() {
  const searchParams = useSearchParams();
  const showSuccess = searchParams.get('success') === 'true';

  return (
    <div className="min-h-[80vh] flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex flex-1 items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-md p-8 text-center">
          <div className="mx-auto mb-8">
            <Logo size={200} />
          </div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Rejoignez Dr House Academy
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Commencez votre parcours médical dès aujourd&apos;hui.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Vérifiez votre e-mail
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Nous vous avons envoyé un lien de confirmation. Vérifiez votre boîte de réception.
              </p>
              <Link href="/connexion" className="mt-6 inline-block px-6 py-2 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: '#00B4D8' }}>
                Retour à la connexion
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Créer un compte
              </h1>
              <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                Rejoignez des milliers d&apos;étudiants en médecine.
              </p>

              <form action={register} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-cyan focus:border-transparent"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                    placeholder="Ahmed Benali"
                  />
                </div>

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
                    minLength={8}
                    className="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-cyan focus:border-transparent"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                    placeholder="8 caractères minimum"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-medium transition-all hover:scale-[1.02]"
                  style={{ backgroundColor: '#00B4D8' }}
                >
                  Créer mon compte
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

                <div className="mt-4">
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
                      Continuer avec Google
                    </button>
                  </form>
                </div>
              </div>

              <p className="mt-8 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                Vous avez déjà un compte ?{' '}
                <Link href="/connexion" className="font-medium text-cyan hover:underline">
                  Se connecter
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  );
}
