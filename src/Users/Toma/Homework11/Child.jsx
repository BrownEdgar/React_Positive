import React from 'react'
import PropTypes from 'prop-types'


export default function Child({ users }) {
  return (
    <div>
      {
        users.map(elem => {
          return (
            <div className='App-users' key={elem.id}>
              <h1>{elem.name} {elem.username}</h1>
              <h2>Id: {elem.id}</h2>
              <p><span>Email:</span> {elem.email}</p>
              <p><span>Phone:</span> {elem.phone}</p>
              <p><span>Website:</span> {elem.website}</p>
              <span>Address:</span>
              <p><span>Street:</span> {elem.address.street}</p>
              <p><span>Suite:</span> {elem.address.suite}</p>
              <p><span>City:</span> {elem.address.city}</p>
              <p><span>Zipcode:</span> {elem.address.zipcode}</p>
              <span>Geo:</span>
              <p><span>Lat:</span> {elem.address.geo.lat}</p>
              <p><span>Lng:</span> {elem.address.geo.lng}</p>
              <span>Company:</span>
              <p><span>Name:</span> {elem.company.name}</p>
              <p><span>Catch Phrase:</span> {elem.company.catchPhrase}</p>
              <p><span>Bs:</span> {elem.company.bs}</p>
            </div>

          )

        })
      }
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
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.shape({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired
}