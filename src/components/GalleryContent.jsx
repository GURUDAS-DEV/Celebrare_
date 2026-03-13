import PhotoCard from './PhotoCard'

function GalleryContent({ loading, error, photos, filteredPhotos, favouriteSet, onToggleFavourite }) {
  if (loading) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center gap-3 rounded-2xl border border-white/70 bg-white/55">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-300 border-t-cyan-700" />
        <p className="text-sm font-medium text-slate-700">Loading photos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
        <h2 className="text-lg font-semibold">Unable to fetch photos</h2>
        <p className="mt-1 text-sm">{error}</p>
      </div>
    )
  }

  if (photos.length > 0 && filteredPhotos.length === 0) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center text-amber-700">
        No authors matched your search. Try a different name.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favouriteSet.has(photo.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  )
}

export default GalleryContent
