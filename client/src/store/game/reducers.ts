import GameActionTypes from './actionTypes';

export type GameState = {
  molesLeft: number;
  gameStarted: boolean;
  totalTime: number;
};

const initialState: GameState = {
  molesLeft: 15,
  gameStarted: false,
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
        gameStarted: true,
      };

    case GameActionTypes.incrementTimer:
      return {
        ...state,
        totalTime: state.totalTime + 1000,
      };
    case GameActionTypes.endGame:
      return {
        ...state,
        gameStarted: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
