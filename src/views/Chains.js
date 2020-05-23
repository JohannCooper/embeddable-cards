import React from 'react';
import Card from 'react-bootstrap/Card';
import chainPng from '../images/chain-example.png';

function Chains() {
  return (
    <Card style={{ maxWidth: 800, margin: 20, alignSelf: 'center' }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>
          <i>Chains</i> are not yet implemented. Here's an example of how a <i>Chain</i> could look like:
        </Card.Title>
      </Card.Body>
      <Card.Img src={chainPng} style={{ maxWidth: 300, margin: 'auto' }} />
    </Card>
  );
}

export default Chains;
