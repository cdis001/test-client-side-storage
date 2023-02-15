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

## issue

- 서버 실행 후 database에 연결한 뒤 Entity metadata for was not found. 에러
  - sqlite를 잘못 설정해줘서 생긴 문제인가 싶어 찾아봤는데 아니였음
  - db 설정 해보고 이것저것 해봤는데.. memo entity에 애노테이션 안 붙여서 생긴 오류...^^..
