import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './views/About';
import Cards from './views/Cards';
import Chains from './views/Chains';
import Embedding from './views/Embedding';
import Feedback from './views/Feedback';
import Home from './views/Home';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/cards' component={Cards} />
      <Route exact path='/chains' component={Chains} />
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

  console.log(realLocation);

  return (
    <div style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
      {realLocation !== '/embed' ? <Navigation /> : null}
      <Routes />
    </div>
  );
}

export default App;
