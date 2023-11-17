import  { useCallback, useState } from 'react'
import Child from './Child'
import { useMemo } from 'react'


export default function App() {
    const [value, setValue] = useState(1);
    const [timeOutId, setTimeOutId] = useState(null)
    const [count, setCount] = useState(0)
    // const x = 1e6
//    const child = useMemo(() => <Child x={x} />, [x])
// const handleClick = useCallback(
//   () => {
//     console.log('click');
//   },[])


// const child = useMemo(() => <Child handleClick={handleClick}/>, [handleClick])

const handleChange = (e) => {
  if(timeOutId){
    clearTimeout(timeOutId)
  }
  const s = setTimeout(()=>{
    setValue(e.target.value)
  },500)
  setTimeOutId(s)
    
}

const child = useMemo(() =>  <Child value={value} />, [value])


  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <hr/>
       <h1>Value:{value}</h1>
        {/* <h1>Value:{value}</h1>
        <button onClick={() => setValue(value + 1)}>add value</button>
       {child} */}
       {/* <input type='text' onChange={handleChange} value={value}/>
       <Child handleClick={handleClick}/> */}
       <form>
        <input type="range" min={1} max={20000} step={1} onChange={handleChange}/>
       </form>
       {child}
      
    </div>
  )
}
