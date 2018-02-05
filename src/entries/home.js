import React from 'react';
import Home from '../pages/containers/home';
import reducer from '../reducers/index';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map as map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(reducer, map(), composeWithDevTools(applyMiddleware(logger)));

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);

console.log(store.getState());
