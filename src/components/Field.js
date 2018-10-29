import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, inputChange } from "./../actions";
import { addToState } from "./../actions";

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  addTodo: () => dispatch(addTodo()),
  inputChange: text => dispatch(inputChange(text)),
  addItem: data => addToState(data, dispatch)
});

class Field extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.props.inputChange(e.target.value);
  }
  handleClick() {
    this.props.addItem(this.props.value);
  }
  render() {
    return (
      <div>
        <input
          className="input__input"
          onChange={this.handleChange}
          value={this.props.value}
        />
        <button className="container__btn container__btn_combined" type="submit" onClick={this.handleClick}>
          +
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field);





/*import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";
import "./../styles/index.css";


const mapStateToProps = state => ({
  items: state.items
});

const Field = ({ dispatch }) => {
  let input;

  return (
    <form
      className="container__field"
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addItem(input.value));
        input.value = "";
      }}
    >
      <input
        className="container__input"
        type="text"
        ref={node => (input = node)}
      />
      <button className="container__btn container__btn_combined" type="submit">
        +
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: () => dispatch(addItem()),
  inputChange: text => dispatch(inputChange(text)),
  addData: data => addItemToServer(data, dispatch)
});

export default connect(mapDispatchToProps)(Field);

*/



