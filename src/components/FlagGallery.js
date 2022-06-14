import React from "react";
import Card from "./Card";

function FlagGallery(props) {
  var Flags = [];

  for (var i = 0; i < props.Data.length; i++) {
    Flags.push(props.Data[i]);
  }
  var Cards = [];
  

  Flags.forEach((element) => {
    if (
      element.name.common.startsWith(props.SearchParm) === true &&
      element.region === props.Region
    ) {
      Cards.push(
        <Card
          Name={element.name.common}
          Flag={element.flags.png}
          pop={element.population}
          continent={element.region}
          capitol={element.capital}
        />
      );
    } else if (
      element.name.common.startsWith(props.SearchParm) === "" &&
      element.region === props.Region
    ) {
      Cards.push(
        <Card
          Name={element.name.common}
          Flag={element.flags.png}
          pop={element.population}
          continent={element.region}
          capitol={element.capital}
        />
      );
    } else if (
      element.name.common.startsWith(props.SearchParm) === true &&
      props.Region === ""
    ) {
      Cards.push(
        <Card
          Name={element.name.common}
          Flag={element.flags.png}
          pop={element.population}
          continent={element.region}
          capitol={element.capital}
        />
      );
    }
  });

  return <div className="Flex Wrap FlagContainer">{Cards}</div>;
}

export default FlagGallery;
