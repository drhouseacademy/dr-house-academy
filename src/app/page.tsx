import Link from 'next/link';

const stats = [
  { label: 'Étudiants', value: '2 500+' },
  { label: 'Cours', value: '150+' },
  { label: 'Enseignants', value: '15+' },
  { label: 'Taux de réussite', value: '94%' },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Cours vidéo HD',
    description: 'Cours enregistrés par des enseignants experts, accessibles à tout moment.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Par promotion',
    description: 'Cours organisés par année académique et spécialité médicale.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Paiement sécurisé',
    description: 'Paiement par Baridi Mod, vérification manuelle pour votre sécurité.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Accès instantané',
    description: 'Commencez à étudier immédiatement après validation de votre paiement.',
  },
];

const years = [
  { name: '1ère année', slug: '1ere-annee', color: '#00B4D8' },
  { name: '2ème année', slug: '2eme-annee', color: '#48CAE4' },
  { name: '3ème année', slug: '3eme-annee', color: '#0096B7' },
  { name: '4ème année', slug: '4eme-annee', color: '#E63946' },
  { name: '5ème année', slug: '5eme-annee', color: '#C1121F' },
  { name: '6ème année', slug: '6eme-annee', color: '#1B2838' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0F1724 0%, #1A2332 50%, #0F1724 100%)',
          }}
        />
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 right-0 w-96 h-96" viewBox="0 0 100 100">
            <path d="M30 15 L85 50 L30 85 Z" fill="#00B4D8" />
          </svg>
          <svg className="absolute bottom-0 left-0 w-64 h-64" viewBox="0 0 100 100">
            <polyline points="0,50 20,50 25,30 30,70 35,40 40,50 60,50" stroke="#E63946" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">Plateforme #1 en Algérie</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Votre réussite en{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00B4D8, #48CAE4)' }}>
                médecine
              </span>{' '}
              commence ici
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Cours de qualité enseignés par des experts. Accédez à tout moment, depuis n&apos;importe où.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cours"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white font-medium transition-all hover:scale-105"
                style={{ backgroundColor: '#00B4D8' }}
              >
                Explorer les cours
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/packs"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium border transition-all hover:scale-105"
                style={{
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              >
                Voir les packs
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--bg-primary)" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: '#00B4D8' }}>
                  {stat.value}
                </div>
                <div className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECG Divider */}
      <div className="ecg-divider" />

      {/* Academic Years */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Choisissez votre année
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Cours organisés par année académique
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {years.map((year) => (
              <Link
                key={year.slug}
                href={`/cours?year=${year.slug}`}
                className="group p-6 rounded-xl border transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${year.color}15` }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={year.color}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold group-hover:text-cyan transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {year.name}
                </h3>
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  Voir les cours →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Pourquoi Dr House Academy ?
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Tout ce dont vous avez besoin pour réussir
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(0, 180, 216, 0.1)', color: '#00B4D8' }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00B4D8, #0096B7)',
            }}
          >
            {/* Decorative ECG */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <polyline points="0,10 15,10 18,4 21,16 24,8 27,10 45,10 48,4 51,16 54,8 57,10 75,10 78,4 81,16 84,8 87,10 100,10" stroke="white" strokeWidth="0.5" fill="none" />
              </svg>
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à commencer ?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Rejoignez des milliers d&apos;étudiants qui font déjà confiance à Dr House Academy.
              </p>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ backgroundColor: '#E63946', color: 'white' }}
              >
                Créer un compte gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
