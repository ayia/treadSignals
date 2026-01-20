# AUTOMATION.md - Systeme d'Automation ChartDepth

## Vue d'Ensemble

Ce document definit le systeme d'automation complet pour garantir la qualite du code
et l'integration continue du projet ChartDepth.

---

## STACK D'AUTOMATION

| Outil | Role | Raison du Choix |
|-------|------|-----------------|
| **Husky** | Git hooks manager | Standard industrie, 7M+ downloads/semaine |
| **lint-staged** | Linter sur fichiers stages | Performance, ne lint que les changements |
| **commitlint** | Validation messages commit | Enforce Conventional Commits |
| **Vitest** | Tests unitaires/composants | 10x plus rapide que Jest, natif ESM |
| **Playwright** | Tests E2E | Parallelisation gratuite, cross-browser |
| **GitHub Actions** | CI/CD | Integration native GitHub + Vercel |

---

## HOOKS GIT (Husky)

### Pre-commit Hook

Execute automatiquement avant chaque commit:

```bash
# .husky/pre-commit
pnpm exec lint-staged
```

**Actions:**
1. ESLint fix sur fichiers *.ts, *.tsx
2. Prettier format sur tous fichiers stages
3. Bloque si erreurs non corrigibles

### Commit-msg Hook

Valide le format du message de commit:

```bash
# .husky/commit-msg
pnpm exec commitlint --edit $1
```

**Format requis:** `type(scope): description`

### Pre-push Hook

Execute avant chaque push:

```bash
# .husky/pre-push
pnpm run type-check
pnpm run test
```

**Actions:**
1. Verification TypeScript complete
2. Execution tests unitaires
3. Bloque si echecs

---

## LINT-STAGED CONFIGURATION

```javascript
// lint-staged.config.js
module.exports = {
  // TypeScript/JavaScript - lint + format
  '*.{ts,tsx}': [
    'eslint --fix',
    'prettier --write'
  ],
  '*.{js,jsx}': [
    'eslint --fix',
    'prettier --write'
  ],
  // Autres fichiers - format seulement
  '*.{json,md,yml,yaml,css}': [
    'prettier --write'
  ]
}
```

---

## COMMITLINT CONFIGURATION

```javascript
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',     // Nouvelle fonctionnalite
      'fix',      // Correction bug
      'docs',     // Documentation
      'style',    // Formatage
      'refactor', // Refactoring
      'test',     // Tests
      'chore',    // Maintenance
      'ci',       // CI/CD
      'perf',     // Performance
      'build'     // Build system
    ]],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100]
  }
}
```

---

## VITEST CONFIGURATION

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/e2e/**', '**/.next/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['**/*.d.ts', '**/*.config.*', '**/types/**'],
      thresholds: {
        lines: 60,
        functions: 60,
        branches: 50,
        statements: 60
      }
    }
  }
})
```

### Fichier Setup Vitest

```typescript
// vitest.setup.ts
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(() => cleanup())

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn()
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/'
}))

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />
}))
```

---

## PLAYWRIGHT CONFIGURATION

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

const PORT = process.env.PORT || 3000
const baseURL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  webServer: {
    command: 'pnpm dev',
    url: baseURL,
    timeout: 120000,
    reuseExistingServer: !process.env.CI
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
})
```

---

## GITHUB ACTIONS CI/CD

### Workflow Principal: `.github/workflows/ci.yml`

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    name: Lint, Type Check & Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm type-check
      - run: pnpm test

  build:
    name: Build
    runs-on: ubuntu-latest
    needs: validate
    steps:
      - uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - name: Cache Next.js
        uses: actions/cache@v4
        with:
          path: .next/cache
          key: nextjs-${{ hashFiles('**/pnpm-lock.yaml') }}

      - run: pnpm install --frozen-lockfile
      - run: pnpm build
```

---

## SCRIPTS PACKAGE.JSON

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "format": "prettier --check .",
    "format:fix": "prettier --write .",
    "validate": "pnpm lint && pnpm type-check && pnpm test",
    "prepare": "husky"
  }
}
```

---

## DEPENDANCES A INSTALLER

### DevDependencies

```bash
pnpm add -D \
  husky \
  lint-staged \
  @commitlint/cli \
  @commitlint/config-conventional \
  vitest \
  @vitejs/plugin-react \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/dom \
  jsdom \
  vite-tsconfig-paths \
  @vitest/coverage-v8 \
  @playwright/test \
  prettier \
  eslint-config-prettier
```

### Initialisation Husky

```bash
pnpm exec husky init
```

### Installation Playwright Browsers

```bash
pnpm exec playwright install chromium
```

---

## MATRICE DE DECLENCHEMENT

| Action | Pre-commit | Pre-push | CI (PR) | CI (main) |
|--------|------------|----------|---------|-----------|
| ESLint | X | | X | X |
| Prettier | X | | X | X |
| TypeScript | | X | X | X |
| Tests Unit | | X | X | X |
| Tests E2E | | | X | X |
| Build | | | X | X |
| Deploy | | | Preview | Production |

---

## INTEGRATION AVEC GIT-TACHES

### Workflow Automatise

```
1. Developpeur fait des changements
   |
2. git add .
   |
3. git commit -m "feat(auth): add login"
   |
   +---> Pre-commit hook
   |     - lint-staged (ESLint + Prettier)
   |     - Si echec: commit bloque
   |
   +---> Commit-msg hook
   |     - commitlint valide format
   |     - Si echec: commit bloque
   |
4. Commit cree
   |
5. git push
   |
   +---> Pre-push hook
   |     - Type-check complet
   |     - Tests unitaires
   |     - Si echec: push bloque
   |
6. Push vers GitHub
   |
   +---> GitHub Actions CI
         - Lint + Type-check + Tests + Build
         - Si echec: PR bloque
         - Si succes: Vercel deploy preview
```

### Synchronisation avec PROJECT_TRACKER.md

Quand une tache est completee et les hooks passent:
1. Auto-commit declenche
2. Hooks valident qualite
3. Push propose si >=3 commits
4. CONTEXT.md mis a jour avec status

---

## THRESHOLDS DE QUALITE

| Metrique | Minimum | Cible |
|----------|---------|-------|
| Coverage lignes | 60% | 80% |
| Coverage functions | 60% | 80% |
| Coverage branches | 50% | 70% |
| Lint errors | 0 | 0 |
| Type errors | 0 | 0 |
| Build time | - | <2min |
| Test time | - | <1min |

---

## FICHIERS A CREER

### Structure

```
CHARTDEPTH/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
│   ├── pre-commit
│   ├── commit-msg
│   └── pre-push
├── e2e/
│   └── example.spec.ts
├── vitest.config.ts
├── vitest.setup.ts
├── playwright.config.ts
├── commitlint.config.js
├── lint-staged.config.js
├── .prettierrc
└── .prettierignore
```

---

## COMMANDES UTILES

```bash
# Verifier setup complet
pnpm validate

# Lancer tests en mode watch
pnpm test:watch

# Voir coverage
pnpm test:coverage

# E2E avec UI
pnpm test:e2e:ui

# Format tout le projet
pnpm format:fix

# Bypass hooks (urgence seulement)
git commit --no-verify -m "wip: urgent fix"
```

---

## TROUBLESHOOTING

### Hooks ne s'executent pas

```bash
# Reinstaller Husky
rm -rf .husky
pnpm exec husky init
```

### TypeScript lent

```bash
# Utiliser incremental
# Dans tsconfig.json: "incremental": true
```

### Tests E2E echouent en CI

```bash
# Verifier que webServer demarre
# Augmenter timeout si necessaire
```

---

*Derniere mise a jour: Session Automation*
*Reference: Recherche best practices 2025-2026*
