import React from 'react';
import Follower from './Follower';
import Card from 'react-bootstrap/Card';

const followerList = [
  {
    image: "profileImage",
    name: "Lorum Ipsum",
  },
  {
    image: "profileImage2",
    name: "Lorum Ipsum",
  },
  {
    image: "profileImage",
    name: "Lorum Ipsum",
  },
  {
    image: "profileImage2",
    name: "Lorum Ipsum",
  }
];

function FollowerList() {
  return (
    <React.Fragment>
      <Card>
      <hr/>
      {followerList.map((follower, index) => 
        <Follower
          image={follower.image}
          name={follower.name}
          key={index}
        />
      )}
      </Card>
    </React.Fragment>
  )
}

export default FollowerList;