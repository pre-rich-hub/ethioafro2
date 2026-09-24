'use client'

import { Loader2 } from 'lucide-react'
import { useNewTour } from '../../hooks/useNewTour'
import { adminInputClass } from '../AdminPrimitives'
import { TourBasicInfo } from './form/TourBasicInfo'
import { TourCategories } from './form/TourCategories'
import { TourDescriptionFields } from './form/TourDescriptionFields'
import { TourImageUpload } from './form/TourImageUpload'
import { TourItineraryEditor } from './form/TourItineraryEditor'
import { TourStringList } from './form/TourStringList'

export function AdminTourNew() {
  const {
    router,
    submitting,
    error,
    destinations,
    categories,
    selectedDestinations,
    selectedCategories,
    included,
    setIncluded,
    excluded,
    setExcluded,
    toggleCategory,
    toggleDestination,
    handleSubmit,
    itineraryEditor,
    optionsLoading,
    optionsError,
    images,
    setImages,
  } = useNewTour()

  const fieldClass = `${adminInputClass} bg-white`

  return (
    <div className="max-w-4xl p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-foreground">New Tour</h1>
        <p className="mt-1 text-sm text-muted-foreground">Create a new tour package</p>
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      {optionsError ? (
        <div role="alert" className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {optionsError}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-8">
        <TourBasicInfo
          optionsLoading={optionsLoading}
          destinations={destinations}
          selectedDestinations={selectedDestinations}
          toggleDestination={toggleDestination}
          fieldClass={fieldClass}
        />

        <TourDescriptionFields fieldClass={fieldClass} />

        <TourStringList
          title="Included"
          items={included}
          onChange={setIncluded}
          placeholder="e.g. Airport transfers"
          fieldClass={fieldClass}
        />

        <TourStringList
          title="Excluded"
          items={excluded}
          onChange={setExcluded}
          placeholder="e.g. International flights"
          fieldClass={fieldClass}
        />

        <TourItineraryEditor {...itineraryEditor} fieldClass={fieldClass} creating />

        <TourImageUpload title="Tour Images" images={images} onChange={setImages} required />

        <TourCategories categories={categories} selectedCategories={selectedCategories} toggleCategory={toggleCategory} />

        {/* Submit */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={submitting || optionsLoading || destinations.length === 0}
            data-testid="save-tour"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting && <Loader2 size={16} className="animate-spin" />}
            {submitting ? 'Creating...' : 'Create Tour'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/tours')}
            className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
