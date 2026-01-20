# ADR-001: Choix de Next.js comme Framework Frontend

## Status
ACCEPTED

## Date
2024-01-XX (Session initiale)

## Context
Le projet ChartDepth nécessite un framework frontend pour construire une application web moderne avec:
- Pages statiques (landing, pricing)
- Pages dynamiques (dashboard, signaux)
- Authentification
- API routes pour le backend
- SEO optimisé
- Performance élevée
- Déploiement simple

Le projet est développé en solo avec un budget minimal, donc le framework doit être:
- Gratuit et open source
- Bien documenté
- Avec un écosystème riche
- Facile à déployer (Vercel gratuit)

## Decision
**Utiliser Next.js 14 avec App Router** comme framework principal.

Configuration choisie:
- App Router (nouveau système de routing)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Server Components par défaut
- API Routes pour le backend léger

## Options Considered

### Option 1: Next.js (CHOISI)
**Description**: Framework React full-stack de Vercel

**Avantages**:
- Full-stack (frontend + API routes)
- SSR/SSG/ISR pour SEO et performance
- App Router moderne avec Server Components
- Déploiement Vercel gratuit (hobby tier)
- Excellente documentation
- Grande communauté
- TypeScript natif
- Optimisations automatiques (images, fonts, etc.)

**Inconvénients**:
- Courbe d'apprentissage App Router
- Vendor lock-in léger avec Vercel
- Complexité parfois excessive pour petits projets

### Option 2: Remix
**Description**: Framework React full-stack de Shopify

**Avantages**:
- Excellent data loading
- Progressive enhancement
- Pas de vendor lock-in

**Inconvénients**:
- Communauté plus petite
- Moins de ressources/tutoriels
- Déploiement moins simple que Vercel

### Option 3: Astro
**Description**: Framework orienté contenu statique

**Avantages**:
- Très performant (moins de JS)
- Multi-framework (React, Vue, etc.)
- Excellent pour sites statiques

**Inconvénients**:
- Moins adapté aux apps dynamiques
- Pas de solution auth intégrée
- Nécessite plus de configuration pour dashboard

### Option 4: Create React App + Express
**Description**: Setup React traditionnel avec backend séparé

**Avantages**:
- Flexibilité totale
- Séparation claire frontend/backend

**Inconvénients**:
- Beaucoup plus de configuration
- Deux déploiements à gérer
- Pas de SSR natif
- Plus de maintenance

## Consequences

### Positives
- Développement rapide avec conventions établies
- Déploiement en un clic sur Vercel
- SEO optimisé pour la landing page
- Performance optimisée automatiquement
- Écosystème riche (shadcn/ui, etc.)
- TypeScript intégré = moins de bugs

### Negatives
- Dépendance à l'écosystème Vercel/Next.js
- Updates fréquentes à suivre
- App Router encore en évolution

### Risks
- **Risque**: Breaking changes dans Next.js
  - **Mitigation**: Rester sur version LTS, tester avant upgrade

- **Risque**: Vercel augmente les prix
  - **Mitigation**: Le code est portable, peut migrer vers autre hébergeur

## References
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Vercel Pricing](https://vercel.com/pricing)
- [SOLO_05_ARCHITECTURE_TECHNIQUE.md](../../Documents_prj/SOLO_05_ARCHITECTURE_TECHNIQUE.md)

---
*ADR créé par: Claude*
*Dernière mise à jour: Session actuelle*
