import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/index.css';
import { toggleTask } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
	toggleTask: (completed, id) => {
		toggleTask(completed, id, dispatch);
	}
});

class Item extends Component {
	render() {
		const { completed, text, id } = this.props;
		return (
			<div
				className="container__item"
				onClick={() => this.props.toggleTask(completed, id)}
				style={{
					textDecoration: completed ? 'line-through' : 'none'
				}}
			>
				{text}
			</div>
		);
	}
}

Item.propTypes = {
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
};

export default connect(null, mapDispatchToProps)(Item);
