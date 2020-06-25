import React from 'react'

const Card = props => {
  return <div className="card">
    <div className="card-body">
      <h2 className="card-title">{props.name}</h2>
      <div className="card-text">
        <ul>
          {props.li.map(val => {
            return <li>{val}</li>
          })}
        </ul>
      </div>
      <a href={props.href} class="btn btn-primary">Learn more</a>
    </div>
  </div>
}

export default Card