import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import DefaultImage from '../images/default.jpg';

const src = window.location.href;
const width = 286;
const height = 202;

function AtomicEvent() {
  const [embedCode, setEmbedCode] = useState(
    `:hiccup [:iframe {:width "${width}px", :height "${height}px", :src "${src}"} " "]`,
  );
  const codeRef = useRef(null);

  function copyCode() {
    const textArea = codeRef.current;

    if (textArea === null) {
      return;
    }

    textArea.focus();
    textArea.select();
    document.execCommand('copy');
  }

  return (
    <Card style={{ width: '400px' }}>
      <Card.Body style={{ display: 'flex', paddingBottom: 10 }}>
        <Card.Text>MMM D, YYYY</Card.Text>
        <Card.Text className='ml-auto'>Location</Card.Text>
      </Card.Body>
      <Card.Img variant='top' src={DefaultImage} alt='Event Image' />
      <Card.Body style={{ paddingBottom: 10 }}>
        <div style={{ display: 'flex' }}>
          <Card.Text>Tags:</Card.Text>
          <Card.Text className='ml-auto'>#tag1</Card.Text>
          <Card.Text style={{ marginLeft: '10px' }}>#tag2</Card.Text>
          <Card.Text style={{ marginLeft: '10px' }}>#tag3</Card.Text>
        </div>
        <Card.Title>Event Title</Card.Title>
        <ul>
          <li>Event Item 1</li>
          <li>Event Item 2</li>
          <li>Event Item 3</li>
        </ul>
        <InputGroup className='mb-3'>
          <FormControl ref={codeRef} value={embedCode} onChange={(e) => setEmbedCode(e.target.value)} />
          <InputGroup.Append>
            <Button variant='primary' onClick={copyCode}>
              Copy
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

export default AtomicEvent;
