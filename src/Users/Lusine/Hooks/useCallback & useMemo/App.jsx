import { useState, useMemo,  } from 'react'
import './Child.scss';
import Child  from './Child'

export default function App() {
    const [value, setValue] = useState(1);
    const [timeOutId, setTimeOutId] = useState(null)
    
    
    const handleChange = (e) => {
      if(timeOutId) {
        clearTimeout(timeOutId)
      }

      const s = setTimeout(() => {
        setValue(e.target.value)
      }, 500);
      setTimeOutId(s)
     
    }

    const child = useMemo(() => <Child value={value} />, [value])

  return (
    <div>
     
      <hr />
      <h1>Value: {value}</h1>
        <form>
            <input type="range" min={1} max={20000} step={10} onChange={handleChange} />
        </form>
        {child} 
    </div>
  )
}