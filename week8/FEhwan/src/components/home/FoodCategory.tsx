import FoodCell from "./FoodCell.jsx";
import {getFoodCategory} from "../../apis/food-category.ts";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {foodCategory} from "../../types/types.ts";

const FoodCategoryWrapper = styled.div`
    display: grid;
    align-items: flex-start;
    column-gap: 9px;
    row-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    margin: 70px 24px 156px;
    width: 342px;
    height: 326px;
    box-sizing: border-box;
`;

const FoodCategory = () => {
    const [foodCategories, setFoodCategories] = useState<foodCategory[] | null>([])

    useEffect(() => {
        getFoodCategory().then(
            setFoodCategories
        ).catch(console.error)
    }, [])

    return (
        <>
            <FoodCategoryWrapper>
                {
                    foodCategories &&
                    foodCategories.map((category) => (
                        <FoodCell categoryName={category.name}
                                  categoryIcon={category.image}/>
                    ))
                }
            </FoodCategoryWrapper>
        </>
    )
}

export default FoodCategory