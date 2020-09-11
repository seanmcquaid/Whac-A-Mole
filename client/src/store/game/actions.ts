import store from '../index';
import GameActionTypes from './actionTypes';

export const hitMole: React.Dispatch<GameActionTypes> = () => (
  dispatch: typeof store.dispatch
) => {
  return dispatch({
    type: GameActionTypes.hitMole,
  });
};
