import { createContext, useContext, useState, useEffect } from "react";
import STATIC_PRO_DATA from "./pro.json";
import STATIC_VOL_DATA from "./volunteering.json";
const getStaticData = () => {
  const currentUrl = window.location.href;
  const isVolunteering = currentUrl.includes("volunteering");
  return isVolunteering;
};

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/$£$");
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.log(getStaticData());

        setMyData(getStaticData() ? STATIC_VOL_DATA : STATIC_PRO_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ myData, setMyData, loading }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
