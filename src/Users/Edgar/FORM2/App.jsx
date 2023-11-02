import { useState } from 'react';
import "./App.scss";
import classNames from 'classnames';

const options = {
  'htmlcss': 40000,
  'javascript': 50000,
  'react': 60000,
  'node': 65000
}

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUserID, setcurrentUserID] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, teacher, language } = e.target;
    const user = {
      id: Date.now(),
      username: username.value,
      password: password.value,
      teacher: teacher.value,
      language: language.value,
    }
    setUsers([...users, user])
  }
  const handleClick = (userId) => {
    if (userId === currentUserID) {
      setcurrentUserID(null)
    } else {
      setcurrentUserID(userId)
    }
  }

  const total = () => {
    return users.reduce((acc, cv) => acc + options[cv.language], 0)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username">username</label>
          <input type="text" id='username' name='username' />
        </div>

        <div className='form-group'>
          <label htmlFor="password">password</label>
          <input type="password" id='password' name='password' />
        </div>

        <div className='form-group'>
          <label htmlFor="teacher">select your teacher</label>
          <select name="teacher" id="teacher" defaultValue={"Emil"}>
            <option value="Hayk">Hayk</option>
            <option value="Zmruxt">Zmruxt</option>
            <option value="Emil">Emil</option>
            <option value="Edgar">Edgar</option>
          </select>
        </div>
        <div className='form-group form-group_check'>
          <label htmlFor="Html&css">
            <input type="radio" name='language' value="htmlcss" id='Html&css' />
            <span>Html&css</span>
          </label>
          <label htmlFor="js">
            <input type="radio" name='language' value="javascript" id='js' />
            <span>Javascript</span>
          </label>
          <label htmlFor="React">
            <input type="radio" name='language' value="react" id='React' />
            <span>React.js</span>
          </label>
          <label htmlFor="Node">
            <input type="radio" name='language' value="node" id='Node' />
            <span>Node.js</span>
          </label>
        </div>
        <div className="form-group">
          <input type="submit" value="add user" />
        </div>
      </form>
      <div className="users">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>password</th>
              <th>teacher</th>
              <th>language</th>
            </tr>
          </thead>
          <tbody>
            {users.map(elem => {
              return (
                <tr key={elem.id} className={classNames({
                  [`color-${elem.language}`]: true
                })}>
                  <td>{elem.id % 1e4}</td>
                  <td>{elem.username}</td>
                  <td className='pass'>
                    {currentUserID === elem.id ? elem.password : "*".repeat(10)}
                    <i className={classNames("fa-solid", {
                      'fa-eye': currentUserID !== elem.id,
                      'fa-eye-slash': currentUserID === elem.id
                    })}
                      onClick={() => handleClick(elem.id)}></i>
                  </td>
                  <td>{elem.teacher}</td>
                  <td>{elem.language}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            {users.length > 0 &&
              <tr>
                <td colSpan={5}>
                  {total()}
                  դրամ
                </td>
              </tr>
            }
          </tfoot>
        </table>
      </div>
    </div>
  )
}
