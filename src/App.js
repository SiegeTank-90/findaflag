import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import FlagGallery from "./components/FlagGallery";

function App() {
  const [Theme, setTheme] = useState("Dark");
  const [SearchParm, setSetParm] = useState('');
  const [SearchRegion, setSearchRegion] = useState('')
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function getAllFlags() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getAllFlags();
  }, []);

  function FilterByRegion(region) {
    
    setSearchRegion(region)
    console.log("Filtered " + region);

    return null;
  }


  return (
    <div className={"App " + Theme}>
      <div className="Background">
        <Header Theme={Theme} setTheme={setTheme} />
        <div className="Flex Wrap">
          <Search value={SearchParm} setValue={setSetParm} />
          <Filter Filter={FilterByRegion} />
        </div>
        <FlagGallery Data={Data} SearchParm={SearchParm} Region={SearchRegion} />
      </div>
    </div>
  );
}

export default App;
