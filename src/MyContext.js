import { createContext, useContext, useState, useEffect } from "react";
import STATIC_DATA from "./pro.json";
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(STATIC_DATA);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/$£$");
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        setMyData(STATIC_DATA);
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
