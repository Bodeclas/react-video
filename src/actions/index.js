export function openModal(mediaId) {
  return {
    type: 'OPEN_MODAL',
    payload: {
      mediaId: mediaId
    }
  }
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL',
  }
}

export function searchEntities(query) {
  return {
    type: 'SEARCH_ENTITIES',
    payload: {
      query,
    },
  }
}