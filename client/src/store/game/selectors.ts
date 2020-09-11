import { createSelector } from 'reselect';
import { globalState } from '../index';

export const gameState = (state: globalState) => state.game;

export const molesHit = createSelector(gameState, (state) => state.molesHit);
export const molesLeft = createSelector(gameState, (state) => state.molesLeft);
export const timeLeft = createSelector(gameState, (state) => state.timeLeft);
export const gameOver = createSelector(gameState, (state) => state.gameOver);
