import React from 'react';
import AtomicEvent from '../components/AtomicEvent';

import data from '../api/data.json';

const cards = Object.entries(data).map(([key, val]) => {
	const { content, date, img_file, location, tags, title } = val;
	const image = require(`../images/${img_file}`);
	return (
		<AtomicEvent
			key={key}
			content={content}
			date={date}
			id={key}
			image={image}
			location={location}
			tags={tags}
			title={title}
		/>
	);
});

//FIXME: Hotfix for the cards: made them all one column for the time being. Need to come back and implement a proper fix at some point.
function Cards() {
	return (
		<div
			style={{
				display: 'grid',
				gridAutoColumns: 'min-content',
				gridAutoRows: 'max-content',
				gridAutoFlow: 'dense',
				gridGap: 20,
				justifyContent: 'center',
				margin: 20,
			}}
		>
			{cards}
		</div>
	);
}

export default Cards;
