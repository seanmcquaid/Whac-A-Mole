import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { totalTimeSelector } from '../../store/game/selectors';

const ScoreStatus = () => {
  const score = useSelector(totalTimeSelector);
  const [isScoreInTopTen, setIsScoreInTopTen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { REACT_APP_API_URL } = process.env;
    const source = Axios.CancelToken.source();
    const config = {
      cancelToken: source.token,
    };

    Axios.get(`${REACT_APP_API_URL}/v1/scores/checkTime?score=${score}`, config)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        source.cancel();
        setIsLoading(false);
      });
  }, [score]);

  if (isLoading) {
  }

  return <div></div>;
};

export default ScoreStatus;
