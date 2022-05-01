import "./App.css";
import Message from "./Message";
import {useEffect, useState } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState(['Неизвестный']); 
  const [message, setMessage] = useState(['']);
  
  const addMessage = () => {
    let random = Math.random();
    setMessageList([...messageList, {
      name: name,
      message: message,
      id: random,
    }])
  }

  useEffect(() => {
    setTimeout(() =>{
      if (messageList.length > 0) {
        alert("сообщение отправлено");
      }
    }, 1500)
  }, [messageList])
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Приветствую Вас, <Message props={name}/></h1>
        
        <div className="input">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя"/>
          <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Введите сообщение"/>
        </div>
        <button className="button" onClick={addMessage}>НАЖМИ МЕНЯ</button>
        <div>
          {messageList.map((itemMessage) => {
            return (
              <div key={itemMessage.id} className="box">
              <div>
              <p className="author">{itemMessage.name}</p>
              </div>
              <div>
              <p className="message">{itemMessage.message}</p>
              </div>
              </div>)
            })}
        </div>
      </header>
    </div>
      );
    }
    
    export default App;
