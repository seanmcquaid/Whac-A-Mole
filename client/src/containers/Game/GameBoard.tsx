import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Mole from '../../sharedComponents/app/Game/Mole';
import { hitMole } from '../../store/game/actions';

const GameBoard: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [moles, setMoles] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  const initialMoles = useMemo(
    () => ({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    }),
    []
  );

  const makeMoleVisible = useCallback(() => {
    const moleToMakeVisible = Math.ceil(Math.random() * 9);
    setMoles(() => ({
      ...initialMoles,
      [moleToMakeVisible]: true,
    }));
  }, [initialMoles]);

  useEffect(() => {
    makeMoleVisible();
  }, [makeMoleVisible]);

  const handleVisibleMoleOnClick = useCallback(() => {
    dispatch(hitMole());
    makeMoleVisible();
  }, [dispatch, makeMoleVisible]);

  return (
    <MolesList>
      {Object.entries(moles).map(([key, value]) => (
        <Mole key={key} isVisible={value} onClick={handleVisibleMoleOnClick} />
      ))}
    </MolesList>
  );
});

const MolesList = styled.ol``;

export default GameBoard;
