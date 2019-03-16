import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const CommentCard = (props) => {
	return (

		<div className="commentcard" >
			<h1>{props.body}</h1>
			<Link to={`/comments/${props.id}`} className="link view">View</Link>

		</div>

	)
}
export default CommentCard;