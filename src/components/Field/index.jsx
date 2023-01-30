import React, { useState } from 'react';
import { connect } from 'react-redux';
import { putTask } from '../../actions';
import { Button } from '../../components';

import styles from './index.module.css';

const Field = ({ putTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      putTask(inputValue);

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

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  putTask: (text) => putTask(text, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
