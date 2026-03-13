function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-[0_12px_35px_rgba(8,16,31,0.12)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(8,16,31,0.18)]">
      <div className="relative">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/420`}
          alt={`Captured by ${photo.author}`}
          className="h-56 w-full object-cover"
          loading="lazy"
        />

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          className={`absolute right-3 top-3 grid h-10 w-10 place-items-center cursor-pointer rounded-full border transition ${
            isFavourite
              ? 'border-rose-300 bg-rose-100 text-rose-600'
              : 'border-white/80 bg-white/80 text-slate-600 hover:bg-white'
          }`}
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
        >
          <svg
            viewBox="0 0 24 24"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path d="M12 21s-6.716-4.34-9.2-8.241C.58 9.233 1.64 5 5.832 5A5.34 5.34 0 0 1 12 8.09 5.34 5.34 0 0 1 18.168 5c4.192 0 5.252 4.233 3.032 7.759C18.716 16.66 12 21 12 21z" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Photographer
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">{photo.author}</h3>
      </div>
    </article>
  )
}

export default PhotoCard
