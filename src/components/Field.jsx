import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { putTask } from './../actions';

const Field = ({ putTask }) => {
  const [inputValue, setInputValue] = useState('');
  // TODO use useRef
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      putTask(inputValue);

      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container__field">
      <input value={inputValue} className="container__input" type="text" />
      <button className="container__btn container__btn_combined" type="submit">
        +
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  putTask: (text) => putTask(text, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
