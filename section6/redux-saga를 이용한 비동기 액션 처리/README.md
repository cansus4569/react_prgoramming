# 리덕스에서 비동기 처리하기

## redux-thunk

- 비동기 로직이 간단할 때 사용
- 가장 간단하게 시작할 수 있다.

## redux-observable

- 비동기 코드가 많을 때 사용
- RxJS 패키지를 기반으로 만들어졌다.
  - 리액티브 프로그래밍을 공부해야 하므로 진입 장벽이 가장 높다.

## redux-saga

- 비동기 코드가 많을 때 사용
- 제너레이터를 적극적으로 활용한다.
- 테스트 코드 작성이 쉽다.

### redux-saga 개념

```js
const a = take(types.REQUEST_LIKE);
const b = put(actions.setLoading(false));
const c = call(callApiLike);
console.log(a, b, c);
const logResult = {
  a: {
    TAKE: {
      pattern: 'timeline/REQUEST_LIKE',
    },
  },
  b: {
    PUT: {
      channel: null,
      action: {
        type: 'timeline/SET_LOADING',
        isLoading: false,
      },
    },
  },
  c: {
    CALL: {
      content: null,
      fn: callApiLike,
      args: [],
    },
  },
};
```
