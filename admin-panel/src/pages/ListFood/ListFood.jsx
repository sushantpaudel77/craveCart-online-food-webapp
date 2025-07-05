import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./ListFood.css";
import { deleteFood, getFoodList } from "../../services/foodService";

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const data = await getFoodList();
      setList(data);
    } catch (error) {
      toast.error("Error while reading the foods");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId) => {
    try {
      const success = await deleteFood(foodId); // make sure you're passing foodId
      if (success) {
        toast.success("Food item has been successfully removed.");
        fetchList(); // refresh the list
      } else {
        toast.error("Failed to remove the food item. Please try again.");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      toast.error("An unexpected error occurred while removing the food.");
    }
  };

  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.imageUrl} alt="" height={48} width={48} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{`रु ${item.price}`}</td>
                  <td className="text-danger">
                    <i
                      className="bi bi-x-circle-fill"
                      onClick={() => removeFood(item.id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFood;
