import React, { useState } from 'react'
import RenderColor from './RenderColor';


function Color() {
  const [color, setColor] = useState('');
  const onChangeHandle = (e) => {
    setColor(prevColor => prevColor = e.target.value);
  }
 if(color.length>6){
   RenderColor(color);
   setColor(prevColor => prevColor = '')
 }
  return (
    <div className='colorContainer'>
        <input className='colorInput' type='text' onChange={onChangeHandle} value={color}></input>
        <p className='colorP'></p>
    </div>
  )
}



export default Color
