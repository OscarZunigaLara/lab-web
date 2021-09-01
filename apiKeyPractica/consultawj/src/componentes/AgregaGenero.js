//A01376466_A01746926_A01746769_A01654827

import React, { useState } from "react";
import PropTypes from "prop-types";

export const AgregaGenero = ({ setGeneros }) => {
  const [inputValue, setInputValue] = useState("Indica el Género");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se hizo submit...");

    if (inputValue.trim().length > 4) {
      setGeneros((generosActuales) => [inputValue, ...generosActuales]);

      setInputValue();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
    </form>
  );
};

AgregaGenero.propTypes = { setGeneros: PropTypes.func.isRequired };
