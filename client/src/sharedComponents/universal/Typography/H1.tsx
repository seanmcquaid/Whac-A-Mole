import React from 'react';
import styled from 'styled-components';
import Constants from '../../../constants';

const H1 = React.memo(styled.h1`
  font-family: ${Constants.headerFontFamily};
  font-size: 2rem;
  color: ${Constants.headerFontColor};
`);

export default H1;
