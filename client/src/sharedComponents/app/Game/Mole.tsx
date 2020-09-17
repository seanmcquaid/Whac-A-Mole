import React from 'react';
import styled from 'styled-components';

type MoleProps = {
  isVisible: boolean;
  onClick?: () => void;
};

const Mole: React.FC<MoleProps> = React.memo(({ isVisible, onClick }) =>
  isVisible ? (
    <MoleContainer onClick={onClick} data-testid="visibleMole">
      Visible
    </MoleContainer>
  ) : (
    <MoleContainer data-testid="hiddenMole">Hidden</MoleContainer>
  )
);

const MoleContainer = styled.li``;

export default Mole;
