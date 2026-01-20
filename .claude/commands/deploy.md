# /deploy - Déployer sur Vercel

## Usage
```
/deploy [environment]
```

## Environments

| Environment | Description | Branch |
|-------------|-------------|--------|
| `preview` | Preview deployment (défaut) | Current branch |
| `production` | Production deployment | main |

## Workflow

### 1. Pre-Deploy Checks (Automatique)
```
╔══════════════════════════════════════════════════════════════╗
║                    PRE-DEPLOY CHECKS                          ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🔍 Vérifications en cours...                                ║
║                                                               ║
║  [1/6] Lint                                                  ║
║        npm run lint                                          ║
║        ✅ Passed (0 warnings, 0 errors)                       ║
║                                                               ║
║  [2/6] TypeScript                                            ║
║        npm run type-check                                    ║
║        ✅ Passed (no type errors)                             ║
║                                                               ║
║  [3/6] Build                                                 ║
║        npm run build                                         ║
║        ✅ Passed (built in 45s)                               ║
║                                                               ║
║  [4/6] Tests                                                 ║
║        npm test                                              ║
║        ✅ Passed (24/24 tests)                                ║
║                                                               ║
║  [5/6] Security                                              ║
║        Checking for exposed secrets...                       ║
║        ✅ Passed (no secrets detected)                        ║
║                                                               ║
║  [6/6] Environment Variables                                 ║
║        Checking required vars...                             ║
║        ✅ Passed (all vars set)                               ║
║                                                               ║
║  ═══════════════════════════════════════════════════════════ ║
║  ✅ All checks passed! Ready to deploy.                       ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

### 2. Confirmation
```
╔══════════════════════════════════════════════════════════════╗
║                    DEPLOYMENT SUMMARY                         ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  Environment:  preview                                        ║
║  Branch:       feature/landing-page                          ║
║  Commit:       abc1234 "feat(landing): add hero section"     ║
║                                                               ║
║  Changes since last deploy:                                   ║
║  ├── 12 files changed                                        ║
║  ├── 3 components added                                      ║
║  └── 1 API route modified                                    ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝

Proceed with deployment? [Y/n]
```

### 3. Deployment
```
╔══════════════════════════════════════════════════════════════╗
║                    DEPLOYING...                               ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  [1/4] Committing changes...                                 ║
║        git add . && git commit -m "deploy: landing page"     ║
║        ✅ Committed                                           ║
║                                                               ║
║  [2/4] Pushing to remote...                                  ║
║        git push origin feature/landing-page                  ║
║        ✅ Pushed                                              ║
║                                                               ║
║  [3/4] Vercel building...                                    ║
║        ████████████████████████████████████░░░░  85%         ║
║        Installing dependencies...                             ║
║        Building Next.js app...                                ║
║        ✅ Build successful                                    ║
║                                                               ║
║  [4/4] Deploying to edge...                                  ║
║        ✅ Deployed to 12 regions                              ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

### 4. Post-Deploy
```
╔══════════════════════════════════════════════════════════════╗
║                    DEPLOYMENT SUCCESSFUL!                     ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🚀 Your app is live!                                        ║
║                                                               ║
║  Preview URL:                                                 ║
║  https://chartdepth-abc123.vercel.app                        ║
║                                                               ║
║  Production URL (if main):                                   ║
║  https://chartdepth.com                                      ║
║                                                               ║
║  ────────────────────────────────────────────────────────    ║
║                                                               ║
║  📊 Deployment Stats:                                         ║
║  ├── Build time: 47s                                         ║
║  ├── Bundle size: 245 KB                                     ║
║  ├── First Load JS: 89 KB                                    ║
║  └── Regions: 12                                             ║
║                                                               ║
║  🔗 Quick Links:                                              ║
║  ├── Vercel Dashboard: https://vercel.com/...                ║
║  ├── Deployment Logs: https://vercel.com/.../logs            ║
║  └── Analytics: https://vercel.com/.../analytics             ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

## Error Handling

### Si les checks échouent
```
╔══════════════════════════════════════════════════════════════╗
║                    ❌ CHECKS FAILED                           ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  [2/6] TypeScript                                            ║
║        ❌ FAILED                                              ║
║                                                               ║
║        Error in components/SignalCard.tsx:42                 ║
║        Property 'price' does not exist on type 'Signal'      ║
║                                                               ║
║  ────────────────────────────────────────────────────────    ║
║                                                               ║
║  Options:                                                     ║
║  [1] Fix automatically (Claude will attempt to fix)          ║
║  [2] Show full error details                                 ║
║  [3] Abort deployment                                         ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

## Options

| Option | Description |
|--------|-------------|
| `--force` | Skip checks (non recommandé) |
| `--no-commit` | Deploy without committing |
| `--message "msg"` | Custom commit message |

## Rollback

Si problème après déploiement:
```
/deploy rollback
```

Restaure le dernier déploiement stable.
