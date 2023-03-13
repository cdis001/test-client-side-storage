# Test Client Side Storage_CSR

## Cookie

1. 쿠키에 메모(클라이언트 데이터 정보)를 저장

   - 원래 이런 용도로 쓰이지 않는다는걸 알고는 있었지만.. 너무나 비효율적이고 별로임
   - 우선 쿠키에 값을 저장하는게 string으로만 이루어져 있어 좀.. 보기 나쁨
   - 직렬화, 역직렬화를 해줘야 하지만 귀찮아서 패스
   - Last applied commit id: 5f6ab646a840eb007f07b4c7375ef2abc3d1316e

2. 쿠키에 로그인 정보 저장 후 서버 통신

   - 아직 완성도 안 했는데 쿠키에 서로 다른 값이 있을 경우 값 가져오는게 너무나 귀찮다..
     - 함수 따로 정의해주는걸로 해결!
   - 서버/클라이언트가 로컬에서 통신하는거라 CORS 에러가 애먹임..
   - 쿠키에 토큰 넣는게 꽤 오랫동안 정석이였어서 그런지 구현하는데 어려움은 없었음
   - 다만 확실히 보안에는 취약해보임.. 사용자가 쿠키를 직접 조작할 수 있기 때문
   - 쿠키 관리를 제대로 하지 않으면 내가 원하는 값이 안 들어갈 수 있음
     - userId 값이 잘못 들어가서 쿠키에 undefined인 userId와 제대로 된 값이 들어간 userId가 있었는데, undefined인 userId로 create memo를 하니 서버에 제대로 저장되지 않는 이슈가 있었음

## log

- axios default header 설정법

  1. axios.defaults.headers.(method)\[(header name)] = (value)
     - method에는 get, post...등의 rest api 메소드를 넣어줌
     - 만약, 메소드에 상관 없이 디폴트 값으로 하고 싶다면 'common'이라고 넣어주면 됨

  > https://axios-http.com/docs/config_defaults

- memo add시 div에 key값이 없다고 에러가 나옴
  - add한 뒤에 return 해주는 데이터 값으로 memo값을 넣어줬어야 했는데 기존 코드 복붙하다가 까먹어버림... 반성...

## issue

- server에 cookie 전송 안 되는 문제

  - withCredentials 옵션을 넣으라는데 해당 옵션 넣으면 오류
  - 서버에서 cors 옵션을 설정해줘서 해결! 자세한 내용은 서버쪽 readme에 적음

- monorepo로 추가한 뒤, 커스텀 패키지가 install 되지 않는 문제
  - 커맨드로 넣어보기 (실패)
  - package.json에 직접 넣어보기 (실패)
  - tsconfig.json 수정 (실패)
  - yarn-lock 파일 삭제하니 해결!
    - 아마, root project(test-client-side-storage)에서 패키지를 관리해야 하는데, 해당 프로젝트 내부에 yarn-lock 파일이 있어 해당 파일을 기준으로 커스텀 패키지를 찾은 듯
