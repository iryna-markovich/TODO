import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { Task } from '../../components';

const TasksList = ({ items, getTasks }) => {
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  if (!items.length) return null;

  return items.map((item) => <Task key={item.id} item={item} />);
};

TasksList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(actions.getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
