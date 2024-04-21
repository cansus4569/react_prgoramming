function MyComponent(props) {
    //..
}

function isEqual(preProps, nextProps) {
    // true 또는 false 반환
}

React.memo(MyComponent, isEqual);
React.memo(MyComponent); // 속성값 비교 함수를 사용하지 않으면 기본적으로 얕은 비교를 수행

/**
 * ㅡ React.memo 함수
 * React.memo 함수는 속성값이 변경되지 않으면 리렌더링을 방지하여 성능을 최적화하는 함수
 * 즉, 컴포넌트 함수의 실행과 가상돔의 계산을 생략할 수 있음 => 렌더링 성능상 이점
 */