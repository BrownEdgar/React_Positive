import { useState } from 'react'
import Blog from './components/Blog'
import './App.css'

function App() {
  const [data, setData] = useState(["Jhon", "Leonid", "Spartak", "Sebastian"]);

  const handleDelete = (index) => {
    setData(data.toSpliced(index, 1))
  }

  return (
    <div className='App'>
      <Blog persons={data} handleDelete={handleDelete} />
    </div>
  )
}

export default App
