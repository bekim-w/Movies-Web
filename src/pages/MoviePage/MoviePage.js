import React, { Component } from 'react';
import { moviesData } from '../../moviesData';
import PopularMovieCard from "../../components/PopularMovieCard/PopularMovieCard";
import Modal from "../../components/Modal/Modal";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Review from '../../components/Review/Review';
import './moviePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class MoviePage extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			movies: moviesData,
			showModal: false
		};
	}

	openModal = () => {
		this.setState({showModal: true});
	}

	closeModal = () => {
		this.setState({showModal: false});
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		//Fix the scroll to top when you open the modal
		window.scrollTo(0, 0);
	}
	
	render() {
		const { movies, showModal } = this.state;
		const { logIn, isLoggedInState } = this.props;

		const movie = movies.find((value, index, array) => (
		 	value.url == this.props.match.params.movieName
		));

		const fillArray = [];

		if(movie != undefined) {
			fillArray.push(
				<div>
					<div className="movie-section">
						<div className="movie-section__background" style={{ backgroundImage: `url(${movie.movieCover})` }}>
							<div className="movie-section__bg-effect"></div>
						</div>
						<div className="movie-section__content">
							<div className="movie-section__poster" style={{ backgroundImage: `url(${movie.moviePoster})` }}></div>
							<div className="movie-section__info">
								<h1>{movie.name}</h1>
								<p className="mt-4"><Review review={movie.review} /> {movie.review} | 125 Reviews</p>
								<p className="mt-4">{movie.description}</p>
								<p>108 min | {movie.category.join(', ')} | 12 February {movie.year}</p>
							</div>
						</div>
					</div>

					{
						(isLoggedInState) ?
							<iframe className="movieVideo"
								src="https://www.youtube.com/embed/WHXxVmeGQUc">
							</iframe>
						:
							<div className="movieVideoImage" onClick={this.openModal} style={{ backgroundImage: `url(${movie.movieVideoImage})` }}>
								<div className="movieVideoImage__effect"></div>
								<div className="movieVideoImage__icon-wrapper">
									<div className="movieVideoImage__icon">
										<FontAwesomeIcon className="faPlay" icon={faPlay} />
									</div>
								</div>
								<div className="movieVideoImage__controls">
									<div className="row">
										<div className="col-6">
											<FontAwesomeIcon className="faPlay-control" icon={faPlay} />
											<FontAwesomeIcon className="faVolumeUp" icon={faVolumeUp} />
											<span className="time">00:00:32</span>
										</div>
										<div className="col-6">
											<FontAwesomeIcon className="faCog" icon={faCog} />
											<FontAwesomeIcon className="faArrowsAlt" icon={faArrowsAlt} />
										</div>
									</div>
								</div>
							</div>
					}

					{
						(showModal) ?
							<Modal logIn={logIn} closeModal={this.closeModal} movieName={movie.name} />
						: ""
					}

					<PopularMovieCard />
				</div>
			);
		} else {
			fillArray.push(
				<NotFoundPage />
			);
		}

 		return (
    	  	<div>
				{ fillArray }
    	  	</div>
		);
	}
}

export default MoviePage;