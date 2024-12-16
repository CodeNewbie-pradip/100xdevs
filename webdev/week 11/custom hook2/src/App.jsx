import { useState } from 'react'
import './App.css'
import {usePostTitle, useFetch} from './hooks/useFetch'

function App() {
  const [id, setId]=useState(1);
  const {finalData}=useFetch("https://jsonplaceholder.typicode.com/posts/"+id);

  function increase(){
    setId(c=>c+1);
  }

  return (
    <div>
      <h1>Example of cutom hook</h1>
      {finalData && (<div>
        <p><strong>UserId:</strong>{finalData.userId}</p>
        <p><strong>Id:</strong>{finalData.id}</p>
        <p><strong>Title:</strong>{finalData.title}</p>
        <p><strong>Body:</strong>{finalData.body}</p>
        </div>
      )}
      <button onClick={increase}> increase id: {id}</button>

    </div>
  )
}

export default App
