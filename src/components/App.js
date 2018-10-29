import React, { Component } from "react";
import "./../styles/index.css";
import { connect } from "react-redux";
import { returnState } from "./../actions";
import List from "./List";
import Controls from "./Controls";
import Field from "./Field";


const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  getState: () => returnState(dispatch)
});

class App extends Component {
  componentWillMount() {
    this.props.getState();
  }

  render() {
    return (
      <div className="container">
        <h1 className="container__title">It's a simple TODOList</h1>
        <hr className="container__line" />
        <div className="container__controls">
          <span className="container__subtitle">Show: </span>
          <button filter="all_tasks">All</button>
          <button filter="active_tasks">Active</button>
          <button filter="completed_tasks">Completed</button>
          <button className="container__btn container__btn_danger">
            Delete All
          </button>
        </div>   
        <Field />
        <List />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/*
<Controls />
<Field />
<VisibleTodoList/>*/

/*
import React, { Component } from "react";
import "./../styles/index.css";
import { connect } from "react-redux";
import { returnState } from "./../actions";
import List from "./List";
import Controls from "./Controls";
import Field from "./Field";

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  getState: () => returnState(dispatch)
});

class App extends Component {
  componentWillMount() {
    this.props.getState();
  }

  render() {
    return (
      <div className="container">
        <h1 className="container__title">It's a simple TODOList</h1>
        <hr className="container__line" />
        <Controls />
        <Field />
        <List />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
*/
