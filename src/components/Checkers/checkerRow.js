import React from 'react';
import './styles/checkers.css';

function CheckerRow() {
	return (
		<div className="checker_row">
			<div className="square square-1" />
			<div className="square square-2" />
			<div className="square square-3" />
			<div className="square square-4" />
			<div className="square square-5" />
			<div className="square square-6" />
		</div>
	);
}

export default CheckerRow;
