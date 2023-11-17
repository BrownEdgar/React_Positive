import React, { useCallback, useState, memo } from 'react'

export default function App2() {
    const [count, setCount] = useState(0)

    const total = useCallback(
        () => {
            let sum = 0;
            for(let i = 0; i <= 1e6; i++) {
                sum += i
            }
            return sum
        }, [])

   
  return (

    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>add count</button>
        <MemoComponent total={total} />
    </div>
  )
}

function Component({ total }) {
    console.log("Component run");
    return (
        <div>
            <h1>Sum:{total()}</h1>
        </div>
    )
    
}

const MemoComponent = memo(Component)
