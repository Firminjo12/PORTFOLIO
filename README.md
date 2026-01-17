# Portfolio de Firmin YAMEOGO

Site statique HTML/CSS/JS. Ce dépôt contient le portfolio personnel et le formulaire de contact configuré via Formspree.

Fichiers importants
- `index.html` — page d'accueil (racine du site)
- `portfolio.css` — styles
- `portfolio.js` — scripts (navigation, animations, envoi du formulaire)
- `image/` — images utilisées

Comment tester localement
1. Ouvrir `index.html` dans un navigateur (double-clic ou glisser-déposer).
2. Ouvrir DevTools (F12) pour vérifier la Console / Network si nécessaire.

Déployer sur Vercel (via GitHub) — résumé
1. Initialiser git (si pas déjà fait):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - portfolio"
   git branch -M main
   ```
2. Créer un repo sur GitHub et pousser:
   ```powershell
   git remote add origin https://github.com/<ton-user>/<ton-repo>.git
   git push -u origin main
   ```
3. Sur https://vercel.com → New Project → Import from Git → sélectionner le repo → Deploy.
   - Framework: Other / Static
   - Root directory: `./`
   - Pas de commande de build nécessaire pour ce site statique.

Vérifications après déploiement
- Ouvrir l'URL fournie par Vercel et tester le formulaire de contact.
- Dans DevTools → Network vérifie la requête POST vers Formspree (statut 200/201 attendu).
- Vérifier que toutes les images et assets se chargent (pas de 404).

Formspree
- L'attribut `action` du formulaire doit contenir ton identifiant Formspree (ex: `https://formspree.io/f/mykkkopy`).
- Assure-toi d'avoir vérifié l'adresse email dans le dashboard Formspree si demandé.

Besoin d'aide
- Je peux créer automatiquement le repo GitHub (via `gh`) si tu veux et pousser le code.
- Je peux remplacer les alerts JS par un message intégré dans la page pour une meilleure UX.

Bonne déploiement !