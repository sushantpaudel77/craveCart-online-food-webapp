import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = () => {
  const { foodList } = useContext(StoreContext);

  return (
    <vdiv className="container">
      <div className="row">
        {foodList.length > 0 ? (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            
          </div>
        ) : (
          <div className="text-center mt-4">
            <h4>No food found.</h4>
          </div>
        )}
      </div>
    </vdiv>
  );
};

export default FoodDisplay;
