import DeliveryLocationHeaderBase from "../components/DeliveryLocationHeaderBase.jsx";
import {storeList} from "../models/stores.js"
import StoreRankingCard from "../components/StoreRankingCard.jsx";

const Stores = ({category}) => {

    return (
        <>
            <DeliveryLocationHeaderBase mainText={category} isDeleverd={false}/>
            {
                storeList.map((store )=>{
                    console.log(store)
                    return (
                        <StoreRankingCard store={store} key={store.rank}/>
                    )
                })
            }

        </>
    )
}

export default Stores