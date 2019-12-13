import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import StarReview from "../../assets/img/star-review-no-bg.png";
import './Review.scss';

class Review extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const reviewCalc = 100 - ((100 / 50) * this.props.review * 10);
 		return (
    	  	<div>
				<div class="review-stars" style={{ backgroundImage: `url(${StarReview})` }}>
					<div class="review-stars-selected" style={{ width: reviewCalc + "%", backgroundImage: `url(${StarReview})` }}>
					</div>
				</div>
		    </div>
		);
	}
}

export default Review;