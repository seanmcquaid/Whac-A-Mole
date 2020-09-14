import React from 'react';
import styled from 'styled-components';

type MoleProps = {
  isVisible: boolean;
  onClick?: () => void;
};

const Mole: React.FC<MoleProps> = React.memo(({ isVisible, onClick }) =>
  isVisible ? (
    <MoleContainer onClick={onClick}>Visible</MoleContainer>
  ) : (
    <MoleContainer>Hidden</MoleContainer>
  )
);

const MoleContainer = styled.li``;

export default Mole;
