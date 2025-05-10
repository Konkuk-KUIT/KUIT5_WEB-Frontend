- [ ]  요구사항 1 : `src/pages/Router.jsx`에 피그마에 주어진 화면 4개 Routing 하기
- ➡ main.jsx에서 Routing하면 어떤 것이 다를까?
- 
    - [ ]  / : <Home />
    - [ ]  /store : <Stores />
    - [ ]  /store/:storeId : <Store />
    - [ ]  /cart : <Cart />
    - [ ]  버튼 눌렀을 때 `<Link>`로 알맞은 화면으로 이동하기
- [ ]  요구사항 2 : 피그마에 주어진 화면 Styling 하기
    - Styling할 때 안에 이미지랑 text 내용은 `src/models/stores.js` 안의 더미 데이터를 불러와서 채워주세요!
      없는 것은 비워 두거나 아무 데이터나 넣어도 됩니다.
      (다음에 fetch로 받아와서 채울 예정입니다!!)
    - 공통 부분은 **컴포넌트로 최대한 분리** 해주세요. 컴포넌트 후보는 참고사항이고, 스스로 생각한 대로 해주시면 됩니다!

      [컴포넌트 후보]

        - 페이지 공통 : 파랑 버튼(Button.jsx), 상단바, 하단바(OrderBar.jsx)
        - 개별 페이지 :
            - / : 피자, 샐러드 들어가는 네모네모 버튼
            - /store : 리스트 가로 한 칸
            - /store/:storeId : 리스트 가로 한 칸 (MenuItem.jsx)
            - /cart : 리스트 가로 한 칸