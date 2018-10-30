import React, { Component } from "react";
import { connect } from "react-redux";
import { putTask } from "./../actions";

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  putTask: text => {
    putTask(text, dispatch);
  }
});

class Field extends Component {
  handleSubmit(event) {
    let input = this.refs.input;
    event.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    this.props.putTask(input.value);
    input.value = "";
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="container__field"
      >
        <input ref="input" className="container__input" type="text" />
        <button
          className="container__btn container__btn_combined"
          type="submit"
        >
          +
        </button>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field);
