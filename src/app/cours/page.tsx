'use client';

import Link from 'next/link';
import { useState } from 'react';

const academicYears = [
  { id: 'all', name: 'Toutes les années' },
  { id: '1', name: '1ère année' },
  { id: '2', name: '2ème année' },
  { id: '3', name: '3ème année' },
  { id: '4', name: '4ème année' },
  { id: '5', name: '5ème année' },
  { id: '6', name: '6ème année' },
];

const stages = [
  { id: 'all', name: 'Toutes les filières' },
  { id: 'medecine', name: 'Médecine' },
  { id: 'pharmacie', name: 'Pharmacie' },
  { id: 'odontologie', name: 'Odontologie' },
  { id: 'infirmier', name: 'Infirmier' },
];

// Demo courses
const demoCourses = [
  {
    id: 1,
    title: 'Anatomie Générale',
    teacher: 'Dr. Amira Benali',
    year: '1ère année',
    stage: 'Médecine',
    lessons: 24,
    duration: '18h',
    thumbnail: null,
    isPaid: true,
    price: 1500,
  },
  {
    id: 2,
    title: 'Physiologie Cellulaire',
    teacher: 'Dr. Youcef Mansouri',
    year: '1ère année',
    stage: 'Médecine',
    lessons: 18,
    duration: '14h',
    thumbnail: null,
    isPaid: true,
    price: 1200,
  },
  {
    id: 3,
    title: 'Chimie Organique',
    teacher: 'Dr. Sara Khediri',
    year: '1ère année',
    stage: 'Pharmacie',
    lessons: 30,
    duration: '22h',
    thumbnail: null,
    isPaid: true,
    price: 1800,
  },
  {
    id: 4,
    title: 'Biochimie Médicale',
    teacher: 'Dr. Karim Boudiaf',
    year: '2ème année',
    stage: 'Médecine',
    lessons: 20,
    duration: '16h',
    thumbnail: null,
    isPaid: true,
    price: 1400,
  },
  {
    id: 5,
    title: 'Microbiologie',
    teacher: 'Dr. Nadia Hamidi',
    year: '2ème année',
    stage: 'Pharmacie',
    lessons: 22,
    duration: '17h',
    thumbnail: null,
    isPaid: true,
    price: 1500,
  },
  {
    id: 6,
    title: 'Histologie Fondamentale',
    teacher: 'Dr. Ahmed Touati',
    year: '1ère année',
    stage: 'Médecine',
    lessons: 15,
    duration: '12h',
    thumbnail: null,
    isPaid: false,
    price: 0,
  },
];

export default function CoursesPage() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedStage, setSelectedStage] = useState('all');

  const filteredCourses = demoCourses.filter((course) => {
    const yearMatch = selectedYear === 'all' || course.year.includes(selectedYear === '1' ? '1ère' : selectedYear === '2' ? '2ème' : selectedYear);
    const stageMatch = selectedStage === 'all' || course.stage.toLowerCase() === selectedStage;
    return yearMatch && stageMatch;
  });

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Cours
          </h1>
          <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
            {filteredCourses.length} cours disponibles
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div
              className="p-4 rounded-xl border sticky top-24"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filtres
              </h3>

              {/* Academic Year Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Année académique
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {academicYears.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stage Filter */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Filière
                </label>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {stages.map((stage) => (
                    <option key={stage.id} value={stage.id}>
                      {stage.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex-1">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-muted)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Aucun cours trouvé
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Essayez de modifier vos filtres.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/cours/${course.id}`}
                    className="group rounded-xl border overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="h-40 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,180,216,0.1), rgba(230,57,70,0.1))',
                      }}
                    >
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#00B4D8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    <div className="p-4">
                      {/* Tags */}
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{ backgroundColor: 'rgba(0,180,216,0.1)', color: '#00B4D8' }}
                        >
                          {course.year}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{ backgroundColor: 'rgba(230,57,70,0.1)', color: '#E63946' }}
                        >
                          {course.stage}
                        </span>
                      </div>

                      <h3 className="font-semibold mb-1 group-hover:text-cyan transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {course.title}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {course.teacher}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            {course.lessons} cours
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {course.duration}
                          </span>
                        </div>

                        {course.isPaid ? (
                          <span className="text-sm font-semibold" style={{ color: '#E63946' }}>
                            {course.price.toLocaleString()} DA
                          </span>
                        ) : (
                          <span className="text-sm font-semibold text-green-500">
                            Gratuit
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
