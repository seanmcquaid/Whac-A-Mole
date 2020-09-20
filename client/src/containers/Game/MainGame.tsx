import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import P from '../../sharedComponents/universal/Typography/P';
import { endGame, incrementTimer } from '../../store/game/actions';
import {
  molesLeftSelector,
  totalTimeSelector,
} from '../../store/game/selectors';
import GameBoard from './GameBoard';

const MainGame = () => {
  const molesLeft = useSelector(molesLeftSelector);
  const totalTime = useSelector(totalTimeSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (molesLeft !== 0) {
      const timer = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      dispatch(endGame());
      history.push('/scoreStatus');
    }
  }, [dispatch, molesLeft, history]);

  return (
    <GameContainer>
      <P data-testid="timeLeft">Total Time : {totalTime}</P>
      <P data-testid="molesLeft">Moles Left : {molesLeft}</P>
      <GameBoard />
    </GameContainer>
  );
};

const GameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MainGame;
