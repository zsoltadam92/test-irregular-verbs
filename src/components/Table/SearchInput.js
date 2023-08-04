import { useContext } from "react";
import SearchContext from "../../store/search_context";

const SearchInput = () => {
  const searchCtx = useContext(SearchContext);
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchCtx.searchTerm}
        onChange={searchCtx.searchChange}
      />
    </>
  );
};

export default SearchInput;
