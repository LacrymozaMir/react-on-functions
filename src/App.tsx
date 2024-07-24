import React from 'react'
import Todo from './components/Todo'
import './styles/app.css'

const App = () => {
  return (
    <main className='app'>
      <div className='container'>
        <Todo/>
      </div>
    </main>
  )
}

export default App
