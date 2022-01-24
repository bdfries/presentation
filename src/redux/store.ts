import { createStore } from 'redux';

import rootReduce from './rootReducer';

const store = createStore(rootReduce);

export default store;
