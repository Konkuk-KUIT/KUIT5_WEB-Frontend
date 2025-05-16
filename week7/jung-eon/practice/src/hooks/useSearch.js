import { useState } from "react";

const useSearch = (initial) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(initial);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleBtn = () => {
    setFiltered(initial.filter((member) => member.name.includes(search)));
  };

  return { search, filtered, handleSearch, handleBtn };
};

export default useSearch;
