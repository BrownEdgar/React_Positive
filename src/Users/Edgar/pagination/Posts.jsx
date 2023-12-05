import Loader from './Loader/Loader'

export default function Posts({ posts }) {

  return (
    <div className='Posts'>
      {posts.length > 0
        ? (
          posts.map(elem => {
            return (
              <div className='Posts__item' key={elem.id}>
                <span>{elem.id}</span>
                <h3>{elem.title}</h3>
              </div>
            )
          })
        ) : <Loader />
      }
    </div>
  )
}
