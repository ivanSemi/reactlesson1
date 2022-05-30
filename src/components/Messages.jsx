import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { messageSelector } from '../redux/reducers/messagesReduser/selectors';

function Messages() {
    const chatMessage = useSelector(messageSelector);
    const {id} = useParams();

    const message = chatMessage.filter((message) => {
        if(!id ) return true;

        return message.chatId === Number(id);
    })
  return (
    <div>
        {message.map((item) => (
            <div key={item.id}>
                <div>{item.name}</div>
                <div>
                    <button>x</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Messages