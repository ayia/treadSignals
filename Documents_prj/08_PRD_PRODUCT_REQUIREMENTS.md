# 📋 PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Plateforme de Signaux Trading IA

---

## Document Control

| Version | Date | Auteur | Status |
|---------|------|--------|--------|
| 1.0 | 2026-01-19 | [Product Manager] | Draft |

---

## 1. OVERVIEW

### 1.1 Product Vision
Créer la plateforme de signaux de trading alimentée par l'IA la plus accessible et fiable du marché, permettant aux traders de tous niveaux de prendre des décisions éclairées et d'améliorer leurs performances.

### 1.2 Problem Statement
Les traders retail font face à plusieurs défis majeurs:
- **Information overload**: Trop de sources d'information contradictoires
- **Analyse chronophage**: 6h+ par jour passées en analyse manuelle
- **Signaux peu fiables**: Précision moyenne <50% sur le marché
- **Coût élevé**: Outils professionnels inaccessibles ($500+/mois)
- **Émotions**: Décisions irrationnelles sous stress

### 1.3 Solution
Une plateforme tout-en-un qui:
- Génère des signaux de trading via IA (85%+ précision)
- Couvre 70+ instruments (Forex, Crypto, Stocks, Indices)
- Fournit des alertes en temps réel
- Offre des analyses automatisées 24/7
- Est accessible à partir de $29/mois

### 1.4 Target Users

#### Persona 1: Thomas - Trader Débutant
- **Âge**: 28 ans
- **Profession**: Développeur web
- **Trading experience**: 6 mois
- **Goals**: Apprendre, générer un revenu complémentaire
- **Pain points**: Ne sait pas analyser les marchés, perd de l'argent
- **Needs**: Signaux clairs avec explications, éducation

#### Persona 2: Sophie - Trader Active
- **Âge**: 35 ans
- **Profession**: Manager marketing
- **Trading experience**: 3 ans
- **Goals**: Optimiser ses trades, gagner du temps
- **Pain points**: Manque de temps, trop d'outils différents
- **Needs**: Signaux rapides, alertes mobile, historique performance

#### Persona 3: Marc - Trader Pro/IB
- **Âge**: 45 ans
- **Profession**: Introducing Broker
- **Trading experience**: 10+ ans
- **Goals**: Offrir de la valeur à ses clients
- **Pain points**: Besoin d'outils pour ses clients
- **Needs**: API, white-label, volume de signaux

### 1.5 Success Metrics

| Métrique | Target Y1 | Target Y2 |
|----------|-----------|-----------|
| Users registered | 50,000 | 200,000 |
| Paying subscribers | 2,500 | 15,000 |
| MRR | $150,000 | $900,000 |
| Signal accuracy | 75%+ | 80%+ |
| NPS | 40+ | 50+ |
| Churn rate | <6% | <4% |
| DAU/MAU | 30% | 40% |

---

## 2. FEATURES & REQUIREMENTS

### 2.1 Feature Priority Matrix (MoSCoW)

#### MUST HAVE (MVP)
| Feature | Description | Priority |
|---------|-------------|----------|
| User Authentication | Register, login, password reset, email verification | P0 |
| Dashboard | Overview avec signaux actifs, performance, watchlist | P0 |
| Signals List | Liste des signaux avec filtres (status, instrument) | P0 |
| Signal Details | Entry, SL, TP, confidence, analysis | P0 |
| Real-time Quotes | Prix en temps réel pour instruments clés | P0 |
| Basic Charts | Graphiques TradingView embeddés | P0 |
| Push Notifications | Alertes nouveaux signaux (web + email) | P0 |
| Subscription & Payment | Stripe integration, plans Basic/Pro | P0 |
| Responsive Design | Mobile-friendly web app | P0 |

#### SHOULD HAVE (V1.1)
| Feature | Description | Priority |
|---------|-------------|----------|
| Mobile App | iOS & Android natives | P1 |
| Economic Calendar | Événements avec impact IA | P1 |
| Advanced Filters | Par stratégie, timeframe, performance | P1 |
| Signal History | Historique complet avec export | P1 |
| Performance Dashboard | Stats détaillées, graphiques | P1 |
| User Preferences | Instruments favoris, alertes custom | P1 |

#### COULD HAVE (V1.2)
| Feature | Description | Priority |
|---------|-------------|----------|
| Pattern Recognition | Détection automatique de patterns | P2 |
| Technical Indicators | Résumé indicateurs par instrument | P2 |
| Central Banks Analysis | Suivi décisions banques centrales | P2 |
| API Access | REST API pour développeurs | P2 |
| Multi-language | FR, ES, AR | P2 |

#### WON'T HAVE (Future)
| Feature | Description | Reason |
|---------|-------------|--------|
| Copy Trading | Copier les trades automatiquement | Régulation complexe |
| Social Features | Feed, comments, likes | V2+ |
| Trading Execution | Exécuter trades depuis la plateforme | Licence broker requise |
| Custom Indicators | Création indicateurs personnalisés | Complexité |

---

## 3. USER STORIES

### 3.1 Authentication (Epic)

#### US-001: Registration
```
En tant que: Visiteur
Je veux: Créer un compte
Afin de: Accéder aux signaux de trading

Critères d'acceptation:
- [ ] Formulaire avec email, password, nom
- [ ] Validation email format
- [ ] Password min 8 chars, 1 majuscule, 1 chiffre
- [ ] Email de vérification envoyé
- [ ] Redirection vers onboarding après vérification
- [ ] Message d'erreur si email déjà utilisé
```

#### US-002: Login
```
En tant que: Utilisateur enregistré
Je veux: Me connecter à mon compte
Afin de: Accéder à mes signaux

Critères d'acceptation:
- [ ] Formulaire email + password
- [ ] Option "Remember me"
- [ ] Lien "Mot de passe oublié"
- [ ] Redirection vers dashboard après login
- [ ] Message d'erreur si credentials invalides
- [ ] Blocage après 5 tentatives échouées (15 min)
```

#### US-003: Password Reset
```
En tant que: Utilisateur
Je veux: Réinitialiser mon mot de passe
Afin de: Récupérer l'accès à mon compte

Critères d'acceptation:
- [ ] Formulaire avec email
- [ ] Email avec lien de reset (expire 1h)
- [ ] Page de nouveau mot de passe
- [ ] Confirmation de changement
- [ ] Invalidation des sessions existantes
```

### 3.2 Signals (Epic)

#### US-010: View Active Signals
```
En tant que: Utilisateur connecté
Je veux: Voir la liste des signaux actifs
Afin de: Décider quels trades prendre

Critères d'acceptation:
- [ ] Liste avec: instrument, direction, entry, SL, TP, confidence
- [ ] Tri par date (récent first)
- [ ] Filtre par instrument
- [ ] Filtre par direction (buy/sell)
- [ ] Indicateur visuel de profit/perte en cours
- [ ] Refresh automatique toutes les 30s
```

#### US-011: View Signal Details
```
En tant que: Utilisateur connecté
Je veux: Voir les détails d'un signal
Afin de: Comprendre l'analyse et décider

Critères d'acceptation:
- [ ] Prix d'entrée, SL, TP1, TP2, TP3
- [ ] Score de confidence (%)
- [ ] Analyse technique résumée
- [ ] Analyse fondamentale si applicable
- [ ] Chart avec niveaux marqués
- [ ] Historique du signal (création, updates)
- [ ] Performance en temps réel (pips, %)
```

#### US-012: Signal Notifications
```
En tant que: Utilisateur connecté
Je veux: Recevoir des alertes pour les nouveaux signaux
Afin de: Ne pas manquer d'opportunités

Critères d'acceptation:
- [ ] Notification push navigateur
- [ ] Email avec résumé du signal
- [ ] Lien direct vers le signal
- [ ] Option de désactiver par type d'instrument
- [ ] Option de désactiver pendant certaines heures
```

#### US-013: Signal History
```
En tant que: Utilisateur connecté
Je veux: Voir l'historique des signaux fermés
Afin de: Analyser la performance passée

Critères d'acceptation:
- [ ] Liste des signaux fermés
- [ ] Filtre par période (7j, 30j, 90j, custom)
- [ ] Filtre par instrument
- [ ] Résultat en pips pour chaque signal
- [ ] Win/Loss indicator
- [ ] Export CSV
```

### 3.3 Market Data (Epic)

#### US-020: Real-time Quotes
```
En tant que: Utilisateur connecté
Je veux: Voir les prix en temps réel
Afin de: Suivre les marchés

Critères d'acceptation:
- [ ] Bid/Ask avec spread
- [ ] Variation jour (% et pips)
- [ ] High/Low du jour
- [ ] Update en temps réel (<2s delay)
- [ ] Indicateur de tendance (up/down/flat)
```

#### US-021: Interactive Charts
```
En tant que: Utilisateur connecté
Je veux: Visualiser les charts interactifs
Afin de: Analyser les instruments

Critères d'acceptation:
- [ ] Chart TradingView embedded
- [ ] Sélection timeframe (M1 à MN)
- [ ] Zoom et pan
- [ ] Indicateurs de base (MA, RSI, MACD)
- [ ] Affichage des signaux sur le chart
- [ ] Mode plein écran
```

### 3.4 Subscription (Epic)

#### US-030: View Plans
```
En tant que: Visiteur ou utilisateur Free
Je veux: Voir les plans disponibles
Afin de: Choisir mon abonnement

Critères d'acceptation:
- [ ] Comparaison des plans (Free, Basic, Pro)
- [ ] Prix mensuel et annuel
- [ ] Liste des fonctionnalités par plan
- [ ] Badge "Most Popular" sur Pro
- [ ] CTA "Start Free Trial"
```

#### US-031: Subscribe
```
En tant que: Utilisateur Free
Je veux: Souscrire à un plan payant
Afin de: Accéder à toutes les fonctionnalités

Critères d'acceptation:
- [ ] Sélection du plan
- [ ] Sélection mensuel/annuel
- [ ] Formulaire de paiement Stripe
- [ ] Récapitulatif avant paiement
- [ ] Confirmation par email
- [ ] Activation immédiate des fonctionnalités
```

#### US-032: Manage Subscription
```
En tant que: Utilisateur payant
Je veux: Gérer mon abonnement
Afin de: Upgrader, downgrader ou annuler

Critères d'acceptation:
- [ ] Voir plan actuel et date de renouvellement
- [ ] Historique des paiements
- [ ] Option upgrade/downgrade
- [ ] Option annulation (fin de période)
- [ ] Téléchargement des factures
```

---

## 4. FUNCTIONAL SPECIFICATIONS

### 4.1 Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER                                                          │
│ [Logo] [Search] [Notifications] [User Menu]                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ ACTIVE SIGNALS  │  │ TODAY'S PIPS    │  │ WIN RATE       │ │
│  │      12         │  │    +145         │  │    72%         │ │
│  │  ↑3 from yesterday│  │  ↑45 vs avg    │  │  ↑5% vs month │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ ACTIVE SIGNALS                              [View All →] │   │
│  │                                                          │   │
│  │ ┌────────────────────────────────────────────────────┐  │   │
│  │ │ 🟢 BUY  EURUSD  Entry: 1.0850  TP: 1.0900  85%    │  │   │
│  │ │      +25 pips  2h ago                              │  │   │
│  │ └────────────────────────────────────────────────────┘  │   │
│  │ ┌────────────────────────────────────────────────────┐  │   │
│  │ │ 🔴 SELL BTCUSD  Entry: 42500  TP: 41800  78%      │  │   │
│  │ │      +350 pips  4h ago                             │  │   │
│  │ └────────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌────────────────────────┐  ┌────────────────────────────┐   │
│  │ WATCHLIST              │  │ PERFORMANCE (30 days)      │   │
│  │                        │  │                            │   │
│  │ EURUSD  1.0852 ↑0.23% │  │  [Performance Chart]       │   │
│  │ GBPUSD  1.2650 ↓0.15% │  │                            │   │
│  │ BTCUSD  42,500 ↑1.25% │  │  Total: +2,450 pips       │   │
│  │ XAUUSD  2,025  ↑0.45% │  │  Signals: 156              │   │
│  │                        │  │                            │   │
│  └────────────────────────┘  └────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Signal Card Component

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────┐                                                      │
│  │ BUY  │  EURUSD                              🟢 Active       │
│  └──────┘  Euro / US Dollar                                    │
│                                                                 │
│  ───────────────────────────────────────────────────────────── │
│                                                                 │
│  Entry Price      Stop Loss        Take Profit 1               │
│  1.0850           1.0820 (-30)     1.0900 (+50)               │
│                                                                 │
│  Take Profit 2    Take Profit 3    Confidence                  │
│  1.0950 (+100)    1.1000 (+150)    85%                        │
│                                                                 │
│  ───────────────────────────────────────────────────────────── │
│                                                                 │
│  Current: 1.0875  |  P&L: +25 pips (+0.23%)  |  2h 15m ago    │
│                                                                 │
│  [View Details]                               [Add to Watchlist]│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Navigation Structure

```
├── Dashboard (/)
├── Signals
│   ├── Active (/signals)
│   ├── History (/signals/history)
│   └── Performance (/signals/performance)
├── Charts (/charts)
│   └── [Symbol] (/charts/:symbol)
├── Calendar (/calendar)
├── Settings
│   ├── Profile (/settings/profile)
│   ├── Preferences (/settings/preferences)
│   ├── Notifications (/settings/notifications)
│   └── Subscription (/settings/subscription)
└── Help (/help)
```

---

## 5. NON-FUNCTIONAL REQUIREMENTS

### 5.1 Performance

| Requirement | Target |
|-------------|--------|
| Page load time | < 2 seconds |
| Time to interactive | < 3 seconds |
| API response time (p95) | < 500ms |
| WebSocket latency | < 100ms |
| Real-time quote delay | < 2 seconds |
| Uptime | 99.9% |

### 5.2 Scalability

| Requirement | Target |
|-------------|--------|
| Concurrent users | 10,000+ |
| Requests per second | 1,000+ |
| Database size | 1TB+ |
| Signal processing | 100/minute |

### 5.3 Security

| Requirement | Implementation |
|-------------|----------------|
| Authentication | JWT + Refresh tokens |
| Password storage | Argon2id hashing |
| Data encryption | AES-256 at rest, TLS 1.3 in transit |
| Rate limiting | 60 req/min (Basic), 120 (Pro) |
| 2FA | TOTP (Google Authenticator) |
| Session management | Secure, HttpOnly cookies |

### 5.4 Compatibility

| Platform | Requirement |
|----------|-------------|
| Browsers | Chrome 90+, Firefox 90+, Safari 14+, Edge 90+ |
| Mobile browsers | iOS Safari 14+, Chrome Android 90+ |
| Screen sizes | 320px - 4K responsive |
| Mobile apps | iOS 14+, Android 10+ |

### 5.5 Accessibility

| Requirement | Standard |
|-------------|----------|
| WCAG compliance | Level AA |
| Keyboard navigation | Full support |
| Screen readers | ARIA labels |
| Color contrast | 4.5:1 minimum |

---

## 6. TECHNICAL CONSTRAINTS

### 6.1 Mandatory Integrations
- **TradingView**: Charting widgets (license required)
- **Stripe**: Payment processing
- **Firebase**: Push notifications
- **SendGrid**: Transactional emails
- **Data providers**: Polygon, Finage, CoinGecko

### 6.2 Regulatory Requirements
- **GDPR**: Data privacy (EU users)
- **Disclaimers**: Risk warnings obligatoires
- **No investment advice**: Informational purposes only
- **Cookie consent**: Banner conforme ePrivacy

### 6.3 Limitations
- Pas d'exécution de trades (pas de licence broker)
- Pas de garantie de performance
- Délai données selon provider (1-15 sec)

---

## 7. RELEASE PLAN

### 7.1 MVP (V1.0) - 4 mois
**Scope:**
- Auth complète
- Dashboard basic
- Signaux Forex (20 paires)
- Charts TradingView
- Notifications email + web push
- Plans Free/Basic/Pro
- Paiement Stripe

**Milestones:**
| Milestone | Week | Deliverables |
|-----------|------|--------------|
| M1: Foundation | W1-2 | Architecture, DB schema, Auth |
| M2: Core Features | W3-6 | Dashboard, Signals, Market data |
| M3: Payments | W7-8 | Stripe integration, Plans |
| M4: Polish | W9-12 | Notifications, Testing, Bug fixes |
| M5: Beta | W13-14 | Beta test, Feedback |
| M6: Launch | W15-16 | Production deploy, Marketing |

### 7.2 V1.1 - +2 mois
- Mobile apps (iOS/Android)
- Economic calendar
- Signal history & export
- Performance analytics
- 50 instruments

### 7.3 V1.2 - +2 mois
- Pattern recognition
- Technical indicators summary
- Central banks analysis
- API access (Pro)
- Multi-language (FR, ES)

### 7.4 V2.0 - +4 mois
- White-label solution
- Enterprise tier
- Advanced API
- Social features
- Copy trading (si régulation OK)

---

## 8. RISKS & MITIGATIONS

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Signal accuracy below target | Medium | High | Backtesting rigoureux, monitoring continu |
| Data provider outage | Low | High | Multiple providers, fallback mechanisms |
| Regulatory issues | Medium | High | Legal review, disclaimers clairs |
| Poor user adoption | Medium | High | Beta testing, feedback loops |
| Security breach | Low | Critical | Audits, penetration testing |
| Scalability issues | Medium | Medium | Load testing, auto-scaling |

---

## 9. OPEN QUESTIONS

1. **Pricing**: $29 Basic vs $49 - A/B test nécessaire?
2. **Free tier**: Combien de signaux gratuits par jour?
3. **Referral program**: Inclure dans MVP ou V1.1?
4. **Mobile-first**: PWA suffisant ou apps natives obligatoires pour MVP?
5. **Instruments prioritaires**: Focus Forex only ou inclure Crypto dès MVP?

---

## 10. APPENDIX

### 10.1 Glossaire
| Terme | Définition |
|-------|------------|
| Signal | Recommandation de trade avec entry/SL/TP |
| Pips | Plus petite unité de variation de prix |
| TP | Take Profit - niveau de prise de bénéfice |
| SL | Stop Loss - niveau de limitation de perte |
| Confidence | Score de confiance du modèle IA |

### 10.2 References
- [ChartDepth Analysis](../analysis/)
- [Competitor Research](../research/)
- [User Interviews](../interviews/)

---

*Document soumis pour review: [DATE]*
*Approved by: [NAMES]*
