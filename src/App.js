import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(1)
  const [user, setUser] = useState('Gabe')
  const [isGabe, setIsGabe] = useState(true)
  const [objUser, setObjUser] = useState({name: 'Gabe', location: 'Berkeley'})
  const [finishedGrades, setFinishedGrades] = useState([55, 75, 100])
  const [grades, setGrades] = useState([])

  const increaseCount = () => {
    setCount(count + 1)
  }

  const setToWeston = () => {
    setUser('Weston')
    setIsGabe(false)
  }

  const setToApril = () => {
    setUser('April')
    setIsGabe(false)
  }

  const setToGabe = () => {
    setUser('Gabe')
    setIsGabe(true)
  }

  const setObjUserToWeston = () => {
    setObjUser({...objUser, name: 'Weston'})
  }
  const setObjUserToApril = () => {
    setObjUser({...objUser, name: 'April'})
  }
  const setObjUserToGabe = () => {
    setObjUser({...objUser, name: 'Gabe'})
  }

  const addHundred = () => {
    setFinishedGrades([...finishedGrades, 100])
  }

  // // add 1 to count every 5 seconds
  // setInterval(() => {
  //   setCount(count + 1)
  // }, 5000)

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={increaseCount}>Count up!</button>
      <h2 style={{color: isGabe ? 'purple' : 'black'}}>The user is: {user}</h2>
      <button onClick={setToWeston}>Weston</button>
      <button onClick={setToApril}>April</button>
      <button onClick={setToGabe}>Gabe</button>
      <h2>{objUser.name}</h2>
      <h2>{objUser.location}</h2>
      <button onClick={setObjUserToWeston}>SetObjUser Weston</button>
      <button onClick={setObjUserToApril}>SetObjUser April</button>
      <button onClick={setObjUserToGabe}>SetObjUser Gabe</button>
      <h1>Grades:</h1>
      {finishedGrades.map((grade, i) => {
        return <p key={i}>{grade}</p>
      })}
      <button onClick={addHundred}>New 100</button>
    </div>
  );
}

export default App;
