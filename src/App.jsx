import React from 'react';
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from "universal-cookie";
import {ChannelListContainer,ChannelContainer ,Auth} from "./components"
import "./App.css"

// to set chat we need apiKey :
const apiKey = "2wc9kd8ajn3d";

const client = StreamChat.getInstance(apiKey);

const authToken = false;

function App() {
  if(!authToken) return <Auth/>
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team dark">
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App
