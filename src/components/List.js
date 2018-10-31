import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Item from "./Item";
import "./../styles/index.css";

const mapStateToProps = state => {
  return {
    items: state.items || []
  };
};

class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="container__list">
        {items.map(item => (
          <Item key={item.id} {...item}  />
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
  ).isRequired
};

export default connect(
  mapStateToProps,
  null
)(List);