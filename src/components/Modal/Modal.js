import React, { Component } from 'react';
import './modal.scss';
import { withRouter } from "react-router-dom";
import { users } from '../../users';

class Modal extends Component {
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
			this.props.history.push(this.props.location.pathname);
			this.props.closeModal();
		} else {
			alert("Wrong Email or Password!!!");
		}
	}

	render() {
 		return (
			<div className="register-modal">
			    <div className="register-modal__content">
			    	<span className="register-modal__close" onClick={this.props.closeModal}>&times;</span>
					<div className="register-modal__project-content">
			    	    <h2>Pleas Log In or Register to watch {this.props.movieName}</h2>
			    	    <div class="alert alert-info mt-5">
							<strong>Log In with this email and password</strong> <br /><strong>Email:</strong> joe@hotmail.com <br /><strong>Password:</strong> joe
						</div>						
				        <div className="register-modal__input-row">
					        <p>Email</p>
					        <input onChange={ this.handleEmail } type="text"/>
				        </div>
				        <div className="register-modal__input-row">
				        	<p>Password</p>
					        <input onChange={ this.handlePassword } type="text"/>
				        </div>
				        <div className="register-modal__input-row">
					        <button onClick={this.submitLogIn}>Log In</button>
					        <button onClick={() => this.props.history.push(`/register`)}>Register</button>
			        	</div>
			        </div>
			    </div>
			</div>
		);
	}
}

export default withRouter(Modal);