import { useState } from 'react'
import './App.css'

//custom hook
function useCounter(){
  const [count, setCount]=useState(0);

  function increaseCount(){
    //setCount(count+1);
    setCount(c=>c+1)
  }
  function decreaseCount(){
    setCount(c=>c-1);
  }
  return{
    count1:count,
    increaseCount:increaseCount,
    decreaseCount:decreaseCount
  };
}


function App() {
  const {count1, increaseCount, decreaseCount} = useCounter();
//  const {count2, decreaseCount} = useDecCounter();

  return (
    <div>
      <h1>Custom hooks</h1>
      <h1>{count1}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App
