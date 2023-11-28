import { useSelector } from 'react-redux'
import './EpisodesList.css'

export default function EpisodesList() {
  const episodes = useSelector((state) => state.episodes)
  console.log(episodes)
  return (

    <div className='Episodes'>
      {episodes.map(elem => {
        return (
          <div id={elem.id} className="Episodes-item" key={elem.id}>
            <div className="flex">
              <img src={elem.image} />
              <div className="Episodes-content">
                <div className="categories">
                  <span>{elem.categories}</span>
                </div>

                <div className="Episodes-title">
                  <span>{elem.title}</span>
                </div>

                <div className="description">
                  <h2>{elem.description}</h2>
                </div>

                <button className="blue-btn">
                  Viev episodes detal
                </button>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}
