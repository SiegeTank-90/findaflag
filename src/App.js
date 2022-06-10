import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import FlagGallery from "./components/FlagGallery";

function makeId(length) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function App() {
  useEffect(() => {
    async function getRandomFlags() {
      try {
        const response = await axios.get(
          {"https://restcountries.com/v3.1/alpha?codes=" +
            makeId(3) +
            "," +
            makeId(3) +
            "," +
            makeId(3) +
            "," +
            makeId(3) +
            "," +
            makeId(3) +
            "," +
            makeId(3) +
            "," +
            makeId(3) +
            "," +
            makeId(3)}
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getRandomFlags();
  }, []);

  const [Theme, setTheme] = useState("Dark");
  const [SearchParm, setSetParm] = useState("Search for a Country...");

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
        <FlagGallery Data="" />
      </div>
    </div>
  );
}

export default App;
