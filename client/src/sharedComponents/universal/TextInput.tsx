import React from 'react';
import styled from 'styled-components';

type TextInputProps = {
  value: string;
  onChange: () => void;
  name: string;
};

const TextInput: React.FC<TextInputProps> = React.memo(
  ({ value, onChange, name }) => (
    <StyledInput
      value={value}
      onChange={onChange}
      type="text"
      data-testid={name}
    />
  )
);

const StyledInput = styled.input``;

export default TextInput;
