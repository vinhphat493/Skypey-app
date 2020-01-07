import React from 'react';

import './Header.css';

const Header = props => {
    const {name, status} = props.user
    return (
      <div className="Header">
        <h1 className="Header__name">{name}</h1>
        <p className="Header__status">{status}</p>
      </div>
    );
}
 
export default Header;