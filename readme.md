# ES6 기준 Express 서버 초기 설정하기

---

## INDEX

- [clone을 통한 설정](#clone을-통한-설정)

- [프로젝트 직접 만들기](#프로젝트-직접-만들기)

---

## clone을 통한 설정

1. 프로젝트를 저장하기 원하는 디렉터리를 생성합니다.

2. 해당 디렉터리에서 git bash를 실행하시거나 터미널 혹은 명령 프롬프트 창을 실행한 뒤 해당 디렉터리로 이동합니다.

3. 해당 디렉터리 위치에서 git clone을 진행합니다.

```cmd
>git clone https://github.com/dorakang612/learn_express_setting.git
```

4. 원하는 이름으로 프로젝트 이름을 수정합니다.

   - 루트 폴더 learn_express_setting : 원하는 이름으로 프로젝트이름을 바꿔 주시면 됩니다.
   - package.json : "name"의 값을 위에서 변경한 프로젝트 이름으로 변경해주시면 됩니다.

5. 패키지들을 설치합니다.

```cmd
>npm i
```

6. 빠져있는 파일들 생성하기

   - .env : 환경변수를 담는 파일로 본인이 사용하시는 값들 중 타인에게 노출되면 안되는 것들을 담아 둡니다. dotenv 모듈을 사용할 때 필요한 파일입니다.

7. 본인의 목적에 맞게 프로젝트를 수정합니다.

---

## 프로젝트 직접 만들기

1. learn_express_setting 이라는 폴더를 만듭니다.

2. package.json을 생성합니다.

```cmd
npm init -y
```

따로 특정지어야 할 것이 있으시다면 -y 옵션을 입력하지 않고서 진행하시면 됩니다.

3. express 프로젝트 구조를 잡습니다.

```
learn_express_setting
 ㄴsrc                   // 주요 기능을 하는 JavaScript 파일들을 모아두는 폴더입니다. 변환을 쉽게 진행하기 위해서 모아둡니다.
   ㄴroutes              // 라우터들이 있는 폴더입니다.
     ㄴindex.js          // 진입점 라우터입니다.
   ㄴapp.js              // 프로젝트의 시작점이 되는 파일입니다.
 ㄴpublic                // 클라이언트에서 접근 할 수 있는 폴더입니다.
   ㄴimages
   ㄴjavascript
   ㄴstyles
 ㄴmodels                // DB에 관한 스키마와 DB연결 코드가 있는 폴더입니다.
 ㄴviews                 // 탬플릿들이 있는 폴더입니다.
 ㄴpackage.json          // 프로젝트의 명세서입니다. 프로젝트의 이름, 버전 및 사용된 모듈 등을 담고있습니다.
 ㄴ.env                  // 환경변수들을 넣어두는 파일 입니다. DB 계정 정보같은 것들을 넣어 둘 수 있습니다.
 ㄴ.gitignore            // 선택사항으로 깃을 사용하신다면 git에 올릴 때 제외할 파일, 폴더들을 명시해 놓는 파일 입니다.
 ㄴreadme.md             // 프로젝트의 설명 등을 적어두는 파일 입니다.
```

4. 필요한 모듈을 설치합니다.

   **서버**

   ```cmd
   >npm i [package_name]
   ```

   - express : 서버프레임워크
   - cookie-parser : 쿠키 해석 미들웨어
   - express-session : 세션 관리용 미들웨어
   - mongoose : DB연결 모듈
   - morgan : 요청에 대한 정보 기록 미들웨어
   - socket.io : 웹 소켓 통신을 위한 모듈
   - dotenv : 환경 변수 관리를 위한 모듈입니다.
   - pug : 탬플릿 엔진이되는 모듈입니다.

   **babel**

   ES6 이상의 JavaScript에서 제공하는 import와 export를 사용하기 위해서 JS변환기인 babel을 설치합니다.

   ```cmd
   >npm i --save-dev @babel/cli @babel/core @babel/preset-env @babel/node
   ```

   - babel/core : babel의 주요기능을 담고있는 모듈입니다.
   - babel/cli : 명령프롬프트 창에서 babel을 사용할 수 있게 해주는 모듈입니다.
   - babel/preset-env : 대상으로하는 브라우저에 알맞는 최신 자바스크립트로 변환할 수 있게 해주는 설정 모듈입니다.
   - babel/node : babel/cli에서 독립된 모듈로, Node.js의 cli처럼 동작하나 presets와 plugins를 바탕으로 컴파일링한 후에 동작하는 기능이 추가되어있습니다.

5. 초기 서버 설정을 합니다.

- app.js : 서버 설정을 합니다.
- views : express 서버 실행시 진입할 화면들입니다. pug 템플릿 엔진을 사용하기 때문에 그에 맞는 문법으로 작성합니다.
- routes : express 서버로 접속시 해당 주소에 맞는 탬플릿을 전달해줄 라우터입니다.

6. babel 설정

.babelrc 파일을 생성하고 , package.json을 수정합니다.

- .babelrc : 바벨 설정파일로, preset을 env로 해줍니다.
- package.json : 바벨을 통해서 실행하도록 scripts부분을 수정합니다. 개발용과 배포용으로 일단 간단하게 수정했습니다. 추후 개선예정입니다.
