# /signal - Créer un Signal de Trading

## Usage
```
/signal [instrument] [direction] [entry] SL:[stop_loss] TP1:[tp1] TP2:[tp2]
```

## Exemple
```
/signal EUR/USD BUY 1.0850 SL:1.0820 TP1:1.0890 TP2:1.0920
```

## Paramètres

| Param | Required | Description | Valeurs |
|-------|----------|-------------|---------|
| instrument | ✅ | Paire à trader | EUR/USD, GBP/USD, XAU/USD, BTC/USD, US30 |
| direction | ✅ | Direction du trade | BUY, SELL |
| entry | ✅ | Prix d'entrée | Nombre décimal |
| SL | ✅ | Stop Loss | Nombre décimal |
| TP1 | ✅ | Take Profit 1 | Nombre décimal |
| TP2 | ❌ | Take Profit 2 | Nombre décimal |
| TP3 | ❌ | Take Profit 3 | Nombre décimal |

## Workflow

1. **Validation**
   - Vérifier que l'instrument est dans la liste MVP
   - Vérifier la cohérence direction/SL/TP
   - Calculer le Risk:Reward (minimum 1:1)

2. **Confirmation**
   - Afficher le récapitulatif du signal
   - Demander confirmation avant création

3. **Création**
   - Insérer dans la base de données Supabase
   - Générer l'ID unique

4. **Notifications**
   - Envoyer email aux utilisateurs Pro
   - Poster sur le canal Telegram

5. **Tracking**
   - Mettre à jour le compteur de signaux
   - Logger l'action

## Output
```
✅ Signal créé avec succès!

📊 EUR/USD - BUY
━━━━━━━━━━━━━━━━━━━━━
Entry:     1.0850
Stop Loss: 1.0820 (-30 pips)
TP1:       1.0890 (+40 pips)
TP2:       1.0920 (+70 pips)
━━━━━━━━━━━━━━━━━━━━━
R:R: 1:1.33
ID: sig_abc123

📧 Notifications envoyées: 42 users Pro
📱 Telegram: Posté sur @chartdepth
```

## Erreurs Possibles

| Erreur | Cause | Solution |
|--------|-------|----------|
| `Invalid instrument` | Instrument non supporté | Utiliser un des 5 instruments MVP |
| `Invalid SL position` | SL mal positionné | BUY: SL < Entry, SELL: SL > Entry |
| `R:R too low` | Risk:Reward < 1:1 | Ajuster TP ou SL |
| `DB error` | Erreur Supabase | Vérifier connexion et credentials |

## Permissions
- Requiert: Admin role
- Fichier: `app/api/admin/signals/route.ts`
