import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import AtomicEvent from './components/AtomicEvent';
import * as serviceWorker from './serviceWorker';

import defaultImage from './images/default.jpg';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <AtomicEvent
      content={['Event Item 1', 'Event Item 2', 'Event Item 3']}
      date='MMM D, YYYY'
      image={defaultImage}
      location='Location'
      tags={['tag1', 'tag2', 'tag3']}
      title='Event Title'
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
