import { useState } from 'react'

function RealButton({children}) {
    const [state, setState] = useState("Who coded this mess?")
    const [color, setColor] = useState("blue")

  return (
    <div>
      <h2 style={{color: color}}>{state}</h2>
      <div
      onClick={() => {
        setState("Richi Coder"); setColor("red")
      }}
      >
        {children}
      </div>
    </div>
  )
}

export default RealButton