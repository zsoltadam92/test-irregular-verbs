import React from "react";

const SearchContext = React.createContext({
  searchTerm: "",
  searchChange: () => {},
});

export default SearchContext;
