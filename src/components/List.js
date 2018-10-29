import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./../styles/index.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount = () => {
    fetch("api/items")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data.items });
        console.log(this.state.items);
      });
  };

  render() {
    const { items, toggleItem } = this.state;
    return (
      <div className="container__list">
        {items.map(item => (
          <Item key={item.id} {...item} onClick={() => toggleItem(item.id)} />
        ))}
      </div>
    );
  }
}

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


/*
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
*/
