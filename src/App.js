import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('hello')
  
  let setToHello = () => {
    setValue('hello')
  }

  let setToGoodbye = () => {
    setValue('goodbye')
  }
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={setToHello}>Hello</button>
      <button onClick={setToGoodbye}>Goodbye</button>
    </div>
  );
}

export default App;
