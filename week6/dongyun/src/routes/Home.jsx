import {Outlet, useLocation} from "react-router-dom";
import * as S from "../components/shared/Home.styles.jsx"
import SectionHeader from "../components/shared/SectionHeader.jsx";
import DeliveryLocationHeaderBase from "../components/DeliveryLocationHeaderBase.jsx";
import FoodCategory from "../components/FoodCategory.jsx";
import OrderFooter from "../components/shared/OrderFooter.jsx";
import HomeIndicator from "../components/shared/HomeIndicator.jsx";
import {useEffect, useState} from "react";

const Home = () => {
    let location  = useLocation()
    const [isOrderNow, setIsOrderNow] = useState(false);
    useEffect(() => {
        setIsOrderNow(location.pathname === '/cart')
    }, [location.pathname]);

    return (
        <div style={{position:"absolute"}}>
            <SectionHeader/>
            <Outlet/>
            {isOrderNow ? null : <OrderFooter/>}
            <HomeIndicator/>
        </div>
    )
}

export default Home