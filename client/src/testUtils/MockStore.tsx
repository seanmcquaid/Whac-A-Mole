import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, GlobalState } from '../store';

type MockStoreProps = {
  initialState: GlobalState;
};

const MockStore: React.FC<MockStoreProps> = ({ initialState, children }) => {
  const store = configureStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default MockStore;
