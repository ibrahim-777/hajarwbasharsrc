import React from 'react'
import { Container ,Row , Col} from 'reactstrap'
import './../Activity.css'
export default function Info() {
  return (
    <Container className='info text-end '>
      <Row className=''>
        <Col className="topic">
        <h1>مطعم رمضان</h1>
        </Col>
      </Row>
      <Row className="flex-row-reverse d-flex g-0">
        <Col className="cell " >
        <h4>: وصف المشروع</h4>
        </Col>
        <Col className=" flex-grow-1 flex-fill cell"  >
         <p>نشاط يهدف لتوزيع حصص الأفطار على العائلة المتعففة في شهر رمضان المبارك طوال فترة الصيام تتميز الحصة بكمستها ونوعيتها حيث تشمل الدجاج والسمك والرز حيث يستفيد من هذا النشاط 60 عائلة موزعة على كالم طرابلس</p>
        </Col>
      </Row>
      <Row xs='2' className="flex-row-reverse d-flex g-0">
        <Col className="cell flex-fill">
        <h4 className=''> : عدد المستفيدين </h4>
        </Col>
        <Col className='text-end cell flex-fill'><h4 className=''>60</h4></Col>
      </Row>
      <Row className="flex-row-reverse d-flex g-0">
        <Col className="cell">
        <h4 > : تكلفة الحصة الواحدة</h4>
        </Col>
        <Col className='text-end cell'><h4>4$</h4></Col>
      </Row>
      <Row className="flex-row-reverse d-flex g-0">
        <Col className="cell">
        <h4 >  : تكلفة المشروع</h4>
        </Col>
        <Col className='text-end cell'><h4>10500$</h4></Col>
      </Row>
      <Row className="flex-row-reverse d-flex g-0">
        <Col className="cell">
        <h4 > : عدد المتطوعين</h4>
        </Col>
        <Col className='text-end cell'><h4>25</h4></Col>
      </Row>
        </Container>
  )
}
