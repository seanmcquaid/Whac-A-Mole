import gameReducer, { GameState } from '../../game/reducers';
import GameActionTypes from '../../game/actionTypes';

describe('gameReducer', () => {
  it('hitMole', () => {
    const initialState: GameState = {
      molesLeft: 15,
      totalTime: 0,
      gameActive: true,
    };

    expect(
      gameReducer(initialState, { type: GameActionTypes.hitMole })
    ).toEqual({
      molesLeft: 14,
      totalTime: 0,
      gameActive: true,
    });
  });

  it('startGame', () => {
    const initialState: GameState = {
      molesLeft: 15,
      totalTime: 0,
      gameActive: false,
    };

    expect(
      gameReducer(initialState, { type: GameActionTypes.startGame })
    ).toEqual({
      molesLeft: 15,
      totalTime: 0,
      gameActive: true,
    });
  });

  it('incrementTimer', () => {
    const initialState: GameState = {
      molesLeft: 15,
      totalTime: 0,
      gameActive: true,
    };

    expect(
      gameReducer(initialState, { type: GameActionTypes.incrementTimer })
    ).toEqual({
      molesLeft: 15,
      totalTime: 1000,
      gameActive: true,
    });
  });

  it('endGame', () => {
    const initialState: GameState = {
      molesLeft: 15,
      totalTime: 0,
      gameActive: true,
    };

    expect(
      gameReducer(initialState, { type: GameActionTypes.endGame })
    ).toEqual({
      molesLeft: 15,
      totalTime: 0,
      gameActive: false,
    });
  });
});
