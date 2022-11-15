import React , {useState} from 'react';
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from "universal-cookie";
import {ChannelListContainer,ChannelContainer ,Auth} from "./components"
import 'stream-chat-react/dist/css/index.css';
import "./App.css"

// to set chat we need apiKey :
const apiKey = "2wc9kd8ajn3d";

const cookies = new Cookies();


const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if(authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken)
}

function App() {
  const [createType,setCreateType] = useState('')
  const [isCreating,setIsCreating] = useState(false)
  const [isEdting,setIsEdting] = useState(false)

  if(!authToken) return <Auth/>
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team dark">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating ={ setIsCreating}
          setCreateType ={setCreateType}
          setIsEdting = {setIsEdting}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating ={ setIsCreating}
          isEdting = {isEdting}
          setIsEdting = {setIsEdting}
          createType={createType}
        />
      </Chat>
    </div>
  );
}

export default App
