import React from "react";
import "./../styles/index.css";
import { connect } from "react-redux";
import { toggleTask, getTasks } from "../actions";
import Controls from "./Controls";
import List from "./List";
import Field from "./Field";

const mapStateToProps = state => {
  return {
    items: state.items || [],
  }
};

const mapDispatchToProps = dispatch => ({
  getTasks: () => {
    dispatch(getTasks());
  },
  toggleItem: (id) => {
    dispatch(toggleTask(id));
  }
});

class TaskContainer extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { items, toggleItem } = this.props;
    return (
      <React.Fragment>
        <Controls />
        <Field />
        <List items={items} toggleItem={toggleItem} />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer);

