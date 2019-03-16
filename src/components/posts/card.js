import React from'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const PostCard=(props)=>{
	return(
		<div className="postcard" >
    <h1>{props.title}</h1>
		<Link to={`/posts/${props.id}`} className="link view">View</Link>
		</div>
	)
}
export default PostCard;