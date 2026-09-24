'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { adminRequest } from '../api/admin.api'
import type { BlockedDate, Category, Destination, TourData } from '../types/tour-editor.types'
import { useTourBlockedDates } from './useTourBlockedDates'
import { useTourItinerary } from './useTourItinerary'

export function useEditTour() {
  const router = useRouter()
  const params = useParams()
  const tourId = Number(params.id)
  const invalidTourId = !Number.isInteger(tourId) || tourId <= 0
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [tour, setTour] = useState<TourData | null>(null)
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([])
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])
  const [newImages, setNewImages] = useState<File[]>([])
  const [deleteImageIds, setDeleteImageIds] = useState<number[]>([])
  const [included, setIncluded] = useState<string[]>([])
  const [excluded, setExcluded] = useState<string[]>([])
  const itineraryEditor = useTourItinerary([])
  const { itinerary, setItinerary } = itineraryEditor

  const blockedDatesEditor = useTourBlockedDates(tourId)
  const { setBlockedDates } = blockedDatesEditor

  useEffect(() => {
    let active = true

    if (invalidTourId) {
      return () => { active = false }
    }

    Promise.all([
      adminRequest<TourData>(`/api/v1/admin/tours/${tourId}`, { cache: 'no-store' }),
      adminRequest<Destination[]>('/api/v1/admin/destinations', { cache: 'no-store' }),
      adminRequest<Category[]>('/api/v1/admin/categories', { cache: 'no-store' }),
      adminRequest<BlockedDate[]>(`/api/v1/admin/tours/${tourId}/blocked-dates`, { cache: 'no-store' }),
    ])
      .then(([tourData, destinationItems, categoryItems, blockedItems]) => {
        if (!active) return
        setTour(tourData)
        setDestinations(destinationItems)
        setCategories(categoryItems)
        setSelectedDestinations(
          tourData.destinations?.length
            ? tourData.destinations.map((destination) => destination.id)
            : tourData.destination
              ? [tourData.destination.id]
              : [],
        )
        setIncluded(tourData.included ?? [])
        setExcluded(tourData.excluded ?? [])
        setItinerary(
          tourData.itinerary?.length
            ? tourData.itinerary.map((item) => ({
              day: item.day,
              title: item.title ?? '',
              activities: item.activities ?? '',
              overnight: item.overnight ?? '',
              meals: item.meals ?? '',
            }))
            : [{ day: 1, title: '', activities: '', overnight: '', meals: '' }],
        )
        setSelectedCategories(tourData.categories.map((category) => category.id))
        setBlockedDates(blockedItems)
        setError('')
      })
      .catch((loadError: unknown) => {
        if (!active) return
        setError(
          loadError instanceof Error
            ? loadError.message
            : 'Tour details could not be loaded.',
        )
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => { active = false }
  }, [invalidTourId, tourId])

  function toggleCategory(id: number) {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  function toggleDestination(id: number) {
    setSelectedDestinations((prev) =>
      prev.includes(id) ? prev.filter((destinationId) => destinationId !== id) : [...prev, id]
    )
  }

  function toggleDeleteImage(imgId: number) {
    setDeleteImageIds((prev) =>
      prev.includes(imgId) ? prev.filter((id) => id !== imgId) : [...prev, imgId]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (selectedDestinations.length === 0) {
      setError('Choose at least one destination.')
      return
    }
    setSubmitting(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    formData.set('tourDestination', String(selectedDestinations[0]))
    formData.set('tourDestinations', JSON.stringify(selectedDestinations))
    formData.set('tourCategories', JSON.stringify(selectedCategories))
    formData.set('tourIncluded', JSON.stringify(included.filter(Boolean)))
    formData.set('tourExcluded', JSON.stringify(excluded.filter(Boolean)))
    formData.set('tourItinerary', JSON.stringify(itinerary))
    formData.set('tourReviews', String(tour?.noOfRates ?? 0))
    formData.set('deleteImages', JSON.stringify(deleteImageIds))

    try {
      await adminRequest(`/api/v1/admin/tours/${tourId}`, {
        method: 'PUT',
        body: formData,
      })
      router.replace('/admin/tours')
      router.refresh()
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Failed to update tour. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return {

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

  }
}
