import { combineReducers } from 'redux';

import socketReducer from './reducers/socketReducer';

const rootReducer = combineReducers({
    socket: socketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
