import { ErrorMessage, Field, Form, Formik } from 'formik'
import  { useState } from 'react'
import  { object, string } from 'yup'
import './App.scss'


const validationSchema = object({
    username: string()
    .min(3)
    .max(23)
    .required(),
    

})

const initialValues ={email: '', username: '',password:'' }
export default function App() {
    const [users, setUsers] = useState([]);
    const [savedUsers, setSavedUsers] = useState([]);


    const handleSubmit = (values, formik) => {
      const emailExists = users.some(user => user.email === values.email);
      if (emailExists) {
        formik.setFieldError('email', 'Email already exists');
    } else {
        setUsers([...users, values]);
        setSavedUsers([...savedUsers, values]);
        formik.resetForm();
    }
};

return (
    <div>
<Formik
initialValues={initialValues}
onSubmit={handleSubmit}
validateOnChange={false}
validateOnBlur={true}
validationSchema={validationSchema }
>
<Form>
    <label htmlFor='email'>Email</label>
    <Field type='email' name='email'/>
    <ErrorMessage name='email' component='p' className='error'/>
    
    <label htmlFor='username'>Username</label>
    <Field type='text' name='username' />

    <label htmlFor='password'>Password</label>
    <Field type='password' name='password' />
   
    <input type='submit' value='save' className='save' />
</Form>
</Formik>
<hr/>
<div >
    {savedUsers.map((user, index) => (
      <div key={index} className='content'>
        <p><span>Email:</span>  {user.email}</p>
        <p><span>Username:</span>  {user.username}</p>
        <p ><span>Password:</span> {user.password}<i class="fa-solid fa-eye"></i></p>
    </div>
    ))}
    </div>

    </div>
  )
}
