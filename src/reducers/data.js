function data(state, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO':
      let results = [];
      const list = state.data.categories[2].playlist;

      if (action.payload.query) {
        results = list.filter(element => element.author.toLowerCase().includes(action.payload.query.toLowerCase()));
      }

      {
        return {
          ...state,
          search: results,
        };
      }
      break;

    default:
      return state;
      break;
  }
}

export default data;
