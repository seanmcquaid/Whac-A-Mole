import React from 'react';
import styled from 'styled-components';
import { ReactComponent as VisibleMole } from '../../../assets/mole.svg';
import { ReactComponent as HiddenMole } from '../../../assets/dirt.svg';

type MoleProps = {
  isVisible: boolean;
  onClick?: () => void;
};

const Mole: React.FC<MoleProps> = React.memo(({ isVisible, onClick }) =>
  isVisible ? (
    <MoleContainer onClick={onClick} data-testid="visibleMole">
      <StyledVisibleMole />
    </MoleContainer>
  ) : (
    <MoleContainer data-testid="hiddenMole">
      <StyledHiddenMole />
    </MoleContainer>
  )
);

const MoleContainer = styled.li`
  padding: 0.5rem;
  list-style: none;
  width: 100%;
`;

const StyledVisibleMole = styled(VisibleMole)`
  height: 80px;
  width: 80px;
`;

const StyledHiddenMole = styled(HiddenMole)`
  height: 80px;
  width: 80px;
`;

export default Mole;
