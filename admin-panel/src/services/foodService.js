import axios from "axios";

const API_URL = "http://localhost:8080/api/foods";

export const addFood = async (foodData, image) => {
  const formData = new FormData();
  formData.append("food", JSON.stringify(foodData)); 
  formData.append("file", image); 

  try {
    await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export const getFoodList = async (page = 0, size = 10) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        page: page,
        size: size
      }
    });
    // Return the paginated response object
    return response.data;
  } catch (error) {
    console.error("Error fetching foods:", error);
    throw error;
  }
};

export const deleteFood = async (foodId) => {
  try {
    const response = await axios.delete(API_URL + "/" + foodId);
    return response.status === 204;
  } catch (error) {
    console.log("Error while deleting the food: ", error);
    throw error;
  }
};
