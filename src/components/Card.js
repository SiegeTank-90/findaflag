import React from "react";

function Card(props) {
  return (
    <div className="CardContainer Element">
      <div className="ImageContainer">
        <img src={props.Flag} alt="Flag of CountryName"></img>
      </div>
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
