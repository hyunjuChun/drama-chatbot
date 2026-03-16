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


# 데이터 흐름

CharacterSelect
   ↓
캐릭터 선택
   ↓
Chat (useParams로 캐릭터 id 받음)
   ↓
ChatInput → 메시지 입력
   ↓
messages state 저장
   ↓
ChatMessage로 화면 출력
   ↓
ChatApi → AI 응답


# 실제 동작 구조

characters.js
   ↓
CharacterSelect.jsx
   ↓
CharacterCard 클릭
   ↓
/chat/:id 이동
   ↓
Chat.jsx
   ↓
ChatInput 입력
   ↓
messages state
   ↓
ChatMessage 출력