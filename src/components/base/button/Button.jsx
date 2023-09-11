import React from 'react'
import "./button.css"

export default function Button({ title, size, type}) {
  const styleObject = {
    width: size,
  };

  return (
    <>
      <button style={styleObject} className={`q-button q-button-${type}`}>{title}</button>
    </>
  )
}
