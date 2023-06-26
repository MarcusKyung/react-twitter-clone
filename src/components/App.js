import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Textbox from "./Textbox";
import TweetInput from "./TweetInput";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Profile />
      <Textbox />
      <TweetInput />
    </React.Fragment>
  );
}

export default App;