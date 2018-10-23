import React from "react";
import "./index.css";

const Display = () => {
  return (
    <div>
      <input className="container__input" readOnly />
      <button className="container__btn container__btn_combined" type="submit">
        +
      </button>
    </div>
  );
};

export default Display;
