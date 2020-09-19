import { GlobalState } from '../..';
import createMockActionStore from '../../../testUtils/createMockActionStore';
import {
  hitMole,
  startGame,
  incrementTimer,
  endGame,
} from '../../game/actions';
import GameActionTypes from '../../game/actionTypes';

describe('gameActions', () => {
  it('hitMole', () => {
    const initialState: GlobalState = {
      game: {
        molesLeft: 15,
        totalTime: 0,
        gameActive: true,
      },
    };
    const store = createMockActionStore(initialState);

    store.dispatch(hitMole());

    expect(store.getActions()).toEqual([{ type: GameActionTypes.hitMole }]);
  });

  it('startGame', () => {
    const initialState: GlobalState = {
      game: {
        molesLeft: 15,
        totalTime: 0,
        gameActive: true,
      },
    };
    const store = createMockActionStore(initialState);

    store.dispatch(startGame());

    expect(store.getActions()).toEqual([{ type: GameActionTypes.startGame }]);
  });

  it('incrementTimer', () => {
    const initialState: GlobalState = {
      game: {
        molesLeft: 15,
        totalTime: 0,
        gameActive: true,
      },
    };
    const store = createMockActionStore(initialState);

    store.dispatch(incrementTimer());

    expect(store.getActions()).toEqual([
      { type: GameActionTypes.incrementTimer },
    ]);
  });

  it('endGame', () => {
    const initialState: GlobalState = {
      game: {
        molesLeft: 15,
        totalTime: 0,
        gameActive: true,
      },
    };
    const store = createMockActionStore(initialState);

    store.dispatch(endGame());

    expect(store.getActions()).toEqual([{ type: GameActionTypes.endGame }]);
  });
});
