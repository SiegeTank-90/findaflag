import React, { useState } from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import FlagGallery from "../components/FlagGallery";

function DetailsPage(props) {
  const [SearchParm, setSetParm] = useState("");
  const [SearchRegion, setSearchRegion] = useState("");

  function FilterByRegion(region) {
    setSearchRegion(region);
    console.log("Filtered " + region);

    return null;
  }

  if (props.Loading == true) {
    return <h1 className="ThemeTextColor">Loading . . .</h1>;
  }

  return (
    <>
      <div className="Flex Wrap">
        <Search value={SearchParm} setValue={setSetParm} />
        <Filter Filter={FilterByRegion} />
      </div>
      <FlagGallery
        Data={props.Data}
        SearchParm={SearchParm}
        Region={SearchRegion}
      />
    </>
  );
}

export default DetailsPage;
