import React from 'react';
import { useParams } from 'react-router-dom';
import AtomicEvent from '../components/AtomicEvent';

import data from '../api/data.json';

function Embedding() {
  const { id } = useParams();

  if (data[id] === undefined) {
    return <div>ERROR 404 NOT FOUND</div>;
  }

  const { content, date, img_file, location, tags, title } = data[id];
  const image = require(`../images/${img_file}`);

  return <AtomicEvent content={content} date={date} id={id} image={image} location={location} tags={tags} title={title} />;
}

export default Embedding;
