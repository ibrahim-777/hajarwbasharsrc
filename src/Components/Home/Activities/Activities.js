import React from 'react'
import Activity from './Activity'
import './Activity.css'
import { Link } from 'react-router-dom'
import { Button  } from 'react-bootstrap'
export default function Activities() {
  return (
    <div style={{ margin:" 2em auto" , padding:"1.5em"}}>
      <h1 style={{textAlign:"center" ,font:"5em" , color:"#921B1F"}}>أنشطتنا</h1>
    <div className='row'>
    <Activity
    name="محاضرات أسبوعية" 
    description="محاضرات أسبوعية تهدف لنشر الوعي والثقافة لأعضاء حجر وبشر"
    img="https://scontent.fbey5-2.fna.fbcdn.net/v/t39.30808-6/348310928_2227425480778693_625556905566795546_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&ccb=1-7&_nc_sid=6b662e&efg=eyJpIjoidCJ9&_nc_ohc=ieA6DDMJ9z0AX-QKgxD&_nc_ht=scontent.fbey5-2.fna&oh=00_AfAdDmNvODNVGQMF0JWW-n3I8cEfE12bLMMS4QtoHmEDmA&oe=651634B6"
    />
       <Activity
    name="نشاط العيديات" 
    description="يهدف لتوزيع العيديات على الأطفال في اليوم الأول للعيد"
    img="https://scontent.fbey5-2.fna.fbcdn.net/v/t39.30808-6/341028698_779351903365168_7462922123048667906_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=K-z-alu5Oh8AX9XoJI9&_nc_ht=scontent.fbey5-2.fna&oh=00_AfC2SFU-gGX0MjemB2G2Opsnh2V6gqdQQv9UI6BSQsJ4oQ&oe=6517B732"
    />
       <Activity
    name=" مشروع الكسوة" 
    description="مشروع يهدف لتوزيع الملابس على العائلات المتعففة "
    img="https://scontent.fbey5-1.fna.fbcdn.net/v/t39.30808-6/341058520_1884352705265147_9003416599822486928_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=s-IT13Q9xE8AX-6s_Hl&_nc_ht=scontent.fbey5-1.fna&oh=00_AfBbMlZy7HBhhTT8gk6nrL5UMe4GOkjLzIrW_iMjSpp9BQ&oe=651661B9"
    />
       <Activity
    name="مطعم رمضان" 
    description="يهدف المشروع لتوزيع الحصص على العائلات المتعففة "
    img="https://scontent.fbey5-1.fna.fbcdn.net/v/t39.30808-6/339260665_621643373114605_2819004076127256706_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=zdviHQZwLNwAX_SKLag&_nc_ht=scontent.fbey5-1.fna&oh=00_AfAuk776gX-2O5fwxzidQRGhQvlLfFyCl8SCpSW4KC1U7g&oe=6517241F"
    />
    </div>
    <Link to='/AllActivities'><Button  className='showmore'> Show More </Button></Link>
    </div>
  )
}
