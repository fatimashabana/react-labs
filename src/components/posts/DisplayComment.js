import React from 'react';
import axios from 'axios';


class DisplayComment extends React.Component {
	state = {
		comment: {},
		post: {}
	}

	componentDidMount() {
		const id = this.props.match.params.id;

		axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)

			.then((response) => {
				// handle success
				const data = response.data;
				this.setState({ comment: data });
				// console.log(response);
				// console.log(this.props);
				const id = this.state.comment.postId;
				axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

					.then((response) => {
						// handle success
						const data = response.data;
						this.setState({ post: data });


						console.log(response);
						console.log(this.state.post);
					})

					.catch((error) => {
						// handle error
						console.log(error);
					});
			})

			.catch((error) => {
				// handle error
				console.log(error);
			});
	}



	render() {
		const comment = this.state.comment;
		const post = this.state.post;

		console.log(this.state.comment);

		return (
			<div className="display">
			<div className="card  ">
				<h1>{comment.id}</h1>
				<h1>userId:{post.userId}</h1>
				<h1>postId:{comment.postId}</h1>
				<h1>{comment.name}</h1>
				<span>{comment.body}</span>
				<h1>{comment.email}</h1>
				</div>
			</div>
		)
	}
}
export default DisplayComment;