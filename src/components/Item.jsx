import React from 'react';
import PropTypes from 'prop-types';
import { toggleTask } from '../actions';
import { connect } from 'react-redux';
import './../styles/index.css';

const Item = ({ completed, text, id, toggleTask }) => {
  return (
    <div
      className="container__item"
      onClick={() => toggleTask(completed, id)}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </div>
  );
};

Item.propTypes = {
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
)(Item);
