import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export default function Layaots() {
  return (
    <>
      <Navbar />
      <Outlet /> // նշանակում մի ուրիշ կոմպոնենտ, որը կախված է url ից
    </>
  )
}
