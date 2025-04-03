# KUIT5_WEB-Frontend

### 3주차

js 배열의 index 번 째 삭제하기
-> array.splice(자르기 시작하는 index, 삭제할 요소 개수)

태그 내의 text 값의 종류와 차이점

- .value
- .text
- .textContent
- .innerHTML
- placeHolder
- ***

input 태그의 'required' 속성?

preventDefault 메소드?

spread 연산자를 배열로 한정해서 생각했던 점이 아쉬움.

태그 교체하기
-> replaceWith 메소드
=> 삭제하고 추가를 간단히 한 느낌이라 새로 추가되는 코드의 속성을 상세히 작성해야함.

렌더링을 잘 활용하면 복잡한 조작이 간결해짐.

### 2주차

이번에 활용할 이미지 파일은 간단한 아이콘 같은 경우 svg 확장자 이미지가 유용
svg는 가장 최근에 나온 이미지 파일 형식으로 여러 장점을 가진다.

1. jpg와 달리 투영성을 지원한다 == 투명 배경 등 가능
2. 원래의 크기보다 크게 표현되어도 깨지지 않는 반응형 기능을 지원한다.
3. png보다 용량은 작고, 출력은 빠르고, 애니메이션 기능도 지원한다.

- 단, 복잡한 이미지의 경우 용량이 커지고 출력이 느려지므로 신경써야 한다.

- gap 과 padding, margin의 차이?
- figma style 복사 시 px 단위 깜박하는 것 주의..
  - 그렇다고 font-weight에 px 붙이면 적용 안된다.
- 왜 padding 포함하면 width보다 커짐?
  - width, height는 content box에만 적용되어, border와 padding에는 계산 밖
  - box-sizing 활용
- border style을 지정하지 않으면 다른 설정을 아무리 해도 안보임.

```
#특정 브랜치 git clone
git clone --branch <branchname> <remote-repo-url>

#특정 브랜치 git push
git push <원격저장소 이름 clone 했으면 그냥 origin> <branch이름>
```
