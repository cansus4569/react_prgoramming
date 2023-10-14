# UI 데이터를 다루는 방법 설명

- 리액트 컴포넌트에서는 UI 데이터를 속성값이나 상태값으로 관리해야 한다.
- 리액트가 값에 변경 사실을 알려면 상태값으로 관리를 해야 한다.

---

**부모 컴포넌트가 상태값이 변경되어 렌더링되면, 자식 컴포넌트도 렌더링이 다시 이루어진다.**

하지만 자식 컴포넌트가 렌더링이 될 필요가 없는 경우도 있다.
(Counter.js 에서 couter2 상태값만 변화, Title 속성값은 counter값과 연관성을 가짐)

> Title 컴포넌트의 속성값이 변경될때만 해당 컴포넌트가 렌더링되게 하려면 [React.memo](./src/Title.js, '소스이동')를 사용한다.

같은 컴포넌트를 여러번 사용할 때
ex) Counter 컴포넌트를 2개 선언
이때 사용된 각 컴포넌트는 상태값을 위한 자신만의 메모리 공간이 있어서 같은 컴포넌트라고 하더라도
자신만의 상태값이 존재한다.

---

속성값은 불변 변수이지만 상태값은 불변 변수가 아니다.
하지만, 상태값도 불변 변수로 관리하는게 좋다.

> 불변 변수 : '변수의 값을 바꿀 수 없다'

불변 변수로 관리하면 코드의 복잡도 낮아지는 장점

객체를 불변 변수로 관리하는 한 가지 방법은 전개 연산자를 이용한다.

```js
// 잘못된 방법
const [count, setCount] = useState({ value: 0, value1: 0, value2: 0});
function onClick() {
    count.value += 1;
    setCount(count);
}
// 올바른 방법
const [count, setCount] = useState({ value: 0, value1: 0, value2: 0});
function onClick() {
    setCount({...count, value: const.value + 1 });
}
```

---

# 컴포넌트에서 반환 할 수 있는 값

1. Element
   - `<div>`
2. 컴포넌트
3. 문자열
4. 숫자
5. 배열
   - 배열로 반환할 때는 `key` prop을 가지고 있어야 한다.
   - key는 렌더링을 효율적으로 하기 위해서 필요함
   - 가상돔에서의 연산을 효율적으로 할 수 있음
6. React.Fragment

   - key를 입력하지 않아도 에러가 안남
   - Fragment 에서는 요소의 순서가 key 역할을 함

   ```jsx
   <React.Fragment>
       <p>hi</p>
       <p>bye</p>
   </React.Fragment>

   // 축약형태로 선언
   <>
       <p>hi</p>
       <p>bye</p>
   </>
   ```

7. null, boolean
   - UI에서는 출력되지는 않음
   - 조건부 렌더링할 때 유용하게 사용
   ```jsx
   <div>
    {count.value > 0 && <Title title={`현재 카운트: ${count}`} />}
   </div>
   ```
8. 리액트 Portal

   - html 에서 `<div id='root'></div>` 엘리먼트에서 말고 다른 엘리먼트에 렌더링하고 싶을 때 사용
   - react-dom 라이브러리 추가해서 사용
   - 1번째 매개변수에서 리액트 요소 작성
   - 2번째 매개변수에서 html에 있는 요소를 지정

   ```jsx
   import ReactDOM from 'react-dom';

   export default function App() {
     return (
       <>
         {ReactDOM.createPortal(
           <div>
             <p>hi</p>
             <p>bye</p>
           </div>,
           document.getElementById('something')
         )}
       </>
     );
   }
   ```
