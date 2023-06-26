import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Textbox from "./Textbox";
import TweetInput from "./TweetInput";
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import TweetList from "./TweetList";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import FollowerList from "./FollowerList";


function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Profile />
            <Textbox />
          </div>
          <div class="col">
            <TweetInput />
            <TweetList />
          </div>
          <div class="col">
            <FollowerList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;