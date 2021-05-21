import React, { useState } from 'react';
import TodoEntry from './TodoEntry';
import TodoInput from './TodoInput';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { uuid } from 'uuidv4';

const Todos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [todoDraft, setTodoDraft] = useState('');
	const handleTodoInput = e => {
		setTodoDraft(e.target.value);
	};

	const handleTodoPost = e => {
		let newTodo = { id: uuid(), content: todoDraft };
		todos.unshift(newTodo);
		setTodos(todos);
		setTodoDraft('');
		setIsLoading(false);
		e.preventDefault();
	};

	const handleDeleteTodo = item => {
		const newTodos = todos.filter(data => {
			return data.id !== item;
		});
		setTodos(newTodos);
		// handleOnDragEnd();
	};

	// const [orderedTodos, setOrderedTodos] = useState(todos);
	// const handleOnDragEnd = result => {
	// 	if (!result) {
	// 		setOrderedTodos(todos);
	// 	} else {
	// 		if (!result.destination) return;
	// 		const items = Array.from(todos);
	// 		const [reorderedItem] = items.splice(result.source.index, 1);
	// 		items.splice(result.destination.index, 0, reorderedItem);

	// 		setOrderedTodos(items);
	// 	}
	// };

	// useEffect(() => {
	// 	handleOnDragEnd();
	// }, [todos]);

	// TODO issue right now is that the adding and removing of todos is not being updated until the drag is completed. because they are working on different variables. need a way to call on re-ordering todos after every add or delete. right now if you click delete twice it works
	// TODO maybe pass the ordered todos directly to TodoEntry props
	return (
		<>
			{/* <DragDropContext onDragEnd={handleOnDragEnd}> */}
			<div id='add-todo'>
				<TodoInput handleTodoInput={handleTodoInput} handleTodoPost={handleTodoPost} todoValue={todoDraft} />
			</div>
			{/* <Droppable droppableId='todoList'> */}
			{/* {provided => ( {...provided.droppableProps} ref={provided.innerRef}*/}
			<div className='todos'>
				{isLoading ? (
					<p>No todos</p>
				) : (
					todos.map(todo => {
						return (
							// <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
							// {provided => (
							<div key={todo.id}>
								<TodoEntry id={todo.id} todo={todo.content} onDeleteTodo={handleDeleteTodo} />
							</div>
							// )}
							// </Draggable>
						);
					})
				)}
				{/* {provided.placeholder} */}
			</div>
			{/* )} */}
			{/* </Droppable> */}
			{/* </DragDropContext> */}
		</>
	);
};

export default Todos;
