import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  function handleClick() {
    props.setValue("");
  }

  function HandleChange(e) {
    let searchResult = e.target.value;
    searchResult = searchResult.charAt(0).toUpperCase() + searchResult.slice(1);
    props.setValue(searchResult);
  }
  function handleSubmit(e) {
    if (e.key === "Enter") {
      let searchResult = e.target.value;
      searchResult =
        searchResult.charAt(0).toUpperCase() + searchResult.slice(1);
      props.setValue(searchResult);
    }
  }

  return (
    <div className="SearchBar Flex Element">
      <div className="SearchIcon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        className="SearchInput ThemeTextColor"
        placeholder="Search for a Country..."
        value={props.value}
        onChange={HandleChange}
        onClick={handleClick}
        onKeyDown={handleSubmit}
      />
    </div>
  );
}

export default Search;
