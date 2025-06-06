import FoodCell from "./FoodCell.jsx";
import './FoodCategory.css'
import {foodCategories} from "../models/stores.js";

const FoodCategory = () => {

    return (
        <>
            <div className="food-category">
                {
                    foodCategories.map((category) => (
                    <FoodCell categoryName={category.name}
                              categoryIcon={category.image}/>
                ))
                }
            </div>
        </>
    )
}

export default FoodCategory