# 📚 CLAUDE CODE PROJECT INDEX - ChartDepth

## Structure Officielle Claude Code

```
.claude/
├── INDEX.md                 ← VOUS ÊTES ICI
├── settings.json            ← Configuration hooks, commands, agents
│
├── knowledge/               ← BASE DE CONNAISSANCES
│   ├── BUSINESS.md         ← Objectifs, personas, KPIs
│   ├── TECHNICAL.md        ← Architecture, DB schema, Stack
│   ├── FEATURES.md         ← Specs fonctionnelles MVP
│   ├── WORKFLOWS.md        ← Processus et routines
│   └── GLOSSARY.md         ← Termes trading et tech
│
├── agents/                  ← SUBAGENTS SPÉCIALISÉS
│   ├── orchestrator.md     ← Agent principal (coordination)
│   ├── frontend-agent.md   ← Spécialiste React/Next.js
│   └── backend-agent.md    ← Spécialiste Supabase/API
│
├── skills/                  ← SKILLS RÉUTILISABLES
│   ├── signal-creator/     ← Créer un signal trading
│   │   └── SKILL.md
│   └── deploy/             ← Déployer sur Vercel
│       └── SKILL.md
│
├── commands/                ← SLASH COMMANDS
│   ├── signal.md           ← /signal - Créer signal
│   ├── status.md           ← /status - État projet
│   ├── plan.md             ← /plan - Planifier feature
│   └── deploy.md           ← /deploy - Déploiement
│
├── adr/                     ← ARCHITECTURE DECISION RECORDS
│   ├── 000-template.md
│   ├── 001-framework-nextjs.md
│   ├── 002-backend-supabase.md
│   ├── 003-payments-stripe.md
│   └── 004-ui-shadcn.md
│
├── progress/                ← SUIVI PDD
│   └── MASTER.md           ← Progression globale
│
└── memory/                  ← MÉMOIRE PERSISTANTE
    ├── CONTEXT.md          ← Contexte inter-sessions
    ├── DECISIONS.md        ← Log des décisions
    └── LEARNINGS.md        ← Apprentissages
```

---

## 🚀 QUICK START

### Début de Session
```
1. CLAUDE.md        → Vue d'ensemble (WHAT/WHY/HOW)
2. memory/CONTEXT.md → État de la dernière session
3. PROJECT_TRACKER.md → Tâches en cours
4. HUMAN_ACTIONS.md  → Blocages à résoudre
```

### Workflow Recommandé: Explore → Plan → Execute
```
EXPLORE  Lire la documentation pertinente (read-only)
   ↓
PLAN     Créer un plan avec /plan [feature]
   ↓
EXECUTE  Implémenter après approbation utilisateur
```

### Commandes Disponibles
| Commande | Usage |
|----------|-------|
| `/status` | Voir l'état du projet |
| `/status progress` | Détail progression PDD |
| `/status blockers` | Voir les blocages |
| `/plan landing-page` | Planifier une feature |
| `/signal EUR/USD BUY...` | Créer un signal |
| `/deploy` | Déployer sur Vercel |

---

## 📋 ACCÈS PAR BESOIN

### Je veux comprendre le projet
| Besoin | Fichier |
|--------|---------|
| Vue rapide | `../CLAUDE.md` |
| Business/Objectifs | `knowledge/BUSINESS.md` |
| Architecture | `knowledge/TECHNICAL.md` |
| Features MVP | `knowledge/FEATURES.md` |
| Vocabulaire | `knowledge/GLOSSARY.md` |

### Je veux travailler
| Besoin | Fichier |
|--------|---------|
| Tâches en cours | `../PROJECT_TRACKER.md` |
| Progression | `progress/MASTER.md` |
| Processus | `knowledge/WORKFLOWS.md` |
| Actions humain | `../HUMAN_ACTIONS.md` |

### Je veux comprendre les choix
| Besoin | Fichier |
|--------|---------|
| Pourquoi Next.js | `adr/001-framework-nextjs.md` |
| Pourquoi Supabase | `adr/002-backend-supabase.md` |
| Pourquoi Stripe | `adr/003-payments-stripe.md` |
| Pourquoi shadcn/ui | `adr/004-ui-shadcn.md` |
| Toutes décisions | `memory/DECISIONS.md` |

### Je veux déléguer
| Agent | Fichier | Expertise |
|-------|---------|-----------|
| Lead | `agents/orchestrator.md` | Coordination |
| Frontend | `agents/frontend-agent.md` | React, Next.js |
| Backend | `agents/backend-agent.md` | Supabase, API |

---

## 🎯 CONTEXTE PROJET

| Métrique | Valeur |
|----------|--------|
| Type | Plateforme signaux trading IA |
| Mode | Solo Bootstrap |
| Budget initial | 15-100€ |
| Prix | 19€/mois |
| Objectif M12 | 130 clients, 2,500€ MRR |

### Stack
```
Frontend:  Next.js 14 + TypeScript + Tailwind + shadcn/ui
Backend:   Supabase (PostgreSQL + Auth + Realtime)
Payments:  Stripe
Hosting:   Vercel
```

### 5 Instruments MVP
EUR/USD • GBP/USD • XAU/USD • BTC/USD • US30

---

## ⚙️ CONFIGURATION (settings.json)

### Hooks Actifs
| Hook | Trigger | Actions |
|------|---------|---------|
| pre-commit | Avant commit | Lint + Types |
| post-code-change | Après modif code | Type check |
| pre-push | Avant push | Build + Tests |

### Agents Configurés
| Agent | Role | Description |
|-------|------|-------------|
| orchestrator | lead | Coordonne les autres agents |
| frontend | specialist | Développement React/Next.js |
| backend | specialist | Développement Supabase/API |

---

## 📊 ÉTAT ACTUEL

| Métrique | Valeur |
|----------|--------|
| Phase | 1 - Préparation |
| Semaine | S1 |
| Progression | ~15% |
| Blocages | 3 |

### Blocages Actifs
1. ⚠️ Compte Supabase non créé
2. ⚠️ Compte Stripe non créé
3. ⚠️ .env.local non configuré

→ Détails: `../HUMAN_ACTIONS.md`

---

## 🔄 MISE À JOUR

| Fichier | Qui | Quand |
|---------|-----|-------|
| `progress/MASTER.md` | Claude | Fin de session |
| `memory/CONTEXT.md` | Claude | Fin de session |
| `memory/DECISIONS.md` | Claude | Nouvelle décision |
| `memory/LEARNINGS.md` | Claude | Nouveau learning |
| `../PROJECT_TRACKER.md` | Claude | Après chaque tâche |
| `../HUMAN_ACTIONS.md` | Claude + Humain | Si blocage |

---

*Structure basée sur les best practices officielles Claude Code (Anthropic 2025)*
*Dernière MAJ: Session actuelle*
