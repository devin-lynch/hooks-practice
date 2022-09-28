import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(1)
  const [user, setUser] = useState('Gabe')

  const increaseCount = () => {
    setCount(count + 1)
  }

  const setToWeston = () => {
    setUser('Weston')
  }

  const setToApril = () => {
    setUser('April')
  }

  const setToGabe = () => {
    setUser('Gabe')
  }

  // // add 1 to count every 5 seconds
  // setInterval(() => {
  //   setCount(count + 1)
  // }, 5000)

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={increaseCount}>Count up!</button>
      <h2>The user is: {user}</h2>
      <button onClick={setToWeston}>Weston</button>
      <button onClick={setToApril}>April</button>
      <button onClick={setToGabe}>Gabe</button>

    </div>
  );
}

export default App;
