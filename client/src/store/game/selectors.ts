import { createSelector } from 'reselect';
import { GlobalState } from '../index';
import { GameState } from './reducers';

export const gameStateSelector = (state: GlobalState) => state.game;

export const molesLeftSelector = createSelector(
  gameStateSelector,
  (state: GameState) => state.molesLeft
);
export const gameActiveSelector = createSelector(
  gameStateSelector,
  (state: GameState) => state.gameActive
);

export const totalTimeSelector = createSelector(
  gameStateSelector,
  (state: GameState) => state.totalTime
);
