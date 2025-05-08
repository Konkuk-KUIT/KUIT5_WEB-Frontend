
function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnly}) {
    const handleTextChange = (e) => onFilterTextChange(e.target.value)
    const handleCheckboxChange = (e) => onInStockOnly(e.target.checked)

    return (
        <form>
            <input type={"text"}
                   placeholder={"Search ... "}
                   value={filterText}
                   onChange={handleTextChange} />
            <label>
                <input type={"checkbox"}
                       checked={inStockOnly}
                       onChange={handleCheckboxChange} />
                Only show products in stock
            </label>
        </form>
    )
}

export default SearchBar