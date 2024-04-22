import { createStore } from 'redux';
import { createReducer } from './redux-helper';

const INITIAL_STATE = { value: 0 };
const reducer = createReducer(INITIAL_STATE, {
    INCREMENT: state => (state.value += 1),
});
const store = createStore(reducer);

let prevState;
store.subscribe(() => {
    const state = store.getState();
    if (state == prevState) {
        console.log('상태값 같은');
    } else {
        console.log('상태값 변경됨');
    }
    prevState = state;
});


