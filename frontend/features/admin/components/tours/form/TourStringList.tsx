'use client'

import { Plus, X } from 'lucide-react'
import { adminPanelClass } from '../../AdminPrimitives'

type Props = {
  title: string
  items: string[]
  onChange: (items: string[]) => void
  placeholder: string
  fieldClass: string
}

export function TourStringList({ title, items, onChange, placeholder, fieldClass }: Props) {
  return (
    <section className={adminPanelClass}>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-serif text-lg text-foreground">{title}</h2>
        <button
          type="button"
          onClick={() => onChange([...items, ''])}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <Plus size={14} /> Add Item
        </button>
      </div>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              value={item}
              onChange={(e) => onChange(items.map((value, index) => index === i ? e.target.value : value))}
              className={fieldClass}
              placeholder={placeholder}
            />
            <button
              type="button"
              onClick={() => onChange(items.filter((_, index) => index !== i))}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
