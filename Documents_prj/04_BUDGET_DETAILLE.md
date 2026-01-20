# 💵 BUDGET DÉTAILLÉ - Plateforme de Signaux Trading IA

## Document Version
| Version | Date | Auteur | Modifications |
|---------|------|--------|---------------|
| 1.0 | 2026-01-19 | [Nom] | Création initiale |

---

## 1. RÉCAPITULATIF BUDGET GLOBAL

### 1.1 Budget Total par Phase

| Phase | Durée | Budget | Objectif |
|-------|-------|--------|----------|
| **Phase 1: MVP** | Mois 1-4 | $180,000 | Lancement produit minimal |
| **Phase 2: Growth** | Mois 5-8 | $160,000 | Acquisition & itération |
| **Phase 3: Scale** | Mois 9-12 | $200,000 | Expansion & optimisation |
| **Réserve** | - | $60,000 | Contingence (10%) |
| **TOTAL ANNÉE 1** | 12 mois | **$600,000** | |

### 1.2 Répartition par Catégorie

```
Salaires & RH      ████████████████████████████████████  58%  $348,000
Marketing          ██████████████░░░░░░░░░░░░░░░░░░░░░░  20%  $120,000
Infrastructure     ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10%  $60,000
Juridique          ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   5%  $30,000
Admin & Divers     ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   5%  $30,000
Réserve            ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   2%  $12,000
```

---

## 2. BUDGET DÉVELOPPEMENT & TECHNIQUE

### 2.1 Salaires Équipe Technique

| Poste | Mois | Salaire brut | Charges (35%) | Total |
|-------|------|-------------|---------------|-------|
| **CTO / Lead Dev** | 12 | $6,500/m | $2,275/m | $105,300 |
| **Full-Stack Developer Senior** | 12 | $5,000/m | $1,750/m | $81,000 |
| **Full-Stack Developer Junior** | 10 | $3,500/m | $1,225/m | $47,250 |
| **Data Scientist / ML Engineer** | 12 | $5,500/m | $1,925/m | $89,100 |
| **DevOps (Part-time 50%)** | 12 | $2,500/m | $875/m | $40,500 |
| **TOTAL SALAIRES TECH** | | | | **$363,150** |

### 2.2 Infrastructure Cloud

#### AWS / Azure - Estimation Mensuelle

| Service | Description | M1-M4 | M5-M8 | M9-M12 |
|---------|-------------|-------|-------|--------|
| **Compute** | | | | |
| EC2/VMs | App servers | $400 | $800 | $1,500 |
| Lambda | Serverless | $50 | $150 | $300 |
| **Database** | | | | |
| RDS PostgreSQL | Main DB | $200 | $400 | $700 |
| ElastiCache | Redis cache | $100 | $200 | $350 |
| TimescaleDB | Time series | $150 | $300 | $500 |
| **Storage** | | | | |
| S3 | Files, backups | $30 | $60 | $120 |
| EBS | Block storage | $50 | $100 | $180 |
| **Networking** | | | | |
| CloudFront CDN | Content delivery | $50 | $150 | $400 |
| Route 53 | DNS | $10 | $10 | $10 |
| Load Balancer | ALB | $30 | $50 | $80 |
| **Monitoring** | | | | |
| CloudWatch | Logs, metrics | $50 | $100 | $200 |
| **Sécurité** | | | | |
| WAF | Firewall | $30 | $50 | $80 |
| Secrets Manager | Credentials | $10 | $15 | $20 |
| **TOTAL/MOIS** | | **$1,160** | **$2,385** | **$4,440** |

#### Total Annuel Infrastructure
| Période | Mois | Coût/mois | Total |
|---------|------|-----------|-------|
| M1-M4 | 4 | $1,160 | $4,640 |
| M5-M8 | 4 | $2,385 | $9,540 |
| M9-M12 | 4 | $4,440 | $17,760 |
| **TOTAL** | 12 | | **$31,940** |

### 2.3 Services Tiers & APIs

| Service | Usage | Coût mensuel | Total annuel |
|---------|-------|--------------|--------------|
| **Data Feeds** | | | |
| Polygon.io (Stocks) | Real-time US | $499 | $5,988 |
| Finage (Forex) | Real-time FX | $299 | $3,588 |
| CoinGecko Pro (Crypto) | Real-time crypto | $249 | $2,988 |
| Alpha Vantage | Backup data | $99 | $1,188 |
| **Total Data Feeds** | | **$1,146** | **$13,752** |
| | | | |
| **Tools & Services** | | | |
| TradingView Widget | Charts | $0-199 | $0-2,388 |
| Firebase | Auth, notifications | $50-200 | $600-2,400 |
| SendGrid | Emails | $50-100 | $600-1,200 |
| Twilio | SMS alerts | $50-200 | $600-2,400 |
| Stripe | Payments | 2.9% + $0.30 | Variable |
| GitHub Enterprise | Repos, CI/CD | $21/user | $1,512 |
| Figma | Design | $15/user | $540 |
| Slack | Communication | $8/user | $576 |
| Notion | Documentation | $10/user | $720 |
| **Total Tools** | | **~$400** | **~$8,000** |
| | | | |
| **Monitoring & Sécurité** | | | |
| Datadog | APM, logs | $200-500 | $2,400-6,000 |
| Sentry | Error tracking | $50-100 | $600-1,200 |
| Snyk | Security scanning | $100-200 | $1,200-2,400 |
| **Total Monitoring** | | **$350-800** | **$4,200-9,600** |

### 2.4 Récapitulatif Budget Technique

| Catégorie | Total Annuel |
|-----------|--------------|
| Salaires équipe tech | $363,150 |
| Infrastructure cloud | $31,940 |
| Data feeds & APIs | $13,752 |
| Tools & services | $8,000 |
| Monitoring & sécurité | $6,000 |
| **TOTAL TECHNIQUE** | **$422,842** |

---

## 3. BUDGET MARKETING & ACQUISITION

### 3.1 Budget Marketing Global

| Canal | M1-M4 | M5-M8 | M9-M12 | Total |
|-------|-------|-------|--------|-------|
| **Content & SEO** | $8,000 | $12,000 | $20,000 | **$40,000** |
| **Paid Acquisition** | $5,000 | $20,000 | $35,000 | **$60,000** |
| **Social Media** | $2,000 | $4,000 | $6,000 | **$12,000** |
| **Affiliates** | $0 | $5,000 | $10,000 | **$15,000** |
| **PR & Events** | $2,000 | $3,000 | $8,000 | **$13,000** |
| **TOTAL** | **$17,000** | **$44,000** | **$79,000** | **$140,000** |

### 3.2 Détail Content & SEO

| Poste | Description | Coût |
|-------|-------------|------|
| **Rédaction** | | |
| Articles blog (100) | $150/article | $15,000 |
| Guides/Ebooks (5) | $1,000/guide | $5,000 |
| Landing pages (20) | $200/page | $4,000 |
| **SEO Technique** | | |
| Audit SEO initial | Consultant | $2,000 |
| Outils SEO | Ahrefs, SEMrush | $4,000 |
| Link building | Outreach | $5,000 |
| **Vidéo** | | |
| Vidéos YouTube (24) | $200/vidéo | $4,800 |
| Montage & production | | $2,000 |
| **TOTAL** | | **$41,800** |

### 3.3 Détail Paid Acquisition

| Plateforme | Budget | CPC estimé | Clicks | Conversions |
|------------|--------|------------|--------|-------------|
| **Google Ads** | | | | |
| Search (trading keywords) | $25,000 | $2.50 | 10,000 | 500 |
| Display/Remarketing | $5,000 | $0.50 | 10,000 | 100 |
| YouTube Ads | $5,000 | $0.15 | 33,333 | 200 |
| **Meta Ads** | | | | |
| Facebook | $10,000 | $1.00 | 10,000 | 300 |
| Instagram | $5,000 | $0.80 | 6,250 | 150 |
| **LinkedIn** | | | | |
| B2B/Enterprise | $5,000 | $5.00 | 1,000 | 50 |
| **Twitter/X** | | | | |
| Finance audience | $5,000 | $1.50 | 3,333 | 100 |
| **TOTAL** | **$60,000** | | **73,916** | **1,400** |

**CAC Paid: $60,000 / 1,400 = $42.86**

### 3.4 Détail Programme Affiliés

| Élément | Coût |
|---------|------|
| Plateforme affiliation | $2,000 |
| Commission CPA ($50/client) | $10,000 (200 clients) |
| Matériel marketing | $1,000 |
| Bonus top affiliés | $2,000 |
| **TOTAL** | **$15,000** |

### 3.5 Détail PR & Events

| Activité | Coût |
|----------|------|
| Communiqués de presse | $3,000 |
| Conférences (sponsoring) | $5,000 |
| Webinaires (12) | $2,000 |
| Meetups & networking | $1,500 |
| Goodies & swag | $1,500 |
| **TOTAL** | **$13,000** |

---

## 4. BUDGET JURIDIQUE & COMPLIANCE

### 4.1 Frais Juridiques

| Poste | Description | Coût |
|-------|-------------|------|
| **Constitution** | | |
| Création société | Statuts, immatriculation | $2,000 |
| Pacte d'actionnaires | Avocat corporate | $3,000 |
| **Propriété intellectuelle** | | |
| Dépôt marque | INPI/EUIPO | $1,500 |
| Protection nom de domaine | Plusieurs extensions | $500 |
| **Documents légaux** | | |
| CGU/CGV | Rédaction avocat | $2,500 |
| Politique confidentialité | RGPD compliant | $2,000 |
| Mentions légales | | $500 |
| Contrats utilisateurs | EULA | $1,500 |
| **Compliance finance** | | |
| Conseil réglementaire | Avocat spécialisé | $5,000 |
| Disclaimers trading | | $1,500 |
| **Contrats** | | |
| Contrats travail | Templates | $1,500 |
| Contrats prestataires | | $1,000 |
| Contrats partenaires | Brokers, affiliés | $2,500 |
| **TOTAL JURIDIQUE** | | **$25,000** |

### 4.2 Compliance & Régulation

| Poste | Description | Coût |
|-------|-------------|------|
| Audit RGPD | Consultant | $3,000 |
| DPO externalisé | 6 mois | $3,000 |
| Mise en conformité | Outils & process | $2,000 |
| Formation équipe | Compliance | $1,000 |
| Veille réglementaire | Abonnement | $1,000 |
| **TOTAL COMPLIANCE** | | **$10,000** |

---

## 5. BUDGET OPÉRATIONS & ADMIN

### 5.1 Frais Généraux

| Poste | Mensuel | Annuel |
|-------|---------|--------|
| **Locaux** | | |
| Coworking / Bureau | $500-1,500 | $6,000-18,000 |
| Fournitures | $100 | $1,200 |
| **Équipements** | | |
| Ordinateurs (5) | - | $7,500 |
| Écrans, accessoires | - | $2,000 |
| Licences logiciels | $300 | $3,600 |
| **Services** | | |
| Comptabilité | $300 | $3,600 |
| Banque & paiements | $50 | $600 |
| Assurances | $200 | $2,400 |
| Téléphonie & internet | $150 | $1,800 |
| **TOTAL ADMIN** | | **$28,700 - $40,700** |

### 5.2 Support Client

| Poste | Coût |
|-------|------|
| Outil helpdesk (Zendesk/Intercom) | $2,400/an |
| Chatbot IA | $1,200/an |
| Formation support | $1,000 |
| Documentation utilisateur | Inclus content |
| **TOTAL SUPPORT** | **$4,600** |

---

## 6. BUDGET RH & RECRUTEMENT

### 6.1 Coûts de Recrutement

| Poste | Méthode | Coût |
|-------|---------|------|
| Publication offres | LinkedIn, Indeed | $2,000 |
| Chasse de têtes | Senior roles | $5,000 |
| Tests techniques | Plateforme | $500 |
| Onboarding | Formation | $2,000 |
| **TOTAL RECRUTEMENT** | | **$9,500** |

### 6.2 Avantages & Bien-être

| Poste | Coût/personne | Total (6 pers) |
|-------|---------------|----------------|
| Mutuelle | $100/mois | $7,200/an |
| Tickets restaurant | $150/mois | $10,800/an |
| Formation continue | $500/an | $3,000/an |
| Team building | $200/an | $1,200/an |
| **TOTAL** | | **$22,200** |

---

## 7. BUDGET CONTINGENCE & RÉSERVE

### 7.1 Réserve de Sécurité

| Type | Calcul | Montant |
|------|--------|---------|
| Contingence opérationnelle | 5% du budget | $30,000 |
| Réserve trésorerie | 2 mois de burn | $80,000 |
| Imprévus techniques | Forfait | $10,000 |
| **TOTAL RÉSERVE** | | **$120,000** |

### 7.2 Scénarios de Dépenses Imprévues

| Scénario | Probabilité | Impact | Provision |
|----------|-------------|--------|-----------|
| Refonte technique majeure | 20% | $30,000 | $6,000 |
| Problème compliance | 15% | $20,000 | $3,000 |
| Turnover clé | 25% | $15,000 | $3,750 |
| Incident sécurité | 10% | $25,000 | $2,500 |
| Litige juridique | 10% | $20,000 | $2,000 |
| **TOTAL EMV** | | | **$17,250** |

---

## 8. CALENDRIER DES DÉPENSES

### 8.1 Planning Mensuel - Année 1

| Mois | Salaires | Tech | Marketing | Juridique | Admin | Total |
|------|----------|------|-----------|-----------|-------|-------|
| M1 | $25,000 | $3,000 | $2,000 | $8,000 | $3,000 | $41,000 |
| M2 | $25,000 | $3,000 | $3,000 | $3,000 | $2,500 | $36,500 |
| M3 | $27,000 | $3,500 | $4,000 | $2,000 | $2,500 | $39,000 |
| M4 | $27,000 | $4,000 | $8,000 | $2,000 | $2,500 | $43,500 |
| M5 | $29,000 | $4,500 | $10,000 | $1,500 | $2,500 | $47,500 |
| M6 | $29,000 | $5,000 | $11,000 | $1,500 | $2,500 | $49,000 |
| M7 | $31,000 | $5,500 | $12,000 | $1,500 | $3,000 | $53,000 |
| M8 | $31,000 | $6,000 | $11,000 | $1,500 | $3,000 | $52,500 |
| M9 | $33,000 | $6,500 | $15,000 | $2,000 | $3,000 | $59,500 |
| M10 | $33,000 | $7,000 | $18,000 | $1,500 | $3,000 | $62,500 |
| M11 | $35,000 | $7,500 | $20,000 | $1,500 | $3,000 | $67,000 |
| M12 | $35,000 | $8,000 | $26,000 | $1,500 | $3,000 | $73,500 |
| **TOTAL** | **$360,000** | **$63,500** | **$140,000** | **$27,500** | **$33,500** | **$624,500** |

### 8.2 Courbe de Burn Rate

```
Burn Rate Mensuel ($)

$80K │                                          ┌──────
     │                                     ┌────┘
$70K │                                ┌────┘
     │                           ┌────┘
$60K │                      ┌────┘
     │                 ┌────┘
$50K │            ┌────┘
     │       ┌────┘
$40K │  ┌────┘
     │──┘
$30K │
     └────────────────────────────────────────────────►
        M1  M2  M3  M4  M5  M6  M7  M8  M9  M10 M11 M12
```

---

## 9. SUIVI BUDGÉTAIRE

### 9.1 Template de Suivi Mensuel

| Catégorie | Budget | Réel | Écart | % |
|-----------|--------|------|-------|---|
| Salaires | $XX,XXX | $XX,XXX | $X,XXX | X% |
| Infrastructure | $X,XXX | $X,XXX | $XXX | X% |
| Marketing | $XX,XXX | $XX,XXX | $X,XXX | X% |
| Juridique | $X,XXX | $X,XXX | $XXX | X% |
| Admin | $X,XXX | $X,XXX | $XXX | X% |
| **TOTAL** | **$XX,XXX** | **$XX,XXX** | **$X,XXX** | **X%** |

### 9.2 KPIs Financiers à Suivre

| KPI | Fréquence | Cible |
|-----|-----------|-------|
| Burn rate mensuel | Mensuel | < Budget +10% |
| Runway | Mensuel | > 12 mois |
| CAC | Mensuel | < $50 |
| Revenus vs prévisions | Mensuel | > 90% |
| Marge brute | Mensuel | > 80% |
| Cash position | Hebdo | > 3 mois burn |

### 9.3 Alertes & Seuils

| Indicateur | Vert | Orange | Rouge |
|------------|------|--------|-------|
| Runway | > 12 mois | 6-12 mois | < 6 mois |
| Burn vs budget | < 100% | 100-120% | > 120% |
| Cash | > $150K | $75K-150K | < $75K |
| CAC | < $40 | $40-60 | > $60 |

---

## 10. ANNEXES

### 10.1 Comparatif Fournisseurs Cloud

| Critère | AWS | Azure | GCP |
|---------|-----|-------|-----|
| Prix compute | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Prix stockage | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| ML/AI services | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Documentation | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Support | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Recommandation** | ✅ MVP | Backup | ML workloads |

### 10.2 Comparatif Data Providers

| Provider | Forex | Stocks | Crypto | Prix |
|----------|-------|--------|--------|------|
| Polygon.io | ❌ | ✅ | ✅ | $$ |
| Finage | ✅ | ✅ | ✅ | $$ |
| Alpha Vantage | ✅ | ✅ | ✅ | $ |
| Finnhub | ✅ | ✅ | ✅ | $ |
| CoinGecko | ❌ | ❌ | ✅ | $ |
| **Recommandation** | Finage | Polygon | CoinGecko | Mix |

### 10.3 Grille Salariale Marché

| Poste | Junior | Mid | Senior |
|-------|--------|-----|--------|
| Full-Stack Dev | $40-50K | $55-70K | $75-95K |
| Data Scientist | $50-60K | $65-85K | $90-120K |
| DevOps | $45-55K | $60-75K | $80-100K |
| Product Manager | $45-55K | $60-80K | $85-110K |
| UI/UX Designer | $35-45K | $50-65K | $70-90K |
| Marketing | $35-45K | $50-65K | $70-90K |

*Salaires indicatifs zone Europe/Remote*

---

*Document à réviser mensuellement*
*Dernière mise à jour: [DATE]*
