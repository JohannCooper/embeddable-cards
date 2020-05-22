import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const currentUrl = window.location.href;
const width = 286;
const height = 202;

function AtomicEvent() {
  const [embedCode, setEmbedCode] = useState(`<iframe src="${currentUrl}" width="${width}" height="${height}"></iframe>`);
  const codeRef = useRef(null);

  function copyCode() {
    const textArea = codeRef.current;

    if (textArea === null) {
      return;
    }

    textArea.select();
    document.execCommand('copy');
    textArea.focus();
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Atomic Event</Card.Title>
        <Card.Text>
          Some quick example text to build on the event title and make up the bulk of the event's content.
        </Card.Text>
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
