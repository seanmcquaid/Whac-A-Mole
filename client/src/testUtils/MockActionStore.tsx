import { AnyAction } from 'redux';
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { GlobalState } from '../store';

type DispatchExts = ThunkDispatch<GlobalState, void, AnyAction>;

const middleware = [thunk];
const mockActionStore = createMockStore<GlobalState, DispatchExts>(middleware);

const createMockActionStore = (initialState: GlobalState) =>
  mockActionStore(initialState);

export default createMockActionStore;
