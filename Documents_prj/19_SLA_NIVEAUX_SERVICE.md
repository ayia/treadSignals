# 📊 ACCORDS DE NIVEAU DE SERVICE (SLA)

## Service Level Agreement - Plateforme de Signaux Trading IA

**Version:** 1.0
**Date d'effet:** [DATE]
**Durée:** 12 mois renouvelables

---

## 1. PARTIES

**Le Fournisseur :**
[NOM DE LA SOCIÉTÉ]
[Adresse]
[Contact]

**Le Client :**
Utilisateurs de la plateforme selon leur niveau d'abonnement.

---

## 2. PÉRIMÈTRE DES SERVICES

### 2.1 Services Couverts

Ce SLA couvre les services suivants :

| Service | Description | Plans Concernés |
|---------|-------------|-----------------|
| Plateforme Web | Application web accessible via navigateur | Tous |
| Application Mobile | Apps iOS et Android | Tous |
| API REST | Accès programmatique aux données | Pro, Enterprise |
| WebSocket | Flux temps réel | Pro, Enterprise |
| Signaux IA | Génération de signaux de trading | Tous |
| Alertes | Notifications push, email, SMS | Tous |
| Support Client | Assistance technique et fonctionnelle | Tous |

### 2.2 Services Exclus

Ce SLA ne couvre pas :
- Services tiers (brokers, data providers)
- Problèmes liés à la connexion internet du client
- Maintenance planifiée (notifiée à l'avance)
- Force majeure

---

## 3. NIVEAUX DE SERVICE

### 3.1 Disponibilité

```
┌─────────────────────────────────────────────────────────────┐
│                 OBJECTIFS DE DISPONIBILITÉ                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SERVICE              FREE    BASIC   PRO     ENTERPRISE    │
│  ─────────────────────────────────────────────────────────  │
│  Plateforme Web       99.0%   99.5%   99.9%   99.95%        │
│  API REST             N/A     99.0%   99.9%   99.95%        │
│  WebSocket            N/A     N/A     99.9%   99.95%        │
│  Signaux              98.0%   99.0%   99.5%   99.9%         │
│  Alertes Email        95.0%   99.0%   99.5%   99.9%         │
│  Alertes Push         95.0%   99.0%   99.5%   99.9%         │
│                                                             │
│  Période de mesure : Mensuelle (hors maintenance planifiée) │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Équivalence Temps d'Indisponibilité

| Disponibilité | Indisponibilité/mois | Indisponibilité/an |
|---------------|----------------------|---------------------|
| 99.95% | 21 minutes | 4.4 heures |
| 99.9% | 43 minutes | 8.8 heures |
| 99.5% | 3.6 heures | 43.8 heures |
| 99.0% | 7.3 heures | 87.6 heures |
| 98.0% | 14.6 heures | 175 heures |

### 3.3 Calcul de la Disponibilité

```
Disponibilité (%) = ((Temps Total - Temps d'Indisponibilité) / Temps Total) × 100

Où :
- Temps Total = Minutes dans le mois (ex: 43,200 pour 30 jours)
- Temps d'Indisponibilité = Somme des minutes où le service était indisponible
```

---

## 4. TEMPS DE RÉPONSE

### 4.1 Performance Applicative

```
┌─────────────────────────────────────────────────────────────┐
│               OBJECTIFS DE PERFORMANCE                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  MÉTRIQUE                          OBJECTIF    MESURE       │
│  ─────────────────────────────────────────────────────────  │
│  Temps de chargement page          < 3s        p95          │
│  Temps réponse API (GET)           < 200ms     p95          │
│  Temps réponse API (POST)          < 500ms     p95          │
│  Latence WebSocket                 < 100ms     p95          │
│  Délai notification Push           < 30s       p95          │
│  Délai notification Email          < 5min      p95          │
│  Délai génération signal           < 60s       p95          │
│                                                             │
│  p95 = 95ème percentile                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Limites API

| Plan | Requêtes/minute | Requêtes/jour | WebSocket connections |
|------|-----------------|---------------|----------------------|
| Free | N/A | N/A | N/A |
| Basic | 30 | 10,000 | 1 |
| Pro | 60 | 50,000 | 3 |
| Enterprise | 300 | Illimité | 10+ |

---

## 5. SUPPORT CLIENT

### 5.1 Canaux de Support

| Canal | Disponibilité | Plans |
|-------|---------------|-------|
| Base de connaissances | 24/7 | Tous |
| Email | 24/7 (réponse heures ouvrées) | Tous |
| Chat en ligne | Lun-Ven 9h-18h CET | Basic+ |
| Téléphone | Lun-Ven 9h-18h CET | Pro+ |
| Support dédié | 24/7 | Enterprise |
| Slack/Teams dédié | 24/7 | Enterprise |

### 5.2 Temps de Réponse Support

```
┌─────────────────────────────────────────────────────────────┐
│              SLA SUPPORT PAR PRIORITÉ                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PRIORITÉ           FREE    BASIC    PRO      ENTERPRISE    │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  P1 - CRITIQUE                                              │
│  (Service indisponible)                                     │
│  Première réponse   24h     4h       1h       15min         │
│  Résolution         72h     24h      8h       4h            │
│                                                             │
│  P2 - MAJEUR                                                │
│  (Fonctionnalité majeure impactée)                          │
│  Première réponse   48h     8h       4h       1h            │
│  Résolution         5j      48h      24h      8h            │
│                                                             │
│  P3 - MINEUR                                                │
│  (Fonctionnalité secondaire impactée)                       │
│  Première réponse   72h     24h      8h       4h            │
│  Résolution         10j     5j       48h      24h           │
│                                                             │
│  P4 - TRIVIAL                                               │
│  (Demande d'information, suggestion)                        │
│  Première réponse   5j      48h      24h      8h            │
│  Résolution         Best    10j      5j       48h           │
│                     effort                                  │
│                                                             │
│  Heures ouvrées : Lun-Ven 9h-18h CET (hors jours fériés)    │
│  Enterprise : Heures calendaires 24/7                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 Définition des Priorités

**P1 - Critique :**
- Plateforme totalement inaccessible
- Perte de données
- Faille de sécurité active
- Impossibilité de se connecter

**P2 - Majeur :**
- Fonctionnalité majeure non fonctionnelle
- Signaux non générés
- Alertes non envoyées
- Performance très dégradée (>10x normal)

**P3 - Mineur :**
- Fonctionnalité secondaire non fonctionnelle
- Bug affectant une partie des utilisateurs
- Performance légèrement dégradée
- Problème d'affichage

**P4 - Trivial :**
- Question d'utilisation
- Demande de fonctionnalité
- Problème cosmétique
- Documentation

---

## 6. MAINTENANCE

### 6.1 Maintenance Planifiée

```
┌─────────────────────────────────────────────────────────────┐
│                POLITIQUE DE MAINTENANCE                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  MAINTENANCE STANDARD                                       │
│  ├─ Fenêtre     : Dimanche 02h-06h CET                      │
│  ├─ Fréquence   : Hebdomadaire (si nécessaire)              │
│  ├─ Notification: 72h à l'avance                            │
│  └─ Durée max   : 4 heures                                  │
│                                                             │
│  MAINTENANCE D'URGENCE                                      │
│  ├─ Fenêtre     : N'importe quand (si critique)             │
│  ├─ Notification: Dès que possible                          │
│  └─ Durée max   : Selon nécessité                           │
│                                                             │
│  MAINTENANCE MAJEURE                                        │
│  ├─ Fenêtre     : Samedi 22h - Dimanche 06h CET             │
│  ├─ Fréquence   : Trimestrielle (max)                       │
│  ├─ Notification: 7 jours à l'avance                        │
│  └─ Durée max   : 8 heures                                  │
│                                                             │
│  CANAUX DE NOTIFICATION :                                   │
│  ├─ Email à tous les utilisateurs                           │
│  ├─ Bandeau in-app                                          │
│  ├─ Page status (status.chartdepth.com)                     │
│  └─ Twitter @ChartDepthStatus                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Exclusions de Calcul SLA

La disponibilité n'est pas impactée par :
- Maintenance planifiée (notifiée selon politique)
- Indisponibilité des services tiers
- Actions ou inactions du client
- Force majeure (catastrophes, guerres, etc.)
- Attaques DDoS de grande ampleur
- Problèmes de réseau hors de notre contrôle

---

## 7. COMPENSATION

### 7.1 Crédits de Service

En cas de non-respect des SLA de disponibilité :

```
┌─────────────────────────────────────────────────────────────┐
│                    GRILLE DE CRÉDITS                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  DISPONIBILITÉ MENSUELLE          CRÉDIT (% facture mois)   │
│  ─────────────────────────────────────────────────────────  │
│  ≥ SLA engagé                     0%                        │
│  < SLA et ≥ SLA - 0.5%            10%                       │
│  < SLA - 0.5% et ≥ SLA - 1%       25%                       │
│  < SLA - 1% et ≥ SLA - 2%         50%                       │
│  < SLA - 2%                       100%                      │
│                                                             │
│  EXEMPLE (Plan Pro, SLA 99.9%) :                            │
│  ├─ Disponibilité 99.9%+ → Pas de crédit                    │
│  ├─ Disponibilité 99.4%-99.9% → 10% crédit                  │
│  ├─ Disponibilité 98.9%-99.4% → 25% crédit                  │
│  ├─ Disponibilité 97.9%-98.9% → 50% crédit                  │
│  └─ Disponibilité <97.9% → 100% crédit                      │
│                                                             │
│  Maximum : 100% de la facture mensuelle                     │
│  Non cumulable avec d'autres compensations                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 7.2 Procédure de Réclamation

1. **Délai** : Réclamation dans les 30 jours suivant l'incident
2. **Formulaire** : Via support ou email sla@[domaine].com
3. **Informations requises** :
   - Numéro de compte
   - Date et heure de l'incident
   - Description de l'impact
   - Preuves (captures d'écran, logs)
4. **Traitement** : Réponse sous 10 jours ouvrés
5. **Application** : Crédit appliqué sur la facture suivante

### 7.3 Exclusions de Compensation

Aucune compensation n'est due si :
- L'indisponibilité résulte d'une maintenance planifiée
- Le client n'a pas respecté ses propres obligations
- L'incident résulte d'une force majeure
- Le compte client est en défaut de paiement

---

## 8. OBLIGATIONS DU CLIENT

### 8.1 Utilisation Acceptable

Le client s'engage à :
- Utiliser les services conformément aux CGU
- Ne pas surcharger intentionnellement les systèmes
- Maintenir la confidentialité de ses identifiants
- Signaler promptement tout incident constaté
- Coopérer dans la résolution des problèmes

### 8.2 Limites d'Utilisation

```
┌─────────────────────────────────────────────────────────────┐
│               FAIR USE POLICY                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Les limites suivantes s'appliquent pour garantir           │
│  la qualité de service à tous les utilisateurs :            │
│                                                             │
│  API :                                                      │
│  ├─ Respect des rate limits par plan                        │
│  ├─ Pas de scraping automatisé                              │
│  └─ Pas de redistribution des données                       │
│                                                             │
│  WebSocket :                                                │
│  ├─ Nombre de connexions selon plan                         │
│  ├─ Reconnexion automatique espacée (backoff)               │
│  └─ Pas de connexions simultanées excessives                │
│                                                             │
│  Alertes :                                                  │
│  ├─ Nombre raisonnable d'alertes actives                    │
│  └─ Pas d'abus du système de notifications                  │
│                                                             │
│  En cas de dépassement :                                    │
│  1. Notification au client                                  │
│  2. Limitation temporaire si abus répété                    │
│  3. Proposition d'upgrade si besoin légitime                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. REPORTING

### 9.1 Rapports de Disponibilité

**Rapport Public :**
- Page status en temps réel : status.chartdepth.com
- Historique des incidents
- Métriques de disponibilité

**Rapport Client (Pro/Enterprise) :**
- Rapport mensuel par email
- Métriques personnalisées
- Analyse des tendances

**Rapport Enterprise :**
- Rapport hebdomadaire
- Métriques détaillées
- Revue trimestrielle avec account manager

### 9.2 Contenu des Rapports

```
RAPPORT MENSUEL DE DISPONIBILITÉ

Période : [Mois Année]
Client : [Nom / ID]
Plan : [Plan]

SYNTHÈSE
├─ Disponibilité mesurée : XX.XX%
├─ SLA engagé : XX.XX%
├─ Statut : ✅ Conforme / ❌ Non conforme

DÉTAIL DES INCIDENTS
├─ Incident #1 : [Date] - [Durée] - [Description]
├─ Incident #2 : [Date] - [Durée] - [Description]
└─ Total indisponibilité : X heures Y minutes

PERFORMANCE
├─ Temps réponse API moyen : XXX ms
├─ Temps réponse p95 : XXX ms
└─ Taux d'erreur : X.X%

SUPPORT
├─ Tickets ouverts : X
├─ Tickets résolus : X
├─ Temps moyen résolution : X heures

COMPENSATION (si applicable)
└─ Crédit accordé : XX€
```

---

## 10. RÉVISION ET MODIFICATION

### 10.1 Révision Périodique

Ce SLA est révisé :
- Annuellement (au minimum)
- Lors de changements majeurs de service
- À la demande du client (Enterprise)

### 10.2 Notification des Modifications

- **Modifications mineures** : 30 jours de préavis
- **Modifications majeures** : 60 jours de préavis
- **Notification** : Email + annonce in-app

### 10.3 Droit de Résiliation

En cas de dégradation significative du SLA (>10%), le client peut résilier sans frais sous 30 jours.

---

## 11. CONTACT ET ESCALADE

### 11.1 Contacts Standards

| Besoin | Contact |
|--------|---------|
| Support technique | support@[domaine].com |
| Questions SLA | sla@[domaine].com |
| Réclamations | complaints@[domaine].com |
| Urgences (Enterprise) | +XX XXX XXX XXX |

### 11.2 Escalade

```
Niveau 1 : Support Client
    ↓ (si non résolu en SLA)
Niveau 2 : Team Lead Support
    ↓ (si non résolu + 24h)
Niveau 3 : Head of Customer Success
    ↓ (si non résolu + 48h)
Niveau 4 : CTO / Direction
```

---

## 12. ACCEPTATION

Ce SLA fait partie intégrante des Conditions Générales d'Utilisation et de votre contrat d'abonnement.

En utilisant nos services, vous acceptez les termes de ce SLA.

---

*Document Version: 1.0*
*Date d'entrée en vigueur: [DATE]*
*Prochaine révision: [DATE + 12 mois]*
