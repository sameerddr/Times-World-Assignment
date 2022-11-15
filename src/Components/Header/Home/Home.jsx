import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Home.css";
import CountryCard from "./CountryCard";

function Home({ set }) {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);

  const api = "https://restcountries.com/v2/all?fields=name,region,flag";

  const getapi = async () => {
    const response = await axios.get(api);
    setdata(response.data);
  };

  useEffect(() => {
    getapi();
  }, []);

  const handlelogout = () => {
    set(false);
    navigate("/");
  };

  return (
    <>
      <div className="main">
        <div className="data1">
          <button onClick={handlelogout} className="logout">
            Log Out
          </button>
        </div>
        {data?.map(({ name, flag, region }) => (
          <CountryCard name={name} flag={flag} region={region} />
        ))}
      </div>
    </>
  );
}

export default Home;
