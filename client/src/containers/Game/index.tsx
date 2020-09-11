import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import H1 from '../../sharedComponents/universal/Typography/H1';

const Game = () => {
  const dispatch = useDispatch();

  const startGameButtonOnClick = useCallback(() => {}, []);
  return (
    <PageContainer>
      <Header>
        <H1>Whac-A-Mole</H1>
      </Header>
      <MainContent></MainContent>
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

const MainContent = styled.main``;

export default Game;
