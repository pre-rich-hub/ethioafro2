'use client'

import { Trash2 } from 'lucide-react'
import type { GalleryImage } from '../../../types/tour-editor.types'
import { adminPanelClass } from '../../AdminPrimitives'

type Props = {
  gallery: GalleryImage[]
  deleteImageIds: number[]
  toggleDeleteImage: (id: number) => void
}

export function TourGallery({ gallery, deleteImageIds, toggleDeleteImage }: Props) {
  return (
    <>
      {gallery.length > 0 && (
        <section className={adminPanelClass}>
          <h2 className="mb-5 font-serif text-lg text-foreground">Existing Images</h2>
          <div className="flex flex-wrap gap-3">
            {gallery.map((img) => {
              const marked = deleteImageIds.includes(img.id)
              return (
                <div
                  key={img.id}
                  className={`relative h-28 w-28 cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${marked ? 'border-red-400 opacity-50' : 'border-border hover:border-primary'
                    }`}
                  onClick={() => toggleDeleteImage(img.id)}
                  title={marked ? 'Click to keep' : 'Click to mark for deletion'}
                >
                  {/* Admin images can come from uploaded files or the media API. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.imageUrl}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  {marked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-500/20">
                      <Trash2 size={18} className="text-red-600" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Click images to mark them for deletion
          </p>
        </section>
      )}
    </>
  )
}
