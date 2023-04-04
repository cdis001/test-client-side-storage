# SSG-NEXTJS

## Cookie

1. 쿠키에 메모(클라이언트 데이터 정보)를 저장

   - 브라우저에 있는 값을 가져오기 때문에 속도는 매우 빠름
   - 단, 용량이 한정되어 있어 4kb가 넘어가면 그 이상 업데이트 되지 않음
   - 3개의 랜더링 방식중 가장 빠름.
     - 왜? ssr 방식이나 csr 방식의 경우엔 두 번의 랜더링이 진행되나, SSG의 경우에는 랜더링이 한 번만 이루어짐
       - 찾아보니 StrictMode의 의도적인 기능이라고 함
       - 개발 모드에서만 발생하는 상황으로 dev가 아니라 다른 모드에서 다시 테스트 해봐야 할 듯...
       - ssr은 비슷한 속도로 진행됨
   - Cookie size: 1567(get memo)
     - 1ms
     - 1ms
     - 2ms
     - 1ms
     - 1ms
     - 1ms
     - 1ms
     - 1ms
     - 10ms
     - 1ms

2. 쿠키에 로그인 정보 저장 후 서버 통신
   - 서버와 통신하기 때문에 속도는 상대적으로 느림(가장 빠른 속도가 약 100ms정도 됨)

## web storage

- 쿠키처럼 서버와 통신하는 저장소가 아니므로 로그인 부분은 패스
- Storage에 저장한 자료는 페이지 프로토콜별로 구분

1. 메모(클라이언트 데이터 정보)를 저장한 뒤 읽어오는 속도 측정
2. 탭을 여러개 두고 각각에 메모를 저장한 뒤 읽어오는 정보 확인
3. http & https 에 메모 저장
4. 5MB 이상 저장한 뒤 읽어오는 속도 측정

### session

### local

## log

- nextjs의 구동 방식 -> 왜 styled-components와 같은 ui lib는 따로 설정해야 하는가?
- 초기 memo의 값을 getStaticProps()를 이용해 가져오려 했으나 실패
  - 클라이언트에 빌드되기 전에 실행되는 함수이므로 브라우저 application에 있는 cookie 값은 가져올 수 없음

## issue

- monorepo 구현 후 styled-components를 적용한 UI components가 적용되지 않는 문제

  1. 개요
     - monorepo 구현 후 styled-components를 적용한 UI components가 적용되지 않는 문제
  2. 문제
     1. 해당 컴포넌트의 타입을 찾을 수 없다고 나옴
     2. Unexpected token. You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
  3. 해결 과정
     1. 해당 컴포넌트의 타입을 찾을 수 없는 문제
        - declear module "name" {} 사용
          - type만 있고 value가 없다고 나옴
        - declear module "name" {} 안에 interface, class 사용
          - interface의 경우에는 type만 있고 value가 없다고 나옴
          - class의 경우에는 내부 Props가 없다고 나옴
        - declear module "name" {} 안에 class 사용 후 constructor function 사용
          - Props 처리 안 됨ㅠㅠ
          - 여기서 이건 아니다.... 라고 느끼기 시작함
        - package.json의 workspace에 해당 라이브러리가 안 들어간 것을 확인
        - 다른 예시를 확인해보니 packages/lib 내부에 src 폴더가 있고, 해당 폴더의 index에서 라이브러리를 선언한 것을 확인
        - lib 내부에 src 폴더를 만든 뒤 index에서 라이브러리 관리
        - 성공!
     2. Unexpected token. You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
        - babel 설정, package.json, tsconfig.json, eslint...등등 설정파일을 다 건드려봤지만 실패
        - 구글링해서 찾아보니 외부 라이브러리가 next 내부에서 styled-components가 적용되지 않아 사용하는 component 모듈을 사전에 실행하도록 플러그인을 이용
        - 해결!
  4. 해결

     1. 해당 컴포넌트의 타입을 찾을 수 없는 문제
        - 내부 소스 파일을 src로 감싸줌
     2. Unexpected token. You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
        - next 내부에서 style 적용이 되지 않아, 플러그인으로 사전에 styled-componented를 사용하는 component 파일을 적용해준 뒤 해결
          > https://minemanemo.tistory.com/168

     - 설정이 제일 어려워ㅠㅠ
     - 어설프게 아는게 독이 된 느낌
