import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const src = window.location.href;
const width = 286;
const height = 202;
const code = `:hiccup [:iframe {:width "${width}px", :height "${height}px", :src "${src}"} " "]`;

function AtomicEvent({ content, date, image, location, tags, title }) {
  const [embedCode, setEmbedCode] = useState(code);
  const codeRef = useRef(null);

  function copyCode() {
    const textArea = codeRef.current;
    if (textArea === null) return;
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
  }

  const cardContent =
    Array.isArray(content) && content.length > 0 ? (
      <ul>
        {content.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    ) : null;
  const cardDate = date !== undefined ? <Card.Text>{date}</Card.Text> : null;
  const cardLocation = location !== undefined ? <Card.Text className='ml-auto'>{location}</Card.Text> : null;
  const cardHeader =
    date !== undefined || location !== undefined ? (
      <Card.Body style={{ display: 'flex', paddingBottom: 10 }}>
        {cardDate}
        {cardLocation}
      </Card.Body>
    ) : null;
  const cardImage = image !== undefined ? <Card.Img variant='top' src={image} alt='Event Image' /> : null;
  const cardTags =
    Array.isArray(tags) && tags.length > 0 ? (
      <div style={{ display: 'flex' }}>
        <Card.Text>Tags:</Card.Text>
        {tags.map((tag, index) => {
          const tagName = `#${tag}`;
          if (index === 0) {
            return <Card.Text className='ml-auto'>{tagName}</Card.Text>;
          }
          return <Card.Text style={{ marginLeft: '10px' }}>{tagName}</Card.Text>;
        })}
      </div>
    ) : null;
  const cardTitle = title !== undefined ? <Card.Title>{title}</Card.Title> : null;

  return (
    <Card style={{ width: '400px' }}>
      {cardHeader}
      {cardImage}
      <Card.Body style={{ paddingBottom: 10 }}>
        {cardTags}
        {cardTitle}
        {cardContent}
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
