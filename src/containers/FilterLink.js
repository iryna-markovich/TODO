import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './../styles/index.css';

const mapStateToProps = (state) => {
	return {
		items: state.items || []
	};
};

class FilterLink extends Component {
	handleClick(state, filter) {
		let array = document.querySelectorAll('.container__item');
		if (this.props.filter === 'completed_tasks') {
			array.forEach((element) => {
				if (element.style.textDecoration === 'line-through') {
					element.style.display = 'block';
				} else {
					element.style.display = 'none';
				}
			});
		} else if (this.props.filter === 'active_tasks') {
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
	}

	render() {
		const { filter, children } = this.props;
		return (
			<NavLink
				className="container__btn container__btn_regular"
				to={filter === 'all_tasks' ? '/all_tasks' : `/${filter}`}
				onClick={this.handleClick.bind(this)}
			>
				{children}
			</NavLink>
		);
	}
}

export default connect(mapStateToProps)(FilterLink);
