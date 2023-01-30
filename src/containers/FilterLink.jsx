import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './../styles/index.css';

const FilterLink = ({ filter, children }) => {
  const handleClick = (state, filter) => {
    let array = document.querySelectorAll('.container__item');

    if (filter === 'completed_tasks') {
      array.forEach((element) => {
        if (element.style.textDecoration === 'line-through') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    } else if (filter === 'active_tasks') {
      array.forEach((element) => {
        if (element.style.textDecoration === 'line-through') {
          element.style.display = 'none';
        } else {
          element.style.display = 'block';
        }
      });
    } else {
      array.forEach((element) => {
        element.style.display = 'block';
      });
    }
  };

  return (
    <Link
      className="container__btn container__btn_regular"
      to={filter === 'all_tasks' ? '/all_tasks' : `/${filter}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

const mapStateToProps = (state) => ({
  items: state.items || [],
});

export default connect(mapStateToProps)(FilterLink);
