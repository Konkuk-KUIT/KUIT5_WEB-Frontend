import { useState } from "react";

const useSearch = (initial) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [filter, setFilter] = useState(initial);
  const handleBtn = () => {
    setFilter(initial.filter((member) => member.name.includes(search)));
  };
  return { search, filter, handleSearch, handleBtn };
};

export default useSearch;