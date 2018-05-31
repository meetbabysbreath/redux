import {createStore,combineReducers} from 'redux';
import reducer from 'reducers';
const store = createStore(combineReducers(reducer));
window.store = store;
export default store;