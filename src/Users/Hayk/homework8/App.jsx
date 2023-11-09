import { useReducer, useState } from "react";
import { Field, Form, Formik } from "formik";
import { ADD_NAME, ADD_NUMBER, SHAFFLE, USER_NAME_CHANGE } from "./actionTypes";
import reduce, { initialState } from "./reducer";
import "./App.scss";

export default function App() {
  const [state, dispatch] = useReducer(reduce, initialState);



  const handleChange = () => {
    dispatch({ type: USER_NAME_CHANGE });
  };
  return (
    <div className="Container">
      {/* <h1>Actions: {state.actions}</h1> */}

      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => dispatch({ type: ADD_NAME, payload: values.name })}
        validateOnBlur={true}
        validateOnChange={false}
      >
        <Form>
          <h1>Developers: {JSON.stringify(state.developers)}</h1>
          <Field type="text" name="name" id="name" />
          <input type="submit" value="add name" />
        </Form>
      </Formik>
      <div className="box">
        <h1>User.Name: {state.user.name} </h1>
        <button onClick={handleChange}>chanje username</button>
      </div>
      <div className="box">
        <h1>Arr: {JSON.stringify(state.arr)} </h1>
        <button onClick={() => dispatch({ type: SHAFFLE })}>shaffle</button>
        <span>.......</span>
        <button onClick={() => dispatch({ type: ADD_NUMBER })}>
          add random number
        </button>
      </div>
    </div >
  );
}
