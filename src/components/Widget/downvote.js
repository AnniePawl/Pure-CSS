import React, { Component } from 'react';
import './styles/Widget.css';

// TODO persisting state --> local storage ?
class Downvote extends Component {
	state = {
		downvotes: 0
	};

	handleDownvote = () => {
		this.setState({ downvotes: this.state.downvotes + 1 });
	};

	render() {
		return (
			<div className="Downvote__container">
				<button onClick={this.handleDownvote}>👎</button>
				<span>{this.state.downvotes}</span>
			</div>
		);
	}
}

export default Downvote;
