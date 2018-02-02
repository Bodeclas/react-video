import React from 'react';
import Home from '../pages/containers/home';
import reducer from '../reducers/index';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map as map} from 'immutable';

const logger = ({ dispatch, getState }) => next => action => {
	console.log( 'estado anterior:', getState().toJS() )
	console.log( 'enviando acción:', action)
	const rslt = next( action )
	console.log( 'nuevo estado   :', getState().toJS() )
	return rslt
}

const store = createStore(
  reducer,
  map(),
  applyMiddleware(logger),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);

console.log(store.getState());
