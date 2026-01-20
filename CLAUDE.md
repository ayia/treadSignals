# CLAUDE.md - ChartDepth

> Plateforme de signaux trading IA - Solo Bootstrap
> Stack: Next.js 14 + Supabase + Stripe + Vercel

## WHAT: Project Structure

```
chartdepth/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth routes (login, register)
│   ├── (dashboard)/         # Protected routes
│   ├── (marketing)/         # Public pages (landing)
│   └── api/                 # API Routes
├── components/              # React components
│   ├── ui/                 # shadcn/ui
│   └── [feature]/          # Feature-specific
├── lib/                     # Utilities
│   ├── supabase/           # Supabase clients
│   └── stripe/             # Stripe integration
├── types/                   # TypeScript types
└── .claude/                 # Claude Code config
    ├── knowledge/          # Project knowledge base
    ├── agents/             # Subagent definitions
    ├── skills/             # Reusable skills
    ├── commands/           # Slash commands
    ├── progress/           # PDD tracking
    └── memory/             # Session context
```

## WHY: Project Purpose

**Mission**: Signaux de trading accessibles (19€/mois) avec transparence totale.

**Objectifs**:
- MRR: 2,500€ à 12 mois
- Clients: 130 payants
- Win rate: > 60%

**5 Instruments MVP**: EUR/USD, GBP/USD, XAU/USD, BTC/USD, US30

## HOW: Development Workflow

### Session Protocol
```
START → Read .claude/memory/CONTEXT.md
      → Check PROJECT_TRACKER.md
      → Verify HUMAN_ACTIONS.md for blockers

WORK  → Follow Explore → Plan → Execute pattern
      → Update tracker after each task
      → Document decisions in memory/

END   → Update progress/MASTER.md
      → Update memory/CONTEXT.md
      → Summarize & list next steps
```

### Slash Commands
| Command | Description |
|---------|-------------|
| `/status` | Project status overview |
| `/plan [feature]` | Create implementation plan |
| `/signal` | Create trading signal (admin) |
| `/deploy` | Deploy to Vercel |

### Agents Available
| Agent | Role |
|-------|------|
| `orchestrator` | Coordinates work, manages workflow |
| `frontend-agent` | React/Next.js development |
| `backend-agent` | Supabase/API development |

## Code Conventions

```typescript
// Components: PascalCase + explicit interface
interface Props { data: Signal; }
export function SignalCard({ data }: Props) {}

// Files: PascalCase.tsx (components), kebab-case.ts (utils)
// Imports: @/* alias for absolute paths
// Server Components by default, 'use client' only when needed
```

### Commits
```
type(scope): description

feat(auth): add login page
fix(signals): correct calculation
```

## Quick Reference

### Commands
```bash
npm run dev        # Development
npm run build      # Production build
npm run lint       # Linting
npm test           # Tests
```

### Key Files
| Need | File |
|------|------|
| Current tasks | `PROJECT_TRACKER.md` |
| Human actions | `HUMAN_ACTIONS.md` |
| Progress | `.claude/progress/MASTER.md` |
| Business context | `.claude/knowledge/BUSINESS.md` |
| Tech specs | `.claude/knowledge/TECHNICAL.md` |
| Feature specs | `.claude/knowledge/FEATURES.md` |

### Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
```

## Current Status

**Phase**: 1 - Préparation | **Week**: S1 | **Progress**: ~15%

**Blockers** (see HUMAN_ACTIONS.md):
- [ ] Create Supabase account
- [ ] Create Stripe account
- [ ] Configure .env.local

---
*Config: `.claude/settings.json` | Docs: `.claude/knowledge/`*
