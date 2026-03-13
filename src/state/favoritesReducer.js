export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'

export function favoritesReducer(state, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
      const exists = state.includes(action.payload)
      if (exists) {
        return state.filter((id) => id !== action.payload)
      }
      return [...state, action.payload]
    }
    default:
      return state
  }
}

export function getInitialFavorites(storageKey) {
  try {
    const stored = localStorage.getItem(storageKey)
    if (!stored) {
      return []
    }

    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function toggleFavourite(photoId) {
  return { type: TOGGLE_FAVOURITE, payload: photoId }
}
