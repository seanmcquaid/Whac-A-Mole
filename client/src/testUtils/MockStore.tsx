import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, globalState } from '../store';

type MockStoreProps = {
  initialState: globalState;
};

const MockStore: React.FC<MockStoreProps> = ({ initialState, children }) => {
  const store = configureStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default MockStore;
