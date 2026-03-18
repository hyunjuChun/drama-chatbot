# drama chatbot
# AI project

기획의도
1. 리액트와 Ai api의 사용경험
2. ui는 리액트로 개발
3. 인공지능에게 드라마 주인공의 각본을 학습시켜서 대화가 가능하도록 만들어보기

구조
- 드라마 / 등장인물 고르는 창(ex. 드라마 - 주인공 1, 드라마 - 주인공 2, 드라마 - 주인공 3...
드라마는 따로 카테고리 분류 x, 이거까지 하면 너무 복잡해짐)
- 이후 대화창
- 대화창에서 대화를 하다가 뒤로가기를 누르면 대화는 모두 초기화됨, 대화 기억 기능 x


server
 │
 ├ node_modules
 ├ model-test.js
 ├ test-gemini.js  - render에서 실행시키?려는것
 ├ test-llm.js  - 회사거, 베포 x
 ├ package-lock.json
 └ package.json


src
 ├ pages
 │   ├ CharacterSelect.jsx   (캐릭터 선택 화면)
 │   └ Chat.jsx              (대화 화면)
 │
 ├ components
 │   ├ CharacterCard.jsx
 │   ├ ChatMessage.jsx
 │   ├ ChatInput.jsx
 │
 ├ data
 │   └ Characters.js
 │
 ├ api
 │   └ ChatApi.js
 │
 └ assets
     ├ css
     └ images
 │
 │
 ├ App.jsx
 ├ index.css
 └ main.jsx