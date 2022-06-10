import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  if (props.Theme === "Dark") {
    var DisplayName = "Light";
    DisplayIcon = <FontAwesomeIcon icon={faSun} />;
  } else {
    DisplayName = "Dark";
    var DisplayIcon = <FontAwesomeIcon icon={faMoon} />;
  }

  function handleClick(e) {
    if (props.Theme === "Dark") {
      props.setTheme("Light");
    } else props.setTheme("Dark")
  }

  return (
    <header className="Element Flex Header">
      <h1 className="Title">Where in the World?</h1>
      <div onClick={handleClick} className="ThemeChangerButton">
        {DisplayIcon}
        <p className="ThemeName">{DisplayName} Mode</p>
      </div>
    </header>
  );
}

export default Header;
