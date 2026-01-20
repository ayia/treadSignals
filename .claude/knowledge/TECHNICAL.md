# 🛠️ TECHNICAL KNOWLEDGE - ChartDepth

## Architecture Technique et Stack

Ce document contient toutes les informations techniques du projet.
Référence pour comprendre le "comment" de l'implémentation.

---

## 🏗️ ARCHITECTURE GLOBALE

### Vue d'Ensemble
```
┌─────────────────────────────────────────────────────────────────────┐
│                         ARCHITECTURE CHARTDEPTH                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐           │
│  │   CLIENTS   │     │   VERCEL    │     │  SUPABASE   │           │
│  │  (Browser)  │────▶│  (Hosting)  │────▶│  (Backend)  │           │
│  └─────────────┘     └─────────────┘     └─────────────┘           │
│         │                   │                   │                   │
│         │                   │                   ├── PostgreSQL      │
│         │                   │                   ├── Auth            │
│         │                   │                   └── Storage         │
│         │                   │                                       │
│         │            ┌──────┴──────┐                               │
│         │            │  NEXT.JS    │                               │
│         │            │  (App)      │                               │
│         │            ├─────────────┤                               │
│         │            │ - Pages     │                               │
│         │            │ - API Routes│                               │
│         │            │ - Components│                               │
│         │            └──────┬──────┘                               │
│         │                   │                                       │
│         │     ┌─────────────┼─────────────┐                        │
│         │     ▼             ▼             ▼                        │
│         │ ┌───────┐   ┌─────────┐   ┌──────────┐                  │
│         │ │STRIPE │   │SENDGRID │   │TRADINGVIEW│                  │
│         │ │(Pay)  │   │(Email)  │   │(Charts)   │                  │
│         │ └───────┘   └─────────┘   └──────────┘                  │
│         │                                                          │
│         └──────────────────────────────────────────────────────────│
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Flux de Données
```
1. USER REQUEST
   Browser → Vercel Edge → Next.js API/Page

2. AUTHENTICATION
   Next.js → Supabase Auth → JWT → Client

3. DATA OPERATIONS
   Next.js API → Supabase PostgreSQL → Response

4. PAYMENTS
   Client → Stripe Checkout → Webhook → Supabase Update

5. EMAILS
   API Route → SendGrid API → User Inbox
```

---

## 📦 STACK TECHNIQUE

### Frontend
| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 14.x | Framework React, App Router |
| React | 18.x | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 3.x | Styling utility-first |
| shadcn/ui | latest | Composants UI |
| Lucide React | latest | Icônes |

### Backend
| Technologie | Version | Usage |
|-------------|---------|-------|
| Supabase | - | BaaS (Backend-as-a-Service) |
| PostgreSQL | 15.x | Base de données (via Supabase) |
| Supabase Auth | - | Authentification |
| Supabase Storage | - | Stockage fichiers |

### Services Externes
| Service | Usage | Tier |
|---------|-------|------|
| Stripe | Paiements | Free (2.9% + 0.30€) |
| SendGrid | Emails | Free (100/jour) |
| TradingView | Widgets graphiques | Free |
| Alpha Vantage | Données marché | Free (5 req/min) |

### Infrastructure
| Service | Usage | Tier |
|---------|-------|------|
| Vercel | Hosting, CDN, Serverless | Free (hobby) |
| GitHub | Code repository | Free |
| Cloudflare | DNS, Protection (optionnel) | Free |

---

## 📁 STRUCTURE DU PROJET

### Arborescence Cible
```
chartdepth/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Routes d'authentification
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── reset-password/
│   │       └── page.tsx
│   │
│   ├── (dashboard)/              # Routes protégées
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── signals/
│   │   │   └── page.tsx
│   │   ├── history/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   │
│   ├── (marketing)/              # Routes publiques
│   │   ├── page.tsx              # Landing page
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   └── results/
│   │       └── page.tsx
│   │
│   ├── api/                      # API Routes
│   │   ├── auth/
│   │   │   └── callback/
│   │   │       └── route.ts
│   │   ├── signals/
│   │   │   └── route.ts
│   │   ├── webhooks/
│   │   │   └── stripe/
│   │   │       └── route.ts
│   │   └── admin/
│   │       └── signals/
│   │           └── route.ts
│   │
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Styles globaux
│   └── not-found.tsx             # Page 404
│
├── components/                    # Composants React
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   │
│   ├── layout/                   # Composants de layout
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   └── mobile-nav.tsx
│   │
│   ├── signals/                  # Composants signaux
│   │   ├── signal-card.tsx
│   │   ├── signal-list.tsx
│   │   ├── signal-form.tsx       # Admin
│   │   └── signal-status.tsx
│   │
│   ├── auth/                     # Composants auth
│   │   ├── login-form.tsx
│   │   ├── register-form.tsx
│   │   └── auth-provider.tsx
│   │
│   └── marketing/                # Composants landing
│       ├── hero.tsx
│       ├── features.tsx
│       ├── pricing.tsx
│       └── testimonials.tsx
│
├── lib/                          # Librairies et utilitaires
│   ├── supabase/
│   │   ├── client.ts             # Client browser
│   │   ├── server.ts             # Client server
│   │   └── middleware.ts         # Auth middleware
│   │
│   ├── stripe/
│   │   ├── client.ts             # Stripe client
│   │   └── webhooks.ts           # Webhook handlers
│   │
│   └── utils/
│       ├── cn.ts                 # Class names utility
│       ├── format.ts             # Formatage dates, prix
│       └── validators.ts         # Validation schemas
│
├── types/                        # Types TypeScript
│   ├── database.types.ts         # Types générés Supabase
│   ├── signal.types.ts           # Types signaux
│   └── user.types.ts             # Types utilisateur
│
├── hooks/                        # Custom React hooks
│   ├── use-user.ts
│   ├── use-signals.ts
│   └── use-subscription.ts
│
├── config/                       # Configuration
│   ├── site.ts                   # Métadonnées site
│   └── instruments.ts            # Liste instruments
│
├── public/                       # Assets statiques
│   ├── logo.svg
│   ├── og-image.png
│   └── favicon.ico
│
├── supabase/                     # Supabase local
│   ├── migrations/               # SQL migrations
│   └── seed.sql                  # Données de test
│
└── [Config files]
    ├── .env.local                # Variables environnement
    ├── .env.example              # Template env
    ├── next.config.js
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── package.json
```

---

## 🗄️ SCHÉMA BASE DE DONNÉES

### Tables Principales

#### profiles
Extension de la table `auth.users` de Supabase.
```sql
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'admin')),
  stripe_customer_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);
```

#### signals
Signaux de trading.
```sql
CREATE TABLE public.signals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Instrument
  instrument TEXT NOT NULL,
  instrument_type TEXT NOT NULL CHECK (instrument_type IN ('forex', 'crypto', 'index', 'commodity')),

  -- Signal data
  direction TEXT NOT NULL CHECK (direction IN ('BUY', 'SELL')),
  entry_price DECIMAL(20,8) NOT NULL,
  stop_loss DECIMAL(20,8) NOT NULL,
  take_profit_1 DECIMAL(20,8) NOT NULL,
  take_profit_2 DECIMAL(20,8),
  take_profit_3 DECIMAL(20,8),

  -- Risk
  risk_reward DECIMAL(4,2),
  confidence TEXT CHECK (confidence IN ('low', 'medium', 'high')),

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'tp1_hit', 'tp2_hit', 'tp3_hit', 'sl_hit', 'cancelled', 'closed')),
  result_pips DECIMAL(10,2),

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  closed_at TIMESTAMPTZ,

  -- Visibility
  is_free BOOLEAN DEFAULT FALSE,

  -- Notes
  analysis TEXT,
  notes TEXT
);

-- Indexes
CREATE INDEX idx_signals_status ON signals(status);
CREATE INDEX idx_signals_instrument ON signals(instrument);
CREATE INDEX idx_signals_created ON signals(created_at DESC);

-- RLS
ALTER TABLE signals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view signals"
  ON signals FOR SELECT
  USING (true);

CREATE POLICY "Only admins can modify signals"
  ON signals FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.plan = 'admin'
    )
  );
```

#### subscriptions
Abonnements Stripe.
```sql
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Stripe data
  stripe_subscription_id TEXT UNIQUE NOT NULL,
  stripe_price_id TEXT NOT NULL,

  -- Status
  status TEXT NOT NULL CHECK (status IN ('active', 'cancelled', 'past_due', 'trialing')),

  -- Periods
  current_period_start TIMESTAMPTZ NOT NULL,
  current_period_end TIMESTAMPTZ NOT NULL,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);
```

#### signal_results
Historique détaillé des résultats.
```sql
CREATE TABLE public.signal_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  signal_id UUID REFERENCES signals(id) ON DELETE CASCADE NOT NULL,

  -- Result
  exit_price DECIMAL(20,8) NOT NULL,
  result_type TEXT NOT NULL CHECK (result_type IN ('tp1', 'tp2', 'tp3', 'sl', 'manual')),
  pips DECIMAL(10,2) NOT NULL,

  -- Timestamp
  closed_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Vues Utiles

```sql
-- Vue statistiques globales
CREATE VIEW signal_stats AS
SELECT
  COUNT(*) as total_signals,
  COUNT(*) FILTER (WHERE status LIKE 'tp%') as wins,
  COUNT(*) FILTER (WHERE status = 'sl_hit') as losses,
  ROUND(
    COUNT(*) FILTER (WHERE status LIKE 'tp%')::DECIMAL /
    NULLIF(COUNT(*) FILTER (WHERE status IN ('sl_hit', 'tp1_hit', 'tp2_hit', 'tp3_hit')), 0) * 100,
    1
  ) as win_rate,
  SUM(result_pips) as total_pips
FROM signals
WHERE status NOT IN ('active', 'cancelled');

-- Vue signaux récents avec formatage
CREATE VIEW recent_signals AS
SELECT
  id,
  instrument,
  direction,
  entry_price,
  stop_loss,
  take_profit_1,
  status,
  result_pips,
  created_at,
  CASE
    WHEN is_free THEN 'free'
    ELSE 'pro'
  END as visibility
FROM signals
ORDER BY created_at DESC
LIMIT 50;
```

---

## 🔐 AUTHENTIFICATION

### Flow d'Authentification
```
1. INSCRIPTION
   Form → Supabase Auth signUp → Email verification → Profile creation

2. CONNEXION
   Form → Supabase Auth signIn → JWT → Session cookie

3. VÉRIFICATION SESSION
   Request → Middleware → Supabase getSession → Allow/Redirect

4. DÉCONNEXION
   Button → Supabase Auth signOut → Clear session → Redirect
```

### Code Middleware
```typescript
// lib/supabase/middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()

  // Protected routes
  const protectedPaths = ['/dashboard', '/signals', '/settings']
  const isProtectedPath = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}
```

---

## 💳 INTÉGRATION STRIPE

### Configuration Produits
```
Produit: ChartDepth Pro
├── Price ID: price_xxx (19€/mois)
└── Metadata: { plan: 'pro' }
```

### Webhook Events à Gérer
| Event | Action |
|-------|--------|
| `checkout.session.completed` | Créer subscription, upgrade plan |
| `customer.subscription.updated` | Mettre à jour status |
| `customer.subscription.deleted` | Downgrade to free |
| `invoice.payment_failed` | Notifier user, marquer past_due |

### Code Webhook
```typescript
// app/api/webhooks/stripe/route.ts
import { stripe } from '@/lib/stripe/client'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('stripe-signature')!

  const event = stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  )

  const supabase = createClient()

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object
      // Update user plan to 'pro'
      await supabase
        .from('profiles')
        .update({ plan: 'pro' })
        .eq('stripe_customer_id', session.customer)
      break

    // ... autres events
  }

  return new Response('OK', { status: 200 })
}
```

---

## 📧 EMAILS

### Templates Requis
| Template | Trigger | Contenu |
|----------|---------|---------|
| Welcome | Inscription | Bienvenue + premiers pas |
| Signal Alert | Nouveau signal | Détails du signal (Pro only) |
| Daily Recap | Cron 20h | Résumé de la journée |
| Payment Success | Paiement OK | Confirmation + accès |
| Payment Failed | Paiement échoué | Relance + lien paiement |

### Structure Email
```typescript
// Types
interface EmailTemplate {
  subject: string
  html: string
  text: string
}

// Envoi
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

async function sendEmail(to: string, template: EmailTemplate) {
  await sgMail.send({
    to,
    from: 'signals@chartdepth.com',
    subject: template.subject,
    html: template.html,
    text: template.text,
  })
}
```

---

## 🔧 CONFIGURATION

### Variables d'Environnement
```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=ChartDepth

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRO_PRICE_ID=price_...

# SendGrid
SENDGRID_API_KEY=SG...

# Optional
NEXT_PUBLIC_GA_ID=G-...
```

### Commandes NPM
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "db:generate": "supabase gen types typescript --local > types/database.types.ts",
    "db:push": "supabase db push",
    "db:reset": "supabase db reset"
  }
}
```

---

## 📊 PERFORMANCE

### Objectifs
| Métrique | Target |
|----------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TTI (Time to Interactive) | < 3s |

### Optimisations Prévues
- Images: Next.js Image avec lazy loading
- Fonts: next/font avec subset
- Bundle: Dynamic imports pour composants lourds
- Cache: Supabase cache + SWR côté client
- Edge: Vercel Edge Functions pour API rapide

---

*Dernière mise à jour: Session actuelle*
*Source: SOLO_05_ARCHITECTURE_TECHNIQUE.md*
