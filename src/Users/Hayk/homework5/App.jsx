import { useState } from "react";
import Form from "./Form";
import "./App.scss";

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    const obj = {
      id: Date.now(),
      name: name.value,
      password: password.value,
    };
    setUsers([...users, obj]);
    e.target.reset();
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    const result = users.some((user) => user.name === value);
    console.log(result)
    result ? alert("such a person exists") : alert("there is no such person");
    e.target.reset();
  };

  return (
    <div className="App">
      <pre>{JSON.stringify(users)}</pre>
      <form className="App_form" onSubmit={handleSubmit}>
        <label htmlFor="name">user</label>
        <input type="text" id="name" required />
        <label htmlFor="password">password</label>
        <input type="password" id="password" required />
        <input type="submit" value="add" />
      </form>
      <Form handleChange={handleChange} />
    </div>
  );
}
