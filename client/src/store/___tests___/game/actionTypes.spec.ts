import GameActionTypes from '../../game/actionTypes';

describe('GameActionTypes', () => {
  it('hitMole', () => {
    expect(GameActionTypes.hitMole).toEqual('HIT_MOLE');
  });

  it('startGame', () => {
    expect(GameActionTypes.startGame).toEqual('START_GAME');
  });

  it('incrementTimer', () => {
    expect(GameActionTypes.incrementTimer).toEqual('INCREMENT_TIMER');
  });

  it('endGame', () => {
    expect(GameActionTypes.endGame).toEqual('END_GAME');
  });
});
