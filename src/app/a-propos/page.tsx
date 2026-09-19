import Logo from '@/components/logo';

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            À propos de Dr House Academy
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Notre mission est de fournir une formation médicale de haute qualité aux étudiants algériens.
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Notre mission
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Dr House Academy est née de la volonté de combler le fossé entre l&apos;enseignement médical traditionnel et les méthodes pédagogiques modernes. Nous croyons que chaque étudiant mérite un accès à des cours de qualité, dispensés par des experts reconnus.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Notre plateforme offre des cours vidéo HD, des supports de révision et un accompagnement personnalisé pour aider les étudiants à réussir dans leur parcours médical.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 flex items-center justify-center"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <Logo size={200} />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Excellence',
                description: 'Nous visons l&apos;excellence dans chaque cours, chaque vidéo, chaque interaction.',
                icon: '⭐',
              },
              {
                title: 'Accessibilité',
                description: 'La qualité de l&apos;éducation ne devrait pas être un privilège. Nos prix sont adaptés aux étudiants.',
                icon: '🌍',
              },
              {
                title: 'Innovation',
                description: 'Nous utilisons les dernières technologies pour offrir la meilleure expérience d&apos;apprentissage.',
                icon: '💡',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl border text-center"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {value.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Notre équipe
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Nos enseignants sont des professionnels expérimentés, passionnés par l&apos;enseignement et dévoués à votre réussite.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-4 rounded-xl border text-center"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0,180,216,0.1)' }}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00B4D8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                  Enseignant {i}
                </h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Spécialité
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
