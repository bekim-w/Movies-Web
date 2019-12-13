import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./header.scss";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchInputText: ""
		}
	}

	chooseMovieGenre = (movieGenre) => {
		this.props.history.push(`${this.props.match.url}${movieGenre}`);
	}
	
	getSearchInputText = (event) => {
		this.setState({ searchInputText: event.target.value });
	}

	submitSearchText = (event) => {
		// event.preventDefault();
		if(this.state.searchInputText != "") {
			this.props.history.push(`${this.props.match.url}search/${this.state.searchInputText}`);
		}
	}

	render() {
		const { isLoggedInState, logOut } = this.props;
		const { searchInputText } = this.state;
		// alert(this.props.isLoggedInState)

 		return (
    	  	<div>
			  	<header>
			  		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<div className="container">
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							{/*<a className="navbar-brand mr-5" href="index.js">Logo</a>*/}
							
							<Logo />

							<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
								<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
									<li className="nav-item">
										{/*<a className="nav-link" href="index.js">Home <span className="sr-only">(current)</span></a>*/}
										<a href="#" className="nav-link" onClick={() => this.props.history.push("/")}>Home</a>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" href="index.js">Movie Genres</a>
										<div class="dropdown-menu bg-dark">
											<a class="dropdown-item" onClick={() => this.chooseMovieGenre("action")} href="#">Action</a>
											<a class="dropdown-item" onClick={() => this.chooseMovieGenre("animation")} href="#">Animation</a>
											<a class="dropdown-item" onClick={() => this.chooseMovieGenre("comedy")} href="#">Comedy</a>
											<a class="dropdown-item" onClick={() => this.chooseMovieGenre("drama")} href="#">Drama</a>
											<a class="dropdown-item" onClick={() => this.chooseMovieGenre("thriller")} href="#">Thriller</a>
										</div>
									</li>
									{/*<li className="nav-item">
										<a className="nav-link" href="#">Tv Shows</a>
									</li>*/}
									{/*<li className="nav-item">
										<a href="#" className="nav-link" onClick={() => this.props.history.push("/plans")}>Plans</a>
									</li>*/}
								</ul>


								<div className="b-search-wrapper mb-3 mb-lg-0">
									<form className="form-inline" onSubmit={this.submitSearchText}>
										<input onChange={this.getSearchInputText } className="form-control mr-sm-2 b-search" type="search" placeholder="Search" aria-label="Search" />
										<input type="submit" value="Search" className="btn btn-outline-primary my-2 my-sm-0" />
									</form>
								</div>

								<div>
								{
									(isLoggedInState) ?
									<div className="b-profile">
										<span className="b-profile-data mr-4">You are Logged In</span>
										<button onClick={() => logOut()} className="btn btn-outline-primary">Log Out</button>
									</div>
									:
									<div>
										<button className="btn btn-outline-primary mr-2" onClick={() => this.props.history.push("/login")}>Log in</button>
										<button className="btn btn-outline-primary" onClick={() => this.props.history.push("/register")}>Register</button>
									</div>
								}
								</div>
							</div>
						</div>
					</nav>
				</header>

		    </div>
		);
	}
}

export default withRouter(Header);