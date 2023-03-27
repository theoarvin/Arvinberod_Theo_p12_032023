import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import { getDataUser } from "./data/callApi";
import { userContext } from "./contexts/appContext";
import mockApi from "./mock/mockApi.json";

const App = () => {
  const [data, setData] = useState([]);

  /**
   * function to get data from api
   * @returns {Array} data from api
   */
  const getData = async () => {
    const dataFetch = await getDataUser();
    setData(dataFetch);
  };

  /**
   * function to get data from mock api
   * @returns {Array} data from mock api
   */
  const getMockData = async () => {
    setData(mockApi);
  };

  useEffect(() => {
    getData();
    //getMockData();
  }, []);

  return (
    <userContext.Provider value={data}>
      <Routes />
    </userContext.Provider>
  );
};

export default App;
