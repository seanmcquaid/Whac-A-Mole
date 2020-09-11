import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../sharedComponents/universal/Button';
import H1 from '../../sharedComponents/universal/Typography/H1';
import P from '../../sharedComponents/universal/Typography/P';
import { startGame } from '../../store/game/actions';
import { gameStartedSelector } from '../../store/game/selectors';
import GameBoard from './GameBoard';

const Game = () => {
  const gameStarted = useSelector(gameStartedSelector);
  const dispatch = useDispatch();

  const startGameButtonOnClick = useCallback(() => {
    dispatch(startGame());
  }, [dispatch]);

  return (
    <PageContainer>
      <Header>
        <H1>Whac-A-Mole</H1>
      </Header>
      <MainContent>
        {!gameStarted ? (
          <>
            <P>Press Start to Begin the Game</P>
            <Button onClick={startGameButtonOnClick} name="Start" />
          </>
        ) : (
          <GameBoard />
        )}
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header``;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Game;
