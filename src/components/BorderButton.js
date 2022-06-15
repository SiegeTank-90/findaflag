import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function BorderButton(props) {
  const [Name, setName] = useState("");

  async function getCountryName() {
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/alpha/" + [props.code]
      );

      setName(response.data[0].name.common);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountryName();
  }, []);

  return (
    <Link className="BorderButton Element" to={`/countries/${Name}`}>
      <h3 className="BorderButtonContent">{Name}</h3>
    </Link>
  );
}

export default BorderButton;
