import './App.css'
import EpisodesList from './components/episodes/EpisodesList'




export default function App() {

    return (
        <div className="App">
            <div className='App-header'>
                <h1>Latest epizodes</h1>
                <button>View all episodes</button>
            </div>
            <EpisodesList />
        </div>
    )
}