import React from "react";
import "./User.css";

import { store } from '../../redux/store';
import { setActiveUserId } from '../../redux/actions';

const User = ({ user, hasClicked }) => {
  const { name, profile_pic, status } = user;
  return (
    <div
      className={`User ${hasClicked ? "User__active" : ""}`}
      onClick={handleUserClick.bind(null, user)}
    >
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

function handleUserClick({ user_id }) {
  store.dispatch(setActiveUserId(user_id));
}

export default User;
