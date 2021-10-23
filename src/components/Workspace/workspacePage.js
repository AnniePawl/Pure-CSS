import React from 'react';
import Widget from '../../components/Widget/Widget';
import './styles/Workspace.css';

function Workspace() {
	return (
		<div className="Workspace__container">
			<h1>My Workspace</h1>
			<Widget />
		</div>
	);
}

export default Workspace;
