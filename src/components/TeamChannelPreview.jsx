import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react';

function TeamChannelPreview({channel,type}) {
    const {channel : activeChannel, client} = useChatContext();

    const ChannelPreview = () =>(
        <p className='channel-preview__'></p>
    )
  return (
    <div>
      
    </div>
  )
}

export default TeamChannelPreview
