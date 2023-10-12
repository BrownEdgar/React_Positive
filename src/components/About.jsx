import { useState } from 'react'
export default function About(props) {
  const [data, setData] = useState([1, 2, 3])
  return (
    <div>
      <h1>About Vite {data}</h1>
      <p>
        However, as we build more and more ambitious applications, the amount of JavaScript we are dealing with is also increasing dramatically. It is not uncommon for large scale projects to contain thousands of modules. We are starting to hit a performance bottleneck for JavaScript based tooling: it can often take an unreasonably long wait (sometimes up to minutes!) to spin up a dev server, and even with Hot Module Replacement (HMR), file edits can take a couple of seconds to be reflected in the browser. The slow feedback loop can greatly affect developers  productivity and happiness.
      </p>
      <button onClick={props.handleClick}>add count</button>
    </div>
  )
}