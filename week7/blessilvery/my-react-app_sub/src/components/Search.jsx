import React from 'react'

const Search = ({search,handleSearch,handleBtn}) => {
  return (
    <>
        <input value={search} onChange = {handleSearch}/>
        <button onClick={handleBtn}>검색</button>
    </>
  )
}

export default Search