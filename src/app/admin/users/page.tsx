'use client';

import { useState } from 'react';

const demoUsers = [
  { id: 1, name: 'Ahmed Benali', email: 'ahmed@gmail.com', role: 'student', courses: 3, joinDate: '10/09/2026', status: 'active' },
  { id: 2, name: 'Sara Khediri', email: 'sara@gmail.com', role: 'student', courses: 5, joinDate: '08/09/2026', status: 'active' },
  { id: 3, name: 'Yacine Mansouri', email: 'yacine@gmail.com', role: 'student', courses: 2, joinDate: '12/09/2026', status: 'active' },
  { id: 4, name: 'Nadia Hamidi', email: 'nadia@gmail.com', role: 'student', courses: 1, joinDate: '14/09/2026', status: 'banned' },
];

export default function UsersPage() {
  const [search, setSearch] = useState('');

  const filtered = demoUsers.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Utilisateurs
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          {demoUsers.length} utilisateurs inscrits
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-2.5 rounded-lg border text-sm"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-primary)',
          }}
        />
      </div>

      {/* Users Table */}
      <div
        className="rounded-xl border overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase" style={{ color: 'var(--text-muted)' }}>Utilisateur</th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase" style={{ color: 'var(--text-muted)' }}>Rôle</th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase" style={{ color: 'var(--text-muted)' }}>Cours</th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase" style={{ color: 'var(--text-muted)' }}>Inscription</th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase" style={{ color: 'var(--text-muted)' }}>Statut</th>
                <th className="text-right px-4 py-3 text-xs font-medium uppercase" style={{ color: 'var(--text-muted)' }}>Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-[var(--bg-card-hover)] transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium"
                        style={{ backgroundColor: 'rgba(0,180,216,0.1)', color: '#00B4D8' }}
                      >
                        {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{user.name}</div>
                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{
                        backgroundColor: user.role === 'teacher' ? 'rgba(0,180,216,0.1)' : 'rgba(148,163,184,0.1)',
                        color: user.role === 'teacher' ? '#00B4D8' : 'var(--text-muted)',
                      }}
                    >
                      {user.role === 'teacher' ? 'Enseignant' : 'Étudiant'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-primary)' }}>{user.courses}</td>
                  <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-muted)' }}>{user.joinDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{
                        backgroundColor: user.status === 'active' ? 'rgba(34,197,94,0.1)' : 'rgba(230,57,70,0.1)',
                        color: user.status === 'active' ? '#22C55E' : '#E63946',
                      }}
                    >
                      {user.status === 'active' ? 'Actif' : 'Banni'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-sm font-medium text-cyan">
                      Détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
