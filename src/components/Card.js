import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link className="CardContainer Element" to={`countries/${props.Name}`}>
      <img
        className="FlagImg"
        src={props.Flag}
        alt={"Flag of " + props.Name}
      ></img>

      <div className="InformationContainer">
        <h3 className="CountyName">{props.Name}</h3>
        <h3 className="Population">{"Population : " + new Intl.NumberFormat('en-us').format(props.pop)} </h3>
        <h3 className="CountryRegion">{"Region : " + props.continent} </h3>
        <h3 className="Capitol">{"Capitol : " + props.capitol} </h3>
      </div>
    </Link>
  );
}
export default Card;
