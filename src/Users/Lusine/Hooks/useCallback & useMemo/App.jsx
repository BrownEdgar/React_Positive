import Child from "./Child";
import { useMemo, useState, useCallback } from 'react'

export default function App() {
    const [value, setValue] = useState("");
    console.log('App render');
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleClick = useCallback(
        () => {
            console.log("Click");
        }, [])


    const child = useMemo(() => <Child handleClick={handleClick} />, 
    [handleClick])
  
  return (
    <div>
        <form>
            <input type="text" onChange={handleChange} value={value} />
        </form>
        {child}
    </div>
  )
}
