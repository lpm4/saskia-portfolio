# Content Collections - Guide

## 📝 Placeholders à remplacer

### ⚠️ URLs Cloudinary

Tous les fichiers contiennent des URLs placeholder type :
```
https://placeholder.cloudinary.com/nom-du-fichier.jpg
```

**À remplacer par vos vraies URLs Cloudinary**, exemple :
```
https://res.cloudinary.com/votre-cloud-name/image/upload/v123456789/nom-du-fichier.jpg
```

### ⚠️ IDs Vimeo

Tous les films ont `vimeoId: "PLACEHOLDER_VIMEO_ID"`

**À remplacer par les vrais IDs Vimeo** (ex: `"987654321"`)

Pour trouver l'ID Vimeo :
- URL Vimeo : `https://vimeo.com/123456789`
- ID = `123456789`

---

## 📂 Structure

```
src/content/
├── config.ts           # Schémas Zod (ne pas modifier)
├── films/              # 9 films
│   ├── alma-mater.md
│   ├── marie-claire-enfants.md
│   └── ...
├── photos/             # 5 galeries
│   ├── amel.md
│   ├── soufiane.md
│   └── ...
└── backstage/          # 1 galerie
    └── index.md
```

---

## ✅ Comment remplir

### Exemple pour un film :

**Avant :**
```yaml
---
title: "Alma Mater"
vimeoId: "PLACEHOLDER_VIMEO_ID"
thumbnailUrl: "https://placeholder.cloudinary.com/alma-mater.jpg"
---
```

**Après :**
```yaml
---
title: "Alma Mater"
vimeoId: "123456789"
thumbnailUrl: "https://res.cloudinary.com/saskia/image/upload/v1234/alma-mater.jpg"
---
```

---

## 🔍 Chercher et remplacer

Pour remplacer tous les placeholders d'un coup :

**Cloudinary :**
```bash
# Chercher
grep -r "placeholder.cloudinary.com" src/content/

# Remplacer (avec votre URL)
find src/content/ -name "*.md" -exec sed -i 's|placeholder.cloudinary.com|res.cloudinary.com/VOTRE-CLOUD-NAME/image/upload|g' {} +
```

**Vimeo :**
```bash
# Chercher
grep -r "PLACEHOLDER_VIMEO_ID" src/content/

# Remplacer manuellement fichier par fichier
```
