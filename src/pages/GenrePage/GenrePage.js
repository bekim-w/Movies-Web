import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { moviesData } from '../../moviesData';
import MainMovieCard from "../../components/MainMovieCard/MainMovieCard";

class GenrePage extends Component {
	constructor(props) {
		super(props);
		console.log(props);

		this.state = {
			movies: moviesData
		};
	}

	render() {
		const { movies } = this.state;
		//Remove the slash and make first letter upperCase
		const movieGenre = this.props.location.pathname.charAt(1).toUpperCase() + this.props.location.pathname.slice(2);

 		return (
			<div className="container">
				<h1 className="mt-3">{movieGenre} Movies</h1>

				<div className="row mt-3">
					{
						movies.map((movie, i) => (
							(movie.category.includes(movieGenre))
							?
								<MainMovieCard
									moviePoster={movie.moviePoster}
									name={movie.name}
									url={`/${movie.url}`} />
							: ""
						))
					}
				</div>
			</div>
		);
	}
}

export default GenrePage;