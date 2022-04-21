import React from 'react'
import PropTypes from 'prop-types'

function RenderColor(props) {
  const color = props
  const p = document.querySelector('.colorP');
  const body = document.querySelector('body');
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  if(result){
  const rgb = `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
  return (
   p.textContent = rgb,
   body.style.backgroundColor = color
  
  )
}else{
  return p.textContent= '!Ошибка'
}
}

RenderColor.propTypes = {
  color: PropTypes.string.isRequired,
}

export default RenderColor
