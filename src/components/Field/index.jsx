import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from '../../components';

import styles from './index.module.css';

const Field = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      addTask(inputValue);

      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.field}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
        type="text"
      />
      <Button variety="regular" type="submit">
        +
      </Button>
    </form>
  );
};


const mapDispatchToProps = (dispatch) => ({
  addTask: (text) => dispatch(actions.addTask(text)),
});

export default connect(null, mapDispatchToProps)(Field);
