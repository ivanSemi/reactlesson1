import "./App.css";
import Message from "./Message";
import Button from "./Button";

function App() {
  const nameTxt = "Неизвестный"; 
  return (
    <div className="App">
      <header className="App-header">
      <h1>Приветствую Вас</h1>
      <Message props={nameTxt}/>
      <Button />
      </header>
      
    </div>
  );
}

export default App;
