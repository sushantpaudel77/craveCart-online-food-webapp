import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/foods");
      setFoodList(response.data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };
  0;

  const contextValue = {
    foodList,
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
    }

    loadData();
  }, []);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
