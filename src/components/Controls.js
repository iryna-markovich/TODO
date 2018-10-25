import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import { deleteAll } from "../actions";
import { connect } from "react-redux";
import "./../styles/index.css";

const Controls = ({ dispatch }) => (
  <div className="container__controls">
    <span className="container__subtitle">Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
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

//export default Controls;

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll())
});

export default connect(mapDispatchToProps)(Controls);
