import FoodCategory from "./FoodCategory.jsx";
import * as S from "./GreetingPage.style.tsx"

const GreetingPage = () => {

    return (
        <>
            <S.Greeting>
                <S.MainText>오늘은 무엇을 먹을까요?</S.MainText>
                <S.SubText>한남중앙로 40길 (한남 빌리지)(으)로 배달 {">"}</S.SubText>
            </S.Greeting>
            <FoodCategory/>
        </>
    )
}

export default GreetingPage