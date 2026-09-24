'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { adminRequest } from '../api/admin.api'
import type { Category, Destination } from '../types/tour-editor.types'
import { useTourItinerary } from './useTourItinerary'

export function useNewTour() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [optionsLoading, setOptionsLoading] = useState(true)
  const [optionsError, setOptionsError] = useState('')
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([])
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])
  const [images, setImages] = useState<File[]>([])
  const [included, setIncluded] = useState<string[]>([''])
  const [excluded, setExcluded] = useState<string[]>([''])
  const itineraryEditor = useTourItinerary([{ day: 1, title: '', activities: '', overnight: '', meals: '' }])
  const { itinerary, setItinerary } = itineraryEditor

  useEffect(() => {
    let active = true

    Promise.all([
      adminRequest<Destination[]>('/api/v1/admin/destinations'),
      adminRequest<Category[]>('/api/v1/admin/categories'),
    ])
      .then(([destinationItems, categoryItems]) => {
        if (!active) return
        setDestinations(destinationItems)
        setCategories(categoryItems)
        setOptionsError('')
      })
      .catch((loadError: unknown) => {
        if (!active) return
        setOptionsError(loadError instanceof Error ? loadError.message : 'Tour options could not be loaded.')
      })
      .finally(() => {
        if (active) setOptionsLoading(false)
      })

    return () => { active = false }
  }, [])

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
    formData.set('tourReviews', '0')

    try {
      await adminRequest('/api/v1/admin/tours', {
        method: 'POST',
        body: formData,
      })
      router.push('/admin/tours')
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Failed to create tour. Please try again.',
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

    optionsLoading,

    optionsError,

    images,

    setImages,

  }
}
