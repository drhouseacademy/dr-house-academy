'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface SidebarLink {
  label: string;
  href: string;
  icon: ReactNode;
}

interface DashboardLayoutProps {
  children: ReactNode;
  links: SidebarLink[];
  title: string;
  subtitle: string;
  accentColor: string;
}

export default function DashboardLayout({ children, links, title, subtitle, accentColor }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <aside
        className="w-64 border-r flex-shrink-0 hidden md:block"
        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6 px-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${accentColor}15` }}>
              <span className="text-sm font-bold" style={{ color: accentColor }}>{title[0]}</span>
            </div>
            <div>
              <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{title}</span>
              <span className="block text-xs" style={{ color: 'var(--text-muted)' }}>{subtitle}</span>
            </div>
          </div>

          <nav className="space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: isActive ? `${accentColor}15` : 'transparent',
                    color: isActive ? accentColor : 'var(--text-secondary)',
                  }}
                >
                  {link.icon}
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <div className="flex-1 p-6 md:p-8 overflow-auto">
        {children}
      </div>
    </div>
  );
}
