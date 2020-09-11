import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { endGame, incrementTimer } from '../../store/game/actions';
import {
  gameActiveSelector,
  molesLeftSelector,
} from '../../store/game/selectors';

const GameBoard = () => {
  const molesLeft = useSelector(molesLeftSelector);
  const gameActive = useSelector(gameActiveSelector);
  const dispatch = useDispatch();

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
    }
  }, [dispatch, molesLeft]);

  if (!gameActive) {
    return <Redirect to="/scoreStatus" />;
  }

  return <GameContainer></GameContainer>;
};

const GameContainer = styled.div``;

export default GameBoard;
