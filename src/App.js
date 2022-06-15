import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import GalleryPage from "./pages/GalleryPage";
import DetailsPage from "./pages/DetailedInformation";
import { Route, Routes } from "react-router";

function App() {
  const [Theme, setTheme] = useState("Dark");
  const [isLoading, setisLoading] = useState(true)

  const [Data, setData] = useState([]);
  async function getAllFlags() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setData(response.data);
      setisLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllFlags();
  }, []);

  return (
    <div className={"App " + Theme}>
      <div className="Background">
        <Header Theme={Theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<GalleryPage Data={Data} Loading={isLoading} />} />
          <Route path="/countries/:name" element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
