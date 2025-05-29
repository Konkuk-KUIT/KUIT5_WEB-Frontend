import {useNavigate} from "react-router-dom";
import * as S from './FoodCell.style.tsx'

type FoodCellProps = {
    categoryName:string
    categoryIcon:string
}

const FoodCell = ({categoryName, categoryIcon}:FoodCellProps) => {
    const navigate = useNavigate();
    const handleClick = () => {                                    // 3
        navigate('/store', {
            state: {
                categoryName : categoryName
            },
        });
    };
    return (
        <S.FoodCellWrapper onClick={handleClick}>
            <S.FoodCategoryIcon>
                <img src={`${categoryIcon}`} alt="icon"/>
            </S.FoodCategoryIcon>

            <S.FoodCategoryName>{categoryName}</S.FoodCategoryName>
        </S.FoodCellWrapper>
    )
}

export default FoodCell