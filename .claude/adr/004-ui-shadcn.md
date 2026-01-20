# ADR-004: Choix de shadcn/ui pour les Composants UI

## Status
ACCEPTED

## Date
2024-01-XX (Session initiale)

## Context
Le projet ChartDepth nécessite des composants UI pour:
- Formulaires (login, register, signal form)
- Cards (signals, stats)
- Navigation (header, sidebar, mobile nav)
- Modals et dialogs
- Boutons, inputs, selects
- Tables (historique)
- Toasts/notifications

Contraintes:
- Design professionnel sans designer
- Accessible (a11y)
- Personnalisable (branding)
- Léger (performance)
- Compatible Tailwind CSS

## Decision
**Utiliser shadcn/ui** comme base de composants.

Particularité: shadcn/ui n'est PAS une librairie npm, c'est un système où on copie les composants dans son projet. Cela donne un contrôle total.

## Options Considered

### Option 1: shadcn/ui (CHOISI)
**Description**: Collection de composants copiables basés sur Radix UI

**Avantages**:
- **Pas de dépendance** (code copié dans le projet)
- Personnalisation totale (c'est notre code)
- Basé sur Radix UI (accessible, robuste)
- Tailwind natif
- Très populaire (standard de facto Next.js)
- Design épuré et moderne
- CLI pour ajouter des composants facilement
- Pas de breaking changes (c'est notre code)

**Inconvénients**:
- Maintenance manuelle des composants
- Pas de mise à jour automatique
- Setup initial avec CLI

**Coût**: 0€ (MIT license)

### Option 2: Chakra UI
**Description**: Librairie de composants React

**Avantages**:
- Accessible
- Bien documenté
- Theming facile

**Inconvénients**:
- Runtime CSS-in-JS (performance)
- Pas natif Tailwind
- Dépendance npm
- Bundle size plus gros

### Option 3: MUI (Material UI)
**Description**: Composants Material Design

**Avantages**:
- Très complet
- Bien testé
- Grande communauté

**Inconvénients**:
- Look "Google" difficile à customiser
- Très lourd (bundle size)
- CSS-in-JS
- Pas natif Tailwind

### Option 4: Headless UI + Tailwind
**Description**: Composants sans style de Tailwind Labs

**Avantages**:
- Très léger
- Accessible
- Fait par Tailwind

**Inconvénients**:
- Moins de composants
- Plus de travail de styling
- Pas de design system

### Option 5: DaisyUI
**Description**: Plugin Tailwind avec composants

**Avantages**:
- Très simple
- Tailwind natif
- Thèmes inclus

**Inconvénients**:
- Moins flexible
- Look parfois générique
- Moins de composants avancés

## Consequences

### Positives
- Design pro sans effort
- Contrôle total du code
- Performance optimale (pas de runtime)
- Tailwind natif = cohérence
- Accessible par défaut (Radix)
- Pas de version à maintenir

### Negatives
- Maintenance des composants si bug Radix
- Setup initial avec CLI
- Apprendre les conventions shadcn

### Risks
- **Risque**: Bug dans un composant
  - **Mitigation**: Radix est très stable, on peut fixer nous-mêmes

- **Risque**: Design devient daté
  - **Mitigation**: C'est notre code, on peut moderniser

## Implementation Notes

### Installation
```bash
# Initialiser shadcn/ui
npx shadcn-ui@latest init

# Ajouter des composants
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
# etc.
```

### Structure
```
components/
└── ui/
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    └── ...
```

### Composants Prévus
```
Essentiels:
- button, input, label
- card
- form (avec react-hook-form + zod)
- dialog, alert-dialog
- dropdown-menu
- table
- toast
- tabs
- badge
- avatar

Nice to have:
- command (search)
- sheet (mobile nav)
- skeleton
- switch
- select
```

### Customisation Theme
```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        // Couleurs ChartDepth
        primary: {
          DEFAULT: "#0F172A", // Bleu foncé
          foreground: "#FFFFFF",
        },
        success: "#22C55E", // Vert pour BUY
        danger: "#EF4444",  // Rouge pour SELL
      },
    },
  },
}
```

## References
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)

---
*ADR créé par: Claude*
*Dernière mise à jour: Session actuelle*
