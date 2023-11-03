import PropTypes from 'prop-types'

export default function Child({ posts }) {
  return (
    <div>
        {
            posts.map(elem => {
                return (
                    <div key={elem.id}>
                        <h1>{elem.userId}</h1>
                        <h2>{elem.id}</h2>
                        <h3>{elem.title}</h3>
                        <h4>{elem.body}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

// Child.defaultProps = {
//     type: "dark" 
// }

Child.propTypes = {
    // count:PropTypes.number.isRequired,
    // title:PropTypes.string.isRequired,
    // obj:PropTypes.shape({
    //     id:PropTypes.number.isRequired,
    //     name:PropTypes.string.isRequired,
    //     skills:PropTypes.arrayOf(PropTypes.string)
    // })
    // obj:PropTypes.exact({
    //     albumId:PropTypes.number.isRequired,
    //     id:PropTypes.number.isRequired,
    //     title:PropTypes.string.isRequired,
    //     url:PropTypes.string.isRequired,
    //     thumbnailUrl:PropTypes.string.isRequired
    // })
    posts: PropTypes.arrayOf(
        PropTypes.exact({
            userId:PropTypes.number.isRequired,
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            body:PropTypes.string.isRequired,
        })
    )
}
