# 🧑‍💻 ACTIONS HUMAINES REQUISES - ChartDepth

Ce fichier liste toutes les actions que **TOI (l'humain)** doit effectuer.
Claude Code ne peut pas faire ces actions à ta place.

---

## 🔴 ACTIONS URGENTES (Bloquent le développement)

### 1. Créer un compte Supabase
**Priorité**: 🔴 HAUTE - Bloque l'authentification et la base de données

**Étapes**:
1. Aller sur [supabase.com](https://supabase.com)
2. Cliquer sur "Start your project"
3. Se connecter avec GitHub (recommandé)
4. Créer un nouveau projet:
   - **Nom**: chartdepth (ou ton choix)
   - **Région**: West EU (Paris) - pour la France
   - **Mot de passe DB**: Générer un mot de passe fort et le sauvegarder
5. Attendre ~2 minutes que le projet soit créé
6. Aller dans **Settings > API**
7. Copier les clés dans `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
   ```

**Status**: [ ] Non fait

---

### 2. Créer un compte Stripe
**Priorité**: 🟡 MOYENNE - Peut attendre Phase 3

**Étapes**:
1. Aller sur [stripe.com](https://stripe.com)
2. Créer un compte (email professionnel recommandé)
3. Activer le **mode test** (toggle en haut à droite)
4. Aller dans **Developers > API Keys**
5. Copier les clés dans `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```
6. Pour le webhook (plus tard):
   - Aller dans **Developers > Webhooks**
   - Créer un endpoint: `https://tonsite.com/api/webhooks/stripe`
   - Copier le Webhook Secret:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

**Status**: [ ] Non fait

---

### 3. Créer le fichier .env.local
**Priorité**: 🔴 HAUTE - Requis pour le fonctionnement

**Étapes**:
1. Créer le fichier `.env.local` à la racine du projet
2. Copier ce template et remplir les valeurs:

```env
# Supabase (depuis supabase.com/dashboard)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe (depuis stripe.com/dashboard)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Status**: [ ] Non fait

---

## 🟡 ACTIONS IMPORTANTES (Nécessaires avant le lancement)

### 4. Acheter le nom de domaine
**Priorité**: 🟡 MOYENNE - Peut attendre la fin du MVP

**Suggestions**:
- chartdepth.com (si disponible)
- chartdepth.io
- chartdepth.co

**Où acheter** (du moins cher au plus cher):
1. Porkbun.com (~10€/an)
2. Namecheap.com (~12€/an)
3. Google Domains (~12€/an)
4. OVH.com (~15€/an pour .com)

**Status**: [ ] Non fait

---

### 5. Créer les comptes réseaux sociaux
**Priorité**: 🟡 MOYENNE - Pour le marketing

**Comptes à créer**:
- [ ] Twitter/X: @chartdepth
- [ ] Telegram: t.me/chartdepth (créer un canal)
- [ ] Email pro: contact@chartdepth.com (après achat domaine)

**Status**: [ ] Non fait

---

### 6. Configurer Vercel pour le déploiement
**Priorité**: 🟢 BASSE - Pour la mise en production

**Étapes**:
1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Importer le repository du projet
4. Configurer les variables d'environnement
5. Déployer

**Status**: [ ] Non fait

---

## 🟢 ACTIONS DE CONFIGURATION (Quand Claude te le demande)

### Variables d'environnement à vérifier
Quand Claude aura besoin de tester certaines fonctionnalités, il te demandera de vérifier que ces variables sont bien configurées:

| Variable | Service | Où la trouver |
|----------|---------|---------------|
| NEXT_PUBLIC_SUPABASE_URL | Supabase | Settings > API |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase | Settings > API |
| SUPABASE_SERVICE_ROLE_KEY | Supabase | Settings > API |
| STRIPE_SECRET_KEY | Stripe | Developers > API Keys |
| STRIPE_WEBHOOK_SECRET | Stripe | Developers > Webhooks |

---

## ✅ ACTIONS COMPLÉTÉES

| Action | Date | Notes |
|--------|------|-------|
| - | - | Aucune action complétée pour l'instant |

---

## 📝 COMMENT UTILISER CE FICHIER

1. **Quand tu ouvres une session Claude Code**:
   - Vérifie ce fichier pour voir s'il y a des actions bloquantes
   - Fais les actions marquées 🔴 HAUTE en priorité

2. **Après avoir fait une action**:
   - Marque-la comme `[x]` complétée
   - Déplace-la dans la section "Actions Complétées"
   - Informe Claude que c'est fait

3. **Si tu es bloqué**:
   - Dis à Claude quelle action te pose problème
   - Il t'aidera avec des instructions plus détaillées

---

## 💡 CONSEILS

### Ordre recommandé pour les actions
1. **Maintenant**: Créer compte Supabase (gratuit, 5 min)
2. **Maintenant**: Créer .env.local avec les clés Supabase
3. **Cette semaine**: Créer compte Stripe (gratuit, 5 min)
4. **Semaine 10+**: Acheter le domaine
5. **Semaine 11+**: Configurer Vercel

### Pourquoi Claude ne peut pas faire ces actions?
- **Sécurité**: Les clés API sont sensibles
- **Identité**: Les comptes doivent être au nom de l'utilisateur
- **Paiement**: Certaines actions nécessitent une carte bancaire
- **Légal**: Tu dois accepter les CGU de chaque service

---

*Dernière mise à jour: Session actuelle*
