import React, { Component } from "react";
import FilterLink from "../containers/FilterLink";
import { deleteTasks, removeTasks } from "../actions";
import { connect } from "react-redux";
import "./../styles/index.css";

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  removeTasks: ()=> {removeTasks(dispatch)}
});

class Controls extends Component {
  handleClick(event) {
    event.preventDefault();
    this.props.removeTasks();
  }
  render() {
    return (
      <div className="container__controls">
        <span className="container__subtitle">Show: </span>
        <FilterLink filter="all_tasks">All</FilterLink>
        <FilterLink filter="active_tasks">Active</FilterLink>
        <FilterLink filter="completed_tasks">Completed</FilterLink>
        <button
          onClick={this.handleClick.bind(this)}
          className="container__btn container__btn_danger"
        >
          Delete All
        </button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

/*
const Controls = ({ dispatch }) => (
  <div className="container__controls">
    <span className="container__subtitle">Show: </span>
    <FilterLink filter="all_tasks">All</FilterLink>
    <FilterLink filter="active_tasks">Active</FilterLink>
    <FilterLink filter="completed_tasks">Completed</FilterLink>
    <button
      onClick={e => {
        e.preventDefault();
        dispatch(deleteTasks());
      }}
      className="container__btn container__btn_danger"
    >
      Delete All
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  deleteTasks: () => dispatch(deleteTasks())
});

export default connect(mapDispatchToProps)(Controls);
*/
