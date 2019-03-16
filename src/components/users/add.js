import React from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';



class AddUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			username: "",
			email: "",
			errors: [],
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log(e);
		const { name, username, email } = this.state;

		const validationContext = new SimpleSchema({
			name: {
				type: String,
				min: 3
			},
			username: {
				type: String,
				min: 3
			},
			email: {
				type: String,
				min: 3
			},
		}).newContext();

		validationContext.validate({ name, username, email });
		console.log(validationContext.validationErrors());
		console.log({ name, username, email });
		console.log(validationContext.isValid());

		if (validationContext.isValid()) {
			axios.post('https://jsonplaceholder.typicode.com/users', {
				name, username, email
			}

			).then( (response)=> {
					//////////////////////////////////////////////////////////////////////////////////////////////////
					console.log(response)
					this.props.history.push(`/users`)
				})
				.catch((error)=> {
					console.log(error);
				});
		}
else{
	this.setState({errors:validationContext.validationErrors()})

}
	}

	handleChange(e) {
		console.log(e);
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label>Name</label>
					<input type="text" name="name" onChange={this.handleChange} value={this.state.name} /><br />
					<label>UserName</label>
					<input type="text" name="username" onChange={this.handleChange} value={this.state.username} /><br />
					<label>Email</label>
					<input type="email" required  name="email" onChange={this.handleChange} value={this.state.email} /> <br />
					<button type="submit">submit</button>
				</form>
				<div>
					{
						this.state.errors.length
							? this.state.errors.map(e => <h1 key={e.name}>{e.name}{''}is not valid</h1>)
							: <h1>No errors</h1>
					}
				</div>
			</>

		)
	}
}
export default AddUser;