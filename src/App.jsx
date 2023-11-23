import { useDispatch, useSelector } from 'react-redux'
import EpisodesList from './components/episodes/EpisodesList'
import { addEpisodes } from './features/episodes/episodesSlice'

import './App.css'

export default function App() {
  const dispatch = useDispatch()

  const addedNewEpisodes = () => {
    const episode = {
      id: Math.random().toString(36).slice(2, 8),
      title: 'New episodes title here',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste, consequatur, labore obcaecati dolores quas laboriosam delectus quae vitae perspiciatis ut facere non optio?',
      categories: 'Foods',
      image: './images/episode_1.jpg'
    }
    dispatch(addEpisodes(episode))
  }

  return (
    <div className='App'>
      <div className="App-header">
        <h1>Latest episodes</h1>
        <button className='blue-btn'>View all episodes</button>
      </div>
      <EpisodesList />
      <button className='blue-btn' onClick={addedNewEpisodes}>Add new episodes</button>
    </div>
  )
}
