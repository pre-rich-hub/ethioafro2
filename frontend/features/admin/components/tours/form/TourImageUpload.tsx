'use client'

import { adminPanelClass } from '../../AdminPrimitives'

type Props = {
  title: string
  images: File[]
  onChange: (images: File[]) => void
  required?: boolean
}

export function TourImageUpload({ title, images, onChange, required }: Props) {
  return (
    <section className={adminPanelClass}>
      <h2 className="mb-5 font-serif text-lg text-foreground">{title}</h2>
      <input
        type="file"
        name="tourImages"
        multiple
        accept=".jpg,.jpeg,.png,.webp,.avif"
        required={required}
        onChange={(e) => onChange(Array.from(e.target.files ?? []))}
        className="block w-full cursor-pointer text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20"
      />
      <p className="mt-2 text-xs text-muted-foreground">
        JPG, PNG, WebP, or AVIF. Each image must be 4 MB or smaller.
      </p>
      {images.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {images.map((file, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-xs text-accent-foreground"
            >
              {file.name}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}
