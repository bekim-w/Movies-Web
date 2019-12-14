import React, { Component } from 'react';
import { moviesData } from '../../moviesData';
import MainMovieCard from "../../components/MainMovieCard/MainMovieCard";
import IntroSection from "../../components/IntroSection/IntroSection";

class Home extends Component {
	constructor() {
		super()

		this.state = {
			movies: moviesData
		};
	}

	render() {
		const { movies } = this.state;
		
		var movieColumnsArray = [];
		var movieRowsArray = [];
		var countMovies = 0;
	
		//This shity code sucks, fix this
		for(let i = 1; i <= 4; i++) {
			for(let j = 0; j < 4; j++) {
				movieColumnsArray.push(
					<MainMovieCard
						moviePoster={movies[countMovies].moviePoster}
						name={movies[countMovies].name}
						url={`${this.props.match.url}${movies[countMovies].url}`} />
				);
				countMovies++;
			}
			movieRowsArray.push(
				<div className="row mt-3">
					{movieColumnsArray}
				</div>
			);
			movieColumnsArray = [];
		}

 		return (
    	  	<div>
				<IntroSection />

				<div className="container">
					{movieRowsArray}
				</div>
		    </div>
		);
	}
}

export default Home;