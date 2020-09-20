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
`;

export default Button;
