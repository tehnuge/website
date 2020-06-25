import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComp = props => {
  return (
    <li className="dropdown">
      <Link to={'/'+ props.name}>{props.name}</Link>
      <div className="dropdown-content">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{props.bodyTitle}</h3>
            {props.body}
          </div>
        </div>
      </div>
    </li>
  )
}

export default HeaderComp


