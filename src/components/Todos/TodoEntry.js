import React, { useState } from 'react';

const TodoEntry = ({ todo, onDeleteTodo, id }) => {
	const [todoClass, setTodoClass] = useState('incomplete');

	const handleCompleteTodo = () => {
		if (todoClass === 'incomplete') {
			setTodoClass('complete');
		} else {
			setTodoClass('incomplete');
		}
	};

	const handleRemoveTodo = () => {
		onDeleteTodo(id);
	};

	return (
		<div className={`todo ${todoClass}`}>
			<input id={id} type='checkbox' onClick={handleCompleteTodo} />
			<label htmlFor={id}>
				<span></span>
			</label>
			<p>{todo}</p>
			<input type='button' value='Delete' onClick={handleRemoveTodo} />
		</div>
	);
};

export default TodoEntry;
