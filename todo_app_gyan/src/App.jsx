import { useState } from 'react'

import './App.css'
import Counter from './Components/Counter'
import Todoadd from './Components/Todoadd'

function App() {


  return (
    <div className="App">
      <Counter/>
      <Todoadd/>

    </div>
  )
}

export default App
//npx json-server db.json --port 8080 --watch
