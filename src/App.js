import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Atomic Event</Card.Title>
          <Card.Text>
            Some quick example text to build on the event title and make up the bulk of
            the event's content.
          </Card.Text>
          <Button variant="primary">Embed me!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
