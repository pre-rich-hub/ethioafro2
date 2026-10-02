/** Cloudinary delivery helper for catalogue and marketing images. */
export function cloudinaryImage(publicId: string, width = 1600) {
  return `https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_${width}/${publicId}.png`
}
