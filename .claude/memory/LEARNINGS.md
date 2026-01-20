# 🎓 LEARNINGS LOG - ChartDepth

## Apprentissages et Insights

Ce fichier capture les apprentissages importants au fil du projet.
Utile pour éviter de répéter les erreurs et capitaliser sur les succès.

---

## Format
```
### [DATE] Learning: [TITRE]
**Catégorie**: [Tech | Business | Process | Tool]
**Contexte**: Situation qui a mené à cet apprentissage
**Insight**: Ce qui a été appris
**Action**: Comment appliquer cet apprentissage
```

---

## Best Practices Claude Code

### [Session 1] Learning: CLAUDE.md doit rester concis
**Catégorie**: Process
**Contexte**: Recherche sur les best practices Claude Code
**Insight**: Un CLAUDE.md de moins de 300 lignes est plus efficace. Trop d'information noie les instructions importantes.
**Action**: Garder CLAUDE.md focalisé sur l'essentiel, déléguer les détails aux fichiers knowledge/

---

### [Session 1] Learning: Chunking sémantique pour documentation
**Catégorie**: Process
**Contexte**: Recherche sur l'optimisation de docs pour LLM
**Insight**: Les LLM comprennent mieux la documentation quand elle est divisée par sujets (chunking sémantique) plutôt que par taille arbitraire.
**Action**: Chaque fichier .md couvre un sujet unique et cohérent

---

### [Session 1] Learning: Séparation claire Claude vs Humain
**Catégorie**: Process
**Contexte**: Besoin de clarifier qui fait quoi
**Insight**: Avoir un fichier dédié (HUMAN_ACTIONS.md) pour les actions humaines évite la confusion et les blocages.
**Action**: Toujours mettre à jour HUMAN_ACTIONS.md quand une action humaine est requise

---

### [Session 1] Learning: Progress-Driven Development (PDD)
**Catégorie**: Process
**Contexte**: Recherche sur méthodologies solo + IA
**Insight**: La méthodologie PDD avec 10 étapes de 10% permet une progression mesurable et prévisible.
**Action**: Utiliser la matrice Features × Steps pour tracker la progression

---

### [Session 1] Learning: ADRs pour décisions architecture
**Catégorie**: Tech
**Contexte**: Besoin de documenter les choix techniques
**Insight**: Les Architecture Decision Records permettent de comprendre le "pourquoi" des choix, pas seulement le "quoi".
**Action**: Créer un ADR pour chaque décision technique significative

---

## Insights Techniques

### [Session 1] Learning: Supabase RLS = sécurité native
**Catégorie**: Tech
**Contexte**: Choix de Supabase comme backend
**Insight**: Row Level Security permet de sécuriser les données sans écrire de code backend - la DB gère les permissions.
**Action**: Définir RLS policies pour chaque table dès la création

---

### [Session 1] Learning: shadcn/ui = contrôle total
**Catégorie**: Tech
**Contexte**: Choix de librairie UI
**Insight**: shadcn/ui copie le code dans le projet au lieu d'être une dépendance npm, ce qui donne un contrôle total et évite les breaking changes.
**Action**: Ajouter les composants avec `npx shadcn-ui add` au lieu de npm install

---

## Insights Business

### [Session 1] Learning: Un seul prix = simplicité
**Catégorie**: Business
**Contexte**: Définition du pricing
**Insight**: Pour un projet solo, un seul plan payant (19€) est plus simple à gérer et communiquer que multiple tiers.
**Action**: Résister à la tentation d'ajouter des plans jusqu'à ce que le marché le demande

---

### [Session 1] Learning: 5 instruments > 50 médiocres
**Catégorie**: Business
**Contexte**: Définition du scope MVP
**Insight**: Mieux vaut maîtriser 5 instruments et avoir un bon win rate que proposer 50 instruments avec des résultats moyens.
**Action**: Rester focalisé sur les 5 instruments MVP, pas d'expansion prématurée

---

## Erreurs à Éviter

### [Session 1] Learning: Ne pas coder avant de planifier
**Catégorie**: Process
**Contexte**: Tendance à vouloir coder immédiatement
**Insight**: Claude Code est plus efficace avec un plan clair. Le "Research & Plan First" améliore significativement les résultats.
**Action**: Toujours lire la documentation et planifier avant de générer du code

---

### [Session 1] Learning: Ne pas over-engineer
**Catégorie**: Tech
**Contexte**: Tendance à vouloir tout prévoir
**Insight**: Pour un MVP solo, la simplicité prime. Pas besoin de microservices, d'event sourcing, ou de patterns enterprise.
**Action**: YAGNI - You Ain't Gonna Need It. Implémenter le minimum viable.

---

---

## Insights Git & Automation

### [Session 2] Learning: Commits atomiques = save points
**Catégorie**: Process
**Contexte**: Recherche best practices Git avec AI agents
**Insight**: Traiter les commits comme des "save points" dans un jeu - si une session AI déraille, on peut toujours revenir en arrière. Commits fréquents > gros commits.
**Action**: 1 tâche complétée = 1 commit, même si petit

---

### [Session 2] Learning: Auto-push dangereux sur main
**Catégorie**: Process
**Contexte**: Étude des workflows Copilot/Claude Code
**Insight**: GitHub Copilot et Claude Code recommandent de JAMAIS auto-push vers main/master. Même les agents ne s'auto-approuvent pas les PR.
**Action**: Toujours proposer le push, jamais l'exécuter automatiquement vers branches protégées

---

### [Session 2] Learning: Feature branches pour isolation
**Catégorie**: Tech
**Contexte**: Best practices Git worktrees et branches
**Insight**: Travailler sur feature/* permet auto-commit/push sans risque. L'isolation permet l'autonomie de l'agent.
**Action**: Toujours créer une branche feature avant de commencer une nouvelle fonctionnalité

---

### [Session 2] Learning: Lien commit↔tracker essentiel
**Catégorie**: Process
**Contexte**: Intégration Git avec task management
**Insight**: Référencer la tâche du PROJECT_TRACKER.md dans chaque commit crée une traçabilité bidirectionnelle précieuse.
**Action**: Format commit: "type(scope): description\n\nTâche: [nom tâche]"

---

### [Session 2] Learning: Hooks pre-commit = filet de sécurité
**Catégorie**: Tech
**Contexte**: Automatisation qualité code
**Insight**: Les hooks pre-commit (lint, types) empêchent de committer du code cassé. C'est le dernier rempart avant que les erreurs entrent dans l'historique Git.
**Action**: Toujours exécuter npm run lint && npm run type-check avant commit

---

## Template pour Nouveaux Learnings

```markdown
### [DATE] Learning: [TITRE]
**Catégorie**: [Tech | Business | Process | Tool]
**Contexte**:
**Insight**:
**Action**:
```

---

*Dernière mise à jour: Session Git-Tâches*
