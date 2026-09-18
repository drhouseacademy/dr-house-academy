'use client';

import Link from 'next/link';

const myCourses = [
  { id: 1, title: 'Anatomie Générale', lessons: 24, views: 1200, status: 'published', year: '1ère année' },
  { id: 2, title: 'Anatomie du Coeur', lessons: 8, views: 450, status: 'published', year: '1ère année' },
  { id: 3, title: 'Système Nerveux', lessons: 12, views: 380, status: 'draft', year: '2ème année' },
];

export default function TeacherCoursesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Mes cours
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            {myCourses.length} cours
          </p>
        </div>
        <Link
          href="/enseignant/courses/new"
          className="px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"
          style={{ backgroundColor: '#E63946' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Nouveau cours
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myCourses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl border overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div
              className="h-32 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.1), rgba(0,180,216,0.1))' }}
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#E63946">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-0.5 rounded text-xs"
                  style={{ backgroundColor: 'rgba(0,180,216,0.1)', color: '#00B4D8' }}
                >
                  {course.year}
                </span>
                <span
                  className="px-2 py-0.5 rounded text-xs"
                  style={{
                    backgroundColor: course.status === 'published' ? 'rgba(34,197,94,0.1)' : 'rgba(245,158,11,0.1)',
                    color: course.status === 'published' ? '#22C55E' : '#F59E0B',
                  }}
                >
                  {course.status === 'published' ? 'Publié' : 'Brouillon'}
                </span>
              </div>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {course.title}
              </h3>
              <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
                <span>{course.lessons} leçons</span>
                <span>{course.views} vues</span>
              </div>
              <Link
                href={`/enseignant/courses/${course.id}`}
                className="mt-3 block text-center py-2 rounded-lg text-sm font-medium border transition-colors hover:bg-[var(--bg-card-hover)]"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                Gérer les leçons
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
