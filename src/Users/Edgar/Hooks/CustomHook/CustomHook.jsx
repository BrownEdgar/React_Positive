import { useState } from 'react'


export default function CustomHook(initialValue) {
  const [value, setValue] = useState(initialValue.current)

  const minus = () => setValue(value > initialValue.min ? value - 1 : value)
  const reset = () => setValue(initialValue.current)
  const plus = () => setValue(value < initialValue.max ? value + 1 : value)


  return [value, { minus, reset, plus }, setValue]
}
