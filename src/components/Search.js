import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  function handleClick() {
    props.setValue("");
  }

  function HandleChange(e) {
    props.setValue(e.target.value);
  }
  function handleSubmit(e) {
    if (e.key === "Enter") {
      props.setValue("");
      console.log("submited");
    }
  }

  return (
    <div className="SearchBar Flex Element">
      <div className="SearchIcon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        className="SearchInput ThemeTextColor"
        value={props.value}
        onChange={HandleChange}
        onClick={handleClick}
        onKeyDown={handleSubmit}
      />
    </div>
  );
}

export default Search;
