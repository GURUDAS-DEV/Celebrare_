import { useEffect, useState } from 'react'

const PHOTOS_ENDPOINT = 'https://picsum.photos/v2/list?limit=30';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {

    const loadPhotos = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(PHOTOS_ENDPOINT);

        if (!response.ok) {
          throw new Error('Unable to load photos right now. Please try again.');
        }

        const result = await response.json();
        setPhotos(result);
      } catch (fetchError) {
          setError(fetchError.message || 'Something went wrong while fetching photos.');
      } finally {
        setLoading(false);
      }
    }

    loadPhotos();

    return () => {
    }
  }, [])

  return { photos, loading, error }
}
