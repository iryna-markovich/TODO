import React from 'react';
import './../styles/index.css';
import Controls from './Controls';
import Field from './Field';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = ({ match: { params } }) => (
	<div className="container">
		<h1 className="container__title">It's a simple TODOList</h1>
		<hr className="container__line" />
		<Controls />
		<Field />
		<VisibleTodoList filter={params.filter || 'all_tasks'} />
	</div>
);

export default App;
