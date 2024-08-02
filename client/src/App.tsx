import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState()

  useEffect(()=>{
    async function getData(){
      const json = await fetch('http://localhost:8080/api/abc');
      const data = await json.json()
      console.log(data)
      setData(data)
    }
    getData()

  },[])

  return (
    <>
      <div>
        <h1>{JSON.stringify(data)}</h1>
       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
