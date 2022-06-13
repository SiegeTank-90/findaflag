import React from "react";

function Card(props) {
  return (
    <div className="CardContainer Element">
      <img
        className="FlagImg"
        src={props.Flag}
        alt={"Flag of " + props.Name}
      ></img>

      <div className="InformationContainer">
        <h3 className="CountyName">{props.Name}</h3>
        <h3 className="Population">{"Population " + props.pop} </h3>
        <h3 className="CountryRegion">{"Region " + props.continent} </h3>
        <h3 className="Capitol">{"Captiol " + props.capitol} </h3>
      </div>
    </div>
  );
}
export default Card;
