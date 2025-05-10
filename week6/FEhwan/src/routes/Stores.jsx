import DeliveryLocationHeaderBase from "../components/DeliveryLocationHeaderBase.jsx";
import { storeList } from "../models/stores.js";
import StoreRankingCard from "../components/StoreRankingCard.jsx";

const Stores = ({ category }) => {
    return (
        <div className="stores-container">
            {/* 상단 배달 위치 표시 */}
            <DeliveryLocationHeaderBase mainText={category} isDeleverd={false} />

            {/* 가게 카드 리스트 */}
            <div className="store-list">
                {
                    storeList.map((store) => (
                        <StoreRankingCard store={store} key={store.rank} />
                    ))
                }
            </div>
        </div>
    );
};

export default Stores;
