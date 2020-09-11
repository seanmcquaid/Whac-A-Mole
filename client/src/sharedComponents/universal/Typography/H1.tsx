import React from 'react';
import styled from 'styled-components';
import { headerFontFamily } from '../../../constants';

const H1: React.FC = React.memo(styled.h1`
  font-family: ${headerFontFamily};
  font-size: 2rem;
`);

export default H1;
