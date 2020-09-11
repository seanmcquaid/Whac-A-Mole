import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const GameBoard = () => {
  const dispatch = useDispatch();
  const [timeTotal, setTimeTotal] = useState(0);

  console.log(timeTotal);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTotal((time) => time + 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <GameContainer></GameContainer>;
};

const GameContainer = styled.div``;

export default GameBoard;
