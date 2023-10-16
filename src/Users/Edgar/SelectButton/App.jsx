import { useState } from 'react'

const arr = ["one", 'two', 'three', 'four']
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div>
      <h1>currentIndex {currentIndex
      }</h1>
      {
        arr.map((btnName, index) => <button
          key={index}
          onClick={() => handleClick(index)}
          className={`${currentIndex === index ? 'green' : ''}`}
        >
          {btnName}
        </button>)
      }
    </div>
  )
}
