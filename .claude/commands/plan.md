# /plan - Créer un Plan de Feature

## Usage
```
/plan [feature_name]
```

## Exemple
```
/plan landing-page
/plan authentication
/plan stripe-integration
```

## Workflow: Explore → Plan → Execute

### Phase 1: EXPLORE (Automatique)
```
Claude analyse automatiquement:
├── CLAUDE.md (contexte projet)
├── .claude/knowledge/FEATURES.md (specs)
├── .claude/knowledge/TECHNICAL.md (architecture)
├── Fichiers existants liés à la feature
└── Dépendances et prérequis
```

### Phase 2: PLAN (Output)
```
╔══════════════════════════════════════════════════════════════╗
║             PLAN: [FEATURE NAME]                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  📋 RÉSUMÉ                                                    ║
║  ──────────────────────────────────────                      ║
║  Feature: [description]                                       ║
║  Complexité: [Low | Medium | High]                           ║
║  Fichiers à créer: X                                         ║
║  Fichiers à modifier: Y                                       ║
║                                                               ║
║  📦 PRÉREQUIS                                                 ║
║  ──────────────────────────────────────                      ║
║  ✅ Supabase configuré                                        ║
║  ❌ Stripe configuré (BLOQUANT)                               ║
║  ✅ shadcn/ui installé                                        ║
║                                                               ║
║  📝 ÉTAPES                                                    ║
║  ──────────────────────────────────────                      ║
║                                                               ║
║  1. [Backend] Créer la migration SQL                         ║
║     Agent: backend-agent                                     ║
║     Fichier: supabase/migrations/xxx_feature.sql             ║
║     Durée estimée: ~                                         ║
║                                                               ║
║  2. [Backend] Créer l'API Route                              ║
║     Agent: backend-agent                                     ║
║     Fichier: app/api/feature/route.ts                        ║
║     Dépend de: Étape 1                                       ║
║                                                               ║
║  3. [Frontend] Créer les composants                          ║
║     Agent: frontend-agent                                    ║
║     Fichiers:                                                 ║
║       - components/feature/FeatureCard.tsx                   ║
║       - components/feature/FeatureList.tsx                   ║
║     Dépend de: Étape 2                                       ║
║                                                               ║
║  4. [Frontend] Créer la page                                 ║
║     Agent: frontend-agent                                    ║
║     Fichier: app/(dashboard)/feature/page.tsx                ║
║     Dépend de: Étape 3                                       ║
║                                                               ║
║  5. [QA] Écrire les tests                                    ║
║     Agent: orchestrator                                      ║
║     Fichiers:                                                 ║
║       - __tests__/feature.test.ts                            ║
║     Dépend de: Étape 4                                       ║
║                                                               ║
║  🔄 DÉPENDANCES                                               ║
║  ──────────────────────────────────────                      ║
║  [1] ──→ [2] ──→ [3] ──→ [4] ──→ [5]                        ║
║                                                               ║
║  ⚠️  RISQUES                                                  ║
║  ──────────────────────────────────────                      ║
║  - Dépendance à Stripe (bloquant si non configuré)           ║
║  - Complexité RLS policies                                   ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝

Approuver ce plan? [Y/n]
```

### Phase 3: EXECUTE (Après approbation)
```
Exécution séquentielle des étapes:

[1/5] Créer migration SQL...
      ✅ Complété: supabase/migrations/xxx_feature.sql

[2/5] Créer API Route...
      ✅ Complété: app/api/feature/route.ts

[3/5] Créer composants...
      ✅ Complété: components/feature/*.tsx

[4/5] Créer page...
      ✅ Complété: app/(dashboard)/feature/page.tsx

[5/5] Écrire tests...
      ✅ Complété: __tests__/feature.test.ts

═══════════════════════════════════════
✅ Feature [FEATURE NAME] complétée!
   Fichiers créés: 6
   Tests: 5/5 passent
═══════════════════════════════════════
```

## Options

| Option | Description |
|--------|-------------|
| `--dry-run` | Afficher le plan sans exécuter |
| `--skip-tests` | Ne pas générer les tests |
| `--parallel` | Exécuter les étapes indépendantes en parallèle |

## Plans Sauvegardés

Les plans sont sauvegardés dans `.claude/plans/`:
```
.claude/plans/
├── landing-page.md
├── authentication.md
└── stripe-integration.md
```

## Intégration PDD

Après exécution, le plan met à jour:
- `.claude/progress/MASTER.md` (progression feature)
- `PROJECT_TRACKER.md` (tâches complétées)
- `.claude/memory/CONTEXT.md` (contexte session)
