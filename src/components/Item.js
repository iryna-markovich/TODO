import React,{Component} from "react";
import PropTypes from "prop-types";
import "./../styles/index.css";
import { toggleTask } from "../actions";
import {connect} from "react-redux"

const mapDispatchToProps = dispatch => ({
  toggleTask: (completed, id) => {
    toggleTask(completed,id,dispatch);
  }
});

class Item extends Component{

  // toggleTask() {
  //   if (this.state.completed === true) {
  //     this.setState({
  //       completed: false
  //     });
  //   } else
  //     this.setState({
  //       completed: true
  //     });
  //   console.log(this.state.completed);
  //   //  this.props.removeTasks();
  // }

  render(){
    const {  completed, text, id } = this.props
    return(
      <div className="container__item">
      <p
        className="container__text"
        onClick={() => this.props.toggleTask(completed, id)}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </p>
    </div>
    )
  }
}

Item.propTypes = {
  
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default connect(null, mapDispatchToProps)(Item);
