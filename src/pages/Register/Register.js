import React, { Component } from 'react';

class Register extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
    	  	<div>

				<div className="container py-5">
					<h1>Register Here</h1>
					<div class="alert alert-info mt-5">
						<strong>Info! </strong>Register is not working yet since i haven't created and connected to database yet.
					</div>
					<form className="my-5">
						<div className="form-group">
							<label>Name</label>
							<input onChange={ this.handleName } type="text" className="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter your name" />
						</div>
						<div className="form-group">
							<label>Email address</label>
							<input onChange={ this.handleEmail } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input onChange={ this.handlePassword } type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
						</div>
						<button onClick={this.onRegister} type="button" className="btn btn-primary">Register</button>
					</form>
				</div>

		    </div>
		);
	}
}

export default Register;