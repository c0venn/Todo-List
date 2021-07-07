import React from "react";
import Title from "../component/title";
import Task from "../component/task";

function Home() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-7 m-auto mt-3 d-flex justify-content-center">
					<Title />
				</div>
			</div>
			<div className="row">
				<div className="col-7 mt-2 m-auto d-flex justify-content.center">
					<Task />
				</div>
			</div>
		</div>
	);
}

export default Home;
