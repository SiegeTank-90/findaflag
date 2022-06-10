import React from "react";
import Card from "./Card"

function FlagGallery(props) {
    var find = props.Data[0];
    console.log(find)
    var Flags= []



    // props.Data.forEach((element) =>
    //     Flags.push(<Card
    //       Name={element.name.common}
    //       Flag={element.flag.png}
    //       pop={element.population}
    //       continent={element.region}
    //       capitol={element.capital[0]}
    //     />
    //   )
    // );




    return (
        <div className="Flex Wrap FlagContainer">
           {Flags}
        </div>
    )


}

export default FlagGallery