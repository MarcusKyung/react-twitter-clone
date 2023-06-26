import React from "react";
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import background from './../img/background.png';
import profileImage from './../img/profileImage.png';

function Profile() {
  return (
    <Card >
      <Card.Img variant="top" src={background} alt="background"/>
      <Card.ImgOverlay style={{ position: 'absolute', top: '55px', left: '10px' }}>
        <img width="80px" src={profileImage} alt="profile"/>
      </Card.ImgOverlay>
      
      <Card.Body>
        <Card.Title>Profile Name</Card.Title>
        <ButtonGroup>
          <Button variant="outline-secondary">Tweets</Button>
          <Button variant="outline-secondary">Following</Button>
          <Button variant="outline-secondary">Followers</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default Profile;