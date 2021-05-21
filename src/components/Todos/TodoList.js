import React from 'react';
import TodoEntry from './TodoEntry';

const TodoList = ({ content, onDeleteTodo }) => {
	return content.map(todo => {
		return <TodoEntry key={todo.id} id={todo.id} todo={todo.content} onDeleteTodo={onDeleteTodo} index={todo.index} />;
	});
};

export default TodoList;
