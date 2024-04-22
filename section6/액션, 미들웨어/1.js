// action creator 함수
function addTodo({ title, priority }) {
    return { type: 'todo/ADD', title, priority };
}

function removeTodo({ id }) {
    return { type: 'todo/REMOVE', id };
}

function removeAllTodo() {
    return { type: 'todo/REMOVE_ALL' };
}

// 액션 객체를 직접 입력하여 사용하는 방식 (비추천)
store.dispatch({ type: 'todo/ADD', title: '영화보기', priority: 'high' });
// 추천 방식
store.dispatch(addTodo({ title: '영화보기', priority: 'high' }));
store.dispatch(removeTodo({ id: 123 }));
store.dispatch(removeAllTodo());

/////////////////////////////////////////////////////////////////////
// 또 다른 방식 (상수 선언 후 사용)
export const ADD = 'todo/ADD';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

export function addTodo({ title, priority }) {
    return { type: ADD, title, priority };
}

export function removeTodo({ id }) {
    return { type: REMOVE, id };
}

export function removeAllTodo() {
    return { type: REMOVE_ALL };
}
