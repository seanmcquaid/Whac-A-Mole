import GameActionTypes from './actionTypes';

export type GameState = {
  molesLeft: number;
  gameActive: boolean;
  totalTime: number;
};

const initialState: GameState = {
  molesLeft: 15,
  gameActive: false,
  totalTime: 0,
};

type Action =
  | { type: GameActionTypes.hitMole }
  | { type: GameActionTypes.startGame }
  | { type: GameActionTypes.incrementTimer }
  | { type: GameActionTypes.endGame };

const gameReducer = (state = initialState, action: Action): GameState => {
  switch (action.type) {
    case GameActionTypes.startGame:
      return {
        ...state,
        gameActive: true,
      };

    case GameActionTypes.incrementTimer:
      return {
        ...state,
        totalTime: state.totalTime + 1000,
      };
    case GameActionTypes.endGame:
      return {
        ...state,
        gameActive: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
