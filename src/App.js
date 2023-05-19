// import './App.css';
import React from "react";

function Input() {

  const [arr, setArr] = React.useState(['test', 'hello']);


  function handle() {
    const item = document.getElementById('inputContent').value
    setArr(prevState => [...prevState, item])
  }

  const mapped = arr.map(item => {
    return (
      <p >{item}</p>
    )
  })

  return (
    <div>
      <input id='inputContent' type='text' />
      <button onClick={handle}>Submit</button>
      <p>{mapped}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
