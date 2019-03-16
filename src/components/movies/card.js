import React from 'react';

 
class MovieCard extends React.Component
{
	render()
	{
		const {imdbID,Poster,Title,Year,Type}=this.props;
		return(	
			<div className="" key={imdbID}>
			 <img src={Poster === "N/A" ? 'https://m.media-amazon.com/images/M/MV5BNGQyYjhkNDUtNmUxNC00Yjc4LWE0ZGUtMjI1YjI0MTQxMjQwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDAxNDE0MzY@._V1_SX300.jpg' :Poster} className="card-img-top" alt="..." />
			 <div className="card-body">
				 <h5 className="card-title">{Title}</h5>
				 <p className="card-text">{Year}</p>
				 <h4> {Type}</h4>
			 </div>
		 </div>
			 )
    
	}
}
export default MovieCard;