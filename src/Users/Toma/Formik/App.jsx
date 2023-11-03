import { ErrorMessage, Field, Form, Formik } from 'formik'
import  { useState } from 'react'
import  { number, object, string } from 'yup'
import './App.scss'


const validationSchema = object({
    username: string().matches(/^[A-Z]/,'must start with uppercase')
    .min(3)
    .max(23)
    .required(),
    age: number().positive().integer().min(18).max(98)

})

const initialValues ={username: '', age: ''}
export default function App() {
    const [users, setUsers] = useState([])


    const handleSubmit =(values, formik) =>{
        setUsers([...users, values]);
        formik.resetForm()

    }


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
    <Field type='text' name='username' />
    <ErrorMessage name='username' component='p' className='error'/>

    <Field type='number' name='age'/>
    <ErrorMessage name='age' component='span' className='error'/>

    <input type='submit' value='save' />
</Form>
</Formik>
    </div>
  )
}
