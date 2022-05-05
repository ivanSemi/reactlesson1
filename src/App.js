import "./App.css";
import Message from "./Message";
import React, {useEffect, useRef, useState} from "react";
// import {TextField, Button, SendIcon} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// когда будите проверять ДЗ проверьте рефы, дайте пожалуйста обратную связь... не понял рефы! 
// так же прошу поподробней пояснить на уроке, буду очень признателен, спасибо. 
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState(['']); 
  const [message, setMessage] = useState(['']);
  const inputRef = useRef();
  
  useRef(() => {
    inputRef.current?.focus();
  }, [name, message]);
  
  
  
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
    <ThemeProvider theme={darkTheme}>
    <h2>Приветствую Вас, <Message name={name}/></h2>
    <div className="input">
    <TextField ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} id="standard-basic" label="Введите имя" variant="standard" />
    <TextField ref={inputRef} value={message} onChange={(e) => setMessage(e.target.value)} id="standard-basic" label="Введите сообщение" variant="standard" />
    </div>
    <Button className="button" variant="contained" endIcon={<SendIcon />} onClick={addMessage}>НАЖМИ МЕНЯ</Button>
    <div>
    {messageList.map((itemMessage) => {
      return (
        <div key={itemMessage.id} className="box">
        {/* <div> */}
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#282c34', display: 'flex' }}>
        <ListItem >{itemMessage.name}</ListItem>
        <ListItem>{itemMessage.message}</ListItem>
        </List>
        </div>
        )
      })}
      </div>
      </ThemeProvider>
      </header>
      </div>
      );
    }
    
export default App;
