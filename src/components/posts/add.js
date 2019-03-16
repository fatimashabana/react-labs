import React from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';



class AddPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			userId: "",
			errors: [],
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		// console.log(e);
		e.preventDefault();
		const { title, body, userId } = this.state;

		const validationContext = new SimpleSchema({
			title: {
				type: String,
				min: 3
			},
			body: {
				type: String,
				min: 3
			},
			userId: {
				type: SimpleSchema.Integer,
				min: 3
			},
		}).newContext();

		validationContext.validate({ title, body, userId: +userId });

		if (validationContext.isValid()) {
			axios.post('https://jsonplaceholder.typicode.com/posts', {
				title, body, userId: +userId
			})
				.then((response) => {
					console.log(response);
					this.props.history.push(`/posts`)
				})
				.catch((error) => {
					console.log(error);
				});
		}
		else {
			this.setState({ errors: validationContext.validationErrors() })
		}
		console.log(validationContext.validationErrors());
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
					<label>Title</label>
					<input type="text" name="title" onChange={this.handleChange} value={this.state.title} /><br />
					<label>Body</label>
					<textarea name="body" onChange={this.handleChange} value={this.state.body}></textarea><br />
					<label>userId</label>
					<input type="number" name="userId" onChange={this.handleChange} value={this.state.userId} /> <br />
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
export default AddPost;