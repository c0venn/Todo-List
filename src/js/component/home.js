import React, { useState } from "react";

let [List, setList] = useState([]);
let [ItemNumber, setItemNumber] = useState(List.length);

const addItem = e => {
	setList(List.concat({ label: e.target.value }));
	e.target.value = "";
	setItemNumber(ItemNumber + 1);
};

export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>To Do List</h1>
			<form>
				<input
					type="text"
					placeholder="What's need to be done?"></input>
				<button type="button" onClick={addItem}>
					Add
				</button>
				<button type="button">Delete</button>
			</form>
			<small>{ItemNumber} Item Left</small>
		</div>
	);
}
