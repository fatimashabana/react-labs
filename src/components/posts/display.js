import React from 'react';
import axios from 'axios';
import CommentCard from './CommentCard';


class DisplayPost extends React.Component {
	state = {
		post: {},
		comments: [],
		user: {},
	}

	componentDidMount() {
		const id = this.props.match.params.id;

		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

			.then((response) => {
				// handle success
				const data = response.data;
				this.setState({ post: data });
				const userId = this.state.post.userId;
				axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

					.then((response) => {
						// handle success
						const data = response.data;
						this.setState({ user: data });


						console.log(response);
						console.log(this.state.user);
					})

					.catch((error) => {
						// handle error
						console.log(error);
					});


				// console.log(response);
				// console.log(this.props);
			})

			.catch((error) => {
				// handle error
				console.log(error);
			});

		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

			.then((response) => {
				// handle success
				const data = response.data;
				this.setState({ comments: data });
				console.log(response);
				console.log(this.state.comments);
			})

			.catch((error) => {
				// handle error
				console.log(error);
			});


	}



	render() {
		const post = this.state.post;
		const user = this.state.user;

		console.log(this.state.post);

		return (
			<>
				<div className="card display">
					<h1>{post.id}</h1>
					<h1>{post.title}</h1>
					<span>{post.body}</span>
					<h5>{post.userId}{user.name}</h5>
				</div>
				<div className="display">
			   	<h1>Comments</h1>
				
					{this.state.comments.map(c => <CommentCard className="" key={c.id} {...c} />)}
				</div>
				
			</>
		)
	}
}
export default DisplayPost;