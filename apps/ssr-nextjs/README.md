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

## log

## issue
