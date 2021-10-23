import React, { Component } from 'react';
import './styles/Widget.css';

class LoginDropdown extends Component {
	state = {};
	render() {
		return (
			<div className="LoginDropdown__container">
				<h1>Thumbs</h1>
				<div className="extensionPopup__buttonContainer">{/* <LoginButton />
					<LogoutButton /> */}</div>
				<a className="extensionPopup__link" target="_blank" href="https://anniepawl.github.io/Thumbs/">
					More About Thumbs
				</a>
			</div>
		);
	}
}

export default LoginDropdown;
