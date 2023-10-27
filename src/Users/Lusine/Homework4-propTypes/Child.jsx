import React from 'react'
import PropTypes from 'prop-types'


export default function Child({ users }) {
  return (
    <div className='Child'>
      {users.map(elem => {
        return (
          <div key={elem.id} className='Child-container'>
            <p>{elem.id}</p>
            <h1>{elem.name}</h1>
            <h2>{elem.username}</h2>
            <p>{elem.email}</p>
            <p>{elem.address.street}</p>
            <p>{elem.address.suite}</p>
            <p>{elem.address.city}</p>
            <p>{elem.address.zipcode}</p>
            <p>{elem.address.geo.lat}</p>
            <p>{elem.address.geo.lng}</p>
          </div>
        )
      })}
    </div>
  )
}

Child.propTypes = {
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
          lat: PropTypes.number.isRequired,
          lng: PropTypes.number.isRequired,
        })
      }),
      phone: PropTypes.number.isRequired,
      website: PropTypes.string.isRequired,
      company: PropTypes.exact({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired
      })
    })).isRequired
}
