import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const UserCard = (props) => {
	return (

		<div className="postcard" >
			<h1>{props.name}</h1>
			<Link to={`/users/${props.id}`} className="link view">View details</Link>
			<Link to={`/users/${props.id}/posts`} className="link view">View posts</Link>
		</div>

	)
}
export default UserCard;