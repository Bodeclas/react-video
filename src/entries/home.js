import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';

/* import data from '../schemas/index'; */

/* const initialState = {
  data: {
    entities: data.entities,
    categories: data.result.categories,
    search: [],
  },
  modal: {
    visibility: false,
    mediaId: null
  }
}; */

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);

console.log(store.getState());
