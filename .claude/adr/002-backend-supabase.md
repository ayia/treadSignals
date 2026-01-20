# ADR-002: Choix de Supabase comme Backend-as-a-Service

## Status
ACCEPTED

## Date
2024-01-XX (Session initiale)

## Context
Le projet ChartDepth nécessite un backend avec:
- Base de données relationnelle (signaux, utilisateurs, abonnements)
- Authentification (email/password, peut-être OAuth plus tard)
- Stockage de fichiers (potentiellement pour images)
- API en temps réel (pour les signaux live)
- Sécurité robuste (Row Level Security)

Contraintes:
- Budget minimal (0€ idéalement)
- Solo developer (pas de temps pour gérer infrastructure)
- Doit scaler avec la croissance
- Facile à intégrer avec Next.js

## Decision
**Utiliser Supabase** comme Backend-as-a-Service tout-en-un.

Composants utilisés:
- **Supabase Auth**: Authentification
- **Supabase Database**: PostgreSQL
- **Supabase Realtime**: Updates en temps réel
- **Supabase Storage**: Fichiers (si besoin)

## Options Considered

### Option 1: Supabase (CHOISI)
**Description**: BaaS open source, alternative Firebase pour PostgreSQL

**Avantages**:
- **Gratuit** jusqu'à 500MB DB, 1GB storage, 50K auth users
- PostgreSQL (SQL standard, pas de vendor lock-in)
- Row Level Security (sécurité native)
- Realtime subscriptions intégrées
- Auth complet (email, OAuth, magic links)
- Dashboard admin inclus
- Excellente intégration Next.js (@supabase/ssr)
- Open source (peut self-host si besoin)
- Documentation excellente

**Inconvénients**:
- Limites du free tier (suffisantes pour MVP)
- Moins flexible qu'un backend custom
- Dépendance à un service externe

**Coût**:
- Free: 0€ (500MB DB, 1GB storage)
- Pro: 25$/mois (8GB DB, 100GB storage) - si on scale

### Option 2: Firebase
**Description**: BaaS de Google

**Avantages**:
- Très populaire, bien documenté
- Realtime Database performant
- Google Auth intégré

**Inconvénients**:
- NoSQL (Firestore) - moins adapté aux relations
- Pricing imprévisible à grande échelle
- Vendor lock-in fort (Google)
- Pas de vraies jointures SQL

### Option 3: PlanetScale + Auth0 + Cloudinary
**Description**: Combiner plusieurs services spécialisés

**Avantages**:
- Chaque service est best-in-class
- Flexibilité maximale

**Inconvénients**:
- Complexité de gestion (3 dashboards)
- Coûts combinés potentiellement plus élevés
- Plus de code d'intégration
- Temps de setup important

### Option 4: Backend Custom (Express/Fastify + PostgreSQL)
**Description**: Développer son propre backend

**Avantages**:
- Contrôle total
- Pas de limites de service
- Peut optimiser au maximum

**Inconvénients**:
- Énorme travail de développement
- Sécurité à gérer soi-même
- Hosting à payer et gérer
- Auth à implémenter from scratch
- Overkill pour un projet solo

## Consequences

### Positives
- Démarrage immédiat (pas d'infrastructure à setup)
- Auth prêt à l'emploi
- PostgreSQL = flexibilité SQL
- RLS = sécurité robuste sans code backend
- Realtime pour futures features (notifications live)
- Dashboard admin pour debug
- Backup automatique

### Negatives
- Limité par les fonctionnalités Supabase
- Dépendance à un service externe
- Pas de contrôle sur l'infrastructure

### Risks
- **Risque**: Supabase devient payant/cher
  - **Mitigation**: Open source, peut self-host ou migrer vers PostgreSQL standard

- **Risque**: Limites free tier atteintes
  - **Mitigation**: 500MB largement suffisant pour 500+ clients, upgrade à 25$/mois viable avec MRR

- **Risque**: Downtime Supabase
  - **Mitigation**: SLA 99.9% sur Pro, acceptable pour le projet

## Implementation Notes

### Setup Initial
```bash
# Créer projet sur supabase.com
# Récupérer les clés dans Settings > API

# Dans .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### Intégration Next.js
```bash
npm install @supabase/supabase-js @supabase/ssr
```

### Tables Principales
Voir [TECHNICAL.md](../knowledge/TECHNICAL.md) pour le schéma complet.

## References
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Pricing](https://supabase.com/pricing)
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---
*ADR créé par: Claude*
*Dernière mise à jour: Session actuelle*
