import PropTypes from 'prop-types'

export default function Users({ users }) {

  return (
    <div className='Users'>
        {
          users.map(elem => {
            return (
              <div key={elem.id}>
                <p>{elem.id}</p>
                <p>{elem.name}</p>
                <p>{elem.username}</p>
                <p>{elem.email}</p>
                <p>{elem.address.street}</p>
                <p>{elem.address.suite}</p>
                <p>{elem.address.city}</p>
                <p>{elem.address.zipcode}</p>
                <p>{elem.address.geo.lat}</p>
                <p>{elem.address.geo.ing}</p>
                <p>{elem.phone}</p>
                <p>{elem.website}</p>
                <p>{elem.company.name}</p>
                <p>{elem.company.catchPhrase}</p>
                <p>{elem.company.bs}</p>
              </div>
            )
          })  
        }
    </div>
  )
}

Users.propTypes = {
  users:PropTypes.arrayOf(
    PropTypes.exact({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
      username:PropTypes.string.isRequired,
      email:PropTypes.string.isRequired,
      address:PropTypes.exact({
        street:PropTypes.string.isRequired,
        suite:PropTypes.string.isRequired,
        city:PropTypes.string.isRequired,
        zipcode:PropTypes.string.isRequired,
        geo:PropTypes.exact({
          lat:PropTypes.string.isRequired,
          lng:PropTypes.string.isRequired
        }),
      }),
      phone:PropTypes.string.isRequired,
      website:PropTypes.string.isRequired,
      company:PropTypes.exact({
        name:PropTypes.string.isRequired,
        catchPhrase:PropTypes.string.isRequired,
        bs:PropTypes.string.isRequired,
      }),
    })
  ).isRequired
}