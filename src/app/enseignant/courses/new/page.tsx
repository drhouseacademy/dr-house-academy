'use client';

import { useState } from 'react';

export default function NewCoursePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [stage, setStage] = useState('');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Nouveau cours
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Créez un nouveau cours et ajoutez des leçons vidéo
        </p>
      </div>

      <div className="max-w-2xl">
        <form className="space-y-6">
          {/* Course Info */}
          <div
            className="rounded-xl border p-6"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <h2 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Informations du cours
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  Titre du cours *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  placeholder="Ex: Anatomie Générale"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border text-sm resize-none"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  placeholder="Décrivez le contenu du cours..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    Année académique *
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border text-sm"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <option value="">Sélectionner</option>
                    <option value="1">1ère année</option>
                    <option value="2">2ème année</option>
                    <option value="3">3ème année</option>
                    <option value="4">4ème année</option>
                    <option value="5">5ème année</option>
                    <option value="6">6ème année</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    Filière *
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border text-sm"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <option value="">Sélectionner</option>
                    <option value="medecine">Médecine</option>
                    <option value="pharmacie">Pharmacie</option>
                    <option value="odontologie">Odontologie</option>
                    <option value="infirmier">Infirmier</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  Image de couverture
                </label>
                <div
                  className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors hover:border-[#00B4D8]"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-muted)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Cliquez pour télécharger ou glissez-déposez
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg text-white text-sm font-medium"
              style={{ backgroundColor: '#E63946' }}
            >
              Créer le cours
            </button>
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg text-sm font-medium border"
              style={{
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
