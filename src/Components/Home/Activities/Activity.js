import React from 'react'
import './Activity.css'
import { Link } from 'react-router-dom'
export default function Activity(props) {
  return (
    <div className="card text-end" style={{width: "18rem", margin:"1em 1em 1em 1.7em"}}>
    <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <Link to="/ActivityInfo/:id" className="btn bg-light  my-2 my-sm-0">المزيد من المعلومات</Link>
  </div>
</div>

  )
}
