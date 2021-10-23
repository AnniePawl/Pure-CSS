import React, { Component } from 'react';
import './styles/Widget.css';

// TODO persisting state --> local storage
class Upvote extends Component {
	state = {
		upvotes: 0
	};

	handleUpvote = () => {
		this.setState({ upvotes: this.state.upvotes + 1 });
	};

	render() {
		return (
			<div className="Upvote__container">
				<button onClick={this.handleUpvote}>👍</button>
				<span>{this.state.upvotes}</span>
			</div>
		);
	}
}

export default Upvote;
