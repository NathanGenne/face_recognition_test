import React from 'react'

import { Link } from 'react-router-dom';

import Header from '../components/Header'
import Footer from '../components/Footer'

import VideoUrl from '../assets/video/alien.mp4'

function SessionInProgress() {
  return (
    <div className="site-wrapper">
        <Header/>
        <main className="site-content">
            <div className="intro">
                <h1>Extrait : Alien, le huitième passager</h1>
                <div className="text-center">
                    <div className="video-wrapper">
                        <div className="emoticon-wrapper">
                            &#128512;
                        </div>
                        <video width="660" height="380" autoplay controls>
                            <source src={VideoUrl} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <p className="text-center">
                    <Link className="btn" to="/session-end" disabled>Suite du parcours</Link>
                </p>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default SessionInProgress