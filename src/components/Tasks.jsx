import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../actions';
import Controls from './Controls.jsx';
import Field from './Field.jsx';
import List from './List.jsx';

import './../styles/index.css';

const Tasks = ({ items, getTasks }) => {
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Controls />
      <Field />
      <List items={items} />
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.items || [],
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
