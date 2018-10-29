import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./../styles/index.css";

const List = ({items, toggleItem }) => (
  <div className="container__list">
    {items.map(item => (
      <Item key={item.id} {...item} onClick={() => toggleItem(item.id)} />
    ))}
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleItem: PropTypes.func.isRequired
};

export default List;
