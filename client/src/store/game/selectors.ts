import { createSelector } from 'reselect';
import { globalState } from '../index';
import { GameState } from './reducers';

export const gameStateSelector = (state: globalState) => state.game;

export const molesLeftSelector = createSelector(
  gameStateSelector,
  (state: GameState) => state.molesLeft
);
export const gameStartedSelector = createSelector(
  gameStateSelector,
  (state: GameState) => state.gameStarted
);

export const totalTimeSelector = createSelector(
  gameStateSelector,
  (state: GameState) => state.totalTime
);
