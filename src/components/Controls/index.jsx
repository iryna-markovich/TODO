import React from 'react';
import FilterLink from '../../containers/FilterLink.jsx';
import { removeTasks } from '../../actions';
import { connect } from 'react-redux';
import { Button } from '../../components';

import styles from './index.module.css';

const Controls = ({ removeTasks }) => {
  const handleClick = (event) => {
    event.preventDefault();
    removeTasks();
  };

  return (
    <div className={styles.controls}>
      <span className={styles.subtitle}>Show: </span>
      <FilterLink filter="all_tasks">All</FilterLink>
      <FilterLink filter="active_tasks">Active</FilterLink>
      <FilterLink filter="completed_tasks">Completed</FilterLink>
      <Button variety="danger" onClick={handleClick}>
        Delete All
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  removeTasks: () => removeTasks(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
