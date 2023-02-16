import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import './assets/css/styles.css'

import Home from './pages/Home'
import WebcamTest from './pages/WebcamTest'
import Datas from './pages/Datas'
import SessionInProgress from './pages/SessionInProgress'
import SessionEnd from './pages/SessionEnd'

import './firebase_config'


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/webcam-test" element={<WebcamTest />}/>
          <Route path="/datas" element={<Datas />}/>
          <Route path="/session-in-progress" element={<SessionInProgress />}/>
          <Route path="/session-end" element={<SessionEnd />}/>
          <Route path="/*" element={<Home />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;