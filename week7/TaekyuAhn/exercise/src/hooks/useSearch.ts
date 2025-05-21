import React, { useState } from "react";
import { KUIT_WEB } from "../data";
import type { dataType } from "../App";

type Props = {
  initial: dataType[];
};

const useSearch = ({ initial }: Props) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(initial);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleBtn = () => {
    setFilter(initial.filter((member) => member.name.toLowerCase().includes(search.toLowerCase())));
  };
  return { search, filter, handleSearch, handleBtn };
};

export default useSearch;
