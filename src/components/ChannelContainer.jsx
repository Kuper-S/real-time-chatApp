import React from 'react'
import { Channel, useChatContext } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';


function ChannelContainer({
      isCreating,
      setIsCreating,
      isEdting,
      setIsEdting,
      createType,
    }) {
  const {channel} = useChatContext();

  if(!isCreating) {
      return (
        <div className="channel__container">
          <CreateChannel
            createType={createType}
            setIsCreating = {setIsCreating}
          />

       </div>
      )
  }
  if(!isEdting) {
      return (
        <div className="channel__container">
            <EditChannel
            setIsEdting = {setIsEdting}
          />
        </div>
      )
  }
  const EmptyState = () =>{
    <div className='channel-empty__container'>
          <p className="channel-empty__first">This is the beginning of your chat history.</p>
          <p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
    </div>
  }

  return (
    <div className=" channel__container">
      <Channel 
          EmptyStateIndicator={EmptyState}>
          Message={(messagesProp , i) => <TeamMessage key={i} {...messagesProp}/>}
          
          <ChannelInner setIsEdting={setIsEdting}/>
      </Channel>
    </div>
  )
}

export default ChannelContainer
