import React from 'react';
import Movie from './Movie'

class MovieList extends React.Component {
	render() {
	return(
		<div>
			<h3>Movie List Title</h3>
			<Movie />
			<Movie />
			<Movie />
			<Movie />
			<Movie />
		</div>
	)
	}
}

export default MovieList;