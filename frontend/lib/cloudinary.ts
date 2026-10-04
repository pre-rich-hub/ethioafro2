/**
 * Catalogue slug → Cloudinary public ID when the file is not `{slug}.png`.
 * Simien uses a gelada / escarpment still (not the Ethiopian wolf / key kebero shot).
 */
const PUBLIC_ID_ALIASES: Record<string, string> = {
  'simien-mountains': 'ggulik-ethiopia-4371436_1920',
}

/** Cloudinary delivery helper for catalogue and marketing images. */
export function cloudinaryImage(publicId: string, width = 1600) {
  const id = PUBLIC_ID_ALIASES[publicId] ?? publicId
  // Aliased assets may be jpg/png; omit a forced extension and let f_auto choose.
  const path = PUBLIC_ID_ALIASES[publicId] ? id : `${id}.png`
  return `https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_${width}/${path}`
}
