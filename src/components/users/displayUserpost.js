import React from 'react';
import axios from 'axios';
import PostCard from '../posts/card';



class DisplayUserPosts extends React.Component {
	state = {
		posts: []
	}

	componentDidMount() {
		// console.log(this.props);

		const id = this.props.match.params.id;

		axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

			.then((response) => {
				// handle success
				const data = response.data;
				this.setState({ posts: data });
				console.log(response);
				// console.log(this.props);
			})

			.catch((error) => {
				// handle error
				console.log(error);
			});
	}



	render() {

		console.log(this.state.posts);
		return (
			<div className="list">
				{this.state.posts.map(p => <PostCard key={p.id} title={p.title} id={p.id} />)}
			</div>
		)

	}
}
export default DisplayUserPosts;