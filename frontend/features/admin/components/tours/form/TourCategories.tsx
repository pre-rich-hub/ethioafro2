'use client'

import type { Category } from '../../../types/tour-editor.types'
import { adminPanelClass } from '../../AdminPrimitives'

type Props = {
  categories: Category[]
  selectedCategories: number[]
  toggleCategory: (id: number) => void
}

export function TourCategories({ categories, selectedCategories, toggleCategory }: Props) {
  return (
    <>
      {categories.length > 0 && (
        <section className={adminPanelClass}>
          <h2 className="mb-5 font-serif text-lg text-foreground">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <label
                key={cat.id}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2 text-sm transition-colors ${selectedCategories.includes(cat.id)
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                  }`}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                  className="sr-only"
                />
                {cat.name}
              </label>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
