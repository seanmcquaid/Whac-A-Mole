import GameActionTypes from './actionTypes';

export type gameState = {
  molesHit: number;
  molesLeft: number;
  gameStarted: boolean;
};

const gameState: gameState = {
  molesHit: 0,
  molesLeft: 15,
  gameStarted: false,
};

type Action =
  | { type: GameActionTypes.hitMole }
  | { type: GameActionTypes.startGame };

const gameReducer = (state = gameState, action: Action) => {
  switch (action.type) {
    case GameActionTypes.startGame:
      return {
        ...state,
        gameStarted: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
