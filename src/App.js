import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage/LandingPage';
import FruitPage from '../src/components/Fruits/FruitPage';
import animationPage from './components/Animations/animationPage';

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/">
					<LandingPage />
				</Route>

				<Route exact path="/Pure-CSS-Animations">
					<LandingPage />
				</Route>

				<Route path="/animationPage" component={animationPage} />

				<Route path="/FruitPage" component={FruitPage} />
			</Router>
		</div>
	);
}

export default App;
