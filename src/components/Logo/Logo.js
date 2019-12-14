import React, { Component } from 'react';
import "./logo.scss";
import { withRouter } from "react-router-dom";

class Logo extends Component {
	constructor(props) {
		super(props);
	}

	render (){
		return (
			<div className="logo mr-5" onClick={() => this.props.history.push("/Movies-Web/")}>
				<img className="navbar-brand logo__photo" src="https://retohercules.com/images/cinema-icon-png-1.png" alt="" />
				<span className="navbar-brand">MovieHouse</span>
			</div>
		);
	}
}
export default withRouter(Logo);