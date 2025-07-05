import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/foods");
      console.log("Fetched food list:", response.data);

      if (response.status === 200) {
        setList(response.data);
      } else {
        toast.error("Error while reading the foods.");
      }
    } catch (error) {
      console.error("Error fetching foods:", error);
      toast.error("Error while reading the foods.");
    }
  };

  useState(() => {
    fetchList();
  });

  return <div>ListFood</div>;
};

export default ListFood;
