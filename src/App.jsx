
import './App.css'
import LOCALS from './i18n/local';

export default function App() {

  
  return (
    <div className="App">
      <select name="language" id="language">
        {
          Object.keys(LOCALS).map(elem => {
            return <option value={elem}>{LOCALS[elem] }</option>
          })
        }
  </select>
    

    </div>
  )
}
