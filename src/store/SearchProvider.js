import { useState } from "react";
import SearchContext from "./search_context";

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchContext = {
    searchTerm,
    searchChange: handleSearchChange,
  };

  return (
    <SearchContext.Provider value={searchContext}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
