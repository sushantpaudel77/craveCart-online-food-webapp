import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = () => {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="container">
      <div className="row">
        {foodList.length > 0 ? (
          foodList.map((food, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
            >
              <div className="card" style={{ maxWidth: "320px" }}>
                <img
                  src={food.imageUrl}
                  className="card-img-top"
                  alt={food.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text">{food.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">${food.price}</span>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-half text-warning"></i>
                      <small className="text-muted">(4.5)</small>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light">
                  <button className="btn btn-primary btn-sm">Add to Cart</button>
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-4">
            <h4>No food found.</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;

