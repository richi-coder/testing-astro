import React, { useState } from 'react'

function RealButton() {
    const [state, setState] = useState("")
    let hola;
    let salud;
    let perro;
  return (
    <>
    <h1>{state}</h1>
    <button onClick={() => setState("RICHI CODER HERE!")}>RealButton</button>
    </>
  )
}

export default RealButton