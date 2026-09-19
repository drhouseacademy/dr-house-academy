import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-6xl font-bold mb-4" style={{ color: '#00B4D8' }}>404</div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Page introuvable
        </h1>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          La page que vous recherchez n&apos;existe pas.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium"
          style={{ backgroundColor: '#00B4D8' }}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
