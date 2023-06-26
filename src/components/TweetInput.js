import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import tweetInputPhoto from './../img/tweetInputPhoto.png';


function TweetInput() {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Form className="d-flex">
            <img width="15%" src={tweetInputPhoto} alt="input photo"/>
            <Form.Control
              type="search"
              placeholder="What's Happening?"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default TweetInput;