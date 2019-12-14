import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import MoviePage from './pages/MoviePage/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import GenrePage from './pages/GenrePage/GenrePage';
// import Plans from './pages/Plans/Plans';
// import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class App extends Component {
	constructor() {
		super();

		this.state = {
			isLoggedInState: false
		}
	}

	// isLogedIn = (logedIn) => {
	// 	this.setState({ isLoggedInState: logedIn });
	// }

	logOut = () => {
		this.setState({ isLoggedInState: false });
	}

	logIn = () => {
		this.setState({ isLoggedInState: true });
	}

	render() {
		const { logOut, logIn, isLoggedInState } = this.state;

 		return (
			<div>
				<Router>
					<Header isLoggedInState={isLoggedInState} logOut={this.logOut} />
			
					<Switch>
						<Route exact path='/movies-web/' component={Home} />
						<Route exact path='/movies-web/register' component={Register} />
						{/*<Route exact path='/login' component={LogIn} />*/}
						<Route exact path='/movies-web/login' render={
							(props) => <LogIn logIn={this.logIn} isLoggedInState={isLoggedInState} {...props} /> 
						} />
						<Route exact path={[
							"/movies-web/action",
							"/movies-web/animation",
							"/movies-web/drama",
							"/movies-web/comedy",
							"/movies-web/thriller"
						]} component={GenrePage} />
						<Route exact path="/movies-web/search/:searchText" component={Search} />
						{/*<Route exact path="/:movieName" component={MoviePage} />*/}
						<Route exact path="/movies-web/:movieName" render={
							(props) => <MoviePage logIn={this.logIn} isLoggedInState={isLoggedInState} {...props} /> 
						} />
						<Route path="*" component={NotFoundPage} />
					</Switch>

					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;