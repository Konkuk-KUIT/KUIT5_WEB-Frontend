import {Outlet} from "react-router-dom";
import * as S from "../components/shared/Home.styles.jsx"
import SectionHeader from "../components/shared/SectionHeader.jsx";
import DeliveryLocationHeaderBase from "../components/DeliveryLocationHeaderBase.jsx";
import FoodCategory from "../components/FoodCategory.jsx";
import OrderFooter from "../components/shared/OrderFooter.jsx";
import HomeIndicator from "../components/shared/HomeIndicator.jsx";

const Home = () => {

    return (
        <>
            <SectionHeader/>

            {/*<DeliveryLocationHeaderBase/>*/}
            {/*<FoodCategory/>*/}

            <Outlet/>

            <OrderFooter/>
            <HomeIndicator/>
        </>
    )
}

export default Home