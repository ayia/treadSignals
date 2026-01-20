# 📝 DECISIONS LOG - ChartDepth

## Historique des Décisions

Ce fichier trace toutes les décisions importantes prises au cours du projet.
Permet de comprendre le contexte des choix passés.

---

## Format
```
### [DATE] Décision: [TITRE]
**Contexte**: Pourquoi cette décision était nécessaire
**Décision**: Ce qui a été décidé
**Alternatives**: Ce qui a été considéré
**Conséquences**: Impact de la décision
**Référence**: Lien vers ADR ou document si applicable
```

---

## Décisions Architecturales

### [Session 1] Décision: Framework Frontend → Next.js 14
**Contexte**: Besoin d'un framework full-stack pour MVP rapide
**Décision**: Next.js 14 avec App Router
**Alternatives**: Remix, Astro, CRA + Express
**Conséquences**: Déploiement Vercel gratuit, SSR/SEO natif
**Référence**: [ADR-001](../adr/001-framework-nextjs.md)

---

### [Session 1] Décision: Backend → Supabase
**Contexte**: Besoin d'un backend complet sans infrastructure à gérer
**Décision**: Supabase (PostgreSQL + Auth + Realtime)
**Alternatives**: Firebase, PlanetScale + Auth0, Backend custom
**Conséquences**: Setup rapide, free tier généreux, RLS pour sécurité
**Référence**: [ADR-002](../adr/002-backend-supabase.md)

---

### [Session 1] Décision: Paiements → Stripe
**Contexte**: Besoin de gérer abonnements récurrents
**Décision**: Stripe Checkout + Billing + Customer Portal
**Alternatives**: Paddle, LemonSqueezy, PayPal
**Conséquences**: Frais ~2.5%, mais meilleure DX et UX
**Référence**: [ADR-003](../adr/003-payments-stripe.md)

---

### [Session 1] Décision: Composants UI → shadcn/ui
**Contexte**: Besoin de composants pro sans designer
**Décision**: shadcn/ui (composants copiés, pas npm)
**Alternatives**: Chakra UI, MUI, DaisyUI
**Conséquences**: Contrôle total, Tailwind natif, accessible
**Référence**: [ADR-004](../adr/004-ui-shadcn.md)

---

## Décisions Business

### [Session 1] Décision: Pricing → 19€/mois unique
**Contexte**: Simplifier l'offre pour solo bootstrap
**Décision**: Un seul plan Pro à 19€/mois + Free limité
**Alternatives**: Multiple tiers, pricing annuel, freemium pure
**Conséquences**: Simple à communiquer, facile à gérer
**Référence**: [SOLO_01_BUSINESS_PLAN.md](../../Documents_prj/SOLO_01_BUSINESS_PLAN.md)

---

### [Session 1] Décision: Instruments MVP → 5 seulement
**Contexte**: Focus sur qualité plutôt que quantité
**Décision**: EUR/USD, GBP/USD, XAU/USD, BTC/USD, US30
**Alternatives**: 10+ instruments, focus crypto only
**Conséquences**: Meilleure expertise, moins de charge de travail
**Référence**: [SOLO_01_BUSINESS_PLAN.md](../../Documents_prj/SOLO_01_BUSINESS_PLAN.md)

---

## Décisions Organisationnelles

### [Session 1] Décision: Méthodologie → PDD (Progress-Driven Development)
**Contexte**: Besoin de suivre la progression de manière structurée
**Décision**: Adopter PDD avec matrice Features × 10 étapes
**Alternatives**: Kanban simple, Scrum adapté, pas de méthode
**Conséquences**: Visibilité claire, progression mesurable
**Référence**: [.claude/progress/MASTER.md](../progress/MASTER.md)

---

### [Session 1] Décision: Documentation → Knowledge Base structuré
**Contexte**: Besoin d'accès rapide à l'information pour Claude Code
**Décision**: Structure .claude/ avec knowledge/, adr/, progress/, memory/
**Alternatives**: Un seul fichier CLAUDE.md, documentation classique
**Conséquences**: Navigation efficace, information bien organisée
**Référence**: [.claude/INDEX.md](../INDEX.md)

---

## Décisions Techniques Mineures

### [Session 1] Décision: TypeScript strict mode
**Contexte**: Réduire les bugs et améliorer la maintenance
**Décision**: TypeScript en mode strict
**Conséquences**: Plus de travail initial, moins de bugs runtime

---

### [Session 1] Décision: Tailwind CSS utility-first
**Contexte**: Besoin de styling rapide et cohérent
**Décision**: Tailwind CSS + CSS custom minimal
**Conséquences**: Développement rapide, fichiers CSS presque vides

---

---

## Décisions Git/Workflow

### [Session 2] Décision: Intégration Git-Tâches Intelligente
**Contexte**: Besoin d'automatiser Git sans perdre le contrôle
**Décision**: Auto-commit sur tâches complétées, propose push (jamais auto)
**Alternatives**: Auto-push complet, Git manuel uniquement
**Conséquences**: Équilibre automatisation/contrôle, traçabilité tâches↔commits
**Référence**: [GIT_WORKFLOW.md](../knowledge/GIT_WORKFLOW.md), [git-agent.md](../agents/git-agent.md)

---

### [Session 2] Décision: Jamais Auto-Push vers main
**Contexte**: Sécurité des branches protégées
**Décision**: Push vers main interdit automatiquement, toujours via PR
**Alternatives**: Auto-push avec tests, protection branch GitHub seule
**Conséquences**: Force le workflow PR, meilleure traçabilité, sécurité
**Référence**: [settings.json](../settings.json)

---

### [Session 2] Décision: Co-Author Claude sur tous commits
**Contexte**: Traçabilité des contributions IA
**Décision**: Ajouter "Co-Authored-By: Claude <noreply@anthropic.com>" à chaque commit
**Alternatives**: Pas de mention, préfixe [AI] dans message
**Conséquences**: Transparence, respect conventions GitHub, audit trail
**Référence**: [git-agent.md](../agents/git-agent.md)

---

## Template pour Nouvelles Décisions

```markdown
### [DATE] Décision: [TITRE]
**Contexte**:
**Décision**:
**Alternatives**:
**Conséquences**:
**Référence**:
```

---

*Dernière mise à jour: Session Git-Tâches*
