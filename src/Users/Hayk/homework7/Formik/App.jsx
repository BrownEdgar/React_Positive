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
  username: string().matches(/^[A-Z]/, "cmdskpmp"),
  password: string().min(8).max(16),
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  const handleSubmit = (values, formik) => {
    const result = users.some((user) => user.email === values.email);

    if (result) {
      formik.setFieldError("email", "email exist");
    } else {
      const newUser = {
        id: Date.now(),
        ...values,
      };
      setUsers([...users, newUser]);
      formik.resetForm();
    }
  };

  const handleUserId = (id) => {
    userId === id ? setUserId(null) : setUserId(id);
  };

  return (
    <div className="Container">
      <div className="Users">
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
      <div className="Box">
        {users.map((elem) => {
          return (
            <div key={elem.id} className="Box_elements">
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
                  })}
                ></i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
