import {Outlet, useLocation} from "react-router-dom";
import SectionHeader from "../components/shared/SectionHeader.tsx";
import OrderFooter from "../components/shared/OrderFooter.tsx";
import HomeIndicator from "../components/shared/HomeIndicator.tsx";
import {useEffect, useState} from "react";
import styled from "styled-components";

const Layout = styled.div`
    width: 390px;
    height: 798px;
`

const Home = () => {
    let location  = useLocation()
    const [isOrderNow, setIsOrderNow] = useState(false);
    useEffect(() => {
        setIsOrderNow(location.pathname === '/cart')
    }, [location.pathname]);

    return (
        <Layout>
            <SectionHeader/>
            <Outlet/>
            {isOrderNow ? null : <OrderFooter/>}
            <HomeIndicator/>
        </Layout>
    )
}

export default Home