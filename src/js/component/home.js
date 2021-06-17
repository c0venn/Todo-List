import React, { useState } from "react";

export function Home() {
	let [List, setList] = useState([]);
	let [ItemNumber, setItemNumber] = useState(List.length);

	const addItem = () => {
		<h1>hola</h1>;
	};

	return (
		<div className="text-center mt-5">
			<h1>To Do List</h1>
			<input type="text" placeholder="What's need to be done?"></input>
			<button type="button" onClick={addItem}>
				Add
			</button>
			<button type="button">Delete</button>
			<small>{ItemNumber} Item Left</small>
		</div>
	);
}
