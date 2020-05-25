import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './views/About';
import Cards from './views/Cards';
import Embedding from './views/Embedding';
import Feedback from './views/Feedback';

function Routes() {
	return (
		<Switch>
			<Route exact path='/' component={Cards} />
			<Route exact path='/about' component={About} />
			<Route exact path='/cards' component={Cards} />
			<Route path='/embed/:id' component={Embedding} />
			<Route exact path='/feedback' component={Feedback} />
		</Switch>
	);
}

function App() {
	const location = useLocation();
	const routeIndex = location.pathname.search(/\w\/.*$/g);
	const src = location.pathname.slice(routeIndex + 1);
	const realLocation = location.pathname.replace(src, '');

	return (
		<div style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
			{realLocation !== '/embed' ? <Navigation /> : null}
			<Routes />
		</div>
	);
}

export default App;
