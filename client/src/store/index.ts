import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import gameReducer, { GameState } from './game/reducers';

export type GlobalState = {
  game: GameState;
};

const rootReducer = combineReducers({ game: gameReducer });

export const configureStore = (preloadedState?: GlobalState) => {
  const middleware = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

  return store;
};

const store = configureStore();

export default store;
