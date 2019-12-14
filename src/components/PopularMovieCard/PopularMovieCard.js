import React, { Component } from 'react';
import { moviesData } from '../../moviesData';
import { withRouter } from "react-router-dom";
import './popularMovieCard.scss';

class PopularMovieCard extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			movies: moviesData
		};
	}

	render() {
		const { movies } = this.state;

		var movieColumnsArray = [];
		var movieRowsArray = [];
		var countMovies = 0;

		for(let i = 0; i < 2; i++) {
			for(let j = 0, t = countMovies; j < 2; j++, t++) {
				movieColumnsArray.push(
					<div className="col-md-6">
			    	  	<div className="movie-card">
				    	  	<div className="movie-card__poster" style={{ backgroundImage: `url(${movies[countMovies].moviePoster})` }}></div>
			    	  		<div className="movie-card__content">
								<h3>{movies[countMovies].name}</h3>
								<p>{movies[countMovies].category.join(', ')}</p>
								<p className="movie-card__description">{movies[countMovies].description.substring(0, 115)}...</p>
		    	  				<button onClick={() => this.props.history.push(`/Movies-Web/${movies[t].url}`)} >Watch Now</button>
		    	  			</div>	
			    	  	</div>
		    	  	</div>
				);
				countMovies++;
			}

			movieRowsArray.push(
				<div className="row">
					{movieColumnsArray}
				</div>
			);
			movieColumnsArray = [];
		}

 		return (
 			<div className="movie-cards">
    	  		<div className="container">
    	  			{movieRowsArray}
	    	  	</div>
    	  	</div>
		);
	}
}

export default withRouter(PopularMovieCard);