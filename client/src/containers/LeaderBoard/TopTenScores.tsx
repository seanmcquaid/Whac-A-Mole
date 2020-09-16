import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Score from '../../models/Score';
import LeaderBoardScores from '../../sharedComponents/app/LeaderBoard/LeaderBoardScores';
import Loading from '../../sharedComponents/universal/Loading';

const TopTenScores = () => {
  const [topTenScores, setTopTenScores] = useState<Score[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { REACT_APP_API_URL } = process.env;
    const source = Axios.CancelToken.source();
    const config = {
      cancelToken: source.token,
    };

    Axios.get(`${REACT_APP_API_URL}/v1/scores/leaderBoard`, config)
      .then(({ data }) => {
        setTopTenScores(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return <LeaderBoardScores scores={topTenScores} />;
};

export default TopTenScores;
