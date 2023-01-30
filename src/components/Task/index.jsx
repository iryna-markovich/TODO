import React from 'react';
import PropTypes from 'prop-types';
import { toggleTask } from '../../actions';
import { connect } from 'react-redux';

import styles from './index.module.css';

const Task = ({ completed, text, id, toggleTask }) => {
  return (
    <div
      className={styles.item}
      onClick={() => toggleTask(completed, id)}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </div>
  );
};

Task.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleTask: (completed, id) => {
    toggleTask(completed, id, dispatch);
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Task);
