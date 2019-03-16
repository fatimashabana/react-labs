import React from 'react';
import axios from 'axios';


class DisplayUser extends React.Component {
	state = {
		user: {}
	}

	componentDidMount() {
		const id = this.props.match.params.id;

		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

			.then((response) => {
				// handle success
				const data = response.data;
				this.setState({ user: data });
				// console.log(response);
				// console.log(this.props);
			})

			.catch((error) => {
				// handle error
				console.log(error);
			});
	}



	render() {
		const user = this.state.user;
		console.log(this.state.user);

		return (
			<div className="display">
				<h1>{user.name}</h1>
				<h1>{user.username}</h1>
				<h1>{user.email}</h1>
			</div>
		)
	}
}
export default DisplayUser;