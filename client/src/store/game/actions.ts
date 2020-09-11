import store from '../index';
import GameActionTypes from './actionTypes';

export const hitMole: React.Dispatch<GameActionTypes> = () => (
  dispatch: typeof store.dispatch
) => {
  return dispatch({
    type: GameActionTypes.hitMole,
  });
};

export const startGame = () => (dispatch: typeof store.dispatch) => {
  return dispatch({
    type: GameActionTypes.startGame,
  });
};

export const incrementTimer = () => (dispatch: typeof store.dispatch) => {
  return dispatch({
    type: GameActionTypes.incrementTimer,
  });
};

export const endGame = () => (dispatch: typeof store.dispatch) => {
  return dispatch({
    type: GameActionTypes.endGame,
  });
};
