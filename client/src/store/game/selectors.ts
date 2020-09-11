import { createSelector } from 'reselect';
import { globalState } from '../index';

export const gameState = (state: globalState) => state.game;

export const molesHitSelector = createSelector(
  gameState,
  (state) => state.molesHit
);
export const molesLeftSelector = createSelector(
  gameState,
  (state) => state.molesLeft
);
export const gameStartedSelector = createSelector(
  gameState,
  (state) => state.gameStarted
);
