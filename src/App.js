import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import FlagGallery from "./components/FlagGallery";


function App() {

 const [Theme, setTheme] = useState("Light")  


  return (
    <div className={"App " + Theme}>
      <div className="Background" >
        <Header setTheme={setTheme} />
        <div className="Element">
          <Search />
          <Filter />
        </div>
        <FlagGallery />
      </div>
    </div>
  );
}

export default App;
