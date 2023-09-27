import React from 'react'
import './../Home/Home.css'
import { Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import Description from './Description'
import Vision from './Vision'
import Mission from './Mission'
export default function AboutusHome() {
  return (
    <div className='brief text-end justify-content-center'>
    <Row sm='3' className='row flex-row-reverse justify-content-around'>
<Description/>
<Vision/>
<Mission/>
    </Row>
<Link to='/AboutUs'><Button className='showmore'>أكمل القراءة</Button></Link>
  
    </div>
  )
}
