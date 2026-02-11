# Gulf Afrique Connect - Next.js Migration

Migration réussie de Vite à Next.js ✅

## Installation et Démarrage

### 1. Installez les dépendances
```bash
npm install
# ou
bun install
```

### 2. Lancez le serveur de développement
```bash
npm run dev
# ou
bun dev
```

Le projet sera disponible sur `http://localhost:3000`

### 3. Build pour la production
```bash
npm run build
npm start
```

## Changements Apportés

### Migration de Vite à Next.js
- ✅ Mise à jour de `package.json` avec les dépendances Next.js
- ✅ Suppression de `react-router-dom` (Next.js gère le routage)
- ✅ Création de la structure `app/` pour Next.js
- ✅ Création du composant `ClientLayout.tsx` pour les providers
- ✅ API Route créée: `/api/forms/submit` pour la soumission du formulaire
- ✅ Modification d'`ExpertFormDialog.tsx` pour envoyer les données à l'API

### Structure du Projet
```
app/
├── api/
│   └── forms/
│       └── submit/
│           └── route.ts       # API endpoint pour le formulaire
├── layout.tsx                 # Layout principal
├── page.tsx                   # Page d'accueil (/)
└── not-found.tsx             # Page 404

src/
├── components/
│   ├── ClientLayout.tsx       # Providers (Query, i18n, Themes)
│   ├── landing/
│   │   ├── ExpertFormDialog.tsx # ✨ Modifié - envoie maintenant les données
│   │   └── ...
│   └── ui/
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── i18n/
│   ├── en.json
│   └── fr.json
└── ...
```

## Formulaire d'Expert

Le formulaire "Envoyer ma demande" est maintenant **totalement fonctionnel**:

1. **Frontend**: Les données sont collectées et validées
2. **API**: Les données sont envoyées à `/api/forms/submit`
3. **Backend**: L'API traite et valide les données

### Pour tester:
1. Cliquez sur **"Trouver un Expert"** (Navbar)
2. Remplissez le formulaire
3. Cliquez sur **"Envoyer ma demande"**
4. Vous verrez une confirmation

### API Endpoint
```
POST /api/forms/submit

Body:
{
  "type": "client" | "talent",
  "name": "string",
  "email": "string",
  "organization": "string",
  "message": "string"
}

Response:
{
  "success": true,
  "message": "..."
}
```

## Configuration

- **Locale**: Anglais (en) et Français (fr) via `react-i18next`
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Formes**: React Hook Form

## Variables d'Environnement

Voir `.env.local` pour les variables locales (déjà configurées)

## Support

Pour des questions ou des modifications, vérifiez:
- `app/api/` pour les routes API
- `app/layout.tsx` pour la configuration globale
- `src/components/ClientLayout.tsx` pour les providers
