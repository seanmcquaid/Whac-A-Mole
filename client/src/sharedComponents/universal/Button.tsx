import React from 'react';
import styled from 'styled-components';
import { paragraphFontFamily } from '../../constants';

type ButtonProps = {
  onClick: () => void;
  name: string;
};

const Button: React.FC<ButtonProps> = React.memo(({ onClick, name }) => (
  <StyledButton onClick={onClick} data-testid={`${name}Button`}>
    {name}
  </StyledButton>
));

const StyledButton = styled.button`
  font-family: ${paragraphFontFamily};
  padding: 0.5rem;
  margin: 0.5rem;
`;

export default Button;
