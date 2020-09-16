import React from 'react';
import styled from 'styled-components';
import Score from '../../../models/Score';

type LeaderBoardScores = {
  scores: Score[];
};

const LeaderBoardScores: React.FC<LeaderBoardScores> = React.memo(
  ({ scores }) => (
    <LeaderBoardList>
      {scores.map(({ name, score }, index) => (
        <LeaderBoardScore key={index}>
          <LeaderBoardScoreName>{name} -</LeaderBoardScoreName>
          <LeaderBoardScoreAmount> {score}</LeaderBoardScoreAmount>
        </LeaderBoardScore>
      ))}
    </LeaderBoardList>
  )
);

const LeaderBoardList = styled.ol``;

const LeaderBoardScore = styled.li``;

const LeaderBoardScoreName = styled.span``;

const LeaderBoardScoreAmount = styled.span``;

export default LeaderBoardScores;
