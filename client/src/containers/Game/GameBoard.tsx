import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Mole from '../../sharedComponents/app/Game/Mole';
import { hitMole } from '../../store/game/actions';
import { molesLeftSelector } from '../../store/game/selectors';

interface MoleStatus {
  isHidden: boolean;
}

const setMoleVisible = (moles: MoleStatus[], indexOfMoleVisible: number) => {
  const molesToModify = moles;

  molesToModify[indexOfMoleVisible].isHidden = false;
  return molesToModify;
};

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

  useEffect(() => {
    const moleToMakeVisible = Math.ceil(Math.random() * 9);
    setMoles((state) => ({
      ...state,
      [moleToMakeVisible]: true,
    }));
  }, []);

  const handleVisibleMoleOnClick = useCallback(() => {
    dispatch(hitMole());
    setMoles(initialMoles);
  }, [dispatch]);

  return <MolesList></MolesList>;
});

const MolesList = styled.ol``;

export default GameBoard;
