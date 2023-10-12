import { useState } from 'react'

export default function Blog() {
  const [string, setString] = useState(['c', 'a', 'd', 'b']);
  const sortString = () => {
    setString(string.toSorted());
  };

  const addRandomLetter = () => {
    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const newArray = [...string, randomLetter];
    setString(newArray);
  };

  const deleteLastElement = () => {
    const newArray = [...string];
    newArray.pop();
    setString(newArray);
  };

  const shuffleString = () => {
    setString(string.toSorted(() => Math.random() - 0.5));
  };

  return (
    <div className='container'>
      <h1>{JSON.stringify(string)}</h1>
      <div className='btn-blog'>
        <button onClick={sortString}>Sort Letter</button>
        <button onClick={addRandomLetter}>Random Letter</button>
        <button onClick={deleteLastElement}>Delete Last Element</button>
        <button onClick={shuffleString}>Shuffle Letter</button>
      </div>
    </div>
  )
}