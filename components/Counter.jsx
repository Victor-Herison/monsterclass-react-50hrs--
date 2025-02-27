import { useState } from "react"
import '../style.css'
const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <div className="container">
        <h1>{count}</h1>
        <div>
          <button  onClick={() => setCount(count + 1)}> + </button>
          <button  onClick={() => setCount(count - 1)}> - </button>
          </div>
      
    </div>
  )
}

export default Counter
