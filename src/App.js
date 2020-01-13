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
				<h1>Github Test Heading</h1>
				<Router>
					<Header isLoggedInState={isLoggedInState} logOut={this.logOut} />
			
					<Switch>
						<Route exact path='/Movies-Web/' component={Home} />
						<Route exact path='/Movies-Web/register' component={Register} />
						{/*<Route exact path='/login' component={LogIn} />*/}
						<Route exact path='/Movies-Web/login' render={
							(props) => <LogIn logIn={this.logIn} isLoggedInState={isLoggedInState} {...props} /> 
						} />
						<Route exact path={[
							"/Movies-Web/action",
							"/Movies-Web/animation",
							"/Movies-Web/drama",
							"/Movies-Web/comedy",
							"/Movies-Web/thriller"
						]} component={GenrePage} />
						<Route exact path="/Movies-Web/search/:searchText" component={Search} />
						{/*<Route exact path="/:movieName" component={MoviePage} />*/}
						<Route exact path="/Movies-Web/:movieName" render={
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