import { useState,useEffect } from "react";
import axios from "./axios" 
import Todos from "./Todos";
import"./App.scss"




export default function App() {
  const [todos,setTodos] = useState([])

  useEffect(() => {
    //   axios("https://jsonplaceholder.typicode.com/todos")
    //   .then(res => setTodos(res.data))




    //   axios("https://jsonplaceholder.typicode.com/todos", {
    //       params: {
    //         _limit: 10,
    //         _start: 20
    //       }
    //   })
    //   .then(res => setTodos(res.data))



    // axios({
    //     baseURL: "https://jsonplaceholder.typicode.com/",
    //     url: "posts",
    //     params: { _limit: 20 }
    // })
    // .then(res => console.log(res.data))




    axios('todos').then(res => setTodos(res.data))

    },[])

  return (
    <div>
      <Todos todos = {todos}/>
    </div>
  )
}
