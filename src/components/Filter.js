import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Filter(props) {
  function HandleClick() {
    if (isOpen === true) {
      setisOpen(false);
    } else setisOpen(true);
  }

  const ClosedState = (
    <div className="TopLayer">
      <div className="Element Border-R">
        <div onClick={HandleClick} className="FilterButton">
          <p className="FilterText">Filter By Region</p>
          <div className="FilterIcon visiblityOff">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
    </div>
  );

  const OpenState = (
    <div className="TopLayer">
      <div className="Element Border-R">
        <div onClick={HandleClick} className="FilterButton">
          <p className="FilterText">Filter By Region</p>
          <div className="FilterIcon">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className="Element Border-R">
        <ul className="RegionList">
          <li className="Region">Africa</li>
          <li className="Region">America</li>
          <li className="Region">Asia</li>
          <li className="Region">Europe</li>
          <li className="Region">Oceania</li>
        </ul>
      </div>
    </div>
  );

  const [isOpen, setisOpen] = useState(true);

  return <div className="Filter Flex">{isOpen ? ClosedState : OpenState} </div>;
}

export default Filter;
