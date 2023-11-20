import { useSelector } from "react-redux"

export default function App() {
const state = useSelector((state)=>state);
 console.log(state);

 return (

<div>  
App
</div>
  )
}
