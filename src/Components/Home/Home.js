import React from 'react'
import NavBar from './NavBar'
import Welcome from './Welcome';
import Footer from './Footer';
import Activities from './Activities/Activities';
import AboutusHome from '../AboutUs/AboutusHome';
export default function Home() {
  return (
    <div>
        <NavBar/>
        <Welcome/>
        <AboutusHome/>
        <Activities/> 
         <Footer/>
    </div>
  )
}
