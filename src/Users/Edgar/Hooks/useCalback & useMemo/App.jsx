import { useCallback, useMemo, useState } from 'react';
import Child from './Child';

export default function App() {
  const [value, setValue] = useState(1);
  const [timeOutId, setTimeOutId] = useState(null)

  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    const s = setTimeout(() => {
      setValue(e.target.value)
    }, 500)
    setTimeOutId(s)

  }

  const child = useMemo(() => <Child value={value} />, [value])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <hr />
      <h1>Value: {value}</h1>
      <form>
        <input type="range" min={1} max={20000} step={1} onChange={handleChange} />
      </form>
      {child}

    </div>
  )
}
