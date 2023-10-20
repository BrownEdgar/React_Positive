import { useState } from 'react'
import './App.scss'
import './App.css'


export default function App() {
const [people, setPeople] = useState([])  

 
const getPosts = () =>{
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>setPeople(data))
}



const handleDelete = (data) => {
setPeople(people.toSpliced(data, 1))
 }

return (



<div className='App'>


<button onClick={getPosts}>Click</button>


{
people.map(elem=>{
return <div key={people.id} className='aaa'>
<p>{elem.name}{elem.email}
<span onClick={handleDelete}>&#9747;</span>
</p>


</div>
})

}

</div>




)
}