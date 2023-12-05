import { useSelector } from 'react-redux'
import './EpisodesList.css'

export default function EpisodesList() {
    const episodes = useSelector(state => state.episodes);
    console.log(episodes);
  return (
    <div className='Episodes'>
      {episodes.map(elem => {
        return (
            <div key={elem.id} className='Episodes-item'>
                <div className='flex'>
                    <img src={elem.images} />
                    <div className='Episodes-content'>
                        <div className='categories'>
                            <span>{elem.categories}</span>
                        </div>

                        <span className='ep-number'>
                            Episode {elem.id}
                        </span>
                        <h2 className='Episodes-title'>{elem.title}</h2>
                        <p className='description'>
                            {elem.desc}
                        </p>
                        <button className='Episodes-btn'>
                            View Episodes Detalis
                        </button>
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}
