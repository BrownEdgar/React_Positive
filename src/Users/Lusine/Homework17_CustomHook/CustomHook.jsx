import { useState, useEffect } from 'react'

export default function CustomHook(initialValue) {
  const [value, setValue] = useState([])

  useEffect(() => {
    const arr = new Array(initialValue.count)
      .fill()
      .map(() => Math.floor(Math.random() * (initialValue.max - options.min)) + initialValue.min)
    setValue()
  }, [initialValue.count, initialValue.min, initialValue.max])

  return [value]
}
