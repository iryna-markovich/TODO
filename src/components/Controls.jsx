import React from 'react';
import FilterLink from '../containers/FilterLink';
import { removeTasks } from '../actions';
import { connect } from 'react-redux';
import './../styles/index.css';

const Controls = ({ removeTasks }) => {
  const handleClick = (event) => {
    event.preventDefault();
    removeTasks();
  };

  return (
    <div className="container__controls">
      <span className="container__subtitle">Show: </span>
      <FilterLink filter="all_tasks">All</FilterLink>
      <FilterLink filter="active_tasks">Active</FilterLink>
      <FilterLink filter="completed_tasks">Completed</FilterLink>
      <button
        onClick={handleClick}
        className="container__btn container__btn_danger"
      >
        Delete All
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  removeTasks: () => removeTasks(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
