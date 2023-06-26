import React from "react";
import PropTypes from "prop-types";
// import Image from "./Image";
// import profileImage from './../img/profileImage.png';
import '/node_modules/bootstrap/dist/css/bootstrap.css';

function Tweet(props) {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-3">
          <img style={{width:'50px'}} src={require(`./../img/${props.image}.png`)} alt="profile picture"/>
        </div>
        <div class="col-9">
          <h3 align="left">{props.title}</h3>
          <p align="left">{props.body}</p>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Tweet.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
}

export default Tweet;