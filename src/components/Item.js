import React from "react";
import PropTypes from "prop-types";
import "./../styles/index.css";

const Item = ({ onClick, onOpen, completed, text }) => (
  <div className="container__item">
    <p
      className="container__text"
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </p>
    <button onClick={onOpen}>open task</button>
  </div>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
