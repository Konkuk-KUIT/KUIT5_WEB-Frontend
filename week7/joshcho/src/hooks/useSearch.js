import React, { useState } from "react";

const useSearch = (initial) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(initial);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleBtn = () => {
    setFilter(initial.filter((member) => member.name.includes(search)));
  };
  return { search, filter, handleSearch, handleBtn };
};

export default useSearch;
