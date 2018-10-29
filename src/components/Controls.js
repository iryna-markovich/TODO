import React from "react";
import FilterLink from "../containers/FilterLink";
import { deleteAll } from "../actions";
import { connect } from "react-redux";
import "./../styles/index.css";


const Controls = ({ dispatch }) => (
  <div className="container__controls">
    <span className="container__subtitle">Show: </span>
    <FilterLink filter="all_tasks">All</FilterLink>
    <FilterLink filter="active_tasks">Active</FilterLink>
    <FilterLink filter="completed_tasks">Completed</FilterLink>
    <button
      onClick={e => {
        e.preventDefault();
        dispatch(deleteAll());
      }}
      className="container__btn container__btn_danger"
    >
      Delete All
    </button>
  </div>
);


const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll())
});



export default connect(mapDispatchToProps)(Controls);
