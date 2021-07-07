import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

function Task() {
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([]);

	function addTask(event) {
		event.preventDefault();
		let value = todoList.concat(input);
		setTodoList([...value]);
		setInput("");
	}

	function removeTask(index) {
		let list = todoList;
		list.splice(index, 1);
		setTodoList([...list]);
	}

	function items() {
		let aux = "";
		if (todoList.length <= 1) {
			aux = todoList.length + " item left";
		} else {
			aux = todoList.length + " items left";
		}
		return aux;
	}

	return (
		<div>
			<div>
				<form onSubmit={event => addTask(event)}>
					<input
						type="text"
						className="form-control"
						placeholder="Add a task"
						onChange={event => setInput(event.target.value)}
						value={input}
					/>
				</form>
			</div>
			{todoList !== null && todoList.length >= 1
				? todoList.map((task, index) => {
						return (
							<ul className="list-group list-group-flush">
								<li
									className="list-group-item d-flex justify-content-between"
									key={index}
									on>
									{task}
									<span
										className="delete"
										onClick={event => removeTask(index)}>
										<MdDelete />
									</span>
								</li>
							</ul>
						);
				  })
				: ""}
			<div className="card-footer text-muted d-flex justify-content-center">
				{items()}
			</div>
		</div>
	);
}

export default Task;
