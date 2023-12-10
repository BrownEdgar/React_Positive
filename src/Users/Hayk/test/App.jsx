import { useState } from "react"
import { useEffect } from "react"
import { raf } from "./DataJson"

export default function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(raf)
    }, [])
    
  return (
    <div>
        <pre>{JSON.stringify(data,null,1)}</pre>
        {
         data.map(elem=>{
            return <div key={elem.id}>
                <p>{elem.id}</p>
                <video src={elem.video}></video>
            </div>
         })
        }
        <p>vs</p>
   
    </div>
  )
}
