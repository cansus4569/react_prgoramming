# create-react-app

- webpack, babel, jest, eslint, polyfill, HMR, CSS 후처리 등등...
- 기본적인 개발환경을 자동으로 구축해준다.

- 서버 사이드 렌더링은 지원하지 않음
    -> next.js 를 선택해야함

- cra의 단점중 하나는 빌드 시스템이나 eslint 등의 설정을 거의 변경할 수 없다.

---

# react-script 명령어 설명

## npm start 
 - 개발 모드 실행 / 배포용으로 사용하면 안된다.
 - 기본 실행은 http 로 동작한다.
 - https 로 동작하고 싶으면 추가 명령어를 입력한다.
 ```shell
 // Linux / Mac
 $ HTTPS=true npm start
 
 // Window
 set HTTPS=true && npm start
 ```

## npm run build
- build 명령어는 배포를 할 때 사용한다.
- 빌드를 하게 되면 build 폴더 안에 정적 파일을 생성한다.
- 서버에서는 이렇게 생성된 build 폴더 안에 있는 내용들을 정적 파일로 서비스만 하면됨
    -> 별도로 서버에 애플리케이션을 실행하지 않기 때문에, 서버 사이드 렌더링이 불가하다.
- 로컬에서 정적 파일을 서비스하기 위한 방법 -> serve 패키지를 사용함
```shell
$ npx serve -s build
```

## npm test
- 테스를 수행하는 명령어
- 현재 프로젝트에서는 App.test.js 파일이 테스트 코드가 명시되어 있다.

## npm eject
- 모든 설정 파일을 추출하는 명령어
- 관리측면에서는 사용하지 않는 것을 권장함

---

# polyfill

 - 참고 사이트 : caniuse.com
 - 이 사이트에서 브라우저별 지원하는 method 를 검색해본다.
 - ex) padStart 는 IE11 에서 지원하지 않는다.

cra 에는 기본적으로 core-js 가 탑재되어 있다.
- 바벨도 core-js를 사용함
- 참고 사이트 : github.com/zloirock/core-js
- README 에서 padStart 검색
- cra 프로젝트라면 그냥 import 하여 사용함

---

# 환경변수

Usage
```
process.env.{변수 이름}
process.env.NODE_ENV
```

- 환경변수가 많아지면 .env 파일로 관리하면 좋다.
- .env 파일은 root 디렉터리 경로에 생성한다.
    - .env.development
    - .env.production