import React from 'react';
import styled from 'styled-components';
import Constants from '../../constants';

type ButtonProps = {
  onClick?: () => void;
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<ButtonProps> = React.memo(({ onClick, name, type }) => (
  <StyledButton onClick={onClick} data-testid={`${name}Button`} type={type}>
    {name}
  </StyledButton>
));

const StyledButton = styled.button`
  font-family: ${Constants.paragraphFontFamily};
  padding: 0.75rem;
  margin: 0.75rem;
  width: 8rem;
  background-color: ${Constants.buttonColor};
  color: ${Constants.buttonTextColor};
  border: 2px solid black;
  border-radius: 10px;
`;

export default Button;
