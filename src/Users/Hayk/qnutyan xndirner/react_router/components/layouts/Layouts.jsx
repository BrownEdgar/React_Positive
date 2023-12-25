import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'


export default function Layouts() {
  return (
    <div className='Layouts'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
