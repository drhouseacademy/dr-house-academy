'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-6xl font-bold mb-4" style={{ color: '#E63946' }}>⚠️</div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Une erreur s&apos;est produite
        </h1>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          Quelque chose s&apos;est mal passé. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium"
          style={{ backgroundColor: '#E63946' }}
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
