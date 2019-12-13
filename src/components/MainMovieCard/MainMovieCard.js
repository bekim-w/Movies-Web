import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "./mainMovieCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

class MainMovieCard extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { moviePoster, name, url } = this.props;
		return (
			<div className="col-6 col-md-3 mb-5">
				<div className="main-movie-card">
					<div onClick={() => this.props.history.push(url)} className="main-movie-card__image-bg" style={{ backgroundImage: `url(${moviePoster})` }}>
						<div className="main-movie-card__play">
							<FontAwesomeIcon className="faPlay" icon={faPlay} />
						</div>
						<div className="main-movie-card__review">3.5</div>
						<div className="main-movie-card__quality">HD</div>
					</div>
					<h2 className="mt-3" onClick={() => this.props.history.push(url)}>{name}</h2>
				</div>
			</div>
		);
	}
}

export default withRouter(MainMovieCard);