# 📝 PROMPTS OPTIMISÉS - ChartDepth

## Guide des Prompts pour Claude Code

Ce fichier contient tous les prompts optimisés pour interagir efficacement avec Claude Code sur ce projet.

---

## 🚀 DÉMARRAGE DE SESSION

### Reprendre le travail
```
Lis CLAUDE.md et .claude/memory/CONTEXT.md puis dis-moi où on en est et quelles sont les prochaines tâches prioritaires.
```

### Nouvelle session après pause
```
Je reprends le projet après [X jours/semaines]. Fais-moi un résumé de l'état actuel, des blocages, et propose les 3 prochaines actions prioritaires.
```

### Première session du jour
```
Bonjour! Vérifie l'état du projet dans PROJECT_TRACKER.md et HUMAN_ACTIONS.md. Y a-t-il des blocages résolus? Quelles tâches pour aujourd'hui?
```

---

## 📊 STATUS & PROGRESSION

### Voir l'état global
```
/status
```

### Voir la progression détaillée
```
/status progress
```

### Voir les blocages
```
/status blockers
```

### Rapport hebdomadaire
```
Génère un rapport de progression de la semaine avec:
- Tâches complétées
- Progression en %
- Blocages rencontrés
- Objectifs semaine prochaine
```

### Métriques du projet
```
Calcule et affiche les métriques actuelles:
- Progression globale (%)
- Fichiers créés vs planifiés
- Blocages actifs
- Estimation du temps restant par phase
```

---

## 🛠️ DÉVELOPPEMENT

### Planifier une feature
```
/plan [nom-feature]
```

**Exemples:**
```
/plan landing-page
/plan authentication
/plan dashboard
/plan signals-display
/plan stripe-integration
/plan admin-panel
```

### Implémenter une feature complète
```
Implémente la feature [NOM] en suivant le workflow Explore→Plan→Execute:
1. Explore d'abord les fichiers existants
2. Crée un plan détaillé
3. Demande mon approbation
4. Implémente étape par étape
```

### Créer un composant React
```
Crée le composant [NOM] avec:
- TypeScript strict
- Interface Props explicite
- Tailwind CSS
- Responsive design
- Documentation des props

Specs: [décrire le comportement attendu]
```

### Créer une API Route
```
Crée l'API route [METHOD] /api/[path] qui:
- [Décrire le comportement]
- Valide les inputs avec Zod
- Gère les erreurs proprement
- Vérifie l'authentification si nécessaire
- Retourne les types corrects
```

### Créer une page
```
Crée la page [NOM] dans app/[path]/page.tsx avec:
- Layout approprié
- Composants nécessaires
- Data fetching (Server Component si possible)
- Loading et error states
- SEO metadata
```

### Migration base de données
```
Crée une migration Supabase pour:
- Table: [nom_table]
- Colonnes: [liste]
- Relations: [si applicable]
- RLS policies: [décrire les règles d'accès]
- Indexes: [si nécessaire]
```

---

## 🐛 DEBUGGING & FIXES

### Corriger une erreur
```
J'ai cette erreur:
```
[COLLER L'ERREUR]
```

Contexte: [ce que je faisais]
Fichier concerné: [chemin]

Analyse l'erreur et propose une correction.
```

### Erreur TypeScript
```
Erreur TypeScript dans [fichier]:
```
[COLLER L'ERREUR]
```

Corrige le type en gardant la cohérence avec le reste du projet.
```

### Bug de comportement
```
Le comportement attendu: [décrire]
Le comportement actuel: [décrire]
Fichier(s) concerné(s): [liste]

Trouve la cause et corrige.
```

### Performance issue
```
La page/composant [NOM] est lent(e).
Symptômes: [décrire]

Analyse et optimise:
- Rendering inutiles
- Data fetching
- Bundle size
- Images non optimisées
```

---

## 📦 INSTALLATION & CONFIGURATION

### Installer une dépendance
```
Installe [PACKAGE] et configure-le pour le projet:
- Installation
- Configuration de base
- Exemple d'utilisation
- Mise à jour de la documentation si nécessaire
```

### Configurer un service
```
Configure [SERVICE] (Supabase/Stripe/SendGrid) avec:
- Les variables d'environnement nécessaires
- Le code d'initialisation
- Un exemple d'utilisation
- Les types TypeScript
```

### Ajouter un composant shadcn/ui
```
Ajoute le composant shadcn/ui [NOM] et montre-moi un exemple d'utilisation dans le contexte du projet.
```

---

## 🧪 TESTS

### Écrire des tests pour un composant
```
Écris des tests pour le composant [NOM]:
- Tests de rendering
- Tests d'interaction
- Tests des props
- Tests des edge cases

Utilise [Jest/Vitest] et React Testing Library.
```

### Écrire des tests pour une API
```
Écris des tests pour l'API route [PATH]:
- Tests des cas normaux
- Tests des erreurs
- Tests d'authentification
- Tests de validation

Mock Supabase si nécessaire.
```

### Test E2E
```
Écris un test E2E (Playwright) pour le flow [NOM]:
1. [Étape 1]
2. [Étape 2]
3. [Étape 3]
...
Vérifie: [assertions]
```

---

## 📄 DOCUMENTATION

### Documenter une feature
```
Documente la feature [NOM] dans le knowledge base:
- Description fonctionnelle
- Architecture technique
- Fichiers concernés
- Exemples d'utilisation
```

### Créer un ADR
```
Crée un ADR pour la décision: [DESCRIPTION]
- Contexte
- Options considérées (avec avantages/inconvénients)
- Décision prise
- Conséquences
```

### Mettre à jour la documentation
```
Mets à jour la documentation pour refléter:
- [Changement 1]
- [Changement 2]

Fichiers à vérifier: CLAUDE.md, knowledge/*.md, README si existe
```

---

## 🚀 DÉPLOIEMENT

### Pré-déploiement
```
Vérifie que le projet est prêt pour le déploiement:
- Lint
- Types
- Build
- Tests
- Secrets non exposés
- Variables d'environnement
```

### Déployer
```
/deploy
```

### Déployer en production
```
/deploy production
```

### Rollback
```
Le déploiement a causé un problème: [décrire]
Comment faire un rollback?
```

---

## 💼 SIGNAUX TRADING (Spécifique au projet)

### Créer un signal
```
/signal [INSTRUMENT] [DIRECTION] [ENTRY] SL:[SL] TP1:[TP1] TP2:[TP2]
```

**Exemples:**
```
/signal EUR/USD BUY 1.0850 SL:1.0820 TP1:1.0890 TP2:1.0920
/signal XAU/USD SELL 2045.50 SL:2055.00 TP1:2035.00 TP2:2020.00
/signal BTC/USD BUY 42500 SL:41800 TP1:43500 TP2:44500
```

### Clôturer un signal
```
Clôture le signal [ID] avec:
- Résultat: [TP1_HIT / TP2_HIT / SL_HIT / MANUAL]
- Prix de sortie: [PRIX]
- Notes: [optionnel]
```

### Analyser les performances
```
Analyse les performances des signaux:
- Win rate global
- Win rate par instrument
- Pips totaux
- Meilleur/pire trade
- Tendances à identifier
```

---

## 🔧 MAINTENANCE

### Refactoring
```
Refactore [FICHIER/MODULE] pour:
- [Objectif 1]
- [Objectif 2]

Garde la compatibilité avec le code existant.
```

### Mise à jour des dépendances
```
Vérifie les dépendances outdated et propose un plan de mise à jour:
- Dépendances à mettre à jour
- Risques potentiels
- Ordre de mise à jour recommandé
```

### Nettoyage du code
```
Analyse le projet et identifie:
- Code mort / non utilisé
- Imports inutilisés
- TODO/FIXME oubliés
- Inconsistances de style

Propose un plan de nettoyage.
```

### Audit de sécurité
```
Fais un audit de sécurité du code:
- Secrets exposés
- Vulnérabilités XSS/CSRF/SQL injection
- Permissions trop larges
- RLS policies manquantes
```

---

## 📈 ANALYTICS & MONITORING

### Setup analytics
```
Configure les analytics pour tracker:
- Pages vues
- Conversions (inscription, paiement)
- Événements custom
- Performance

Utilise [Vercel Analytics / Google Analytics / Plausible]
```

### Monitoring des erreurs
```
Configure le monitoring des erreurs avec [Sentry/LogRocket]:
- Setup
- Configuration
- Premier test
- Dashboard
```

---

## 🎨 UI/UX

### Améliorer le design
```
Améliore le design de [COMPOSANT/PAGE]:
- Plus moderne
- Meilleur contraste
- Animation subtile
- Responsive amélioré

Garde la cohérence avec le design system existant.
```

### Mode sombre
```
Ajoute le support du mode sombre pour [COMPOSANT/PAGE]:
- Tailwind dark: classes
- Toggle dans les settings
- Persistance du choix
```

### Accessibilité
```
Améliore l'accessibilité de [COMPOSANT/PAGE]:
- Labels ARIA
- Navigation clavier
- Contraste suffisant
- Screen reader friendly
```

---

## 📧 EMAILS

### Créer un template email
```
Crée le template email [NOM] pour [OCCASION]:
- Subject: [suggestion]
- Design: clean, responsive
- Variables: [liste]
- Preview text
```

### Configurer l'envoi d'emails
```
Configure l'envoi d'emails avec [SendGrid/Resend]:
- Setup API
- Fonction d'envoi réutilisable
- Templates
- Test d'envoi
```

---

## 💳 PAIEMENTS

### Setup Stripe
```
Configure Stripe pour:
- Mode test
- Produit: ChartDepth Pro (19€/mois)
- Checkout Session
- Customer Portal
- Webhooks

Avec gestion des erreurs et logs.
```

### Gérer les webhooks Stripe
```
Ajoute le handler pour l'événement Stripe [EVENT_NAME]:
- Validation de la signature
- Logique métier
- Mise à jour DB
- Gestion des erreurs
```

---

## 🔄 WORKFLOW AVANCÉ

### Sprint planning
```
Planifie un sprint de [X] semaines avec:
- Objectifs principaux
- Features à implémenter
- Tâches techniques
- Critères de succès

Base-toi sur PROJECT_TRACKER.md et la progression actuelle.
```

### Estimation
```
Estime le travail restant pour [FEATURE/PHASE]:
- Décomposition en tâches
- Complexité par tâche
- Dépendances
- Risques
```

### Revue de code
```
Fais une revue du code dans [FICHIER/DOSSIER]:
- Qualité du code
- Bugs potentiels
- Améliorations possibles
- Sécurité
- Performance
```

---

## ❓ QUESTIONS & EXPLICATIONS

### Comprendre le code
```
Explique-moi comment fonctionne [FICHIER/FONCTION]:
- But
- Logique
- Dépendances
- Exemples d'utilisation
```

### Comprendre une décision
```
Pourquoi a-t-on choisi [TECHNOLOGIE/APPROCHE] pour ce projet?
Réfère-toi aux ADRs si applicable.
```

### Best practice
```
Quelle est la best practice pour [SITUATION] dans le contexte de ce projet?
```

### Comparaison
```
Compare [OPTION A] vs [OPTION B] pour [CAS D'USAGE]:
- Avantages/Inconvénients
- Performance
- Maintenabilité
- Recommandation pour ce projet
```

---

## 🆘 AIDE & SUPPORT

### Je suis bloqué
```
Je suis bloqué sur [PROBLÈME].
J'ai essayé: [CE QUE J'AI FAIT]
Erreur/Résultat: [DÉTAILS]

Aide-moi à débloquer la situation.
```

### Je ne sais pas par où commencer
```
Je veux implémenter [FEATURE] mais je ne sais pas par où commencer.
Donne-moi un plan étape par étape adapté à ce projet.
```

### Revue avant commit
```
Je vais commit ces changements:
[LISTE DES FICHIERS]

Vérifie qu'il n'y a pas de problèmes avant que je commit.
```

---

## 📋 TEMPLATES RAPIDES

### Nouveau composant
```
Crée components/[feature]/[Name].tsx avec interface Props, TypeScript strict, Tailwind.
```

### Nouvelle page
```
Crée app/[path]/page.tsx avec metadata SEO, layout, et data fetching.
```

### Nouvelle API
```
Crée app/api/[path]/route.ts avec validation Zod, auth check, error handling.
```

### Nouveau test
```
Crée __tests__/[name].test.ts pour [fichier/fonction] avec cas normaux et edge cases.
```

---

## 🔑 PROMPTS MÉTA

### Améliorer un prompt
```
Améliore ce prompt pour qu'il soit plus efficace:
"[MON PROMPT]"
```

### Créer un prompt personnalisé
```
Crée un prompt optimisé pour [CAS D'USAGE] dans le contexte de ce projet.
```

### Sauvegarder un workflow
```
Transforme cette séquence d'actions en un skill réutilisable:
1. [Action 1]
2. [Action 2]
3. [Action 3]
```

---

## 📚 BONNES PRATIQUES PROMPTS

### Structure Efficace
```
[CONTEXTE] - Ce que tu fais / où tu en es
[DEMANDE] - Ce que tu veux précisément
[CONTRAINTES] - Limites, style, format
[OUTPUT] - Ce que tu attends comme résultat
```

### Exemple Optimisé
```
CONTEXTE: Je travaille sur la page dashboard et j'ai déjà le layout.

DEMANDE: Crée le composant StatsCards qui affiche 3 cards avec les métriques:
- Win Rate (%)
- Total Pips (nombre)
- Signaux Actifs (nombre)

CONTRAINTES:
- TypeScript strict
- shadcn/ui Card component
- Responsive (stack sur mobile)
- Données mockées pour l'instant

OUTPUT: Le fichier components/dashboard/StatsCards.tsx complet
```

---

*Dernière mise à jour: Session actuelle*
*Utilise ces prompts pour des interactions efficaces avec Claude Code*
