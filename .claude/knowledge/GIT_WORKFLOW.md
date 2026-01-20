# GIT_WORKFLOW.md - Gestion Intelligente Git-Taches

## Vue d'Ensemble

Ce document definit les regles d'integration entre Git et le systeme de taches pour ChartDepth.
L'objectif: commits atomiques, push intelligent, tracabilite complete.

---

## MATRICE DE DECISION - COMMIT

### Quand Committer Automatiquement

| Declencheur | Action | Conditions |
|-------------|--------|------------|
| Tache marquee "completed" | AUTO-COMMIT | lint OK + types OK |
| Milestone PDD atteint (10%, 20%...) | AUTO-COMMIT | Tests passent |
| Documentation seule modifiee | AUTO-COMMIT | Aucune condition |
| Fix de bug valide | AUTO-COMMIT | Tests de regression OK |

### Quand NE PAS Committer

| Situation | Action | Raison |
|-----------|--------|--------|
| Erreurs ESLint | BLOQUER | Code non conforme |
| Erreurs TypeScript | BLOQUER | Code casse |
| .env ou secrets modifies | BLOQUER | Securite |
| Status "in_progress" | ATTENDRE | Travail incomplet |
| Tests echouent | ATTENDRE | Code instable |

### Format de Commit

```
type(scope): description courte

[Corps optionnel - details]

Tache: [Nom de la tache]
Tracker: PROJECT_TRACKER.md
Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## MATRICE DE DECISION - PUSH

### Conditions pour Proposer un Push

```
PROPOSER PUSH si:
  - Branche = feature/* OU bugfix/* OU docs/*
  - ET commits_non_pushes >= 3
  - OU feature_complete = true
  - OU session_terminee = true
  - OU milestone_atteint = true
```

### Branches Protegees (Jamais Auto-Push)

| Branche | Protection | Action Requise |
|---------|------------|----------------|
| `main` | TOTALE | PR obligatoire |
| `master` | TOTALE | PR obligatoire |
| `production` | TOTALE | PR + Review |
| `release/*` | HAUTE | Confirmation explicite |

### Tableau de Decision Push

| Branche | Commits | Tests | Lint | Action |
|---------|---------|-------|------|--------|
| feature/* | >= 3 | PASS | OK | PROPOSER push |
| feature/* | >= 3 | FAIL | OK | ATTENDRE fix tests |
| feature/* | >= 3 | PASS | FAIL | ATTENDRE fix lint |
| bugfix/* | >= 1 | PASS | OK | PROPOSER push |
| hotfix/* | >= 1 | PASS | OK | CONFIRMER puis push |
| main | ANY | ANY | ANY | JAMAIS auto-push |

---

## WORKFLOW INTEGRE

### 1. Debut de Session

```
LIRE: .claude/memory/CONTEXT.md
  -> Recuperer dernier commit hash
  -> Verifier commits non-pushes
  -> Identifier branche courante

LIRE: PROJECT_TRACKER.md
  -> Identifier taches en cours
  -> Priorites du jour
```

### 2. Pendant le Developpement

```
POUR CHAQUE modification_code:
  1. Sauvegarder (auto-save IDE)
  2. Verifier lint en continu
  3. SI tache_partie_complete:
     -> Commit intermediaire (save point)
```

### 3. Tache Completee

```
QUAND tache.status = "completed":
  1. Executer pre-commit hooks
     - npm run lint
     - npm run type-check
  2. SI hooks_passent:
     -> git add [fichiers_lies]
     -> git commit -m "type(scope): description"
     -> Mettre a jour CONTEXT.md
  3. SINON:
     -> Logger erreur
     -> Garder status "in_progress"
```

### 4. Decision de Push

```
EVALUER push_conditions:
  commits_accumules = git rev-list --count HEAD ^origin/[branch]

  SI commits_accumules >= 3:
    AFFICHER: "3 commits non-pushes. Push vers [branch]?"
    ATTENDRE: confirmation_utilisateur
    SI confirme:
      -> git push origin [branch]
      -> Mettre a jour CONTEXT.md
```

### 5. Fin de Session

```
AVANT fermeture:
  1. Verifier changements non-commites
     SI git status --porcelain != "":
       ALERTER: "Changements non commites!"
       PROPOSER: commit ou stash

  2. Verifier commits non-pushes
     SI commits_locaux > commits_remote:
       PROPOSER: "Push avant de quitter?"

  3. Mettre a jour CONTEXT.md:
     - Dernier commit hash
     - Nombre commits non-pushes
     - Branche courante
     - Resume session
```

---

## INTEGRATION PROJECT_TRACKER.md

### Lien Bidirectionnel

```
PROJECT_TRACKER.md          GIT
       |                     |
   [Tache]  <---------->  [Commit]
       |                     |
  status: completed  ->  commit cree
  commit: abc123     <-  hash reference
```

### Mise a Jour Automatique du Tracker

Apres chaque commit lie a une tache:
```markdown
| Tache | Status | Commit |
|-------|--------|--------|
| Hero section | DONE | feat(landing): abc123 |
| Auth login | DOING | - |
```

---

## SIGNAUX D'ALERTE

### Alertes Critiques (Bloquer)

| Signal | Action | Message |
|--------|--------|---------|
| .env modifie | STOP | "Fichier .env detecte - commit bloque" |
| Secrets dans code | STOP | "Secret potentiel detecte - verifier" |
| force push tente | STOP | "Force push interdit" |
| push vers main | STOP | "Push direct vers main interdit" |

### Alertes Informatives

| Signal | Action | Message |
|--------|--------|---------|
| 3+ commits | INFO | "Proposer push?" |
| Feature complete | INFO | "Creer PR?" |
| Fin session | INFO | "Commits non-pushes: N" |
| Conflit potentiel | WARN | "Sync avec main recommande" |

---

## COMMANDES SLASH GIT AMELIOREES

### /git smart-status

Affiche l'etat integre Git + Taches:

```
GIT-TASK STATUS
==================================================
Branche: feature/landing-page
Remote: origin/feature/landing-page

Commits locaux: 5
Commits non-pushes: 3  [PROPOSER PUSH]

Taches liees:
  [DONE] Hero section       -> abc123
  [DONE] Features section   -> def456
  [DOING] Pricing section   -> (en cours)

Recommendation: Push recommande (3 commits)
```

### /git smart-commit

Commit intelligent lie au tracker:

```bash
/git smart-commit
# Detecte automatiquement:
# - Fichiers modifies
# - Tache en cours dans tracker
# - Type de commit (feat/fix/docs)
# - Genere message conventionnel
```

### /git sync-check

Verifie la synchronisation:

```
SYNC CHECK
==================================================
Local:  abc123 (ahead by 3)
Remote: xyz789

Fichiers non-commites: 2
  M  components/Hero.tsx
  A  components/Pricing.tsx

Action recommandee: Commit puis Push
```

---

## BONNES PRATIQUES

### Frequence des Commits

| Contexte | Frequence | Raison |
|----------|-----------|--------|
| Developpement actif | Apres chaque tache | Save points |
| Refactoring | Apres chaque etape | Rollback facile |
| Bug fix | 1 commit par bug | Tracabilite |
| Documentation | Grouper si <5 fichiers | Efficacite |

### Messages de Commit

**BON:**
```
feat(landing): add responsive hero section with CTA

- Implement mobile-first design
- Add call-to-action button
- Connect to signup flow

Tache: Landing Page Hero
Co-Authored-By: Claude <noreply@anthropic.com>
```

**MAUVAIS:**
```
update files
```

### Gestion des Branches

```
main (protected)
  |
  +-- feature/landing-page
  |     +-- commits atomiques
  |     +-- push reguliers
  |     +-- PR quand complete
  |
  +-- bugfix/auth-redirect
  |     +-- 1 commit par fix
  |     +-- push immediat apres test
  |
  +-- docs/api-reference
        +-- commits groupes
        +-- push en fin de session
```

---

## METRIQUES GIT

### Suivi Automatique

| Metrique | Calcul | Seuil Alerte |
|----------|--------|--------------|
| Commits/session | COUNT commits | < 1 = warning |
| Commits non-pushes | local - remote | > 5 = alerte |
| Taille commits | lignes/commit | > 500 = review |
| Frequence push | pushes/jour | < 1 = reminder |

### Dashboard Git (dans /status)

```
GIT METRICS - Session Actuelle
==================================================
Commits crees:        5
Commits pushes:       2
Commits en attente:   3

Lignes ajoutees:    +234
Lignes supprimees:   -45
Fichiers modifies:    12

Dernier push: il y a 2h
Prochaine action: Push recommande
```

---

*Derniere mise a jour: Session actuelle*
*Reference: git-agent.md, settings.json*
