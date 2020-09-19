import { AnyAction, Dispatch } from 'redux';
import GameActionTypes from './actionTypes';

export const hitMole = () => (dispatch: Dispatch<AnyAction>) => {
  return dispatch({
    type: GameActionTypes.hitMole,
  });
};

export const startGame = () => (dispatch: Dispatch<AnyAction>) => {
  return dispatch({
    type: GameActionTypes.startGame,
  });
};

export const incrementTimer = () => (dispatch: Dispatch<AnyAction>) => {
  return dispatch({
    type: GameActionTypes.incrementTimer,
  });
};

export const endGame = () => (dispatch: Dispatch<AnyAction>) => {
  return dispatch({
    type: GameActionTypes.endGame,
  });
};
