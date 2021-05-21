import React from 'react';

const TodoInput = ({ handleTodoInput, handleTodoPost, todoValue }) => {
	return (
		<form onSubmit={handleTodoPost}>
			<input type='text' name='new-todo' value={todoValue} onChange={handleTodoInput} placeholder='Add todo...' />
			<button type='submit'>+</button>
		</form>
	);
};

export default TodoInput;
