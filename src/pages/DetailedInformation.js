import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import BorderButton from "../components/BorderButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DetailsPage() {
  const { name } = useParams();
  const [Details, setDetails] = useState({});
  const [isLoading, setisLoading] = useState(true);

  async function getCountryDetails() {
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/name/" + name + "?fullText=True"
      );

      setDetails(response.data[0]);
      setisLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountryDetails();
  }, [name]);

  if (isLoading === true) {
    return <h1 className="ThemeTextColor"> Loading . . .</h1>;
  }

  //Breaking Down JSON DATA
  let NativeNameArray = Object.values(Details.name.nativeName);
  let NativeName = NativeNameArray[NativeNameArray.length - 1].common;
  let LanguagesArray = Object.values(Details.languages);
  let Languages = " ";
  for (let i = 0; i < LanguagesArray.length; i++) {
    Languages += LanguagesArray[i];
    if (i != LanguagesArray.length - 1) {
      Languages += ", ";
    }
  }
  let Currencies = "No Currency ";
  if (Details.currencies != null) {
    let CurrenciesArray = Object.values(Details.currencies);
    for (let i = 0; i < CurrenciesArray.length; i++) {
      Currencies += CurrenciesArray[i].name;
      if (i != CurrenciesArray.length - 1) {
        Currencies += ", ";
      }
    }
  }
  let BorderButtonArray = [];
  if (Details.borders != null) {
    let BorderingArray = Object.values(Details.borders);
    for (let i = 0; i < BorderingArray.length; i++) {
      BorderButtonArray.push(<BorderButton code={BorderingArray[i]} />);
    }
  }
  var Capitol = "No Capitol";
  if (Details.capital != undefined) {
    Capitol = Details.capital;
  }

  //Breaking Down JSON DATA

  return (
    <div className="DetailsContainer">
      <Link to="/" className="BackButton Element">
        <FontAwesomeIcon icon={faArrowLeft} /> <p className="Back">Back</p>
      </Link>
      <img
        className="DetailsFlag Element"
        alt="Flag"
        src={Details.flags.png}
      ></img>
      <div className="ThemeTextColor DetialsTextContainer">
        <h1 className="DetailsName">{Details.name.common}</h1>
        <div className="DetailsBlock">
          <h3 className="Detailstitle">
            Native Name : <span className="DetailsInfo">{NativeName}</span>{" "}
          </h3>
          <h3 className="Detailstitle">
            Population :
            <span className="DetailsInfo">
              {" " + new Intl.NumberFormat("en-us").format(Details.population)}
            </span>
          </h3>
          <h3 className="Detailstitle">
            Region : <span className="DetailsInfo">{Details.region}</span>{" "}
          </h3>
          <h3 className="Detailstitle">
            Sub-Region :{" "}
            <span className="DetailsInfo">{Details.subregion}</span>{" "}
          </h3>
          <h3 className="Detailstitle">
            Capitol : <span className="DetailsInfo">{Capitol}</span>{" "}
          </h3>
        </div>
        <div className="DetailsBlock">
          <h3 className="Detailstitle">
            Top Level Domain :{" "}
            <span className="DetailsInfo">{Details.tld}</span>{" "}
          </h3>
          <h3 className="Detailstitle">
            Currencies : <span className="DetailsInfo">{Currencies}</span>{" "}
          </h3>
          <h3 className="Detailstitle">
            Languages : <span className="DetailsInfo">{Languages}</span>{" "}
          </h3>
        </div>
        <div>
          <h2>Border Countries</h2>
          <div className="Flex BorderButtonContainer ">{BorderButtonArray}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
