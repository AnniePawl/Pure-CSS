import React from 'react';
import CheckerRow from './checkerRow';
import './styles/checkers.css';

function Checkers() {
	return (
		<div className="checkers_container">
			<div className="checkers_holder">
				<CheckerRow />
				<CheckerRow />
				<CheckerRow />
				<CheckerRow />
				<CheckerRow />
				<CheckerRow />
			</div>
		</div>
	);
}

export default Checkers;
