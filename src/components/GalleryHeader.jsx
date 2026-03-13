import { APP_COPY } from '../constants/gallery'

function GalleryHeader({ searchTerm, onSearchChange }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700/80">
          {APP_COPY.badge}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {APP_COPY.title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          {APP_COPY.description}
        </p>
      </div>

      <div className="w-full md:max-w-sm">
        <label
          htmlFor="author-search"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Search by author
        </label>
        <input
          id="author-search"
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Type a name, for example: john"
          className="w-full rounded-xl border border-slate-300/90 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200"
        />
      </div>
    </div>
  )
}

export default GalleryHeader
