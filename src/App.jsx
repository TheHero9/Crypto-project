import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'

import {NavBar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies, News} from './Components'

function App() {


  return (
    <div className="app">
      <div className="navbar">
          <NavBar/>
      </div>
      <div className="main">
          <Layout>
              <div className="routes">
                <Routes>
                  <Route exact path="/" element={<Homepage/>}/>
                  <Route exact path="/exchanges" element={<Exchanges/>}/>
                  <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                  <Route exact path="/crypto/:coinid" element={<CryptoDetails/>}/>
                  <Route exact path="/news" element={<News/>}/>
                </Routes>
              </div>
          </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App
