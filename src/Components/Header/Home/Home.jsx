import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Home.css";

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
        {data?.map((item) => (
          <div className="data" key={item.name}>
            <div className="container">
              <img
                src={item.flag}
                alt="Error-Loading-Image"
                className="image"
              />
              <div className="detail">
                <h6>{item.name}</h6>
                <h5>{item.region}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
