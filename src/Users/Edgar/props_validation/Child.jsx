import PropTypes from 'prop-types'

export default function Child({ posts, title, type }) {
  return (
    <div>
      {title.toUpperCase()}
      <h1>{type}</h1>
      {posts.map(elem => {
        return <p key={elem.id}>{elem.title}</p>
      })}
    </div>
  )
}

Child.defaultProps = {
  type: "dark"
}

Child.propTypes = {
  age: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['dark', 'light']).isRequired,
  obj: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    salary: PropTypes.number.isRequired
  }),
  posts: PropTypes.arrayOf(
    PropTypes.exact({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  )
}