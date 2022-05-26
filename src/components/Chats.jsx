import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { chatsSelector } from '../redux/reducers/chatsReducers/selectors';

function Chats() {
    const chats = useSelector(chatsSelector);
    // const 
  return (
    <div>
        {
            chats.map((chat) => (
                <NavLink to={`/message/${chat.id}`}>
                    {chat.name}
                </NavLink>
            ))
        }
    </div>
  )
}

export default Chats