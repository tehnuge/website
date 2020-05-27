import React from 'react';

const HeaderComp = props => {
  return (
    <li className="dropdown">
      {props.name}
      <div className="dropdown-content">
        <div className="card">
          <div className="card-body">
            {props.body}
          </div>
        </div>
      </div>
    </li>
  )
}

export default HeaderComp


