import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import UserCard from './card';



export default class UsersList extends React.Component {

	state = {
		users: [],
	}


	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')

			.then((response) => {
				// handle success
				const data = response.data;
				this.setState({ users: data });
				// console.log(response);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
	}


	render() {

		return (
			<>
				<Link to="/adduser" className="link  add">Add User</Link>
				<div className="list">
				{this.state.users.map(u => <UserCard key={u.id} name={u.name} id={u.id} />)}
				</div>
			</>
		)
	}
}
