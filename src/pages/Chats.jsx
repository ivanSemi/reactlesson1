import React, { useState } from 'react';

const Chats = () => {
    const [name, setName] = useState('');
    const [chats, setChats] = useState ([
        {
            id: 1,
            name: 'Apple'
        },
        {
            id: 2,
            name: 'Banana'
        },
        {
            id: 3,
            name: 'Orange'
        },
    ])
    return (
        <div>
            Chats
            <input name={name} value={name} onChange={(e)=> setName(e.target.value)} />
            <button>
                Создать
            </button>
            {chats.map((chat) => {
                return (
                    <div key={chat.id}>
                        <p className='author_name'>
                            {chat.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Chats;