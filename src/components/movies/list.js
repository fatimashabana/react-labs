import React from 'react';
import MovieCard from './card';



class MovieList extends React.Component {
	constructor(props) {
      super(props)
		this.state = {
			data:this.props.data,   
			search: '',
			watched: false,
			}

		this.filterList = this.filterList.bind(this);
	}
 
	filterList(event) {
		console.log(event);
		let newData;
		if(event.target.name === 'search'){
			newData = this.props.data.filter(m => m.Title.includes(event.target.value) && m.watched === this.state.checked)
			this.setState({search: event.target.value, data: newData})

		} else if (event.target.name === 'watched') {
			newData = this.props.data.filter(m =>m.watched === event.target.checked &&  m.Title.includes(this.state.search) )
			this.setState({watched: event.target.checked, data: newData})

		}
		
	
	}

render() {
	const { data } =this.state;
	return (

		<>
			<input className="search"name="search" type="text" placeholder="Search" onChange={this.filterList} />
			<input type="checkbox" name="watched" onChange={this.filterList}/>IsWatched
			
			<div className="App">
				{
					Array.isArray(data) && data.map(movie => <MovieCard key={movie.imdbID} {...movie} />)
				}
			</div>
		</>
	)
}

}


export default MovieList;
