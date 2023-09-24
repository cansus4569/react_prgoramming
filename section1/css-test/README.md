# CSS 작성 방법 결정

## 일반적인 CSS 파일로 작성
- 단점 : 이름이 같으면 충돌이 남...

## css-module로 작성
- 이름 충돌 문제 해결 가능
- 클래스명을 속성이름으로 입력함
    -> npm classnames 패키지를 이용하면 간편하게 입력 가능
    ```JS
    import cn from 'classnames'

    <button className={cn(Style.Button, Style.big)}>버튼</button>
    ```

## Sass 작성
- css와 비슷하지만 별도의 문법을 이용해서 생산성이 높은 스타일 코드를 작성할 수 있게 도와준다.
- Sass 문법에 있는 변수나 믹스인 등의 개념을 이용하면 스타일 코드를 재사용 할 수 있음
- cra 에서 Sass 를 이용하려면 필요한 패키지
    - npm install node-sass
- 파일확장자는 .scss로 작성해야함 
- Sass를 사용하면서 css-module을 같이 사용할 수 있다.

## css-in-js 작성
- css 코드를 자바스크립트 파일 안에서 작성하는 방식
- 마크업 개발팀이 별도로 있고 자바스크립트 개발자가 나뉘어져 있다면 css-in-js는 좋은 선택이 아님
- 개발자 혼자 JS와 CSS를 잘 알고 있는 환경이라면 css-in-js 는 좋은 선택이 될 수 있음
- styled-components 라이브러리는 css-in-js 라이브러리중 하나이다.
```shell
$ npm install styled-components
```