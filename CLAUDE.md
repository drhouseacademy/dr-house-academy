# Dr House Academy

## Project Overview
- **Type**: Medical/health sciences educational platform for Algerian students
- **Language**: French only
- **Content**: Video lessons uploaded by ~15 teachers to Bunny CDN
- **Future**: MCQ/quizzes, student progress tracking

## Tech Stack
- **Frontend**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Video**: Bunny Stream (video hosting) + Bunny CDN (assets)
- **Hosting**: Vercel (dev) → Algerian VPS (prod)
- **Domain**: TBD (no domain purchased yet)

## Visual Identity
- **Primary**: Cyan `#00B4D8`
- **Accent**: Red `#E63946`
- **Dark BG**: `#0F1724`
- **Dark Surface**: `#1A2332`
- **Light BG**: `#FFFFFF` / `#F8F9FA`
- **Design**: Clean, medical, professional — dark mode is dark NAVY, NOT purple

## Key Features
1. **Admin Panel** (PRIORITY) — Main admin designates teacher accounts
2. **Teacher Dashboard** — Teachers upload video lessons to Bunny Stream
3. **Public Course Catalog** — Students browse courses by year/stage
4. **Pricing System** — Packs per year + individual courses, 1 month / forever
5. **Payment Verification** — Baridi Mod proof upload + admin validation
6. **Security** — 2FA (Google Authenticator), device limits, RLS, audit trails

## Project Structure (Built)
```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with theme, navbar, footer
│   ├── globals.css           # Design system (light/dark, animations)
│   ├── connexion/page.tsx    # Login
│   ├── inscription/page.tsx  # Register
│   ├── cours/page.tsx        # Course catalog
│   ├── a-propos/page.tsx     # About
│   ├── contact/page.tsx      # Contact
│   ├── admin/
│   │   ├── layout.tsx        # Admin sidebar
│   │   ├── page.tsx          # Admin dashboard
│   │   ├── teachers/page.tsx # Teacher management
│   │   ├── users/page.tsx    # User management
│   │   ├── payments/page.tsx # Baridi Mod verification
│   │   ├── security/page.tsx # Security dashboard
│   │   └── settings/page.tsx # Platform settings
│   └── enseignant/
│       ├── layout.tsx        # Teacher sidebar
│       ├── page.tsx          # Teacher dashboard
│       └── courses/
│           ├── page.tsx      # My courses
│           └── new/page.tsx  # Create course
├── components/
│   ├── navbar.tsx            # Main navigation
│   ├── footer.tsx            # Footer
│   └── theme-provider.tsx    # Dark/light mode
├── lib/
│   ├── auth/actions.ts       # Server actions (login, register, logout)
│   └── supabase/
│       ├── client.ts         # Browser Supabase client
│       ├── server.ts         # Server Supabase client
│       └── middleware.ts     # Auth middleware
└── middleware.ts             # Next.js middleware
```

## Hosting Strategy
- Start: Vercel + Supabase cloud
- Migrate to: Algerian VPS (Supabase self-hosted Docker + Next.js)
- Migration difficulty: LOW (1-2 days)

## Bunny CDN Account
- Dashboard: dash.bunny.net
- Trial: $20 credits, expires ~8 days from project start
- User will provide API credentials when ready

## Reference Site
- noblesmed.com — Study structure, do NOT copy
- Medical education platform with courses by academic year
- French language, login/register, course filtering

## Pricing Model
- **Packs**: All courses for a year — 1 month / forever
- **Individual courses**: Single module — 1 month / forever
- Payment via Baridi Mod with admin verification

## Saved for Later (Future Features)
- MCQ / Quiz system per course
- Student enrollments and progress tracking
- Certificate generation
- Payment integration
