import  { useState } from 'react'

export default function CustomHook(initialValue) {
    const [value, setvalue] = useState(initialValue.current)
   

    const minus = () => setvalue(value >  initialValue.min ? value-1 : value )
    const plus = () => setvalue(value < initialValue.max ? value +1 : value)
    const reset = () => setvalue(initialValue.current)
    

return [value, {plus, minus, reset}]
    
  
}
