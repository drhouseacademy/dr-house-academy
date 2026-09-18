'use client';

const flaggedActivities = [
  { user: 'Ahmed B.', type: 'Multiple IPs', detail: '2 pays différents en 1 heure', severity: 'high', date: '17/09/2026 14:30' },
  { user: 'Sara K.', type: '3ème appareil', detail: 'Nouvel appareil détecté (limite: 2)', severity: 'medium', date: '17/09/2026 12:15' },
  { user: 'Yacine M.', type: 'Tentatives échouées', detail: '8 tentatives de connexion', severity: 'high', date: '16/09/2026 22:00' },
  { user: 'Nadia H.', type: 'Changement de mot de passe', detail: 'Depuis un nouvel appareil', severity: 'low', date: '16/09/2026 10:30' },
];

const securityLogs = [
  { event: 'Connexion réussie', user: 'Dr. Amira B.', ip: '192.168.1.1', date: '17/09/2026 09:00' },
  { event: '2FA configuré', user: 'Admin Principal', ip: '10.0.0.1', date: '17/09/2026 08:30' },
  { event: 'Enseignant promu', user: 'Admin Principal', ip: '10.0.0.1', date: '16/09/2026 15:00' },
  { event: 'Mot de passe réinitialisé', user: 'Sara K.', ip: '192.168.2.2', date: '16/09/2026 11:00' },
  { event: 'Compte banni', user: 'Admin Principal', ip: '10.0.0.1', date: '15/09/2026 14:00' },
];

export default function SecurityPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Sécurité
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Surveillance des activités et logs de sécurité
        </p>
      </div>

      {/* Flagged Activities */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
          <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Activités suspectes ({flaggedActivities.length})
        </h2>
        <div className="space-y-3">
          {flaggedActivities.map((activity, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border flex items-center justify-between"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                borderLeftColor: activity.severity === 'high' ? '#E63946' : activity.severity === 'medium' ? '#F59E0B' : '#22C55E',
                borderLeftWidth: '3px',
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: activity.severity === 'high' ? 'rgba(230,57,70,0.1)' : activity.severity === 'medium' ? 'rgba(245,158,11,0.1)' : 'rgba(34,197,94,0.1)',
                  }}
                >
                  {activity.severity === 'high' ? '🔴' : activity.severity === 'medium' ? '🟡' : '🟢'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {activity.user}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{
                        backgroundColor: activity.severity === 'high' ? 'rgba(230,57,70,0.1)' : activity.severity === 'medium' ? 'rgba(245,158,11,0.1)' : 'rgba(34,197,94,0.1)',
                        color: activity.severity === 'high' ? '#E63946' : activity.severity === 'medium' ? '#F59E0B' : '#22C55E',
                      }}
                    >
                      {activity.type}
                    </span>
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {activity.detail} — {activity.date}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded text-xs font-medium text-white" style={{ backgroundColor: '#E63946' }}>
                  Bloquer
                </button>
                <button className="px-3 py-1.5 rounded text-xs font-medium border" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                  Ignorer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Logs */}
      <div
        className="rounded-xl border"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="p-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            Logs de sécurité
          </h2>
        </div>
        <div className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
          {securityLogs.map((log, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {log.event}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {log.user} — IP: {log.ip}
                  </div>
                </div>
              </div>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {log.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
