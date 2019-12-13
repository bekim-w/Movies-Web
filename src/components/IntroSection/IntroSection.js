import React, { Component } from 'react';
import { moviesData } from '../../moviesData';
import "./introSection.scss";
import { withRouter } from "react-router-dom";

class IntroSection extends Component {

	constructor() {
		super()
	}

	render() {
		const homeImg = "https://cont4.naekranie.pl/media/cache/amp/2019/08/Leonardo-Dicaprio-Jamie-Foxx-Kurt-Russell-Uma-Thurman-John-Travolta-and-Samuel-L-Jackson_5d56e5ec8da6a.webp";

 		return (
    	  	<div>
				<div className="intro-section" style={{ backgroundImage: `url(${homeImg})` }} >
					<div className="intro-section__bg-effect"></div>
					<div className="intro-section__details">
						<h1 className="intro-section__title mb-4">All Your TV Shows and Movies in One Place</h1>
						<p className="intro-section__description">Watch Thousands of Shows and Movies Anytime, Anywhere</p>
						<button className="btn btn-primary btn-lg" onClick={() => this.props.history.push("/register")}>Register Now</button>
					</div>
				</div>
		    </div>
		);
	}
}

export default withRouter(IntroSection);