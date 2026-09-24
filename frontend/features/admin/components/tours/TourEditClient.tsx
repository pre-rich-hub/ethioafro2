'use client'

import { Loader2 } from 'lucide-react'
import { useEditTour } from '../../hooks/useEditTour'
import { adminInputClass } from '../AdminPrimitives'
import { TourBasicInfo } from './form/TourBasicInfo'
import { TourBlockedDates } from './form/TourBlockedDates'
import { TourCategories } from './form/TourCategories'
import { TourDescriptionFields } from './form/TourDescriptionFields'
import { TourGallery } from './form/TourGallery'
import { TourImageUpload } from './form/TourImageUpload'
import { TourItineraryEditor } from './form/TourItineraryEditor'
import { TourStringList } from './form/TourStringList'

export function AdminTourEdit() {
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
    loading,
    tour,
    invalidTourId,
    newImages,
    setNewImages,
    deleteImageIds,
    toggleDeleteImage,
    blockedDatesEditor,
  } = useEditTour()

  if (invalidTourId) {
    return (
      <div className="p-8">
        <div role="alert" className="max-w-xl rounded-lg border border-destructive/30 bg-destructive/10 p-5 text-sm text-destructive">
          Invalid tour ID.
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!tour) {
    return (
      <div className="p-8">
        <div role="alert" className="max-w-xl rounded-lg border border-destructive/30 bg-destructive/10 p-5 text-sm text-destructive">
          {error || 'Tour not found.'}
        </div>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-4 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          Try Again
        </button>
      </div>
    )
  }

  const fieldClass = `${adminInputClass} bg-white`

  return (
    <div className="max-w-4xl p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-foreground">Edit Tour</h1>
        <p className="mt-1 text-sm text-muted-foreground">{tour.name}</p>
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <TourBasicInfo
          tour={tour}
          destinations={destinations}
          selectedDestinations={selectedDestinations}
          toggleDestination={toggleDestination}
          fieldClass={fieldClass}
        />

        <TourDescriptionFields tour={tour} fieldClass={fieldClass} />



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

        <TourItineraryEditor {...itineraryEditor} fieldClass={fieldClass} />

        <TourGallery gallery={tour.gallery} deleteImageIds={deleteImageIds} toggleDeleteImage={toggleDeleteImage} />

        <TourImageUpload title="Add New Images" images={newImages} onChange={setNewImages} />

        <TourBlockedDates {...blockedDatesEditor} fieldClass={fieldClass} />

        <TourCategories categories={categories} selectedCategories={selectedCategories} toggleCategory={toggleCategory} />

        {/* Submit */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={submitting}
            data-testid="save-tour"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting && <Loader2 size={16} className="animate-spin" />}
            {submitting ? 'Saving...' : 'Save Changes'}
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
