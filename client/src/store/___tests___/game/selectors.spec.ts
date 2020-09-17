import { globalState } from '../..';
import {
  gameStateSelector,
  molesLeftSelector,
  gameActiveSelector,
  totalTimeSelector,
} from '../../game/selectors';

describe('gameSelectors', () => {
  it('gameStateSelector', () => {
    const initialState: globalState = {
      game: {
        molesLeft: 15,
        gameActive: false,
        totalTime: 0,
      },
    };

    expect(gameStateSelector(initialState)).toEqual({
      molesLeft: 15,
      gameActive: false,
      totalTime: 0,
    });
  });

  it('molesLeftSelector', () => {
    const initialState: globalState = {
      game: {
        molesLeft: 15,
        gameActive: false,
        totalTime: 0,
      },
    };

    expect(molesLeftSelector(initialState)).toEqual(15);
  });

  it('gameActiveSelector', () => {
    const initialState: globalState = {
      game: {
        molesLeft: 15,
        gameActive: false,
        totalTime: 0,
      },
    };

    expect(gameActiveSelector(initialState)).toEqual(false);
  });

  it('totalTimeSelector', () => {
    const initialState: globalState = {
      game: {
        molesLeft: 15,
        gameActive: false,
        totalTime: 0,
      },
    };

    expect(totalTimeSelector(initialState)).toEqual(0);
  });
});
