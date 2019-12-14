import React, { Component } from 'react';
import { moviesData } from '../../moviesData';
import MainMovieCard from "../../components/MainMovieCard/MainMovieCard";

class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			movies: moviesData
		};
	}

	render() {
		const { movies } = this.state;
		const searchText = this.props.match.params.searchText;
		console.log(searchText);

 		return (
			<div className="container">
				<div className="row mt-3">
					{
						movies.map((movie, i) => (
							(movie.name.toLowerCase().includes(searchText.toLowerCase()))
							?
								<MainMovieCard
									moviePoster={movie.moviePoster}
									name={movie.name}
									url={`/Movies-Web/${movie.url}`} />
							: ""
						))
					}
				</div>
			</div>
		);
	}
}

export default Search;