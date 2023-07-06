import axios from "axios";
import React, { useEffect, useState } from "react";
const HomePage = () => {
	const [todos, setTodos] = useState([]);
	const [bool, setBool] = useState(false);

	async function getTodos() {
		const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
		setTodos(data);
	}
	// ? отратботает один раз при рождении
	useEffect(() => {
		console.log("birth");
		getTodos();
	}, []);

	// ? отратботает каждый раз когда меняется состояние bool
	// useEffect(() => {
	// 	console.log("update");
	// 	getTodos();
	// }, [bool]);

	//? функция которую мы возвращаем отработаем перед смертью коспонента
	function handleMouseMove(e) {
		console.log(e.clientX, e.clientY);
	}
	useEffect(() => {
		console.log("birth");

		document.addEventListener("mousemove", handleMouseMove);
		getTodos();

		return () => {
			console.log("death");
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div>
			<button onClick={() => setBool(!bool)}>Flip</button>
			<h2>Todo List</h2>
			{todos.map((item) => (
				<p key={item.id}>{item.title}</p>
			))}
		</div>
	);
};

export default HomePage;
