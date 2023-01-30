import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Task } from '../../components';

const TasksList = ({ items }) => {
  return items.map((item) => <Task key={item.id} {...item} />);
};

TasksList.propTypes = {
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

export default connect(mapStateToProps, null)(TasksList);
