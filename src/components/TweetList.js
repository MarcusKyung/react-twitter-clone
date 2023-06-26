import React from 'react';
import Tweet from './Tweet';
// import Image from './Image';
import Card from 'react-bootstrap/Card';

const tweetList = [
  {
    image: "profileImage",
    title: "Lorum Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "profileImage2",
    title: "Lorum Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "profileImage",
    title: "Lorum Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "profileImage2",
    title: "Lorum Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

function TweetList() {
  return (
    <React.Fragment>
      <Card>
      <hr/>
      {tweetList.map((tweet, index) => 
        <Tweet
          image={tweet.image}
          title={tweet.title}
          body={tweet.body}
          key={index}
        />
      )}
      </Card>
    </React.Fragment>
  )
}

export default TweetList;