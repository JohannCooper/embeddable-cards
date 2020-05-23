import React from 'react';
import Card from 'react-bootstrap/Card';
import chainPng from '../images/chain-example.png';

function Chains() {
	return (
		<Card
			style={{
				maxWidth: '800px',
				margin: '20px',
				alignSelf: 'center',
			}}
		>
			<Card.Body
				style={{
					display: 'flex',
					flexFlow: 'column',
					alignItems: 'center',
				}}
			>
				<Card.Title style={{ fontWeight: 'bold' }}>
					<i>Chains</i> are not yet implemented. Here's an example of how a <i>Chain</i> could look like:
				</Card.Title>
				<Card.Img src={chainPng} style={{ maxWidth: '300px', marginTop: '20px' }} />
			</Card.Body>
		</Card>
	);
}

export default Chains;
