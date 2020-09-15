import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../sharedComponents/universal/Button';
import H1 from '../../sharedComponents/universal/Typography/H1';
import P from '../../sharedComponents/universal/Typography/P';
import { startGame } from '../../store/game/actions';
import { gameActiveSelector } from '../../store/game/selectors';
import MainGame from './MainGame';

const Game: React.FC = () => {
  const gameActive = useSelector(gameActiveSelector);
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
        {!gameActive ? (
          <>
            <P>Press Start to Begin the Game</P>
            <Button
              onClick={startGameButtonOnClick}
              name="Start"
              type="button"
            />
          </>
        ) : (
          <MainGame />
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
