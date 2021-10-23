import React, { useState } from 'react';
import Upvote from './upvote';
import Downvote from './downvote';
import LoginDropdown from './LoginDropdown';
import './styles/Widget.css';

function Widget() {
	// Hover
	const [ display, setDisplay ] = useState('notdisplayed');
	const showButton = (e) => {
		e.preventDefault();
		setDisplay('displayed');
	};

	const hideButton = (e) => {
		e.preventDefault();
		setDisplay('notdisplayed');
	};

	return (
		<div className="widget__container">
			<div
				className="upvote_downvote__container"
				onMouseEnter={(e) => showButton(e)}
				onMouseLeave={(e) => hideButton(e)}
			>
				<Upvote />
				<Downvote />
			</div>
			<div className={display}>
				<LoginDropdown />
			</div>
		</div>
	);
}

export default Widget;
