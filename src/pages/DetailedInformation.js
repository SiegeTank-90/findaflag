import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";

function DetailsPage() {
  const [Details, setDetails] = useState({});
  const [isLoading, setisLoading] = useState(true);

  async function getCountry() {
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/name/" + name
      );

      setDetails(response.data[0]);
      setisLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  let { name } = useParams();

  useEffect(() => {
    getCountry();
  }, []);

  console.log(Details);
  if (isLoading === true) {
    return <h1 className="ThemeTextColor"> Loading . . .</h1>;
  }

  //Breaking Down JSON DATA
  let NativeNameArray = Object.values(Details.name.nativeName);
  let NativeName = NativeNameArray[NativeNameArray.length - 1].common;
  let LanguagesArray = Object.values(Details.languages)
  let Languages = " ";
  console.log(LanguagesArray.length)
  for (let i = 0 ; i < LanguagesArray.length; i++) {
      Languages += LanguagesArray[i]
      if ( i != LanguagesArray.length-1) {
          Languages += ", "
      }
  }


  //Breaking Down JSON DATA

  return (
    <>
      <Link to="/" className="BackButton Element">
        Back
      </Link>
      <img className="DetailsFlag" src={Details.flags.png}></img>
      <div className="ThemeTextColor">
        <h1 className="DetailsName">{Details.name.common}</h1>
        <h3 className="Detailstitle">
          Native Name: <span className="DetailsInfo">{NativeName}</span>{" "}
        </h3>
        <h3 className="Detailstitle">
          Population:{" "}
          <span className="DetailsInfo">
            {new Intl.NumberFormat("en-us").format(Details.population)}
          </span>{" "}
        </h3>
        <h3 className="Detailstitle">
          Region: <span className="DetailsInfo">{Details.region}</span>{" "}
        </h3>
        <h3 className="Detailstitle">
          Sub-Region: <span className="DetailsInfo">{Details.subregion}</span>{" "}
        </h3>
        <h3 className="Detailstitle">
          Capitial: <span className="DetailsInfo">{Details.capital}</span>{" "}
        </h3>
        <h3 className="Detailstitle">
          Top Level Domain: <span className="DetailsInfo">{Details.tld}</span>{" "}
        </h3>
        <h3 className="Detailstitle">
          Currencies <span className="DetailsInfo">{Details.tld}</span>{" "}
        </h3>
        <h3 className="Detailstitle">
          Languages: <span className="DetailsInfo">{Languages}</span>{" "}
        </h3>
      </div>
    </>
  );
}

export default DetailsPage;
