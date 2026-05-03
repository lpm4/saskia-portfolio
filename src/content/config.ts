import { defineCollection, z } from 'astro:content';

// Collection FILMS
const filmsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    videoId: z.string(), // ID Vimeo/YouTube OU URL fichier vidéo
    videoPlatform: z.enum(['vimeo', 'youtube', 'file']).default('vimeo'),
    category: z.enum(['documentaires', 'fictions', 'branding', 'clip']),
    thumbnailUrl: z.string().url(), // URL Cloudinary de l'image de couverture
    year: z.number().optional(),
    featured: z.boolean().default(false), // Afficher sur la homepage
    description: z.string(),
  }),
});

// Collection PHOTOS
const photosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    subject: z.string(), // Nom de la personne/série (ex: "Amel", "Soufiane")
    coverImageUrl: z.string().url(), // URL Cloudinary de l'image de couverture
    images: z.array(z.string().url()), // Array d'URLs Cloudinary des images de la galerie
  }),
});

// Collection BACKSTAGE
const backstageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('Backstage'),
    images: z.array(z.string().url()), // Array d'URLs Cloudinary des photos backstage
  }),
});

export const collections = {
  films: filmsCollection,
  photos: photosCollection,
  backstage: backstageCollection,
};
