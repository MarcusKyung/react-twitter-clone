import React from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function Follower(props) {
  return (
    <React.Fragment>
      
      <div class="row">
        <div class="col-3">
          <img style={{width:'50px'}} src={require(`./../img/${props.image}.png`)} alt="profile picture"/>
        </div>
        <div class="col-9">
          <h3 align="left">{props.name}</h3>
          <Button variant="outline-secondary">Button</Button>
        </div>
      </div>
      <hr/>
      
    </React.Fragment>
  )
}

Follower.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
}

export default Follower;