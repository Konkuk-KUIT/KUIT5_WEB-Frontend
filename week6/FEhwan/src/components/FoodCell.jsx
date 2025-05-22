import './FoodCell.css'
import {useNavigate} from "react-router-dom";

const FoodCell = ({categoryName, categoryIcon}) => {
    const navigate = useNavigate();
    const goToStore = () => {                                    // 3
        navigate('/store');
    };
    return (
        <>
            <div className="food-cell" onClick={goToStore} >
                <div className="food-category-icon">
                    <img src={`${categoryIcon}`} alt="icon"/>
                </div>

                <span className="food-category-name">{categoryName}</span>
            </div>
        </>
    )
}

export default FoodCell