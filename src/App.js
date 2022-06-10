import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import FlagGallery from "./components/FlagGallery";

function App() {
  const [Theme, setTheme] = useState("Dark");
  const [SearchParm, setSetParm] = useState("Search for a Country...");
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function getRandomFlags() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getRandomFlags();
  }, []);

  function FilterByRegion() {
    console.log("Filter");
    return null;
  }

  return (
    <div className={"App " + Theme}>
      <div className="Background">
        <Header Theme={Theme} setTheme={setTheme} />
        <div className="Flex">
          <Search value={SearchParm} setValue={setSetParm} />
          <Filter Filter={FilterByRegion} />
        </div>
        <FlagGallery Data={Data} />
      </div>
    </div>
  );
}

export default App;
