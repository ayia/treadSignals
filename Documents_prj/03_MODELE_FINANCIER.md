# 💰 MODÈLE FINANCIER - Plateforme de Signaux Trading IA

## Document Version
| Version | Date | Auteur | Modifications |
|---------|------|--------|---------------|
| 1.0 | 2026-01-19 | [Nom] | Création initiale |

---

## 1. HYPOTHÈSES CLÉS

### 1.1 Hypothèses de Revenus

#### Pricing
| Plan | Prix Mensuel | Prix Annuel | Réduction |
|------|-------------|-------------|-----------|
| Free | $0 | $0 | - |
| Basic | $29 | $290 | 17% |
| Pro | $99 | $990 | 17% |
| Enterprise | $499 | $4,990 | 17% |

#### Mix Produit (à maturité)
| Plan | % Utilisateurs Payants | ARPU |
|------|----------------------|------|
| Basic | 60% | $29 |
| Pro | 35% | $99 |
| Enterprise | 5% | $499 |
| **Moyenne pondérée** | - | **$67.50** |

#### Conversion & Rétention
| Métrique | Mois 1-6 | Mois 7-12 | Année 2+ |
|----------|----------|-----------|----------|
| Taux conversion Free→Paid | 3% | 5% | 7% |
| Churn mensuel (Basic) | 8% | 6% | 4% |
| Churn mensuel (Pro) | 5% | 4% | 3% |
| Churn mensuel (Enterprise) | 2% | 1.5% | 1% |

### 1.2 Hypothèses de Coûts

#### Coûts Variables (% du revenu)
| Poste | Pourcentage |
|-------|-------------|
| Payment processing (Stripe) | 2.9% + $0.30/tx |
| Data feeds & APIs | 5-8% |
| Infrastructure cloud | 3-5% |
| Support client | 2-3% |
| **Total COGS** | **~15%** |

#### Coûts Fixes Mensuels (MVP)
| Poste | Montant |
|-------|---------|
| Salaires & charges | $25,000 - $40,000 |
| Infrastructure (base) | $2,000 - $5,000 |
| Data feeds (base) | $1,000 - $3,000 |
| Marketing (base) | $5,000 - $15,000 |
| Juridique & compliance | $1,000 - $3,000 |
| Admin & divers | $1,000 - $2,000 |
| **Total mensuel** | **$35,000 - $68,000** |

---

## 2. PROJECTIONS DE REVENUS

### 2.1 Année 1 - Détail Mensuel

| Mois | Free Users | Paid Users | MRR | Cumul |
|------|------------|------------|-----|-------|
| M1 | 500 | 15 | $750 | $750 |
| M2 | 1,200 | 45 | $2,250 | $3,000 |
| M3 | 2,500 | 100 | $5,000 | $8,000 |
| M4 | 4,000 | 180 | $9,000 | $17,000 |
| M5 | 6,000 | 300 | $15,000 | $32,000 |
| M6 | 8,500 | 450 | $22,500 | $54,500 |
| M7 | 11,500 | 650 | $32,500 | $87,000 |
| M8 | 15,000 | 900 | $45,000 | $132,000 |
| M9 | 19,000 | 1,200 | $60,000 | $192,000 |
| M10 | 24,000 | 1,600 | $80,000 | $272,000 |
| M11 | 30,000 | 2,100 | $105,000 | $377,000 |
| M12 | 37,000 | 2,700 | $135,000 | $512,000 |

**Total Année 1: ~$512,000**

### 2.2 Projections 3 Ans

| Métrique | Année 1 | Année 2 | Année 3 |
|----------|---------|---------|---------|
| **Utilisateurs Free** | 37,000 | 120,000 | 300,000 |
| **Utilisateurs Payants** | 2,700 | 12,000 | 35,000 |
| **Taux Conversion** | 7.3% | 10% | 11.7% |
| | | | |
| **Revenus Abonnements** | $450,000 | $1,800,000 | $4,500,000 |
| **Revenus Affiliés** | $50,000 | $350,000 | $900,000 |
| **Revenus API/Services** | $12,000 | $150,000 | $400,000 |
| **Total Revenus** | **$512,000** | **$2,300,000** | **$5,800,000** |
| | | | |
| **Croissance YoY** | - | +349% | +152% |
| **ARR (fin d'année)** | $1,620,000 | $4,800,000 | $10,200,000 |

### 2.3 Revenus par Source

#### Année 1
```
Abonnements    ████████████████████████████████████  88%
Affiliés       ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10%
API/Services   █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   2%
```

#### Année 3
```
Abonnements    ████████████████████████████████░░░░  78%
Affiliés       ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  15%
API/Services   ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   7%
```

---

## 3. PROJECTIONS DE COÛTS

### 3.1 Structure des Coûts - Année 1

| Catégorie | M1-M3 | M4-M6 | M7-M9 | M10-M12 | Total Y1 |
|-----------|-------|-------|-------|---------|----------|
| **Salaires** | $75,000 | $90,000 | $120,000 | $150,000 | $435,000 |
| **Marketing** | $15,000 | $30,000 | $45,000 | $60,000 | $150,000 |
| **Infrastructure** | $6,000 | $9,000 | $15,000 | $21,000 | $51,000 |
| **Data Feeds** | $6,000 | $9,000 | $12,000 | $15,000 | $42,000 |
| **Juridique** | $10,000 | $5,000 | $5,000 | $5,000 | $25,000 |
| **Admin/Divers** | $6,000 | $6,000 | $9,000 | $12,000 | $33,000 |
| **Total** | **$118,000** | **$149,000** | **$206,000** | **$263,000** | **$736,000** |

### 3.2 Évolution des Coûts (3 ans)

| Catégorie | Année 1 | Année 2 | Année 3 |
|-----------|---------|---------|---------|
| **Salaires & Charges** | $435,000 | $850,000 | $1,400,000 |
| Équipe initiale (5-6) | $300,000 | - | - |
| Recrutements | $135,000 | $415,000 | $550,000 |
| | | | |
| **Marketing** | $150,000 | $450,000 | $900,000 |
| SEO/Content | $40,000 | $100,000 | $180,000 |
| Paid acquisition | $60,000 | $250,000 | $540,000 |
| Affiliés/Partenariats | $50,000 | $100,000 | $180,000 |
| | | | |
| **Infrastructure** | $51,000 | $150,000 | $350,000 |
| Cloud (AWS/Azure) | $36,000 | $100,000 | $250,000 |
| Services tiers | $15,000 | $50,000 | $100,000 |
| | | | |
| **Data & APIs** | $42,000 | $120,000 | $250,000 |
| Feeds temps réel | $24,000 | $70,000 | $150,000 |
| Données historiques | $18,000 | $50,000 | $100,000 |
| | | | |
| **Juridique & Compliance** | $25,000 | $60,000 | $100,000 |
| | | | |
| **Admin & Divers** | $33,000 | $70,000 | $120,000 |
| | | | |
| **TOTAL COÛTS** | **$736,000** | **$1,700,000** | **$3,120,000** |

### 3.3 Coût par Utilisateur

| Métrique | Année 1 | Année 2 | Année 3 |
|----------|---------|---------|---------|
| Coût total | $736,000 | $1,700,000 | $3,120,000 |
| Utilisateurs payants | 2,700 | 12,000 | 35,000 |
| **Coût/user payant** | **$272** | **$142** | **$89** |
| | | | |
| CAC (marketing/new users) | $55 | $45 | $35 |

---

## 4. COMPTE DE RÉSULTAT PRÉVISIONNEL

### 4.1 P&L Annuel

| Ligne | Année 1 | Année 2 | Année 3 |
|-------|---------|---------|---------|
| **Revenus** | $512,000 | $2,300,000 | $5,800,000 |
| | | | |
| *Coût des revenus (COGS)* | | | |
| Payment processing | $(18,000) | $(70,000) | $(175,000) |
| Infrastructure variable | $(15,000) | $(70,000) | $(175,000) |
| Data feeds variable | $(25,000) | $(115,000) | $(290,000) |
| **Marge Brute** | **$454,000** | **$2,045,000** | **$5,160,000** |
| **% Marge Brute** | **88.7%** | **88.9%** | **89.0%** |
| | | | |
| *Dépenses opérationnelles* | | | |
| Salaires & charges | $(435,000) | $(850,000) | $(1,400,000) |
| Marketing | $(150,000) | $(450,000) | $(900,000) |
| Infrastructure fixe | $(36,000) | $(80,000) | $(175,000) |
| Juridique | $(25,000) | $(60,000) | $(100,000) |
| Admin & divers | $(33,000) | $(70,000) | $(120,000) |
| **Total OpEx** | **$(679,000)** | **$(1,510,000)** | **$(2,695,000)** |
| | | | |
| **EBITDA** | **$(225,000)** | **$535,000** | **$2,465,000** |
| **% EBITDA** | **-43.9%** | **23.3%** | **42.5%** |
| | | | |
| Amortissements | $(20,000) | $(40,000) | $(60,000) |
| **EBIT** | **$(245,000)** | **$495,000** | **$2,405,000** |
| | | | |
| Charges financières | $(5,000) | $(10,000) | $(15,000) |
| **Résultat avant impôt** | **$(250,000)** | **$485,000** | **$2,390,000** |
| | | | |
| Impôts (25%) | $0 | $(121,250) | $(597,500) |
| **Résultat Net** | **$(250,000)** | **$363,750** | **$1,792,500** |

### 4.2 P&L Mensuel - Année 1

| Mois | Revenus | Coûts | EBITDA | Cumul |
|------|---------|-------|--------|-------|
| M1 | $750 | $39,000 | -$38,250 | -$38,250 |
| M2 | $2,250 | $39,500 | -$37,250 | -$75,500 |
| M3 | $5,000 | $40,000 | -$35,000 | -$110,500 |
| M4 | $9,000 | $48,000 | -$39,000 | -$149,500 |
| M5 | $15,000 | $50,000 | -$35,000 | -$184,500 |
| M6 | $22,500 | $52,000 | -$29,500 | -$214,000 |
| M7 | $32,500 | $66,000 | -$33,500 | -$247,500 |
| M8 | $45,000 | $68,000 | -$23,000 | -$270,500 |
| M9 | $60,000 | $72,000 | -$12,000 | -$282,500 |
| M10 | $80,000 | $85,000 | -$5,000 | -$287,500 |
| M11 | $105,000 | $88,000 | +$17,000 | -$270,500 |
| M12 | $135,000 | $90,000 | +$45,000 | -$225,500 |

**Break-even mensuel: Mois 11**

---

## 5. TABLEAU DE TRÉSORERIE

### 5.1 Cash Flow Prévisionnel

| Élément | Année 1 | Année 2 | Année 3 |
|---------|---------|---------|---------|
| **Cash début de période** | $500,000 | $255,000 | $708,750 |
| | | | |
| *Flux d'exploitation* | | | |
| Encaissements clients | $490,000 | $2,200,000 | $5,600,000 |
| Décaissements fournisseurs | $(700,000) | $(1,600,000) | $(3,000,000) |
| **Cash flow exploitation** | **$(210,000)** | **$600,000** | **$2,600,000** |
| | | | |
| *Flux d'investissement* | | | |
| Développement capitalisé | $(30,000) | $(50,000) | $(80,000) |
| Équipements | $(5,000) | $(10,000) | $(20,000) |
| **Cash flow investissement** | **$(35,000)** | **$(60,000)** | **$(100,000)** |
| | | | |
| *Flux de financement* | | | |
| Levée de fonds | $0 | $0 | $0 |
| Remboursements | $0 | $(86,250) | $(448,125) |
| **Cash flow financement** | **$0** | **$(86,250)** | **$(448,125)** |
| | | | |
| **Variation de trésorerie** | **$(245,000)** | **$453,750** | **$2,051,875** |
| **Cash fin de période** | **$255,000** | **$708,750** | **$2,760,625** |

### 5.2 Besoin en Fonds de Roulement

| Mois | Dépenses | Revenus | Déficit | Cumul |
|------|----------|---------|---------|-------|
| M1-M3 | $118,000 | $8,000 | -$110,000 | -$110,000 |
| M4-M6 | $149,000 | $46,500 | -$102,500 | -$212,500 |
| M7-M9 | $206,000 | $137,500 | -$68,500 | -$281,000 |
| M10-M12 | $263,000 | $320,000 | +$57,000 | -$224,000 |

**Besoin de financement minimum: $300,000 - $400,000**
**Recommandation avec marge de sécurité: $500,000**

---

## 6. UNIT ECONOMICS

### 6.1 Métriques Clés

| Métrique | Formule | Valeur Y1 | Valeur Y3 | Benchmark |
|----------|---------|-----------|-----------|-----------|
| **CAC** | Marketing / New Customers | $55 | $35 | $30-50 |
| **LTV** | ARPU × Lifetime | $540 | $810 | $200-500 |
| **LTV/CAC** | LTV / CAC | 9.8x | 23.1x | >3x |
| **Payback** | CAC / Monthly ARPU | 1.2 mois | 0.6 mois | <12 mois |
| **Churn** | Lost / Total Customers | 5% | 3% | <5% |
| **NRR** | (MRR + Expansion - Churn) / MRR | 95% | 115% | >100% |

### 6.2 Analyse par Cohorte

#### Cohorte M1 (100 users payants)
| Mois | Users actifs | Revenus | Churn | Cumul revenus |
|------|-------------|---------|-------|---------------|
| M1 | 100 | $5,000 | - | $5,000 |
| M2 | 94 | $4,700 | 6% | $9,700 |
| M3 | 89 | $4,450 | 5% | $14,150 |
| M6 | 76 | $3,800 | 4%/m | $27,550 |
| M12 | 58 | $2,900 | 4%/m | $48,950 |

**LTV cohorte M1: $490/user**

### 6.3 Analyse de Sensibilité

#### Impact du Churn sur LTV
| Churn mensuel | Lifetime (mois) | LTV |
|---------------|-----------------|-----|
| 3% | 33 | $1,650 |
| 4% | 25 | $1,250 |
| 5% | 20 | $1,000 |
| 6% | 17 | $850 |
| 8% | 12.5 | $625 |

#### Impact du Prix sur MRR
| Prix moyen | Users Y1 | MRR Y1 | ARR Y1 |
|------------|----------|--------|--------|
| $40 | 2,700 | $108,000 | $1,296,000 |
| $50 | 2,700 | $135,000 | $1,620,000 |
| $60 | 2,700 | $162,000 | $1,944,000 |
| $70 | 2,700 | $189,000 | $2,268,000 |

---

## 7. SCÉNARIOS

### 7.1 Scénario Optimiste (+30%)

| Métrique | Y1 | Y2 | Y3 |
|----------|----|----|----|
| Revenus | $666,000 | $2,990,000 | $7,540,000 |
| EBITDA | -$150,000 | $750,000 | $3,400,000 |
| Users payants | 3,500 | 15,600 | 45,500 |

**Hypothèses:**
- Conversion +2%
- Churn -1%
- Viral coefficient 1.2

### 7.2 Scénario Base

| Métrique | Y1 | Y2 | Y3 |
|----------|----|----|----|
| Revenus | $512,000 | $2,300,000 | $5,800,000 |
| EBITDA | -$225,000 | $535,000 | $2,465,000 |
| Users payants | 2,700 | 12,000 | 35,000 |

### 7.3 Scénario Pessimiste (-30%)

| Métrique | Y1 | Y2 | Y3 |
|----------|----|----|----|
| Revenus | $358,000 | $1,610,000 | $4,060,000 |
| EBITDA | -$350,000 | $150,000 | $1,200,000 |
| Users payants | 1,900 | 8,400 | 24,500 |

**Hypothèses:**
- Conversion -1.5%
- Churn +2%
- CAC +30%

### 7.4 Comparaison Visuelle

```
REVENUS Y3

Optimiste  ████████████████████████████████████████  $7.54M
Base       ██████████████████████████████░░░░░░░░░░  $5.80M
Pessimiste ████████████████████████░░░░░░░░░░░░░░░░  $4.06M

EBITDA Y3

Optimiste  ████████████████████████████████████████  $3.40M
Base       ██████████████████████████████░░░░░░░░░░  $2.47M
Pessimiste ████████████████░░░░░░░░░░░░░░░░░░░░░░░░  $1.20M
```

---

## 8. VALORISATION & MÉTRIQUES INVESTISSEURS

### 8.1 Multiples de Valorisation

| Métrique | Multiple | Valeur Y1 | Valeur Y3 |
|----------|----------|-----------|-----------|
| ARR | 8-12x | $12.9M - $19.4M | $81.6M - $122.4M |
| Revenus | 6-10x | $3.1M - $5.1M | $34.8M - $58M |
| EBITDA | 15-25x | N/A (négatif) | $37M - $61.6M |

### 8.2 Comparables

| Entreprise | ARR Multiple | Revenue Multiple | Stade |
|------------|--------------|------------------|-------|
| TradingView | 15x | 12x | Growth |
| eToro | 8x | 6x | Late stage |
| Robinhood | 10x | 8x | Public |
| **Moyenne** | **11x** | **8.7x** | - |

### 8.3 Table de Capitalisation (Cap Table)

#### Pré-Seed/Seed
| Actionnaire | % Pre-money | Investissement | % Post-money |
|-------------|-------------|----------------|--------------|
| Fondateur 1 | 40% | - | 32% |
| Fondateur 2 | 30% | - | 24% |
| Fondateur 3 | 20% | - | 16% |
| ESOP | 10% | - | 8% |
| **Investisseurs Seed** | - | **$500,000** | **20%** |
| **Total** | 100% | | 100% |

**Valorisation Pre-money: $2,000,000**
**Valorisation Post-money: $2,500,000**

---

## 9. BESOINS DE FINANCEMENT

### 9.1 Utilisation des Fonds ($500,000)

| Catégorie | Montant | % | Détail |
|-----------|---------|---|--------|
| **Développement** | $200,000 | 40% | |
| Salaires tech (12 mois) | $150,000 | | 2.5 FTE |
| Infrastructure | $30,000 | | Cloud, tools |
| Data feeds | $20,000 | | APIs, licences |
| | | | |
| **Marketing** | $150,000 | 30% | |
| Paid acquisition | $80,000 | | Google, Meta |
| Content & SEO | $40,000 | | Rédacteurs, tools |
| Events & PR | $30,000 | | Conférences, RP |
| | | | |
| **Opérations** | $100,000 | 20% | |
| Salaires non-tech | $60,000 | | Support, admin |
| Juridique | $25,000 | | Avocats, compliance |
| Divers | $15,000 | | Bureau, assurances |
| | | | |
| **Réserve** | $50,000 | 10% | |
| Contingence | $50,000 | | Imprévus |

### 9.2 Runway

| Scénario | Burn mensuel | Runway |
|----------|-------------|--------|
| Agressif | $50,000 | 10 mois |
| Base | $40,000 | 12.5 mois |
| Conservateur | $30,000 | 16.7 mois |

**Recommandation:** Viser 18 mois de runway minimum

### 9.3 Milestones pour Prochaine Levée

| Milestone | Target | Pour Series A |
|-----------|--------|---------------|
| ARR | $1.5M+ | ✅ Requis |
| MoM Growth | 15%+ | ✅ Requis |
| Churn | <5% | ✅ Requis |
| LTV/CAC | >3x | ✅ Requis |
| Utilisateurs payants | 5,000+ | Souhaité |
| NPS | >50 | Souhaité |

---

## 10. ANNEXES FINANCIÈRES

### 10.1 Détail des Salaires

| Poste | Salaire annuel | Charges (30%) | Total |
|-------|---------------|---------------|-------|
| CEO | $80,000 | $24,000 | $104,000 |
| CTO | $90,000 | $27,000 | $117,000 |
| Senior Dev | $70,000 | $21,000 | $91,000 |
| Dev Full-stack | $55,000 | $16,500 | $71,500 |
| Data Scientist | $75,000 | $22,500 | $97,500 |
| Product Manager | $60,000 | $18,000 | $78,000 |
| Designer | $50,000 | $15,000 | $65,000 |
| Marketing | $45,000 | $13,500 | $58,500 |
| Support | $35,000 | $10,500 | $45,500 |

### 10.2 Détail Infrastructure Cloud

| Service | Provider | Coût mensuel |
|---------|----------|-------------|
| Compute (EC2/VMs) | AWS | $800 - $2,000 |
| Database (RDS) | AWS | $300 - $800 |
| Cache (Redis) | AWS | $100 - $300 |
| Storage (S3) | AWS | $50 - $200 |
| CDN (CloudFront) | AWS | $100 - $500 |
| Monitoring | Datadog | $200 - $500 |
| CI/CD | GitHub Actions | $50 - $100 |
| Email | SendGrid | $50 - $200 |
| **Total** | | **$1,650 - $4,600** |

### 10.3 Détail Data Feeds

| Provider | Données | Coût mensuel |
|----------|---------|-------------|
| Polygon.io | US Stocks | $199 - $999 |
| Finage | Forex real-time | $199 - $499 |
| CoinGecko | Crypto | $129 - $499 |
| Trading Economics | Economic calendar | $99 - $299 |
| **Total** | | **$626 - $2,296** |

---

## 11. GLOSSAIRE FINANCIER

| Terme | Définition |
|-------|------------|
| **MRR** | Monthly Recurring Revenue - Revenus mensuels récurrents |
| **ARR** | Annual Recurring Revenue - MRR × 12 |
| **ARPU** | Average Revenue Per User - Revenu moyen par utilisateur |
| **CAC** | Customer Acquisition Cost - Coût d'acquisition client |
| **LTV** | Lifetime Value - Valeur vie client |
| **Churn** | Taux d'attrition - % clients perdus par mois |
| **NRR** | Net Revenue Retention - Rétention nette des revenus |
| **EBITDA** | Earnings Before Interest, Taxes, Depreciation, Amortization |
| **Runway** | Durée de vie avec la trésorerie actuelle |
| **Burn rate** | Consommation mensuelle de trésorerie |

---

*Document confidentiel - Projections basées sur des hypothèses*
*Mise à jour recommandée: Mensuelle*
