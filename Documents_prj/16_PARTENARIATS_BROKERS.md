# 🤝 PROGRAMME DE PARTENARIATS BROKERS

## Document de Partenariat - Plateforme de Signaux Trading IA

**Version:** 1.0
**Date:** [DATE]
**Classification:** Confidentiel

---

## 1. PRÉSENTATION DU PROGRAMME

### 1.1 Objectif

Ce document définit le cadre des partenariats entre [NOM DE LA PLATEFORME] et les courtiers (brokers) régulés, dans le but de créer une relation mutuellement bénéfique basée sur l'acquisition de clients qualifiés.

### 1.2 Proposition de Valeur

**Pour les Brokers :**
- Accès à une audience qualifiée de traders actifs
- Leads pré-éduqués sur le trading
- Augmentation des volumes de trading
- Réduction du coût d'acquisition client

**Pour notre Plateforme :**
- Source de revenus complémentaire (CPA/RevShare)
- Crédibilité renforcée auprès des utilisateurs
- Offres exclusives pour nos membres
- Amélioration de l'expérience utilisateur

---

## 2. CRITÈRES D'ÉLIGIBILITÉ DES BROKERS

### 2.1 Régulation Obligatoire

Les brokers partenaires doivent être régulés par au moins une des autorités suivantes :

| Région | Régulateur | Acronyme |
|--------|------------|----------|
| Europe | Cyprus Securities Exchange Commission | CySEC |
| Europe | Financial Conduct Authority (UK) | FCA |
| Europe | BaFin (Allemagne) | BaFin |
| Europe | AMF (France) | AMF |
| Australie | Australian Securities and Investments Commission | ASIC |
| USA | National Futures Association | NFA |
| International | Financial Services Authority (Seychelles) | FSA |

### 2.2 Critères Qualitatifs

```
┌─────────────────────────────────────────────────────────────┐
│                    CRITÈRES D'ÉVALUATION                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ✓ Régulation Tier 1 ou Tier 2               [OBLIGATOIRE]  │
│  ✓ Minimum 3 ans d'existence                 [OBLIGATOIRE]  │
│  ✓ Fonds séparés des clients                 [OBLIGATOIRE]  │
│  ✓ Protection solde négatif                  [OBLIGATOIRE]  │
│  ✓ Spreads compétitifs                       [RECOMMANDÉ]   │
│  ✓ Exécution STP/ECN                         [RECOMMANDÉ]   │
│  ✓ Support client multilingue                [RECOMMANDÉ]   │
│  ✓ Plateforme MT4/MT5 disponible             [RECOMMANDÉ]   │
│  ✓ Application mobile                        [RECOMMANDÉ]   │
│  ✓ Bonus/Promotions attractives              [OPTIONNEL]    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 Brokers Exclus

Ne seront **PAS** acceptés :
- Brokers non régulés ou régulation offshore douteuse
- Brokers avec historique de litiges majeurs
- Brokers proposant des conditions abusives
- Brokers sur liste noire AMF/FCA
- Options binaires (interdites en Europe)

---

## 3. MODÈLES DE RÉMUNÉRATION

### 3.1 CPA (Cost Per Acquisition)

**Définition :** Commission fixe par nouveau client qualifié

| Niveau Client | Dépôt Minimum | CPA |
|---------------|---------------|-----|
| Micro | 50€ - 199€ | 50€ |
| Standard | 200€ - 999€ | 150€ |
| Gold | 1 000€ - 4 999€ | 300€ |
| VIP | 5 000€+ | 500€ |

**Conditions de validation :**
- Dépôt effectué
- KYC vérifié
- Minimum 1 trade exécuté
- Pas de retrait dans les 30 jours

### 3.2 Revenue Share (RevShare)

**Définition :** Pourcentage des revenus générés par le client

```
┌─────────────────────────────────────────────────────────────┐
│                    STRUCTURE REVSHARE                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Tier 1: 0-50 clients actifs/mois                          │
│  └─► 20% des spreads/commissions                           │
│                                                             │
│  Tier 2: 51-200 clients actifs/mois                        │
│  └─► 25% des spreads/commissions                           │
│                                                             │
│  Tier 3: 201-500 clients actifs/mois                       │
│  └─► 30% des spreads/commissions                           │
│                                                             │
│  Tier 4: 500+ clients actifs/mois                          │
│  └─► 35% des spreads/commissions (négociable)              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Modèle Hybride

**Formule recommandée :**
- CPA initial : 100€ (dépôt >200€)
- RevShare : 15% à vie
- Bonus performance : +5% si >100 FTD/mois

### 3.4 Comparatif des Modèles

| Critère | CPA | RevShare | Hybride |
|---------|-----|----------|---------|
| Revenus immédiats | ⭐⭐⭐ | ⭐ | ⭐⭐ |
| Revenus long terme | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Risque | Faible | Moyen | Moyen |
| Prévisibilité | Haute | Basse | Moyenne |
| Recommandé pour | Lancement | Croissance | Maturité |

---

## 4. INTÉGRATION TECHNIQUE

### 4.1 Méthodes de Tracking

**Option A : Liens d'affiliation**
```
https://broker.com/register?ref=CHARTDEPTH&campaign=signals
```

**Option B : Postback S2S (Server-to-Server)**
```
POST https://api.chartdepth.com/affiliate/postback
{
  "event": "registration|deposit|trade",
  "click_id": "abc123",
  "user_id": "broker_user_id",
  "amount": 500.00,
  "currency": "EUR",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Option C : Pixel de conversion**
```html
<img src="https://track.chartdepth.com/pixel?event=deposit&amount=500" />
```

### 4.2 Paramètres UTM Standards

```
utm_source=chartdepth
utm_medium=affiliate
utm_campaign=[campaign_name]
utm_content=[placement_id]
utm_term=[signal_type]
```

### 4.3 API d'Intégration

```yaml
# Endpoint de récupération des statistiques
GET /api/v1/affiliate/stats
Authorization: Bearer {api_key}

Response:
{
  "period": "2024-01",
  "clicks": 12500,
  "registrations": 850,
  "ftd": 425,
  "deposits_total": 127500.00,
  "commission_earned": 21250.00,
  "conversion_rate": 3.4%
}
```

---

## 5. OBLIGATIONS DES PARTIES

### 5.1 Obligations du Broker

| # | Obligation | Fréquence |
|---|------------|-----------|
| 1 | Fournir liens de tracking fonctionnels | Initial |
| 2 | Reporting transparent et détaillé | Mensuel |
| 3 | Paiement des commissions | Mensuel (Net 30) |
| 4 | Maintien des conditions annoncées | Continu |
| 5 | Support dédié affiliate manager | Continu |
| 6 | Matériel marketing à jour | Trimestriel |
| 7 | Notification des changements | 30 jours avant |

### 5.2 Obligations de la Plateforme

| # | Obligation | Fréquence |
|---|------------|-----------|
| 1 | Promotion éthique et transparente | Continu |
| 2 | Aucune promesse de gains | Continu |
| 3 | Affichage disclaimers risques | Continu |
| 4 | Trafic qualifié (pas de bot/incentive) | Continu |
| 5 | Reporting du trafic envoyé | Hebdomadaire |
| 6 | Respect de la marque broker | Continu |
| 7 | Mise à jour des contenus | Mensuel |

---

## 6. PLACEMENT ET VISIBILITÉ

### 6.1 Emplacements Disponibles

```
┌─────────────────────────────────────────────────────────────┐
│                    PLACEMENTS PREMIUM                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. PAGE BROKERS DÉDIÉE                                     │
│     └─► Listing avec logo, description, avantages           │
│     └─► Bouton CTA "Ouvrir un compte"                       │
│     └─► Note et avis utilisateurs                           │
│                                                             │
│  2. WIDGET DASHBOARD                                        │
│     └─► "Broker recommandé du mois"                         │
│     └─► Affiché à tous les utilisateurs actifs              │
│                                                             │
│  3. PAGE SIGNAL                                             │
│     └─► "Exécutez ce signal avec [Broker]"                  │
│     └─► Lien contextuel par instrument                      │
│                                                             │
│  4. EMAILS TRANSACTIONNELS                                  │
│     └─► Footer des emails de signaux                        │
│     └─► Newsletter hebdomadaire                             │
│                                                             │
│  5. ONBOARDING                                              │
│     └─► Recommandation lors de l'inscription                │
│     └─► "Vous n'avez pas de compte broker ?"                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Tarification des Placements

| Placement | Type | Tarif Mensuel |
|-----------|------|---------------|
| Page Brokers - Position #1 | Premium | 2 000€ + CPA |
| Page Brokers - Position #2-5 | Standard | 500€ + CPA |
| Page Brokers - Position #6+ | Basic | CPA uniquement |
| Widget Dashboard | Exclusif | 5 000€/mois |
| Emails - Footer | Rotatif | 1 000€/mois |
| Onboarding | Semi-exclusif | 3 000€/mois |

### 6.3 Matériel Marketing Requis

- Logo haute résolution (PNG, SVG)
- Bannières (300x250, 728x90, 160x600)
- Description courte (50 mots)
- Description longue (150 mots)
- 5 avantages clés
- Offre spéciale exclusive

---

## 7. TEMPLATE CONTRAT DE PARTENARIAT

### 7.1 Informations Générales

```
CONTRAT DE PARTENARIAT AFFILIATION

Entre :
[NOM DE LA SOCIÉTÉ], [Forme juridique]
Siège : [Adresse]
Représentée par : [Nom], [Fonction]
Ci-après "L'Affilié"

Et :
[NOM DU BROKER], [Forme juridique]
Siège : [Adresse]
Régulation : [Numéro de licence]
Représenté par : [Nom], [Fonction]
Ci-après "Le Broker"
```

### 7.2 Clauses Essentielles

**Article 1 - Objet**
Le présent contrat a pour objet de définir les conditions dans lesquelles l'Affilié promeut les services du Broker auprès de son audience.

**Article 2 - Durée**
Le contrat est conclu pour une durée de [12 mois], renouvelable par tacite reconduction.

**Article 3 - Rémunération**
- Modèle : [CPA / RevShare / Hybride]
- Montants : [Détails]
- Paiement : Net 30 jours, par virement bancaire

**Article 4 - Obligations de l'Affilié**
- Promotion éthique et conforme
- Affichage des avertissements sur les risques
- Interdiction des promesses de gains
- Trafic qualifié uniquement

**Article 5 - Obligations du Broker**
- Tracking fiable et transparent
- Reporting détaillé mensuel
- Paiement dans les délais
- Support dédié

**Article 6 - Propriété Intellectuelle**
Chaque partie conserve ses droits. Licence limitée d'utilisation des marques accordée.

**Article 7 - Confidentialité**
Les termes financiers du présent accord sont confidentiels.

**Article 8 - Résiliation**
- Préavis de 30 jours
- Immédiate en cas de manquement grave
- Les commissions dues restent payables

**Article 9 - Droit Applicable**
Droit [français/chypriote]. Tribunaux de [Ville] compétents.

---

## 8. COMPLIANCE ET DISCLAIMERS

### 8.1 Avertissements Obligatoires

Tous les contenus promotionnels doivent inclure :

```
┌─────────────────────────────────────────────────────────────┐
│                    DISCLAIMER STANDARD                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ⚠️ AVERTISSEMENT SUR LES RISQUES                          │
│                                                             │
│  Les CFD sont des instruments complexes et présentent       │
│  un risque élevé de perte rapide en capital en raison de    │
│  l'effet de levier. [XX]% des comptes d'investisseurs       │
│  particuliers perdent de l'argent lors de la négociation    │
│  de CFD avec ce fournisseur. Vous devez vous demander si    │
│  vous comprenez le fonctionnement des CFD et si vous        │
│  pouvez vous permettre de prendre le risque élevé de        │
│  perdre votre argent.                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 8.2 Règles de Promotion

**Interdit :**
- Promesses de gains garantis
- Témoignages de gains non vérifiables
- Minimisation des risques
- Ciblage de mineurs
- Spam ou techniques agressives

**Obligatoire :**
- Disclaimer visible
- Mention de la régulation
- Lien vers documents légaux
- Prix/spreads à jour

### 8.3 Conformité ESMA

Pour les clients européens :
- Levier max retail : 1:30 (forex majors)
- Protection solde négatif obligatoire
- Interdiction des bonus
- Disclaimer avec % de pertes

---

## 9. REPORTING ET KPIs

### 9.1 Dashboard Partenaire

```
┌─────────────────────────────────────────────────────────────┐
│              DASHBOARD REPORTING MENSUEL                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Période : Janvier 2024                                     │
│                                                             │
│  TRAFIC                                                     │
│  ├─ Clics uniques         : 15,234                          │
│  ├─ Clics totaux          : 28,456                          │
│  └─ CTR moyen             : 3.2%                            │
│                                                             │
│  CONVERSIONS                                                │
│  ├─ Inscriptions          : 1,847                           │
│  ├─ Taux conversion       : 12.1%                           │
│  ├─ FTD (First Deposits)  : 623                             │
│  ├─ Taux FTD              : 33.7%                           │
│  └─ Dépôt moyen           : 487€                            │
│                                                             │
│  REVENUS                                                    │
│  ├─ Volume tradé          : 12.4M€                          │
│  ├─ Commission CPA        : 31,150€                         │
│  ├─ Commission RevShare   : 8,720€                          │
│  └─ Total commissions     : 39,870€                         │
│                                                             │
│  QUALITÉ                                                    │
│  ├─ Clients actifs (30j)  : 412                             │
│  ├─ Taux rétention        : 66.1%                           │
│  └─ Lifetime Value est.   : 340€                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 9.2 KPIs de Suivi

| KPI | Calcul | Objectif |
|-----|--------|----------|
| CR (Click to Registration) | Inscriptions / Clics | >10% |
| FTD Rate | FTD / Inscriptions | >30% |
| Avg. Deposit | Total Dépôts / Nb FTD | >300€ |
| EPC (Earnings Per Click) | Commissions / Clics | >2€ |
| Client Retention | Actifs M2 / FTD M1 | >60% |
| Chargeback Rate | Chargebacks / FTD | <5% |

---

## 10. PROCESSUS ONBOARDING PARTENAIRE

### 10.1 Étapes d'Intégration

```
┌─────────────────────────────────────────────────────────────┐
│                 PROCESSUS ONBOARDING                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SEMAINE 1 : QUALIFICATION                                  │
│  ├─ Réception candidature                                   │
│  ├─ Due diligence (régulation, réputation)                  │
│  ├─ Appel découverte                                        │
│  └─ Décision Go/No-Go                                       │
│                                                             │
│  SEMAINE 2 : NÉGOCIATION                                    │
│  ├─ Proposition commerciale                                 │
│  ├─ Négociation termes                                      │
│  ├─ Validation juridique                                    │
│  └─ Signature contrat                                       │
│                                                             │
│  SEMAINE 3 : INTÉGRATION TECHNIQUE                          │
│  ├─ Création compte affiliate                               │
│  ├─ Configuration tracking                                  │
│  ├─ Tests de conversion                                     │
│  └─ Validation postbacks                                    │
│                                                             │
│  SEMAINE 4 : LANCEMENT                                      │
│  ├─ Création contenus                                       │
│  ├─ Intégration page Brokers                                │
│  ├─ Activation campagnes                                    │
│  └─ Monitoring initial                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 10.2 Checklist Lancement

- [ ] Contrat signé par les deux parties
- [ ] Compte affiliate créé et configuré
- [ ] Liens de tracking testés et validés
- [ ] Postback S2S fonctionnel
- [ ] Matériel marketing reçu
- [ ] Page broker rédigée et validée
- [ ] Disclaimer et mentions légales OK
- [ ] Contact affiliate manager établi
- [ ] Premier paiement test effectué
- [ ] Go live confirmé

---

## 11. LISTE DES BROKERS CIBLES

### 11.1 Brokers Tier 1 (Prioritaires)

| Broker | Régulation | Spécialité | Statut |
|--------|------------|------------|--------|
| IC Markets | ASIC, CySEC | Forex, ECN | À contacter |
| Pepperstone | FCA, ASIC | Forex, MT4/5 | À contacter |
| XM | CySEC, ASIC | Multi-asset | À contacter |
| eToro | FCA, CySEC | Social trading | À contacter |
| Plus500 | FCA, CySEC | CFDs | À contacter |

### 11.2 Brokers Tier 2

| Broker | Régulation | Spécialité | Statut |
|--------|------------|------------|--------|
| AvaTrade | CySEC, ASIC | Multi-asset | À contacter |
| FXCM | FCA | Forex | À contacter |
| Oanda | FCA, NFA | Forex | À contacter |
| Admiral Markets | FCA, CySEC | Multi-asset | À contacter |
| Swissquote | FINMA | Premium | À contacter |

### 11.3 Brokers Crypto

| Broker | Régulation | Spécialité | Statut |
|--------|------------|------------|--------|
| Binance | Varies | Crypto | À contacter |
| Kraken | FinCEN | Crypto | À contacter |
| Coinbase | Varies | Crypto | À contacter |
| Bybit | - | Derivatives | À évaluer |
| OKX | - | Crypto | À évaluer |

---

## 12. ANNEXES

### Annexe A : Template Email Prospection

```
Objet : Partenariat [NOM PLATEFORME] x [BROKER] - Opportunité Affiliation

Bonjour [Prénom],

Je me permets de vous contacter car [NOM PLATEFORME] est une plateforme
de signaux de trading basée sur l'IA avec [X] utilisateurs actifs.

Notre audience est composée de traders actifs, principalement européens,
recherchant des brokers fiables et régulés pour exécuter leurs trades.

Nous serions intéressés par un partenariat affiliation avec [BROKER],
que nous considérons comme un acteur de référence du marché.

Notre proposition :
- Intégration sur notre page "Brokers Recommandés"
- Mentions dans nos communications (emails, push)
- Contenu éducatif mettant en avant votre plateforme

En retour, nous recherchons :
- Un accord CPA/RevShare compétitif
- Un support affiliate manager dédié
- Des offres exclusives pour nos utilisateurs

Seriez-vous disponible pour un appel de 15 minutes cette semaine ?

Cordialement,
[Signature]
```

### Annexe B : Grille d'Évaluation Broker

| Critère | Poids | Note /10 | Score |
|---------|-------|----------|-------|
| Régulation | 25% | | |
| Réputation | 20% | | |
| Conditions trading | 15% | | |
| Commission proposée | 15% | | |
| Support affiliate | 10% | | |
| Matériel marketing | 10% | | |
| Tracking/Tech | 5% | | |
| **TOTAL** | 100% | | **/100** |

---

*Document Version: 1.0*
*Dernière mise à jour: [DATE]*
*Responsable: Business Development*
