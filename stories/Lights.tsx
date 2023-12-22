import React from 'react'
import "./Lights.css"

type Props = {
  variant: "red" | "orange" | "green"
}

const Lights = ({variant}: Props) => {
  return (
    <div className={`light ${variant}`}></div>
  )
}

export default Lights;