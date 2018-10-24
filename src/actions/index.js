let itemId = 0;

export const addItem = (text) => ({
	type: 'ADD_ITEM',
	id: itemId++,
	text
});

export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

export const toggleItem = (id) => ({
	type: 'TOGGLE_ITEM',
	id
});

export const deleteItem = (id) => ({
	type: 'DELETE_ITEM',
	id
});

export const deleteAll = () => ({
	type: 'DELETE_ALL'
});

export const VisibilityFilters = {
	SHOW_ALL: 'all_tasks',
	SHOW_COMPLETED: 'complited_tasks',
	SHOW_ACTIVE: 'active_tasks'
};