import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
	const [users, setUsers] = useState([]);
	async function getUsers() {
		const { data } = await axios("https://jsonplaceholder.typicode.com/users");
		setUsers(data);
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<h2>Users List</h2>
			{users.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	);
};

export default UsersPage;
