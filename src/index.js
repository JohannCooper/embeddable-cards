import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import AtomicEvent from './components/AtomicEvent';
import * as serviceWorker from './serviceWorker';

import data from './api/data.json';

const cards = Object.entries(data).map(([key, val]) => {
  const { content, date, img_file, location, tags, title } = val;
  const image = require(`./images/${img_file}`);
  return <AtomicEvent content={content} date={date} image={image} location={location} tags={tags} title={title} />;
});

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    {cards}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
