import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useState } from "react";
import classNames from "classnames";
import "./App.scss";

const initialValues = {
  email: "",
  username: "",
  password: "",
};

const validationSchema = object({
  email: string().email(),
  username: string().matches(/^[A-Z]/, "Please,write to upperCase"),
  password: string().min(8).max(16),
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  const handleSubmit = (values) => {
    const result = users.some((user) => user.email === values.email);

    if (result) {
      Formik.setFieldError('email', 'Email already exists');
    } else {
      const newUser = {
        id: Date.now(),
        ...values,
      }
      setUsers([...users, newUser])
    }
}

const handleUserId = (id) => {
    userId === id ? setUserId(null) : setUserId(id);
}

  return (

<div className="App">

      <div className="Formiks">
        <Formik
          initialValues={initialValues}
          validateOnBlur={true}
          validateOnChange={false}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
   >

<Form>
      
      <label htmlFor="email">Email</label>
      <Field type="email" name="email" id="email" />
      <ErrorMessage name="email" component={"p"} className="erorr" />
      
      <label htmlFor="username">Username</label>
      <Field type="text" name="username" id="username" />
      <ErrorMessage name="username" component={"p"} className="erorr" />
      
      <label htmlFor="password">Password</label>
      <Field type="password" name="password" id="password" />
      <ErrorMessage name="password" component={"p"} className="erorr" />
       <input type="submit" value="Save" />
      
          </Form>
      
        </Formik>
      </div>
      <hr />
      <div className="Container">
        {users.map((elem) => {
          return (
            <div key={elem.id} className="Container_children">
              <p>
                <span>email:</span>
                {elem.email}
              </p>
              <p>
                <span>username:</span>
                {elem.username}
              </p>
              <p>
                <span>password:</span>
                <span className="password">
                  {elem.id === userId ? elem.password : "*".repeat(10)}
                </span>
   <i  
   onClick={() => handleUserId(elem.id)}            
    className={classNames("fa-solid", {
   "fa-eye": elem.id !== userId,
  "fa-eye-slash": elem.id === userId,
})}>

</i>
   </p></div>
  );
        })}
      </div>
      </div>
  )}
