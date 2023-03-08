import { useState } from 'react'

function RealButton() {
    const [state, setState] = useState("")

  return (
    <>
    <h1>{state}</h1>
    <button onClick={() => setState("RICHI CODER HERE!")}>React Button</button>
    </>
  )
}

export default RealButton