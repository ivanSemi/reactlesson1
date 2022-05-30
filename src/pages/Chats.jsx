import React, { useState, useContext } from "react";
import { ThemeContext } from "../context";


const Chats = () => {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 2,
      name: "Banana",
    },
    {
      id: 3,
      name: "Orange",
    },
  ]);

  const addHandler = () => {
      let random = Math.random();
      let newValue = {
          id: random,
          name: name
      }
      setChats(prevState => [...prevState, newValue])
  };

  const deleteHandler = (id) => {
    let newValue = chats.filter((item) => item.id !== id);
    setChats(newValue)
  }

  const onChangeName = (e) =>{
    setName(e.target.value);
  }

  

  return (
    <div className="conteiner_box" style={{background: theme.background, color: theme.textColor}}>
      <span className="head_name_chats">Chats</span>
      <input
        name={name}
        value={name}
        onChange={onChangeName}
      />
      <button onClick={addHandler}>Создать</button>
      {chats.map((chat) => {
        return (
          <div className="author_box" key={chat.id}>
            <div className="author_name">{chat.name}</div>
            <div>
              <button onClick={deleteHandler.bind(null,chat.id)}>x</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
