
import { useDispatch } from 'react-redux'
import EpisodesList from './components/episodes/EpisodesList'
import { addEpisodes } from './feauters/episodes/episodesSlice'

import './App.css';



export default function App() {
  const dispatch = useDispatch()

const addNewEpisodes = () => {
  const episode = {
    id: Math.random().toString(36).slice(2, 8),
    title: "New episodes title here",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi in ad quaerat asperiores aspernatur hic eius, maiores eum ipsa deserunt!",
    categories: "Foods",
    image:'./images/episodes_1.jpg'

  }
  dispatch(addEpisodes(episode))
}
}



