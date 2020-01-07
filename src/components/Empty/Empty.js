import React from 'react';
import './Empty.css';

const Empty = props => {
    const { user } = props;
    const name = user.name.split(' ')[0];
    return (
      <div className="Empty">
        <h1 className="Empty__name">Welcome, {name}</h1>
        <img className="Empty__pic" src={user.profile_pic} alt={user.name} />
        <p className="Empty__status">
          <strong>Status: </strong>
          {user.status}
        </p>
        <button className="Empty__btn">Start a conversation</button>
        <p className="Empty__info">
          Search for someone to start chatting with or go to Contacts to see who
          is available
        </p>
      </div>
    );
}
 
export default Empty;