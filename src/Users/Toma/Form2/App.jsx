import React, { useState } from 'react'
import './App.scss'

export default function App() {
    const [divStyle, setdivStyle] = useState({
        background: '',
        borderRadius: '',
        width: '',
        height: ''
    })

  

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {width, height, radius, color} = e.target
        const rools = {
        background: color.value,
        width: `${width.value}px`,
        height: `${height.value}px`,
        borderRadius: `${radius.value}px`
        }
        setdivStyle(rools)
        e.target.reset()
}


  return (
    <div className='App'>
        <div className='item left'>
            <div className='box' style={divStyle}></div>
        </div>
        <div className='item rigth'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="width">Select width</label><br/>
                <input type='number' name='width' id='width' />
                <label htmlFor="height">Select height</label><br/>
                <input type='number' name='height' id='height' /> 
                <label htmlFor="radius">Radius</label><br/>
                <input type='number' name='radius' id='radius' /> 
                <label htmlFor="color">Select color</label><br/>
                <input type='color' name='color' id='color' /><br/> 
                <input type='submit' value='create'/>
            </form>
        </div>
    </div>
  )
}
