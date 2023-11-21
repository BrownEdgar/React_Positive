import { useDispatch } from "react-redux"
import './App.css'
import EpisodesList from "./components/Episodes/EpisodesList"

export default function App() {
  const dispatch = useDispatch()
  return (

    <div className="App">
      <div className="App-header">
        
        <h1>Latest episodes</h1>
        <button>Viev all episodes</button>
     <EpisodesList/>
      </div>  
  
     </div>
  )
}
