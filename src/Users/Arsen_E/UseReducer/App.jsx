import { useReducer } from "react"
import reducer,{initialValues} from "./reducer"
import  {ADD_ELEM,REMOVE_ELEM,SORT_ARRAY} from './actionTypes'

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialValues)

 const handleClick = () => {
   dispatch({type:'ADD_ELEM',payload:555})
 }
  
 const handleDelete = () => {
   dispatch({type:'REMOVE_ELEM',payload:4})
 }


 return (
<div>
<h1>state:{JSON.stringify(state)}</h1>
<button onClick={handleClick}>add elem</button>
<button onClick={handleDelete}>delete elem</button>
<button onClick={()=> dispatch({type:'SORT_ARRAY'})}>sort </button>
</div>
  )
}
