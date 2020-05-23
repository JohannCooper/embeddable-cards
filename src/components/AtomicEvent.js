import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function AtomicEvent({ content, date, id, image, location, tags, title }) {
  const routeIndex = window.location.href.search(/\w\/.*$/g);
  const src = window.location.href.slice(0, routeIndex + 1);

  const cardRef = useRef(null);
  const codeRef = useRef(null);
  const [width] = useState(400);
  const [height, setHeight] = useState(0);
  const [embedCode, setEmbedCode] = useState(
    `:hiccup [:iframe {:width "${width}px", :height "${height}px", :src "${src}/embed/${id}"} " "]`,
  );

  useEffect(() => {
    if (cardRef.current === null) return;
    setHeight(cardRef.current.clientHeight);
  }, [cardRef]);

  useEffect(() => {
    setEmbedCode(`:hiccup [:iframe {:width "${width + 4}px", :height "${height + 7}px", :src "${src}/embed/${id}"} " "]`);
  }, [width, height, src, id]);

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
    <Card ref={cardRef} style={{ width: '400px' }}>
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
