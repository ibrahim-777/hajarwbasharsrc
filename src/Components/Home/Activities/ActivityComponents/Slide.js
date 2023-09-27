import React from 'react'
import { Container } from 'react-bootstrap'
import './../../Activities/Activity.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
export default function Slide() {
  return (
    <Container className='slide'>
    <AwesomeSlider>
        <div data-src="https://scontent.fbey5-1.fna.fbcdn.net/v/t39.30808-6/339260665_621643373114605_2819004076127256706_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=zdviHQZwLNwAX_1riVh&_nc_ht=scontent.fbey5-1.fna&oh=00_AfBkZnaznlrpAFglrYKnsbfks3nx7bX7Rl2hJ54K5s54vQ&oe=6517241F" />
        <div data-src="https://scontent.fbey5-1.fna.fbcdn.net/v/t39.30808-6/339309025_183633714518314_1572897203952677593_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=xrdKmPPFXy8AX-ruVzr&_nc_ht=scontent.fbey5-1.fna&oh=00_AfAc5dIqTLleKUzYfQ0RsITtp4Mbhn885B77PummIY_SGg&oe=65188A87" />
        <div data-src="https://scontent.fbey5-2.fna.fbcdn.net/v/t39.30808-6/339303592_896409104767675_6947369208817928826_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Wb9yVa1iIN0AX-kzzvE&_nc_ht=scontent.fbey5-2.fna&oh=00_AfCw2rUZl8Xf-wAO85zUZQIJy3GiF_abzaj_h5382yRRbQ&oe=65185664" />
      </AwesomeSlider>
      <div className='captiondiv'><p className='caption'>مقتطفات من النشاط</p></div>
        </Container>
  )
}
