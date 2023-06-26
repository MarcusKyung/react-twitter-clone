import React from "react";
import profileImage from './../img/profileImage.png';
import PropTypes from "prop-types";

function Image() {
  return (
    <React.Fragment>
      <img src={profileImage} style={{width: '50px', padding: '1px', borderWidth: '1px', border: 'solid'}} alt="profilephotoimage"/>
    </React.Fragment>
  );
}
Image.propTypes= {
  border: PropTypes.string
}
export default Image;