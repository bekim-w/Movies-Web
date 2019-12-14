import React, { Component } from 'react';
import { users } from '../../users';

class LogIn extends Component {

	constructor(props) {
		super(props)
		this.state = {
			users: users,
			email: "",
			password: ""
		};
	}

	handleEmail = (event) => {
		this.setState({ email: event.target.value });
	}
	
	handlePassword = (event) => {
		this.setState({ password: event.target.value });
	}

	submitLogIn = (event) => {
		// const { logIn } = this.props;
		const { users, email, password  } = this.state;
		var userExists = false;
		
		for (var i = 0; i < users.length; i++) {
			if(users[i].email === email && users[i].password === password){
				//login
				userExists = true;
				// isLogedIn(true);
				break;
			}
		}

		if(userExists) {
			this.props.logIn();
			this.props.history.push(`/Movies-Web/`);
		} else {
			alert("Wrong Email or Password!!!");
		}
	}

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => response.json())
		// 	.then(users => { this.setState({ users: users })});
	}

	render() {
		return (
			<div className="container my-5">
				<h1>Login Page</h1>
				<div class="alert alert-info mt-5">
					<strong>Log In with this email and password</strong> <br /><strong>Email:</strong> joe@hotmail.com <br /><strong>Password:</strong> joe
				</div>
				<form className="mt-5 mb-5">
					<div className="form-group">
						<label>Email address</label>
						<input onChange={ this.handleEmail } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input onChange={ this.handlePassword } type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<button onClick={this.submitLogIn} type="button" className="btn btn-primary mr-4">Log In</button>
					<button onClick={() => this.props.history.push(`/Movies-Web/register`)} type="button" className="btn btn-primary">Register</button>
				</form>
			</div>
		);
	}
}

export default LogIn;