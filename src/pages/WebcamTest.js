import React from 'react'

import { Link } from 'react-router-dom';

import Header from '../components/Header'
import Footer from '../components/Footer'

import Webcam from '../models/Webcam'

function WebcamTest() {

    setInterval(() => console.log(document.getElementById('emotion')), 1000);

  return (
    <div className="site-wrapper">
        <Header/>
        <main className="site-content">
            <h1>Ajustement de la webcam</h1>
            <p>Placez-vous devant l'ordinateur de façon à ce que la webcam puisse voir tout votre visage. Vous allez
                constater que l'Ai peut déjà lire vos expressions.</p>
            <div className="text-center">
                <div className="video-wrapper">
                    <Webcam/>
                </div>
            </div>
            <p className="text-center">
                <Link className="btn" to="/session-in-progress">Suite du parcours</Link>
            </p>
        </main>
        <Footer/>
    </div>
  )
}

export default WebcamTest