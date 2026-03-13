import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import GalleryContent from './components/GalleryContent'
import GalleryHeader from './components/GalleryHeader'
import GalleryStats from './components/GalleryStats'
import { FAVORITES_STORAGE_KEY } from './constants/gallery'
import { useFetchPhotos } from './hooks/useFetchPhotos'
import {
  favoritesReducer,
  getInitialFavorites,
  toggleFavourite,
} from './state/favoritesReducer'

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');

  const [favouriteIds, dispatch] = useReducer(
    favoritesReducer,
    [],
    () => getInitialFavorites(FAVORITES_STORAGE_KEY),
  );

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favouriteIds))
  }, [favouriteIds]);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, []);

  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) {
      return photos
    }
    return photos.filter((photo) => photo.author.toLowerCase().includes(query))
  }, [photos, searchTerm])

  const favouriteSet = useMemo(() => new Set(favouriteIds), [favouriteIds])

  const handleToggleFavourite = useCallback(
    (photoId) => {
      dispatch(toggleFavourite(photoId))
    },
    [dispatch],
  )

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
      <section className="rounded-3xl border border-white/60 bg-white/65 p-6 shadow-[0_18px_65px_rgba(17,31,52,0.15)] backdrop-blur-md sm:p-8">
        <GalleryHeader searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <GalleryStats
          totalPhotos={photos.length}
          filteredPhotos={filteredPhotos.length}
          favouriteCount={favouriteIds.length}
          loading={loading}
          error={error}
        />
      </section>

      <section className="mt-8">
        <GalleryContent
          loading={loading}
          error={error}
          photos={photos}
          filteredPhotos={filteredPhotos}
          favouriteSet={favouriteSet}
          onToggleFavourite={handleToggleFavourite}
        />
      </section>
    </main>
  )
}

export default App
