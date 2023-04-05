# Test Client Side Storage_CSR

## Cookie

1. 쿠키에 메모(클라이언트 데이터 정보)를 저장

   - 원래 이런 용도로 쓰이지 않는다는걸 알고는 있었지만.. 너무나 비효율적이고 별로임
   - 우선 쿠키에 값을 저장하는게 string으로만 이루어져 있어 좀.. 보기 나쁨
   - 직렬화, 역직렬화를 해줘야 하지만 귀찮아서 패스
   - Last applied commit id: 5f6ab646a840eb007f07b4c7375ef2abc3d1316e
   - Cookie size: 1567(get memo)
     - 1ms
     - 1ms
     - 1ms
     - 1ms
     - 2ms
     - 1ms
     - 1ms
     - 0ms
     - 1ms
     - 1ms

2. 쿠키에 로그인 정보 저장 후 서버 통신

   - 아직 완성도 안 했는데 쿠키에 서로 다른 값이 있을 경우 값 가져오는게 너무나 귀찮다..
     - 함수 따로 정의해주는걸로 해결!
   - 서버/클라이언트가 로컬에서 통신하는거라 CORS 에러가 애먹임..
   - 쿠키에 토큰 넣는게 꽤 오랫동안 정석이였어서 그런지 구현하는데 어려움은 없었음
   - 다만 확실히 보안에는 취약해보임.. 사용자가 쿠키를 직접 조작할 수 있기 때문
   - 쿠키 관리를 제대로 하지 않으면 내가 원하는 값이 안 들어갈 수 있음
     - userId 값이 잘못 들어가서 쿠키에 undefined인 userId와 제대로 된 값이 들어간 userId가 있었는데, undefined인 userId로 create memo를 하니 서버에 제대로 저장되지 않는 이슈가 있었음

## storage

- 쿠키처럼 서버와 통신하는 저장소가 아니므로 로그인 부분은 패스
- Storage에 저장한 자료는 페이지 프로토콜별로 구분

1. 메모(클라이언트 데이터 정보)를 저장한 뒤 읽어오는 속도 측정
2. 탭을 여러개 두고 각각에 메모를 저장한 뒤 읽어오는 정보 확인
3. 저장가능한 용량만큼 저장한 뒤 읽어오는 속도 측정

### session

1. 메모(클라이언트 데이터 정보)를 저장한 뒤 읽어오는 속도 측정

   - 쿠키보다 훨씬 많은 용량이 들어감
   - session size: 130mb(사용 가능 용량의 대략 1/4)
     - 4ms
     - 3ms
     - 3ms
     - 3ms
     - 3ms
     - 3ms
     - 2ms
     - 7ms
     - 3ms
     - 2ms

2. 탭을 여러개 두고 각각에 메모를 저장한 뒤 읽어오는 정보 확인

   - 각각의 탭별로 별개의 데이터로 들어감
     - 탭끼리 데이터가 공유되지 않음

3. 저장가능한 용량만큼 저장한 뒤 읽어오는 속도 측정
   - 확실히 클라이언트 사이드 저장소라 빠르긴 함
   - 다만, 데이터는 불러왔으나 화면에 표시되는 시간이 길어 데이터가 화면에 보여지는 시간은 더 걸리는 듯
   - 불러오는 시간은 짧지만 화면에 그려지는 시간 때문에 데이터가 보이지 않아 사용자 입장에서는 로딩이 걸린다고 생각할 수 있음
   - 큰 데이터를 불러올 때는 데이터를 쪼개서 가져오거나(페이징 처럼), 로딩바를 만들던가 하는게 UX에 좋을듯.
   - session size: 520mb
     - 19ms
     - 20ms
     - 13ms
     - 11ms
     - 10ms
     - 14ms
     - 8ms
     - 8ms
     - 8ms
     - 14ms

### local

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
