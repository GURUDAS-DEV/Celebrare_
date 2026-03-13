import { useEffect, useState } from 'react'

const PHOTOS_ENDPOINT = 'https://picsum.photos/v2/list?limit=30';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController();

    const loadPhotos = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(PHOTOS_ENDPOINT, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('Unable to load photos right now. Please try again.');
        }

        const result = await response.json();
        setPhotos(result);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Something went wrong while fetching photos.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadPhotos();

    return () => {
      controller.abort()
    }
  }, [])

  return { photos, loading, error }
}
