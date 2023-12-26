import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper, SearchField, StyledInputBase } from "./styles";
import { SearchbarProps } from "./types";
import { debounce } from "lodash";

const Searchbar: React.FC<SearchbarProps> = ({ width, handleSearchbar }) => {
  const debouncedHandleSearchChange = debounce((searchValue: string) => {
    handleSearchbar && handleSearchbar(searchValue);
  }, 300);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleSearchChange(event.target.value);
  };

  return (
    <>
      <SearchField width={width || 100}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          width={width ? width * 0.5 : 50}
          onChange={handleSearchChange}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchField>
    </>
  );
};

export default Searchbar;
