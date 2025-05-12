import DeliveryLocationHeaderBase from "./DeliveryLocationHeaderBase.jsx";
import FoodCategory from "./FoodCategory.jsx";

const GreetingPage = () => {

    return (
        <>
            <DeliveryLocationHeaderBase mainText="오늘은 무엇을 먹을까요?" isDeleverd={true}/>
            <FoodCategory/>
        </>
    )
}

export default GreetingPage