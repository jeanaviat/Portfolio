# Portfolio — Jean Aviat

Site statique (HTML/CSS/JS pur), sans aucune dépendance à Adobe Portfolio.
Les vidéos sont hébergées sur Vimeo (trop volumineuses pour GitHub) et
intégrées automatiquement par le site.

## 1. Uploader tes vidéos sur YouTube (en non répertorié)

1. Connecte-toi avec un compte Google (gratuit) sur https://studio.youtube.com
2. Pour chaque vidéo : "Créer" → "Importer une vidéo"
3. À l'étape "Visibilité", choisis **Non répertorié** (Unlisted) — la vidéo
   n'apparaît alors ni sur ta chaîne, ni dans les recherches ni dans les
   suggestions ; elle n'est accessible que par lien direct
4. Une fois publiée, note l'ID de la vidéo : c'est la partie après `v=`
   dans l'URL, par exemple `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   → l'ID est `dQw4w9WgXcQ`

Stockage illimité et gratuit, aucune limite de taille par vidéo (au-delà de
quelques heures, non pertinent ici).

## 2. Renseigner les IDs dans le site

Ouvre `js/videos-config.js` et colle chaque ID à la bonne ligne :

```js
const YOUTUBE_IDS = {
  "reel": "dQw4w9WgXcQ",
  "foreigner": "...",
  "crumbs-title": "...",
  "crumbs-credits": "...",
  "my-wife": "...",
  "skopein-fobos": "...",
  "dust": "...",
  "waiting-for-godot": "...",
  "retour-aux-sources": "..."
};
```

| Clé dans le fichier      | Vidéo concernée                        |
|---------------------------|-----------------------------------------|
| `reel`                     | Showreel (page d'accueil)              |
| `foreigner`                 | Foreigner                              |
| `crumbs-title`              | Crumbs - redesign (générique)          |
| `crumbs-credits`            | Crumbs - redesign (fin)                |
| `my-wife`                   | My Wife Doesn't Move Anymore           |
| `skopein-fobos`             | Skopein Fobos                          |
| `dust`                      | Dust                                   |
| `waiting-for-godot`         | Waiting For Godot                      |
| `retour-aux-sources`        | Retour Aux Sources                     |

Tant qu'une clé est laissée vide (`""`), un message s'affiche sur le site
à la place de la vidéo — pas d'erreur cassée.

## 3. Tester en local

```bash
cd site
python3 -m http.server 8000
```
Puis va sur http://localhost:8000

## 4. Publier sur GitHub Pages

1. Crée un compte GitHub (gratuit) si tu n'en as pas : https://github.com
2. Crée un nouveau dépôt (repository), par ex. nommé `portfolio`
   - Public, sans README ni .gitignore (tu en as déjà un)
3. Sur ta machine, dans le dossier `site` :

```bash
git init
git add .
git commit -m "Premier envoi du portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/portfolio.git
git push -u origin main
```

4. Sur GitHub : Settings → Pages → Source → sélectionne la branche `main`
   et le dossier `/ (root)` → Save.
5. Après 1-2 minutes, ton site sera en ligne à :
   `https://TON-PSEUDO.github.io/portfolio/`

C'est ce lien que tu peux mettre dans ton CV.

## Structure du site

```
index.html              → page d'accueil (Reel)
music.html               → galerie Music
sound-design.html        → galerie Sound Design
video-games.html         → galerie Video Games
contact.html             → page Contact
work/                    → une page par projet
css/style.css            → tous les styles
js/main.js                → menu mobile + injection des vidéos YouTube
js/videos-config.js       → LE fichier à modifier avec tes IDs YouTube
```
