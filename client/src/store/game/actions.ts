import store from '../index';
import { HIT_MOLE } from './actionTypes';

export const hitMole = () => (dispatch: typeof store.dispatch) => {
  return dispatch({
    type: HIT_MOLE,
  });
};
