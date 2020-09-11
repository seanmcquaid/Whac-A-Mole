export type gameState = {
  molesHit: number;
  molesLeft: number;
  timeLeft: number;
  gameOver: boolean;
};

const gameState: gameState = {
  molesHit: 0,
  molesLeft: 15,
  timeLeft: 60,
  gameOver: false,
};

type Action = { type: 'MOLE_HIT' };

const gameReducer = (state = gameState, action: Action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
