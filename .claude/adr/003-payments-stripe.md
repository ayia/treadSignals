# ADR-003: Choix de Stripe pour les Paiements

## Status
ACCEPTED

## Date
2024-01-XX (Session initiale)

## Context
Le projet ChartDepth nécessite un système de paiement pour:
- Abonnements mensuels récurrents (19€/mois)
- Gestion automatique des renouvellements
- Gestion des échecs de paiement
- Portal client pour gérer l'abonnement
- Factures automatiques
- Conformité RGPD et PCI-DSS

Contraintes:
- Marché francophone (support EUR)
- Frais acceptables pour le volume attendu
- API simple et bien documentée
- Webhooks fiables

## Decision
**Utiliser Stripe** pour tous les paiements et la gestion des abonnements.

Configuration:
- Stripe Checkout pour la page de paiement
- Stripe Billing pour les abonnements
- Stripe Customer Portal pour l'auto-gestion
- Webhooks pour synchroniser avec Supabase

## Options Considered

### Option 1: Stripe (CHOISI)
**Description**: Leader mondial des paiements en ligne

**Avantages**:
- **API exceptionnelle** (meilleure du marché)
- Checkout hébergé (pas de formulaire à gérer)
- Customer Portal (clients gèrent seuls)
- Webhooks robustes et bien documentés
- Support EUR, cartes françaises
- Conformité PCI-DSS automatique
- Test mode excellent pour développement
- Documentation de référence
- Intégration Next.js native

**Inconvénients**:
- Frais: 1.4% + 0.25€ (cartes EU) / 2.9% + 0.25€ (hors EU)
- Pas d'IBAN français natif (mais Stripe FR existe)

**Coût sur 19€**:
- Carte EU: ~0.52€ → Net: ~18.48€
- Carte hors EU: ~0.80€ → Net: ~18.20€

### Option 2: Paddle
**Description**: Merchant of Record (ils gèrent TVA, etc.)

**Avantages**:
- Gère TVA automatiquement
- Un seul contrat (ils revendent)
- Moins de comptabilité

**Inconvénients**:
- Frais plus élevés (~5% + 0.50€)
- Moins de contrôle
- Processus d'approbation

**Coût sur 19€**: ~1.45€ → Net: ~17.55€

### Option 3: LemonSqueezy
**Description**: Alternative moderne à Paddle

**Avantages**:
- UI moderne
- Gère aussi TVA
- Bon pour produits digitaux

**Inconvénients**:
- Plus récent, moins établi
- Frais similaires à Paddle
- Moins d'intégrations

### Option 4: PayPal
**Description**: Paiement classique

**Avantages**:
- Très connu des utilisateurs
- Certains préfèrent PayPal

**Inconvénients**:
- API moins moderne
- UX de checkout moins bonne
- Frais similaires à Stripe
- Support technique moins bon

## Consequences

### Positives
- Paiement en quelques clics (Checkout)
- Zéro maintenance paiement
- Conformité automatique
- Clients autonomes (portal)
- Analytics inclus
- Test mode pour développement

### Negatives
- Frais sur chaque transaction
- Dépendance à Stripe
- Fonds bloqués 7 jours au début

### Risks
- **Risque**: Stripe suspend le compte
  - **Mitigation**: Suivre les ToS, pas de claims frauduleux, disclaimers clairs

- **Risque**: Chargebacks fréquents
  - **Mitigation**: Politique de remboursement claire, service quality

- **Risque**: Frais augmentent
  - **Mitigation**: Frais standard industrie, peu probable

## Implementation Notes

### Produit Stripe
```
Nom: ChartDepth Pro
Prix: 19€/mois
Price ID: price_xxx (récupérer après création)
Metadata: { plan: 'pro' }
```

### Webhook Events
```
checkout.session.completed → Upgrade to Pro
customer.subscription.updated → Sync status
customer.subscription.deleted → Downgrade to Free
invoice.payment_failed → Notify user
```

### Customer Portal
Activer dans Dashboard Stripe:
- Modification carte
- Annulation abonnement
- Historique factures
- Mise à jour infos

## References
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe + Next.js](https://stripe.com/docs/payments/quickstart)
- [Stripe Pricing](https://stripe.com/pricing)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)

---
*ADR créé par: Claude*
*Dernière mise à jour: Session actuelle*
