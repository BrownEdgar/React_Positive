import { useDispatch } from 'react-redux'
import './App.css'
import { addEpisodes } from './features/episodes/episodesSlice'
import EpisodesList from './components/episodes/EpisodesList'
// import TodoList from './components/todos/TodoList'
// import Test from './components/test/Test'

export default function App() {
  const dispatch = useDispatch()

const addedNewEpisodes = () =>{
  const episode = {
    id: Math.random().toString(36).slice(2, 8),
    title: 'New episodes title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quaerat facilis consectetur minus saepe error officiis, sint iste numquam, assumenda exercitationem accusamus laborum quidem.',
    categories:'Foods',
    image: './images/episode_2.jpg'

  }
  dispatch(addEpisodes(episode))

}

return (
  <div className='App'>
    <div className='App-header'>
      <p>Latest episodes</p>
      <button className='blue-btn'>View all episodes</button>
  </div>

    <button className='blue-btn' onClick={addedNewEpisodes}>add new episodes</button>
    <EpisodesList />
    {/* <Test count={1} /> */}
    {/* <TodoList /> */}

   
  </div>
  )
}

