import React from 'react'

import emails from './data/emails.json'
import Mail from './components/Mail'

function App (): JSX.Element {
  return (
    <Mail {...emails} />
  )
}

export default App
