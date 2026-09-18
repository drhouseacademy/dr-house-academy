'use client';

import { useState } from 'react';

const demoPayments = [
  {
    id: 1,
    student: 'Ahmed Benali',
    email: 'ahmed@gmail.com',
    plan: 'Pack 2ème année',
    amount: '2 500 DA',
    reference: '0045678912',
    date: '17/09/2026',
    status: 'pending',
  },
  {
    id: 2,
    student: 'Yacine Mansouri',
    email: 'yacine@gmail.com',
    plan: 'Pack 1ère année',
    amount: '2 000 DA',
    reference: '0045678913',
    date: '16/09/2026',
    status: 'pending',
  },
  {
    id: 3,
    student: 'Sara Khediri',
    email: 'sara@gmail.com',
    plan: 'Anatomie - 1ère année',
    amount: '800 DA',
    reference: '0045678910',
    date: '15/09/2026',
    status: 'approved',
  },
  {
    id: 4,
    student: 'Nadia Hamidi',
    email: 'nadia@gmail.com',
    plan: 'Physiologie - 2ème année',
    amount: '1 000 DA',
    reference: '0045678911',
    date: '14/09/2026',
    status: 'rejected',
  },
];

export default function PaymentsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState<typeof demoPayments[0] | null>(null);

  const filtered = filter === 'all' ? demoPayments : demoPayments.filter(p => p.status === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Paiements Baridi Mod
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Vérifier et valider les paiements
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'all', label: 'Tous', count: demoPayments.length },
          { id: 'pending', label: 'En attente', count: demoPayments.filter(p => p.status === 'pending').length },
          { id: 'approved', label: 'Approuvés', count: demoPayments.filter(p => p.status === 'approved').length },
          { id: 'rejected', label: 'Rejetés', count: demoPayments.filter(p => p.status === 'rejected').length },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors"
            style={{
              backgroundColor: filter === f.id ? 'rgba(0,180,216,0.1)' : 'var(--bg-card)',
              borderColor: filter === f.id ? '#00B4D8' : 'var(--border-color)',
              color: filter === f.id ? '#00B4D8' : 'var(--text-secondary)',
            }}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {/* Payments Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((payment) => (
          <div
            key={payment.id}
            className="rounded-xl border overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            {/* Payment Proof Placeholder */}
            <div
              className="h-48 flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
              onClick={() => setSelectedPayment(payment)}
            >
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-muted)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Voir la preuve de paiement
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {payment.student}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {payment.email}
                  </p>
                </div>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
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

              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--text-muted)' }}>Plan</span>
                  <span style={{ color: 'var(--text-primary)' }}>{payment.plan}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--text-muted)' }}>Montant</span>
                  <span className="font-semibold" style={{ color: '#E63946' }}>{payment.amount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--text-muted)' }}>Référence</span>
                  <span style={{ color: 'var(--text-primary)' }}>{payment.reference}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--text-muted)' }}>Date</span>
                  <span style={{ color: 'var(--text-primary)' }}>{payment.date}</span>
                </div>
              </div>

              {payment.status === 'pending' && (
                <div className="flex gap-2">
                  <button
                    className="flex-1 py-2 rounded-lg text-sm font-medium text-white"
                    style={{ backgroundColor: '#22C55E' }}
                  >
                    ✅ Approuver
                  </button>
                  <button
                    className="flex-1 py-2 rounded-lg text-sm font-medium text-white"
                    style={{ backgroundColor: '#E63946' }}
                  >
                    ❌ Rejeter
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Payment Proof Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedPayment(null)} />
          <div
            className="relative w-full max-w-lg p-6 rounded-xl shadow-xl"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Preuve de paiement
            </h2>
            <div
              className="h-64 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <span style={{ color: 'var(--text-muted)' }}>Image du Baridi Mod</span>
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setSelectedPayment(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium border"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
