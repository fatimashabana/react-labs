import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import PostCard from './card';



export default class PostsList extends React.Component {

	state = {
		posts: [],
	}


	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')

			.then((response) => {
				// handle success
				const data = response.data;
				this.setState({ posts: data });
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
				<Link to="/addpost" className="link  add">Add Post</Link>
       <div className="list">
				{this.state.posts.map(p => <PostCard key={p.id} title={p.title} id={p.id} />)}
       </div>
			</>
		)
	}
}
