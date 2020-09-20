import React from 'react';
import styled from 'styled-components';
import Constants from '../../../constants';

const P = React.memo(styled.p`
  font-family: 'Lora', Serif;
  font-size: 1rem;
  color: ${Constants.paragraphFontColor};
`);

export default P;
