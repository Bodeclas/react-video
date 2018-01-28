import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/data';

const initialState = {
  data: {
    ...data,
  },
  search: [],
};

const store = createStore(
  reducer,
  initialState,
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
