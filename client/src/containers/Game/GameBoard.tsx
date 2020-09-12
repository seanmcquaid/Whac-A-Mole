import React, { useCallback } from 'react';
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
  const molesLeft = useSelector(molesLeftSelector);

  const originalMoles: MoleStatus[] = [
    { isHidden: true },
    { isHidden: true },
    { isHidden: true },
    { isHidden: true },
    { isHidden: true },
  ];

  const indexOfMoleVisible = Math.floor(originalMoles.length * Math.random());

  const molesToModify: MoleStatus[] = setMoleVisible(
    [...originalMoles],
    indexOfMoleVisible
  );

  const handleVisibleMoleOnClick = useCallback(() => {
    dispatch(hitMole());
  }, [dispatch]);

  if (molesLeft === 0) {
    return <div>STOP! You're done</div>;
  }

  return (
    <MolesList>
      {molesToModify.map(({ isHidden }, index) => (
        <Mole
          isHidden={isHidden}
          onClick={handleVisibleMoleOnClick}
          key={index}
        />
      ))}
    </MolesList>
  );
});

const MolesList = styled.ol``;

export default GameBoard;
