# 📖 GLOSSARY - ChartDepth

## Termes et Définitions

Ce document contient tous les termes techniques et métier utilisés dans le projet.
Référence pour comprendre le vocabulaire spécialisé.

---

## 🎯 TERMES TRADING

### Basiques

| Terme | Définition |
|-------|------------|
| **Signal** | Recommandation de trade avec Entry, SL, et TP |
| **Entry** | Prix d'entrée recommandé pour le trade |
| **Stop Loss (SL)** | Prix de sortie en cas de perte, limite le risque |
| **Take Profit (TP)** | Prix de sortie en cas de gain, objectif de profit |
| **TP1, TP2, TP3** | Objectifs de profit progressifs |
| **Pip** | Plus petite unité de variation de prix (0.0001 pour forex) |
| **Spread** | Différence entre prix d'achat et de vente |
| **BUY (Long)** | Achat, on gagne si le prix monte |
| **SELL (Short)** | Vente à découvert, on gagne si le prix baisse |

### Intermédiaires

| Terme | Définition |
|-------|------------|
| **R:R (Risk:Reward)** | Ratio entre risque (SL) et récompense (TP). Ex: 1:2 = risque 1 pour gagner 2 |
| **Win Rate** | Pourcentage de trades gagnants. Ex: 65% = 65 trades sur 100 gagnants |
| **Break-even** | Déplacer le SL au prix d'entrée pour ne plus risquer de perte |
| **Confluence** | Plusieurs signaux techniques qui confirment la même direction |
| **Support** | Niveau de prix où le marché a tendance à rebondir vers le haut |
| **Résistance** | Niveau de prix où le marché a tendance à rebondir vers le bas |
| **Tendance** | Direction générale du marché (haussière, baissière, neutre) |

### Avancés

| Terme | Définition |
|-------|------------|
| **Timeframe** | Période de temps d'un graphique (M15, H1, H4, D1) |
| **Price Action** | Analyse basée uniquement sur les mouvements de prix |
| **RSI** | Relative Strength Index, indicateur de surachat/survente |
| **MACD** | Moving Average Convergence Divergence, indicateur de momentum |
| **Pullback** | Mouvement temporaire contre la tendance principale |
| **Breakout** | Cassure d'un niveau clé (support ou résistance) |
| **Consolidation** | Phase où le prix évolue dans une fourchette étroite |

---

## 💹 INSTRUMENTS

### Forex

| Symbole | Nom | Description |
|---------|-----|-------------|
| EUR/USD | Euro/Dollar | Paire la plus tradée au monde |
| GBP/USD | Livre/Dollar | Aussi appelé "Cable" |
| USD/JPY | Dollar/Yen | Sensible aux différentiels de taux |
| AUD/USD | Dollar Australien/USD | Sensible aux commodities |

### Commodities

| Symbole | Nom | Description |
|---------|-----|-------------|
| XAU/USD | Or (Gold) | Valeur refuge, sensible au dollar |
| XAG/USD | Argent (Silver) | Plus volatile que l'or |
| USOIL | Pétrole WTI | Sensible à la géopolitique |

### Indices

| Symbole | Nom | Description |
|---------|-----|-------------|
| US30 | Dow Jones | 30 plus grandes entreprises US |
| US500 | S&P 500 | 500 plus grandes entreprises US |
| US100 | Nasdaq 100 | 100 plus grandes tech US |
| GER40 | DAX 40 | 40 plus grandes entreprises allemandes |

### Crypto

| Symbole | Nom | Description |
|---------|-----|-------------|
| BTC/USD | Bitcoin/Dollar | Première crypto, référence du marché |
| ETH/USD | Ethereum/Dollar | Deuxième crypto, smart contracts |

---

## 📊 TERMES BUSINESS

### Métriques SaaS

| Terme | Définition | Formule |
|-------|------------|---------|
| **MRR** | Monthly Recurring Revenue | Σ(abonnements mensuels actifs) |
| **ARR** | Annual Recurring Revenue | MRR × 12 |
| **Churn** | Taux de désabonnement | (clients perdus / clients début) × 100 |
| **LTV** | Lifetime Value | ARPU / Churn mensuel |
| **CAC** | Customer Acquisition Cost | Coûts marketing / nouveaux clients |
| **ARPU** | Average Revenue Per User | MRR / nombre de clients |
| **NPS** | Net Promoter Score | % promoteurs - % détracteurs |

### Conversion

| Terme | Définition |
|-------|------------|
| **Lead** | Visiteur qui a montré de l'intérêt (email capturé) |
| **Conversion** | Transformation d'un visiteur en client payant |
| **Funnel** | Parcours utilisateur de la découverte à l'achat |
| **CTA** | Call To Action, bouton/lien incitant à l'action |
| **Landing Page** | Page d'atterrissage optimisée pour la conversion |

---

## 💻 TERMES TECHNIQUES

### Frontend

| Terme | Définition |
|-------|------------|
| **Next.js** | Framework React pour applications web modernes |
| **React** | Bibliothèque JavaScript pour interfaces utilisateur |
| **TypeScript** | JavaScript avec typage statique |
| **Tailwind CSS** | Framework CSS utility-first |
| **shadcn/ui** | Composants UI réutilisables pour React |
| **App Router** | Nouveau système de routing de Next.js 13+ |
| **SSR** | Server-Side Rendering, rendu côté serveur |
| **SSG** | Static Site Generation, génération statique |

### Backend

| Terme | Définition |
|-------|------------|
| **Supabase** | Backend-as-a-Service open source (alternative Firebase) |
| **PostgreSQL** | Base de données relationnelle |
| **API** | Application Programming Interface |
| **REST** | Style d'architecture pour APIs |
| **Webhook** | Callback HTTP déclenché par un événement |
| **JWT** | JSON Web Token, format de token d'authentification |
| **RLS** | Row Level Security, sécurité au niveau des lignes (Supabase) |

### Infrastructure

| Terme | Définition |
|-------|------------|
| **Vercel** | Plateforme de déploiement pour Next.js |
| **CDN** | Content Delivery Network, réseau de distribution |
| **Edge Function** | Fonction exécutée proche de l'utilisateur |
| **CI/CD** | Continuous Integration/Deployment |
| **Environment Variables** | Variables de configuration (.env) |

### Paiements

| Terme | Définition |
|-------|------------|
| **Stripe** | Plateforme de paiements en ligne |
| **Checkout Session** | Session de paiement Stripe |
| **Subscription** | Abonnement récurrent |
| **Customer Portal** | Interface Stripe pour gérer son abonnement |
| **Price ID** | Identifiant unique d'un prix Stripe |

---

## 📈 TERMES ANALYSE TECHNIQUE

### Indicateurs

| Indicateur | Description | Usage |
|------------|-------------|-------|
| **SMA** | Simple Moving Average | Moyenne mobile simple |
| **EMA** | Exponential Moving Average | Moyenne mobile pondérée |
| **RSI** | Relative Strength Index | Surachat (>70) / Survente (<30) |
| **MACD** | Moving Average Convergence Divergence | Momentum et crossovers |
| **Bollinger Bands** | Bandes de volatilité | Identifier les excès |
| **Fibonacci** | Niveaux de retracement | 23.6%, 38.2%, 50%, 61.8% |
| **ATR** | Average True Range | Mesure de volatilité |

### Patterns (Figures)

| Pattern | Type | Signal |
|---------|------|--------|
| **Double Top** | Retournement | Baissier |
| **Double Bottom** | Retournement | Haussier |
| **Head & Shoulders** | Retournement | Baissier |
| **Triangle** | Continuation/Retournement | Selon la cassure |
| **Flag/Pennant** | Continuation | Dans le sens de la tendance |
| **Wedge** | Retournement | Contre la direction du wedge |

### Chandeliers

| Pattern | Signal |
|---------|--------|
| **Doji** | Indécision, possible retournement |
| **Hammer** | Retournement haussier (après baisse) |
| **Shooting Star** | Retournement baissier (après hausse) |
| **Engulfing** | Fort signal de retournement |
| **Morning Star** | Retournement haussier |
| **Evening Star** | Retournement baissier |

---

## 🏷️ ABRÉVIATIONS COURANTES

| Abréviation | Signification |
|-------------|---------------|
| SL | Stop Loss |
| TP | Take Profit |
| R:R | Risk to Reward |
| BE | Break-even |
| EOD | End of Day |
| EOW | End of Week |
| H1, H4 | Heures (1 heure, 4 heures) |
| D1 | Daily (journalier) |
| W1 | Weekly (hebdomadaire) |
| M1, M5, M15 | Minutes |
| ATH | All Time High |
| ATL | All Time Low |
| HOD | High of Day |
| LOD | Low of Day |
| PA | Price Action |
| S/R | Support/Résistance |

---

## 🔄 STATUTS SIGNAL

| Statut | Code | Description |
|--------|------|-------------|
| Actif | `active` | Signal en cours, trade ouvert |
| TP1 Atteint | `tp1_hit` | Premier objectif touché |
| TP2 Atteint | `tp2_hit` | Deuxième objectif touché |
| TP3 Atteint | `tp3_hit` | Troisième objectif touché |
| SL Touché | `sl_hit` | Stop loss touché, perte |
| Fermé | `closed` | Fermé manuellement |
| Annulé | `cancelled` | Annulé avant exécution |

---

## 📊 NIVEAUX DE CONFIANCE

| Niveau | Code | Description | Usage |
|--------|------|-------------|-------|
| Haute | `high` | Forte confluence, setup idéal | Publier |
| Moyenne | `medium` | Setup correct, quelques doutes | Publier avec prudence |
| Basse | `low` | Setup faible | Ne pas publier |

---

## 💰 TERMES FINANCIERS

| Terme | Définition |
|-------|------------|
| **Drawdown** | Perte maximale depuis un pic de performance |
| **Equity** | Valeur totale du compte de trading |
| **Margin** | Garantie requise pour ouvrir une position |
| **Leverage** | Effet de levier, multiplication de l'exposition |
| **Lot** | Unité de taille de position (1 lot = 100,000 unités) |
| **Micro-lot** | 0.01 lot = 1,000 unités |
| **Mini-lot** | 0.1 lot = 10,000 unités |

---

## 📱 TERMES UX/UI

| Terme | Définition |
|-------|------------|
| **UI** | User Interface, interface utilisateur |
| **UX** | User Experience, expérience utilisateur |
| **Responsive** | Adapté à toutes les tailles d'écran |
| **Mobile-first** | Conçu d'abord pour mobile |
| **Wireframe** | Maquette simplifiée |
| **Mockup** | Maquette détaillée |
| **Component** | Élément d'interface réutilisable |

---

## 🔐 TERMES SÉCURITÉ

| Terme | Définition |
|-------|------------|
| **Auth** | Authentification |
| **2FA** | Two-Factor Authentication |
| **HTTPS** | HTTP sécurisé avec SSL/TLS |
| **CORS** | Cross-Origin Resource Sharing |
| **XSS** | Cross-Site Scripting (vulnérabilité) |
| **CSRF** | Cross-Site Request Forgery (vulnérabilité) |
| **SQL Injection** | Attaque via requêtes SQL malveillantes |

---

*Dernière mise à jour: Session actuelle*
