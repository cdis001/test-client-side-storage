# SSR-NEXTJS

## Cookie

1. 쿠키에 메모(클라이언트 데이터 정보)를 저장

   - 사실 좀 애매한게 ssr 모드와 ssg 모드의 차이가 거의 없음... getInitialProps나 getServerSideProps를 사용해야 할텐데 사용처가 마땅치 않아 고민중
   - Cookie size: 1567(get memo)
     - 2ms
     - 1ms
     - 1ms
     - 1ms
     - 2ms
     - 1ms
     - 1ms
     - 1ms
     - 1ms
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

## issue
