# monorepo-lib

## setting

1. 메인 폴더(test-client-side-storage)에 yarn berry 적용

   ```bash
   yarn set version berry
   yarn set version stable

   // yarn 버전 확인
   yarn -v
   ```

2. workspace용 폴더 만들기

   ```bash
   mkdir apps
   mkdir packages
   mkdir packages/lib

   cd packages/lib
   yarn init -w
   ```

   - yarn workspace용 루트 초기화

   > https://yarnpkg.com/cli/init

   ```bash
   mv ssg-nextjs appa
   ```

   - ssg-nextjs 폴더 이동

3. packages.json 파일 수정

   - test-client-side-storage

     ```json
     "name": "test-client-side-storage",
     "packageManager": "yarn@3.4.1",
     "private": true,
     // workspaces에 apps, packages 추가
     "workspaces": [
         "apps/*",
         "packages/*"
     ],
     "devDependencies": {
         "typescript": "^4.9.3"
     }
     ```

   - packages/lib

   ```json
   // name 추가
   "name": "@testCS/lib",
   ```

4. packages/lib/src 폴더 생성 후 설정 및 component 추가

   ```bash
   mkdir packages/lib/src
   ```

   - packages/lib/tsconfig.json

   ```json
   {
     "$schema": "https://json.schemastore.org/tsconfig",
     "compilerOptions": {
       "strict": true,
       "useUnknownInCatchVariables": true,
       "allowJs": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "isolatedModules": true,
       "newLine": "lf",
       "module": "ESNext",
       "moduleResolution": "node",
       "target": "ESNext",
       "lib": ["ESNext", "dom"],
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "baseUrl": "./src",
       "noEmit": false,
       "incremental": true,
       "resolveJsonModule": true,
       "paths": {}
     },
     "exclude": ["**/node_modules", "**/.*/", "./dist", "./coverage"],
     "include": ["**/*.ts", "**/*.js", "**/.cjs", "**/*.mjs", "**/*.json"]
   }
   ```

   - packages/lib/src/AuthButton.tsx

   ```typescript
   // code 생성
   // react, styled-componets 라이브러리 사용
   ```

   - packages/lib/src/index.ts

   ```typescript
   export { AuthButton } from "./AuthButton";
   ```

   - 의존하는 라이브러리 추가

   ```bash
   yarn add react
   yarn add styled-components

   // 해당 라이브러리 설치시 종속되어 있는 다른 라이브러리도 설치하라고 하는데, 해달 라이브러리들도 설치함
   // 해야하는건지는 잘 모르겠음;;
   ```

5. 4번에서 생성한 컴포넌트 apps/ssg-nextjs에서 불러오기

   - apps/ssg-nextjs/pages/index.tsx

   ```typescript
   // ...
   import { AuthButton } from "@testCS/lib";

   // ...
   <AuthButton title={`TEST`} />;
   ```

   - apps/ssg-nextjs/next.config.js

   ```bash
   yarn add next-transpile-modules
   ```

   ```javascript
   // 추가
   const withTM = require("next-transpile-modules")(["@testCS/lib"]);
   const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
   };

   // 수정
   module.exports = withTM(nextConfig);
   ```

   - next-transpile-modules 플러그인을 이용해 "@testCS/lib" workspace에 있는 파일을 미리 트랜스파일 함
   - 자세한 내용은 ssg-nextjs의 [README](../../apps/ssg-nextjs/README.md#issue) 참조

6. 라이브러리 의존

   - /test-client-side-storage

   ```bash
   yarn workspace ssg-nextjs add @testCS/lib
   ```

7. test-client-side-storage에서 실행

   - 상태 갱신한 뒤 실행

   ```bash
   yarn

   yarn workspace ssg-nextjs run dev
   ```

## LOG

- export & export default 차이
  - export

    - 변수, 함수, class 등을 내보낼 때 사용

  - export default
    - 모듈을 내보낼 때 사용
    - 해당 문법으로 모듈을 내보내면 import시 {} 없이 사용 가능
  > https://ko.javascript.info/import-export#ref-4122
