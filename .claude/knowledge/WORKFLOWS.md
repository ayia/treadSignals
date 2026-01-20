# 🔄 WORKFLOWS KNOWLEDGE - ChartDepth

## Processus et Routines de Travail

Ce document détaille tous les workflows opérationnels.
Référence pour comprendre "comment" exécuter chaque processus.

---

## 📅 ROUTINES QUOTIDIENNES

### Routine Matin (6h30 - 8h00)

```
06:30 - 07:00 │ ANALYSE MARCHÉS
              │ ├── Vérifier calendrier économique
              │ ├── Scanner les 5 instruments
              │ ├── Identifier opportunités
              │ └── Préparer analyse du jour
              │
07:00 - 07:30 │ CRÉATION SIGNAL (si opportunité)
              │ ├── Définir Entry, SL, TP
              │ ├── Calculer R:R
              │ ├── Rédiger analyse courte
              │ └── Publier sur plateforme
              │
07:30 - 08:00 │ COMMUNICATION
              │ ├── Tweet du matin (analyse/signal)
              │ ├── Post Telegram
              │ └── Répondre messages urgents
```

### Routine Soir (19h00 - 20h30)

```
19:00 - 19:30 │ SUIVI SIGNAUX
              │ ├── Vérifier signaux actifs
              │ ├── Mettre à jour statuts (TP/SL)
              │ ├── Calculer résultats journée
              │ └── Archiver signaux fermés
              │
19:30 - 20:00 │ SUPPORT & ENGAGEMENT
              │ ├── Répondre tous les emails
              │ ├── Répondre Telegram
              │ ├── Interagir sur Twitter
              │ └── Engagement communauté
              │
20:00 - 20:30 │ CONTENU
              │ ├── Tweet récap journée
              │ ├── Préparer contenu lendemain
              │ └── Notes pour article semaine
```

---

## 📊 WORKFLOW CRÉATION SIGNAL

### Étape par Étape

```
┌─────────────────────────────────────────────────────────────┐
│                    CRÉATION D'UN SIGNAL                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. ANALYSE TECHNIQUE                                        │
│     ├── Identifier la tendance (H4, D1)                     │
│     ├── Repérer niveaux clés (support/résistance)           │
│     ├── Confirmer avec indicateurs (RSI, MACD, etc.)        │
│     └── Vérifier calendrier économique                      │
│                                                              │
│  2. DÉFINIR LE TRADE                                         │
│     ├── Direction: BUY ou SELL                              │
│     ├── Entry: Prix d'entrée optimal                        │
│     ├── Stop Loss: Sous support ou au-dessus résistance    │
│     ├── TP1: Premier objectif (conservative)                │
│     ├── TP2: Deuxième objectif (extended)                   │
│     └── TP3: Troisième objectif (optionnel, ambitieux)      │
│                                                              │
│  3. CALCULER LE RISQUE                                       │
│     ├── Distance Entry → SL (en pips)                       │
│     ├── Distance Entry → TP1 (en pips)                      │
│     ├── Risk:Reward = TP1 / SL                              │
│     └── R:R minimum acceptable: 1:1                         │
│                                                              │
│  4. ÉVALUER LA CONFIANCE                                     │
│     ├── Haute: Confluence multiple, tendance claire         │
│     ├── Moyenne: Setup correct, quelques doutes             │
│     └── Basse: Ne pas publier                               │
│                                                              │
│  5. RÉDIGER L'ANALYSE                                        │
│     ├── Contexte: Pourquoi ce trade?                        │
│     ├── Technique: Quels indicateurs confirment?            │
│     └── Risque: À quoi faire attention?                     │
│                                                              │
│  6. PUBLIER                                                  │
│     ├── Créer le signal sur l'admin                         │
│     ├── Vérifier toutes les données                         │
│     ├── Cliquer "Publier"                                   │
│     └── Confirmer envoi emails/notifications                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Critères de Validation

| Critère | Minimum | Idéal |
|---------|---------|-------|
| Risk:Reward | 1:1 | 1:1.5+ |
| Confluence | 2 signaux | 3+ signaux |
| Tendance | Claire sur H4 | Claire sur H4 + D1 |
| News | Pas de news impact | Aucune news 4h |

### Template Signal

```markdown
## Signal: {INSTRUMENT} {DIRECTION}

**Entrée**: {ENTRY_PRICE}
**Stop Loss**: {SL_PRICE} ({SL_PIPS} pips)
**Take Profit 1**: {TP1_PRICE} ({TP1_PIPS} pips)
**Take Profit 2**: {TP2_PRICE} ({TP2_PIPS} pips)

**R:R**: 1:{RR_RATIO}
**Confiance**: {CONFIDENCE}

### Analyse
{ANALYSIS_TEXT}

### Gestion
- Déplacer SL au break-even après TP1
- Fermer 50% à TP1, laisser courir le reste

---
*Signal publié le {DATE} à {TIME}*
```

---

## 🔄 WORKFLOW CLÔTURE SIGNAL

### Scénarios

```
┌─────────────────────────────────────────────────────────────┐
│  SCÉNARIO A: TP1 ATTEINT                                     │
│  ├── 1. Mettre status = 'tp1_hit'                           │
│  ├── 2. Calculer pips gagnés                                │
│  ├── 3. Envoyer notification "TP1 ✅"                       │
│  ├── 4. Recommander: SL → Break-even                        │
│  └── 5. Attendre TP2 ou SL (break-even)                     │
├─────────────────────────────────────────────────────────────┤
│  SCÉNARIO B: TP2/TP3 ATTEINT                                │
│  ├── 1. Mettre status = 'tp2_hit' ou 'tp3_hit'              │
│  ├── 2. Calculer pips totaux                                │
│  ├── 3. Fermer le signal complètement                       │
│  └── 4. Envoyer notification récap                          │
├─────────────────────────────────────────────────────────────┤
│  SCÉNARIO C: STOP LOSS TOUCHÉ                               │
│  ├── 1. Mettre status = 'sl_hit'                            │
│  ├── 2. Calculer perte en pips                              │
│  ├── 3. Envoyer notification "SL ❌"                        │
│  └── 4. Ajouter note explicative (optionnel)                │
├─────────────────────────────────────────────────────────────┤
│  SCÉNARIO D: FERMETURE MANUELLE                             │
│  ├── 1. Mettre status = 'closed'                            │
│  ├── 2. Entrer prix de sortie manuel                        │
│  ├── 3. Calculer résultat                                   │
│  ├── 4. Ajouter raison (changement de contexte, etc.)       │
│  └── 5. Envoyer notification                                │
├─────────────────────────────────────────────────────────────┤
│  SCÉNARIO E: ANNULATION                                     │
│  ├── 1. Mettre status = 'cancelled'                         │
│  ├── 2. Ajouter raison (entry non atteint, etc.)            │
│  └── 3. Envoyer notification                                │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 WORKFLOW MARKETING QUOTIDIEN

### Twitter (3-5 tweets/jour)

```
MATIN (07:00-08:00)
├── Tweet 1: Analyse du jour / Signal du jour
│   "🎯 EUR/USD - Analyse du 15 janvier
│    Support à 1.0820, je surveille un rebond...
│    #forex #trading #eurusd"
│
├── Tweet 2 (optionnel): Signal détaillé
│   "🟢 Signal EUR/USD BUY publié!
│    → Détails réservés aux membres Pro
│    Rejoignez: [lien]"

MIDI (12:00-13:00)
├── Tweet 3: Éducatif / Tips
│   "💡 Conseil du jour:
│    Ne risquez jamais plus de 2% par trade.
│    Un SL bien placé = survie long terme."

SOIR (18:00-20:00)
├── Tweet 4: Récap résultats
│   "📊 Résultats du jour:
│    ✅ EUR/USD +45 pips
│    ✅ XAU/USD +120 pips
│    Total: +165 pips
│    Win rate semaine: 67%"
│
└── Tweet 5: Engagement / Question
    "Quel instrument tradez-vous le plus?
     🔵 Forex
     🟡 Or
     🟠 Crypto
     ⚫ Indices"
```

### Telegram

```
SIGNAUX (temps réel)
├── Chaque nouveau signal → Message formaté
├── Chaque update (TP1 atteint) → Notification
└── Clôture → Récap avec résultat

DAILY RECAP (20:00)
├── Résumé de la journée
├── Signaux actifs restants
└── Perspectives lendemain
```

---

## 🔧 WORKFLOW DÉVELOPPEMENT (Claude Code)

### Structure Session

```
┌─────────────────────────────────────────────────────────────┐
│                    SESSION CLAUDE CODE                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. DÉBUT DE SESSION (5 min)                                 │
│     ├── Lire CLAUDE.md                                      │
│     ├── Lire .claude/progress/MASTER.md                     │
│     ├── Lire PROJECT_TRACKER.md                             │
│     └── Identifier les tâches prioritaires                  │
│                                                              │
│  2. PLANIFICATION (5-10 min)                                 │
│     ├── Lister les tâches de la session                     │
│     ├── Vérifier les dépendances                            │
│     ├── Estimer si actions humaines nécessaires             │
│     └── Créer le plan dans TodoWrite                        │
│                                                              │
│  3. EXÉCUTION (Variable)                                     │
│     ├── Traiter tâche par tâche                             │
│     ├── Mettre à jour TodoWrite en temps réel               │
│     ├── Tester chaque fonctionnalité                        │
│     ├── Committer régulièrement                             │
│     └── Noter tout blocage dans HUMAN_ACTIONS.md            │
│                                                              │
│  4. FIN DE SESSION (5 min)                                   │
│     ├── Mettre à jour progress/MASTER.md                    │
│     ├── Mettre à jour PROJECT_TRACKER.md                    │
│     ├── Résumer ce qui a été fait                           │
│     ├── Lister les prochaines étapes                        │
│     └── Signaler les actions humaines requises              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Conventions de Commit

```
Format: type(scope): description

Types:
- feat:     Nouvelle fonctionnalité
- fix:      Correction de bug
- docs:     Documentation
- style:    Formatage (pas de changement de code)
- refactor: Refactoring
- test:     Ajout de tests
- chore:    Maintenance, config

Exemples:
- feat(auth): add login page with Supabase
- fix(signals): correct win rate calculation
- docs(readme): update setup instructions
- style(landing): improve mobile responsiveness
```

### Pattern TDD (Test-Driven Development)

```
1. ÉCRIRE LE TEST
   ├── Définir input attendu
   ├── Définir output attendu
   └── Test échoue (rouge)

2. ÉCRIRE LE CODE MINIMAL
   ├── Implémenter la fonctionnalité
   └── Test passe (vert)

3. REFACTORER
   ├── Améliorer le code
   ├── Test passe toujours
   └── Code propre
```

---

## 📊 WORKFLOW TRACKING PERFORMANCE

### Quotidien

```
Fin de journée:
├── Compter signaux envoyés
├── Compter wins/losses
├── Calculer pips du jour
└── Mettre à jour spreadsheet
```

### Hebdomadaire

```
Dimanche soir:
├── Calculer win rate semaine
├── Calculer pips totaux semaine
├── Identifier meilleur/pire trade
├── Analyser les pertes (pourquoi?)
├── Mettre à jour stats publiques
└── Poster récap Twitter/Telegram
```

### Mensuel

```
Fin de mois:
├── MRR actuel
├── Nouveaux clients
├── Churn (désabonnements)
├── Win rate mensuel
├── Pips totaux
├── Meilleur instrument
├── Analyse tendances
└── Ajuster stratégie si nécessaire
```

---

## 🆘 WORKFLOW SUPPORT CLIENT

### Réception Message

```
1. LIRE ET COMPRENDRE
   ├── De quoi parle le message?
   ├── C'est une question, un problème, une suggestion?
   └── Quel est le niveau d'urgence?

2. CLASSIFIER
   ├── 🔴 URGENT: Problème paiement, accès bloqué
   ├── 🟡 NORMAL: Question sur signal, demande info
   └── 🟢 BASSE: Suggestion, feedback général

3. RÉPONDRE
   ├── Délai max 24h (idéal < 4h)
   ├── Réponse claire et concise
   ├── Proposer solution si problème
   └── Remercier pour le feedback

4. DOCUMENTER (si récurrent)
   ├── Ajouter à FAQ si question fréquente
   └── Noter pour amélioration produit
```

### Templates Réponses

```markdown
## Problème d'accès

Bonjour {name},

Désolé pour ce désagrément! Voici comment résoudre:
1. Essayez de vous déconnecter/reconnecter
2. Videz le cache de votre navigateur
3. Si ça persiste, dites-moi et je vérifie votre compte

Cordialement,
{signature}

---

## Question sur un signal

Bonjour {name},

Merci pour votre question sur le signal {instrument}.

{réponse détaillée}

N'hésitez pas si vous avez d'autres questions!

Cordialement,
{signature}

---

## Demande de remboursement

Bonjour {name},

Je comprends et respecte votre décision.

Votre remboursement sera traité sous 48h.
Puis-je vous demander ce qui n'a pas fonctionné pour vous?
Votre feedback m'aide à améliorer le service.

Merci et bonne continuation dans votre trading!

Cordialement,
{signature}
```

---

## 🚀 WORKFLOW DÉPLOIEMENT

### Pre-Deploy Checklist

```
□ Tous les tests passent
□ Build local fonctionne (npm run build)
□ Variables .env vérifiées
□ Pas de console.log en production
□ Pas de TODO critiques restants
□ Migration DB prête si nécessaire
```

### Déploiement Vercel

```
1. COMMIT ET PUSH
   git add .
   git commit -m "feat: description"
   git push origin main

2. VERCEL BUILD AUTOMATIQUE
   ├── Vercel détecte le push
   ├── Build automatique
   └── Preview déployée

3. VÉRIFICATION
   ├── Tester la preview
   ├── Vérifier fonctionnalités critiques
   └── Promouvoir en production si OK

4. POST-DEPLOY
   ├── Vérifier les logs Vercel
   ├── Tester en production
   └── Monitorer les erreurs
```

---

## 📋 CHECKLISTS RÉCAPITULATIVES

### Checklist Quotidienne

```
MATIN
□ Scanner marchés (30 min)
□ Créer signal si opportunité
□ Tweet analyse matin
□ Post Telegram

SOIR
□ Vérifier/clôturer signaux
□ Répondre messages
□ Tweet récap
□ Préparer lendemain
```

### Checklist Hebdomadaire

```
DIMANCHE
□ Calculer stats semaine
□ Analyser performance
□ Poster récap public
□ Planifier contenu semaine
□ Répondre tous messages en attente
```

### Checklist Mensuelle

```
FIN DE MOIS
□ MRR et finances
□ Stats performance
□ Analyse churn
□ Feedback clients
□ Ajustements stratégie
□ Mise à jour site si nécessaire
```

---

*Dernière mise à jour: Session actuelle*
*Source: SOLO_03_WORKFLOW_PROCESSUS.md*
