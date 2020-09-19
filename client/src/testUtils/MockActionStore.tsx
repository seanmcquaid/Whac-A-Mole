import { AnyAction } from 'redux';
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { globalState } from '../store';

type DispatchExts = ThunkDispatch<globalState, void, AnyAction>;

const middleware = [thunk];
const mockActionStore = createMockStore<globalState, DispatchExts>(middleware);

const createMockActionStore = (initialState: globalState) =>
  mockActionStore(initialState);

export default createMockActionStore;
