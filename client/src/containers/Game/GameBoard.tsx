import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { endGame, incrementTimer } from '../../store/game/actions';
import {
  gameStartedSelector,
  molesLeftSelector,
} from '../../store/game/selectors';

const GameBoard = () => {
  const molesLeft = useSelector(molesLeftSelector);
  const gameStarted = useSelector(gameStartedSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (molesLeft !== 0) {
      const timer = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }

    dispatch(endGame());
  }, [dispatch, molesLeft]);

  return <GameContainer></GameContainer>;
};

const GameContainer = styled.div``;

export default GameBoard;
