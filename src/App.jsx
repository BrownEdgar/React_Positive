import EpisodesList from "./components/Episodes/EpisodesList";

import './App.css'

export default function App() {

  return (
    <div className="App">
      <div className="App-header">
        <h1>Latest episodes</h1>
        <button>Viev all episodes</button>
        <EpisodesList />
      </div>

    </div>
  )
}
