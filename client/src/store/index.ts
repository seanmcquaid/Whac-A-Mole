import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import gameReducer, { gameState } from './game/reducers';

type initialState = {
  game: gameState;
};

const rootReducer = combineReducers({ game: gameReducer });

export const configureStore = (preloadedState?: initialState) => {
  const middleware = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

  return store;
};

const store = configureStore();

export default store;
