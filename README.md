# drama chatbot
# AI project

기획의도
1. 리액트와 Ai api의 사용경험
2. 프레임워크로 리액트를 사용, 개발 자체를 클로드 또는 커서로 해볼 것
3. 인공지능에게 드라마 주인공의 각본을 학습시켜서 대화가 가능하도록 만들어보기

구조
- 드라마 / 등장인물 고르는 창
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
 │   ├ CharacterSelect.jsx         캐릭터 선택 화면
 │   └ Chat.jsx                    대화 화면
 │
 │
 ├ components
 │   ├ CharacterCard.jsx
 │   ├ ChatMessage.jsx
 │   ├ ChatInput.jsx
 │
 │
 ├ data
 │   └ Characters.js
 │
 │
 ├ api
 │   └ ChatApi.js
 │
 │
 ├ assets
 │   ├ css
 │   └ images
 │
 │
 ├ App.jsx
 ├ index.css
 └ main.jsx




# 과정

1. node로 리액트 개발, 프레임워크 설정 전에 커서로 개발 자체를 해야하는 줄 몰랐다
2. Ai api를 사용할 수 있었다
3. gemini, 사내 llm 두 개를 각각 사용해볼 수 있었다
4. 대화하는 건 챗지피티와 비슷한 느낌이 들었지만 어쨌거나 각본을 학습시킨 ai로 챗봇을 구현하면서 퍼블만 할 때는 경험할 수 없었던 개발과 ai 사용의 원리를 조금이나마 파악했다