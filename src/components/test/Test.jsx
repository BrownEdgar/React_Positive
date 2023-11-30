/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { connect } from 'react-redux'

export function Test(props) {
  console.log(props)
  return (
    <div>
      <pre>
        {JSON.stringify(props, null, 1)}
      </pre>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  const episodes = state.episodes.find(elem => elem.id === ownProps.count)
  const todo = state.todos.data.find(elem => elem.id === ownProps.count)

  return {
    episodes,
    todo
  }
}


export default connect(mapStateToProps)(Test)
