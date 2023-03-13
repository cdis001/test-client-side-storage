# Test Client Side Storage

## 개요

- client side storage를 테스트해보는 repo

## Client Side Storages

1.  Cookies

    - To Do
      - 쿠키에 메모 저장
      - 쿠키에 로그인 정보 저장 후 서버 통신
      - 쿠키에 로그인 정보 + 4MB의 정보 저장 후 서버 통신
    - log
      - 쿠키에 값을 저장하고, 값을 삭제하는 과정이 좀.. 효율적이진 않아 보임. 아마 옛날에 주로 쓰이던 저장소라 그런듯
      - Postman 으로 쿠키에 많은 값의 정보를 저장한 뒤 서버 통신
        - 쿠키가 큰 것과 서버 통신과는 속도 차이가 나지 않음

2.  Web Storage
    - sessionStorage
    - localStorage
3.  IndexedDB
4.  Cache API
5.  File System Access API
6.  File and Directory Entries API
7.  window.name

## log

- 랜더링 방식에 성능 차이가 있을지 궁금해서 같은 내용을 react/nextjs 에서 테스트 해볼 예정~~

## 참고

> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage

> https://www.sitepoint.com/client-side-storage-options-comparison/
