import MarketItem from "./MarketItem"

function Market({ items }) {
    console.log(typeof marketModel)

    return (
        <section className="market">
            {
                items.map(
                    item => item.isSold ? <MarketItem item={item} key={item.title} /> : null
                )
            }
        </section>
    )
}

export default Market