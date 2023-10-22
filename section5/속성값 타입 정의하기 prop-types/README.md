# 속성값 타입 정의하기 prop-types

prop-types 패키지를 이용하여 타입 정보를 입력할 수 있다.
prop-types 패키지는 속성값의 타입 정보를 정의할 때 사용하는 리액트 공식 패키지

---

## porpTypes 사용 에제

```jsx
MyComponent.propTypes = {
  // 리액트 요소
  // <div>hello</div> => 참
  // <SomeComponent /> => 참
  // 123 => 거짓
  menu: PropTypes.element,

  // 컴포넌트 함수가 반환할 수 있는 모든 것
  // number, string, array, element, ...
  // <SomeComponent /> => 참
  // 123 => 참
  description: PropTypes.node,

  // Message 클래스로 생성된 모든 객체
  // new Messages() => 참
  // new Car() => 거짓
  message: PropTypes.instanceOf(Message),

  // 배열에 포함된 값 중에서 하나를 만족
  // 'jone' => 참
  // 'messy' => 거짓
  name: PropTypes.oneOf(['jone', 'mike']),

  // 배열에 포함된 타입 중에서 하나를 만족
  // 123 => 참
  // 'messy' => 참
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  // 특정 타입만 포함하는 배열
  // [1, 5, 7] => 참
  // ['a', 'b'] => 거짓
  ages: PropTypes.arrayOf(PropTypes.number),

  // 객체의 속성값 타입을 정의
  // {color: 'red', weight: 123} => 참
  // {color: 'red', weight: '123kg'} => 거짓
  info: PropTypes.shape({
    color: PropTypes.string,
    weight: PropTypes.number,
  }),

  // 객체에서 모든 속성값의 타입이 같은 경우
  // {prop1: 123, prop2: 456} => 참
  // {prop1: 'red', prop2: 123} => 거짓
  infos: PropTypes.objectOf(PropTypes.number),

  // 함수를 이용한 정의
  age: function (props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value > 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        It must be 10 <= value <= 20.`
      );
    }
  },
};
```
