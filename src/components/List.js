import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Item from "./Item";
import "./../styles/index.css";
import { toggleTask } from "../actions";

const mapStateToProps = state => {
  return {
    items: state.items || []
  };
};



const mapDispatchToProps = dispatch => ({
  toggleTask: completed => {
    toggleTask(completed, dispatch);
  }
});

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true
    };
  }

  toggleTask() {
    if (this.state.completed === true) {
      this.setState({
        completed: false
      });
    } else
      this.setState({
        completed: true
      });
    console.log(this.state.completed);
    //  this.props.removeTasks();
  }

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
  ).isRequired,
  toggleTask: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

/*
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Item from "./Item";
import "./../styles/index.css";
import { toggleTask } from "../actions";

const mapStateToProps = state => {
  return {
    items: state.items || []
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTask: id => {
    dispatch(toggleTask(id));
  }
});

toggleTask = (id) => {
  this.setState({ complited: true });
  console.log("hhhhh");
};

const List = ({ items, toggleTask }) => (
  <div className="container__list">
    {items.map(item => (
      <Item
        key={item.id}
        {...item}
        onClick={() => {
          this.toggleTask(item.id);
        }}
      />
    ))}
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTask: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
*/
