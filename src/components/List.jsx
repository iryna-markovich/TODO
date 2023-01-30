import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from './Item';
import './../styles/index.css';

const List = ({ items }) => {
  return (
    <div className="container__list">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items || [],
});

export default connect(mapStateToProps, null)(List);
