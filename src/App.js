import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage/LandingPage';
import FruitPage from '../src/components/Fruits/FruitPage';
import animationPage from './components/Animations/animationPage';
import workspacePage from './components/Workspace/workspacePage';

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/">
					<LandingPage />
				</Route>

				{/* Landing Page */}
				<Route exact path="/Pure-CSS-Animations">
					<LandingPage />
				</Route>

				{/* Animation Page */}
				<Route path="/animationPage" component={animationPage} />

				{/* My Workspace Page */}
				<Route path="/workspacePage" component={workspacePage} />

				<Route path="/FruitPage" component={FruitPage} />
			</Router>
		</div>
	);
}

export default App;
