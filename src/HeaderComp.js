import React from 'react';

const HeaderComp = props => {
  return (
    <li className="dropdown">
      {props.name}
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


