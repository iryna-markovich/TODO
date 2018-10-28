import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";
import "./../styles/index.css";

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
  addItem: () => dispatch(addItem())
});

export default connect(mapDispatchToProps)(Field);
