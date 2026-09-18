'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('Dr House Academy');
  const [siteDescription, setSiteDescription] = useState('Plateforme de formation médicale de haute qualité');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Paramètres
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Configuration de la plateforme
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* General Settings */}
        <div
          className="rounded-xl border"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="p-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              Général
            </h2>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                Nom du site
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border text-sm"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                Description
              </label>
              <textarea
                rows={3}
                value={siteDescription}
                onChange={(e) => setSiteDescription(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border text-sm resize-none"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>
          </div>
        </div>

        {/* 2FA Settings */}
        <div
          className="rounded-xl border"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="p-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              Authentification à deux facteurs (2FA)
            </h2>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  Google Authenticator
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Code TOTP changeant toutes les 30 secondes
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                Activé
              </span>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <div className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                QR Code pour Google Authenticator :
              </div>
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-400">QR Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Access */}
        <div
          className="rounded-xl border"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="p-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              Accès admin
            </h2>
          </div>
          <div className="p-4">
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              En tant que propriétaire, vous avez un accès complet à tous les paramètres et contenus de la plateforme. Vous pouvez modifier les cours créés par les enseignants.
            </p>
            <div className="p-3 rounded-lg border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  Propriétaire — Accès total
                </span>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Override sur tous les contenus. Toutes les modifications sont enregistrées dans l&apos;audit trail.
              </p>
            </div>
          </div>
        </div>

        {/* Save */}
        <button
          className="px-6 py-2.5 rounded-lg text-white text-sm font-medium"
          style={{ backgroundColor: '#00B4D8' }}
        >
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
}
