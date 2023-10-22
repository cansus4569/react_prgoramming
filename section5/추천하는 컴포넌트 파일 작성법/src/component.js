/*
    속성값 타입 정보를 파일의 상단에 작성해준다.
    타입스크립트를 사용한다면, propTypes를 입력할 필요는 없다.
*/
MyComponent.propTypes = {
  // ...
};

// 컴포넌트의 매개변수는 명명된 매개변수 문법으로 작성한다.
export default function MyComponent({ prop1, prop2 }) {
  // ...
}

/*
    컴포넌트 바깥에 있는 변수와 함수는 파일의 가장 밑에 정의하는게 좋다.
    변수명은 대문자로 작성해주는게 좋다.
*/
const COLUMNES = [
  { id: 1, name: 'phoneNumber', width: 200, color: 'white' },
  { id: 1, name: 'city', width: 100, color: 'grey' },
  // ...
];
const URL_PRODUCT_LIST = '/api/products';
function getTotalPrice({ price, total }) {
  // ...
}
