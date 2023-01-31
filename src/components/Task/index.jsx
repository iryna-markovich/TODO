import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import styles from './index.module.css';

const Task = ({ item, toggleTask }) => {
  return (
    <div
      className={styles.item}
      onClick={() => toggleTask(item)}
      style={{
        textDecoration: item.completed ? 'line-through' : 'none',
      }}
    >
      {item.text}
    </div>
  );
};

Task.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleTask: (item) => dispatch(actions.toggleTask(item)),
});

export default connect(null, mapDispatchToProps)(Task);
