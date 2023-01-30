import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../../actions';
import { Controls, Field, TasksList } from '../../components';

const Tasks = ({ items, getTasks }) => {
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Controls />
      <Field />
      <TasksList items={items} />
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.items || [],
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
