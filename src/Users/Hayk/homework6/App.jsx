import { useState } from "react";
import "./App.scss";
import classNames from "classnames";

const count = {
  htmlCss: 1000,
  javaScript: 1000,
  reactJs: 1000,
  nodeJs: 1000,
};
export default function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [meil, setMeil] = useState("");
  console.log(meil);

  const handleClick = (e) => {
    e.preventDefault();
    const { username, password, email, teacher, it } = e.target;

    const value = {
      id: Date.now(),
      username: username.value,
      password: password.value,
      email: email.value,
      teacher: teacher.value,
      it: it.value,
    };

    const result = users.some((user) => user.email === value.email);
    result
      ? alert("sorry, well, there is already such an email")
      : setUsers([...users, value]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const values = e.target.search.value;
    setMeil(values);
  };

  const handleUserId = (id) => {
    userId === id ? setUserId(null) : setUserId(id);
  };
  const total = () => {
    return users.reduce((acc, cv) => acc + count[cv.it], 0);
  };

  return (
    <div className="App">
      <div className="Container">
        <form onSubmit={handleClick}>
          <div className="form_input">
            <label htmlFor="username">username</label>
            <input type="text" id="username" required />
          </div>

          <div className="form_input">
            <label htmlFor="password">password</label>
            <input type="password" id="password" required />
          </div>

          <div className="form_input">
            <label htmlFor="email">Email</label>

            <input type="email" id="email" required />
          </div>

          <div className="form_input">
            <label htmlFor="teacher">select your teacher</label>
            <select name="teacher" id="teacher">
              <option value="teacher">Hayk</option>
              <option value="teacher">Edgar</option>
              <option value="teacher">Vazgen</option>
              <option value="teacher">Baxdasar</option>
            </select>
          </div>

          <div className="form_input">
            <label htmlFor="htmlCss">
              <input
                type="radio"
                value="htmlCss"
                id="htmlCss"
                name="it"
                required
              />
              <span>Html&css</span>
            </label>

            <label htmlFor="javaScript">
              <input
                type="radio"
                value="javaScript"
                id="javaScript"
                name="it"
              />
              <span>javaScript</span>
            </label>

            <label htmlFor="reactJs">
              <input type="radio" value="reactJs" id="reactJs" name="it" />
              <span>React.js</span>
            </label>

            <label htmlFor="nodeJs">
              <input type="radio" value="nodeJs" id="nodeJs" name="it" />
              <span>Node.js</span>
            </label>
          </div>

          <div className="submit">
            <input type="submit" value="add" />
          </div>
        </form>
        <form onSubmit={onSubmit} className="formik">
          <input type="search" id="search" />
          <input type="submit" />
        </form>
      </div>

      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>password</th>
              <th>email</th>
              <th>teacher</th>
              <th>language</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem) => {
              return (
                <tr
                  key={elem.id}
                  className={classNames({
                    color: elem.email === meil,
                  })}
                >
                  <td>{elem.id % 1e4}</td>
                  <td>{elem.username}</td>
                  <td className="password">
                    {elem.id === userId ? elem.password : "*".repeat(10)}
                    <i
                      onClick={() => handleUserId(elem.id)}
                      className={classNames("fa-solid", {
                        "fa-eye-slash": elem.id !== userId,
                        "fa-eye": elem.id === userId,
                      })}
                    ></i>
                  </td>
                  <td>{elem.email}</td>
                  <td>{elem.teacher}</td>
                  <td>{elem.it}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {users.length > 0 && (
              <tr>
                <td colSpan={6}>{total()}</td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </div>
  );
}
