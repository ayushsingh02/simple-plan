import { useState } from 'react'
import Header from './component/header'
import Home from './component/temp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Home/>
    </>
  )
}

export default App
