import React from 'react';
import styled from 'styled-components';
import Constants from '../../../constants';
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

const LeaderBoardList = styled.ol`
  font-family: ${Constants.paragraphFontFamily};
  color: ${Constants.paragraphFontColor};
  width: 100%;
`;

const LeaderBoardScore = styled.li`
  padding: 0.5rem;
`;

const LeaderBoardScoreName = styled.span``;

const LeaderBoardScoreAmount = styled.span``;

export default LeaderBoardScores;
