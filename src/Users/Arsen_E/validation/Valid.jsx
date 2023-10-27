import PropTypes from 'prop-types'
export default function Valid({ users }) {

  return (
    <div>
      {
        users.map(elem => {
          return (
            <div key={elem.id} className='validation'>
              <p>{elem.name}-{elem.username}-{elem.email}</p>
            </div>
          )
        })}
    </div>
  )
}


Valid.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.exact({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.exact({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        }),
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        company: PropTypes.exact({
          name: PropTypes.string.isRequired,
          catchPhrase: PropTypes.string.isRequired,
          bs: PropTypes.string.isRequired,
        })
      })
    })
  )
}