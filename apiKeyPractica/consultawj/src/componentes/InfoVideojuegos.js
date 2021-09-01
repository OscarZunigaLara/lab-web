//A01376466_A01746926_A01746769_A01654827

import React from "react";

export const InfoVideojuegos = ({ nombre, imagen, rating, metacritic }) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={imagen} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Rating: {rating}</p>
          <p className="card-text"> Metacritic: {metacritic}</p>
        </div>
      </div>
    </>
  );
};
