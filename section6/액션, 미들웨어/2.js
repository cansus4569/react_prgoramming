import { createStore, applyMiddleware } from 'redux';
const middleware1 = store => next => action => {
    console.log('middleware` start');
    const result = next(action);
    console.log('middleware1 end');
    return result;
};

const middleware2 = store => next => action => {
    console.log('middleware2 start');
    const result = next(action);
    console.log('middleware2 end');
    return result;
};

const myReducer = (state, action) => {
    console.log('myReducer');
    return state;
};

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({ type: 'someAction' });

/**
 * 콘솔 로그 순서
 * reducer > middleware1 start > middleware2 start > myReducer > middleware2 end > middleware1 end
 * 
 * 미들웨어의 순서대로 호출이 되면서 next 함수를 통해 다음 미들웨어에게 액션을 넘겨준다.
 * 마지막 미들웨어에서는 next 함수를 통해 리듀서에게 액션을 넘겨준다.
 */

//////////////////////////////////////////////////////////////////////////////////////

// 미들웨어 활용 예제
const printLog = store => next => action => {
    console.log(`prev state = ${JSON.stringify(store.getState())}`); // 현재 상태값 출력
    const result = next(action);
    console.log(`next state = ${JSON.stringify(store.getState())}`); // 변경된 상태값 출력
    return result;
}