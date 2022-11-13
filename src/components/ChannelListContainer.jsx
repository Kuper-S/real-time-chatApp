import React from 'react'
import Cookies from 'universal-cookie'
import {ChannelList, useChatContext} from "stream-chat-react"
import {ChannelSeacrch , TeamChannelList, TeamChannelPreview} from "./";
import HospitalIcon from "../assets/icons8-hospital-100.png";
import LogoutIcon from "../assets/logout.png";

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt="Hospital" width="30"/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt="Logout" width="30"/>
            </div>
        </div>

    </div>
)
const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Medical Pager</p>
    </div>
)

function ChannelListContainer() {
  return (
    <>
        <SideBar/>
        <div className='channel-list__list__wrapper'>
            <CompanyHeader/>
            <ChannelSeacrch/>
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={()=>{}}
                List={(listPorps)=> (
                    <TeamChannelList
                        {...listPorps}
                        type ="team"
                    />
                )}
                Preview={(previewProps) =>(
                    <TeamChannelPreview 
                        {...previewProps}
                        type ="team"
                    />
                )}
            />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={()=>{}}
                List={(listPorps)=> (
                    <TeamChannelList
                        {...listPorps}
                        type ="messaging"
                    />
                )}
                Preview={(previewProps) =>(
                    <TeamChannelPreview 
                        {...previewProps}
                        type ="messaging"
                    />
                )}
            />
        </div>
    </>
  )
}

export default ChannelListContainer
