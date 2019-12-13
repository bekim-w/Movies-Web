import React, { Component } from 'react';
import Modal from "../../components/Modal/Modal";

class Plans extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			showModal: false
		};
	}
	openModal = () => {
		this.setState({showModal: true});
	}
	closeModal = () => {
		this.setState({showModal: false});
	}
	
	render() {
 		return (
    	  	<div>
    	  		<div className="container">
					<div className="row">
						<div className="col-4">
							<h2>Basic</h2>
							<button onClick={this.openModal}>Get Started</button>
						</div>
						<div className="col-4">
							<h2>Standard</h2>
							<button onClick={this.openModal}>Get Started</button>
						</div>
						<div className="col-4">
							<h2>Premium</h2>
							<button onClick={this.openModal}>Get Started</button>
						</div>
					</div>
    	  		</div>
				

				{
					(this.state.showModal) ?
						<Modal closeModal={this.closeModal}>
					        Email
					        <input type="text"/>
				        	Password
					        <input type="text"/>
					        <button onClick={() => this.props.history.push(`/plans`)}>Register</button>
						</Modal>
					: ""
				}
    	  	</div>
		);
	}
}

export default Plans;