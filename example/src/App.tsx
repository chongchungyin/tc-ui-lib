import React, { useEffect } from 'react'
import { Counter, AppBar, MyProvider,AppBar2 } from 'tc-ui-lib'

const App = () => {
  useEffect(() => {
    console.log('')
  })

  return <MyProvider>
    <AppBar2 />
  </MyProvider>
}

export default App
