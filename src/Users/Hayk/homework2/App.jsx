import Comments from "./components/Comments"
import Posts from "./components/Posts"
import Users from "./components/Users"
import Todos from "./components/Todos"
import "./App.scss"

export default function App() {
 
  return (
    <div className="Container">
      <Comments />
      <Posts />
      <Users/>
      <Todos/>
    </div>
  )
}
