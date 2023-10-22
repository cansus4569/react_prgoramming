# 콘텍스트 API로 데이터 전달하기

## 예시 상황
```jsx
export default function app() {
    return (
        <Profile username="cansus" />
    )
} // 부모 app 에서 Profile 컴포넌트에게 username 전달

function Profile ({username}) {
    return (
        <Greeting username={username} />
    )
} // 자식 Profile 컴포넌트에서 Greeting 컴포넌트에게 username 전달

function Greeting({username}) {
    return <p>{`${username} Hi~!`}</p>
} // App -> Profile -> Greeting 에 걸쳐 속성값을 받음..
```

## 콘텍스트 API 활용

- createContext
- Provider -> Consumer
    - [Greeting 컴포넌트 참조](./src/ContextHook.js)
- Provider -> useContext
    - [Greeting_1 컴포넌트 참조](./src/ContextHook.js)