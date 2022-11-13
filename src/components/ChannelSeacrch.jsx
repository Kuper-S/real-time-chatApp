import React ,{useState,useEffect}from 'react'
import {useChatContext} from "stream-chat-react"

import { SearchIcon } from '../assets';

function ChannelSeacrch() {
    const[query,setQuery] = useState("");
    const[loading,setLoading] = useState(false);

    const getChennels = async (text) =>{
        try{
            // TODO : feath channels
        }catch(error){
            setQuery('')
        }
    }


    const onSeacrh = (event) =>{
        // to realode the page use preventDefault()
        event.preventDefault();

        setLoading(true)
        setQuery(event.target.value);
        getChennels(event.target.value)
    }
  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className="channel-serach__input__icon">
                <SearchIcon/>
            </div>
            <input 
                className="channel-search__input__text"
                placeholder="Search" 
                type="text"
                value={query}
                onChange={onSeacrh}

            />
        </div>
    </div>
  )
}

export default ChannelSeacrch
