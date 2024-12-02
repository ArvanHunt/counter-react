import { useState } from "react"
import logo from './logo.svg';
import './App.css';


// let counter = 0;



function App() {
  let [counter , setCounter] = useState(0)

  let addValue = () => {
    setCounter(counter+1);
  }

  let removeValue = () => {
    setCounter(counter-1);
  }

  let reset = () => {
    setCounter(0);
  }

  return (
    <>
    <h1>Counter Project using React</h1>
    <h3>Counter value : {counter}</h3>
    <button 
    onClick={addValue}
    >Add value</button>

    <button
    onClick={removeValue}>Remove value</button>

    <button
    onClick={reset}>Reset</button>

    <br />

    <h1>What I learned:</h1>
    <ul>
      <li>Setting up a React environment.</li>
      <li>Using the useState hook to manage component state.</li>
      <li>Handling events like button clicks with React.</li>
      <li>Implementing basic conditional logic for stopping the counter at zero.</li>


    </ul>
    </>
  );
}

export default App;
