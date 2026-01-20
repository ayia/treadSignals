# 🔧 ARCHITECTURE TECHNIQUE SIMPLIFIÉE

## Stack Technique Solo - 100% Gratuit

**Principe :** Utiliser les meilleurs outils gratuits pour minimiser les coûts

---

## 1. VUE D'ENSEMBLE

### 1.1 Architecture Simplifiée

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ARCHITECTURE SOLO SIMPLIFIÉE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│    UTILISATEURS                                                             │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────┐                                                        │
│  │   CLOUDFLARE    │ ← CDN + SSL + Protection DDoS (gratuit)                │
│  └────────┬────────┘                                                        │
│           │                                                                 │
│           ▼                                                                 │
│  ┌─────────────────┐                                                        │
│  │     VERCEL      │ ← Hosting Frontend (gratuit)                           │
│  │   (Next.js)     │                                                        │
│  └────────┬────────┘                                                        │
│           │                                                                 │
│           ▼                                                                 │
│  ┌─────────────────┐                                                        │
│  │    SUPABASE     │ ← Backend tout-en-un (gratuit)                         │
│  │  ┌───────────┐  │                                                        │
│  │  │PostgreSQL │  │ ← Base de données                                      │
│  │  ├───────────┤  │                                                        │
│  │  │   Auth    │  │ ← Authentification                                     │
│  │  ├───────────┤  │                                                        │
│  │  │  Storage  │  │ ← Fichiers                                             │
│  │  ├───────────┤  │                                                        │
│  │  │ Realtime  │  │ ← WebSocket (optionnel)                                │
│  │  └───────────┘  │                                                        │
│  └────────┬────────┘                                                        │
│           │                                                                 │
│     ┌─────┴─────┐                                                           │
│     ▼           ▼                                                           │
│  ┌──────┐  ┌──────────┐                                                     │
│  │STRIPE│  │ SENDGRID │                                                     │
│  │      │  │          │                                                     │
│  └──────┘  └──────────┘                                                     │
│  Paiements  Emails                                                          │
│                                                                             │
│  SERVICES EXTERNES                                                          │
│  ┌──────────────────┐                                                       │
│  │  TRADINGVIEW     │ ← Widget graphique (gratuit)                          │
│  │  ALPHA VANTAGE   │ ← Prix marché (gratuit)                               │
│  └──────────────────┘                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Stack Technique Choisi

```
┌─────────────────────────────────────────────────────────────┐
│                    STACK RECOMMANDÉ                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FRONTEND                                                   │
│  ─────────                                                  │
│  Framework      : Next.js 14 (App Router)                   │
│  Langage        : TypeScript                                │
│  Style          : Tailwind CSS                              │
│  Components     : shadcn/ui (gratuit, copier-coller)        │
│  Icônes         : Lucide Icons                              │
│  Graphiques     : TradingView Widget                        │
│                                                             │
│  BACKEND                                                    │
│  ────────                                                   │
│  BaaS           : Supabase (tout inclus)                    │
│  Base données   : PostgreSQL (via Supabase)                 │
│  Auth           : Supabase Auth                             │
│  API            : Next.js API Routes                        │
│                                                             │
│  SERVICES TIERS                                             │
│  ──────────────                                             │
│  Paiements      : Stripe                                    │
│  Emails         : SendGrid (ou Resend)                      │
│  CDN            : Cloudflare                                │
│  Données marché : Alpha Vantage / Yahoo Finance             │
│                                                             │
│  DÉPLOIEMENT                                                │
│  ───────────                                                │
│  Hosting        : Vercel                                    │
│  CI/CD          : GitHub Actions (auto via Vercel)          │
│  Domaine        : Namecheap / Cloudflare                    │
│                                                             │
│  OUTILS DEV                                                 │
│  ──────────                                                 │
│  IDE            : VS Code                                   │
│  Version        : Git + GitHub                              │
│  Package        : npm ou pnpm                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. STRUCTURE DU PROJET

### 2.1 Arborescence des Fichiers

```
mon-projet-trading/
│
├── 📁 app/                      # App Router Next.js
│   ├── 📁 (auth)/               # Routes auth (groupées)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── forgot-password/
│   │       └── page.tsx
│   │
│   ├── 📁 (dashboard)/          # Routes dashboard (protégées)
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── signals/
│   │   │   └── page.tsx
│   │   ├── history/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── layout.tsx           # Layout dashboard avec sidebar
│   │
│   ├── 📁 (marketing)/          # Routes publiques
│   │   ├── page.tsx             # Landing page
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── 📁 api/                  # API Routes
│   │   ├── signals/
│   │   │   └── route.ts
│   │   ├── stripe/
│   │   │   ├── checkout/
│   │   │   │   └── route.ts
│   │   │   └── webhook/
│   │   │       └── route.ts
│   │   └── email/
│   │       └── route.ts
│   │
│   ├── layout.tsx               # Layout racine
│   └── globals.css              # Styles globaux
│
├── 📁 components/               # Composants réutilisables
│   ├── 📁 ui/                   # Composants shadcn/ui
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── 📁 layout/               # Composants de layout
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   ├── 📁 signals/              # Composants signaux
│   │   ├── signal-card.tsx
│   │   ├── signal-list.tsx
│   │   └── signal-detail.tsx
│   └── 📁 forms/                # Formulaires
│       ├── login-form.tsx
│       └── register-form.tsx
│
├── 📁 lib/                      # Utilitaires et config
│   ├── supabase/
│   │   ├── client.ts            # Client Supabase
│   │   └── server.ts            # Client serveur
│   ├── stripe.ts                # Config Stripe
│   └── utils.ts                 # Fonctions utilitaires
│
├── 📁 hooks/                    # Custom hooks
│   ├── use-user.ts
│   └── use-signals.ts
│
├── 📁 types/                    # Types TypeScript
│   ├── database.ts              # Types Supabase générés
│   └── index.ts
│
├── 📁 public/                   # Fichiers statiques
│   ├── logo.svg
│   └── images/
│
├── .env.local                   # Variables d'environnement
├── next.config.js               # Config Next.js
├── tailwind.config.js           # Config Tailwind
├── tsconfig.json                # Config TypeScript
└── package.json
```

---

## 3. SCHÉMA BASE DE DONNÉES

### 3.1 Tables Supabase

```sql
-- ============================================
-- SCHÉMA BASE DE DONNÉES SIMPLIFIÉ
-- ============================================

-- Table des profils utilisateurs (extension de auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'pro')),
  stripe_customer_id TEXT,
  subscription_status TEXT DEFAULT 'inactive',
  subscription_end_date TIMESTAMP,
  email_notifications BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table des signaux
CREATE TABLE signals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  instrument TEXT NOT NULL,           -- EUR/USD, BTC/USD, etc.
  direction TEXT NOT NULL CHECK (direction IN ('BUY', 'SELL')),
  entry_price DECIMAL(20,8) NOT NULL,
  stop_loss DECIMAL(20,8) NOT NULL,
  take_profit DECIMAL(20,8) NOT NULL,
  current_price DECIMAL(20,8),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'tp_hit', 'sl_hit', 'closed')),
  confidence INTEGER DEFAULT 70 CHECK (confidence >= 0 AND confidence <= 100),
  notes TEXT,
  result_pips DECIMAL(10,2),
  closed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table des abonnements (sync avec Stripe)
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  stripe_subscription_id TEXT UNIQUE,
  stripe_price_id TEXT,
  status TEXT NOT NULL,
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table des transactions/paiements
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  stripe_payment_id TEXT UNIQUE,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'EUR',
  status TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Activer RLS sur toutes les tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE signals ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Policies pour profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Policies pour signals (tous peuvent lire, seul admin peut écrire)
CREATE POLICY "Anyone can view signals" ON signals
  FOR SELECT TO authenticated USING (true);

-- Policies pour subscriptions
CREATE POLICY "Users can view own subscriptions" ON subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Policies pour payments
CREATE POLICY "Users can view own payments" ON payments
  FOR SELECT USING (auth.uid() = user_id);

-- ============================================
-- FONCTIONS ET TRIGGERS
-- ============================================

-- Créer automatiquement un profil quand un user s'inscrit
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

### 3.2 Diagramme Relations

```
┌─────────────────────────────────────────────────────────────┐
│                  RELATIONS BASE DE DONNÉES                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐         ┌──────────────┐                  │
│  │  auth.users  │────────►│   profiles   │                  │
│  │  (Supabase)  │   1:1   │              │                  │
│  └──────────────┘         └──────┬───────┘                  │
│                                  │                          │
│                         ┌────────┴────────┐                 │
│                         │                 │                 │
│                         ▼                 ▼                 │
│               ┌──────────────┐   ┌──────────────┐           │
│               │subscriptions │   │   payments   │           │
│               │     1:N      │   │     1:N      │           │
│               └──────────────┘   └──────────────┘           │
│                                                             │
│  ┌──────────────┐                                           │
│  │   signals    │  (Indépendant - visible par tous)         │
│  │              │                                           │
│  └──────────────┘                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. CONFIGURATION DES SERVICES

### 4.1 Variables d'Environnement

```env
# .env.local

# ============================================
# SUPABASE
# ============================================
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...

# ============================================
# STRIPE
# ============================================
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID_PRO=price_...

# ============================================
# EMAIL (SENDGRID)
# ============================================
SENDGRID_API_KEY=SG...
EMAIL_FROM=signals@monsite.com

# ============================================
# APP
# ============================================
NEXT_PUBLIC_APP_URL=https://monsite.com
```

### 4.2 Configuration Supabase Client

```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createServerSupabaseClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}
```

### 4.3 Configuration Stripe

```typescript
// lib/stripe.ts
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export const PLANS = {
  free: {
    name: 'Free',
    price: 0,
    signalsPerDay: 1,
    features: ['1 signal/jour', '2 instruments', 'Email quotidien']
  },
  pro: {
    name: 'Pro',
    price: 19,
    priceId: process.env.STRIPE_PRICE_ID_PRO,
    signalsPerDay: -1, // illimité
    features: ['Signaux illimités', 'Tous instruments', 'Alertes temps réel', 'Support prioritaire']
  }
}
```

---

## 5. EXEMPLES DE CODE

### 5.1 Composant Signal Card

```tsx
// components/signals/signal-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface Signal {
  id: string
  instrument: string
  direction: 'BUY' | 'SELL'
  entry_price: number
  stop_loss: number
  take_profit: number
  status: string
  confidence: number
  created_at: string
}

export function SignalCard({ signal }: { signal: Signal }) {
  const isBuy = signal.direction === 'BUY'

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">
          {signal.instrument}
        </CardTitle>
        <Badge variant={isBuy ? 'default' : 'destructive'}>
          {isBuy ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
          {signal.direction}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Entry</p>
            <p className="font-medium">{signal.entry_price}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Stop Loss</p>
            <p className="font-medium text-red-500">{signal.stop_loss}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Take Profit</p>
            <p className="font-medium text-green-500">{signal.take_profit}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            Confiance: {signal.confidence}%
          </span>
          <Badge variant="outline">{signal.status}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
```

### 5.2 API Route Signaux

```typescript
// app/api/signals/route.ts
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const supabase = createServerSupabaseClient()

  // Vérifier l'authentification
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  // Récupérer le profil pour vérifier le plan
  const { data: profile } = await supabase
    .from('profiles')
    .select('plan')
    .eq('id', user.id)
    .single()

  // Récupérer les signaux
  let query = supabase
    .from('signals')
    .select('*')
    .order('created_at', { ascending: false })

  // Limiter pour les utilisateurs gratuits
  if (profile?.plan === 'free') {
    query = query.limit(1)
  }

  const { data: signals, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(signals)
}
```

### 5.3 Webhook Stripe

```typescript
// app/api/stripe/webhook/route.ts
import { stripe } from '@/lib/stripe'
import { createClient } from '@supabase/supabase-js'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get('stripe-signature')!

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return NextResponse.json({ error: 'Webhook invalide' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object
      const userId = session.metadata?.userId

      // Mettre à jour le profil
      await supabaseAdmin
        .from('profiles')
        .update({
          plan: 'pro',
          stripe_customer_id: session.customer,
          subscription_status: 'active'
        })
        .eq('id', userId)

      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object

      // Révoquer l'accès
      await supabaseAdmin
        .from('profiles')
        .update({
          plan: 'free',
          subscription_status: 'cancelled'
        })
        .eq('stripe_customer_id', subscription.customer)

      break
    }
  }

  return NextResponse.json({ received: true })
}
```

---

## 6. DÉPLOIEMENT

### 6.1 Étapes de Déploiement

```
┌─────────────────────────────────────────────────────────────┐
│                PROCESSUS DE DÉPLOIEMENT                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. GITHUB                                                  │
│  ────────                                                   │
│  □ Créer repo GitHub                                        │
│  □ Push le code                                             │
│                                                             │
│  2. VERCEL                                                  │
│  ────────                                                   │
│  □ Connecter compte GitHub                                  │
│  □ Importer le projet                                       │
│  □ Ajouter les variables d'environnement                    │
│  □ Déployer                                                 │
│                                                             │
│  3. SUPABASE                                                │
│  ──────────                                                 │
│  □ Créer projet                                             │
│  □ Exécuter le SQL des tables                               │
│  □ Configurer Auth (email)                                  │
│  □ Copier les clés API                                      │
│                                                             │
│  4. STRIPE                                                  │
│  ────────                                                   │
│  □ Créer produit et prix                                    │
│  □ Configurer webhook vers /api/stripe/webhook              │
│  □ Copier les clés                                          │
│                                                             │
│  5. DOMAINE                                                 │
│  ────────                                                   │
│  □ Ajouter domaine dans Vercel                              │
│  □ Configurer DNS                                           │
│  □ Activer HTTPS (automatique)                              │
│                                                             │
│  6. CLOUDFLARE (optionnel)                                  │
│  ────────────────────────                                   │
│  □ Ajouter site                                             │
│  □ Configurer DNS via Cloudflare                            │
│  □ Activer protection DDoS                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Commandes de Développement

```bash
# Installation
npx create-next-app@latest mon-projet --typescript --tailwind --app
cd mon-projet
npm install @supabase/supabase-js @supabase/ssr stripe @stripe/stripe-js

# Développement
npm run dev          # Lancer en local (http://localhost:3000)

# Build
npm run build        # Créer le build de production
npm run start        # Tester le build en local

# Déploiement (automatique via Vercel)
git add .
git commit -m "feat: nouvelle fonctionnalité"
git push             # Déclenche le déploiement automatique
```

---

## 7. CHECKLIST TECHNIQUE

```
┌─────────────────────────────────────────────────────────────┐
│               CHECKLIST AVANT LANCEMENT                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SÉCURITÉ                                                   │
│  □ RLS activé sur toutes les tables Supabase                │
│  □ Variables d'environnement non exposées côté client       │
│  □ Validation des inputs utilisateur                        │
│  □ HTTPS activé                                             │
│  □ Webhook Stripe sécurisé                                  │
│                                                             │
│  PERFORMANCE                                                │
│  □ Images optimisées (next/image)                           │
│  □ Code splitting automatique (Next.js)                     │
│  □ Cache configuré                                          │
│                                                             │
│  FONCTIONNEL                                                │
│  □ Inscription fonctionne                                   │
│  □ Connexion fonctionne                                     │
│  □ Reset password fonctionne                                │
│  □ Paiement Stripe fonctionne (mode test puis live)         │
│  □ Emails arrivent (vérifier spam)                          │
│  □ Signaux s'affichent                                      │
│                                                             │
│  MOBILE                                                     │
│  □ Site responsive                                          │
│  □ Testé sur iPhone et Android                              │
│                                                             │
│  LÉGAL                                                       │
│  □ CGU présentes                                            │
│  □ Politique de confidentialité                             │
│  □ Mentions légales                                         │
│  □ Bandeau cookies (si nécessaire)                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

*Document créé le [DATE]*
*Stack : Next.js 14 + Supabase + Stripe + Vercel*
