function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        //..
        case 'REMOVE_ALL':
            return {
                ...state,
                todos: [],
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };
        default:
            return state;
    }
}

const INIT_STATE = { todos: [] };

////////////////////////////////////////////
// immer 라이브러리를 사용한 코드 (produce 함수 사용)
function reducer(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case SET_SELECTED_PEOPLE:
                draft.selectedPeople = draft.peopleList.find(
                    item => item.id === action.id,
                );
                break;
            case EDIT_PEOPLE_NAME:
                const people = draft.peopleList.find(item => item.id === action.id);
                people.name = action.name;
                break;
            //...
        }
    });
}

////////////////////////////////////////////
// createReducer 함수를 만들어서 사용한 코드 1
const reducer = createReducer(INITIAL_STATE, {
    [ADD]: (state, action) => state.todos.push(action.todo),
    [REMOVE_ALL]: state => (state.todos = []),
    [REMOVE]: (state, action) => (state.todos = state.todos.filter(todo => todo.id !== action.id)),
});

// createReducer 함수를 만들어서 사용한 코드 2
function createReducer(initialSate, handlerMap) {
    return function (state = initialSate, action) {
        return produce(state, draft => {
            const handler = handlerMap[action.type];
            if (handler)
                handler(draft, action);
        })
    }
}