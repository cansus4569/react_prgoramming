// 이전, 이후 속성값을 가지고 있을 때
// 속성값이 변경 됐는지 어떻게 판단하는가?

const prevProps = {
    todos: [
        { title: 'fix bug', priority: 'high' },
        { title: 'meeting with boss', priority: 'low' }, // low
        // ...
    ],
    friends: [],
    // ...
};

const nextProps = {
    todos: [
        { title: 'fix bug', priority: 'high' },
        { title: 'meeting with boss', priority: 'high' }, // high
        // ...
    ],
    friends: [],
    // ...
};

// 리액트에서 사용하는 얕은 비교 방식
const isEqual = prevProps.todos === nextProps.todos && prevProps.friends === nextProps.friends;

// 비효율적인 방법 ( 모든 값을 다 비교한다. )
(prevProps.todos[0].title === nextProps.todos[0].title &&
    prevProps.todos[0].priority === nextProps.todos[0].priority &&
    prevProps.todos[1].title === nextProps.todos[1].title &&
    prevProps.todos[1].priority === nextProps.todos[1].priority)

/**
 * 객체를 불변 객체로 관리한다.
 * 데이터를 불변 데이터로 관리하면 이렇게 이전/이후 값의 단순 비교만으로 컴포넌트의 속성값이 변경되는지 알 수 있다.
 *  따라서, 상태값을 불변 객체로 관리하면 렌더링 성능에 큰 도움이 된다.
 */
prevProps.todos === nextProps.todos;
prevProps.todos[0] === nextProps.todos[0];


// 예제 1
const prevTodos = [1, 2, 3];
// todos.push(4);
const nextTodos = [...todos, 4];

prevTodos === nextTodos;

// prevTodos.length === nextTodos.length;
// prevTodos[0] === nextTodos[0];
// prevTodos[1] === nextTodos[1];
// prevTodos[2] === nextTodos[2];