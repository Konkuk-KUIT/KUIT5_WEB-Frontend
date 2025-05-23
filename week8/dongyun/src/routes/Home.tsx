import {Outlet, useLocation} from "react-router-dom";
import SectionHeader from "../components/shared/SectionHeader.tsx";
import OrderFooter from "../components/shared/OrderFooter.tsx";
import HomeIndicator from "../components/shared/HomeIndicator.tsx";
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