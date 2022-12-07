import React from 'react'
import "./Button.css"
const Button = ({width,name,height}) => {
  return (
    <button className={`basic-btn ${width}`}>{name}</button>
  )
}

export default Button