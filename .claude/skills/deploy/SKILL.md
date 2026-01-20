# Skill: Deploy

## Description
Déploie l'application sur Vercel avec vérifications pré-déploiement.

## Trigger
- Commande: `/deploy`
- Contexte: Quand l'utilisateur veut déployer une nouvelle version

## Pre-Deploy Checklist (Automatique)
1. ✅ Vérifier que tous les tests passent (`npm test`)
2. ✅ Vérifier le build (`npm run build`)
3. ✅ Vérifier le linting (`npm run lint`)
4. ✅ Vérifier les types (`npm run type-check`)
5. ✅ Vérifier qu'il n'y a pas de `console.log` en production
6. ✅ Vérifier les variables d'environnement requises
7. ✅ Vérifier qu'il n'y a pas de secrets exposés

## Workflow Steps
1. Exécuter la checklist pré-déploiement
2. Si échec: Afficher les erreurs et stopper
3. Si succès: Demander confirmation
4. Commit avec message standardisé
5. Push sur main
6. Vercel déploie automatiquement
7. Vérifier le statut du déploiement
8. Afficher l'URL de preview/production

## Commands Executed
```bash
# Pre-deploy checks
npm run lint
npm run type-check
npm run build
npm test

# Deploy
git add .
git commit -m "deploy: [description]"
git push origin main
```

## Output
```
✅ Lint: Passed
✅ Types: Passed
✅ Build: Passed
✅ Tests: 12/12 passed

🚀 Deploying to Vercel...
✅ Deployment successful!

Preview: https://chartdepth-xxx.vercel.app
Production: https://chartdepth.com (if promoted)
```

## Error Handling
- Si lint échoue: Afficher les erreurs, proposer fix automatique
- Si build échoue: Afficher les erreurs de compilation
- Si tests échouent: Afficher les tests qui ont échoué
- Si push échoue: Vérifier les permissions git

## Post-Deploy Actions
1. Vérifier que le site est accessible
2. Tester les fonctionnalités critiques (login, dashboard)
3. Vérifier les logs Vercel pour erreurs
4. Notifier si problème détecté

## Related Files
- `vercel.json` - Configuration Vercel
- `.env.production` - Variables de production
- `next.config.js` - Configuration Next.js
