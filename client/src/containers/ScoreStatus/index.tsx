import Axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../sharedComponents/universal/Button';
import Loading from '../../sharedComponents/universal/Loading';
import H1 from '../../sharedComponents/universal/Typography/H1';
import { totalTimeSelector } from '../../store/game/selectors';
import AddScoreForm from './AddScoreForm';

const ScoreStatus = () => {
  const score = useSelector(totalTimeSelector);
  const [isScoreInTopTen, setIsScoreInTopTen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const { REACT_APP_API_URL } = process.env;
    const source = Axios.CancelToken.source();
    const config = {
      cancelToken: source.token,
    };

    Axios.get(`${REACT_APP_API_URL}/v1/scores/checkTime?score=${score}`, config)
      .then(({ data }) => {
        setIsScoreInTopTen(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        source.cancel();
        setIsLoading(false);
      });
  }, [score]);

  const homeButtonOnClick = useCallback(() => {
    history.push('/');
  }, [history]);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <PageContainer>
      <Header>
        <H1>
          Score Status :{' '}
          {isScoreInTopTen
            ? 'In Top Ten!'
            : 'Sorry, looks like you fell short this time around'}
        </H1>
      </Header>
      <MainContent>
        {isScoreInTopTen ? (
          <AddScoreForm />
        ) : (
          <Button name="Home" type="button" onClick={homeButtonOnClick} />
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
  height: 100%;
`;

const Header = styled.header``;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ScoreStatus;
