import { connect } from "react-redux";


export function Test(props) {
  return (
    <div>
     <pre>
      {JSON.stringify(props, null, 1)}
     </pre>
    </div>
  )
}


const mapStateToProps = (state,ownProps) => {
  const episodes = state.episodes.find(elem => elem.id === ownProps.count)
  const todo = state.todos.data.find(elem => elem.id === ownProps.count)


    console.log({state,ownProps});
    return {
      episodes,
      todo
    }
}

export default connect(mapStateToProps)(Test)