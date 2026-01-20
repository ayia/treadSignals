# Skill: Signal Creator

## Description
Crée un nouveau signal de trading avec toutes les validations nécessaires.

## Trigger
- Commande: `/signal`
- Contexte: Quand l'utilisateur veut créer un nouveau signal de trading

## Input Required
- `instrument`: L'instrument à trader (EUR/USD, GBP/USD, XAU/USD, BTC/USD, US30)
- `direction`: BUY ou SELL
- `entry_price`: Prix d'entrée
- `stop_loss`: Prix du stop loss
- `take_profit_1`: Premier objectif
- `take_profit_2`: (optionnel) Deuxième objectif
- `analysis`: Analyse technique justifiant le signal

## Validation Rules
1. L'instrument doit être dans la liste des 5 instruments MVP
2. Le stop loss doit être:
   - En dessous de l'entry pour un BUY
   - Au dessus de l'entry pour un SELL
3. Le take profit doit être:
   - Au dessus de l'entry pour un BUY
   - En dessous de l'entry pour un SELL
4. Le Risk:Reward doit être >= 1:1
5. L'analyse ne doit pas être vide

## Output
```typescript
interface Signal {
  id: string;
  instrument: string;
  direction: 'BUY' | 'SELL';
  entry_price: number;
  stop_loss: number;
  take_profit_1: number;
  take_profit_2?: number;
  risk_reward: number;
  analysis: string;
  status: 'active';
  created_at: string;
  is_free: boolean;
}
```

## Workflow Steps
1. Valider les inputs
2. Calculer le Risk:Reward
3. Générer l'ID unique
4. Insérer dans Supabase `signals` table
5. Envoyer notification email aux users Pro
6. Poster sur Telegram
7. Retourner le signal créé

## Example Usage
```
/signal EUR/USD BUY 1.0850 SL:1.0820 TP1:1.0890 TP2:1.0920
Analyse: Support majeur à 1.0820, momentum haussier sur H4
```

## Error Handling
- Si validation échoue: Retourner erreur avec détail
- Si Supabase échoue: Retry 3x puis alerter
- Si email échoue: Log mais ne pas bloquer

## Related Files
- `app/api/admin/signals/route.ts` - API endpoint
- `components/signals/signal-form.tsx` - Admin form
- `lib/supabase/signals.ts` - Database operations
