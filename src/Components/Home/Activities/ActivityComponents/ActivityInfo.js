import React from 'react'
import NavBar from '../../NavBar'
import Footer from '../../Footer'

import './../../Activities/Activity.css'
import Info from './Info'
import Slide from './Slide'
import { Container, Row } from 'reactstrap'

export default function ActivityInfo() {
  return (
<div className=''>
<NavBar/>
  <div className=' activityInfo'> 
  <Row className='d-flex justify-content-around'>
  <Slide/>
  <Info/>
  </Row>
  </div>
  <Footer/>
</div>
  )
}
