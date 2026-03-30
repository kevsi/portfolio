# Astroship — Plateforme d'Avatars Numériques

Une marketplace moderne d'avatars animés et d'assets digitaux, construite avec **Astro**, **TailwindCSS** et **Supabase**.

## Le projet

Astroship est une plateforme permettant aux utilisateurs de :

- **Choisir un avatar animé** (Lottie) gratuit ou premium pour leur profil
- **Explorer une marketplace** d'assets digitaux (templates, icônes, illustrations)
- **Gérer leurs projets** avec une vitrine publique et des liens de démo
- **Suivre leurs activités** via un système de notifications
- **Lire un blog** avec des articles sur l'identité numérique et les avatars

## Fonctionnalités

### Authentification
- Inscription avec sélection d'avatar animé à l'étape de création
- Connexion / déconnexion par cookies sécurisés (httpOnly)
- Réinitialisation de mot de passe
- Middleware de protection des routes

### Marketplace
- Catalogue d'assets avec filtres par catégorie, prix et tri
- Recherche en temps réel
- Fiche produit avec auteur, notes, téléchargements et démo

### Avatars
- Catalogue d'avatars animés (Lottie) gratuits et premium
- Aperçu animé au survol
- Sélection d'avatar à l'inscription et depuis les paramètres

### Projets
- Vitrine de projets avec image, description et lien de démo
- Chargement depuis Supabase

### Blog
- Articles en français stockés dans Supabase
- Page d'accueil avec article featured + grille
- Lecture d'article avec rendu Markdown

### Notifications
- Système de notifications multi-types (commande, système, avatar, promotion, social)
- Marquer comme lu / marquer tout comme lu
- Temps relatif en français

### Panier
- Ajout / suppression / modification de quantité
- Calcul du total en temps réel

### Profil
- Édition nom, prénom, username, bio
- Upload de photo de couverture
- Sélection d'avatar avec preview Lottie

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Astro v6 (SSR) |
| CSS | TailwindCSS 3.4 |
| Backend | Supabase (Auth, Database, Storage) |
| Auth | Cookies httpOnly + JWT |
| Animations | Lottie (bodymovin) |
| Langage | TypeScript |

## Base de données (Supabase)

| Table | Rôle |
|-------|------|
| `profiles` | Profils utilisateurs |
| `avatars` | Avatars animés (Lottie) |
| `assets` | Produits marketplace |
| `projects` | Projets utilisateurs |
| `blog_posts` | Articles du blog |
| `cart` | Panier |
| `orders` | Commandes |
| `notifications` | Notifications |
| `comments` | Commentaires |
| `likes` | Likes |

## Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo> mon-projet
cd mon-projet
```

### 2. Installer les dépendances

```bash
pnpm install
```

### 3. Configurer les variables d'environnement

```bash
cp .env.example .env
```

Remplir les valeurs dans `.env` (voir `.env.example`).

### 4. Configurer Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Exécuter le SQL dans `tables.sql` pour créer les tables
3. Exécuter les policies RLS (voir section ci-dessous)
4. Copier l'URL et la clé publishable dans `.env`

### 5. Lancer en développement

```bash
pnpm dev
```

### 6. Build pour la production

```bash
pnpm build
```

## Structure du projet

```
src/
├── components/       # Composants Astro (navbar, footer, cartes, etc.)
├── layouts/          # Layouts (Layout.astro, BlogLayout.astro)
├── lib/              # Logique métier (supabase, cart, notifications, cookies)
├── pages/            # Pages et routes API
│   ├── api/auth/     # Endpoints login, register, logout, session
│   ├── auth/         # Pages login, register, forgot/reset password
│   ├── blog/         # Index blog + articles
│   ├── marketplace/  # Catalogue + fiche produit
│   ├── settings/     # Paramètres + sélection avatar
│   └── ...           # Projects, cart, notifications, etc.
├── types/            # Types TypeScript (User, Asset, Project, Comment)
├── utils/            # Utilitaires (ui, lottie)
└── content/          # Collections de contenu (team)
```

## Sécurité

- Cookies `httpOnly` + `secure` (HTTPS en production)
- Cookies `sameSite: lax` pour CSRF
- Routes API pour l'authentification (pas de secrets côté client)
- Row Level Security (RLS) sur toutes les tables Supabase
- Pas de données sensibles dans le code source

## Licence

Basé sur [Astroship](https://github.com/surjithctly/astroship) — GPL-2.0
