# server-nestjs

## To Do

- [x] User
  - [x] Login
  - [x] Signup
- [x] Memo
  - [x] Create
  - [x] Read
    - 유저 아이디를 받아와서 해당 사용자의 메모만 가져옴
  - [x] Update
  - [x] Delete

## log

- 어차피 간단한 CRUD랑 로그인, 회원가입 정도 로직이라 정교한 DB가 필요할 것 같진 않아 SQLite 사용
- get memo를 할 때 request에 user가 들어가는 이유 및 과정

  1. 서버에 get memo 요청
  2. express의 route에서 request를 handle하는 함수 호출
  3. @AuthGuard("jwt") 애노테이션의 영향으로 JwtStrategy 실행

     - passport-jwt 패키지의 strategy를 사용하면 기본 이름이 'jwt' 로 설정되어 있어 파라미터로 'jwt'를 넣어주면 JwtStrategy가 실행됨

     - fromAuthHeaderAsBearerToken를 이용해 헤더의 bearer token을 가져온 뒤 user가 존재하는지 확인하는 작업

  4. guardsConsumer에 있는 canActivate를 사용하여 user vaildate를 한 결과값을 request에 담아줌
     - guardsConsumer에 MixinAuthGuard를 삽입하여 MixinAuthGuard에 정의되어 있는 canActivate를 실행

  > https://docs.nestjs.com/guards

  > https://jay-ji.tistory.com/94

  > https://docs.nestjs.com/security/authentication

## issue

- 서버 실행 후 database에 연결한 뒤 Entity metadata for was not found. 에러

  - sqlite를 잘못 설정해줘서 생긴 문제인가 싶어 찾아봤는데 아니였음
  - db 설정 해보고 이것저것 해봤는데.. memo entity에 애노테이션 안 붙여서 생긴 오류...^^..

- enableCors origin 잘못 설정해서 오류남
  - 아무 생각 없이 예제 복붙해서 cors 설정 중 origin에 http://localhost:3000 을 설정했는데 해당 주소는 서버라 안 됨
  - 그래서 이번엔 프론트 주소인 http://localhost:5173 을 설정했는데 막힘
  - 실행을 localhost가 아니라 127.0.0.1:5173으로 해서 해당 주소로 넣었더니 성공!
