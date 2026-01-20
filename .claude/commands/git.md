# /git - Commandes Git

## Usage
```
/git [command] [options]
```

## Commandes Disponibles

### /git status
Affiche l'état du repository.

```
╔══════════════════════════════════════════════════════════════╗
║                    GIT STATUS                                 ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  📁 Repository: treadSignals                                  ║
║  🌿 Branch: feature/landing-page                             ║
║  🔗 Remote: https://github.com/ayia/treadSignals.git         ║
║                                                               ║
║  📊 Status:                                                   ║
║  ├── ✅ Up to date with origin/main                          ║
║  ├── 📝 3 files modified                                     ║
║  ├── ➕ 2 files added                                        ║
║  └── 🗑️ 0 files deleted                                      ║
║                                                               ║
║  📄 Changed Files:                                            ║
║  ├── M  components/landing/Hero.tsx                          ║
║  ├── M  app/(marketing)/page.tsx                             ║
║  ├── M  styles/globals.css                                   ║
║  ├── A  components/landing/Features.tsx                      ║
║  └── A  components/landing/Pricing.tsx                       ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

### /git commit [message]
Commit les changements avec un message conventionnel.

**Usage:**
```
/git commit feat(landing): add hero section
/git commit fix(auth): correct login redirect
/git commit docs(readme): update installation
```

**Workflow:**
1. Vérifie qu'il y a des changements
2. Exécute les pre-commit hooks (lint, types)
3. Stage tous les fichiers modifiés
4. Crée le commit avec le message

**Output:**
```
╔══════════════════════════════════════════════════════════════╗
║                    COMMIT CREATED                             ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ✅ Pre-commit checks passed                                  ║
║     ├── Lint: ✓                                              ║
║     └── Types: ✓                                             ║
║                                                               ║
║  📝 Commit: feat(landing): add hero section                  ║
║  🔑 Hash: a1b2c3d                                            ║
║  📁 Files: 5 changed, 234 insertions, 12 deletions           ║
║                                                               ║
║  💡 Next: /git push to sync with remote                      ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

### /git push
Push les commits vers le remote.

**Output:**
```
╔══════════════════════════════════════════════════════════════╗
║                    PUSH SUCCESSFUL                            ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🚀 Pushed to origin/feature/landing-page                    ║
║                                                               ║
║  📊 Commits pushed: 3                                         ║
║  ├── a1b2c3d feat(landing): add hero section                 ║
║  ├── d4e5f6g feat(landing): add features section             ║
║  └── h7i8j9k feat(landing): add pricing section              ║
║                                                               ║
║  🔗 View on GitHub:                                           ║
║  https://github.com/ayia/treadSignals/tree/feature/landing   ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

### /git branch [name]
Créer et switcher vers une nouvelle branche.

**Usage:**
```
/git branch feature/auth-system
/git branch bugfix/signal-display
/git branch hotfix/critical-fix
```

**Output:**
```
╔══════════════════════════════════════════════════════════════╗
║                    BRANCH CREATED                             ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🌿 Created: feature/auth-system                             ║
║  📍 From: main (a1b2c3d)                                     ║
║  ✅ Switched to feature/auth-system                          ║
║                                                               ║
║  💡 Start working and commit your changes                    ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

### /git pr [title]
Créer une Pull Request sur GitHub.

**Usage:**
```
/git pr "Add landing page with hero and pricing sections"
```

**Workflow:**
1. Vérifie que la branche est pushée
2. Vérifie qu'il y a des commits à merger
3. Génère la description automatiquement
4. Crée la PR sur GitHub

**Output:**
```
╔══════════════════════════════════════════════════════════════╗
║                    PULL REQUEST CREATED                       ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  📋 PR #12: Add landing page with hero and pricing sections  ║
║                                                               ║
║  🌿 feature/landing-page → main                              ║
║  📊 Commits: 5                                                ║
║  📁 Files changed: 12                                         ║
║  ➕ 456 additions, ➖ 23 deletions                            ║
║                                                               ║
║  📝 Description:                                              ║
║  ## Summary                                                   ║
║  - Added Hero component with CTA                             ║
║  - Added Features section (3 columns)                        ║
║  - Added Pricing cards (Free/Pro)                            ║
║  - Responsive design for all breakpoints                     ║
║                                                               ║
║  🔗 View PR:                                                  ║
║  https://github.com/ayia/treadSignals/pull/12                ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

### /git sync
Synchroniser avec main (pull + rebase).

**Output:**
```
╔══════════════════════════════════════════════════════════════╗
║                    SYNC COMPLETE                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🔄 Fetched from origin                                       ║
║  ✅ Rebased on origin/main                                    ║
║  📊 3 new commits from main                                   ║
║                                                               ║
║  Your branch is now up to date!                              ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

### /git merge [branch]
Merger une branche dans la branche actuelle.

**Usage:**
```
/git merge feature/landing-page
```

---

### /git log
Afficher l'historique des commits.

**Output:**
```
╔══════════════════════════════════════════════════════════════╗
║                    COMMIT HISTORY                             ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  a1b2c3d (HEAD) feat(landing): add pricing section           ║
║  │ 2 hours ago                                                ║
║  │                                                            ║
║  d4e5f6g feat(landing): add features section                 ║
║  │ 3 hours ago                                                ║
║  │                                                            ║
║  h7i8j9k feat(landing): add hero section                     ║
║  │ 4 hours ago                                                ║
║  │                                                            ║
║  m1n2o3p (origin/main) chore: initial setup                  ║
║    1 day ago                                                  ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

### /git stash [message]
Mettre les changements de côté temporairement.

**Usage:**
```
/git stash "WIP: working on auth"
/git stash pop
/git stash list
```

---

### /git undo
Annuler le dernier commit (garde les changements).

**Output:**
```
╔══════════════════════════════════════════════════════════════╗
║                    COMMIT UNDONE                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ↩️ Undid commit: a1b2c3d                                     ║
║  📝 Message was: feat(landing): add pricing section          ║
║                                                               ║
║  ✅ Changes are preserved in working directory               ║
║  💡 You can modify and commit again                          ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

### /git release [version]
Créer une release avec tag.

**Usage:**
```
/git release 1.0.0
/git release 0.2.0-beta
```

**Output:**
```
╔══════════════════════════════════════════════════════════════╗
║                    RELEASE CREATED                            ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🏷️ Tag: v1.0.0                                               ║
║  📝 Release: ChartDepth v1.0.0                               ║
║                                                               ║
║  📋 Changelog:                                                ║
║  - feat(auth): complete authentication system                ║
║  - feat(signals): signal display and history                 ║
║  - feat(stripe): payment integration                         ║
║  - fix(ui): responsive issues                                ║
║                                                               ║
║  🔗 View release:                                             ║
║  https://github.com/ayia/treadSignals/releases/tag/v1.0.0   ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Raccourcis

| Raccourci | Équivalent |
|-----------|------------|
| `/git s` | `/git status` |
| `/git c` | `/git commit` |
| `/git p` | `/git push` |
| `/git b` | `/git branch` |
| `/git l` | `/git log` |

---

## Conventions de Commit

```
Type obligatoire:
feat     → Nouvelle fonctionnalité
fix      → Correction de bug
docs     → Documentation
style    → Formatage
refactor → Refactoring
test     → Tests
chore    → Maintenance

Format:
type(scope): description

Exemples:
feat(auth): add Google OAuth login
fix(signals): correct profit calculation
docs(api): add endpoint documentation
```

---

*Remote: https://github.com/ayia/treadSignals.git*
