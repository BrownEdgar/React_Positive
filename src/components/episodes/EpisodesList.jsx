import { useDispatch, useSelector } from 'react-redux'
import { deleteEpisode } from '../../features/episodes/episodesSlice';
import './EpisodesList.css'

export default function EpisodesList() {
  const episodes = useSelector(state => state.episodes);
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteEpisode(id));
  };
 

return (
   <div className='Episodes'>
    {episodes.map(elem => {
    return (
        <div key={elem.id} className='Episodes-item'>
        <div className="flex">
        <img src={elem.image} />
        <div className='Episodes-content'>
        <span className='delete' onClick={() => handleDelete(elem.id)}>&#x2718;</span>
        <div className="categories">
        <span>{elem.categories}</span>
        </div>
        <span className='ep-number'>Episode {elem.id}</span>
        <h2 className='Episodes-title'>{elem.title}</h2>
        <p className="description">{elem.desc}</p>
        <button className='Episodes-btn blue-btn'>View Episode Details</button>
        </div>
      </div>
    </div>
        )
      })}
    </div>
  )
}