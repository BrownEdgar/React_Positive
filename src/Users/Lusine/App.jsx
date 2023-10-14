import React from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Lusine</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odit eveniet sit quia totam deleniti similique doloremque omnis modi iste tenetur velit rem nam officia quam ex obcaecati accusamus illum?
      </p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}
