import styled from "styled-components";
import DeliveryLocationHeaderBase from "../DeliveryLocationHeaderBase.jsx";
import FoodCategoryBase from "../FoodCategory.jsx";
import OrderFooterBase from "./OrderFooter.jsx";
import SectionHeaderBase from "./SectionHeader.jsx";

export const SectionHeader = styled(SectionHeaderBase)`
    div{
        background-color: #000;
    }
`

export const DeliveryLocationHeader = styled(DeliveryLocationHeaderBase)`
        background-color: #000;
`

export const FoodCategory = styled(FoodCategoryBase)`
    background-color: #123;
`

export const OrderFooter = styled(OrderFooterBase)`
    background-color: #0f1;
`

