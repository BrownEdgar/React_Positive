
import { useEffect, useState } from "react"
import "./App.scss"


export default function App() {
 const [info, setInfo] = useState([])


 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => setInfo(data))
},[])


 const handleDelete = (index) =>{
   setInfo(info.toSpliced(index,1))
 }

  return (
    <div className="Container">

   {
    info.map((elem,index)=>{
      return (
         <div className="Box" key={elem.id} >
          <p className="Box_id">{elem.id}</p>
          <h3 className="Box_title">{elem.title}</h3>
          <p  className="Box_delete"  onClick={() => handleDelete(index)}>&#10008;</p>
         </div>
      )
    })
   }
    </div>
  )
}
