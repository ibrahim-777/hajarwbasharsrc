import React from 'react';
import logo from './../../assets/img/logo.svg';
import './../../App.css';
import {BsFacebook , BsInstagram , BsTwitter} from 'react-icons/bs'
export default function Footer() {
  return (
    <div style={{backgroundColor: "#921B1F" ,textAlign:"center" , height:"21em"}}>
        <div style={{}} ><img src={logo} style={{width:"10em",height:"10em" ,alignItems:"center"}} alt=""/></div>
<hr id="line"></hr>
<nav class="navbar navbar-expand-lg">
<div className="collapse navbar-collapse justified text-light" id="navbarText">
    <ul className="navbar-nav mr-auto mx-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" href="/">Term</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/">Cookies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/"> Privacy </a>
      </li>
       <li className="nav-item">
        <a className="nav-link text-light" href="/">Help</a>
      </li>
    </ul>
    </div>
    </nav>
<nav className='navbar navbar-expand-lg justify-content-between align-text-bottom'>
    <div className="d-flex justify-content-start text-light" style={{marginLeft:"0.5em"}}>@2023 HajarWBashar</div>
<div className=" d-flex justify-content-end text-light" style={{padding:"0 1em 0.2em 0"}}>
<a  target="_blank" href='https://m.facebook.com/hajarwbashar/' rel="noreferrer">
<BsFacebook style={{fontSize:'2em', margin:" 0 0.15em 0.1em"}}/></a>
<a target="_blank" href='https://instagram.com/hajarwbashar?igshid=NTc4MTIwNjQ2YQ==' rel="noreferrer">
<BsInstagram style={{fontSize:'2em' , margin:" 0 0.15em 0.1em"}}/>
</a>
<a target="_blank" href='https://twitter.com/hajarwbashar' rel="noreferrer">
<BsTwitter style={{fontSize:'2em' , margin:" 0 0.15em 0.1em"}}/>
</a>
</div>
</nav>
    </div>
  )
}
