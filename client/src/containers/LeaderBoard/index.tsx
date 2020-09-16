import React from 'react';
import styled from 'styled-components';
import H1 from '../../sharedComponents/universal/Typography/H1';
import TopTenScores from './TopTenScores';

const LeaderBoard = () => {
  return (
    <PageContainer>
      <Header>
        <H1>Leader Board</H1>
      </Header>
      <MainContent>
        <TopTenScores />
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

export default LeaderBoard;
