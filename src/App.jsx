import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {Switch, Route, Link} from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import {NavBar} from './Components'

function App() {


  return (
    <div className="app">
      <div className="navbar">
          <NavBar/>
      </div>
      <div className="main">
          {/* <h1>s</h1> */}
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App
