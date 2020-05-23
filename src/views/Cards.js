import React from 'react';
import AtomicEvent from '../components/AtomicEvent';

import data from '../api/data.json';

const cards = Object.entries(data).map(([key, val]) => {
  const { content, date, img_file, location, tags, title } = val;
  const image = require(`../images/${img_file}`);
  return <AtomicEvent content={content} date={date} image={image} location={location} tags={tags} title={title} />;
});

function Cards() {
  return <div>{cards}</div>;
}

export default Cards;
