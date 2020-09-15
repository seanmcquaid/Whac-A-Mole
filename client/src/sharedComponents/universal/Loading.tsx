import React from 'react';
import { SkewLoader } from 'react-spinners';
import styled from 'styled-components';

type LoadingProps = {
  isLoading: boolean;
};

const Loading: React.FC<LoadingProps> = ({ isLoading }) => (
  <LoadingContainer data-testid="loadingSpinner">
    <StyledLoadingSpinner loading={isLoading} />
  </LoadingContainer>
);

const LoadingContainer = styled.div``;

const StyledLoadingSpinner = styled(SkewLoader)``;

export default Loading;
