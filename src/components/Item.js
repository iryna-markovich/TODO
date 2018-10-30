import React from "react";
import PropTypes from "prop-types";
import "./../styles/index.css";

const Item = ({ id, onClick, completed, text }) => (
  <div className="container__item">
    <p
      className="container__text"
      onClick={() => onClick(id)}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </p>
  </div>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
