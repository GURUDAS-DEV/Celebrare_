function GalleryStats({ totalPhotos, filteredPhotos, favouriteCount, loading, error }) {
  const displayFavouriteCount = loading || error ? 0 : favouriteCount

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-700">
      <span className="rounded-full bg-slate-100 px-3 py-1.5">
        Total Photos: <strong>{totalPhotos}</strong>
      </span>
      <span className="rounded-full bg-slate-100 px-3 py-1.5">
        Showing: <strong>{filteredPhotos}</strong>
      </span>
      <span className="rounded-full bg-rose-100 px-3 py-1.5 text-rose-700">
        Favourites: <strong>{displayFavouriteCount}</strong>
      </span>
    </div>
  )
}

export default GalleryStats
