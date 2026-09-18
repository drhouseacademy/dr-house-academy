'use client';

const stats = [
  { label: 'Enseignants', value: '12', change: '+2 ce mois', color: '#00B4D8' },
  { label: 'Étudiants', value: '2 547', change: '+124 ce mois', color: '#E63946' },
  { label: 'Cours', value: '89', change: '+5 cette semaine', color: '#22C55E' },
  { label: 'Revenus', value: '485 000 DA', change: '+32 000 DA ce mois', color: '#F59E0B' },
];

const recentPayments = [
  { student: 'Ahmed B.', plan: 'Pack 2ème année', amount: '2 500 DA', status: 'pending', date: '17/09/2026' },
  { student: 'Sara K.', plan: 'Anatomie - 1ère année', amount: '800 DA', status: 'approved', date: '16/09/2026' },
  { student: 'Yacine M.', plan: 'Pack 1ère année', amount: '2 000 DA', status: 'pending', date: '16/09/2026' },
  { student: 'Nadia H.', plan: 'Physiologie - 2ème année', amount: '1 000 DA', status: 'rejected', date: '15/09/2026' },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Dashboard
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Vue d&apos;ensemble de la plateforme
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-5 rounded-xl border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </span>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.color }} />
              </div>
            </div>
            <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              {stat.value}
            </div>
            <div className="text-xs mt-1" style={{ color: '#22C55E' }}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <div
          className="rounded-xl border"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              Paiements récents
            </h2>
            <a href="/admin/payments" className="text-sm font-medium text-cyan">
              Voir tout
            </a>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
            {recentPayments.map((payment, i) => (
              <div key={i} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                    {payment.student}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {payment.plan} — {payment.date}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {payment.amount}
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor:
                        payment.status === 'approved' ? 'rgba(34,197,94,0.1)' :
                        payment.status === 'rejected' ? 'rgba(230,57,70,0.1)' :
                        'rgba(245,158,11,0.1)',
                      color:
                        payment.status === 'approved' ? '#22C55E' :
                        payment.status === 'rejected' ? '#E63946' :
                        '#F59E0B',
                    }}
                  >
                    {payment.status === 'approved' ? 'Approuvé' :
                     payment.status === 'rejected' ? 'Rejeté' : 'En attente'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div
          className="rounded-xl border"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="p-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              Actions rapides
            </h2>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            <a
              href="/admin/teachers"
              className="p-4 rounded-lg border text-center transition-colors hover:bg-[var(--bg-card-hover)]"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="#00B4D8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Ajouter un enseignant
              </span>
            </a>
            <a
              href="/admin/courses"
              className="p-4 rounded-lg border text-center transition-colors hover:bg-[var(--bg-card-hover)]"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="#E63946">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Nouveau cours
              </span>
            </a>
            <a
              href="/admin/payments"
              className="p-4 rounded-lg border text-center transition-colors hover:bg-[var(--bg-card-hover)]"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="#F59E0B">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Vérifier paiements
              </span>
            </a>
            <a
              href="/admin/users"
              className="p-4 rounded-lg border text-center transition-colors hover:bg-[var(--bg-card-hover)]"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="#22C55E">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                Gérer utilisateurs
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
