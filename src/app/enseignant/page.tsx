'use client';

const stats = [
  { label: 'Mes cours', value: '8', color: '#00B4D8' },
  { label: 'Total leçons', value: '124', color: '#E63946' },
  { label: 'Vues totales', value: '3 450', color: '#22C55E' },
  { label: 'Étudiants', value: '287', color: '#F59E0B' },
];

const recentLessons = [
  { title: 'Anatomie du coeur - Partie 2', course: 'Anatomie Générale', views: 45, date: '17/09/2026' },
  { title: 'Système nerveux central', course: 'Anatomie Générale', views: 38, date: '16/09/2026' },
  { title: 'Métabolisme cellulaire', course: 'Physiologie Cellulaire', views: 52, date: '15/09/2026' },
  { title: 'Structure de l\'ADN', course: 'Biochimie', views: 31, date: '14/09/2026' },
];

export default function TeacherDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Bonjour, Dr. Amira 👋
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Voici un aperçu de votre activité
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-5 rounded-xl border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {stat.label}
            </span>
            <div className="text-2xl font-bold mt-1" style={{ color: stat.color }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Lessons */}
      <div
        className="rounded-xl border"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            Leçons récentes
          </h2>
          <a href="/enseignant/courses" className="text-sm font-medium" style={{ color: '#E63946' }}>
            Voir tout
          </a>
        </div>
        <div className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
          {recentLessons.map((lesson, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(230,57,70,0.1)' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#E63946">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {lesson.title}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {lesson.course} — {lesson.date}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {lesson.views} vues
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
