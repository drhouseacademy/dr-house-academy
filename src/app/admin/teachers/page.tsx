'use client';

import { useState } from 'react';

const demoTeachers = [
  { id: 1, name: 'Dr. Amira Benali', email: 'amira@drhouse.dz', courses: 8, lessons: 124, status: 'active', joinDate: '01/09/2026' },
  { id: 2, name: 'Dr. Youcef Mansouri', email: 'youcef@drhouse.dz', courses: 6, lessons: 89, status: 'active', joinDate: '03/09/2026' },
  { id: 3, name: 'Dr. Sara Khediri', email: 'sara@drhouse.dz', courses: 5, lessons: 76, status: 'active', joinDate: '05/09/2026' },
  { id: 4, name: 'Dr. Karim Boudiaf', email: 'karim@drhouse.dz', courses: 4, lessons: 62, status: 'active', joinDate: '07/09/2026' },
  { id: 5, name: 'Dr. Nadia Hamidi', email: 'nadia@drhouse.dz', courses: 3, lessons: 45, status: 'pending', joinDate: '15/09/2026' },
];

export default function TeachersPage() {
  const [showPromoteModal, setShowPromoteModal] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Enseignants
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Gérer les comptes enseignants
          </p>
        </div>
        <button
          onClick={() => setShowPromoteModal(true)}
          className="px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"
          style={{ backgroundColor: '#00B4D8' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Promouvoir un enseignant
        </button>
      </div>

      {/* Teachers Table */}
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
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Enseignant
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Cours
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Leçons
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Statut
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Date d&apos;adhésion
                </th>
                <th className="text-right px-4 py-3 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
              {demoTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-[var(--bg-card-hover)] transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                        style={{ backgroundColor: 'rgba(0,180,216,0.1)', color: '#00B4D8' }}
                      >
                        {teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {teacher.name}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {teacher.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                    {teacher.courses}
                  </td>
                  <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                    {teacher.lessons}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: teacher.status === 'active' ? 'rgba(34,197,94,0.1)' : 'rgba(245,158,11,0.1)',
                        color: teacher.status === 'active' ? '#22C55E' : '#F59E0B',
                      }}
                    >
                      {teacher.status === 'active' ? 'Actif' : 'En attente'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {teacher.joinDate}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-1.5 rounded-lg transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                        title="Modifier"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        className="p-1.5 rounded-lg transition-colors text-red-500"
                        title="Rétrograder"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Promote Modal */}
      {showPromoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowPromoteModal(false)} />
          <div
            className="relative w-full max-w-md p-6 rounded-xl shadow-xl"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Promouvoir un enseignant
            </h2>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Entrez l&apos;e-mail d&apos;un utilisateur existant pour lui donner le rôle d&apos;enseignant.
            </p>
            <input
              type="email"
              placeholder="email@exemple.com"
              className="w-full px-4 py-3 rounded-lg border text-sm mb-4"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowPromoteModal(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium border"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
                }}
              >
                Annuler
              </button>
              <button
                onClick={() => setShowPromoteModal(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white"
                style={{ backgroundColor: '#00B4D8' }}
              >
                Promouvoir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
