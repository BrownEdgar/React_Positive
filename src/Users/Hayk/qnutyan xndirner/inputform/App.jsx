import { useState } from "react"
import "./App.scss"
export default function App() {
    const [completed, setCompleted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <input type="text"  required/>
            <label htmlFor="checkbox">
                <input type="checkbox"id="checkbox" onClick={()=>setCompleted(!completed)}/>
                yndunum es?</label>
            <input type="submit" value="submit" disabled={!completed}/>
        </form>

    </div>
  )
}
